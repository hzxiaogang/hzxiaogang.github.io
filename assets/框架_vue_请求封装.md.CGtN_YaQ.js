import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/vue/请求封装.md","filePath":"框架/vue/请求封装.md","lastUpdated":1777258973000}'),o={name:"框架/vue/请求封装.md"};function e(t,s,c,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><h3 id="_1-1-优点" tabindex="-1">1.1 优点 <a class="header-anchor" href="#_1-1-优点" aria-label="Permalink to “1.1 优点”">​</a></h3><p>统一封裝数据请求有利于解决一下问题：</p><ul><li><ol><li>统一配置请求</li></ol></li><li><ol start="2"><li>请求，响应统一处理</li></ol></li></ul><h3 id="_1-2-准备工作" tabindex="-1">1.2 准备工作 <a class="header-anchor" href="#_1-2-准备工作" aria-label="Permalink to “1.2 准备工作”">​</a></h3><ul><li><ol><li>安装 axios</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">npm install axios </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">save</span></span></code></pre></div><ul><li><ol start="2"><li>添加配置文件：.env.development</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#79B8FF;">VUE_APP_API_BASE_URL</span><span style="color:#F97583;">=/</span><span style="color:#E1E4E8;">api</span></span></code></pre></div><h2 id="_2-封装请求" tabindex="-1">2.封装请求 <a class="header-anchor" href="#_2-封装请求" aria-label="Permalink to “2.封装请求”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// request.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;axios&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;@/store&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> storage </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;store&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> notification </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;ant-design-vue/es/notification&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 axios 实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // API 请求的默认前缀</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: process.env.</span><span style="color:#79B8FF;">VUE_APP_API_BASE_URL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">6</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 请求超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异常拦截处理器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> errorHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error.response) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> error.response.data;</span></span>
<span class="line"><span style="color:#6A737D;">    // 从 localstorage 获取 token</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> token</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> storage.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ACCESS_TOKEN&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error.response.status </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 403</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      notification.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&quot;Forbidden&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        description: data.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      error.response.status </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 401</span><span style="color:#F97583;"> &amp;&amp;</span></span>
<span class="line"><span style="color:#F97583;">      !</span><span style="color:#E1E4E8;">(data.result </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> data.result.isLogin)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      notification.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&quot;Unauthorized&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        description: </span><span style="color:#9ECBFF;">&quot;Authorization verification failed&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (token) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Logout&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            window.location.</span><span style="color:#B392F0;">reload</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          }, </span><span style="color:#79B8FF;">1500</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// request interceptor</span></span>
<span class="line"><span style="color:#E1E4E8;">service.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> token</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> storage.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ACCESS_TOKEN&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果 token 存在</span></span>
<span class="line"><span style="color:#6A737D;">  // 让每个请求携带自定义 token 请根据实际情况自行修改</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (token) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config.headers[</span><span style="color:#9ECBFF;">&quot;Access-Token&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> token;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">}, errorHandler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// response interceptor</span></span>
<span class="line"><span style="color:#E1E4E8;">service.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> response.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">}, errorHandler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> installer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  install</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.config.globalProperties.$http </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> service;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> request;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { installer </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> VueAxios, service </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> axios };</span></span></code></pre></div><h2 id="_3-使用请求" tabindex="-1">3.使用请求 <a class="header-anchor" href="#_3-使用请求" aria-label="Permalink to “3.使用请求”">​</a></h2><h3 id="_3-1-当做插件全局使用" tabindex="-1">3.1 当做插件全局使用 <a class="header-anchor" href="#_3-1-当做插件全局使用" aria-label="Permalink to “3.1 当做插件全局使用”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {createApp} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vu</span><span style="color:#FDAEB7;font-style:italic;">e</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {VueAxios} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;request&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createApp</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(VueAxios)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {getCurrentInstance} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vu</span><span style="color:#FDAEB7;font-style:italic;">e</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> $http</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> getCurrentInstance</span><span style="color:#E1E4E8;">().appContext.config.globalProperties.$http;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // get请求</span></span>
<span class="line"><span style="color:#B392F0;">      $http</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;/base/constant/get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          id:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{})</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // post请求</span></span>
<span class="line"><span style="color:#B392F0;">      $http</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;/base/constant/post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{name:</span><span style="color:#9ECBFF;">&#39;张山&#39;</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{})</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{})</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-2-单独使用" tabindex="-1">3.2 单独使用 <a class="header-anchor" href="#_3-2-单独使用" aria-label="Permalink to “3.2 单独使用”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> request </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;request&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// get请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> loadDict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&quot;base/constant/get&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&quot;get&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      id,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">loadDict</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// post请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> queryDict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&quot;base/constant/query&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">queryDict</span><span style="color:#E1E4E8;">({ id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, type: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {});</span></span></code></pre></div>`,16)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
