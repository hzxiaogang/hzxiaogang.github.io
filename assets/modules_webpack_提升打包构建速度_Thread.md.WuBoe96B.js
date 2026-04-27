import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"Thread","description":"","frontmatter":{"title":"Thread","date":"2022-07-09T15:56:47.000Z","permalink":"/pages/97450d/","categories":["modules","webpack","高级","提升打包构建速度"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/提升打包构建速度/Thread.md","filePath":"modules/webpack/提升打包构建速度/Thread.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/提升打包构建速度/Thread.md"};function e(t,s,c,E,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-为什么" tabindex="-1">1. 为什么 <a class="header-anchor" href="#_1-为什么" aria-label="Permalink to “1. 为什么”">​</a></h2><p>当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码。这个速度是比较慢的。</p><p>我们想要继续提升打包速度，其实就是要提升 <code>js</code>的打包速度，因为其他文件都比较少。</p><p>而对 <code>js</code>文件处理主要就是 <code>eslint</code>、<code>babel</code>、<code>Terser</code> 三个工具，所以我们要提升它们的运行速度。</p><p>我们可以开启多进程同时处理 <code>js</code>文件，这样速度就比之前的单进程打包更快了</p><h2 id="_2-是什么" tabindex="-1">2. 是什么 <a class="header-anchor" href="#_2-是什么" aria-label="Permalink to “2. 是什么”">​</a></h2><p>多进程打包：开启电脑的多个进程同时干一件事，速度更快。 <strong>需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。</strong></p><h2 id="_3-怎么使用" tabindex="-1">3. 怎么使用 <a class="header-anchor" href="#_3-怎么使用" aria-label="Permalink to “3. 怎么使用”">​</a></h2><h3 id="_3-1-获取-cpu-的核数-因为每个电脑都不一样" tabindex="-1">3.1 获取 CPU 的核数，因为每个电脑都不一样 <a class="header-anchor" href="#_3-1-获取-cpu-的核数-因为每个电脑都不一样" aria-label="Permalink to “3.1 获取 CPU 的核数，因为每个电脑都不一样”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> os</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> threads</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h3 id="_3-2-下载包" tabindex="-1">3.2 下载包 <a class="header-anchor" href="#_3-2-下载包" aria-label="Permalink to “3.2 下载包”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">npm i thread</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">D</span></span></code></pre></div><h3 id="_3-3-使用" tabindex="-1">3.3 使用 <a class="header-anchor" href="#_3-3-使用" aria-label="Permalink to “3.3 使用”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> os</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> MiniCssExtractPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CssMinimizerPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> TerserPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> threads</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取处理样式的Loaders</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getStyleLoaders</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">preProcessor</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    preProcessor,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ].</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../dist&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 生产模式需要输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">    clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#6A737D;">            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
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
<span class="line"><span style="color:#6A737D;">            // exclude: /node_modules/,</span><span style="color:#6A737D;"> // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">            include: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            use: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> ESLintWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      context: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      exclude: </span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">      cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启缓存</span></span>
<span class="line"><span style="color:#6A737D;">      // 缓存目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheLocation: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        __dirname,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#6A737D;">      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="color:#E1E4E8;">      template: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#6A737D;">    // 提取css成单独文件</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#6A737D;">    // css压缩</span></span>
<span class="line highlighted"><span style="color:#6A737D;">    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line highlighted"><span style="color:#6A737D;">      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line highlighted"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> CssMinimizerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line highlighted"><span style="color:#6A737D;">      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line highlighted"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        parallel: threads </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      })</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // devServer: {</span></span>
<span class="line"><span style="color:#6A737D;">  //   host: &quot;localhost&quot;,</span><span style="color:#6A737D;"> // 启动服务器域名</span></span>
<span class="line"><span style="color:#6A737D;">  //   port: &quot;3000&quot;,</span><span style="color:#6A737D;"> // 启动服务器端口号</span></span>
<span class="line"><span style="color:#6A737D;">  //   open: true,</span><span style="color:#6A737D;"> // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#6A737D;">  // },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: </span><span style="color:#9ECBFF;">&quot;source-map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,14)])])}const h=n(o,[["render",e]]);export{F as __pageData,h as default};
