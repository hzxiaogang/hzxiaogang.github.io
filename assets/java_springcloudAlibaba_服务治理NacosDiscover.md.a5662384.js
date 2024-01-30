import{_ as s,o as a,c as n,V as l}from"./chunks/framework.364d6ed5.js";const p="/assets/image-1029084800199.7782d412.png",o="/assets/image-20231027111939164.e45e96e4.png",e="/assets/image-20231027112234596.2d1854c6.png",r="/assets/image-20231027112441185.fa0ba304.png",m=JSON.parse('{"title":"第三章 服务治理  Nacos Discovery","description":"","frontmatter":{},"headers":[],"relativePath":"java/springcloudAlibaba/服务治理NacosDiscover.md","filePath":"java/springcloudAlibaba/服务治理NacosDiscover.md","lastUpdated":1706582708000}'),c={name:"java/springcloudAlibaba/服务治理NacosDiscover.md"},t=l('<h1 id="第三章-服务治理-nacos-discovery" tabindex="-1">第三章 服务治理 Nacos Discovery <a class="header-anchor" href="#第三章-服务治理-nacos-discovery" aria-label="Permalink to &quot;第三章 服务治理  Nacos Discovery&quot;">​</a></h1><h2 id="_3-1-什么是服务治理" tabindex="-1">3.1 什么是服务治理 <a class="header-anchor" href="#_3-1-什么是服务治理" aria-label="Permalink to &quot;3.1 什么是服务治理&quot;">​</a></h2><p>服务治理是微服务架构中最核心最基本的模块。用于实现各个微服务的<strong>自动化注册与发现</strong>。</p><p>**服务注册：**在服务治理框架中，都会构建一个注册中心，每个服务单元向注册中心登记自己提供服</p><p>务的详细信息。并在注册中心形成一张服务的清单，服务注册中心需要以心跳的方式去监测清单中</p><p>的服务是否可用，如果不可用，需要在服务清单中剔除不可用的服务。</p><p>**服务发现：**服务调用方向服务注册中心咨询服务，并获取所有服务的实例清单，实现对具体服务实</p><p>例的访问。</p><p><strong><img src="'+p+`" alt="image-1029084800199"></strong></p><p>通过上面的调用图会发现，除了微服务，还有一个组件是<strong>服务注册中心</strong>，它是微服务架构非常重要</p><p>的一个组件，在微服务架构里主要起到了协调者的一个作用。注册中心一般包含如下几个功能：</p><ol><li>服务发现：</li></ol><p>服务注册：保存服务提供者和服务调用者的信息</p><p>服务订阅：服务调用者订阅服务提供者的信息，注册中心向订阅者推送提供者的信息</p><ol start="2"><li>服务健康检测</li></ol><p>检测服务提供者的健康情况，如果发现异常，执行服务剔除</p><h2 id="_3-2-常见注册中心" tabindex="-1">3.2 常见注册中心 <a class="header-anchor" href="#_3-2-常见注册中心" aria-label="Permalink to &quot;3.2 常见注册中心&quot;">​</a></h2><ul><li><p><strong>Zookeeper</strong></p><p>Zookeeper是一个分布式服务框架，是Apache Hadoop 的一个子项目，它主要是用来解决分布式</p></li></ul><p>应用中经常遇到的一些数据管理问题，如：统一命名服务、状态同步服务、集群管理、分布式应用</p><p>配置项的管理等。</p><ul><li><p><strong>Eureka</strong></p><p>Eureka是Springcloud Netflflix中的重要组件，主要作用就是做服务注册和发现。但是现在已经闭</p></li></ul><p>源</p><ul><li><p><strong>Consul</strong></p><p>Consul是基于GO语言开发的开源工具，主要面向分布式，服务化的系统提供服务注册、服务发现</p></li></ul><p>和配置管理的功能。Consul的功能都很实用，其中包括：服务注册/发现、健康检查、Key/Value</p><p>存储、多数据中心和分布式一致性保证等特性。Consul本身只是一个二进制的可执行文件，所以</p><p>安装和部署都非常简单，只需要从官网下载后，在执行对应的启动脚本即可。</p><ul><li><p><strong>Nacos</strong></p><p>Nacos是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。它是 Spring</p></li></ul><p>Cloud Alibaba 组件之一，负责服务注册发现和服务配置。</p><h2 id="_3-3-nacos-简介" tabindex="-1">3.3 Nacos 简介 <a class="header-anchor" href="#_3-3-nacos-简介" aria-label="Permalink to &quot;3.3 Nacos 简介&quot;">​</a></h2><p>Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速</p><p>实现动态服务发现、服务配置、服务元数据及流量管理。</p><p>从上面的介绍就可以看出，Nacos的作用就是一个注册中心，用来管理注册上来的各个微服务。</p><p><strong>核心功能点</strong>:</p><ul><li><p><strong>服务注册</strong>: Nacos Client会通过发送REST请求想Nacos Server注册自己的服务，提供自身的元数据，比如IP地址，端口等信息。Nacos Server接收到注册请求后，就会把这些元数据存储到一个双层的内存Map中。</p></li><li><p><strong>服务心跳</strong>: 在服务注册后，Nacos Client会维护一个定时心跳来维持统治Nacos Server,说明服务一致处于可用状态，防止被剔除，默认5s发送一次心跳</p></li><li><p><strong>服务同步</strong>: Nacos Server集群之间会相互同步服务实例，用来保证服务信息的一致性。</p></li><li><p><strong>服务发现</strong>： 服务消费者(Nacos Client)在调用服务提供的服务时，会发送一个REST请求给Nacos Server,获取上面注册的服务清单，并且缓存在Nacos Client本地,同时会在Nacos Client本地开启一个定时任务拉取服务最新的注册表信息更新到本地缓存。</p></li><li><p><strong>服务健康检查</strong>: Nacos Server 会开启一个定时任务来检查注册服务实例的健康情况，对于超过15s没有收到客户端心跳的实例会将他的healthy属性设置为false(客户端服务发现时不会发现)，如果某个实例超过30s没有收到心跳，直接剔除该实例(被剔除的实例如果恢复发送心跳则会重新注册)</p></li></ul><h2 id="_3-4-nacos实战入门" tabindex="-1">3.4 Nacos实战入门 <a class="header-anchor" href="#_3-4-nacos实战入门" aria-label="Permalink to &quot;3.4 Nacos实战入门&quot;">​</a></h2><p>接下来，我们就在现有的环境中加入nacos，并将我们的两个微服务注册上去。</p><h3 id="_3-4-1-搭建nacos环境" tabindex="-1">3.4.1 搭建Nacos环境 <a class="header-anchor" href="#_3-4-1-搭建nacos环境" aria-label="Permalink to &quot;3.4.1 搭建Nacos环境&quot;">​</a></h3><ol><li><p>安装Nacos</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">下载地址:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/alibaba/nacos/releases</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">下载zip格式的安装包，然后进行解压缩操作,上课使用的Nacos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Server版本是2.0.4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>启动Nacos</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#切换目录 </span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nacos/bin</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#命令启动 </span></span>
<span class="line"><span style="color:#FFCB6B;">startup.cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">standalone</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>访问Nacos</p><p>打开浏览器输入<code>http://localhost:8848/nacos</code>，即可访问服务， 默认密码是nacos/nacos</p></li></ol><p><strong><img src="`+o+`" alt="image-20231027111939164"></strong></p><h3 id="_3-4-2-将商品服务注册到nacos" tabindex="-1">3.4.2 将商品服务注册到Nacos <a class="header-anchor" href="#_3-4-2-将商品服务注册到nacos" aria-label="Permalink to &quot;3.4.2 将商品服务注册到Nacos&quot;">​</a></h3><p>接下来开始修改 shop-product-server 模块的代码， 将其注册到nacos服务上</p><ol><li>在pom.xml中添加Nacos的依赖</li></ol><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--nacos客户端--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.alibaba.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-cloud-starter-alibaba-nacos-discovery</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>在application.yml中添加Nacos服务的地址</li></ol><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nacos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">discovery</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost:8848</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>启动服务， 观察Nacos的控制面板中是否有注册上来的商品微服务</li></ol><p><strong><img src="`+e+`" alt="image-20231027112234596"></strong></p><h3 id="_3-4-3-将订单服务注册到nacos" tabindex="-1">3.4.3 将订单服务注册到Nacos <a class="header-anchor" href="#_3-4-3-将订单服务注册到nacos" aria-label="Permalink to &quot;3.4.3 将订单服务注册到Nacos&quot;">​</a></h3><p>接下来开始修改 shop-order-server 模块的代码， 将其注册到nacos服务上</p><ol><li>在pom.xml中添加Nacos的依赖</li></ol><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--nacos客户端--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.alibaba.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-cloud-starter-alibaba-nacos-discovery</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>在application.yml中添加Nacos服务的地址</li></ol><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nacos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">discovery</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost:8848</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>启动服务， 观察Nacos的控制面板中是否有注册上来的订单微服务</li></ol><p><strong><img src="`+r+`" alt="image-20231027112441185"></strong></p><ol start="4"><li>修改OrderServiceImpl， 实现微服务调用</li></ol><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Service</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Slf4j</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OrderServiceImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OrderService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">OrderDao</span><span style="color:#A6ACCD;"> orderDao</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DiscoveryClient</span><span style="color:#A6ACCD;"> discoveryClient</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RestTemplate</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Order</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createOrder</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">productId</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userId</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">接收到{}号商品的下单请求,接下来调用商品微服务查询此商品信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> productId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//从nacos中获取服务地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ServiceInstance</span><span style="color:#A6ACCD;"> instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> discoveryClient</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">getInstances</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">product-service</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getHost</span><span style="color:#89DDFF;">()+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPort</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//远程调用商品微服务,查询商品信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Product</span><span style="color:#A6ACCD;"> product </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getForObject</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/product/get?pid=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">productId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查询到{}号商品的信息,内容是:{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> productId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toJSONString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//创建订单并保存</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Order</span><span style="color:#A6ACCD;"> order </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Order</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUid</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">userId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUsername</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">叩丁狼教育</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPid</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">productId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPname</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPname</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPprice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPprice</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setNumber</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        orderDao</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">order</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">创建订单成功,订单信息为{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toJSONString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">order</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> order</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,57),i=[t];function D(y,F,A,C,d,u){return a(),n("div",null,i)}const g=s(c,[["render",D]]);export{m as __pageData,g as default};
