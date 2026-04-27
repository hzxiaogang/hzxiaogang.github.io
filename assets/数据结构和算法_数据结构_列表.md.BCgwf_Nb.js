import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"列表","description":"","frontmatter":{"title":"列表","date":"2021-12-06T17:05:19.000Z","permalink":"/pages/27e391/","categories":["数据结构和算法","数据结构"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/列表.md","filePath":"数据结构和算法/数据结构/列表.md","lastUpdated":1777258973000}'),o={name:"数据结构和算法/数据结构/列表.md"};function e(t,s,c,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-简介" tabindex="-1">1.简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1.简介”">​</a></h2><p><strong>列表</strong>是一组<strong>有序的数据</strong>。每个列表中的数据项称为元素。在JavaScript中，列表的元素可以是任意数据类型。列表中可以保存多少元素并没有事先设定，实际使用时元素的数量收到程序的内存限制。</p><p>在日常生活中，人们经常使用列表：待办事项列表、购物清单、十佳榜单、最后十名榜单 等。计算机程序也在使用列表，尤其是列表中保存的元素不是太多时。当不需要在一个很 长的序列中查找元素，或者对其进行排序时，列表显得尤为有用。反之，如果数据结构非 常复杂，列表的作用就没有那么大了。</p><h2 id="_2-列表的抽象数据类型定义" tabindex="-1">2.列表的抽象数据类型定义 <a class="header-anchor" href="#_2-列表的抽象数据类型定义" aria-label="Permalink to “2.列表的抽象数据类型定义”">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性和方法</th><th style="text-align:center;">介绍</th></tr></thead><tbody><tr><td style="text-align:left;">listSize(属性)</td><td style="text-align:center;">列表的元素个数</td></tr><tr><td style="text-align:left;">pos(属性)</td><td style="text-align:center;">列表的当前位置</td></tr><tr><td style="text-align:left;">length(属性)</td><td style="text-align:center;">返回列表中元素的个数</td></tr><tr><td style="text-align:left;">clear(方法)</td><td style="text-align:center;">清空列表中的所有元素</td></tr><tr><td style="text-align:left;">toString(方法)</td><td style="text-align:center;">返回列表的字符串形式</td></tr><tr><td style="text-align:left;">getElement(方法)</td><td style="text-align:center;">返回当前位置的元素</td></tr><tr><td style="text-align:left;">insert(方法)</td><td style="text-align:center;">在现有元素后插入元素</td></tr><tr><td style="text-align:left;">append(方法)</td><td style="text-align:center;">在列表的末尾添加新元素</td></tr><tr><td style="text-align:left;">remove(方法)</td><td style="text-align:center;">从列表中删除元素</td></tr><tr><td style="text-align:left;">front(方法)</td><td style="text-align:center;">将列表的当前位置移动到第一个元素</td></tr><tr><td style="text-align:left;">end(方法)</td><td style="text-align:center;">将列表的当前位置移动到最后一个元素</td></tr><tr><td style="text-align:left;">pre(方法)</td><td style="text-align:center;">将当前位置前移一位</td></tr><tr><td style="text-align:left;">next(方法)</td><td style="text-align:center;">将当前位置后移一位</td></tr><tr><td style="text-align:left;">currPos(方法)</td><td style="text-align:center;">返回列表的当前位置</td></tr><tr><td style="text-align:left;">moveTo(方法)</td><td style="text-align:center;">将当前位置移动到指定位置</td></tr></tbody></table><h2 id="_3-实现列表" tabindex="-1">3. 实现列表 <a class="header-anchor" href="#_3-实现列表" aria-label="Permalink to “3. 实现列表”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> List</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dataStore </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [] </span><span style="color:#6A737D;">// 初始化一个空数组来保存列表元素</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.listSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#6A737D;"> // 初始化列表长度</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#6A737D;"> // 列表指针的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">// append 给列表添加元素 添加到最末 位置为 listSize的值</span></span>
<span class="line"><span style="color:#B392F0;"> append</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.dataStore[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.listSize</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element; </span><span style="color:#6A737D;">// 添加成功之后 列表长度 加一</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// find 从列表中 查找元素</span><span style="color:#6A737D;"> // 找到的时候返回下标，找不到 则返回 -1</span></span>
<span class="line"><span style="color:#B392F0;"> find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {d</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,l </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> l; i </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (element </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore[i]) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">return</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// inset 向列表中插入一个元素, 我们要将元素插入到 某一个元素的后面</span></span>
<span class="line"><span style="color:#B392F0;"> insert</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">after</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> insertPos </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(after); </span><span style="color:#6A737D;">// 找到元素的下标</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (insertPos </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dataStore.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(insertPos, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, element); </span><span style="color:#6A737D;">// 数组中插入元素</span></span>
<span class="line"><span style="color:#F97583;">    ++</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.listSize; </span><span style="color:#6A737D;">// 插入成功之后 列表的长度 +1</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 返回true,表示插入成功</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入失败</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// clear 清空列表中的所有元素</span></span>
<span class="line"><span style="color:#B392F0;"> clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  delete</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore; </span><span style="color:#6A737D;">// 删除类中存储数据的空间</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.dataStore </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []; </span><span style="color:#6A737D;">// 重新创建一个新的 空的 空间</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.listSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 将列表的长度和 位置初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// remove 从列表中删除元素</span></span>
<span class="line"><span style="color:#B392F0;">  remove</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> foundAt </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(element); </span><span style="color:#6A737D;">// 判断当前元素是否在列表中</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (foundAt </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dataStore.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(foundAt, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 如果 列表中存在 删除该元素</span></span>
<span class="line"><span style="color:#F97583;">    --</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.listSize; </span><span style="color:#6A737D;">// 删除之后 长度减一</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// length 列表中有多少个元素</span></span>
<span class="line"><span style="color:#B392F0;"> length</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.listSize; </span><span style="color:#6A737D;">// 返回列表的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// toString 显示列表中的元素</span></span>
<span class="line"><span style="color:#B392F0;"> toString</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore; </span><span style="color:#6A737D;">// 直接返回数组 即展示列表</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 判定 给定值是否在列表中</span></span>
<span class="line"><span style="color:#B392F0;"> contains</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;">  i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, l </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> l; i </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (element </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore[i]) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// front 将列表位置 移到第一个元素</span></span>
<span class="line"><span style="color:#B392F0;"> front</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// end 将列表位置 移动到最后一个元素</span></span>
<span class="line"><span style="color:#B392F0;"> end</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.listSize </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// prev 列表位置向前 移动一个位置</span></span>
<span class="line"><span style="color:#B392F0;"> prev</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 判断当前的位置是否 大于0</span></span>
<span class="line"><span style="color:#F97583;">    --</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pos;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// next 列表位置 向后移动一个位置</span></span>
<span class="line"><span style="color:#B392F0;"> next</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.listSize </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 判断当前的位置小于 列表最大位置</span></span>
<span class="line"><span style="color:#F97583;">    ++</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pos;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// currPos 返回列表当前位置</span></span>
<span class="line"><span style="color:#B392F0;"> currpos</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pos;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// moveTo 当前列表位置移动到</span></span>
<span class="line"><span style="color:#B392F0;"> moveTo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.pos </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> position;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// getElement 获取某个位置的 元素</span></span>
<span class="line"><span style="color:#B392F0;"> getElement</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dataStore[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pos];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> names </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> List</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">names.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gzt&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">names.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小方&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">names.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">names.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;校长&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// names.front();</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;第一个元素：&#39;, names.getElement());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// names.next();</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;向后移动一个后的元素：&#39;, names.getElement());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// names.next();</span></span>
<span class="line"><span style="color:#6A737D;">// names.next();</span></span>
<span class="line"><span style="color:#6A737D;">// names.prev();</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;向后移动两个之后 再向前移动一个：&#39;, names.getElement())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用迭代器 访问列表</span></span>
<span class="line"><span style="color:#6A737D;">// 与数组索引方式相比，使用迭代器的一些有点</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 1. 访问元素时 不必关心底层的数据存储结构</span></span>
<span class="line"><span style="color:#6A737D;"> * 2. 当为列表添加一个元素的时候，索引的值就不对了，此时只用更新列表，而不用更新迭代器</span></span>
<span class="line"><span style="color:#6A737D;"> * 3. 可以用不同的数据存储方式 实现cList 类，迭代器为访问列表里的元素提供了一种统一的方式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 迭代器访问</span></span>
<span class="line"><span style="color:#E1E4E8;"> names.</span><span style="color:#B392F0;">front</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 将列表的位置 移到第一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;第一个元素位置：&#39;</span><span style="color:#E1E4E8;">, names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// 第一个元素的位置</span></span>
<span class="line"><span style="color:#E1E4E8;"> names.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 列表位置后移</span></span>
<span class="line"><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;列表后移后位置：&#39;</span><span style="color:#E1E4E8;">, names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;列表长度：&#39;</span><span style="color:#E1E4E8;">, names.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 从前往后遍历</span></span>
<span class="line"><span style="color:#F97583;"> for</span><span style="color:#E1E4E8;"> (names.</span><span style="color:#B392F0;">front</span><span style="color:#E1E4E8;">(); names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> names.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">(); names.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;迭代器从前向后访问：&#39;</span><span style="color:#E1E4E8;">, names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 从后往前遍历 有缺陷，无法完全遍历</span></span>
<span class="line"><span style="color:#F97583;"> for</span><span style="color:#E1E4E8;"> (names.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(); names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; names.</span><span style="color:#B392F0;">prev</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;迭代器从后向前访问：&#39;</span><span style="color:#E1E4E8;">, names.</span><span style="color:#B392F0;">currPos</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span></code></pre></div>`,8)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
