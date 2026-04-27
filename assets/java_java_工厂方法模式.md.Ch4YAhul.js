import{_ as a,o as n,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"工厂方法模式[FactoryMethod]","description":"","frontmatter":{},"headers":[],"relativePath":"java/java/工厂方法模式.md","filePath":"java/java/工厂方法模式.md","lastUpdated":1777258973000}'),o={name:"java/java/工厂方法模式.md"};function e(t,s,c,r,E,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="工厂方法模式-factorymethod" tabindex="-1">工厂方法模式[FactoryMethod] <a class="header-anchor" href="#工厂方法模式-factorymethod" aria-label="Permalink to “工厂方法模式[FactoryMethod]”">​</a></h1><h2 id="_1-模式定义" tabindex="-1">1. 模式定义 <a class="header-anchor" href="#_1-模式定义" aria-label="Permalink to “1. 模式定义”">​</a></h2><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。<code>Factory Method</code> 使得一个类的实例化延迟到子类。</p><h2 id="_2-代码实现" tabindex="-1">2. 代码实现 <a class="header-anchor" href="#_2-代码实现" aria-label="Permalink to “2. 代码实现”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-12" id="tab-13" checked><label data-title="工厂方法模式" for="tab-13">工厂方法模式</label><input type="radio" name="group-12" id="tab-14"><label data-title="使用" for="tab-14">使用</label></div><div class="blocks"><div class="language-java active"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Product</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> method</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">abstract</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Application</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    abstract</span><span style="color:#E1E4E8;"> Product </span><span style="color:#B392F0;">createProduct</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Product </span><span style="color:#B392F0;">getObject</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> createProduct</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProductA</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> Product</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> method</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ProductA.method execute&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProductB</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> Product</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> method</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ProductB.method execute&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConcretateProductA</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Application</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    Product </span><span style="color:#B392F0;">createProduct</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;">  new</span><span style="color:#B392F0;"> ProductA</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConcretateProductB</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Application</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    Product </span><span style="color:#B392F0;">createProduct</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;">  new</span><span style="color:#B392F0;"> ProductB</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> FactoryMethod</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        //让子类决定实例化哪一个类 ConcretateProductA</span></span>
<span class="line"><span style="color:#E1E4E8;">        Application application </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ConcretateProductA</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        Product productA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> application.</span><span style="color:#B392F0;">getObject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        productA.</span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// ProductA.method execute</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        //让子类决定实例化哪一个类 ConcretateProductB</span></span>
<span class="line"><span style="color:#E1E4E8;">        Application application1 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ConcretateProductB</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        Product productB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> application1.</span><span style="color:#B392F0;">getObject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        productB.</span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// ProductB.method execute</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="_3-应用场景" tabindex="-1">3. 应用场景 <a class="header-anchor" href="#_3-应用场景" aria-label="Permalink to “3. 应用场景”">​</a></h2><ul><li><ol><li>当你不知道该使用对象的确切类型的时候</li></ol></li><li><ol start="2"><li>当你希望为库或框架提供扩展内部组件的方法时</li></ol></li></ul><h2 id="_4-主要优点" tabindex="-1">4. 主要优点 <a class="header-anchor" href="#_4-主要优点" aria-label="Permalink to “4. 主要优点”">​</a></h2><ul><li><ol><li>将具体产品和创建者解耦</li></ol></li><li><ol start="2"><li>符合单一职责原则</li></ol></li><li><ol start="3"><li>符合开闭原则</li></ol></li></ul><h2 id="_5-源码中的应用" tabindex="-1">5. 源码中的应用 <a class="header-anchor" href="#_5-源码中的应用" aria-label="Permalink to “5. 源码中的应用”">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">java.net.URLstreamHandlerFactory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">javax.xml.bind.JAXBContext.createMarshaller</span></span></code></pre></div>`,11)])])}const F=a(o,[["render",e]]);export{d as __pageData,F as default};
