import{_ as a,o as n,c as l,ak as e}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"命名视图","description":"","frontmatter":{"title":"命名视图","date":"2021-12-30T16:11:28.000Z","permalink":"/pages/1674e6/","categories":["框架","VueRouter"],"tags":[null]},"headers":[],"relativePath":"框架/VueRouter/命名视图.md","filePath":"框架/VueRouter/命名视图.md","lastUpdated":1777258973000}'),p={name:"框架/VueRouter/命名视图.md"};function o(t,s,c,r,E,i){return n(),l("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to “1. 简介”">​</a></h2><p>有时候想同时（<code>同级</code>）展示<code>多个视图</code>，而不是嵌套展示。例如创建一个<code>布局</code>，有<code>sidebar</code>（侧导航）和<code>main</code>（主内容），这个时候<strong>命名视图</strong>就派上用场了。我们可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果<code>router-view</code>没有设置名字，那么默认为<code>default</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">router-view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;view left-sidebar&quot;</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;LeftSidebar&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">router-view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;view main-sidebar&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">router-view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;view right-sidebar&quot;</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;RightSidebar&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>一个<strong>视图</strong>使用一个组件渲染，因此对于同一个路由，多个视图就需要多个组件：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> router</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHashHistory</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: Home,</span></span>
<span class="line"><span style="color:#6A737D;">        // LeftSidebar: LeftSidebar 的缩写</span></span>
<span class="line"><span style="color:#E1E4E8;">        LeftSidebar,</span></span>
<span class="line"><span style="color:#6A737D;">        // 它们与 \`&lt;router-view&gt;\` 上的 \`name\` 属性匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">        RightSidebar,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="_2-嵌套命名视图" tabindex="-1">2. 嵌套命名视图 <a class="header-anchor" href="#_2-嵌套命名视图" aria-label="Permalink to “2. 嵌套命名视图”">​</a></h2><p>我们也可以使用<code>命名视图</code>创建嵌套视图的复杂布局。我们以设置面板为例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span>/settings/emails                                       /settings/profile</span></span>
<span class="line"><span>+-----------------------------------+                  +------------------------------+</span></span>
<span class="line"><span>| UserSettings                      |                  | UserSettings                 |</span></span>
<span class="line"><span>| +-----+-------------------------+ |                  | +-----+--------------------+ |</span></span>
<span class="line"><span>| | Nav | UserEmailsSubscriptions | |  +------------&gt;  | | Nav | UserProfile        | |</span></span>
<span class="line"><span>| |     +-------------------------+ |                  | |     +--------------------+ |</span></span>
<span class="line"><span>| |     |                         | |                  | |     | UserProfilePreview | |</span></span>
<span class="line"><span>| +-----+-------------------------+ |                  | +-----+--------------------+ |</span></span>
<span class="line"><span>+-----------------------------------+                  +------------------------------+</span></span></code></pre></div><p><code>UserSettings</code> 组件的 <code>&lt;template&gt;</code> 部分应该是类似下面的这段代码</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">&lt;!-- UserSettings.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;h1&gt;User Settings&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;NavBar /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;router-view /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;router-view name=&quot;helper&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>那么我们可以通过下面的路由配置来实现上面的布局：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">  path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/settings&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 你也可以在顶级路由就配置命名视图</span></span>
<span class="line"><span style="color:#B392F0;">  component</span><span style="color:#E1E4E8;">: UserSettings,</span></span>
<span class="line"><span style="color:#B392F0;">  children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;emails&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: UserEmailsSubscriptions</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;profile&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: UserProfile,</span></span>
<span class="line"><span style="color:#E1E4E8;">        helper: UserProfilePreview</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,12)])])}const u=a(p,[["render",o]]);export{d as __pageData,u as default};
