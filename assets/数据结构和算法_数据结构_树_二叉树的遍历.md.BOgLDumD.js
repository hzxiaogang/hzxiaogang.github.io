import{_ as n,o as a,c as l,ak as p,ez as o,eA as e,eB as c,eC as r,eD as t}from"./chunks/framework.DLt_otXO.js";const B=JSON.parse('{"title":"二叉树的遍历","description":"","frontmatter":{"title":"二叉树的遍历","date":"2022-06-22T18:24:58.000Z","permalink":"/pages/c06f50/","categories":["数据结构和算法","数据结构","树"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/数据结构/树/二叉树的遍历.md","filePath":"数据结构和算法/数据结构/树/二叉树的遍历.md","lastUpdated":1777258973000}'),E={name:"数据结构和算法/数据结构/树/二叉树的遍历.md"};function y(i,s,d,F,h,u){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_0-准备" tabindex="-1">0. 准备 <a class="header-anchor" href="#_0-准备" aria-label="Permalink to “0. 准备”">​</a></h2><p>二叉树的遍历可分为：</p><ul><li>前序遍历</li><li>中序遍历</li><li>后序遍历</li></ul><p>所谓<code>前</code>，<code>中</code>，<code>后</code>，不过是<code>跟</code>的顺序，即也可以称为<code>先跟遍历</code>，<code>中跟遍历</code>，<code>后跟遍历</code>。遍历二叉树以下图为例子：</p><img src="'+o+`"> 转为数据结构即为： <div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> root</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  val: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    val: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#9ECBFF;">&quot;D&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#9ECBFF;">&quot;E&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  right: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    val: </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#9ECBFF;">&quot;F&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#9ECBFF;">&quot;G&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="_1-前序遍历" tabindex="-1">1. 前序遍历 <a class="header-anchor" href="#_1-前序遍历" aria-label="Permalink to “1. 前序遍历”">​</a></h2><p>对于二叉树中的任意一个节点，先打印该节点，然后是它的左子树，最后右子树。即顺序为<strong>根节点，左子树，右子树</strong><img src="`+e+'"></p><h3 id="_1-1-递归实现前序遍历" tabindex="-1">1.1 递归实现前序遍历 <a class="header-anchor" href="#_1-1-递归实现前序遍历" aria-label="Permalink to “1.1 递归实现前序遍历”">​</a></h3><p>遍历⼆叉树的过程也就是⼀个递归的过程，例如前序遍历，先遍历根节点，然后是根的左⼦ 树，最后右⼦树；遍历根节点的左⼦树的时候，⼜是先遍历左⼦树的根节点，然后左⼦树的左⼦树， 左⼦树的右⼦树…….</p><p>遍历过程如下图：</p><img src="'+c+`"><p>刚开始只有<strong>节点 1</strong>，<strong>节点 2</strong>，<strong>节点 3</strong>，一共三个节点。先序遍历的结果就是<code>1,2,3</code>。当给<strong>节点 2</strong> 再添加<strong>节点 4</strong> 和<strong>节点 5</strong> 的时候。再遍历这个树，上面<code>1,2,3</code>中<code>2</code>的位置就被遍历子树<code>2,4,5</code>代替。所以结果就是<code>1,2,4,5,3</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> preorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#B392F0;"> preOrderTraverseNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 先根节点</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.val);</span></span>
<span class="line"><span style="color:#6A737D;">      // 然后遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      preOrderTraverseNode</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#6A737D;">      // 再遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      preOrderTraverseNode</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#B392F0;">  preOrderTraverseNode</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="_1-2-迭代实现前序遍历" tabindex="-1">1.2 迭代实现前序遍历 <a class="header-anchor" href="#_1-2-迭代实现前序遍历" aria-label="Permalink to “1.2 迭代实现前序遍历”">​</a></h3><p>利⽤栈来记录遍历的过程，实际上，递归就使⽤了调⽤栈，所以这⾥我们可以使⽤栈来模拟递归的过 程。</p><ul><li><ol><li>⾸先根⼊栈</li></ol></li><li><ol start="2"><li>将根节点出栈，将根节点值放⼊结果数组中</li></ol></li><li><ol start="3"><li>然后遍历左⼦树、右⼦树，因为栈是先⼊后出，所以，我们先右⼦树⼊栈，然后左⼦树⼊栈</li></ol></li><li><ol start="4"><li>继续出栈（左⼦树被出栈）…….</li></ol></li></ul><p>依次循环出栈遍历⼊栈，直到栈为空，遍历完成</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 前序遍历</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> preorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> list</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 当根节点不为空的时候，将根节点⼊栈</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (root) stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> curNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">    // 第⼀步的时候，先访问的是根节点</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(curNode.val);</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们先打印左⼦树，然后右⼦树</span></span>
<span class="line"><span style="color:#6A737D;">    // 所以先加⼊栈的是右⼦树，然后左⼦树</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (curNode.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(curNode.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (curNode.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(curNode.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> list;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="_2-中序遍历" tabindex="-1">2. 中序遍历 <a class="header-anchor" href="#_2-中序遍历" aria-label="Permalink to “2. 中序遍历”">​</a></h2><p>对于⼆叉树中的任意⼀个节点，先打印它的左⼦树，然后是该节点，最后右⼦树。即顺序为<strong>左子树，根节点，右子树</strong><img src="`+r+`"></p><h3 id="_2-1-递归实现中序遍历" tabindex="-1">2.1 递归实现中序遍历 <a class="header-anchor" href="#_2-1-递归实现中序遍历" aria-label="Permalink to “2.1 递归实现中序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 中序遍历</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> inorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#B392F0;"> inorderTraversalNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 先遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      inorderTraversalNode</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#6A737D;">      // 再根节点</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.val);</span></span>
<span class="line"><span style="color:#6A737D;">      // 最后遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      inorderTraversalNode</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#B392F0;">  inorderTraversalNode</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="_2-2-迭代实现中序遍历" tabindex="-1">2.2 迭代实现中序遍历 <a class="header-anchor" href="#_2-2-迭代实现中序遍历" aria-label="Permalink to “2.2 迭代实现中序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 中序遍历</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> inorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> stack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历左⼦树</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">      node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.val);</span></span>
<span class="line"><span style="color:#E1E4E8;">    node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.right;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> list;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="_3-后序遍历" tabindex="-1">3. 后序遍历 <a class="header-anchor" href="#_3-后序遍历" aria-label="Permalink to “3. 后序遍历”">​</a></h2><p>对于⼆叉树中的任意⼀个节点，先打印它的左⼦树，然后是右⼦树，最后该节点。即顺序为<strong>左子树，右子树，根节点</strong><img src="`+t+`"></p><h3 id="_3-1-递归实现后序遍历" tabindex="-1">3.1 递归实现后序遍历 <a class="header-anchor" href="#_3-1-递归实现后序遍历" aria-label="Permalink to “3.1 递归实现后序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 后序遍历</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> postorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#B392F0;"> postorderTraversalNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 先遍历左⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      postorderTraversalNode</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#6A737D;">      // 再遍历右⼦树</span></span>
<span class="line"><span style="color:#B392F0;">      postorderTraversalNode</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#6A737D;">      // 最后根节点</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.val);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#B392F0;">  postorderTraversalNode</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="_3-2-迭代实现后序遍历" tabindex="-1">3.2 迭代实现后序遍历 <a class="header-anchor" href="#_3-2-迭代实现后序遍历" aria-label="Permalink to “3.2 迭代实现后序遍历”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 后序遍历</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> postorderTraversal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> list</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 当根节点不为空的时候，将根节点⼊栈</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (root) stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> node</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">    // 根左右=&gt;右左根</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(node.val);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 先进栈左⼦树后右⼦树</span></span>
<span class="line"><span style="color:#6A737D;">    // 出栈的顺序就变更为先右后左</span></span>
<span class="line"><span style="color:#6A737D;">    // 右先头插法⼊list</span></span>
<span class="line"><span style="color:#6A737D;">    // 左再头插法⼊list</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现右左根=&gt;左右根</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> list;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,32)])])}const _=n(E,[["render",y]]);export{B as __pageData,_ as default};
