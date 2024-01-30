import{_ as l,o as a,c as i,V as t}from"./chunks/framework.364d6ed5.js";const o="/mysql.png",b=JSON.parse('{"title":"mysql数据类型","description":"","frontmatter":{"title":"mysql数据类型","date":"2022-09-20T23:07:02.000Z","permalink":"/pages/7c5fdf/","categories":["java","mysql"],"tags":[null]},"headers":[],"relativePath":"java/mysql/列类型.md","filePath":"java/mysql/列类型.md","lastUpdated":1685806707000}'),e={name:"java/mysql/列类型.md"},s=t('<h1 id="mysql数据类型" tabindex="-1">mysql数据类型 <a class="header-anchor" href="#mysql数据类型" aria-label="Permalink to &quot;mysql数据类型&quot;">​</a></h1><p>列类型就是<code>MySql</code>的数据类型，常用类型有一下这些：</p><img src="'+o+'"><h2 id="_1-数值型" tabindex="-1">1. 数值型 <a class="header-anchor" href="#_1-数值型" aria-label="Permalink to &quot;1. 数值型&quot;">​</a></h2><h3 id="_1-1-整形" tabindex="-1">1.1 整形 <a class="header-anchor" href="#_1-1-整形" aria-label="Permalink to &quot;1.1 整形&quot;">​</a></h3><ul><li><ol><li>tinyint ：1 个字节</li></ol></li><li><ol start="2"><li>smallint ： 2 个字节</li></ol></li><li><ol start="3"><li>mediumint ：3 个字节</li></ol></li><li><ol start="4"><li>int ：4 个字节</li></ol></li><li><ol start="5"><li>bigint ：8 个字节</li></ol></li><li><ol start="6"><li>bit : 位类型，指定多少位，范围是 1-64 位</li></ol></li></ul><h3 id="_1-2-浮点型" tabindex="-1">1.2 浮点型 <a class="header-anchor" href="#_1-2-浮点型" aria-label="Permalink to &quot;1.2 浮点型&quot;">​</a></h3><ul><li><ol><li>float : 单精度 ，4 个字节</li></ol></li><li><ol start="2"><li>double : 双精度，8 个字节</li></ol></li><li><ol start="3"><li>decimal(P,D) ：用于要求非常高的精确度的计算中。如货币。</li></ol><ul><li><p>P ： 表示有效数字数的<strong>精度</strong>。P 范围为 1〜65</p></li><li><p>D ：表示小数点后的位数。D 的范围是 0~30。MySQL 要求 D 小于或等于(&lt;=)P。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">amount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DECIMAL</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6,2</span><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在此示例中，<code>amount</code> 列最多可以存储 <code>6</code> 位数字，小数位数为 <code>2</code> 位; 因此，<code>amount</code> 列的范围是从<code>-9999.99</code> 到 <code>9999.99</code>。</p></li></ul></li></ul><h2 id="_2-字符串类型" tabindex="-1">2. 字符串类型 <a class="header-anchor" href="#_2-字符串类型" aria-label="Permalink to &quot;2. 字符串类型&quot;">​</a></h2><ul><li><ol><li>char : 固定长度字符串，最大长度 255。</li></ol></li><li><ol start="2"><li>varchar : 可变长度字符串 0-2^16 - 1</li></ol></li><li><ol start="3"><li>text : 文本类型。 0 ~ 2^16 - 1</li></ol></li><li><ol start="4"><li>longtext : 文本类型。 0 ~ 2^32 - 1</li></ol></li></ul><h2 id="_3-二进制类型" tabindex="-1">3. 二进制类型 <a class="header-anchor" href="#_3-二进制类型" aria-label="Permalink to &quot;3. 二进制类型&quot;">​</a></h2><ul><li><ol><li>blob : 2 个字节。 0-2^16 - 1</li></ol></li><li><ol start="2"><li>longblob : 4 个字节。 0 ~ 2^32 - 1</li></ol></li></ul><h2 id="_4-日期类型" tabindex="-1">4. 日期类型 <a class="header-anchor" href="#_4-日期类型" aria-label="Permalink to &quot;4. 日期类型&quot;">​</a></h2><ul><li><ol><li>date : 日期类型，存放年月日</li></ol></li><li><ol start="2"><li>time ： 时间类型 ,存放时分秒</li></ol></li><li><ol start="3"><li>datetime ：时间和日期，存放年月日时分秒 [YYYY-MM-DD HH:mm:ss]</li></ol></li><li><ol start="4"><li>year ： 表示年，不建议使用</li></ol></li><li><ol start="5"><li>timestamp ： 表示时间戳</li></ol></li></ul>',14),r=[s];function n(c,d,p,h,m,u){return a(),i("div",null,r)}const q=l(e,[["render",n]]);export{b as __pageData,q as default};
