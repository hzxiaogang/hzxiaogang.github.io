import{_ as n,o as a,c as l,V as p}from"./chunks/framework.364d6ed5.js";const o="/stack_1.png",s="/stack_2.png",e="/stack_3.png",c="/stack_4.png",t="/stack_5.png",_=JSON.parse('{"title":"调用栈","description":"","frontmatter":{"title":"调用栈","date":"2022-06-21T22:50:41.000Z","permalink":"/pages/ee125f/","categories":["数据结构和算法","数据结构","栈"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/栈/调用栈.md","filePath":"数据结构和算法/数据结构/栈/调用栈.md","lastUpdated":1685624511000}'),r={name:"数据结构和算法/数据结构/栈/调用栈.md"},i=p(`<h2 id="_1-调用栈的职责" tabindex="-1">1. 调用栈的职责 <a class="header-anchor" href="#_1-调用栈的职责" aria-label="Permalink to &quot;1. 调用栈的职责&quot;">​</a></h2><p>我们知道，在<code>JavaScript</code>中有很多函数，经常会出现一个函数调用另外一个函数的情况，<strong>调用栈就是用来管理函数调用关系的一种栈结构</strong>。那么它是如何管理<strong>函数调用关系</strong>的呢？我们举例说明：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数调⽤</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这段代码很简单，就是创建了⼀个 <code>add</code> 函数，然后调⽤了它。下⾯我们就⼀步步的介绍整个函数调⽤执⾏的过程。 在执⾏这段代码之前， <code>JavaScript</code>引擎会先创建⼀个<code>全局执⾏上下⽂</code>，包含所有已声明的函数与变量。</p><img src="`+o+'"><p>从图中可以看出，代码中的全局变量 <code>a</code> 及函数 <code>add</code> 保存在变量环境中。执⾏上下⽂准备好后，开始执⾏全局代码，⾸先执⾏ <code>a = 1</code> 的赋值操作。</p><img src="'+s+'"><p>赋值完成后 <code>a</code> 的值由 <code>undefined</code> 变为 <code>1</code>，然后执⾏ <code>add</code> 函数，<code>JavaScript</code> 判断出这是⼀个函数调 ⽤，然后执⾏以下操作：</p><ul><li><ol><li>⾸先，从全局执⾏上下⽂中，取出 <code>add</code> 函数代码</li></ol></li><li><ol start="2"><li>其次，对 <code>add</code> 函数的这段代码进⾏编译，并创建该函数的执⾏上下⽂和可执⾏代码，并将执⾏上下⽂<strong>压⼊栈中</strong></li></ol></li></ul><img src="'+e+'"><ul><li><ol start="3"><li>然后，执⾏代码，返回结果，并将 add 的执⾏上下⽂也会从栈顶部弹出，此时调⽤栈中就只剩下全局上下⽂了。</li></ol></li></ul><img src="'+s+'"><p>⾄此，整个函数调⽤执⾏结束了。</p><p>所以说，<strong>调⽤栈</strong>是 <code>JavaScript</code> ⽤来<strong>管理函数执⾏上下⽂</strong>的⼀种<strong>数据结构</strong>，它记录了当前函数执⾏的 位置，哪个函数正在被执⾏。 如果我们执⾏⼀个函数，就会为函数创建执⾏上下⽂并放⼊栈顶。 如 果我们从<strong>函数返回</strong>，就将它的执⾏上下⽂从<strong>栈顶弹出</strong>。 也可以说调⽤栈是⽤来管理这种执⾏上下⽂的 栈，或称执⾏上下⽂栈（执⾏栈）。</p><h2 id="_2-栈溢出" tabindex="-1">2. 栈溢出 <a class="header-anchor" href="#_2-栈溢出" aria-label="Permalink to &quot;2. 栈溢出&quot;">​</a></h2><p>在我们执⾏ JavaScript 代码的时候，有时会出现栈溢出的情况： <img src="'+c+`"></p><p>上图就是⼀个典型的栈溢出，那为什么会出现这种错误呢？我们知道<strong>调⽤栈</strong>是⽤来管理执⾏上下⽂的⼀种数据结构，它是<strong>有⼤⼩</strong>的，当⼊栈的上下⽂过多的时候，它就会报栈溢出，例如：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>add</code> 函数不断的递归，不断的<code>⼊栈</code>，调⽤栈的容量有限，它就溢出了，所以，我们⽇常的开发中，⼀定要注意此类代码的出现。</p><h2 id="_3-在浏览器中获取调用栈信息" tabindex="-1">3. 在浏览器中获取调⽤栈信息 <a class="header-anchor" href="#_3-在浏览器中获取调用栈信息" aria-label="Permalink to &quot;3. 在浏览器中获取调⽤栈信息&quot;">​</a></h2><p>在浏览器中获取调⽤栈信息有两种⽅式，⼀种是<strong>断点调试</strong>，这种很简单，我们⽇常开发中都⽤过。 ⼀种是 <code>console.trace()</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trace</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数调⽤</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><img src="`+t+'">',23),d=[i];function F(y,D,A,u,C,b){return a(),l("div",null,d)}const g=n(r,[["render",F]]);export{_ as __pageData,g as default};
