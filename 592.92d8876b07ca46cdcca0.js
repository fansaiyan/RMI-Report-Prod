(self.webpackChunkmirage=self.webpackChunkmirage||[]).push([[592],{4925:(e,i,r)=>{"use strict";r.d(i,{m:()=>a});var t=r(7368),s=r(2288);let a=(()=>{class e{constructor(e){this.ifService=e}finalRat(){return this.ifService.get("api/parameter-dimensi")}parameterDimensi(){return this.ifService.get("api/parameter-dimensi")}parameterGroup(){return this.ifService.get("api/parameter-group")}finalRating(){return this.ifService.get("api/final-rating")}icr(){return this.ifService.get("api/interest-coverage-ratio")}icrByRate(e){return this.ifService.get("api/interest-coverage-ratio-by-rate",e||{})}kompositResiko(){return this.ifService.get("api/komposit-resiko")}surveyList(e){return this.ifService.get("api/survey-list",e||{})}surveyByid(e){return this.ifService.get(`api/survey-by-id/${e}`)}aspekKinerjaList(e){return this.ifService.get("api/aspek-kinerja-list",e||{})}aspekKinerjaById(e){return this.ifService.get(`api/aspek-kinerja-by-id/${e}`)}postAspekKinerja(e){return this.ifService.post("api/aspek-kinerja-create",e)}postAspekKinerjaDelete(e){return this.ifService.delete(`api/aspek-kinerja-delete/${e}`)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(s.V))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3487:(e,i,r)=>{"use strict";r.d(i,{m:()=>n});var t=r(7368),s=r(7511),a=r(8665);let n=(()=>{class e{constructor(e,i){this.ref=e,this.config=i,this.config.closable||(this.config.closable=!1)}ngOnInit(){this.data=this.config.data}ngOnDestroy(){this.ref.close(!0)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(s.E7),t.Y36(s.S))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-popup-loading"]],decls:6,vars:1,consts:[[1,"p-d-flex","p-flex-column"],[1,"p-mb-2","p-as-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"p-progressSpinner"),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"h5"),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(i.data.message))},directives:[a.G],styles:[".loader[_ngcontent-%COMP%]{border-radius:50%;border:16px solid #f3f3f3;border-top-color:#3498db;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),e})()}}]);