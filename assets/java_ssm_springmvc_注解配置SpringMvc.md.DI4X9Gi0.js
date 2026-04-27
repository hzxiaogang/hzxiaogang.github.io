import{_ as n,o as a,c as l,ak as p,ed as e}from"./chunks/framework.DLt_otXO.js";const d=JSON.parse('{"title":"注解配置SpringMvc","description":"","frontmatter":{"title":"注解配置SpringMvc","date":"2022-10-17T11:28:54.000Z","permalink":"/pages/816a72/","categories":["java","ssm","springmvc"],"tags":[null]},"headers":[],"relativePath":"java/ssm/springmvc/注解配置SpringMvc.md","filePath":"java/ssm/springmvc/注解配置SpringMvc.md","lastUpdated":1777258973000}'),o={name:"java/ssm/springmvc/注解配置SpringMvc.md"};function t(r,s,c,E,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p('<h1 id="注解配置springmvc" tabindex="-1">注解配置SpringMvc <a class="header-anchor" href="#注解配置springmvc" aria-label="Permalink to “注解配置SpringMvc”">​</a></h1><p>注解配置<code>SpringMVC</code>即使用<strong>配置类</strong>和<strong>注解</strong>代替<code>web.xml</code>和<code>SpringMVC</code>配置文件的功能。</p><h2 id="_1-准备工作" tabindex="-1">1. 准备工作 <a class="header-anchor" href="#_1-准备工作" aria-label="Permalink to “1. 准备工作”">​</a></h2><ul><li><ol><li>使用<code>maven</code>创建<code>web</code>工程</li></ol></li><li><ol start="2"><li>配置<code>maven</code>的配置文件</li></ol><ul><li>设置打包方式为<code>war</code></li><li>配置依赖</li></ul></li><li><ol start="3"><li>项目结构</li></ol></li></ul><img src="'+e+`"><p>项目创建完成后，就可以把<code>resources</code>下默认的<code>web.xml</code>删除了。</p><h2 id="_2-创建初始化类-代替-web-xml" tabindex="-1">2. 创建初始化类，代替 web.xml <a class="header-anchor" href="#_2-创建初始化类-代替-web-xml" aria-label="Permalink to “2. 创建初始化类，代替 web.xml”">​</a></h2><p>在 <code>Servlet3.0</code> 环境中，容器会在类路径中查找实现 <code>javax.servlet.ServletContainerInitializer</code> 接口的类， 如果找到的话就用它来配置 <code>Servlet</code> 容器。</p><p><code>Spring</code> 提供了这个接口的实现，名为 <code>SpringServletContainerInitializer</code>，这个类反过来又会查找实现 <code>WebApplicationInitializer</code> 的类并将配 置的任务交给它们来完成。</p><p><code>Spring3.2</code> 引入了一个便利的 <code>WebApplicationInitializer</code> 基础实现，名为 <code>AbstractAnnotationConfigDispatcherServletInitializer</code>，当我们的类扩展了 <code>AbstractAnnotationConfigDispatcherServletInitializer</code> 并将其部署到 <code>Servlet3.0</code>容器的时候，容器会自 动发现它，并用它来配置 <code>Servlet</code>上下文。</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WebInit</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> AbstractAnnotationConfigDispatcherServletInitializer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置一个配置类代理Spring的配置文件</span></span>
<span class="line"><span style="color:#F97583;">  protected</span><span style="color:#E1E4E8;"> Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt;[] </span><span style="color:#B392F0;">getRootConfigClasses</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#F97583;"> Class</span><span style="color:#E1E4E8;">[]{SpringConfig.class};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置一个配置类代替SpringMvc的配置文件</span></span>
<span class="line"><span style="color:#F97583;">  protected</span><span style="color:#E1E4E8;"> Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt;[] </span><span style="color:#B392F0;">getServletConfigClasses</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#F97583;"> Class</span><span style="color:#E1E4E8;">[]{WebInit.class};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  //设置SpringMVC的前端控制器DispatcherServlet的 url-pattern</span></span>
<span class="line"><span style="color:#F97583;">  protected</span><span style="color:#F97583;"> String</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getServletMappings</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#F97583;"> String</span><span style="color:#E1E4E8;">[]{</span><span style="color:#9ECBFF;">&quot;/*&quot;</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置过滤器</span></span>
<span class="line"><span style="color:#F97583;">  protected</span><span style="color:#F97583;"> Filter</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getServletFilters</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建编码过滤器</span></span>
<span class="line"><span style="color:#E1E4E8;">    CharacterEncodingFilter characterEncodingFilter </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CharacterEncodingFilter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    characterEncodingFilter.</span><span style="color:#B392F0;">setEncoding</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    characterEncodingFilter.</span><span style="color:#B392F0;">setForceEncoding</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建处理请求方式的过滤器</span></span>
<span class="line"><span style="color:#E1E4E8;">    HiddenHttpMethodFilter hiddenHttpMethodFilter </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HiddenHttpMethodFilter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#F97583;"> Filter</span><span style="color:#E1E4E8;">[]{characterEncodingFilter,hiddenHttpMethodFilter};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-创建-springconfig-配置类-代替-spring-的配置文件" tabindex="-1">3.创建 SpringConfig 配置类，代替 spring 的配置文件 <a class="header-anchor" href="#_3-创建-springconfig-配置类-代替-spring-的配置文件" aria-label="Permalink to “3.创建 SpringConfig 配置类，代替 spring 的配置文件”">​</a></h2><p><code>ssm</code> 整合之后，<code>spring</code> 的配置信息写在此类中</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#6A737D;">// 代替Spring的配置文件</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Configuration</span><span style="color:#6A737D;"> // 将类标识为配置类</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SpringConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-创建-webconfig-配置类-代替-springmvc-的配置文件" tabindex="-1">3.创建 WebConfig 配置类，代替 SpringMVC 的配置文件 <a class="header-anchor" href="#_3-创建-webconfig-配置类-代替-springmvc-的配置文件" aria-label="Permalink to “3.创建 WebConfig 配置类，代替 SpringMVC 的配置文件”">​</a></h2><p>代替 <code>SpringMvc</code> 的配置文件，实现以下功能：</p><ul><li>1.扫描组件</li><li>2.视图解析器</li><li>3.默认的 servlet 处理静态资源</li><li>4.开启 mvc 注解驱动</li><li>5.添加视图控制器</li><li>6.配置文件上传解析器</li><li>7.配置拦截器</li><li>8.配置异常解析器</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Configuration</span><span style="color:#6A737D;"> // 将类标识为配置类</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ComponentScan</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.zhug.controller&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 1.扫描组件</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableWebMvc</span><span style="color:#6A737D;">  // 4.开启mvc注解驱动</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WebConfig</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> WebMvcConfigurer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  // 3.默认的servlet处理静态资源</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> configureDefaultServletHandling</span><span style="color:#E1E4E8;">(DefaultServletHandlerConfigurer </span><span style="color:#FFAB70;">configurer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurer.</span><span style="color:#B392F0;">enable</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#6A737D;">  // 5.添加视图控制器</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> addViewControllers</span><span style="color:#E1E4E8;">(ViewControllerRegistry </span><span style="color:#FFAB70;">registry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    registry.</span><span style="color:#B392F0;">addViewController</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setViewName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //6.配置文件上传解析器</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Bean</span><span style="color:#6A737D;"> //@Bean注解可以将标识的方法的返回值作为Bean进行管理</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#E1E4E8;"> CommonsMultipartResolver </span><span style="color:#B392F0;">multipartResolver</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CommonsMultipartResolver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //7.配置拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> addInterceptors</span><span style="color:#E1E4E8;">(InterceptorRegistry </span><span style="color:#FFAB70;">registry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FirstInterceptor firstInterceptor </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FirstInterceptor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    registry.</span><span style="color:#B392F0;">addInterceptor</span><span style="color:#E1E4E8;">(firstInterceptor)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">addPathPatterns</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/**&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">excludePathPatterns</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/test/hello&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 8.配置异常解析器</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> configureHandlerExceptionResolvers</span><span style="color:#E1E4E8;">(List&lt;</span><span style="color:#F97583;">HandlerExceptionResolver</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#FFAB70;">resolvers</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SimpleMappingExceptionResolver exceptionResolver </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SimpleMappingExceptionResolver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    Properties prop </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Properties</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop.</span><span style="color:#B392F0;">setProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;java.lang.ArithmeticException&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    exceptionResolver.</span><span style="color:#B392F0;">setExceptionMappings</span><span style="color:#E1E4E8;">(prop);</span></span>
<span class="line"><span style="color:#E1E4E8;">    exceptionResolver.</span><span style="color:#B392F0;">setExceptionAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ex&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolvers.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(exceptionResolver);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //2.配置生成模板解析器</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Bean</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#E1E4E8;"> ITemplateResolver </span><span style="color:#B392F0;">templateResolver</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    WebApplicationContext webApplicationContext </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">            ContextLoader.</span><span style="color:#B392F0;">getCurrentWebApplicationContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // ServletContextTemplateResolver需要一个ServletContext作为构造参数，</span></span>
<span class="line"><span style="color:#6A737D;">  //可通过WebApplicationContext 的方法获得</span></span>
<span class="line"><span style="color:#E1E4E8;">    ServletContextTemplateResolver templateResolver </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span></span>
<span class="line"><span style="color:#B392F0;">            ServletContextTemplateResolver</span><span style="color:#E1E4E8;">(webApplicationContext.</span><span style="color:#B392F0;">getServletContext</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    templateResolver.</span><span style="color:#B392F0;">setPrefix</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/WEB-INF/templates/&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    templateResolver.</span><span style="color:#B392F0;">setSuffix</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.html&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    templateResolver.</span><span style="color:#B392F0;">setCharacterEncoding</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    templateResolver.</span><span style="color:#B392F0;">setTemplateMode</span><span style="color:#E1E4E8;">(TemplateMode.HTML);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> templateResolver;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //生成模板引擎并为模板引擎注入模板解析器</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Bean</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#E1E4E8;"> SpringTemplateEngine </span><span style="color:#B392F0;">templateEngine</span><span style="color:#E1E4E8;">(ITemplateResolver </span><span style="color:#FFAB70;">templateResolver</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SpringTemplateEngine templateEngine </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SpringTemplateEngine</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    templateEngine.</span><span style="color:#B392F0;">setTemplateResolver</span><span style="color:#E1E4E8;">(templateResolver);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> templateEngine;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //生成视图解析器并未解析器注入模板引擎</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#F97583;">Bean</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#E1E4E8;"> ViewResolver </span><span style="color:#B392F0;">viewResolver</span><span style="color:#E1E4E8;">(SpringTemplateEngine </span><span style="color:#FFAB70;">templateEngine</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ThymeleafViewResolver viewResolver </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ThymeleafViewResolver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewResolver.</span><span style="color:#B392F0;">setCharacterEncoding</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewResolver.</span><span style="color:#B392F0;">setTemplateEngine</span><span style="color:#E1E4E8;">(templateEngine);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> viewResolver;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,18)])])}const g=n(o,[["render",t]]);export{d as __pageData,g as default};
