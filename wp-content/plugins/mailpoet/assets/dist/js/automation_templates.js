"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[457],{57384:function(t,e,a){var n=a(2226),o=a(51867),i=a(89912),l=a(38313),s=a(96854),r=a(44259),c=a(70079),u=a(21263),m=a(84209),d=a(20174),p=a(82299),h=a(35250);function _(t){let{showModal:e,onClose:a}=t;return e?(0,h.jsx)(d.ZG,{onRequestClose:a,tracking:{utm_medium:"upsell_modal",utm_campaign:"create_automation_from_scratch"},children:(0,o.__)("Creating custom automations is a premium feature.","mailpoet")}):null}function x(t){let{variant:e="secondary"}=t;const[a,n]=(0,c.useState)(!1),[i,l]=(0,c.useState)(null),[s,r]=(0,c.useState)(!1),d=(0,c.useCallback)((()=>{!function(t,e){m.Hooks.applyFilters("mailpoet.automation.templates.from_scratch_button",(()=>{r(!1),n(!0)}))(e)}(0,l)}),[]);return(0,h.jsxs)(h.Fragment,{children:[i&&(0,h.jsx)(p.q,{type:"error",closable:!0,timeout:!1,children:(0,h.jsx)("p",{children:i})}),(0,h.jsx)(u.ZP,{variant:e,isBusy:s&&"link"!==e,disabled:s,onClick:()=>{r(!0),d()},children:(0,o.__)("Create custom automation","mailpoet")}),(0,h.jsx)(_,{showModal:a,onClose:()=>{n(!1),r(!1)}})]})}var f=a(2632),j=a(69177),g=a(13572),w=a(518);const k=[{name:"all",title:(0,h.jsx)(g.J$,{title:(0,o.__)("All","mailpoet"),count:l.U.length})},...l.G.map((t=>({...t,count:l.U.filter((e=>e.category===t.slug)).length}))).filter((t=>{let{count:e}=t;return e>0})).map((t=>{let{name:e,slug:a,count:n}=t;return{name:a,title:(0,h.jsx)(g.J$,{title:e,count:n})}}))];function C(){return window.location.search.includes("loadedvia=woo_multichannel_dashboard")&&window.MailPoet.trackEvent("MailPoet - WooCommerce Multichannel Marketing dashboard > Automation template selection page",{"WooCommerce version":window.mailpoet_woocommerce_version}),(0,h.jsxs)("div",{className:"mailpoet-main-container",children:[(0,h.jsx)(r.Q,{}),(0,h.jsx)(f.m,{heading:(0,o.__)("Start with a template","mailpoet"),headingPrefix:(0,h.jsx)(f.x,{href:j.MailPoet.urls.automationListing,label:(0,o.__)("Back to automation list","mailpoet")}),children:(0,h.jsx)(x,{})}),(0,h.jsx)(g.x4,{tabs:k,children:t=>(0,h.jsx)(w.p,{templates:l.U.filter((e=>"all"===t.name||e.category===t.name))})}),(0,h.jsxs)(g.$_,{children:[(0,h.jsx)("p",{children:(0,o.__)("Can’t find what you’re looking for?","mailpoet")}),(0,h.jsx)(x,{variant:"link"})]})]})}window.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("mailpoet_automation_templates");t&&((0,i.registerTranslations)(),(0,s.q)(),(0,n.s)(t).render((0,h.jsx)(C,{})))}))},65311:function(t){t.exports=jQuery}},function(t){t.O(0,[351],(function(){return 57384,t(t.s=57384)})),t.O()}]);