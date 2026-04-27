import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"css处理","description":"","frontmatter":{"title":"css处理","date":"2022-07-09T15:14:38.000Z","permalink":"/pages/e72df1/","categories":["modules","webpack","基础"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/基础/css处理.md","filePath":"modules/webpack/基础/css处理.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/基础/css处理.md"};function e(t,s,c,E,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-提起-css-为单独文件" tabindex="-1">1. 提起 css 为单独文件 <a class="header-anchor" href="#_1-提起-css-为单独文件" aria-label="Permalink to “1. 提起 css 为单独文件”">​</a></h2><h3 id="_1-1-功能描述" tabindex="-1">1.1 功能描述 <a class="header-anchor" href="#_1-1-功能描述" aria-label="Permalink to “1.1 功能描述”">​</a></h3><p><code>Css</code>文件目前被打包到 <code>js</code>文件中，当 <code>js</code>文件加载时，会创建一个 <code>style</code>标签来生成样式。这样对于网站来说，会出现闪屏现象，用户体验不好。我们应该是单独的 <code>Css</code>文件，通过 \`link\`\` 标签加载性能才好</p><h3 id="_1-2-下载包" tabindex="-1">1.2 下载包 <a class="header-anchor" href="#_1-2-下载包" aria-label="Permalink to “1.2 下载包”">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> i</span><span style="color:#9ECBFF;"> mini-css-extract-plugin</span><span style="color:#79B8FF;"> -D</span></span></code></pre></div><ul><li><ol><li>mini-css-extract-plugin</li></ol></li></ul><h3 id="_1-3-配置" tabindex="-1">1.3 配置 <a class="header-anchor" href="#_1-3-配置" aria-label="Permalink to “1.3 配置”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> MiniCssExtractPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
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
<span class="line"><span style="color:#6A737D;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#6A737D;">          // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#6A737D;">          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">          // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line highlighted"><span style="color:#6A737D;">    // 提取css成单独文件</span></span>
<span class="line highlighted"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#6A737D;">      // 定义输出文件名和目录</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  // devServer: {</span></span>
<span class="line"><span style="color:#6A737D;">  //   host: &quot;localhost&quot;,</span><span style="color:#6A737D;"> // 启动服务器域名</span></span>
<span class="line"><span style="color:#6A737D;">  //   port: &quot;3000&quot;,</span><span style="color:#6A737D;"> // 启动服务器端口号</span></span>
<span class="line"><span style="color:#6A737D;">  //   open: true,</span><span style="color:#6A737D;"> // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#6A737D;">  // },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>执行打包指令后，我们会发现<code>dist</code>目录下多了一个<code>main.css</code>文件</p><h2 id="_2-css-兼容性处理" tabindex="-1">2. css 兼容性处理 <a class="header-anchor" href="#_2-css-兼容性处理" aria-label="Permalink to “2. css 兼容性处理”">​</a></h2><h3 id="_2-1-下载包" tabindex="-1">2.1 下载包 <a class="header-anchor" href="#_2-1-下载包" aria-label="Permalink to “2.1 下载包”">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> i</span><span style="color:#9ECBFF;"> postcss-loader</span><span style="color:#9ECBFF;"> postcss</span><span style="color:#9ECBFF;"> postcss-preset-env</span><span style="color:#79B8FF;"> -D</span></span></code></pre></div><ul><li><ol><li>postcss-loader</li></ol></li><li><ol start="2"><li>postcss</li></ol></li><li><ol start="3"><li>postcss-preset-env</li></ol></li></ul><h3 id="_2-2-配置" tabindex="-1">2.2 配置 <a class="header-anchor" href="#_2-2-配置" aria-label="Permalink to “2.2 配置”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> MiniCssExtractPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 获取处理样式的Loaders</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getStyleLoaders</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">preProcessor</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    MiniCssExtractPlugin.loader,</span></span>
<span class="line highlighted"><span style="color:#9ECBFF;">    &quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          plugins: [</span></span>
<span class="line highlighted"><span style="color:#9ECBFF;">            &quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    preProcessor,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ].</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">};</span></span>
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
<span class="line"><span style="color:#6A737D;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#6A737D;">          // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#6A737D;">          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">          // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#6A737D;">    // 提取css成单独文件</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  // devServer: {</span></span>
<span class="line"><span style="color:#6A737D;">  //   host: &quot;localhost&quot;,</span><span style="color:#6A737D;"> // 启动服务器域名</span></span>
<span class="line"><span style="color:#6A737D;">  //   port: &quot;3000&quot;,</span><span style="color:#6A737D;"> // 启动服务器端口号</span></span>
<span class="line"><span style="color:#6A737D;">  //   open: true,</span><span style="color:#6A737D;"> // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#6A737D;">  // },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="_2-3-控制兼容性" tabindex="-1">2.3 控制兼容性 <a class="header-anchor" href="#_2-3-控制兼容性" aria-label="Permalink to “2.3 控制兼容性”">​</a></h3><p>我们可以在 <code>package.json</code> 文件中添加 <code>browserslist</code> 来控制样式的兼容性做到什么<strong>程度</strong>。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">  // 其他省略</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;browserslist&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;last 2 version&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&gt; 1%&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;not dead&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>执行打包命令后，我们会发现<code>css</code>的属性会带上适配各种浏览器的<strong>前缀</strong> 。想要知道更多的 <code>browserslist</code>配置，查看 <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">browserslist 文档</a></p><h2 id="_3-css-压缩" tabindex="-1">3. css 压缩 <a class="header-anchor" href="#_3-css-压缩" aria-label="Permalink to “3. css 压缩”">​</a></h2><h3 id="_3-1-下载包" tabindex="-1">3.1 下载包 <a class="header-anchor" href="#_3-1-下载包" aria-label="Permalink to “3.1 下载包”">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> i</span><span style="color:#9ECBFF;"> css-minimizer-webpack-plugin</span><span style="color:#79B8FF;"> -D</span></span></code></pre></div><ul><li>css-minimizer-webpack-plugin</li></ul><h3 id="_3-2-配置" tabindex="-1">3.2 配置 <a class="header-anchor" href="#_3-2-配置" aria-label="Permalink to “3.2 配置”">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HtmlWebpackPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> MiniCssExtractPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CssMinimizerPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
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
<span class="line"><span style="color:#6A737D;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#6A737D;">          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#6A737D;">          // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#6A737D;">          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">          // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#6A737D;">    // 提取css成单独文件</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line highlighted"><span style="color:#6A737D;">    // css压缩</span></span>
<span class="line highlighted"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> CssMinimizerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  // devServer: {</span></span>
<span class="line"><span style="color:#6A737D;">  //   host: &quot;localhost&quot;,</span><span style="color:#6A737D;"> // 启动服务器域名</span></span>
<span class="line"><span style="color:#6A737D;">  //   port: &quot;3000&quot;,</span><span style="color:#6A737D;"> // 启动服务器端口号</span></span>
<span class="line"><span style="color:#6A737D;">  //   open: true,</span><span style="color:#6A737D;"> // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#6A737D;">  // },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,25)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
