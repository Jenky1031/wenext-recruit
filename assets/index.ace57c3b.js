import"./base.7767a396.js";import{u as K,E as M,a as R,b as T}from"./job.0aad6b73.js";import{_ as $,o as l,c as a,a as e,u as t,h as j,b as _,V as p,W as F,w as b,F as y,O as w,Q as i,p as H,f as J,E as P,e as A,I as C,n as O,i as x,v as V}from"./index.6d6f625f.js";import"./error.7e8331f1.js";import"./arrow-right.e55a88f4.js";const c=r=>(H("data-v-3bfa1503"),r=r(),J(),r),Q=c(()=>e("img",{class:"nav-bg",alt:""},null,-1)),W={class:"banner"},q=["src"],G={class:"deliver"},X=c(()=>e("div",{class:"flex_center_col"},[e("div",{class:"deliver_title"},"\u79CB\u5B63\u6821\u56ED\u62DB\u8058"),e("div",{class:"deliver_sub_title"},"2023\u30012024\u5C4A\u5E94\u5C4A\u6BD5\u4E1A\u751F\uFF08\u6BD5\u4E1A\u65F6\u95F4\uFF1A2022\u5E749\u6708\uFF0D2024\u5E748\u6708\uFF09")],-1)),Y=c(()=>e("div",{class:"deliver_line"},null,-1)),Z={class:"deliver_content_wrapper"},ee={class:"deliver_selector"},se={class:"search-input"},te={class:"search-content"},oe=c(()=>e("div",{class:"label"},"\u5C97\u4F4D\u7C7B\u522B",-1)),le={class:"category_wrap"},ae={class:"deliver_content"},ne={class:"label"},ie={class:"list"},ce={class:"item-top"},re={class:"item-left"},de={class:"name"},_e={class:"type"},pe={key:0},ue={key:1},ve=c(()=>e("span",null,"\u6821\u56ED\u62DB\u8058",-1)),he=["innerHTML"],ge={class:"item-right"},me=["onClick"],be=["onClick"],ye={class:"item-bottom"},fe=["onClick"],ke={setup(r){const{Search:z,ArrowRight:I,categoryId:u,categoryList:S,limit:v,page:h,total:f,keyword:g,jobsList:D,changePage:E,search:m,postJob:L,toggleShowDetail:k}=K();return(we,o)=>{const U=M,B=R,N=T;return l(),a(y,null,[Q,e("div",W,[e("img",{src:t(j)("/pc/banner_deliver.png"),alt:""},null,8,q)]),e("div",G,[X,Y,e("div",Z,[e("div",ee,[e("div",se,[_(U,{modelValue:t(g),"onUpdate:modelValue":o[1]||(o[1]=s=>p(g)?g.value=s:null),modelModifiers:{trim:!0,lazy:!0},placeholder:"\u641C\u7D22\u5DE5\u4F5C\u5C97\u4F4D",clearable:"",onKeyup:F(t(m),["enter"])},{prefix:b(()=>[_(t(z),{class:"search-icon"})]),suffix:b(()=>[e("span",{class:"search-label pointer",onClick:o[0]||(o[0]=(...s)=>t(m)&&t(m)(...s))},"\u67E5\u770B"),_(t(I),{class:"arrow-icon"})]),_:1},8,["modelValue","onKeyup"])]),e("div",te,[oe,e("div",le,[(l(!0),a(y,null,w(t(S),s=>(l(),P(B,{key:s.id,label:s.id,modelValue:t(u),"onUpdate:modelValue":o[2]||(o[2]=d=>p(u)?u.value=d:null),size:"large",style:{"font-size":"var(--px_18)"}},{default:b(()=>[A(i(s.label),1)]),_:2},1032,["label","modelValue"]))),128))])])]),e("div",ae,[e("div",ne,"\u627E\u5230"+i(t(f))+"\u4E2A\u5C97\u4F4D",1),e("div",ie,[(l(!0),a(y,null,w(t(D),(s,d)=>(l(),a("div",{class:"item",key:s.id},[e("div",ce,[e("div",re,[e("div",de,i(s.title),1),e("div",_e,[s.locations.length?(l(),a("span",pe,i(s.locations.map(n=>n.city||n.province).join("/")),1)):C("",!0),s.zhineng.name?(l(),a("span",ue,i(s.zhineng.name),1)):C("",!0),ve]),e("div",{class:O(["post-content",{ellipsis:!s.showDetail}]),innerHTML:s.description},null,10,he)]),e("div",ge,[e("div",{class:"deliver-btn pointer",onClick:n=>t(L)(s.link)},"\u6295\u9012\u804C\u4F4D",8,me),x(e("div",{class:"pointer small-grey",onClick:n=>t(k)(d)},"\u663E\u793A\u8BE6\u60C5",8,be),[[V,!s.showDetail]])])]),x(e("div",ye,[e("div",{class:"small-grey shrink pointer",onClick:n=>t(k)(d)},"\u6536\u8D77",8,fe)],512),[[V,s.showDetail]])]))),128))]),_(N,{"hide-on-single-page":"",background:"",layout:"prev, pager, next",total:t(f),"page-size":t(v),"onUpdate:page-size":o[3]||(o[3]=s=>p(v)?v.value=s:null),"current-page":t(h),"onUpdate:current-page":o[4]||(o[4]=s=>p(h)?h.value=s:null),onCurrentChange:t(E)},null,8,["total","page-size","current-page","onCurrentChange"])])])])],64)}}};var Se=$(ke,[["__scopeId","data-v-3bfa1503"]]);export{Se as default};