import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"组合式API","description":"","frontmatter":{"title":"组合式API","date":"2021-12-10T16:20:13.000Z","permalink":"/pages/e75104/","categories":["框架","Vuex"],"tags":[null]},"headers":[],"relativePath":"框架/Vuex/组合式API.md","filePath":"框架/Vuex/组合式API.md","lastUpdated":1777258973000}'),o={name:"框架/Vuex/组合式API.md"};function e(t,s,c,r,E,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><p>可以通过调用 <code>useStore</code>函数，在<code>setup</code>钩子函数中访问<code>store</code>。这与在组件中使用选项式API访问<code>this.$store</code>是等效的。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {useStore} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-访问-state-和-getter" tabindex="-1">2.访问 State 和 Getter <a class="header-anchor" href="#_2-访问-state-和-getter" aria-label="Permalink to “2.访问 State 和 Getter”">​</a></h2><p>为了访问 state 和 getter ，需要创建<code>computed</code>引用以保留响应性，这与在选项式API中创建计算属性等效</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {computed} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {useStore} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在 computed函数中访问 state</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> store.state.count)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在 computed 函数中访问 getter</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> double</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> store.getters.double)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count,double</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-访问-mutation和action" tabindex="-1">3. 访问 Mutation和Action <a class="header-anchor" href="#_3-访问-mutation和action" aria-label="Permalink to “3. 访问 Mutation和Action”">​</a></h2><p>要使用<code>mutation</code>和<code>action</code>时，只需要在<code>setup</code>钩子函数中调用<code>commit</code>和<code>dispatch</code>函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {useStore} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用mutation</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用action</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> asyncIncrement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;asyncIncrement&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      increment,asyncIncrement</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,9)])])}const F=n(o,[["render",e]]);export{d as __pageData,F as default};
