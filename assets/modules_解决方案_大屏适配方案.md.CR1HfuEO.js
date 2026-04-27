import{_ as n,o as a,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"大屏适配方案","description":"","frontmatter":{"title":"大屏适配方案","date":"2021-12-23T13:52:32.000Z","permalink":"/pages/aee27c/","categories":["modules","解决方案"],"tags":[null]},"headers":[],"relativePath":"modules/解决方案/大屏适配方案.md","filePath":"modules/解决方案/大屏适配方案.md","lastUpdated":1777258973000}'),o={name:"modules/解决方案/大屏适配方案.md"};function e(t,s,c,E,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="_1-背景" tabindex="-1">1. 背景 <a class="header-anchor" href="#_1-背景" aria-label="Permalink to “1. 背景”">​</a></h2><p>我们开发的大屏在不同的分辨率会出现显示错乱的情况。我们可以采用CSS3的缩放<code>transform:scale(X)</code>属性，解决页面错乱问题，实现多种分辨率的大屏适配。</p><h2 id="_2-实现细节" tabindex="-1">2. 实现细节 <a class="header-anchor" href="#_2-实现细节" aria-label="Permalink to “2. 实现细节”">​</a></h2><p>当美工给我们一份设计稿的时候，假如是 <code>1440x900px</code>,那么我们就以这个基准去开发。监听浏览器的缩放事件<code>resize</code>，当浏览器宽高变化的时候，通过浏览器的宽高和设计稿的宽高的比值获取缩放比例，然后实时设置内容的<code>transform:scale(X)</code>。</p><h2 id="_3-封装组件" tabindex="-1">3. 封装组件 <a class="header-anchor" href="#_3-封装组件" aria-label="Permalink to “3. 封装组件”">​</a></h2><p>ScreenPane 组件</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">    .screen-pane : 浏览器的宽高</span></span>
<span class="line"><span style="color:#6A737D;">    .wrapper ： 设计稿的宽高(定死宽和高，缩放的时候设置scale值)</span></span>
<span class="line"><span style="color:#6A737D;">    </span></span>
<span class="line"><span style="color:#6A737D;">    .screen-pane 宽高和设计稿的宽高比值 获取缩放比（取最小值）</span></span>
<span class="line"><span style="color:#6A737D;">  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;screen-pane&quot;</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pane&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;wrapper&quot;</span><span style="color:#B392F0;"> :style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;wrapperStyle&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default:</span><span style="color:#79B8FF;">1440</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default:</span><span style="color:#79B8FF;">900</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      screen: </span><span style="color:#79B8FF;">undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#B392F0;">    wrapperStyle</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> style </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.width </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.height </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.screen){</span></span>
<span class="line"><span style="color:#6A737D;">        // 取最小值</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> scale </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.screen.width </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.width, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.screen.height </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.height);</span></span>
<span class="line"><span style="color:#E1E4E8;">        style.transform </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`scale(\${</span><span style="color:#E1E4E8;">scale</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        // 修改被转换元素的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        style.transformOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;0 0&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        // 居中</span></span>
<span class="line"><span style="color:#E1E4E8;">        style.marginLeft </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.screen.width </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> scale)</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;"> +</span><span style="color:#9ECBFF;"> &#39;px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        style.visibility </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;hidden&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> style;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;resize&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initScreen, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initScreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  destroyed</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;resize&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initScreen);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    initScreen</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> elem </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$refs.pane;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.screen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: elem.offsetWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: elem.offsetHeight</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.screen-pane</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">radial-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">circle</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#11368E</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#111C39</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">  &amp;::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">center</span><span style="color:#79B8FF;"> center</span><span style="color:#79B8FF;"> no-repeat</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">cover</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="_4-使用" tabindex="-1">4. 使用 <a class="header-anchor" href="#_4-使用" aria-label="Permalink to “4. 使用”">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">screen-pane</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;div&gt;大家好，我是大屏的内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">screen-pane</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>注意 ： 页面缩放时，<code>g2</code>图形的交互和坐标会错位，可以添加<code>supportCSSTransform:true</code>属性，使图表在css transform下<strong>事件和交互</strong>都生效。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Chart } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;@antv/g2&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> chart</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Chart</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  container: chartDom,</span></span>
<span class="line"><span style="color:#E1E4E8;">  supportCSSTransform: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoFit: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div>`,11)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
