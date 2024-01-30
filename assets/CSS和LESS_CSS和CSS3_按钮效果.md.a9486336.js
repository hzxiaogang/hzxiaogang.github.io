import{_ as t,o as a,c as e,S as c,U as r,C as s,J as o,a as l,V as i}from"./chunks/framework.364d6ed5.js";const b={},C=n=>(c("data-v-d60f5cd6"),n=n(),r(),n),d=C(()=>s("div",{class:"fa-btn btn-1 btn-1e"}," click me",-1)),A=[d];function u(n,p){return a(),e("div",null,A)}const m=t(b,[["render",u],["__scopeId","data-v-d60f5cd6"]]),_=s("h2",{id:"填充效果",tabindex:"-1"},[l("填充效果 "),s("a",{class:"header-anchor",href:"#填充效果","aria-label":'Permalink to "填充效果"'},"​")],-1),h=s("h3",{id:"效果",tabindex:"-1"},[l("效果 "),s("a",{class:"header-anchor",href:"#效果","aria-label":'Permalink to "效果"'},"​")],-1),y=s("blockquote",null,[s("p",null,"鼠标滑动和点击按钮")],-1),S=i(`<h3 id="实现方式" tabindex="-1">实现方式 <a class="header-anchor" href="#实现方式" aria-label="Permalink to &quot;实现方式&quot;">​</a></h3><p>实现原理就是当触发<code>hover</code>和<code>active</code>的时候，给伪元素设置不同的高度来填充按钮。将伪元素水平垂直居中于div（按钮）内部，给伪元素宽度设置100% 高度设置为0，并且设置背景色，然后将伪元素旋转45度。当鼠标<code>hover</code>和<code>active</code>的时候设置分別將伪元素的高度设置为260% 和400%。</p><h3 id="核心代码实现" tabindex="-1">核心代码实现 <a class="header-anchor" href="#核心代码实现" aria-label="Permalink to &quot;核心代码实现&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;fa-btn btn-1 btn-1e&quot;&gt;read more&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.fa-btn {</span></span>
<span class="line"><span style="color:#A6ACCD;">	display: inline-block;</span></span>
<span class="line"><span style="color:#A6ACCD;">	text-transform: uppercase;</span></span>
<span class="line"><span style="color:#A6ACCD;">	position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">  z-index: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">	transition: all 0.3s;</span></span>
<span class="line"><span style="color:#A6ACCD;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.fa-btn:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">	content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">	z-index: -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">	transition: all 0.3s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.btn-1e:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">	width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	height: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">	top: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	background: #ff5454;</span></span>
<span class="line"><span style="color:#A6ACCD;">	opacity: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform: translateX(-50%) translateY(-50%) rotate(45deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.btn-1e:hover,.btn-1e:active {</span></span>
<span class="line"><span style="color:#A6ACCD;">	color: #ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">	text-decoration:none;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.btn-1e:hover:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">	height: 260%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	opacity: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.btn-1e:active:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">	height: 400%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	opacity: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,4),g=JSON.parse('{"title":"按钮效果","description":"","frontmatter":{"title":"按钮效果","date":"2021-11-30T11:29:40.000Z","permalink":"/pages/1f2b53/","categories":["CSS和LESS","CSS和CSS3"],"tags":[null]},"headers":[],"relativePath":"CSS和LESS/CSS和CSS3/按钮效果.md","filePath":"CSS和LESS/CSS和CSS3/按钮效果.md","lastUpdated":1685623283000}'),D={name:"CSS和LESS/CSS和CSS3/按钮效果.md"},x=Object.assign(D,{setup(n){return(p,f)=>(a(),e("div",null,[_,h,y,o(m),S]))}});export{g as __pageData,x as default};
