import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"CleanWebpackPlugin","description":"","frontmatter":{"title":"CleanWebpackPlugin","date":"2022-07-12T16:34:47.000Z","permalink":"/pages/356ebd/","categories":["modules","webpack","plugin原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/plugin原理/CleanWebpackPlugin.md","filePath":"modules/webpack/plugin原理/CleanWebpackPlugin.md","lastUpdated":1777258973000}'),o={name:"modules/webpack/plugin原理/CleanWebpackPlugin.md"};function e(c,s,t,r,E,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-作用" tabindex="-1">1. 作用 <a class="header-anchor" href="#_1-作用" aria-label="Permalink to “1. 作用”">​</a></h2><p>在 <code>webpack</code>打包输出前将上次打包内容清空。</p><h2 id="_2-开发思路" tabindex="-1">2. 开发思路 <a class="header-anchor" href="#_2-开发思路" aria-label="Permalink to “2. 开发思路”">​</a></h2><ul><li><ol><li>如何在打包输出前执行？</li></ol><ul><li>需要使用 compiler.hooks.emit 钩子, 它是打包输出前触发。</li></ul></li><li><ol start="2"><li>如何清空上次打包内容？</li></ol><ul><li>如何清空上次打包内容？</li><li>通过文件操作清空内容：通过 compiler.outputFileSystem 操作文件。</li></ul></li></ul><h2 id="_3-实现" tabindex="-1">3. 实现 <a class="header-anchor" href="#_3-实现" aria-label="Permalink to “3. 实现”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// plugins/clean-webpack-plugin.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CleanWebpackPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取操作文件的对象</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> compiler.outputFileSystem;</span></span>
<span class="line"><span style="color:#6A737D;">    // emit是异步串行钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;CleanWebpackPlugin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 获取输出文件目录</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> outputPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> compiler.options.output.path;</span></span>
<span class="line"><span style="color:#6A737D;">        // 删除目录所有文件</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> err</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFiles</span><span style="color:#E1E4E8;">(fs, outputPath);</span></span>
<span class="line"><span style="color:#6A737D;">        // 执行成功err为undefined，执行失败err就是错误原因</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  removeFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 读取当前目录下所有文件</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> files</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdirSync</span><span style="color:#E1E4E8;">(path);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 遍历文件，删除</span></span>
<span class="line"><span style="color:#E1E4E8;">      files.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 获取文件完整路径</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> filePath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">file</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        // 分析文件</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> fileStat</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">statSync</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#6A737D;">        // 判断是否是文件夹</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (fileStat.</span><span style="color:#B392F0;">isDirectory</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 是文件夹需要递归遍历删除下面所有文件</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFiles</span><span style="color:#E1E4E8;">(fs, filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 不是文件夹就是文件，直接删除</span></span>
<span class="line"><span style="color:#E1E4E8;">          fs.</span><span style="color:#B392F0;">unlinkSync</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 最后删除当前目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">rmdirSync</span><span style="color:#E1E4E8;">(path);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将产生的错误返回出去</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> CleanWebpackPlugin;</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
