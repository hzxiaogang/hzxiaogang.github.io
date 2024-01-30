import{_ as s,o as n,c as a,V as e}from"./chunks/framework.364d6ed5.js";const A=JSON.parse('{"title":"类型推论","description":"","frontmatter":{"title":"类型推论","date":"2021-07-19T21:13:41.000Z","permalink":"/pages/791c9e/","categories":["typescript"],"tags":[null]},"headers":[],"relativePath":"JS和TS/TypeScript/类型推论.md","filePath":"JS和TS/TypeScript/类型推论.md","lastUpdated":1685623283000}'),l={name:"JS和TS/TypeScript/类型推论.md"},o=e(`<h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><p>在TypeScript里，在没有明确指出类型的地方，类型推论会帮助提供类型，这里我们学习TypeScript里的类型推论。既，类型是在哪里如何被推断的。 首先看一个例子</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变量<code>x</code>的类型被推断为数字。这种推断发生在<code>初始化变量和成员</code>，<code>设置默认参数值</code>和 <code>决定函数返回值时</code>。大多数情况下，类型推论是直接了当的。但是也有下面的细微差别。</p><h2 id="最佳通用类型" tabindex="-1">最佳通用类型 <a class="header-anchor" href="#最佳通用类型" aria-label="Permalink to &quot;最佳通用类型&quot;">​</a></h2><p>当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。例如:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,null</span><span style="color:#A6ACCD;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为了推断<code>x</code>的类型，我们必须考虑所有元素的类型。这里有两种选择:<code>number</code>和<code>null</code>。计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。</p><h2 id="上下文类型" tabindex="-1">上下文类型 <a class="header-anchor" href="#上下文类型" aria-label="Permalink to &quot;上下文类型&quot;">​</a></h2><p>TypeScript类型推论也可能按照相反的方向进行。这种命叫做<code>按上下文归类</code>。按上下文归类会发生在表达式的类型与所处的位置相关时。比如:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmousedown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">mouseEvent</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mouseEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// error</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个例子会得到一个类型错误，TypeScript类型检查器使用<code>Window.onmousedown</code>函数类型来推断有变函数表达式的类型。因此，就能推断出<code>mouseEvent</code>参数的类型了。如果函数表达式不是在上下文类型的位置，<code>mouseEvent</code>参数的类型就需要指定为<code>any</code>，这样就不会报错了。 如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。重写上面的例子:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmousedown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">mouseEvent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mouseEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//&lt;- Now, no error is given</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个函数表达式有明确的参数类型注解，上下文类型被忽略。 这样的话就不报错了，因为这里不会使用到上下文类型。</p><p>上下文归类会在很多情况下使用到。 通常包含<code>函数的参数</code>，<code>赋值表达式的右边</code>，<code>类型断言</code>，<code>对象成员和数组字面量</code>和<code>返回值语句</code>。 上下文类型也会做为最佳通用类型的候选类型。比如：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createZoo</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Rhino</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Elephant</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Snake</span><span style="color:#F07178;">()]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个例子里，最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。</p>`,17),p=[o];function t(c,r,i,y,d,F){return n(),a("div",null,p)}const C=s(l,[["render",t]]);export{A as __pageData,C as default};
