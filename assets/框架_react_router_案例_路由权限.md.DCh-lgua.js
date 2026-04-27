import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"案例_路由权限","description":"","frontmatter":{"title":"案例_路由权限","date":"2021-10-11T14:46:39.000Z","permalink":"/pages/1c3621/","categories":["框架","react_router"],"tags":[null]},"headers":[],"relativePath":"框架/react_router/案例_路由权限.md","filePath":"框架/react_router/案例_路由权限.md","lastUpdated":1777258973000}'),o={name:"框架/react_router/案例_路由权限.md"};function t(e,s,E,c,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="实现效果" tabindex="-1">实现效果 <a class="header-anchor" href="#实现效果" aria-label="Permalink to “实现效果”">​</a></h2><p>只有登录后才能访问被保护的路由</p><p><a href="https://reactrouter.com/web/example/auth-workflow" target="_blank" rel="noreferrer">效果地址</a></p><h2 id="思路分析" tabindex="-1">思路分析 <a class="header-anchor" href="#思路分析" aria-label="Permalink to “思路分析”">​</a></h2><ul><li><ol><li>封装顶级组件 <code>ProvideAuth</code>利用<code>Context</code>实现跨级组件通信 , 这里传的是一个<code>auth</code>对象。里面包含了登录登出方法，以及判断是否登录的字段。<code>ProvideAuth</code>组件作为顶级组件，包裹<strong>路由器</strong></li></ol></li><li><ol start="2"><li>自定义需要权限验证的路由匹配器<code>PrivateRoute</code>，自定义渲染方式。当我们的自定义路由匹配器<code>PrivateRoute</code>的 path 匹配到 <code>/protected</code>路径时，就会执行<code>PrivateRoute</code>的渲染逻辑。</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ReactDOM </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createContext, useContext, useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  BrowserRouter </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> Router,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Switch,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Link,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Route,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Redirect,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useHistory,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useLocation,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-router-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 跨级传递的数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> fakeAuth</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  isAuthenticated: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  signin</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fakeAuth.isAuthenticated </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(cb, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  signout</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fakeAuth.isAuthenticated </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(cb, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 创建上下文</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> authContext</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> useAuth</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> useContext</span><span style="color:#E1E4E8;">(authContext);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> useProvideAuth</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setUser</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> signin</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> fakeAuth.</span><span style="color:#B392F0;">signin</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      cb</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> signout</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> fakeAuth.</span><span style="color:#B392F0;">signout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      cb</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    user,</span></span>
<span class="line"><span style="color:#E1E4E8;">    signin,</span></span>
<span class="line"><span style="color:#E1E4E8;">    signout,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> ProvideAuth</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> auth</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useProvideAuth</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(auth);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">authContext.Provider</span><span style="color:#B392F0;"> value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{auth}&gt;{children}&lt;/</span><span style="color:#79B8FF;">authContext.Provider</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">ProvideAuth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">AuthButton</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">AuthButton</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/public&quot;</span><span style="color:#E1E4E8;">&gt;Public Page&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/protected&quot;</span><span style="color:#E1E4E8;">&gt; Protected Page&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/public&quot;</span><span style="color:#B392F0;"> component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{PublicPage}&gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/login&quot;</span><span style="color:#B392F0;"> component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{LoginPage}&gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">PrivateRoute</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/protected&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              &lt;</span><span style="color:#79B8FF;">ProtectedPage</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#79B8FF;">PrivateRoute</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">ProvideAuth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义路由匹配器</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> PrivateRoute</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">rest</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> auth </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAuth</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Route</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rest}</span></span>
<span class="line"><span style="color:#B392F0;">      render</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{({ </span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth.user </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          children</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Redirect</span></span>
<span class="line"><span style="color:#B392F0;">            to</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{</span></span>
<span class="line"><span style="color:#E1E4E8;">              pathname: </span><span style="color:#9ECBFF;">&quot;/login&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              state: { from: location },</span></span>
<span class="line"><span style="color:#E1E4E8;">            }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> AuthButton</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> history </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useHistory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> auth </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAuth</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> auth.user </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Welcome!{</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          auth.</span><span style="color:#B392F0;">signout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> history.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Sign out</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;You are not logged in.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> PublicPage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;Public&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> ProtectedPage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;Protected&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> LoginPage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> history </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useHistory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> location </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useLocation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> auth </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAuth</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> { from } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> location.state </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> { from: { pathname: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;"> } };</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#B392F0;"> login</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    auth.</span><span style="color:#B392F0;">signin</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      history.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(from);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;You must log in to view the page at {from.pathname}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{login}&gt;Log in&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;, document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",t]]);export{F as __pageData,u as default};
