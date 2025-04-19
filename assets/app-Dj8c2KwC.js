import{B as k,U as m,y as $,o as c,g as b,j as p,x as i,J as V,c as d,w as y,u as h,aw as l,q as S,a4 as I,ax as u,a3 as _,ay as R,R as W,C as E,d as B,E as w,h as x,a as v}from"./app-BYx064nO.js";import{s as P}from"./app-cRxw2ZDj.js";import{s as A}from"./app-DOaxShSm.js";var H=function(n){var t=n.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(t("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(t("tabs.tablist.border.color"),`;
    border-width: `).concat(t("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(t("tabs.nav.button.background"),`;
    color: `).concat(t("tabs.nav.button.color"),`;
    width: `).concat(t("tabs.nav.button.width"),`;
    transition: color `).concat(t("tabs.transition.duration"),", outline-color ").concat(t("tabs.transition.duration"),", box-shadow ").concat(t("tabs.transition.duration"),`;
    box-shadow: `).concat(t("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(t("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.nav.button.focus.ring.width")," ").concat(t("tabs.nav.button.focus.ring.style")," ").concat(t("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(t("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(t("tabs.tab.background"),`;
    border-width: `).concat(t("tabs.tab.border.width"),`;
    border-color: `).concat(t("tabs.tab.border.color"),`;
    color: `).concat(t("tabs.tab.color"),`;
    padding: `).concat(t("tabs.tab.padding"),`;
    font-weight: `).concat(t("tabs.tab.font.weight"),`;
    transition: background `).concat(t("tabs.transition.duration"),", border-color ").concat(t("tabs.transition.duration"),", color ").concat(t("tabs.transition.duration"),", outline-color ").concat(t("tabs.transition.duration"),", box-shadow ").concat(t("tabs.transition.duration"),`;
    margin: `).concat(t("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(t("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.tab.focus.ring.width")," ").concat(t("tabs.tab.focus.ring.style")," ").concat(t("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(t("tabs.tab.hover.background"),`;
    border-color: `).concat(t("tabs.tab.hover.border.color"),`;
    color: `).concat(t("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(t("tabs.tab.active.background"),`;
    border-color: `).concat(t("tabs.tab.active.border.color"),`;
    color: `).concat(t("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(t("tabs.tabpanel.background"),`;
    color: `).concat(t("tabs.tabpanel.color"),`;
    padding: `).concat(t("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(t("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.tabpanel.focus.ring.width")," ").concat(t("tabs.tabpanel.focus.ring.style")," ").concat(t("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(t("tabs.active.bar.bottom"),`;
    height: `).concat(t("tabs.active.bar.height"),`;
    background: `).concat(t("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},U={root:function(n){var t=n.props;return["p-tabs p-component",{"p-tabs-scrollable":t.scrollable}]}},D=k.extend({name:"tabs",theme:H,classes:U}),j={name:"BaseTabs",extends:$,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:D,provide:function(){return{$pcTabs:this,$parentInstance:this}}},T={name:"Tabs",extends:j,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||m()},value:function(n){this.d_value=n}},mounted:function(){this.id=this.id||m()},methods:{updateValue:function(n){this.d_value!==n&&(this.d_value=n,this.$emit("update:value",n))},isVertical:function(){return this.orientation==="vertical"}}};function q(e,n,t,o,s,a){return c(),b("div",i({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}T.render=q;const nt={__name:"TTabView",props:["code","modelValue"],emits:["change","update:modelValue"],setup(e,{emit:n}){const t=e;let o=t.modelValue;typeof o!="string"&&(o=t.code);const s=n,a=r=>{s("update:modelValue",r),s("change",{value:r})};return V(()=>t.modelValue,r=>{o=r}),(r,f)=>(c(),d(h(T),{"onUpdate:value":a,value:h(o),scrollable:""},{default:y(()=>[p(r.$slots,"default")]),_:3},8,["value"]))}};var F={root:"p-tablist",content:function(n){var t=n.instance;return["p-tablist-content",{"p-tablist-viewport":t.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},J=k.extend({name:"tablist",classes:F}),G={name:"BaseTabList",extends:$,props:{},style:J,provide:function(){return{$pcTabList:this,$parentInstance:this}}},N={name:"TabList",extends:G,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(n){n?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var n=this;this.$nextTick(function(){n.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(n){this.showNavigators&&this.updateButtonState(),n.preventDefault()},onPrevButtonClick:function(){var n=this.$refs.content,t=l(n),o=n.scrollLeft-t;n.scrollLeft=o<=0?0:o},onNextButtonClick:function(){var n=this.$refs.content,t=l(n)-this.getVisibleButtonWidths(),o=n.scrollLeft+t,s=n.scrollWidth-t;n.scrollLeft=o>=s?s:o},bindResizeObserver:function(){var n=this;this.resizeObserver=new ResizeObserver(function(){return n.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var n;(n=this.resizeObserver)===null||n===void 0||n.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var n=this.$refs,t=n.content,o=n.inkbar,s=n.tabs,a=S(t,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(o.style.height=I(a)+"px",o.style.top=u(a).top-u(s).top+"px"):(o.style.width=_(a)+"px",o.style.left=u(a).left-u(s).left+"px")},updateButtonState:function(){var n=this.$refs,t=n.list,o=n.content,s=o.scrollLeft,a=o.scrollTop,r=o.scrollWidth,f=o.scrollHeight,z=o.offsetWidth,C=o.offsetHeight,g=[l(o),R(o)],L=g[0],O=g[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=t.offsetHeight>=C&&parseInt(a)!==f-O):(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=t.offsetWidth>=z&&parseInt(s)!==r-L)},getVisibleButtonWidths:function(){var n=this.$refs,t=n.prevBtn,o=n.nextBtn;return[t,o].reduce(function(s,a){return a?s+l(a):s},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:P,ChevronRightIcon:A},directives:{ripple:W}},K=["aria-label","tabindex"],M=["aria-orientation"],Q=["aria-label","tabindex"];function X(e,n,t,o,s,a){var r=E("ripple");return c(),b("div",i({ref:"list",class:e.cx("root")},e.ptmi("root")),[a.showNavigators&&s.isPrevButtonEnabled?B((c(),b("button",i({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:n[0]||(n[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),d(w(a.templates.previcon||"ChevronLeftIcon"),i({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,K)),[[r]]):x("",!0),v("div",i({ref:"content",class:e.cx("content"),onScroll:n[1]||(n[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)})},e.ptm("content")),[v("div",i({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[p(e.$slots,"default"),v("span",i({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,M)],16),a.showNavigators&&s.isNextButtonEnabled?B((c(),b("button",i({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:n[2]||(n[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),d(w(a.templates.nexticon||"ChevronRightIcon"),i({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Q)),[[r]]):x("",!0)],16)}N.render=X;const et={__name:"TTabs",setup(e){return(n,t)=>(c(),d(h(N),null,{default:y(()=>[p(n.$slots,"default")]),_:3}))}};export{nt as _,et as a};
