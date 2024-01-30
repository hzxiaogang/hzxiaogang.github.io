import{_ as s,o as a,c as n,V as l}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"手写file-loader","description":"","frontmatter":{"title":"手写file-loader","date":"2022-07-12T15:38:48.000Z","permalink":"/pages/831084/","categories":["modules","webpack","loader原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/loader原理/手写file-loader.md","filePath":"modules/webpack/loader原理/手写file-loader.md","lastUpdated":1685623283000}'),p={name:"modules/webpack/loader原理/手写file-loader.md"},e=l(`<p>作用：将文件原封不动输出出去</p><h2 id="_1-下载-loader" tabindex="-1">1. 下载 loader <a class="header-anchor" href="#_1-下载-loader" aria-label="Permalink to &quot;1. 下载 loader&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i loader</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">utils </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="file-loader-js" tabindex="-1">file-loader.js <a class="header-anchor" href="#file-loader-js" aria-label="Permalink to &quot;file-loader.js&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> loaderUtils </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loader-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileLoader</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">content</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 根据文件内容生产一个新的文件名称</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">filename</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loaderUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">interpolateName</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[hash].[ext]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 输出文件</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">emitFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 暴露出去，给js引用。</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 记得加上&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">export default &#39;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// loader 解决的是二进制的内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 图片是 Buffer 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">fileLoader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">raw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fileLoader</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_3-loader-使用" tabindex="-1">3. loader 使用 <a class="header-anchor" href="#_3-loader-使用" aria-label="Permalink to &quot;3. loader 使用&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpe</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./file-loader.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">javascript/auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 解决图片重复打包问题</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),o=[e];function r(t,c,i,F,D,y){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};
