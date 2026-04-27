import{_ as n,o as a,c as l,ak as p,eZ as o}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"广度优先搜索算法","description":"","frontmatter":{"title":"广度优先搜索算法","date":"2022-06-08T18:46:59.000Z","permalink":"/pages/441a1f/","categories":["数据结构和算法","算法"],"tags":[null]},"headers":[],"relativePath":"数据结构和算法/算法/广度优先搜索算法.md","filePath":"数据结构和算法/算法/广度优先搜索算法.md","lastUpdated":1777258973000}'),e={name:"数据结构和算法/算法/广度优先搜索算法.md"};function c(E,s,t,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p('<h2 id="_1-遍历模型" tabindex="-1">1. 遍历模型 <a class="header-anchor" href="#_1-遍历模型" aria-label="Permalink to “1. 遍历模型”">​</a></h2><img src="'+o+`"><h2 id="_2-数据结构" tabindex="-1">2. 数据结构 <a class="header-anchor" href="#_2-数据结构" aria-label="Permalink to “2. 数据结构”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> root</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><h2 id="_3-遍历方法" tabindex="-1">3. 遍历方法 <a class="header-anchor" href="#_3-遍历方法" aria-label="Permalink to “3. 遍历方法”">​</a></h2><h3 id="_3-2-队列-先进先出" tabindex="-1">3.2 队列（先进先出） <a class="header-anchor" href="#_3-2-队列-先进先出" aria-label="Permalink to “3.2 队列（先进先出）”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">treeNode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> res</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> treeNode.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> node</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.id);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> length</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> node.children </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> node.children.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.children[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">(root); </span><span style="color:#6A737D;">// [1,2,3,4,5,6,7]</span></span></code></pre></div>`,7)])])}const h=n(e,[["render",c]]);export{F as __pageData,h as default};
