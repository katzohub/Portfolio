import{g as n,aK as L,j as x,aL as w,aM as $,aN as k,aO as K}from"./index-Io0kcKZo.js";class S extends n.Component{getSnapshotBeforeUpdate(c){const e=this.props.childRef.current;if(e&&c.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=e.offsetHeight||0,s.width=e.offsetWidth||0,s.top=e.offsetTop,s.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function A({children:i,isPresent:c}){const e=n.useId(),s=n.useRef(null),d=n.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=n.useContext(L);return n.useInsertionEffect(()=>{const{width:a,height:t,top:f,left:C}=d.current;if(c||!s.current||!a||!t)return;s.current.dataset.motionPopId=e;const o=document.createElement("style");return m&&(o.nonce=m),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${t}px !important;
            top: ${f}px !important;
            left: ${C}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[c]),x.jsx(S,{isPresent:c,childRef:s,sizeRef:d,children:n.cloneElement(i,{ref:s})})}const B=({children:i,initial:c,isPresent:e,onExitComplete:s,custom:d,presenceAffectsLayout:m,mode:a})=>{const t=w(D),f=n.useId(),C=n.useMemo(()=>({id:f,initial:c,isPresent:e,custom:d,onExitComplete:o=>{t.set(o,!0);for(const u of t.values())if(!u)return;s&&s()},register:o=>(t.set(o,!1),()=>t.delete(o))}),m?[Math.random()]:[e]);return n.useMemo(()=>{t.forEach((o,u)=>t.set(u,!1))},[e]),n.useEffect(()=>{!e&&!t.size&&s&&s()},[e]),a==="popLayout"&&(i=x.jsx(A,{isPresent:e,children:i})),x.jsx($.Provider,{value:C,children:i})};function D(){return new Map}const g=i=>i.key||"";function j(i){const c=[];return n.Children.forEach(i,e=>{n.isValidElement(e)&&c.push(e)}),c}const b=({children:i,exitBeforeEnter:c,custom:e,initial:s=!0,onExitComplete:d,presenceAffectsLayout:m=!0,mode:a="sync"})=>{const t=n.useMemo(()=>j(i),[i]),f=t.map(g),C=n.useRef(!0),o=n.useRef(t),u=w(()=>new Map),[P,z]=n.useState(t),[p,v]=n.useState(t);k(()=>{C.current=!1,o.current=t;for(let l=0;l<p.length;l++){const r=g(p[l]);f.includes(r)?u.delete(r):u.get(r)!==!0&&u.set(r,!1)}},[p,f.length,f.join("-")]);const y=[];if(t!==P){let l=[...t];for(let r=0;r<p.length;r++){const h=p[r],R=g(h);f.includes(R)||(l.splice(r,0,h),y.push(h))}a==="wait"&&y.length&&(l=y),v(j(l)),z(t);return}const{forceRender:E}=n.useContext(K);return x.jsx(x.Fragment,{children:p.map(l=>{const r=g(l),h=t===p||f.includes(r),R=()=>{if(u.has(r))u.set(r,!0);else return;let M=!0;u.forEach(I=>{I||(M=!1)}),M&&(E==null||E(),v(o.current),d&&d())};return x.jsx(B,{isPresent:h,initial:!C.current||s?void 0:!1,custom:h?void 0:e,presenceAffectsLayout:m,mode:a,onExitComplete:h?void 0:R,children:l},r)})})};export{b as A};