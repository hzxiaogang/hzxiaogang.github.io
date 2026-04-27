import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"OneOf","description":"","frontmatter":{"title":"OneOf","date":"2022-07-09T15:56:03.000Z","permalink":"/pages/0fe16f/","categories":["modules","webpack","高级","提升打包构建速度"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/提升打包构建速度/OneOf.md","filePath":"modules/webpack/提升打包构建速度/OneOf.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/提升打包构建速度/OneOf.md"};function e(t,s,E,c,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-为什么" tabindex="-1">1.为什么 <a class="header-anchor" href="#_1-为什么" aria-label="Permalink to “1.为什么”">​</a></h2><p>打包时每个文件都会经过所有<code>loader</code>处理。虽然因为<code>test</code>正则原因，有的<code>loader</code>没有处理。但是都要经过一边。这样就比较慢。</p><h2 id="_2-是什么" tabindex="-1">2. 是什么 <a class="header-anchor" href="#_2-是什么" aria-label="Permalink to “2. 是什么”">​</a></h2><p><code>oneOf</code>就是只能匹配第一个<code>test</code>的正则，剩下的就不匹配了。</p><h2 id="_3-怎么用" tabindex="-1">3. 怎么用 <a class="header-anchor" href="#_3-怎么用" aria-label="Permalink to “3. 怎么用”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#6A737D;">    // clean: true,</span><span style="color:#6A737D;"> // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#6A737D;">            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            generator: {</span></span>
<span class="line"><span style="color:#6A737D;">              // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#6A737D;">              // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#6A737D;">              // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#6A737D;">              // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">              // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">              filename: </span><span style="color:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> ESLintWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      context: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#6A737D;">      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="color:#E1E4E8;">      template: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  // 开发服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启动服务器域名</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#9ECBFF;">&quot;3000&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启动服务器端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">    open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">    hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启HMR功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;development&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: </span><span style="color:#9ECBFF;">&quot;cheap-module-source-map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
