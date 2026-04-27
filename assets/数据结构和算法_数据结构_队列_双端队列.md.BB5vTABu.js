import{_ as n,o as a,c as l,ak as p,eV as o}from"./chunks/framework.DLt_otXO.js";const B=JSON.parse('{"title":"双端队列","description":"","frontmatter":{"title":"双端队列","date":"2022-06-22T17:23:30.000Z","permalink":"/pages/88a571/","categories":["数据结构和算法","数据结构","队列"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/队列/双端队列.md","filePath":"数据结构和算法/数据结构/队列/双端队列.md","lastUpdated":1777258973000}'),e={name:"数据结构和算法/数据结构/队列/双端队列.md"};function t(c,s,r,E,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_1-简介" tabindex="-1">1.简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1.简介”">​</a></h2><p><code>Deque</code>在原有队列的基础上扩充了:<strong>对头</strong>和<strong>对尾</strong>都可以进队出队，它的数据结构如下： <img src="'+o+`"></p><h2 id="_2-实现" tabindex="-1">2. 实现 <a class="header-anchor" href="#_2-实现" aria-label="Permalink to “2. 实现”">​</a></h2><h3 id="_2-1-es5" tabindex="-1">2.1 ES5 <a class="header-anchor" href="#_2-1-es5" aria-label="Permalink to “2.1 ES5”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Deque</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> this.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addFirst</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFirst</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addLast</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeLast</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">front</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clear</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">size</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-2-es6" tabindex="-1">2.2 ES6 <a class="header-anchor" href="#_2-2-es6" aria-label="Permalink to “2.2 ES6”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Deque</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  addFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  removeFirst</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  addLast</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  removeLast</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  isEmpty</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  front</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  get</span><span style="color:#B392F0;"> size</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,7)])])}const h=n(e,[["render",t]]);export{B as __pageData,h as default};
