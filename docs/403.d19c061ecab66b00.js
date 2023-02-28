"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[403],{2403:(O,q,r)=>{r.r(q),r.d(q,{PeopleModule:()=>m});var l=r(6895),T=r(9326),x=r(9112),v=r(8746),e=r(1571),A=r(529);class u{constructor(t){this.httpClient=t}getStarshipById(t){return this.httpClient.get(`/films/${t}`)}}u.\u0275fac=function(t){return new(t||u)(e.LFG(A.eN))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac});const o=(i,t)=>{if(i){const n=i.split(t).filter(p=>!!p).pop();return void 0!==n?n:""}return""};function U(i,t){if(1&i&&(e.TgZ(0,"ul",5)(1,"li",6)(2,"span",7),e._uU(3,"Title : "),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"li",6)(6,"span",7),e._uU(7,"Episode : "),e.qZA(),e._uU(8),e.qZA(),e.TgZ(9,"li",6)(10,"span",7),e._uU(11,"Producer : "),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"li",6)(14,"span",7),e._uU(15,"Realse : "),e.qZA(),e._uU(16),e.qZA()()),2&i){const n=t.$implicit;e.xp6(4),e.hij("",n.title," "),e.xp6(4),e.hij("",n.episode_id," "),e.xp6(4),e.hij("",n.producer," "),e.xp6(4),e.hij("",n.release_date," ")}}class g{constructor(t){this.filmsService=t,this.urls=[],this.filmExtras=[]}ngOnInit(){this.urls.map(t=>{this.filmsService.getStarshipById(o(t,"/")).subscribe({next:n=>{this.filmExtras=[...this.filmExtras,this.setExtraList(n)],console.log(this.filmExtras)}})})}setExtraList(t){if(t){const{title:n,episode_id:p,producer:s,release_date:a,url:I}=t;return{title:n,episode_id:p,producer:s,release_date:a,link:o(I,"/")}}return null}}g.\u0275fac=function(t){return new(t||g)(e.Y36(u))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-film-card"]],inputs:{urls:"urls"},standalone:!0,features:[e._Bn([u]),e.jDz],decls:6,vars:1,consts:[[1,"card"],[1,"card-body","container"],[1,"card-title"],[1,"row"],["class","list-group col-3",4,"ngFor","ngForOf"],[1,"list-group","col-3"],[1,"list-group-item"],[1,"fw-bold"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3,"Films"),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,U,17,4,"ul",4),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",n.filmExtras))},dependencies:[l.ez,l.sg],encapsulation:2});class d{constructor(t){this.httpClient=t}getStarshipById(t){return this.httpClient.get(`/starships/${t}`)}}function y(i,t){if(1&i&&(e.TgZ(0,"span",4),e._uU(1),e.qZA(),e.TgZ(2,"span",5),e._uU(3),e.qZA(),e.TgZ(4,"span",6),e._uU(5),e.qZA()),2&i){const n=t.$implicit;e.xp6(1),e.Oqu(n.name),e.xp6(2),e.Oqu(n.model),e.xp6(2),e.Oqu(n.manufacturer)}}d.\u0275fac=function(t){return new(t||d)(e.LFG(A.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac});class f{constructor(t){this.starshipService=t,this.urls=[],this.shipsExtras=[]}ngOnInit(){this.urls.map(t=>{this.starshipService.getStarshipById(o(t,"/")).subscribe({next:n=>{this.shipsExtras=[...this.shipsExtras,this.setExtraList(n)],console.log(this.shipsExtras)}})})}setExtraList(t){if(t){const{name:n,model:p,manufacturer:s}=t;return{name:n,model:p,manufacturer:s}}return null}}f.\u0275fac=function(t){return new(t||f)(e.Y36(d))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-ship-card"]],inputs:{urls:"urls"},standalone:!0,features:[e._Bn([d]),e.jDz],decls:5,vars:1,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],["e","","ngFor","",3,"ngForOf"],[1,"badge","text-bg-primary"],[1,"badge","text-bg-secondary"],[1,"badge","text-bg-success"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3,"Starship"),e.qZA(),e.YNc(4,y,6,3,"ng-template",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",n.shipsExtras))},dependencies:[l.ez,l.sg],encapsulation:2});var C=r(4004);class c{constructor(t){this.httpClient=t}getAllPeople(t){let n={params:(new A.LE).set("page",t)};return this.httpClient.get("/people",n).pipe((0,C.U)(p=>({next:o(p.next,"/"),results:p.results.map(s=>({...s,url:o(s.url,"/"),films:s.films.map(a=>o(a,"/")),starships:s.starships.map(a=>o(a,"/")),vehicles:s.vehicles.map(a=>o(a,"/")),species:s.species.map(a=>o(a,"/")),homeworld:o(s.homeworld,"/")}))})))}getPeopleById(t){return this.httpClient.get(`/people/${t}`)}}function b(i,t){if(1&i&&(e.ynx(0),e.TgZ(1,"ul",3)(2,"li",4)(3,"span",5),e._uU(4,"name : "),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"li",4)(7,"span",5),e._uU(8,"height : "),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"li",4)(11,"span",5),e._uU(12,"mass : "),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"li",4)(15,"span",5),e._uU(16,"hair_color : "),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"li",4)(19,"span",5),e._uU(20,"skin_color : "),e.qZA(),e._uU(21),e.qZA(),e.TgZ(22,"li",4)(23,"span",5),e._uU(24,"eye_color : "),e.qZA(),e._uU(25),e.qZA(),e.TgZ(26,"li",4)(27,"span",5),e._uU(28,"birth_year : "),e.qZA(),e._uU(29),e.qZA(),e.TgZ(30,"li",4)(31,"span",5),e._uU(32,"gender : "),e.qZA(),e._uU(33),e.qZA(),e.TgZ(34,"li",4)(35,"span",5),e._uU(36,"homeworld : "),e.qZA(),e._uU(37),e.qZA(),e.TgZ(38,"li",4)(39,"span",5),e._uU(40,"created : "),e.qZA(),e._uU(41),e.qZA(),e.TgZ(42,"li",4)(43,"span",5),e._uU(44,"edited : "),e.qZA(),e._uU(45),e.qZA(),e._UZ(46,"app-ship-card",6)(47,"app-film-card",6),e.qZA(),e.BQk()),2&i){const n=e.oxw();e.xp6(5),e.hij("",n.people.name," "),e.xp6(4),e.hij("",n.people.height," "),e.xp6(4),e.hij("",n.people.mass," "),e.xp6(4),e.hij("",n.people.hair_color," "),e.xp6(4),e.hij("",n.people.skin_color," "),e.xp6(4),e.hij("",n.people.eye_color," "),e.xp6(4),e.hij("",n.people.birth_year," "),e.xp6(4),e.hij("",n.people.gender," "),e.xp6(4),e.hij("",n.people.homeworld," "),e.xp6(4),e.hij("",n.people.created," "),e.xp6(4),e.hij("",n.people.edited," "),e.xp6(1),e.Q6J("urls",n.people.starships),e.xp6(1),e.Q6J("urls",n.people.films)}}c.\u0275fac=function(t){return new(t||c)(e.LFG(A.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac});class Z{constructor(t,n){this.route=t,this.peopleService=n,this.people={},this.loading=!1}ngOnInit(){this.route.params.subscribe({next:t=>{this.loading=!0,this.peopleService.getPeopleById(t.id).pipe((0,v.x)(()=>this.loading=!1)).subscribe({next:n=>{this.people={...n,starships:n.starships?n.starships:[]}}})}})}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(x.gz),e.Y36(c))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-people-details"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"container"],[1,"row"],[4,"ngIf"],[1,"list-group"],[1,"list-group-item"],[1,"fw-bold"],[3,"urls"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3,"People Details"),e.qZA(),e.YNc(4,b,48,13,"ng-container",2),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngIf",!n.loading))},dependencies:[l.ez,l.O5,f,g],encapsulation:2});const P=function(i){return["/people/",i]};function F(i,t){if(1&i&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"h5",10),e._uU(4),e.qZA(),e.TgZ(5,"a",11),e._uU(6,"Details "),e.qZA()()()()),2&i){const n=t.$implicit;e.xp6(4),e.Oqu(n.name),e.xp6(1),e.Q6J("routerLink",e.VKq(2,P,n.url))}}function S(i,t){if(1&i){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(n);const s=e.oxw(2);return e.KtG(s.showMore())}),e._uU(1," Show More "),e.qZA()}}function j(i,t){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,F,7,4,"ng-template",4),e.TgZ(2,"div",5),e.YNc(3,S,2,0,"button",6),e.qZA()()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.peopleList),e.xp6(2),e.Q6J("ngIf",n.nextPage)}}function w(i,t){1&i&&(e.TgZ(0,"p"),e._uU(1,"Loading..."),e.qZA())}class _{constructor(t){this.peopleService=t,this.peopleList=[],this.nextPage="1",this.prevPage="",this.loading=!1}ngOnInit(){this.loadData(this.nextPage)}loadData(t){this.loading=!0,this.peopleService.getAllPeople(t).pipe((0,v.x)(()=>this.loading=!1)).subscribe({next:n=>{this.nextPage=o(n?.next,"="),this.peopleList=[...this.peopleList,...n.results]}})}showMore(){this.loadData(this.nextPage)}}_.\u0275fac=function(t){return new(t||_)(e.Y36(c))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-people"]],decls:4,vars:2,consts:[[1,"container"],["class","row",4,"ngIf","ngIfElse"],["loader",""],[1,"row"],["ngFor","",3,"ngForOf"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],["type","button","class","btn btn-md btn-secondary",3,"click",4,"ngIf"],[1,"col-3"],[1,"card","m-1"],[1,"card-body","p-2"],[1,"card-title"],["type","button",1,"btn","btn-primary",3,"routerLink"],["type","button",1,"btn","btn-md","btn-secondary",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,j,4,2,"div",1),e.qZA(),e.YNc(2,w,2,0,"ng-template",null,2,e.W1O)),2&t){const p=e.MAs(3);e.xp6(1),e.Q6J("ngIf",!n.loading)("ngIfElse",p)}},dependencies:[l.sg,l.O5,x.rH],encapsulation:2});const E=[{path:"",component:_},{path:":id",component:Z}];class h{}h.\u0275fac=function(t){return new(t||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[x.Bz.forChild(E),x.Bz]});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({providers:[T.tT,c],imports:[l.ez,h]})}}]);