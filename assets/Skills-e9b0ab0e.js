import{h as Ne,k as Te,l as Be,s as p,_ as m,m as oe,n as E,o as Ie,p as $e,q as Ge,g as f,t as He,v as H,j as o,w as L,x as te,y as D,z as A,f as Y,A as X,C as N,D as De,E as Ae,F as z,G as We,H as W,I as re,T as ae,r as _e,i as Ve,B as u,J as Z,K as Oe,M as h,u as K}from"./index-33b9e2dd.js";import{G as Ee}from"./GeneralBoard-52f1b533.js";import{f as le,D as Ue}from"./Divider-c152b384.js";import{m as ne,A as ie}from"./index-dba19fb8.js";function qe(e){const{theme:t,name:a,props:r}=e;return!t||!t.components||!t.components[a]||!t.components[a].defaultProps?r:Ne(t.components[a].defaultProps,r)}function Je({props:e,name:t,defaultTheme:a,themeId:r}){let l=Te(a);return r&&(l=l[r]||l),qe({theme:l,name:t,props:e})}const Ye=["component","direction","spacing","divider","children","className","useFlexGap"],Xe=Be(),Ze=p("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Ke(e){return Je({props:e,name:"MuiStack",defaultTheme:Xe})}function Qe(e,t){const a=f.Children.toArray(e).filter(Boolean);return a.reduce((r,l,s)=>(r.push(l),s<a.length-1&&r.push(f.cloneElement(t,{key:`separator-${s}`})),r),[])}const eo=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],oo=({ownerState:e,theme:t})=>{let a=m({display:"flex",flexDirection:"column"},oe({theme:t},E({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=Ie(t),l=Object.keys(t.breakpoints.values).reduce((i,n)=>((typeof e.spacing=="object"&&e.spacing[n]!=null||typeof e.direction=="object"&&e.direction[n]!=null)&&(i[n]=!0),i),{}),s=E({values:e.direction,base:l}),c=E({values:e.spacing,base:l});typeof s=="object"&&Object.keys(s).forEach((i,n,x)=>{if(!s[i]){const g=n>0?s[x[n-1]]:"column";s[i]=g}}),a=$e(a,oe({theme:t},c,(i,n)=>e.useFlexGap?{gap:te(r,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${eo(n?s[n]:e.direction)}`]:te(r,i)}}))}return a=Ge(t.breakpoints,a),a};function to(e={}){const{createStyledComponent:t=Ze,useThemeProps:a=Ke,componentName:r="MuiStack"}=e,l=()=>D({root:["root"]},i=>A(r,i),{}),s=t(oo);return f.forwardRef(function(i,n){const x=a(i),j=He(x),{component:g="div",direction:v="column",spacing:P=0,divider:S,children:y,className:k,useFlexGap:b=!1}=j,T=H(j,Ye),_={direction:v,spacing:P,useFlexGap:b},w=l();return o.jsx(s,m({as:g,ownerState:_,ref:n,className:L(w.root,k)},T,{children:S?Qe(y,S):y}))})}const ao=Y(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),so=Y(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ro=Y(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function lo(e){return A("MuiCheckbox",e)}const no=X("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),U=no,io=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],co=e=>{const{classes:t,indeterminate:a,color:r,size:l}=e,s={root:["root",a&&"indeterminate",`color${z(r)}`,`size${z(l)}`]},c=D(s,lo,t);return m({},t,c)},po=N(De,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.indeterminate&&t.indeterminate,t[`size${z(a.size)}`],a.color!=="default"&&t[`color${z(a.color)}`]]}})(({theme:e,ownerState:t})=>m({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:We(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${U.checked}, &.${U.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${U.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),mo=o.jsx(so,{}),fo=o.jsx(ao,{}),xo=o.jsx(ro,{}),uo=f.forwardRef(function(t,a){var r,l;const s=W({props:t,name:"MuiCheckbox"}),{checkedIcon:c=mo,color:d="primary",icon:i=fo,indeterminate:n=!1,indeterminateIcon:x=xo,inputProps:j,size:g="medium",className:v}=s,P=H(s,io),S=n?x:i,y=n?x:c,k=m({},s,{color:d,indeterminate:n,size:g}),b=co(k);return o.jsx(po,m({type:"checkbox",inputProps:m({"data-indeterminate":n},j),icon:f.cloneElement(S,{fontSize:(r=S.props.fontSize)!=null?r:g}),checkedIcon:f.cloneElement(y,{fontSize:(l=y.props.fontSize)!=null?l:g}),ownerState:k,ref:a,className:L(b.root,v)},P,{classes:b}))}),ho=uo,go=to({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>W({props:e,name:"MuiStack"})}),yo=go;function bo(e){return A("MuiFormControlLabel",e)}const jo=X("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),F=jo,So=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ko=e=>{const{classes:t,disabled:a,labelPlacement:r,error:l,required:s}=e,c={root:["root",a&&"disabled",`labelPlacement${z(r)}`,l&&"error",s&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",l&&"error"]};return D(c,bo,t)},vo=N("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${F.label}`]:t.label},t.root,t[`labelPlacement${z(a.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>m({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${F.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${F.label}`]:{[`&.${F.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Co=N("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${F.error}`]:{color:(e.vars||e).palette.error.main}})),zo=f.forwardRef(function(t,a){var r,l;const s=W({props:t,name:"MuiFormControlLabel"}),{className:c,componentsProps:d={},control:i,disabled:n,disableTypography:x,label:j,labelPlacement:g="end",required:v,slotProps:P={}}=s,S=H(s,So),y=re(),k=(r=n??i.props.disabled)!=null?r:y==null?void 0:y.disabled,b=v??i.props.required,T={disabled:k,required:b};["checked","name","onChange","value","inputRef"].forEach(B=>{typeof i.props[B]>"u"&&typeof s[B]<"u"&&(T[B]=s[B])});const _=le({props:s,muiFormControl:y,states:["error"]}),w=m({},s,{disabled:k,labelPlacement:g,required:b,error:_.error}),V=ko(w),O=(l=P.typography)!=null?l:d.typography;let C=j;return C!=null&&C.type!==ae&&!x&&(C=o.jsx(ae,m({component:"span"},O,{className:L(V.label,O==null?void 0:O.className),children:C}))),o.jsxs(vo,m({className:L(V.root,c),ownerState:w,ref:a},S,{children:[f.cloneElement(i,T),b?o.jsxs(yo,{display:"block",children:[C,o.jsxs(Co,{ownerState:w,"aria-hidden":!0,className:V.asterisk,children:[" ","*"]})]}):C]}))}),ce=zo;function Po(e){return A("MuiFormGroup",e)}X("MuiFormGroup",["root","row","error"]);const wo=["className","row"],Fo=e=>{const{classes:t,row:a,error:r}=e;return D({root:["root",a&&"row",r&&"error"]},Po,t)},Mo=N("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.row&&t.row]}})(({ownerState:e})=>m({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Ro=f.forwardRef(function(t,a){const r=W({props:t,name:"MuiFormGroup"}),{className:l,row:s=!1}=r,c=H(r,wo),d=re(),i=le({props:r,muiFormControl:d,states:["error"]}),n=m({},r,{row:s,error:i.error}),x=Fo(n);return o.jsx(Mo,m({className:L(x.root,l),ownerState:n,ref:a},c))}),Lo=Ro;var Q={},No=Ve;Object.defineProperty(Q,"__esModule",{value:!0});var pe=Q.default=void 0,To=No(_e()),q=o;pe=Q.default=(0,To.default)([(0,q.jsx)("path",{d:"m12 2-5.5 9h11z"},"0"),(0,q.jsx)("circle",{cx:"17.5",cy:"17.5",r:"4.5"},"1"),(0,q.jsx)("path",{d:"M3 13.5h8v8H3z"},"2")],"Category");const de=p(u)(({theme:e})=>({"& h1":{textAlign:"center",position:"absolute",top:"35%",left:"50%",width:"350px",height:"250px",color:"#fff",fontFamily:'"Fira Code","Poppins", sans-serif',fontStyle:"normal",fontWeight:450,[e.breakpoints.down("md")]:{transform:"translate(-50%, -50%)",paddingTop:"90px",fontSize:"1.25rem"},[e.breakpoints.down("sm")]:{paddingTop:"175px",fontSize:"1.25rem"}},[e.breakpoints.down("md")]:{"& h1":{fontSize:"1rem !improtant",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",marginTop:"50px"}}})),me=p(u)(({theme:e})=>({width:"100%",display:"flex",justifyContent:"center",height:"auto",[e.breakpoints.up("md")]:{overflowY:"auto"}})),fe=p(u)(({theme:e})=>({position:"relative",top:"122px",left:"0px",height:"83dvh",width:"100%",maxWidth:"1450px",display:"flex",justifyContent:"center",[e.breakpoints.down("md")]:{position:"relative",top:"0px",left:"0px",height:"100%",overflowY:"auto",marginRight:"10px",overflowX:"hidden !important"}})),xe=p(u)(({theme:e})=>({width:"100%",paddingLeft:"22px",[e.breakpoints.down("md")]:{paddingLeft:"17px"}})),ue=p(Z)(({theme:e})=>({paddingBottom:"20px",position:"relative",left:"-8px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gridColumnGap:"12px",gridRowGap:"12px",paddingRight:"22px",marginBottom:"52px",[e.breakpoints.down("md")]:{marginBottom:"0px",paddingRight:"0px"}})),Bo=p(Z)(({theme:e})=>({paddingBottom:"120px",position:"relative",left:"-8px",[e.breakpoints.down("md")]:{marginBottom:"0px",padding:"0 20px"}})),he=p(Z)(({theme:e})=>({position:"relative",[e.breakpoints.down(800)]:{marginTop:"10px"}})),ge=p(u)(({theme:e})=>({borderRadius:"15px",border:`2px solid ${e.myColors.colorLinie} `,background:e.myColors.colorInCard,maxWidth:"100%",height:"420px",overflow:"hidden",[e.breakpoints.down("md")]:{height:"350px"},"& img":{width:"100%",height:"200px",objectFit:"cover"}})),ye=p(u)(({theme:e})=>({padding:"10px","& h2":{color:"#fff",fontFamily:'"Fira Code","Poppins", sans-serif',fontStyle:"normal",lineHeight:"normal",fontSize:"16px",fontWeight:"600 !important"},"& p":{marginTop:"5px",color:e.myColors.colorTextCard,fontFamily:'"Fira Code","Poppins", sans-serif',fontSize:"15px",fontStyle:"normal",fontWeight:450,lineHeight:"normal"}})),be=p(u)(({theme:e})=>({position:"absolute",right:"7.5px",top:"7.5px",display:"flex",justifyContent:"center",gap:"10px",background:e.myColors.colorDarkBlack,padding:"5px 10px",borderRadius:"10px"})),je=p(u)(()=>({display:"flex",justifyContent:"center",alignItems:"center"})),Se=p(Oe)(({theme:e})=>({position:"absolute",left:"12.5px",bottom:"12.5px",background:`${e.myColors.colorSkillsBtnBack} !important`,borderRadius:"7.5px","& a":{color:e.myColors.colorSkillsBtnText,fontFamily:'"Fira Code","Poppins", sans-serif',fontSize:"14px",fontStyle:"normal",fontWeight:450,lineHeight:"normal",textDecoration:"none",textTransform:"lowercase"}})),ke=p(Lo)(({theme:e})=>({marginLeft:"60px",overflow:"hidden",[e.breakpoints.down("md")]:{flexDirection:"row !important",position:"relative",marginLeft:"0px",margin:"0 !important",padding:"0 10px !important"}})),ve=p(ce)(({theme:e})=>({color:e.myColors.textColorNav})),ee=p(ho)(({theme:e})=>({"& .MuiSvgIcon-root":{color:e.myColors.textColorNav}})),Ce=p(u)(({theme:e})=>({"&:hover":{color:e.myColors.colorFFF,transition:"color 0.3s ease-in"}})),ze=p(pe)(()=>({marginRight:"15px",position:"relative",top:"2px",left:"5px"})),Pe=p(u)(({theme:e})=>({"&:hover":{color:e.myColors.colorFFF,transition:"color 0.3s ease-in"},"& .label-icon":{marginRight:"15px",position:"relative",top:"2px",left:"5px"}})),we=p(Ue)(({theme:e})=>({display:"none",[e.breakpoints.down("md")]:{display:"block",position:"absolute",bottom:"0px",left:"-10px",background:`${e.myColors.colorLinie} !important`,height:"2px !important",width:"100vw !important"}}));de.displayName="StyledContainerAlert";me.displayName="StyledSkillsContainer";fe.displayName="StyledSkillsWrapp";xe.displayName="StyledSkillsWrapper";ue.displayName="StyledSkillsGridContainer";Bo.displayName="StyledSkillsGridWrapp";he.displayName="StyledSkillsGridWrapper";ge.displayName="StyledSkillsCard";ye.displayName="StyledSkillCardHeading";be.displayName="StyledSkillCardContainer";je.displayName="StyledSkillCardIconWrap";Se.displayName="StyledSkillCardBtn";ke.displayName="StyledSkillsRightForm";ve.displayName="StyledSkillsLabel";ee.displayName="StyledSkillsCheckbox";Ce.displayName="StyledSkillsListItem";ze.displayName="StyledCategoryIcon";Pe.displayName="StyledSkillsRowLabel";we.displayName="StyledSkillsBoxDividerTop";const Io=({checked:e,changeFn:t,name:a,testCy:r,icon:l})=>o.jsx(ce,{control:o.jsx(ee,{checked:e,onChange:t,name:a}),label:o.jsx(Pe,{"data-cy":r,sx:{color:e?"#fff":"#6f88a0 "},children:l})});function I(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(e)}function Fe(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"},child:[]}]})(e)}function $(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(e)}function M(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(e)}function Me(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"},child:[]}]})(e)}function Re(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"},child:[]}]})(e)}function R(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function J(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"},child:[]}]})(e)}function Le(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function G(e){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}const $o=ne(ke),Go=({checkedState:e,handleCheckboxChange:t})=>{const a=K(),[r,l]=f.useState(!1);f.useEffect(()=>{l(!0)},[]);const s=[{checked:e.html,name:"html",testCy:"checkbox-html",icon:o.jsxs(o.Fragment,{children:[o.jsx($,{className:"label-icon"}),"HTML"]})},{checked:e.css,name:"css",testCy:"checkbox-css",icon:o.jsxs(o.Fragment,{children:[o.jsx(I,{className:"label-icon"}),"CSS"]})},{checked:e.sass,name:"sass",testCy:"checkbox-scss",icon:o.jsxs(o.Fragment,{children:[o.jsx(J,{className:"label-icon"}),"SCSS"]})},{checked:e.tailwind,name:"tailwind",testCy:"checkbox-tailwind",icon:o.jsxs(o.Fragment,{children:[o.jsx(Le,{className:"label-icon"}),"TailWind"]})},{checked:e.mui,name:"mui",testCy:"checkbox-mui",icon:o.jsxs(o.Fragment,{children:[o.jsx(Me,{className:"label-icon"}),"MUI"]})},{checked:e.javascript,name:"javascript",testCy:"checkbox-javascript",icon:o.jsxs(o.Fragment,{children:[o.jsx(M,{className:"label-icon"}),"JavaScript"]})},{checked:e.typescript,name:"typescript",testCy:"checkbox-typescript",icon:o.jsxs(o.Fragment,{children:[o.jsx(G,{className:"label-icon"}),"Typescript"]})},{checked:e.php,name:"php",testCy:"checkbox-php",icon:o.jsxs(o.Fragment,{children:[o.jsx(Re,{className:"label-icon"}),"PHP"]})},{checked:e.react,name:"react",testCy:"checkbox-react",icon:o.jsxs(o.Fragment,{children:[o.jsx(R,{className:"label-icon"}),"React"]})},{checked:e.firebase,name:"firebase",testCy:"checkbox-firebase",icon:o.jsxs(o.Fragment,{children:[o.jsx(Fe,{className:"label-icon"}),"Firebase"]})}];return o.jsx(ie,{children:r&&o.jsxs($o,{initial:{x:"-100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:[o.jsx(ve,{control:o.jsx(ee,{checked:e.all,onChange:t,name:"all"}),label:o.jsxs(Ce,{"data-cy":"checkbox-all",sx:{color:e.all?"#fff":"#6f88a0 "},children:[o.jsx(ze,{fontSize:"small"}),a.formatMessage({id:"project.allCategory"})]})}),s.map(({checked:c,name:d,testCy:i,icon:n},x)=>o.jsx(Io,{checked:c,changeFn:t,name:d,testCy:i,icon:n},x)),o.jsx(we,{orientation:"vertical",flexItem:!0})]})})},Ho="/assets/box office-701f9d1a.webp",Do="/assets/film database-414409ad.webp",Ao="/assets/logic game-94b3378d.webp",Wo="/assets/marketplace-62a0a5a9.webp",_o="/assets/upgradePorfolio-b4b02820.webp",Vo="/assets/menu-d241ea4c.webp",Oo="/assets/notes-0243c7fc.webp",Eo="/assets/portfolio-77192cee.webp",se=[{id:1,img:Eo,icon:[o.jsx($,{style:{fontSize:"20px",color:"#e44d26"}}),o.jsx(J,{style:{fontSize:"20px",color:"#cd6799"}}),o.jsx(M,{style:{fontSize:"20px",color:"#f7e025"}})],technologies:["html","sass","javascript"],nameProject:"project.namePortfolio",detailProject:"project.namePortfolioText",openProject:"https://github.com/katzohub/Portfolio-App"},{id:2,img:Vo,icon:[o.jsx($,{style:{fontSize:"20px",color:"#e44d26"}}),o.jsx(J,{style:{fontSize:"20px",color:"#cd6799"}}),o.jsx(M,{style:{fontSize:"20px",color:"#f7e025"}})],technologies:["html","sass","javascript"],nameProject:"project.restaurant",detailProject:"project.restaurantText",openProject:"https://github.com/katzohub/Info-Food-App"},{id:3,img:Ao,icon:[o.jsx($,{style:{fontSize:"20px",color:"#e44d26"}}),o.jsx(I,{style:{fontSize:"20px",color:"#306af1"}}),o.jsx(M,{style:{fontSize:"20px",color:"#f7e025"}})],technologies:["html","css","javascript"],nameProject:"project.nameGame",detailProject:"project.nameGameText",openProject:"https://github.com/katzohub/Game-Seven-App"},{id:4,img:Ho,icon:[o.jsx(Re,{style:{fontSize:"20px",color:"#7b7fb5"}}),o.jsx(I,{style:{fontSize:"20px",color:"#306af1"}})],technologies:["php","css"],nameProject:"project.nameOffice",detailProject:"project.nameOfficeText",openProject:"https://github.com/katzohub/Box-office-php"},{id:5,img:Do,icon:[o.jsx(R,{style:{fontSize:"20px",color:"#61dafb"}}),o.jsx(M,{style:{fontSize:"20px",color:"#f7e025"}}),o.jsx(I,{style:{fontSize:"20px",color:"#306af1"}})],technologies:["react","css","javascript"],nameProject:"project.nameDatabase",detailProject:"project.nameDatabaseText",openProject:"https://github.com/katzohub/Film-Database-App"},{id:6,img:Oo,icon:[o.jsx(R,{style:{fontSize:"20px",color:"#61dafb"}}),o.jsx(G,{style:{fontSize:"20px",color:"#007acc"}}),o.jsx(Le,{style:{fontSize:"20px",color:"#38bdf8"}})],technologies:["react","tailwind","typescript"],nameProject:"project.nameNotes",detailProject:"project.nameNotesText",openProject:"https://github.com/katzohub/REACT-TS"},{id:7,icon:[o.jsx(R,{style:{fontSize:"20px",color:"#61dafb"}}),o.jsx(G,{style:{fontSize:"20px",color:"#007acc"}}),o.jsx(Fe,{style:{fontSize:"20px",color:"#ffcc32"}})],technologies:["react","firebase","javascript"],img:Wo,nameProject:"project.nameMarkPlace",detailProject:"project.nameMarkPlaceText",openProject:"https://github.com/katzohub/marketplace-Mobile-App"},{id:8,icon:[o.jsx(R,{style:{fontSize:"20px",color:"#61dafb"}}),o.jsx(G,{style:{fontSize:"20px",color:"#007acc"}}),o.jsx(Me,{style:{fontSize:"20px",color:"#007fff"}})],technologies:["react","typescript","mui"],img:_o,nameProject:"project.portolioUpgrade",detailProject:"project.portolioUpgradeText",openProject:"https://github.com/katzohub/Portfolio"}],Uo=ne(me),qo=({checkedState:e})=>{const t=K(),a=e.all?se:se.filter(s=>Object.entries(e).some(([c,d])=>d&&s.technologies.includes(c))),[r,l]=f.useState(!1);return f.useEffect(()=>{l(!0)},[]),o.jsx(ie,{children:r&&o.jsx(Uo,{initial:{x:"100%"},animate:{x:0},transition:{duration:.5,ease:"easeOut"},children:o.jsx(fe,{children:o.jsx(xe,{children:o.jsx(ue,{children:a.map(s=>o.jsx(he,{item:!0,children:o.jsxs(ge,{children:[o.jsx("img",{src:s.img,alt:s.nameProject}),o.jsxs(ye,{children:[o.jsx("h2",{children:t.formatMessage({id:s.nameProject})}),o.jsx("p",{children:t.formatMessage({id:s.detailProject})}),o.jsx(be,{children:s.icon&&s.icon.map((c,d)=>o.jsx(je,{children:c},d))}),o.jsx(Se,{variant:"contained",children:o.jsx("a",{href:s.openProject,target:"_blank","aria-label":s.nameProject,children:t.formatMessage({id:"project.viewProject"})})})]})]})},s.id))})})})})})},Jo=()=>{const e=K();return o.jsx(o.Fragment,{children:o.jsx(de,{children:o.jsxs("h1",{children:[e.formatMessage({id:"project.sorry"}),".",o.jsx("br",{}),e.formatMessage({id:"project.please"})]})})})},Qo=()=>{const[e,t]=f.useState({all:!0,html:!1,css:!1,sass:!1,tailwind:!1,mui:!1,javascript:!1,typescript:!1,php:!1,react:!1,firebase:!1}),a=()=>Object.values(e).every(l=>!l),r=l=>{const{name:s,checked:c}=l.target;t(s==="all"?{all:c,html:!1,css:!1,sass:!1,tailwind:!1,mui:!1,javascript:!1,typescript:!1,php:!1,react:!1,firebase:!1}:{...e,[s]:c,all:!1})};return o.jsxs(o.Fragment,{children:[o.jsx(Ee,{generalHeading:"project.category",generalText:"project.projects",leftTemplate:o.jsx(Go,{checkedState:e,handleCheckboxChange:r}),generalTemplate:o.jsx(qo,{checkedState:e}),smallGeneralHeading:"project.projects",isPageSkills:!0}),a()&&o.jsx(Jo,{})]})};export{Qo as default};
