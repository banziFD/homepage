(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JuYu:function(l,n,t){"use strict";t.r(n);var a=t("8Y7J"),i=function(l){this.projectName=l.projectName,this.webpage=l.webpage||void 0,this.paper=l.paper||void 0,this.abstract=l.abstract||void 0,this.overview=l.overview||void 0,this.sourceCode=l.sourceCode||void 0},u=function(){function l(l){this.localfileService=l,this.filePath="../../assets/project/projectMeta.json"}return l.prototype.resolve=function(l,n){var t=this;return new Promise(function(l,n){t.localfileService.getFile(t.filePath).subscribe(function(n){t.origData=n,t.projectList=t.origData.map(function(l){return new i(l)}),l(t.projectList)},function(l){console.log(l),n("Unable to find project data.")})})},l}(),r=function(){function l(l,n){this.projectService=l,this.iconService=n,this.iconService.registerIcon()}var n=l.prototype;return n.ngOnInit=function(){this.projectList=this.projectService.projectList,console.log(this.projectList)},n.onClick=function(){},l}(),o=u,c=function(){},e=t("pMnS"),b=t("Mr+X"),d=t("Gi4r"),m=t("igqZ"),p=t("IP0z"),s=t("Xd0L"),f=t("cUpR"),g=t("omvX"),h=a.ob({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function x(l){return a.Jb(2,[a.Bb(null,0),a.Bb(null,1)],null,null)}var v=a.ob({encapsulation:2,styles:[],data:{}});function w(l){return a.Jb(2,[a.Bb(null,0),(l()(),a.qb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),a.Bb(null,1),a.Bb(null,2)],null,null)}var q=t("SVse"),j=t("VDRc"),k=t("/q54"),y=t("r5Ti"),A=a.ob({encapsulation:0,styles:[[".project-list[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{margin:8px}"]],data:{}});function C(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,0,"img",[["src","assets/image/default.png"]],null,null,null,null,null))],null,null)}function J(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Overview"])),(l()(),a.qb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Hb(4,null,["",""]))],null,function(l,n){l(n,4,0,n.parent.context.$implicit.overview)})}function I(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Abstract"])),(l()(),a.qb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Hb(4,null,["",""]))],null,function(l,n){l(n,4,0,n.parent.context.$implicit.abstract)})}function M(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,3,"a",[["target","blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.qb(1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,b.b,b.a)),a.pb(2,9158656,null,0,d.b,[a.k,d.d,[8,null],[2,d.a],[2,a.l]],null,null),(l()(),a.Hb(-1,0,["code"]))],function(l,n){l(n,2,0)},function(l,n){l(n,0,0,a.ub(1,"",n.parent.context.$implicit.sourceCode,"")),l(n,1,0,a.Cb(n,2).inline,"primary"!==a.Cb(n,2).color&&"accent"!==a.Cb(n,2).color&&"warn"!==a.Cb(n,2).color)})}function L(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,3,"a",[["target","blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.qb(1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,b.b,b.a)),a.pb(2,9158656,null,0,d.b,[a.k,d.d,[8,null],[2,d.a],[2,a.l]],null,null),(l()(),a.Hb(-1,0,["insert_link"]))],function(l,n){l(n,2,0)},function(l,n){l(n,0,0,a.ub(1,"",n.parent.context.$implicit.webpage,"")),l(n,1,0,a.Cb(n,2).inline,"primary"!==a.Cb(n,2).color&&"accent"!==a.Cb(n,2).color&&"warn"!==a.Cb(n,2).color)})}function $(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,2,"a",[["target","blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,b.b,b.a)),a.pb(2,9158656,null,0,d.b,[a.k,d.d,[8,null],[2,d.a],[2,a.l]],{svgIcon:[0,"svgIcon"]},null)],function(l,n){l(n,2,0,"pdf")},function(l,n){l(n,0,0,a.ub(1,"",n.parent.context.$implicit.paper,"")),l(n,1,0,a.Cb(n,2).inline,"primary"!==a.Cb(n,2).color&&"accent"!==a.Cb(n,2).color&&"warn"!==a.Cb(n,2).color)})}function z(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,28,"mat-card",[["class","project mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,x,h)),a.pb(1,49152,null,0,m.a,[[2,g.a]],null,null),(l()(),a.qb(2,0,null,0,2,"code",[],null,null,null,null,null)),(l()(),a.Hb(3,null,["",""])),a.Db(0,q.e,[]),(l()(),a.qb(5,0,null,0,3,"mat-card-header",[["class","mat-card-header"]],null,null,null,w,v)),a.pb(6,49152,null,0,m.d,[],null,null),(l()(),a.qb(7,0,null,2,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(8,null,["",""])),(l()(),a.qb(9,0,null,0,11,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.pb(10,16384,null,0,m.c,[],null,null),(l()(),a.qb(11,0,null,null,9,"div",[["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),a.pb(12,671744,null,0,j.b,[a.k,k.i,[2,j.e],k.f],{fxLayout:[0,"fxLayout"]},null),a.pb(13,671744,null,0,j.a,[a.k,k.i,[2,j.d],k.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),a.fb(16777216,null,null,1,null,C)),a.pb(15,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.qb(16,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),a.fb(16777216,null,null,1,null,J)),a.pb(18,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.fb(16777216,null,null,1,null,I)),a.pb(20,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.qb(21,0,null,0,7,"mat-card-actions",[["class","mat-card-actions"],["style","padding: 8px"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),a.pb(22,16384,null,0,m.b,[],null,null),(l()(),a.fb(16777216,null,null,1,null,M)),a.pb(24,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.fb(16777216,null,null,1,null,L)),a.pb(26,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.fb(16777216,null,null,1,null,$)),a.pb(28,16384,null,0,q.k,[a.M,a.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,12,0,"row"),l(n,13,0,"start center"),l(n,15,0,!n.context.$implicit.thumbnail),l(n,18,0,n.context.$implicit.overview),l(n,20,0,n.context.$implicit.abstract),l(n,24,0,n.context.$implicit.sourceCode),l(n,26,0,n.context.$implicit.webpage),l(n,28,0,n.context.$implicit.paper)},function(l,n){l(n,0,0,"NoopAnimations"===a.Cb(n,1)._animationMode),l(n,3,0,a.Ib(n,3,0,a.Cb(n,4).transform(n.context.$implicit))),l(n,8,0,n.context.$implicit.projectName),l(n,21,0,"end"===a.Cb(n,22).align)})}function H(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,4,"div",[["class","project-list"]],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Project"])),(l()(),a.fb(16777216,null,null,1,null,z)),a.pb(4,278528,null,0,q.j,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.projectList)},null)}var P=a.mb("app-project-list",r,function(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"app-project-list",[],null,null,null,H,A)),a.pb(1,114688,null,0,r,[u,y.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),S=t("RttY"),N=t("iInd"),O=t("/HVE"),_=t("Fwaw"),B=t("ura0"),F=t("Nhcz"),D=t("u9T3");t.d(n,"ProjectModuleNgFactory",function(){return Y});var Y=a.nb(c,[],function(l){return a.zb([a.Ab(512,a.j,a.Y,[[8,[e.a,P]],[3,a.j],a.v]),a.Ab(4608,q.m,q.l,[a.s,[2,q.y]]),a.Ab(5120,a.b,function(l,n){return[k.j(l,n)]},[q.c,a.z]),a.Ab(4608,u,u,[S.a]),a.Ab(1073742336,q.b,q.b,[]),a.Ab(1073742336,N.l,N.l,[[2,N.q],[2,N.k]]),a.Ab(1073742336,p.a,p.a,[]),a.Ab(1073742336,s.h,s.h,[[2,s.b],[2,f.f]]),a.Ab(1073742336,m.e,m.e,[]),a.Ab(1073742336,d.c,d.c,[]),a.Ab(1073742336,O.b,O.b,[]),a.Ab(1073742336,s.q,s.q,[]),a.Ab(1073742336,_.c,_.c,[]),a.Ab(1073742336,k.c,k.c,[]),a.Ab(1073742336,j.c,j.c,[]),a.Ab(1073742336,B.a,B.a,[]),a.Ab(1073742336,F.a,F.a,[]),a.Ab(1073742336,D.a,D.a,[[2,k.g],a.z]),a.Ab(1073742336,c,c,[]),a.Ab(1024,N.i,function(){return[[{path:"",component:r,resolve:{data:o}}]]},[])])})}}]);