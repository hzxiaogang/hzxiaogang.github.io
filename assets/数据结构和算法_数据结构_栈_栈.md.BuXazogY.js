import{_ as n,o as a,c as l,ak as p,el as o}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"栈","description":"","frontmatter":{"title":"栈","date":"2022-06-21T22:49:44.000Z","permalink":"/pages/c6f413/","categories":["数据结构和算法","数据结构","栈"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/栈/栈.md","filePath":"数据结构和算法/数据结构/栈/栈.md","lastUpdated":1777258973000}'),e={name:"数据结构和算法/数据结构/栈/栈.md"};function t(c,s,r,E,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_1-引言" tabindex="-1">1. 引言 <a class="header-anchor" href="#_1-引言" aria-label="Permalink to “1. 引言”">​</a></h2><p>本章节全方位解读前端用到的栈结构（调用栈，堆，垃圾回收等）。栈结构很简单，我们可以通过数组就能模拟出⼀个栈结构，但仅仅介绍栈结构就太不前端了，本节从栈结构开始延伸到浏览器中 JavaScript 运⾏机制，还有存储机制上⽤到的栈结构及相关数据结构，⼀⽂吃透所有的前端栈知识。</p><p>理解栈对于我们理解 JavaScript 语⾔⾄关᯿要，本⽂主要从以下⼏个⽅⾯介绍栈：</p><ul><li><ol><li>介绍栈以及代码实</li></ol></li><li><ol start="2"><li>介绍 JavaScript 运行机制及栈在其中的应用</li></ol></li><li><ol start="3"><li>详细介绍调⽤栈及我们开发中如何利⽤调⽤栈</li></ol></li><li><ol start="4"><li>JS 内存机制：栈（基本类型、引⽤类型地址）与堆（引⽤类型数据）</li></ol></li></ul><h2 id="_2-栈简介" tabindex="-1">2. 栈简介 <a class="header-anchor" href="#_2-栈简介" aria-label="Permalink to “2. 栈简介”">​</a></h2><p>栈是一种遵从<strong>后进先出</strong> （<code>LIFO/Last In First Out</code>）原则的<strong>有序集合</strong>，它的结构类似如下： <img src="'+o+`"></p><p>栈的操作主要有 ：<code>push(e)（进栈）</code>，<code>pop()（出栈）</code>，<code>isEmpty()（判断是否是空栈）</code>，<code>size()（栈大小）</code>以及<code>clear()（清空栈）</code>等，具体的实现也很简单。</p><h3 id="_1-es5-版本" tabindex="-1">1. ES5 版本 <a class="header-anchor" href="#_1-es5-版本" aria-label="Permalink to “1. ES5 版本”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Stack</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">push</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pop</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">size</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clear</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-es6-版本" tabindex="-1">2.ES6 版本 <a class="header-anchor" href="#_2-es6-版本" aria-label="Permalink to “2.ES6 版本”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Stack</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 入栈</span></span>
<span class="line"><span style="color:#B392F0;">  push</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(num);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 出栈（弹出栈顶元素）</span></span>
<span class="line"><span style="color:#B392F0;">  pop</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 查看栈顶元素</span></span>
<span class="line"><span style="color:#B392F0;">  peek</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 判断长度</span></span>
<span class="line"><span style="color:#B392F0;">  length</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 检查栈是否为空</span></span>
<span class="line"><span style="color:#B392F0;">  isEmpty</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 清空栈</span></span>
<span class="line"><span style="color:#B392F0;">  clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 打印 栈</span></span>
<span class="line"><span style="color:#B392F0;">  print</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,11)])])}const h=n(e,[["render",t]]);export{d as __pageData,h as default};
