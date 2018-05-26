(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(n,s,a){"use strict";a.r(s);var t=a(0),p=Object(t.a)({},function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"content"},[this._ssrNode('<h1 id="多语言支持"><a href="#多语言支持" aria-hidden="true" class="header-anchor">#</a> 多语言支持</h1><h2 id="基本用法"><a href="#基本用法" aria-hidden="true" class="header-anchor">#</a> 基本用法</h2><p>现在，<code>Valine</code>开始支持多语言。默认内置：</p><ul><li><code>zh-cn</code></li><li><code>en</code></li></ul><div class="language-js extra-class"><pre class="language-js"><code><span class="token keyword">var</span> valine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Valine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nvaline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token punctuation">:</span><span class="token string">\'.comment\'</span><span class="token punctuation">,</span>\n    appId<span class="token punctuation">:</span><span class="token string">\'your leancloud appid\'</span><span class="token punctuation">,</span>\n    appKey<span class="token punctuation">:</span><span class="token string">\'your leancloud appkey\'</span><span class="token punctuation">,</span>\n    lang<span class="token punctuation">:</span><span class="token string">\'en\'</span> <span class="token comment">// 设置这里就ok</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="自定义语言"><a href="#自定义语言" aria-hidden="true" class="header-anchor">#</a> 自定义语言</h2><p>!&gt; 如果有需要支持<code>其他语言</code>，请严格按照下面的<code>localeMode</code>格式书写内容:</p><div class="language-js extra-class"><pre class="language-js"><code><span class="token keyword">var</span> localeName <span class="token operator">=</span> <span class="token string">\'en\'</span><span class="token punctuation">,</span>\n    localeMode <span class="token operator">=</span> <span class="token punctuation">{</span>\n        head<span class="token punctuation">:</span><span class="token punctuation">{</span>\n            nick<span class="token punctuation">:</span><span class="token string">\'NickName\'</span><span class="token punctuation">,</span>\n            mail<span class="token punctuation">:</span><span class="token string">\'E-Mail\'</span><span class="token punctuation">,</span>\n            link<span class="token punctuation">:</span><span class="token string">\'Website(http://)\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        tips<span class="token punctuation">:</span><span class="token punctuation">{</span>\n            comments<span class="token punctuation">:</span><span class="token string">\'Comments\'</span><span class="token punctuation">,</span>\n            sofa<span class="token punctuation">:</span><span class="token string">\'No comments yet.\'</span><span class="token punctuation">,</span>\n            busy<span class="token punctuation">:</span><span class="token string">\'Submit is busy, please wait...\'</span><span class="token punctuation">,</span>\n            again<span class="token punctuation">:</span><span class="token string">\'Sorry, this is a wrong calculation.\'</span><span class="token punctuation">,</span>\n            limit<span class="token punctuation">:</span><span class="token string">\'The largest number of words %d\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        ctrl<span class="token punctuation">:</span><span class="token punctuation">{</span>\n            reply<span class="token punctuation">:</span><span class="token string">\'Reply\'</span><span class="token punctuation">,</span>\n            ok<span class="token punctuation">:</span><span class="token string">\'Ok\'</span><span class="token punctuation">,</span>\n            sure<span class="token punctuation">:</span><span class="token string">\'Sure\'</span><span class="token punctuation">,</span>\n            cancel<span class="token punctuation">:</span><span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n            confirm<span class="token punctuation">:</span><span class="token string">\'Confirm\'</span><span class="token punctuation">,</span>\n            <span class="token keyword">continue</span><span class="token punctuation">:</span><span class="token string">\'Continue\'</span><span class="token punctuation">,</span>\n            more<span class="token punctuation">:</span><span class="token string">\'Load More...\'</span><span class="token punctuation">,</span>\n            <span class="token keyword">try</span><span class="token punctuation">:</span><span class="token string">\'Once More?\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        error<span class="token punctuation">:</span><span class="token punctuation">{</span>\n            <span class="token number">99</span><span class="token punctuation">:</span><span class="token string">\'Initialization failed, Please check the `el` element in the init method.\'</span><span class="token punctuation">,</span>\n            <span class="token number">100</span><span class="token punctuation">:</span><span class="token string">\'Initialization failed, Please check your appId and appKey.\'</span><span class="token punctuation">,</span>\n            <span class="token number">401</span><span class="token punctuation">:</span><span class="token string">\'Unauthorized operation, Please check your appId and appKey.\'</span><span class="token punctuation">,</span>\n            <span class="token number">403</span><span class="token punctuation">:</span><span class="token string">\'Access denied by api domain white list, Please check your security domain.\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        timeago<span class="token punctuation">:</span><span class="token punctuation">{</span>\n            seconds<span class="token punctuation">:</span><span class="token string">\'seconds ago\'</span><span class="token punctuation">,</span>\n            minutes<span class="token punctuation">:</span><span class="token string">\'minutes ago\'</span><span class="token punctuation">,</span>\n            hours<span class="token punctuation">:</span><span class="token string">\'hours ago\'</span><span class="token punctuation">,</span>\n            days<span class="token punctuation">:</span><span class="token string">\'days ago\'</span><span class="token punctuation">,</span>\n            now<span class="token punctuation">:</span><span class="token string">\'just now\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> valine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Valine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1.安装语言</span>\nvaline<span class="token punctuation">.</span><span class="token function">installLocale</span><span class="token punctuation">(</span>localeName<span class="token punctuation">,</span>localeMode<span class="token punctuation">)</span>\n<span class="token comment">// 2.初始化Valine</span>\nvaline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token punctuation">:</span><span class="token string">\'.comment\'</span><span class="token punctuation">,</span>\n    appId<span class="token punctuation">:</span><span class="token string">\'your leancloud appid\'</span><span class="token punctuation">,</span>\n    appKey<span class="token punctuation">:</span><span class="token string">\'your leancloud appkey\'</span><span class="token punctuation">,</span>\n    lang<span class="token punctuation">:</span>localeName\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>!&gt; <code>v1.1.8-beta9</code>开始支持。</p>')])},[],!1,null,null,"69eba41b");s.default=p.exports}}]);