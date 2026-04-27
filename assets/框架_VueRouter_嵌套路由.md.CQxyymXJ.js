import{_ as n,o as a,c as p,ak as e}from"./chunks/framework.DLt_otXO.js";const u=JSON.parse('{"title":"嵌套路由","description":"","frontmatter":{"title":"嵌套路由","date":"2021-12-30T16:08:52.000Z","permalink":"/pages/3d9c71/","categories":["框架","VueRouter"],"tags":[null]},"headers":[],"relativePath":"框架/VueRouter/嵌套路由.md","filePath":"框架/VueRouter/嵌套路由.md","lastUpdated":1777258973000}'),l={name:"框架/VueRouter/嵌套路由.md"};function o(t,s,c,r,i,E){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>应用程序程序的<code>UI</code>是由多层<strong>嵌套的组件</strong>组成。这中情况下，<code>URL</code>的片段通常对应于特定的嵌套组件解构，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span>/user/johnny/profile                     /user/johnny/posts</span></span>
<span class="line"><span>+------------------+                  +-----------------+</span></span>
<span class="line"><span>| User             |                  | User            |</span></span>
<span class="line"><span>| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span>| | Profile      | |  +------------&gt;  | | Posts       | |</span></span>
<span class="line"><span>| |              | |                  | |             | |</span></span>
<span class="line"><span>| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span>+------------------+                  +-----------------+</span></span></code></pre></div><p>通过<code>Vue Router</code> 我们可以使用<strong>嵌套的路由配置</strong>来表示这种关系：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> routes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/user/:id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: User,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当 /user/:id/profile 匹配成功</span></span>
<span class="line"><span style="color:#6A737D;">        // UserProfile 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&quot;profile&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        component: UserProfile,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当 /user/:id/posts 匹配成功</span></span>
<span class="line"><span style="color:#6A737D;">        // UserPosts 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&quot;posts&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        component: UserPosts,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><p>在单文件组件中，我们使用内置组件<code>&lt;router-view&gt;&lt;/router-view&gt;</code>来匹配组件。</p><p>注意：以<code>/</code>开头的嵌套路劲将被视为<code>根路径</code>。</p>`,6)])])}const y=n(l,[["render",o]]);export{u as __pageData,y as default};
