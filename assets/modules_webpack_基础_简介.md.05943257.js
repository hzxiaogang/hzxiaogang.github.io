import{_ as s,o as a,c as n,V as e}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"简介","description":"","frontmatter":{"title":"简介","date":"2022-07-09T10:18:48.000Z","permalink":"/pages/3f2613/","categories":["modules","webpack","基础"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/基础/简介.md","filePath":"modules/webpack/基础/简介.md","lastUpdated":1685623283000}'),l={name:"modules/webpack/基础/简介.md"},o=e(`<h2 id="_1-为什么需要打包工具" tabindex="-1">1.为什么需要打包工具 <a class="header-anchor" href="#_1-为什么需要打包工具" aria-label="Permalink to &quot;1.为什么需要打包工具&quot;">​</a></h2><p>开发时，我们会使用框架(<code>react</code>，<code>vue</code>)，<code>ES6</code>模块化语法，<code>Less/Sass</code>等<code>css</code>预处理器等语法进行开发。这样的代码想在浏览器允许必须经过<strong>编译</strong>成浏览器能识别的<code>JS</code>,<code>css</code>等语法，才能运行。所以我们需要打包工具帮我们做完这些事情。 除此之外，打包工具还能<strong>压缩代码</strong>，做<strong>兼容性处理</strong>，提升<strong>代码性能</strong>等。</p><h2 id="_2-什么是-webpack" tabindex="-1">2. 什么是 webpack <a class="header-anchor" href="#_2-什么是-webpack" aria-label="Permalink to &quot;2. 什么是 webpack&quot;">​</a></h2><p><code>webpack</code>是一个静态资源打包工具。它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。输出的文件就是编译好的文件，就可以在浏览器端运行了。我们将<code>webpack</code>输出的文件叫做<code>bundle</code>。</p><p><code>webpack</code> 本身功能比较少，只能处理 <code>js</code> 资源，一旦遇到 <code>css</code> 等其他资源就会报错。所以我们学习 Webpack，就是主要学习如何处理其他资源。</p><p><code>webpack</code>本身的功能是有限的。它有两种模式：</p><ul><li><ol><li>开发模式 ： 仅能编译 <code>JS</code>中的<code>ES Module</code>语法</li></ol></li><li><ol start="2"><li>生产模式 ： 能编译<code>JS</code>中的<code>ES Module</code>语法，还能压缩<code>JS</code>代码</li></ol></li></ul><h2 id="_3-基本使用" tabindex="-1">3. 基本使用 <a class="header-anchor" href="#_3-基本使用" aria-label="Permalink to &quot;3. 基本使用&quot;">​</a></h2><h3 id="_3-1-资源目录" tabindex="-1">3.1. 资源目录 <a class="header-anchor" href="#_3-1-资源目录" aria-label="Permalink to &quot;3.1. 资源目录&quot;">​</a></h3><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">webpack_code # 项目根目录（所有指令必须在这个目录运行）</span></span>
<span class="line"><span style="color:#A6ACCD;">└── src # 项目源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├── js # js 文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── count.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│ └── sum.js</span></span>
<span class="line"><span style="color:#A6ACCD;">└── main.js # 项目主文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-2-创建文件" tabindex="-1">3.2. 创建文件 <a class="header-anchor" href="#_3-2-创建文件" aria-label="Permalink to &quot;3.2. 创建文件&quot;">​</a></h3><h4 id="count-js" tabindex="-1">count.js <a class="header-anchor" href="#count-js" aria-label="Permalink to &quot;count.js&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="sum-js" tabindex="-1">sum.js <a class="header-anchor" href="#sum-js" aria-label="Permalink to &quot;sum.js&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">p</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="main-js" tabindex="-1">main.js <a class="header-anchor" href="#main-js" aria-label="Permalink to &quot;main.js&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./js/count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./js/sum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-3-下载依赖" tabindex="-1">3.3 下载依赖 <a class="header-anchor" href="#_3-3-下载依赖" aria-label="Permalink to &quot;3.3 下载依赖&quot;">​</a></h3><h4 id="_1-初始化-package-json-文件" tabindex="-1">1. 初始化 package.json 文件 <a class="header-anchor" href="#_1-初始化-package-json-文件" aria-label="Permalink to &quot;1. 初始化 package.json 文件&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时会生成一个基础的 <code>package.json</code> 文件。 需要注意的是 <code>package.json</code> 中 <code>name</code> 字段不能叫做 <code>webpack</code>, 否则下一步会报错</p><h4 id="_2-下载依赖" tabindex="-1">2. 下载依赖 <a class="header-anchor" href="#_2-下载依赖" aria-label="Permalink to &quot;2. 下载依赖&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-4-启用-webpack" tabindex="-1">3.4 启用 webpack <a class="header-anchor" href="#_3-4-启用-webpack" aria-label="Permalink to &quot;3.4 启用 webpack&quot;">​</a></h3><h4 id="_1-开发模式" tabindex="-1">1. 开发模式 <a class="header-anchor" href="#_1-开发模式" aria-label="Permalink to &quot;1. 开发模式&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./src/main.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=development</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_2-生产模式" tabindex="-1">2. 生产模式 <a class="header-anchor" href="#_2-生产模式" aria-label="Permalink to &quot;2. 生产模式&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./src/main.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=production</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>默认 <code>Webpack</code> 会将文件打包输出到 <code>dist</code> 目录下，我们查看 <code>dist</code> 目录下文件情况就好了。</p><ul><li><ol><li><code>npx webpack</code> : 是用来运行本地安装<code>webpack</code>包的</li></ol></li><li><ol start="2"><li><code>./src.main.js</code>: 指定<code>webpack</code>从<code>main.js</code>文件开始打包，不但会打包<code>main.js</code>，还会将其它依赖一起打包进来。</li></ol></li><li><ol start="2"><li><code>--mode=xxx</code> : 指定模式（环境）</li></ol></li></ul><p>这里演示的是通过控制台<strong>指令</strong>的方式使用<code>webpack</code>打包。此外我们可以通过<strong>webpack.config.js 配置文件</strong>来配置 <code>webpack</code>。</p>`,31),p=[o];function c(t,r,i,d,y,C){return a(),n("div",null,p)}const b=s(l,[["render",c]]);export{u as __pageData,b as default};
