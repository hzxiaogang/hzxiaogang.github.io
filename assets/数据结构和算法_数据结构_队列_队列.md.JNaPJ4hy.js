import{_ as n,o as a,c as l,ak as p,eX as o}from"./chunks/framework.DLt_otXO.js";const u=JSON.parse('{"title":"队列","description":"","frontmatter":{"title":"队列","date":"2022-06-22T17:23:20.000Z","permalink":"/pages/5fb453/","categories":["数据结构和算法","数据结构","队列"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/队列/队列.md","filePath":"数据结构和算法/数据结构/队列/队列.md","lastUpdated":1777258973000}'),e={name:"数据结构和算法/数据结构/队列/队列.md"};function t(c,s,r,E,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><p>队列和栈类似，不同的是队列是<strong>先进先出</strong>（<code>FIFO</code>）原则的有序集合，它的结构类似如下： <img src="'+o+`"> 常见的队列操作有：</p><ul><li><ol><li>进队 ：enqueue(e)</li></ol></li><li><ol start="2"><li>出队 ：dequeue() 出队</li></ol></li><li><ol start="3"><li>是否是空队列 ：isEmpty()</li></ol></li><li><ol start="4"><li>获取队头元素 ：front()</li></ol></li><li><ol start="5"><li>清空队列 ： clear()</li></ol></li><li><ol start="6"><li>获取队列长度 ： size()</li></ol></li></ul><h2 id="_2-实现" tabindex="-1">2. 实现 <a class="header-anchor" href="#_2-实现" aria-label="Permalink to “2. 实现”">​</a></h2><h3 id="_2-1-es5" tabindex="-1">2.1 ES5 <a class="header-anchor" href="#_2-1-es5" aria-label="Permalink to “2.1 ES5”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Queue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">enqueue</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dequeue</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">front</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clear</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">size</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-2-es6" tabindex="-1">2.2 ES6 <a class="header-anchor" href="#_2-2-es6" aria-label="Permalink to “2.2 ES6”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Queue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 入队</span></span>
<span class="line"><span style="color:#B392F0;">  enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 出队</span></span>
<span class="line"><span style="color:#B392F0;">  dequeue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  isEmpty</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取队首元素，peek操作</span></span>
<span class="line"><span style="color:#B392F0;">  front</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  get</span><span style="color:#B392F0;"> size</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,8)])])}const d=n(e,[["render",t]]);export{u as __pageData,d as default};
