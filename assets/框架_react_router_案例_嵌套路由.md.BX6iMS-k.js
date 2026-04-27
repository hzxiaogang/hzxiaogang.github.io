import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"案例_嵌套路由","description":"","frontmatter":{"title":"案例_嵌套路由","date":"2021-09-29T18:37:42.000Z","permalink":"/pages/12cde2/","categories":["框架","react_router"],"tags":[null]},"headers":[],"relativePath":"框架/react_router/案例_嵌套路由.md","filePath":"框架/react_router/案例_嵌套路由.md","lastUpdated":1777258973000}'),o={name:"框架/react_router/案例_嵌套路由.md"};function t(e,s,E,c,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="实现效果" tabindex="-1">实现效果 <a class="header-anchor" href="#实现效果" aria-label="Permalink to “实现效果”">​</a></h2><p>实现一个二级菜单效果。</p><p><a href="https://reactrouter.com/web/example/nesting" target="_blank" rel="noreferrer">效果地址</a></p><h3 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to “思路”">​</a></h3><p>其实路由嵌套的本质就是<strong>路由匹配器(Route)</strong>的嵌套。注意，路由嵌套中，<code>Link</code>的<code>to</code>属性，和<code>Route</code>的<code>path</code>属性必须是<code>全路径</code>。 如下面二级菜单组件<code>Topics</code>中的<code>LInk</code>和<code>path</code>，我们通过钩子<code>useRouteMatch</code>获取到上级的路径<code>path</code>，然后使用<code>path</code>和子路径组成<code>全路径</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ReactDOM </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  BrowserRouter </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> Router,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Switch,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Route,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Link,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useParams,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useRouteMatch,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-router-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Home</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;首页&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Topic</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> { topicId } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useParams</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;{topicId}&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Topics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> { path } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useRouteMatch</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;话题&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/rendering\`</span><span style="color:#E1E4E8;">}&gt;Rending with React&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/components\`</span><span style="color:#E1E4E8;">}&gt;Components&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/props-vs-state\`</span><span style="color:#E1E4E8;">}&gt;Props v. State&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{path} </span><span style="color:#B392F0;">exact</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          请选择一个话题</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/:topicId\`</span><span style="color:#E1E4E8;">} </span><span style="color:#B392F0;">component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{Topic}&gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#E1E4E8;">&gt;Home&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/topics&quot;</span><span style="color:#E1E4E8;">&gt;Topics&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#B392F0;"> component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{Home}&gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/topics&quot;</span><span style="color:#B392F0;"> component</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{Topics}&gt;&lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div>`,6)])])}const g=n(o,[["render",t]]);export{F as __pageData,g as default};
