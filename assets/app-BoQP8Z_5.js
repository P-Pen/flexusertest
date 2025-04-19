import{T as l}from"./app-BXiLqtxA.js";import{B as d,y as g,o as s,g as o,x as t,a as i,c as a,u as f,w as h,b as m,j as u}from"./app-BYx064nO.js";var k=function(r){var e=r.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(e("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(e("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(e("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(e("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(e("progressspinner.color.4"),`;
    }
}
`)},y={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},v=d.extend({name:"progressspinner",theme:k,classes:y}),_={name:"BaseProgressSpinner",extends:g,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:v,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},p={name:"ProgressSpinner",extends:_,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},S=["fill","stroke-width"];function x(n,r,e,B,b,c){return s(),o("div",t({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(s(),o("svg",t({class:n.cx("spin"),viewBox:"25 25 50 50",style:c.svgStyle},n.ptm("spin")),[i("circle",t({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,S)],16))],16)}p.render=x;const $={__name:"TLoading",setup(n){return(r,e)=>(s(),a(f(p)))}},w={class:"flex items-center gap-2"},T={__name:"LoadingMessage",setup(n){return(r,e)=>(s(),a(l,null,{default:h(()=>[i("div",w,[m($,{style:{width:"1.4em",height:"1.4em"}}),u(r.$slots,"default")])]),_:3}))}};export{T as _};
