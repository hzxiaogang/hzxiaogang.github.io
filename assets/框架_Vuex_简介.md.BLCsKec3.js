import{_ as a,o as n,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"简介","description":"","frontmatter":{"title":"简介","date":"2021-12-09T15:39:57.000Z","permalink":"/pages/b92545/","categories":["框架","vue_router"],"tags":[null]},"headers":[],"relativePath":"框架/Vuex/简介.md","filePath":"框架/Vuex/简介.md","lastUpdated":1777258973000}'),e={name:"框架/Vuex/简介.md"};function o(t,s,c,r,E,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-vuex是什么" tabindex="-1">1. Vuex是什么 <a class="header-anchor" href="#_1-vuex是什么" aria-label="Permalink to “1. Vuex是什么”">​</a></h2><p>Vuex是Vue.js的一个<strong>状态管理库</strong>。它采用集中式存储<strong>管理</strong>应用的所有<strong>组件状态</strong>，并以相应的规则保证状态以一种<strong>可预测</strong>的方式发生改变。</p><h2 id="_2-使用" tabindex="-1">2. 使用 <a class="header-anchor" href="#_2-使用" aria-label="Permalink to “2. 使用”">​</a></h2><h3 id="_3-1-安装" tabindex="-1">3.1 安装 <a class="header-anchor" href="#_3-1-安装" aria-label="Permalink to “3.1 安装”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">npm install vuex@next </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">save</span></span></code></pre></div><h3 id="_3-2-使用" tabindex="-1">3.2 使用 <a class="header-anchor" href="#_3-2-使用" aria-label="Permalink to “3.2 使用”">​</a></h3><p>下面以一个简单的例子，展示Vuex的使用</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {createApp} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {createStore} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count : </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations:{</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count </span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions:{</span></span>
<span class="line"><span style="color:#B392F0;">    asyncAdd</span><span style="color:#E1E4E8;">({</span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters:{</span></span>
<span class="line"><span style="color:#B392F0;">    double</span><span style="color:#E1E4E8;">({</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createApp</span><span style="color:#E1E4E8;">({ </span><span style="color:#6A737D;">/* 根组件 */</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// 将 store 实例作为插件安装</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(store)</span></span></code></pre></div>`,8)])])}const F=a(e,[["render",o]]);export{d as __pageData,F as default};
