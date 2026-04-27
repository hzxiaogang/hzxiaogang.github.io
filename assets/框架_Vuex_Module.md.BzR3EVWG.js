import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"Module","description":"","frontmatter":{"title":"Module","date":"2021-12-09T15:41:38.000Z","permalink":"/pages/bb38a4/","categories":["框架","vue_router"],"tags":[null]},"headers":[],"relativePath":"框架/Vuex/Module.md","filePath":"框架/Vuex/Module.md","lastUpdated":1777258973000}'),o={name:"框架/Vuex/Module.md"};function e(t,s,c,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><p>由于使用单一状态树，应用的所有状态都会集中到一个比较大的对象。应用变得复杂时，store对象就会变的很臃肿。为了解决这个问题，Vuex允许我们将store 分割成<strong>模块</strong>。每个模块拥有自己的<code>state</code>，<code>mutation</code>，<code>action</code>，<code>getter</code>。甚至是嵌套子模块（从上至下进行同样方式的分割）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;"> : ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">({}),</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations:{},</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions:{},</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters:{}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleB</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;"> :()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">({}),</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations:{},</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions:{},</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters:{}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    a:moduleA,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b:moduleB</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">store.state.a </span><span style="color:#6A737D;">// -&gt; moduleA 的状态</span></span>
<span class="line"><span style="color:#E1E4E8;">store.state.b </span><span style="color:#6A737D;">// -&gt; moduleB 的状态</span></span></code></pre></div><h2 id="_2-模块的局部状态" tabindex="-1">2.模块的局部状态 <a class="header-anchor" href="#_2-模块的局部状态" aria-label="Permalink to “2.模块的局部状态”">​</a></h2><p>对于模块内部的<code>mutation</code>和<code>getter</code>，接收的第一个参数（state）是<strong>模块局部状态对象</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">:()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    count : </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations:{</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里的 \`state\` 对象是模块的局部状态</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>同样，对于模块内部的<code>action</code>，局部状态通过<code>context.state</code>暴露出来，根节点状态则为<code>context.rootState</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions :{</span></span>
<span class="line"><span style="color:#B392F0;">    incrementByRoot</span><span style="color:#E1E4E8;">({</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">rootState</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> ((state.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rootState.count) </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>对于模块内部的<code>getter</code>，根节点状态会作为第三个参数暴露出来：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters:{</span></span>
<span class="line"><span style="color:#6A737D;">    // rootState  根节点状态</span></span>
<span class="line"><span style="color:#B392F0;">    sumWithRootCount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">getters</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">rootState</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rootState.count</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-命名空间" tabindex="-1">3. 命名空间 <a class="header-anchor" href="#_3-命名空间" aria-label="Permalink to “3. 命名空间”">​</a></h2><p>默认情况下，模块内的的<code>action</code>和<code>mutation</code>任然是<strong>全局命名空间</strong>的。这样使得多个模块能够对同一个<code>action</code>或 <code>mutation</code>作出响应。<code>Getter</code>同样也默认注册在<strong>全局命名空间</strong>，但是目前这并非出于功能上的目的（仅仅是维持现状来避免非兼容性变更）。必须注意，不要在不同的，无命名空间的模块中定义两个相同的 getter 从而导致错误。</p><p>如果你希望你的模块具有更高的封装度和复用性，你可以通过添加<code>namespaced:true</code>的方式使其成为带命名空间的模块。当莫夸注册后，它的所有<code>getter</code>，<code>action</code>，以及 <code>mutation</code>都会自动根据模块注册的路径调整命名。例如:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    account: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 模块内容（module assets）</span></span>
<span class="line"><span style="color:#B392F0;">      state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }), </span><span style="color:#6A737D;">// 模块内的状态已经是嵌套的了，使用 \`namespaced\` 属性不会对其产生影响</span></span>
<span class="line"><span style="color:#E1E4E8;">      getters: {</span></span>
<span class="line"><span style="color:#B392F0;">        isAdmin</span><span style="color:#E1E4E8;"> () { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; getters[&#39;account/isAdmin&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      actions: {</span></span>
<span class="line"><span style="color:#B392F0;">        login</span><span style="color:#E1E4E8;"> () { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; dispatch(&#39;account/login&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">        login</span><span style="color:#E1E4E8;"> () { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; commit(&#39;account/login&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 嵌套模块</span></span>
<span class="line"><span style="color:#E1E4E8;">      modules: {</span></span>
<span class="line"><span style="color:#6A737D;">        // 继承父模块的命名空间</span></span>
<span class="line"><span style="color:#E1E4E8;">        myPage: {</span></span>
<span class="line"><span style="color:#B392F0;">          state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">          getters: {</span></span>
<span class="line"><span style="color:#B392F0;">            profile</span><span style="color:#E1E4E8;"> () { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; getters[&#39;account/profile&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 进一步嵌套命名空间</span></span>
<span class="line"><span style="color:#E1E4E8;">        posts: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">          state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">          getters: {</span></span>
<span class="line"><span style="color:#B392F0;">            popular</span><span style="color:#E1E4E8;"> () { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; getters[&#39;account/posts/popular&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="_4-在带命名空间的模块内访问全局内" tabindex="-1">4. 在带命名空间的模块内访问全局内 <a class="header-anchor" href="#_4-在带命名空间的模块内访问全局内" aria-label="Permalink to “4. 在带命名空间的模块内访问全局内”">​</a></h2><p>如果你希望使用全局 state 和 getter，rootState 和 rootGetters 会作为第三和第四参数传入 getter，也会通过 context 对象的属性传入 action</p><p>若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。</p><h2 id="_5-在带命名空间的模块注册全局-action" tabindex="-1">5. 在带命名空间的模块注册全局 action <a class="header-anchor" href="#_5-在带命名空间的模块注册全局-action" aria-label="Permalink to “5. 在带命名空间的模块注册全局 action”">​</a></h2><p>若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中。例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">  actions</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    someOtherAction</span><span style="color:#E1E4E8;"> ({dispatch}) {</span></span>
<span class="line"><span style="color:#B392F0;">      dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;someAction&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  modules</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    foo</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">      namespaced</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      actions</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">        someAction</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">          root</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">          handler</span><span style="color:#E1E4E8;"> (namespacedContext, payload) { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; &#39;someAction&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,20)])])}const F=n(o,[["render",e]]);export{d as __pageData,F as default};
