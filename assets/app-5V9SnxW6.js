import{s as L}from"./app-DOaxShSm.js";import{B as P,y as I,x as s,o as i,g as o,c as u,n as S,E as f,h as l,t as A,A as y,a as N,F as g,D as E,j as c,b as k,W as R,K as U,a8 as D,w as b,S as v,ad as C,u as M,ao as V}from"./app-BYx064nO.js";var j=function(r){var t=r.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},z={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:function(r){var t=r.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},F=P.extend({name:"breadcrumb",theme:j,classes:z}),T={name:"BaseBreadcrumb",extends:I,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:F,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},B={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:I,props:{item:null,templates:null,index:null},methods:{onClick:function(r){this.item.command&&this.item.command({originalEvent:r,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var r=this.item,t=r.to,n=r.url,m=typeof window<"u"?window.location.pathname:"";return t===m||n===m?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var r=this;return{action:s({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(n){return r.onClick(n)}},this.ptm("itemLink",this.ptmOptions)),icon:s({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:s({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},x=["href","target","aria-current"];function K(e,r,t,n,m,a){return a.visible()?(i(),o("li",s({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",a.ptmOptions)),[t.templates.item?(i(),u(f(t.templates.item),{key:1,item:t.item,label:a.label(),props:a.getMenuItemProps},null,8,["item","label","props"])):(i(),o("a",s({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":a.isCurrentUrl(),onClick:r[0]||(r[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},e.ptm("itemLink",a.ptmOptions)),[t.templates&&t.templates.itemicon?(i(),u(f(t.templates.itemicon),{key:0,item:t.item,class:S(e.cx("itemIcon",a.ptmOptions))},null,8,["item","class"])):t.item.icon?(i(),o("span",s({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",a.ptmOptions)),null,16)):l("",!0),t.item.label?(i(),o("span",s({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",a.ptmOptions)),A(a.label()),17)):l("",!0)],16,x))],16)):l("",!0)}B.render=K;var w={name:"Breadcrumb",extends:T,inheritAttrs:!1,components:{BreadcrumbItem:B,ChevronRightIcon:L}};function W(e,r,t,n,m,a){var p=y("BreadcrumbItem"),O=y("ChevronRightIcon");return i(),o("nav",s({class:e.cx("root")},e.ptmi("root")),[N("ol",s({class:e.cx("list")},e.ptm("list")),[e.home?(i(),u(p,s({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(i(!0),o(g,null,E(e.model,function(h,d){return i(),o(g,{key:h.label+"_"+d},[e.home||d!==0?(i(),o("li",s({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[c(e.$slots,"separator",{},function(){return[k(O,s({"aria-hidden":"true",ref_for:!0},e.ptm("separatorIcon")),null,16)]})],16)):l("",!0),k(p,{item:h,index:d,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}w.render=W;const H={__name:"TBreadcrumb",props:{items:{type:Array,default:[]}},setup(e){const r=e;r.items instanceof Array&&r.items.length>0&&r.items.forEach(n=>{n!==null&&typeof n=="object"&&R.isNull(n.label)&&typeof n.name=="string"&&(n.label=n.name)});const t=V();return U("$breadcrumb",t),(n,m)=>(i(),u(M(w),{model:e.items},D({_:2},[n.$slots.item?{name:"item",fn:b(a=>[c(n.$slots,"item",v(C(a)))]),key:"0"}:void 0,n.$slots.separator?{name:"separator",fn:b(()=>[c(n.$slots,"separator")]),key:"1"}:void 0,n.$slots.itemicon?{name:"itemicon",fn:b(a=>[c(n.$slots,"itemicon",v(C(a)))]),key:"2"}:void 0]),1032,["model"]))}};export{H as _};
