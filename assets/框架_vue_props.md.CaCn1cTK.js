import{_ as a,o as n,c as p,ak as l}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/vue/props.md","filePath":"框架/vue/props.md","lastUpdated":1777258973000}'),o={name:"框架/vue/props.md"};function e(c,s,t,r,E,i){return n(),p("div",null,[...s[0]||(s[0]=[l(`<p>props 的作用是从父组件接收数据，有两种写法，一种是基于数组的简单写法，一种是基于对象的支持如<strong>类型检测</strong>，<strong>自定义验证</strong>和<strong>设置默认值</strong> 等高阶配置的语法。</p><h2 id="基于数组的写法" tabindex="-1">基于数组的写法 <a class="header-anchor" href="#基于数组的写法" aria-label="Permalink to “基于数组的写法”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createApp</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 简单语法</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;props-demo-simple&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&quot;size&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;myMessage&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="基于对象的写法" tabindex="-1">基于对象的写法 <a class="header-anchor" href="#基于对象的写法" aria-label="Permalink to “基于对象的写法”">​</a></h2><p>基于对象的写法有以下选项可以使用：</p><h4 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to “type”">​</a></h4><p>可以是下列原生构造函数中的一种 ：<code>String</code>，<code>Number</code>，<code>Boolean</code>，<code>Array</code>，<code>Object</code>，<code>Date</code>，<code>Function</code>，<code>Symbol</code></p><h4 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to “default”">​</a></h4><p><code>any</code>。给 prop 指定一个默认值。对象或数组的默认值必须从一个工厂函数中返回</p><h4 id="required" tabindex="-1">required <a class="header-anchor" href="#required" aria-label="Permalink to “required”">​</a></h4><p><code>Boolean</code>。定义该 prop 是否是必填项</p><h4 id="validator" tabindex="-1">validator <a class="header-anchor" href="#validator" aria-label="Permalink to “validator”">​</a></h4><p><code>Function</code>。自定义验证函数会将该 prop 的值作为唯一参数带入，验证 prop 的值是否合法</p><p>参考案例</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;my-component&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基础的类型检查 (\`null\` 和 \`undefined\` 会通过任何类型验证)</span></span>
<span class="line"><span style="color:#E1E4E8;">    propA: Number,</span></span>
<span class="line"><span style="color:#6A737D;">    // 多个可能的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    propB: [String, Number],</span></span>
<span class="line"><span style="color:#6A737D;">    // 必填的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    propC: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 带有默认值的数字</span></span>
<span class="line"><span style="color:#E1E4E8;">    propD: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 带有默认值的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    propE: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#6A737D;">      // 对象或数组默认值必须从一个工厂函数获取</span></span>
<span class="line"><span style="color:#B392F0;">      default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { message: </span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 自定义验证函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    propF: {</span></span>
<span class="line"><span style="color:#B392F0;">      validator</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 这个值必须匹配下列字符串中的一个</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 具有默认值的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    propG: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Function,</span></span>
<span class="line"><span style="color:#6A737D;">      // 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数</span></span>
<span class="line"><span style="color:#B392F0;">      default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &quot;Default function&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div>`,15)])])}const u=a(o,[["render",e]]);export{d as __pageData,u as default};
