import{_ as e,o,c as l,V as a}from"./chunks/framework.364d6ed5.js";const s="/transaction.png",m=JSON.parse('{"title":"事务","description":"","frontmatter":{"title":"事务","date":"2022-09-20T23:16:03.000Z","permalink":"/pages/4e4890/","categories":["java","mysql"],"tags":[null]},"headers":[],"relativePath":"java/mysql/事务.md","filePath":"java/mysql/事务.md","lastUpdated":1705580599000}'),t={name:"java/mysql/事务.md"},n=a(`<h1 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h1><h2 id="_1-事务理解" tabindex="-1">1. 事务理解 <a class="header-anchor" href="#_1-事务理解" aria-label="Permalink to &quot;1. 事务理解&quot;">​</a></h2><p>有一个余额表<code>balance</code>:</p><table><thead><tr><th style="text-align:left;">id</th><th style="text-align:center;">name</th><th style="text-align:center;">money</th></tr></thead><tbody><tr><td style="text-align:left;">100</td><td style="text-align:center;">tom</td><td style="text-align:center;">2900</td></tr><tr><td style="text-align:left;">200</td><td style="text-align:center;">king</td><td style="text-align:center;">6000</td></tr></tbody></table><p>现在有一个需求：将<code>tom</code>的 100 元，转给<code>king</code>。实现方式如下：</p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> balance </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">money</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">money</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> balance </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">money</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">money</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>问题来了，如果第一条 sql 语句执行成功，但是第二条 sql 语句执行失败，那就出问题了。这里我们就引出一个需求：<strong>将多个<code>DML</code>语句当作一个整体，要么全部成功，要么全部失败</strong>。这就需要使用<strong>事务</strong>来解决。</p><p>事务是保证数据的一致性，它是由<strong>一组相关的 DML 语句（insert,delete,update）组成</strong>，该组的<code>DML</code>语句要么全部成功，要么全部失败。如转账就要用事务来处理，用以保证数据的一致性。</p><h2 id="_2-事务和锁" tabindex="-1">2. 事务和锁 <a class="header-anchor" href="#_2-事务和锁" aria-label="Permalink to &quot;2. 事务和锁&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>当执行事务操作时（<code>DML语句</code>），<code>mysql</code>会在<strong>表上加锁</strong>，防止其它用户修改表的数据，这对用户来讲是非常重要的。</p><h3 id="_2-验证事务和锁" tabindex="-1">2. 验证事务和锁 <a class="header-anchor" href="#_2-验证事务和锁" aria-label="Permalink to &quot;2. 验证事务和锁&quot;">​</a></h3><p>本案例以根据用户<code>id</code>修改用户密码<code>pwd</code>为例：</p><ul><li><ol><li><code>idea</code>起一个<code>springboot</code>服务，增加修改用户密码的接口。</li></ol></li><li><ol start="2"><li>在<code>Navicate</code>面板执行<code>SQL</code>语句，开启事务，并执行<code>DML</code>操作</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--开启事务</span></span>
<span class="line"><span style="color:#F78C6C;">START TRANSACTION</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- DML操作</span></span>
<span class="line"><span style="color:#F78C6C;">update</span><span style="color:#A6ACCD;"> sys_user </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">PASSWORD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">222</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">22</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><ol start="3"><li>在<code>posman</code>调用<code>localhost:8080/api/update/user?id=22&amp;pwd=commnet@188</code>修改密码，此时我们发现请求会一直处于等待状态，没有返回值。</li></ol></li><li><ol start="4"><li>在<code>mysql</code>面板，执行<code>SQL</code>语句提交事务。此时我们会发现事务提交后。步骤<code>3</code>在<code>postman</code>执行的修改密码请求立马执行成功了。</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 提交事务</span></span>
<span class="line"><span style="color:#F78C6C;">COMMIT</span><span style="color:#A6ACCD;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>总结 ： 当我们开始事务，并执行<code>DML</code>操作时，<code>mysql</code>在用户表上加锁，其他会话执行<code>DML</code>操作会被阻塞，所以在<code>postman</code>调用修改密码请求会一直等待。当事务提交后，用户表上锁会自动释放，故<code>postman</code>中处于等待状态的修改密码请求会立刻执行成功。</p></blockquote></li></ul><h2 id="_3-事务管理" tabindex="-1">3. 事务管理 <a class="header-anchor" href="#_3-事务管理" aria-label="Permalink to &quot;3. 事务管理&quot;">​</a></h2><p><code>mysql</code>数据库，控制事务有几个重要的操作</p><ul><li><ol><li><code>start transaction</code> ：开始一个事务</li></ol></li><li><ol start="2"><li><code>savepoint</code> 保存点名 ： 设置保存点</li></ol></li><li><ol start="3"><li><code>rollback to</code> 保存点名 ： 回退事务</li></ol></li><li><ol start="4"><li><code>rollback</code> ： 回退事务</li></ol></li><li><ol start="5"><li><code>commit</code> : 提交事务，所有的操作都生效，不能回退</li></ol></li></ul><h3 id="_3-1-savepoint" tabindex="-1">3.1 savepoint <a class="header-anchor" href="#_3-1-savepoint" aria-label="Permalink to &quot;3.1 savepoint&quot;">​</a></h3><p>保存点<code>savepoint</code>，是事务中的点，用于取消部分事务，当事务结束时（commit 操作），会自动的删除该事务所定义的所有保存点</p><h3 id="_3-2-rollback" tabindex="-1">3.2 rollback <a class="header-anchor" href="#_3-2-rollback" aria-label="Permalink to &quot;3.2 rollback&quot;">​</a></h3><p>通过保存点可以回退到指定的点</p><h3 id="_3-3-commit" tabindex="-1">3.3 commit <a class="header-anchor" href="#_3-3-commit" aria-label="Permalink to &quot;3.3 commit&quot;">​</a></h3><p>使用<code>commit</code>语句可以提交事务，当执行了<code>commit</code>语句后，会确定事务的变化，结束事务，<strong>结束事务</strong>，<strong>删除保存点</strong>，<strong>释放锁</strong>，数据生效。当使用<code>commit</code>语句结束事务后，其它会话将可以查看事务变化后的新数据</p><h2 id="_4-事务操作示意图" tabindex="-1">4. 事务操作示意图 <a class="header-anchor" href="#_4-事务操作示意图" aria-label="Permalink to &quot;4. 事务操作示意图&quot;">​</a></h2><h3 id="_4-1-示意图" tabindex="-1">4.1 示意图 <a class="header-anchor" href="#_4-1-示意图" aria-label="Permalink to &quot;4.1 示意图&quot;">​</a></h3><img src="`+s+`"><p>如上图，开启事务，并设置多个保存点，当我们 某一组<code>dml</code>语句发生错误时，我们可以执行<strong>回滚操作</strong>，回滚到<strong>保存点</strong>。</p><p>但是 <strong>事务一旦提交，就不能执行回滚操作了</strong>。</p><h3 id="_4-2-事务注意事项" tabindex="-1">4.2 事务注意事项 <a class="header-anchor" href="#_4-2-事务注意事项" aria-label="Permalink to &quot;4.2 事务注意事项&quot;">​</a></h3><ul><li><ol><li>如果不开始事务，默认情况下，<code>DML</code>操作是自动提交的，不能回滚</li></ol></li><li><ol start="2"><li>如果开始一个事务，你没有创建保存点，你可以执行<code>rollback</code>，默认就是回退到你事务开始的状态</li></ol></li><li><ol start="3"><li>你也可以在这个事务中（还没有提交），创建多个保存点。比如<code>savapoint aaa;</code> 执行<code>dml</code>，<code>savepoint bbb;</code></li></ol></li><li><ol start="4"><li>你可以在事务没有提交前，选择回退到那个保存点</li></ol></li><li><ol start="5"><li><code>InnoDB</code>存储引擎支持事务，<code>MyISAM</code>不支持</li></ol><p>所以在使用<code>mysql</code>数据库时，如果想要支持事务，需要设置<strong>表</strong>的<strong>存储引擎</strong>为<code>InnoDB</code></p></li><li><ol start="6"><li>开始一个事务<code>start transaction</code> 或 <code>set autocommit = off</code></li></ol></li></ul><h2 id="_5-演示事务" tabindex="-1">5. 演示事务 <a class="header-anchor" href="#_5-演示事务" aria-label="Permalink to &quot;5. 演示事务&quot;">​</a></h2><ul><li><ol><li>创建一个表</li></ol></li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tab_user</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;"> id </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">CHARACTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> utf8;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><ol start="2"><li>开始事务</li></ol></li></ul><p><code>START TRANSACTION;</code></p><ul><li><ol start="3"><li>设置保存点 a</li></ol></li></ul><p><code>SAVEPOINT a</code></p><ul><li><ol start="4"><li>执行 DML 操作</li></ol></li></ul><p><code>INSERT INTO tab_user VALUES(100,&#39;tom&#39;)</code></p><p>此时查询<code>tab_user</code>表有一条记录</p><ul><li><ol start="5"><li>设置保存点 b</li></ol></li></ul><p><code>SAVEPOINT b</code></p><ul><li><ol start="6"><li>执行 DML 操作</li></ol></li></ul><p><code>INSERT INTO tab_user VALUES(200,&#39;jack&#39;)</code></p><p>此时查询<code>tab_user</code>表有两条记录</p><ul><li><ol start="7"><li>回滚到 b</li></ol></li></ul><p><code>ROLLBACK TO b</code></p><p>此时我们查询<code>tab_user</code>表只有<code>tom</code>这一条数据</p><ul><li><ol start="8"><li>回滚到 a</li></ol></li></ul><p><code>ROLLBACK TO a</code></p><p>此时我们查询<code>tab_user</code>表，是一个<strong>空表</strong></p><p>注意 ： 由<code>b</code>回滚到<code>a</code>后，就不能再回滚到<code>b</code>了。</p><h2 id="_6-事务隔离级别" tabindex="-1">6. 事务隔离级别 <a class="header-anchor" href="#_6-事务隔离级别" aria-label="Permalink to &quot;6. 事务隔离级别&quot;">​</a></h2><h3 id="_6-1-概念" tabindex="-1">6.1 概念 <a class="header-anchor" href="#_6-1-概念" aria-label="Permalink to &quot;6.1 概念&quot;">​</a></h3><p><code>Mysql</code>隔离级别定义了<strong>事务与事务之间的隔离程度</strong></p><h3 id="_6-2-事务隔离级别介绍" tabindex="-1">6.2 事务隔离级别介绍 <a class="header-anchor" href="#_6-2-事务隔离级别介绍" aria-label="Permalink to &quot;6.2 事务隔离级别介绍&quot;">​</a></h3><p><strong>多个连接</strong>开启各自事务操作数据库中数据时，数据库系统要负责隔离操作，以确保各个连接在<strong>获取数据时的准确性</strong>（通俗解释）</p><p>如果不考虑隔离性，可能会引发如下问题：</p><ul><li><ol><li>脏读 （dirty read）</li></ol><p>当一个事务读取另一个事务<strong>尚未提交</strong>的改变（DML 操作）时，产生脏读</p></li><li><ol start="2"><li>不可重复读 (nonrepeattable read)</li></ol><p>同一查询在同一事务中多次进行，由于其它<strong>提交事务所</strong>做的<strong>修改或删除</strong>，每次返回不同的结果集，此时发生不可重复读</p></li><li><ol start="3"><li>幻读 (phantom read)</li></ol><p>同一查询在同一事务中多次进行，由于其它<strong>提交事务</strong>所做的<strong>插入</strong>操作，每次返回不同的结果集，此时产生幻读</p></li></ul><h3 id="_6-3-隔离级别种类" tabindex="-1">6.3 隔离级别种类 <a class="header-anchor" href="#_6-3-隔离级别种类" aria-label="Permalink to &quot;6.3 隔离级别种类&quot;">​</a></h3><table><thead><tr><th style="text-align:left;"><code>MySql</code> 隔离级别（4 种）</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">幻读</th><th style="text-align:center;">加锁读</th></tr></thead><tbody><tr><td style="text-align:left;">读未提交 (<code>read uncommited</code>)</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">不加锁</td></tr><tr><td style="text-align:left;">读已提交(<code>read commited</code>)</td><td style="text-align:center;">X</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">不加锁</td></tr><tr><td style="text-align:left;">可重复度(<code>repeattable read</code>)（<strong>MySql 默认</strong>）</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">✔</td><td style="text-align:center;">不加锁</td></tr><tr><td style="text-align:left;">可串行化(<code>serializable</code>)</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">加锁</td></tr></tbody></table><p>✔ : 可能出现         X : 不会出现</p><p>从上到下，隔离级别会越来越高。</p><p>加锁 : 如果发现有一个表在被另一个事务操作的时候，就不会去操作了，这就叫做加锁</p><h3 id="_6-4-查看设置隔离级别" tabindex="-1">6.4 查看设置隔离级别 <a class="header-anchor" href="#_6-4-查看设置隔离级别" aria-label="Permalink to &quot;6.4 查看设置隔离级别&quot;">​</a></h3><ul><li><ol><li>查看当前会话隔离级别</li></ol></li></ul><p><code>select @@tx_isolation</code></p><ul><li><ol start="2"><li>查看系统当前隔离级别</li></ol></li></ul><p><code>select @@global.tx_isolation</code></p><ul><li><ol start="3"><li>设置当前会话隔离级别</li></ol></li></ul><p><code>SET SESSION TRANSACTION ISOLATION LEVEL 隔离级别种类</code></p><ul><li><ol start="4"><li>设置系统当前隔离级别</li></ol></li></ul><p><code>SET GLOBAL TRANSACTION ISOLATION LEVEL 隔离级别种类</code></p><ul><li><ol start="5"><li><code>mysql</code>默认的事务隔离级别是<code>repeatable read</code>，一般情况下，没有特殊要求，没必要修改。因为该级别可以满足绝大多数项目的需求。 我们可以通过配置文件<code>my.ini</code>（在 mysql 安装目录里）修改默认的事务隔离级别，在文件内添加一行记录<code>transaction-isolation = REPEATTABLE-READ</code></li></ol></li></ul><h3 id="_6-5-演示事务隔离级别之读未提交-read-uncommited" tabindex="-1">6.5 演示事务隔离级别之读未提交（read uncommited） <a class="header-anchor" href="#_6-5-演示事务隔离级别之读未提交-read-uncommited" aria-label="Permalink to &quot;6.5 演示事务隔离级别之读未提交（read uncommited）&quot;">​</a></h3><p><strong>警告： 隔离级别是跟事务相关的，先要启动事务才能谈隔离级别的话题</strong></p><ul><li><ol><li>开两个<code>mysql</code>的控制台<code>A</code>和<code>B</code></li></ol></li><li><ol start="2"><li>查看当前<code>mysql</code>的隔离级别</li></ol></li></ul><p><code>select @@tx_isolation</code></p><p>执行完<code>sql</code>会得到下下面的查询结果</p><table><thead><tr><th style="text-align:left;">@@tx_isolation</th></tr></thead><tbody><tr><td style="text-align:left;">REPEATABLE-READ</td></tr></tbody></table><ul><li><ol start="3"><li>控制台<code>A</code>和<code>B</code>都启动事务 （在两个控制台下执行下面的<code>sql</code>语句）</li></ol></li></ul><p><code>START TRANSACTION</code></p><ul><li><ol start="4"><li>将控制台<code>A</code>的隔离级别设置为<strong>读未提交 （read uncommited）</strong></li></ol></li></ul><p><code>SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED</code></p><ul><li><ol start="5"><li>创建一个账户表<code>account</code></li></ol></li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">account</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">money</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INT</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">CHARACTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> utf8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>此时我们在<code>A</code>和<code>B</code>控制台查询数据<code>SELECT * from account</code>，查询结果都是空。</p><ul><li><ol start="6"><li>在<code>B</code>控制台执行<code>SQL语句</code>,插入一条数据，但是<strong>不提交事务</strong><code>(commit)</code></li></ol></li></ul><p><code>INSERT INTO account VALUES(100,&#39;tom&#39;,1000)</code></p><p>此时，在控制台<code>B</code>中能查到这条数，但是在控制台<code>A</code>中也能查到这条数据。这就叫做<strong>脏读</strong></p><ul><li><ol start="7"><li>在<code>B</code>控制台执行<code>SQL语句</code>，更新数据，但是<strong>不提交事务</strong><code>(commit)</code></li></ol></li></ul><p><code>UPDATE account set money = 800 WHERE id =100</code></p><p>此时在控制台<code>B</code>中查询到<code>tom</code>这条数据<code>money</code>变成了<code>800</code>。但是在控制台<code>A</code>也能查到<code>tom</code>这条数据，且<code>money</code>是<code>800</code></p><ul><li><ol start="8"><li>在<code>B</code>控制台执行<code>SQL语句</code>，插入数据，并且<strong>提交事务</strong>（<code>commit</code>）</li></ol></li></ul><p><code>INSERT INTO account VALUES(200,&#39;jack&#39;,2000)</code></p><p><code>commit</code></p><p>此时在<code>A</code>控制台执行查询语句，会有两条数据。一条是<code>tom</code>的数据<code>money</code>是<code>800</code>（<code>B</code>窗口中执行<code>update</code>后的数据），另一条是<code>jack</code>的数据<code>money</code>是<code>2000</code>(<code>B</code>窗口执行<code>insert</code>后的数据)。 即<code>A</code>窗口既能看见<code>B</code>窗口修改的操作，也能看见<code>B</code>窗口的新增操作，这就叫做<strong>不可重复读</strong>和<strong>幻读</strong>。</p><p>那么问题来了。<code>A</code>窗口事务还没<code>commit</code>呢，但是<code>B</code>窗口的事务影响到了<code>A</code>事务，这本身就是不对的。因为<code>B</code>的提交影响到了<code>A</code>的对<code>account</code>表的读。我们希望的是<code>A</code>能看到的数据就是<code>A</code>连接到<code>Mysql</code>数据库这个时间点的数据，而不能受到别的事务的操作的影响。</p><p>如果不这样的话，如果有一万个窗口连接到该数据库，对<code>account</code>表进行操作，那么<code>A</code>读到的数据就乱了，不知道读的是那个窗口的数据。</p><p>最佳的效果就是，当<code>A</code>连接到数据库操作<code>account</code>表的时候，不应该受到其它事务操作（<code>DML</code>）的影响，</p><p>这个案例演示了<code>读未提交 (read uncommited)</code>这个级别出现的三个问题，<code>脏读</code>，<code>不可重复读</code>和<code>幻读</code>。</p><p>我们可以按着这个步骤体验其它三事务隔离级别。</p><h3 id="_6-6-演示事务隔离级别之可串行化-serializable" tabindex="-1">6.6 演示事务隔离级别之可串行化(serializable) <a class="header-anchor" href="#_6-6-演示事务隔离级别之可串行化-serializable" aria-label="Permalink to &quot;6.6 演示事务隔离级别之可串行化(serializable)&quot;">​</a></h3><ul><li><ol><li>开起两个控制台 <code>A</code>和<code>b</code></li></ol></li><li><ol start="2"><li>控制台<code>A</code>和<code>B</code>都启动事务</li></ol></li><li><ol start="3"><li>将<code>A</code>控制台的隔离级别设置为 可串行化(<code>serializable</code>)</li></ol></li><li><ol start="4"><li>在<code>B</code>控制台向<code>account</code>表插入一条数据，但是<strong>不提交</strong>（<code>commit</code>）</li></ol></li></ul><p>此时我们在<code>A</code>控制台执行查询，我们会发现<code>A</code>控制台 查询会一直卡在哪里不动了，这是因为<code>可串行化(serializable)</code>加锁了，执行查询的时候，发现有一个事务正在操作<code>account</code>表还没提交，所以会一直等待（等待有个时间范围，超时会报错）。如果<code>B</code>控制台执行<code>commit</code>，那么<code>A</code>控制台会立即显示查询结果。</p><h2 id="_7-事务的-acid-特性" tabindex="-1">7. 事务的 ACID 特性 <a class="header-anchor" href="#_7-事务的-acid-特性" aria-label="Permalink to &quot;7. 事务的 ACID 特性&quot;">​</a></h2><h3 id="_7-1-原子性-atomicity" tabindex="-1">7.1 原子性（Atomicity） <a class="header-anchor" href="#_7-1-原子性-atomicity" aria-label="Permalink to &quot;7.1 原子性（Atomicity）&quot;">​</a></h3><p>原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生</p><h3 id="_7-2-一致性-consistency" tabindex="-1">7.2 一致性（Consistency） <a class="header-anchor" href="#_7-2-一致性-consistency" aria-label="Permalink to &quot;7.2 一致性（Consistency）&quot;">​</a></h3><p>事务必须使数据库从一个一致性状态变换到另一个一致性状态</p><h3 id="_7-3-隔离性-isolation" tabindex="-1">7.3 隔离性（Isolation） <a class="header-anchor" href="#_7-3-隔离性-isolation" aria-label="Permalink to &quot;7.3 隔离性（Isolation）&quot;">​</a></h3><p>事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其它事务的操作数据干扰，多个并发事务之间要相互隔离</p><h3 id="_7-4-持久性-durability" tabindex="-1">7.4 持久性（Durability） <a class="header-anchor" href="#_7-4-持久性-durability" aria-label="Permalink to &quot;7.4 持久性（Durability）&quot;">​</a></h3><p>持久性是指一个事物一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有有任何影响</p><h2 id="_8-实战" tabindex="-1">8. 实战 <a class="header-anchor" href="#_8-实战" aria-label="Permalink to &quot;8. 实战&quot;">​</a></h2><ul><li><ol><li>登录<code>mysql</code>控制客户端<code>A</code>，创建<code>dog</code>表（id,name）,开始一个事务，并添加两条记录；</li></ol></li><li><ol start="2"><li>登录<code>mysql</code>控制客户端<code>B</code>，开始一个事务，设置为<strong>读未提交</strong></li></ol></li><li><ol start="3"><li><code>A</code>客户端修改<code>dog</code>表一条记录，不要提交，看看客户端<code>B</code>是否看到变化，说明什么问题？</li></ol></li><li><ol start="4"><li>登录<code>mysql</code>控制客户端<code>C</code>，开始一个事务，设置为<strong>读已提交</strong>，这时<code>A</code>客户端修改一条记录，不要提交，看看客户端<code>C</code>是否看到变化，说明什么问题？</li></ol></li></ul>`,116),c=[n];function d(i,r,p,C,y,u){return o(),l("div",null,c)}const h=e(t,[["render",d]]);export{m as __pageData,h as default};
