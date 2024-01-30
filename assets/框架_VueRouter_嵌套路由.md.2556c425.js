import{_ as s,o as n,c as a,V as l}from"./chunks/framework.364d6ed5.js";const F=JSON.parse('{"title":"嵌套路由","description":"","frontmatter":{"title":"嵌套路由","date":"2021-12-30T16:08:52.000Z","permalink":"/pages/3d9c71/","categories":["框架","VueRouter"],"tags":[null]},"headers":[],"relativePath":"框架/VueRouter/嵌套路由.md","filePath":"框架/VueRouter/嵌套路由.md","lastUpdated":1685623283000}'),p={name:"框架/VueRouter/嵌套路由.md"},e=l(`<p>应用程序程序的<code>UI</code>是由多层<strong>嵌套的组件</strong>组成。这中情况下，<code>URL</code>的片段通常对应于特定的嵌套组件解构，如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/user/johnny/profile                     /user/johnny/posts</span></span>
<span class="line"><span style="color:#A6ACCD;">+------------------+                  +-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| User             |                  | User            |</span></span>
<span class="line"><span style="color:#A6ACCD;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#A6ACCD;">| | Profile      | |  +------------&gt;  | | Posts       | |</span></span>
<span class="line"><span style="color:#A6ACCD;">| |              | |                  | |             | |</span></span>
<span class="line"><span style="color:#A6ACCD;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#A6ACCD;">+------------------+                  +-----------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>通过<code>Vue Router</code> 我们可以使用<strong>嵌套的路由配置</strong>来表示这种关系：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/user/:id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 当 /user/:id/profile 匹配成功</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// UserProfile 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> UserProfile</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 当 /user/:id/posts 匹配成功</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// UserPosts 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">posts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> UserPosts</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>在单文件组件中，我们使用内置组件<code>&lt;router-view&gt;&lt;/router-view&gt;</code>来匹配组件。</p><p>注意：以<code>/</code>开头的嵌套路劲将被视为<code>根路径</code>。</p>`,6),o=[e];function r(c,t,i,D,y,C){return n(),a("div",null,o)}const A=s(p,[["render",r]]);export{F as __pageData,A as default};
