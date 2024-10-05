"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[904],{5046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Me});var i=a(5043),n=a(9456),r=a(6977),o=a(2119);const s=o.Ay.li`
  display: flex;
  align-items: center;
  font-size: var(--font-size-base);
  font-weight: 600;
  min-width: 300px;
  max-width: 1200px;
  width: 100%;
  padding: 8px;
  background-color: rgba(159, 250, 255, 0.285);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: box-shadow 0.3s ease;
  backdrop-filter: blur(10px);

  :hover {
    box-shadow: 0 4px 8px var(--shadow-color);
    background-color: var(--hover-color);
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`,l=o.Ay.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`,d=o.Ay.div`
  display: grid;
  grid-template-columns: 45% 55%;
  width: 100%;
  text-align: center;
  gap: 10px;
  font-size: 16px;
  max-width: 280px;

  @media screen and (min-width: 1200px) {
    max-width: 1200px; 
  }

  @media screen and (min-width: 600px) {
    max-width: 600px; 
  }

  @media screen and (min-width: 480px) {
    max-width: 480px; 
  }

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: start;
  }

  @media screen and (max-width: 460px) {
    max-width: 250px;
    text-align: left;
  }

  @media screen and (max-width: 400px) {
    max-width: 220px;
  }
`,c=o.Ay.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  display: flex;
  height: 22px;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 230px;
  }

  @media screen and (max-width: 460px) {
    max-width: 210px;
  }

  @media screen and (max-width: 400px) {
    max-width: 190px;
  }
`,p=o.Ay.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  height: 100%;
  text-align: left;

  @media screen and (max-width: 460px) {
    max-width: 210px;
  }

  @media screen and (max-width: 400px) {
    max-width: 190px;
  }
`,x=o.Ay.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 10px;
`,m=o.Ay.div`
  display: flex;
  gap: 2px;
`,h=o.Ay.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > svg {
    transition: color 150ms linear;
    color: var(--primary-color);
    font-size: 24px;
  }

  :hover > svg {
    color: var(--success-color);
  }
`,u=o.Ay.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > svg {
    color: var(--danger-color);
    font-size: 24px;
  }

  :hover > svg {
    color: tomato;
  }
