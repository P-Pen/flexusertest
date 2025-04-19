import{B as y,y as f,o as r,g as i,c as u,x as t,E as m,h as l,j as p,a as b,t as k,_ as h,r as w,W as g,aE as $,w as T,u as d}from"./app-BYx064nO.js";var B=function(e){var n=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},S={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},z=y.extend({name:"tag",theme:B,classes:S}),C={name:"BaseTag",extends:f,props:{value:null,severity:null,rounded:Boolean,icon:String},style:z,provide:function(){return{$pcTag:this,$parentInstance:this}}},v={name:"Tag",extends:C,inheritAttrs:!1};function E(a,e,n,c,o,s){return r(),i("span",t({class:a.cx("root")},a.ptmi("root")),[a.$slots.icon?(r(),u(m(a.$slots.icon),t({key:0,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(r(),i("span",t({key:1,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):l("",!0),a.value!=null||a.$slots.default?p(a.$slots,"default",{key:2},function(){return[b("span",t({class:a.cx("label")},a.ptm("label")),k(a.value),17)]}):l("",!0)],16)}v.render=E;const N={__name:"TTag",props:{severity:"",value:null,label:null,success:"",secondary:"",info:"",warn:"",danger:"",contrast:"",error:"",warning:""},setup(a){const e=a,n=()=>g.composeSeverity(e,["success","secondary","info","warn","danger","contrast"],{error:"danger",warning:"warn"}),c=w(n());let o=e.value;return g.isNull(o)&&typeof e.label=="string"&&(o=e.label),$(()=>{c.value=n()}),(s,j)=>(r(),u(d(v),{value:d(o),severity:c.value},{default:T(()=>[p(s.$slots,"default",{},void 0,!0)]),_:3},8,["value","severity"]))}},I=h(N,[["__scopeId","data-v-309266d2"]]);export{I as T};
