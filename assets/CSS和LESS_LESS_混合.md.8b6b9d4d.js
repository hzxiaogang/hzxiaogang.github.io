import{_ as s,o as n,c as a,V as l}from"./chunks/framework.364d6ed5.js";const F=JSON.parse('{"title":"混合","description":"","frontmatter":{"title":"混合","date":"2021-12-24T11:32:59.000Z","permalink":"/pages/eb6f44/","categories":["CSS和LESS","LESS"],"tags":[null]},"headers":[],"relativePath":"CSS和LESS/LESS/混合.md","filePath":"CSS和LESS/LESS/混合.md","lastUpdated":1685623283000}'),e={name:"CSS和LESS/LESS/混合.md"},p=l(`<p>混合（<code>Mixin</code>）是一种将<code>一组属性</code>从一个规则集合<strong>包含</strong>（或混入）到另一个规则集的方法。 假如我们定义了一个类（class）如下：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bordered</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dotted </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果我们希望在其它规则集中使用这些属性，我们只需像下面这样输入所需属性的类（class）名称即可，如下所示：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">menu</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">111</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .bordered()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    bordered()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>.bordered</code>类所包含的属性将同时出现在<code>#menu a</code>和<code>.post a</code>中了。我们也可以使用<code>#ids</code>作为<code>mixin</code>使用。</p>`,5),o=[p];function c(r,t,i,d,C,D){return n(),a("div",null,o)}const b=s(e,[["render",c]]);export{F as __pageData,b as default};
