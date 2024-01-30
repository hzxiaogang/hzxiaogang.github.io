import{_ as s,o as n,c as a,V as l}from"./chunks/framework.364d6ed5.js";const p="/stack_6.png",A=JSON.parse('{"title":"内存机制","description":"","frontmatter":{"title":"内存机制","date":"2022-06-21T22:51:00.000Z","permalink":"/pages/e409ca/","categories":["数据结构和算法","数据结构","栈"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/栈/JS内存机制.md","filePath":"数据结构和算法/数据结构/栈/JS内存机制.md","lastUpdated":1685624511000}'),o={name:"数据结构和算法/数据结构/栈/JS内存机制.md"},e=l(`<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h2><p><code>JavaScript</code> 中的内存空间主要分为三种类型：</p><ul><li><ol><li>代码空间：主要⽤来存放可执⾏代码</li></ol></li><li><ol start="2"><li>栈空间：调⽤栈的存储空间就是栈空间。</li></ol></li><li><ol start="3"><li>堆空间</li></ol></li></ul><p>代码空间主要⽤来存放可执⾏代码的。<code>栈空间</code>及<code>堆空间</code>主要⽤来<code>存放数据</code>的。接下来我们主要介绍栈 空间及堆空间。</p><p>JavaScript 中的变量类型有 8 种，可分为两类：基本类型、引⽤类型</p><ul><li><ol><li>基本类型(值类型)</li></ol><ul><li>string</li><li>number</li><li>undefined</li><li>null</li><li>symbol</li><li>bigint</li></ul></li><li><ol start="2"><li>引用类型</li></ol><ul><li>Object</li></ul></li></ul><p>其中，基本类型是保存在栈内存中的简单数据段，⽽引⽤类型保存在堆内存中。</p><h2 id="_2-栈空间" tabindex="-1">2. 栈空间 <a class="header-anchor" href="#_2-栈空间" aria-label="Permalink to &quot;2. 栈空间&quot;">​</a></h2><p>基本类型在内存中占有<strong>固定⼤⼩的空间</strong>，所以它们的值保存在栈空间，我们通过<strong>按值访问</strong> 。 ⼀般栈空间不会很⼤。</p><h2 id="_3-堆空间" tabindex="-1">3. 堆空间 <a class="header-anchor" href="#_3-堆空间" aria-label="Permalink to &quot;3. 堆空间&quot;">​</a></h2><p>引⽤类型，值⼤⼩不固定，但指向值的<strong>指针⼤⼩</strong>（内存地址）是固定的，所以<strong>把对象放⼊堆中</strong>，将对 象的<strong>地址</strong>放⼊<strong>栈</strong>中，这样，在调⽤栈中切换上下⽂时，只需要将指针下移到上个执⾏上下⽂的地址就 可以了，同时保证了栈空间不会很⼤。</p><p>当查询引⽤类型的变量时， 先从<strong>栈</strong>中<strong>读取内存地址</strong>， 然后再通过地址找到堆中的值。对于这种，我 们把它叫做 <strong>按引⽤访问</strong> 。 ⼀般堆内存空间很⼤，能存放很多数据，但它内存分配与回收都需要花费⼀定的时间。</p><p>举个例⼦帮助理解⼀下：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">an</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数调⽤</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><img src="`+p+`"><p>基本类型（栈空间）与引⽤类型（堆空间）的存储⽅式决定了：基本类型赋值是<strong>值赋值</strong>，⽽引⽤类型赋值是<strong>地址赋值</strong>。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 值赋值</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// b 不变</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 地址赋值</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">an</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a1</span></span>
<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bottle</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b1)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {name: &quot;bottle&quot;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// b1 值改变</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,17),t=[e];function r(c,i,y,D,F,C){return n(),a("div",null,t)}const u=s(o,[["render",r]]);export{A as __pageData,u as default};
