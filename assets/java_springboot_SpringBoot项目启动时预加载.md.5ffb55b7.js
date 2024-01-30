import{_ as s,o as n,c as a,V as p}from"./chunks/framework.364d6ed5.js";const F=JSON.parse('{"title":"SpringBoot 项目启动时预加载","description":"","frontmatter":{},"headers":[],"relativePath":"java/springboot/SpringBoot项目启动时预加载.md","filePath":"java/springboot/SpringBoot项目启动时预加载.md","lastUpdated":1706582708000}'),l={name:"java/springboot/SpringBoot项目启动时预加载.md"},o=p(`<h1 id="springboot-项目启动时预加载" tabindex="-1">SpringBoot 项目启动时预加载 <a class="header-anchor" href="#springboot-项目启动时预加载" aria-label="Permalink to &quot;SpringBoot 项目启动时预加载&quot;">​</a></h1><p><code>Spring Boot</code>启动时预加载一些数据或执行一些初始化操作</p><h2 id="_1-commandlinerunner接口和applicationrunner接口" tabindex="-1">1. CommandLineRunner接口和ApplicationRunner接口 <a class="header-anchor" href="#_1-commandlinerunner接口和applicationrunner接口" aria-label="Permalink to &quot;1.  CommandLineRunner接口和ApplicationRunner接口&quot;">​</a></h2><h3 id="_1-使用" tabindex="-1">1. 使用 <a class="header-anchor" href="#_1-使用" aria-label="Permalink to &quot;1. 使用&quot;">​</a></h3><p><code>Spring Boot</code> 提供了两种接口，<code>CommandLineRunner</code>和<code>ApplicationRunner</code>，它允许在应用程序启动时执行特定的代码。</p><p>使用方式 ： 创建一个实现了这些接口的<code>Bean</code>，并在<code>run</code>方法中编写初始化逻辑。</p><blockquote><p>实现功能 ： 在项目启动时初始化角色，初始失败则退出程序</p></blockquote><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-hafFK" id="tab-IL6dpSK" checked="checked"><label for="tab-IL6dpSK">CommandLineRunner接口</label><input type="radio" name="group-hafFK" id="tab-EDcWuwh"><label for="tab-EDcWuwh">ApplicationRunner接口</label></div><div class="blocks"><div class="language-java active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">boot</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">CommandLineRunner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">stereotype</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Component</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line highlighted"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InitCommandLineRunner</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CommandLineRunner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PermitsService</span><span style="color:#A6ACCD;"> permitsService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> isInit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> permitsService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initRoles</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--系统初始化角色成功--</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--系统初始化角色失败,启动即将停止...--</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">系统初始化角色失败,启动即将停止</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">boot</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ApplicationArguments</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">boot</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ApplicationRunner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line highlighted"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InitApplicationRunner</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApplicationRunner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PermitsService</span><span style="color:#A6ACCD;"> permitsService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ApplicationArguments</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> isInit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> permitsService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initRoles</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--系统初始化角色成功--</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--系统初始化角色失败,启动即将停止...--</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">系统初始化角色失败,启动即将停止</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果在上下文中，存在多个该接口实现类，可以在实现类上使用<code>@order</code>注解，指定加载顺序</p></div><h3 id="_2-两者的区别" tabindex="-1">2. 两者的区别 <a class="header-anchor" href="#_2-两者的区别" aria-label="Permalink to &quot;2. 两者的区别&quot;">​</a></h3><h4 id="_1-参数" tabindex="-1">1. 参数 <a class="header-anchor" href="#_1-参数" aria-label="Permalink to &quot;1.  参数&quot;">​</a></h4><p><code>CommandLineRunner</code>接口中的<code>run</code>方法接受一个<code>String[]</code>类型的参数，这些参数是用户在启动应用程序时通过命令行传入的参数。</p><p><code>ApplicationRunner</code>接口中的<code>run</code>方法接受一个<code>ApplicationArguments</code>类型的参数，这个参数包含了所有的命令行参数和其他环境属性。</p><h4 id="_2-执行顺序" tabindex="-1">2. 执行顺序 <a class="header-anchor" href="#_2-执行顺序" aria-label="Permalink to &quot;2. 执行顺序&quot;">​</a></h4><p>当<code>Spring Boot</code>应用程序启动时，会按照一定的顺序执行相应的接口。通常来说，<code>CommandLineRunner</code>接口的<code>run</code>方法会在<code>ApplicationRunner</code>接口的<code>run</code>方法之前执行。</p><p>如果存在多个实现<code>CommandLineRunner</code>或<code>ApplicationRunner</code>接口的类，可以通过添加<code>@Order</code>注解来指定执行顺序。</p><p>在实际使用中，可以根据具体需求选择合适的接口。</p><h2 id="_2-postconstruct" tabindex="-1">2. @PostConstruct <a class="header-anchor" href="#_2-postconstruct" aria-label="Permalink to &quot;2. @PostConstruct&quot;">​</a></h2><p>该注解是<code>Java jdk</code>提供的注解，而不是<code>Spring</code>框架提供的， <code>JavaEE5</code>引入了<code>@PostConstruct</code>和<code>@PreDestroy</code>两个作用于<code>Servlet</code>生命周期的注解，实现<code>Bean</code>初始化之前和销毁之前的自定义操作。</p><p>该注解的功能：当依赖注入完成后用于执行初始化的方法，并且只会被执行一次。</p><p>该注解的方法在整个<code>Bean</code>初始化中的执行顺序：</p><p><code> Constructor(构造方法) -&gt; @Autowired(依赖注入) -&gt; @PostConstruct(注释的初始化方法)</code></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">annotation</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">PostConstruct</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Utils</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">UserService</span><span style="color:#A6ACCD;"> userService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PostConstruct</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        userService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//userService注入后执行一些初始化操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3-applicationlistener接口" tabindex="-1">3. ApplicationListener接口 <a class="header-anchor" href="#_3-applicationlistener接口" aria-label="Permalink to &quot;3. ApplicationListener接口&quot;">​</a></h2><p><code>ApplicationListener</code>是<code>Spring</code>提供的接口，它允许我们监听<code>Spring</code>应用上下文的事件。</p><p>使用方式 ： 创建一个实现了<code>ApplicationListener</code>接口的<code>Bean</code>，重写<code>onApplicationEvent</code>方法，并在<code>onApplicationEvent</code>方法中编写初始化逻辑。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">context</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ApplicationListener</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">context</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">event</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ContextRefreshedEvent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">stereotype</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Component</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InitApplicationListener</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApplicationListener</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">ContextRefreshedEvent</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onApplicationEvent</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ContextRefreshedEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> isInit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initWxPayConfig</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">isInit</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">微信支付配置初始化失败</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initWxPayConfig</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_4-eventlistener" tabindex="-1">4. @EventListener <a class="header-anchor" href="#_4-eventlistener" aria-label="Permalink to &quot;4. @EventListener&quot;">​</a></h2><p><code>@EventListener</code>是<code>Spring</code>提供的注解，它用于监听<code>Spring</code>上下文的事件，当事件发生时，它会自动调用方法。</p><p>使用<code>@EventListener</code>注解来<strong>创建事件监听器方法</strong>。这种方式更加灵活，允许您在普通的<code>Spring Bean</code>方法上添加事件监听器。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">context</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">event</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ContextRefreshedEvent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">stereotype</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Component</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">context</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">event</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">EventListener</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyEventListener</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EventListener</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ContextRefreshedEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onContextRefreshedEvent</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 在这里执行初始化操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,31),e=[o];function r(c,t,i,y,D,C){return n(),a("div",null,e)}const b=s(l,[["render",r]]);export{F as __pageData,b as default};
