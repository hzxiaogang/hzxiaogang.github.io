import{_ as r,o,c as p,S as c,U as i,C as a,H as D,a as y,t as C,J as l,E as F,V as e}from"./chunks/framework.364d6ed5.js";const d={},A=s=>(c("data-v-bf2a33f0"),s=s(),i(),s),h=A(()=>a("div",{id:"div"},"鼠标移动到 div 元素上，查看过渡效果。",-1)),u=[h];function b(s,n){return o(),p("div",null,u)}const m=r(d,[["render",b],["__scopeId","data-v-bf2a33f0"]]),_={id:"frontmatter-title",tabindex:"-1"},S=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),f=e('<h2 id="_1-简介" tabindex="-1">1.简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1.简介&quot;">​</a></h2><p>CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。要实现这一点，必须规定两项内容：</p><ul><li><ol><li>指定要添加效果的 CSS 属性</li></ol></li><li><ol start="2"><li>指定效果的持续时间</li></ol></li></ul><p>我们可以使用<code>transition</code>实现过渡。语法：</p><p><code>transition: property duration timing-function delay</code> 它是一个简写属性，用于设置 4 个过渡属性：</p><h3 id="transition-property" tabindex="-1">transition-property <a class="header-anchor" href="#transition-property" aria-label="Permalink to &quot;transition-property&quot;">​</a></h3><p>规定设置过渡效果的 CSS 属性名称，语法：</p><p><code>transition-property: none|all|property</code></p><ul><li><ol><li><code>none</code> ：没有属性会获得过渡效果</li></ol></li><li><ol start="2"><li><code>all</code> ：所有属性都将获得过渡效果</li></ol></li><li><ol start="3"><li><code>property</code>：定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。</li></ol></li></ul><h3 id="transition-duration" tabindex="-1">transition-duration <a class="header-anchor" href="#transition-duration" aria-label="Permalink to &quot;transition-duration&quot;">​</a></h3><p>规定完成过渡效果需要多少秒或毫秒，语法：</p><p><code>transition-duration: time</code></p><ul><li><ol><li>time 规定完成过渡效果需要花费的时间（以秒或毫秒计）。默认值是 0，意味着不会有效果。</li></ol></li></ul><h3 id="transition-timing-function" tabindex="-1">transition-timing-function <a class="header-anchor" href="#transition-timing-function" aria-label="Permalink to &quot;transition-timing-function&quot;">​</a></h3><p>规定速度效果的速度曲线。取值同 css 动画的<code>animation-timing-function</code></p><h3 id="transition-delay" tabindex="-1">transition-delay <a class="header-anchor" href="#transition-delay" aria-label="Permalink to &quot;transition-delay&quot;">​</a></h3><p>定义过渡效果何时开始，语法：</p><p><code>transition-delay: time</code></p><ul><li>1.time 规定在过渡效果开始之前需要等待的时间，以秒或毫秒计。</li></ul><h2 id="_2-添加多个样式的变换效果" tabindex="-1">2.添加多个样式的变换效果 <a class="header-anchor" href="#_2-添加多个样式的变换效果" aria-label="Permalink to &quot;2.添加多个样式的变换效果&quot;">​</a></h2><p>要添加多个样式的变换效果，添加的属性由逗号分隔:</p><h3 id="_2-1-效果" tabindex="-1">2.1 效果 <a class="header-anchor" href="#_2-1-效果" aria-label="Permalink to &quot;2.1 效果&quot;">​</a></h3><br>',23),g=e(`<h3 id="_2-2-代码" tabindex="-1">2.2 代码 <a class="header-anchor" href="#_2-2-代码" aria-label="Permalink to &quot;2.2 代码&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">cursor</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">pointer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        -webkit-transition: width </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -webkit-transform </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* For Safari 3.1 to 6.0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> width </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transform </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">180deg</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* Chrome, Safari, Opera */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">180deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">鼠标移动到 div 元素上，查看过渡效果。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_3-css3-过渡和动画的区别" tabindex="-1">3.CSS3 过渡和动画的区别 <a class="header-anchor" href="#_3-css3-过渡和动画的区别" aria-label="Permalink to &quot;3.CSS3 过渡和动画的区别&quot;">​</a></h2><ol><li>动画（animate）不需要事件触发，而过渡（transition）需要借助伪类、js、@madia 触发。常见的伪类是：hover focus，常见的 js 就比如 click 事件。@media 如可以用于页面缩小到 1000px 你可以展示你需要的动画。</li><li>动画可以通过关键帧设置很多组 css 效果，而过渡只能设置一组关键帧（开始-结束），所以动画的功能更强。</li></ol>`,4),k=JSON.parse('{"title":"CSS3过渡","description":"","frontmatter":{"title":"CSS3过渡"},"headers":[],"relativePath":"CSS和LESS/CSS和CSS3/CSS3过渡.md","filePath":"CSS和LESS/CSS和CSS3/CSS3过渡.md","lastUpdated":1685623283000}'),v={name:"CSS和LESS/CSS和CSS3/CSS3过渡.md"},P=Object.assign(v,{setup(s){return(n,x)=>{const t=D("ClientOnly");return o(),p("div",null,[a("h1",_,[y(C(n.$frontmatter.title)+" ",1),S]),f,l(t,null,{default:F(()=>[l(m)]),_:1}),g])}}});export{k as __pageData,P as default};
