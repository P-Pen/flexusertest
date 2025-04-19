import{s as m}from"./app-DPMEyUYH.js";import{B as u,y as f,o as i,g as t,j as r,x as c,c as l,E as p,h as s,t as g,_ as v,w as y,a as b,n as k,u as w}from"./app-BYx064nO.js";var C=function(o){var e=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(e("chip.background"),`;
    color: `).concat(e("chip.color"),`;
    border-radius: `).concat(e("chip.border.radius"),`;
    padding: `).concat(e("chip.padding.y")," ").concat(e("chip.padding.x"),`;
    gap: `).concat(e("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(e("chip.icon.color"),`;
    font-size: `).concat(e("chip.icon.font.size"),`;
    width: `).concat(e("chip.icon.size"),`;
    height: `).concat(e("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(e("chip.image.width"),`;
    height: `).concat(e("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(e("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(e("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(e("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(e("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(e("chip.remove.icon.size"),`;
    width: `).concat(e("chip.remove.icon.size"),`;
    height: `).concat(e("chip.remove.icon.size"),`;
    color: `).concat(e("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(e("chip.transition.duration"),", box-shadow ").concat(e("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(e("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(e("chip.remove.icon.focus.ring.width")," ").concat(e("chip.remove.icon.focus.ring.style")," ").concat(e("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(e("chip.remove.icon.focus.ring.offset"),`;
}
`)},z={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},I=u.extend({name:"chip",theme:C,classes:z}),$={name:"BaseChip",extends:f,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:I,provide:function(){return{$pcChip:this,$parentInstance:this}}},d={name:"Chip",extends:$,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:m}},B=["aria-label"],S=["src"];function K(n,o,e,E,h,a){return h.visible?(i(),t("div",c({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[r(n.$slots,"default",{},function(){return[n.image?(i(),t("img",c({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,S)):n.$slots.icon?(i(),l(p(n.$slots.icon),c({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(i(),t("span",c({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):s("",!0),n.label?(i(),t("div",c({key:3,class:n.cx("label")},n.ptm("label")),g(n.label),17)):s("",!0)]}),n.removable?r(n.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(i(),l(p(n.removeIcon?"span":"TimesCircleIcon"),c({tabindex:"0",class:[n.cx("removeIcon"),n.removeIcon],onClick:a.close,onKeydown:a.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):s("",!0)],16,B)):s("",!0)}d.render=K;const T={__name:"TLabel",props:{outlined:void 0,size:void 0},setup(n){return(o,e)=>(i(),l(w(d),{class:k({outlined:n.outlined!==void 0,small:n.size==="small",tiny:n.size=="tiny"})},{default:y(()=>[b("span",null,[r(o.$slots,"default",{},void 0,!0)])]),_:3},8,["class"]))}},N=v(T,[["__scopeId","data-v-357cae5c"]]);export{N as T};