`;var g=a(9662),f=a(579);const b=(0,g.A)((0,f.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined"),v=(0,g.A)((0,f.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"}),"DeleteForeverOutlined");var A=a(7503),w=(a(2342),a(8587)),y=a(8168),j=a(8387),S=a(8610),k=a(5844),C=a(6803),W=a(9573),M=a(6258),D=a(3336),z=a(6431),N=a(4535),R=a(2532),P=a(2372);function $(e){return(0,P.Ay)("MuiDialog",e)}const E=(0,R.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);const B=i.createContext({});var I=a(2220),L=a(6240);const T=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],F=(0,N.Ay)(I.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),H=(0,N.Ay)(W.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),V=(0,N.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.container,t[`scroll${(0,C.A)(a.scroll)}`]]}})((e=>{let{ownerState:t}=e;return(0,y.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),O=(0,N.Ay)(D.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.paper,t[`scrollPaper${(0,C.A)(a.scroll)}`],t[`paperWidth${(0,C.A)(String(a.maxWidth))}`],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((e=>{let{theme:t,ownerState:a}=e;return(0,y.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&{maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${E.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&"xs"!==a.maxWidth&&{maxWidth:`${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`,[`&.${E.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[a.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${E.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})})),K=i.forwardRef((function(e,t){const a=(0,z.b)({props:e,name:"MuiDialog"}),n=(0,L.A)(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":o,"aria-labelledby":s,BackdropComponent:l,BackdropProps:d,children:c,className:p,disableEscapeKeyDown:x=!1,fullScreen:m=!1,fullWidth:h=!1,maxWidth:u="sm",onBackdropClick:g,onClick:b,onClose:v,open:A,PaperComponent:W=D.A,PaperProps:N={},scroll:R="paper",TransitionComponent:P=M.A,transitionDuration:E=r,TransitionProps:I}=a,K=(0,w.A)(a,T),Y=(0,y.A)({},a,{disableEscapeKeyDown:x,fullScreen:m,fullWidth:h,maxWidth:u,scroll:R}),Z=(e=>{const{classes:t,scroll:a,maxWidth:i,fullWidth:n,fullScreen:r}=e,o={root:["root"],container:["container",`scroll${(0,C.A)(a)}`],paper:["paper",`paperScroll${(0,C.A)(a)}`,`paperWidth${(0,C.A)(String(i))}`,n&&"paperFullWidth",r&&"paperFullScreen"]};return(0,S.A)(o,$,t)})(Y),q=i.useRef(),U=(0,k.A)(s),X=i.useMemo((()=>({titleId:U})),[U]);return(0,f.jsx)(H,(0,y.A)({className:(0,j.A)(Z.root,p),closeAfterTransition:!0,components:{Backdrop:F},componentsProps:{backdrop:(0,y.A)({transitionDuration:E,as:l},d)},disableEscapeKeyDown:x,onClose:v,open:A,ref:t,onClick:e=>{b&&b(e),q.current&&(q.current=null,g&&g(e),v&&v(e,"backdropClick"))},ownerState:Y},K,{children:(0,f.jsx)(P,(0,y.A)({appear:!0,in:A,timeout:E,role:"presentation"},I,{children:(0,f.jsx)(V,{className:(0,j.A)(Z.container),onMouseDown:e=>{q.current=e.target===e.currentTarget},ownerState:Y,children:(0,f.jsx)(O,(0,y.A)({as:W,elevation:24,role:"dialog","aria-describedby":o,"aria-labelledby":U},N,{className:(0,j.A)(Z.paper,N.className),ownerState:Y,children:(0,f.jsx)(B.Provider,{value:X,children:c})}))})}))}))}));var Y=a(5865);function Z(e){return(0,P.Ay)("MuiDialogTitle",e)}const q=(0,R.A)("MuiDialogTitle",["root"]),U=["className","id"],X=(0,N.Ay)(Y.A,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),J=i.forwardRef((function(e,t){const a=(0,z.b)({props:e,name:"MuiDialogTitle"}),{className:n,id:r}=a,o=(0,w.A)(a,U),s=a,l=(e=>{const{classes:t}=e;return(0,S.A)({root:["root"]},Z,t)})(s),{titleId:d=r}=i.useContext(B);return(0,f.jsx)(X,(0,y.A)({component:"h2",className:(0,j.A)(l.root,n),ownerState:s,ref:t,variant:"h6",id:null!=r?r:d},o))}));function G(e){return(0,P.Ay)("MuiDialogContent",e)}(0,R.A)("MuiDialogContent",["root","dividers"]);const _=["className","dividers"],Q=(0,N.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dividers&&t.dividers]}})((e=>{let{theme:t,ownerState:a}=e;return(0,y.A)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${q.root} + &`]:{paddingTop:0}})})),ee=i.forwardRef((function(e,t){const a=(0,z.b)({props:e,name:"MuiDialogContent"}),{className:i,dividers:n=!1}=a,r=(0,w.A)(a,_),o=(0,y.A)({},a,{dividers:n}),s=(e=>{const{classes:t,dividers:a}=e,i={root:["root",a&&"dividers"]};return(0,S.A)(i,G,t)})(o);return(0,f.jsx)(Q,(0,y.A)({className:(0,j.A)(s.root,i),ownerState:o,ref:t},r))}));var te=a(6522);function ae(e){return(0,P.Ay)("MuiDialogActions",e)}(0,R.A)("MuiDialogActions",["root","spacing"]);const ie=["className","disableSpacing"],ne=(0,N.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,y.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),re=i.forwardRef((function(e,t){const a=(0,z.b)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:n=!1}=a,r=(0,w.A)(a,ie),o=(0,y.A)({},a,{disableSpacing:n}),s=(e=>{const{classes:t,disableSpacing:a}=e,i={root:["root",!a&&"spacing"]};return(0,S.A)(i,ae,t)})(o);return(0,f.jsx)(ne,(0,y.A)({className:(0,j.A)(s.root,i),ownerState:o,ref:t},r))}));var oe=a(1906);const se=e=>{let{isEditing:t,setIsEditing:a,editName:i,setEditName:n,editNumber:r,setEditNumber:o,onPatch:s}=e;return(0,f.jsxs)(K,{open:t,onClose:()=>a(!1),"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm",disableScrollLock:!0,PaperProps:{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",borderRadius:"16px",color:"var(--primary-color)",boxShadow:"0 4px 20px var(--shadow-color)",transition:"all 0.3s ease"}},children:[(0,f.jsx)(J,{id:"form-dialog-title",children:"Edit Contact"}),(0,f.jsxs)(ee,{children:[(0,f.jsx)(te.A,{autoFocus:!0,margin:"dense",label:"Name",type:"text",fullWidth:!0,value:i,onChange:e=>n(e.target.value)}),(0,f.jsx)(te.A,{margin:"dense",label:"Phone",type:"text",fullWidth:!0,value:r,onChange:e=>o(e.target.value)})]}),(0,f.jsxs)(re,{sx:{display:"flex",justifyContent:"center",gap:"35px"},children:[(0,f.jsx)(oe.A,{onClick:()=>a(!1),color:"primary",children:"Cancel"}),(0,f.jsx)(oe.A,{onClick:s,color:"primary",children:"Save"})]})]})},le=e=>{let{id:t,number:a,name:o}=e;const g=(0,n.wA)(),[w,y]=(0,i.useState)(!1),[j,S]=(0,i.useState)(o),[k,C]=(0,i.useState)(a);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{children:[(0,f.jsxs)(l,{children:[(0,f.jsx)(x,{children:o.charAt(0).toUpperCase()}),(0,f.jsxs)(d,{children:[(0,f.jsx)(c,{children:o}),(0,f.jsx)(p,{children:a})]})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{type:"button",onClick:()=>{S(o),C(a),y(!0)},children:(0,f.jsx)(b,{sx:{fontSize:30}})}),(0,f.jsx)(u,{type:"button",onClick:()=>{g((0,r.MO)(t)),A.oR.error(`Oh no! ${o} is gone. Say goodbye! \ud83d\udc4b`,{position:"top-right",theme:"dark"})},children:(0,f.jsx)(v,{sx:{fontSize:30}})})]})]}),(0,f.jsx)(se,{isEditing:w,setIsEditing:y,editName:j,setEditName:S,editNumber:k,setEditNumber:C,onPatch:()=>{g((0,r.VL)({id:t,name:j,number:k})),y(!1),A.oR.success(`Nice! ${j} is looking fresh and updated! \ud83c\udf89`,{position:"top-right"})}})]})},de=o.Ay.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`,ce=e=>e.contacts.isLoading,pe=e=>e.filter,xe=e=>e.contacts.items,me=()=>{const e=(0,n.d4)(xe),t=(0,n.d4)(pe),a=(0,n.wA)(),o=t.toLowerCase(),s=e.filter((e=>e.name.toLowerCase().includes(o)));return(0,i.useEffect)((()=>{a((0,r.oe)())}),[a]),(0,f.jsx)(de,{children:s.map((e=>{let{id:t,name:a,number:i}=e;return(0,f.jsx)(le,{id:t,name:a,number:i},t)}))})};var he=a(6360),ue=a(719);const ge=o.Ay.div`
  display: flex;
  align-items: flex-end;
  min-width: 292px;
  width: 100%;
  margin-bottom: 20px;
  transition: border-bottom 250ms linear;
    :hover > svg {
      transition: color 250ms linear;
      color: #005ae0;
    }  
