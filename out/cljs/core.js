goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6238 = (((x == null))?null:x);
if((p[goog.typeOf(x__6238)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6239__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6239 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6239__delegate.call(this, array, i, idxs);
};
G__6239.cljs$lang$maxFixedArity = 2;
G__6239.cljs$lang$applyTo = (function (arglist__6240){
var array = cljs.core.first(arglist__6240);
var i = cljs.core.first(cljs.core.next(arglist__6240));
var idxs = cljs.core.rest(cljs.core.next(arglist__6240));
return G__6239__delegate(array, i, idxs);
});
G__6239.cljs$lang$arity$variadic = G__6239__delegate;
return G__6239;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6325 = this$;
if(and__3822__auto____6325)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6325;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2322__auto____6326 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6327 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6326)]);
if(or__3824__auto____6327)
{return or__3824__auto____6327;
} else
{var or__3824__auto____6328 = (cljs.core._invoke["_"]);
if(or__3824__auto____6328)
{return or__3824__auto____6328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6329 = this$;
if(and__3822__auto____6329)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6329;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2322__auto____6330 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6331 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6330)]);
if(or__3824__auto____6331)
{return or__3824__auto____6331;
} else
{var or__3824__auto____6332 = (cljs.core._invoke["_"]);
if(or__3824__auto____6332)
{return or__3824__auto____6332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6333 = this$;
if(and__3822__auto____6333)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6333;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2322__auto____6334 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6335 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6334)]);
if(or__3824__auto____6335)
{return or__3824__auto____6335;
} else
{var or__3824__auto____6336 = (cljs.core._invoke["_"]);
if(or__3824__auto____6336)
{return or__3824__auto____6336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6337 = this$;
if(and__3822__auto____6337)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6337;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2322__auto____6338 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6339 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6338)]);
if(or__3824__auto____6339)
{return or__3824__auto____6339;
} else
{var or__3824__auto____6340 = (cljs.core._invoke["_"]);
if(or__3824__auto____6340)
{return or__3824__auto____6340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6341 = this$;
if(and__3822__auto____6341)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6341;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2322__auto____6342 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6343 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6342)]);
if(or__3824__auto____6343)
{return or__3824__auto____6343;
} else
{var or__3824__auto____6344 = (cljs.core._invoke["_"]);
if(or__3824__auto____6344)
{return or__3824__auto____6344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6345 = this$;
if(and__3822__auto____6345)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6345;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2322__auto____6346 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6347 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6346)]);
if(or__3824__auto____6347)
{return or__3824__auto____6347;
} else
{var or__3824__auto____6348 = (cljs.core._invoke["_"]);
if(or__3824__auto____6348)
{return or__3824__auto____6348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6349 = this$;
if(and__3822__auto____6349)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6349;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2322__auto____6350 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6351 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6350)]);
if(or__3824__auto____6351)
{return or__3824__auto____6351;
} else
{var or__3824__auto____6352 = (cljs.core._invoke["_"]);
if(or__3824__auto____6352)
{return or__3824__auto____6352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6353 = this$;
if(and__3822__auto____6353)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6353;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2322__auto____6354 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6355 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6354)]);
if(or__3824__auto____6355)
{return or__3824__auto____6355;
} else
{var or__3824__auto____6356 = (cljs.core._invoke["_"]);
if(or__3824__auto____6356)
{return or__3824__auto____6356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6357 = this$;
if(and__3822__auto____6357)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6357;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2322__auto____6358 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6359 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6358)]);
if(or__3824__auto____6359)
{return or__3824__auto____6359;
} else
{var or__3824__auto____6360 = (cljs.core._invoke["_"]);
if(or__3824__auto____6360)
{return or__3824__auto____6360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6361 = this$;
if(and__3822__auto____6361)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6361;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2322__auto____6362 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6363 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6362)]);
if(or__3824__auto____6363)
{return or__3824__auto____6363;
} else
{var or__3824__auto____6364 = (cljs.core._invoke["_"]);
if(or__3824__auto____6364)
{return or__3824__auto____6364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6365 = this$;
if(and__3822__auto____6365)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6365;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2322__auto____6366 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6367 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6366)]);
if(or__3824__auto____6367)
{return or__3824__auto____6367;
} else
{var or__3824__auto____6368 = (cljs.core._invoke["_"]);
if(or__3824__auto____6368)
{return or__3824__auto____6368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6369 = this$;
if(and__3822__auto____6369)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6369;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2322__auto____6370 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6371 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6370)]);
if(or__3824__auto____6371)
{return or__3824__auto____6371;
} else
{var or__3824__auto____6372 = (cljs.core._invoke["_"]);
if(or__3824__auto____6372)
{return or__3824__auto____6372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6373 = this$;
if(and__3822__auto____6373)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6373;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2322__auto____6374 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6375 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6374)]);
if(or__3824__auto____6375)
{return or__3824__auto____6375;
} else
{var or__3824__auto____6376 = (cljs.core._invoke["_"]);
if(or__3824__auto____6376)
{return or__3824__auto____6376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6377 = this$;
if(and__3822__auto____6377)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6377;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2322__auto____6378 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6379 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6378)]);
if(or__3824__auto____6379)
{return or__3824__auto____6379;
} else
{var or__3824__auto____6380 = (cljs.core._invoke["_"]);
if(or__3824__auto____6380)
{return or__3824__auto____6380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6381 = this$;
if(and__3822__auto____6381)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6381;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2322__auto____6382 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6383 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6382)]);
if(or__3824__auto____6383)
{return or__3824__auto____6383;
} else
{var or__3824__auto____6384 = (cljs.core._invoke["_"]);
if(or__3824__auto____6384)
{return or__3824__auto____6384;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6385 = this$;
if(and__3822__auto____6385)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6385;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2322__auto____6386 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6387 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6386)]);
if(or__3824__auto____6387)
{return or__3824__auto____6387;
} else
{var or__3824__auto____6388 = (cljs.core._invoke["_"]);
if(or__3824__auto____6388)
{return or__3824__auto____6388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6389 = this$;
if(and__3822__auto____6389)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6389;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2322__auto____6390 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6391 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6390)]);
if(or__3824__auto____6391)
{return or__3824__auto____6391;
} else
{var or__3824__auto____6392 = (cljs.core._invoke["_"]);
if(or__3824__auto____6392)
{return or__3824__auto____6392;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6393 = this$;
if(and__3822__auto____6393)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6393;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2322__auto____6394 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6395 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6394)]);
if(or__3824__auto____6395)
{return or__3824__auto____6395;
} else
{var or__3824__auto____6396 = (cljs.core._invoke["_"]);
if(or__3824__auto____6396)
{return or__3824__auto____6396;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6397 = this$;
if(and__3822__auto____6397)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6397;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2322__auto____6398 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6399 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6398)]);
if(or__3824__auto____6399)
{return or__3824__auto____6399;
} else
{var or__3824__auto____6400 = (cljs.core._invoke["_"]);
if(or__3824__auto____6400)
{return or__3824__auto____6400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6401 = this$;
if(and__3822__auto____6401)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6401;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2322__auto____6402 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6403 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6402)]);
if(or__3824__auto____6403)
{return or__3824__auto____6403;
} else
{var or__3824__auto____6404 = (cljs.core._invoke["_"]);
if(or__3824__auto____6404)
{return or__3824__auto____6404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6405 = this$;
if(and__3822__auto____6405)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6405;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2322__auto____6406 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6407 = (cljs.core._invoke[goog.typeOf(x__2322__auto____6406)]);
if(or__3824__auto____6407)
{return or__3824__auto____6407;
} else
{var or__3824__auto____6408 = (cljs.core._invoke["_"]);
if(or__3824__auto____6408)
{return or__3824__auto____6408;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6413 = coll;
if(and__3822__auto____6413)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6413;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2322__auto____6414 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6415 = (cljs.core._count[goog.typeOf(x__2322__auto____6414)]);
if(or__3824__auto____6415)
{return or__3824__auto____6415;
} else
{var or__3824__auto____6416 = (cljs.core._count["_"]);
if(or__3824__auto____6416)
{return or__3824__auto____6416;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6421 = coll;
if(and__3822__auto____6421)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6421;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2322__auto____6422 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6423 = (cljs.core._empty[goog.typeOf(x__2322__auto____6422)]);
if(or__3824__auto____6423)
{return or__3824__auto____6423;
} else
{var or__3824__auto____6424 = (cljs.core._empty["_"]);
if(or__3824__auto____6424)
{return or__3824__auto____6424;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6429 = coll;
if(and__3822__auto____6429)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6429;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2322__auto____6430 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6431 = (cljs.core._conj[goog.typeOf(x__2322__auto____6430)]);
if(or__3824__auto____6431)
{return or__3824__auto____6431;
} else
{var or__3824__auto____6432 = (cljs.core._conj["_"]);
if(or__3824__auto____6432)
{return or__3824__auto____6432;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6441 = coll;
if(and__3822__auto____6441)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6441;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2322__auto____6442 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6443 = (cljs.core._nth[goog.typeOf(x__2322__auto____6442)]);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{var or__3824__auto____6444 = (cljs.core._nth["_"]);
if(or__3824__auto____6444)
{return or__3824__auto____6444;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6445 = coll;
if(and__3822__auto____6445)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6445;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2322__auto____6446 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6447 = (cljs.core._nth[goog.typeOf(x__2322__auto____6446)]);
if(or__3824__auto____6447)
{return or__3824__auto____6447;
} else
{var or__3824__auto____6448 = (cljs.core._nth["_"]);
if(or__3824__auto____6448)
{return or__3824__auto____6448;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6453 = coll;
if(and__3822__auto____6453)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6453;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2322__auto____6454 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6455 = (cljs.core._first[goog.typeOf(x__2322__auto____6454)]);
if(or__3824__auto____6455)
{return or__3824__auto____6455;
} else
{var or__3824__auto____6456 = (cljs.core._first["_"]);
if(or__3824__auto____6456)
{return or__3824__auto____6456;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6461 = coll;
if(and__3822__auto____6461)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6461;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2322__auto____6462 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6463 = (cljs.core._rest[goog.typeOf(x__2322__auto____6462)]);
if(or__3824__auto____6463)
{return or__3824__auto____6463;
} else
{var or__3824__auto____6464 = (cljs.core._rest["_"]);
if(or__3824__auto____6464)
{return or__3824__auto____6464;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6469 = coll;
if(and__3822__auto____6469)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6469;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2322__auto____6470 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6471 = (cljs.core._next[goog.typeOf(x__2322__auto____6470)]);
if(or__3824__auto____6471)
{return or__3824__auto____6471;
} else
{var or__3824__auto____6472 = (cljs.core._next["_"]);
if(or__3824__auto____6472)
{return or__3824__auto____6472;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6481 = o;
if(and__3822__auto____6481)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6481;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2322__auto____6482 = (((o == null))?null:o);
return (function (){var or__3824__auto____6483 = (cljs.core._lookup[goog.typeOf(x__2322__auto____6482)]);
if(or__3824__auto____6483)
{return or__3824__auto____6483;
} else
{var or__3824__auto____6484 = (cljs.core._lookup["_"]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6485 = o;
if(and__3822__auto____6485)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6485;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2322__auto____6486 = (((o == null))?null:o);
return (function (){var or__3824__auto____6487 = (cljs.core._lookup[goog.typeOf(x__2322__auto____6486)]);
if(or__3824__auto____6487)
{return or__3824__auto____6487;
} else
{var or__3824__auto____6488 = (cljs.core._lookup["_"]);
if(or__3824__auto____6488)
{return or__3824__auto____6488;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6493 = coll;
if(and__3822__auto____6493)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6493;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2322__auto____6494 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6495 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2322__auto____6494)]);
if(or__3824__auto____6495)
{return or__3824__auto____6495;
} else
{var or__3824__auto____6496 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6496)
{return or__3824__auto____6496;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6501 = coll;
if(and__3822__auto____6501)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6501;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2322__auto____6502 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6503 = (cljs.core._assoc[goog.typeOf(x__2322__auto____6502)]);
if(or__3824__auto____6503)
{return or__3824__auto____6503;
} else
{var or__3824__auto____6504 = (cljs.core._assoc["_"]);
if(or__3824__auto____6504)
{return or__3824__auto____6504;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6509 = coll;
if(and__3822__auto____6509)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6509;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2322__auto____6510 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6511 = (cljs.core._dissoc[goog.typeOf(x__2322__auto____6510)]);
if(or__3824__auto____6511)
{return or__3824__auto____6511;
} else
{var or__3824__auto____6512 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6512)
{return or__3824__auto____6512;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6517 = coll;
if(and__3822__auto____6517)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6517;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2322__auto____6518 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6519 = (cljs.core._key[goog.typeOf(x__2322__auto____6518)]);
if(or__3824__auto____6519)
{return or__3824__auto____6519;
} else
{var or__3824__auto____6520 = (cljs.core._key["_"]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6525 = coll;
if(and__3822__auto____6525)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6525;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2322__auto____6526 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6527 = (cljs.core._val[goog.typeOf(x__2322__auto____6526)]);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{var or__3824__auto____6528 = (cljs.core._val["_"]);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6533 = coll;
if(and__3822__auto____6533)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6533;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2322__auto____6534 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6535 = (cljs.core._disjoin[goog.typeOf(x__2322__auto____6534)]);
if(or__3824__auto____6535)
{return or__3824__auto____6535;
} else
{var or__3824__auto____6536 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6536)
{return or__3824__auto____6536;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6541 = coll;
if(and__3822__auto____6541)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6541;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2322__auto____6542 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6543 = (cljs.core._peek[goog.typeOf(x__2322__auto____6542)]);
if(or__3824__auto____6543)
{return or__3824__auto____6543;
} else
{var or__3824__auto____6544 = (cljs.core._peek["_"]);
if(or__3824__auto____6544)
{return or__3824__auto____6544;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6549 = coll;
if(and__3822__auto____6549)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6549;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2322__auto____6550 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6551 = (cljs.core._pop[goog.typeOf(x__2322__auto____6550)]);
if(or__3824__auto____6551)
{return or__3824__auto____6551;
} else
{var or__3824__auto____6552 = (cljs.core._pop["_"]);
if(or__3824__auto____6552)
{return or__3824__auto____6552;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6557 = coll;
if(and__3822__auto____6557)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6557;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2322__auto____6558 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6559 = (cljs.core._assoc_n[goog.typeOf(x__2322__auto____6558)]);
if(or__3824__auto____6559)
{return or__3824__auto____6559;
} else
{var or__3824__auto____6560 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6560)
{return or__3824__auto____6560;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6565 = o;
if(and__3822__auto____6565)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6565;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2322__auto____6566 = (((o == null))?null:o);
return (function (){var or__3824__auto____6567 = (cljs.core._deref[goog.typeOf(x__2322__auto____6566)]);
if(or__3824__auto____6567)
{return or__3824__auto____6567;
} else
{var or__3824__auto____6568 = (cljs.core._deref["_"]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6573 = o;
if(and__3822__auto____6573)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6573;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2322__auto____6574 = (((o == null))?null:o);
return (function (){var or__3824__auto____6575 = (cljs.core._deref_with_timeout[goog.typeOf(x__2322__auto____6574)]);
if(or__3824__auto____6575)
{return or__3824__auto____6575;
} else
{var or__3824__auto____6576 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6576)
{return or__3824__auto____6576;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6581 = o;
if(and__3822__auto____6581)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6581;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2322__auto____6582 = (((o == null))?null:o);
return (function (){var or__3824__auto____6583 = (cljs.core._meta[goog.typeOf(x__2322__auto____6582)]);
if(or__3824__auto____6583)
{return or__3824__auto____6583;
} else
{var or__3824__auto____6584 = (cljs.core._meta["_"]);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6589 = o;
if(and__3822__auto____6589)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6589;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2322__auto____6590 = (((o == null))?null:o);
return (function (){var or__3824__auto____6591 = (cljs.core._with_meta[goog.typeOf(x__2322__auto____6590)]);
if(or__3824__auto____6591)
{return or__3824__auto____6591;
} else
{var or__3824__auto____6592 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6592)
{return or__3824__auto____6592;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6601 = coll;
if(and__3822__auto____6601)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6601;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2322__auto____6602 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6603 = (cljs.core._reduce[goog.typeOf(x__2322__auto____6602)]);
if(or__3824__auto____6603)
{return or__3824__auto____6603;
} else
{var or__3824__auto____6604 = (cljs.core._reduce["_"]);
if(or__3824__auto____6604)
{return or__3824__auto____6604;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6605 = coll;
if(and__3822__auto____6605)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6605;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2322__auto____6606 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6607 = (cljs.core._reduce[goog.typeOf(x__2322__auto____6606)]);
if(or__3824__auto____6607)
{return or__3824__auto____6607;
} else
{var or__3824__auto____6608 = (cljs.core._reduce["_"]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6613 = coll;
if(and__3822__auto____6613)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6613;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2322__auto____6614 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6615 = (cljs.core._kv_reduce[goog.typeOf(x__2322__auto____6614)]);
if(or__3824__auto____6615)
{return or__3824__auto____6615;
} else
{var or__3824__auto____6616 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6616)
{return or__3824__auto____6616;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6621 = o;
if(and__3822__auto____6621)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6621;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2322__auto____6622 = (((o == null))?null:o);
return (function (){var or__3824__auto____6623 = (cljs.core._equiv[goog.typeOf(x__2322__auto____6622)]);
if(or__3824__auto____6623)
{return or__3824__auto____6623;
} else
{var or__3824__auto____6624 = (cljs.core._equiv["_"]);
if(or__3824__auto____6624)
{return or__3824__auto____6624;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6629 = o;
if(and__3822__auto____6629)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6629;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2322__auto____6630 = (((o == null))?null:o);
return (function (){var or__3824__auto____6631 = (cljs.core._hash[goog.typeOf(x__2322__auto____6630)]);
if(or__3824__auto____6631)
{return or__3824__auto____6631;
} else
{var or__3824__auto____6632 = (cljs.core._hash["_"]);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6637 = o;
if(and__3822__auto____6637)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6637;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2322__auto____6638 = (((o == null))?null:o);
return (function (){var or__3824__auto____6639 = (cljs.core._seq[goog.typeOf(x__2322__auto____6638)]);
if(or__3824__auto____6639)
{return or__3824__auto____6639;
} else
{var or__3824__auto____6640 = (cljs.core._seq["_"]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6645 = coll;
if(and__3822__auto____6645)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6645;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2322__auto____6646 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6647 = (cljs.core._rseq[goog.typeOf(x__2322__auto____6646)]);
if(or__3824__auto____6647)
{return or__3824__auto____6647;
} else
{var or__3824__auto____6648 = (cljs.core._rseq["_"]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6653 = coll;
if(and__3822__auto____6653)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6653;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2322__auto____6654 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6655 = (cljs.core._sorted_seq[goog.typeOf(x__2322__auto____6654)]);
if(or__3824__auto____6655)
{return or__3824__auto____6655;
} else
{var or__3824__auto____6656 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6661 = coll;
if(and__3822__auto____6661)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6661;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2322__auto____6662 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6663 = (cljs.core._sorted_seq_from[goog.typeOf(x__2322__auto____6662)]);
if(or__3824__auto____6663)
{return or__3824__auto____6663;
} else
{var or__3824__auto____6664 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6664)
{return or__3824__auto____6664;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6669 = coll;
if(and__3822__auto____6669)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6669;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2322__auto____6670 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6671 = (cljs.core._entry_key[goog.typeOf(x__2322__auto____6670)]);
if(or__3824__auto____6671)
{return or__3824__auto____6671;
} else
{var or__3824__auto____6672 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6677 = coll;
if(and__3822__auto____6677)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6677;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2322__auto____6678 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6679 = (cljs.core._comparator[goog.typeOf(x__2322__auto____6678)]);
if(or__3824__auto____6679)
{return or__3824__auto____6679;
} else
{var or__3824__auto____6680 = (cljs.core._comparator["_"]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6685 = o;
if(and__3822__auto____6685)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6685;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2322__auto____6686 = (((o == null))?null:o);
return (function (){var or__3824__auto____6687 = (cljs.core._pr_seq[goog.typeOf(x__2322__auto____6686)]);
if(or__3824__auto____6687)
{return or__3824__auto____6687;
} else
{var or__3824__auto____6688 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6693 = d;
if(and__3822__auto____6693)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6693;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2322__auto____6694 = (((d == null))?null:d);
return (function (){var or__3824__auto____6695 = (cljs.core._realized_QMARK_[goog.typeOf(x__2322__auto____6694)]);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{var or__3824__auto____6696 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6701 = this$;
if(and__3822__auto____6701)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6701;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2322__auto____6702 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6703 = (cljs.core._notify_watches[goog.typeOf(x__2322__auto____6702)]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{var or__3824__auto____6704 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6709 = this$;
if(and__3822__auto____6709)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6709;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2322__auto____6710 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6711 = (cljs.core._add_watch[goog.typeOf(x__2322__auto____6710)]);
if(or__3824__auto____6711)
{return or__3824__auto____6711;
} else
{var or__3824__auto____6712 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6717 = this$;
if(and__3822__auto____6717)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6717;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2322__auto____6718 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6719 = (cljs.core._remove_watch[goog.typeOf(x__2322__auto____6718)]);
if(or__3824__auto____6719)
{return or__3824__auto____6719;
} else
{var or__3824__auto____6720 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6725 = coll;
if(and__3822__auto____6725)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6725;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2322__auto____6726 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6727 = (cljs.core._as_transient[goog.typeOf(x__2322__auto____6726)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6733 = tcoll;
if(and__3822__auto____6733)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6733;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2322__auto____6734 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6735 = (cljs.core._conj_BANG_[goog.typeOf(x__2322__auto____6734)]);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{var or__3824__auto____6736 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6741 = tcoll;
if(and__3822__auto____6741)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6741;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2322__auto____6742 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6743 = (cljs.core._persistent_BANG_[goog.typeOf(x__2322__auto____6742)]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{var or__3824__auto____6744 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6749 = tcoll;
if(and__3822__auto____6749)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6749;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2322__auto____6750 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6751 = (cljs.core._assoc_BANG_[goog.typeOf(x__2322__auto____6750)]);
if(or__3824__auto____6751)
{return or__3824__auto____6751;
} else
{var or__3824__auto____6752 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6757 = tcoll;
if(and__3822__auto____6757)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6757;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2322__auto____6758 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6759 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2322__auto____6758)]);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{var or__3824__auto____6760 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6765 = tcoll;
if(and__3822__auto____6765)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6765;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2322__auto____6766 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6767 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2322__auto____6766)]);
if(or__3824__auto____6767)
{return or__3824__auto____6767;
} else
{var or__3824__auto____6768 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6773 = tcoll;
if(and__3822__auto____6773)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6773;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2322__auto____6774 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6775 = (cljs.core._pop_BANG_[goog.typeOf(x__2322__auto____6774)]);
if(or__3824__auto____6775)
{return or__3824__auto____6775;
} else
{var or__3824__auto____6776 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6781 = tcoll;
if(and__3822__auto____6781)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6781;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2322__auto____6782 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6783 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2322__auto____6782)]);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{var or__3824__auto____6784 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6784)
{return or__3824__auto____6784;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6789 = x;
if(and__3822__auto____6789)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6789;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2322__auto____6790 = (((x == null))?null:x);
return (function (){var or__3824__auto____6791 = (cljs.core._compare[goog.typeOf(x__2322__auto____6790)]);
if(or__3824__auto____6791)
{return or__3824__auto____6791;
} else
{var or__3824__auto____6792 = (cljs.core._compare["_"]);
if(or__3824__auto____6792)
{return or__3824__auto____6792;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6797 = coll;
if(and__3822__auto____6797)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6797;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2322__auto____6798 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6799 = (cljs.core._drop_first[goog.typeOf(x__2322__auto____6798)]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{var or__3824__auto____6800 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6805 = coll;
if(and__3822__auto____6805)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6805;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2322__auto____6806 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6807 = (cljs.core._chunked_first[goog.typeOf(x__2322__auto____6806)]);
if(or__3824__auto____6807)
{return or__3824__auto____6807;
} else
{var or__3824__auto____6808 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6813 = coll;
if(and__3822__auto____6813)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6813;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2322__auto____6814 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6815 = (cljs.core._chunked_rest[goog.typeOf(x__2322__auto____6814)]);
if(or__3824__auto____6815)
{return or__3824__auto____6815;
} else
{var or__3824__auto____6816 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6816)
{return or__3824__auto____6816;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6821 = coll;
if(and__3822__auto____6821)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6821;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2322__auto____6822 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6823 = (cljs.core._chunked_next[goog.typeOf(x__2322__auto____6822)]);
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{var or__3824__auto____6824 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6826 = (x === y);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6827__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6828 = y;
var G__6829 = cljs.core.first.call(null,more);
var G__6830 = cljs.core.next.call(null,more);
x = G__6828;
y = G__6829;
more = G__6830;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6827 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6827__delegate.call(this, x, y, more);
};
G__6827.cljs$lang$maxFixedArity = 2;
G__6827.cljs$lang$applyTo = (function (arglist__6831){
var x = cljs.core.first(arglist__6831);
var y = cljs.core.first(cljs.core.next(arglist__6831));
var more = cljs.core.rest(cljs.core.next(arglist__6831));
return G__6827__delegate(x, y, more);
});
G__6827.cljs$lang$arity$variadic = G__6827__delegate;
return G__6827;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6832 = null;
var G__6832__2 = (function (o,k){
return null;
});
var G__6832__3 = (function (o,k,not_found){
return not_found;
});
G__6832 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6832__2.call(this,o,k);
case 3:
return G__6832__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6832;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6833 = null;
var G__6833__2 = (function (_,f){
return f.call(null);
});
var G__6833__3 = (function (_,f,start){
return start;
});
G__6833 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6833__2.call(this,_,f);
case 3:
return G__6833__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6833;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6834 = null;
var G__6834__2 = (function (_,n){
return null;
});
var G__6834__3 = (function (_,n,not_found){
return not_found;
});
G__6834 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6834__2.call(this,_,n);
case 3:
return G__6834__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6834;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____6835 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6835)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6835;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6848 = cljs.core._count.call(null,cicoll);
if((cnt__6848 === 0))
{return f.call(null);
} else
{var val__6849 = cljs.core._nth.call(null,cicoll,0);
var n__6850 = 1;
while(true){
if((n__6850 < cnt__6848))
{var nval__6851 = f.call(null,val__6849,cljs.core._nth.call(null,cicoll,n__6850));
if(cljs.core.reduced_QMARK_.call(null,nval__6851))
{return cljs.core.deref.call(null,nval__6851);
} else
{{
var G__6860 = nval__6851;
var G__6861 = (n__6850 + 1);
val__6849 = G__6860;
n__6850 = G__6861;
continue;
}
}
} else
{return val__6849;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6852 = cljs.core._count.call(null,cicoll);
var val__6853 = val;
var n__6854 = 0;
while(true){
if((n__6854 < cnt__6852))
{var nval__6855 = f.call(null,val__6853,cljs.core._nth.call(null,cicoll,n__6854));
if(cljs.core.reduced_QMARK_.call(null,nval__6855))
{return cljs.core.deref.call(null,nval__6855);
} else
{{
var G__6862 = nval__6855;
var G__6863 = (n__6854 + 1);
val__6853 = G__6862;
n__6854 = G__6863;
continue;
}
}
} else
{return val__6853;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6856 = cljs.core._count.call(null,cicoll);
var val__6857 = val;
var n__6858 = idx;
while(true){
if((n__6858 < cnt__6856))
{var nval__6859 = f.call(null,val__6857,cljs.core._nth.call(null,cicoll,n__6858));
if(cljs.core.reduced_QMARK_.call(null,nval__6859))
{return cljs.core.deref.call(null,nval__6859);
} else
{{
var G__6864 = nval__6859;
var G__6865 = (n__6858 + 1);
val__6857 = G__6864;
n__6858 = G__6865;
continue;
}
}
} else
{return val__6857;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6878 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6879 = (arr[0]);
var n__6880 = 1;
while(true){
if((n__6880 < cnt__6878))
{var nval__6881 = f.call(null,val__6879,(arr[n__6880]));
if(cljs.core.reduced_QMARK_.call(null,nval__6881))
{return cljs.core.deref.call(null,nval__6881);
} else
{{
var G__6890 = nval__6881;
var G__6891 = (n__6880 + 1);
val__6879 = G__6890;
n__6880 = G__6891;
continue;
}
}
} else
{return val__6879;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6882 = arr.length;
var val__6883 = val;
var n__6884 = 0;
while(true){
if((n__6884 < cnt__6882))
{var nval__6885 = f.call(null,val__6883,(arr[n__6884]));
if(cljs.core.reduced_QMARK_.call(null,nval__6885))
{return cljs.core.deref.call(null,nval__6885);
} else
{{
var G__6892 = nval__6885;
var G__6893 = (n__6884 + 1);
val__6883 = G__6892;
n__6884 = G__6893;
continue;
}
}
} else
{return val__6883;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6886 = arr.length;
var val__6887 = val;
var n__6888 = idx;
while(true){
if((n__6888 < cnt__6886))
{var nval__6889 = f.call(null,val__6887,(arr[n__6888]));
if(cljs.core.reduced_QMARK_.call(null,nval__6889))
{return cljs.core.deref.call(null,nval__6889);
} else
{{
var G__6894 = nval__6889;
var G__6895 = (n__6888 + 1);
val__6887 = G__6894;
n__6888 = G__6895;
continue;
}
}
} else
{return val__6887;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6896 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6897 = this;
if(((this__6897.i + 1) < this__6897.a.length))
{return (new cljs.core.IndexedSeq(this__6897.a,(this__6897.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6898 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6899 = this;
var c__6900 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6900 > 0))
{return (new cljs.core.RSeq(coll,(c__6900 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6901 = this;
var this__6902 = this;
return cljs.core.pr_str.call(null,this__6902);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6903 = this;
if(cljs.core.counted_QMARK_.call(null,this__6903.a))
{return cljs.core.ci_reduce.call(null,this__6903.a,f,(this__6903.a[this__6903.i]),(this__6903.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6903.a[this__6903.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6904 = this;
if(cljs.core.counted_QMARK_.call(null,this__6904.a))
{return cljs.core.ci_reduce.call(null,this__6904.a,f,start,this__6904.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6905 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6906 = this;
return (this__6906.a.length - this__6906.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6907 = this;
return (this__6907.a[this__6907.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6908 = this;
if(((this__6908.i + 1) < this__6908.a.length))
{return (new cljs.core.IndexedSeq(this__6908.a,(this__6908.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6909 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6910 = this;
var i__6911 = (n + this__6910.i);
if((i__6911 < this__6910.a.length))
{return (this__6910.a[i__6911]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6912 = this;
var i__6913 = (n + this__6912.i);
if((i__6913 < this__6912.a.length))
{return (this__6912.a[i__6913]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6914 = null;
var G__6914__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6914__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6914 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6914__2.call(this,array,f);
case 3:
return G__6914__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6914;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6915 = null;
var G__6915__2 = (function (array,k){
return (array[k]);
});
var G__6915__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6915 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6915__2.call(this,array,k);
case 3:
return G__6915__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6915;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6916 = null;
var G__6916__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6916__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6916 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6916__2.call(this,array,n);
case 3:
return G__6916__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6916;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6917 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6918 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6919 = this;
var this__6920 = this;
return cljs.core.pr_str.call(null,this__6920);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6921 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6922 = this;
return (this__6922.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6923 = this;
return cljs.core._nth.call(null,this__6923.ci,this__6923.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6924 = this;
if((this__6924.i > 0))
{return (new cljs.core.RSeq(this__6924.ci,(this__6924.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6925 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6926 = this;
return (new cljs.core.RSeq(this__6926.ci,this__6926.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6927 = this;
return this__6927.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6931__6932 = coll;
if(G__6931__6932)
{if((function (){var or__3824__auto____6933 = (G__6931__6932.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{return G__6931__6932.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6931__6932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6931__6932);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6931__6932);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6938__6939 = coll;
if(G__6938__6939)
{if((function (){var or__3824__auto____6940 = (G__6938__6939.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{return G__6938__6939.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6938__6939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6938__6939);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6938__6939);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6941 = cljs.core.seq.call(null,coll);
if((s__6941 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6941);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6946__6947 = coll;
if(G__6946__6947)
{if((function (){var or__3824__auto____6948 = (G__6946__6947.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{return G__6946__6947.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6946__6947.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6946__6947);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6946__6947);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6949 = cljs.core.seq.call(null,coll);
if(!((s__6949 == null)))
{return cljs.core._rest.call(null,s__6949);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6953__6954 = coll;
if(G__6953__6954)
{if((function (){var or__3824__auto____6955 = (G__6953__6954.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6955)
{return or__3824__auto____6955;
} else
{return G__6953__6954.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6953__6954.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6953__6954);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6953__6954);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6957 = cljs.core.next.call(null,s);
if(!((sn__6957 == null)))
{{
var G__6958 = sn__6957;
s = G__6958;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6959__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6960 = conj.call(null,coll,x);
var G__6961 = cljs.core.first.call(null,xs);
var G__6962 = cljs.core.next.call(null,xs);
coll = G__6960;
x = G__6961;
xs = G__6962;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6959 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6959__delegate.call(this, coll, x, xs);
};
G__6959.cljs$lang$maxFixedArity = 2;
G__6959.cljs$lang$applyTo = (function (arglist__6963){
var coll = cljs.core.first(arglist__6963);
var x = cljs.core.first(cljs.core.next(arglist__6963));
var xs = cljs.core.rest(cljs.core.next(arglist__6963));
return G__6959__delegate(coll, x, xs);
});
G__6959.cljs$lang$arity$variadic = G__6959__delegate;
return G__6959;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6966 = cljs.core.seq.call(null,coll);
var acc__6967 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6966))
{return (acc__6967 + cljs.core._count.call(null,s__6966));
} else
{{
var G__6968 = cljs.core.next.call(null,s__6966);
var G__6969 = (acc__6967 + 1);
s__6966 = G__6968;
acc__6967 = G__6969;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6976__6977 = coll;
if(G__6976__6977)
{if((function (){var or__3824__auto____6978 = (G__6976__6977.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{return G__6976__6977.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6976__6977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6976__6977);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6976__6977);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6979__6980 = coll;
if(G__6979__6980)
{if((function (){var or__3824__auto____6981 = (G__6979__6980.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{return G__6979__6980.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6979__6980.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6979__6980);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6979__6980);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6984__delegate = function (coll,k,v,kvs){
while(true){
var ret__6983 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6985 = ret__6983;
var G__6986 = cljs.core.first.call(null,kvs);
var G__6987 = cljs.core.second.call(null,kvs);
var G__6988 = cljs.core.nnext.call(null,kvs);
coll = G__6985;
k = G__6986;
v = G__6987;
kvs = G__6988;
continue;
}
} else
{return ret__6983;
}
break;
}
};
var G__6984 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6984__delegate.call(this, coll, k, v, kvs);
};
G__6984.cljs$lang$maxFixedArity = 3;
G__6984.cljs$lang$applyTo = (function (arglist__6989){
var coll = cljs.core.first(arglist__6989);
var k = cljs.core.first(cljs.core.next(arglist__6989));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6989)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6989)));
return G__6984__delegate(coll, k, v, kvs);
});
G__6984.cljs$lang$arity$variadic = G__6984__delegate;
return G__6984;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6992__delegate = function (coll,k,ks){
while(true){
var ret__6991 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6993 = ret__6991;
var G__6994 = cljs.core.first.call(null,ks);
var G__6995 = cljs.core.next.call(null,ks);
coll = G__6993;
k = G__6994;
ks = G__6995;
continue;
}
} else
{return ret__6991;
}
break;
}
};
var G__6992 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6992__delegate.call(this, coll, k, ks);
};
G__6992.cljs$lang$maxFixedArity = 2;
G__6992.cljs$lang$applyTo = (function (arglist__6996){
var coll = cljs.core.first(arglist__6996);
var k = cljs.core.first(cljs.core.next(arglist__6996));
var ks = cljs.core.rest(cljs.core.next(arglist__6996));
return G__6992__delegate(coll, k, ks);
});
G__6992.cljs$lang$arity$variadic = G__6992__delegate;
return G__6992;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7000__7001 = o;
if(G__7000__7001)
{if((function (){var or__3824__auto____7002 = (G__7000__7001.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{return G__7000__7001.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7000__7001.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7000__7001);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7000__7001);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7005__delegate = function (coll,k,ks){
while(true){
var ret__7004 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7006 = ret__7004;
var G__7007 = cljs.core.first.call(null,ks);
var G__7008 = cljs.core.next.call(null,ks);
coll = G__7006;
k = G__7007;
ks = G__7008;
continue;
}
} else
{return ret__7004;
}
break;
}
};
var G__7005 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7005__delegate.call(this, coll, k, ks);
};
G__7005.cljs$lang$maxFixedArity = 2;
G__7005.cljs$lang$applyTo = (function (arglist__7009){
var coll = cljs.core.first(arglist__7009);
var k = cljs.core.first(cljs.core.next(arglist__7009));
var ks = cljs.core.rest(cljs.core.next(arglist__7009));
return G__7005__delegate(coll, k, ks);
});
G__7005.cljs$lang$arity$variadic = G__7005__delegate;
return G__7005;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7011 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7011);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7011;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7013 = (cljs.core.string_hash_cache[k]);
if(!((h__7013 == null)))
{return h__7013;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7015 = goog.isString(o);
if(and__3822__auto____7015)
{return check_cache;
} else
{return and__3822__auto____7015;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7019__7020 = x;
if(G__7019__7020)
{if((function (){var or__3824__auto____7021 = (G__7019__7020.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7021)
{return or__3824__auto____7021;
} else
{return G__7019__7020.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7019__7020.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7019__7020);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7019__7020);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7025__7026 = x;
if(G__7025__7026)
{if((function (){var or__3824__auto____7027 = (G__7025__7026.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7027)
{return or__3824__auto____7027;
} else
{return G__7025__7026.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7025__7026.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7025__7026);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7025__7026);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7031__7032 = x;
if(G__7031__7032)
{if((function (){var or__3824__auto____7033 = (G__7031__7032.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{return G__7031__7032.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7031__7032.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7031__7032);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7031__7032);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7037__7038 = x;
if(G__7037__7038)
{if((function (){var or__3824__auto____7039 = (G__7037__7038.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7039)
{return or__3824__auto____7039;
} else
{return G__7037__7038.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7037__7038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7037__7038);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7037__7038);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7043__7044 = x;
if(G__7043__7044)
{if((function (){var or__3824__auto____7045 = (G__7043__7044.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7045)
{return or__3824__auto____7045;
} else
{return G__7043__7044.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7043__7044.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7043__7044);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7043__7044);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7049__7050 = x;
if(G__7049__7050)
{if((function (){var or__3824__auto____7051 = (G__7049__7050.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7051)
{return or__3824__auto____7051;
} else
{return G__7049__7050.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7049__7050.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7049__7050);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7049__7050);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7055__7056 = x;
if(G__7055__7056)
{if((function (){var or__3824__auto____7057 = (G__7055__7056.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{return G__7055__7056.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7055__7056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7055__7056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7055__7056);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7061__7062 = x;
if(G__7061__7062)
{if((function (){var or__3824__auto____7063 = (G__7061__7062.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7063)
{return or__3824__auto____7063;
} else
{return G__7061__7062.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7061__7062.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7061__7062);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7061__7062);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7067__7068 = x;
if(G__7067__7068)
{if((function (){var or__3824__auto____7069 = (G__7067__7068.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7069)
{return or__3824__auto____7069;
} else
{return G__7067__7068.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7067__7068.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7067__7068);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7067__7068);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7073__7074 = x;
if(G__7073__7074)
{if(cljs.core.truth_((function (){var or__3824__auto____7075 = null;
if(cljs.core.truth_(or__3824__auto____7075))
{return or__3824__auto____7075;
} else
{return G__7073__7074.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7073__7074.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7073__7074);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7073__7074);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7076__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7076 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7076__delegate.call(this, keyvals);
};
G__7076.cljs$lang$maxFixedArity = 0;
G__7076.cljs$lang$applyTo = (function (arglist__7077){
var keyvals = cljs.core.seq(arglist__7077);;
return G__7076__delegate(keyvals);
});
G__7076.cljs$lang$arity$variadic = G__7076__delegate;
return G__7076;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7079 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7079.push(key);
}));
return keys__7079;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7083 = i;
var j__7084 = j;
var len__7085 = len;
while(true){
if((len__7085 === 0))
{return to;
} else
{(to[j__7084] = (from[i__7083]));
{
var G__7086 = (i__7083 + 1);
var G__7087 = (j__7084 + 1);
var G__7088 = (len__7085 - 1);
i__7083 = G__7086;
j__7084 = G__7087;
len__7085 = G__7088;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7092 = (i + (len - 1));
var j__7093 = (j + (len - 1));
var len__7094 = len;
while(true){
if((len__7094 === 0))
{return to;
} else
{(to[j__7093] = (from[i__7092]));
{
var G__7095 = (i__7092 - 1);
var G__7096 = (j__7093 - 1);
var G__7097 = (len__7094 - 1);
i__7092 = G__7095;
j__7093 = G__7096;
len__7094 = G__7097;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7101__7102 = s;
if(G__7101__7102)
{if((function (){var or__3824__auto____7103 = (G__7101__7102.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7103)
{return or__3824__auto____7103;
} else
{return G__7101__7102.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7101__7102.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7101__7102);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7101__7102);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7107__7108 = s;
if(G__7107__7108)
{if((function (){var or__3824__auto____7109 = (G__7107__7108.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7109)
{return or__3824__auto____7109;
} else
{return G__7107__7108.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7107__7108.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7107__7108);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7107__7108);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7112 = goog.isString(x);
if(and__3822__auto____7112)
{return !((function (){var or__3824__auto____7113 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7112;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7115 = goog.isString(x);
if(and__3822__auto____7115)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7115;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7117 = goog.isString(x);
if(and__3822__auto____7117)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7117;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7122 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7122)
{return or__3824__auto____7122;
} else
{var G__7123__7124 = f;
if(G__7123__7124)
{if((function (){var or__3824__auto____7125 = (G__7123__7124.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7125)
{return or__3824__auto____7125;
} else
{return G__7123__7124.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7123__7124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7123__7124);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7123__7124);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7127 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7127)
{return (n == n.toFixed());
} else
{return and__3822__auto____7127;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7130 = coll;
if(cljs.core.truth_(and__3822__auto____7130))
{var and__3822__auto____7131 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7131)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7131;
}
} else
{return and__3822__auto____7130;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7140__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7136 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7137 = more;
while(true){
var x__7138 = cljs.core.first.call(null,xs__7137);
var etc__7139 = cljs.core.next.call(null,xs__7137);
if(cljs.core.truth_(xs__7137))
{if(cljs.core.contains_QMARK_.call(null,s__7136,x__7138))
{return false;
} else
{{
var G__7141 = cljs.core.conj.call(null,s__7136,x__7138);
var G__7142 = etc__7139;
s__7136 = G__7141;
xs__7137 = G__7142;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7140__delegate.call(this, x, y, more);
};
G__7140.cljs$lang$maxFixedArity = 2;
G__7140.cljs$lang$applyTo = (function (arglist__7143){
var x = cljs.core.first(arglist__7143);
var y = cljs.core.first(cljs.core.next(arglist__7143));
var more = cljs.core.rest(cljs.core.next(arglist__7143));
return G__7140__delegate(x, y, more);
});
G__7140.cljs$lang$arity$variadic = G__7140__delegate;
return G__7140;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7147__7148 = x;
if(G__7147__7148)
{if(cljs.core.truth_((function (){var or__3824__auto____7149 = null;
if(cljs.core.truth_(or__3824__auto____7149))
{return or__3824__auto____7149;
} else
{return G__7147__7148.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7147__7148.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7147__7148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7147__7148);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7154 = cljs.core.count.call(null,xs);
var yl__7155 = cljs.core.count.call(null,ys);
if((xl__7154 < yl__7155))
{return -1;
} else
{if((xl__7154 > yl__7155))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7154,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7156 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7157 = (d__7156 === 0);
if(and__3822__auto____7157)
{return ((n + 1) < len);
} else
{return and__3822__auto____7157;
}
})())
{{
var G__7158 = xs;
var G__7159 = ys;
var G__7160 = len;
var G__7161 = (n + 1);
xs = G__7158;
ys = G__7159;
len = G__7160;
n = G__7161;
continue;
}
} else
{return d__7156;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7163 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7163))
{return r__7163;
} else
{if(cljs.core.truth_(r__7163))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7165 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7165,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7165);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7171 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7171)
{var s__7172 = temp__3971__auto____7171;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7172),cljs.core.next.call(null,s__7172));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7173 = val;
var coll__7174 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7174)
{var nval__7175 = f.call(null,val__7173,cljs.core.first.call(null,coll__7174));
if(cljs.core.reduced_QMARK_.call(null,nval__7175))
{return cljs.core.deref.call(null,nval__7175);
} else
{{
var G__7176 = nval__7175;
var G__7177 = cljs.core.next.call(null,coll__7174);
val__7173 = G__7176;
coll__7174 = G__7177;
continue;
}
}
} else
{return val__7173;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7179 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7179);
return cljs.core.vec.call(null,a__7179);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7186__7187 = coll;
if(G__7186__7187)
{if((function (){var or__3824__auto____7188 = (G__7186__7187.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7188)
{return or__3824__auto____7188;
} else
{return G__7186__7187.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7186__7187.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7186__7187);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7186__7187);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7189__7190 = coll;
if(G__7189__7190)
{if((function (){var or__3824__auto____7191 = (G__7189__7190.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7191)
{return or__3824__auto____7191;
} else
{return G__7189__7190.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7189__7190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7189__7190);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7189__7190);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7192 = this;
return this__7192.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7193__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7193__delegate.call(this, x, y, more);
};
G__7193.cljs$lang$maxFixedArity = 2;
G__7193.cljs$lang$applyTo = (function (arglist__7194){
var x = cljs.core.first(arglist__7194);
var y = cljs.core.first(cljs.core.next(arglist__7194));
var more = cljs.core.rest(cljs.core.next(arglist__7194));
return G__7193__delegate(x, y, more);
});
G__7193.cljs$lang$arity$variadic = G__7193__delegate;
return G__7193;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7195__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7195 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7195__delegate.call(this, x, y, more);
};
G__7195.cljs$lang$maxFixedArity = 2;
G__7195.cljs$lang$applyTo = (function (arglist__7196){
var x = cljs.core.first(arglist__7196);
var y = cljs.core.first(cljs.core.next(arglist__7196));
var more = cljs.core.rest(cljs.core.next(arglist__7196));
return G__7195__delegate(x, y, more);
});
G__7195.cljs$lang$arity$variadic = G__7195__delegate;
return G__7195;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7197__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7197__delegate.call(this, x, y, more);
};
G__7197.cljs$lang$maxFixedArity = 2;
G__7197.cljs$lang$applyTo = (function (arglist__7198){
var x = cljs.core.first(arglist__7198);
var y = cljs.core.first(cljs.core.next(arglist__7198));
var more = cljs.core.rest(cljs.core.next(arglist__7198));
return G__7197__delegate(x, y, more);
});
G__7197.cljs$lang$arity$variadic = G__7197__delegate;
return G__7197;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7199__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7199 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7199__delegate.call(this, x, y, more);
};
G__7199.cljs$lang$maxFixedArity = 2;
G__7199.cljs$lang$applyTo = (function (arglist__7200){
var x = cljs.core.first(arglist__7200);
var y = cljs.core.first(cljs.core.next(arglist__7200));
var more = cljs.core.rest(cljs.core.next(arglist__7200));
return G__7199__delegate(x, y, more);
});
G__7199.cljs$lang$arity$variadic = G__7199__delegate;
return G__7199;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7201__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7202 = y;
var G__7203 = cljs.core.first.call(null,more);
var G__7204 = cljs.core.next.call(null,more);
x = G__7202;
y = G__7203;
more = G__7204;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7201 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7201__delegate.call(this, x, y, more);
};
G__7201.cljs$lang$maxFixedArity = 2;
G__7201.cljs$lang$applyTo = (function (arglist__7205){
var x = cljs.core.first(arglist__7205);
var y = cljs.core.first(cljs.core.next(arglist__7205));
var more = cljs.core.rest(cljs.core.next(arglist__7205));
return G__7201__delegate(x, y, more);
});
G__7201.cljs$lang$arity$variadic = G__7201__delegate;
return G__7201;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7206__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7207 = y;
var G__7208 = cljs.core.first.call(null,more);
var G__7209 = cljs.core.next.call(null,more);
x = G__7207;
y = G__7208;
more = G__7209;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7206__delegate.call(this, x, y, more);
};
G__7206.cljs$lang$maxFixedArity = 2;
G__7206.cljs$lang$applyTo = (function (arglist__7210){
var x = cljs.core.first(arglist__7210);
var y = cljs.core.first(cljs.core.next(arglist__7210));
var more = cljs.core.rest(cljs.core.next(arglist__7210));
return G__7206__delegate(x, y, more);
});
G__7206.cljs$lang$arity$variadic = G__7206__delegate;
return G__7206;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7211__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7212 = y;
var G__7213 = cljs.core.first.call(null,more);
var G__7214 = cljs.core.next.call(null,more);
x = G__7212;
y = G__7213;
more = G__7214;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7211 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7211__delegate.call(this, x, y, more);
};
G__7211.cljs$lang$maxFixedArity = 2;
G__7211.cljs$lang$applyTo = (function (arglist__7215){
var x = cljs.core.first(arglist__7215);
var y = cljs.core.first(cljs.core.next(arglist__7215));
var more = cljs.core.rest(cljs.core.next(arglist__7215));
return G__7211__delegate(x, y, more);
});
G__7211.cljs$lang$arity$variadic = G__7211__delegate;
return G__7211;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7216__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7217 = y;
var G__7218 = cljs.core.first.call(null,more);
var G__7219 = cljs.core.next.call(null,more);
x = G__7217;
y = G__7218;
more = G__7219;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7216__delegate.call(this, x, y, more);
};
G__7216.cljs$lang$maxFixedArity = 2;
G__7216.cljs$lang$applyTo = (function (arglist__7220){
var x = cljs.core.first(arglist__7220);
var y = cljs.core.first(cljs.core.next(arglist__7220));
var more = cljs.core.rest(cljs.core.next(arglist__7220));
return G__7216__delegate(x, y, more);
});
G__7216.cljs$lang$arity$variadic = G__7216__delegate;
return G__7216;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7221__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7221__delegate.call(this, x, y, more);
};
G__7221.cljs$lang$maxFixedArity = 2;
G__7221.cljs$lang$applyTo = (function (arglist__7222){
var x = cljs.core.first(arglist__7222);
var y = cljs.core.first(cljs.core.next(arglist__7222));
var more = cljs.core.rest(cljs.core.next(arglist__7222));
return G__7221__delegate(x, y, more);
});
G__7221.cljs$lang$arity$variadic = G__7221__delegate;
return G__7221;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7223__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7223 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7223__delegate.call(this, x, y, more);
};
G__7223.cljs$lang$maxFixedArity = 2;
G__7223.cljs$lang$applyTo = (function (arglist__7224){
var x = cljs.core.first(arglist__7224);
var y = cljs.core.first(cljs.core.next(arglist__7224));
var more = cljs.core.rest(cljs.core.next(arglist__7224));
return G__7223__delegate(x, y, more);
});
G__7223.cljs$lang$arity$variadic = G__7223__delegate;
return G__7223;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7226 = (n % d);
return cljs.core.fix.call(null,((n - rem__7226) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7228 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7228));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7231 = (v - ((v >> 1) & 1431655765));
var v__7232 = ((v__7231 & 858993459) + ((v__7231 >> 2) & 858993459));
return ((((v__7232 + (v__7232 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7233__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7234 = y;
var G__7235 = cljs.core.first.call(null,more);
var G__7236 = cljs.core.next.call(null,more);
x = G__7234;
y = G__7235;
more = G__7236;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7233__delegate.call(this, x, y, more);
};
G__7233.cljs$lang$maxFixedArity = 2;
G__7233.cljs$lang$applyTo = (function (arglist__7237){
var x = cljs.core.first(arglist__7237);
var y = cljs.core.first(cljs.core.next(arglist__7237));
var more = cljs.core.rest(cljs.core.next(arglist__7237));
return G__7233__delegate(x, y, more);
});
G__7233.cljs$lang$arity$variadic = G__7233__delegate;
return G__7233;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7241 = n;
var xs__7242 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7243 = xs__7242;
if(and__3822__auto____7243)
{return (n__7241 > 0);
} else
{return and__3822__auto____7243;
}
})()))
{{
var G__7244 = (n__7241 - 1);
var G__7245 = cljs.core.next.call(null,xs__7242);
n__7241 = G__7244;
xs__7242 = G__7245;
continue;
}
} else
{return xs__7242;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7246__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7247 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7248 = cljs.core.next.call(null,more);
sb = G__7247;
more = G__7248;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7246 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7246__delegate.call(this, x, ys);
};
G__7246.cljs$lang$maxFixedArity = 1;
G__7246.cljs$lang$applyTo = (function (arglist__7249){
var x = cljs.core.first(arglist__7249);
var ys = cljs.core.rest(arglist__7249);
return G__7246__delegate(x, ys);
});
G__7246.cljs$lang$arity$variadic = G__7246__delegate;
return G__7246;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7250__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7251 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7252 = cljs.core.next.call(null,more);
sb = G__7251;
more = G__7252;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7250 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7250__delegate.call(this, x, ys);
};
G__7250.cljs$lang$maxFixedArity = 1;
G__7250.cljs$lang$applyTo = (function (arglist__7253){
var x = cljs.core.first(arglist__7253);
var ys = cljs.core.rest(arglist__7253);
return G__7250__delegate(x, ys);
});
G__7250.cljs$lang$arity$variadic = G__7250__delegate;
return G__7250;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7254){
var fmt = cljs.core.first(arglist__7254);
var args = cljs.core.rest(arglist__7254);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7257 = cljs.core.seq.call(null,x);
var ys__7258 = cljs.core.seq.call(null,y);
while(true){
if((xs__7257 == null))
{return (ys__7258 == null);
} else
{if((ys__7258 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7257),cljs.core.first.call(null,ys__7258)))
{{
var G__7259 = cljs.core.next.call(null,xs__7257);
var G__7260 = cljs.core.next.call(null,ys__7258);
xs__7257 = G__7259;
ys__7258 = G__7260;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7261_SHARP_,p2__7262_SHARP_){
return cljs.core.hash_combine.call(null,p1__7261_SHARP_,cljs.core.hash.call(null,p2__7262_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7266 = 0;
var s__7267 = cljs.core.seq.call(null,m);
while(true){
if(s__7267)
{var e__7268 = cljs.core.first.call(null,s__7267);
{
var G__7269 = ((h__7266 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7268)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7268)))) % 4503599627370496);
var G__7270 = cljs.core.next.call(null,s__7267);
h__7266 = G__7269;
s__7267 = G__7270;
continue;
}
} else
{return h__7266;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7274 = 0;
var s__7275 = cljs.core.seq.call(null,s);
while(true){
if(s__7275)
{var e__7276 = cljs.core.first.call(null,s__7275);
{
var G__7277 = ((h__7274 + cljs.core.hash.call(null,e__7276)) % 4503599627370496);
var G__7278 = cljs.core.next.call(null,s__7275);
h__7274 = G__7277;
s__7275 = G__7278;
continue;
}
} else
{return h__7274;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7299__7300 = cljs.core.seq.call(null,fn_map);
if(G__7299__7300)
{var G__7302__7304 = cljs.core.first.call(null,G__7299__7300);
var vec__7303__7305 = G__7302__7304;
var key_name__7306 = cljs.core.nth.call(null,vec__7303__7305,0,null);
var f__7307 = cljs.core.nth.call(null,vec__7303__7305,1,null);
var G__7299__7308 = G__7299__7300;
var G__7302__7309 = G__7302__7304;
var G__7299__7310 = G__7299__7308;
while(true){
var vec__7311__7312 = G__7302__7309;
var key_name__7313 = cljs.core.nth.call(null,vec__7311__7312,0,null);
var f__7314 = cljs.core.nth.call(null,vec__7311__7312,1,null);
var G__7299__7315 = G__7299__7310;
var str_name__7316 = cljs.core.name.call(null,key_name__7313);
(obj[str_name__7316] = f__7314);
var temp__3974__auto____7317 = cljs.core.next.call(null,G__7299__7315);
if(temp__3974__auto____7317)
{var G__7299__7318 = temp__3974__auto____7317;
{
var G__7319 = cljs.core.first.call(null,G__7299__7318);
var G__7320 = G__7299__7318;
G__7302__7309 = G__7319;
G__7299__7310 = G__7320;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7321 = this;
var h__2151__auto____7322 = this__7321.__hash;
if(!((h__2151__auto____7322 == null)))
{return h__2151__auto____7322;
} else
{var h__2151__auto____7323 = cljs.core.hash_coll.call(null,coll);
this__7321.__hash = h__2151__auto____7323;
return h__2151__auto____7323;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7324 = this;
if((this__7324.count === 1))
{return null;
} else
{return this__7324.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7325 = this;
return (new cljs.core.List(this__7325.meta,o,coll,(this__7325.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7326 = this;
var this__7327 = this;
return cljs.core.pr_str.call(null,this__7327);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7328 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7329 = this;
return this__7329.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7330 = this;
return this__7330.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7331 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7332 = this;
return this__7332.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7333 = this;
if((this__7333.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7333.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7334 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7335 = this;
return (new cljs.core.List(meta,this__7335.first,this__7335.rest,this__7335.count,this__7335.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7336 = this;
return this__7336.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7337 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7338 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7339 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7340 = this;
return (new cljs.core.List(this__7340.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7341 = this;
var this__7342 = this;
return cljs.core.pr_str.call(null,this__7342);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7343 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7344 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7345 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7346 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7347 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7348 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7349 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7350 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7351 = this;
return this__7351.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7352 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7356__7357 = coll;
if(G__7356__7357)
{if((function (){var or__3824__auto____7358 = (G__7356__7357.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7358)
{return or__3824__auto____7358;
} else
{return G__7356__7357.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7356__7357.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7356__7357);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7356__7357);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7359__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7359 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7359__delegate.call(this, x, y, z, items);
};
G__7359.cljs$lang$maxFixedArity = 3;
G__7359.cljs$lang$applyTo = (function (arglist__7360){
var x = cljs.core.first(arglist__7360);
var y = cljs.core.first(cljs.core.next(arglist__7360));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7360)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7360)));
return G__7359__delegate(x, y, z, items);
});
G__7359.cljs$lang$arity$variadic = G__7359__delegate;
return G__7359;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7361 = this;
var h__2151__auto____7362 = this__7361.__hash;
if(!((h__2151__auto____7362 == null)))
{return h__2151__auto____7362;
} else
{var h__2151__auto____7363 = cljs.core.hash_coll.call(null,coll);
this__7361.__hash = h__2151__auto____7363;
return h__2151__auto____7363;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7364 = this;
if((this__7364.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7364.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7365 = this;
return (new cljs.core.Cons(null,o,coll,this__7365.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7366 = this;
var this__7367 = this;
return cljs.core.pr_str.call(null,this__7367);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7368 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7369 = this;
return this__7369.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7370 = this;
if((this__7370.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7370.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7372 = this;
return (new cljs.core.Cons(meta,this__7372.first,this__7372.rest,this__7372.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7373 = this;
return this__7373.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7374 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7374.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7379 = (coll == null);
if(or__3824__auto____7379)
{return or__3824__auto____7379;
} else
{var G__7380__7381 = coll;
if(G__7380__7381)
{if((function (){var or__3824__auto____7382 = (G__7380__7381.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7382)
{return or__3824__auto____7382;
} else
{return G__7380__7381.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7380__7381.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7380__7381);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7380__7381);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7386__7387 = x;
if(G__7386__7387)
{if((function (){var or__3824__auto____7388 = (G__7386__7387.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7388)
{return or__3824__auto____7388;
} else
{return G__7386__7387.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7386__7387.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7386__7387);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7386__7387);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7389 = null;
var G__7389__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7389__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7389 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7389__2.call(this,string,f);
case 3:
return G__7389__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7389;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7390 = null;
var G__7390__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7390__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7390 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7390__2.call(this,string,k);
case 3:
return G__7390__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7390;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7391 = null;
var G__7391__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7391__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7391 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7391__2.call(this,string,n);
case 3:
return G__7391__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7391;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7403 = null;
var G__7403__2 = (function (this_sym7394,coll){
var this__7396 = this;
var this_sym7394__7397 = this;
var ___7398 = this_sym7394__7397;
if((coll == null))
{return null;
} else
{var strobj__7399 = coll.strobj;
if((strobj__7399 == null))
{return cljs.core._lookup.call(null,coll,this__7396.k,null);
} else
{return (strobj__7399[this__7396.k]);
}
}
});
var G__7403__3 = (function (this_sym7395,coll,not_found){
var this__7396 = this;
var this_sym7395__7400 = this;
var ___7401 = this_sym7395__7400;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7396.k,not_found);
}
});
G__7403 = function(this_sym7395,coll,not_found){
switch(arguments.length){
case 2:
return G__7403__2.call(this,this_sym7395,coll);
case 3:
return G__7403__3.call(this,this_sym7395,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7403;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7392,args7393){
var this__7402 = this;
return this_sym7392.call.apply(this_sym7392,[this_sym7392].concat(args7393.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7412 = null;
var G__7412__2 = (function (this_sym7406,coll){
var this_sym7406__7408 = this;
var this__7409 = this_sym7406__7408;
return cljs.core._lookup.call(null,coll,this__7409.toString(),null);
});
var G__7412__3 = (function (this_sym7407,coll,not_found){
var this_sym7407__7410 = this;
var this__7411 = this_sym7407__7410;
return cljs.core._lookup.call(null,coll,this__7411.toString(),not_found);
});
G__7412 = function(this_sym7407,coll,not_found){
switch(arguments.length){
case 2:
return G__7412__2.call(this,this_sym7407,coll);
case 3:
return G__7412__3.call(this,this_sym7407,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7412;
})()
;
String.prototype.apply = (function (this_sym7404,args7405){
return this_sym7404.call.apply(this_sym7404,[this_sym7404].concat(args7405.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7414 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7414;
} else
{lazy_seq.x = x__7414.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7415 = this;
var h__2151__auto____7416 = this__7415.__hash;
if(!((h__2151__auto____7416 == null)))
{return h__2151__auto____7416;
} else
{var h__2151__auto____7417 = cljs.core.hash_coll.call(null,coll);
this__7415.__hash = h__2151__auto____7417;
return h__2151__auto____7417;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7418 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7419 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7420 = this;
var this__7421 = this;
return cljs.core.pr_str.call(null,this__7421);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7422 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7423 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7424 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7426 = this;
return (new cljs.core.LazySeq(meta,this__7426.realized,this__7426.x,this__7426.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7427 = this;
return this__7427.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7428 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7428.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7429 = this;
return this__7429.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7430 = this;
var ___7431 = this;
(this__7430.buf[this__7430.end] = o);
return this__7430.end = (this__7430.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7432 = this;
var ___7433 = this;
var ret__7434 = (new cljs.core.ArrayChunk(this__7432.buf,0,this__7432.end));
this__7432.buf = null;
return ret__7434;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7435 = this;
return cljs.core.array_reduce.call(null,this__7435.arr,f,(this__7435.arr[this__7435.off]),(this__7435.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7436 = this;
return cljs.core.array_reduce.call(null,this__7436.arr,f,start,this__7436.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7437 = this;
if((this__7437.off === this__7437.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7437.arr,(this__7437.off + 1),this__7437.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7438 = this;
return (this__7438.arr[(this__7438.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7439 = this;
if((function (){var and__3822__auto____7440 = (i >= 0);
if(and__3822__auto____7440)
{return (i < (this__7439.end - this__7439.off));
} else
{return and__3822__auto____7440;
}
})())
{return (this__7439.arr[(this__7439.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7441 = this;
return (this__7441.end - this__7441.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850600;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7442 = this;
var h__2151__auto____7443 = this__7442.__hash;
if(!((h__2151__auto____7443 == null)))
{return h__2151__auto____7443;
} else
{var h__2151__auto____7444 = cljs.core.hash_coll.call(null,coll);
this__7442.__hash = h__2151__auto____7444;
return h__2151__auto____7444;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7445 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7446 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7447 = this;
return cljs.core._nth.call(null,this__7447.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7448 = this;
if((cljs.core._count.call(null,this__7448.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7448.chunk),this__7448.more,this__7448.meta,null));
} else
{if((this__7448.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7448.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7449 = this;
if((this__7449.more == null))
{return null;
} else
{return this__7449.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7450 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7451 = this;
return (new cljs.core.ChunkedCons(this__7451.chunk,this__7451.more,m,this__7451.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7452 = this;
return this__7452.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7453 = this;
return this__7453.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7454 = this;
if((this__7454.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7454.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7458__7459 = s;
if(G__7458__7459)
{if(cljs.core.truth_((function (){var or__3824__auto____7460 = null;
if(cljs.core.truth_(or__3824__auto____7460))
{return or__3824__auto____7460;
} else
{return G__7458__7459.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7458__7459.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7458__7459);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7458__7459);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7463 = [];
var s__7464 = s;
while(true){
if(cljs.core.seq.call(null,s__7464))
{ary__7463.push(cljs.core.first.call(null,s__7464));
{
var G__7465 = cljs.core.next.call(null,s__7464);
s__7464 = G__7465;
continue;
}
} else
{return ary__7463;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7469 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7470 = 0;
var xs__7471 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7471)
{(ret__7469[i__7470] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7471)));
{
var G__7472 = (i__7470 + 1);
var G__7473 = cljs.core.next.call(null,xs__7471);
i__7470 = G__7472;
xs__7471 = G__7473;
continue;
}
} else
{}
break;
}
return ret__7469;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7481 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7482 = cljs.core.seq.call(null,init_val_or_seq);
var i__7483 = 0;
var s__7484 = s__7482;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7485 = s__7484;
if(and__3822__auto____7485)
{return (i__7483 < size);
} else
{return and__3822__auto____7485;
}
})()))
{(a__7481[i__7483] = cljs.core.first.call(null,s__7484));
{
var G__7488 = (i__7483 + 1);
var G__7489 = cljs.core.next.call(null,s__7484);
i__7483 = G__7488;
s__7484 = G__7489;
continue;
}
} else
{return a__7481;
}
break;
}
} else
{var n__2486__auto____7486 = size;
var i__7487 = 0;
while(true){
if((i__7487 < n__2486__auto____7486))
{(a__7481[i__7487] = init_val_or_seq);
{
var G__7490 = (i__7487 + 1);
i__7487 = G__7490;
continue;
}
} else
{}
break;
}
return a__7481;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7498 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7499 = cljs.core.seq.call(null,init_val_or_seq);
var i__7500 = 0;
var s__7501 = s__7499;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7502 = s__7501;
if(and__3822__auto____7502)
{return (i__7500 < size);
} else
{return and__3822__auto____7502;
}
})()))
{(a__7498[i__7500] = cljs.core.first.call(null,s__7501));
{
var G__7505 = (i__7500 + 1);
var G__7506 = cljs.core.next.call(null,s__7501);
i__7500 = G__7505;
s__7501 = G__7506;
continue;
}
} else
{return a__7498;
}
break;
}
} else
{var n__2486__auto____7503 = size;
var i__7504 = 0;
while(true){
if((i__7504 < n__2486__auto____7503))
{(a__7498[i__7504] = init_val_or_seq);
{
var G__7507 = (i__7504 + 1);
i__7504 = G__7507;
continue;
}
} else
{}
break;
}
return a__7498;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7515 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7516 = cljs.core.seq.call(null,init_val_or_seq);
var i__7517 = 0;
var s__7518 = s__7516;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7519 = s__7518;
if(and__3822__auto____7519)
{return (i__7517 < size);
} else
{return and__3822__auto____7519;
}
})()))
{(a__7515[i__7517] = cljs.core.first.call(null,s__7518));
{
var G__7522 = (i__7517 + 1);
var G__7523 = cljs.core.next.call(null,s__7518);
i__7517 = G__7522;
s__7518 = G__7523;
continue;
}
} else
{return a__7515;
}
break;
}
} else
{var n__2486__auto____7520 = size;
var i__7521 = 0;
while(true){
if((i__7521 < n__2486__auto____7520))
{(a__7515[i__7521] = init_val_or_seq);
{
var G__7524 = (i__7521 + 1);
i__7521 = G__7524;
continue;
}
} else
{}
break;
}
return a__7515;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7529 = s;
var i__7530 = n;
var sum__7531 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7532 = (i__7530 > 0);
if(and__3822__auto____7532)
{return cljs.core.seq.call(null,s__7529);
} else
{return and__3822__auto____7532;
}
})()))
{{
var G__7533 = cljs.core.next.call(null,s__7529);
var G__7534 = (i__7530 - 1);
var G__7535 = (sum__7531 + 1);
s__7529 = G__7533;
i__7530 = G__7534;
sum__7531 = G__7535;
continue;
}
} else
{return sum__7531;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7540 = cljs.core.seq.call(null,x);
if(s__7540)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7540))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7540),concat.call(null,cljs.core.chunk_rest.call(null,s__7540),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7540),concat.call(null,cljs.core.rest.call(null,s__7540),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7544__delegate = function (x,y,zs){
var cat__7543 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7542 = cljs.core.seq.call(null,xys);
if(xys__7542)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7542))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7542),cat.call(null,cljs.core.chunk_rest.call(null,xys__7542),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7542),cat.call(null,cljs.core.rest.call(null,xys__7542),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7543.call(null,concat.call(null,x,y),zs);
};
var G__7544 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7544__delegate.call(this, x, y, zs);
};
G__7544.cljs$lang$maxFixedArity = 2;
G__7544.cljs$lang$applyTo = (function (arglist__7545){
var x = cljs.core.first(arglist__7545);
var y = cljs.core.first(cljs.core.next(arglist__7545));
var zs = cljs.core.rest(cljs.core.next(arglist__7545));
return G__7544__delegate(x, y, zs);
});
G__7544.cljs$lang$arity$variadic = G__7544__delegate;
return G__7544;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7546__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7546 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7546__delegate.call(this, a, b, c, d, more);
};
G__7546.cljs$lang$maxFixedArity = 4;
G__7546.cljs$lang$applyTo = (function (arglist__7547){
var a = cljs.core.first(arglist__7547);
var b = cljs.core.first(cljs.core.next(arglist__7547));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7547)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7547))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7547))));
return G__7546__delegate(a, b, c, d, more);
});
G__7546.cljs$lang$arity$variadic = G__7546__delegate;
return G__7546;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7589 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7590 = cljs.core._first.call(null,args__7589);
var args__7591 = cljs.core._rest.call(null,args__7589);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7590);
} else
{return f.call(null,a__7590);
}
} else
{var b__7592 = cljs.core._first.call(null,args__7591);
var args__7593 = cljs.core._rest.call(null,args__7591);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7590,b__7592);
} else
{return f.call(null,a__7590,b__7592);
}
} else
{var c__7594 = cljs.core._first.call(null,args__7593);
var args__7595 = cljs.core._rest.call(null,args__7593);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7590,b__7592,c__7594);
} else
{return f.call(null,a__7590,b__7592,c__7594);
}
} else
{var d__7596 = cljs.core._first.call(null,args__7595);
var args__7597 = cljs.core._rest.call(null,args__7595);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7590,b__7592,c__7594,d__7596);
} else
{return f.call(null,a__7590,b__7592,c__7594,d__7596);
}
} else
{var e__7598 = cljs.core._first.call(null,args__7597);
var args__7599 = cljs.core._rest.call(null,args__7597);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7590,b__7592,c__7594,d__7596,e__7598);
} else
{return f.call(null,a__7590,b__7592,c__7594,d__7596,e__7598);
}
} else
{var f__7600 = cljs.core._first.call(null,args__7599);
var args__7601 = cljs.core._rest.call(null,args__7599);
if((argc === 6))
{if(f__7600.cljs$lang$arity$6)
{return f__7600.cljs$lang$arity$6(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600);
}
} else
{var g__7602 = cljs.core._first.call(null,args__7601);
var args__7603 = cljs.core._rest.call(null,args__7601);
if((argc === 7))
{if(f__7600.cljs$lang$arity$7)
{return f__7600.cljs$lang$arity$7(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602);
}
} else
{var h__7604 = cljs.core._first.call(null,args__7603);
var args__7605 = cljs.core._rest.call(null,args__7603);
if((argc === 8))
{if(f__7600.cljs$lang$arity$8)
{return f__7600.cljs$lang$arity$8(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604);
}
} else
{var i__7606 = cljs.core._first.call(null,args__7605);
var args__7607 = cljs.core._rest.call(null,args__7605);
if((argc === 9))
{if(f__7600.cljs$lang$arity$9)
{return f__7600.cljs$lang$arity$9(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606);
}
} else
{var j__7608 = cljs.core._first.call(null,args__7607);
var args__7609 = cljs.core._rest.call(null,args__7607);
if((argc === 10))
{if(f__7600.cljs$lang$arity$10)
{return f__7600.cljs$lang$arity$10(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608);
}
} else
{var k__7610 = cljs.core._first.call(null,args__7609);
var args__7611 = cljs.core._rest.call(null,args__7609);
if((argc === 11))
{if(f__7600.cljs$lang$arity$11)
{return f__7600.cljs$lang$arity$11(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610);
}
} else
{var l__7612 = cljs.core._first.call(null,args__7611);
var args__7613 = cljs.core._rest.call(null,args__7611);
if((argc === 12))
{if(f__7600.cljs$lang$arity$12)
{return f__7600.cljs$lang$arity$12(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612);
}
} else
{var m__7614 = cljs.core._first.call(null,args__7613);
var args__7615 = cljs.core._rest.call(null,args__7613);
if((argc === 13))
{if(f__7600.cljs$lang$arity$13)
{return f__7600.cljs$lang$arity$13(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614);
}
} else
{var n__7616 = cljs.core._first.call(null,args__7615);
var args__7617 = cljs.core._rest.call(null,args__7615);
if((argc === 14))
{if(f__7600.cljs$lang$arity$14)
{return f__7600.cljs$lang$arity$14(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616);
}
} else
{var o__7618 = cljs.core._first.call(null,args__7617);
var args__7619 = cljs.core._rest.call(null,args__7617);
if((argc === 15))
{if(f__7600.cljs$lang$arity$15)
{return f__7600.cljs$lang$arity$15(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618);
}
} else
{var p__7620 = cljs.core._first.call(null,args__7619);
var args__7621 = cljs.core._rest.call(null,args__7619);
if((argc === 16))
{if(f__7600.cljs$lang$arity$16)
{return f__7600.cljs$lang$arity$16(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620);
}
} else
{var q__7622 = cljs.core._first.call(null,args__7621);
var args__7623 = cljs.core._rest.call(null,args__7621);
if((argc === 17))
{if(f__7600.cljs$lang$arity$17)
{return f__7600.cljs$lang$arity$17(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622);
}
} else
{var r__7624 = cljs.core._first.call(null,args__7623);
var args__7625 = cljs.core._rest.call(null,args__7623);
if((argc === 18))
{if(f__7600.cljs$lang$arity$18)
{return f__7600.cljs$lang$arity$18(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624);
}
} else
{var s__7626 = cljs.core._first.call(null,args__7625);
var args__7627 = cljs.core._rest.call(null,args__7625);
if((argc === 19))
{if(f__7600.cljs$lang$arity$19)
{return f__7600.cljs$lang$arity$19(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624,s__7626);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624,s__7626);
}
} else
{var t__7628 = cljs.core._first.call(null,args__7627);
var args__7629 = cljs.core._rest.call(null,args__7627);
if((argc === 20))
{if(f__7600.cljs$lang$arity$20)
{return f__7600.cljs$lang$arity$20(a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624,s__7626,t__7628);
} else
{return f__7600.call(null,a__7590,b__7592,c__7594,d__7596,e__7598,f__7600,g__7602,h__7604,i__7606,j__7608,k__7610,l__7612,m__7614,n__7616,o__7618,p__7620,q__7622,r__7624,s__7626,t__7628);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7644 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7645 = cljs.core.bounded_count.call(null,args,(fixed_arity__7644 + 1));
if((bc__7645 <= fixed_arity__7644))
{return cljs.core.apply_to.call(null,f,bc__7645,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7646 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7647 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7648 = cljs.core.bounded_count.call(null,arglist__7646,(fixed_arity__7647 + 1));
if((bc__7648 <= fixed_arity__7647))
{return cljs.core.apply_to.call(null,f,bc__7648,arglist__7646);
} else
{return f.cljs$lang$applyTo(arglist__7646);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7646));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7649 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7650 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7651 = cljs.core.bounded_count.call(null,arglist__7649,(fixed_arity__7650 + 1));
if((bc__7651 <= fixed_arity__7650))
{return cljs.core.apply_to.call(null,f,bc__7651,arglist__7649);
} else
{return f.cljs$lang$applyTo(arglist__7649);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7649));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7652 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7653 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7654 = cljs.core.bounded_count.call(null,arglist__7652,(fixed_arity__7653 + 1));
if((bc__7654 <= fixed_arity__7653))
{return cljs.core.apply_to.call(null,f,bc__7654,arglist__7652);
} else
{return f.cljs$lang$applyTo(arglist__7652);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7652));
}
});
var apply__6 = (function() { 
var G__7658__delegate = function (f,a,b,c,d,args){
var arglist__7655 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7656 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7657 = cljs.core.bounded_count.call(null,arglist__7655,(fixed_arity__7656 + 1));
if((bc__7657 <= fixed_arity__7656))
{return cljs.core.apply_to.call(null,f,bc__7657,arglist__7655);
} else
{return f.cljs$lang$applyTo(arglist__7655);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7655));
}
};
var G__7658 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7658__delegate.call(this, f, a, b, c, d, args);
};
G__7658.cljs$lang$maxFixedArity = 5;
G__7658.cljs$lang$applyTo = (function (arglist__7659){
var f = cljs.core.first(arglist__7659);
var a = cljs.core.first(cljs.core.next(arglist__7659));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7659)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7659))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7659)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7659)))));
return G__7658__delegate(f, a, b, c, d, args);
});
G__7658.cljs$lang$arity$variadic = G__7658__delegate;
return G__7658;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7660){
var obj = cljs.core.first(arglist__7660);
var f = cljs.core.first(cljs.core.next(arglist__7660));
var args = cljs.core.rest(cljs.core.next(arglist__7660));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7661__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7661__delegate.call(this, x, y, more);
};
G__7661.cljs$lang$maxFixedArity = 2;
G__7661.cljs$lang$applyTo = (function (arglist__7662){
var x = cljs.core.first(arglist__7662);
var y = cljs.core.first(cljs.core.next(arglist__7662));
var more = cljs.core.rest(cljs.core.next(arglist__7662));
return G__7661__delegate(x, y, more);
});
G__7661.cljs$lang$arity$variadic = G__7661__delegate;
return G__7661;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7663 = pred;
var G__7664 = cljs.core.next.call(null,coll);
pred = G__7663;
coll = G__7664;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7666 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7666))
{return or__3824__auto____7666;
} else
{{
var G__7667 = pred;
var G__7668 = cljs.core.next.call(null,coll);
pred = G__7667;
coll = G__7668;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7669 = null;
var G__7669__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7669__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7669__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7669__3 = (function() { 
var G__7670__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7670 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7670__delegate.call(this, x, y, zs);
};
G__7670.cljs$lang$maxFixedArity = 2;
G__7670.cljs$lang$applyTo = (function (arglist__7671){
var x = cljs.core.first(arglist__7671);
var y = cljs.core.first(cljs.core.next(arglist__7671));
var zs = cljs.core.rest(cljs.core.next(arglist__7671));
return G__7670__delegate(x, y, zs);
});
G__7670.cljs$lang$arity$variadic = G__7670__delegate;
return G__7670;
})()
;
G__7669 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7669__0.call(this);
case 1:
return G__7669__1.call(this,x);
case 2:
return G__7669__2.call(this,x,y);
default:
return G__7669__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7669.cljs$lang$maxFixedArity = 2;
G__7669.cljs$lang$applyTo = G__7669__3.cljs$lang$applyTo;
return G__7669;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7672__delegate = function (args){
return x;
};
var G__7672 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7672__delegate.call(this, args);
};
G__7672.cljs$lang$maxFixedArity = 0;
G__7672.cljs$lang$applyTo = (function (arglist__7673){
var args = cljs.core.seq(arglist__7673);;
return G__7672__delegate(args);
});
G__7672.cljs$lang$arity$variadic = G__7672__delegate;
return G__7672;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7680 = null;
var G__7680__0 = (function (){
return f.call(null,g.call(null));
});
var G__7680__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7680__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7680__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7680__4 = (function() { 
var G__7681__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7681 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7681__delegate.call(this, x, y, z, args);
};
G__7681.cljs$lang$maxFixedArity = 3;
G__7681.cljs$lang$applyTo = (function (arglist__7682){
var x = cljs.core.first(arglist__7682);
var y = cljs.core.first(cljs.core.next(arglist__7682));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7682)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7682)));
return G__7681__delegate(x, y, z, args);
});
G__7681.cljs$lang$arity$variadic = G__7681__delegate;
return G__7681;
})()
;
G__7680 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7680__0.call(this);
case 1:
return G__7680__1.call(this,x);
case 2:
return G__7680__2.call(this,x,y);
case 3:
return G__7680__3.call(this,x,y,z);
default:
return G__7680__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7680.cljs$lang$maxFixedArity = 3;
G__7680.cljs$lang$applyTo = G__7680__4.cljs$lang$applyTo;
return G__7680;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7683 = null;
var G__7683__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7683__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7683__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7683__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7683__4 = (function() { 
var G__7684__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7684 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7684__delegate.call(this, x, y, z, args);
};
G__7684.cljs$lang$maxFixedArity = 3;
G__7684.cljs$lang$applyTo = (function (arglist__7685){
var x = cljs.core.first(arglist__7685);
var y = cljs.core.first(cljs.core.next(arglist__7685));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7685)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7685)));
return G__7684__delegate(x, y, z, args);
});
G__7684.cljs$lang$arity$variadic = G__7684__delegate;
return G__7684;
})()
;
G__7683 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7683__0.call(this);
case 1:
return G__7683__1.call(this,x);
case 2:
return G__7683__2.call(this,x,y);
case 3:
return G__7683__3.call(this,x,y,z);
default:
return G__7683__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7683.cljs$lang$maxFixedArity = 3;
G__7683.cljs$lang$applyTo = G__7683__4.cljs$lang$applyTo;
return G__7683;
})()
});
var comp__4 = (function() { 
var G__7686__delegate = function (f1,f2,f3,fs){
var fs__7677 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7687__delegate = function (args){
var ret__7678 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7677),args);
var fs__7679 = cljs.core.next.call(null,fs__7677);
while(true){
if(fs__7679)
{{
var G__7688 = cljs.core.first.call(null,fs__7679).call(null,ret__7678);
var G__7689 = cljs.core.next.call(null,fs__7679);
ret__7678 = G__7688;
fs__7679 = G__7689;
continue;
}
} else
{return ret__7678;
}
break;
}
};
var G__7687 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7687__delegate.call(this, args);
};
G__7687.cljs$lang$maxFixedArity = 0;
G__7687.cljs$lang$applyTo = (function (arglist__7690){
var args = cljs.core.seq(arglist__7690);;
return G__7687__delegate(args);
});
G__7687.cljs$lang$arity$variadic = G__7687__delegate;
return G__7687;
})()
;
};
var G__7686 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7686__delegate.call(this, f1, f2, f3, fs);
};
G__7686.cljs$lang$maxFixedArity = 3;
G__7686.cljs$lang$applyTo = (function (arglist__7691){
var f1 = cljs.core.first(arglist__7691);
var f2 = cljs.core.first(cljs.core.next(arglist__7691));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7691)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7691)));
return G__7686__delegate(f1, f2, f3, fs);
});
G__7686.cljs$lang$arity$variadic = G__7686__delegate;
return G__7686;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7692__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7692 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7692__delegate.call(this, args);
};
G__7692.cljs$lang$maxFixedArity = 0;
G__7692.cljs$lang$applyTo = (function (arglist__7693){
var args = cljs.core.seq(arglist__7693);;
return G__7692__delegate(args);
});
G__7692.cljs$lang$arity$variadic = G__7692__delegate;
return G__7692;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7694__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7694 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7694__delegate.call(this, args);
};
G__7694.cljs$lang$maxFixedArity = 0;
G__7694.cljs$lang$applyTo = (function (arglist__7695){
var args = cljs.core.seq(arglist__7695);;
return G__7694__delegate(args);
});
G__7694.cljs$lang$arity$variadic = G__7694__delegate;
return G__7694;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7696__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7696 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7696__delegate.call(this, args);
};
G__7696.cljs$lang$maxFixedArity = 0;
G__7696.cljs$lang$applyTo = (function (arglist__7697){
var args = cljs.core.seq(arglist__7697);;
return G__7696__delegate(args);
});
G__7696.cljs$lang$arity$variadic = G__7696__delegate;
return G__7696;
})()
;
});
var partial__5 = (function() { 
var G__7698__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7699__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7699 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7699__delegate.call(this, args);
};
G__7699.cljs$lang$maxFixedArity = 0;
G__7699.cljs$lang$applyTo = (function (arglist__7700){
var args = cljs.core.seq(arglist__7700);;
return G__7699__delegate(args);
});
G__7699.cljs$lang$arity$variadic = G__7699__delegate;
return G__7699;
})()
;
};
var G__7698 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7698__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7698.cljs$lang$maxFixedArity = 4;
G__7698.cljs$lang$applyTo = (function (arglist__7701){
var f = cljs.core.first(arglist__7701);
var arg1 = cljs.core.first(cljs.core.next(arglist__7701));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7701)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7701))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7701))));
return G__7698__delegate(f, arg1, arg2, arg3, more);
});
G__7698.cljs$lang$arity$variadic = G__7698__delegate;
return G__7698;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7702 = null;
var G__7702__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7702__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7702__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7702__4 = (function() { 
var G__7703__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7703 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7703__delegate.call(this, a, b, c, ds);
};
G__7703.cljs$lang$maxFixedArity = 3;
G__7703.cljs$lang$applyTo = (function (arglist__7704){
var a = cljs.core.first(arglist__7704);
var b = cljs.core.first(cljs.core.next(arglist__7704));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7704)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7704)));
return G__7703__delegate(a, b, c, ds);
});
G__7703.cljs$lang$arity$variadic = G__7703__delegate;
return G__7703;
})()
;
G__7702 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7702__1.call(this,a);
case 2:
return G__7702__2.call(this,a,b);
case 3:
return G__7702__3.call(this,a,b,c);
default:
return G__7702__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7702.cljs$lang$maxFixedArity = 3;
G__7702.cljs$lang$applyTo = G__7702__4.cljs$lang$applyTo;
return G__7702;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7705 = null;
var G__7705__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7705__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7705__4 = (function() { 
var G__7706__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7706 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7706__delegate.call(this, a, b, c, ds);
};
G__7706.cljs$lang$maxFixedArity = 3;
G__7706.cljs$lang$applyTo = (function (arglist__7707){
var a = cljs.core.first(arglist__7707);
var b = cljs.core.first(cljs.core.next(arglist__7707));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7707)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7707)));
return G__7706__delegate(a, b, c, ds);
});
G__7706.cljs$lang$arity$variadic = G__7706__delegate;
return G__7706;
})()
;
G__7705 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7705__2.call(this,a,b);
case 3:
return G__7705__3.call(this,a,b,c);
default:
return G__7705__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7705.cljs$lang$maxFixedArity = 3;
G__7705.cljs$lang$applyTo = G__7705__4.cljs$lang$applyTo;
return G__7705;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7708 = null;
var G__7708__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7708__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7708__4 = (function() { 
var G__7709__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7709 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7709__delegate.call(this, a, b, c, ds);
};
G__7709.cljs$lang$maxFixedArity = 3;
G__7709.cljs$lang$applyTo = (function (arglist__7710){
var a = cljs.core.first(arglist__7710);
var b = cljs.core.first(cljs.core.next(arglist__7710));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7710)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7710)));
return G__7709__delegate(a, b, c, ds);
});
G__7709.cljs$lang$arity$variadic = G__7709__delegate;
return G__7709;
})()
;
G__7708 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7708__2.call(this,a,b);
case 3:
return G__7708__3.call(this,a,b,c);
default:
return G__7708__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7708.cljs$lang$maxFixedArity = 3;
G__7708.cljs$lang$applyTo = G__7708__4.cljs$lang$applyTo;
return G__7708;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7726 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7734 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7734)
{var s__7735 = temp__3974__auto____7734;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7735))
{var c__7736 = cljs.core.chunk_first.call(null,s__7735);
var size__7737 = cljs.core.count.call(null,c__7736);
var b__7738 = cljs.core.chunk_buffer.call(null,size__7737);
var n__2486__auto____7739 = size__7737;
var i__7740 = 0;
while(true){
if((i__7740 < n__2486__auto____7739))
{cljs.core.chunk_append.call(null,b__7738,f.call(null,(idx + i__7740),cljs.core._nth.call(null,c__7736,i__7740)));
{
var G__7741 = (i__7740 + 1);
i__7740 = G__7741;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7738),mapi.call(null,(idx + size__7737),cljs.core.chunk_rest.call(null,s__7735)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7735)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7735)));
}
} else
{return null;
}
}),null));
});
return mapi__7726.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7751 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7751)
{var s__7752 = temp__3974__auto____7751;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7752))
{var c__7753 = cljs.core.chunk_first.call(null,s__7752);
var size__7754 = cljs.core.count.call(null,c__7753);
var b__7755 = cljs.core.chunk_buffer.call(null,size__7754);
var n__2486__auto____7756 = size__7754;
var i__7757 = 0;
while(true){
if((i__7757 < n__2486__auto____7756))
{var x__7758 = f.call(null,cljs.core._nth.call(null,c__7753,i__7757));
if((x__7758 == null))
{} else
{cljs.core.chunk_append.call(null,b__7755,x__7758);
}
{
var G__7760 = (i__7757 + 1);
i__7757 = G__7760;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7755),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7752)));
} else
{var x__7759 = f.call(null,cljs.core.first.call(null,s__7752));
if((x__7759 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7752));
} else
{return cljs.core.cons.call(null,x__7759,keep.call(null,f,cljs.core.rest.call(null,s__7752)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7786 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7796 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7796)
{var s__7797 = temp__3974__auto____7796;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7797))
{var c__7798 = cljs.core.chunk_first.call(null,s__7797);
var size__7799 = cljs.core.count.call(null,c__7798);
var b__7800 = cljs.core.chunk_buffer.call(null,size__7799);
var n__2486__auto____7801 = size__7799;
var i__7802 = 0;
while(true){
if((i__7802 < n__2486__auto____7801))
{var x__7803 = f.call(null,(idx + i__7802),cljs.core._nth.call(null,c__7798,i__7802));
if((x__7803 == null))
{} else
{cljs.core.chunk_append.call(null,b__7800,x__7803);
}
{
var G__7805 = (i__7802 + 1);
i__7802 = G__7805;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7800),keepi.call(null,(idx + size__7799),cljs.core.chunk_rest.call(null,s__7797)));
} else
{var x__7804 = f.call(null,idx,cljs.core.first.call(null,s__7797));
if((x__7804 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7797));
} else
{return cljs.core.cons.call(null,x__7804,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7797)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7786.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7891 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7891))
{return p.call(null,y);
} else
{return and__3822__auto____7891;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7892 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7892))
{var and__3822__auto____7893 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7893))
{return p.call(null,z);
} else
{return and__3822__auto____7893;
}
} else
{return and__3822__auto____7892;
}
})());
});
var ep1__4 = (function() { 
var G__7962__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7894 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7894))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7894;
}
})());
};
var G__7962 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7962__delegate.call(this, x, y, z, args);
};
G__7962.cljs$lang$maxFixedArity = 3;
G__7962.cljs$lang$applyTo = (function (arglist__7963){
var x = cljs.core.first(arglist__7963);
var y = cljs.core.first(cljs.core.next(arglist__7963));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7963)));
return G__7962__delegate(x, y, z, args);
});
G__7962.cljs$lang$arity$variadic = G__7962__delegate;
return G__7962;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7906 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7906))
{return p2.call(null,x);
} else
{return and__3822__auto____7906;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7907 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7907))
{var and__3822__auto____7908 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7908))
{var and__3822__auto____7909 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7909))
{return p2.call(null,y);
} else
{return and__3822__auto____7909;
}
} else
{return and__3822__auto____7908;
}
} else
{return and__3822__auto____7907;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7910 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7910))
{var and__3822__auto____7911 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7911))
{var and__3822__auto____7912 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7912))
{var and__3822__auto____7913 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7913))
{var and__3822__auto____7914 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7914))
{return p2.call(null,z);
} else
{return and__3822__auto____7914;
}
} else
{return and__3822__auto____7913;
}
} else
{return and__3822__auto____7912;
}
} else
{return and__3822__auto____7911;
}
} else
{return and__3822__auto____7910;
}
})());
});
var ep2__4 = (function() { 
var G__7964__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7915 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7915))
{return cljs.core.every_QMARK_.call(null,(function (p1__7761_SHARP_){
var and__3822__auto____7916 = p1.call(null,p1__7761_SHARP_);
if(cljs.core.truth_(and__3822__auto____7916))
{return p2.call(null,p1__7761_SHARP_);
} else
{return and__3822__auto____7916;
}
}),args);
} else
{return and__3822__auto____7915;
}
})());
};
var G__7964 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7964__delegate.call(this, x, y, z, args);
};
G__7964.cljs$lang$maxFixedArity = 3;
G__7964.cljs$lang$applyTo = (function (arglist__7965){
var x = cljs.core.first(arglist__7965);
var y = cljs.core.first(cljs.core.next(arglist__7965));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7965)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7965)));
return G__7964__delegate(x, y, z, args);
});
G__7964.cljs$lang$arity$variadic = G__7964__delegate;
return G__7964;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7935 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7935))
{var and__3822__auto____7936 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7936))
{return p3.call(null,x);
} else
{return and__3822__auto____7936;
}
} else
{return and__3822__auto____7935;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7937 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7937))
{var and__3822__auto____7938 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7938))
{var and__3822__auto____7939 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7939))
{var and__3822__auto____7940 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7940))
{var and__3822__auto____7941 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7941))
{return p3.call(null,y);
} else
{return and__3822__auto____7941;
}
} else
{return and__3822__auto____7940;
}
} else
{return and__3822__auto____7939;
}
} else
{return and__3822__auto____7938;
}
} else
{return and__3822__auto____7937;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7942 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7942))
{var and__3822__auto____7943 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7943))
{var and__3822__auto____7944 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7944))
{var and__3822__auto____7945 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7945))
{var and__3822__auto____7946 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7946))
{var and__3822__auto____7947 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7947))
{var and__3822__auto____7948 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7948))
{var and__3822__auto____7949 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7949))
{return p3.call(null,z);
} else
{return and__3822__auto____7949;
}
} else
{return and__3822__auto____7948;
}
} else
{return and__3822__auto____7947;
}
} else
{return and__3822__auto____7946;
}
} else
{return and__3822__auto____7945;
}
} else
{return and__3822__auto____7944;
}
} else
{return and__3822__auto____7943;
}
} else
{return and__3822__auto____7942;
}
})());
});
var ep3__4 = (function() { 
var G__7966__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7950 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7950))
{return cljs.core.every_QMARK_.call(null,(function (p1__7762_SHARP_){
var and__3822__auto____7951 = p1.call(null,p1__7762_SHARP_);
if(cljs.core.truth_(and__3822__auto____7951))
{var and__3822__auto____7952 = p2.call(null,p1__7762_SHARP_);
if(cljs.core.truth_(and__3822__auto____7952))
{return p3.call(null,p1__7762_SHARP_);
} else
{return and__3822__auto____7952;
}
} else
{return and__3822__auto____7951;
}
}),args);
} else
{return and__3822__auto____7950;
}
})());
};
var G__7966 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7966__delegate.call(this, x, y, z, args);
};
G__7966.cljs$lang$maxFixedArity = 3;
G__7966.cljs$lang$applyTo = (function (arglist__7967){
var x = cljs.core.first(arglist__7967);
var y = cljs.core.first(cljs.core.next(arglist__7967));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7967)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7967)));
return G__7966__delegate(x, y, z, args);
});
G__7966.cljs$lang$arity$variadic = G__7966__delegate;
return G__7966;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7968__delegate = function (p1,p2,p3,ps){
var ps__7953 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7763_SHARP_){
return p1__7763_SHARP_.call(null,x);
}),ps__7953);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7764_SHARP_){
var and__3822__auto____7958 = p1__7764_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7958))
{return p1__7764_SHARP_.call(null,y);
} else
{return and__3822__auto____7958;
}
}),ps__7953);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7765_SHARP_){
var and__3822__auto____7959 = p1__7765_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7959))
{var and__3822__auto____7960 = p1__7765_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7960))
{return p1__7765_SHARP_.call(null,z);
} else
{return and__3822__auto____7960;
}
} else
{return and__3822__auto____7959;
}
}),ps__7953);
});
var epn__4 = (function() { 
var G__7969__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7961 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7961))
{return cljs.core.every_QMARK_.call(null,(function (p1__7766_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7766_SHARP_,args);
}),ps__7953);
} else
{return and__3822__auto____7961;
}
})());
};
var G__7969 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7969__delegate.call(this, x, y, z, args);
};
G__7969.cljs$lang$maxFixedArity = 3;
G__7969.cljs$lang$applyTo = (function (arglist__7970){
var x = cljs.core.first(arglist__7970);
var y = cljs.core.first(cljs.core.next(arglist__7970));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7970)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7970)));
return G__7969__delegate(x, y, z, args);
});
G__7969.cljs$lang$arity$variadic = G__7969__delegate;
return G__7969;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7968 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7968__delegate.call(this, p1, p2, p3, ps);
};
G__7968.cljs$lang$maxFixedArity = 3;
G__7968.cljs$lang$applyTo = (function (arglist__7971){
var p1 = cljs.core.first(arglist__7971);
var p2 = cljs.core.first(cljs.core.next(arglist__7971));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7971)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7971)));
return G__7968__delegate(p1, p2, p3, ps);
});
G__7968.cljs$lang$arity$variadic = G__7968__delegate;
return G__7968;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8052 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8052))
{return or__3824__auto____8052;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8053 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8053))
{return or__3824__auto____8053;
} else
{var or__3824__auto____8054 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8054))
{return or__3824__auto____8054;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8123__delegate = function (x,y,z,args){
var or__3824__auto____8055 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8055))
{return or__3824__auto____8055;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8123 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8123__delegate.call(this, x, y, z, args);
};
G__8123.cljs$lang$maxFixedArity = 3;
G__8123.cljs$lang$applyTo = (function (arglist__8124){
var x = cljs.core.first(arglist__8124);
var y = cljs.core.first(cljs.core.next(arglist__8124));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8124)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8124)));
return G__8123__delegate(x, y, z, args);
});
G__8123.cljs$lang$arity$variadic = G__8123__delegate;
return G__8123;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8067 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8067))
{return or__3824__auto____8067;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8068 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8068))
{return or__3824__auto____8068;
} else
{var or__3824__auto____8069 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8069))
{return or__3824__auto____8069;
} else
{var or__3824__auto____8070 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8070))
{return or__3824__auto____8070;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8071 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8071))
{return or__3824__auto____8071;
} else
{var or__3824__auto____8072 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8072))
{return or__3824__auto____8072;
} else
{var or__3824__auto____8073 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8073))
{return or__3824__auto____8073;
} else
{var or__3824__auto____8074 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8074))
{return or__3824__auto____8074;
} else
{var or__3824__auto____8075 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8075))
{return or__3824__auto____8075;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8125__delegate = function (x,y,z,args){
var or__3824__auto____8076 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8076))
{return or__3824__auto____8076;
} else
{return cljs.core.some.call(null,(function (p1__7806_SHARP_){
var or__3824__auto____8077 = p1.call(null,p1__7806_SHARP_);
if(cljs.core.truth_(or__3824__auto____8077))
{return or__3824__auto____8077;
} else
{return p2.call(null,p1__7806_SHARP_);
}
}),args);
}
};
var G__8125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8125__delegate.call(this, x, y, z, args);
};
G__8125.cljs$lang$maxFixedArity = 3;
G__8125.cljs$lang$applyTo = (function (arglist__8126){
var x = cljs.core.first(arglist__8126);
var y = cljs.core.first(cljs.core.next(arglist__8126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8126)));
return G__8125__delegate(x, y, z, args);
});
G__8125.cljs$lang$arity$variadic = G__8125__delegate;
return G__8125;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8096 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8096))
{return or__3824__auto____8096;
} else
{var or__3824__auto____8097 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8097))
{return or__3824__auto____8097;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8098 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8098))
{return or__3824__auto____8098;
} else
{var or__3824__auto____8099 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8099))
{return or__3824__auto____8099;
} else
{var or__3824__auto____8100 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8100))
{return or__3824__auto____8100;
} else
{var or__3824__auto____8101 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8101))
{return or__3824__auto____8101;
} else
{var or__3824__auto____8102 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8102))
{return or__3824__auto____8102;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8103 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8103))
{return or__3824__auto____8103;
} else
{var or__3824__auto____8104 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8104))
{return or__3824__auto____8104;
} else
{var or__3824__auto____8105 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8105))
{return or__3824__auto____8105;
} else
{var or__3824__auto____8106 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8106))
{return or__3824__auto____8106;
} else
{var or__3824__auto____8107 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8107))
{return or__3824__auto____8107;
} else
{var or__3824__auto____8108 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8108))
{return or__3824__auto____8108;
} else
{var or__3824__auto____8109 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8109))
{return or__3824__auto____8109;
} else
{var or__3824__auto____8110 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8110))
{return or__3824__auto____8110;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8127__delegate = function (x,y,z,args){
var or__3824__auto____8111 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8111))
{return or__3824__auto____8111;
} else
{return cljs.core.some.call(null,(function (p1__7807_SHARP_){
var or__3824__auto____8112 = p1.call(null,p1__7807_SHARP_);
if(cljs.core.truth_(or__3824__auto____8112))
{return or__3824__auto____8112;
} else
{var or__3824__auto____8113 = p2.call(null,p1__7807_SHARP_);
if(cljs.core.truth_(or__3824__auto____8113))
{return or__3824__auto____8113;
} else
{return p3.call(null,p1__7807_SHARP_);
}
}
}),args);
}
};
var G__8127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8127__delegate.call(this, x, y, z, args);
};
G__8127.cljs$lang$maxFixedArity = 3;
G__8127.cljs$lang$applyTo = (function (arglist__8128){
var x = cljs.core.first(arglist__8128);
var y = cljs.core.first(cljs.core.next(arglist__8128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8128)));
return G__8127__delegate(x, y, z, args);
});
G__8127.cljs$lang$arity$variadic = G__8127__delegate;
return G__8127;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8129__delegate = function (p1,p2,p3,ps){
var ps__8114 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7808_SHARP_){
return p1__7808_SHARP_.call(null,x);
}),ps__8114);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7809_SHARP_){
var or__3824__auto____8119 = p1__7809_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8119))
{return or__3824__auto____8119;
} else
{return p1__7809_SHARP_.call(null,y);
}
}),ps__8114);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7810_SHARP_){
var or__3824__auto____8120 = p1__7810_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8120))
{return or__3824__auto____8120;
} else
{var or__3824__auto____8121 = p1__7810_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8121))
{return or__3824__auto____8121;
} else
{return p1__7810_SHARP_.call(null,z);
}
}
}),ps__8114);
});
var spn__4 = (function() { 
var G__8130__delegate = function (x,y,z,args){
var or__3824__auto____8122 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8122))
{return or__3824__auto____8122;
} else
{return cljs.core.some.call(null,(function (p1__7811_SHARP_){
return cljs.core.some.call(null,p1__7811_SHARP_,args);
}),ps__8114);
}
};
var G__8130 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8130__delegate.call(this, x, y, z, args);
};
G__8130.cljs$lang$maxFixedArity = 3;
G__8130.cljs$lang$applyTo = (function (arglist__8131){
var x = cljs.core.first(arglist__8131);
var y = cljs.core.first(cljs.core.next(arglist__8131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8131)));
return G__8130__delegate(x, y, z, args);
});
G__8130.cljs$lang$arity$variadic = G__8130__delegate;
return G__8130;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8129 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8129__delegate.call(this, p1, p2, p3, ps);
};
G__8129.cljs$lang$maxFixedArity = 3;
G__8129.cljs$lang$applyTo = (function (arglist__8132){
var p1 = cljs.core.first(arglist__8132);
var p2 = cljs.core.first(cljs.core.next(arglist__8132));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8132)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8132)));
return G__8129__delegate(p1, p2, p3, ps);
});
G__8129.cljs$lang$arity$variadic = G__8129__delegate;
return G__8129;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8151 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8151)
{var s__8152 = temp__3974__auto____8151;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8152))
{var c__8153 = cljs.core.chunk_first.call(null,s__8152);
var size__8154 = cljs.core.count.call(null,c__8153);
var b__8155 = cljs.core.chunk_buffer.call(null,size__8154);
var n__2486__auto____8156 = size__8154;
var i__8157 = 0;
while(true){
if((i__8157 < n__2486__auto____8156))
{cljs.core.chunk_append.call(null,b__8155,f.call(null,cljs.core._nth.call(null,c__8153,i__8157)));
{
var G__8169 = (i__8157 + 1);
i__8157 = G__8169;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8155),map.call(null,f,cljs.core.chunk_rest.call(null,s__8152)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8152)),map.call(null,f,cljs.core.rest.call(null,s__8152)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8158 = cljs.core.seq.call(null,c1);
var s2__8159 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8160 = s1__8158;
if(and__3822__auto____8160)
{return s2__8159;
} else
{return and__3822__auto____8160;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8158),cljs.core.first.call(null,s2__8159)),map.call(null,f,cljs.core.rest.call(null,s1__8158),cljs.core.rest.call(null,s2__8159)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8161 = cljs.core.seq.call(null,c1);
var s2__8162 = cljs.core.seq.call(null,c2);
var s3__8163 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8164 = s1__8161;
if(and__3822__auto____8164)
{var and__3822__auto____8165 = s2__8162;
if(and__3822__auto____8165)
{return s3__8163;
} else
{return and__3822__auto____8165;
}
} else
{return and__3822__auto____8164;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8161),cljs.core.first.call(null,s2__8162),cljs.core.first.call(null,s3__8163)),map.call(null,f,cljs.core.rest.call(null,s1__8161),cljs.core.rest.call(null,s2__8162),cljs.core.rest.call(null,s3__8163)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8170__delegate = function (f,c1,c2,c3,colls){
var step__8168 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8167 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8167))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8167),step.call(null,map.call(null,cljs.core.rest,ss__8167)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7972_SHARP_){
return cljs.core.apply.call(null,f,p1__7972_SHARP_);
}),step__8168.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8170 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8170__delegate.call(this, f, c1, c2, c3, colls);
};
G__8170.cljs$lang$maxFixedArity = 4;
G__8170.cljs$lang$applyTo = (function (arglist__8171){
var f = cljs.core.first(arglist__8171);
var c1 = cljs.core.first(cljs.core.next(arglist__8171));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8171)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8171))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8171))));
return G__8170__delegate(f, c1, c2, c3, colls);
});
G__8170.cljs$lang$arity$variadic = G__8170__delegate;
return G__8170;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8174 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8174)
{var s__8175 = temp__3974__auto____8174;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8175),take.call(null,(n - 1),cljs.core.rest.call(null,s__8175)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8181 = (function (n,coll){
while(true){
var s__8179 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8180 = (n > 0);
if(and__3822__auto____8180)
{return s__8179;
} else
{return and__3822__auto____8180;
}
})()))
{{
var G__8182 = (n - 1);
var G__8183 = cljs.core.rest.call(null,s__8179);
n = G__8182;
coll = G__8183;
continue;
}
} else
{return s__8179;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8181.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8186 = cljs.core.seq.call(null,coll);
var lead__8187 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8187)
{{
var G__8188 = cljs.core.next.call(null,s__8186);
var G__8189 = cljs.core.next.call(null,lead__8187);
s__8186 = G__8188;
lead__8187 = G__8189;
continue;
}
} else
{return s__8186;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8195 = (function (pred,coll){
while(true){
var s__8193 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8194 = s__8193;
if(and__3822__auto____8194)
{return pred.call(null,cljs.core.first.call(null,s__8193));
} else
{return and__3822__auto____8194;
}
})()))
{{
var G__8196 = pred;
var G__8197 = cljs.core.rest.call(null,s__8193);
pred = G__8196;
coll = G__8197;
continue;
}
} else
{return s__8193;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8195.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8200 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8200)
{var s__8201 = temp__3974__auto____8200;
return cljs.core.concat.call(null,s__8201,cycle.call(null,s__8201));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8206 = cljs.core.seq.call(null,c1);
var s2__8207 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8208 = s1__8206;
if(and__3822__auto____8208)
{return s2__8207;
} else
{return and__3822__auto____8208;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8206),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8207),interleave.call(null,cljs.core.rest.call(null,s1__8206),cljs.core.rest.call(null,s2__8207))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8210__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8209 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8209))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8209),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8209)));
} else
{return null;
}
}),null));
};
var G__8210 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8210__delegate.call(this, c1, c2, colls);
};
G__8210.cljs$lang$maxFixedArity = 2;
G__8210.cljs$lang$applyTo = (function (arglist__8211){
var c1 = cljs.core.first(arglist__8211);
var c2 = cljs.core.first(cljs.core.next(arglist__8211));
var colls = cljs.core.rest(cljs.core.next(arglist__8211));
return G__8210__delegate(c1, c2, colls);
});
G__8210.cljs$lang$arity$variadic = G__8210__delegate;
return G__8210;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8221 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8219 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8219)
{var coll__8220 = temp__3971__auto____8219;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8220),cat.call(null,cljs.core.rest.call(null,coll__8220),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8221.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8222__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8222 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8222__delegate.call(this, f, coll, colls);
};
G__8222.cljs$lang$maxFixedArity = 2;
G__8222.cljs$lang$applyTo = (function (arglist__8223){
var f = cljs.core.first(arglist__8223);
var coll = cljs.core.first(cljs.core.next(arglist__8223));
var colls = cljs.core.rest(cljs.core.next(arglist__8223));
return G__8222__delegate(f, coll, colls);
});
G__8222.cljs$lang$arity$variadic = G__8222__delegate;
return G__8222;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8233 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8233)
{var s__8234 = temp__3974__auto____8233;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8234))
{var c__8235 = cljs.core.chunk_first.call(null,s__8234);
var size__8236 = cljs.core.count.call(null,c__8235);
var b__8237 = cljs.core.chunk_buffer.call(null,size__8236);
var n__2486__auto____8238 = size__8236;
var i__8239 = 0;
while(true){
if((i__8239 < n__2486__auto____8238))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8235,i__8239))))
{cljs.core.chunk_append.call(null,b__8237,cljs.core._nth.call(null,c__8235,i__8239));
} else
{}
{
var G__8242 = (i__8239 + 1);
i__8239 = G__8242;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8237),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8234)));
} else
{var f__8240 = cljs.core.first.call(null,s__8234);
var r__8241 = cljs.core.rest.call(null,s__8234);
if(cljs.core.truth_(pred.call(null,f__8240)))
{return cljs.core.cons.call(null,f__8240,filter.call(null,pred,r__8241));
} else
{return filter.call(null,pred,r__8241);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8245 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8245.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8243_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8243_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8249__8250 = to;
if(G__8249__8250)
{if((function (){var or__3824__auto____8251 = (G__8249__8250.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8251)
{return or__3824__auto____8251;
} else
{return G__8249__8250.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8249__8250.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8249__8250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8249__8250);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8252__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8252 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8252__delegate.call(this, f, c1, c2, c3, colls);
};
G__8252.cljs$lang$maxFixedArity = 4;
G__8252.cljs$lang$applyTo = (function (arglist__8253){
var f = cljs.core.first(arglist__8253);
var c1 = cljs.core.first(cljs.core.next(arglist__8253));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8253)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8253))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8253))));
return G__8252__delegate(f, c1, c2, c3, colls);
});
G__8252.cljs$lang$arity$variadic = G__8252__delegate;
return G__8252;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8260 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8260)
{var s__8261 = temp__3974__auto____8260;
var p__8262 = cljs.core.take.call(null,n,s__8261);
if((n === cljs.core.count.call(null,p__8262)))
{return cljs.core.cons.call(null,p__8262,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8261)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8263 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8263)
{var s__8264 = temp__3974__auto____8263;
var p__8265 = cljs.core.take.call(null,n,s__8264);
if((n === cljs.core.count.call(null,p__8265)))
{return cljs.core.cons.call(null,p__8265,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8264)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8265,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8270 = cljs.core.lookup_sentinel;
var m__8271 = m;
var ks__8272 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8272)
{var m__8273 = cljs.core._lookup.call(null,m__8271,cljs.core.first.call(null,ks__8272),sentinel__8270);
if((sentinel__8270 === m__8273))
{return not_found;
} else
{{
var G__8274 = sentinel__8270;
var G__8275 = m__8273;
var G__8276 = cljs.core.next.call(null,ks__8272);
sentinel__8270 = G__8274;
m__8271 = G__8275;
ks__8272 = G__8276;
continue;
}
}
} else
{return m__8271;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8277,v){
var vec__8282__8283 = p__8277;
var k__8284 = cljs.core.nth.call(null,vec__8282__8283,0,null);
var ks__8285 = cljs.core.nthnext.call(null,vec__8282__8283,1);
if(cljs.core.truth_(ks__8285))
{return cljs.core.assoc.call(null,m,k__8284,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8284,null),ks__8285,v));
} else
{return cljs.core.assoc.call(null,m,k__8284,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8286,f,args){
var vec__8291__8292 = p__8286;
var k__8293 = cljs.core.nth.call(null,vec__8291__8292,0,null);
var ks__8294 = cljs.core.nthnext.call(null,vec__8291__8292,1);
if(cljs.core.truth_(ks__8294))
{return cljs.core.assoc.call(null,m,k__8293,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8293,null),ks__8294,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8293,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8293,null),args));
}
};
var update_in = function (m,p__8286,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8286, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8295){
var m = cljs.core.first(arglist__8295);
var p__8286 = cljs.core.first(cljs.core.next(arglist__8295));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8295)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8295)));
return update_in__delegate(m, p__8286, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8298 = this;
var h__2151__auto____8299 = this__8298.__hash;
if(!((h__2151__auto____8299 == null)))
{return h__2151__auto____8299;
} else
{var h__2151__auto____8300 = cljs.core.hash_coll.call(null,coll);
this__8298.__hash = h__2151__auto____8300;
return h__2151__auto____8300;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8301 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8302 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8303 = this;
var new_array__8304 = this__8303.array.slice();
(new_array__8304[k] = v);
return (new cljs.core.Vector(this__8303.meta,new_array__8304,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8335 = null;
var G__8335__2 = (function (this_sym8305,k){
var this__8307 = this;
var this_sym8305__8308 = this;
var coll__8309 = this_sym8305__8308;
return coll__8309.cljs$core$ILookup$_lookup$arity$2(coll__8309,k);
});
var G__8335__3 = (function (this_sym8306,k,not_found){
var this__8307 = this;
var this_sym8306__8310 = this;
var coll__8311 = this_sym8306__8310;
return coll__8311.cljs$core$ILookup$_lookup$arity$3(coll__8311,k,not_found);
});
G__8335 = function(this_sym8306,k,not_found){
switch(arguments.length){
case 2:
return G__8335__2.call(this,this_sym8306,k);
case 3:
return G__8335__3.call(this,this_sym8306,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8335;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8296,args8297){
var this__8312 = this;
return this_sym8296.call.apply(this_sym8296,[this_sym8296].concat(args8297.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8313 = this;
var new_array__8314 = this__8313.array.slice();
new_array__8314.push(o);
return (new cljs.core.Vector(this__8313.meta,new_array__8314,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8315 = this;
var this__8316 = this;
return cljs.core.pr_str.call(null,this__8316);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8317 = this;
return cljs.core.ci_reduce.call(null,this__8317.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8318 = this;
return cljs.core.ci_reduce.call(null,this__8318.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8319 = this;
if((this__8319.array.length > 0))
{var vector_seq__8320 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8319.array.length))
{return cljs.core.cons.call(null,(this__8319.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8320.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8321 = this;
return this__8321.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8322 = this;
var count__8323 = this__8322.array.length;
if((count__8323 > 0))
{return (this__8322.array[(count__8323 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8324 = this;
if((this__8324.array.length > 0))
{var new_array__8325 = this__8324.array.slice();
new_array__8325.pop();
return (new cljs.core.Vector(this__8324.meta,new_array__8325,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8326 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8327 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8328 = this;
return (new cljs.core.Vector(meta,this__8328.array,this__8328.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8329 = this;
return this__8329.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8330 = this;
if((function (){var and__3822__auto____8331 = (0 <= n);
if(and__3822__auto____8331)
{return (n < this__8330.array.length);
} else
{return and__3822__auto____8331;
}
})())
{return (this__8330.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8332 = this;
if((function (){var and__3822__auto____8333 = (0 <= n);
if(and__3822__auto____8333)
{return (n < this__8332.array.length);
} else
{return and__3822__auto____8333;
}
})())
{return (this__8332.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8334 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8334.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2269__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8337 = pv.cnt;
if((cnt__8337 < 32))
{return 0;
} else
{return (((cnt__8337 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8343 = level;
var ret__8344 = node;
while(true){
if((ll__8343 === 0))
{return ret__8344;
} else
{var embed__8345 = ret__8344;
var r__8346 = cljs.core.pv_fresh_node.call(null,edit);
var ___8347 = cljs.core.pv_aset.call(null,r__8346,0,embed__8345);
{
var G__8348 = (ll__8343 - 5);
var G__8349 = r__8346;
ll__8343 = G__8348;
ret__8344 = G__8349;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8355 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8356 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8355,subidx__8356,tailnode);
return ret__8355;
} else
{var child__8357 = cljs.core.pv_aget.call(null,parent,subidx__8356);
if(!((child__8357 == null)))
{var node_to_insert__8358 = push_tail.call(null,pv,(level - 5),child__8357,tailnode);
cljs.core.pv_aset.call(null,ret__8355,subidx__8356,node_to_insert__8358);
return ret__8355;
} else
{var node_to_insert__8359 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8355,subidx__8356,node_to_insert__8359);
return ret__8355;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8363 = (0 <= i);
if(and__3822__auto____8363)
{return (i < pv.cnt);
} else
{return and__3822__auto____8363;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8364 = pv.root;
var level__8365 = pv.shift;
while(true){
if((level__8365 > 0))
{{
var G__8366 = cljs.core.pv_aget.call(null,node__8364,((i >>> level__8365) & 31));
var G__8367 = (level__8365 - 5);
node__8364 = G__8366;
level__8365 = G__8367;
continue;
}
} else
{return node__8364.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8370 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8370,(i & 31),val);
return ret__8370;
} else
{var subidx__8371 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8370,subidx__8371,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8371),i,val));
return ret__8370;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8377 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8378 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8377));
if((function (){var and__3822__auto____8379 = (new_child__8378 == null);
if(and__3822__auto____8379)
{return (subidx__8377 === 0);
} else
{return and__3822__auto____8379;
}
})())
{return null;
} else
{var ret__8380 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8380,subidx__8377,new_child__8378);
return ret__8380;
}
} else
{if((subidx__8377 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8381 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8381,subidx__8377,null);
return ret__8381;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8384 = this;
return (new cljs.core.TransientVector(this__8384.cnt,this__8384.shift,cljs.core.tv_editable_root.call(null,this__8384.root),cljs.core.tv_editable_tail.call(null,this__8384.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8385 = this;
var h__2151__auto____8386 = this__8385.__hash;
if(!((h__2151__auto____8386 == null)))
{return h__2151__auto____8386;
} else
{var h__2151__auto____8387 = cljs.core.hash_coll.call(null,coll);
this__8385.__hash = h__2151__auto____8387;
return h__2151__auto____8387;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8388 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8389 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8390 = this;
if((function (){var and__3822__auto____8391 = (0 <= k);
if(and__3822__auto____8391)
{return (k < this__8390.cnt);
} else
{return and__3822__auto____8391;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8392 = this__8390.tail.slice();
(new_tail__8392[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8390.meta,this__8390.cnt,this__8390.shift,this__8390.root,new_tail__8392,null));
} else
{return (new cljs.core.PersistentVector(this__8390.meta,this__8390.cnt,this__8390.shift,cljs.core.do_assoc.call(null,coll,this__8390.shift,this__8390.root,k,v),this__8390.tail,null));
}
} else
{if((k === this__8390.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8390.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8440 = null;
var G__8440__2 = (function (this_sym8393,k){
var this__8395 = this;
var this_sym8393__8396 = this;
var coll__8397 = this_sym8393__8396;
return coll__8397.cljs$core$ILookup$_lookup$arity$2(coll__8397,k);
});
var G__8440__3 = (function (this_sym8394,k,not_found){
var this__8395 = this;
var this_sym8394__8398 = this;
var coll__8399 = this_sym8394__8398;
return coll__8399.cljs$core$ILookup$_lookup$arity$3(coll__8399,k,not_found);
});
G__8440 = function(this_sym8394,k,not_found){
switch(arguments.length){
case 2:
return G__8440__2.call(this,this_sym8394,k);
case 3:
return G__8440__3.call(this,this_sym8394,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8440;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8382,args8383){
var this__8400 = this;
return this_sym8382.call.apply(this_sym8382,[this_sym8382].concat(args8383.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8401 = this;
var step_init__8402 = [0,init];
var i__8403 = 0;
while(true){
if((i__8403 < this__8401.cnt))
{var arr__8404 = cljs.core.array_for.call(null,v,i__8403);
var len__8405 = arr__8404.length;
var init__8409 = (function (){var j__8406 = 0;
var init__8407 = (step_init__8402[1]);
while(true){
if((j__8406 < len__8405))
{var init__8408 = f.call(null,init__8407,(j__8406 + i__8403),(arr__8404[j__8406]));
if(cljs.core.reduced_QMARK_.call(null,init__8408))
{return init__8408;
} else
{{
var G__8441 = (j__8406 + 1);
var G__8442 = init__8408;
j__8406 = G__8441;
init__8407 = G__8442;
continue;
}
}
} else
{(step_init__8402[0] = len__8405);
(step_init__8402[1] = init__8407);
return init__8407;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8409))
{return cljs.core.deref.call(null,init__8409);
} else
{{
var G__8443 = (i__8403 + (step_init__8402[0]));
i__8403 = G__8443;
continue;
}
}
} else
{return (step_init__8402[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8410 = this;
if(((this__8410.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8411 = this__8410.tail.slice();
new_tail__8411.push(o);
return (new cljs.core.PersistentVector(this__8410.meta,(this__8410.cnt + 1),this__8410.shift,this__8410.root,new_tail__8411,null));
} else
{var root_overflow_QMARK___8412 = ((this__8410.cnt >>> 5) > (1 << this__8410.shift));
var new_shift__8413 = ((root_overflow_QMARK___8412)?(this__8410.shift + 5):this__8410.shift);
var new_root__8415 = ((root_overflow_QMARK___8412)?(function (){var n_r__8414 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8414,0,this__8410.root);
cljs.core.pv_aset.call(null,n_r__8414,1,cljs.core.new_path.call(null,null,this__8410.shift,(new cljs.core.VectorNode(null,this__8410.tail))));
return n_r__8414;
})():cljs.core.push_tail.call(null,coll,this__8410.shift,this__8410.root,(new cljs.core.VectorNode(null,this__8410.tail))));
return (new cljs.core.PersistentVector(this__8410.meta,(this__8410.cnt + 1),new_shift__8413,new_root__8415,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8416 = this;
if((this__8416.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8416.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8417 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8418 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8419 = this;
var this__8420 = this;
return cljs.core.pr_str.call(null,this__8420);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8421 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8422 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8423 = this;
if((this__8423.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8424 = this;
return this__8424.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8425 = this;
if((this__8425.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8425.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8426 = this;
if((this__8426.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8426.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8426.meta);
} else
{if((1 < (this__8426.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8426.meta,(this__8426.cnt - 1),this__8426.shift,this__8426.root,this__8426.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8427 = cljs.core.array_for.call(null,coll,(this__8426.cnt - 2));
var nr__8428 = cljs.core.pop_tail.call(null,coll,this__8426.shift,this__8426.root);
var new_root__8429 = (((nr__8428 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8428);
var cnt_1__8430 = (this__8426.cnt - 1);
if((function (){var and__3822__auto____8431 = (5 < this__8426.shift);
if(and__3822__auto____8431)
{return (cljs.core.pv_aget.call(null,new_root__8429,1) == null);
} else
{return and__3822__auto____8431;
}
})())
{return (new cljs.core.PersistentVector(this__8426.meta,cnt_1__8430,(this__8426.shift - 5),cljs.core.pv_aget.call(null,new_root__8429,0),new_tail__8427,null));
} else
{return (new cljs.core.PersistentVector(this__8426.meta,cnt_1__8430,this__8426.shift,new_root__8429,new_tail__8427,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8432 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8434 = this;
return (new cljs.core.PersistentVector(meta,this__8434.cnt,this__8434.shift,this__8434.root,this__8434.tail,this__8434.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8435 = this;
return this__8435.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8436 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8437 = this;
if((function (){var and__3822__auto____8438 = (0 <= n);
if(and__3822__auto____8438)
{return (n < this__8437.cnt);
} else
{return and__3822__auto____8438;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8439 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8439.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8444 = xs.length;
var xs__8445 = (((no_clone === true))?xs:xs.slice());
if((l__8444 < 32))
{return (new cljs.core.PersistentVector(null,l__8444,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8445,null));
} else
{var node__8446 = xs__8445.slice(0,32);
var v__8447 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8446,null));
var i__8448 = 32;
var out__8449 = cljs.core._as_transient.call(null,v__8447);
while(true){
if((i__8448 < l__8444))
{{
var G__8450 = (i__8448 + 1);
var G__8451 = cljs.core.conj_BANG_.call(null,out__8449,(xs__8445[i__8448]));
i__8448 = G__8450;
out__8449 = G__8451;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8449);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8452){
var args = cljs.core.seq(arglist__8452);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8453 = this;
var h__2151__auto____8454 = this__8453.__hash;
if(!((h__2151__auto____8454 == null)))
{return h__2151__auto____8454;
} else
{var h__2151__auto____8455 = cljs.core.hash_coll.call(null,coll);
this__8453.__hash = h__2151__auto____8455;
return h__2151__auto____8455;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8456 = this;
if(((this__8456.off + 1) < this__8456.node.length))
{var s__8457 = cljs.core.chunked_seq.call(null,this__8456.vec,this__8456.node,this__8456.i,(this__8456.off + 1));
if((s__8457 == null))
{return null;
} else
{return s__8457;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8458 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8459 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8460 = this;
return (this__8460.node[this__8460.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8461 = this;
if(((this__8461.off + 1) < this__8461.node.length))
{var s__8462 = cljs.core.chunked_seq.call(null,this__8461.vec,this__8461.node,this__8461.i,(this__8461.off + 1));
if((s__8462 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8462;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8463 = this;
var l__8464 = this__8463.node.length;
var s__8465 = ((((this__8463.i + l__8464) < cljs.core._count.call(null,this__8463.vec)))?cljs.core.chunked_seq.call(null,this__8463.vec,(this__8463.i + l__8464),0):null);
if((s__8465 == null))
{return null;
} else
{return s__8465;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8466 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8467 = this;
return cljs.core.chunked_seq.call(null,this__8467.vec,this__8467.node,this__8467.i,this__8467.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8468 = this;
return this__8468.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8469 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8469.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8470 = this;
return cljs.core.array_chunk.call(null,this__8470.node,this__8470.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8471 = this;
var l__8472 = this__8471.node.length;
var s__8473 = ((((this__8471.i + l__8472) < cljs.core._count.call(null,this__8471.vec)))?cljs.core.chunked_seq.call(null,this__8471.vec,(this__8471.i + l__8472),0):null);
if((s__8473 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8473;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8476 = this;
var h__2151__auto____8477 = this__8476.__hash;
if(!((h__2151__auto____8477 == null)))
{return h__2151__auto____8477;
} else
{var h__2151__auto____8478 = cljs.core.hash_coll.call(null,coll);
this__8476.__hash = h__2151__auto____8478;
return h__2151__auto____8478;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8479 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8480 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8481 = this;
var v_pos__8482 = (this__8481.start + key);
return (new cljs.core.Subvec(this__8481.meta,cljs.core._assoc.call(null,this__8481.v,v_pos__8482,val),this__8481.start,((this__8481.end > (v_pos__8482 + 1)) ? this__8481.end : (v_pos__8482 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8508 = null;
var G__8508__2 = (function (this_sym8483,k){
var this__8485 = this;
var this_sym8483__8486 = this;
var coll__8487 = this_sym8483__8486;
return coll__8487.cljs$core$ILookup$_lookup$arity$2(coll__8487,k);
});
var G__8508__3 = (function (this_sym8484,k,not_found){
var this__8485 = this;
var this_sym8484__8488 = this;
var coll__8489 = this_sym8484__8488;
return coll__8489.cljs$core$ILookup$_lookup$arity$3(coll__8489,k,not_found);
});
G__8508 = function(this_sym8484,k,not_found){
switch(arguments.length){
case 2:
return G__8508__2.call(this,this_sym8484,k);
case 3:
return G__8508__3.call(this,this_sym8484,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8508;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8474,args8475){
var this__8490 = this;
return this_sym8474.call.apply(this_sym8474,[this_sym8474].concat(args8475.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8491 = this;
return (new cljs.core.Subvec(this__8491.meta,cljs.core._assoc_n.call(null,this__8491.v,this__8491.end,o),this__8491.start,(this__8491.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8492 = this;
var this__8493 = this;
return cljs.core.pr_str.call(null,this__8493);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8494 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8495 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8496 = this;
var subvec_seq__8497 = (function subvec_seq(i){
if((i === this__8496.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8496.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8497.call(null,this__8496.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8498 = this;
return (this__8498.end - this__8498.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8499 = this;
return cljs.core._nth.call(null,this__8499.v,(this__8499.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8500 = this;
if((this__8500.start === this__8500.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8500.meta,this__8500.v,this__8500.start,(this__8500.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8501 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8502 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8503 = this;
return (new cljs.core.Subvec(meta,this__8503.v,this__8503.start,this__8503.end,this__8503.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8504 = this;
return this__8504.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8505 = this;
return cljs.core._nth.call(null,this__8505.v,(this__8505.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8506 = this;
return cljs.core._nth.call(null,this__8506.v,(this__8506.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8507 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8507.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8510 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8510,0,tl.length);
return ret__8510;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8514 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8515 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8514,subidx__8515,(((level === 5))?tail_node:(function (){var child__8516 = cljs.core.pv_aget.call(null,ret__8514,subidx__8515);
if(!((child__8516 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8516,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8514;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8521 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8522 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8523 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8521,subidx__8522));
if((function (){var and__3822__auto____8524 = (new_child__8523 == null);
if(and__3822__auto____8524)
{return (subidx__8522 === 0);
} else
{return and__3822__auto____8524;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8521,subidx__8522,new_child__8523);
return node__8521;
}
} else
{if((subidx__8522 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8521,subidx__8522,null);
return node__8521;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8529 = (0 <= i);
if(and__3822__auto____8529)
{return (i < tv.cnt);
} else
{return and__3822__auto____8529;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8530 = tv.root;
var node__8531 = root__8530;
var level__8532 = tv.shift;
while(true){
if((level__8532 > 0))
{{
var G__8533 = cljs.core.tv_ensure_editable.call(null,root__8530.edit,cljs.core.pv_aget.call(null,node__8531,((i >>> level__8532) & 31)));
var G__8534 = (level__8532 - 5);
node__8531 = G__8533;
level__8532 = G__8534;
continue;
}
} else
{return node__8531.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8574 = null;
var G__8574__2 = (function (this_sym8537,k){
var this__8539 = this;
var this_sym8537__8540 = this;
var coll__8541 = this_sym8537__8540;
return coll__8541.cljs$core$ILookup$_lookup$arity$2(coll__8541,k);
});
var G__8574__3 = (function (this_sym8538,k,not_found){
var this__8539 = this;
var this_sym8538__8542 = this;
var coll__8543 = this_sym8538__8542;
return coll__8543.cljs$core$ILookup$_lookup$arity$3(coll__8543,k,not_found);
});
G__8574 = function(this_sym8538,k,not_found){
switch(arguments.length){
case 2:
return G__8574__2.call(this,this_sym8538,k);
case 3:
return G__8574__3.call(this,this_sym8538,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8574;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8535,args8536){
var this__8544 = this;
return this_sym8535.call.apply(this_sym8535,[this_sym8535].concat(args8536.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8545 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8546 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8547 = this;
if(this__8547.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8548 = this;
if((function (){var and__3822__auto____8549 = (0 <= n);
if(and__3822__auto____8549)
{return (n < this__8548.cnt);
} else
{return and__3822__auto____8549;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8550 = this;
if(this__8550.root.edit)
{return this__8550.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8551 = this;
if(this__8551.root.edit)
{if((function (){var and__3822__auto____8552 = (0 <= n);
if(and__3822__auto____8552)
{return (n < this__8551.cnt);
} else
{return and__3822__auto____8552;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8551.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8557 = (function go(level,node){
var node__8555 = cljs.core.tv_ensure_editable.call(null,this__8551.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8555,(n & 31),val);
return node__8555;
} else
{var subidx__8556 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8555,subidx__8556,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8555,subidx__8556)));
return node__8555;
}
}).call(null,this__8551.shift,this__8551.root);
this__8551.root = new_root__8557;
return tcoll;
}
} else
{if((n === this__8551.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8551.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8558 = this;
if(this__8558.root.edit)
{if((this__8558.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8558.cnt))
{this__8558.cnt = 0;
return tcoll;
} else
{if((((this__8558.cnt - 1) & 31) > 0))
{this__8558.cnt = (this__8558.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8559 = cljs.core.editable_array_for.call(null,tcoll,(this__8558.cnt - 2));
var new_root__8561 = (function (){var nr__8560 = cljs.core.tv_pop_tail.call(null,tcoll,this__8558.shift,this__8558.root);
if(!((nr__8560 == null)))
{return nr__8560;
} else
{return (new cljs.core.VectorNode(this__8558.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8562 = (5 < this__8558.shift);
if(and__3822__auto____8562)
{return (cljs.core.pv_aget.call(null,new_root__8561,1) == null);
} else
{return and__3822__auto____8562;
}
})())
{var new_root__8563 = cljs.core.tv_ensure_editable.call(null,this__8558.root.edit,cljs.core.pv_aget.call(null,new_root__8561,0));
this__8558.root = new_root__8563;
this__8558.shift = (this__8558.shift - 5);
this__8558.cnt = (this__8558.cnt - 1);
this__8558.tail = new_tail__8559;
return tcoll;
} else
{this__8558.root = new_root__8561;
this__8558.cnt = (this__8558.cnt - 1);
this__8558.tail = new_tail__8559;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8564 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8565 = this;
if(this__8565.root.edit)
{if(((this__8565.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8565.tail[(this__8565.cnt & 31)] = o);
this__8565.cnt = (this__8565.cnt + 1);
return tcoll;
} else
{var tail_node__8566 = (new cljs.core.VectorNode(this__8565.root.edit,this__8565.tail));
var new_tail__8567 = cljs.core.make_array.call(null,32);
(new_tail__8567[0] = o);
this__8565.tail = new_tail__8567;
if(((this__8565.cnt >>> 5) > (1 << this__8565.shift)))
{var new_root_array__8568 = cljs.core.make_array.call(null,32);
var new_shift__8569 = (this__8565.shift + 5);
(new_root_array__8568[0] = this__8565.root);
(new_root_array__8568[1] = cljs.core.new_path.call(null,this__8565.root.edit,this__8565.shift,tail_node__8566));
this__8565.root = (new cljs.core.VectorNode(this__8565.root.edit,new_root_array__8568));
this__8565.shift = new_shift__8569;
this__8565.cnt = (this__8565.cnt + 1);
return tcoll;
} else
{var new_root__8570 = cljs.core.tv_push_tail.call(null,tcoll,this__8565.shift,this__8565.root,tail_node__8566);
this__8565.root = new_root__8570;
this__8565.cnt = (this__8565.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8571 = this;
if(this__8571.root.edit)
{this__8571.root.edit = null;
var len__8572 = (this__8571.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8573 = cljs.core.make_array.call(null,len__8572);
cljs.core.array_copy.call(null,this__8571.tail,0,trimmed_tail__8573,0,len__8572);
return (new cljs.core.PersistentVector(null,this__8571.cnt,this__8571.shift,this__8571.root,trimmed_tail__8573,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8575 = this;
var h__2151__auto____8576 = this__8575.__hash;
if(!((h__2151__auto____8576 == null)))
{return h__2151__auto____8576;
} else
{var h__2151__auto____8577 = cljs.core.hash_coll.call(null,coll);
this__8575.__hash = h__2151__auto____8577;
return h__2151__auto____8577;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8578 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8579 = this;
var this__8580 = this;
return cljs.core.pr_str.call(null,this__8580);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8581 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8582 = this;
return cljs.core._first.call(null,this__8582.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8583 = this;
var temp__3971__auto____8584 = cljs.core.next.call(null,this__8583.front);
if(temp__3971__auto____8584)
{var f1__8585 = temp__3971__auto____8584;
return (new cljs.core.PersistentQueueSeq(this__8583.meta,f1__8585,this__8583.rear,null));
} else
{if((this__8583.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8583.meta,this__8583.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8586 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8587 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8587.front,this__8587.rear,this__8587.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8588 = this;
return this__8588.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8589 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8589.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8590 = this;
var h__2151__auto____8591 = this__8590.__hash;
if(!((h__2151__auto____8591 == null)))
{return h__2151__auto____8591;
} else
{var h__2151__auto____8592 = cljs.core.hash_coll.call(null,coll);
this__8590.__hash = h__2151__auto____8592;
return h__2151__auto____8592;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8593 = this;
if(cljs.core.truth_(this__8593.front))
{return (new cljs.core.PersistentQueue(this__8593.meta,(this__8593.count + 1),this__8593.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8594 = this__8593.rear;
if(cljs.core.truth_(or__3824__auto____8594))
{return or__3824__auto____8594;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8593.meta,(this__8593.count + 1),cljs.core.conj.call(null,this__8593.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8595 = this;
var this__8596 = this;
return cljs.core.pr_str.call(null,this__8596);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8597 = this;
var rear__8598 = cljs.core.seq.call(null,this__8597.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8599 = this__8597.front;
if(cljs.core.truth_(or__3824__auto____8599))
{return or__3824__auto____8599;
} else
{return rear__8598;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8597.front,cljs.core.seq.call(null,rear__8598),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8600 = this;
return this__8600.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8601 = this;
return cljs.core._first.call(null,this__8601.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8602 = this;
if(cljs.core.truth_(this__8602.front))
{var temp__3971__auto____8603 = cljs.core.next.call(null,this__8602.front);
if(temp__3971__auto____8603)
{var f1__8604 = temp__3971__auto____8603;
return (new cljs.core.PersistentQueue(this__8602.meta,(this__8602.count - 1),f1__8604,this__8602.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8602.meta,(this__8602.count - 1),cljs.core.seq.call(null,this__8602.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8605 = this;
return cljs.core.first.call(null,this__8605.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8606 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8608 = this;
return (new cljs.core.PersistentQueue(meta,this__8608.count,this__8608.front,this__8608.rear,this__8608.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8609 = this;
return this__8609.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8610 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8611 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8614 = array.length;
var i__8615 = 0;
while(true){
if((i__8615 < len__8614))
{if((k === (array[i__8615])))
{return i__8615;
} else
{{
var G__8616 = (i__8615 + incr);
i__8615 = G__8616;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8619 = cljs.core.hash.call(null,a);
var b__8620 = cljs.core.hash.call(null,b);
if((a__8619 < b__8620))
{return -1;
} else
{if((a__8619 > b__8620))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8628 = m.keys;
var len__8629 = ks__8628.length;
var so__8630 = m.strobj;
var out__8631 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8632 = 0;
var out__8633 = cljs.core.transient$.call(null,out__8631);
while(true){
if((i__8632 < len__8629))
{var k__8634 = (ks__8628[i__8632]);
{
var G__8635 = (i__8632 + 1);
var G__8636 = cljs.core.assoc_BANG_.call(null,out__8633,k__8634,(so__8630[k__8634]));
i__8632 = G__8635;
out__8633 = G__8636;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8633,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8642 = {};
var l__8643 = ks.length;
var i__8644 = 0;
while(true){
if((i__8644 < l__8643))
{var k__8645 = (ks[i__8644]);
(new_obj__8642[k__8645] = (obj[k__8645]));
{
var G__8646 = (i__8644 + 1);
i__8644 = G__8646;
continue;
}
} else
{}
break;
}
return new_obj__8642;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8649 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8650 = this;
var h__2151__auto____8651 = this__8650.__hash;
if(!((h__2151__auto____8651 == null)))
{return h__2151__auto____8651;
} else
{var h__2151__auto____8652 = cljs.core.hash_imap.call(null,coll);
this__8650.__hash = h__2151__auto____8652;
return h__2151__auto____8652;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8653 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8654 = this;
if((function (){var and__3822__auto____8655 = goog.isString(k);
if(and__3822__auto____8655)
{return !((cljs.core.scan_array.call(null,1,k,this__8654.keys) == null));
} else
{return and__3822__auto____8655;
}
})())
{return (this__8654.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8656 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8657 = (this__8656.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8657)
{return or__3824__auto____8657;
} else
{return (this__8656.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8656.keys) == null)))
{var new_strobj__8658 = cljs.core.obj_clone.call(null,this__8656.strobj,this__8656.keys);
(new_strobj__8658[k] = v);
return (new cljs.core.ObjMap(this__8656.meta,this__8656.keys,new_strobj__8658,(this__8656.update_count + 1),null));
} else
{var new_strobj__8659 = cljs.core.obj_clone.call(null,this__8656.strobj,this__8656.keys);
var new_keys__8660 = this__8656.keys.slice();
(new_strobj__8659[k] = v);
new_keys__8660.push(k);
return (new cljs.core.ObjMap(this__8656.meta,new_keys__8660,new_strobj__8659,(this__8656.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8661 = this;
if((function (){var and__3822__auto____8662 = goog.isString(k);
if(and__3822__auto____8662)
{return !((cljs.core.scan_array.call(null,1,k,this__8661.keys) == null));
} else
{return and__3822__auto____8662;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8684 = null;
var G__8684__2 = (function (this_sym8663,k){
var this__8665 = this;
var this_sym8663__8666 = this;
var coll__8667 = this_sym8663__8666;
return coll__8667.cljs$core$ILookup$_lookup$arity$2(coll__8667,k);
});
var G__8684__3 = (function (this_sym8664,k,not_found){
var this__8665 = this;
var this_sym8664__8668 = this;
var coll__8669 = this_sym8664__8668;
return coll__8669.cljs$core$ILookup$_lookup$arity$3(coll__8669,k,not_found);
});
G__8684 = function(this_sym8664,k,not_found){
switch(arguments.length){
case 2:
return G__8684__2.call(this,this_sym8664,k);
case 3:
return G__8684__3.call(this,this_sym8664,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8684;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8647,args8648){
var this__8670 = this;
return this_sym8647.call.apply(this_sym8647,[this_sym8647].concat(args8648.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8671 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8672 = this;
var this__8673 = this;
return cljs.core.pr_str.call(null,this__8673);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8674 = this;
if((this__8674.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8637_SHARP_){
return cljs.core.vector.call(null,p1__8637_SHARP_,(this__8674.strobj[p1__8637_SHARP_]));
}),this__8674.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8675 = this;
return this__8675.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8676 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8677 = this;
return (new cljs.core.ObjMap(meta,this__8677.keys,this__8677.strobj,this__8677.update_count,this__8677.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8678 = this;
return this__8678.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8679 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8679.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8680 = this;
if((function (){var and__3822__auto____8681 = goog.isString(k);
if(and__3822__auto____8681)
{return !((cljs.core.scan_array.call(null,1,k,this__8680.keys) == null));
} else
{return and__3822__auto____8681;
}
})())
{var new_keys__8682 = this__8680.keys.slice();
var new_strobj__8683 = cljs.core.obj_clone.call(null,this__8680.strobj,this__8680.keys);
new_keys__8682.splice(cljs.core.scan_array.call(null,1,k,new_keys__8682),1);
cljs.core.js_delete.call(null,new_strobj__8683,k);
return (new cljs.core.ObjMap(this__8680.meta,new_keys__8682,new_strobj__8683,(this__8680.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8688 = this;
var h__2151__auto____8689 = this__8688.__hash;
if(!((h__2151__auto____8689 == null)))
{return h__2151__auto____8689;
} else
{var h__2151__auto____8690 = cljs.core.hash_imap.call(null,coll);
this__8688.__hash = h__2151__auto____8690;
return h__2151__auto____8690;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8691 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8692 = this;
var bucket__8693 = (this__8692.hashobj[cljs.core.hash.call(null,k)]);
var i__8694 = (cljs.core.truth_(bucket__8693)?cljs.core.scan_array.call(null,2,k,bucket__8693):null);
if(cljs.core.truth_(i__8694))
{return (bucket__8693[(i__8694 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8695 = this;
var h__8696 = cljs.core.hash.call(null,k);
var bucket__8697 = (this__8695.hashobj[h__8696]);
if(cljs.core.truth_(bucket__8697))
{var new_bucket__8698 = bucket__8697.slice();
var new_hashobj__8699 = goog.object.clone(this__8695.hashobj);
(new_hashobj__8699[h__8696] = new_bucket__8698);
var temp__3971__auto____8700 = cljs.core.scan_array.call(null,2,k,new_bucket__8698);
if(cljs.core.truth_(temp__3971__auto____8700))
{var i__8701 = temp__3971__auto____8700;
(new_bucket__8698[(i__8701 + 1)] = v);
return (new cljs.core.HashMap(this__8695.meta,this__8695.count,new_hashobj__8699,null));
} else
{new_bucket__8698.push(k,v);
return (new cljs.core.HashMap(this__8695.meta,(this__8695.count + 1),new_hashobj__8699,null));
}
} else
{var new_hashobj__8702 = goog.object.clone(this__8695.hashobj);
(new_hashobj__8702[h__8696] = [k,v]);
return (new cljs.core.HashMap(this__8695.meta,(this__8695.count + 1),new_hashobj__8702,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8703 = this;
var bucket__8704 = (this__8703.hashobj[cljs.core.hash.call(null,k)]);
var i__8705 = (cljs.core.truth_(bucket__8704)?cljs.core.scan_array.call(null,2,k,bucket__8704):null);
if(cljs.core.truth_(i__8705))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8730 = null;
var G__8730__2 = (function (this_sym8706,k){
var this__8708 = this;
var this_sym8706__8709 = this;
var coll__8710 = this_sym8706__8709;
return coll__8710.cljs$core$ILookup$_lookup$arity$2(coll__8710,k);
});
var G__8730__3 = (function (this_sym8707,k,not_found){
var this__8708 = this;
var this_sym8707__8711 = this;
var coll__8712 = this_sym8707__8711;
return coll__8712.cljs$core$ILookup$_lookup$arity$3(coll__8712,k,not_found);
});
G__8730 = function(this_sym8707,k,not_found){
switch(arguments.length){
case 2:
return G__8730__2.call(this,this_sym8707,k);
case 3:
return G__8730__3.call(this,this_sym8707,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8730;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8686,args8687){
var this__8713 = this;
return this_sym8686.call.apply(this_sym8686,[this_sym8686].concat(args8687.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8714 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8715 = this;
var this__8716 = this;
return cljs.core.pr_str.call(null,this__8716);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8717 = this;
if((this__8717.count > 0))
{var hashes__8718 = cljs.core.js_keys.call(null,this__8717.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8685_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8717.hashobj[p1__8685_SHARP_])));
}),hashes__8718);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8719 = this;
return this__8719.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8720 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8721 = this;
return (new cljs.core.HashMap(meta,this__8721.count,this__8721.hashobj,this__8721.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8722 = this;
return this__8722.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8723 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8723.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8724 = this;
var h__8725 = cljs.core.hash.call(null,k);
var bucket__8726 = (this__8724.hashobj[h__8725]);
var i__8727 = (cljs.core.truth_(bucket__8726)?cljs.core.scan_array.call(null,2,k,bucket__8726):null);
if(cljs.core.not.call(null,i__8727))
{return coll;
} else
{var new_hashobj__8728 = goog.object.clone(this__8724.hashobj);
if((3 > bucket__8726.length))
{cljs.core.js_delete.call(null,new_hashobj__8728,h__8725);
} else
{var new_bucket__8729 = bucket__8726.slice();
new_bucket__8729.splice(i__8727,2);
(new_hashobj__8728[h__8725] = new_bucket__8729);
}
return (new cljs.core.HashMap(this__8724.meta,(this__8724.count - 1),new_hashobj__8728,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8731 = ks.length;
var i__8732 = 0;
var out__8733 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8732 < len__8731))
{{
var G__8734 = (i__8732 + 1);
var G__8735 = cljs.core.assoc.call(null,out__8733,(ks[i__8732]),(vs[i__8732]));
i__8732 = G__8734;
out__8733 = G__8735;
continue;
}
} else
{return out__8733;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8739 = m.arr;
var len__8740 = arr__8739.length;
var i__8741 = 0;
while(true){
if((len__8740 <= i__8741))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8739[i__8741]),k))
{return i__8741;
} else
{if("\uFDD0'else")
{{
var G__8742 = (i__8741 + 2);
i__8741 = G__8742;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8745 = this;
return (new cljs.core.TransientArrayMap({},this__8745.arr.length,this__8745.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8746 = this;
var h__2151__auto____8747 = this__8746.__hash;
if(!((h__2151__auto____8747 == null)))
{return h__2151__auto____8747;
} else
{var h__2151__auto____8748 = cljs.core.hash_imap.call(null,coll);
this__8746.__hash = h__2151__auto____8748;
return h__2151__auto____8748;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8749 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8750 = this;
var idx__8751 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8751 === -1))
{return not_found;
} else
{return (this__8750.arr[(idx__8751 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8752 = this;
var idx__8753 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8753 === -1))
{if((this__8752.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8752.meta,(this__8752.cnt + 1),(function (){var G__8754__8755 = this__8752.arr.slice();
G__8754__8755.push(k);
G__8754__8755.push(v);
return G__8754__8755;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8752.arr[(idx__8753 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8752.meta,this__8752.cnt,(function (){var G__8756__8757 = this__8752.arr.slice();
(G__8756__8757[(idx__8753 + 1)] = v);
return G__8756__8757;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8758 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8790 = null;
var G__8790__2 = (function (this_sym8759,k){
var this__8761 = this;
var this_sym8759__8762 = this;
var coll__8763 = this_sym8759__8762;
return coll__8763.cljs$core$ILookup$_lookup$arity$2(coll__8763,k);
});
var G__8790__3 = (function (this_sym8760,k,not_found){
var this__8761 = this;
var this_sym8760__8764 = this;
var coll__8765 = this_sym8760__8764;
return coll__8765.cljs$core$ILookup$_lookup$arity$3(coll__8765,k,not_found);
});
G__8790 = function(this_sym8760,k,not_found){
switch(arguments.length){
case 2:
return G__8790__2.call(this,this_sym8760,k);
case 3:
return G__8790__3.call(this,this_sym8760,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8790;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8743,args8744){
var this__8766 = this;
return this_sym8743.call.apply(this_sym8743,[this_sym8743].concat(args8744.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8767 = this;
var len__8768 = this__8767.arr.length;
var i__8769 = 0;
var init__8770 = init;
while(true){
if((i__8769 < len__8768))
{var init__8771 = f.call(null,init__8770,(this__8767.arr[i__8769]),(this__8767.arr[(i__8769 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8771))
{return cljs.core.deref.call(null,init__8771);
} else
{{
var G__8791 = (i__8769 + 2);
var G__8792 = init__8771;
i__8769 = G__8791;
init__8770 = G__8792;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8772 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8773 = this;
var this__8774 = this;
return cljs.core.pr_str.call(null,this__8774);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8775 = this;
if((this__8775.cnt > 0))
{var len__8776 = this__8775.arr.length;
var array_map_seq__8777 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8776))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8775.arr[i]),(this__8775.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8777.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8778 = this;
return this__8778.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8779 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8780 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8780.cnt,this__8780.arr,this__8780.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8781 = this;
return this__8781.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8782 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8782.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8783 = this;
var idx__8784 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8784 >= 0))
{var len__8785 = this__8783.arr.length;
var new_len__8786 = (len__8785 - 2);
if((new_len__8786 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8787 = cljs.core.make_array.call(null,new_len__8786);
var s__8788 = 0;
var d__8789 = 0;
while(true){
if((s__8788 >= len__8785))
{return (new cljs.core.PersistentArrayMap(this__8783.meta,(this__8783.cnt - 1),new_arr__8787,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8783.arr[s__8788])))
{{
var G__8793 = (s__8788 + 2);
var G__8794 = d__8789;
s__8788 = G__8793;
d__8789 = G__8794;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8787[d__8789] = (this__8783.arr[s__8788]));
(new_arr__8787[(d__8789 + 1)] = (this__8783.arr[(s__8788 + 1)]));
{
var G__8795 = (s__8788 + 2);
var G__8796 = (d__8789 + 2);
s__8788 = G__8795;
d__8789 = G__8796;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8797 = cljs.core.count.call(null,ks);
var i__8798 = 0;
var out__8799 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8798 < len__8797))
{{
var G__8800 = (i__8798 + 1);
var G__8801 = cljs.core.assoc_BANG_.call(null,out__8799,(ks[i__8798]),(vs[i__8798]));
i__8798 = G__8800;
out__8799 = G__8801;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8799);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8802 = this;
if(cljs.core.truth_(this__8802.editable_QMARK_))
{var idx__8803 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8803 >= 0))
{(this__8802.arr[idx__8803] = (this__8802.arr[(this__8802.len - 2)]));
(this__8802.arr[(idx__8803 + 1)] = (this__8802.arr[(this__8802.len - 1)]));
var G__8804__8805 = this__8802.arr;
G__8804__8805.pop();
G__8804__8805.pop();
G__8804__8805;
this__8802.len = (this__8802.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8806 = this;
if(cljs.core.truth_(this__8806.editable_QMARK_))
{var idx__8807 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8807 === -1))
{if(((this__8806.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8806.len = (this__8806.len + 2);
this__8806.arr.push(key);
this__8806.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8806.len,this__8806.arr),key,val);
}
} else
{if((val === (this__8806.arr[(idx__8807 + 1)])))
{return tcoll;
} else
{(this__8806.arr[(idx__8807 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8808 = this;
if(cljs.core.truth_(this__8808.editable_QMARK_))
{if((function (){var G__8809__8810 = o;
if(G__8809__8810)
{if((function (){var or__3824__auto____8811 = (G__8809__8810.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8811)
{return or__3824__auto____8811;
} else
{return G__8809__8810.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8809__8810.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8809__8810);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8809__8810);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8812 = cljs.core.seq.call(null,o);
var tcoll__8813 = tcoll;
while(true){
var temp__3971__auto____8814 = cljs.core.first.call(null,es__8812);
if(cljs.core.truth_(temp__3971__auto____8814))
{var e__8815 = temp__3971__auto____8814;
{
var G__8821 = cljs.core.next.call(null,es__8812);
var G__8822 = tcoll__8813.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8813,cljs.core.key.call(null,e__8815),cljs.core.val.call(null,e__8815));
es__8812 = G__8821;
tcoll__8813 = G__8822;
continue;
}
} else
{return tcoll__8813;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8816 = this;
if(cljs.core.truth_(this__8816.editable_QMARK_))
{this__8816.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8816.len,2),this__8816.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8817 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8818 = this;
if(cljs.core.truth_(this__8818.editable_QMARK_))
{var idx__8819 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8819 === -1))
{return not_found;
} else
{return (this__8818.arr[(idx__8819 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8820 = this;
if(cljs.core.truth_(this__8820.editable_QMARK_))
{return cljs.core.quot.call(null,this__8820.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8825 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8826 = 0;
while(true){
if((i__8826 < len))
{{
var G__8827 = cljs.core.assoc_BANG_.call(null,out__8825,(arr[i__8826]),(arr[(i__8826 + 1)]));
var G__8828 = (i__8826 + 2);
out__8825 = G__8827;
i__8826 = G__8828;
continue;
}
} else
{return out__8825;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2269__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8833__8834 = arr.slice();
(G__8833__8834[i] = a);
return G__8833__8834;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8835__8836 = arr.slice();
(G__8835__8836[i] = a);
(G__8835__8836[j] = b);
return G__8835__8836;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8838 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8838,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8838,(2 * i),(new_arr__8838.length - (2 * i)));
return new_arr__8838;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8841 = inode.ensure_editable(edit);
(editable__8841.arr[i] = a);
return editable__8841;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8842 = inode.ensure_editable(edit);
(editable__8842.arr[i] = a);
(editable__8842.arr[j] = b);
return editable__8842;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8849 = arr.length;
var i__8850 = 0;
var init__8851 = init;
while(true){
if((i__8850 < len__8849))
{var init__8854 = (function (){var k__8852 = (arr[i__8850]);
if(!((k__8852 == null)))
{return f.call(null,init__8851,k__8852,(arr[(i__8850 + 1)]));
} else
{var node__8853 = (arr[(i__8850 + 1)]);
if(!((node__8853 == null)))
{return node__8853.kv_reduce(f,init__8851);
} else
{return init__8851;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8854))
{return cljs.core.deref.call(null,init__8854);
} else
{{
var G__8855 = (i__8850 + 2);
var G__8856 = init__8854;
i__8850 = G__8855;
init__8851 = G__8856;
continue;
}
}
} else
{return init__8851;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8857 = this;
var inode__8858 = this;
if((this__8857.bitmap === bit))
{return null;
} else
{var editable__8859 = inode__8858.ensure_editable(e);
var earr__8860 = editable__8859.arr;
var len__8861 = earr__8860.length;
editable__8859.bitmap = (bit ^ editable__8859.bitmap);
cljs.core.array_copy.call(null,earr__8860,(2 * (i + 1)),earr__8860,(2 * i),(len__8861 - (2 * (i + 1))));
(earr__8860[(len__8861 - 2)] = null);
(earr__8860[(len__8861 - 1)] = null);
return editable__8859;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8862 = this;
var inode__8863 = this;
var bit__8864 = (1 << ((hash >>> shift) & 0x01f));
var idx__8865 = cljs.core.bitmap_indexed_node_index.call(null,this__8862.bitmap,bit__8864);
if(((this__8862.bitmap & bit__8864) === 0))
{var n__8866 = cljs.core.bit_count.call(null,this__8862.bitmap);
if(((2 * n__8866) < this__8862.arr.length))
{var editable__8867 = inode__8863.ensure_editable(edit);
var earr__8868 = editable__8867.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8868,(2 * idx__8865),earr__8868,(2 * (idx__8865 + 1)),(2 * (n__8866 - idx__8865)));
(earr__8868[(2 * idx__8865)] = key);
(earr__8868[((2 * idx__8865) + 1)] = val);
editable__8867.bitmap = (editable__8867.bitmap | bit__8864);
return editable__8867;
} else
{if((n__8866 >= 16))
{var nodes__8869 = cljs.core.make_array.call(null,32);
var jdx__8870 = ((hash >>> shift) & 0x01f);
(nodes__8869[jdx__8870] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8871 = 0;
var j__8872 = 0;
while(true){
if((i__8871 < 32))
{if((((this__8862.bitmap >>> i__8871) & 1) === 0))
{{
var G__8925 = (i__8871 + 1);
var G__8926 = j__8872;
i__8871 = G__8925;
j__8872 = G__8926;
continue;
}
} else
{(nodes__8869[i__8871] = ((!(((this__8862.arr[j__8872]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8862.arr[j__8872])),(this__8862.arr[j__8872]),(this__8862.arr[(j__8872 + 1)]),added_leaf_QMARK_):(this__8862.arr[(j__8872 + 1)])));
{
var G__8927 = (i__8871 + 1);
var G__8928 = (j__8872 + 2);
i__8871 = G__8927;
j__8872 = G__8928;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8866 + 1),nodes__8869));
} else
{if("\uFDD0'else")
{var new_arr__8873 = cljs.core.make_array.call(null,(2 * (n__8866 + 4)));
cljs.core.array_copy.call(null,this__8862.arr,0,new_arr__8873,0,(2 * idx__8865));
(new_arr__8873[(2 * idx__8865)] = key);
(new_arr__8873[((2 * idx__8865) + 1)] = val);
cljs.core.array_copy.call(null,this__8862.arr,(2 * idx__8865),new_arr__8873,(2 * (idx__8865 + 1)),(2 * (n__8866 - idx__8865)));
added_leaf_QMARK_.val = true;
var editable__8874 = inode__8863.ensure_editable(edit);
editable__8874.arr = new_arr__8873;
editable__8874.bitmap = (editable__8874.bitmap | bit__8864);
return editable__8874;
} else
{return null;
}
}
}
} else
{var key_or_nil__8875 = (this__8862.arr[(2 * idx__8865)]);
var val_or_node__8876 = (this__8862.arr[((2 * idx__8865) + 1)]);
if((key_or_nil__8875 == null))
{var n__8877 = val_or_node__8876.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8877 === val_or_node__8876))
{return inode__8863;
} else
{return cljs.core.edit_and_set.call(null,inode__8863,edit,((2 * idx__8865) + 1),n__8877);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8875))
{if((val === val_or_node__8876))
{return inode__8863;
} else
{return cljs.core.edit_and_set.call(null,inode__8863,edit,((2 * idx__8865) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8863,edit,(2 * idx__8865),null,((2 * idx__8865) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8875,val_or_node__8876,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8878 = this;
var inode__8879 = this;
return cljs.core.create_inode_seq.call(null,this__8878.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8880 = this;
var inode__8881 = this;
var bit__8882 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8880.bitmap & bit__8882) === 0))
{return inode__8881;
} else
{var idx__8883 = cljs.core.bitmap_indexed_node_index.call(null,this__8880.bitmap,bit__8882);
var key_or_nil__8884 = (this__8880.arr[(2 * idx__8883)]);
var val_or_node__8885 = (this__8880.arr[((2 * idx__8883) + 1)]);
if((key_or_nil__8884 == null))
{var n__8886 = val_or_node__8885.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8886 === val_or_node__8885))
{return inode__8881;
} else
{if(!((n__8886 == null)))
{return cljs.core.edit_and_set.call(null,inode__8881,edit,((2 * idx__8883) + 1),n__8886);
} else
{if((this__8880.bitmap === bit__8882))
{return null;
} else
{if("\uFDD0'else")
{return inode__8881.edit_and_remove_pair(edit,bit__8882,idx__8883);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8884))
{(removed_leaf_QMARK_[0] = true);
return inode__8881.edit_and_remove_pair(edit,bit__8882,idx__8883);
} else
{if("\uFDD0'else")
{return inode__8881;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8887 = this;
var inode__8888 = this;
if((e === this__8887.edit))
{return inode__8888;
} else
{var n__8889 = cljs.core.bit_count.call(null,this__8887.bitmap);
var new_arr__8890 = cljs.core.make_array.call(null,(((n__8889 < 0))?4:(2 * (n__8889 + 1))));
cljs.core.array_copy.call(null,this__8887.arr,0,new_arr__8890,0,(2 * n__8889));
return (new cljs.core.BitmapIndexedNode(e,this__8887.bitmap,new_arr__8890));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8891 = this;
var inode__8892 = this;
return cljs.core.inode_kv_reduce.call(null,this__8891.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8893 = this;
var inode__8894 = this;
var bit__8895 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8893.bitmap & bit__8895) === 0))
{return not_found;
} else
{var idx__8896 = cljs.core.bitmap_indexed_node_index.call(null,this__8893.bitmap,bit__8895);
var key_or_nil__8897 = (this__8893.arr[(2 * idx__8896)]);
var val_or_node__8898 = (this__8893.arr[((2 * idx__8896) + 1)]);
if((key_or_nil__8897 == null))
{return val_or_node__8898.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8897))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8897,val_or_node__8898], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8899 = this;
var inode__8900 = this;
var bit__8901 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8899.bitmap & bit__8901) === 0))
{return inode__8900;
} else
{var idx__8902 = cljs.core.bitmap_indexed_node_index.call(null,this__8899.bitmap,bit__8901);
var key_or_nil__8903 = (this__8899.arr[(2 * idx__8902)]);
var val_or_node__8904 = (this__8899.arr[((2 * idx__8902) + 1)]);
if((key_or_nil__8903 == null))
{var n__8905 = val_or_node__8904.inode_without((shift + 5),hash,key);
if((n__8905 === val_or_node__8904))
{return inode__8900;
} else
{if(!((n__8905 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8899.bitmap,cljs.core.clone_and_set.call(null,this__8899.arr,((2 * idx__8902) + 1),n__8905)));
} else
{if((this__8899.bitmap === bit__8901))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8899.bitmap ^ bit__8901),cljs.core.remove_pair.call(null,this__8899.arr,idx__8902)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8903))
{return (new cljs.core.BitmapIndexedNode(null,(this__8899.bitmap ^ bit__8901),cljs.core.remove_pair.call(null,this__8899.arr,idx__8902)));
} else
{if("\uFDD0'else")
{return inode__8900;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8906 = this;
var inode__8907 = this;
var bit__8908 = (1 << ((hash >>> shift) & 0x01f));
var idx__8909 = cljs.core.bitmap_indexed_node_index.call(null,this__8906.bitmap,bit__8908);
if(((this__8906.bitmap & bit__8908) === 0))
{var n__8910 = cljs.core.bit_count.call(null,this__8906.bitmap);
if((n__8910 >= 16))
{var nodes__8911 = cljs.core.make_array.call(null,32);
var jdx__8912 = ((hash >>> shift) & 0x01f);
(nodes__8911[jdx__8912] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8913 = 0;
var j__8914 = 0;
while(true){
if((i__8913 < 32))
{if((((this__8906.bitmap >>> i__8913) & 1) === 0))
{{
var G__8929 = (i__8913 + 1);
var G__8930 = j__8914;
i__8913 = G__8929;
j__8914 = G__8930;
continue;
}
} else
{(nodes__8911[i__8913] = ((!(((this__8906.arr[j__8914]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8906.arr[j__8914])),(this__8906.arr[j__8914]),(this__8906.arr[(j__8914 + 1)]),added_leaf_QMARK_):(this__8906.arr[(j__8914 + 1)])));
{
var G__8931 = (i__8913 + 1);
var G__8932 = (j__8914 + 2);
i__8913 = G__8931;
j__8914 = G__8932;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8910 + 1),nodes__8911));
} else
{var new_arr__8915 = cljs.core.make_array.call(null,(2 * (n__8910 + 1)));
cljs.core.array_copy.call(null,this__8906.arr,0,new_arr__8915,0,(2 * idx__8909));
(new_arr__8915[(2 * idx__8909)] = key);
(new_arr__8915[((2 * idx__8909) + 1)] = val);
cljs.core.array_copy.call(null,this__8906.arr,(2 * idx__8909),new_arr__8915,(2 * (idx__8909 + 1)),(2 * (n__8910 - idx__8909)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8906.bitmap | bit__8908),new_arr__8915));
}
} else
{var key_or_nil__8916 = (this__8906.arr[(2 * idx__8909)]);
var val_or_node__8917 = (this__8906.arr[((2 * idx__8909) + 1)]);
if((key_or_nil__8916 == null))
{var n__8918 = val_or_node__8917.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8918 === val_or_node__8917))
{return inode__8907;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8906.bitmap,cljs.core.clone_and_set.call(null,this__8906.arr,((2 * idx__8909) + 1),n__8918)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8916))
{if((val === val_or_node__8917))
{return inode__8907;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8906.bitmap,cljs.core.clone_and_set.call(null,this__8906.arr,((2 * idx__8909) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8906.bitmap,cljs.core.clone_and_set.call(null,this__8906.arr,(2 * idx__8909),null,((2 * idx__8909) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8916,val_or_node__8917,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8919 = this;
var inode__8920 = this;
var bit__8921 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8919.bitmap & bit__8921) === 0))
{return not_found;
} else
{var idx__8922 = cljs.core.bitmap_indexed_node_index.call(null,this__8919.bitmap,bit__8921);
var key_or_nil__8923 = (this__8919.arr[(2 * idx__8922)]);
var val_or_node__8924 = (this__8919.arr[((2 * idx__8922) + 1)]);
if((key_or_nil__8923 == null))
{return val_or_node__8924.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8923))
{return val_or_node__8924;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8940 = array_node.arr;
var len__8941 = (2 * (array_node.cnt - 1));
var new_arr__8942 = cljs.core.make_array.call(null,len__8941);
var i__8943 = 0;
var j__8944 = 1;
var bitmap__8945 = 0;
while(true){
if((i__8943 < len__8941))
{if((function (){var and__3822__auto____8946 = !((i__8943 === idx));
if(and__3822__auto____8946)
{return !(((arr__8940[i__8943]) == null));
} else
{return and__3822__auto____8946;
}
})())
{(new_arr__8942[j__8944] = (arr__8940[i__8943]));
{
var G__8947 = (i__8943 + 1);
var G__8948 = (j__8944 + 2);
var G__8949 = (bitmap__8945 | (1 << i__8943));
i__8943 = G__8947;
j__8944 = G__8948;
bitmap__8945 = G__8949;
continue;
}
} else
{{
var G__8950 = (i__8943 + 1);
var G__8951 = j__8944;
var G__8952 = bitmap__8945;
i__8943 = G__8950;
j__8944 = G__8951;
bitmap__8945 = G__8952;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8945,new_arr__8942));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8953 = this;
var inode__8954 = this;
var idx__8955 = ((hash >>> shift) & 0x01f);
var node__8956 = (this__8953.arr[idx__8955]);
if((node__8956 == null))
{var editable__8957 = cljs.core.edit_and_set.call(null,inode__8954,edit,idx__8955,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8957.cnt = (editable__8957.cnt + 1);
return editable__8957;
} else
{var n__8958 = node__8956.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8958 === node__8956))
{return inode__8954;
} else
{return cljs.core.edit_and_set.call(null,inode__8954,edit,idx__8955,n__8958);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8959 = this;
var inode__8960 = this;
return cljs.core.create_array_node_seq.call(null,this__8959.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8961 = this;
var inode__8962 = this;
var idx__8963 = ((hash >>> shift) & 0x01f);
var node__8964 = (this__8961.arr[idx__8963]);
if((node__8964 == null))
{return inode__8962;
} else
{var n__8965 = node__8964.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8965 === node__8964))
{return inode__8962;
} else
{if((n__8965 == null))
{if((this__8961.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8962,edit,idx__8963);
} else
{var editable__8966 = cljs.core.edit_and_set.call(null,inode__8962,edit,idx__8963,n__8965);
editable__8966.cnt = (editable__8966.cnt - 1);
return editable__8966;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8962,edit,idx__8963,n__8965);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8967 = this;
var inode__8968 = this;
if((e === this__8967.edit))
{return inode__8968;
} else
{return (new cljs.core.ArrayNode(e,this__8967.cnt,this__8967.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8969 = this;
var inode__8970 = this;
var len__8971 = this__8969.arr.length;
var i__8972 = 0;
var init__8973 = init;
while(true){
if((i__8972 < len__8971))
{var node__8974 = (this__8969.arr[i__8972]);
if(!((node__8974 == null)))
{var init__8975 = node__8974.kv_reduce(f,init__8973);
if(cljs.core.reduced_QMARK_.call(null,init__8975))
{return cljs.core.deref.call(null,init__8975);
} else
{{
var G__8994 = (i__8972 + 1);
var G__8995 = init__8975;
i__8972 = G__8994;
init__8973 = G__8995;
continue;
}
}
} else
{return null;
}
} else
{return init__8973;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8976 = this;
var inode__8977 = this;
var idx__8978 = ((hash >>> shift) & 0x01f);
var node__8979 = (this__8976.arr[idx__8978]);
if(!((node__8979 == null)))
{return node__8979.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8980 = this;
var inode__8981 = this;
var idx__8982 = ((hash >>> shift) & 0x01f);
var node__8983 = (this__8980.arr[idx__8982]);
if(!((node__8983 == null)))
{var n__8984 = node__8983.inode_without((shift + 5),hash,key);
if((n__8984 === node__8983))
{return inode__8981;
} else
{if((n__8984 == null))
{if((this__8980.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8981,null,idx__8982);
} else
{return (new cljs.core.ArrayNode(null,(this__8980.cnt - 1),cljs.core.clone_and_set.call(null,this__8980.arr,idx__8982,n__8984)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8980.cnt,cljs.core.clone_and_set.call(null,this__8980.arr,idx__8982,n__8984)));
} else
{return null;
}
}
}
} else
{return inode__8981;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8985 = this;
var inode__8986 = this;
var idx__8987 = ((hash >>> shift) & 0x01f);
var node__8988 = (this__8985.arr[idx__8987]);
if((node__8988 == null))
{return (new cljs.core.ArrayNode(null,(this__8985.cnt + 1),cljs.core.clone_and_set.call(null,this__8985.arr,idx__8987,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8989 = node__8988.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8989 === node__8988))
{return inode__8986;
} else
{return (new cljs.core.ArrayNode(null,this__8985.cnt,cljs.core.clone_and_set.call(null,this__8985.arr,idx__8987,n__8989)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8990 = this;
var inode__8991 = this;
var idx__8992 = ((hash >>> shift) & 0x01f);
var node__8993 = (this__8990.arr[idx__8992]);
if(!((node__8993 == null)))
{return node__8993.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8998 = (2 * cnt);
var i__8999 = 0;
while(true){
if((i__8999 < lim__8998))
{if(cljs.core.key_test.call(null,key,(arr[i__8999])))
{return i__8999;
} else
{{
var G__9000 = (i__8999 + 2);
i__8999 = G__9000;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9001 = this;
var inode__9002 = this;
if((hash === this__9001.collision_hash))
{var idx__9003 = cljs.core.hash_collision_node_find_index.call(null,this__9001.arr,this__9001.cnt,key);
if((idx__9003 === -1))
{if((this__9001.arr.length > (2 * this__9001.cnt)))
{var editable__9004 = cljs.core.edit_and_set.call(null,inode__9002,edit,(2 * this__9001.cnt),key,((2 * this__9001.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9004.cnt = (editable__9004.cnt + 1);
return editable__9004;
} else
{var len__9005 = this__9001.arr.length;
var new_arr__9006 = cljs.core.make_array.call(null,(len__9005 + 2));
cljs.core.array_copy.call(null,this__9001.arr,0,new_arr__9006,0,len__9005);
(new_arr__9006[len__9005] = key);
(new_arr__9006[(len__9005 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9002.ensure_editable_array(edit,(this__9001.cnt + 1),new_arr__9006);
}
} else
{if(((this__9001.arr[(idx__9003 + 1)]) === val))
{return inode__9002;
} else
{return cljs.core.edit_and_set.call(null,inode__9002,edit,(idx__9003 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9001.collision_hash >>> shift) & 0x01f)),[null,inode__9002,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9007 = this;
var inode__9008 = this;
return cljs.core.create_inode_seq.call(null,this__9007.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9009 = this;
var inode__9010 = this;
var idx__9011 = cljs.core.hash_collision_node_find_index.call(null,this__9009.arr,this__9009.cnt,key);
if((idx__9011 === -1))
{return inode__9010;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9009.cnt === 1))
{return null;
} else
{var editable__9012 = inode__9010.ensure_editable(edit);
var earr__9013 = editable__9012.arr;
(earr__9013[idx__9011] = (earr__9013[((2 * this__9009.cnt) - 2)]));
(earr__9013[(idx__9011 + 1)] = (earr__9013[((2 * this__9009.cnt) - 1)]));
(earr__9013[((2 * this__9009.cnt) - 1)] = null);
(earr__9013[((2 * this__9009.cnt) - 2)] = null);
editable__9012.cnt = (editable__9012.cnt - 1);
return editable__9012;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9014 = this;
var inode__9015 = this;
if((e === this__9014.edit))
{return inode__9015;
} else
{var new_arr__9016 = cljs.core.make_array.call(null,(2 * (this__9014.cnt + 1)));
cljs.core.array_copy.call(null,this__9014.arr,0,new_arr__9016,0,(2 * this__9014.cnt));
return (new cljs.core.HashCollisionNode(e,this__9014.collision_hash,this__9014.cnt,new_arr__9016));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9017 = this;
var inode__9018 = this;
return cljs.core.inode_kv_reduce.call(null,this__9017.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9019 = this;
var inode__9020 = this;
var idx__9021 = cljs.core.hash_collision_node_find_index.call(null,this__9019.arr,this__9019.cnt,key);
if((idx__9021 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9019.arr[idx__9021])))
{return cljs.core.PersistentVector.fromArray([(this__9019.arr[idx__9021]),(this__9019.arr[(idx__9021 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9022 = this;
var inode__9023 = this;
var idx__9024 = cljs.core.hash_collision_node_find_index.call(null,this__9022.arr,this__9022.cnt,key);
if((idx__9024 === -1))
{return inode__9023;
} else
{if((this__9022.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9022.collision_hash,(this__9022.cnt - 1),cljs.core.remove_pair.call(null,this__9022.arr,cljs.core.quot.call(null,idx__9024,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9025 = this;
var inode__9026 = this;
if((hash === this__9025.collision_hash))
{var idx__9027 = cljs.core.hash_collision_node_find_index.call(null,this__9025.arr,this__9025.cnt,key);
if((idx__9027 === -1))
{var len__9028 = this__9025.arr.length;
var new_arr__9029 = cljs.core.make_array.call(null,(len__9028 + 2));
cljs.core.array_copy.call(null,this__9025.arr,0,new_arr__9029,0,len__9028);
(new_arr__9029[len__9028] = key);
(new_arr__9029[(len__9028 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9025.collision_hash,(this__9025.cnt + 1),new_arr__9029));
} else
{if(cljs.core._EQ_.call(null,(this__9025.arr[idx__9027]),val))
{return inode__9026;
} else
{return (new cljs.core.HashCollisionNode(null,this__9025.collision_hash,this__9025.cnt,cljs.core.clone_and_set.call(null,this__9025.arr,(idx__9027 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9025.collision_hash >>> shift) & 0x01f)),[null,inode__9026])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9030 = this;
var inode__9031 = this;
var idx__9032 = cljs.core.hash_collision_node_find_index.call(null,this__9030.arr,this__9030.cnt,key);
if((idx__9032 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9030.arr[idx__9032])))
{return (this__9030.arr[(idx__9032 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9033 = this;
var inode__9034 = this;
if((e === this__9033.edit))
{this__9033.arr = array;
this__9033.cnt = count;
return inode__9034;
} else
{return (new cljs.core.HashCollisionNode(this__9033.edit,this__9033.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9039 = cljs.core.hash.call(null,key1);
if((key1hash__9039 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9039,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9040 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9039,key1,val1,added_leaf_QMARK___9040).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9040);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9041 = cljs.core.hash.call(null,key1);
if((key1hash__9041 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9041,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9042 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9041,key1,val1,added_leaf_QMARK___9042).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9042);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9043 = this;
var h__2151__auto____9044 = this__9043.__hash;
if(!((h__2151__auto____9044 == null)))
{return h__2151__auto____9044;
} else
{var h__2151__auto____9045 = cljs.core.hash_coll.call(null,coll);
this__9043.__hash = h__2151__auto____9045;
return h__2151__auto____9045;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9046 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9047 = this;
var this__9048 = this;
return cljs.core.pr_str.call(null,this__9048);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9049 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9050 = this;
if((this__9050.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9050.nodes[this__9050.i]),(this__9050.nodes[(this__9050.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9050.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9051 = this;
if((this__9051.s == null))
{return cljs.core.create_inode_seq.call(null,this__9051.nodes,(this__9051.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9051.nodes,this__9051.i,cljs.core.next.call(null,this__9051.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9053 = this;
return (new cljs.core.NodeSeq(meta,this__9053.nodes,this__9053.i,this__9053.s,this__9053.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9054 = this;
return this__9054.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9055 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9055.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9062 = nodes.length;
var j__9063 = i;
while(true){
if((j__9063 < len__9062))
{if(!(((nodes[j__9063]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9063,null,null));
} else
{var temp__3971__auto____9064 = (nodes[(j__9063 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9064))
{var node__9065 = temp__3971__auto____9064;
var temp__3971__auto____9066 = node__9065.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9066))
{var node_seq__9067 = temp__3971__auto____9066;
return (new cljs.core.NodeSeq(null,nodes,(j__9063 + 2),node_seq__9067,null));
} else
{{
var G__9068 = (j__9063 + 2);
j__9063 = G__9068;
continue;
}
}
} else
{{
var G__9069 = (j__9063 + 2);
j__9063 = G__9069;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9070 = this;
var h__2151__auto____9071 = this__9070.__hash;
if(!((h__2151__auto____9071 == null)))
{return h__2151__auto____9071;
} else
{var h__2151__auto____9072 = cljs.core.hash_coll.call(null,coll);
this__9070.__hash = h__2151__auto____9072;
return h__2151__auto____9072;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9073 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9074 = this;
var this__9075 = this;
return cljs.core.pr_str.call(null,this__9075);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9076 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9077 = this;
return cljs.core.first.call(null,this__9077.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9078 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9078.nodes,this__9078.i,cljs.core.next.call(null,this__9078.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9080 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9080.nodes,this__9080.i,this__9080.s,this__9080.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9081 = this;
return this__9081.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9082 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9082.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9089 = nodes.length;
var j__9090 = i;
while(true){
if((j__9090 < len__9089))
{var temp__3971__auto____9091 = (nodes[j__9090]);
if(cljs.core.truth_(temp__3971__auto____9091))
{var nj__9092 = temp__3971__auto____9091;
var temp__3971__auto____9093 = nj__9092.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9093))
{var ns__9094 = temp__3971__auto____9093;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9090 + 1),ns__9094,null));
} else
{{
var G__9095 = (j__9090 + 1);
j__9090 = G__9095;
continue;
}
}
} else
{{
var G__9096 = (j__9090 + 1);
j__9090 = G__9096;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9099 = this;
return (new cljs.core.TransientHashMap({},this__9099.root,this__9099.cnt,this__9099.has_nil_QMARK_,this__9099.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9100 = this;
var h__2151__auto____9101 = this__9100.__hash;
if(!((h__2151__auto____9101 == null)))
{return h__2151__auto____9101;
} else
{var h__2151__auto____9102 = cljs.core.hash_imap.call(null,coll);
this__9100.__hash = h__2151__auto____9102;
return h__2151__auto____9102;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9103 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9104 = this;
if((k == null))
{if(this__9104.has_nil_QMARK_)
{return this__9104.nil_val;
} else
{return not_found;
}
} else
{if((this__9104.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9104.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9105 = this;
if((k == null))
{if((function (){var and__3822__auto____9106 = this__9105.has_nil_QMARK_;
if(and__3822__auto____9106)
{return (v === this__9105.nil_val);
} else
{return and__3822__auto____9106;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9105.meta,((this__9105.has_nil_QMARK_)?this__9105.cnt:(this__9105.cnt + 1)),this__9105.root,true,v,null));
}
} else
{var added_leaf_QMARK___9107 = (new cljs.core.Box(false));
var new_root__9108 = (((this__9105.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9105.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9107);
if((new_root__9108 === this__9105.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9105.meta,((added_leaf_QMARK___9107.val)?(this__9105.cnt + 1):this__9105.cnt),new_root__9108,this__9105.has_nil_QMARK_,this__9105.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9109 = this;
if((k == null))
{return this__9109.has_nil_QMARK_;
} else
{if((this__9109.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9109.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9132 = null;
var G__9132__2 = (function (this_sym9110,k){
var this__9112 = this;
var this_sym9110__9113 = this;
var coll__9114 = this_sym9110__9113;
return coll__9114.cljs$core$ILookup$_lookup$arity$2(coll__9114,k);
});
var G__9132__3 = (function (this_sym9111,k,not_found){
var this__9112 = this;
var this_sym9111__9115 = this;
var coll__9116 = this_sym9111__9115;
return coll__9116.cljs$core$ILookup$_lookup$arity$3(coll__9116,k,not_found);
});
G__9132 = function(this_sym9111,k,not_found){
switch(arguments.length){
case 2:
return G__9132__2.call(this,this_sym9111,k);
case 3:
return G__9132__3.call(this,this_sym9111,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9132;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9097,args9098){
var this__9117 = this;
return this_sym9097.call.apply(this_sym9097,[this_sym9097].concat(args9098.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9118 = this;
var init__9119 = ((this__9118.has_nil_QMARK_)?f.call(null,init,null,this__9118.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9119))
{return cljs.core.deref.call(null,init__9119);
} else
{if(!((this__9118.root == null)))
{return this__9118.root.kv_reduce(f,init__9119);
} else
{if("\uFDD0'else")
{return init__9119;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9120 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9121 = this;
var this__9122 = this;
return cljs.core.pr_str.call(null,this__9122);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9123 = this;
if((this__9123.cnt > 0))
{var s__9124 = ((!((this__9123.root == null)))?this__9123.root.inode_seq():null);
if(this__9123.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9123.nil_val], true),s__9124);
} else
{return s__9124;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9125 = this;
return this__9125.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9126 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9127 = this;
return (new cljs.core.PersistentHashMap(meta,this__9127.cnt,this__9127.root,this__9127.has_nil_QMARK_,this__9127.nil_val,this__9127.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9128 = this;
return this__9128.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9129 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9129.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9130 = this;
if((k == null))
{if(this__9130.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9130.meta,(this__9130.cnt - 1),this__9130.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9130.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9131 = this__9130.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9131 === this__9130.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9130.meta,(this__9130.cnt - 1),new_root__9131,this__9130.has_nil_QMARK_,this__9130.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9133 = ks.length;
var i__9134 = 0;
var out__9135 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9134 < len__9133))
{{
var G__9136 = (i__9134 + 1);
var G__9137 = cljs.core.assoc_BANG_.call(null,out__9135,(ks[i__9134]),(vs[i__9134]));
i__9134 = G__9136;
out__9135 = G__9137;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9135);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9138 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9139 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9140 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9141 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9142 = this;
if((k == null))
{if(this__9142.has_nil_QMARK_)
{return this__9142.nil_val;
} else
{return null;
}
} else
{if((this__9142.root == null))
{return null;
} else
{return this__9142.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9143 = this;
if((k == null))
{if(this__9143.has_nil_QMARK_)
{return this__9143.nil_val;
} else
{return not_found;
}
} else
{if((this__9143.root == null))
{return not_found;
} else
{return this__9143.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9144 = this;
if(this__9144.edit)
{return this__9144.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9145 = this;
var tcoll__9146 = this;
if(this__9145.edit)
{if((function (){var G__9147__9148 = o;
if(G__9147__9148)
{if((function (){var or__3824__auto____9149 = (G__9147__9148.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9149)
{return or__3824__auto____9149;
} else
{return G__9147__9148.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9147__9148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9147__9148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9147__9148);
}
})())
{return tcoll__9146.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9150 = cljs.core.seq.call(null,o);
var tcoll__9151 = tcoll__9146;
while(true){
var temp__3971__auto____9152 = cljs.core.first.call(null,es__9150);
if(cljs.core.truth_(temp__3971__auto____9152))
{var e__9153 = temp__3971__auto____9152;
{
var G__9164 = cljs.core.next.call(null,es__9150);
var G__9165 = tcoll__9151.assoc_BANG_(cljs.core.key.call(null,e__9153),cljs.core.val.call(null,e__9153));
es__9150 = G__9164;
tcoll__9151 = G__9165;
continue;
}
} else
{return tcoll__9151;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9154 = this;
var tcoll__9155 = this;
if(this__9154.edit)
{if((k == null))
{if((this__9154.nil_val === v))
{} else
{this__9154.nil_val = v;
}
if(this__9154.has_nil_QMARK_)
{} else
{this__9154.count = (this__9154.count + 1);
this__9154.has_nil_QMARK_ = true;
}
return tcoll__9155;
} else
{var added_leaf_QMARK___9156 = (new cljs.core.Box(false));
var node__9157 = (((this__9154.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9154.root).inode_assoc_BANG_(this__9154.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9156);
if((node__9157 === this__9154.root))
{} else
{this__9154.root = node__9157;
}
if(added_leaf_QMARK___9156.val)
{this__9154.count = (this__9154.count + 1);
} else
{}
return tcoll__9155;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9158 = this;
var tcoll__9159 = this;
if(this__9158.edit)
{if((k == null))
{if(this__9158.has_nil_QMARK_)
{this__9158.has_nil_QMARK_ = false;
this__9158.nil_val = null;
this__9158.count = (this__9158.count - 1);
return tcoll__9159;
} else
{return tcoll__9159;
}
} else
{if((this__9158.root == null))
{return tcoll__9159;
} else
{var removed_leaf_QMARK___9160 = (new cljs.core.Box(false));
var node__9161 = this__9158.root.inode_without_BANG_(this__9158.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9160);
if((node__9161 === this__9158.root))
{} else
{this__9158.root = node__9161;
}
if(cljs.core.truth_((removed_leaf_QMARK___9160[0])))
{this__9158.count = (this__9158.count - 1);
} else
{}
return tcoll__9159;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9162 = this;
var tcoll__9163 = this;
if(this__9162.edit)
{this__9162.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9162.count,this__9162.root,this__9162.has_nil_QMARK_,this__9162.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9168 = node;
var stack__9169 = stack;
while(true){
if(!((t__9168 == null)))
{{
var G__9170 = ((ascending_QMARK_)?t__9168.left:t__9168.right);
var G__9171 = cljs.core.conj.call(null,stack__9169,t__9168);
t__9168 = G__9170;
stack__9169 = G__9171;
continue;
}
} else
{return stack__9169;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9172 = this;
var h__2151__auto____9173 = this__9172.__hash;
if(!((h__2151__auto____9173 == null)))
{return h__2151__auto____9173;
} else
{var h__2151__auto____9174 = cljs.core.hash_coll.call(null,coll);
this__9172.__hash = h__2151__auto____9174;
return h__2151__auto____9174;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9175 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9176 = this;
var this__9177 = this;
return cljs.core.pr_str.call(null,this__9177);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9178 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9179 = this;
if((this__9179.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9179.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9180 = this;
return cljs.core.peek.call(null,this__9180.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9181 = this;
var t__9182 = cljs.core.first.call(null,this__9181.stack);
var next_stack__9183 = cljs.core.tree_map_seq_push.call(null,((this__9181.ascending_QMARK_)?t__9182.right:t__9182.left),cljs.core.next.call(null,this__9181.stack),this__9181.ascending_QMARK_);
if(!((next_stack__9183 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9183,this__9181.ascending_QMARK_,(this__9181.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9184 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9185 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9185.stack,this__9185.ascending_QMARK_,this__9185.cnt,this__9185.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9186 = this;
return this__9186.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9188 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9188)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9188;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9190 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9190)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9190;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9194 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9194))
{return cljs.core.deref.call(null,init__9194);
} else
{var init__9195 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9194):init__9194);
if(cljs.core.reduced_QMARK_.call(null,init__9195))
{return cljs.core.deref.call(null,init__9195);
} else
{var init__9196 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9195):init__9195);
if(cljs.core.reduced_QMARK_.call(null,init__9196))
{return cljs.core.deref.call(null,init__9196);
} else
{return init__9196;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9199 = this;
var h__2151__auto____9200 = this__9199.__hash;
if(!((h__2151__auto____9200 == null)))
{return h__2151__auto____9200;
} else
{var h__2151__auto____9201 = cljs.core.hash_coll.call(null,coll);
this__9199.__hash = h__2151__auto____9201;
return h__2151__auto____9201;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9202 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9203 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9204 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9204.key,this__9204.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9252 = null;
var G__9252__2 = (function (this_sym9205,k){
var this__9207 = this;
var this_sym9205__9208 = this;
var node__9209 = this_sym9205__9208;
return node__9209.cljs$core$ILookup$_lookup$arity$2(node__9209,k);
});
var G__9252__3 = (function (this_sym9206,k,not_found){
var this__9207 = this;
var this_sym9206__9210 = this;
var node__9211 = this_sym9206__9210;
return node__9211.cljs$core$ILookup$_lookup$arity$3(node__9211,k,not_found);
});
G__9252 = function(this_sym9206,k,not_found){
switch(arguments.length){
case 2:
return G__9252__2.call(this,this_sym9206,k);
case 3:
return G__9252__3.call(this,this_sym9206,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9252;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9197,args9198){
var this__9212 = this;
return this_sym9197.call.apply(this_sym9197,[this_sym9197].concat(args9198.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9213 = this;
return cljs.core.PersistentVector.fromArray([this__9213.key,this__9213.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9214 = this;
return this__9214.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9215 = this;
return this__9215.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9216 = this;
var node__9217 = this;
return ins.balance_right(node__9217);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9218 = this;
var node__9219 = this;
return (new cljs.core.RedNode(this__9218.key,this__9218.val,this__9218.left,this__9218.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9220 = this;
var node__9221 = this;
return cljs.core.balance_right_del.call(null,this__9220.key,this__9220.val,this__9220.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9222 = this;
var node__9223 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9224 = this;
var node__9225 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9225,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9226 = this;
var node__9227 = this;
return cljs.core.balance_left_del.call(null,this__9226.key,this__9226.val,del,this__9226.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9228 = this;
var node__9229 = this;
return ins.balance_left(node__9229);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9230 = this;
var node__9231 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9231,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9253 = null;
var G__9253__0 = (function (){
var this__9232 = this;
var this__9234 = this;
return cljs.core.pr_str.call(null,this__9234);
});
G__9253 = function(){
switch(arguments.length){
case 0:
return G__9253__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9253;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9235 = this;
var node__9236 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9236,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9237 = this;
var node__9238 = this;
return node__9238;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9239 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9240 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9241 = this;
return cljs.core.list.call(null,this__9241.key,this__9241.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9242 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9243 = this;
return this__9243.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9244 = this;
return cljs.core.PersistentVector.fromArray([this__9244.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9245 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9245.key,this__9245.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9246 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9247 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9247.key,this__9247.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9248 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9249 = this;
if((n === 0))
{return this__9249.key;
} else
{if((n === 1))
{return this__9249.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9250 = this;
if((n === 0))
{return this__9250.key;
} else
{if((n === 1))
{return this__9250.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9251 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9256 = this;
var h__2151__auto____9257 = this__9256.__hash;
if(!((h__2151__auto____9257 == null)))
{return h__2151__auto____9257;
} else
{var h__2151__auto____9258 = cljs.core.hash_coll.call(null,coll);
this__9256.__hash = h__2151__auto____9258;
return h__2151__auto____9258;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9259 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9260 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9261 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9261.key,this__9261.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9309 = null;
var G__9309__2 = (function (this_sym9262,k){
var this__9264 = this;
var this_sym9262__9265 = this;
var node__9266 = this_sym9262__9265;
return node__9266.cljs$core$ILookup$_lookup$arity$2(node__9266,k);
});
var G__9309__3 = (function (this_sym9263,k,not_found){
var this__9264 = this;
var this_sym9263__9267 = this;
var node__9268 = this_sym9263__9267;
return node__9268.cljs$core$ILookup$_lookup$arity$3(node__9268,k,not_found);
});
G__9309 = function(this_sym9263,k,not_found){
switch(arguments.length){
case 2:
return G__9309__2.call(this,this_sym9263,k);
case 3:
return G__9309__3.call(this,this_sym9263,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9309;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9254,args9255){
var this__9269 = this;
return this_sym9254.call.apply(this_sym9254,[this_sym9254].concat(args9255.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9270 = this;
return cljs.core.PersistentVector.fromArray([this__9270.key,this__9270.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9271 = this;
return this__9271.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9272 = this;
return this__9272.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9273 = this;
var node__9274 = this;
return (new cljs.core.RedNode(this__9273.key,this__9273.val,this__9273.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9275 = this;
var node__9276 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9277 = this;
var node__9278 = this;
return (new cljs.core.RedNode(this__9277.key,this__9277.val,this__9277.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9279 = this;
var node__9280 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9281 = this;
var node__9282 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9282,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9283 = this;
var node__9284 = this;
return (new cljs.core.RedNode(this__9283.key,this__9283.val,del,this__9283.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9285 = this;
var node__9286 = this;
return (new cljs.core.RedNode(this__9285.key,this__9285.val,ins,this__9285.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9287 = this;
var node__9288 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9287.left))
{return (new cljs.core.RedNode(this__9287.key,this__9287.val,this__9287.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9287.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9287.right))
{return (new cljs.core.RedNode(this__9287.right.key,this__9287.right.val,(new cljs.core.BlackNode(this__9287.key,this__9287.val,this__9287.left,this__9287.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9287.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9288,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9310 = null;
var G__9310__0 = (function (){
var this__9289 = this;
var this__9291 = this;
return cljs.core.pr_str.call(null,this__9291);
});
G__9310 = function(){
switch(arguments.length){
case 0:
return G__9310__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9310;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9292 = this;
var node__9293 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9292.right))
{return (new cljs.core.RedNode(this__9292.key,this__9292.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9292.left,null)),this__9292.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9292.left))
{return (new cljs.core.RedNode(this__9292.left.key,this__9292.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9292.left.left,null)),(new cljs.core.BlackNode(this__9292.key,this__9292.val,this__9292.left.right,this__9292.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9293,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9294 = this;
var node__9295 = this;
return (new cljs.core.BlackNode(this__9294.key,this__9294.val,this__9294.left,this__9294.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9296 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9297 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9298 = this;
return cljs.core.list.call(null,this__9298.key,this__9298.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9299 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9300 = this;
return this__9300.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9301 = this;
return cljs.core.PersistentVector.fromArray([this__9301.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9302 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9302.key,this__9302.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9303 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9304 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9304.key,this__9304.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9305 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9306 = this;
if((n === 0))
{return this__9306.key;
} else
{if((n === 1))
{return this__9306.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9307 = this;
if((n === 0))
{return this__9307.key;
} else
{if((n === 1))
{return this__9307.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9308 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9314 = comp.call(null,k,tree.key);
if((c__9314 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9314 < 0))
{var ins__9315 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9315 == null)))
{return tree.add_left(ins__9315);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9316 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9316 == null)))
{return tree.add_right(ins__9316);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9319 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9319))
{return (new cljs.core.RedNode(app__9319.key,app__9319.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9319.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9319.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9319,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9320 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9320))
{return (new cljs.core.RedNode(app__9320.key,app__9320.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9320.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9320.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9320,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9326 = comp.call(null,k,tree.key);
if((c__9326 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9326 < 0))
{var del__9327 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9328 = !((del__9327 == null));
if(or__3824__auto____9328)
{return or__3824__auto____9328;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9327,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9327,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9329 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9330 = !((del__9329 == null));
if(or__3824__auto____9330)
{return or__3824__auto____9330;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9329);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9329,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9333 = tree.key;
var c__9334 = comp.call(null,k,tk__9333);
if((c__9334 === 0))
{return tree.replace(tk__9333,v,tree.left,tree.right);
} else
{if((c__9334 < 0))
{return tree.replace(tk__9333,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9333,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9337 = this;
var h__2151__auto____9338 = this__9337.__hash;
if(!((h__2151__auto____9338 == null)))
{return h__2151__auto____9338;
} else
{var h__2151__auto____9339 = cljs.core.hash_imap.call(null,coll);
this__9337.__hash = h__2151__auto____9339;
return h__2151__auto____9339;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9340 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9341 = this;
var n__9342 = coll.entry_at(k);
if(!((n__9342 == null)))
{return n__9342.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9343 = this;
var found__9344 = [null];
var t__9345 = cljs.core.tree_map_add.call(null,this__9343.comp,this__9343.tree,k,v,found__9344);
if((t__9345 == null))
{var found_node__9346 = cljs.core.nth.call(null,found__9344,0);
if(cljs.core._EQ_.call(null,v,found_node__9346.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9343.comp,cljs.core.tree_map_replace.call(null,this__9343.comp,this__9343.tree,k,v),this__9343.cnt,this__9343.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9343.comp,t__9345.blacken(),(this__9343.cnt + 1),this__9343.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9347 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9381 = null;
var G__9381__2 = (function (this_sym9348,k){
var this__9350 = this;
var this_sym9348__9351 = this;
var coll__9352 = this_sym9348__9351;
return coll__9352.cljs$core$ILookup$_lookup$arity$2(coll__9352,k);
});
var G__9381__3 = (function (this_sym9349,k,not_found){
var this__9350 = this;
var this_sym9349__9353 = this;
var coll__9354 = this_sym9349__9353;
return coll__9354.cljs$core$ILookup$_lookup$arity$3(coll__9354,k,not_found);
});
G__9381 = function(this_sym9349,k,not_found){
switch(arguments.length){
case 2:
return G__9381__2.call(this,this_sym9349,k);
case 3:
return G__9381__3.call(this,this_sym9349,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9381;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9335,args9336){
var this__9355 = this;
return this_sym9335.call.apply(this_sym9335,[this_sym9335].concat(args9336.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9356 = this;
if(!((this__9356.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9356.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9357 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9358 = this;
if((this__9358.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9358.tree,false,this__9358.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9359 = this;
var this__9360 = this;
return cljs.core.pr_str.call(null,this__9360);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9361 = this;
var coll__9362 = this;
var t__9363 = this__9361.tree;
while(true){
if(!((t__9363 == null)))
{var c__9364 = this__9361.comp.call(null,k,t__9363.key);
if((c__9364 === 0))
{return t__9363;
} else
{if((c__9364 < 0))
{{
var G__9382 = t__9363.left;
t__9363 = G__9382;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9383 = t__9363.right;
t__9363 = G__9383;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9365 = this;
if((this__9365.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9365.tree,ascending_QMARK_,this__9365.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9366 = this;
if((this__9366.cnt > 0))
{var stack__9367 = null;
var t__9368 = this__9366.tree;
while(true){
if(!((t__9368 == null)))
{var c__9369 = this__9366.comp.call(null,k,t__9368.key);
if((c__9369 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9367,t__9368),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9369 < 0))
{{
var G__9384 = cljs.core.conj.call(null,stack__9367,t__9368);
var G__9385 = t__9368.left;
stack__9367 = G__9384;
t__9368 = G__9385;
continue;
}
} else
{{
var G__9386 = stack__9367;
var G__9387 = t__9368.right;
stack__9367 = G__9386;
t__9368 = G__9387;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9369 > 0))
{{
var G__9388 = cljs.core.conj.call(null,stack__9367,t__9368);
var G__9389 = t__9368.right;
stack__9367 = G__9388;
t__9368 = G__9389;
continue;
}
} else
{{
var G__9390 = stack__9367;
var G__9391 = t__9368.left;
stack__9367 = G__9390;
t__9368 = G__9391;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9367 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9367,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9370 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9371 = this;
return this__9371.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9372 = this;
if((this__9372.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9372.tree,true,this__9372.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9373 = this;
return this__9373.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9374 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9375 = this;
return (new cljs.core.PersistentTreeMap(this__9375.comp,this__9375.tree,this__9375.cnt,meta,this__9375.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9376 = this;
return this__9376.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9377 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9377.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9378 = this;
var found__9379 = [null];
var t__9380 = cljs.core.tree_map_remove.call(null,this__9378.comp,this__9378.tree,k,found__9379);
if((t__9380 == null))
{if((cljs.core.nth.call(null,found__9379,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9378.comp,null,0,this__9378.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9378.comp,t__9380.blacken(),(this__9378.cnt - 1),this__9378.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9394 = cljs.core.seq.call(null,keyvals);
var out__9395 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9394)
{{
var G__9396 = cljs.core.nnext.call(null,in__9394);
var G__9397 = cljs.core.assoc_BANG_.call(null,out__9395,cljs.core.first.call(null,in__9394),cljs.core.second.call(null,in__9394));
in__9394 = G__9396;
out__9395 = G__9397;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9395);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9398){
var keyvals = cljs.core.seq(arglist__9398);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9399){
var keyvals = cljs.core.seq(arglist__9399);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9403 = [];
var obj__9404 = {};
var kvs__9405 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9405)
{ks__9403.push(cljs.core.first.call(null,kvs__9405));
(obj__9404[cljs.core.first.call(null,kvs__9405)] = cljs.core.second.call(null,kvs__9405));
{
var G__9406 = cljs.core.nnext.call(null,kvs__9405);
kvs__9405 = G__9406;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9403,obj__9404);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9407){
var keyvals = cljs.core.seq(arglist__9407);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9410 = cljs.core.seq.call(null,keyvals);
var out__9411 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9410)
{{
var G__9412 = cljs.core.nnext.call(null,in__9410);
var G__9413 = cljs.core.assoc.call(null,out__9411,cljs.core.first.call(null,in__9410),cljs.core.second.call(null,in__9410));
in__9410 = G__9412;
out__9411 = G__9413;
continue;
}
} else
{return out__9411;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9414){
var keyvals = cljs.core.seq(arglist__9414);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9417 = cljs.core.seq.call(null,keyvals);
var out__9418 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9417)
{{
var G__9419 = cljs.core.nnext.call(null,in__9417);
var G__9420 = cljs.core.assoc.call(null,out__9418,cljs.core.first.call(null,in__9417),cljs.core.second.call(null,in__9417));
in__9417 = G__9419;
out__9418 = G__9420;
continue;
}
} else
{return out__9418;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9421){
var comparator = cljs.core.first(arglist__9421);
var keyvals = cljs.core.rest(arglist__9421);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9422_SHARP_,p2__9423_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9425 = p1__9422_SHARP_;
if(cljs.core.truth_(or__3824__auto____9425))
{return or__3824__auto____9425;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9423_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9426){
var maps = cljs.core.seq(arglist__9426);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9434 = (function (m,e){
var k__9432 = cljs.core.first.call(null,e);
var v__9433 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9432))
{return cljs.core.assoc.call(null,m,k__9432,f.call(null,cljs.core._lookup.call(null,m,k__9432,null),v__9433));
} else
{return cljs.core.assoc.call(null,m,k__9432,v__9433);
}
});
var merge2__9436 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9434,(function (){var or__3824__auto____9435 = m1;
if(cljs.core.truth_(or__3824__auto____9435))
{return or__3824__auto____9435;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9436,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9437){
var f = cljs.core.first(arglist__9437);
var maps = cljs.core.rest(arglist__9437);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9442 = cljs.core.ObjMap.EMPTY;
var keys__9443 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9443)
{var key__9444 = cljs.core.first.call(null,keys__9443);
var entry__9445 = cljs.core._lookup.call(null,map,key__9444,"\uFDD0'cljs.core/not-found");
{
var G__9446 = ((cljs.core.not_EQ_.call(null,entry__9445,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9442,key__9444,entry__9445):ret__9442);
var G__9447 = cljs.core.next.call(null,keys__9443);
ret__9442 = G__9446;
keys__9443 = G__9447;
continue;
}
} else
{return ret__9442;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9451 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9451.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9452 = this;
var h__2151__auto____9453 = this__9452.__hash;
if(!((h__2151__auto____9453 == null)))
{return h__2151__auto____9453;
} else
{var h__2151__auto____9454 = cljs.core.hash_iset.call(null,coll);
this__9452.__hash = h__2151__auto____9454;
return h__2151__auto____9454;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9455 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9456 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9456.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9477 = null;
var G__9477__2 = (function (this_sym9457,k){
var this__9459 = this;
var this_sym9457__9460 = this;
var coll__9461 = this_sym9457__9460;
return coll__9461.cljs$core$ILookup$_lookup$arity$2(coll__9461,k);
});
var G__9477__3 = (function (this_sym9458,k,not_found){
var this__9459 = this;
var this_sym9458__9462 = this;
var coll__9463 = this_sym9458__9462;
return coll__9463.cljs$core$ILookup$_lookup$arity$3(coll__9463,k,not_found);
});
G__9477 = function(this_sym9458,k,not_found){
switch(arguments.length){
case 2:
return G__9477__2.call(this,this_sym9458,k);
case 3:
return G__9477__3.call(this,this_sym9458,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9477;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9449,args9450){
var this__9464 = this;
return this_sym9449.call.apply(this_sym9449,[this_sym9449].concat(args9450.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9465 = this;
return (new cljs.core.PersistentHashSet(this__9465.meta,cljs.core.assoc.call(null,this__9465.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9466 = this;
var this__9467 = this;
return cljs.core.pr_str.call(null,this__9467);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9468 = this;
return cljs.core.keys.call(null,this__9468.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9469 = this;
return (new cljs.core.PersistentHashSet(this__9469.meta,cljs.core.dissoc.call(null,this__9469.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9470 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9471 = this;
var and__3822__auto____9472 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9472)
{var and__3822__auto____9473 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9473)
{return cljs.core.every_QMARK_.call(null,(function (p1__9448_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9448_SHARP_);
}),other);
} else
{return and__3822__auto____9473;
}
} else
{return and__3822__auto____9472;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9474 = this;
return (new cljs.core.PersistentHashSet(meta,this__9474.hash_map,this__9474.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9475 = this;
return this__9475.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9476 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9476.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9478 = cljs.core.count.call(null,items);
var i__9479 = 0;
var out__9480 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9479 < len__9478))
{{
var G__9481 = (i__9479 + 1);
var G__9482 = cljs.core.conj_BANG_.call(null,out__9480,(items[i__9479]));
i__9479 = G__9481;
out__9480 = G__9482;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9480);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9500 = null;
var G__9500__2 = (function (this_sym9486,k){
var this__9488 = this;
var this_sym9486__9489 = this;
var tcoll__9490 = this_sym9486__9489;
if((cljs.core._lookup.call(null,this__9488.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9500__3 = (function (this_sym9487,k,not_found){
var this__9488 = this;
var this_sym9487__9491 = this;
var tcoll__9492 = this_sym9487__9491;
if((cljs.core._lookup.call(null,this__9488.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9500 = function(this_sym9487,k,not_found){
switch(arguments.length){
case 2:
return G__9500__2.call(this,this_sym9487,k);
case 3:
return G__9500__3.call(this,this_sym9487,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9500;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9484,args9485){
var this__9493 = this;
return this_sym9484.call.apply(this_sym9484,[this_sym9484].concat(args9485.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9494 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9495 = this;
if((cljs.core._lookup.call(null,this__9495.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9496 = this;
return cljs.core.count.call(null,this__9496.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9497 = this;
this__9497.transient_map = cljs.core.dissoc_BANG_.call(null,this__9497.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9498 = this;
this__9498.transient_map = cljs.core.assoc_BANG_.call(null,this__9498.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9499 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9499.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9503 = this;
var h__2151__auto____9504 = this__9503.__hash;
if(!((h__2151__auto____9504 == null)))
{return h__2151__auto____9504;
} else
{var h__2151__auto____9505 = cljs.core.hash_iset.call(null,coll);
this__9503.__hash = h__2151__auto____9505;
return h__2151__auto____9505;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9506 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9507 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9507.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9533 = null;
var G__9533__2 = (function (this_sym9508,k){
var this__9510 = this;
var this_sym9508__9511 = this;
var coll__9512 = this_sym9508__9511;
return coll__9512.cljs$core$ILookup$_lookup$arity$2(coll__9512,k);
});
var G__9533__3 = (function (this_sym9509,k,not_found){
var this__9510 = this;
var this_sym9509__9513 = this;
var coll__9514 = this_sym9509__9513;
return coll__9514.cljs$core$ILookup$_lookup$arity$3(coll__9514,k,not_found);
});
G__9533 = function(this_sym9509,k,not_found){
switch(arguments.length){
case 2:
return G__9533__2.call(this,this_sym9509,k);
case 3:
return G__9533__3.call(this,this_sym9509,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9533;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9501,args9502){
var this__9515 = this;
return this_sym9501.call.apply(this_sym9501,[this_sym9501].concat(args9502.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9516 = this;
return (new cljs.core.PersistentTreeSet(this__9516.meta,cljs.core.assoc.call(null,this__9516.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9517 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9517.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9518 = this;
var this__9519 = this;
return cljs.core.pr_str.call(null,this__9519);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9520 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9520.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9521 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9521.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9522 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9523 = this;
return cljs.core._comparator.call(null,this__9523.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9524 = this;
return cljs.core.keys.call(null,this__9524.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9525 = this;
return (new cljs.core.PersistentTreeSet(this__9525.meta,cljs.core.dissoc.call(null,this__9525.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9526 = this;
return cljs.core.count.call(null,this__9526.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9527 = this;
var and__3822__auto____9528 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9528)
{var and__3822__auto____9529 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9529)
{return cljs.core.every_QMARK_.call(null,(function (p1__9483_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9483_SHARP_);
}),other);
} else
{return and__3822__auto____9529;
}
} else
{return and__3822__auto____9528;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9530 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9530.tree_map,this__9530.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9531 = this;
return this__9531.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9532 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9532.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9538__delegate = function (keys){
var in__9536 = cljs.core.seq.call(null,keys);
var out__9537 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9536))
{{
var G__9539 = cljs.core.next.call(null,in__9536);
var G__9540 = cljs.core.conj_BANG_.call(null,out__9537,cljs.core.first.call(null,in__9536));
in__9536 = G__9539;
out__9537 = G__9540;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9537);
}
break;
}
};
var G__9538 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9538__delegate.call(this, keys);
};
G__9538.cljs$lang$maxFixedArity = 0;
G__9538.cljs$lang$applyTo = (function (arglist__9541){
var keys = cljs.core.seq(arglist__9541);;
return G__9538__delegate(keys);
});
G__9538.cljs$lang$arity$variadic = G__9538__delegate;
return G__9538;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9542){
var keys = cljs.core.seq(arglist__9542);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9544){
var comparator = cljs.core.first(arglist__9544);
var keys = cljs.core.rest(arglist__9544);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9550 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9551 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9551))
{var e__9552 = temp__3971__auto____9551;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9552));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9550,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9543_SHARP_){
var temp__3971__auto____9553 = cljs.core.find.call(null,smap,p1__9543_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9553))
{var e__9554 = temp__3971__auto____9553;
return cljs.core.second.call(null,e__9554);
} else
{return p1__9543_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9584 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9577,seen){
while(true){
var vec__9578__9579 = p__9577;
var f__9580 = cljs.core.nth.call(null,vec__9578__9579,0,null);
var xs__9581 = vec__9578__9579;
var temp__3974__auto____9582 = cljs.core.seq.call(null,xs__9581);
if(temp__3974__auto____9582)
{var s__9583 = temp__3974__auto____9582;
if(cljs.core.contains_QMARK_.call(null,seen,f__9580))
{{
var G__9585 = cljs.core.rest.call(null,s__9583);
var G__9586 = seen;
p__9577 = G__9585;
seen = G__9586;
continue;
}
} else
{return cljs.core.cons.call(null,f__9580,step.call(null,cljs.core.rest.call(null,s__9583),cljs.core.conj.call(null,seen,f__9580)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9584.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9589 = cljs.core.PersistentVector.EMPTY;
var s__9590 = s;
while(true){
if(cljs.core.next.call(null,s__9590))
{{
var G__9591 = cljs.core.conj.call(null,ret__9589,cljs.core.first.call(null,s__9590));
var G__9592 = cljs.core.next.call(null,s__9590);
ret__9589 = G__9591;
s__9590 = G__9592;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9589);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9595 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9595)
{return or__3824__auto____9595;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9596 = x.lastIndexOf("/");
if((i__9596 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9596 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9599 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9599)
{return or__3824__auto____9599;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9600 = x.lastIndexOf("/");
if((i__9600 > -1))
{return cljs.core.subs.call(null,x,2,i__9600);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9607 = cljs.core.ObjMap.EMPTY;
var ks__9608 = cljs.core.seq.call(null,keys);
var vs__9609 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9610 = ks__9608;
if(and__3822__auto____9610)
{return vs__9609;
} else
{return and__3822__auto____9610;
}
})())
{{
var G__9611 = cljs.core.assoc.call(null,map__9607,cljs.core.first.call(null,ks__9608),cljs.core.first.call(null,vs__9609));
var G__9612 = cljs.core.next.call(null,ks__9608);
var G__9613 = cljs.core.next.call(null,vs__9609);
map__9607 = G__9611;
ks__9608 = G__9612;
vs__9609 = G__9613;
continue;
}
} else
{return map__9607;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9616__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9601_SHARP_,p2__9602_SHARP_){
return max_key.call(null,k,p1__9601_SHARP_,p2__9602_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9616 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9616__delegate.call(this, k, x, y, more);
};
G__9616.cljs$lang$maxFixedArity = 3;
G__9616.cljs$lang$applyTo = (function (arglist__9617){
var k = cljs.core.first(arglist__9617);
var x = cljs.core.first(cljs.core.next(arglist__9617));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9617)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9617)));
return G__9616__delegate(k, x, y, more);
});
G__9616.cljs$lang$arity$variadic = G__9616__delegate;
return G__9616;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9618__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9614_SHARP_,p2__9615_SHARP_){
return min_key.call(null,k,p1__9614_SHARP_,p2__9615_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9618 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9618__delegate.call(this, k, x, y, more);
};
G__9618.cljs$lang$maxFixedArity = 3;
G__9618.cljs$lang$applyTo = (function (arglist__9619){
var k = cljs.core.first(arglist__9619);
var x = cljs.core.first(cljs.core.next(arglist__9619));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9619)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9619)));
return G__9618__delegate(k, x, y, more);
});
G__9618.cljs$lang$arity$variadic = G__9618__delegate;
return G__9618;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9622 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9622)
{var s__9623 = temp__3974__auto____9622;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9623),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9623)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9626 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9626)
{var s__9627 = temp__3974__auto____9626;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9627))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9627),take_while.call(null,pred,cljs.core.rest.call(null,s__9627)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9629 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9629.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9641 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9642 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9642))
{var vec__9643__9644 = temp__3974__auto____9642;
var e__9645 = cljs.core.nth.call(null,vec__9643__9644,0,null);
var s__9646 = vec__9643__9644;
if(cljs.core.truth_(include__9641.call(null,e__9645)))
{return s__9646;
} else
{return cljs.core.next.call(null,s__9646);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9641,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9647 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9647))
{var vec__9648__9649 = temp__3974__auto____9647;
var e__9650 = cljs.core.nth.call(null,vec__9648__9649,0,null);
var s__9651 = vec__9648__9649;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9650))?s__9651:cljs.core.next.call(null,s__9651)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9663 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9664 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9664))
{var vec__9665__9666 = temp__3974__auto____9664;
var e__9667 = cljs.core.nth.call(null,vec__9665__9666,0,null);
var s__9668 = vec__9665__9666;
if(cljs.core.truth_(include__9663.call(null,e__9667)))
{return s__9668;
} else
{return cljs.core.next.call(null,s__9668);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9663,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9669 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9669))
{var vec__9670__9671 = temp__3974__auto____9669;
var e__9672 = cljs.core.nth.call(null,vec__9670__9671,0,null);
var s__9673 = vec__9670__9671;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9672))?s__9673:cljs.core.next.call(null,s__9673)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9674 = this;
var h__2151__auto____9675 = this__9674.__hash;
if(!((h__2151__auto____9675 == null)))
{return h__2151__auto____9675;
} else
{var h__2151__auto____9676 = cljs.core.hash_coll.call(null,rng);
this__9674.__hash = h__2151__auto____9676;
return h__2151__auto____9676;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9677 = this;
if((this__9677.step > 0))
{if(((this__9677.start + this__9677.step) < this__9677.end))
{return (new cljs.core.Range(this__9677.meta,(this__9677.start + this__9677.step),this__9677.end,this__9677.step,null));
} else
{return null;
}
} else
{if(((this__9677.start + this__9677.step) > this__9677.end))
{return (new cljs.core.Range(this__9677.meta,(this__9677.start + this__9677.step),this__9677.end,this__9677.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9678 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9679 = this;
var this__9680 = this;
return cljs.core.pr_str.call(null,this__9680);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9681 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9682 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9683 = this;
if((this__9683.step > 0))
{if((this__9683.start < this__9683.end))
{return rng;
} else
{return null;
}
} else
{if((this__9683.start > this__9683.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9684 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9684.end - this__9684.start) / this__9684.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9685 = this;
return this__9685.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9686 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9686.meta,(this__9686.start + this__9686.step),this__9686.end,this__9686.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9687 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9688 = this;
return (new cljs.core.Range(meta,this__9688.start,this__9688.end,this__9688.step,this__9688.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9689 = this;
return this__9689.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9690 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9690.start + (n * this__9690.step));
} else
{if((function (){var and__3822__auto____9691 = (this__9690.start > this__9690.end);
if(and__3822__auto____9691)
{return (this__9690.step === 0);
} else
{return and__3822__auto____9691;
}
})())
{return this__9690.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9692 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9692.start + (n * this__9692.step));
} else
{if((function (){var and__3822__auto____9693 = (this__9692.start > this__9692.end);
if(and__3822__auto____9693)
{return (this__9692.step === 0);
} else
{return and__3822__auto____9693;
}
})())
{return this__9692.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9694 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9694.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9697 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9697)
{var s__9698 = temp__3974__auto____9697;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9698),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9698)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9705 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9705)
{var s__9706 = temp__3974__auto____9705;
var fst__9707 = cljs.core.first.call(null,s__9706);
var fv__9708 = f.call(null,fst__9707);
var run__9709 = cljs.core.cons.call(null,fst__9707,cljs.core.take_while.call(null,(function (p1__9699_SHARP_){
return cljs.core._EQ_.call(null,fv__9708,f.call(null,p1__9699_SHARP_));
}),cljs.core.next.call(null,s__9706)));
return cljs.core.cons.call(null,run__9709,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9709),s__9706))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9724 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9724)
{var s__9725 = temp__3971__auto____9724;
return reductions.call(null,f,cljs.core.first.call(null,s__9725),cljs.core.rest.call(null,s__9725));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9726 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9726)
{var s__9727 = temp__3974__auto____9726;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9727)),cljs.core.rest.call(null,s__9727));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9730 = null;
var G__9730__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9730__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9730__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9730__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9730__4 = (function() { 
var G__9731__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9731 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9731__delegate.call(this, x, y, z, args);
};
G__9731.cljs$lang$maxFixedArity = 3;
G__9731.cljs$lang$applyTo = (function (arglist__9732){
var x = cljs.core.first(arglist__9732);
var y = cljs.core.first(cljs.core.next(arglist__9732));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9732)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9732)));
return G__9731__delegate(x, y, z, args);
});
G__9731.cljs$lang$arity$variadic = G__9731__delegate;
return G__9731;
})()
;
G__9730 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9730__0.call(this);
case 1:
return G__9730__1.call(this,x);
case 2:
return G__9730__2.call(this,x,y);
case 3:
return G__9730__3.call(this,x,y,z);
default:
return G__9730__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9730.cljs$lang$maxFixedArity = 3;
G__9730.cljs$lang$applyTo = G__9730__4.cljs$lang$applyTo;
return G__9730;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9733 = null;
var G__9733__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9733__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9733__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9733__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9733__4 = (function() { 
var G__9734__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9734 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9734__delegate.call(this, x, y, z, args);
};
G__9734.cljs$lang$maxFixedArity = 3;
G__9734.cljs$lang$applyTo = (function (arglist__9735){
var x = cljs.core.first(arglist__9735);
var y = cljs.core.first(cljs.core.next(arglist__9735));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9735)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9735)));
return G__9734__delegate(x, y, z, args);
});
G__9734.cljs$lang$arity$variadic = G__9734__delegate;
return G__9734;
})()
;
G__9733 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9733__0.call(this);
case 1:
return G__9733__1.call(this,x);
case 2:
return G__9733__2.call(this,x,y);
case 3:
return G__9733__3.call(this,x,y,z);
default:
return G__9733__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9733.cljs$lang$maxFixedArity = 3;
G__9733.cljs$lang$applyTo = G__9733__4.cljs$lang$applyTo;
return G__9733;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9736 = null;
var G__9736__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9736__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9736__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9736__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9736__4 = (function() { 
var G__9737__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9737 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9737__delegate.call(this, x, y, z, args);
};
G__9737.cljs$lang$maxFixedArity = 3;
G__9737.cljs$lang$applyTo = (function (arglist__9738){
var x = cljs.core.first(arglist__9738);
var y = cljs.core.first(cljs.core.next(arglist__9738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9738)));
return G__9737__delegate(x, y, z, args);
});
G__9737.cljs$lang$arity$variadic = G__9737__delegate;
return G__9737;
})()
;
G__9736 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9736__0.call(this);
case 1:
return G__9736__1.call(this,x);
case 2:
return G__9736__2.call(this,x,y);
case 3:
return G__9736__3.call(this,x,y,z);
default:
return G__9736__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9736.cljs$lang$maxFixedArity = 3;
G__9736.cljs$lang$applyTo = G__9736__4.cljs$lang$applyTo;
return G__9736;
})()
});
var juxt__4 = (function() { 
var G__9739__delegate = function (f,g,h,fs){
var fs__9729 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9740 = null;
var G__9740__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9710_SHARP_,p2__9711_SHARP_){
return cljs.core.conj.call(null,p1__9710_SHARP_,p2__9711_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9729);
});
var G__9740__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9712_SHARP_,p2__9713_SHARP_){
return cljs.core.conj.call(null,p1__9712_SHARP_,p2__9713_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9729);
});
var G__9740__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9714_SHARP_,p2__9715_SHARP_){
return cljs.core.conj.call(null,p1__9714_SHARP_,p2__9715_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9729);
});
var G__9740__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9716_SHARP_,p2__9717_SHARP_){
return cljs.core.conj.call(null,p1__9716_SHARP_,p2__9717_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9729);
});
var G__9740__4 = (function() { 
var G__9741__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9718_SHARP_,p2__9719_SHARP_){
return cljs.core.conj.call(null,p1__9718_SHARP_,cljs.core.apply.call(null,p2__9719_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9729);
};
var G__9741 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9741__delegate.call(this, x, y, z, args);
};
G__9741.cljs$lang$maxFixedArity = 3;
G__9741.cljs$lang$applyTo = (function (arglist__9742){
var x = cljs.core.first(arglist__9742);
var y = cljs.core.first(cljs.core.next(arglist__9742));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9742)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9742)));
return G__9741__delegate(x, y, z, args);
});
G__9741.cljs$lang$arity$variadic = G__9741__delegate;
return G__9741;
})()
;
G__9740 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9740__0.call(this);
case 1:
return G__9740__1.call(this,x);
case 2:
return G__9740__2.call(this,x,y);
case 3:
return G__9740__3.call(this,x,y,z);
default:
return G__9740__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9740.cljs$lang$maxFixedArity = 3;
G__9740.cljs$lang$applyTo = G__9740__4.cljs$lang$applyTo;
return G__9740;
})()
};
var G__9739 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9739__delegate.call(this, f, g, h, fs);
};
G__9739.cljs$lang$maxFixedArity = 3;
G__9739.cljs$lang$applyTo = (function (arglist__9743){
var f = cljs.core.first(arglist__9743);
var g = cljs.core.first(cljs.core.next(arglist__9743));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9743)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9743)));
return G__9739__delegate(f, g, h, fs);
});
G__9739.cljs$lang$arity$variadic = G__9739__delegate;
return G__9739;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9746 = cljs.core.next.call(null,coll);
coll = G__9746;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9745 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9745)
{return (n > 0);
} else
{return and__3822__auto____9745;
}
})()))
{{
var G__9747 = (n - 1);
var G__9748 = cljs.core.next.call(null,coll);
n = G__9747;
coll = G__9748;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9750 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9750),s))
{if((cljs.core.count.call(null,matches__9750) === 1))
{return cljs.core.first.call(null,matches__9750);
} else
{return cljs.core.vec.call(null,matches__9750);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9752 = re.exec(s);
if((matches__9752 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9752) === 1))
{return cljs.core.first.call(null,matches__9752);
} else
{return cljs.core.vec.call(null,matches__9752);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9757 = cljs.core.re_find.call(null,re,s);
var match_idx__9758 = s.search(re);
var match_str__9759 = ((cljs.core.coll_QMARK_.call(null,match_data__9757))?cljs.core.first.call(null,match_data__9757):match_data__9757);
var post_match__9760 = cljs.core.subs.call(null,s,(match_idx__9758 + cljs.core.count.call(null,match_str__9759)));
if(cljs.core.truth_(match_data__9757))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9757,re_seq.call(null,re,post_match__9760));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9767__9768 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9769 = cljs.core.nth.call(null,vec__9767__9768,0,null);
var flags__9770 = cljs.core.nth.call(null,vec__9767__9768,1,null);
var pattern__9771 = cljs.core.nth.call(null,vec__9767__9768,2,null);
return (new RegExp(pattern__9771,flags__9770));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9761_SHARP_){
return print_one.call(null,p1__9761_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9781 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9781))
{var and__3822__auto____9785 = (function (){var G__9782__9783 = obj;
if(G__9782__9783)
{if((function (){var or__3824__auto____9784 = (G__9782__9783.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9784)
{return or__3824__auto____9784;
} else
{return G__9782__9783.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9782__9783.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9782__9783);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9782__9783);
}
})();
if(cljs.core.truth_(and__3822__auto____9785))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9785;
}
} else
{return and__3822__auto____9781;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9786 = !((obj == null));
if(and__3822__auto____9786)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9786;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9787__9788 = obj;
if(G__9787__9788)
{if((function (){var or__3824__auto____9789 = (G__9787__9788.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9789)
{return or__3824__auto____9789;
} else
{return G__9787__9788.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9787__9788.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9787__9788);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9787__9788);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9809 = (new goog.string.StringBuffer());
var G__9810__9811 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9810__9811)
{var string__9812 = cljs.core.first.call(null,G__9810__9811);
var G__9810__9813 = G__9810__9811;
while(true){
sb__9809.append(string__9812);
var temp__3974__auto____9814 = cljs.core.next.call(null,G__9810__9813);
if(temp__3974__auto____9814)
{var G__9810__9815 = temp__3974__auto____9814;
{
var G__9828 = cljs.core.first.call(null,G__9810__9815);
var G__9829 = G__9810__9815;
string__9812 = G__9828;
G__9810__9813 = G__9829;
continue;
}
} else
{}
break;
}
} else
{}
var G__9816__9817 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9816__9817)
{var obj__9818 = cljs.core.first.call(null,G__9816__9817);
var G__9816__9819 = G__9816__9817;
while(true){
sb__9809.append(" ");
var G__9820__9821 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9818,opts));
if(G__9820__9821)
{var string__9822 = cljs.core.first.call(null,G__9820__9821);
var G__9820__9823 = G__9820__9821;
while(true){
sb__9809.append(string__9822);
var temp__3974__auto____9824 = cljs.core.next.call(null,G__9820__9823);
if(temp__3974__auto____9824)
{var G__9820__9825 = temp__3974__auto____9824;
{
var G__9830 = cljs.core.first.call(null,G__9820__9825);
var G__9831 = G__9820__9825;
string__9822 = G__9830;
G__9820__9823 = G__9831;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9826 = cljs.core.next.call(null,G__9816__9819);
if(temp__3974__auto____9826)
{var G__9816__9827 = temp__3974__auto____9826;
{
var G__9832 = cljs.core.first.call(null,G__9816__9827);
var G__9833 = G__9816__9827;
obj__9818 = G__9832;
G__9816__9819 = G__9833;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9809;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9835 = cljs.core.pr_sb.call(null,objs,opts);
sb__9835.append("\n");
return [cljs.core.str(sb__9835)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return cljs.core.string_print.call(null,"");
} else
{var G__9854__9855 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9854__9855)
{var string__9856 = cljs.core.first.call(null,G__9854__9855);
var G__9854__9857 = G__9854__9855;
while(true){
cljs.core.string_print.call(null,string__9856);
var temp__3974__auto____9858 = cljs.core.next.call(null,G__9854__9857);
if(temp__3974__auto____9858)
{var G__9854__9859 = temp__3974__auto____9858;
{
var G__9872 = cljs.core.first.call(null,G__9854__9859);
var G__9873 = G__9854__9859;
string__9856 = G__9872;
G__9854__9857 = G__9873;
continue;
}
} else
{}
break;
}
} else
{}
var G__9860__9861 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9860__9861)
{var obj__9862 = cljs.core.first.call(null,G__9860__9861);
var G__9860__9863 = G__9860__9861;
while(true){
cljs.core.string_print.call(null," ");
var G__9864__9865 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9862,opts));
if(G__9864__9865)
{var string__9866 = cljs.core.first.call(null,G__9864__9865);
var G__9864__9867 = G__9864__9865;
while(true){
cljs.core.string_print.call(null,string__9866);
var temp__3974__auto____9868 = cljs.core.next.call(null,G__9864__9867);
if(temp__3974__auto____9868)
{var G__9864__9869 = temp__3974__auto____9868;
{
var G__9874 = cljs.core.first.call(null,G__9864__9869);
var G__9875 = G__9864__9869;
string__9866 = G__9874;
G__9864__9867 = G__9875;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9870 = cljs.core.next.call(null,G__9860__9863);
if(temp__3974__auto____9870)
{var G__9860__9871 = temp__3974__auto____9870;
{
var G__9876 = cljs.core.first.call(null,G__9860__9871);
var G__9877 = G__9860__9871;
obj__9862 = G__9876;
G__9860__9863 = G__9877;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9878){
var objs = cljs.core.seq(arglist__9878);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9879){
var objs = cljs.core.seq(arglist__9879);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9880){
var objs = cljs.core.seq(arglist__9880);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9881){
var objs = cljs.core.seq(arglist__9881);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9882){
var objs = cljs.core.seq(arglist__9882);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9883){
var objs = cljs.core.seq(arglist__9883);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9884){
var objs = cljs.core.seq(arglist__9884);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9885){
var objs = cljs.core.seq(arglist__9885);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__9886){
var fmt = cljs.core.first(arglist__9886);
var args = cljs.core.rest(arglist__9886);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9887 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9887,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9888 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9888,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9889 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9889,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9890 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9890))
{var nspc__9891 = temp__3974__auto____9890;
return [cljs.core.str(nspc__9891),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9892 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9892))
{var nspc__9893 = temp__3974__auto____9892;
return [cljs.core.str(nspc__9893),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9894 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9894,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9896 = (function (n,len){
var ns__9895 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9895) < len))
{{
var G__9898 = [cljs.core.str("0"),cljs.core.str(ns__9895)].join('');
ns__9895 = G__9898;
continue;
}
} else
{return ns__9895;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9896.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9896.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9896.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9896.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9896.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9896.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9897 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9897,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9899 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9900 = this;
var G__9901__9902 = cljs.core.seq.call(null,this__9900.watches);
if(G__9901__9902)
{var G__9904__9906 = cljs.core.first.call(null,G__9901__9902);
var vec__9905__9907 = G__9904__9906;
var key__9908 = cljs.core.nth.call(null,vec__9905__9907,0,null);
var f__9909 = cljs.core.nth.call(null,vec__9905__9907,1,null);
var G__9901__9910 = G__9901__9902;
var G__9904__9911 = G__9904__9906;
var G__9901__9912 = G__9901__9910;
while(true){
var vec__9913__9914 = G__9904__9911;
var key__9915 = cljs.core.nth.call(null,vec__9913__9914,0,null);
var f__9916 = cljs.core.nth.call(null,vec__9913__9914,1,null);
var G__9901__9917 = G__9901__9912;
f__9916.call(null,key__9915,this$,oldval,newval);
var temp__3974__auto____9918 = cljs.core.next.call(null,G__9901__9917);
if(temp__3974__auto____9918)
{var G__9901__9919 = temp__3974__auto____9918;
{
var G__9926 = cljs.core.first.call(null,G__9901__9919);
var G__9927 = G__9901__9919;
G__9904__9911 = G__9926;
G__9901__9912 = G__9927;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9920 = this;
return this$.watches = cljs.core.assoc.call(null,this__9920.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9921 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9921.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9922 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9922.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9923 = this;
return this__9923.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9924 = this;
return this__9924.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9925 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9939__delegate = function (x,p__9928){
var map__9934__9935 = p__9928;
var map__9934__9936 = ((cljs.core.seq_QMARK_.call(null,map__9934__9935))?cljs.core.apply.call(null,cljs.core.hash_map,map__9934__9935):map__9934__9935);
var validator__9937 = cljs.core._lookup.call(null,map__9934__9936,"\uFDD0'validator",null);
var meta__9938 = cljs.core._lookup.call(null,map__9934__9936,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9938,validator__9937,null));
};
var G__9939 = function (x,var_args){
var p__9928 = null;
if (goog.isDef(var_args)) {
  p__9928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9939__delegate.call(this, x, p__9928);
};
G__9939.cljs$lang$maxFixedArity = 1;
G__9939.cljs$lang$applyTo = (function (arglist__9940){
var x = cljs.core.first(arglist__9940);
var p__9928 = cljs.core.rest(arglist__9940);
return G__9939__delegate(x, p__9928);
});
G__9939.cljs$lang$arity$variadic = G__9939__delegate;
return G__9939;
})()
;
atom = function(x,var_args){
var p__9928 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9944 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9944))
{var validate__9945 = temp__3974__auto____9944;
if(cljs.core.truth_(validate__9945.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6448))))].join('')));
}
} else
{}
var old_value__9946 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9946,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9947__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9947 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9947__delegate.call(this, a, f, x, y, z, more);
};
G__9947.cljs$lang$maxFixedArity = 5;
G__9947.cljs$lang$applyTo = (function (arglist__9948){
var a = cljs.core.first(arglist__9948);
var f = cljs.core.first(cljs.core.next(arglist__9948));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9948)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9948))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9948)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9948)))));
return G__9947__delegate(a, f, x, y, z, more);
});
G__9947.cljs$lang$arity$variadic = G__9947__delegate;
return G__9947;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9949){
var iref = cljs.core.first(arglist__9949);
var f = cljs.core.first(cljs.core.next(arglist__9949));
var args = cljs.core.rest(cljs.core.next(arglist__9949));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9950 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9950.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9951 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9951.state,(function (p__9952){
var map__9953__9954 = p__9952;
var map__9953__9955 = ((cljs.core.seq_QMARK_.call(null,map__9953__9954))?cljs.core.apply.call(null,cljs.core.hash_map,map__9953__9954):map__9953__9954);
var curr_state__9956 = map__9953__9955;
var done__9957 = cljs.core._lookup.call(null,map__9953__9955,"\uFDD0'done",null);
if(cljs.core.truth_(done__9957))
{return curr_state__9956;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9951.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9978__9979 = options;
var map__9978__9980 = ((cljs.core.seq_QMARK_.call(null,map__9978__9979))?cljs.core.apply.call(null,cljs.core.hash_map,map__9978__9979):map__9978__9979);
var keywordize_keys__9981 = cljs.core._lookup.call(null,map__9978__9980,"\uFDD0'keywordize-keys",null);
var keyfn__9982 = (cljs.core.truth_(keywordize_keys__9981)?cljs.core.keyword:cljs.core.str);
var f__9997 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2421__auto____9996 = (function iter__9990(s__9991){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9991__9994 = s__9991;
while(true){
if(cljs.core.seq.call(null,s__9991__9994))
{var k__9995 = cljs.core.first.call(null,s__9991__9994);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9982.call(null,k__9995),thisfn.call(null,(x[k__9995]))], true),iter__9990.call(null,cljs.core.rest.call(null,s__9991__9994)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2421__auto____9996.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9997.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9998){
var x = cljs.core.first(arglist__9998);
var options = cljs.core.rest(arglist__9998);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10003 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10007__delegate = function (args){
var temp__3971__auto____10004 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10003),args,null);
if(cljs.core.truth_(temp__3971__auto____10004))
{var v__10005 = temp__3971__auto____10004;
return v__10005;
} else
{var ret__10006 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10003,cljs.core.assoc,args,ret__10006);
return ret__10006;
}
};
var G__10007 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10007__delegate.call(this, args);
};
G__10007.cljs$lang$maxFixedArity = 0;
G__10007.cljs$lang$applyTo = (function (arglist__10008){
var args = cljs.core.seq(arglist__10008);;
return G__10007__delegate(args);
});
G__10007.cljs$lang$arity$variadic = G__10007__delegate;
return G__10007;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10010 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10010))
{{
var G__10011 = ret__10010;
f = G__10011;
continue;
}
} else
{return ret__10010;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10012__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10012 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10012__delegate.call(this, f, args);
};
G__10012.cljs$lang$maxFixedArity = 1;
G__10012.cljs$lang$applyTo = (function (arglist__10013){
var f = cljs.core.first(arglist__10013);
var args = cljs.core.rest(arglist__10013);
return G__10012__delegate(f, args);
});
G__10012.cljs$lang$arity$variadic = G__10012__delegate;
return G__10012;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10015 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10015,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10015,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10024 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10024)
{return or__3824__auto____10024;
} else
{var or__3824__auto____10025 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10025)
{return or__3824__auto____10025;
} else
{var and__3822__auto____10026 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10026)
{var and__3822__auto____10027 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10027)
{var and__3822__auto____10028 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10028)
{var ret__10029 = true;
var i__10030 = 0;
while(true){
if((function (){var or__3824__auto____10031 = cljs.core.not.call(null,ret__10029);
if(or__3824__auto____10031)
{return or__3824__auto____10031;
} else
{return (i__10030 === cljs.core.count.call(null,parent));
}
})())
{return ret__10029;
} else
{{
var G__10032 = isa_QMARK_.call(null,h,child.call(null,i__10030),parent.call(null,i__10030));
var G__10033 = (i__10030 + 1);
ret__10029 = G__10032;
i__10030 = G__10033;
continue;
}
}
break;
}
} else
{return and__3822__auto____10028;
}
} else
{return and__3822__auto____10027;
}
} else
{return and__3822__auto____10026;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6732))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6736))))].join('')));
}
var tp__10042 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10043 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10044 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10045 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10046 = ((cljs.core.contains_QMARK_.call(null,tp__10042.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10044.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10044.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10042,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10045.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10043,parent,ta__10044),"\uFDD0'descendants":tf__10045.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10044,tag,td__10043)});
})());
if(cljs.core.truth_(or__3824__auto____10046))
{return or__3824__auto____10046;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10051 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10052 = (cljs.core.truth_(parentMap__10051.call(null,tag))?cljs.core.disj.call(null,parentMap__10051.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10053 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10052))?cljs.core.assoc.call(null,parentMap__10051,tag,childsParents__10052):cljs.core.dissoc.call(null,parentMap__10051,tag));
var deriv_seq__10054 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10034_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10034_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10034_SHARP_),cljs.core.second.call(null,p1__10034_SHARP_)));
}),cljs.core.seq.call(null,newParents__10053)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10051.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10035_SHARP_,p2__10036_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10035_SHARP_,p2__10036_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10054));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10062 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10064 = (cljs.core.truth_((function (){var and__3822__auto____10063 = xprefs__10062;
if(cljs.core.truth_(and__3822__auto____10063))
{return xprefs__10062.call(null,y);
} else
{return and__3822__auto____10063;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10064))
{return or__3824__auto____10064;
} else
{var or__3824__auto____10066 = (function (){var ps__10065 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10065) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10065),prefer_table)))
{} else
{}
{
var G__10069 = cljs.core.rest.call(null,ps__10065);
ps__10065 = G__10069;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10066))
{return or__3824__auto____10066;
} else
{var or__3824__auto____10068 = (function (){var ps__10067 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10067) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10067),y,prefer_table)))
{} else
{}
{
var G__10070 = cljs.core.rest.call(null,ps__10067);
ps__10067 = G__10070;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10068))
{return or__3824__auto____10068;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10072 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10072))
{return or__3824__auto____10072;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10090 = cljs.core.reduce.call(null,(function (be,p__10082){
var vec__10083__10084 = p__10082;
var k__10085 = cljs.core.nth.call(null,vec__10083__10084,0,null);
var ___10086 = cljs.core.nth.call(null,vec__10083__10084,1,null);
var e__10087 = vec__10083__10084;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10085))
{var be2__10089 = (cljs.core.truth_((function (){var or__3824__auto____10088 = (be == null);
if(or__3824__auto____10088)
{return or__3824__auto____10088;
} else
{return cljs.core.dominates.call(null,k__10085,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10087:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10089),k__10085,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10085),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10089)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10089;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10090))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10090));
return cljs.core.second.call(null,best_entry__10090);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10095 = mf;
if(and__3822__auto____10095)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10095;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2322__auto____10096 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10097 = (cljs.core._reset[goog.typeOf(x__2322__auto____10096)]);
if(or__3824__auto____10097)
{return or__3824__auto____10097;
} else
{var or__3824__auto____10098 = (cljs.core._reset["_"]);
if(or__3824__auto____10098)
{return or__3824__auto____10098;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10103 = mf;
if(and__3822__auto____10103)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10103;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2322__auto____10104 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10105 = (cljs.core._add_method[goog.typeOf(x__2322__auto____10104)]);
if(or__3824__auto____10105)
{return or__3824__auto____10105;
} else
{var or__3824__auto____10106 = (cljs.core._add_method["_"]);
if(or__3824__auto____10106)
{return or__3824__auto____10106;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10111 = mf;
if(and__3822__auto____10111)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10111;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2322__auto____10112 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10113 = (cljs.core._remove_method[goog.typeOf(x__2322__auto____10112)]);
if(or__3824__auto____10113)
{return or__3824__auto____10113;
} else
{var or__3824__auto____10114 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10114)
{return or__3824__auto____10114;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10119 = mf;
if(and__3822__auto____10119)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10119;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2322__auto____10120 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10121 = (cljs.core._prefer_method[goog.typeOf(x__2322__auto____10120)]);
if(or__3824__auto____10121)
{return or__3824__auto____10121;
} else
{var or__3824__auto____10122 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10122)
{return or__3824__auto____10122;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10127 = mf;
if(and__3822__auto____10127)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10127;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2322__auto____10128 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10129 = (cljs.core._get_method[goog.typeOf(x__2322__auto____10128)]);
if(or__3824__auto____10129)
{return or__3824__auto____10129;
} else
{var or__3824__auto____10130 = (cljs.core._get_method["_"]);
if(or__3824__auto____10130)
{return or__3824__auto____10130;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10135 = mf;
if(and__3822__auto____10135)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10135;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2322__auto____10136 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10137 = (cljs.core._methods[goog.typeOf(x__2322__auto____10136)]);
if(or__3824__auto____10137)
{return or__3824__auto____10137;
} else
{var or__3824__auto____10138 = (cljs.core._methods["_"]);
if(or__3824__auto____10138)
{return or__3824__auto____10138;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10143 = mf;
if(and__3822__auto____10143)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10143;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2322__auto____10144 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10145 = (cljs.core._prefers[goog.typeOf(x__2322__auto____10144)]);
if(or__3824__auto____10145)
{return or__3824__auto____10145;
} else
{var or__3824__auto____10146 = (cljs.core._prefers["_"]);
if(or__3824__auto____10146)
{return or__3824__auto____10146;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10151 = mf;
if(and__3822__auto____10151)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10151;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2322__auto____10152 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10153 = (cljs.core._dispatch[goog.typeOf(x__2322__auto____10152)]);
if(or__3824__auto____10153)
{return or__3824__auto____10153;
} else
{var or__3824__auto____10154 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10154)
{return or__3824__auto____10154;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10157 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10158 = cljs.core._get_method.call(null,mf,dispatch_val__10157);
if(cljs.core.truth_(target_fn__10158))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10157)].join('')));
}
return cljs.core.apply.call(null,target_fn__10158,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10159 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10160 = this;
cljs.core.swap_BANG_.call(null,this__10160.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10160.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10160.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10160.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10161 = this;
cljs.core.swap_BANG_.call(null,this__10161.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10161.method_cache,this__10161.method_table,this__10161.cached_hierarchy,this__10161.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10162 = this;
cljs.core.swap_BANG_.call(null,this__10162.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10162.method_cache,this__10162.method_table,this__10162.cached_hierarchy,this__10162.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10163 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10163.cached_hierarchy),cljs.core.deref.call(null,this__10163.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10163.method_cache,this__10163.method_table,this__10163.cached_hierarchy,this__10163.hierarchy);
}
var temp__3971__auto____10164 = cljs.core.deref.call(null,this__10163.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10164))
{var target_fn__10165 = temp__3971__auto____10164;
return target_fn__10165;
} else
{var temp__3971__auto____10166 = cljs.core.find_and_cache_best_method.call(null,this__10163.name,dispatch_val,this__10163.hierarchy,this__10163.method_table,this__10163.prefer_table,this__10163.method_cache,this__10163.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10166))
{var target_fn__10167 = temp__3971__auto____10166;
return target_fn__10167;
} else
{return cljs.core.deref.call(null,this__10163.method_table).call(null,this__10163.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10168 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10168.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10168.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10168.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10168.method_cache,this__10168.method_table,this__10168.cached_hierarchy,this__10168.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10169 = this;
return cljs.core.deref.call(null,this__10169.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10170 = this;
return cljs.core.deref.call(null,this__10170.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10171 = this;
return cljs.core.do_dispatch.call(null,mf,this__10171.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10173__delegate = function (_,args){
var self__10172 = this;
return cljs.core._dispatch.call(null,self__10172,args);
};
var G__10173 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10173__delegate.call(this, _, args);
};
G__10173.cljs$lang$maxFixedArity = 1;
G__10173.cljs$lang$applyTo = (function (arglist__10174){
var _ = cljs.core.first(arglist__10174);
var args = cljs.core.rest(arglist__10174);
return G__10173__delegate(_, args);
});
G__10173.cljs$lang$arity$variadic = G__10173__delegate;
return G__10173;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10175 = this;
return cljs.core._dispatch.call(null,self__10175,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2268__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10176 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10178,_){
var this__10177 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10177.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10179 = this;
var and__3822__auto____10180 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10180)
{return (this__10179.uuid === other.uuid);
} else
{return and__3822__auto____10180;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10181 = this;
var this__10182 = this;
return cljs.core.pr_str.call(null,this__10182);
});
cljs.core.UUID;
