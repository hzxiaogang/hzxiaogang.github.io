import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const i=JSON.parse('{"title":"案例_递归路径","description":"","frontmatter":{"title":"案例_递归路径","date":"2021-10-11T19:22:16.000Z","permalink":"/pages/b64230/","categories":["框架","react_router"],"tags":[null]},"headers":[],"relativePath":"框架/react_router/案例_递归路径.md","filePath":"框架/react_router/案例_递归路径.md","lastUpdated":1777258973000}'),o={name:"框架/react_router/案例_递归路径.md"};function e(t,s,E,c,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="递归路径" tabindex="-1">递归路径 <a class="header-anchor" href="#递归路径" aria-label="Permalink to “递归路径”">​</a></h2><p>递归路径是使用嵌套路由，通过调用同一组件来显示嵌套视图的路径。</p><p><a href="https://reactrouter.com/web/example/recursive-paths" target="_blank" rel="noreferrer">效果地址</a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ReactDOM </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  BrowserRouter </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> Router,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Switch,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Route,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Link,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Redirect,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useParams,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useRouteMatch,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;react-router-dom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/:id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Person</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Redirect</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Person</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> { url } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useRouteMatch</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> { id } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useParams</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> person </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> find</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{person.name}’s Friends&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {person.friends.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{id}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">Link</span><span style="color:#B392F0;"> to</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">}&gt;{</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(id).name}&lt;/</span><span style="color:#79B8FF;">Link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Route</span><span style="color:#B392F0;"> path</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}/:id\`</span><span style="color:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">Person</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> PEEPS</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;Michelle&quot;</span><span style="color:#E1E4E8;">, friends: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;Sean&quot;</span><span style="color:#E1E4E8;">, friends: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;Kim&quot;</span><span style="color:#E1E4E8;">, friends: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;David&quot;</span><span style="color:#E1E4E8;">, friends: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> PEEPS</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> p.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> id);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;, document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div>`,4)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
