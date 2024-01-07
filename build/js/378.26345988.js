"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[378],{3454:function(e,t,a){a.d(t,{Z:function(){return C}});var l=a(6252),o=a(2262),n=a(3577);const i={class:"table-container"},r={class:"table-header"},s={class:"table-header-title"},p={class:"table-header-right"},u={key:0,class:"table-footer"};var c=(0,l.aZ)({__name:"table",props:{title:{type:String,require:!0},tableData:{type:Array,require:!0},propList:{type:Array,require:!0},isShowIdxCol:{type:Boolean,default:!0},isShowSelectCol:{type:Boolean,default:!1},dataCount:{type:Number,default:0},page:{type:Object,default:()=>({curPage:0,pageSize:10})},isShowFooter:{type:Boolean,default:!0},childrenProps:{type:Object,default:()=>({})}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=e,c=(0,o.iH)(!1),d=(0,o.iH)(!1),g=(0,o.iH)(!1),m=e=>{t("selectionChange",e)},w=e=>{t("update:page",{...a.page,curPage:e})},f=e=>{t("update:page",{...a.page,pageSize:e})};return(t,a)=>{const o=(0,l.up)("el-table-column"),b=(0,l.up)("el-table"),h=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",r,[(0,l._)("div",s,[(0,l.WI)(t.$slots,"header-title",{},(()=>[(0,l.Uk)((0,n.zw)(e.title),1)]))]),(0,l._)("div",p,[(0,l.WI)(t.$slots,"header-btn")])]),(0,l.Wm)(b,(0,l.dG)({data:e.tableData,stripe:"",class:"table-main",onSelectionChange:m},e.childrenProps),{default:(0,l.w5)((()=>[e.isShowSelectCol?((0,l.wg)(),(0,l.j4)(o,{key:0,type:"selection",align:"center",width:"28"})):(0,l.kq)("",!0),e.isShowIdxCol?((0,l.wg)(),(0,l.j4)(o,{key:1,type:"index",label:"序号",align:"center",width:"70"})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.propList,(e=>((0,l.wg)(),(0,l.j4)(o,(0,l.dG)({key:e.prop},e,{align:"center","show-overflow-tooltip":""}),{default:(0,l.w5)((a=>[(0,l.WI)(t.$slots,e.slotName,{row:a.row},(()=>[(0,l.Uk)((0,n.zw)(a.row[e.prop]),1)]))])),_:2},1040)))),128))])),_:3},16,["data"]),e.isShowFooter?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.WI)(t.$slots,"table-footer",{},(()=>[(0,l.Wm)(h,{small:c.value,disabled:g.value,background:d.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30],"page-size":e.page.pageSize,"current-page":e.page.curPage,total:e.dataCount,onSizeChange:f,onCurrentChange:w},null,8,["small","disabled","background","page-size","current-page","total"])]))])):(0,l.kq)("",!0)])}}}),d=a(3744);const g=(0,d.Z)(c,[["__scopeId","data-v-d5adba88"]]);var m=g,w=m,f=a(840);function b(e,t){const a=(0,f.oR)(),l=a.state.login.permission,o=`system:${e}:${t}`;return!!l.find((e=>e===o))}var h=a(9328);const v={class:"table-content"};var y=(0,l.aZ)({__name:"page-content",props:{pageName:{type:String,require:!0},contentTableConfig:{type:Object,require:!0}},emits:["addAction","editAction"],setup(e,{expose:t,emit:a}){const i=e,r=b(i.pageName,"create"),s=b(i.pageName,"delete"),p=b(i.pageName,"update");let u=(0,o.iH)();const c=(0,o.iH)({curPage:1,pageSize:10});(0,l.YP)(c,(()=>m()));let d=(0,o.iH)(u.value?.list),g=(0,o.iH)(u.value?.totalCounts);const m=async(e={})=>{const t={offset:(c.value.curPage-1)*c.value.pageSize,size:c.value.pageSize,...e},a=`/${i.pageName}/list`,l=await(0,h.WJ)(a,t);d=l.data.list,g=l.data.totalCount,u.value=d};m();const f=i.contentTableConfig?.propList.filter((e=>"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"edit"!==e.slotName))),y=()=>{a("addAction")},k=e=>{a("editAction",e)},S=async(e={})=>{const{id:t}=e,a=`/${i.pageName}/${t}`;await(0,h.H9)(a),m({offset:0,size:10})};return t({getData:m}),(t,a)=>{const i=(0,l.up)("el-button"),d=(0,l.up)("RefreshRight"),m=(0,l.up)("el-icon"),b=(0,l.up)("Edit"),h=(0,l.up)("Delete");return(0,l.wg)(),(0,l.iD)("div",v,[(0,l.Wm)((0,o.SU)(w),(0,l.dG)({tableData:(0,o.SU)(u),dataCount:(0,o.SU)(g),page:c.value,"onUpdate:page":a[0]||(a[0]=e=>c.value=e)},e.contentTableConfig),(0,l.Nv)({"header-btn":(0,l.w5)((()=>[(0,o.SU)(r)?((0,l.wg)(),(0,l.j4)(i,{key:0,type:"primary",size:"small",onClick:y},{default:(0,l.w5)((()=>[(0,l.Uk)("新增")])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(i,{plain:"",size:"small"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{color:"#409EFC"},{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1})])),_:1})])),createAt:(0,l.w5)((e=>[(0,l._)("span",null,(0,n.zw)(t.$filters.timeFormat(e.row.createAt)),1)])),updateAt:(0,l.w5)((e=>[(0,l._)("span",null,(0,n.zw)(t.$filters.timeFormat(e.row.updateAt)),1)])),edit:(0,l.w5)((e=>[(0,o.SU)(p)?((0,l.wg)(),(0,l.j4)(i,{key:0,plain:"",size:"small",type:"primary",onClick:t=>k(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b)])),_:1}),(0,l.Uk)("  编辑 ")])),_:2},1032,["onClick"])):(0,l.kq)("",!0),(0,o.SU)(s)?((0,l.wg)(),(0,l.j4)(i,{key:1,plain:"",size:"small",type:"danger",onClick:t=>S(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h)])),_:1}),(0,l.Uk)("  删除 ")])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])),_:2},[(0,l.Ko)((0,o.SU)(f),(e=>({name:e.slotName,fn:(0,l.w5)((a=>[e.slotName?(0,l.WI)(t.$slots,e.slotName,{key:0,row:a.row}):(0,l.kq)("",!0)]))})))]),1040,["tableData","dataCount","page"])])}}});const k=(0,d.Z)(y,[["__scopeId","data-v-033db277"]]);var S=k,C=S},3744:function(e,t){t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a}},378:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(6252),o=a(2262);const n={title:"菜单列表",propList:[{prop:"name",label:"菜单名称",minWidth:"150"},{prop:"type",label:"类型",minWidth:"60"},{prop:"url",label:"菜单url",minWidth:"100"},{prop:"icon",label:"菜单icon",minWidth:"100"},{prop:"permission",label:"按钮权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"200",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"200",slotName:"updateAt"},{label:"操作",minWidth:"220",slotName:"edit"}],isShowIdxCol:!1,isShowSelectCol:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}},isShowFooter:!1};var i=a(3454);const r={class:"menu"};var s=(0,l.aZ)({__name:"menu",setup(e){const t="menu";return(e,a)=>((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)((0,o.SU)(i.Z),{ref:"pageContentRef","content-table-config":(0,o.SU)(n),pageName:t},null,8,["content-table-config"])]))}});const p=s;var u=p}}]);
//# sourceMappingURL=378.26345988.js.map