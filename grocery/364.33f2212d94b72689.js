"use strict";(self.webpackChunkgrocery=self.webpackChunkgrocery||[]).push([[364],{82364:(P,u,a)=>{a.r(u),a.d(u,{GroceoryModule:()=>U});var l=a(69808),p=a(50843),t=a(5e3),m=a(95159);function _(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"img",9),t.NdJ("click",function(){const i=t.CHM(e).index;return t.oxw().selectImage(i)}),t.qZA()}2&n&&t.s9C("src",r.$implicit,t.LSH)}let Z=(()=>{class n{constructor(e){this.route=e,this.images=[],this.myThumbnail="",this.myFullresImage=""}selectImage(e){this.myThumbnail=this.images[e],this.myFullresImage=this.images[e]}ngOnInit(){this.route.queryParams.subscribe(e=>{this.productdetails=JSON.parse(e.data),this.images=this.productdetails.img,this.myThumbnail=this.images[0],this.myFullresImage=this.images[0]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product"]],decls:24,vars:8,consts:[[1,"onion"],[1,"imgzoom"],[1,"imagez",3,"thumbImage","fullImage","magnification","enableLens","lensWidth","lensHeight","circularLens"],["id","onions"],["role","button"],[2,"color","red"],[1,"btn","btn-danger"],["routerLinkActive","class1",1,"scrollitem"],["drag-scroll-item","","class","img",3,"src","click",4,"ngFor","ngForOf"],["drag-scroll-item","",1,"img",3,"src","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1),t._UZ(3,"lib-ngx-image-zoom",2),t.qZA(),t.TgZ(4,"div",3)(5,"p",4)(6,"u"),t._uU(7,"Onions"),t.qZA()(),t.TgZ(8,"h1"),t._uU(9,"Happilo 100% Fresh Onions, 500 g"),t.qZA(),t.TgZ(10,"p"),t._uU(11,"MRP:"),t.TgZ(12,"s"),t._uU(13,"\u20b9675"),t.qZA()(),t.TgZ(14,"p"),t._uU(15," Price: \u20b9411.75 (\u20b90.82/g) "),t.TgZ(16,"span",5),t._uU(17,"39% OFF"),t.qZA(),t._UZ(18,"br"),t._uU(19,"(inclusive of all taxes) "),t.qZA(),t.TgZ(20,"button",6),t._uU(21,"Buy"),t.qZA()()(),t.TgZ(22,"div",7),t.YNc(23,_,1,1,"img",8),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("thumbImage",o.myThumbnail)("fullImage",o.myFullresImage)("magnification",3)("enableLens",!0)("lensWidth",100)("lensHeight",100)("circularLens",!0),t.xp6(20),t.Q6J("ngForOf",o.images))},directives:[m.r,l.sg],styles:["p[_ngcontent-%COMP%]{font-family:Lato}drag-scroll[_ngcontent-%COMP%]{width:250px}img[_ngcontent-%COMP%]{width:75px;border:1px solid red;height:70px;margin:5px}  .ngxImageZoomThumbnail{pointer-events:all;width:400px;height:300px;border:2px solid green}  .ngxImageZoomContainer{width:93%!important;height:300px!important;margin:15px!important}.scrollitem[_ngcontent-%COMP%]{width:445px;padding:0 18px;display:flex;justify-content:center;margin:-13px 0 16px 1px}.img[_ngcontent-%COMP%]:visited{border-color:purple;border-style:dashed}.imgzoom[_ngcontent-%COMP%]{display:flex;width:40%}.onion[_ngcontent-%COMP%]{display:flex}#onions[_ngcontent-%COMP%]{margin-top:45px}"]}),n})();var h=a(22160),d=a(40124),C=a(18815),x=a(25245),g=a(93075);function T(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",9)(2,"div",10)(3,"img",11),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().singleproduct(i)})("click",function(){const i=t.CHM(e).$implicit;return t.oxw().addtocart(i)}),t.qZA(),t.TgZ(4,"div",12),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().singleproduct(i)}),t.TgZ(5,"p",13),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.TgZ(8,"p",14),t._uU(9),t.qZA(),t.TgZ(10,"mat-icon",15),t._uU(11," local_shipping "),t.qZA(),t.TgZ(12,"p",16),t._uU(13,"Standard Delivery: 19 Oct,"),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"p",17),t._uU(16,"9:00AM - 1:30PM"),t.qZA()(),t.TgZ(17,"p",18),t._uU(18),t.qZA()(),t.TgZ(19,"div",19)(20,"label",20),t._uU(21,"Qty "),t.TgZ(22,"input",21),t.NdJ("ngModelChange",function(c){return t.CHM(e).$implicit.Qty=c}),t.qZA()(),t.TgZ(23,"button",22),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().addtocart(i)}),t.TgZ(24,"b"),t._uU(25,"Add to cart"),t.qZA(),t.TgZ(26,"mat-icon"),t._uU(27,"shopping_basket"),t.qZA()()()()()}if(2&n){const e=r.$implicit;t.xp6(3),t.s9C("src",e.img[0],t.LSH),t.xp6(3),t.hij(" ",t.lcZ(7,5,e.name)," "),t.xp6(3),t.hij(" ",e.price," "),t.xp6(9),t.hij("Type: ",e.Type,""),t.xp6(4),t.Q6J("ngModel",e.Qty)}}const f=[{path:"",component:(()=>{class n{constructor(e,o){this.route=e,this.cookieservice=o,this.opened=!0,this.minValue=100,this.maxValue=500,this.options={floor:0,ceil:500,showOuterSelectionBars:!0},this.products=[{id:1,img:["https://t3.ftcdn.net/jpg/01/91/55/42/360_F_191554261_Kfn9mPkFP2lRmNuSkLkoe6yMnOdC1GUC.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbs0UN5pgjg3IY_6byLx6ZMTlTeqpnRayyQ&usqp=CAU"],price:"MRP Rs.109.95",name:"fresh onions",category:"vegetables",Type:"allium ",Qty:1},{id:1,img:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbs0UN5pgjg3IY_6byLx6ZMTlTeqpnRayyQ&usqp=CAU"],price:"MRP  Rs.109.95",name:"fresh brocoli",category:"vegetables",Type:"cruciferous ",Qty:1}]}singleproduct(e){this.route.navigate(["groceory/vegetables/product"],{queryParams:{data:JSON.stringify(e)}}),console.log(e)}addtocart(e){console.log(e),this.route.navigate(["AddtocartComponent"]);let o=this.cookieservice.set("data",JSON.stringify(e));console.log(o)}onUserChange(e){console.log(e),this.minValue=e.value,this.maxValue=e.highValue}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(h.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:111,vars:7,consts:[["mode","side",1,"heading",3,"opened","openedChange"],[1,"slider"],[3,"value","highValue","options","valueChange","highValueChange","userChange"],[1,"min"],[1,"form-check"],["type","checkbox","id","check2","name","option2","value","something",1,"form-check-input"],["for","check2",1,"form-check-label"],[1,"card-group","cardchange"],[4,"ngFor","ngForOf"],[1,"card"],[1,"card-header"],[1,"image",3,"src","click"],[1,"info",3,"click"],[1,"name","text-center","text-primary"],["id","price",1,"profile-desc","text-center"],["id","shipping"],[1,"text-center","paragraph"],[1,"paragraph1"],["id","type",1,"name","text-center"],[1,"action","text-center","style"],["for","quantity"],["type","number","id","quantity","name","quantity","min","1","max","5",3,"ngModel","ngModelChange"],["id","shopping","routerLink","/addtocart",1,"btn","btn-secondary","text-center",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-sidenav-container")(1,"mat-sidenav",0),t.NdJ("openedChange",function(i){return o.opened=i}),t.TgZ(2,"b"),t._uU(3,"Types Of Vegetables:"),t.qZA(),t.TgZ(4,"ul")(5,"li"),t._uU(6,"leafy green(3)"),t.qZA(),t.TgZ(7,"li"),t._uU(8,"cruciferous(4)"),t.qZA(),t.TgZ(9,"li"),t._uU(10,"marrow(3)"),t.qZA(),t.TgZ(11,"li"),t._uU(12,"root(3)"),t.qZA(),t.TgZ(13,"li"),t._uU(14,"edible plant stem(2)"),t.qZA(),t.TgZ(15,"li"),t._uU(16,"allium(3)"),t.qZA()(),t.TgZ(17,"div")(18,"b"),t._uU(19,"Price Range:"),t.qZA()(),t.TgZ(20,"div",1)(21,"ng5-slider",2),t.NdJ("valueChange",function(i){return o.minValue=i})("highValueChange",function(i){return o.maxValue=i})("userChange",function(i){return o.onUserChange(i)}),t.qZA()(),t.TgZ(22,"div",3)(23,"p"),t._uU(24),t.qZA(),t._UZ(25,"br"),t.TgZ(26,"p"),t._uU(27),t.qZA()(),t.TgZ(28,"div")(29,"b"),t._uU(30,"colors:"),t.qZA(),t.TgZ(31,"ul")(32,"div",4),t._UZ(33,"input",5),t.TgZ(34,"label",6),t._uU(35,"Green"),t.qZA()(),t.TgZ(36,"div",4),t._UZ(37,"input",5),t.TgZ(38,"label",6),t._uU(39,"Red"),t.qZA()(),t.TgZ(40,"div",4),t._UZ(41,"input",5),t.TgZ(42,"label",6),t._uU(43,"Yellow"),t.qZA()(),t.TgZ(44,"div",4),t._UZ(45,"input",5),t.TgZ(46,"label",6),t._uU(47,"White"),t.qZA()(),t.TgZ(48,"div",4),t._UZ(49,"input",5),t.TgZ(50,"label",6),t._uU(51,"Purple"),t.qZA()(),t.TgZ(52,"div",4),t._UZ(53,"input",5),t.TgZ(54,"label",6),t._uU(55,"Pink"),t.qZA()()()(),t.TgZ(56,"div")(57,"b"),t._uU(58,"Discount:"),t.qZA(),t.TgZ(59,"ul")(60,"div",4),t._UZ(61,"input",5),t.TgZ(62,"label",6),t._uU(63,"Up to 5%"),t.qZA()(),t.TgZ(64,"div",4),t._UZ(65,"input",5),t.TgZ(66,"label",6),t._uU(67,"Up to 10%"),t.qZA()(),t.TgZ(68,"div",4),t._UZ(69,"input",5),t.TgZ(70,"label",6),t._uU(71,"Up to 15%"),t.qZA()(),t.TgZ(72,"div",4),t._UZ(73,"input",5),t.TgZ(74,"label",6),t._uU(75,"Up to 20%"),t.qZA()(),t.TgZ(76,"div",4),t._UZ(77,"input",5),t.TgZ(78,"label",6),t._uU(79,"Up to 25%"),t.qZA()(),t.TgZ(80,"div",4),t._UZ(81,"input",5),t.TgZ(82,"label",6),t._uU(83,"More than 25%"),t.qZA()()()(),t.TgZ(84,"div")(85,"b"),t._uU(86,"Pack Size:"),t.qZA(),t.TgZ(87,"ul")(88,"div",4),t._UZ(89,"input",5),t.TgZ(90,"label",6),t._uU(91,"100-200g"),t.qZA()(),t.TgZ(92,"div",4),t._UZ(93,"input",5),t.TgZ(94,"label",6),t._uU(95,"200-250g"),t.qZA()(),t.TgZ(96,"div",4),t._UZ(97,"input",5),t.TgZ(98,"label",6),t._uU(99,"300-400g"),t.qZA()(),t.TgZ(100,"div",4),t._UZ(101,"input",5),t.TgZ(102,"label",6),t._uU(103,"400-500g"),t.qZA()(),t.TgZ(104,"div",4),t._UZ(105,"input",5),t.TgZ(106,"label",6),t._uU(107,"More than 500g"),t.qZA()()()()(),t.TgZ(108,"mat-sidenav-content")(109,"div",7),t.YNc(110,T,28,7,"div",8),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("opened",o.opened),t.xp6(20),t.Q6J("value",o.minValue)("highValue",o.maxValue)("options",o.options),t.xp6(3),t.hij("Min Price=",o.minValue,""),t.xp6(3),t.hij("Max Price=",o.maxValue,""),t.xp6(83),t.Q6J("ngForOf",o.products))},directives:[d.TM,d.JX,C.w5,d.Rh,l.sg,x.Hw,g.qQ,g.Fd,g.wV,g.Fj,g.JJ,g.On],pipes:[l.gd],styles:["img[_ngcontent-%COMP%]{width:250px;height:200px}body[_ngcontent-%COMP%]{margin:0;font-family:Lato,sans-serif}.sidebar[_ngcontent-%COMP%]{margin:0;padding:0;width:200px;background-color:#f1f1f1;position:fixed;height:82%;overflow:auto;top:80px}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#000;padding:16px;text-decoration:none}.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#04aa6d;color:#fff}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#555;color:#fff}div.content[_ngcontent-%COMP%]{margin-left:200px;padding:1px 16px;height:1000px}@media screen and (max-width: 700px){.sidebar[_ngcontent-%COMP%]{width:100%;height:auto;position:relative}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left}div.content[_ngcontent-%COMP%]{margin-left:0}}@media screen and (max-width: 400px){.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;float:none}}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}mat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%]{padding:16px}mat-sidenav[_ngcontent-%COMP%]{background-color:#a9a9a9;width:200px}li[_ngcontent-%COMP%]{list-style:none;font-size:17px}.heading[_ngcontent-%COMP%]{font-size:15px}mat-slider[_ngcontent-%COMP%]{width:300px}.slider[_ngcontent-%COMP%]{margin-top:19px}.min[_ngcontent-%COMP%]{margin-top:16px}#shopping[_ngcontent-%COMP%]{display:inline-flex;padding:3px 0 0;width:108px;justify-content:space-around;font-size:14px}.style[_ngcontent-%COMP%]{display:flex;justify-content:space-around;padding:3px}.cardchange[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-evenly}.paragraph[_ngcontent-%COMP%]{margin-top:-35px;margin-right:23px}.paragraph1[_ngcontent-%COMP%]{margin-top:-35px;margin-left:34px}#price[_ngcontent-%COMP%]{margin-left:-146px}#shipping[_ngcontent-%COMP%]:hover{color:green}#type[_ngcontent-%COMP%]{margin-right:142px;display:flex}mat-sidenav[_ngcontent-%COMP%]{background-color:#fff;width:236px}"]}),n})()},{path:"product",component:Z}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(f)]]}),n})();var y=a(45761);let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,v,d.SJ,y.q]]}),n})()}}]);