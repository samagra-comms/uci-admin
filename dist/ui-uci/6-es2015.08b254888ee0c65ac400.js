(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(t,e,n){"use strict";n.r(e),n.d(e,"loginModule",(function(){return O}));var o=n("ofXK"),r=n("tyNb"),i=n("3Pt+"),s=n("fbMX"),a=n("AytR"),c=n("fXoL"),p=n("lJxs"),l=n("JIr8"),u=n("z6cu"),g=n("tk/3");let d=(()=>{class t{constructor(t){this.http=t}getDefaultHeaders(){return{}}getRequest(t,e={},n={}){return n=Object.assign(Object.assign({},n),this.getDefaultHeaders()),this.http.get(t,{params:e,headers:n}).pipe(Object(p.a)(t=>t.result),Object(l.a)(t=>this.handleError(t)))}postRequest(t,e={},n={}){return n=Object.assign(Object.assign({},n),this.getDefaultHeaders()),this.http.post(t,e,{headers:n}).pipe(Object(p.a)(t=>t.result),Object(l.a)(t=>this.handleError(t)))}postSegmentRequest(t,e={},n={}){return n=Object.assign(Object.assign({},n),this.getDefaultHeaders()),this.http.post(t,e,{headers:n}).pipe(Object(p.a)(t=>t.result?t.result:t),Object(l.a)(t=>this.handleError(t)))}patchRequest(t,e={},n={}){return n=Object.assign(Object.assign({},n),this.getDefaultHeaders()),this.http.patch(t,e,{headers:n}).pipe(Object(p.a)(t=>t.result),Object(l.a)(t=>this.handleError(t)))}deleteRequest(t,e={}){return e=Object.assign(Object.assign({},e),this.getDefaultHeaders()),this.http.delete(t,{headers:e}).pipe(Object(p.a)(t=>t.result),Object(l.a)(t=>this.handleError(t)))}handleError(t){return t instanceof ErrorEvent?Object(u.a)(t.error.message):(console.log("=====",t,t.error),Object(u.a)(t.error))}toFormData(t){const e=new FormData;for(const n of Object.keys(t))e.append(n,t[n]);return e}}return t.\u0275fac=function(e){return new(e||t)(c.ac(g.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t extends d{constructor(t){super(t),this.http=t}authenticate(t){return this.postRequest(a.a.nlLoginUrl+"/api/login",t,{Authorization:a.a.nlLoginToken})}}return t.\u0275fac=function(e){return new(e||t)(c.ac(g.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=[{path:"",component:(()=>{class t{constructor(t,e,n){this.loginService=t,this.fb=e,this.router=n}ngOnInit(){this.loginForm=this.fb.group({loginId:["",[i.p.required]],password:["",i.p.required],applicationId:[a.a.nlApplicationId]}),this.checkLogin()}checkLogin(){s.a.getItem("accessToken")&&s.a.getItem("self")&&this.router.navigate(["/uci-admin"])}onSubmit(){const t=Object.assign({},this.loginForm.value);this.loginService.authenticate(t).subscribe(t=>{t.data&&t.data.user&&(s.a.setItem("accessToken",t.data.user.token),s.a.setItem("self",t.data.user.user),this.router.navigate(["/uci-admin"]))},t=>{})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(b),c.Qb(i.d),c.Qb(r.b))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-login"]],decls:6,vars:1,consts:[[1,"login",3,"formGroup"],["type","text","placeholder","User name","aria-label","User address","formControlName","loginId",1,"input-field"],["type","password","placeholder","Password","aria-label","Password","formControlName","password",1,"input-field"],["type","submit","value","Log In",3,"click"]],template:function(t,e){1&t&&(c.Wb(0,"form",0),c.Wb(1,"h2"),c.Fc(2,"Welcome"),c.Vb(),c.Rb(3,"input",1),c.Rb(4,"input",2),c.Wb(5,"input",3),c.ec("click",(function(){return e.onSubmit()})),c.Vb(),c.Vb()),2&t&&c.nc("formGroup",e.loginForm)},directives:[i.q,i.l,i.f,i.c,i.k,i.e],styles:["body[_ngcontent-%COMP%]{background:silver;font-family:Roboto,Helvetica Neue,sans-serif;color:#666}.login[_ngcontent-%COMP%]{margin:20px auto;padding:40px 50px;max-width:300px;border-radius:5px;background:#fff;box-shadow:1px 1px 1px #666}.login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;display:block;box-sizing:border-box;margin:10px 0;padding:14px 12px;font-size:16px;border-radius:2px;font-family:Roboto,Helvetica Neue,sans-serif}.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:1px solid silver;transition:.2s}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover{border-color:#005a9e;outline:none;transition:all .2s ease-in-out}.login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:700;transition:.2s;margin:20px 0;color:#fff;background:#005a9e}.login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover{background:#000}.login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:20px 0 0;color:#005a9e;font-size:28px}.login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:40px}.links[_ngcontent-%COMP%]{display:table;width:100%;box-sizing:border-box;border-top:1px solid silver;margin-bottom:10px}.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:.8em}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(h)],r.c]}),t})(),O=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[o.c,f,i.o,i.g]]}),t})()}}]);