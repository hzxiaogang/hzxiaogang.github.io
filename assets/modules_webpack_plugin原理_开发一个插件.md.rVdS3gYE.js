import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"开发一个插件","description":"","frontmatter":{"title":"开发一个插件","date":"2022-07-12T16:30:57.000Z","permalink":"/pages/c38f76/","categories":["modules","webpack","plugin原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/plugin原理/开发一个插件.md","filePath":"modules/webpack/plugin原理/开发一个插件.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/plugin原理/开发一个插件.md"};function e(c,s,t,E,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-最简单的插件" tabindex="-1">1. 最简单的插件 <a class="header-anchor" href="#_1-最简单的插件" aria-label="Permalink to “1. 最简单的插件”">​</a></h2><blockquote><p>plugins/test-plugin.js</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TestPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin constructor()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法</span></span>
<span class="line"><span style="color:#6A737D;">  // 2. webpack创建 compiler 对象</span></span>
<span class="line"><span style="color:#6A737D;">  // 3. 遍历所有插件，调用插件的 apply 方法</span></span>
<span class="line"><span style="color:#B392F0;">  apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin apply()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> TestPlugin;</span></span></code></pre></div><h2 id="_2-注册-hook" tabindex="-1">2. 注册 hook <a class="header-anchor" href="#_2-注册-hook" aria-label="Permalink to “2. 注册 hook”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TestPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin constructor()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法</span></span>
<span class="line"><span style="color:#6A737D;">  // 2. webpack创建 compiler 对象</span></span>
<span class="line"><span style="color:#6A737D;">  // 3. 遍历所有插件，调用插件的 apply 方法</span></span>
<span class="line"><span style="color:#B392F0;">  apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin apply()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 从文档可知, compile hook 是 SyncHook, 也就是同步钩子, 只能用tap注册</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.compile.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilationParams</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.compile()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 从文档可知, make 是 AsyncParallelHook, 也就是异步并行钩子, 特点就是异步任务同时执行</span></span>
<span class="line"><span style="color:#6A737D;">    // 可以使用 tap、tapAsync、tapPromise 注册。</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果使用tap注册的话，进行异步操作是不会等待异步操作执行完成的。</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.make.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.make() 111&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用tapAsync、tapPromise注册，进行异步操作会等异步操作做完再继续往下执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.make.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.make() 222&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">        // 必须调用</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.make.</span><span style="color:#B392F0;">tapPromise</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.make() 333&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 必须返回promise</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 从文档可知, emit 是 AsyncSeriesHook, 也就是异步串行钩子，特点就是异步任务顺序执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.emit() 111&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.emit() 222&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TestPlugin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compiler.emit() 333&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> TestPlugin;</span></span></code></pre></div>`,5)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
