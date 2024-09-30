import{C as te,Q as ae,R as re,m as N,U as se,V as ne,g as u,W as ie,u as oe,j as e,X as le,Y as ce,Z as k,$ as de,a0 as me,B as ue,a1 as m,a2 as y,a3 as g,a4 as l,a5 as S,a6 as pe,a7 as he,a8 as xe}from"./index-Io0kcKZo.js";import{G as ge}from"./index-BHhrJ9OZ.js";import{B as H}from"./ButtonCollapse-CC9uKs7g.js";import{G as ve}from"./GeneralBoard-Cfa0-eNx.js";import"./index-23883GlA.js";const fe=te("MuiBox",["root"]),je=ae({defaultClassName:fe.root,generateClassName:re.generate});class T{constructor(a=0,r="Network Error"){this.status=a,this.text=r}}const be=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,a)=>Promise.resolve(localStorage.setItem(t,a)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:be()},C=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},ye=(t,a="https://api.emailjs.com")=>{if(!t)return;const r=C(t);i.publicKey=r.publicKey,i.blockHeadless=r.blockHeadless,i.storageProvider=r.storageProvider,i.blockList=r.blockList,i.limitRate=r.limitRate,i.origin=r.origin||a},_=async(t,a,r={})=>{const o=await fetch(i.origin+t,{method:"POST",headers:r,body:a}),n=await o.text(),c=new T(o.status,n);if(o.ok)return c;throw c},D=(t,a,r)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||typeof a!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Se=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},I=t=>t.webdriver||!t.languages||t.languages.length===0,O=()=>new T(451,"Unavailable For Headless Browser"),Te=(t,a)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof a!="string")throw"The BlockList watchVariable has to be a string"},we=t=>{var a;return!((a=t.list)!=null&&a.length)||!t.watchVariable},ke=(t,a)=>t instanceof FormData?t.get(a):t[a],K=(t,a)=>{if(we(t))return!1;Te(t.list,t.watchVariable);const r=ke(a,t.watchVariable);return typeof r!="string"?!1:t.list.includes(r)},V=()=>new T(403,"Forbidden"),Ce=(t,a)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(a&&typeof a!="string")throw"The LimitRate ID has to be a non-empty string"},Me=async(t,a,r)=>{const o=Number(await r.get(t)||0);return a-Date.now()+o},$=async(t,a,r)=>{if(!a.throttle||!r)return!1;Ce(a.throttle,a.id);const o=a.id||t;return await Me(o,a.throttle,r)>0?!0:(await r.set(o,Date.now().toString()),!1)},q=()=>new T(429,"Too Many Requests"),Be=async(t,a,r,o)=>{const n=C(o),c=n.publicKey||i.publicKey,x=n.blockHeadless||i.blockHeadless,f=n.storageProvider||i.storageProvider,j={...i.blockList,...n.blockList},h={...i.limitRate,...n.limitRate};return x&&I(navigator)?Promise.reject(O()):(D(c,t,a),Se(r),r&&K(j,r)?Promise.reject(V()):await $(location.pathname,h,f)?Promise.reject(q()):_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:t,template_id:a,template_params:r}),{"Content-type":"application/json"}))},Fe=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Re=t=>typeof t=="string"?document.querySelector(t):t,Ee=async(t,a,r,o)=>{const n=C(o),c=n.publicKey||i.publicKey,x=n.blockHeadless||i.blockHeadless,f=i.storageProvider||n.storageProvider,j={...i.blockList,...n.blockList},h={...i.limitRate,...n.limitRate};if(x&&I(navigator))return Promise.reject(O());const v=Re(r);D(c,t,a),Fe(v);const d=new FormData(v);return K(j,d)?Promise.reject(V()):await $(location.pathname,h,f)?Promise.reject(q()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",a),d.append("user_id",c),_("/api/v1.0/email/send-form",d))},Pe={init:ye,send:Be,sendForm:Ee,EmailJSResponseStatus:T},Le=N(se),He=N(ne),Ne=()=>{const[t,a]=u.useState(""),[r,o]=u.useState(""),[n,c]=u.useState(""),[x,f]=u.useState(!1),j=ie(),[h,v]=u.useState({}),[d,G]=u.useState({name:"",email:"",message:"",date:""}),W=()=>{f(!x)},p=oe();u.useEffect(()=>{const s=new Date,b=`${s.toString().split(" ")[0]} ${s.getDate()} ${s.toString().split(" ")[1]}`;G({name:t,email:r,message:n,date:b})},[t,r,n]);const[M,A]=u.useState(!1),w={servicesId:"service_eb5ubq6",templateId:"template_ifh2ezn",publicKey:"pFIhk0J32F6RXAfjz"};u.useEffect(()=>{A(!0)},[]);const B=s=>s.trim()?/\d/.test(s)?p.formatMessage({id:"valid.name.number"}):"":p.formatMessage({id:"valid.name"}),F=s=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)?"":p.formatMessage({id:"valid.email"}),R=s=>s.length<10?p.formatMessage({id:"valid.message"}):s.length>1e3?p.formatMessage({id:"valid.message.maxLegth"}):"",z=s=>{a(s.target.value)},J=s=>{o(s.target.value)},U=s=>{c(s.target.value)},X=()=>{v(s=>({...s,name:B(t)}))},Z=()=>{v(s=>({...s,email:F(r)}))},Q=()=>{v(s=>({...s,message:R(n)}))},E=u.useRef(),Y=s=>{s.preventDefault();const b=B(t),P=F(r),L=R(n);if(b||P||L){v({name:b,email:P,message:L});return}Pe.sendForm(w.servicesId,w.templateId,E.current,{publicKey:w.publicKey}).then(()=>{j("/thank-you")},ee=>{throw f(!x),new Error(ee.text)})};return e.jsxs(le,{sx:{overflowX:"hidden"},children:[e.jsx(ce,{openToast:x,handleClosedToast:W,severity:"error",messageToast:e.jsxs("p",{children:[p.formatMessage({id:"error.snack"})," ",e.jsx("br",{}),p.formatMessage({id:"error.snackTwo"})]})}),M&&e.jsx(Le,{initial:{x:"-100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:e.jsxs("form",{ref:E,onSubmit:Y,children:[e.jsx(k,{name:"user_name",label:p.formatMessage({id:"contact.name"}),variant:"outlined",required:!0,fullWidth:!0,margin:"normal",type:"text",value:t,onChange:z,onBlur:X,error:!!h.name&&t.trim()!=="",helperText:t.trim()!==""?h.name:"","data-cy":"name-field"}),e.jsx(k,{type:"email",name:"user_email",label:p.formatMessage({id:"contact.email"}),variant:"outlined",required:!0,fullWidth:!0,margin:"normal",value:r,onChange:J,onBlur:Z,error:!!h.email&&r.trim()!=="",helperText:r.trim()!==""?h.email:"","data-cy":"email-field"}),e.jsx(k,{name:"message",label:p.formatMessage({id:"contact.message"}),variant:"outlined",required:!0,multiline:!0,rows:4,fullWidth:!0,margin:"normal",value:n,onChange:U,onBlur:Q,error:!!h.message&&n.trim()!=="",helperText:n.trim()!==""?h.message:"","data-cy":"message-area"}),e.jsx(de,{type:"submit",value:"Send",variant:"contained",color:"primary","data-cy":"submit-email",children:p.formatMessage({id:"contact.submit"})})]})}),e.jsx(me,{orientation:"vertical",flexItem:!0}),M&&e.jsx(ue,{children:e.jsxs(He,{initial:{x:"100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:[e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"1 "}),e.jsx(y,{variant:"caption",children:"const"})," ",e.jsx(g,{variant:"caption",children:"button"})," ",e.jsx(y,{variant:"caption",children:"="})," ",e.jsx(g,{variant:"caption",children:"document.querySelector"})," ",e.jsx(l,{variant:"caption",children:"("}),e.jsx(S,{variant:"caption",children:"'#sendBtn'"}),e.jsx(l,{variant:"caption",children:");"}),e.jsx("br",{}),e.jsxs(m,{variant:"caption",children:["2 ",e.jsx("br",{})]}),e.jsx(m,{variant:"caption",children:"3 "}),e.jsx(y,{variant:"caption",children:"const "}),e.jsx(g,{variant:"caption",children:"message "}),e.jsx(y,{variant:"caption",children:"= "}),e.jsx(l,{variant:"caption",children:"{"}),e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"4"}),"  ",e.jsx(g,{variant:"caption",children:"Name"}),e.jsx(l,{variant:"caption",children:":"}),e.jsx(S,{variant:"caption",children:`"${d.name}"`}),e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"5"}),"  ",e.jsx(g,{variant:"caption",children:"Email"}),e.jsx(l,{variant:"caption",children:":"}),e.jsx(S,{variant:"caption",children:`"${d.email}"`}),e.jsx("br",{}),e.jsxs(pe,{children:[e.jsx(m,{variant:"caption",children:"6"}),"  ",e.jsx(g,{variant:"caption",children:"Message"}),e.jsx(l,{variant:"caption",children:":"}),e.jsx(he,{title:`"${d.message}"`,variant:"caption",children:`"${d.message}"`})]}),e.jsx(m,{variant:"caption",children:"7 "}),e.jsx(l,{variant:"caption",children:"Date:"}),e.jsx(S,{variant:"caption",children:`"${d.date}"`}),"  ",e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"8 "}),e.jsx(l,{variant:"caption",children:"}"}),e.jsx("br",{}),e.jsxs(m,{variant:"caption",children:["9  ",e.jsx("br",{})]}),e.jsx(m,{variant:"caption",children:"10 "}),e.jsxs(g,{variant:"caption",children:["button",e.jsx(l,{variant:"caption",children:"."}),"addEventListener"]}),e.jsx(l,{variant:"caption",children:"("}),e.jsx(S,{variant:"caption",children:"'click'"}),e.jsx(l,{variant:"caption",children:", ()"}),e.jsx(y,{variant:"caption",children:" => "}),e.jsx(l,{variant:"caption",children:"{"}),e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"11 "}),"  ",e.jsxs(g,{variant:"caption",children:["form",e.jsx(l,{variant:"caption",children:"."}),"send"]}),e.jsx(l,{variant:"caption",children:"("}),e.jsx(g,{variant:"caption",children:"message"}),e.jsxs(l,{variant:"caption",children:["); ",e.jsx("br",{}),e.jsx(m,{variant:"caption",children:"12 "}),"}",")"]}),e.jsx("br",{})]})})]})},Ve=()=>{const[t,a]=u.useState(!1),[r,o]=u.useState(!0),n=()=>{a(!t)},c=()=>{o(!r)};return e.jsx(e.Fragment,{children:e.jsx(ve,{generalHeading:"nav.contact",generalText:"nav.contact",leftTemplate:e.jsx(H,{isTrue:!1,isScreen:!0,handleClickContact:c,openContact:r,nameCollapse:"contact.LeftCard",myIcon:e.jsx(je,{sx:x=>({display:"none",[x.breakpoints.down("md")]:{display:"flex"}}),children:e.jsx(ge,{style:{fontSize:"24px"}})})}),postprimaryTemplate:e.jsx(H,{isTrue:!0,isScreen:!1,handleClickContact:n,openContact:t,nameCollapse:"contact.findMeIn",myIcon:e.jsx(xe,{})}),generalTemplate:e.jsx(Ne,{}),smallGeneralHeading:"nav.contact"})})};export{Ve as default};