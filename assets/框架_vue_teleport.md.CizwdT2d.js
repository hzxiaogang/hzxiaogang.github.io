import{_ as n,o as a,c as o,ak as p}from"./chunks/framework.DLt_otXO.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/vue/teleport.md","filePath":"框架/vue/teleport.md","lastUpdated":1777258973000}'),e={name:"框架/vue/teleport.md"};function l(t,s,c,r,E,d){return a(),o("div",null,[...s[0]||(s[0]=[p(`<p><code>teleport</code> 是 vue3 中的一个内置组件，内置组件可以在模板中直接使用，而不需注册。 <code>teleport</code> 允许我们控制 <code>teleport</code> 下的内容在那个 DOM 节点下渲染。但是它并不会改变组件树的嵌套关系。如果 <code>&lt;teloport&gt;</code> 包含 Vue 组件，这个这个 Vue 组件任然是 <code>&lt;teleport&gt;</code> 父组件的逻辑子组件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;h1&gt;Root instance&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;parent-component /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;parent-component&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;h2&gt;This is a parent component&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;teleport to=&quot;#app&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;child-component name=&quot;John&quot; /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/teleport&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;child-component&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div&gt;Hello, {{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>如上面这个例子中，组件 <code>parent-component</code> 中使用了 <code>&lt;teleport&gt;</code> ，且 <code>&lt;teleport&gt;</code> 嵌套了 <code>child-component</code> 。此时 <code>child-component</code> 任然是 <code>parent-component</code> 。但是 <code>child-component</code> 组件渲染后将会挂载在 id 为 <code>app</code> 的 dom 节点下，而并不是 <code>parent-component</code> 组件内。</p>`,3)])])}const F=n(e,[["render",l]]);export{y as __pageData,F as default};
