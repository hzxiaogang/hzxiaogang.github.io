import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"BannerWebpackPlugin","description":"","frontmatter":{"title":"BannerWebpackPlugin","date":"2022-07-12T16:34:32.000Z","permalink":"/pages/3df67f/","categories":["modules","webpack","plugin原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/plugin原理/BannerWebpackPlugin.md","filePath":"modules/webpack/plugin原理/BannerWebpackPlugin.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/plugin原理/BannerWebpackPlugin.md"};function e(c,s,t,r,E,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-作用" tabindex="-1">1.作用 <a class="header-anchor" href="#_1-作用" aria-label="Permalink to “1.作用”">​</a></h2><p>给输出文件添加注释</p><h2 id="_2-开发思路" tabindex="-1">2. 开发思路 <a class="header-anchor" href="#_2-开发思路" aria-label="Permalink to “2. 开发思路”">​</a></h2><ul><li><ol><li>需要打包输出前添加注释：需要使用 <code>compiler.hooks.emit</code> 钩子, 它是打包输出前触发。</li></ol></li><li><ol start="2"><li>如何获取打包输出的资源？<code>compilation.assets</code> 可以获取所有即将输出的资源文件。</li></ol></li></ul><h2 id="_3-实现" tabindex="-1">3. 实现 <a class="header-anchor" href="#_3-实现" aria-label="Permalink to “3. 实现”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// plugins/banner-webpack-plugin.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BannerWebpackPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // options : new BannerWebpackPlugin() 时传入的参数</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 需要处理文件</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> extensions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // emit是异步串行钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;BannerWebpackPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // compilation.assets包含所有即将输出的资源</span></span>
<span class="line"><span style="color:#6A737D;">      // 通过过滤只保留需要处理的文件</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> assetPaths</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(compilation.assets).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> splitted</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> extensions.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(splitted[splitted.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      assetPaths.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">assetPath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> asset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> compilation.assets[assetPath];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> source</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">        \`/*</span></span>
<span class="line"><span style="color:#9ECBFF;">        * Author: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">options</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">author</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        */</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">asset</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">source</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 覆盖资源</span></span>
<span class="line"><span style="color:#E1E4E8;">        compilation.assets[assetPath] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 资源内容</span></span>
<span class="line"><span style="color:#B392F0;">          source</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> source;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#6A737D;">          // 资源大小</span></span>
<span class="line"><span style="color:#B392F0;">          size</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> source.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BannerWebpackPlugin;</span></span></code></pre></div>`,6)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
