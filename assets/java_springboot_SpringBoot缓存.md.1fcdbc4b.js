import{_ as s,o as a,c as n,V as l}from"./chunks/framework.364d6ed5.js";const A=JSON.parse('{"title":"SpringBoot缓存","description":"","frontmatter":{},"headers":[],"relativePath":"java/springboot/SpringBoot缓存.md","filePath":"java/springboot/SpringBoot缓存.md","lastUpdated":1703064888000}'),o={name:"java/springboot/SpringBoot缓存.md"},p=l(`<h1 id="springboot缓存" tabindex="-1">SpringBoot缓存 <a class="header-anchor" href="#springboot缓存" aria-label="Permalink to &quot;SpringBoot缓存&quot;">​</a></h1><h2 id="_1-springboot本地缓存" tabindex="-1">1. SpringBoot本地缓存 <a class="header-anchor" href="#_1-springboot本地缓存" aria-label="Permalink to &quot;1. SpringBoot本地缓存&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p><code>@EnableCaching</code>是<code>Spring Framework</code>中提供的一个注解，用于启用缓存支持。当在<code>Spring Boot</code>应用的<strong>配置类</strong>上使用这个注解时，<code>Spring</code>会自动配置一个默认的<code>CacheManager</code>实例，并启用基于注解的缓存操作。</p><h3 id="_2-启用缓存" tabindex="-1">2. 启用缓存 <a class="header-anchor" href="#_2-启用缓存" aria-label="Permalink to &quot;2. 启用缓存&quot;">​</a></h3><ul><li>当你在 <code>Spring Boot</code> 应用的某个<strong>配置类</strong>上添加 <code>@EnableCaching</code> 注解时，<code>Spring</code>将会自动配置并启用缓存功能</li></ul><h3 id="_3-缓存注解" tabindex="-1">3. 缓存注解 <a class="header-anchor" href="#_3-缓存注解" aria-label="Permalink to &quot;3. 缓存注解&quot;">​</a></h3><p>使用<code>@EnableCaching</code>后，你可以使用<code>Spring</code>提供的一系列缓存注解来管理缓存。在你的<strong>服务层</strong>(<code>@Service层</code>)方法上使用<code>Spring Cache</code>提供的注解来实现缓存功能。</p><h4 id="_1-cacheable" tabindex="-1">1. <code>@Cacheable</code> <a class="header-anchor" href="#_1-cacheable" aria-label="Permalink to &quot;1. \`@Cacheable\`&quot;">​</a></h4><p>将方法的结果<strong>保存</strong>到缓存中，以便下次使用时直接从缓存中获取结果，如果缓存中有，则直接返回，否则执行目标方法，并将方法的结果保存到缓存中。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Cacheable</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MyObject</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDataById</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 方法实现...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2-cacheput" tabindex="-1">2. <code>@CachePut</code> <a class="header-anchor" href="#_2-cacheput" aria-label="Permalink to &quot;2. \`@CachePut\`&quot;">​</a></h4><p>标记方法调用后应<strong>更新缓存</strong>，无论方法是否产生副作用</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CachePut</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#entity.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MyObject</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">updateData</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">MyObject</span><span style="color:#A6ACCD;"> entity</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 方法实现...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_3-cacheevict" tabindex="-1">3.<code>@CacheEvict</code> <a class="header-anchor" href="#_3-cacheevict" aria-label="Permalink to &quot;3.\`@CacheEvict\`&quot;">​</a></h4><p>标记方法调用后应该<strong>清除缓存</strong></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CacheEvict</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deleteData</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 方法实现...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_4-caching" tabindex="-1">4. <code>@Caching</code> <a class="header-anchor" href="#_4-caching" aria-label="Permalink to &quot;4. \`@Caching\`&quot;">​</a></h4><p>允许在一个方法上<strong>组合</strong>多个缓存操作</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Caching</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 使用 @Caching 注解来组合多个缓存操作</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">cacheable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 对方法的结果进行缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Cacheable</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cache1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Cacheable</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cache2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">put</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 将方法的返回结果放入另一个缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CachePut</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cache3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#result.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">evict</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 清除另一个缓存的所有条目</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CacheEvict</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cache4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">allEntries</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MyObject</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">processData</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 方法实现...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>根据<code>id</code>将方法的结果缓存在<code>&quot;cache1&quot;</code>中。</li><li>根据<code>name</code>将方法的结果缓存在<code>&quot;cache2&quot;</code>中。</li><li>将方法的返回结果（<code>MyObjec</code>t）根据其<code>id</code>属性放入<code>&quot;cache3&quot;</code>中。</li><li>清除<code>&quot;cache4&quot;</code>中的所有条目。</li></ul><h3 id="_4-默认缓存管理器" tabindex="-1">4. 默认缓存管理器 <a class="header-anchor" href="#_4-默认缓存管理器" aria-label="Permalink to &quot;4. 默认缓存管理器&quot;">​</a></h3><p><code>Spring Boot</code>默认使用<code>ConcurrentMapCacheManager</code>作为缓存管理器，它将缓存存储在内存中。你可以通过<code>spring.cache.type</code>属性来配置缓存管理器的类型，例如<code>redis</code>、<code>ehcache</code>、<code>caffeine</code>等。</p><h3 id="_5-自定义缓存管理器" tabindex="-1">5. 自定义缓存管理器 <a class="header-anchor" href="#_5-自定义缓存管理器" aria-label="Permalink to &quot;5. 自定义缓存管理器&quot;">​</a></h3><p>如果你想要使用自定义的 <code>CacheManager</code> 实现，可以在配置类中创建一个 <code>@Bean</code> 方法来提供自定义的 <code>CacheManager</code>，然后 Spring 会自动使用你提供的<code> CacheManager</code> 而不是默认的。</p><p>这个函数创建并返回一个<code>CacheManager</code>对象，该对象用于管理缓存。它使用<code>ConcurrentMapCacheManager</code>实现（缓存信息保存在本地<code>JVM</code>内存中，集群之间无法共享），并使用名称为<code>&quot;cache1&quot;</code>的缓存。不过线上环境一般是集群的方式，可以通过<code>redis</code>实现(<code>RedisCacheManager</code>)。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EnableCaching</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CacheConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CacheManager</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cacheManager</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">CacheManager</span><span style="color:#A6ACCD;"> cacheManager </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ConcurrentMapCacheManager</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cach1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> cacheManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,27),e=[p];function c(t,r,D,y,C,i){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{A as __pageData,d as default};
