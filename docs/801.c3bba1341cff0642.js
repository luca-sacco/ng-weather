"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[801],{801:(G,m,a)=>{a.r(m),a.d(m,{HomeModule:()=>j});var l=a(6895),c=a(4719),t=a(6353);let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,c.u5]}),e})();var u=a(1581),d=a(3094),g=a(8978);class _{constructor(){this._options=[],this._fiteredOptions=[]}get filteredOptions(){return this._fiteredOptions}get options(){return this._options}setOptions(o){this._fiteredOptions=this._options=[...o]}setFilterFn(o){this._filterFn=o}filter(o){o?(this._fiteredOptions=[],this._fiteredOptions=this._options.filter(this._filterFn?n=>this._filterFn(o,n):n=>n.label.toLowerCase().indexOf(o.toLowerCase())>=0)):this.resetFilteredOptions()}resetFilteredOptions(){this._fiteredOptions=this._options}}let C=(()=>{class e{constructor(n,i){this.elementRef=n,this.renderer=i,this.element=this.elementRef.nativeElement}ngOnInit(){}ngOnChanges(){this._isDefined(this.label)&&this._isDefined(this.searcTerm)&&this._highlight()}ngAfterViewInit(){this.label=this.element.innerHTML,this._isDefined(this.label)&&this._isDefined(this.searcTerm)&&this._highlight()}_highlight(){if(!this.searcTerm)return void this._setInnerHtml(this.label);const n=new RegExp(this.searcTerm,"gi"),i=this.label.replace(n,'<span class="font-weight-bold">$&</span>');this._setInnerHtml(i)}_setInnerHtml(n){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",n)}_isDefined(n){return null!=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq),t.Y36(t.Qsj))},e.\u0275dir=t.lG2({type:e,selectors:[["","optionHighlight",""]],inputs:{searcTerm:["optionHighlight","searcTerm"]},features:[t.TTD]}),e})();const w=["inputSearch"],v=["dropdown"];function T(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"a",7),t.NdJ("click",function(){const r=t.CHM(n).$implicit,p=t.oxw();return t.KtG(p.onSelect(r))}),t._uU(1),t.qZA()}if(2&e){const n=o.$implicit,i=t.oxw();t.Q6J("optionHighlight",i.value),t.xp6(1),t.hij(" ",n.label," ")}}function x(e,o){1&e&&(t.TgZ(0,"a",8),t._uU(1," No elements "),t.qZA())}let O=(()=>{class e{constructor(n){this._renderer=n,this.placeholder="",this.options=[],this.showDropdown=!1,this.value=null,this._onChange=i=>{},this._onTouched=()=>{},this._optionsList=new _}get filteredOptions(){return this._optionsList.filteredOptions}handleInputValue(n){this.value=n,this._filter(this.value)}clickout(n){this.inputSearch.nativeElement.contains(n.target)||this.dropdown.nativeElement.contains(n.target)||(this.showDropdown=!1)}writeValue(n){n&&(this.value=n)}registerOnChange(n){this._onChange=n}registerOnTouched(n){this._onTouched=n}onBlur(){this._onTouched()}setDisabledState(n){this.setProperty("disabled",n)}setProperty(n,i){this._renderer.setProperty(this.inputSearch.nativeElement,n,i)}_filter(n){n||this._onChange(null),this._optionsList.filter(n),this.showDropdown||(this.showDropdown=!0)}onSelect(n){this._onChange(n.value),this.value=n.label,this._close()}_close(){!this.showDropdown||(this.showDropdown=!1,this._optionsList.resetFilteredOptions())}ngOnInit(){}ngOnChanges(n){n.options&&this._optionsList.setOptions(n.options.currentValue||[]),n.searchMethod&&this._optionsList.setFilterFn(n.searchMethod.currentValue)}onFocus(){this.showDropdown=!0}ngAfterViewInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-autocomplete"]],viewQuery:function(n,i){if(1&n&&(t.Gf(w,5),t.Gf(v,5)),2&n){let s;t.iGM(s=t.CRH())&&(i.inputSearch=s.first),t.iGM(s=t.CRH())&&(i.dropdown=s.first)}},hostBindings:function(n,i){1&n&&t.NdJ("input",function(r){return i.handleInputValue(r.target.value)})("click",function(r){return i.clickout(r)},!1,t.evT)},inputs:{placeholder:"placeholder",disabled:"disabled",minTermLength:"minTermLength",searchMethod:"searchMethod",options:"options"},features:[t._Bn([{provide:c.JU,useExisting:(0,t.Gpc)(()=>e),multi:!0}]),t.TTD],decls:7,vars:9,consts:[[1,"dropdown"],["type","text","autocomplete","off",1,"form-control",3,"value","placeholder","disabled","focus","blur"],["inputSearch",""],[1,"dropdown-menu","custom-dropdown"],["dropdown",""],["class","dropdown-item",3,"optionHighlight","click",4,"ngFor","ngForOf"],["class","dropdown-item",4,"ngIf"],[1,"dropdown-item",3,"optionHighlight","click"],[1,"dropdown-item"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()}),t.qZA(),t.TgZ(3,"div",3,4),t.YNc(5,T,2,2,"a",5),t.YNc(6,x,2,0,"a",6),t.qZA()()),2&n&&(t.ekj("show",i.showDropdown),t.xp6(1),t.Q6J("value",i.value)("placeholder",i.placeholder)("disabled",i.disabled),t.xp6(2),t.ekj("show",i.showDropdown),t.xp6(2),t.Q6J("ngForOf",i.filteredOptions),t.xp6(1),t.Q6J("ngIf",!i.filteredOptions.length))},dependencies:[l.sg,l.O5,C],styles:[".dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;text-decoration:none;padding:1rem 1.5rem;font-weight:400;color:#212529;white-space:nowrap;background-color:transparent}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#1a1b1926;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]{width:100%;max-height:20vh;overflow-y:scroll}.custom-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid rgba(0,0,0,.168627451)}"]}),e})();var Z=a(591),h=a(2994),A=a(9177),y=a(2986);function b(e,o){1&e&&(t.ynx(0),t.Hsn(1),t.BQk())}function F(e,o){1&e&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function k(e,o){1&e&&(t.ynx(0),t.Hsn(1,2),t.BQk())}function M(e,o){if(1&e&&(t.ynx(0),t.YNc(1,b,2,0,"ng-container",0),t.YNc(2,F,2,0,"ng-container",0),t.YNc(3,k,2,0,"ng-container",0),t.BQk()),2&e){const n=o.ngIf;t.xp6(1),t.Q6J("ngIf",n.default),t.xp6(1),t.Q6J("ngIf",n.submitting),t.xp6(1),t.Q6J("ngIf",n.done)}}const H=[[["","default",""]],[["","submitting",""]],[["","done",""]]],L=["[default]","[submitting]","[done]"];let I=(()=>{class e{constructor(){this.status$=new Z.X({default:!0})}handleClick(n){this.onClick(n)}onClick(n){this.status$.next({submitting:!0}),this.clickFn(n).pipe((0,h.b)(()=>this.status$.next({done:!0})),(0,A.g)(500),(0,h.b)(()=>this.status$.next({default:!0})),(0,y.q)(1)).subscribe()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-button"]],hostBindings:function(n,i){1&n&&t.NdJ("click",function(r){return i.handleClick(r.target)})},inputs:{status$:"status$",clickFn:"clickFn"},ngContentSelectors:L,decls:2,vars:3,consts:[[4,"ngIf"]],template:function(n,i){1&n&&(t.F$t(H),t.YNc(0,M,4,3,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.status$))},dependencies:[l.O5,l.Ov],encapsulation:2}),e})(),B=(()=>{class e{constructor(n,i){this.service=n,this.countyService=i}ngOnInit(){this._initForm()}_initForm(){this.form=new c.cw({zipCode:new c.NI("",c.kI.required),nation:new c.NI("",c.kI.required)}),this.nations$=this.countyService.getAllCountries()}search(n,i){return!1}addLocation(){return this.service.addLocation(this.form.value)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.a),t.Y36(g.T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-location"]],decls:20,vars:6,consts:[[1,"well"],[1,"row"],[1,"col-md-6"],[3,"formGroup"],["type","text","formControlName","zipCode","placeholder","Zipcode",1,"form-control"],["placeholder","Nation","formControlName","nation",3,"options"],[3,"clickFn"],["default","",1,"btn","btn-primary",3,"disabled"],["submitting","","disabled","",1,"btn","btn-primary"],["done","",1,"btn","btn-success"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Enter a zipcode:"),t.qZA(),t._UZ(6,"input",4)(7,"br"),t.TgZ(8,"h4"),t._uU(9,"Enter a nation:"),t.qZA(),t._UZ(10,"app-autocomplete",5),t.ALo(11,"async"),t._UZ(12,"br"),t.TgZ(13,"app-button",6)(14,"button",7),t._uU(15," Add location "),t.qZA(),t.TgZ(16,"button",8),t._uU(17,"Adding..."),t.qZA(),t.TgZ(18,"button",9),t._uU(19,"Done"),t.qZA()()()()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(7),t.Q6J("options",t.lcZ(11,4,i.nations$)),t.xp6(3),t.Q6J("clickFn",i.addLocation.bind(i)),t.xp6(1),t.Q6J("disabled",!i.form.valid))},dependencies:[O,I,c.Fj,c.JJ,c.JL,c.sg,c.u,l.Ov],encapsulation:2}),e})();var D=a(3906);const J=function(e,o){return{$implicit:e,location:o}};function S(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",4),t.GkF(2,5),t.qZA(),t.BQk()),2&e){const n=o.ngIf,i=t.oxw(),s=t.MAs(7),r=t.MAs(5);t.xp6(2),t.Q6J("ngTemplateOutlet",n.error?s:r)("ngTemplateOutletContext",t.WLB(2,J,null==n?null:n.data,i.location))}}function Q(e,o){1&e&&(t.TgZ(0,"div",6)(1,"div"),t._UZ(2,"div",7)(3,"div",7)(4,"div",7),t.qZA()())}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"h4"),t._uU(6,"Temperatures today:"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"number"),t.ALo(10,"number"),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"p")(13,"a",8),t.NdJ("click",function(){const r=t.CHM(n).location,p=t.oxw();return t.KtG(p.goToForecast(r))}),t._uU(14),t.qZA()()(),t.TgZ(15,"div")(16,"span",9),t.NdJ("click",function(){const r=t.CHM(n).location,p=t.oxw();return t.KtG(p.locationService.removeLocation(r))}),t._uU(17,"\xd7"),t.qZA(),t._UZ(18,"img",10),t.qZA()}if(2&e){const n=o.$implicit,i=o.location,s=t.oxw();t.xp6(2),t.AsE("",n.name," (",i.zipCode,")"),t.xp6(2),t.hij("Current conditions: ",n.weather[0].main,""),t.xp6(4),t.lnq(" Current ",t.xi3(9,8,n.main.temp,".0-0")," - Max ",t.xi3(10,11,n.main.temp_max,".0-0")," - Min ",t.xi3(11,14,n.main.temp_min,".0-0")," "),t.xp6(6),t.hij("Show 5-day forecast for ",n.name,""),t.xp6(4),t.Q6J("src",s.weatherService.getWeatherIcon(n.weather[0].id),t.LSH)}}function U(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"h4"),t._uU(2,"Error!"),t.qZA(),t.TgZ(3,"h5"),t._uU(4),t.qZA()(),t.TgZ(5,"span",9),t.NdJ("click",function(){const r=t.CHM(n).location,p=t.oxw();return t.KtG(p.locationService.removeLocation(r))}),t._uU(6,"\xd7"),t.qZA()}if(2&e){const n=o.$implicit;t.xp6(4),t.Oqu(n.message)}}let $=(()=>{class e{constructor(n,i,s){this.locationService=n,this.weatherService=i,this.router=s}ngOnInit(){this.weatherInfo$=this.weatherService.getWeatherConditionByZipCodeAndNation(this.location.zipCode,this.location.nation)}goToForecast(n){this.router.navigate(["/forecast"],{queryParams:n})}showForecast(n){this.router.navigate(["/forecast",n])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.a),t.Y36(D.F),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-condition-detail"]],inputs:{location:"location"},decls:8,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingTemplate",""],["weatherInfoTemplate",""],["errorTemplate",""],[1,"well","flex"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"well"],[1,"skeleton","skeleton-text"],[3,"click"],[1,"close",3,"click"],[3,"src"]],template:function(n,i){if(1&n&&(t.YNc(0,S,3,5,"ng-container",0),t.ALo(1,"async"),t.YNc(2,Q,5,0,"ng-template",null,1,t.W1O),t.YNc(4,N,19,17,"ng-template",null,2,t.W1O),t.YNc(6,U,7,1,"ng-template",null,3,t.W1O)),2&n){const s=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,i.weatherInfo$))("ngIfElse",s)}},dependencies:[l.O5,l.tP,l.Ov,l.JJ],styles:[".close[_ngcontent-%COMP%]{cursor:pointer}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.skeleton[_ngcontent-%COMP%]{animation:skeleton-loading 1s linear infinite alternate}@keyframes skeleton-loading{0%{background-color:#c2cfd6}to{background-color:#f0f3f5}}.skeleton-text[_ngcontent-%COMP%]{width:100%;height:.7rem;margin-bottom:.5rem;border-radius:.25rem}"]}),e})();function P(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"app-condition-detail",1),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("location",n)}}let Y=(()=>{class e{constructor(n){this.locationService=n}ngOnInit(){this.locations$=this.locationService.getLocations()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-conditions-list"]],decls:3,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"location"]],template:function(n,i){1&n&&(t.TgZ(0,"div"),t.YNc(1,P,2,1,"ng-container",0),t.ALo(2,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,i.locations$)))},dependencies:[l.sg,$,l.Ov]}),e})();const q=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-page"]],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-search-location")(2,"app-conditions-list"),t.qZA())},dependencies:[B,Y],encapsulation:2}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(q),u.Bz]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,f,c.u5,c.UX,E]}),e})()}}]);