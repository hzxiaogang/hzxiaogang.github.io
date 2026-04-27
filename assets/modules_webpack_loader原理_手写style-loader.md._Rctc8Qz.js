import{_ as n,o as a,c as l,ak as e}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"手写style-loader","description":"","frontmatter":{"title":"手写style-loader","date":"2022-07-12T15:39:08.000Z","permalink":"/pages/98531e/","categories":["modules","webpack","loader原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/loader原理/手写style-loader.md","filePath":"modules/webpack/loader原理/手写style-loader.md","lastUpdated":1777258973000}'),p={name:"modules/webpack/loader原理/手写style-loader.md"};function o(t,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[e(`<p>作用：动态创建 <code>style</code> 标签，插入 <code>js</code> 中的样式代码，使样式生效。</p><h2 id="_1-style-loader-js" tabindex="-1">1. style-loader.js <a class="header-anchor" href="#_1-style-loader-js" aria-label="Permalink to “1. style-loader.js”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> styleLoader</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">styleLoader.</span><span style="color:#B392F0;">pitch</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">remainingRequest</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  /*</span></span>
<span class="line"><span style="color:#6A737D;">    remainingRequest: C:\\Users\\86176\\Desktop\\source\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\86176\\Desktop\\source\\src\\css\\index.css</span></span>
<span class="line"><span style="color:#6A737D;">      这里是inline loader用法，代表后面还有一个css-loader等待处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    最终我们需要将remainingRequest中的路径转化成相对路径，webpack才能处理</span></span>
<span class="line"><span style="color:#6A737D;">      希望得到：../../node_modules/css-loader/dist/cjs.js!./index.css</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    所以：需要将绝对路径转化成相对路径</span></span>
<span class="line"><span style="color:#6A737D;">    要求：</span></span>
<span class="line"><span style="color:#6A737D;">      1. 必须是相对路径</span></span>
<span class="line"><span style="color:#6A737D;">      2. 相对路径必须以 ./ 或 ../ 开头</span></span>
<span class="line"><span style="color:#6A737D;">      3. 相对路径的路径分隔符必须是 / ，不能是 \\</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> relativeRequest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> remainingRequest</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将路径转化为相对路径</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> relativePath</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.utils.</span><span style="color:#B392F0;">contextify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.context, part);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> relativePath;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  /*</span></span>
<span class="line"><span style="color:#6A737D;">    !!\${relativeRequest} </span></span>
<span class="line"><span style="color:#6A737D;">      relativeRequest：../../node_modules/css-loader/dist/cjs.js!./index.css</span></span>
<span class="line"><span style="color:#6A737D;">      relativeRequest是inline loader用法，代表要处理的index.css资源, 使用css-loader处理</span></span>
<span class="line"><span style="color:#6A737D;">      !!代表禁用所有配置的loader，只使用inline loader。（也就是外面我们style-loader和css-loader）,它们被禁用了，只是用我们指定的inline loader，也就是css-loader</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    import style from &quot;!!\${relativeRequest}&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      引入css-loader处理后的css文件</span></span>
<span class="line"><span style="color:#6A737D;">      为什么需要css-loader处理css文件，不是我们直接读取css文件使用呢？</span></span>
<span class="line"><span style="color:#6A737D;">      因为可能存在@import导入css语法，这些语法就要通过css-loader解析才能变成一个css文件，否则我们引入的css资源会缺少</span></span>
<span class="line"><span style="color:#6A737D;">    const styleEl = document.createElement(&#39;style&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">      动态创建style标签</span></span>
<span class="line"><span style="color:#6A737D;">    styleEl.innerHTML = style</span></span>
<span class="line"><span style="color:#6A737D;">      将style标签内容设置为处理后的css代码</span></span>
<span class="line"><span style="color:#6A737D;">    document.head.appendChild(styleEl)</span></span>
<span class="line"><span style="color:#6A737D;">      添加到head中生效</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> script</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">    import style from &quot;!!\${</span><span style="color:#E1E4E8;">relativeRequest</span><span style="color:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">    const styleEl = document.createElement(&#39;style&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">    styleEl.innerHTML = style</span></span>
<span class="line"><span style="color:#9ECBFF;">    document.head.appendChild(styleEl)</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // style-loader是第一个loader, 由于return导致熔断，所以其他loader不执行了（不管是normal还是pitch）</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> script;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> styleLoader;</span></span></code></pre></div>`,3)])])}const F=n(p,[["render",o]]);export{d as __pageData,F as default};