`,fe=()=>{const e=(0,n.d4)(pe),t=(0,n.wA)();return(0,f.jsxs)("label",{children:[(0,f.jsx)(Y.A,{variant:"h6",gutterBottom:!0,sx:{width:"292px",mb:0,mt:1,fontFamily:"revert"},children:"Filter"}),(0,f.jsxs)(ge,{children:[(0,f.jsx)(he.A,{sx:{color:"#0f7ec9",mr:1,fontSize:30}}),(0,f.jsx)(te.A,{variant:"standard",id:"standard-search",label:"Enter request",type:"search",name:"filter",value:e,onChange:e=>{t((0,ue.O)(e.currentTarget.value))}})]})]})};let be=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")};const ve=o.Ay.h2`
  font-family: 'Roboto';
  letter-spacing: 1px;
  text-align: center;
`;var Ae=a(6446);const we=(0,g.A)([(0,f.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"},"0"),(0,f.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,f.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"},"2")],"PeopleAlt"),ye=(0,g.A)((0,f.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m2 2v2h3v3h2v-3h3v-2h-3V7h-2v3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4"}),"PersonAddAlt1");var je=a(5539);const Se=()=>{const[e,t]=(0,i.useState)(""),[a,o]=(0,i.useState)(""),s=(0,n.wA)(),l=(0,n.d4)(xe),d=e=>{switch(e.currentTarget.name){case"name":t(e.currentTarget.value);break;case"number":o(e.currentTarget.value);break;default:return}};return(0,f.jsxs)(Ae.A,{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center",component:"form",autoComplete:"off",maxWidth:"420px",onSubmit:i=>{if(i.preventDefault(),""===e.trim())return void A.oR.warn("Name cannot be empty or contain only spaces");const n={name:e.trim(),number:a,id:be()};l.find((e=>e.name.toLowerCase()===n.name.toLowerCase()))?A.oR.warn(`Name  ${n.name}  is alredy in contacts!`):(s((0,r.IP)(n)),A.oR.success(`You have added a new contact ${n.name}`),t(""),o(""))},children:[(0,f.jsxs)(Ae.A,{sx:{display:"flex",alignItems:"flex-end",gap:"10px"},children:[(0,f.jsx)(ve,{children:"Add new contact"}),(0,f.jsx)(we,{})]}),(0,f.jsxs)(Ae.A,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,f.jsx)(ye,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,f.jsx)(te.A,{sx:{width:"260px",color:"black","& .MuiInputBase-input":{color:"black"}},variant:"standard",onChange:d,type:"text",name:"name",value:e,required:!0,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",size:"small",margin:"none",id:"name",label:"Name",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}})]}),(0,f.jsxs)(Ae.A,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,f.jsx)(je.A,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,f.jsx)(te.A,{sx:{width:"260px",color:"black","& .MuiInputBase-input":{color:"black"}},variant:"standard",onChange:d,type:"tel",name:"number",value:a,required:!0,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",size:"small",margin:"none",fullWidth:!0,id:"number",label:"Number",inputProps:{inputMode:"numeric",pattern:"[+]?[0-9]*"}})]}),(0,f.jsx)(oe.A,{type:"submit",variant:"contained",sx:{mr:-1,mt:"18px",width:"200px",fontFamily:"Roboto, sans-serif",fontSize:"16px",letterSpacing:"1px",fontWeight:"500"},children:"Add contact"}),(0,f.jsx)(A.N9,{position:"top-center",autoClose:1500})]})};var ke=a(2492),Ce=a(6845),We=a(8640);function Me(){const e=(0,n.wA)(),t=(0,n.d4)(ce);return(0,i.useEffect)((()=>{e((0,r.oe)())}),[e]),(0,f.jsx)(ke.gZ,{children:(0,f.jsxs)(We.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",pt:2,pb:4},maxWidth:"xl",children:[t&&(0,f.jsx)(Ce.A,{}),(0,f.jsx)(Se,{}),(0,f.jsx)(fe,{}),(0,f.jsx)(me,{})]})})}},2492:(e,t,a)=>{a.d(t,{E9:()=>l,GA:()=>d,KE:()=>s,b3:()=>p,dJ:()=>c,gZ:()=>o,hE:()=>n,yt:()=>r});var i=a(2119);const n=i.Ay.h1`
  font-family: 'Roboto';
  font-size: 24px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  width: 180px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
`,r=i.Ay.h1`
  font-family: 'Roboto';
  font-size: 24px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  width: 80px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;  
`,o=i.Ay.main`
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
`,l=i.Ay.img`
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
`,d=i.Ay.h2`
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
`},5539:(e,t,a)=>{var i=a(4994);t.A=void 0;var n=i(a(39)),r=a(579);t.A=(0,n.default)((0,r.jsx)("path",{d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z"}),"PhoneIphone")},6360:(e,t,a)=>{var i=a(4994);t.A=void 0;var n=i(a(39)),r=a(579);t.A=(0,n.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")}}]);
//# sourceMappingURL=904.91e7505e.chunk.js.map