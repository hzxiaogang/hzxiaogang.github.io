import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const i=JSON.parse('{"title":"发布_订阅模式","description":"","frontmatter":{"title":"发布_订阅模式","date":"2021-11-25T18:11:25.000Z","permalink":"/pages/205e1e/","categories":["设计模式"],"tags":[null]},"headers":[],"relativePath":"设计模式/发布_订阅模式.md","filePath":"设计模式/发布_订阅模式.md","lastUpdated":1777258973000}'),o={name:"设计模式/发布_订阅模式.md"};function e(c,s,E,t,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to “定义”">​</a></h2><p><code>发布-订阅模式</code>定义了<code>对象</code>间的一种<code>一对多</code>的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。JS 中常使用<code>注册回调函数</code>的形式来订阅。</p><p>在发布订阅模式里，发布者，并不会直接通知订阅者，换句话说，<code>发布者</code>和<code>订阅者</code>彼此<code>互不相识</code>。那它们是如何交流的呢？由一个<code>调度中心</code>来做中间人，发布者更新(publish)主题，由主题(调度中心)来进行通知(notify)订阅者更新(update)</p><h3 id="class-面向对象实现" tabindex="-1">class 面向对象实现 <a class="header-anchor" href="#class-面向对象实现" aria-label="Permalink to “class 面向对象实现”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 主题</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Dep</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []; </span><span style="color:#6A737D;">// 主题的订阅者</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.callback </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> callback;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  //添加订阅者</span></span>
<span class="line"><span style="color:#B392F0;">  addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(sub);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 主题更新通知 --- 调用订阅者update</span></span>
<span class="line"><span style="color:#B392F0;">  notify</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callback));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 订阅者</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Sub</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.val </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> callback</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.val);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;更新之后：&quot;</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.val);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//发布者</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Pub</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []; </span><span style="color:#6A737D;">//发布的主题列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 添加主题</span></span>
<span class="line"><span style="color:#B392F0;">  addDep</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(dep);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 移除主题</span></span>
<span class="line"><span style="color:#B392F0;">  removeDep</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(dep);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">!=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 发布主题</span></span>
<span class="line"><span style="color:#B392F0;">  publish</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> dep </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建主题，并给主题添加订阅者</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dep1 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Dep</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> item);</span></span>
<span class="line"><span style="color:#E1E4E8;">dep1</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Sub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Sub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Sub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建发布者，并添加主题</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pub </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Pub</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">pub.</span><span style="color:#B392F0;">addDep</span><span style="color:#E1E4E8;">(dep1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发布者发布，通知这个主题的所有订阅者更新</span></span>
<span class="line"><span style="color:#E1E4E8;">pub.</span><span style="color:#B392F0;">publish</span><span style="color:#E1E4E8;">(dep1);</span></span></code></pre></div><h3 id="js-event-实现" tabindex="-1">js event 实现 <a class="header-anchor" href="#js-event-实现" aria-label="Permalink to “js event 实现”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Event</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.handlers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">Event</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 订阅事件</span></span>
<span class="line"><span style="color:#B392F0;">  on</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(eventType </span><span style="color:#F97583;">in</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.handlers)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.handlers[eventType] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.handlers[eventType].</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(handler);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 触发事件(发布事件)</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    var</span><span style="color:#E1E4E8;"> handlerArgs </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.handlers[eventType].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.handlers[eventType][i].</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, handlerArgs);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 删除订阅事件</span></span>
<span class="line"><span style="color:#B392F0;">  off</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    var</span><span style="color:#E1E4E8;"> currentEvent </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.handlers[eventType];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentEvent.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentEvent.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> Publisher </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Event</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//订阅事件a</span></span>
<span class="line"><span style="color:#E1E4E8;">Publisher.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> e);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">Publisher.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> e);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//触发事件a</span></span>
<span class="line"><span style="color:#E1E4E8;">Publisher.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;我是第1次调用&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Publisher.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;我是第2次调用&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div>`,7)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
