"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[44],{2492:(e,t,o)=>{o.d(t,{E9:()=>d,GA:()=>l,KE:()=>s,b3:()=>p,dJ:()=>c,gZ:()=>r,hE:()=>n,yt:()=>a});var i=o(2119);const n=i.Ay.h1`
  font-family: 'Roboto';
  font-size: 24px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  width: 180px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
`,a=i.Ay.h1`
  font-family: 'Roboto';
  font-size: 24px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  width: 80px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;  
`,r=i.Ay.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 54px;  
`,s=i.Ay.section`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  @media screen and (min-width: 921px) {
    gap: 50px;
  }
`,d=i.Ay.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 87% 50%;
  border-radius: 20px;
  @media screen and (max-width: 920px) {
    height: 400px;
  }
  @media screen and (max-width: 479px) {
    height: 300px;
  }
`,l=i.Ay.h2`
  font-size: 24px;
  line-height: 1.4;
  position: relative;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 1px;
    width: 300px;
    background-color: #000;
    @media screen and (max-width: 920px) {
      width: 200px;
      font-size: 20px;
    }
  }
`,c=i.Ay.div`
  width: calc(100% / 2);
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`,p=i.Ay.p`
  font-size: 18px;
  line-height: 1.2;
  @media screen and (min-width: 771px) {
    line-height: 1.5;
  }
  @media screen and (min-width: 921px) {
    font-size: 21px;
    line-height: 1.8;
  }  
`},4445:(e,t,o)=>{var i=o(4994);t.A=void 0;var n=i(o(39)),a=o(579);t.A=(0,n.default)((0,a.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"}),"Key")},4659:(e,t,o)=>{var i=o(4994);t.A=void 0;var n=i(o(39)),a=o(579);t.A=(0,n.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Mail")},7224:(e,t,o)=>{o.d(t,{A:()=>s});var i=o(1292),n=o(6803),a=o(4535),r=o(6431);const s=(0,i.A)({createStyledComponent:(0,a.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,n.A)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,r.b)({props:e,name:"MuiContainer"})})},7392:(e,t,o)=>{o.d(t,{A:()=>f});var i=o(8587),n=o(8168),a=o(5043),r=o(8387),s=o(8610),d=o(7266),l=o(4535),c=o(6431),p=o(6236),h=o(6803),m=o(2532),u=o(2372);function g(e){return(0,u.Ay)("MuiIconButton",e)}const b=(0,m.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=o(579);const x=["edge","children","className","color","disabled","disableFocusRipple","size"],A=(0,l.Ay)(p.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,h.A)(o.color)}`],o.edge&&t[`edge${(0,h.A)(o.edge)}`],t[`size${(0,h.A)(o.size)}`]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.A)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(e=>{let{theme:t,ownerState:o}=e;var i;const a=null==(i=(t.vars||t).palette)?void 0:i[o.color];return(0,n.A)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,n.A)({color:null==a?void 0:a.main},!o.disableRipple&&{"&:hover":(0,n.A)({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.X4)(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${b.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})})),f=a.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:d,className:l,color:p="default",disabled:m=!1,disableFocusRipple:u=!1,size:b="medium"}=o,f=(0,i.A)(o,x),y=(0,n.A)({},o,{edge:a,color:p,disabled:m,disableFocusRipple:u,size:b}),w=(e=>{const{classes:t,disabled:o,color:i,edge:n,size:a}=e,r={root:["root",o&&"disabled","default"!==i&&`color${(0,h.A)(i)}`,n&&`edge${(0,h.A)(n)}`,`size${(0,h.A)(a)}`]};return(0,s.A)(r,g,t)})(y);return(0,v.jsx)(A,(0,n.A)({className:(0,r.A)(w.root,l),centerRipple:!0,focusRipple:!u,disabled:m,ref:t},f,{ownerState:y,children:d}))}))},1787:(e,t,o)=>{o.d(t,{A:()=>w});var i=o(8587),n=o(8168),a=o(5043),r=o(8387),s=o(8610),d=o(6803),l=o(5865),c=o(1053),p=o(5213),h=o(4535),m=o(2532),u=o(2372);function g(e){return(0,u.Ay)("MuiInputAdornment",e)}const b=(0,m.A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v,x=o(6431),A=o(579);const f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,h.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,d.A)(o.position)}`],!0===o.disablePointerEvents&&t.disablePointerEvents,t[o.variant]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===o.variant&&{[`&.${b.positionStart}&:not(.${b.hiddenLabel})`]:{marginTop:16}},"start"===o.position&&{marginRight:8},"end"===o.position&&{marginLeft:8},!0===o.disablePointerEvents&&{pointerEvents:"none"})})),w=a.forwardRef((function(e,t){const o=(0,x.b)({props:e,name:"MuiInputAdornment"}),{children:h,className:m,component:u="div",disablePointerEvents:b=!1,disableTypography:w=!1,position:z,variant:R}=o,S=(0,i.A)(o,f),k=(0,p.A)()||{};let $=R;R&&k.variant,k&&!$&&($=k.variant);const E=(0,n.A)({},o,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:b,position:z,variant:$}),M=(e=>{const{classes:t,disablePointerEvents:o,hiddenLabel:i,position:n,size:a,variant:r}=e,l={root:["root",o&&"disablePointerEvents",n&&`position${(0,d.A)(n)}`,r,i&&"hiddenLabel",a&&`size${(0,d.A)(a)}`]};return(0,s.A)(l,g,t)})(E);return(0,A.jsx)(c.A.Provider,{value:null,children:(0,A.jsx)(y,(0,n.A)({as:u,ownerState:E,className:(0,r.A)(M.root,m),ref:t},S,{children:"string"!==typeof h||w?(0,A.jsxs)(a.Fragment,{children:["start"===z?v||(v=(0,A.jsx)("span",{className:"notranslate",children:"\u200b"})):null,h]}):(0,A.jsx)(l.A,{color:"text.secondary",children:h})}))})}))}}]);
//# sourceMappingURL=44.ade4f6bd.chunk.js.map