import{B as u,y as d,o as t,g as a,x as s,j as l,f as g,t as m,h as o,c as b,w as c,u as f}from"./app-BYx064nO.js";var h=function(r){var n=r.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(n("progressbar.height"),`;
    background: `).concat(n("progressbar.background"),`;
    border-radius: `).concat(n("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    font-size: `).concat(n("progressbar.label.font.size"),`;
    font-weight: `).concat(n("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)},v={root:function(r){var n=r.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},y=u.extend({name:"progressbar",theme:h,classes:v}),k={name:"BaseProgressBar",extends:d,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:y,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},p={name:"ProgressBar",extends:k,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},w=["aria-valuenow"];function B(e,r,n,S,$,i){return t(),a("div",s({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[i.determinate?(t(),a("div",s({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(t(),a("div",s({key:0,class:e.cx("label")},e.ptm("label")),[l(e.$slots,"default",{},function(){return[g(m(e.value+"%"),1)]})],16)):o("",!0)],16)):i.indeterminate?(t(),a("div",s({key:1,class:e.cx("value")},e.ptm("value")),null,16)):o("",!0)],16,w)}p.render=B;const z={__name:"TProgressBar",setup(e){return(r,n)=>(t(),b(f(p),null,{default:c(()=>[l(r.$slots,"default")]),_:3}))}};export{z as _,p as s};
