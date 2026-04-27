import{_ as a,o as n,c as l,ak as p}from"./chunks/framework.DLt_otXO.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/springboot/定义统一返回结果.md","filePath":"java/springboot/定义统一返回结果.md","lastUpdated":1777258973000}'),o={name:"java/springboot/定义统一返回结果.md"};function e(t,s,c,E,r,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0" id="tab-1" checked><label data-title="Result.java" for="tab-1">Result.java</label><input type="radio" name="group-0" id="tab-2"><label data-title="ResultEnum.java" for="tab-2">ResultEnum.java</label></div><div class="blocks"><div class="language-java active"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Data</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">AllArgsConstructor</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> String code;</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> String message;</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> Object data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> Result </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;">(ResultEnum.SUCCESS.</span><span style="color:#B392F0;">getCode</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> Result </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(Object </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;">(ResultEnum.SUCCESS.</span><span style="color:#B392F0;">getCode</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> Result </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;">(ResultEnum.FAIL.</span><span style="color:#B392F0;">getCode</span><span style="color:#E1E4E8;">(), message, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> Result </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;">(code, message, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> enum</span><span style="color:#B392F0;"> ResultEnum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    SUCCESS</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;请求成功&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">    FAIL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fail&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;请求失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 成员变量</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> String code;</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> String message;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    ResultEnum</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getCode</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> code;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> setCode</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getMessage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> setMessage</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div></div>`,1)])])}const u=a(o,[["render",e]]);export{F as __pageData,u as default};
