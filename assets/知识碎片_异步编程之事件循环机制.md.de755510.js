import{_ as o,o as e,c as t,V as r}from"./chunks/framework.364d6ed5.js";const c="/eventloop2.png",s="/task.png",b=JSON.parse('{"title":"异步编程之事件循环机制","description":"","frontmatter":{"title":"异步编程之事件循环机制","date":"2022-03-31T16:46:44.000Z","permalink":"/pages/7c8eb6/","categories":["知识碎片"],"tags":[null]},"headers":[],"relativePath":"知识碎片/异步编程之事件循环机制.md","filePath":"知识碎片/异步编程之事件循环机制.md","lastUpdated":1685623283000}'),d={name:"知识碎片/异步编程之事件循环机制.md"},a=r('<h2 id="_1-前言" tabindex="-1">1.前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1.前言&quot;">​</a></h2><p><code>JavaScript</code> 是一门<strong>单线程语言</strong>，我们可以通过<strong>异步编程</strong>的方式来实现实现类似于多线程语言的<strong>并发操作</strong>。单线程最大的好处是不用像多线程那样处处在意状态的<strong>同步</strong>问题，这里没有死锁的存在，也没有像多线程之间来回切换带来性能上的开销。同样，单线程也存在自身的弱点，主要表现在以下几个方面：</p><ul><li><ol><li>无法利用多核 <code>cpu</code>，一个简单的例子，在一个位置从同一台服务器拉取不同的资源，如果采用单线程同步的方式去拉取，代码大致如下：</li></ol></li></ul><p><code>getData(‘from_db’)</code>,//耗时为 <code>M</code>， <code>getData(‘from_db_api’)</code>,//耗时为 <code>N</code>， 如果采用同步单线程的方式总共耗时为:<code>M+N</code></p><ul><li><ol start="2"><li>js 代码错误或者耗时过长会<strong>阻塞</strong>后面代码的执行，例如页面在进行 dom 渲染时，如果页面的 js 代码报错会引起整个页面白屏的现象。</li></ol></li><li><ol start="3"><li>大量计算占用 <code>CPU</code>导致无法继续调用异步 <code>I/O</code>。</li></ol></li></ul><p>后来 <code>HTML5</code> 定制了 Web Workers 能够创建多线程来进行计算，但是使用 <code>Web Workers</code> 技术开的多线程有着诸多的限制，例如：所有新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程。另外，这些子线程并没有执行 <code>I/O</code> 操作的权限，只能为主线程分担一些简单的计算任务。所以严格来讲这些线程并没有完整的功能，也因此这项技术并非改变了 <code>JavaScript</code> 语言的单线程本质。</p><p>所以我们可以遇见，未来的 <code>JavaScript</code> 依然会是一门单线程语言，因此 <code>JavaScript</code> 采用异步编程方式实现程序“非阻塞”的特点，那么我们如何实现这一特征了，答案就是我们今天要讲的——<code>event loop</code>（事件循环）。</p><p><code>JavaScript</code> <strong>事件循环</strong>是非常重要的一个基础概念，我们可以通过这种机制实现异步编程，解决 <code>JavaScript</code> 同步单线程无法实现并发操作的问题，可以使我们对一段异步代码的执行顺序有一个清晰的认识，从而减少代码运行的不确定性。合理的使用各种延迟事件的方法，有助于代码更好的按照其优先级去执行。</p><h2 id="_2-浏览器下的事件循环机制" tabindex="-1">2. 浏览器下的事件循环机制 <a class="header-anchor" href="#_2-浏览器下的事件循环机制" aria-label="Permalink to &quot;2. 浏览器下的事件循环机制&quot;">​</a></h2><h3 id="_2-1-执行栈" tabindex="-1">2.1 执行栈 <a class="header-anchor" href="#_2-1-执行栈" aria-label="Permalink to &quot;2.1 执行栈&quot;">​</a></h3><p><code>JavaScript</code> 变量主要存储在<strong>堆</strong>和<strong>栈</strong>两个位置，其中，<code>堆</code>里主要存储<strong>对象</strong>，<code>栈</code>主要存储<strong>基本类型</strong>的变量以及<strong>指针变量</strong>。当我们调用一个方法时，<code>JS</code> 会生成一个与这个方法对应的执行环境，又叫<strong>执行上下文</strong>，当一系列方法被调用时，由于我们的 <code>js</code> 是<strong>单线程</strong>的，所以这些方法会被单独排在一个地方，这个地方叫做<code>执行栈</code>。</p><p>当一个脚本第一次执行的时候，<code>JS</code> 引擎会解析这段代码，并将其中的同步代码按照执行顺序加入<strong>执行栈</strong>中，然后从头开始执行。如果当前执行的是一个方法，那么 <code>JS</code> 会向执行栈中添加这个方法的<strong>执行环境</strong>，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，JS 会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。这个过程反复进行，直到执行栈中的代码全部执行完毕。</p><h3 id="_2-2-事件队列" tabindex="-1">2.2 事件队列 <a class="header-anchor" href="#_2-2-事件队列" aria-label="Permalink to &quot;2.2 事件队列&quot;">​</a></h3><p>以上说的都是 <code>JS</code> 同步代码的执行，那么当程序执行异步代码后会如何进行呢？我们前面提到过 <code>JS</code>最大的特点是非阻塞，下面我们说一下实现这一点的关键在于这项机制——<code>事件队列</code>。</p><p>当 <code>js</code> 引擎遇到一个异步事件后不会一直等待返回结果，这个事件会先<strong>挂起</strong>，继续执行<strong>执行栈中</strong>的其他任务，直到这个异步事件的结果返回，<code>JS</code> 引擎会将这个事件放入与当前执行栈不同的一个<code>队列</code>中，我们称之为<code>事件队列</code>。</p><p>被放入<code>事件队列</code>不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入<strong>执行栈中</strong>，然后执行其中的同步代码...，如此反复，这样就形成了一个<strong>无限的循环</strong>。这就是这个过程被称为<code>“事件循环（Event Loop）”</code>的原因。</p><img src="'+c+'"><h3 id="_2-3-微任务和宏任务" tabindex="-1">2.3 微任务和宏任务 <a class="header-anchor" href="#_2-3-微任务和宏任务" aria-label="Permalink to &quot;2.3 微任务和宏任务&quot;">​</a></h3><p>关于<strong>微任务</strong>和<strong>宏任务</strong>我们可以用一张图来说明： <img src="'+s+'"></p><p>在一个<strong>事件循环中</strong>，<strong>异步事件</strong>返回<strong>结果</strong>后会被放到一个<strong>任务队列中</strong>。然而，根据这个异步事件的类型，这个<strong>事件</strong>实际上会被分配到对应的<strong>宏任务队列</strong>或者<strong>微任务队列</strong>中去。并且在当前执行栈为空的时候，主线程会<code>先</code>查看<strong>微任务队列</strong>是否有事件存在。如果不存在，那么再去<strong>宏任务队列</strong>中取出一个事件并把对应的回调加入当前<strong>执行栈</strong>；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。</p><p>无论是<strong>宏任务</strong>还是<strong>微任务</strong>依赖的都是基础的执行栈和消息队列的机制而运行。根据定义，<strong>宏任务</strong>和<strong>微任务</strong>存在于不同的<strong>任务队列</strong>，而微任务的任务队列应该在宏任务<strong>执行栈</strong>完成前清空。</p><h4 id="宏任务主要包含" tabindex="-1">宏任务主要包含： <a class="header-anchor" href="#宏任务主要包含" aria-label="Permalink to &quot;宏任务主要包含：&quot;">​</a></h4><p><code>script( 整体代码)</code>、<code>setTimeout</code>、<code>setInterval</code>、<code>I/O</code>、<code>UI 交互事件</code>、<code>setImmediate(Node.js 环境)</code></p><h4 id="微任务主要包含" tabindex="-1">微任务主要包含 <a class="header-anchor" href="#微任务主要包含" aria-label="Permalink to &quot;微任务主要包含&quot;">​</a></h4><p><code>Promise</code>、<code>MutaionObserver</code>、<code>process.nextTick(Node.js 环境)</code></p>',25),n=[a];function g(i,l,p,_,h,m){return e(),t("div",null,n)}const S=o(d,[["render",g]]);export{b as __pageData,S as default};
