import{_ as n,o as a,c as o,ak as l}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/vue/provide和inject.md","filePath":"框架/vue/provide和inject.md","lastUpdated":1777258973000}'),p={name:"框架/vue/provide和inject.md"};function e(t,s,c,E,r,y){return a(),o("div",null,[...s[0]||(s[0]=[l(`<p><code>provide</code>和<code>inject</code>可以让我们实现跨组件通信。无论组件层次有多深，父组件都可以作为其所有子组件的依赖提供者。父组件有一个<code>provide</code>选项来提供数据，子组件有一个<code>inject</code>选项来使用这些数据。</p><h2 id="_1-options-api" tabindex="-1">1. options API <a class="header-anchor" href="#_1-options-api" aria-label="Permalink to “1. options API”">​</a></h2><h3 id="_1-1-当作对象使用" tabindex="-1">1.1 当作对象使用 <a class="header-anchor" href="#_1-1-当作对象使用" aria-label="Permalink to “1.1 当作对象使用”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [</span><span style="color:#9ECBFF;">&quot;张山&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;李四&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  provide: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    user: </span><span style="color:#9ECBFF;">&quot;jack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list-statistics&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  inject: [</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.user); </span><span style="color:#6A737D;">// &#39;jack&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>但是，如果我们尝试在此处<code>provide</code>一些组件的实例<code>property</code>，这将是不起作用的</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [</span><span style="color:#9ECBFF;">&quot;Feed a cat&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Buy tickets&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  provide: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    todoLength: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将会导致错误 \`Cannot read property &#39;length&#39; of undefined\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    ...</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>要访问组件实例的<code>property</code>，我们需要将<code>provide</code>转换为<strong>返回对象的函数</strong>。</p><h3 id="_1-2-当作函数使用" tabindex="-1">1.2 当作函数使用 <a class="header-anchor" href="#_1-2-当作函数使用" aria-label="Permalink to “1.2 当作函数使用”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [</span><span style="color:#9ECBFF;">&quot;Feed a cat&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Buy tickets&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  provide</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todoLength: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="_1-3-处理响应性" tabindex="-1">1.3 处理响应性 <a class="header-anchor" href="#_1-3-处理响应性" aria-label="Permalink to “1.3 处理响应性”">​</a></h3><p>默认情况下，<code>provice/inject</code>绑定不是响应性的。在<code>options API</code>写法中，如果我们想对祖先组件中的更改做出响应，我们需要为<code>provide</code>的<code>todoLength</code>分配一个组合式 API<code>computed</code>pproperty</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#6A737D;">  // ...</span></span>
<span class="line"><span style="color:#B392F0;">  provide</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todoLength: Vue.</span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;todo-list-statistics&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  inject: [</span><span style="color:#9ECBFF;">&quot;todoLength&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Injected property: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">todoLength</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &gt; 注入的 property: 5</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="_2-composition-api" tabindex="-1">2. composition API <a class="header-anchor" href="#_2-composition-api" aria-label="Permalink to “2. composition API”">​</a></h2><p>我们也可以在<strong>组合式 API</strong>中使用<code>provide/inject</code>。两者都只能在<code>setup()</code>中调用。<code>setup</code>和<code>script setup</code>两种使用方式是一样的。</p><h3 id="_2-1-使用-provide" tabindex="-1">2.1 使用 provide <a class="header-anchor" href="#_2-1-使用-provide" aria-label="Permalink to “2.1 使用 provide”">​</a></h3><p>在<code>setup()</code>中使用<code>provide</code>时，我们首先要从<code>vue</code>显示导入<code>provide</code>方法。然后使用<code>provide</code>来定义每一个<code>property</code>。<code>provide</code>函数有两个参数：</p><ul><li><ol><li>name (<code>string</code>类型)</li></ol></li><li><ol start="2"><li>value</li></ol></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">//src/components/MyMap.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">MyMarker</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MyMarker </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;./MyMarker.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    MyMarker,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;North Pole&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      longitude: </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      latitude: </span><span style="color:#79B8FF;">135</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-2-使用-inject" tabindex="-1">2.2 使用 inject <a class="header-anchor" href="#_2-2-使用-inject" aria-label="Permalink to “2.2 使用 inject”">​</a></h3><p>从<code>vue</code>中导入<code>inject</code>方法。<code>inject</code>方法有两个参数：</p><ul><li><ol><li>要 inject 的 property 的 name</li></ol></li><li><ol start="2"><li>默认值（可选）</li></ol></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { inject } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userLocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;The Universe&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userGeolocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      userLocation,</span></span>
<span class="line"><span style="color:#E1E4E8;">      userGeolocation,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-3-响应性" tabindex="-1">2.3 响应性 <a class="header-anchor" href="#_2-3-响应性" aria-label="Permalink to “2.3 响应性”">​</a></h3><p>为了增加<code>provide</code>值和<code>inject</code>值之间的响应性，我们可以在<code>provide</code>值时使用<code>ref</code>或<code>reactive</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide, reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> location</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;North Pole&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geolocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      longitude: </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      latitude: </span><span style="color:#79B8FF;">135</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, location);</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">, geolocation);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>现在父组件中修改数据，子组件的状态也会更新。</p><h3 id="_2-4-修改响应式-property" tabindex="-1">2.4 修改响应式 property <a class="header-anchor" href="#_2-4-修改响应式-property" aria-label="Permalink to “2.4 修改响应式 property”">​</a></h3><p>当使用响应式<code>provide/inject</code>值时，尽可能将对响应式<code>property</code>的所有修改限制在<strong>定义<code>provide</code></strong>的组件内部。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide, reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> location</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;North Pole&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geolocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      longitude: </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      latitude: </span><span style="color:#79B8FF;">135</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, location);</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">, geolocation);</span></span>
<span class="line"><span style="color:#6A737D;">    // 定义修改响应式property的方法</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> updateLocation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      location.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;South Pole&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      location,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>然而，有时候我们想在子组件内部修改<code>inject</code>的数据。这种情况下，我们可以在父组件<code>provide</code>一个方法，来负责改变响应式<code>property</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> location</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;North Pole&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geolocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      longitude: </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      latitude: </span><span style="color:#79B8FF;">135</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#6A737D;">    // 定义修改响应式property的方法</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> updateLocation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      location.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;South Pole&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, location);</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">, geolocation);</span></span>
<span class="line"><span style="color:#6A737D;">    // provide一个修改响应式property的方法给子组件使用</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;updateLocation&quot;</span><span style="color:#E1E4E8;">, updateLocation);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>如果想确保<code>provide</code>的<code>property</code>不被<code>inject</code>的组件修改，我们可以对<code>provide</code>的<code>property</code>添加<code>readonly</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide, reactive, readonly, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> location</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;North Pole&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geolocation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      longitude: </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      latitude: </span><span style="color:#79B8FF;">135</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> updateLocation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      location.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;South Pole&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    //添加 readonly 防止子组件修改 响应式数据</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;">(location));</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;geolocation&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;">(geolocation));</span></span>
<span class="line"><span style="color:#B392F0;">    provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;updateLocation&quot;</span><span style="color:#E1E4E8;">, updateLocation);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div>`,33)])])}const F=n(p,[["render",e]]);export{d as __pageData,F as default};
