import{g as s,u as b,aH as k,j as e,B as L,aI as v,T,an as M,aJ as C,aK as H,aL as w,aM as I,aN as P}from"./index-a2a74173.js";import{S as W,a as A,b as N,c as B,d as F,e as R,f as G,g as _,h as E,i as D,j as O,k as z,l as K,B as j,G as $}from"./GameSnake-9ecf934d.js";import"./ButtonCollapse-c36ee9ce.js";import{m,A as J}from"./index-84dbca5d.js";const U=(t,a=150,n=100,i=2e3,l=3e5)=>{const[r,f]=s.useState(0),[c,u]=s.useState(""),[o,x]=s.useState(!1),[p,S]=s.useState(!1);return s.useEffect(()=>{const d=setTimeout(()=>{S(!0),f(0),u(t[0])},l);return()=>clearTimeout(d)},[t,l]),s.useEffect(()=>{if(p)return;const d=t[r];if(!o&&c===d)setTimeout(()=>x(!0),i);else if(o&&c==="")x(!1),f(h=>(h+1)%t.length);else{const h=setTimeout(()=>{u(g=>o?g.slice(0,-1):d.slice(0,g.length+1))},o?n:a);return()=>clearTimeout(h)}},[c,o,r,t,a,n,i,p]),c},q="/Portfolio/assets/canva_svk-79649131.webp",Q="/Portfolio/assets/canva_anj-6e3b4499.webp",V=()=>{const t=b(),{language:a}=s.useContext(k),n=()=>{window.open("/game_snake","_blank","noopener,noreferrer")},i=[t.formatMessage({id:"home.myWork"}),t.formatMessage({id:"home.designer"})],l=U(i);return e.jsx(e.Fragment,{children:e.jsx(W,{children:e.jsxs(A,{children:[e.jsxs(L,{children:[e.jsx(N,{variant:"h3",children:t.formatMessage({id:"home.name"})}),e.jsx(B,{variant:"h1",children:t.formatMessage({id:"home.nameHeader"})}),e.jsxs(F,{variant:"h2",children:[e.jsxs(m.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx(v,{className:"chevronRight"})," ",l]}),e.jsx(m.span,{animate:{opacity:[0,1,0]},transition:{duration:.5,repeat:1/0,repeatDelay:.5},children:"|"})]})]}),e.jsxs(R,{children:[e.jsxs(G,{variant:"body2",children:["// ",t.formatMessage({id:"home.posTitleOne"})]}),e.jsxs(_,{variant:"body2",children:["// ",t.formatMessage({id:"home.posTitleMobile"})]}),e.jsxs(T,{variant:"body2",children:[e.jsxs(E,{variant:"caption",children:["const"," "]}),e.jsx(D,{variant:"caption",children:"githubLink"}),e.jsxs(O,{variant:"caption",children:[" ","="," "]}),e.jsx("span",{children:e.jsx(z,{"data-cy":"github-link-porfile",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/katzohub",children:"“https://github.com/katzohub”"})})]})]}),e.jsxs(K,{children:[e.jsx(j,{myBtnFn:n,testId:"start-game",children:t.formatMessage({id:"home.startGameBtn"})}),e.jsx(M,{href:a==="sk-SK"?q:Q,download:"portfolio_design",sx:r=>({color:`${r.myColors.textColorNav} !important`,textDecoration:"none !important","&:hover":{color:`${r.myColors.whiteColor} !important`}}),children:e.jsx(j,{testId:"download-cv",children:t.formatMessage({id:"home.download.cv"})})})]})]})})})},y="/Portfolio/assets/blue-2dfcd7bf.webp",X="/Portfolio/assets/green-e454931c.webp",Y="/Portfolio/assets/yellow-ced0e3ee.png",Z=m(C),ee=m(H),re=()=>{const[t,a]=s.useState(!1),{themeMode:n}=w();return s.useEffect(()=>{a(!0)},[]),e.jsx(I,{component:"main",children:e.jsxs(P,{children:[n==="dark"?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:X,alt:"background green effect",className:"green"}),e.jsx("img",{src:y,alt:"background blue effect",className:"blue"})]}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:Y,alt:"background yellow effect",className:"green"}),e.jsx("img",{src:y,alt:"background blue effect",className:"blue"})]}),e.jsx(J,{children:t&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{initial:{x:"-100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:e.jsx(V,{})}),e.jsx(ee,{initial:{x:"100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:e.jsx($,{isFullWindow:!0})})]})})]})})};export{re as default};
