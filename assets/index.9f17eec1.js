import{_ as w,E as k}from"./base.f9be79e6.js";import{u as b,E as I}from"./scrollHeaderAnimation.5a8dc8a2.js";/* empty css                */import{d as S,o as d,c as v,a as s,_ as x,r as g,u as _,h,b as e,w as c,n as y,e as i,p as B,f as C,g as F,i as m,v as f,F as z}from"./index.084fccd6.js";import"./error.7e8331f1.js";import"./scroll.b6326979.js";const E=S({name:"QuestionFilled"}),D={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},H=s("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"},null,-1),q=[H];function M(o,t,r,n,u,p){return d(),v("svg",D,q)}var N=w(E,[["render",M]]);const l=o=>(B("data-v-62116b40"),o=o(),C(),o),V={class:"header-container"},A={class:"header-logo"},j=["src"],Q={class:"header-nav"},T=i(" \u9996\u9875 "),U=l(()=>s("div",{class:"nav-line"},null,-1)),G=i(" \u6821\u56ED\u62DB\u8058 "),J=l(()=>s("div",{class:"nav-line"},null,-1)),K=i(" \u804C\u4F4D\u6295\u9012 "),L=l(()=>s("div",{class:"nav-line"},null,-1)),O=i(" \u672A\u6765\u751F\u6D3B "),P=l(()=>s("div",{class:"nav-line"},null,-1)),R=l(()=>s("a",{class:"nav-link",href:"https://www.wenext.cn/",target:"_blank"},[s("div",null,[i("\u8D70\u8FDB"),s("span",{class:"en"},"wenext")]),s("div",{class:"nav-line"})],-1)),W=l(()=>s("div",{class:"sub_title"},[s("div",{class:"sub_title_box"},"\u672A\u6765\u5DE5\u573A\u79CB\u5B63\u6821\u56ED\u62DB\u8058")],-1)),X={setup(o){const{isHide:t,isDark:r,logoSelected:n}=b();return(u,p)=>{const a=g("router-link");return d(),v("div",{class:y(["header-wrapper",{isHide:_(t),isDark:_(r)}])},[s("div",V,[s("div",A,[s("img",{class:"logo",src:_(h)("/common/logo_small_dark.png"),alt:""},null,8,j)]),s("div",Q,[e(a,{class:"nav-link",to:"/"},{default:c(()=>[T,U]),_:1}),e(a,{class:"nav-link",to:"/introduce"},{default:c(()=>[G,J]),_:1}),e(a,{class:"nav-link",to:"/deliver"},{default:c(()=>[K,L]),_:1}),e(a,{class:"nav-link",to:"/life"},{default:c(()=>[O,P]),_:1}),R])]),W],2)}}};var Y=x(X,[["__scopeId","data-v-62116b40"]]);const Z={class:"footer"},ss=["src"],es={setup(o){return(t,r)=>(d(),v("div",Z,[s("img",{src:_(h)("/common/logo_small.png"),alt:""},null,8,ss)]))}};var ts=x(es,[["__scopeId","data-v-d213627c"]]);const os={class:"main"},ns=s("div",{class:"affix-title"},"\u6709\u4EC0\u4E48\u7591\u95EE\uFF1F",-1),as=s("div",{class:"line"},null,-1),_s=s("div",{class:"affix-content"},"\u6B22\u8FCE\u5173\u6CE8\u672A\u6765\u5DE5\u573A \u62DB\u8058\u5FAE\u4FE1\u516C\u4F17\u53F7\u54A8\u8BE2",-1),ls=["src"],ps={setup(o){const t=F(!1);return(r,n)=>{const u=g("router-view"),p=k,a=I;return d(),v(z,null,[e(Y),s("div",os,[e(u)]),e(ts),m(s("div",{class:"affix big box",onMouseleave:n[0]||(n[0]=$=>t.value=!1)},[ns,as,_s,s("img",{class:"affix-qrcode",src:_(h)("/pc/qrcode.jpeg"),alt:""},null,8,ls)],544),[[f,t.value]]),m(s("div",{class:"affix small",onMouseenter:n[1]||(n[1]=$=>t.value=!0)},[e(p,{color:"#77D7CF",size:"40px"},{default:c(()=>[e(_(N))]),_:1})],544),[[f,!t.value]]),e(a,{right:40,bottom:100})],64)}}};export{ps as default};