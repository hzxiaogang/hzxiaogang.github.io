import{_ as n,o as a,c as l,ak as p,eu as o,ev as e}from"./chunks/framework.DLt_otXO.js";const h=JSON.parse('{"title":"二叉查找树","description":"","frontmatter":{"title":"二叉查找树","date":"2022-06-29T16:33:06.000Z","permalink":"/pages/1e291e/","categories":["数据结构和算法","数据结构","树"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/树/二叉查找树.md","filePath":"数据结构和算法/数据结构/树/二叉查找树.md","lastUpdated":1777258973000}'),c={name:"数据结构和算法/数据结构/树/二叉查找树.md"};function r(t,s,E,y,i,d){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><p><strong>二叉查找树</strong>又称<strong>二叉搜索树</strong>，二叉树本身没有多大意义，但是如果我们规定一个二叉树上的元素拥有顺序，所有比它小的元素在它的左子树，比它大的元素在它的右子树，那么我们就可以很快的查找元素了。这就是二叉查找树。</p><p>二叉查找树与二叉树不同的是，它在二叉树的基础上，增加了对二叉树上节点存储位置的限制。二叉查找树上每个节点都需要满足：</p><ul><li><ol><li>若它的左子树不为空，则左子树上所有的结点的值都小于根节点的值；</li></ol></li><li><ol start="2"><li>若它的右子树不为空，则右子树上所有的结点的值都大于根节点的值；</li></ol></li><li><ol start="3"><li>它的左右子树也分别为二叉查找树。</li></ol></li></ul><p>特性：中序遍历可以让结点有序。</p><img src="'+o+`"><p>在<strong>二叉树</strong>中，所有子节点值都是没有规律的，所以二叉树存储结构存储数据时，查找数据的时间复杂幅度为<strong>O(n)</strong>，因为它要查找每一个节点。</p><p>而使用了<strong>二叉查找树</strong>就不同了，例如上图，我们要查找<code>6</code>，先从根节点<code>10</code>比较，<code>6比</code>，<code>10</code>小，则查找左子树，再与<code>8</code>比较，<code>6</code>比<code>8</code>小，继续查找<code>8</code>的左子树，也就是<code>6</code>，我们找到了元素，结束。</p><h2 id="_2-基本操作" tabindex="-1">2. 基本操作 <a class="header-anchor" href="#_2-基本操作" aria-label="Permalink to “2. 基本操作”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> BinarySearchTree</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#B392F0;"> Node</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.key </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> key;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.right </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> root </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 插⼊</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insert</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 查找</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">search</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 删除</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">remove</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 最⼤值</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">max</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 最⼩值</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">min</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 中序遍历</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">inOrderTraverse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 先序遍历</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preOrderTraverse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 后序遍历</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">postOrderTraverse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-1-插入" tabindex="-1">2.1 插入 <a class="header-anchor" href="#_2-1-插入" aria-label="Permalink to “2.1 插入”">​</a></h3><ul><li><ol><li>首先创建一个节点</li></ol></li><li><ol start="2"><li>判断树是否为空，为空则设置插入的节点为根节点，插入成功，返回。</li></ol></li><li><ol start="3"><li>如果不为空，则比较该节点与根节点，比根小，插入左子树，否则插入右子树</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> insert</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建新节点</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> newNode </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Node</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#6A737D;">  // 判断是否为空树</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (root) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    insertNode</span><span style="color:#E1E4E8;">(root, newNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将 insertNode 插⼊到 node ⼦树上</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> insertNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">newNode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (newNode.key </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> node.key) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 插⼊ node 左⼦树</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      insertNode</span><span style="color:#E1E4E8;">(node.left, newNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 插⼊ node 右⼦树</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      insertNode</span><span style="color:#E1E4E8;">(node.right, newNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-2-删除" tabindex="-1">2.2 删除 <a class="header-anchor" href="#_2-2-删除" aria-label="Permalink to “2.2 删除”">​</a></h3><p>下图是<code>BST</code>树的删除情况</p><img src="`+e+`"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> remove</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  root </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> removeNode</span><span style="color:#E1E4E8;">(root, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> removeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> node.key) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> removeNode</span><span style="color:#E1E4E8;">(node.left, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> node.key) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> removeNode</span><span style="color:#E1E4E8;">(node.right, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // key = node.key 删除</span></span>
<span class="line"><span style="color:#6A737D;">    //叶⼦节点</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.left </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 只有⼀个⼦节点</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.right;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.left;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 有两个⼦节点</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取右⼦树的最⼩值替换当前节点</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> minRight </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> findMinNode</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.key </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minRight.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.right </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> removeNode</span><span style="color:#E1E4E8;">(node.right, minRight.key);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 获取 node 树最⼩节点</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> findMinNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.right;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-3-查找" tabindex="-1">2.3 查找 <a class="header-anchor" href="#_2-3-查找" aria-label="Permalink to “2.3 查找”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> searchNode</span><span style="color:#E1E4E8;">(root, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> searchNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">node) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> node.key) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> searchNode</span><span style="color:#E1E4E8;">(node.left, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> node.key) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> searchNode</span><span style="color:#E1E4E8;">(node.right, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-4-最小值" tabindex="-1">2.4 最小值 <a class="header-anchor" href="#_2-4-最小值" aria-label="Permalink to “2.4 最小值”">​</a></h3><p>最小值 ：树最左端的节点</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 最⼩值</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> min</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> node.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-5-最大值" tabindex="-1">2.5 最大值 <a class="header-anchor" href="#_2-5-最大值" aria-label="Permalink to “2.5 最大值”">​</a></h3><p>最大值 ：树最右端的节点</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 最⼤值</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> max</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.right;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> node.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-6-中序遍历" tabindex="-1">2.6 中序遍历 <a class="header-anchor" href="#_2-6-中序遍历" aria-label="Permalink to “2.6 中序遍历”">​</a></h3><p>由于<code>BST</code>树任意节点都大于左子节点值小于等于右子节点值的特性，所以中序遍历其实是对树进行<strong>排序操作</strong>，并且是俺从小到大的顺序排序。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> inOrderTraverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  inOrderTraverseNode</span><span style="color:#E1E4E8;">(root, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> inOrderTraverseNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 先遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    inOrderTraverseNode</span><span style="color:#E1E4E8;">(node.left, callback);</span></span>
<span class="line"><span style="color:#6A737D;">    // 然后根节点</span></span>
<span class="line"><span style="color:#B392F0;">    callback</span><span style="color:#E1E4E8;">(node.key);</span></span>
<span class="line"><span style="color:#6A737D;">    // 再遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    inOrderTraverseNode</span><span style="color:#E1E4E8;">(node.right, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// callback 每次将遍历到的结果打印到控制台</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> callback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-7-先序遍历" tabindex="-1">2.7 先序遍历 <a class="header-anchor" href="#_2-7-先序遍历" aria-label="Permalink to “2.7 先序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> preOrderTraverse</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  preOrderTraverseNode</span><span style="color:#E1E4E8;">(root, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> preOrderTraverseNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 先根节点</span></span>
<span class="line"><span style="color:#B392F0;">    callback</span><span style="color:#E1E4E8;">(node.key);</span></span>
<span class="line"><span style="color:#6A737D;">    // 然后遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    preOrderTraverseNode</span><span style="color:#E1E4E8;">(node.left, callback);</span></span>
<span class="line"><span style="color:#6A737D;">    // 再遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    preOrderTraverseNode</span><span style="color:#E1E4E8;">(node.right, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// callback 每次将遍历到的结果打印到控制台</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> callback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-8-后序遍历" tabindex="-1">2.8 后序遍历 <a class="header-anchor" href="#_2-8-后序遍历" aria-label="Permalink to “2.8 后序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> postOrderTraverse</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  postOrderTraverseNode</span><span style="color:#E1E4E8;">(root, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> postOrderTraverseNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 先遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    postOrderTraverseNode</span><span style="color:#E1E4E8;">(node.left, callback);</span></span>
<span class="line"><span style="color:#6A737D;">    // 然后遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">    postOrderTraverseNode</span><span style="color:#E1E4E8;">(node.right, callback);</span></span>
<span class="line"><span style="color:#6A737D;">    // 最后根节点</span></span>
<span class="line"><span style="color:#B392F0;">    callback</span><span style="color:#E1E4E8;">(node.key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// callback 每次将遍历到的结果打印到控制台</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> callback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-bst-树的局限性" tabindex="-1">3. BST 树的局限性 <a class="header-anchor" href="#_3-bst-树的局限性" aria-label="Permalink to “3. BST 树的局限性”">​</a></h2><p>在理想情况下，⼆叉树每多⼀层，可以存储的元素都增加⼀倍。也就是说 <code>n</code> 个元素的⼆叉搜索树，对应的树⾼为 <code>O(logn)</code>。所以我们查找元素、插⼊元素的时间也为 <code>O(logn)</code>。</p><p>当然这是理想情况下，但在实际应⽤中，并不是那么理想，例如⼀直递增或递减的给⼀个⼆叉查找树 插⼊数据，那么所有插⼊的元素就会⼀直出现在⼀个树的左节点上，数型结构就会退化为链表结构， 时间复杂度就会趋于 <code>O(n)</code>，这是不好的。</p><p>⽽我们上⾯的平衡树就可以很好的解决这个问题，所以平衡⼆叉查找树（<code>AVL</code> 树）由此诞⽣。</p>`,36)])])}const u=n(c,[["render",r]]);export{h as __pageData,u as default};
