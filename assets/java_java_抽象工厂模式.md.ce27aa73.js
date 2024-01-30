import{_ as s,o as n,c as a,V as l}from"./chunks/framework.364d6ed5.js";const F=JSON.parse('{"title":"抽象工厂模式 [Abstract Factory]","description":"","frontmatter":{},"headers":[],"relativePath":"java/java/抽象工厂模式.md","filePath":"java/java/抽象工厂模式.md","lastUpdated":1691757389000}'),p={name:"java/java/抽象工厂模式.md"},o=l(`<h1 id="抽象工厂模式-abstract-factory" tabindex="-1">抽象工厂模式 [Abstract Factory] <a class="header-anchor" href="#抽象工厂模式-abstract-factory" aria-label="Permalink to &quot;抽象工厂模式 [Abstract Factory]&quot;">​</a></h1><h2 id="_1-模式定义" tabindex="-1">1. 模式定义 <a class="header-anchor" href="#_1-模式定义" aria-label="Permalink to &quot;1. 模式定义&quot;">​</a></h2><p>提供一个创建一系列相关或依赖对象的接口，而无需指定它们具体的类。</p><h2 id="_2-案例场景" tabindex="-1">2. 案例场景 <a class="header-anchor" href="#_2-案例场景" aria-label="Permalink to &quot;2. 案例场景&quot;">​</a></h2><ul><li><ol><li>需求 ： 针对数据库，开发一个基础的组件</li></ol></li><li><ol start="2"><li>开发思路</li></ol><ul><li>不同点 ： 数据库有很多种类， <code>mysql</code>,<code>oracle</code>等等</li><li>相同点 ： <code>connection</code>（数据库连接）， <code>command</code> (执行<code>sql</code>命令)</li></ul></li></ul><h3 id="_2-1-抽象工厂模式代码和使用" tabindex="-1">2.1 抽象工厂模式代码和使用 <a class="header-anchor" href="#_2-1-抽象工厂模式代码和使用" aria-label="Permalink to &quot;2.1 抽象工厂模式代码和使用&quot;">​</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-eNwaS" id="tab-9czZzdT" checked="checked"><label for="tab-9czZzdT">抽象工厂模式代码</label><input type="radio" name="group-eNwaS" id="tab-aboksUZ"><label for="tab-aboksUZ">mysql产品使用</label><input type="radio" name="group-eNwaS" id="tab-VFhUEfW"><label for="tab-VFhUEfW">oracle 产品使用</label></div><div class="blocks"><div class="language-java active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IConnect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICommand</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">command</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">IDatabaseUtils</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">IConnect</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getConnect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">ICommand</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCommand</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AbstractFactoryTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">IDatabaseUtils</span><span style="color:#A6ACCD;"> iDatabaseUtils </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MysqlDatabaseUtils</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">IConnect</span><span style="color:#A6ACCD;"> connection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> iDatabaseUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConnect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        connection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//打印： mysql connected.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ICommand</span><span style="color:#A6ACCD;"> command </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> iDatabaseUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCommand</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">command</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印： mysql command.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mysql connect</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MysqlConnection</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IConnect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysql connected.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mysql command</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MysqlCommand</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICommand</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">command</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysql command.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mysql 工厂实现</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MysqlDatabaseUtils</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IDatabaseUtils</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IConnect</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getConnect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MysqlConnection</span><span style="color:#89DDFF;">();}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ICommand</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCommand</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MysqlCommand</span><span style="color:#89DDFF;">();}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AbstractFactoryTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">IDatabaseUtils</span><span style="color:#A6ACCD;"> iDatabaseUtils </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OracleDatabaseUtils</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">IConnect</span><span style="color:#A6ACCD;"> connection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> iDatabaseUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConnect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        connection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印 ： oracle connection</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ICommand</span><span style="color:#A6ACCD;"> command </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> iDatabaseUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCommand</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">command</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印 ： oracle command</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// oracle connect</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">OracleConnection</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IConnect</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">oracle connection</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// oracle command</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OracleCommand</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">ICommand</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">command</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">oracle command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// oracle 工厂实现</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OracleDatabaseUtils</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IDatabaseUtils</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IConnect</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getConnect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OracleConnection</span><span style="color:#89DDFF;">();}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ICommand</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCommand</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OracleCommand</span><span style="color:#89DDFF;">();}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></div></div><h2 id="_3-应用场景" tabindex="-1">3. 应用场景 <a class="header-anchor" href="#_3-应用场景" aria-label="Permalink to &quot;3. 应用场景&quot;">​</a></h2><p>程序需要处理不同系列的相关产品，但是您不希望它依赖于这些产品的具体类时，可以使用抽象工厂。</p><h2 id="_4-优点" tabindex="-1">4. 优点 <a class="header-anchor" href="#_4-优点" aria-label="Permalink to &quot;4. 优点&quot;">​</a></h2><ul><li><ol><li>可以确信你从工厂得到的产品彼此是兼容的</li></ol></li><li><ol start="2"><li>可以避免具体产品和客户端代码之间的紧密耦合</li></ol></li><li><ol start="3"><li>符合单一职责原则</li></ol></li><li><ol start="4"><li>符合开闭原则</li></ol></li></ul><h2 id="_5-jdk-源码中的应用" tabindex="-1">5. JDK 源码中的应用 <a class="header-anchor" href="#_5-jdk-源码中的应用" aria-label="Permalink to &quot;5. JDK 源码中的应用&quot;">​</a></h2><ul><li><ol><li><code>java.sql.connection</code></li></ol></li><li><ol start="2"><li><code>java.sql.driver</code></li></ol></li></ul>`,13),e=[o];function c(t,r,y,A,D,C){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{F as __pageData,b as default};
