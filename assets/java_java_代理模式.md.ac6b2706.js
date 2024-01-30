import{_ as a,o as l,c as i,V as e}from"./chunks/framework.364d6ed5.js";const t="/client.png",m=JSON.parse('{"title":"代理模式","description":"","frontmatter":{},"headers":[],"relativePath":"java/java/代理模式.md","filePath":"java/java/代理模式.md","lastUpdated":1688304795000}'),o={name:"java/java/代理模式.md"},r=e('<h1 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h1><h2 id="_1-代理模式概述" tabindex="-1">1. 代理模式概述 <a class="header-anchor" href="#_1-代理模式概述" aria-label="Permalink to &quot;1. 代理模式概述&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><ul><li>代理模式（Proxy Pattern）: 是<code>23</code>种设计模式中的一种，属于结构型的模式。指一个<strong>对象本身不做实际的操作</strong>，而是通过<strong>其它对象</strong>来得到自己想要的结果。</li><li>意义 ： 目标对象只需要关心自己的实现细节，通过代理对象来实现功能的增强，可以扩展目标对象的功能。</li><li>体现了非常重要的编程思想 : 不能随便修改源码， 如果需要修改源码，通过代理的方式来扩展。</li></ul><h3 id="_2-代理模式在java中的应用" tabindex="-1">2. 代理模式在java中的应用 <a class="header-anchor" href="#_2-代理模式在java中的应用" aria-label="Permalink to &quot;2. 代理模式在java中的应用&quot;">​</a></h3><ul><li><ol><li>统一异常处理</li></ol></li><li><ol start="2"><li><code>Mybatis</code>使用了代理</li></ol></li><li><ol start="3"><li><code>Spring AOP</code>实现原理</li></ol></li><li><ol start="4"><li>日志框架</li></ol></li></ul><h2 id="_2-java实现代理图示" tabindex="-1">2. java实现代理图示 <a class="header-anchor" href="#_2-java实现代理图示" aria-label="Permalink to &quot;2. java实现代理图示&quot;">​</a></h2><img src="'+t+'"><p>元素组成：</p><ul><li><ol><li>接口 ： 定义行为和规范</li></ol></li><li><ol start="2"><li>被代理类: 是目标对象</li></ol></li><li><ol start="3"><li>代理类 ： 做功能增强</li></ol></li></ul><h2 id="_3-静态代理" tabindex="-1">3. 静态代理 <a class="header-anchor" href="#_3-静态代理" aria-label="Permalink to &quot;3. 静态代理&quot;">​</a></h2><ul><li><ol><li>代理类需要手工去实现</li></ol></li><li><ol start="2"><li>代理目标类确定</li></ol></li></ul><h3 id="_3-1-通过代理模式实现事务操作" tabindex="-1">3.1 通过代理模式实现事务操作 <a class="header-anchor" href="#_3-1-通过代理模式实现事务操作" aria-label="Permalink to &quot;3.1 通过代理模式实现事务操作&quot;">​</a></h3><h2 id="_4-动态代理" tabindex="-1">4. 动态代理 <a class="header-anchor" href="#_4-动态代理" aria-label="Permalink to &quot;4. 动态代理&quot;">​</a></h2><p>在不改变原有功能的前提下，能够动态的实现方法的增强</p><h3 id="_4-1-jdk动态代理" tabindex="-1">4.1. JDK动态代理 <a class="header-anchor" href="#_4-1-jdk动态代理" aria-label="Permalink to &quot;4.1. JDK动态代理&quot;">​</a></h3><p>使用反射包中的类和接口实现动态代理的功能。</p><h3 id="_4-2-jdk动态代理分析" tabindex="-1">4.2. JDK动态代理分析 <a class="header-anchor" href="#_4-2-jdk动态代理分析" aria-label="Permalink to &quot;4.2. JDK动态代理分析&quot;">​</a></h3><h3 id="_4-3-cglib动态代理" tabindex="-1">4.3. cglib动态代理 <a class="header-anchor" href="#_4-3-cglib动态代理" aria-label="Permalink to &quot;4.3. cglib动态代理&quot;">​</a></h3><h3 id="_4-4-cglib动态代理分析" tabindex="-1">4.4. cglib动态代理分析 <a class="header-anchor" href="#_4-4-cglib动态代理分析" aria-label="Permalink to &quot;4.4. cglib动态代理分析&quot;">​</a></h3>',20),h=[r];function n(d,c,s,_,u,b){return l(),i("div",null,h)}const p=a(o,[["render",n]]);export{m as __pageData,p as default};
