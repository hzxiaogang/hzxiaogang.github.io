import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const i=JSON.parse('{"title":"多页面","description":"","frontmatter":{"title":"多页面","date":"2021-12-17T10:52:25.000Z","permalink":"/pages/f6d128/","categories":["modules","webpack"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/多页面.md","filePath":"modules/webpack/多页面.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/多页面.md"};function e(c,s,t,E,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-项目结构" tabindex="-1">1.项目结构 <a class="header-anchor" href="#_1-项目结构" aria-label="Permalink to “1.项目结构”">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#B392F0;">webpack-demo</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> package-loacl.json</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> webpack.config.js</span><span style="color:#6A737D;">           # webpack配置文件</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> dist</span><span style="color:#6A737D;">                        # 分发代码文件夹 （自动创建）</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> chanel1</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#F97583;">    |</span><span style="color:#B392F0;">   └──</span><span style="color:#9ECBFF;"> index.html</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#F97583;">    |</span><span style="color:#B392F0;">   └──</span><span style="color:#9ECBFF;"> main.js</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> chanel2</span><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#F97583;">    |</span><span style="color:#B392F0;">   └──</span><span style="color:#9ECBFF;"> index2.html</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#F97583;">    |</span><span style="color:#B392F0;">   └──</span><span style="color:#9ECBFF;"> main2.js</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> common</span><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#F97583;">    |</span><span style="color:#B392F0;">   └──</span><span style="color:#9ECBFF;"> lodash.js</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> src</span><span style="color:#6A737D;">                        # 源代码文件夹</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> app.js</span><span style="color:#E1E4E8;">               </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> app2.js</span><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> app3.js</span><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> index.html</span><span style="color:#E1E4E8;">         </span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#B392F0;">    └──</span><span style="color:#9ECBFF;"> index2.html</span></span></code></pre></div><h2 id="_2-实现" tabindex="-1">2 实现 <a class="header-anchor" href="#_2-实现" aria-label="Permalink to “2 实现”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// HtmlWebpackPlugin 根据模板生成html，并把打包的bundle自动引入html</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;html-webpack-plugin&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode:</span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        main: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            import: [</span><span style="color:#9ECBFF;">&#39;./src/app.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./src/app2.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            dependOn: </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&#39;chanel1/[name].js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        main2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            import: </span><span style="color:#9ECBFF;">&#39;./src/app3.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dependOn: </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&#39;chanel2/[name].js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        lodash: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            import :</span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename:</span><span style="color:#9ECBFF;">&quot;common/[name].js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    devtool: </span><span style="color:#9ECBFF;">&#39;inline-source-map&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;多页面应用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&#39;./src/index.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&#39;chanel1/index.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            inject: </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: [</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            publicPath:</span><span style="color:#9ECBFF;">&#39;http://www.a.com/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;多页面应用2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&#39;./src/index2.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            inject: </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&#39;chanel2/index2.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: [</span><span style="color:#9ECBFF;">&#39;main2&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            publicPath:</span><span style="color:#9ECBFF;">&quot;http://www.b.com/&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        clean: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,4)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
