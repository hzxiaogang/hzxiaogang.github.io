import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"案例_侧边栏","description":"","frontmatter":{"title":"案例_侧边栏","date":"2021-10-11T19:41:25.000Z","permalink":"/pages/0dd2fe/","categories":["框架","react_router"],"tags":[null]},"headers":[],"relativePath":"框架/react_router/案例_侧边栏.md","filePath":"框架/react_router/案例_侧边栏.md","lastUpdated":1777258973000}'),o={name:"框架/react_router/案例_侧边栏.md"};function t(e,s,E,c,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="实现效果" tabindex="-1">实现效果 <a class="header-anchor" href="#实现效果" aria-label="Permalink to “实现效果”">​</a></h2><p>网站的侧边栏效果</p><p><a href="https://reactrouter.com/web/example/sidebar" target="_blank" rel="noreferrer">效果地址</a></p><h2 id="设计思路" tabindex="-1">设计思路 <a class="header-anchor" href="#设计思路" aria-label="Permalink to “设计思路”">​</a></h2><ul><li><ol><li>遍历路由配置文件，动态生成路由匹配器</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ReactDOM </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserRouter </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> Router, Route, Link, Switch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-router-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#E1E4E8;">&gt;home&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">&gt;about&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/list&quot;</span><span style="color:#E1E4E8;">&gt;list&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {routes.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">Route</span></span>
<span class="line"><span style="color:#B392F0;">              path</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{item.path}</span></span>
<span class="line"><span style="color:#B392F0;">              component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{item.component}</span></span>
<span class="line"><span style="color:#B392F0;">              key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{index}</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Home</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;home&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> About</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;about&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> List</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;list&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> routes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#E1E4E8;">, component: Home },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">, component: About },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/list&quot;</span><span style="color:#E1E4E8;">, component: List },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;, document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",t]]);export{F as __pageData,u as default};
