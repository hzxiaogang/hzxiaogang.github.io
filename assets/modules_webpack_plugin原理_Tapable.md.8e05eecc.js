import{_ as o,o as e,c as l,V as a}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"Tapable","description":"","frontmatter":{"title":"Tapable","date":"2022-07-13T10:37:47.000Z","permalink":"/pages/7cc6cd/","categories":["modules","webpack","plugin原理"],"tags":[null]},"headers":[],"relativePath":"modules/webpack/plugin原理/Tapable.md","filePath":"modules/webpack/plugin原理/Tapable.md","lastUpdated":1685623283000}'),c={name:"modules/webpack/plugin原理/Tapable.md"},d=a('<h2 id="_1-开始" tabindex="-1">1. 开始 <a class="header-anchor" href="#_1-开始" aria-label="Permalink to &quot;1. 开始&quot;">​</a></h2><p><code>webpack</code>打包原理是从入口文件开始分析<code>AST</code>，递归收集依赖，然后生成最终的<code>code</code>。<code>webpack</code>插件是始终贯穿始终的，其插件系统借助了<code>Tapable</code>，<code>Tapable</code>也是<code>webpack</code>团队开发的，其本质是一种<strong>发布订阅模式</strong>。 任何复杂的逻辑都可以抽象成一个插件，在相应的生命周期阶段触发即可。</p><h2 id="_2-tapable" tabindex="-1">2. Tapable <a class="header-anchor" href="#_2-tapable" aria-label="Permalink to &quot;2. Tapable&quot;">​</a></h2><p><code>Tapable</code>是独立发布的，也就是其可以搭配任何库。</p><h3 id="_2-1-基础钩子" tabindex="-1">2.1 基础钩子 <a class="header-anchor" href="#_2-1-基础钩子" aria-label="Permalink to &quot;2.1 基础钩子&quot;">​</a></h3><p><code>Tapable</code>的钩子按照<strong>回调执行方式</strong>可以分为以下几种：</p><ul><li><ol><li><code>basic</code> : 钩子名子不带<code>Waterfall</code>，<code>Bail</code>，<code>Loop</code>。其回调的执行方式是按照添加的顺序依次执行。</li></ol></li><li><ol start="2"><li><code>Waterfall</code> : 也是依次执行，不同的是执行过程中会把上一个回调的结果传递给下一个回调。</li></ol></li><li><ol start="3"><li><code>Bail</code> : 允许提前退出，当<strong>某一个回调</strong>返回**非<code>undefined</code>**时，不再继续执行。</li></ol></li><li><ol start="4"><li><code>Loop</code> : 插件执行过程中，如果有一个不返回<code>udnefined</code>，则又从第一个开始。也就是除非所有回调都返回<code>undefined</code>，否则会一直进行。</li></ol></li></ul><p>此外，<code>Tapable</code>的钩子又可以按照<strong>同步和异步</strong>分为以下类型：</p><ul><li><ol><li><code>Sync</code> : 同步钩子，只能用<code>hook.tab()</code>注册回调</li></ol></li><li><ol start="2"><li><code>AsyncSeries</code> : 异步钩子串行。可以使用<code>hook.tap()</code>，<code>hook.tabAsync()</code>，<code>hook.tabAsyncPromise()</code>等方法注册回调。</li></ol></li><li><ol start="3"><li><code>AsyncParallel</code> : 异步钩子并行执行，注册回调的方式同<code>AsyncSeries</code></li></ol></li></ul><p>由于<code>AsyncParallel</code>异步并行钩子不能和<code>Waterfall</code>，<code>Loop</code>结合，因为前者是<strong>并行执行</strong>，后者是<strong>顺序执行</strong>，二者矛盾。所以最终结合后的钩子类型有 <code>3*4-2 = 10</code>种。即<code>webpack</code>中的钩子有<code>10</code>种类型。每种类型的钩子都包含很多具体的钩子。</p><ul><li><ol><li><code>SyncHook</code></li></ol></li><li><ol start="2"><li><code>SyncBailHook</code></li></ol></li><li><ol start="3"><li><code>SyncWaterfallHook</code></li></ol></li><li><ol start="4"><li><code>SyncLoopHook</code></li></ol></li><li><ol start="5"><li><code>AsyncParallelHook</code></li></ol></li><li><ol start="6"><li><code>AsyncParallelBailHook</code></li></ol></li><li><ol start="7"><li><code>AsyncSeriesHook</code></li></ol></li><li><ol start="8"><li><code>AsyncSeriesBailHook</code></li></ol></li><li><ol start="9"><li><code>AsyncSeriesLoopHook</code></li></ol></li><li><ol start="10"><li><code>AsyncSeriesWaterfallHook</code></li></ol></li></ul><h3 id="_2-2-拦截器" tabindex="-1">2.2 拦截器 <a class="header-anchor" href="#_2-2-拦截器" aria-label="Permalink to &quot;2.2 拦截器&quot;">​</a></h3><p><code>Tapable</code>中也实现了<strong>拦截器</strong>功能，其可以在<strong>注册/执行回调</strong>等过程中触发。 拦截器的类型有：</p><ul><li><ol><li>定义 <code>tap</code>/<code>tapAsync</code>/<code>tapPromise</code> 时触发</li></ol></li><li><ol start="2"><li>定义 <code>tap</code>/<code>tapAsync</code>/<code>tapPromise</code> 时触发</li></ol></li><li><ol start="3"><li>执行 <code>tap</code>/<code>tapAsync</code>/<code>tapPromise</code> 定义的内容时触发。</li></ol></li><li><ol start="4"><li><code>loop</code> 类型的钩子执行时触发。</li></ol></li></ul><h3 id="_2-3-hookmap-multihook" tabindex="-1">2.3 HookMap/MultiHook <a class="header-anchor" href="#_2-3-hookmap-multihook" aria-label="Permalink to &quot;2.3 HookMap/MultiHook&quot;">​</a></h3><p>另外 <code>Tapable</code> 还提供了 <code>HookMap</code> 和 <code>MultiHook</code> 等功能。 <code>HookMap</code> 是一个 <code>Hooks</code> 映射的帮助类，实际就是一个 <code>hook</code> 的 <code>key-value</code> 数组。<code>MultiHook</code> 就是把其他的 <code>hook</code> 转化为一个新的 <code>hook</code>。 <code>Tapable</code> 的核心还是上面，这些是<strong>辅助工具</strong>。</p><h3 id="_2-4-tapable-实现原理" tabindex="-1">2.4 Tapable 实现原理 <a class="header-anchor" href="#_2-4-tapable-实现原理" aria-label="Permalink to &quot;2.4 Tapable 实现原理&quot;">​</a></h3>',17),i=[d];function t(r,s,n,p,k,h){return e(),l("div",null,i)}const _=o(c,[["render",t]]);export{u as __pageData,_ as default};
