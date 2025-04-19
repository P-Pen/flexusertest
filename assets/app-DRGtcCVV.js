import{B as u,I as x,y as e,o,g as i,j as r,x as d,_ as a,c as s,w as l,u as c}from"./app-BYx064nO.js";var $=function(t){var n=t.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(n("inputgroup.addon.background"),`;
    color: `).concat(n("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,
.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroupaddon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:first-child input {
    border-top-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:last-child input {
    border-top-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)},_={root:function(t){var n=t.instance;return["p-inputgroup",{"p-inputgroup-fluid":n.hasFluid}]}},v=u.extend({name:"inputgroup",theme:$,classes:_}),w={name:"BaseInputGroup",extends:e,props:{fluid:{type:Boolean,default:null}},style:v,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},g={name:"InputGroup",extends:w,inheritAttrs:!1,inject:{$pcFluid:{default:null}},computed:{hasFluid:function(){return x(this.fluid)?!!this.$pcFluid:this.fluid}}};function I(p,t,n,b,h,m){return o(),i("div",d({class:p.cx("root")},p.ptmi("root")),[r(p.$slots,"default")],16)}g.render=I;const y={__name:"TInputGroup",setup(p){return(t,n)=>(o(),s(c(g),null,{default:l(()=>[r(t.$slots,"default",{},void 0,!0)]),_:3}))}},S=a(y,[["__scopeId","data-v-861dd48d"]]);var G={root:"p-inputgroupaddon"},A=u.extend({name:"inputgroupaddon",classes:G}),B={name:"BaseInputGroupAddon",extends:e,style:A,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},f={name:"InputGroupAddon",extends:B,inheritAttrs:!1};function k(p,t,n,b,h,m){return o(),i("div",d({class:p.cx("root")},p.ptmi("root")),[r(p.$slots,"default")],16)}f.render=k;const F={__name:"TInputGroupAddon",setup(p){return(t,n)=>(o(),s(c(f),null,{default:l(()=>[r(t.$slots,"default",{},void 0,!0)]),_:3}))}},j=a(F,[["__scopeId","data-v-87a6e568"]]);export{S as T,j as a};
