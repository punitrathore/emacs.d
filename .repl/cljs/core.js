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
var x__14093 = (((x == null))?null:x);
if((p[goog.typeOf(x__14093)]))
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
var G__14094__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__14094 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14094__delegate.call(this, array, i, idxs);
};
G__14094.cljs$lang$maxFixedArity = 2;
G__14094.cljs$lang$applyTo = (function (arglist__14095){
var array = cljs.core.first(arglist__14095);
var i = cljs.core.first(cljs.core.next(arglist__14095));
var idxs = cljs.core.rest(cljs.core.next(arglist__14095));
return G__14094__delegate(array, i, idxs);
});
G__14094.cljs$lang$arity$variadic = G__14094__delegate;
return G__14094;
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
if((function (){var and__3822__auto____14180 = this$;
if(and__3822__auto____14180)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____14180;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2322__auto____14181 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14182 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14181)]);
if(or__3824__auto____14182)
{return or__3824__auto____14182;
} else
{var or__3824__auto____14183 = (cljs.core._invoke["_"]);
if(or__3824__auto____14183)
{return or__3824__auto____14183;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____14184 = this$;
if(and__3822__auto____14184)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____14184;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2322__auto____14185 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14186 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14185)]);
if(or__3824__auto____14186)
{return or__3824__auto____14186;
} else
{var or__3824__auto____14187 = (cljs.core._invoke["_"]);
if(or__3824__auto____14187)
{return or__3824__auto____14187;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____14188 = this$;
if(and__3822__auto____14188)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____14188;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2322__auto____14189 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14190 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14189)]);
if(or__3824__auto____14190)
{return or__3824__auto____14190;
} else
{var or__3824__auto____14191 = (cljs.core._invoke["_"]);
if(or__3824__auto____14191)
{return or__3824__auto____14191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____14192 = this$;
if(and__3822__auto____14192)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____14192;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2322__auto____14193 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14194 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14193)]);
if(or__3824__auto____14194)
{return or__3824__auto____14194;
} else
{var or__3824__auto____14195 = (cljs.core._invoke["_"]);
if(or__3824__auto____14195)
{return or__3824__auto____14195;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____14196 = this$;
if(and__3822__auto____14196)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____14196;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2322__auto____14197 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14198 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14197)]);
if(or__3824__auto____14198)
{return or__3824__auto____14198;
} else
{var or__3824__auto____14199 = (cljs.core._invoke["_"]);
if(or__3824__auto____14199)
{return or__3824__auto____14199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____14200 = this$;
if(and__3822__auto____14200)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____14200;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2322__auto____14201 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14202 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14201)]);
if(or__3824__auto____14202)
{return or__3824__auto____14202;
} else
{var or__3824__auto____14203 = (cljs.core._invoke["_"]);
if(or__3824__auto____14203)
{return or__3824__auto____14203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____14204 = this$;
if(and__3822__auto____14204)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____14204;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2322__auto____14205 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14206 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14205)]);
if(or__3824__auto____14206)
{return or__3824__auto____14206;
} else
{var or__3824__auto____14207 = (cljs.core._invoke["_"]);
if(or__3824__auto____14207)
{return or__3824__auto____14207;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____14208 = this$;
if(and__3822__auto____14208)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____14208;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2322__auto____14209 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14210 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14209)]);
if(or__3824__auto____14210)
{return or__3824__auto____14210;
} else
{var or__3824__auto____14211 = (cljs.core._invoke["_"]);
if(or__3824__auto____14211)
{return or__3824__auto____14211;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____14212 = this$;
if(and__3822__auto____14212)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____14212;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2322__auto____14213 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14214 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14213)]);
if(or__3824__auto____14214)
{return or__3824__auto____14214;
} else
{var or__3824__auto____14215 = (cljs.core._invoke["_"]);
if(or__3824__auto____14215)
{return or__3824__auto____14215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____14216 = this$;
if(and__3822__auto____14216)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____14216;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2322__auto____14217 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14218 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14217)]);
if(or__3824__auto____14218)
{return or__3824__auto____14218;
} else
{var or__3824__auto____14219 = (cljs.core._invoke["_"]);
if(or__3824__auto____14219)
{return or__3824__auto____14219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____14220 = this$;
if(and__3822__auto____14220)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____14220;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2322__auto____14221 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14222 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14221)]);
if(or__3824__auto____14222)
{return or__3824__auto____14222;
} else
{var or__3824__auto____14223 = (cljs.core._invoke["_"]);
if(or__3824__auto____14223)
{return or__3824__auto____14223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____14224 = this$;
if(and__3822__auto____14224)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____14224;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2322__auto____14225 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14226 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14225)]);
if(or__3824__auto____14226)
{return or__3824__auto____14226;
} else
{var or__3824__auto____14227 = (cljs.core._invoke["_"]);
if(or__3824__auto____14227)
{return or__3824__auto____14227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____14228 = this$;
if(and__3822__auto____14228)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____14228;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2322__auto____14229 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14230 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14229)]);
if(or__3824__auto____14230)
{return or__3824__auto____14230;
} else
{var or__3824__auto____14231 = (cljs.core._invoke["_"]);
if(or__3824__auto____14231)
{return or__3824__auto____14231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____14232 = this$;
if(and__3822__auto____14232)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____14232;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2322__auto____14233 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14234 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14233)]);
if(or__3824__auto____14234)
{return or__3824__auto____14234;
} else
{var or__3824__auto____14235 = (cljs.core._invoke["_"]);
if(or__3824__auto____14235)
{return or__3824__auto____14235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____14236 = this$;
if(and__3822__auto____14236)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____14236;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2322__auto____14237 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14238 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14237)]);
if(or__3824__auto____14238)
{return or__3824__auto____14238;
} else
{var or__3824__auto____14239 = (cljs.core._invoke["_"]);
if(or__3824__auto____14239)
{return or__3824__auto____14239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____14240 = this$;
if(and__3822__auto____14240)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____14240;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2322__auto____14241 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14242 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14241)]);
if(or__3824__auto____14242)
{return or__3824__auto____14242;
} else
{var or__3824__auto____14243 = (cljs.core._invoke["_"]);
if(or__3824__auto____14243)
{return or__3824__auto____14243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____14244 = this$;
if(and__3822__auto____14244)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____14244;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2322__auto____14245 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14246 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14245)]);
if(or__3824__auto____14246)
{return or__3824__auto____14246;
} else
{var or__3824__auto____14247 = (cljs.core._invoke["_"]);
if(or__3824__auto____14247)
{return or__3824__auto____14247;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____14248 = this$;
if(and__3822__auto____14248)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____14248;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2322__auto____14249 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14250 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14249)]);
if(or__3824__auto____14250)
{return or__3824__auto____14250;
} else
{var or__3824__auto____14251 = (cljs.core._invoke["_"]);
if(or__3824__auto____14251)
{return or__3824__auto____14251;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____14252 = this$;
if(and__3822__auto____14252)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____14252;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2322__auto____14253 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14254 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14253)]);
if(or__3824__auto____14254)
{return or__3824__auto____14254;
} else
{var or__3824__auto____14255 = (cljs.core._invoke["_"]);
if(or__3824__auto____14255)
{return or__3824__auto____14255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____14256 = this$;
if(and__3822__auto____14256)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____14256;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2322__auto____14257 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14258 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14257)]);
if(or__3824__auto____14258)
{return or__3824__auto____14258;
} else
{var or__3824__auto____14259 = (cljs.core._invoke["_"]);
if(or__3824__auto____14259)
{return or__3824__auto____14259;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____14260 = this$;
if(and__3822__auto____14260)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____14260;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2322__auto____14261 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14262 = (cljs.core._invoke[goog.typeOf(x__2322__auto____14261)]);
if(or__3824__auto____14262)
{return or__3824__auto____14262;
} else
{var or__3824__auto____14263 = (cljs.core._invoke["_"]);
if(or__3824__auto____14263)
{return or__3824__auto____14263;
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
if((function (){var and__3822__auto____14268 = coll;
if(and__3822__auto____14268)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____14268;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2322__auto____14269 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14270 = (cljs.core._count[goog.typeOf(x__2322__auto____14269)]);
if(or__3824__auto____14270)
{return or__3824__auto____14270;
} else
{var or__3824__auto____14271 = (cljs.core._count["_"]);
if(or__3824__auto____14271)
{return or__3824__auto____14271;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____14276 = coll;
if(and__3822__auto____14276)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____14276;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2322__auto____14277 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14278 = (cljs.core._empty[goog.typeOf(x__2322__auto____14277)]);
if(or__3824__auto____14278)
{return or__3824__auto____14278;
} else
{var or__3824__auto____14279 = (cljs.core._empty["_"]);
if(or__3824__auto____14279)
{return or__3824__auto____14279;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____14284 = coll;
if(and__3822__auto____14284)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____14284;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2322__auto____14285 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14286 = (cljs.core._conj[goog.typeOf(x__2322__auto____14285)]);
if(or__3824__auto____14286)
{return or__3824__auto____14286;
} else
{var or__3824__auto____14287 = (cljs.core._conj["_"]);
if(or__3824__auto____14287)
{return or__3824__auto____14287;
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
if((function (){var and__3822__auto____14296 = coll;
if(and__3822__auto____14296)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____14296;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2322__auto____14297 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14298 = (cljs.core._nth[goog.typeOf(x__2322__auto____14297)]);
if(or__3824__auto____14298)
{return or__3824__auto____14298;
} else
{var or__3824__auto____14299 = (cljs.core._nth["_"]);
if(or__3824__auto____14299)
{return or__3824__auto____14299;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____14300 = coll;
if(and__3822__auto____14300)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____14300;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2322__auto____14301 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14302 = (cljs.core._nth[goog.typeOf(x__2322__auto____14301)]);
if(or__3824__auto____14302)
{return or__3824__auto____14302;
} else
{var or__3824__auto____14303 = (cljs.core._nth["_"]);
if(or__3824__auto____14303)
{return or__3824__auto____14303;
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
if((function (){var and__3822__auto____14308 = coll;
if(and__3822__auto____14308)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____14308;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2322__auto____14309 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14310 = (cljs.core._first[goog.typeOf(x__2322__auto____14309)]);
if(or__3824__auto____14310)
{return or__3824__auto____14310;
} else
{var or__3824__auto____14311 = (cljs.core._first["_"]);
if(or__3824__auto____14311)
{return or__3824__auto____14311;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____14316 = coll;
if(and__3822__auto____14316)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____14316;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2322__auto____14317 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14318 = (cljs.core._rest[goog.typeOf(x__2322__auto____14317)]);
if(or__3824__auto____14318)
{return or__3824__auto____14318;
} else
{var or__3824__auto____14319 = (cljs.core._rest["_"]);
if(or__3824__auto____14319)
{return or__3824__auto____14319;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____14324 = coll;
if(and__3822__auto____14324)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____14324;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2322__auto____14325 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14326 = (cljs.core._next[goog.typeOf(x__2322__auto____14325)]);
if(or__3824__auto____14326)
{return or__3824__auto____14326;
} else
{var or__3824__auto____14327 = (cljs.core._next["_"]);
if(or__3824__auto____14327)
{return or__3824__auto____14327;
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
if((function (){var and__3822__auto____14336 = o;
if(and__3822__auto____14336)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____14336;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2322__auto____14337 = (((o == null))?null:o);
return (function (){var or__3824__auto____14338 = (cljs.core._lookup[goog.typeOf(x__2322__auto____14337)]);
if(or__3824__auto____14338)
{return or__3824__auto____14338;
} else
{var or__3824__auto____14339 = (cljs.core._lookup["_"]);
if(or__3824__auto____14339)
{return or__3824__auto____14339;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____14340 = o;
if(and__3822__auto____14340)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____14340;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2322__auto____14341 = (((o == null))?null:o);
return (function (){var or__3824__auto____14342 = (cljs.core._lookup[goog.typeOf(x__2322__auto____14341)]);
if(or__3824__auto____14342)
{return or__3824__auto____14342;
} else
{var or__3824__auto____14343 = (cljs.core._lookup["_"]);
if(or__3824__auto____14343)
{return or__3824__auto____14343;
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
if((function (){var and__3822__auto____14348 = coll;
if(and__3822__auto____14348)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____14348;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2322__auto____14349 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14350 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2322__auto____14349)]);
if(or__3824__auto____14350)
{return or__3824__auto____14350;
} else
{var or__3824__auto____14351 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____14351)
{return or__3824__auto____14351;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____14356 = coll;
if(and__3822__auto____14356)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____14356;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2322__auto____14357 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14358 = (cljs.core._assoc[goog.typeOf(x__2322__auto____14357)]);
if(or__3824__auto____14358)
{return or__3824__auto____14358;
} else
{var or__3824__auto____14359 = (cljs.core._assoc["_"]);
if(or__3824__auto____14359)
{return or__3824__auto____14359;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____14364 = coll;
if(and__3822__auto____14364)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____14364;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2322__auto____14365 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14366 = (cljs.core._dissoc[goog.typeOf(x__2322__auto____14365)]);
if(or__3824__auto____14366)
{return or__3824__auto____14366;
} else
{var or__3824__auto____14367 = (cljs.core._dissoc["_"]);
if(or__3824__auto____14367)
{return or__3824__auto____14367;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____14372 = coll;
if(and__3822__auto____14372)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____14372;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2322__auto____14373 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14374 = (cljs.core._key[goog.typeOf(x__2322__auto____14373)]);
if(or__3824__auto____14374)
{return or__3824__auto____14374;
} else
{var or__3824__auto____14375 = (cljs.core._key["_"]);
if(or__3824__auto____14375)
{return or__3824__auto____14375;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____14380 = coll;
if(and__3822__auto____14380)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____14380;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2322__auto____14381 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14382 = (cljs.core._val[goog.typeOf(x__2322__auto____14381)]);
if(or__3824__auto____14382)
{return or__3824__auto____14382;
} else
{var or__3824__auto____14383 = (cljs.core._val["_"]);
if(or__3824__auto____14383)
{return or__3824__auto____14383;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____14388 = coll;
if(and__3822__auto____14388)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____14388;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2322__auto____14389 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14390 = (cljs.core._disjoin[goog.typeOf(x__2322__auto____14389)]);
if(or__3824__auto____14390)
{return or__3824__auto____14390;
} else
{var or__3824__auto____14391 = (cljs.core._disjoin["_"]);
if(or__3824__auto____14391)
{return or__3824__auto____14391;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____14396 = coll;
if(and__3822__auto____14396)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____14396;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2322__auto____14397 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14398 = (cljs.core._peek[goog.typeOf(x__2322__auto____14397)]);
if(or__3824__auto____14398)
{return or__3824__auto____14398;
} else
{var or__3824__auto____14399 = (cljs.core._peek["_"]);
if(or__3824__auto____14399)
{return or__3824__auto____14399;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____14404 = coll;
if(and__3822__auto____14404)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____14404;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2322__auto____14405 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14406 = (cljs.core._pop[goog.typeOf(x__2322__auto____14405)]);
if(or__3824__auto____14406)
{return or__3824__auto____14406;
} else
{var or__3824__auto____14407 = (cljs.core._pop["_"]);
if(or__3824__auto____14407)
{return or__3824__auto____14407;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____14412 = coll;
if(and__3822__auto____14412)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____14412;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2322__auto____14413 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14414 = (cljs.core._assoc_n[goog.typeOf(x__2322__auto____14413)]);
if(or__3824__auto____14414)
{return or__3824__auto____14414;
} else
{var or__3824__auto____14415 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____14415)
{return or__3824__auto____14415;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____14420 = o;
if(and__3822__auto____14420)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____14420;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2322__auto____14421 = (((o == null))?null:o);
return (function (){var or__3824__auto____14422 = (cljs.core._deref[goog.typeOf(x__2322__auto____14421)]);
if(or__3824__auto____14422)
{return or__3824__auto____14422;
} else
{var or__3824__auto____14423 = (cljs.core._deref["_"]);
if(or__3824__auto____14423)
{return or__3824__auto____14423;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____14428 = o;
if(and__3822__auto____14428)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____14428;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2322__auto____14429 = (((o == null))?null:o);
return (function (){var or__3824__auto____14430 = (cljs.core._deref_with_timeout[goog.typeOf(x__2322__auto____14429)]);
if(or__3824__auto____14430)
{return or__3824__auto____14430;
} else
{var or__3824__auto____14431 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____14431)
{return or__3824__auto____14431;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____14436 = o;
if(and__3822__auto____14436)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____14436;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2322__auto____14437 = (((o == null))?null:o);
return (function (){var or__3824__auto____14438 = (cljs.core._meta[goog.typeOf(x__2322__auto____14437)]);
if(or__3824__auto____14438)
{return or__3824__auto____14438;
} else
{var or__3824__auto____14439 = (cljs.core._meta["_"]);
if(or__3824__auto____14439)
{return or__3824__auto____14439;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____14444 = o;
if(and__3822__auto____14444)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____14444;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2322__auto____14445 = (((o == null))?null:o);
return (function (){var or__3824__auto____14446 = (cljs.core._with_meta[goog.typeOf(x__2322__auto____14445)]);
if(or__3824__auto____14446)
{return or__3824__auto____14446;
} else
{var or__3824__auto____14447 = (cljs.core._with_meta["_"]);
if(or__3824__auto____14447)
{return or__3824__auto____14447;
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
if((function (){var and__3822__auto____14456 = coll;
if(and__3822__auto____14456)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____14456;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2322__auto____14457 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14458 = (cljs.core._reduce[goog.typeOf(x__2322__auto____14457)]);
if(or__3824__auto____14458)
{return or__3824__auto____14458;
} else
{var or__3824__auto____14459 = (cljs.core._reduce["_"]);
if(or__3824__auto____14459)
{return or__3824__auto____14459;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____14460 = coll;
if(and__3822__auto____14460)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____14460;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2322__auto____14461 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14462 = (cljs.core._reduce[goog.typeOf(x__2322__auto____14461)]);
if(or__3824__auto____14462)
{return or__3824__auto____14462;
} else
{var or__3824__auto____14463 = (cljs.core._reduce["_"]);
if(or__3824__auto____14463)
{return or__3824__auto____14463;
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
if((function (){var and__3822__auto____14468 = coll;
if(and__3822__auto____14468)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____14468;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2322__auto____14469 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14470 = (cljs.core._kv_reduce[goog.typeOf(x__2322__auto____14469)]);
if(or__3824__auto____14470)
{return or__3824__auto____14470;
} else
{var or__3824__auto____14471 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____14471)
{return or__3824__auto____14471;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____14476 = o;
if(and__3822__auto____14476)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____14476;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2322__auto____14477 = (((o == null))?null:o);
return (function (){var or__3824__auto____14478 = (cljs.core._equiv[goog.typeOf(x__2322__auto____14477)]);
if(or__3824__auto____14478)
{return or__3824__auto____14478;
} else
{var or__3824__auto____14479 = (cljs.core._equiv["_"]);
if(or__3824__auto____14479)
{return or__3824__auto____14479;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____14484 = o;
if(and__3822__auto____14484)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____14484;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2322__auto____14485 = (((o == null))?null:o);
return (function (){var or__3824__auto____14486 = (cljs.core._hash[goog.typeOf(x__2322__auto____14485)]);
if(or__3824__auto____14486)
{return or__3824__auto____14486;
} else
{var or__3824__auto____14487 = (cljs.core._hash["_"]);
if(or__3824__auto____14487)
{return or__3824__auto____14487;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____14492 = o;
if(and__3822__auto____14492)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____14492;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2322__auto____14493 = (((o == null))?null:o);
return (function (){var or__3824__auto____14494 = (cljs.core._seq[goog.typeOf(x__2322__auto____14493)]);
if(or__3824__auto____14494)
{return or__3824__auto____14494;
} else
{var or__3824__auto____14495 = (cljs.core._seq["_"]);
if(or__3824__auto____14495)
{return or__3824__auto____14495;
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
if((function (){var and__3822__auto____14500 = coll;
if(and__3822__auto____14500)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____14500;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2322__auto____14501 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14502 = (cljs.core._rseq[goog.typeOf(x__2322__auto____14501)]);
if(or__3824__auto____14502)
{return or__3824__auto____14502;
} else
{var or__3824__auto____14503 = (cljs.core._rseq["_"]);
if(or__3824__auto____14503)
{return or__3824__auto____14503;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____14508 = coll;
if(and__3822__auto____14508)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____14508;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2322__auto____14509 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14510 = (cljs.core._sorted_seq[goog.typeOf(x__2322__auto____14509)]);
if(or__3824__auto____14510)
{return or__3824__auto____14510;
} else
{var or__3824__auto____14511 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____14511)
{return or__3824__auto____14511;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____14516 = coll;
if(and__3822__auto____14516)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____14516;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2322__auto____14517 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14518 = (cljs.core._sorted_seq_from[goog.typeOf(x__2322__auto____14517)]);
if(or__3824__auto____14518)
{return or__3824__auto____14518;
} else
{var or__3824__auto____14519 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____14519)
{return or__3824__auto____14519;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____14524 = coll;
if(and__3822__auto____14524)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____14524;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2322__auto____14525 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14526 = (cljs.core._entry_key[goog.typeOf(x__2322__auto____14525)]);
if(or__3824__auto____14526)
{return or__3824__auto____14526;
} else
{var or__3824__auto____14527 = (cljs.core._entry_key["_"]);
if(or__3824__auto____14527)
{return or__3824__auto____14527;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____14532 = coll;
if(and__3822__auto____14532)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____14532;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2322__auto____14533 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14534 = (cljs.core._comparator[goog.typeOf(x__2322__auto____14533)]);
if(or__3824__auto____14534)
{return or__3824__auto____14534;
} else
{var or__3824__auto____14535 = (cljs.core._comparator["_"]);
if(or__3824__auto____14535)
{return or__3824__auto____14535;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____14540 = o;
if(and__3822__auto____14540)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____14540;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2322__auto____14541 = (((o == null))?null:o);
return (function (){var or__3824__auto____14542 = (cljs.core._pr_seq[goog.typeOf(x__2322__auto____14541)]);
if(or__3824__auto____14542)
{return or__3824__auto____14542;
} else
{var or__3824__auto____14543 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____14543)
{return or__3824__auto____14543;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____14548 = d;
if(and__3822__auto____14548)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____14548;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2322__auto____14549 = (((d == null))?null:d);
return (function (){var or__3824__auto____14550 = (cljs.core._realized_QMARK_[goog.typeOf(x__2322__auto____14549)]);
if(or__3824__auto____14550)
{return or__3824__auto____14550;
} else
{var or__3824__auto____14551 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____14551)
{return or__3824__auto____14551;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____14556 = this$;
if(and__3822__auto____14556)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____14556;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2322__auto____14557 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14558 = (cljs.core._notify_watches[goog.typeOf(x__2322__auto____14557)]);
if(or__3824__auto____14558)
{return or__3824__auto____14558;
} else
{var or__3824__auto____14559 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____14559)
{return or__3824__auto____14559;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____14564 = this$;
if(and__3822__auto____14564)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____14564;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2322__auto____14565 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14566 = (cljs.core._add_watch[goog.typeOf(x__2322__auto____14565)]);
if(or__3824__auto____14566)
{return or__3824__auto____14566;
} else
{var or__3824__auto____14567 = (cljs.core._add_watch["_"]);
if(or__3824__auto____14567)
{return or__3824__auto____14567;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____14572 = this$;
if(and__3822__auto____14572)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____14572;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2322__auto____14573 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14574 = (cljs.core._remove_watch[goog.typeOf(x__2322__auto____14573)]);
if(or__3824__auto____14574)
{return or__3824__auto____14574;
} else
{var or__3824__auto____14575 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____14575)
{return or__3824__auto____14575;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____14580 = coll;
if(and__3822__auto____14580)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____14580;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2322__auto____14581 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14582 = (cljs.core._as_transient[goog.typeOf(x__2322__auto____14581)]);
if(or__3824__auto____14582)
{return or__3824__auto____14582;
} else
{var or__3824__auto____14583 = (cljs.core._as_transient["_"]);
if(or__3824__auto____14583)
{return or__3824__auto____14583;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____14588 = tcoll;
if(and__3822__auto____14588)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____14588;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2322__auto____14589 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14590 = (cljs.core._conj_BANG_[goog.typeOf(x__2322__auto____14589)]);
if(or__3824__auto____14590)
{return or__3824__auto____14590;
} else
{var or__3824__auto____14591 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____14591)
{return or__3824__auto____14591;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____14596 = tcoll;
if(and__3822__auto____14596)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____14596;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2322__auto____14597 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14598 = (cljs.core._persistent_BANG_[goog.typeOf(x__2322__auto____14597)]);
if(or__3824__auto____14598)
{return or__3824__auto____14598;
} else
{var or__3824__auto____14599 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____14599)
{return or__3824__auto____14599;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____14604 = tcoll;
if(and__3822__auto____14604)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____14604;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2322__auto____14605 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14606 = (cljs.core._assoc_BANG_[goog.typeOf(x__2322__auto____14605)]);
if(or__3824__auto____14606)
{return or__3824__auto____14606;
} else
{var or__3824__auto____14607 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____14607)
{return or__3824__auto____14607;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____14612 = tcoll;
if(and__3822__auto____14612)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____14612;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2322__auto____14613 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14614 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2322__auto____14613)]);
if(or__3824__auto____14614)
{return or__3824__auto____14614;
} else
{var or__3824__auto____14615 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____14615)
{return or__3824__auto____14615;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____14620 = tcoll;
if(and__3822__auto____14620)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____14620;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2322__auto____14621 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14622 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2322__auto____14621)]);
if(or__3824__auto____14622)
{return or__3824__auto____14622;
} else
{var or__3824__auto____14623 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____14623)
{return or__3824__auto____14623;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____14628 = tcoll;
if(and__3822__auto____14628)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____14628;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2322__auto____14629 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14630 = (cljs.core._pop_BANG_[goog.typeOf(x__2322__auto____14629)]);
if(or__3824__auto____14630)
{return or__3824__auto____14630;
} else
{var or__3824__auto____14631 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____14631)
{return or__3824__auto____14631;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____14636 = tcoll;
if(and__3822__auto____14636)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____14636;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2322__auto____14637 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14638 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2322__auto____14637)]);
if(or__3824__auto____14638)
{return or__3824__auto____14638;
} else
{var or__3824__auto____14639 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____14639)
{return or__3824__auto____14639;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____14644 = x;
if(and__3822__auto____14644)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____14644;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2322__auto____14645 = (((x == null))?null:x);
return (function (){var or__3824__auto____14646 = (cljs.core._compare[goog.typeOf(x__2322__auto____14645)]);
if(or__3824__auto____14646)
{return or__3824__auto____14646;
} else
{var or__3824__auto____14647 = (cljs.core._compare["_"]);
if(or__3824__auto____14647)
{return or__3824__auto____14647;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____14652 = coll;
if(and__3822__auto____14652)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____14652;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2322__auto____14653 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14654 = (cljs.core._drop_first[goog.typeOf(x__2322__auto____14653)]);
if(or__3824__auto____14654)
{return or__3824__auto____14654;
} else
{var or__3824__auto____14655 = (cljs.core._drop_first["_"]);
if(or__3824__auto____14655)
{return or__3824__auto____14655;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____14660 = coll;
if(and__3822__auto____14660)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____14660;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2322__auto____14661 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14662 = (cljs.core._chunked_first[goog.typeOf(x__2322__auto____14661)]);
if(or__3824__auto____14662)
{return or__3824__auto____14662;
} else
{var or__3824__auto____14663 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____14663)
{return or__3824__auto____14663;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____14668 = coll;
if(and__3822__auto____14668)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____14668;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2322__auto____14669 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14670 = (cljs.core._chunked_rest[goog.typeOf(x__2322__auto____14669)]);
if(or__3824__auto____14670)
{return or__3824__auto____14670;
} else
{var or__3824__auto____14671 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____14671)
{return or__3824__auto____14671;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____14676 = coll;
if(and__3822__auto____14676)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____14676;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2322__auto____14677 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14678 = (cljs.core._chunked_next[goog.typeOf(x__2322__auto____14677)]);
if(or__3824__auto____14678)
{return or__3824__auto____14678;
} else
{var or__3824__auto____14679 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____14679)
{return or__3824__auto____14679;
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
var or__3824__auto____14681 = (x === y);
if(or__3824__auto____14681)
{return or__3824__auto____14681;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__14682__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__14683 = y;
var G__14684 = cljs.core.first.call(null,more);
var G__14685 = cljs.core.next.call(null,more);
x = G__14683;
y = G__14684;
more = G__14685;
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
var G__14682 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14682__delegate.call(this, x, y, more);
};
G__14682.cljs$lang$maxFixedArity = 2;
G__14682.cljs$lang$applyTo = (function (arglist__14686){
var x = cljs.core.first(arglist__14686);
var y = cljs.core.first(cljs.core.next(arglist__14686));
var more = cljs.core.rest(cljs.core.next(arglist__14686));
return G__14682__delegate(x, y, more);
});
G__14682.cljs$lang$arity$variadic = G__14682__delegate;
return G__14682;
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
var G__14687 = null;
var G__14687__2 = (function (o,k){
return null;
});
var G__14687__3 = (function (o,k,not_found){
return not_found;
});
G__14687 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__14687__2.call(this,o,k);
case 3:
return G__14687__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14687;
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
var G__14688 = null;
var G__14688__2 = (function (_,f){
return f.call(null);
});
var G__14688__3 = (function (_,f,start){
return start;
});
G__14688 = function(_,f,start){
switch(arguments.length){
case 2:
return G__14688__2.call(this,_,f);
case 3:
return G__14688__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14688;
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
var G__14689 = null;
var G__14689__2 = (function (_,n){
return null;
});
var G__14689__3 = (function (_,n,not_found){
return not_found;
});
G__14689 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__14689__2.call(this,_,n);
case 3:
return G__14689__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14689;
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
var and__3822__auto____14690 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____14690)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____14690;
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
var cnt__14703 = cljs.core._count.call(null,cicoll);
if((cnt__14703 === 0))
{return f.call(null);
} else
{var val__14704 = cljs.core._nth.call(null,cicoll,0);
var n__14705 = 1;
while(true){
if((n__14705 < cnt__14703))
{var nval__14706 = f.call(null,val__14704,cljs.core._nth.call(null,cicoll,n__14705));
if(cljs.core.reduced_QMARK_.call(null,nval__14706))
{return cljs.core.deref.call(null,nval__14706);
} else
{{
var G__14715 = nval__14706;
var G__14716 = (n__14705 + 1);
val__14704 = G__14715;
n__14705 = G__14716;
continue;
}
}
} else
{return val__14704;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__14707 = cljs.core._count.call(null,cicoll);
var val__14708 = val;
var n__14709 = 0;
while(true){
if((n__14709 < cnt__14707))
{var nval__14710 = f.call(null,val__14708,cljs.core._nth.call(null,cicoll,n__14709));
if(cljs.core.reduced_QMARK_.call(null,nval__14710))
{return cljs.core.deref.call(null,nval__14710);
} else
{{
var G__14717 = nval__14710;
var G__14718 = (n__14709 + 1);
val__14708 = G__14717;
n__14709 = G__14718;
continue;
}
}
} else
{return val__14708;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__14711 = cljs.core._count.call(null,cicoll);
var val__14712 = val;
var n__14713 = idx;
while(true){
if((n__14713 < cnt__14711))
{var nval__14714 = f.call(null,val__14712,cljs.core._nth.call(null,cicoll,n__14713));
if(cljs.core.reduced_QMARK_.call(null,nval__14714))
{return cljs.core.deref.call(null,nval__14714);
} else
{{
var G__14719 = nval__14714;
var G__14720 = (n__14713 + 1);
val__14712 = G__14719;
n__14713 = G__14720;
continue;
}
}
} else
{return val__14712;
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
var cnt__14733 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__14734 = (arr[0]);
var n__14735 = 1;
while(true){
if((n__14735 < cnt__14733))
{var nval__14736 = f.call(null,val__14734,(arr[n__14735]));
if(cljs.core.reduced_QMARK_.call(null,nval__14736))
{return cljs.core.deref.call(null,nval__14736);
} else
{{
var G__14745 = nval__14736;
var G__14746 = (n__14735 + 1);
val__14734 = G__14745;
n__14735 = G__14746;
continue;
}
}
} else
{return val__14734;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__14737 = arr.length;
var val__14738 = val;
var n__14739 = 0;
while(true){
if((n__14739 < cnt__14737))
{var nval__14740 = f.call(null,val__14738,(arr[n__14739]));
if(cljs.core.reduced_QMARK_.call(null,nval__14740))
{return cljs.core.deref.call(null,nval__14740);
} else
{{
var G__14747 = nval__14740;
var G__14748 = (n__14739 + 1);
val__14738 = G__14747;
n__14739 = G__14748;
continue;
}
}
} else
{return val__14738;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__14741 = arr.length;
var val__14742 = val;
var n__14743 = idx;
while(true){
if((n__14743 < cnt__14741))
{var nval__14744 = f.call(null,val__14742,(arr[n__14743]));
if(cljs.core.reduced_QMARK_.call(null,nval__14744))
{return cljs.core.deref.call(null,nval__14744);
} else
{{
var G__14749 = nval__14744;
var G__14750 = (n__14743 + 1);
val__14742 = G__14749;
n__14743 = G__14750;
continue;
}
}
} else
{return val__14742;
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
var this__14751 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__14752 = this;
if(((this__14752.i + 1) < this__14752.a.length))
{return (new cljs.core.IndexedSeq(this__14752.a,(this__14752.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14753 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14754 = this;
var c__14755 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__14755 > 0))
{return (new cljs.core.RSeq(coll,(c__14755 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__14756 = this;
var this__14757 = this;
return cljs.core.pr_str.call(null,this__14757);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__14758 = this;
if(cljs.core.counted_QMARK_.call(null,this__14758.a))
{return cljs.core.ci_reduce.call(null,this__14758.a,f,(this__14758.a[this__14758.i]),(this__14758.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__14758.a[this__14758.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__14759 = this;
if(cljs.core.counted_QMARK_.call(null,this__14759.a))
{return cljs.core.ci_reduce.call(null,this__14759.a,f,start,this__14759.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14760 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__14761 = this;
return (this__14761.a.length - this__14761.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__14762 = this;
return (this__14762.a[this__14762.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__14763 = this;
if(((this__14763.i + 1) < this__14763.a.length))
{return (new cljs.core.IndexedSeq(this__14763.a,(this__14763.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__14765 = this;
var i__14766 = (n + this__14765.i);
if((i__14766 < this__14765.a.length))
{return (this__14765.a[i__14766]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__14767 = this;
var i__14768 = (n + this__14767.i);
if((i__14768 < this__14767.a.length))
{return (this__14767.a[i__14768]);
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
var G__14769 = null;
var G__14769__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__14769__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__14769 = function(array,f,start){
switch(arguments.length){
case 2:
return G__14769__2.call(this,array,f);
case 3:
return G__14769__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14769;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__14770 = null;
var G__14770__2 = (function (array,k){
return (array[k]);
});
var G__14770__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__14770 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__14770__2.call(this,array,k);
case 3:
return G__14770__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14770;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__14771 = null;
var G__14771__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__14771__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__14771 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__14771__2.call(this,array,n);
case 3:
return G__14771__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14771;
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
var this__14772 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14773 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__14774 = this;
var this__14775 = this;
return cljs.core.pr_str.call(null,this__14775);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14776 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14777 = this;
return (this__14777.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14778 = this;
return cljs.core._nth.call(null,this__14778.ci,this__14778.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14779 = this;
if((this__14779.i > 0))
{return (new cljs.core.RSeq(this__14779.ci,(this__14779.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14780 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__14781 = this;
return (new cljs.core.RSeq(this__14781.ci,this__14781.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14782 = this;
return this__14782.meta;
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
{if((function (){var G__14786__14787 = coll;
if(G__14786__14787)
{if((function (){var or__3824__auto____14788 = (G__14786__14787.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____14788)
{return or__3824__auto____14788;
} else
{return G__14786__14787.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__14786__14787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14786__14787);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14786__14787);
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
{if((function (){var G__14793__14794 = coll;
if(G__14793__14794)
{if((function (){var or__3824__auto____14795 = (G__14793__14794.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14795)
{return or__3824__auto____14795;
} else
{return G__14793__14794.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14793__14794.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14793__14794);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14793__14794);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__14796 = cljs.core.seq.call(null,coll);
if((s__14796 == null))
{return null;
} else
{return cljs.core._first.call(null,s__14796);
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
{if((function (){var G__14801__14802 = coll;
if(G__14801__14802)
{if((function (){var or__3824__auto____14803 = (G__14801__14802.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14803)
{return or__3824__auto____14803;
} else
{return G__14801__14802.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14801__14802.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14801__14802);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14801__14802);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__14804 = cljs.core.seq.call(null,coll);
if(!((s__14804 == null)))
{return cljs.core._rest.call(null,s__14804);
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
{if((function (){var G__14808__14809 = coll;
if(G__14808__14809)
{if((function (){var or__3824__auto____14810 = (G__14808__14809.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____14810)
{return or__3824__auto____14810;
} else
{return G__14808__14809.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__14808__14809.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14808__14809);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14808__14809);
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
var sn__14812 = cljs.core.next.call(null,s);
if(!((sn__14812 == null)))
{{
var G__14813 = sn__14812;
s = G__14813;
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
var G__14814__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__14815 = conj.call(null,coll,x);
var G__14816 = cljs.core.first.call(null,xs);
var G__14817 = cljs.core.next.call(null,xs);
coll = G__14815;
x = G__14816;
xs = G__14817;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__14814 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14814__delegate.call(this, coll, x, xs);
};
G__14814.cljs$lang$maxFixedArity = 2;
G__14814.cljs$lang$applyTo = (function (arglist__14818){
var coll = cljs.core.first(arglist__14818);
var x = cljs.core.first(cljs.core.next(arglist__14818));
var xs = cljs.core.rest(cljs.core.next(arglist__14818));
return G__14814__delegate(coll, x, xs);
});
G__14814.cljs$lang$arity$variadic = G__14814__delegate;
return G__14814;
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
var s__14821 = cljs.core.seq.call(null,coll);
var acc__14822 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__14821))
{return (acc__14822 + cljs.core._count.call(null,s__14821));
} else
{{
var G__14823 = cljs.core.next.call(null,s__14821);
var G__14824 = (acc__14822 + 1);
s__14821 = G__14823;
acc__14822 = G__14824;
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
{if((function (){var G__14831__14832 = coll;
if(G__14831__14832)
{if((function (){var or__3824__auto____14833 = (G__14831__14832.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14833)
{return or__3824__auto____14833;
} else
{return G__14831__14832.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14831__14832.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14831__14832);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14831__14832);
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
{if((function (){var G__14834__14835 = coll;
if(G__14834__14835)
{if((function (){var or__3824__auto____14836 = (G__14834__14835.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14836)
{return or__3824__auto____14836;
} else
{return G__14834__14835.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14834__14835.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14834__14835);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14834__14835);
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
var G__14839__delegate = function (coll,k,v,kvs){
while(true){
var ret__14838 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__14840 = ret__14838;
var G__14841 = cljs.core.first.call(null,kvs);
var G__14842 = cljs.core.second.call(null,kvs);
var G__14843 = cljs.core.nnext.call(null,kvs);
coll = G__14840;
k = G__14841;
v = G__14842;
kvs = G__14843;
continue;
}
} else
{return ret__14838;
}
break;
}
};
var G__14839 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14839__delegate.call(this, coll, k, v, kvs);
};
G__14839.cljs$lang$maxFixedArity = 3;
G__14839.cljs$lang$applyTo = (function (arglist__14844){
var coll = cljs.core.first(arglist__14844);
var k = cljs.core.first(cljs.core.next(arglist__14844));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14844)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14844)));
return G__14839__delegate(coll, k, v, kvs);
});
G__14839.cljs$lang$arity$variadic = G__14839__delegate;
return G__14839;
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
var G__14847__delegate = function (coll,k,ks){
while(true){
var ret__14846 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__14848 = ret__14846;
var G__14849 = cljs.core.first.call(null,ks);
var G__14850 = cljs.core.next.call(null,ks);
coll = G__14848;
k = G__14849;
ks = G__14850;
continue;
}
} else
{return ret__14846;
}
break;
}
};
var G__14847 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14847__delegate.call(this, coll, k, ks);
};
G__14847.cljs$lang$maxFixedArity = 2;
G__14847.cljs$lang$applyTo = (function (arglist__14851){
var coll = cljs.core.first(arglist__14851);
var k = cljs.core.first(cljs.core.next(arglist__14851));
var ks = cljs.core.rest(cljs.core.next(arglist__14851));
return G__14847__delegate(coll, k, ks);
});
G__14847.cljs$lang$arity$variadic = G__14847__delegate;
return G__14847;
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
if((function (){var G__14855__14856 = o;
if(G__14855__14856)
{if((function (){var or__3824__auto____14857 = (G__14855__14856.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____14857)
{return or__3824__auto____14857;
} else
{return G__14855__14856.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14855__14856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14855__14856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14855__14856);
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
var G__14860__delegate = function (coll,k,ks){
while(true){
var ret__14859 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__14861 = ret__14859;
var G__14862 = cljs.core.first.call(null,ks);
var G__14863 = cljs.core.next.call(null,ks);
coll = G__14861;
k = G__14862;
ks = G__14863;
continue;
}
} else
{return ret__14859;
}
break;
}
};
var G__14860 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14860__delegate.call(this, coll, k, ks);
};
G__14860.cljs$lang$maxFixedArity = 2;
G__14860.cljs$lang$applyTo = (function (arglist__14864){
var coll = cljs.core.first(arglist__14864);
var k = cljs.core.first(cljs.core.next(arglist__14864));
var ks = cljs.core.rest(cljs.core.next(arglist__14864));
return G__14860__delegate(coll, k, ks);
});
G__14860.cljs$lang$arity$variadic = G__14860__delegate;
return G__14860;
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
var h__14866 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__14866);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__14866;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__14868 = (cljs.core.string_hash_cache[k]);
if(!((h__14868 == null)))
{return h__14868;
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
if((function (){var and__3822__auto____14870 = goog.isString(o);
if(and__3822__auto____14870)
{return check_cache;
} else
{return and__3822__auto____14870;
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
{var G__14874__14875 = x;
if(G__14874__14875)
{if((function (){var or__3824__auto____14876 = (G__14874__14875.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____14876)
{return or__3824__auto____14876;
} else
{return G__14874__14875.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__14874__14875.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__14874__14875);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__14874__14875);
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
{var G__14880__14881 = x;
if(G__14880__14881)
{if((function (){var or__3824__auto____14882 = (G__14880__14881.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____14882)
{return or__3824__auto____14882;
} else
{return G__14880__14881.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__14880__14881.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__14880__14881);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__14880__14881);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__14886__14887 = x;
if(G__14886__14887)
{if((function (){var or__3824__auto____14888 = (G__14886__14887.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____14888)
{return or__3824__auto____14888;
} else
{return G__14886__14887.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__14886__14887.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__14886__14887);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__14886__14887);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__14892__14893 = x;
if(G__14892__14893)
{if((function (){var or__3824__auto____14894 = (G__14892__14893.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____14894)
{return or__3824__auto____14894;
} else
{return G__14892__14893.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__14892__14893.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__14892__14893);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__14892__14893);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__14898__14899 = x;
if(G__14898__14899)
{if((function (){var or__3824__auto____14900 = (G__14898__14899.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____14900)
{return or__3824__auto____14900;
} else
{return G__14898__14899.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__14898__14899.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14898__14899);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14898__14899);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__14904__14905 = x;
if(G__14904__14905)
{if((function (){var or__3824__auto____14906 = (G__14904__14905.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14906)
{return or__3824__auto____14906;
} else
{return G__14904__14905.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14904__14905.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14904__14905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14904__14905);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__14910__14911 = x;
if(G__14910__14911)
{if((function (){var or__3824__auto____14912 = (G__14910__14911.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____14912)
{return or__3824__auto____14912;
} else
{return G__14910__14911.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__14910__14911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__14910__14911);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__14910__14911);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__14916__14917 = x;
if(G__14916__14917)
{if((function (){var or__3824__auto____14918 = (G__14916__14917.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____14918)
{return or__3824__auto____14918;
} else
{return G__14916__14917.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__14916__14917.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__14916__14917);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__14916__14917);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__14922__14923 = x;
if(G__14922__14923)
{if((function (){var or__3824__auto____14924 = (G__14922__14923.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____14924)
{return or__3824__auto____14924;
} else
{return G__14922__14923.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__14922__14923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__14922__14923);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__14922__14923);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__14928__14929 = x;
if(G__14928__14929)
{if(cljs.core.truth_((function (){var or__3824__auto____14930 = null;
if(cljs.core.truth_(or__3824__auto____14930))
{return or__3824__auto____14930;
} else
{return G__14928__14929.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__14928__14929.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__14928__14929);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__14928__14929);
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
var G__14931__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__14931 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14931__delegate.call(this, keyvals);
};
G__14931.cljs$lang$maxFixedArity = 0;
G__14931.cljs$lang$applyTo = (function (arglist__14932){
var keyvals = cljs.core.seq(arglist__14932);;
return G__14931__delegate(keyvals);
});
G__14931.cljs$lang$arity$variadic = G__14931__delegate;
return G__14931;
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
var keys__14934 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__14934.push(key);
}));
return keys__14934;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__14938 = i;
var j__14939 = j;
var len__14940 = len;
while(true){
if((len__14940 === 0))
{return to;
} else
{(to[j__14939] = (from[i__14938]));
{
var G__14941 = (i__14938 + 1);
var G__14942 = (j__14939 + 1);
var G__14943 = (len__14940 - 1);
i__14938 = G__14941;
j__14939 = G__14942;
len__14940 = G__14943;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__14947 = (i + (len - 1));
var j__14948 = (j + (len - 1));
var len__14949 = len;
while(true){
if((len__14949 === 0))
{return to;
} else
{(to[j__14948] = (from[i__14947]));
{
var G__14950 = (i__14947 - 1);
var G__14951 = (j__14948 - 1);
var G__14952 = (len__14949 - 1);
i__14947 = G__14950;
j__14948 = G__14951;
len__14949 = G__14952;
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
{var G__14956__14957 = s;
if(G__14956__14957)
{if((function (){var or__3824__auto____14958 = (G__14956__14957.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14958)
{return or__3824__auto____14958;
} else
{return G__14956__14957.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14956__14957.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14956__14957);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14956__14957);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__14962__14963 = s;
if(G__14962__14963)
{if((function (){var or__3824__auto____14964 = (G__14962__14963.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____14964)
{return or__3824__auto____14964;
} else
{return G__14962__14963.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__14962__14963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__14962__14963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__14962__14963);
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
var and__3822__auto____14967 = goog.isString(x);
if(and__3822__auto____14967)
{return !((function (){var or__3824__auto____14968 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____14968)
{return or__3824__auto____14968;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____14967;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____14970 = goog.isString(x);
if(and__3822__auto____14970)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____14970;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____14972 = goog.isString(x);
if(and__3822__auto____14972)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____14972;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____14977 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____14977)
{return or__3824__auto____14977;
} else
{var G__14978__14979 = f;
if(G__14978__14979)
{if((function (){var or__3824__auto____14980 = (G__14978__14979.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____14980)
{return or__3824__auto____14980;
} else
{return G__14978__14979.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__14978__14979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__14978__14979);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__14978__14979);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____14982 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____14982)
{return (n == n.toFixed());
} else
{return and__3822__auto____14982;
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
if(cljs.core.truth_((function (){var and__3822__auto____14985 = coll;
if(cljs.core.truth_(and__3822__auto____14985))
{var and__3822__auto____14986 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____14986)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____14986;
}
} else
{return and__3822__auto____14985;
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
var G__14995__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__14991 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__14992 = more;
while(true){
var x__14993 = cljs.core.first.call(null,xs__14992);
var etc__14994 = cljs.core.next.call(null,xs__14992);
if(cljs.core.truth_(xs__14992))
{if(cljs.core.contains_QMARK_.call(null,s__14991,x__14993))
{return false;
} else
{{
var G__14996 = cljs.core.conj.call(null,s__14991,x__14993);
var G__14997 = etc__14994;
s__14991 = G__14996;
xs__14992 = G__14997;
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
var G__14995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14995__delegate.call(this, x, y, more);
};
G__14995.cljs$lang$maxFixedArity = 2;
G__14995.cljs$lang$applyTo = (function (arglist__14998){
var x = cljs.core.first(arglist__14998);
var y = cljs.core.first(cljs.core.next(arglist__14998));
var more = cljs.core.rest(cljs.core.next(arglist__14998));
return G__14995__delegate(x, y, more);
});
G__14995.cljs$lang$arity$variadic = G__14995__delegate;
return G__14995;
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
{if((function (){var G__15002__15003 = x;
if(G__15002__15003)
{if(cljs.core.truth_((function (){var or__3824__auto____15004 = null;
if(cljs.core.truth_(or__3824__auto____15004))
{return or__3824__auto____15004;
} else
{return G__15002__15003.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__15002__15003.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15002__15003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15002__15003);
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
var xl__15009 = cljs.core.count.call(null,xs);
var yl__15010 = cljs.core.count.call(null,ys);
if((xl__15009 < yl__15010))
{return -1;
} else
{if((xl__15009 > yl__15010))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__15009,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__15011 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____15012 = (d__15011 === 0);
if(and__3822__auto____15012)
{return ((n + 1) < len);
} else
{return and__3822__auto____15012;
}
})())
{{
var G__15013 = xs;
var G__15014 = ys;
var G__15015 = len;
var G__15016 = (n + 1);
xs = G__15013;
ys = G__15014;
len = G__15015;
n = G__15016;
continue;
}
} else
{return d__15011;
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
var r__15018 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__15018))
{return r__15018;
} else
{if(cljs.core.truth_(r__15018))
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
{var a__15020 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__15020,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__15020);
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
var temp__3971__auto____15026 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____15026)
{var s__15027 = temp__3971__auto____15026;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__15027),cljs.core.next.call(null,s__15027));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__15028 = val;
var coll__15029 = cljs.core.seq.call(null,coll);
while(true){
if(coll__15029)
{var nval__15030 = f.call(null,val__15028,cljs.core.first.call(null,coll__15029));
if(cljs.core.reduced_QMARK_.call(null,nval__15030))
{return cljs.core.deref.call(null,nval__15030);
} else
{{
var G__15031 = nval__15030;
var G__15032 = cljs.core.next.call(null,coll__15029);
val__15028 = G__15031;
coll__15029 = G__15032;
continue;
}
}
} else
{return val__15028;
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
var a__15034 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__15034);
return cljs.core.vec.call(null,a__15034);
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
if((function (){var G__15041__15042 = coll;
if(G__15041__15042)
{if((function (){var or__3824__auto____15043 = (G__15041__15042.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15043)
{return or__3824__auto____15043;
} else
{return G__15041__15042.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15041__15042.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15041__15042);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15041__15042);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__15044__15045 = coll;
if(G__15044__15045)
{if((function (){var or__3824__auto____15046 = (G__15044__15045.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15046)
{return or__3824__auto____15046;
} else
{return G__15044__15045.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15044__15045.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15044__15045);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15044__15045);
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
var this__15047 = this;
return this__15047.val;
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
var G__15048__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__15048 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15048__delegate.call(this, x, y, more);
};
G__15048.cljs$lang$maxFixedArity = 2;
G__15048.cljs$lang$applyTo = (function (arglist__15049){
var x = cljs.core.first(arglist__15049);
var y = cljs.core.first(cljs.core.next(arglist__15049));
var more = cljs.core.rest(cljs.core.next(arglist__15049));
return G__15048__delegate(x, y, more);
});
G__15048.cljs$lang$arity$variadic = G__15048__delegate;
return G__15048;
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
var G__15050__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__15050 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15050__delegate.call(this, x, y, more);
};
G__15050.cljs$lang$maxFixedArity = 2;
G__15050.cljs$lang$applyTo = (function (arglist__15051){
var x = cljs.core.first(arglist__15051);
var y = cljs.core.first(cljs.core.next(arglist__15051));
var more = cljs.core.rest(cljs.core.next(arglist__15051));
return G__15050__delegate(x, y, more);
});
G__15050.cljs$lang$arity$variadic = G__15050__delegate;
return G__15050;
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
var G__15052__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__15052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15052__delegate.call(this, x, y, more);
};
G__15052.cljs$lang$maxFixedArity = 2;
G__15052.cljs$lang$applyTo = (function (arglist__15053){
var x = cljs.core.first(arglist__15053);
var y = cljs.core.first(cljs.core.next(arglist__15053));
var more = cljs.core.rest(cljs.core.next(arglist__15053));
return G__15052__delegate(x, y, more);
});
G__15052.cljs$lang$arity$variadic = G__15052__delegate;
return G__15052;
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
var G__15054__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__15054 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15054__delegate.call(this, x, y, more);
};
G__15054.cljs$lang$maxFixedArity = 2;
G__15054.cljs$lang$applyTo = (function (arglist__15055){
var x = cljs.core.first(arglist__15055);
var y = cljs.core.first(cljs.core.next(arglist__15055));
var more = cljs.core.rest(cljs.core.next(arglist__15055));
return G__15054__delegate(x, y, more);
});
G__15054.cljs$lang$arity$variadic = G__15054__delegate;
return G__15054;
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
var G__15056__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__15057 = y;
var G__15058 = cljs.core.first.call(null,more);
var G__15059 = cljs.core.next.call(null,more);
x = G__15057;
y = G__15058;
more = G__15059;
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
var G__15056 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15056__delegate.call(this, x, y, more);
};
G__15056.cljs$lang$maxFixedArity = 2;
G__15056.cljs$lang$applyTo = (function (arglist__15060){
var x = cljs.core.first(arglist__15060);
var y = cljs.core.first(cljs.core.next(arglist__15060));
var more = cljs.core.rest(cljs.core.next(arglist__15060));
return G__15056__delegate(x, y, more);
});
G__15056.cljs$lang$arity$variadic = G__15056__delegate;
return G__15056;
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
var G__15061__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__15062 = y;
var G__15063 = cljs.core.first.call(null,more);
var G__15064 = cljs.core.next.call(null,more);
x = G__15062;
y = G__15063;
more = G__15064;
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
var G__15061 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15061__delegate.call(this, x, y, more);
};
G__15061.cljs$lang$maxFixedArity = 2;
G__15061.cljs$lang$applyTo = (function (arglist__15065){
var x = cljs.core.first(arglist__15065);
var y = cljs.core.first(cljs.core.next(arglist__15065));
var more = cljs.core.rest(cljs.core.next(arglist__15065));
return G__15061__delegate(x, y, more);
});
G__15061.cljs$lang$arity$variadic = G__15061__delegate;
return G__15061;
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
var G__15066__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__15067 = y;
var G__15068 = cljs.core.first.call(null,more);
var G__15069 = cljs.core.next.call(null,more);
x = G__15067;
y = G__15068;
more = G__15069;
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
var G__15066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15066__delegate.call(this, x, y, more);
};
G__15066.cljs$lang$maxFixedArity = 2;
G__15066.cljs$lang$applyTo = (function (arglist__15070){
var x = cljs.core.first(arglist__15070);
var y = cljs.core.first(cljs.core.next(arglist__15070));
var more = cljs.core.rest(cljs.core.next(arglist__15070));
return G__15066__delegate(x, y, more);
});
G__15066.cljs$lang$arity$variadic = G__15066__delegate;
return G__15066;
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
var G__15071__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__15072 = y;
var G__15073 = cljs.core.first.call(null,more);
var G__15074 = cljs.core.next.call(null,more);
x = G__15072;
y = G__15073;
more = G__15074;
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
var G__15071 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15071__delegate.call(this, x, y, more);
};
G__15071.cljs$lang$maxFixedArity = 2;
G__15071.cljs$lang$applyTo = (function (arglist__15075){
var x = cljs.core.first(arglist__15075);
var y = cljs.core.first(cljs.core.next(arglist__15075));
var more = cljs.core.rest(cljs.core.next(arglist__15075));
return G__15071__delegate(x, y, more);
});
G__15071.cljs$lang$arity$variadic = G__15071__delegate;
return G__15071;
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
var G__15076__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__15076 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15076__delegate.call(this, x, y, more);
};
G__15076.cljs$lang$maxFixedArity = 2;
G__15076.cljs$lang$applyTo = (function (arglist__15077){
var x = cljs.core.first(arglist__15077);
var y = cljs.core.first(cljs.core.next(arglist__15077));
var more = cljs.core.rest(cljs.core.next(arglist__15077));
return G__15076__delegate(x, y, more);
});
G__15076.cljs$lang$arity$variadic = G__15076__delegate;
return G__15076;
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
var G__15078__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__15078 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15078__delegate.call(this, x, y, more);
};
G__15078.cljs$lang$maxFixedArity = 2;
G__15078.cljs$lang$applyTo = (function (arglist__15079){
var x = cljs.core.first(arglist__15079);
var y = cljs.core.first(cljs.core.next(arglist__15079));
var more = cljs.core.rest(cljs.core.next(arglist__15079));
return G__15078__delegate(x, y, more);
});
G__15078.cljs$lang$arity$variadic = G__15078__delegate;
return G__15078;
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
var rem__15081 = (n % d);
return cljs.core.fix.call(null,((n - rem__15081) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__15083 = cljs.core.quot.call(null,n,d);
return (n - (d * q__15083));
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
var v__15086 = (v - ((v >> 1) & 1431655765));
var v__15087 = ((v__15086 & 858993459) + ((v__15086 >> 2) & 858993459));
return ((((v__15087 + (v__15087 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__15088__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__15089 = y;
var G__15090 = cljs.core.first.call(null,more);
var G__15091 = cljs.core.next.call(null,more);
x = G__15089;
y = G__15090;
more = G__15091;
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
var G__15088 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15088__delegate.call(this, x, y, more);
};
G__15088.cljs$lang$maxFixedArity = 2;
G__15088.cljs$lang$applyTo = (function (arglist__15092){
var x = cljs.core.first(arglist__15092);
var y = cljs.core.first(cljs.core.next(arglist__15092));
var more = cljs.core.rest(cljs.core.next(arglist__15092));
return G__15088__delegate(x, y, more);
});
G__15088.cljs$lang$arity$variadic = G__15088__delegate;
return G__15088;
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
var n__15096 = n;
var xs__15097 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15098 = xs__15097;
if(and__3822__auto____15098)
{return (n__15096 > 0);
} else
{return and__3822__auto____15098;
}
})()))
{{
var G__15099 = (n__15096 - 1);
var G__15100 = cljs.core.next.call(null,xs__15097);
n__15096 = G__15099;
xs__15097 = G__15100;
continue;
}
} else
{return xs__15097;
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
var G__15101__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15102 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__15103 = cljs.core.next.call(null,more);
sb = G__15102;
more = G__15103;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__15101 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15101__delegate.call(this, x, ys);
};
G__15101.cljs$lang$maxFixedArity = 1;
G__15101.cljs$lang$applyTo = (function (arglist__15104){
var x = cljs.core.first(arglist__15104);
var ys = cljs.core.rest(arglist__15104);
return G__15101__delegate(x, ys);
});
G__15101.cljs$lang$arity$variadic = G__15101__delegate;
return G__15101;
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
var G__15105__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15106 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__15107 = cljs.core.next.call(null,more);
sb = G__15106;
more = G__15107;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__15105 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15105__delegate.call(this, x, ys);
};
G__15105.cljs$lang$maxFixedArity = 1;
G__15105.cljs$lang$applyTo = (function (arglist__15108){
var x = cljs.core.first(arglist__15108);
var ys = cljs.core.rest(arglist__15108);
return G__15105__delegate(x, ys);
});
G__15105.cljs$lang$arity$variadic = G__15105__delegate;
return G__15105;
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
format.cljs$lang$applyTo = (function (arglist__15109){
var fmt = cljs.core.first(arglist__15109);
var args = cljs.core.rest(arglist__15109);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__15112 = cljs.core.seq.call(null,x);
var ys__15113 = cljs.core.seq.call(null,y);
while(true){
if((xs__15112 == null))
{return (ys__15113 == null);
} else
{if((ys__15113 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__15112),cljs.core.first.call(null,ys__15113)))
{{
var G__15114 = cljs.core.next.call(null,xs__15112);
var G__15115 = cljs.core.next.call(null,ys__15113);
xs__15112 = G__15114;
ys__15113 = G__15115;
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
return cljs.core.reduce.call(null,(function (p1__15116_SHARP_,p2__15117_SHARP_){
return cljs.core.hash_combine.call(null,p1__15116_SHARP_,cljs.core.hash.call(null,p2__15117_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__15121 = 0;
var s__15122 = cljs.core.seq.call(null,m);
while(true){
if(s__15122)
{var e__15123 = cljs.core.first.call(null,s__15122);
{
var G__15124 = ((h__15121 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__15123)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__15123)))) % 4503599627370496);
var G__15125 = cljs.core.next.call(null,s__15122);
h__15121 = G__15124;
s__15122 = G__15125;
continue;
}
} else
{return h__15121;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__15129 = 0;
var s__15130 = cljs.core.seq.call(null,s);
while(true){
if(s__15130)
{var e__15131 = cljs.core.first.call(null,s__15130);
{
var G__15132 = ((h__15129 + cljs.core.hash.call(null,e__15131)) % 4503599627370496);
var G__15133 = cljs.core.next.call(null,s__15130);
h__15129 = G__15132;
s__15130 = G__15133;
continue;
}
} else
{return h__15129;
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
var G__15154__15155 = cljs.core.seq.call(null,fn_map);
if(G__15154__15155)
{var G__15157__15159 = cljs.core.first.call(null,G__15154__15155);
var vec__15158__15160 = G__15157__15159;
var key_name__15161 = cljs.core.nth.call(null,vec__15158__15160,0,null);
var f__15162 = cljs.core.nth.call(null,vec__15158__15160,1,null);
var G__15154__15163 = G__15154__15155;
var G__15157__15164 = G__15157__15159;
var G__15154__15165 = G__15154__15163;
while(true){
var vec__15166__15167 = G__15157__15164;
var key_name__15168 = cljs.core.nth.call(null,vec__15166__15167,0,null);
var f__15169 = cljs.core.nth.call(null,vec__15166__15167,1,null);
var G__15154__15170 = G__15154__15165;
var str_name__15171 = cljs.core.name.call(null,key_name__15168);
(obj[str_name__15171] = f__15169);
var temp__3974__auto____15172 = cljs.core.next.call(null,G__15154__15170);
if(temp__3974__auto____15172)
{var G__15154__15173 = temp__3974__auto____15172;
{
var G__15174 = cljs.core.first.call(null,G__15154__15173);
var G__15175 = G__15154__15173;
G__15157__15164 = G__15174;
G__15154__15165 = G__15175;
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
var this__15176 = this;
var h__2151__auto____15177 = this__15176.__hash;
if(!((h__2151__auto____15177 == null)))
{return h__2151__auto____15177;
} else
{var h__2151__auto____15178 = cljs.core.hash_coll.call(null,coll);
this__15176.__hash = h__2151__auto____15178;
return h__2151__auto____15178;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15179 = this;
if((this__15179.count === 1))
{return null;
} else
{return this__15179.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15180 = this;
return (new cljs.core.List(this__15180.meta,o,coll,(this__15180.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__15181 = this;
var this__15182 = this;
return cljs.core.pr_str.call(null,this__15182);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15183 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15184 = this;
return this__15184.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15185 = this;
return this__15185.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15186 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15187 = this;
return this__15187.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15188 = this;
if((this__15188.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__15188.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15189 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15190 = this;
return (new cljs.core.List(meta,this__15190.first,this__15190.rest,this__15190.count,this__15190.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15191 = this;
return this__15191.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15192 = this;
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
var this__15193 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15194 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15195 = this;
return (new cljs.core.List(this__15195.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__15196 = this;
var this__15197 = this;
return cljs.core.pr_str.call(null,this__15197);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15198 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15199 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15200 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15201 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15202 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15203 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15204 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15205 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15206 = this;
return this__15206.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15207 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__15211__15212 = coll;
if(G__15211__15212)
{if((function (){var or__3824__auto____15213 = (G__15211__15212.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____15213)
{return or__3824__auto____15213;
} else
{return G__15211__15212.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__15211__15212.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15211__15212);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15211__15212);
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
var G__15214__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__15214 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15214__delegate.call(this, x, y, z, items);
};
G__15214.cljs$lang$maxFixedArity = 3;
G__15214.cljs$lang$applyTo = (function (arglist__15215){
var x = cljs.core.first(arglist__15215);
var y = cljs.core.first(cljs.core.next(arglist__15215));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15215)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15215)));
return G__15214__delegate(x, y, z, items);
});
G__15214.cljs$lang$arity$variadic = G__15214__delegate;
return G__15214;
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
var this__15216 = this;
var h__2151__auto____15217 = this__15216.__hash;
if(!((h__2151__auto____15217 == null)))
{return h__2151__auto____15217;
} else
{var h__2151__auto____15218 = cljs.core.hash_coll.call(null,coll);
this__15216.__hash = h__2151__auto____15218;
return h__2151__auto____15218;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15219 = this;
if((this__15219.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__15219.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15220 = this;
return (new cljs.core.Cons(null,o,coll,this__15220.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__15221 = this;
var this__15222 = this;
return cljs.core.pr_str.call(null,this__15222);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15223 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15224 = this;
return this__15224.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15225 = this;
if((this__15225.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__15225.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15226 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15227 = this;
return (new cljs.core.Cons(meta,this__15227.first,this__15227.rest,this__15227.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15228 = this;
return this__15228.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15229 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15229.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____15234 = (coll == null);
if(or__3824__auto____15234)
{return or__3824__auto____15234;
} else
{var G__15235__15236 = coll;
if(G__15235__15236)
{if((function (){var or__3824__auto____15237 = (G__15235__15236.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____15237)
{return or__3824__auto____15237;
} else
{return G__15235__15236.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15235__15236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15235__15236);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15235__15236);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__15241__15242 = x;
if(G__15241__15242)
{if((function (){var or__3824__auto____15243 = (G__15241__15242.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____15243)
{return or__3824__auto____15243;
} else
{return G__15241__15242.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__15241__15242.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15241__15242);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15241__15242);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__15244 = null;
var G__15244__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__15244__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__15244 = function(string,f,start){
switch(arguments.length){
case 2:
return G__15244__2.call(this,string,f);
case 3:
return G__15244__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15244;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__15245 = null;
var G__15245__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__15245__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__15245 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__15245__2.call(this,string,k);
case 3:
return G__15245__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15245;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__15246 = null;
var G__15246__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__15246__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__15246 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__15246__2.call(this,string,n);
case 3:
return G__15246__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15246;
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
var G__15258 = null;
var G__15258__2 = (function (this_sym15249,coll){
var this__15251 = this;
var this_sym15249__15252 = this;
var ___15253 = this_sym15249__15252;
if((coll == null))
{return null;
} else
{var strobj__15254 = coll.strobj;
if((strobj__15254 == null))
{return cljs.core._lookup.call(null,coll,this__15251.k,null);
} else
{return (strobj__15254[this__15251.k]);
}
}
});
var G__15258__3 = (function (this_sym15250,coll,not_found){
var this__15251 = this;
var this_sym15250__15255 = this;
var ___15256 = this_sym15250__15255;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__15251.k,not_found);
}
});
G__15258 = function(this_sym15250,coll,not_found){
switch(arguments.length){
case 2:
return G__15258__2.call(this,this_sym15250,coll);
case 3:
return G__15258__3.call(this,this_sym15250,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15258;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym15247,args15248){
var this__15257 = this;
return this_sym15247.call.apply(this_sym15247,[this_sym15247].concat(args15248.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__15267 = null;
var G__15267__2 = (function (this_sym15261,coll){
var this_sym15261__15263 = this;
var this__15264 = this_sym15261__15263;
return cljs.core._lookup.call(null,coll,this__15264.toString(),null);
});
var G__15267__3 = (function (this_sym15262,coll,not_found){
var this_sym15262__15265 = this;
var this__15266 = this_sym15262__15265;
return cljs.core._lookup.call(null,coll,this__15266.toString(),not_found);
});
G__15267 = function(this_sym15262,coll,not_found){
switch(arguments.length){
case 2:
return G__15267__2.call(this,this_sym15262,coll);
case 3:
return G__15267__3.call(this,this_sym15262,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15267;
})()
;
String.prototype.apply = (function (this_sym15259,args15260){
return this_sym15259.call.apply(this_sym15259,[this_sym15259].concat(args15260.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__15269 = lazy_seq.x;
if(lazy_seq.realized)
{return x__15269;
} else
{lazy_seq.x = x__15269.call(null);
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
var this__15270 = this;
var h__2151__auto____15271 = this__15270.__hash;
if(!((h__2151__auto____15271 == null)))
{return h__2151__auto____15271;
} else
{var h__2151__auto____15272 = cljs.core.hash_coll.call(null,coll);
this__15270.__hash = h__2151__auto____15272;
return h__2151__auto____15272;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15273 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15274 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__15275 = this;
var this__15276 = this;
return cljs.core.pr_str.call(null,this__15276);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15277 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15278 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15279 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15280 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15281 = this;
return (new cljs.core.LazySeq(meta,this__15281.realized,this__15281.x,this__15281.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15282 = this;
return this__15282.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15283 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15283.meta);
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
var this__15284 = this;
return this__15284.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__15285 = this;
var ___15286 = this;
(this__15285.buf[this__15285.end] = o);
return this__15285.end = (this__15285.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__15287 = this;
var ___15288 = this;
var ret__15289 = (new cljs.core.ArrayChunk(this__15287.buf,0,this__15287.end));
this__15287.buf = null;
return ret__15289;
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
var this__15290 = this;
return cljs.core.array_reduce.call(null,this__15290.arr,f,(this__15290.arr[this__15290.off]),(this__15290.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__15291 = this;
return cljs.core.array_reduce.call(null,this__15291.arr,f,start,this__15291.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__15292 = this;
if((this__15292.off === this__15292.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__15292.arr,(this__15292.off + 1),this__15292.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__15293 = this;
return (this__15293.arr[(this__15293.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__15294 = this;
if((function (){var and__3822__auto____15295 = (i >= 0);
if(and__3822__auto____15295)
{return (i < (this__15294.end - this__15294.off));
} else
{return and__3822__auto____15295;
}
})())
{return (this__15294.arr[(this__15294.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15296 = this;
return (this__15296.end - this__15296.off);
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
var this__15297 = this;
var h__2151__auto____15298 = this__15297.__hash;
if(!((h__2151__auto____15298 == null)))
{return h__2151__auto____15298;
} else
{var h__2151__auto____15299 = cljs.core.hash_coll.call(null,coll);
this__15297.__hash = h__2151__auto____15299;
return h__2151__auto____15299;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__15300 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15301 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15302 = this;
return cljs.core._nth.call(null,this__15302.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15303 = this;
if((cljs.core._count.call(null,this__15303.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__15303.chunk),this__15303.more,this__15303.meta,null));
} else
{if((this__15303.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15303.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__15304 = this;
if((this__15304.more == null))
{return null;
} else
{return this__15304.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__15306 = this;
return (new cljs.core.ChunkedCons(this__15306.chunk,this__15306.more,m,this__15306.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15307 = this;
return this__15307.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__15308 = this;
return this__15308.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__15309 = this;
if((this__15309.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15309.more;
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
if((function (){var G__15313__15314 = s;
if(G__15313__15314)
{if(cljs.core.truth_((function (){var or__3824__auto____15315 = null;
if(cljs.core.truth_(or__3824__auto____15315))
{return or__3824__auto____15315;
} else
{return G__15313__15314.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__15313__15314.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15313__15314);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15313__15314);
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
var ary__15318 = [];
var s__15319 = s;
while(true){
if(cljs.core.seq.call(null,s__15319))
{ary__15318.push(cljs.core.first.call(null,s__15319));
{
var G__15320 = cljs.core.next.call(null,s__15319);
s__15319 = G__15320;
continue;
}
} else
{return ary__15318;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__15324 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__15325 = 0;
var xs__15326 = cljs.core.seq.call(null,coll);
while(true){
if(xs__15326)
{(ret__15324[i__15325] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__15326)));
{
var G__15327 = (i__15325 + 1);
var G__15328 = cljs.core.next.call(null,xs__15326);
i__15325 = G__15327;
xs__15326 = G__15328;
continue;
}
} else
{}
break;
}
return ret__15324;
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
var a__15336 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15337 = cljs.core.seq.call(null,init_val_or_seq);
var i__15338 = 0;
var s__15339 = s__15337;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15340 = s__15339;
if(and__3822__auto____15340)
{return (i__15338 < size);
} else
{return and__3822__auto____15340;
}
})()))
{(a__15336[i__15338] = cljs.core.first.call(null,s__15339));
{
var G__15343 = (i__15338 + 1);
var G__15344 = cljs.core.next.call(null,s__15339);
i__15338 = G__15343;
s__15339 = G__15344;
continue;
}
} else
{return a__15336;
}
break;
}
} else
{var n__2486__auto____15341 = size;
var i__15342 = 0;
while(true){
if((i__15342 < n__2486__auto____15341))
{(a__15336[i__15342] = init_val_or_seq);
{
var G__15345 = (i__15342 + 1);
i__15342 = G__15345;
continue;
}
} else
{}
break;
}
return a__15336;
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
var a__15353 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15354 = cljs.core.seq.call(null,init_val_or_seq);
var i__15355 = 0;
var s__15356 = s__15354;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15357 = s__15356;
if(and__3822__auto____15357)
{return (i__15355 < size);
} else
{return and__3822__auto____15357;
}
})()))
{(a__15353[i__15355] = cljs.core.first.call(null,s__15356));
{
var G__15360 = (i__15355 + 1);
var G__15361 = cljs.core.next.call(null,s__15356);
i__15355 = G__15360;
s__15356 = G__15361;
continue;
}
} else
{return a__15353;
}
break;
}
} else
{var n__2486__auto____15358 = size;
var i__15359 = 0;
while(true){
if((i__15359 < n__2486__auto____15358))
{(a__15353[i__15359] = init_val_or_seq);
{
var G__15362 = (i__15359 + 1);
i__15359 = G__15362;
continue;
}
} else
{}
break;
}
return a__15353;
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
var a__15370 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15371 = cljs.core.seq.call(null,init_val_or_seq);
var i__15372 = 0;
var s__15373 = s__15371;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15374 = s__15373;
if(and__3822__auto____15374)
{return (i__15372 < size);
} else
{return and__3822__auto____15374;
}
})()))
{(a__15370[i__15372] = cljs.core.first.call(null,s__15373));
{
var G__15377 = (i__15372 + 1);
var G__15378 = cljs.core.next.call(null,s__15373);
i__15372 = G__15377;
s__15373 = G__15378;
continue;
}
} else
{return a__15370;
}
break;
}
} else
{var n__2486__auto____15375 = size;
var i__15376 = 0;
while(true){
if((i__15376 < n__2486__auto____15375))
{(a__15370[i__15376] = init_val_or_seq);
{
var G__15379 = (i__15376 + 1);
i__15376 = G__15379;
continue;
}
} else
{}
break;
}
return a__15370;
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
{var s__15384 = s;
var i__15385 = n;
var sum__15386 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15387 = (i__15385 > 0);
if(and__3822__auto____15387)
{return cljs.core.seq.call(null,s__15384);
} else
{return and__3822__auto____15387;
}
})()))
{{
var G__15388 = cljs.core.next.call(null,s__15384);
var G__15389 = (i__15385 - 1);
var G__15390 = (sum__15386 + 1);
s__15384 = G__15388;
i__15385 = G__15389;
sum__15386 = G__15390;
continue;
}
} else
{return sum__15386;
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
var s__15395 = cljs.core.seq.call(null,x);
if(s__15395)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__15395))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__15395),concat.call(null,cljs.core.chunk_rest.call(null,s__15395),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__15395),concat.call(null,cljs.core.rest.call(null,s__15395),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__15399__delegate = function (x,y,zs){
var cat__15398 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__15397 = cljs.core.seq.call(null,xys);
if(xys__15397)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__15397))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__15397),cat.call(null,cljs.core.chunk_rest.call(null,xys__15397),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__15397),cat.call(null,cljs.core.rest.call(null,xys__15397),zs));
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
return cat__15398.call(null,concat.call(null,x,y),zs);
};
var G__15399 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15399__delegate.call(this, x, y, zs);
};
G__15399.cljs$lang$maxFixedArity = 2;
G__15399.cljs$lang$applyTo = (function (arglist__15400){
var x = cljs.core.first(arglist__15400);
var y = cljs.core.first(cljs.core.next(arglist__15400));
var zs = cljs.core.rest(cljs.core.next(arglist__15400));
return G__15399__delegate(x, y, zs);
});
G__15399.cljs$lang$arity$variadic = G__15399__delegate;
return G__15399;
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
var G__15401__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__15401 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15401__delegate.call(this, a, b, c, d, more);
};
G__15401.cljs$lang$maxFixedArity = 4;
G__15401.cljs$lang$applyTo = (function (arglist__15402){
var a = cljs.core.first(arglist__15402);
var b = cljs.core.first(cljs.core.next(arglist__15402));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15402)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15402))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15402))));
return G__15401__delegate(a, b, c, d, more);
});
G__15401.cljs$lang$arity$variadic = G__15401__delegate;
return G__15401;
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
var args__15444 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__15445 = cljs.core._first.call(null,args__15444);
var args__15446 = cljs.core._rest.call(null,args__15444);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__15445);
} else
{return f.call(null,a__15445);
}
} else
{var b__15447 = cljs.core._first.call(null,args__15446);
var args__15448 = cljs.core._rest.call(null,args__15446);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__15445,b__15447);
} else
{return f.call(null,a__15445,b__15447);
}
} else
{var c__15449 = cljs.core._first.call(null,args__15448);
var args__15450 = cljs.core._rest.call(null,args__15448);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__15445,b__15447,c__15449);
} else
{return f.call(null,a__15445,b__15447,c__15449);
}
} else
{var d__15451 = cljs.core._first.call(null,args__15450);
var args__15452 = cljs.core._rest.call(null,args__15450);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__15445,b__15447,c__15449,d__15451);
} else
{return f.call(null,a__15445,b__15447,c__15449,d__15451);
}
} else
{var e__15453 = cljs.core._first.call(null,args__15452);
var args__15454 = cljs.core._rest.call(null,args__15452);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__15445,b__15447,c__15449,d__15451,e__15453);
} else
{return f.call(null,a__15445,b__15447,c__15449,d__15451,e__15453);
}
} else
{var f__15455 = cljs.core._first.call(null,args__15454);
var args__15456 = cljs.core._rest.call(null,args__15454);
if((argc === 6))
{if(f__15455.cljs$lang$arity$6)
{return f__15455.cljs$lang$arity$6(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455);
}
} else
{var g__15457 = cljs.core._first.call(null,args__15456);
var args__15458 = cljs.core._rest.call(null,args__15456);
if((argc === 7))
{if(f__15455.cljs$lang$arity$7)
{return f__15455.cljs$lang$arity$7(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457);
}
} else
{var h__15459 = cljs.core._first.call(null,args__15458);
var args__15460 = cljs.core._rest.call(null,args__15458);
if((argc === 8))
{if(f__15455.cljs$lang$arity$8)
{return f__15455.cljs$lang$arity$8(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459);
}
} else
{var i__15461 = cljs.core._first.call(null,args__15460);
var args__15462 = cljs.core._rest.call(null,args__15460);
if((argc === 9))
{if(f__15455.cljs$lang$arity$9)
{return f__15455.cljs$lang$arity$9(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461);
}
} else
{var j__15463 = cljs.core._first.call(null,args__15462);
var args__15464 = cljs.core._rest.call(null,args__15462);
if((argc === 10))
{if(f__15455.cljs$lang$arity$10)
{return f__15455.cljs$lang$arity$10(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463);
}
} else
{var k__15465 = cljs.core._first.call(null,args__15464);
var args__15466 = cljs.core._rest.call(null,args__15464);
if((argc === 11))
{if(f__15455.cljs$lang$arity$11)
{return f__15455.cljs$lang$arity$11(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465);
}
} else
{var l__15467 = cljs.core._first.call(null,args__15466);
var args__15468 = cljs.core._rest.call(null,args__15466);
if((argc === 12))
{if(f__15455.cljs$lang$arity$12)
{return f__15455.cljs$lang$arity$12(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467);
}
} else
{var m__15469 = cljs.core._first.call(null,args__15468);
var args__15470 = cljs.core._rest.call(null,args__15468);
if((argc === 13))
{if(f__15455.cljs$lang$arity$13)
{return f__15455.cljs$lang$arity$13(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469);
}
} else
{var n__15471 = cljs.core._first.call(null,args__15470);
var args__15472 = cljs.core._rest.call(null,args__15470);
if((argc === 14))
{if(f__15455.cljs$lang$arity$14)
{return f__15455.cljs$lang$arity$14(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471);
}
} else
{var o__15473 = cljs.core._first.call(null,args__15472);
var args__15474 = cljs.core._rest.call(null,args__15472);
if((argc === 15))
{if(f__15455.cljs$lang$arity$15)
{return f__15455.cljs$lang$arity$15(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473);
}
} else
{var p__15475 = cljs.core._first.call(null,args__15474);
var args__15476 = cljs.core._rest.call(null,args__15474);
if((argc === 16))
{if(f__15455.cljs$lang$arity$16)
{return f__15455.cljs$lang$arity$16(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475);
}
} else
{var q__15477 = cljs.core._first.call(null,args__15476);
var args__15478 = cljs.core._rest.call(null,args__15476);
if((argc === 17))
{if(f__15455.cljs$lang$arity$17)
{return f__15455.cljs$lang$arity$17(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477);
}
} else
{var r__15479 = cljs.core._first.call(null,args__15478);
var args__15480 = cljs.core._rest.call(null,args__15478);
if((argc === 18))
{if(f__15455.cljs$lang$arity$18)
{return f__15455.cljs$lang$arity$18(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479);
}
} else
{var s__15481 = cljs.core._first.call(null,args__15480);
var args__15482 = cljs.core._rest.call(null,args__15480);
if((argc === 19))
{if(f__15455.cljs$lang$arity$19)
{return f__15455.cljs$lang$arity$19(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479,s__15481);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479,s__15481);
}
} else
{var t__15483 = cljs.core._first.call(null,args__15482);
var args__15484 = cljs.core._rest.call(null,args__15482);
if((argc === 20))
{if(f__15455.cljs$lang$arity$20)
{return f__15455.cljs$lang$arity$20(a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479,s__15481,t__15483);
} else
{return f__15455.call(null,a__15445,b__15447,c__15449,d__15451,e__15453,f__15455,g__15457,h__15459,i__15461,j__15463,k__15465,l__15467,m__15469,n__15471,o__15473,p__15475,q__15477,r__15479,s__15481,t__15483);
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
var fixed_arity__15499 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15500 = cljs.core.bounded_count.call(null,args,(fixed_arity__15499 + 1));
if((bc__15500 <= fixed_arity__15499))
{return cljs.core.apply_to.call(null,f,bc__15500,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__15501 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__15502 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15503 = cljs.core.bounded_count.call(null,arglist__15501,(fixed_arity__15502 + 1));
if((bc__15503 <= fixed_arity__15502))
{return cljs.core.apply_to.call(null,f,bc__15503,arglist__15501);
} else
{return f.cljs$lang$applyTo(arglist__15501);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15501));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__15504 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__15505 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15506 = cljs.core.bounded_count.call(null,arglist__15504,(fixed_arity__15505 + 1));
if((bc__15506 <= fixed_arity__15505))
{return cljs.core.apply_to.call(null,f,bc__15506,arglist__15504);
} else
{return f.cljs$lang$applyTo(arglist__15504);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15504));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__15507 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__15508 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15509 = cljs.core.bounded_count.call(null,arglist__15507,(fixed_arity__15508 + 1));
if((bc__15509 <= fixed_arity__15508))
{return cljs.core.apply_to.call(null,f,bc__15509,arglist__15507);
} else
{return f.cljs$lang$applyTo(arglist__15507);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15507));
}
});
var apply__6 = (function() { 
var G__15513__delegate = function (f,a,b,c,d,args){
var arglist__15510 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__15511 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15512 = cljs.core.bounded_count.call(null,arglist__15510,(fixed_arity__15511 + 1));
if((bc__15512 <= fixed_arity__15511))
{return cljs.core.apply_to.call(null,f,bc__15512,arglist__15510);
} else
{return f.cljs$lang$applyTo(arglist__15510);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15510));
}
};
var G__15513 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15513__delegate.call(this, f, a, b, c, d, args);
};
G__15513.cljs$lang$maxFixedArity = 5;
G__15513.cljs$lang$applyTo = (function (arglist__15514){
var f = cljs.core.first(arglist__15514);
var a = cljs.core.first(cljs.core.next(arglist__15514));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15514)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15514))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15514)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15514)))));
return G__15513__delegate(f, a, b, c, d, args);
});
G__15513.cljs$lang$arity$variadic = G__15513__delegate;
return G__15513;
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
vary_meta.cljs$lang$applyTo = (function (arglist__15515){
var obj = cljs.core.first(arglist__15515);
var f = cljs.core.first(cljs.core.next(arglist__15515));
var args = cljs.core.rest(cljs.core.next(arglist__15515));
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
var G__15516__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__15516 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15516__delegate.call(this, x, y, more);
};
G__15516.cljs$lang$maxFixedArity = 2;
G__15516.cljs$lang$applyTo = (function (arglist__15517){
var x = cljs.core.first(arglist__15517);
var y = cljs.core.first(cljs.core.next(arglist__15517));
var more = cljs.core.rest(cljs.core.next(arglist__15517));
return G__15516__delegate(x, y, more);
});
G__15516.cljs$lang$arity$variadic = G__15516__delegate;
return G__15516;
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
var G__15518 = pred;
var G__15519 = cljs.core.next.call(null,coll);
pred = G__15518;
coll = G__15519;
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
{var or__3824__auto____15521 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____15521))
{return or__3824__auto____15521;
} else
{{
var G__15522 = pred;
var G__15523 = cljs.core.next.call(null,coll);
pred = G__15522;
coll = G__15523;
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
var G__15524 = null;
var G__15524__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__15524__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__15524__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__15524__3 = (function() { 
var G__15525__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__15525 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15525__delegate.call(this, x, y, zs);
};
G__15525.cljs$lang$maxFixedArity = 2;
G__15525.cljs$lang$applyTo = (function (arglist__15526){
var x = cljs.core.first(arglist__15526);
var y = cljs.core.first(cljs.core.next(arglist__15526));
var zs = cljs.core.rest(cljs.core.next(arglist__15526));
return G__15525__delegate(x, y, zs);
});
G__15525.cljs$lang$arity$variadic = G__15525__delegate;
return G__15525;
})()
;
G__15524 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__15524__0.call(this);
case 1:
return G__15524__1.call(this,x);
case 2:
return G__15524__2.call(this,x,y);
default:
return G__15524__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__15524.cljs$lang$maxFixedArity = 2;
G__15524.cljs$lang$applyTo = G__15524__3.cljs$lang$applyTo;
return G__15524;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__15527__delegate = function (args){
return x;
};
var G__15527 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15527__delegate.call(this, args);
};
G__15527.cljs$lang$maxFixedArity = 0;
G__15527.cljs$lang$applyTo = (function (arglist__15528){
var args = cljs.core.seq(arglist__15528);;
return G__15527__delegate(args);
});
G__15527.cljs$lang$arity$variadic = G__15527__delegate;
return G__15527;
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
var G__15535 = null;
var G__15535__0 = (function (){
return f.call(null,g.call(null));
});
var G__15535__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__15535__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__15535__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__15535__4 = (function() { 
var G__15536__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__15536 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15536__delegate.call(this, x, y, z, args);
};
G__15536.cljs$lang$maxFixedArity = 3;
G__15536.cljs$lang$applyTo = (function (arglist__15537){
var x = cljs.core.first(arglist__15537);
var y = cljs.core.first(cljs.core.next(arglist__15537));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15537)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15537)));
return G__15536__delegate(x, y, z, args);
});
G__15536.cljs$lang$arity$variadic = G__15536__delegate;
return G__15536;
})()
;
G__15535 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15535__0.call(this);
case 1:
return G__15535__1.call(this,x);
case 2:
return G__15535__2.call(this,x,y);
case 3:
return G__15535__3.call(this,x,y,z);
default:
return G__15535__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15535.cljs$lang$maxFixedArity = 3;
G__15535.cljs$lang$applyTo = G__15535__4.cljs$lang$applyTo;
return G__15535;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__15538 = null;
var G__15538__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__15538__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__15538__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__15538__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__15538__4 = (function() { 
var G__15539__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__15539 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15539__delegate.call(this, x, y, z, args);
};
G__15539.cljs$lang$maxFixedArity = 3;
G__15539.cljs$lang$applyTo = (function (arglist__15540){
var x = cljs.core.first(arglist__15540);
var y = cljs.core.first(cljs.core.next(arglist__15540));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15540)));
return G__15539__delegate(x, y, z, args);
});
G__15539.cljs$lang$arity$variadic = G__15539__delegate;
return G__15539;
})()
;
G__15538 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15538__0.call(this);
case 1:
return G__15538__1.call(this,x);
case 2:
return G__15538__2.call(this,x,y);
case 3:
return G__15538__3.call(this,x,y,z);
default:
return G__15538__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15538.cljs$lang$maxFixedArity = 3;
G__15538.cljs$lang$applyTo = G__15538__4.cljs$lang$applyTo;
return G__15538;
})()
});
var comp__4 = (function() { 
var G__15541__delegate = function (f1,f2,f3,fs){
var fs__15532 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__15542__delegate = function (args){
var ret__15533 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__15532),args);
var fs__15534 = cljs.core.next.call(null,fs__15532);
while(true){
if(fs__15534)
{{
var G__15543 = cljs.core.first.call(null,fs__15534).call(null,ret__15533);
var G__15544 = cljs.core.next.call(null,fs__15534);
ret__15533 = G__15543;
fs__15534 = G__15544;
continue;
}
} else
{return ret__15533;
}
break;
}
};
var G__15542 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15542__delegate.call(this, args);
};
G__15542.cljs$lang$maxFixedArity = 0;
G__15542.cljs$lang$applyTo = (function (arglist__15545){
var args = cljs.core.seq(arglist__15545);;
return G__15542__delegate(args);
});
G__15542.cljs$lang$arity$variadic = G__15542__delegate;
return G__15542;
})()
;
};
var G__15541 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15541__delegate.call(this, f1, f2, f3, fs);
};
G__15541.cljs$lang$maxFixedArity = 3;
G__15541.cljs$lang$applyTo = (function (arglist__15546){
var f1 = cljs.core.first(arglist__15546);
var f2 = cljs.core.first(cljs.core.next(arglist__15546));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15546)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15546)));
return G__15541__delegate(f1, f2, f3, fs);
});
G__15541.cljs$lang$arity$variadic = G__15541__delegate;
return G__15541;
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
var G__15547__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__15547 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15547__delegate.call(this, args);
};
G__15547.cljs$lang$maxFixedArity = 0;
G__15547.cljs$lang$applyTo = (function (arglist__15548){
var args = cljs.core.seq(arglist__15548);;
return G__15547__delegate(args);
});
G__15547.cljs$lang$arity$variadic = G__15547__delegate;
return G__15547;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__15549__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__15549 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15549__delegate.call(this, args);
};
G__15549.cljs$lang$maxFixedArity = 0;
G__15549.cljs$lang$applyTo = (function (arglist__15550){
var args = cljs.core.seq(arglist__15550);;
return G__15549__delegate(args);
});
G__15549.cljs$lang$arity$variadic = G__15549__delegate;
return G__15549;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__15551__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__15551 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15551__delegate.call(this, args);
};
G__15551.cljs$lang$maxFixedArity = 0;
G__15551.cljs$lang$applyTo = (function (arglist__15552){
var args = cljs.core.seq(arglist__15552);;
return G__15551__delegate(args);
});
G__15551.cljs$lang$arity$variadic = G__15551__delegate;
return G__15551;
})()
;
});
var partial__5 = (function() { 
var G__15553__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__15554__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__15554 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15554__delegate.call(this, args);
};
G__15554.cljs$lang$maxFixedArity = 0;
G__15554.cljs$lang$applyTo = (function (arglist__15555){
var args = cljs.core.seq(arglist__15555);;
return G__15554__delegate(args);
});
G__15554.cljs$lang$arity$variadic = G__15554__delegate;
return G__15554;
})()
;
};
var G__15553 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15553__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__15553.cljs$lang$maxFixedArity = 4;
G__15553.cljs$lang$applyTo = (function (arglist__15556){
var f = cljs.core.first(arglist__15556);
var arg1 = cljs.core.first(cljs.core.next(arglist__15556));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15556)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15556))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15556))));
return G__15553__delegate(f, arg1, arg2, arg3, more);
});
G__15553.cljs$lang$arity$variadic = G__15553__delegate;
return G__15553;
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
var G__15557 = null;
var G__15557__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__15557__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__15557__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__15557__4 = (function() { 
var G__15558__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__15558 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15558__delegate.call(this, a, b, c, ds);
};
G__15558.cljs$lang$maxFixedArity = 3;
G__15558.cljs$lang$applyTo = (function (arglist__15559){
var a = cljs.core.first(arglist__15559);
var b = cljs.core.first(cljs.core.next(arglist__15559));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15559)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15559)));
return G__15558__delegate(a, b, c, ds);
});
G__15558.cljs$lang$arity$variadic = G__15558__delegate;
return G__15558;
})()
;
G__15557 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__15557__1.call(this,a);
case 2:
return G__15557__2.call(this,a,b);
case 3:
return G__15557__3.call(this,a,b,c);
default:
return G__15557__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15557.cljs$lang$maxFixedArity = 3;
G__15557.cljs$lang$applyTo = G__15557__4.cljs$lang$applyTo;
return G__15557;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__15560 = null;
var G__15560__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15560__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__15560__4 = (function() { 
var G__15561__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__15561 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15561__delegate.call(this, a, b, c, ds);
};
G__15561.cljs$lang$maxFixedArity = 3;
G__15561.cljs$lang$applyTo = (function (arglist__15562){
var a = cljs.core.first(arglist__15562);
var b = cljs.core.first(cljs.core.next(arglist__15562));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15562)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15562)));
return G__15561__delegate(a, b, c, ds);
});
G__15561.cljs$lang$arity$variadic = G__15561__delegate;
return G__15561;
})()
;
G__15560 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15560__2.call(this,a,b);
case 3:
return G__15560__3.call(this,a,b,c);
default:
return G__15560__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15560.cljs$lang$maxFixedArity = 3;
G__15560.cljs$lang$applyTo = G__15560__4.cljs$lang$applyTo;
return G__15560;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__15563 = null;
var G__15563__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15563__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__15563__4 = (function() { 
var G__15564__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__15564 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15564__delegate.call(this, a, b, c, ds);
};
G__15564.cljs$lang$maxFixedArity = 3;
G__15564.cljs$lang$applyTo = (function (arglist__15565){
var a = cljs.core.first(arglist__15565);
var b = cljs.core.first(cljs.core.next(arglist__15565));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15565)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15565)));
return G__15564__delegate(a, b, c, ds);
});
G__15564.cljs$lang$arity$variadic = G__15564__delegate;
return G__15564;
})()
;
G__15563 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15563__2.call(this,a,b);
case 3:
return G__15563__3.call(this,a,b,c);
default:
return G__15563__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15563.cljs$lang$maxFixedArity = 3;
G__15563.cljs$lang$applyTo = G__15563__4.cljs$lang$applyTo;
return G__15563;
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
var mapi__15581 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15589 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15589)
{var s__15590 = temp__3974__auto____15589;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15590))
{var c__15591 = cljs.core.chunk_first.call(null,s__15590);
var size__15592 = cljs.core.count.call(null,c__15591);
var b__15593 = cljs.core.chunk_buffer.call(null,size__15592);
var n__2486__auto____15594 = size__15592;
var i__15595 = 0;
while(true){
if((i__15595 < n__2486__auto____15594))
{cljs.core.chunk_append.call(null,b__15593,f.call(null,(idx + i__15595),cljs.core._nth.call(null,c__15591,i__15595)));
{
var G__15596 = (i__15595 + 1);
i__15595 = G__15596;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15593),mapi.call(null,(idx + size__15592),cljs.core.chunk_rest.call(null,s__15590)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__15590)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__15590)));
}
} else
{return null;
}
}),null));
});
return mapi__15581.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15606 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15606)
{var s__15607 = temp__3974__auto____15606;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15607))
{var c__15608 = cljs.core.chunk_first.call(null,s__15607);
var size__15609 = cljs.core.count.call(null,c__15608);
var b__15610 = cljs.core.chunk_buffer.call(null,size__15609);
var n__2486__auto____15611 = size__15609;
var i__15612 = 0;
while(true){
if((i__15612 < n__2486__auto____15611))
{var x__15613 = f.call(null,cljs.core._nth.call(null,c__15608,i__15612));
if((x__15613 == null))
{} else
{cljs.core.chunk_append.call(null,b__15610,x__15613);
}
{
var G__15615 = (i__15612 + 1);
i__15612 = G__15615;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15610),keep.call(null,f,cljs.core.chunk_rest.call(null,s__15607)));
} else
{var x__15614 = f.call(null,cljs.core.first.call(null,s__15607));
if((x__15614 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__15607));
} else
{return cljs.core.cons.call(null,x__15614,keep.call(null,f,cljs.core.rest.call(null,s__15607)));
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
var keepi__15641 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15651 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15651)
{var s__15652 = temp__3974__auto____15651;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15652))
{var c__15653 = cljs.core.chunk_first.call(null,s__15652);
var size__15654 = cljs.core.count.call(null,c__15653);
var b__15655 = cljs.core.chunk_buffer.call(null,size__15654);
var n__2486__auto____15656 = size__15654;
var i__15657 = 0;
while(true){
if((i__15657 < n__2486__auto____15656))
{var x__15658 = f.call(null,(idx + i__15657),cljs.core._nth.call(null,c__15653,i__15657));
if((x__15658 == null))
{} else
{cljs.core.chunk_append.call(null,b__15655,x__15658);
}
{
var G__15660 = (i__15657 + 1);
i__15657 = G__15660;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15655),keepi.call(null,(idx + size__15654),cljs.core.chunk_rest.call(null,s__15652)));
} else
{var x__15659 = f.call(null,idx,cljs.core.first.call(null,s__15652));
if((x__15659 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15652));
} else
{return cljs.core.cons.call(null,x__15659,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15652)));
}
}
} else
{return null;
}
}),null));
});
return keepi__15641.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15746 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15746))
{return p.call(null,y);
} else
{return and__3822__auto____15746;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15747 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15747))
{var and__3822__auto____15748 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____15748))
{return p.call(null,z);
} else
{return and__3822__auto____15748;
}
} else
{return and__3822__auto____15747;
}
})());
});
var ep1__4 = (function() { 
var G__15817__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15749 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15749))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____15749;
}
})());
};
var G__15817 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15817__delegate.call(this, x, y, z, args);
};
G__15817.cljs$lang$maxFixedArity = 3;
G__15817.cljs$lang$applyTo = (function (arglist__15818){
var x = cljs.core.first(arglist__15818);
var y = cljs.core.first(cljs.core.next(arglist__15818));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15818)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15818)));
return G__15817__delegate(x, y, z, args);
});
G__15817.cljs$lang$arity$variadic = G__15817__delegate;
return G__15817;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15761 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15761))
{return p2.call(null,x);
} else
{return and__3822__auto____15761;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15762 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15762))
{var and__3822__auto____15763 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15763))
{var and__3822__auto____15764 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15764))
{return p2.call(null,y);
} else
{return and__3822__auto____15764;
}
} else
{return and__3822__auto____15763;
}
} else
{return and__3822__auto____15762;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15765 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15765))
{var and__3822__auto____15766 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15766))
{var and__3822__auto____15767 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15767))
{var and__3822__auto____15768 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15768))
{var and__3822__auto____15769 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15769))
{return p2.call(null,z);
} else
{return and__3822__auto____15769;
}
} else
{return and__3822__auto____15768;
}
} else
{return and__3822__auto____15767;
}
} else
{return and__3822__auto____15766;
}
} else
{return and__3822__auto____15765;
}
})());
});
var ep2__4 = (function() { 
var G__15819__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15770 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15770))
{return cljs.core.every_QMARK_.call(null,(function (p1__15616_SHARP_){
var and__3822__auto____15771 = p1.call(null,p1__15616_SHARP_);
if(cljs.core.truth_(and__3822__auto____15771))
{return p2.call(null,p1__15616_SHARP_);
} else
{return and__3822__auto____15771;
}
}),args);
} else
{return and__3822__auto____15770;
}
})());
};
var G__15819 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15819__delegate.call(this, x, y, z, args);
};
G__15819.cljs$lang$maxFixedArity = 3;
G__15819.cljs$lang$applyTo = (function (arglist__15820){
var x = cljs.core.first(arglist__15820);
var y = cljs.core.first(cljs.core.next(arglist__15820));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15820)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15820)));
return G__15819__delegate(x, y, z, args);
});
G__15819.cljs$lang$arity$variadic = G__15819__delegate;
return G__15819;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15790 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15790))
{var and__3822__auto____15791 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15791))
{return p3.call(null,x);
} else
{return and__3822__auto____15791;
}
} else
{return and__3822__auto____15790;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15792 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15792))
{var and__3822__auto____15793 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15793))
{var and__3822__auto____15794 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15794))
{var and__3822__auto____15795 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15795))
{var and__3822__auto____15796 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15796))
{return p3.call(null,y);
} else
{return and__3822__auto____15796;
}
} else
{return and__3822__auto____15795;
}
} else
{return and__3822__auto____15794;
}
} else
{return and__3822__auto____15793;
}
} else
{return and__3822__auto____15792;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15797 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15797))
{var and__3822__auto____15798 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15798))
{var and__3822__auto____15799 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15799))
{var and__3822__auto____15800 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15800))
{var and__3822__auto____15801 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15801))
{var and__3822__auto____15802 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____15802))
{var and__3822__auto____15803 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15803))
{var and__3822__auto____15804 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____15804))
{return p3.call(null,z);
} else
{return and__3822__auto____15804;
}
} else
{return and__3822__auto____15803;
}
} else
{return and__3822__auto____15802;
}
} else
{return and__3822__auto____15801;
}
} else
{return and__3822__auto____15800;
}
} else
{return and__3822__auto____15799;
}
} else
{return and__3822__auto____15798;
}
} else
{return and__3822__auto____15797;
}
})());
});
var ep3__4 = (function() { 
var G__15821__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15805 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15805))
{return cljs.core.every_QMARK_.call(null,(function (p1__15617_SHARP_){
var and__3822__auto____15806 = p1.call(null,p1__15617_SHARP_);
if(cljs.core.truth_(and__3822__auto____15806))
{var and__3822__auto____15807 = p2.call(null,p1__15617_SHARP_);
if(cljs.core.truth_(and__3822__auto____15807))
{return p3.call(null,p1__15617_SHARP_);
} else
{return and__3822__auto____15807;
}
} else
{return and__3822__auto____15806;
}
}),args);
} else
{return and__3822__auto____15805;
}
})());
};
var G__15821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15821__delegate.call(this, x, y, z, args);
};
G__15821.cljs$lang$maxFixedArity = 3;
G__15821.cljs$lang$applyTo = (function (arglist__15822){
var x = cljs.core.first(arglist__15822);
var y = cljs.core.first(cljs.core.next(arglist__15822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15822)));
return G__15821__delegate(x, y, z, args);
});
G__15821.cljs$lang$arity$variadic = G__15821__delegate;
return G__15821;
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
var G__15823__delegate = function (p1,p2,p3,ps){
var ps__15808 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__15618_SHARP_){
return p1__15618_SHARP_.call(null,x);
}),ps__15808);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__15619_SHARP_){
var and__3822__auto____15813 = p1__15619_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15813))
{return p1__15619_SHARP_.call(null,y);
} else
{return and__3822__auto____15813;
}
}),ps__15808);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__15620_SHARP_){
var and__3822__auto____15814 = p1__15620_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15814))
{var and__3822__auto____15815 = p1__15620_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____15815))
{return p1__15620_SHARP_.call(null,z);
} else
{return and__3822__auto____15815;
}
} else
{return and__3822__auto____15814;
}
}),ps__15808);
});
var epn__4 = (function() { 
var G__15824__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15816 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15816))
{return cljs.core.every_QMARK_.call(null,(function (p1__15621_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__15621_SHARP_,args);
}),ps__15808);
} else
{return and__3822__auto____15816;
}
})());
};
var G__15824 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15824__delegate.call(this, x, y, z, args);
};
G__15824.cljs$lang$maxFixedArity = 3;
G__15824.cljs$lang$applyTo = (function (arglist__15825){
var x = cljs.core.first(arglist__15825);
var y = cljs.core.first(cljs.core.next(arglist__15825));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15825)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15825)));
return G__15824__delegate(x, y, z, args);
});
G__15824.cljs$lang$arity$variadic = G__15824__delegate;
return G__15824;
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
var G__15823 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15823__delegate.call(this, p1, p2, p3, ps);
};
G__15823.cljs$lang$maxFixedArity = 3;
G__15823.cljs$lang$applyTo = (function (arglist__15826){
var p1 = cljs.core.first(arglist__15826);
var p2 = cljs.core.first(cljs.core.next(arglist__15826));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15826)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15826)));
return G__15823__delegate(p1, p2, p3, ps);
});
G__15823.cljs$lang$arity$variadic = G__15823__delegate;
return G__15823;
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
var or__3824__auto____15907 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____15907))
{return or__3824__auto____15907;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____15908 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____15908))
{return or__3824__auto____15908;
} else
{var or__3824__auto____15909 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____15909))
{return or__3824__auto____15909;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__15978__delegate = function (x,y,z,args){
var or__3824__auto____15910 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15910))
{return or__3824__auto____15910;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__15978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15978__delegate.call(this, x, y, z, args);
};
G__15978.cljs$lang$maxFixedArity = 3;
G__15978.cljs$lang$applyTo = (function (arglist__15979){
var x = cljs.core.first(arglist__15979);
var y = cljs.core.first(cljs.core.next(arglist__15979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15979)));
return G__15978__delegate(x, y, z, args);
});
G__15978.cljs$lang$arity$variadic = G__15978__delegate;
return G__15978;
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
var or__3824__auto____15922 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15922))
{return or__3824__auto____15922;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____15923 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15923))
{return or__3824__auto____15923;
} else
{var or__3824__auto____15924 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15924))
{return or__3824__auto____15924;
} else
{var or__3824__auto____15925 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15925))
{return or__3824__auto____15925;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____15926 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15926))
{return or__3824__auto____15926;
} else
{var or__3824__auto____15927 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15927))
{return or__3824__auto____15927;
} else
{var or__3824__auto____15928 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____15928))
{return or__3824__auto____15928;
} else
{var or__3824__auto____15929 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15929))
{return or__3824__auto____15929;
} else
{var or__3824__auto____15930 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____15930))
{return or__3824__auto____15930;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__15980__delegate = function (x,y,z,args){
var or__3824__auto____15931 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15931))
{return or__3824__auto____15931;
} else
{return cljs.core.some.call(null,(function (p1__15661_SHARP_){
var or__3824__auto____15932 = p1.call(null,p1__15661_SHARP_);
if(cljs.core.truth_(or__3824__auto____15932))
{return or__3824__auto____15932;
} else
{return p2.call(null,p1__15661_SHARP_);
}
}),args);
}
};
var G__15980 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15980__delegate.call(this, x, y, z, args);
};
G__15980.cljs$lang$maxFixedArity = 3;
G__15980.cljs$lang$applyTo = (function (arglist__15981){
var x = cljs.core.first(arglist__15981);
var y = cljs.core.first(cljs.core.next(arglist__15981));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15981)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15981)));
return G__15980__delegate(x, y, z, args);
});
G__15980.cljs$lang$arity$variadic = G__15980__delegate;
return G__15980;
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
var or__3824__auto____15951 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15951))
{return or__3824__auto____15951;
} else
{var or__3824__auto____15952 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15952))
{return or__3824__auto____15952;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____15953 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15953))
{return or__3824__auto____15953;
} else
{var or__3824__auto____15954 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15954))
{return or__3824__auto____15954;
} else
{var or__3824__auto____15955 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____15955))
{return or__3824__auto____15955;
} else
{var or__3824__auto____15956 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15956))
{return or__3824__auto____15956;
} else
{var or__3824__auto____15957 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____15957))
{return or__3824__auto____15957;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____15958 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15958))
{return or__3824__auto____15958;
} else
{var or__3824__auto____15959 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15959))
{return or__3824__auto____15959;
} else
{var or__3824__auto____15960 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____15960))
{return or__3824__auto____15960;
} else
{var or__3824__auto____15961 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15961))
{return or__3824__auto____15961;
} else
{var or__3824__auto____15962 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____15962))
{return or__3824__auto____15962;
} else
{var or__3824__auto____15963 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____15963))
{return or__3824__auto____15963;
} else
{var or__3824__auto____15964 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____15964))
{return or__3824__auto____15964;
} else
{var or__3824__auto____15965 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____15965))
{return or__3824__auto____15965;
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
var G__15982__delegate = function (x,y,z,args){
var or__3824__auto____15966 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15966))
{return or__3824__auto____15966;
} else
{return cljs.core.some.call(null,(function (p1__15662_SHARP_){
var or__3824__auto____15967 = p1.call(null,p1__15662_SHARP_);
if(cljs.core.truth_(or__3824__auto____15967))
{return or__3824__auto____15967;
} else
{var or__3824__auto____15968 = p2.call(null,p1__15662_SHARP_);
if(cljs.core.truth_(or__3824__auto____15968))
{return or__3824__auto____15968;
} else
{return p3.call(null,p1__15662_SHARP_);
}
}
}),args);
}
};
var G__15982 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15982__delegate.call(this, x, y, z, args);
};
G__15982.cljs$lang$maxFixedArity = 3;
G__15982.cljs$lang$applyTo = (function (arglist__15983){
var x = cljs.core.first(arglist__15983);
var y = cljs.core.first(cljs.core.next(arglist__15983));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15983)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15983)));
return G__15982__delegate(x, y, z, args);
});
G__15982.cljs$lang$arity$variadic = G__15982__delegate;
return G__15982;
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
var G__15984__delegate = function (p1,p2,p3,ps){
var ps__15969 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__15663_SHARP_){
return p1__15663_SHARP_.call(null,x);
}),ps__15969);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__15664_SHARP_){
var or__3824__auto____15974 = p1__15664_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____15974))
{return or__3824__auto____15974;
} else
{return p1__15664_SHARP_.call(null,y);
}
}),ps__15969);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__15665_SHARP_){
var or__3824__auto____15975 = p1__15665_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____15975))
{return or__3824__auto____15975;
} else
{var or__3824__auto____15976 = p1__15665_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____15976))
{return or__3824__auto____15976;
} else
{return p1__15665_SHARP_.call(null,z);
}
}
}),ps__15969);
});
var spn__4 = (function() { 
var G__15985__delegate = function (x,y,z,args){
var or__3824__auto____15977 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15977))
{return or__3824__auto____15977;
} else
{return cljs.core.some.call(null,(function (p1__15666_SHARP_){
return cljs.core.some.call(null,p1__15666_SHARP_,args);
}),ps__15969);
}
};
var G__15985 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15985__delegate.call(this, x, y, z, args);
};
G__15985.cljs$lang$maxFixedArity = 3;
G__15985.cljs$lang$applyTo = (function (arglist__15986){
var x = cljs.core.first(arglist__15986);
var y = cljs.core.first(cljs.core.next(arglist__15986));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15986)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15986)));
return G__15985__delegate(x, y, z, args);
});
G__15985.cljs$lang$arity$variadic = G__15985__delegate;
return G__15985;
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
var G__15984 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15984__delegate.call(this, p1, p2, p3, ps);
};
G__15984.cljs$lang$maxFixedArity = 3;
G__15984.cljs$lang$applyTo = (function (arglist__15987){
var p1 = cljs.core.first(arglist__15987);
var p2 = cljs.core.first(cljs.core.next(arglist__15987));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15987)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15987)));
return G__15984__delegate(p1, p2, p3, ps);
});
G__15984.cljs$lang$arity$variadic = G__15984__delegate;
return G__15984;
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
var temp__3974__auto____16006 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16006)
{var s__16007 = temp__3974__auto____16006;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16007))
{var c__16008 = cljs.core.chunk_first.call(null,s__16007);
var size__16009 = cljs.core.count.call(null,c__16008);
var b__16010 = cljs.core.chunk_buffer.call(null,size__16009);
var n__2486__auto____16011 = size__16009;
var i__16012 = 0;
while(true){
if((i__16012 < n__2486__auto____16011))
{cljs.core.chunk_append.call(null,b__16010,f.call(null,cljs.core._nth.call(null,c__16008,i__16012)));
{
var G__16024 = (i__16012 + 1);
i__16012 = G__16024;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16010),map.call(null,f,cljs.core.chunk_rest.call(null,s__16007)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__16007)),map.call(null,f,cljs.core.rest.call(null,s__16007)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16013 = cljs.core.seq.call(null,c1);
var s2__16014 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16015 = s1__16013;
if(and__3822__auto____16015)
{return s2__16014;
} else
{return and__3822__auto____16015;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16013),cljs.core.first.call(null,s2__16014)),map.call(null,f,cljs.core.rest.call(null,s1__16013),cljs.core.rest.call(null,s2__16014)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16016 = cljs.core.seq.call(null,c1);
var s2__16017 = cljs.core.seq.call(null,c2);
var s3__16018 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____16019 = s1__16016;
if(and__3822__auto____16019)
{var and__3822__auto____16020 = s2__16017;
if(and__3822__auto____16020)
{return s3__16018;
} else
{return and__3822__auto____16020;
}
} else
{return and__3822__auto____16019;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16016),cljs.core.first.call(null,s2__16017),cljs.core.first.call(null,s3__16018)),map.call(null,f,cljs.core.rest.call(null,s1__16016),cljs.core.rest.call(null,s2__16017),cljs.core.rest.call(null,s3__16018)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__16025__delegate = function (f,c1,c2,c3,colls){
var step__16023 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16022 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16022))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__16022),step.call(null,map.call(null,cljs.core.rest,ss__16022)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__15827_SHARP_){
return cljs.core.apply.call(null,f,p1__15827_SHARP_);
}),step__16023.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__16025 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16025__delegate.call(this, f, c1, c2, c3, colls);
};
G__16025.cljs$lang$maxFixedArity = 4;
G__16025.cljs$lang$applyTo = (function (arglist__16026){
var f = cljs.core.first(arglist__16026);
var c1 = cljs.core.first(cljs.core.next(arglist__16026));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16026)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16026))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16026))));
return G__16025__delegate(f, c1, c2, c3, colls);
});
G__16025.cljs$lang$arity$variadic = G__16025__delegate;
return G__16025;
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
{var temp__3974__auto____16029 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16029)
{var s__16030 = temp__3974__auto____16029;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__16030),take.call(null,(n - 1),cljs.core.rest.call(null,s__16030)));
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
var step__16036 = (function (n,coll){
while(true){
var s__16034 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16035 = (n > 0);
if(and__3822__auto____16035)
{return s__16034;
} else
{return and__3822__auto____16035;
}
})()))
{{
var G__16037 = (n - 1);
var G__16038 = cljs.core.rest.call(null,s__16034);
n = G__16037;
coll = G__16038;
continue;
}
} else
{return s__16034;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16036.call(null,n,coll);
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
var s__16041 = cljs.core.seq.call(null,coll);
var lead__16042 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__16042)
{{
var G__16043 = cljs.core.next.call(null,s__16041);
var G__16044 = cljs.core.next.call(null,lead__16042);
s__16041 = G__16043;
lead__16042 = G__16044;
continue;
}
} else
{return s__16041;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__16050 = (function (pred,coll){
while(true){
var s__16048 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16049 = s__16048;
if(and__3822__auto____16049)
{return pred.call(null,cljs.core.first.call(null,s__16048));
} else
{return and__3822__auto____16049;
}
})()))
{{
var G__16051 = pred;
var G__16052 = cljs.core.rest.call(null,s__16048);
pred = G__16051;
coll = G__16052;
continue;
}
} else
{return s__16048;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16050.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____16055 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16055)
{var s__16056 = temp__3974__auto____16055;
return cljs.core.concat.call(null,s__16056,cycle.call(null,s__16056));
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
var s1__16061 = cljs.core.seq.call(null,c1);
var s2__16062 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16063 = s1__16061;
if(and__3822__auto____16063)
{return s2__16062;
} else
{return and__3822__auto____16063;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__16061),cljs.core.cons.call(null,cljs.core.first.call(null,s2__16062),interleave.call(null,cljs.core.rest.call(null,s1__16061),cljs.core.rest.call(null,s2__16062))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__16065__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16064 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16064))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__16064),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__16064)));
} else
{return null;
}
}),null));
};
var G__16065 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16065__delegate.call(this, c1, c2, colls);
};
G__16065.cljs$lang$maxFixedArity = 2;
G__16065.cljs$lang$applyTo = (function (arglist__16066){
var c1 = cljs.core.first(arglist__16066);
var c2 = cljs.core.first(cljs.core.next(arglist__16066));
var colls = cljs.core.rest(cljs.core.next(arglist__16066));
return G__16065__delegate(c1, c2, colls);
});
G__16065.cljs$lang$arity$variadic = G__16065__delegate;
return G__16065;
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
var cat__16076 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____16074 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____16074)
{var coll__16075 = temp__3971__auto____16074;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__16075),cat.call(null,cljs.core.rest.call(null,coll__16075),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__16076.call(null,null,colls);
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
var G__16077__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__16077 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16077__delegate.call(this, f, coll, colls);
};
G__16077.cljs$lang$maxFixedArity = 2;
G__16077.cljs$lang$applyTo = (function (arglist__16078){
var f = cljs.core.first(arglist__16078);
var coll = cljs.core.first(cljs.core.next(arglist__16078));
var colls = cljs.core.rest(cljs.core.next(arglist__16078));
return G__16077__delegate(f, coll, colls);
});
G__16077.cljs$lang$arity$variadic = G__16077__delegate;
return G__16077;
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
var temp__3974__auto____16088 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16088)
{var s__16089 = temp__3974__auto____16088;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16089))
{var c__16090 = cljs.core.chunk_first.call(null,s__16089);
var size__16091 = cljs.core.count.call(null,c__16090);
var b__16092 = cljs.core.chunk_buffer.call(null,size__16091);
var n__2486__auto____16093 = size__16091;
var i__16094 = 0;
while(true){
if((i__16094 < n__2486__auto____16093))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__16090,i__16094))))
{cljs.core.chunk_append.call(null,b__16092,cljs.core._nth.call(null,c__16090,i__16094));
} else
{}
{
var G__16097 = (i__16094 + 1);
i__16094 = G__16097;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16092),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__16089)));
} else
{var f__16095 = cljs.core.first.call(null,s__16089);
var r__16096 = cljs.core.rest.call(null,s__16089);
if(cljs.core.truth_(pred.call(null,f__16095)))
{return cljs.core.cons.call(null,f__16095,filter.call(null,pred,r__16096));
} else
{return filter.call(null,pred,r__16096);
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
var walk__16100 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__16100.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__16098_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__16098_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__16104__16105 = to;
if(G__16104__16105)
{if((function (){var or__3824__auto____16106 = (G__16104__16105.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____16106)
{return or__3824__auto____16106;
} else
{return G__16104__16105.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__16104__16105.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16104__16105);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16104__16105);
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
var G__16107__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__16107 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16107__delegate.call(this, f, c1, c2, c3, colls);
};
G__16107.cljs$lang$maxFixedArity = 4;
G__16107.cljs$lang$applyTo = (function (arglist__16108){
var f = cljs.core.first(arglist__16108);
var c1 = cljs.core.first(cljs.core.next(arglist__16108));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16108)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16108))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16108))));
return G__16107__delegate(f, c1, c2, c3, colls);
});
G__16107.cljs$lang$arity$variadic = G__16107__delegate;
return G__16107;
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
var temp__3974__auto____16115 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16115)
{var s__16116 = temp__3974__auto____16115;
var p__16117 = cljs.core.take.call(null,n,s__16116);
if((n === cljs.core.count.call(null,p__16117)))
{return cljs.core.cons.call(null,p__16117,partition.call(null,n,step,cljs.core.drop.call(null,step,s__16116)));
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
var temp__3974__auto____16118 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16118)
{var s__16119 = temp__3974__auto____16118;
var p__16120 = cljs.core.take.call(null,n,s__16119);
if((n === cljs.core.count.call(null,p__16120)))
{return cljs.core.cons.call(null,p__16120,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__16119)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__16120,pad)));
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
var sentinel__16125 = cljs.core.lookup_sentinel;
var m__16126 = m;
var ks__16127 = cljs.core.seq.call(null,ks);
while(true){
if(ks__16127)
{var m__16128 = cljs.core._lookup.call(null,m__16126,cljs.core.first.call(null,ks__16127),sentinel__16125);
if((sentinel__16125 === m__16128))
{return not_found;
} else
{{
var G__16129 = sentinel__16125;
var G__16130 = m__16128;
var G__16131 = cljs.core.next.call(null,ks__16127);
sentinel__16125 = G__16129;
m__16126 = G__16130;
ks__16127 = G__16131;
continue;
}
}
} else
{return m__16126;
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
cljs.core.assoc_in = (function assoc_in(m,p__16132,v){
var vec__16137__16138 = p__16132;
var k__16139 = cljs.core.nth.call(null,vec__16137__16138,0,null);
var ks__16140 = cljs.core.nthnext.call(null,vec__16137__16138,1);
if(cljs.core.truth_(ks__16140))
{return cljs.core.assoc.call(null,m,k__16139,assoc_in.call(null,cljs.core._lookup.call(null,m,k__16139,null),ks__16140,v));
} else
{return cljs.core.assoc.call(null,m,k__16139,v);
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
var update_in__delegate = function (m,p__16141,f,args){
var vec__16146__16147 = p__16141;
var k__16148 = cljs.core.nth.call(null,vec__16146__16147,0,null);
var ks__16149 = cljs.core.nthnext.call(null,vec__16146__16147,1);
if(cljs.core.truth_(ks__16149))
{return cljs.core.assoc.call(null,m,k__16148,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__16148,null),ks__16149,f,args));
} else
{return cljs.core.assoc.call(null,m,k__16148,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__16148,null),args));
}
};
var update_in = function (m,p__16141,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__16141, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__16150){
var m = cljs.core.first(arglist__16150);
var p__16141 = cljs.core.first(cljs.core.next(arglist__16150));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16150)));
return update_in__delegate(m, p__16141, f, args);
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
var this__16153 = this;
var h__2151__auto____16154 = this__16153.__hash;
if(!((h__2151__auto____16154 == null)))
{return h__2151__auto____16154;
} else
{var h__2151__auto____16155 = cljs.core.hash_coll.call(null,coll);
this__16153.__hash = h__2151__auto____16155;
return h__2151__auto____16155;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16156 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16157 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16158 = this;
var new_array__16159 = this__16158.array.slice();
(new_array__16159[k] = v);
return (new cljs.core.Vector(this__16158.meta,new_array__16159,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__16190 = null;
var G__16190__2 = (function (this_sym16160,k){
var this__16162 = this;
var this_sym16160__16163 = this;
var coll__16164 = this_sym16160__16163;
return coll__16164.cljs$core$ILookup$_lookup$arity$2(coll__16164,k);
});
var G__16190__3 = (function (this_sym16161,k,not_found){
var this__16162 = this;
var this_sym16161__16165 = this;
var coll__16166 = this_sym16161__16165;
return coll__16166.cljs$core$ILookup$_lookup$arity$3(coll__16166,k,not_found);
});
G__16190 = function(this_sym16161,k,not_found){
switch(arguments.length){
case 2:
return G__16190__2.call(this,this_sym16161,k);
case 3:
return G__16190__3.call(this,this_sym16161,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16190;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym16151,args16152){
var this__16167 = this;
return this_sym16151.call.apply(this_sym16151,[this_sym16151].concat(args16152.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16168 = this;
var new_array__16169 = this__16168.array.slice();
new_array__16169.push(o);
return (new cljs.core.Vector(this__16168.meta,new_array__16169,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__16170 = this;
var this__16171 = this;
return cljs.core.pr_str.call(null,this__16171);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16172 = this;
return cljs.core.ci_reduce.call(null,this__16172.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16173 = this;
return cljs.core.ci_reduce.call(null,this__16173.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16174 = this;
if((this__16174.array.length > 0))
{var vector_seq__16175 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__16174.array.length))
{return cljs.core.cons.call(null,(this__16174.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__16175.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16176 = this;
return this__16176.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16177 = this;
var count__16178 = this__16177.array.length;
if((count__16178 > 0))
{return (this__16177.array[(count__16178 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16179 = this;
if((this__16179.array.length > 0))
{var new_array__16180 = this__16179.array.slice();
new_array__16180.pop();
return (new cljs.core.Vector(this__16179.meta,new_array__16180,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16181 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16182 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16183 = this;
return (new cljs.core.Vector(meta,this__16183.array,this__16183.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16184 = this;
return this__16184.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16185 = this;
if((function (){var and__3822__auto____16186 = (0 <= n);
if(and__3822__auto____16186)
{return (n < this__16185.array.length);
} else
{return and__3822__auto____16186;
}
})())
{return (this__16185.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16187 = this;
if((function (){var and__3822__auto____16188 = (0 <= n);
if(and__3822__auto____16188)
{return (n < this__16187.array.length);
} else
{return and__3822__auto____16188;
}
})())
{return (this__16187.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16189 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16189.meta);
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
var cnt__16192 = pv.cnt;
if((cnt__16192 < 32))
{return 0;
} else
{return (((cnt__16192 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__16198 = level;
var ret__16199 = node;
while(true){
if((ll__16198 === 0))
{return ret__16199;
} else
{var embed__16200 = ret__16199;
var r__16201 = cljs.core.pv_fresh_node.call(null,edit);
var ___16202 = cljs.core.pv_aset.call(null,r__16201,0,embed__16200);
{
var G__16203 = (ll__16198 - 5);
var G__16204 = r__16201;
ll__16198 = G__16203;
ret__16199 = G__16204;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__16210 = cljs.core.pv_clone_node.call(null,parent);
var subidx__16211 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__16210,subidx__16211,tailnode);
return ret__16210;
} else
{var child__16212 = cljs.core.pv_aget.call(null,parent,subidx__16211);
if(!((child__16212 == null)))
{var node_to_insert__16213 = push_tail.call(null,pv,(level - 5),child__16212,tailnode);
cljs.core.pv_aset.call(null,ret__16210,subidx__16211,node_to_insert__16213);
return ret__16210;
} else
{var node_to_insert__16214 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__16210,subidx__16211,node_to_insert__16214);
return ret__16210;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____16218 = (0 <= i);
if(and__3822__auto____16218)
{return (i < pv.cnt);
} else
{return and__3822__auto____16218;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__16219 = pv.root;
var level__16220 = pv.shift;
while(true){
if((level__16220 > 0))
{{
var G__16221 = cljs.core.pv_aget.call(null,node__16219,((i >>> level__16220) & 31));
var G__16222 = (level__16220 - 5);
node__16219 = G__16221;
level__16220 = G__16222;
continue;
}
} else
{return node__16219.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__16225 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__16225,(i & 31),val);
return ret__16225;
} else
{var subidx__16226 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16225,subidx__16226,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16226),i,val));
return ret__16225;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__16232 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16233 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16232));
if((function (){var and__3822__auto____16234 = (new_child__16233 == null);
if(and__3822__auto____16234)
{return (subidx__16232 === 0);
} else
{return and__3822__auto____16234;
}
})())
{return null;
} else
{var ret__16235 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16235,subidx__16232,new_child__16233);
return ret__16235;
}
} else
{if((subidx__16232 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__16236 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16236,subidx__16232,null);
return ret__16236;
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
var this__16239 = this;
return (new cljs.core.TransientVector(this__16239.cnt,this__16239.shift,cljs.core.tv_editable_root.call(null,this__16239.root),cljs.core.tv_editable_tail.call(null,this__16239.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16240 = this;
var h__2151__auto____16241 = this__16240.__hash;
if(!((h__2151__auto____16241 == null)))
{return h__2151__auto____16241;
} else
{var h__2151__auto____16242 = cljs.core.hash_coll.call(null,coll);
this__16240.__hash = h__2151__auto____16242;
return h__2151__auto____16242;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16243 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16244 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16245 = this;
if((function (){var and__3822__auto____16246 = (0 <= k);
if(and__3822__auto____16246)
{return (k < this__16245.cnt);
} else
{return and__3822__auto____16246;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__16247 = this__16245.tail.slice();
(new_tail__16247[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__16245.meta,this__16245.cnt,this__16245.shift,this__16245.root,new_tail__16247,null));
} else
{return (new cljs.core.PersistentVector(this__16245.meta,this__16245.cnt,this__16245.shift,cljs.core.do_assoc.call(null,coll,this__16245.shift,this__16245.root,k,v),this__16245.tail,null));
}
} else
{if((k === this__16245.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__16245.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__16295 = null;
var G__16295__2 = (function (this_sym16248,k){
var this__16250 = this;
var this_sym16248__16251 = this;
var coll__16252 = this_sym16248__16251;
return coll__16252.cljs$core$ILookup$_lookup$arity$2(coll__16252,k);
});
var G__16295__3 = (function (this_sym16249,k,not_found){
var this__16250 = this;
var this_sym16249__16253 = this;
var coll__16254 = this_sym16249__16253;
return coll__16254.cljs$core$ILookup$_lookup$arity$3(coll__16254,k,not_found);
});
G__16295 = function(this_sym16249,k,not_found){
switch(arguments.length){
case 2:
return G__16295__2.call(this,this_sym16249,k);
case 3:
return G__16295__3.call(this,this_sym16249,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16295;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym16237,args16238){
var this__16255 = this;
return this_sym16237.call.apply(this_sym16237,[this_sym16237].concat(args16238.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__16256 = this;
var step_init__16257 = [0,init];
var i__16258 = 0;
while(true){
if((i__16258 < this__16256.cnt))
{var arr__16259 = cljs.core.array_for.call(null,v,i__16258);
var len__16260 = arr__16259.length;
var init__16264 = (function (){var j__16261 = 0;
var init__16262 = (step_init__16257[1]);
while(true){
if((j__16261 < len__16260))
{var init__16263 = f.call(null,init__16262,(j__16261 + i__16258),(arr__16259[j__16261]));
if(cljs.core.reduced_QMARK_.call(null,init__16263))
{return init__16263;
} else
{{
var G__16296 = (j__16261 + 1);
var G__16297 = init__16263;
j__16261 = G__16296;
init__16262 = G__16297;
continue;
}
}
} else
{(step_init__16257[0] = len__16260);
(step_init__16257[1] = init__16262);
return init__16262;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16264))
{return cljs.core.deref.call(null,init__16264);
} else
{{
var G__16298 = (i__16258 + (step_init__16257[0]));
i__16258 = G__16298;
continue;
}
}
} else
{return (step_init__16257[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16265 = this;
if(((this__16265.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__16266 = this__16265.tail.slice();
new_tail__16266.push(o);
return (new cljs.core.PersistentVector(this__16265.meta,(this__16265.cnt + 1),this__16265.shift,this__16265.root,new_tail__16266,null));
} else
{var root_overflow_QMARK___16267 = ((this__16265.cnt >>> 5) > (1 << this__16265.shift));
var new_shift__16268 = ((root_overflow_QMARK___16267)?(this__16265.shift + 5):this__16265.shift);
var new_root__16270 = ((root_overflow_QMARK___16267)?(function (){var n_r__16269 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__16269,0,this__16265.root);
cljs.core.pv_aset.call(null,n_r__16269,1,cljs.core.new_path.call(null,null,this__16265.shift,(new cljs.core.VectorNode(null,this__16265.tail))));
return n_r__16269;
})():cljs.core.push_tail.call(null,coll,this__16265.shift,this__16265.root,(new cljs.core.VectorNode(null,this__16265.tail))));
return (new cljs.core.PersistentVector(this__16265.meta,(this__16265.cnt + 1),new_shift__16268,new_root__16270,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__16271 = this;
if((this__16271.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__16271.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__16272 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__16273 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__16274 = this;
var this__16275 = this;
return cljs.core.pr_str.call(null,this__16275);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16276 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16277 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16278 = this;
if((this__16278.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16279 = this;
return this__16279.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16280 = this;
if((this__16280.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__16280.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16281 = this;
if((this__16281.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16281.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16281.meta);
} else
{if((1 < (this__16281.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__16281.meta,(this__16281.cnt - 1),this__16281.shift,this__16281.root,this__16281.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__16282 = cljs.core.array_for.call(null,coll,(this__16281.cnt - 2));
var nr__16283 = cljs.core.pop_tail.call(null,coll,this__16281.shift,this__16281.root);
var new_root__16284 = (((nr__16283 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__16283);
var cnt_1__16285 = (this__16281.cnt - 1);
if((function (){var and__3822__auto____16286 = (5 < this__16281.shift);
if(and__3822__auto____16286)
{return (cljs.core.pv_aget.call(null,new_root__16284,1) == null);
} else
{return and__3822__auto____16286;
}
})())
{return (new cljs.core.PersistentVector(this__16281.meta,cnt_1__16285,(this__16281.shift - 5),cljs.core.pv_aget.call(null,new_root__16284,0),new_tail__16282,null));
} else
{return (new cljs.core.PersistentVector(this__16281.meta,cnt_1__16285,this__16281.shift,new_root__16284,new_tail__16282,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16287 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16288 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16289 = this;
return (new cljs.core.PersistentVector(meta,this__16289.cnt,this__16289.shift,this__16289.root,this__16289.tail,this__16289.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16290 = this;
return this__16290.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16291 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16292 = this;
if((function (){var and__3822__auto____16293 = (0 <= n);
if(and__3822__auto____16293)
{return (n < this__16292.cnt);
} else
{return and__3822__auto____16293;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16294 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16294.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__16299 = xs.length;
var xs__16300 = (((no_clone === true))?xs:xs.slice());
if((l__16299 < 32))
{return (new cljs.core.PersistentVector(null,l__16299,5,cljs.core.PersistentVector.EMPTY_NODE,xs__16300,null));
} else
{var node__16301 = xs__16300.slice(0,32);
var v__16302 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__16301,null));
var i__16303 = 32;
var out__16304 = cljs.core._as_transient.call(null,v__16302);
while(true){
if((i__16303 < l__16299))
{{
var G__16305 = (i__16303 + 1);
var G__16306 = cljs.core.conj_BANG_.call(null,out__16304,(xs__16300[i__16303]));
i__16303 = G__16305;
out__16304 = G__16306;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16304);
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
vector.cljs$lang$applyTo = (function (arglist__16307){
var args = cljs.core.seq(arglist__16307);;
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
var this__16308 = this;
var h__2151__auto____16309 = this__16308.__hash;
if(!((h__2151__auto____16309 == null)))
{return h__2151__auto____16309;
} else
{var h__2151__auto____16310 = cljs.core.hash_coll.call(null,coll);
this__16308.__hash = h__2151__auto____16310;
return h__2151__auto____16310;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__16311 = this;
if(((this__16311.off + 1) < this__16311.node.length))
{var s__16312 = cljs.core.chunked_seq.call(null,this__16311.vec,this__16311.node,this__16311.i,(this__16311.off + 1));
if((s__16312 == null))
{return null;
} else
{return s__16312;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16313 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16314 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16315 = this;
return (this__16315.node[this__16315.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16316 = this;
if(((this__16316.off + 1) < this__16316.node.length))
{var s__16317 = cljs.core.chunked_seq.call(null,this__16316.vec,this__16316.node,this__16316.i,(this__16316.off + 1));
if((s__16317 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16317;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__16318 = this;
var l__16319 = this__16318.node.length;
var s__16320 = ((((this__16318.i + l__16319) < cljs.core._count.call(null,this__16318.vec)))?cljs.core.chunked_seq.call(null,this__16318.vec,(this__16318.i + l__16319),0):null);
if((s__16320 == null))
{return null;
} else
{return s__16320;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16321 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__16322 = this;
return cljs.core.chunked_seq.call(null,this__16322.vec,this__16322.node,this__16322.i,this__16322.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__16323 = this;
return this__16323.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16324 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16324.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__16325 = this;
return cljs.core.array_chunk.call(null,this__16325.node,this__16325.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__16326 = this;
var l__16327 = this__16326.node.length;
var s__16328 = ((((this__16326.i + l__16327) < cljs.core._count.call(null,this__16326.vec)))?cljs.core.chunked_seq.call(null,this__16326.vec,(this__16326.i + l__16327),0):null);
if((s__16328 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16328;
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
var this__16331 = this;
var h__2151__auto____16332 = this__16331.__hash;
if(!((h__2151__auto____16332 == null)))
{return h__2151__auto____16332;
} else
{var h__2151__auto____16333 = cljs.core.hash_coll.call(null,coll);
this__16331.__hash = h__2151__auto____16333;
return h__2151__auto____16333;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16334 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16335 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__16336 = this;
var v_pos__16337 = (this__16336.start + key);
return (new cljs.core.Subvec(this__16336.meta,cljs.core._assoc.call(null,this__16336.v,v_pos__16337,val),this__16336.start,((this__16336.end > (v_pos__16337 + 1)) ? this__16336.end : (v_pos__16337 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__16363 = null;
var G__16363__2 = (function (this_sym16338,k){
var this__16340 = this;
var this_sym16338__16341 = this;
var coll__16342 = this_sym16338__16341;
return coll__16342.cljs$core$ILookup$_lookup$arity$2(coll__16342,k);
});
var G__16363__3 = (function (this_sym16339,k,not_found){
var this__16340 = this;
var this_sym16339__16343 = this;
var coll__16344 = this_sym16339__16343;
return coll__16344.cljs$core$ILookup$_lookup$arity$3(coll__16344,k,not_found);
});
G__16363 = function(this_sym16339,k,not_found){
switch(arguments.length){
case 2:
return G__16363__2.call(this,this_sym16339,k);
case 3:
return G__16363__3.call(this,this_sym16339,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16363;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym16329,args16330){
var this__16345 = this;
return this_sym16329.call.apply(this_sym16329,[this_sym16329].concat(args16330.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16346 = this;
return (new cljs.core.Subvec(this__16346.meta,cljs.core._assoc_n.call(null,this__16346.v,this__16346.end,o),this__16346.start,(this__16346.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__16347 = this;
var this__16348 = this;
return cljs.core.pr_str.call(null,this__16348);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__16349 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__16350 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16351 = this;
var subvec_seq__16352 = (function subvec_seq(i){
if((i === this__16351.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__16351.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__16352.call(null,this__16351.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16353 = this;
return (this__16353.end - this__16353.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16354 = this;
return cljs.core._nth.call(null,this__16354.v,(this__16354.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16355 = this;
if((this__16355.start === this__16355.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__16355.meta,this__16355.v,this__16355.start,(this__16355.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16356 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16358 = this;
return (new cljs.core.Subvec(meta,this__16358.v,this__16358.start,this__16358.end,this__16358.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16359 = this;
return this__16359.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16360 = this;
return cljs.core._nth.call(null,this__16360.v,(this__16360.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16361 = this;
return cljs.core._nth.call(null,this__16361.v,(this__16361.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16362 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16362.meta);
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
var ret__16365 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__16365,0,tl.length);
return ret__16365;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__16369 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__16370 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16369,subidx__16370,(((level === 5))?tail_node:(function (){var child__16371 = cljs.core.pv_aget.call(null,ret__16369,subidx__16370);
if(!((child__16371 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__16371,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__16369;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__16376 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__16377 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16378 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__16376,subidx__16377));
if((function (){var and__3822__auto____16379 = (new_child__16378 == null);
if(and__3822__auto____16379)
{return (subidx__16377 === 0);
} else
{return and__3822__auto____16379;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__16376,subidx__16377,new_child__16378);
return node__16376;
}
} else
{if((subidx__16377 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__16376,subidx__16377,null);
return node__16376;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____16384 = (0 <= i);
if(and__3822__auto____16384)
{return (i < tv.cnt);
} else
{return and__3822__auto____16384;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__16385 = tv.root;
var node__16386 = root__16385;
var level__16387 = tv.shift;
while(true){
if((level__16387 > 0))
{{
var G__16388 = cljs.core.tv_ensure_editable.call(null,root__16385.edit,cljs.core.pv_aget.call(null,node__16386,((i >>> level__16387) & 31)));
var G__16389 = (level__16387 - 5);
node__16386 = G__16388;
level__16387 = G__16389;
continue;
}
} else
{return node__16386.arr;
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
var G__16429 = null;
var G__16429__2 = (function (this_sym16392,k){
var this__16394 = this;
var this_sym16392__16395 = this;
var coll__16396 = this_sym16392__16395;
return coll__16396.cljs$core$ILookup$_lookup$arity$2(coll__16396,k);
});
var G__16429__3 = (function (this_sym16393,k,not_found){
var this__16394 = this;
var this_sym16393__16397 = this;
var coll__16398 = this_sym16393__16397;
return coll__16398.cljs$core$ILookup$_lookup$arity$3(coll__16398,k,not_found);
});
G__16429 = function(this_sym16393,k,not_found){
switch(arguments.length){
case 2:
return G__16429__2.call(this,this_sym16393,k);
case 3:
return G__16429__3.call(this,this_sym16393,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16429;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym16390,args16391){
var this__16399 = this;
return this_sym16390.call.apply(this_sym16390,[this_sym16390].concat(args16391.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16400 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16401 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16402 = this;
if(this__16402.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16403 = this;
if((function (){var and__3822__auto____16404 = (0 <= n);
if(and__3822__auto____16404)
{return (n < this__16403.cnt);
} else
{return and__3822__auto____16404;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16405 = this;
if(this__16405.root.edit)
{return this__16405.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__16406 = this;
if(this__16406.root.edit)
{if((function (){var and__3822__auto____16407 = (0 <= n);
if(and__3822__auto____16407)
{return (n < this__16406.cnt);
} else
{return and__3822__auto____16407;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__16406.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__16412 = (function go(level,node){
var node__16410 = cljs.core.tv_ensure_editable.call(null,this__16406.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__16410,(n & 31),val);
return node__16410;
} else
{var subidx__16411 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__16410,subidx__16411,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__16410,subidx__16411)));
return node__16410;
}
}).call(null,this__16406.shift,this__16406.root);
this__16406.root = new_root__16412;
return tcoll;
}
} else
{if((n === this__16406.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__16406.cnt)].join('')));
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
var this__16413 = this;
if(this__16413.root.edit)
{if((this__16413.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16413.cnt))
{this__16413.cnt = 0;
return tcoll;
} else
{if((((this__16413.cnt - 1) & 31) > 0))
{this__16413.cnt = (this__16413.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__16414 = cljs.core.editable_array_for.call(null,tcoll,(this__16413.cnt - 2));
var new_root__16416 = (function (){var nr__16415 = cljs.core.tv_pop_tail.call(null,tcoll,this__16413.shift,this__16413.root);
if(!((nr__16415 == null)))
{return nr__16415;
} else
{return (new cljs.core.VectorNode(this__16413.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____16417 = (5 < this__16413.shift);
if(and__3822__auto____16417)
{return (cljs.core.pv_aget.call(null,new_root__16416,1) == null);
} else
{return and__3822__auto____16417;
}
})())
{var new_root__16418 = cljs.core.tv_ensure_editable.call(null,this__16413.root.edit,cljs.core.pv_aget.call(null,new_root__16416,0));
this__16413.root = new_root__16418;
this__16413.shift = (this__16413.shift - 5);
this__16413.cnt = (this__16413.cnt - 1);
this__16413.tail = new_tail__16414;
return tcoll;
} else
{this__16413.root = new_root__16416;
this__16413.cnt = (this__16413.cnt - 1);
this__16413.tail = new_tail__16414;
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
var this__16419 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16420 = this;
if(this__16420.root.edit)
{if(((this__16420.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__16420.tail[(this__16420.cnt & 31)] = o);
this__16420.cnt = (this__16420.cnt + 1);
return tcoll;
} else
{var tail_node__16421 = (new cljs.core.VectorNode(this__16420.root.edit,this__16420.tail));
var new_tail__16422 = cljs.core.make_array.call(null,32);
(new_tail__16422[0] = o);
this__16420.tail = new_tail__16422;
if(((this__16420.cnt >>> 5) > (1 << this__16420.shift)))
{var new_root_array__16423 = cljs.core.make_array.call(null,32);
var new_shift__16424 = (this__16420.shift + 5);
(new_root_array__16423[0] = this__16420.root);
(new_root_array__16423[1] = cljs.core.new_path.call(null,this__16420.root.edit,this__16420.shift,tail_node__16421));
this__16420.root = (new cljs.core.VectorNode(this__16420.root.edit,new_root_array__16423));
this__16420.shift = new_shift__16424;
this__16420.cnt = (this__16420.cnt + 1);
return tcoll;
} else
{var new_root__16425 = cljs.core.tv_push_tail.call(null,tcoll,this__16420.shift,this__16420.root,tail_node__16421);
this__16420.root = new_root__16425;
this__16420.cnt = (this__16420.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16426 = this;
if(this__16426.root.edit)
{this__16426.root.edit = null;
var len__16427 = (this__16426.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__16428 = cljs.core.make_array.call(null,len__16427);
cljs.core.array_copy.call(null,this__16426.tail,0,trimmed_tail__16428,0,len__16427);
return (new cljs.core.PersistentVector(null,this__16426.cnt,this__16426.shift,this__16426.root,trimmed_tail__16428,null));
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
var this__16430 = this;
var h__2151__auto____16431 = this__16430.__hash;
if(!((h__2151__auto____16431 == null)))
{return h__2151__auto____16431;
} else
{var h__2151__auto____16432 = cljs.core.hash_coll.call(null,coll);
this__16430.__hash = h__2151__auto____16432;
return h__2151__auto____16432;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16433 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__16434 = this;
var this__16435 = this;
return cljs.core.pr_str.call(null,this__16435);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16436 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16437 = this;
return cljs.core._first.call(null,this__16437.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16438 = this;
var temp__3971__auto____16439 = cljs.core.next.call(null,this__16438.front);
if(temp__3971__auto____16439)
{var f1__16440 = temp__3971__auto____16439;
return (new cljs.core.PersistentQueueSeq(this__16438.meta,f1__16440,this__16438.rear,null));
} else
{if((this__16438.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__16438.meta,this__16438.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16441 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16442 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__16442.front,this__16442.rear,this__16442.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16443 = this;
return this__16443.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16444 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16444.meta);
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
var this__16445 = this;
var h__2151__auto____16446 = this__16445.__hash;
if(!((h__2151__auto____16446 == null)))
{return h__2151__auto____16446;
} else
{var h__2151__auto____16447 = cljs.core.hash_coll.call(null,coll);
this__16445.__hash = h__2151__auto____16447;
return h__2151__auto____16447;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16448 = this;
if(cljs.core.truth_(this__16448.front))
{return (new cljs.core.PersistentQueue(this__16448.meta,(this__16448.count + 1),this__16448.front,cljs.core.conj.call(null,(function (){var or__3824__auto____16449 = this__16448.rear;
if(cljs.core.truth_(or__3824__auto____16449))
{return or__3824__auto____16449;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__16448.meta,(this__16448.count + 1),cljs.core.conj.call(null,this__16448.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__16450 = this;
var this__16451 = this;
return cljs.core.pr_str.call(null,this__16451);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16452 = this;
var rear__16453 = cljs.core.seq.call(null,this__16452.rear);
if(cljs.core.truth_((function (){var or__3824__auto____16454 = this__16452.front;
if(cljs.core.truth_(or__3824__auto____16454))
{return or__3824__auto____16454;
} else
{return rear__16453;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__16452.front,cljs.core.seq.call(null,rear__16453),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16455 = this;
return this__16455.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16456 = this;
return cljs.core._first.call(null,this__16456.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16457 = this;
if(cljs.core.truth_(this__16457.front))
{var temp__3971__auto____16458 = cljs.core.next.call(null,this__16457.front);
if(temp__3971__auto____16458)
{var f1__16459 = temp__3971__auto____16458;
return (new cljs.core.PersistentQueue(this__16457.meta,(this__16457.count - 1),f1__16459,this__16457.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__16457.meta,(this__16457.count - 1),cljs.core.seq.call(null,this__16457.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16460 = this;
return cljs.core.first.call(null,this__16460.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16461 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16462 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16463 = this;
return (new cljs.core.PersistentQueue(meta,this__16463.count,this__16463.front,this__16463.rear,this__16463.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16464 = this;
return this__16464.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16465 = this;
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
var this__16466 = this;
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
var len__16469 = array.length;
var i__16470 = 0;
while(true){
if((i__16470 < len__16469))
{if((k === (array[i__16470])))
{return i__16470;
} else
{{
var G__16471 = (i__16470 + incr);
i__16470 = G__16471;
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
var a__16474 = cljs.core.hash.call(null,a);
var b__16475 = cljs.core.hash.call(null,b);
if((a__16474 < b__16475))
{return -1;
} else
{if((a__16474 > b__16475))
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
var ks__16483 = m.keys;
var len__16484 = ks__16483.length;
var so__16485 = m.strobj;
var out__16486 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__16487 = 0;
var out__16488 = cljs.core.transient$.call(null,out__16486);
while(true){
if((i__16487 < len__16484))
{var k__16489 = (ks__16483[i__16487]);
{
var G__16490 = (i__16487 + 1);
var G__16491 = cljs.core.assoc_BANG_.call(null,out__16488,k__16489,(so__16485[k__16489]));
i__16487 = G__16490;
out__16488 = G__16491;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__16488,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__16497 = {};
var l__16498 = ks.length;
var i__16499 = 0;
while(true){
if((i__16499 < l__16498))
{var k__16500 = (ks[i__16499]);
(new_obj__16497[k__16500] = (obj[k__16500]));
{
var G__16501 = (i__16499 + 1);
i__16499 = G__16501;
continue;
}
} else
{}
break;
}
return new_obj__16497;
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
var this__16504 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16505 = this;
var h__2151__auto____16506 = this__16505.__hash;
if(!((h__2151__auto____16506 == null)))
{return h__2151__auto____16506;
} else
{var h__2151__auto____16507 = cljs.core.hash_imap.call(null,coll);
this__16505.__hash = h__2151__auto____16507;
return h__2151__auto____16507;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16508 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16509 = this;
if((function (){var and__3822__auto____16510 = goog.isString(k);
if(and__3822__auto____16510)
{return !((cljs.core.scan_array.call(null,1,k,this__16509.keys) == null));
} else
{return and__3822__auto____16510;
}
})())
{return (this__16509.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16511 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____16512 = (this__16511.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____16512)
{return or__3824__auto____16512;
} else
{return (this__16511.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__16511.keys) == null)))
{var new_strobj__16513 = cljs.core.obj_clone.call(null,this__16511.strobj,this__16511.keys);
(new_strobj__16513[k] = v);
return (new cljs.core.ObjMap(this__16511.meta,this__16511.keys,new_strobj__16513,(this__16511.update_count + 1),null));
} else
{var new_strobj__16514 = cljs.core.obj_clone.call(null,this__16511.strobj,this__16511.keys);
var new_keys__16515 = this__16511.keys.slice();
(new_strobj__16514[k] = v);
new_keys__16515.push(k);
return (new cljs.core.ObjMap(this__16511.meta,new_keys__16515,new_strobj__16514,(this__16511.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16516 = this;
if((function (){var and__3822__auto____16517 = goog.isString(k);
if(and__3822__auto____16517)
{return !((cljs.core.scan_array.call(null,1,k,this__16516.keys) == null));
} else
{return and__3822__auto____16517;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__16539 = null;
var G__16539__2 = (function (this_sym16518,k){
var this__16520 = this;
var this_sym16518__16521 = this;
var coll__16522 = this_sym16518__16521;
return coll__16522.cljs$core$ILookup$_lookup$arity$2(coll__16522,k);
});
var G__16539__3 = (function (this_sym16519,k,not_found){
var this__16520 = this;
var this_sym16519__16523 = this;
var coll__16524 = this_sym16519__16523;
return coll__16524.cljs$core$ILookup$_lookup$arity$3(coll__16524,k,not_found);
});
G__16539 = function(this_sym16519,k,not_found){
switch(arguments.length){
case 2:
return G__16539__2.call(this,this_sym16519,k);
case 3:
return G__16539__3.call(this,this_sym16519,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16539;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym16502,args16503){
var this__16525 = this;
return this_sym16502.call.apply(this_sym16502,[this_sym16502].concat(args16503.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16526 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__16527 = this;
var this__16528 = this;
return cljs.core.pr_str.call(null,this__16528);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16529 = this;
if((this__16529.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__16492_SHARP_){
return cljs.core.vector.call(null,p1__16492_SHARP_,(this__16529.strobj[p1__16492_SHARP_]));
}),this__16529.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16530 = this;
return this__16530.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16531 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16532 = this;
return (new cljs.core.ObjMap(meta,this__16532.keys,this__16532.strobj,this__16532.update_count,this__16532.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16533 = this;
return this__16533.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16534 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__16534.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16535 = this;
if((function (){var and__3822__auto____16536 = goog.isString(k);
if(and__3822__auto____16536)
{return !((cljs.core.scan_array.call(null,1,k,this__16535.keys) == null));
} else
{return and__3822__auto____16536;
}
})())
{var new_keys__16537 = this__16535.keys.slice();
var new_strobj__16538 = cljs.core.obj_clone.call(null,this__16535.strobj,this__16535.keys);
new_keys__16537.splice(cljs.core.scan_array.call(null,1,k,new_keys__16537),1);
cljs.core.js_delete.call(null,new_strobj__16538,k);
return (new cljs.core.ObjMap(this__16535.meta,new_keys__16537,new_strobj__16538,(this__16535.update_count + 1),null));
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
var this__16543 = this;
var h__2151__auto____16544 = this__16543.__hash;
if(!((h__2151__auto____16544 == null)))
{return h__2151__auto____16544;
} else
{var h__2151__auto____16545 = cljs.core.hash_imap.call(null,coll);
this__16543.__hash = h__2151__auto____16545;
return h__2151__auto____16545;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16546 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16547 = this;
var bucket__16548 = (this__16547.hashobj[cljs.core.hash.call(null,k)]);
var i__16549 = (cljs.core.truth_(bucket__16548)?cljs.core.scan_array.call(null,2,k,bucket__16548):null);
if(cljs.core.truth_(i__16549))
{return (bucket__16548[(i__16549 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16550 = this;
var h__16551 = cljs.core.hash.call(null,k);
var bucket__16552 = (this__16550.hashobj[h__16551]);
if(cljs.core.truth_(bucket__16552))
{var new_bucket__16553 = bucket__16552.slice();
var new_hashobj__16554 = goog.object.clone(this__16550.hashobj);
(new_hashobj__16554[h__16551] = new_bucket__16553);
var temp__3971__auto____16555 = cljs.core.scan_array.call(null,2,k,new_bucket__16553);
if(cljs.core.truth_(temp__3971__auto____16555))
{var i__16556 = temp__3971__auto____16555;
(new_bucket__16553[(i__16556 + 1)] = v);
return (new cljs.core.HashMap(this__16550.meta,this__16550.count,new_hashobj__16554,null));
} else
{new_bucket__16553.push(k,v);
return (new cljs.core.HashMap(this__16550.meta,(this__16550.count + 1),new_hashobj__16554,null));
}
} else
{var new_hashobj__16557 = goog.object.clone(this__16550.hashobj);
(new_hashobj__16557[h__16551] = [k,v]);
return (new cljs.core.HashMap(this__16550.meta,(this__16550.count + 1),new_hashobj__16557,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16558 = this;
var bucket__16559 = (this__16558.hashobj[cljs.core.hash.call(null,k)]);
var i__16560 = (cljs.core.truth_(bucket__16559)?cljs.core.scan_array.call(null,2,k,bucket__16559):null);
if(cljs.core.truth_(i__16560))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__16585 = null;
var G__16585__2 = (function (this_sym16561,k){
var this__16563 = this;
var this_sym16561__16564 = this;
var coll__16565 = this_sym16561__16564;
return coll__16565.cljs$core$ILookup$_lookup$arity$2(coll__16565,k);
});
var G__16585__3 = (function (this_sym16562,k,not_found){
var this__16563 = this;
var this_sym16562__16566 = this;
var coll__16567 = this_sym16562__16566;
return coll__16567.cljs$core$ILookup$_lookup$arity$3(coll__16567,k,not_found);
});
G__16585 = function(this_sym16562,k,not_found){
switch(arguments.length){
case 2:
return G__16585__2.call(this,this_sym16562,k);
case 3:
return G__16585__3.call(this,this_sym16562,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16585;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym16541,args16542){
var this__16568 = this;
return this_sym16541.call.apply(this_sym16541,[this_sym16541].concat(args16542.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16569 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__16570 = this;
var this__16571 = this;
return cljs.core.pr_str.call(null,this__16571);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16572 = this;
if((this__16572.count > 0))
{var hashes__16573 = cljs.core.js_keys.call(null,this__16572.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__16540_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__16572.hashobj[p1__16540_SHARP_])));
}),hashes__16573);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16574 = this;
return this__16574.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16575 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16576 = this;
return (new cljs.core.HashMap(meta,this__16576.count,this__16576.hashobj,this__16576.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16577 = this;
return this__16577.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16578 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__16578.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16579 = this;
var h__16580 = cljs.core.hash.call(null,k);
var bucket__16581 = (this__16579.hashobj[h__16580]);
var i__16582 = (cljs.core.truth_(bucket__16581)?cljs.core.scan_array.call(null,2,k,bucket__16581):null);
if(cljs.core.not.call(null,i__16582))
{return coll;
} else
{var new_hashobj__16583 = goog.object.clone(this__16579.hashobj);
if((3 > bucket__16581.length))
{cljs.core.js_delete.call(null,new_hashobj__16583,h__16580);
} else
{var new_bucket__16584 = bucket__16581.slice();
new_bucket__16584.splice(i__16582,2);
(new_hashobj__16583[h__16580] = new_bucket__16584);
}
return (new cljs.core.HashMap(this__16579.meta,(this__16579.count - 1),new_hashobj__16583,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__16586 = ks.length;
var i__16587 = 0;
var out__16588 = cljs.core.HashMap.EMPTY;
while(true){
if((i__16587 < len__16586))
{{
var G__16589 = (i__16587 + 1);
var G__16590 = cljs.core.assoc.call(null,out__16588,(ks[i__16587]),(vs[i__16587]));
i__16587 = G__16589;
out__16588 = G__16590;
continue;
}
} else
{return out__16588;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__16594 = m.arr;
var len__16595 = arr__16594.length;
var i__16596 = 0;
while(true){
if((len__16595 <= i__16596))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__16594[i__16596]),k))
{return i__16596;
} else
{if("\uFDD0'else")
{{
var G__16597 = (i__16596 + 2);
i__16596 = G__16597;
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
var this__16600 = this;
return (new cljs.core.TransientArrayMap({},this__16600.arr.length,this__16600.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16601 = this;
var h__2151__auto____16602 = this__16601.__hash;
if(!((h__2151__auto____16602 == null)))
{return h__2151__auto____16602;
} else
{var h__2151__auto____16603 = cljs.core.hash_imap.call(null,coll);
this__16601.__hash = h__2151__auto____16603;
return h__2151__auto____16603;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16604 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16605 = this;
var idx__16606 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16606 === -1))
{return not_found;
} else
{return (this__16605.arr[(idx__16606 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16607 = this;
var idx__16608 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16608 === -1))
{if((this__16607.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__16607.meta,(this__16607.cnt + 1),(function (){var G__16609__16610 = this__16607.arr.slice();
G__16609__16610.push(k);
G__16609__16610.push(v);
return G__16609__16610;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__16607.arr[(idx__16608 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__16607.meta,this__16607.cnt,(function (){var G__16611__16612 = this__16607.arr.slice();
(G__16611__16612[(idx__16608 + 1)] = v);
return G__16611__16612;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16613 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__16645 = null;
var G__16645__2 = (function (this_sym16614,k){
var this__16616 = this;
var this_sym16614__16617 = this;
var coll__16618 = this_sym16614__16617;
return coll__16618.cljs$core$ILookup$_lookup$arity$2(coll__16618,k);
});
var G__16645__3 = (function (this_sym16615,k,not_found){
var this__16616 = this;
var this_sym16615__16619 = this;
var coll__16620 = this_sym16615__16619;
return coll__16620.cljs$core$ILookup$_lookup$arity$3(coll__16620,k,not_found);
});
G__16645 = function(this_sym16615,k,not_found){
switch(arguments.length){
case 2:
return G__16645__2.call(this,this_sym16615,k);
case 3:
return G__16645__3.call(this,this_sym16615,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16645;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym16598,args16599){
var this__16621 = this;
return this_sym16598.call.apply(this_sym16598,[this_sym16598].concat(args16599.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__16622 = this;
var len__16623 = this__16622.arr.length;
var i__16624 = 0;
var init__16625 = init;
while(true){
if((i__16624 < len__16623))
{var init__16626 = f.call(null,init__16625,(this__16622.arr[i__16624]),(this__16622.arr[(i__16624 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__16626))
{return cljs.core.deref.call(null,init__16626);
} else
{{
var G__16646 = (i__16624 + 2);
var G__16647 = init__16626;
i__16624 = G__16646;
init__16625 = G__16647;
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
var this__16627 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__16628 = this;
var this__16629 = this;
return cljs.core.pr_str.call(null,this__16629);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16630 = this;
if((this__16630.cnt > 0))
{var len__16631 = this__16630.arr.length;
var array_map_seq__16632 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__16631))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__16630.arr[i]),(this__16630.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__16632.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16633 = this;
return this__16633.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16634 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16635 = this;
return (new cljs.core.PersistentArrayMap(meta,this__16635.cnt,this__16635.arr,this__16635.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16636 = this;
return this__16636.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16637 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16637.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16638 = this;
var idx__16639 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16639 >= 0))
{var len__16640 = this__16638.arr.length;
var new_len__16641 = (len__16640 - 2);
if((new_len__16641 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__16642 = cljs.core.make_array.call(null,new_len__16641);
var s__16643 = 0;
var d__16644 = 0;
while(true){
if((s__16643 >= len__16640))
{return (new cljs.core.PersistentArrayMap(this__16638.meta,(this__16638.cnt - 1),new_arr__16642,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__16638.arr[s__16643])))
{{
var G__16648 = (s__16643 + 2);
var G__16649 = d__16644;
s__16643 = G__16648;
d__16644 = G__16649;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__16642[d__16644] = (this__16638.arr[s__16643]));
(new_arr__16642[(d__16644 + 1)] = (this__16638.arr[(s__16643 + 1)]));
{
var G__16650 = (s__16643 + 2);
var G__16651 = (d__16644 + 2);
s__16643 = G__16650;
d__16644 = G__16651;
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
var len__16652 = cljs.core.count.call(null,ks);
var i__16653 = 0;
var out__16654 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__16653 < len__16652))
{{
var G__16655 = (i__16653 + 1);
var G__16656 = cljs.core.assoc_BANG_.call(null,out__16654,(ks[i__16653]),(vs[i__16653]));
i__16653 = G__16655;
out__16654 = G__16656;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16654);
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
var this__16657 = this;
if(cljs.core.truth_(this__16657.editable_QMARK_))
{var idx__16658 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16658 >= 0))
{(this__16657.arr[idx__16658] = (this__16657.arr[(this__16657.len - 2)]));
(this__16657.arr[(idx__16658 + 1)] = (this__16657.arr[(this__16657.len - 1)]));
var G__16659__16660 = this__16657.arr;
G__16659__16660.pop();
G__16659__16660.pop();
G__16659__16660;
this__16657.len = (this__16657.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__16661 = this;
if(cljs.core.truth_(this__16661.editable_QMARK_))
{var idx__16662 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16662 === -1))
{if(((this__16661.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__16661.len = (this__16661.len + 2);
this__16661.arr.push(key);
this__16661.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__16661.len,this__16661.arr),key,val);
}
} else
{if((val === (this__16661.arr[(idx__16662 + 1)])))
{return tcoll;
} else
{(this__16661.arr[(idx__16662 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16663 = this;
if(cljs.core.truth_(this__16663.editable_QMARK_))
{if((function (){var G__16664__16665 = o;
if(G__16664__16665)
{if((function (){var or__3824__auto____16666 = (G__16664__16665.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____16666)
{return or__3824__auto____16666;
} else
{return G__16664__16665.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__16664__16665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16664__16665);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16664__16665);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__16667 = cljs.core.seq.call(null,o);
var tcoll__16668 = tcoll;
while(true){
var temp__3971__auto____16669 = cljs.core.first.call(null,es__16667);
if(cljs.core.truth_(temp__3971__auto____16669))
{var e__16670 = temp__3971__auto____16669;
{
var G__16676 = cljs.core.next.call(null,es__16667);
var G__16677 = tcoll__16668.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__16668,cljs.core.key.call(null,e__16670),cljs.core.val.call(null,e__16670));
es__16667 = G__16676;
tcoll__16668 = G__16677;
continue;
}
} else
{return tcoll__16668;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16671 = this;
if(cljs.core.truth_(this__16671.editable_QMARK_))
{this__16671.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__16671.len,2),this__16671.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__16672 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__16673 = this;
if(cljs.core.truth_(this__16673.editable_QMARK_))
{var idx__16674 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__16674 === -1))
{return not_found;
} else
{return (this__16673.arr[(idx__16674 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__16675 = this;
if(cljs.core.truth_(this__16675.editable_QMARK_))
{return cljs.core.quot.call(null,this__16675.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__16680 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__16681 = 0;
while(true){
if((i__16681 < len))
{{
var G__16682 = cljs.core.assoc_BANG_.call(null,out__16680,(arr[i__16681]),(arr[(i__16681 + 1)]));
var G__16683 = (i__16681 + 2);
out__16680 = G__16682;
i__16681 = G__16683;
continue;
}
} else
{return out__16680;
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
var G__16688__16689 = arr.slice();
(G__16688__16689[i] = a);
return G__16688__16689;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__16690__16691 = arr.slice();
(G__16690__16691[i] = a);
(G__16690__16691[j] = b);
return G__16690__16691;
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
var new_arr__16693 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__16693,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__16693,(2 * i),(new_arr__16693.length - (2 * i)));
return new_arr__16693;
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
var editable__16696 = inode.ensure_editable(edit);
(editable__16696.arr[i] = a);
return editable__16696;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__16697 = inode.ensure_editable(edit);
(editable__16697.arr[i] = a);
(editable__16697.arr[j] = b);
return editable__16697;
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
var len__16704 = arr.length;
var i__16705 = 0;
var init__16706 = init;
while(true){
if((i__16705 < len__16704))
{var init__16709 = (function (){var k__16707 = (arr[i__16705]);
if(!((k__16707 == null)))
{return f.call(null,init__16706,k__16707,(arr[(i__16705 + 1)]));
} else
{var node__16708 = (arr[(i__16705 + 1)]);
if(!((node__16708 == null)))
{return node__16708.kv_reduce(f,init__16706);
} else
{return init__16706;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16709))
{return cljs.core.deref.call(null,init__16709);
} else
{{
var G__16710 = (i__16705 + 2);
var G__16711 = init__16709;
i__16705 = G__16710;
init__16706 = G__16711;
continue;
}
}
} else
{return init__16706;
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
var this__16712 = this;
var inode__16713 = this;
if((this__16712.bitmap === bit))
{return null;
} else
{var editable__16714 = inode__16713.ensure_editable(e);
var earr__16715 = editable__16714.arr;
var len__16716 = earr__16715.length;
editable__16714.bitmap = (bit ^ editable__16714.bitmap);
cljs.core.array_copy.call(null,earr__16715,(2 * (i + 1)),earr__16715,(2 * i),(len__16716 - (2 * (i + 1))));
(earr__16715[(len__16716 - 2)] = null);
(earr__16715[(len__16716 - 1)] = null);
return editable__16714;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__16717 = this;
var inode__16718 = this;
var bit__16719 = (1 << ((hash >>> shift) & 0x01f));
var idx__16720 = cljs.core.bitmap_indexed_node_index.call(null,this__16717.bitmap,bit__16719);
if(((this__16717.bitmap & bit__16719) === 0))
{var n__16721 = cljs.core.bit_count.call(null,this__16717.bitmap);
if(((2 * n__16721) < this__16717.arr.length))
{var editable__16722 = inode__16718.ensure_editable(edit);
var earr__16723 = editable__16722.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__16723,(2 * idx__16720),earr__16723,(2 * (idx__16720 + 1)),(2 * (n__16721 - idx__16720)));
(earr__16723[(2 * idx__16720)] = key);
(earr__16723[((2 * idx__16720) + 1)] = val);
editable__16722.bitmap = (editable__16722.bitmap | bit__16719);
return editable__16722;
} else
{if((n__16721 >= 16))
{var nodes__16724 = cljs.core.make_array.call(null,32);
var jdx__16725 = ((hash >>> shift) & 0x01f);
(nodes__16724[jdx__16725] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16726 = 0;
var j__16727 = 0;
while(true){
if((i__16726 < 32))
{if((((this__16717.bitmap >>> i__16726) & 1) === 0))
{{
var G__16780 = (i__16726 + 1);
var G__16781 = j__16727;
i__16726 = G__16780;
j__16727 = G__16781;
continue;
}
} else
{(nodes__16724[i__16726] = ((!(((this__16717.arr[j__16727]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__16717.arr[j__16727])),(this__16717.arr[j__16727]),(this__16717.arr[(j__16727 + 1)]),added_leaf_QMARK_):(this__16717.arr[(j__16727 + 1)])));
{
var G__16782 = (i__16726 + 1);
var G__16783 = (j__16727 + 2);
i__16726 = G__16782;
j__16727 = G__16783;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__16721 + 1),nodes__16724));
} else
{if("\uFDD0'else")
{var new_arr__16728 = cljs.core.make_array.call(null,(2 * (n__16721 + 4)));
cljs.core.array_copy.call(null,this__16717.arr,0,new_arr__16728,0,(2 * idx__16720));
(new_arr__16728[(2 * idx__16720)] = key);
(new_arr__16728[((2 * idx__16720) + 1)] = val);
cljs.core.array_copy.call(null,this__16717.arr,(2 * idx__16720),new_arr__16728,(2 * (idx__16720 + 1)),(2 * (n__16721 - idx__16720)));
added_leaf_QMARK_.val = true;
var editable__16729 = inode__16718.ensure_editable(edit);
editable__16729.arr = new_arr__16728;
editable__16729.bitmap = (editable__16729.bitmap | bit__16719);
return editable__16729;
} else
{return null;
}
}
}
} else
{var key_or_nil__16730 = (this__16717.arr[(2 * idx__16720)]);
var val_or_node__16731 = (this__16717.arr[((2 * idx__16720) + 1)]);
if((key_or_nil__16730 == null))
{var n__16732 = val_or_node__16731.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16732 === val_or_node__16731))
{return inode__16718;
} else
{return cljs.core.edit_and_set.call(null,inode__16718,edit,((2 * idx__16720) + 1),n__16732);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16730))
{if((val === val_or_node__16731))
{return inode__16718;
} else
{return cljs.core.edit_and_set.call(null,inode__16718,edit,((2 * idx__16720) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__16718,edit,(2 * idx__16720),null,((2 * idx__16720) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__16730,val_or_node__16731,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__16733 = this;
var inode__16734 = this;
return cljs.core.create_inode_seq.call(null,this__16733.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16735 = this;
var inode__16736 = this;
var bit__16737 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16735.bitmap & bit__16737) === 0))
{return inode__16736;
} else
{var idx__16738 = cljs.core.bitmap_indexed_node_index.call(null,this__16735.bitmap,bit__16737);
var key_or_nil__16739 = (this__16735.arr[(2 * idx__16738)]);
var val_or_node__16740 = (this__16735.arr[((2 * idx__16738) + 1)]);
if((key_or_nil__16739 == null))
{var n__16741 = val_or_node__16740.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16741 === val_or_node__16740))
{return inode__16736;
} else
{if(!((n__16741 == null)))
{return cljs.core.edit_and_set.call(null,inode__16736,edit,((2 * idx__16738) + 1),n__16741);
} else
{if((this__16735.bitmap === bit__16737))
{return null;
} else
{if("\uFDD0'else")
{return inode__16736.edit_and_remove_pair(edit,bit__16737,idx__16738);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16739))
{(removed_leaf_QMARK_[0] = true);
return inode__16736.edit_and_remove_pair(edit,bit__16737,idx__16738);
} else
{if("\uFDD0'else")
{return inode__16736;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__16742 = this;
var inode__16743 = this;
if((e === this__16742.edit))
{return inode__16743;
} else
{var n__16744 = cljs.core.bit_count.call(null,this__16742.bitmap);
var new_arr__16745 = cljs.core.make_array.call(null,(((n__16744 < 0))?4:(2 * (n__16744 + 1))));
cljs.core.array_copy.call(null,this__16742.arr,0,new_arr__16745,0,(2 * n__16744));
return (new cljs.core.BitmapIndexedNode(e,this__16742.bitmap,new_arr__16745));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__16746 = this;
var inode__16747 = this;
return cljs.core.inode_kv_reduce.call(null,this__16746.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16748 = this;
var inode__16749 = this;
var bit__16750 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16748.bitmap & bit__16750) === 0))
{return not_found;
} else
{var idx__16751 = cljs.core.bitmap_indexed_node_index.call(null,this__16748.bitmap,bit__16750);
var key_or_nil__16752 = (this__16748.arr[(2 * idx__16751)]);
var val_or_node__16753 = (this__16748.arr[((2 * idx__16751) + 1)]);
if((key_or_nil__16752 == null))
{return val_or_node__16753.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16752))
{return cljs.core.PersistentVector.fromArray([key_or_nil__16752,val_or_node__16753], true);
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
var this__16754 = this;
var inode__16755 = this;
var bit__16756 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16754.bitmap & bit__16756) === 0))
{return inode__16755;
} else
{var idx__16757 = cljs.core.bitmap_indexed_node_index.call(null,this__16754.bitmap,bit__16756);
var key_or_nil__16758 = (this__16754.arr[(2 * idx__16757)]);
var val_or_node__16759 = (this__16754.arr[((2 * idx__16757) + 1)]);
if((key_or_nil__16758 == null))
{var n__16760 = val_or_node__16759.inode_without((shift + 5),hash,key);
if((n__16760 === val_or_node__16759))
{return inode__16755;
} else
{if(!((n__16760 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__16754.bitmap,cljs.core.clone_and_set.call(null,this__16754.arr,((2 * idx__16757) + 1),n__16760)));
} else
{if((this__16754.bitmap === bit__16756))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__16754.bitmap ^ bit__16756),cljs.core.remove_pair.call(null,this__16754.arr,idx__16757)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16758))
{return (new cljs.core.BitmapIndexedNode(null,(this__16754.bitmap ^ bit__16756),cljs.core.remove_pair.call(null,this__16754.arr,idx__16757)));
} else
{if("\uFDD0'else")
{return inode__16755;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16761 = this;
var inode__16762 = this;
var bit__16763 = (1 << ((hash >>> shift) & 0x01f));
var idx__16764 = cljs.core.bitmap_indexed_node_index.call(null,this__16761.bitmap,bit__16763);
if(((this__16761.bitmap & bit__16763) === 0))
{var n__16765 = cljs.core.bit_count.call(null,this__16761.bitmap);
if((n__16765 >= 16))
{var nodes__16766 = cljs.core.make_array.call(null,32);
var jdx__16767 = ((hash >>> shift) & 0x01f);
(nodes__16766[jdx__16767] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16768 = 0;
var j__16769 = 0;
while(true){
if((i__16768 < 32))
{if((((this__16761.bitmap >>> i__16768) & 1) === 0))
{{
var G__16784 = (i__16768 + 1);
var G__16785 = j__16769;
i__16768 = G__16784;
j__16769 = G__16785;
continue;
}
} else
{(nodes__16766[i__16768] = ((!(((this__16761.arr[j__16769]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__16761.arr[j__16769])),(this__16761.arr[j__16769]),(this__16761.arr[(j__16769 + 1)]),added_leaf_QMARK_):(this__16761.arr[(j__16769 + 1)])));
{
var G__16786 = (i__16768 + 1);
var G__16787 = (j__16769 + 2);
i__16768 = G__16786;
j__16769 = G__16787;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__16765 + 1),nodes__16766));
} else
{var new_arr__16770 = cljs.core.make_array.call(null,(2 * (n__16765 + 1)));
cljs.core.array_copy.call(null,this__16761.arr,0,new_arr__16770,0,(2 * idx__16764));
(new_arr__16770[(2 * idx__16764)] = key);
(new_arr__16770[((2 * idx__16764) + 1)] = val);
cljs.core.array_copy.call(null,this__16761.arr,(2 * idx__16764),new_arr__16770,(2 * (idx__16764 + 1)),(2 * (n__16765 - idx__16764)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__16761.bitmap | bit__16763),new_arr__16770));
}
} else
{var key_or_nil__16771 = (this__16761.arr[(2 * idx__16764)]);
var val_or_node__16772 = (this__16761.arr[((2 * idx__16764) + 1)]);
if((key_or_nil__16771 == null))
{var n__16773 = val_or_node__16772.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16773 === val_or_node__16772))
{return inode__16762;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16761.bitmap,cljs.core.clone_and_set.call(null,this__16761.arr,((2 * idx__16764) + 1),n__16773)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16771))
{if((val === val_or_node__16772))
{return inode__16762;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16761.bitmap,cljs.core.clone_and_set.call(null,this__16761.arr,((2 * idx__16764) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__16761.bitmap,cljs.core.clone_and_set.call(null,this__16761.arr,(2 * idx__16764),null,((2 * idx__16764) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__16771,val_or_node__16772,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16774 = this;
var inode__16775 = this;
var bit__16776 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16774.bitmap & bit__16776) === 0))
{return not_found;
} else
{var idx__16777 = cljs.core.bitmap_indexed_node_index.call(null,this__16774.bitmap,bit__16776);
var key_or_nil__16778 = (this__16774.arr[(2 * idx__16777)]);
var val_or_node__16779 = (this__16774.arr[((2 * idx__16777) + 1)]);
if((key_or_nil__16778 == null))
{return val_or_node__16779.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16778))
{return val_or_node__16779;
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
var arr__16795 = array_node.arr;
var len__16796 = (2 * (array_node.cnt - 1));
var new_arr__16797 = cljs.core.make_array.call(null,len__16796);
var i__16798 = 0;
var j__16799 = 1;
var bitmap__16800 = 0;
while(true){
if((i__16798 < len__16796))
{if((function (){var and__3822__auto____16801 = !((i__16798 === idx));
if(and__3822__auto____16801)
{return !(((arr__16795[i__16798]) == null));
} else
{return and__3822__auto____16801;
}
})())
{(new_arr__16797[j__16799] = (arr__16795[i__16798]));
{
var G__16802 = (i__16798 + 1);
var G__16803 = (j__16799 + 2);
var G__16804 = (bitmap__16800 | (1 << i__16798));
i__16798 = G__16802;
j__16799 = G__16803;
bitmap__16800 = G__16804;
continue;
}
} else
{{
var G__16805 = (i__16798 + 1);
var G__16806 = j__16799;
var G__16807 = bitmap__16800;
i__16798 = G__16805;
j__16799 = G__16806;
bitmap__16800 = G__16807;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__16800,new_arr__16797));
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
var this__16808 = this;
var inode__16809 = this;
var idx__16810 = ((hash >>> shift) & 0x01f);
var node__16811 = (this__16808.arr[idx__16810]);
if((node__16811 == null))
{var editable__16812 = cljs.core.edit_and_set.call(null,inode__16809,edit,idx__16810,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__16812.cnt = (editable__16812.cnt + 1);
return editable__16812;
} else
{var n__16813 = node__16811.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16813 === node__16811))
{return inode__16809;
} else
{return cljs.core.edit_and_set.call(null,inode__16809,edit,idx__16810,n__16813);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__16814 = this;
var inode__16815 = this;
return cljs.core.create_array_node_seq.call(null,this__16814.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16816 = this;
var inode__16817 = this;
var idx__16818 = ((hash >>> shift) & 0x01f);
var node__16819 = (this__16816.arr[idx__16818]);
if((node__16819 == null))
{return inode__16817;
} else
{var n__16820 = node__16819.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16820 === node__16819))
{return inode__16817;
} else
{if((n__16820 == null))
{if((this__16816.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16817,edit,idx__16818);
} else
{var editable__16821 = cljs.core.edit_and_set.call(null,inode__16817,edit,idx__16818,n__16820);
editable__16821.cnt = (editable__16821.cnt - 1);
return editable__16821;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__16817,edit,idx__16818,n__16820);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__16822 = this;
var inode__16823 = this;
if((e === this__16822.edit))
{return inode__16823;
} else
{return (new cljs.core.ArrayNode(e,this__16822.cnt,this__16822.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__16824 = this;
var inode__16825 = this;
var len__16826 = this__16824.arr.length;
var i__16827 = 0;
var init__16828 = init;
while(true){
if((i__16827 < len__16826))
{var node__16829 = (this__16824.arr[i__16827]);
if(!((node__16829 == null)))
{var init__16830 = node__16829.kv_reduce(f,init__16828);
if(cljs.core.reduced_QMARK_.call(null,init__16830))
{return cljs.core.deref.call(null,init__16830);
} else
{{
var G__16849 = (i__16827 + 1);
var G__16850 = init__16830;
i__16827 = G__16849;
init__16828 = G__16850;
continue;
}
}
} else
{return null;
}
} else
{return init__16828;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16831 = this;
var inode__16832 = this;
var idx__16833 = ((hash >>> shift) & 0x01f);
var node__16834 = (this__16831.arr[idx__16833]);
if(!((node__16834 == null)))
{return node__16834.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__16835 = this;
var inode__16836 = this;
var idx__16837 = ((hash >>> shift) & 0x01f);
var node__16838 = (this__16835.arr[idx__16837]);
if(!((node__16838 == null)))
{var n__16839 = node__16838.inode_without((shift + 5),hash,key);
if((n__16839 === node__16838))
{return inode__16836;
} else
{if((n__16839 == null))
{if((this__16835.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16836,null,idx__16837);
} else
{return (new cljs.core.ArrayNode(null,(this__16835.cnt - 1),cljs.core.clone_and_set.call(null,this__16835.arr,idx__16837,n__16839)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__16835.cnt,cljs.core.clone_and_set.call(null,this__16835.arr,idx__16837,n__16839)));
} else
{return null;
}
}
}
} else
{return inode__16836;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16840 = this;
var inode__16841 = this;
var idx__16842 = ((hash >>> shift) & 0x01f);
var node__16843 = (this__16840.arr[idx__16842]);
if((node__16843 == null))
{return (new cljs.core.ArrayNode(null,(this__16840.cnt + 1),cljs.core.clone_and_set.call(null,this__16840.arr,idx__16842,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__16844 = node__16843.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16844 === node__16843))
{return inode__16841;
} else
{return (new cljs.core.ArrayNode(null,this__16840.cnt,cljs.core.clone_and_set.call(null,this__16840.arr,idx__16842,n__16844)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16845 = this;
var inode__16846 = this;
var idx__16847 = ((hash >>> shift) & 0x01f);
var node__16848 = (this__16845.arr[idx__16847]);
if(!((node__16848 == null)))
{return node__16848.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__16853 = (2 * cnt);
var i__16854 = 0;
while(true){
if((i__16854 < lim__16853))
{if(cljs.core.key_test.call(null,key,(arr[i__16854])))
{return i__16854;
} else
{{
var G__16855 = (i__16854 + 2);
i__16854 = G__16855;
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
var this__16856 = this;
var inode__16857 = this;
if((hash === this__16856.collision_hash))
{var idx__16858 = cljs.core.hash_collision_node_find_index.call(null,this__16856.arr,this__16856.cnt,key);
if((idx__16858 === -1))
{if((this__16856.arr.length > (2 * this__16856.cnt)))
{var editable__16859 = cljs.core.edit_and_set.call(null,inode__16857,edit,(2 * this__16856.cnt),key,((2 * this__16856.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__16859.cnt = (editable__16859.cnt + 1);
return editable__16859;
} else
{var len__16860 = this__16856.arr.length;
var new_arr__16861 = cljs.core.make_array.call(null,(len__16860 + 2));
cljs.core.array_copy.call(null,this__16856.arr,0,new_arr__16861,0,len__16860);
(new_arr__16861[len__16860] = key);
(new_arr__16861[(len__16860 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__16857.ensure_editable_array(edit,(this__16856.cnt + 1),new_arr__16861);
}
} else
{if(((this__16856.arr[(idx__16858 + 1)]) === val))
{return inode__16857;
} else
{return cljs.core.edit_and_set.call(null,inode__16857,edit,(idx__16858 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__16856.collision_hash >>> shift) & 0x01f)),[null,inode__16857,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__16862 = this;
var inode__16863 = this;
return cljs.core.create_inode_seq.call(null,this__16862.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16864 = this;
var inode__16865 = this;
var idx__16866 = cljs.core.hash_collision_node_find_index.call(null,this__16864.arr,this__16864.cnt,key);
if((idx__16866 === -1))
{return inode__16865;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__16864.cnt === 1))
{return null;
} else
{var editable__16867 = inode__16865.ensure_editable(edit);
var earr__16868 = editable__16867.arr;
(earr__16868[idx__16866] = (earr__16868[((2 * this__16864.cnt) - 2)]));
(earr__16868[(idx__16866 + 1)] = (earr__16868[((2 * this__16864.cnt) - 1)]));
(earr__16868[((2 * this__16864.cnt) - 1)] = null);
(earr__16868[((2 * this__16864.cnt) - 2)] = null);
editable__16867.cnt = (editable__16867.cnt - 1);
return editable__16867;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__16869 = this;
var inode__16870 = this;
if((e === this__16869.edit))
{return inode__16870;
} else
{var new_arr__16871 = cljs.core.make_array.call(null,(2 * (this__16869.cnt + 1)));
cljs.core.array_copy.call(null,this__16869.arr,0,new_arr__16871,0,(2 * this__16869.cnt));
return (new cljs.core.HashCollisionNode(e,this__16869.collision_hash,this__16869.cnt,new_arr__16871));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__16872 = this;
var inode__16873 = this;
return cljs.core.inode_kv_reduce.call(null,this__16872.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16874 = this;
var inode__16875 = this;
var idx__16876 = cljs.core.hash_collision_node_find_index.call(null,this__16874.arr,this__16874.cnt,key);
if((idx__16876 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__16874.arr[idx__16876])))
{return cljs.core.PersistentVector.fromArray([(this__16874.arr[idx__16876]),(this__16874.arr[(idx__16876 + 1)])], true);
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
var this__16877 = this;
var inode__16878 = this;
var idx__16879 = cljs.core.hash_collision_node_find_index.call(null,this__16877.arr,this__16877.cnt,key);
if((idx__16879 === -1))
{return inode__16878;
} else
{if((this__16877.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__16877.collision_hash,(this__16877.cnt - 1),cljs.core.remove_pair.call(null,this__16877.arr,cljs.core.quot.call(null,idx__16879,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16880 = this;
var inode__16881 = this;
if((hash === this__16880.collision_hash))
{var idx__16882 = cljs.core.hash_collision_node_find_index.call(null,this__16880.arr,this__16880.cnt,key);
if((idx__16882 === -1))
{var len__16883 = this__16880.arr.length;
var new_arr__16884 = cljs.core.make_array.call(null,(len__16883 + 2));
cljs.core.array_copy.call(null,this__16880.arr,0,new_arr__16884,0,len__16883);
(new_arr__16884[len__16883] = key);
(new_arr__16884[(len__16883 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__16880.collision_hash,(this__16880.cnt + 1),new_arr__16884));
} else
{if(cljs.core._EQ_.call(null,(this__16880.arr[idx__16882]),val))
{return inode__16881;
} else
{return (new cljs.core.HashCollisionNode(null,this__16880.collision_hash,this__16880.cnt,cljs.core.clone_and_set.call(null,this__16880.arr,(idx__16882 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__16880.collision_hash >>> shift) & 0x01f)),[null,inode__16881])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16885 = this;
var inode__16886 = this;
var idx__16887 = cljs.core.hash_collision_node_find_index.call(null,this__16885.arr,this__16885.cnt,key);
if((idx__16887 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__16885.arr[idx__16887])))
{return (this__16885.arr[(idx__16887 + 1)]);
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
var this__16888 = this;
var inode__16889 = this;
if((e === this__16888.edit))
{this__16888.arr = array;
this__16888.cnt = count;
return inode__16889;
} else
{return (new cljs.core.HashCollisionNode(this__16888.edit,this__16888.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__16894 = cljs.core.hash.call(null,key1);
if((key1hash__16894 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__16894,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___16895 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__16894,key1,val1,added_leaf_QMARK___16895).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___16895);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__16896 = cljs.core.hash.call(null,key1);
if((key1hash__16896 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__16896,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___16897 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__16896,key1,val1,added_leaf_QMARK___16897).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___16897);
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
var this__16898 = this;
var h__2151__auto____16899 = this__16898.__hash;
if(!((h__2151__auto____16899 == null)))
{return h__2151__auto____16899;
} else
{var h__2151__auto____16900 = cljs.core.hash_coll.call(null,coll);
this__16898.__hash = h__2151__auto____16900;
return h__2151__auto____16900;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16901 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__16902 = this;
var this__16903 = this;
return cljs.core.pr_str.call(null,this__16903);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__16904 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16905 = this;
if((this__16905.s == null))
{return cljs.core.PersistentVector.fromArray([(this__16905.nodes[this__16905.i]),(this__16905.nodes[(this__16905.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__16905.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16906 = this;
if((this__16906.s == null))
{return cljs.core.create_inode_seq.call(null,this__16906.nodes,(this__16906.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__16906.nodes,this__16906.i,cljs.core.next.call(null,this__16906.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16908 = this;
return (new cljs.core.NodeSeq(meta,this__16908.nodes,this__16908.i,this__16908.s,this__16908.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16909 = this;
return this__16909.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16910 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16910.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__16917 = nodes.length;
var j__16918 = i;
while(true){
if((j__16918 < len__16917))
{if(!(((nodes[j__16918]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__16918,null,null));
} else
{var temp__3971__auto____16919 = (nodes[(j__16918 + 1)]);
if(cljs.core.truth_(temp__3971__auto____16919))
{var node__16920 = temp__3971__auto____16919;
var temp__3971__auto____16921 = node__16920.inode_seq();
if(cljs.core.truth_(temp__3971__auto____16921))
{var node_seq__16922 = temp__3971__auto____16921;
return (new cljs.core.NodeSeq(null,nodes,(j__16918 + 2),node_seq__16922,null));
} else
{{
var G__16923 = (j__16918 + 2);
j__16918 = G__16923;
continue;
}
}
} else
{{
var G__16924 = (j__16918 + 2);
j__16918 = G__16924;
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
var this__16925 = this;
var h__2151__auto____16926 = this__16925.__hash;
if(!((h__2151__auto____16926 == null)))
{return h__2151__auto____16926;
} else
{var h__2151__auto____16927 = cljs.core.hash_coll.call(null,coll);
this__16925.__hash = h__2151__auto____16927;
return h__2151__auto____16927;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16928 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__16929 = this;
var this__16930 = this;
return cljs.core.pr_str.call(null,this__16930);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__16931 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16932 = this;
return cljs.core.first.call(null,this__16932.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16933 = this;
return cljs.core.create_array_node_seq.call(null,null,this__16933.nodes,this__16933.i,cljs.core.next.call(null,this__16933.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16934 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16935 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__16935.nodes,this__16935.i,this__16935.s,this__16935.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16936 = this;
return this__16936.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16937 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16937.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__16944 = nodes.length;
var j__16945 = i;
while(true){
if((j__16945 < len__16944))
{var temp__3971__auto____16946 = (nodes[j__16945]);
if(cljs.core.truth_(temp__3971__auto____16946))
{var nj__16947 = temp__3971__auto____16946;
var temp__3971__auto____16948 = nj__16947.inode_seq();
if(cljs.core.truth_(temp__3971__auto____16948))
{var ns__16949 = temp__3971__auto____16948;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__16945 + 1),ns__16949,null));
} else
{{
var G__16950 = (j__16945 + 1);
j__16945 = G__16950;
continue;
}
}
} else
{{
var G__16951 = (j__16945 + 1);
j__16945 = G__16951;
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
var this__16954 = this;
return (new cljs.core.TransientHashMap({},this__16954.root,this__16954.cnt,this__16954.has_nil_QMARK_,this__16954.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16955 = this;
var h__2151__auto____16956 = this__16955.__hash;
if(!((h__2151__auto____16956 == null)))
{return h__2151__auto____16956;
} else
{var h__2151__auto____16957 = cljs.core.hash_imap.call(null,coll);
this__16955.__hash = h__2151__auto____16957;
return h__2151__auto____16957;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16958 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16959 = this;
if((k == null))
{if(this__16959.has_nil_QMARK_)
{return this__16959.nil_val;
} else
{return not_found;
}
} else
{if((this__16959.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__16959.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16960 = this;
if((k == null))
{if((function (){var and__3822__auto____16961 = this__16960.has_nil_QMARK_;
if(and__3822__auto____16961)
{return (v === this__16960.nil_val);
} else
{return and__3822__auto____16961;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__16960.meta,((this__16960.has_nil_QMARK_)?this__16960.cnt:(this__16960.cnt + 1)),this__16960.root,true,v,null));
}
} else
{var added_leaf_QMARK___16962 = (new cljs.core.Box(false));
var new_root__16963 = (((this__16960.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__16960.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___16962);
if((new_root__16963 === this__16960.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__16960.meta,((added_leaf_QMARK___16962.val)?(this__16960.cnt + 1):this__16960.cnt),new_root__16963,this__16960.has_nil_QMARK_,this__16960.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16964 = this;
if((k == null))
{return this__16964.has_nil_QMARK_;
} else
{if((this__16964.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__16964.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__16987 = null;
var G__16987__2 = (function (this_sym16965,k){
var this__16967 = this;
var this_sym16965__16968 = this;
var coll__16969 = this_sym16965__16968;
return coll__16969.cljs$core$ILookup$_lookup$arity$2(coll__16969,k);
});
var G__16987__3 = (function (this_sym16966,k,not_found){
var this__16967 = this;
var this_sym16966__16970 = this;
var coll__16971 = this_sym16966__16970;
return coll__16971.cljs$core$ILookup$_lookup$arity$3(coll__16971,k,not_found);
});
G__16987 = function(this_sym16966,k,not_found){
switch(arguments.length){
case 2:
return G__16987__2.call(this,this_sym16966,k);
case 3:
return G__16987__3.call(this,this_sym16966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16987;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym16952,args16953){
var this__16972 = this;
return this_sym16952.call.apply(this_sym16952,[this_sym16952].concat(args16953.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__16973 = this;
var init__16974 = ((this__16973.has_nil_QMARK_)?f.call(null,init,null,this__16973.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__16974))
{return cljs.core.deref.call(null,init__16974);
} else
{if(!((this__16973.root == null)))
{return this__16973.root.kv_reduce(f,init__16974);
} else
{if("\uFDD0'else")
{return init__16974;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16975 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__16976 = this;
var this__16977 = this;
return cljs.core.pr_str.call(null,this__16977);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16978 = this;
if((this__16978.cnt > 0))
{var s__16979 = ((!((this__16978.root == null)))?this__16978.root.inode_seq():null);
if(this__16978.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__16978.nil_val], true),s__16979);
} else
{return s__16979;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16980 = this;
return this__16980.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16981 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16982 = this;
return (new cljs.core.PersistentHashMap(meta,this__16982.cnt,this__16982.root,this__16982.has_nil_QMARK_,this__16982.nil_val,this__16982.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16983 = this;
return this__16983.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16984 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__16984.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16985 = this;
if((k == null))
{if(this__16985.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__16985.meta,(this__16985.cnt - 1),this__16985.root,false,null,null));
} else
{return coll;
}
} else
{if((this__16985.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__16986 = this__16985.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__16986 === this__16985.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__16985.meta,(this__16985.cnt - 1),new_root__16986,this__16985.has_nil_QMARK_,this__16985.nil_val,null));
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
var len__16988 = ks.length;
var i__16989 = 0;
var out__16990 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__16989 < len__16988))
{{
var G__16991 = (i__16989 + 1);
var G__16992 = cljs.core.assoc_BANG_.call(null,out__16990,(ks[i__16989]),(vs[i__16989]));
i__16989 = G__16991;
out__16990 = G__16992;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16990);
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
var this__16993 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__16994 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__16995 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16996 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__16997 = this;
if((k == null))
{if(this__16997.has_nil_QMARK_)
{return this__16997.nil_val;
} else
{return null;
}
} else
{if((this__16997.root == null))
{return null;
} else
{return this__16997.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__16998 = this;
if((k == null))
{if(this__16998.has_nil_QMARK_)
{return this__16998.nil_val;
} else
{return not_found;
}
} else
{if((this__16998.root == null))
{return not_found;
} else
{return this__16998.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16999 = this;
if(this__16999.edit)
{return this__16999.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__17000 = this;
var tcoll__17001 = this;
if(this__17000.edit)
{if((function (){var G__17002__17003 = o;
if(G__17002__17003)
{if((function (){var or__3824__auto____17004 = (G__17002__17003.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____17004)
{return or__3824__auto____17004;
} else
{return G__17002__17003.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__17002__17003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17002__17003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17002__17003);
}
})())
{return tcoll__17001.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__17005 = cljs.core.seq.call(null,o);
var tcoll__17006 = tcoll__17001;
while(true){
var temp__3971__auto____17007 = cljs.core.first.call(null,es__17005);
if(cljs.core.truth_(temp__3971__auto____17007))
{var e__17008 = temp__3971__auto____17007;
{
var G__17019 = cljs.core.next.call(null,es__17005);
var G__17020 = tcoll__17006.assoc_BANG_(cljs.core.key.call(null,e__17008),cljs.core.val.call(null,e__17008));
es__17005 = G__17019;
tcoll__17006 = G__17020;
continue;
}
} else
{return tcoll__17006;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__17009 = this;
var tcoll__17010 = this;
if(this__17009.edit)
{if((k == null))
{if((this__17009.nil_val === v))
{} else
{this__17009.nil_val = v;
}
if(this__17009.has_nil_QMARK_)
{} else
{this__17009.count = (this__17009.count + 1);
this__17009.has_nil_QMARK_ = true;
}
return tcoll__17010;
} else
{var added_leaf_QMARK___17011 = (new cljs.core.Box(false));
var node__17012 = (((this__17009.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17009.root).inode_assoc_BANG_(this__17009.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17011);
if((node__17012 === this__17009.root))
{} else
{this__17009.root = node__17012;
}
if(added_leaf_QMARK___17011.val)
{this__17009.count = (this__17009.count + 1);
} else
{}
return tcoll__17010;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__17013 = this;
var tcoll__17014 = this;
if(this__17013.edit)
{if((k == null))
{if(this__17013.has_nil_QMARK_)
{this__17013.has_nil_QMARK_ = false;
this__17013.nil_val = null;
this__17013.count = (this__17013.count - 1);
return tcoll__17014;
} else
{return tcoll__17014;
}
} else
{if((this__17013.root == null))
{return tcoll__17014;
} else
{var removed_leaf_QMARK___17015 = (new cljs.core.Box(false));
var node__17016 = this__17013.root.inode_without_BANG_(this__17013.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___17015);
if((node__17016 === this__17013.root))
{} else
{this__17013.root = node__17016;
}
if(cljs.core.truth_((removed_leaf_QMARK___17015[0])))
{this__17013.count = (this__17013.count - 1);
} else
{}
return tcoll__17014;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__17017 = this;
var tcoll__17018 = this;
if(this__17017.edit)
{this__17017.edit = null;
return (new cljs.core.PersistentHashMap(null,this__17017.count,this__17017.root,this__17017.has_nil_QMARK_,this__17017.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__17023 = node;
var stack__17024 = stack;
while(true){
if(!((t__17023 == null)))
{{
var G__17025 = ((ascending_QMARK_)?t__17023.left:t__17023.right);
var G__17026 = cljs.core.conj.call(null,stack__17024,t__17023);
t__17023 = G__17025;
stack__17024 = G__17026;
continue;
}
} else
{return stack__17024;
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
var this__17027 = this;
var h__2151__auto____17028 = this__17027.__hash;
if(!((h__2151__auto____17028 == null)))
{return h__2151__auto____17028;
} else
{var h__2151__auto____17029 = cljs.core.hash_coll.call(null,coll);
this__17027.__hash = h__2151__auto____17029;
return h__2151__auto____17029;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17030 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__17031 = this;
var this__17032 = this;
return cljs.core.pr_str.call(null,this__17032);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17033 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17034 = this;
if((this__17034.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__17034.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__17035 = this;
return cljs.core.peek.call(null,this__17035.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__17036 = this;
var t__17037 = cljs.core.first.call(null,this__17036.stack);
var next_stack__17038 = cljs.core.tree_map_seq_push.call(null,((this__17036.ascending_QMARK_)?t__17037.right:t__17037.left),cljs.core.next.call(null,this__17036.stack),this__17036.ascending_QMARK_);
if(!((next_stack__17038 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__17038,this__17036.ascending_QMARK_,(this__17036.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17039 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17040 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__17040.stack,this__17040.ascending_QMARK_,this__17040.cnt,this__17040.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17041 = this;
return this__17041.meta;
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
{if((function (){var and__3822__auto____17043 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____17043)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____17043;
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
{if((function (){var and__3822__auto____17045 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____17045)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____17045;
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
var init__17049 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__17049))
{return cljs.core.deref.call(null,init__17049);
} else
{var init__17050 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__17049):init__17049);
if(cljs.core.reduced_QMARK_.call(null,init__17050))
{return cljs.core.deref.call(null,init__17050);
} else
{var init__17051 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__17050):init__17050);
if(cljs.core.reduced_QMARK_.call(null,init__17051))
{return cljs.core.deref.call(null,init__17051);
} else
{return init__17051;
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
var this__17054 = this;
var h__2151__auto____17055 = this__17054.__hash;
if(!((h__2151__auto____17055 == null)))
{return h__2151__auto____17055;
} else
{var h__2151__auto____17056 = cljs.core.hash_coll.call(null,coll);
this__17054.__hash = h__2151__auto____17056;
return h__2151__auto____17056;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17057 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17058 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17059 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17059.key,this__17059.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__17107 = null;
var G__17107__2 = (function (this_sym17060,k){
var this__17062 = this;
var this_sym17060__17063 = this;
var node__17064 = this_sym17060__17063;
return node__17064.cljs$core$ILookup$_lookup$arity$2(node__17064,k);
});
var G__17107__3 = (function (this_sym17061,k,not_found){
var this__17062 = this;
var this_sym17061__17065 = this;
var node__17066 = this_sym17061__17065;
return node__17066.cljs$core$ILookup$_lookup$arity$3(node__17066,k,not_found);
});
G__17107 = function(this_sym17061,k,not_found){
switch(arguments.length){
case 2:
return G__17107__2.call(this,this_sym17061,k);
case 3:
return G__17107__3.call(this,this_sym17061,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17107;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym17052,args17053){
var this__17067 = this;
return this_sym17052.call.apply(this_sym17052,[this_sym17052].concat(args17053.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17068 = this;
return cljs.core.PersistentVector.fromArray([this__17068.key,this__17068.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17069 = this;
return this__17069.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17070 = this;
return this__17070.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__17071 = this;
var node__17072 = this;
return ins.balance_right(node__17072);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__17073 = this;
var node__17074 = this;
return (new cljs.core.RedNode(this__17073.key,this__17073.val,this__17073.left,this__17073.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__17075 = this;
var node__17076 = this;
return cljs.core.balance_right_del.call(null,this__17075.key,this__17075.val,this__17075.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__17077 = this;
var node__17078 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__17079 = this;
var node__17080 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17080,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__17081 = this;
var node__17082 = this;
return cljs.core.balance_left_del.call(null,this__17081.key,this__17081.val,del,this__17081.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__17083 = this;
var node__17084 = this;
return ins.balance_left(node__17084);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__17085 = this;
var node__17086 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__17086,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__17108 = null;
var G__17108__0 = (function (){
var this__17087 = this;
var this__17089 = this;
return cljs.core.pr_str.call(null,this__17089);
});
G__17108 = function(){
switch(arguments.length){
case 0:
return G__17108__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17108;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__17090 = this;
var node__17091 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17091,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__17092 = this;
var node__17093 = this;
return node__17093;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17094 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17095 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17096 = this;
return cljs.core.list.call(null,this__17096.key,this__17096.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17097 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17098 = this;
return this__17098.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17099 = this;
return cljs.core.PersistentVector.fromArray([this__17099.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17100 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17100.key,this__17100.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17101 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17102 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17102.key,this__17102.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17103 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17104 = this;
if((n === 0))
{return this__17104.key;
} else
{if((n === 1))
{return this__17104.val;
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
var this__17105 = this;
if((n === 0))
{return this__17105.key;
} else
{if((n === 1))
{return this__17105.val;
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
var this__17106 = this;
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
var this__17111 = this;
var h__2151__auto____17112 = this__17111.__hash;
if(!((h__2151__auto____17112 == null)))
{return h__2151__auto____17112;
} else
{var h__2151__auto____17113 = cljs.core.hash_coll.call(null,coll);
this__17111.__hash = h__2151__auto____17113;
return h__2151__auto____17113;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17114 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17115 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17116 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17116.key,this__17116.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__17164 = null;
var G__17164__2 = (function (this_sym17117,k){
var this__17119 = this;
var this_sym17117__17120 = this;
var node__17121 = this_sym17117__17120;
return node__17121.cljs$core$ILookup$_lookup$arity$2(node__17121,k);
});
var G__17164__3 = (function (this_sym17118,k,not_found){
var this__17119 = this;
var this_sym17118__17122 = this;
var node__17123 = this_sym17118__17122;
return node__17123.cljs$core$ILookup$_lookup$arity$3(node__17123,k,not_found);
});
G__17164 = function(this_sym17118,k,not_found){
switch(arguments.length){
case 2:
return G__17164__2.call(this,this_sym17118,k);
case 3:
return G__17164__3.call(this,this_sym17118,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17164;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym17109,args17110){
var this__17124 = this;
return this_sym17109.call.apply(this_sym17109,[this_sym17109].concat(args17110.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17125 = this;
return cljs.core.PersistentVector.fromArray([this__17125.key,this__17125.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17126 = this;
return this__17126.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17127 = this;
return this__17127.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__17128 = this;
var node__17129 = this;
return (new cljs.core.RedNode(this__17128.key,this__17128.val,this__17128.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__17130 = this;
var node__17131 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__17132 = this;
var node__17133 = this;
return (new cljs.core.RedNode(this__17132.key,this__17132.val,this__17132.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__17134 = this;
var node__17135 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__17136 = this;
var node__17137 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17137,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__17138 = this;
var node__17139 = this;
return (new cljs.core.RedNode(this__17138.key,this__17138.val,del,this__17138.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__17140 = this;
var node__17141 = this;
return (new cljs.core.RedNode(this__17140.key,this__17140.val,ins,this__17140.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__17142 = this;
var node__17143 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17142.left))
{return (new cljs.core.RedNode(this__17142.key,this__17142.val,this__17142.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__17142.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17142.right))
{return (new cljs.core.RedNode(this__17142.right.key,this__17142.right.val,(new cljs.core.BlackNode(this__17142.key,this__17142.val,this__17142.left,this__17142.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__17142.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__17143,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__17165 = null;
var G__17165__0 = (function (){
var this__17144 = this;
var this__17146 = this;
return cljs.core.pr_str.call(null,this__17146);
});
G__17165 = function(){
switch(arguments.length){
case 0:
return G__17165__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17165;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__17147 = this;
var node__17148 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17147.right))
{return (new cljs.core.RedNode(this__17147.key,this__17147.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17147.left,null)),this__17147.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17147.left))
{return (new cljs.core.RedNode(this__17147.left.key,this__17147.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17147.left.left,null)),(new cljs.core.BlackNode(this__17147.key,this__17147.val,this__17147.left.right,this__17147.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17148,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__17149 = this;
var node__17150 = this;
return (new cljs.core.BlackNode(this__17149.key,this__17149.val,this__17149.left,this__17149.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17151 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17152 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17153 = this;
return cljs.core.list.call(null,this__17153.key,this__17153.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17154 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17155 = this;
return this__17155.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17156 = this;
return cljs.core.PersistentVector.fromArray([this__17156.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17157 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17157.key,this__17157.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17158 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17159 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17159.key,this__17159.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17160 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17161 = this;
if((n === 0))
{return this__17161.key;
} else
{if((n === 1))
{return this__17161.val;
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
var this__17162 = this;
if((n === 0))
{return this__17162.key;
} else
{if((n === 1))
{return this__17162.val;
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
var this__17163 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__17169 = comp.call(null,k,tree.key);
if((c__17169 === 0))
{(found[0] = tree);
return null;
} else
{if((c__17169 < 0))
{var ins__17170 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__17170 == null)))
{return tree.add_left(ins__17170);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__17171 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__17171 == null)))
{return tree.add_right(ins__17171);
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
{var app__17174 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17174))
{return (new cljs.core.RedNode(app__17174.key,app__17174.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__17174.left,null)),(new cljs.core.RedNode(right.key,right.val,app__17174.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__17174,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__17175 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17175))
{return (new cljs.core.RedNode(app__17175.key,app__17175.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__17175.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__17175.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__17175,right.right,null)));
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
{var c__17181 = comp.call(null,k,tree.key);
if((c__17181 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__17181 < 0))
{var del__17182 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____17183 = !((del__17182 == null));
if(or__3824__auto____17183)
{return or__3824__auto____17183;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__17182,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__17182,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__17184 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____17185 = !((del__17184 == null));
if(or__3824__auto____17185)
{return or__3824__auto____17185;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__17184);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__17184,null));
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
var tk__17188 = tree.key;
var c__17189 = comp.call(null,k,tk__17188);
if((c__17189 === 0))
{return tree.replace(tk__17188,v,tree.left,tree.right);
} else
{if((c__17189 < 0))
{return tree.replace(tk__17188,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__17188,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__17192 = this;
var h__2151__auto____17193 = this__17192.__hash;
if(!((h__2151__auto____17193 == null)))
{return h__2151__auto____17193;
} else
{var h__2151__auto____17194 = cljs.core.hash_imap.call(null,coll);
this__17192.__hash = h__2151__auto____17194;
return h__2151__auto____17194;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17195 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17196 = this;
var n__17197 = coll.entry_at(k);
if(!((n__17197 == null)))
{return n__17197.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17198 = this;
var found__17199 = [null];
var t__17200 = cljs.core.tree_map_add.call(null,this__17198.comp,this__17198.tree,k,v,found__17199);
if((t__17200 == null))
{var found_node__17201 = cljs.core.nth.call(null,found__17199,0);
if(cljs.core._EQ_.call(null,v,found_node__17201.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17198.comp,cljs.core.tree_map_replace.call(null,this__17198.comp,this__17198.tree,k,v),this__17198.cnt,this__17198.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17198.comp,t__17200.blacken(),(this__17198.cnt + 1),this__17198.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17202 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__17236 = null;
var G__17236__2 = (function (this_sym17203,k){
var this__17205 = this;
var this_sym17203__17206 = this;
var coll__17207 = this_sym17203__17206;
return coll__17207.cljs$core$ILookup$_lookup$arity$2(coll__17207,k);
});
var G__17236__3 = (function (this_sym17204,k,not_found){
var this__17205 = this;
var this_sym17204__17208 = this;
var coll__17209 = this_sym17204__17208;
return coll__17209.cljs$core$ILookup$_lookup$arity$3(coll__17209,k,not_found);
});
G__17236 = function(this_sym17204,k,not_found){
switch(arguments.length){
case 2:
return G__17236__2.call(this,this_sym17204,k);
case 3:
return G__17236__3.call(this,this_sym17204,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17236;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym17190,args17191){
var this__17210 = this;
return this_sym17190.call.apply(this_sym17190,[this_sym17190].concat(args17191.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17211 = this;
if(!((this__17211.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__17211.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17212 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17213 = this;
if((this__17213.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17213.tree,false,this__17213.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__17214 = this;
var this__17215 = this;
return cljs.core.pr_str.call(null,this__17215);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__17216 = this;
var coll__17217 = this;
var t__17218 = this__17216.tree;
while(true){
if(!((t__17218 == null)))
{var c__17219 = this__17216.comp.call(null,k,t__17218.key);
if((c__17219 === 0))
{return t__17218;
} else
{if((c__17219 < 0))
{{
var G__17237 = t__17218.left;
t__17218 = G__17237;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__17238 = t__17218.right;
t__17218 = G__17238;
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
var this__17220 = this;
if((this__17220.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17220.tree,ascending_QMARK_,this__17220.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17221 = this;
if((this__17221.cnt > 0))
{var stack__17222 = null;
var t__17223 = this__17221.tree;
while(true){
if(!((t__17223 == null)))
{var c__17224 = this__17221.comp.call(null,k,t__17223.key);
if((c__17224 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__17222,t__17223),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__17224 < 0))
{{
var G__17239 = cljs.core.conj.call(null,stack__17222,t__17223);
var G__17240 = t__17223.left;
stack__17222 = G__17239;
t__17223 = G__17240;
continue;
}
} else
{{
var G__17241 = stack__17222;
var G__17242 = t__17223.right;
stack__17222 = G__17241;
t__17223 = G__17242;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__17224 > 0))
{{
var G__17243 = cljs.core.conj.call(null,stack__17222,t__17223);
var G__17244 = t__17223.right;
stack__17222 = G__17243;
t__17223 = G__17244;
continue;
}
} else
{{
var G__17245 = stack__17222;
var G__17246 = t__17223.left;
stack__17222 = G__17245;
t__17223 = G__17246;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__17222 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__17222,ascending_QMARK_,-1,null));
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
var this__17225 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17226 = this;
return this__17226.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17227 = this;
if((this__17227.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17227.tree,true,this__17227.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17228 = this;
return this__17228.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17229 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17230 = this;
return (new cljs.core.PersistentTreeMap(this__17230.comp,this__17230.tree,this__17230.cnt,meta,this__17230.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17231 = this;
return this__17231.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17232 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__17232.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17233 = this;
var found__17234 = [null];
var t__17235 = cljs.core.tree_map_remove.call(null,this__17233.comp,this__17233.tree,k,found__17234);
if((t__17235 == null))
{if((cljs.core.nth.call(null,found__17234,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17233.comp,null,0,this__17233.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17233.comp,t__17235.blacken(),(this__17233.cnt - 1),this__17233.meta,null));
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
var in__17249 = cljs.core.seq.call(null,keyvals);
var out__17250 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__17249)
{{
var G__17251 = cljs.core.nnext.call(null,in__17249);
var G__17252 = cljs.core.assoc_BANG_.call(null,out__17250,cljs.core.first.call(null,in__17249),cljs.core.second.call(null,in__17249));
in__17249 = G__17251;
out__17250 = G__17252;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17250);
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
hash_map.cljs$lang$applyTo = (function (arglist__17253){
var keyvals = cljs.core.seq(arglist__17253);;
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
array_map.cljs$lang$applyTo = (function (arglist__17254){
var keyvals = cljs.core.seq(arglist__17254);;
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
var ks__17258 = [];
var obj__17259 = {};
var kvs__17260 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__17260)
{ks__17258.push(cljs.core.first.call(null,kvs__17260));
(obj__17259[cljs.core.first.call(null,kvs__17260)] = cljs.core.second.call(null,kvs__17260));
{
var G__17261 = cljs.core.nnext.call(null,kvs__17260);
kvs__17260 = G__17261;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__17258,obj__17259);
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
obj_map.cljs$lang$applyTo = (function (arglist__17262){
var keyvals = cljs.core.seq(arglist__17262);;
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
var in__17265 = cljs.core.seq.call(null,keyvals);
var out__17266 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__17265)
{{
var G__17267 = cljs.core.nnext.call(null,in__17265);
var G__17268 = cljs.core.assoc.call(null,out__17266,cljs.core.first.call(null,in__17265),cljs.core.second.call(null,in__17265));
in__17265 = G__17267;
out__17266 = G__17268;
continue;
}
} else
{return out__17266;
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
sorted_map.cljs$lang$applyTo = (function (arglist__17269){
var keyvals = cljs.core.seq(arglist__17269);;
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
var in__17272 = cljs.core.seq.call(null,keyvals);
var out__17273 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__17272)
{{
var G__17274 = cljs.core.nnext.call(null,in__17272);
var G__17275 = cljs.core.assoc.call(null,out__17273,cljs.core.first.call(null,in__17272),cljs.core.second.call(null,in__17272));
in__17272 = G__17274;
out__17273 = G__17275;
continue;
}
} else
{return out__17273;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__17276){
var comparator = cljs.core.first(arglist__17276);
var keyvals = cljs.core.rest(arglist__17276);
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
{return cljs.core.reduce.call(null,(function (p1__17277_SHARP_,p2__17278_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____17280 = p1__17277_SHARP_;
if(cljs.core.truth_(or__3824__auto____17280))
{return or__3824__auto____17280;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__17278_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__17281){
var maps = cljs.core.seq(arglist__17281);;
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
{var merge_entry__17289 = (function (m,e){
var k__17287 = cljs.core.first.call(null,e);
var v__17288 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__17287))
{return cljs.core.assoc.call(null,m,k__17287,f.call(null,cljs.core._lookup.call(null,m,k__17287,null),v__17288));
} else
{return cljs.core.assoc.call(null,m,k__17287,v__17288);
}
});
var merge2__17291 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__17289,(function (){var or__3824__auto____17290 = m1;
if(cljs.core.truth_(or__3824__auto____17290))
{return or__3824__auto____17290;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__17291,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__17292){
var f = cljs.core.first(arglist__17292);
var maps = cljs.core.rest(arglist__17292);
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
var ret__17297 = cljs.core.ObjMap.EMPTY;
var keys__17298 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__17298)
{var key__17299 = cljs.core.first.call(null,keys__17298);
var entry__17300 = cljs.core._lookup.call(null,map,key__17299,"\uFDD0'cljs.core/not-found");
{
var G__17301 = ((cljs.core.not_EQ_.call(null,entry__17300,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__17297,key__17299,entry__17300):ret__17297);
var G__17302 = cljs.core.next.call(null,keys__17298);
ret__17297 = G__17301;
keys__17298 = G__17302;
continue;
}
} else
{return ret__17297;
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
var this__17306 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__17306.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17307 = this;
var h__2151__auto____17308 = this__17307.__hash;
if(!((h__2151__auto____17308 == null)))
{return h__2151__auto____17308;
} else
{var h__2151__auto____17309 = cljs.core.hash_iset.call(null,coll);
this__17307.__hash = h__2151__auto____17309;
return h__2151__auto____17309;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17310 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17311 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17311.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__17332 = null;
var G__17332__2 = (function (this_sym17312,k){
var this__17314 = this;
var this_sym17312__17315 = this;
var coll__17316 = this_sym17312__17315;
return coll__17316.cljs$core$ILookup$_lookup$arity$2(coll__17316,k);
});
var G__17332__3 = (function (this_sym17313,k,not_found){
var this__17314 = this;
var this_sym17313__17317 = this;
var coll__17318 = this_sym17313__17317;
return coll__17318.cljs$core$ILookup$_lookup$arity$3(coll__17318,k,not_found);
});
G__17332 = function(this_sym17313,k,not_found){
switch(arguments.length){
case 2:
return G__17332__2.call(this,this_sym17313,k);
case 3:
return G__17332__3.call(this,this_sym17313,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17332;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym17304,args17305){
var this__17319 = this;
return this_sym17304.call.apply(this_sym17304,[this_sym17304].concat(args17305.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17320 = this;
return (new cljs.core.PersistentHashSet(this__17320.meta,cljs.core.assoc.call(null,this__17320.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__17321 = this;
var this__17322 = this;
return cljs.core.pr_str.call(null,this__17322);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17323 = this;
return cljs.core.keys.call(null,this__17323.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17324 = this;
return (new cljs.core.PersistentHashSet(this__17324.meta,cljs.core.dissoc.call(null,this__17324.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17325 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17326 = this;
var and__3822__auto____17327 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17327)
{var and__3822__auto____17328 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17328)
{return cljs.core.every_QMARK_.call(null,(function (p1__17303_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17303_SHARP_);
}),other);
} else
{return and__3822__auto____17328;
}
} else
{return and__3822__auto____17327;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17329 = this;
return (new cljs.core.PersistentHashSet(meta,this__17329.hash_map,this__17329.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17330 = this;
return this__17330.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17331 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__17331.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__17333 = cljs.core.count.call(null,items);
var i__17334 = 0;
var out__17335 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__17334 < len__17333))
{{
var G__17336 = (i__17334 + 1);
var G__17337 = cljs.core.conj_BANG_.call(null,out__17335,(items[i__17334]));
i__17334 = G__17336;
out__17335 = G__17337;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17335);
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
var G__17355 = null;
var G__17355__2 = (function (this_sym17341,k){
var this__17343 = this;
var this_sym17341__17344 = this;
var tcoll__17345 = this_sym17341__17344;
if((cljs.core._lookup.call(null,this__17343.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__17355__3 = (function (this_sym17342,k,not_found){
var this__17343 = this;
var this_sym17342__17346 = this;
var tcoll__17347 = this_sym17342__17346;
if((cljs.core._lookup.call(null,this__17343.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__17355 = function(this_sym17342,k,not_found){
switch(arguments.length){
case 2:
return G__17355__2.call(this,this_sym17342,k);
case 3:
return G__17355__3.call(this,this_sym17342,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17355;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym17339,args17340){
var this__17348 = this;
return this_sym17339.call.apply(this_sym17339,[this_sym17339].concat(args17340.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__17349 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__17350 = this;
if((cljs.core._lookup.call(null,this__17350.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__17351 = this;
return cljs.core.count.call(null,this__17351.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__17352 = this;
this__17352.transient_map = cljs.core.dissoc_BANG_.call(null,this__17352.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__17353 = this;
this__17353.transient_map = cljs.core.assoc_BANG_.call(null,this__17353.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17354 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__17354.transient_map),null));
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
var this__17358 = this;
var h__2151__auto____17359 = this__17358.__hash;
if(!((h__2151__auto____17359 == null)))
{return h__2151__auto____17359;
} else
{var h__2151__auto____17360 = cljs.core.hash_iset.call(null,coll);
this__17358.__hash = h__2151__auto____17360;
return h__2151__auto____17360;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17361 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17362 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17362.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__17388 = null;
var G__17388__2 = (function (this_sym17363,k){
var this__17365 = this;
var this_sym17363__17366 = this;
var coll__17367 = this_sym17363__17366;
return coll__17367.cljs$core$ILookup$_lookup$arity$2(coll__17367,k);
});
var G__17388__3 = (function (this_sym17364,k,not_found){
var this__17365 = this;
var this_sym17364__17368 = this;
var coll__17369 = this_sym17364__17368;
return coll__17369.cljs$core$ILookup$_lookup$arity$3(coll__17369,k,not_found);
});
G__17388 = function(this_sym17364,k,not_found){
switch(arguments.length){
case 2:
return G__17388__2.call(this,this_sym17364,k);
case 3:
return G__17388__3.call(this,this_sym17364,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17388;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym17356,args17357){
var this__17370 = this;
return this_sym17356.call.apply(this_sym17356,[this_sym17356].concat(args17357.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17371 = this;
return (new cljs.core.PersistentTreeSet(this__17371.meta,cljs.core.assoc.call(null,this__17371.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17372 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__17372.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__17373 = this;
var this__17374 = this;
return cljs.core.pr_str.call(null,this__17374);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__17375 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__17375.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17376 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__17376.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__17377 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17378 = this;
return cljs.core._comparator.call(null,this__17378.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17379 = this;
return cljs.core.keys.call(null,this__17379.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17380 = this;
return (new cljs.core.PersistentTreeSet(this__17380.meta,cljs.core.dissoc.call(null,this__17380.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17381 = this;
return cljs.core.count.call(null,this__17381.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17382 = this;
var and__3822__auto____17383 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17383)
{var and__3822__auto____17384 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17384)
{return cljs.core.every_QMARK_.call(null,(function (p1__17338_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17338_SHARP_);
}),other);
} else
{return and__3822__auto____17384;
}
} else
{return and__3822__auto____17383;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17385 = this;
return (new cljs.core.PersistentTreeSet(meta,this__17385.tree_map,this__17385.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17386 = this;
return this__17386.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17387 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__17387.meta);
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
var G__17393__delegate = function (keys){
var in__17391 = cljs.core.seq.call(null,keys);
var out__17392 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__17391))
{{
var G__17394 = cljs.core.next.call(null,in__17391);
var G__17395 = cljs.core.conj_BANG_.call(null,out__17392,cljs.core.first.call(null,in__17391));
in__17391 = G__17394;
out__17392 = G__17395;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17392);
}
break;
}
};
var G__17393 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17393__delegate.call(this, keys);
};
G__17393.cljs$lang$maxFixedArity = 0;
G__17393.cljs$lang$applyTo = (function (arglist__17396){
var keys = cljs.core.seq(arglist__17396);;
return G__17393__delegate(keys);
});
G__17393.cljs$lang$arity$variadic = G__17393__delegate;
return G__17393;
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
sorted_set.cljs$lang$applyTo = (function (arglist__17397){
var keys = cljs.core.seq(arglist__17397);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__17399){
var comparator = cljs.core.first(arglist__17399);
var keys = cljs.core.rest(arglist__17399);
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
{var n__17405 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____17406 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____17406))
{var e__17407 = temp__3971__auto____17406;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__17407));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__17405,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__17398_SHARP_){
var temp__3971__auto____17408 = cljs.core.find.call(null,smap,p1__17398_SHARP_);
if(cljs.core.truth_(temp__3971__auto____17408))
{var e__17409 = temp__3971__auto____17408;
return cljs.core.second.call(null,e__17409);
} else
{return p1__17398_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__17439 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__17432,seen){
while(true){
var vec__17433__17434 = p__17432;
var f__17435 = cljs.core.nth.call(null,vec__17433__17434,0,null);
var xs__17436 = vec__17433__17434;
var temp__3974__auto____17437 = cljs.core.seq.call(null,xs__17436);
if(temp__3974__auto____17437)
{var s__17438 = temp__3974__auto____17437;
if(cljs.core.contains_QMARK_.call(null,seen,f__17435))
{{
var G__17440 = cljs.core.rest.call(null,s__17438);
var G__17441 = seen;
p__17432 = G__17440;
seen = G__17441;
continue;
}
} else
{return cljs.core.cons.call(null,f__17435,step.call(null,cljs.core.rest.call(null,s__17438),cljs.core.conj.call(null,seen,f__17435)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__17439.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__17444 = cljs.core.PersistentVector.EMPTY;
var s__17445 = s;
while(true){
if(cljs.core.next.call(null,s__17445))
{{
var G__17446 = cljs.core.conj.call(null,ret__17444,cljs.core.first.call(null,s__17445));
var G__17447 = cljs.core.next.call(null,s__17445);
ret__17444 = G__17446;
s__17445 = G__17447;
continue;
}
} else
{return cljs.core.seq.call(null,ret__17444);
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
{if((function (){var or__3824__auto____17450 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17450)
{return or__3824__auto____17450;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17451 = x.lastIndexOf("/");
if((i__17451 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__17451 + 1));
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
if((function (){var or__3824__auto____17454 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17454)
{return or__3824__auto____17454;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17455 = x.lastIndexOf("/");
if((i__17455 > -1))
{return cljs.core.subs.call(null,x,2,i__17455);
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
var map__17462 = cljs.core.ObjMap.EMPTY;
var ks__17463 = cljs.core.seq.call(null,keys);
var vs__17464 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____17465 = ks__17463;
if(and__3822__auto____17465)
{return vs__17464;
} else
{return and__3822__auto____17465;
}
})())
{{
var G__17466 = cljs.core.assoc.call(null,map__17462,cljs.core.first.call(null,ks__17463),cljs.core.first.call(null,vs__17464));
var G__17467 = cljs.core.next.call(null,ks__17463);
var G__17468 = cljs.core.next.call(null,vs__17464);
map__17462 = G__17466;
ks__17463 = G__17467;
vs__17464 = G__17468;
continue;
}
} else
{return map__17462;
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
var G__17471__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17456_SHARP_,p2__17457_SHARP_){
return max_key.call(null,k,p1__17456_SHARP_,p2__17457_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__17471 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17471__delegate.call(this, k, x, y, more);
};
G__17471.cljs$lang$maxFixedArity = 3;
G__17471.cljs$lang$applyTo = (function (arglist__17472){
var k = cljs.core.first(arglist__17472);
var x = cljs.core.first(cljs.core.next(arglist__17472));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17472)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17472)));
return G__17471__delegate(k, x, y, more);
});
G__17471.cljs$lang$arity$variadic = G__17471__delegate;
return G__17471;
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
var G__17473__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17469_SHARP_,p2__17470_SHARP_){
return min_key.call(null,k,p1__17469_SHARP_,p2__17470_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__17473 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17473__delegate.call(this, k, x, y, more);
};
G__17473.cljs$lang$maxFixedArity = 3;
G__17473.cljs$lang$applyTo = (function (arglist__17474){
var k = cljs.core.first(arglist__17474);
var x = cljs.core.first(cljs.core.next(arglist__17474));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17474)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17474)));
return G__17473__delegate(k, x, y, more);
});
G__17473.cljs$lang$arity$variadic = G__17473__delegate;
return G__17473;
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
var temp__3974__auto____17477 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17477)
{var s__17478 = temp__3974__auto____17477;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__17478),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__17478)));
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
var temp__3974__auto____17481 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17481)
{var s__17482 = temp__3974__auto____17481;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__17482))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__17482),take_while.call(null,pred,cljs.core.rest.call(null,s__17482)));
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
var comp__17484 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__17484.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__17496 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____17497 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____17497))
{var vec__17498__17499 = temp__3974__auto____17497;
var e__17500 = cljs.core.nth.call(null,vec__17498__17499,0,null);
var s__17501 = vec__17498__17499;
if(cljs.core.truth_(include__17496.call(null,e__17500)))
{return s__17501;
} else
{return cljs.core.next.call(null,s__17501);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17496,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17502 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____17502))
{var vec__17503__17504 = temp__3974__auto____17502;
var e__17505 = cljs.core.nth.call(null,vec__17503__17504,0,null);
var s__17506 = vec__17503__17504;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__17505))?s__17506:cljs.core.next.call(null,s__17506)));
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
var include__17518 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____17519 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____17519))
{var vec__17520__17521 = temp__3974__auto____17519;
var e__17522 = cljs.core.nth.call(null,vec__17520__17521,0,null);
var s__17523 = vec__17520__17521;
if(cljs.core.truth_(include__17518.call(null,e__17522)))
{return s__17523;
} else
{return cljs.core.next.call(null,s__17523);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17518,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17524 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____17524))
{var vec__17525__17526 = temp__3974__auto____17524;
var e__17527 = cljs.core.nth.call(null,vec__17525__17526,0,null);
var s__17528 = vec__17525__17526;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__17527))?s__17528:cljs.core.next.call(null,s__17528)));
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
var this__17529 = this;
var h__2151__auto____17530 = this__17529.__hash;
if(!((h__2151__auto____17530 == null)))
{return h__2151__auto____17530;
} else
{var h__2151__auto____17531 = cljs.core.hash_coll.call(null,rng);
this__17529.__hash = h__2151__auto____17531;
return h__2151__auto____17531;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__17532 = this;
if((this__17532.step > 0))
{if(((this__17532.start + this__17532.step) < this__17532.end))
{return (new cljs.core.Range(this__17532.meta,(this__17532.start + this__17532.step),this__17532.end,this__17532.step,null));
} else
{return null;
}
} else
{if(((this__17532.start + this__17532.step) > this__17532.end))
{return (new cljs.core.Range(this__17532.meta,(this__17532.start + this__17532.step),this__17532.end,this__17532.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__17533 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__17534 = this;
var this__17535 = this;
return cljs.core.pr_str.call(null,this__17535);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__17536 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__17537 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__17538 = this;
if((this__17538.step > 0))
{if((this__17538.start < this__17538.end))
{return rng;
} else
{return null;
}
} else
{if((this__17538.start > this__17538.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__17539 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__17539.end - this__17539.start) / this__17539.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__17540 = this;
return this__17540.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__17541 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__17541.meta,(this__17541.start + this__17541.step),this__17541.end,this__17541.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__17542 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__17543 = this;
return (new cljs.core.Range(meta,this__17543.start,this__17543.end,this__17543.step,this__17543.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__17544 = this;
return this__17544.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__17545 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17545.start + (n * this__17545.step));
} else
{if((function (){var and__3822__auto____17546 = (this__17545.start > this__17545.end);
if(and__3822__auto____17546)
{return (this__17545.step === 0);
} else
{return and__3822__auto____17546;
}
})())
{return this__17545.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__17547 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17547.start + (n * this__17547.step));
} else
{if((function (){var and__3822__auto____17548 = (this__17547.start > this__17547.end);
if(and__3822__auto____17548)
{return (this__17547.step === 0);
} else
{return and__3822__auto____17548;
}
})())
{return this__17547.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__17549 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17549.meta);
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
var temp__3974__auto____17552 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17552)
{var s__17553 = temp__3974__auto____17552;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__17553),take_nth.call(null,n,cljs.core.drop.call(null,n,s__17553)));
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
var temp__3974__auto____17560 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17560)
{var s__17561 = temp__3974__auto____17560;
var fst__17562 = cljs.core.first.call(null,s__17561);
var fv__17563 = f.call(null,fst__17562);
var run__17564 = cljs.core.cons.call(null,fst__17562,cljs.core.take_while.call(null,(function (p1__17554_SHARP_){
return cljs.core._EQ_.call(null,fv__17563,f.call(null,p1__17554_SHARP_));
}),cljs.core.next.call(null,s__17561)));
return cljs.core.cons.call(null,run__17564,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__17564),s__17561))));
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
var temp__3971__auto____17579 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____17579)
{var s__17580 = temp__3971__auto____17579;
return reductions.call(null,f,cljs.core.first.call(null,s__17580),cljs.core.rest.call(null,s__17580));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17581 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17581)
{var s__17582 = temp__3974__auto____17581;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__17582)),cljs.core.rest.call(null,s__17582));
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
var G__17585 = null;
var G__17585__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__17585__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__17585__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__17585__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__17585__4 = (function() { 
var G__17586__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__17586 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17586__delegate.call(this, x, y, z, args);
};
G__17586.cljs$lang$maxFixedArity = 3;
G__17586.cljs$lang$applyTo = (function (arglist__17587){
var x = cljs.core.first(arglist__17587);
var y = cljs.core.first(cljs.core.next(arglist__17587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17587)));
return G__17586__delegate(x, y, z, args);
});
G__17586.cljs$lang$arity$variadic = G__17586__delegate;
return G__17586;
})()
;
G__17585 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17585__0.call(this);
case 1:
return G__17585__1.call(this,x);
case 2:
return G__17585__2.call(this,x,y);
case 3:
return G__17585__3.call(this,x,y,z);
default:
return G__17585__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17585.cljs$lang$maxFixedArity = 3;
G__17585.cljs$lang$applyTo = G__17585__4.cljs$lang$applyTo;
return G__17585;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__17588 = null;
var G__17588__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__17588__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__17588__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__17588__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__17588__4 = (function() { 
var G__17589__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__17589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17589__delegate.call(this, x, y, z, args);
};
G__17589.cljs$lang$maxFixedArity = 3;
G__17589.cljs$lang$applyTo = (function (arglist__17590){
var x = cljs.core.first(arglist__17590);
var y = cljs.core.first(cljs.core.next(arglist__17590));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17590)));
return G__17589__delegate(x, y, z, args);
});
G__17589.cljs$lang$arity$variadic = G__17589__delegate;
return G__17589;
})()
;
G__17588 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17588__0.call(this);
case 1:
return G__17588__1.call(this,x);
case 2:
return G__17588__2.call(this,x,y);
case 3:
return G__17588__3.call(this,x,y,z);
default:
return G__17588__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17588.cljs$lang$maxFixedArity = 3;
G__17588.cljs$lang$applyTo = G__17588__4.cljs$lang$applyTo;
return G__17588;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__17591 = null;
var G__17591__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__17591__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__17591__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__17591__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__17591__4 = (function() { 
var G__17592__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__17592 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17592__delegate.call(this, x, y, z, args);
};
G__17592.cljs$lang$maxFixedArity = 3;
G__17592.cljs$lang$applyTo = (function (arglist__17593){
var x = cljs.core.first(arglist__17593);
var y = cljs.core.first(cljs.core.next(arglist__17593));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17593)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17593)));
return G__17592__delegate(x, y, z, args);
});
G__17592.cljs$lang$arity$variadic = G__17592__delegate;
return G__17592;
})()
;
G__17591 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17591__0.call(this);
case 1:
return G__17591__1.call(this,x);
case 2:
return G__17591__2.call(this,x,y);
case 3:
return G__17591__3.call(this,x,y,z);
default:
return G__17591__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17591.cljs$lang$maxFixedArity = 3;
G__17591.cljs$lang$applyTo = G__17591__4.cljs$lang$applyTo;
return G__17591;
})()
});
var juxt__4 = (function() { 
var G__17594__delegate = function (f,g,h,fs){
var fs__17584 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__17595 = null;
var G__17595__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__17565_SHARP_,p2__17566_SHARP_){
return cljs.core.conj.call(null,p1__17565_SHARP_,p2__17566_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__17584);
});
var G__17595__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__17567_SHARP_,p2__17568_SHARP_){
return cljs.core.conj.call(null,p1__17567_SHARP_,p2__17568_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__17584);
});
var G__17595__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__17569_SHARP_,p2__17570_SHARP_){
return cljs.core.conj.call(null,p1__17569_SHARP_,p2__17570_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__17584);
});
var G__17595__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__17571_SHARP_,p2__17572_SHARP_){
return cljs.core.conj.call(null,p1__17571_SHARP_,p2__17572_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__17584);
});
var G__17595__4 = (function() { 
var G__17596__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__17573_SHARP_,p2__17574_SHARP_){
return cljs.core.conj.call(null,p1__17573_SHARP_,cljs.core.apply.call(null,p2__17574_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__17584);
};
var G__17596 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17596__delegate.call(this, x, y, z, args);
};
G__17596.cljs$lang$maxFixedArity = 3;
G__17596.cljs$lang$applyTo = (function (arglist__17597){
var x = cljs.core.first(arglist__17597);
var y = cljs.core.first(cljs.core.next(arglist__17597));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17597)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17597)));
return G__17596__delegate(x, y, z, args);
});
G__17596.cljs$lang$arity$variadic = G__17596__delegate;
return G__17596;
})()
;
G__17595 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17595__0.call(this);
case 1:
return G__17595__1.call(this,x);
case 2:
return G__17595__2.call(this,x,y);
case 3:
return G__17595__3.call(this,x,y,z);
default:
return G__17595__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17595.cljs$lang$maxFixedArity = 3;
G__17595.cljs$lang$applyTo = G__17595__4.cljs$lang$applyTo;
return G__17595;
})()
};
var G__17594 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17594__delegate.call(this, f, g, h, fs);
};
G__17594.cljs$lang$maxFixedArity = 3;
G__17594.cljs$lang$applyTo = (function (arglist__17598){
var f = cljs.core.first(arglist__17598);
var g = cljs.core.first(cljs.core.next(arglist__17598));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17598)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17598)));
return G__17594__delegate(f, g, h, fs);
});
G__17594.cljs$lang$arity$variadic = G__17594__delegate;
return G__17594;
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
var G__17601 = cljs.core.next.call(null,coll);
coll = G__17601;
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
if(cljs.core.truth_((function (){var and__3822__auto____17600 = cljs.core.seq.call(null,coll);
if(and__3822__auto____17600)
{return (n > 0);
} else
{return and__3822__auto____17600;
}
})()))
{{
var G__17602 = (n - 1);
var G__17603 = cljs.core.next.call(null,coll);
n = G__17602;
coll = G__17603;
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
var matches__17605 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__17605),s))
{if((cljs.core.count.call(null,matches__17605) === 1))
{return cljs.core.first.call(null,matches__17605);
} else
{return cljs.core.vec.call(null,matches__17605);
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
var matches__17607 = re.exec(s);
if((matches__17607 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__17607) === 1))
{return cljs.core.first.call(null,matches__17607);
} else
{return cljs.core.vec.call(null,matches__17607);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__17612 = cljs.core.re_find.call(null,re,s);
var match_idx__17613 = s.search(re);
var match_str__17614 = ((cljs.core.coll_QMARK_.call(null,match_data__17612))?cljs.core.first.call(null,match_data__17612):match_data__17612);
var post_match__17615 = cljs.core.subs.call(null,s,(match_idx__17613 + cljs.core.count.call(null,match_str__17614)));
if(cljs.core.truth_(match_data__17612))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__17612,re_seq.call(null,re,post_match__17615));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__17622__17623 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___17624 = cljs.core.nth.call(null,vec__17622__17623,0,null);
var flags__17625 = cljs.core.nth.call(null,vec__17622__17623,1,null);
var pattern__17626 = cljs.core.nth.call(null,vec__17622__17623,2,null);
return (new RegExp(pattern__17626,flags__17625));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__17616_SHARP_){
return print_one.call(null,p1__17616_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____17636 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____17636))
{var and__3822__auto____17640 = (function (){var G__17637__17638 = obj;
if(G__17637__17638)
{if((function (){var or__3824__auto____17639 = (G__17637__17638.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17639)
{return or__3824__auto____17639;
} else
{return G__17637__17638.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17637__17638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17637__17638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17637__17638);
}
})();
if(cljs.core.truth_(and__3822__auto____17640))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____17640;
}
} else
{return and__3822__auto____17636;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____17641 = !((obj == null));
if(and__3822__auto____17641)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____17641;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__17642__17643 = obj;
if(G__17642__17643)
{if((function (){var or__3824__auto____17644 = (G__17642__17643.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____17644)
{return or__3824__auto____17644;
} else
{return G__17642__17643.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__17642__17643.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17642__17643);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17642__17643);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__17664 = (new goog.string.StringBuffer());
var G__17665__17666 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__17665__17666)
{var string__17667 = cljs.core.first.call(null,G__17665__17666);
var G__17665__17668 = G__17665__17666;
while(true){
sb__17664.append(string__17667);
var temp__3974__auto____17669 = cljs.core.next.call(null,G__17665__17668);
if(temp__3974__auto____17669)
{var G__17665__17670 = temp__3974__auto____17669;
{
var G__17683 = cljs.core.first.call(null,G__17665__17670);
var G__17684 = G__17665__17670;
string__17667 = G__17683;
G__17665__17668 = G__17684;
continue;
}
} else
{}
break;
}
} else
{}
var G__17671__17672 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__17671__17672)
{var obj__17673 = cljs.core.first.call(null,G__17671__17672);
var G__17671__17674 = G__17671__17672;
while(true){
sb__17664.append(" ");
var G__17675__17676 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__17673,opts));
if(G__17675__17676)
{var string__17677 = cljs.core.first.call(null,G__17675__17676);
var G__17675__17678 = G__17675__17676;
while(true){
sb__17664.append(string__17677);
var temp__3974__auto____17679 = cljs.core.next.call(null,G__17675__17678);
if(temp__3974__auto____17679)
{var G__17675__17680 = temp__3974__auto____17679;
{
var G__17685 = cljs.core.first.call(null,G__17675__17680);
var G__17686 = G__17675__17680;
string__17677 = G__17685;
G__17675__17678 = G__17686;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____17681 = cljs.core.next.call(null,G__17671__17674);
if(temp__3974__auto____17681)
{var G__17671__17682 = temp__3974__auto____17681;
{
var G__17687 = cljs.core.first.call(null,G__17671__17682);
var G__17688 = G__17671__17682;
obj__17673 = G__17687;
G__17671__17674 = G__17688;
continue;
}
} else
{}
break;
}
} else
{}
return sb__17664;
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
var sb__17690 = cljs.core.pr_sb.call(null,objs,opts);
sb__17690.append("\n");
return [cljs.core.str(sb__17690)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return cljs.core.string_print.call(null,"");
} else
{var G__17709__17710 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__17709__17710)
{var string__17711 = cljs.core.first.call(null,G__17709__17710);
var G__17709__17712 = G__17709__17710;
while(true){
cljs.core.string_print.call(null,string__17711);
var temp__3974__auto____17713 = cljs.core.next.call(null,G__17709__17712);
if(temp__3974__auto____17713)
{var G__17709__17714 = temp__3974__auto____17713;
{
var G__17727 = cljs.core.first.call(null,G__17709__17714);
var G__17728 = G__17709__17714;
string__17711 = G__17727;
G__17709__17712 = G__17728;
continue;
}
} else
{}
break;
}
} else
{}
var G__17715__17716 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__17715__17716)
{var obj__17717 = cljs.core.first.call(null,G__17715__17716);
var G__17715__17718 = G__17715__17716;
while(true){
cljs.core.string_print.call(null," ");
var G__17719__17720 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__17717,opts));
if(G__17719__17720)
{var string__17721 = cljs.core.first.call(null,G__17719__17720);
var G__17719__17722 = G__17719__17720;
while(true){
cljs.core.string_print.call(null,string__17721);
var temp__3974__auto____17723 = cljs.core.next.call(null,G__17719__17722);
if(temp__3974__auto____17723)
{var G__17719__17724 = temp__3974__auto____17723;
{
var G__17729 = cljs.core.first.call(null,G__17719__17724);
var G__17730 = G__17719__17724;
string__17721 = G__17729;
G__17719__17722 = G__17730;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____17725 = cljs.core.next.call(null,G__17715__17718);
if(temp__3974__auto____17725)
{var G__17715__17726 = temp__3974__auto____17725;
{
var G__17731 = cljs.core.first.call(null,G__17715__17726);
var G__17732 = G__17715__17726;
obj__17717 = G__17731;
G__17715__17718 = G__17732;
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
pr_str.cljs$lang$applyTo = (function (arglist__17733){
var objs = cljs.core.seq(arglist__17733);;
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
prn_str.cljs$lang$applyTo = (function (arglist__17734){
var objs = cljs.core.seq(arglist__17734);;
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
pr.cljs$lang$applyTo = (function (arglist__17735){
var objs = cljs.core.seq(arglist__17735);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__17736){
var objs = cljs.core.seq(arglist__17736);;
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
print_str.cljs$lang$applyTo = (function (arglist__17737){
var objs = cljs.core.seq(arglist__17737);;
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
println.cljs$lang$applyTo = (function (arglist__17738){
var objs = cljs.core.seq(arglist__17738);;
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
println_str.cljs$lang$applyTo = (function (arglist__17739){
var objs = cljs.core.seq(arglist__17739);;
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
prn.cljs$lang$applyTo = (function (arglist__17740){
var objs = cljs.core.seq(arglist__17740);;
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
printf.cljs$lang$applyTo = (function (arglist__17741){
var fmt = cljs.core.first(arglist__17741);
var args = cljs.core.rest(arglist__17741);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17742 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17742,"{",", ","}",opts,coll);
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
var pr_pair__17743 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17743,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17744 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17744,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____17745 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17745))
{var nspc__17746 = temp__3974__auto____17745;
return [cljs.core.str(nspc__17746),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____17747 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17747))
{var nspc__17748 = temp__3974__auto____17747;
return [cljs.core.str(nspc__17748),cljs.core.str("/")].join('');
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
var pr_pair__17749 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17749,"{",", ","}",opts,coll);
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
var normalize__17751 = (function (n,len){
var ns__17750 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__17750) < len))
{{
var G__17753 = [cljs.core.str("0"),cljs.core.str(ns__17750)].join('');
ns__17750 = G__17753;
continue;
}
} else
{return ns__17750;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__17751.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__17751.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__17751.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__17751.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__17751.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__17751.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__17752 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17752,"{",", ","}",opts,coll);
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
var this__17754 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__17755 = this;
var G__17756__17757 = cljs.core.seq.call(null,this__17755.watches);
if(G__17756__17757)
{var G__17759__17761 = cljs.core.first.call(null,G__17756__17757);
var vec__17760__17762 = G__17759__17761;
var key__17763 = cljs.core.nth.call(null,vec__17760__17762,0,null);
var f__17764 = cljs.core.nth.call(null,vec__17760__17762,1,null);
var G__17756__17765 = G__17756__17757;
var G__17759__17766 = G__17759__17761;
var G__17756__17767 = G__17756__17765;
while(true){
var vec__17768__17769 = G__17759__17766;
var key__17770 = cljs.core.nth.call(null,vec__17768__17769,0,null);
var f__17771 = cljs.core.nth.call(null,vec__17768__17769,1,null);
var G__17756__17772 = G__17756__17767;
f__17771.call(null,key__17770,this$,oldval,newval);
var temp__3974__auto____17773 = cljs.core.next.call(null,G__17756__17772);
if(temp__3974__auto____17773)
{var G__17756__17774 = temp__3974__auto____17773;
{
var G__17781 = cljs.core.first.call(null,G__17756__17774);
var G__17782 = G__17756__17774;
G__17759__17766 = G__17781;
G__17756__17767 = G__17782;
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
var this__17775 = this;
return this$.watches = cljs.core.assoc.call(null,this__17775.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__17776 = this;
return this$.watches = cljs.core.dissoc.call(null,this__17776.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__17777 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__17777.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__17778 = this;
return this__17778.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17779 = this;
return this__17779.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__17780 = this;
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
var G__17794__delegate = function (x,p__17783){
var map__17789__17790 = p__17783;
var map__17789__17791 = ((cljs.core.seq_QMARK_.call(null,map__17789__17790))?cljs.core.apply.call(null,cljs.core.hash_map,map__17789__17790):map__17789__17790);
var validator__17792 = cljs.core._lookup.call(null,map__17789__17791,"\uFDD0'validator",null);
var meta__17793 = cljs.core._lookup.call(null,map__17789__17791,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__17793,validator__17792,null));
};
var G__17794 = function (x,var_args){
var p__17783 = null;
if (goog.isDef(var_args)) {
  p__17783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17794__delegate.call(this, x, p__17783);
};
G__17794.cljs$lang$maxFixedArity = 1;
G__17794.cljs$lang$applyTo = (function (arglist__17795){
var x = cljs.core.first(arglist__17795);
var p__17783 = cljs.core.rest(arglist__17795);
return G__17794__delegate(x, p__17783);
});
G__17794.cljs$lang$arity$variadic = G__17794__delegate;
return G__17794;
})()
;
atom = function(x,var_args){
var p__17783 = var_args;
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
var temp__3974__auto____17799 = a.validator;
if(cljs.core.truth_(temp__3974__auto____17799))
{var validate__17800 = temp__3974__auto____17799;
if(cljs.core.truth_(validate__17800.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6448))))].join('')));
}
} else
{}
var old_value__17801 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__17801,new_value);
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
var G__17802__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__17802 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17802__delegate.call(this, a, f, x, y, z, more);
};
G__17802.cljs$lang$maxFixedArity = 5;
G__17802.cljs$lang$applyTo = (function (arglist__17803){
var a = cljs.core.first(arglist__17803);
var f = cljs.core.first(cljs.core.next(arglist__17803));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17803)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17803))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17803)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17803)))));
return G__17802__delegate(a, f, x, y, z, more);
});
G__17802.cljs$lang$arity$variadic = G__17802__delegate;
return G__17802;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__17804){
var iref = cljs.core.first(arglist__17804);
var f = cljs.core.first(cljs.core.next(arglist__17804));
var args = cljs.core.rest(cljs.core.next(arglist__17804));
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
var this__17805 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__17805.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17806 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__17806.state,(function (p__17807){
var map__17808__17809 = p__17807;
var map__17808__17810 = ((cljs.core.seq_QMARK_.call(null,map__17808__17809))?cljs.core.apply.call(null,cljs.core.hash_map,map__17808__17809):map__17808__17809);
var curr_state__17811 = map__17808__17810;
var done__17812 = cljs.core._lookup.call(null,map__17808__17810,"\uFDD0'done",null);
if(cljs.core.truth_(done__17812))
{return curr_state__17811;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__17806.f.call(null)});
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
var map__17833__17834 = options;
var map__17833__17835 = ((cljs.core.seq_QMARK_.call(null,map__17833__17834))?cljs.core.apply.call(null,cljs.core.hash_map,map__17833__17834):map__17833__17834);
var keywordize_keys__17836 = cljs.core._lookup.call(null,map__17833__17835,"\uFDD0'keywordize-keys",null);
var keyfn__17837 = (cljs.core.truth_(keywordize_keys__17836)?cljs.core.keyword:cljs.core.str);
var f__17852 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2421__auto____17851 = (function iter__17845(s__17846){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17846__17849 = s__17846;
while(true){
if(cljs.core.seq.call(null,s__17846__17849))
{var k__17850 = cljs.core.first.call(null,s__17846__17849);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__17837.call(null,k__17850),thisfn.call(null,(x[k__17850]))], true),iter__17845.call(null,cljs.core.rest.call(null,s__17846__17849)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2421__auto____17851.call(null,cljs.core.js_keys.call(null,x));
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
return f__17852.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__17853){
var x = cljs.core.first(arglist__17853);
var options = cljs.core.rest(arglist__17853);
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
var mem__17858 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__17862__delegate = function (args){
var temp__3971__auto____17859 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__17858),args,null);
if(cljs.core.truth_(temp__3971__auto____17859))
{var v__17860 = temp__3971__auto____17859;
return v__17860;
} else
{var ret__17861 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__17858,cljs.core.assoc,args,ret__17861);
return ret__17861;
}
};
var G__17862 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17862__delegate.call(this, args);
};
G__17862.cljs$lang$maxFixedArity = 0;
G__17862.cljs$lang$applyTo = (function (arglist__17863){
var args = cljs.core.seq(arglist__17863);;
return G__17862__delegate(args);
});
G__17862.cljs$lang$arity$variadic = G__17862__delegate;
return G__17862;
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
var ret__17865 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__17865))
{{
var G__17866 = ret__17865;
f = G__17866;
continue;
}
} else
{return ret__17865;
}
break;
}
});
var trampoline__2 = (function() { 
var G__17867__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__17867 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17867__delegate.call(this, f, args);
};
G__17867.cljs$lang$maxFixedArity = 1;
G__17867.cljs$lang$applyTo = (function (arglist__17868){
var f = cljs.core.first(arglist__17868);
var args = cljs.core.rest(arglist__17868);
return G__17867__delegate(f, args);
});
G__17867.cljs$lang$arity$variadic = G__17867__delegate;
return G__17867;
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
var k__17870 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__17870,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__17870,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____17879 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____17879)
{return or__3824__auto____17879;
} else
{var or__3824__auto____17880 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____17880)
{return or__3824__auto____17880;
} else
{var and__3822__auto____17881 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____17881)
{var and__3822__auto____17882 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____17882)
{var and__3822__auto____17883 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____17883)
{var ret__17884 = true;
var i__17885 = 0;
while(true){
if((function (){var or__3824__auto____17886 = cljs.core.not.call(null,ret__17884);
if(or__3824__auto____17886)
{return or__3824__auto____17886;
} else
{return (i__17885 === cljs.core.count.call(null,parent));
}
})())
{return ret__17884;
} else
{{
var G__17887 = isa_QMARK_.call(null,h,child.call(null,i__17885),parent.call(null,i__17885));
var G__17888 = (i__17885 + 1);
ret__17884 = G__17887;
i__17885 = G__17888;
continue;
}
}
break;
}
} else
{return and__3822__auto____17883;
}
} else
{return and__3822__auto____17882;
}
} else
{return and__3822__auto____17881;
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
var tp__17897 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__17898 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__17899 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__17900 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____17901 = ((cljs.core.contains_QMARK_.call(null,tp__17897.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__17899.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__17899.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__17897,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__17900.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__17898,parent,ta__17899),"\uFDD0'descendants":tf__17900.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__17899,tag,td__17898)});
})());
if(cljs.core.truth_(or__3824__auto____17901))
{return or__3824__auto____17901;
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
var parentMap__17906 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__17907 = (cljs.core.truth_(parentMap__17906.call(null,tag))?cljs.core.disj.call(null,parentMap__17906.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__17908 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__17907))?cljs.core.assoc.call(null,parentMap__17906,tag,childsParents__17907):cljs.core.dissoc.call(null,parentMap__17906,tag));
var deriv_seq__17909 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__17889_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__17889_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__17889_SHARP_),cljs.core.second.call(null,p1__17889_SHARP_)));
}),cljs.core.seq.call(null,newParents__17908)));
if(cljs.core.contains_QMARK_.call(null,parentMap__17906.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__17890_SHARP_,p2__17891_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__17890_SHARP_,p2__17891_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__17909));
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
var xprefs__17917 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____17919 = (cljs.core.truth_((function (){var and__3822__auto____17918 = xprefs__17917;
if(cljs.core.truth_(and__3822__auto____17918))
{return xprefs__17917.call(null,y);
} else
{return and__3822__auto____17918;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____17919))
{return or__3824__auto____17919;
} else
{var or__3824__auto____17921 = (function (){var ps__17920 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__17920) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__17920),prefer_table)))
{} else
{}
{
var G__17924 = cljs.core.rest.call(null,ps__17920);
ps__17920 = G__17924;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____17921))
{return or__3824__auto____17921;
} else
{var or__3824__auto____17923 = (function (){var ps__17922 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__17922) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__17922),y,prefer_table)))
{} else
{}
{
var G__17925 = cljs.core.rest.call(null,ps__17922);
ps__17922 = G__17925;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____17923))
{return or__3824__auto____17923;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____17927 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____17927))
{return or__3824__auto____17927;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__17945 = cljs.core.reduce.call(null,(function (be,p__17937){
var vec__17938__17939 = p__17937;
var k__17940 = cljs.core.nth.call(null,vec__17938__17939,0,null);
var ___17941 = cljs.core.nth.call(null,vec__17938__17939,1,null);
var e__17942 = vec__17938__17939;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__17940))
{var be2__17944 = (cljs.core.truth_((function (){var or__3824__auto____17943 = (be == null);
if(or__3824__auto____17943)
{return or__3824__auto____17943;
} else
{return cljs.core.dominates.call(null,k__17940,cljs.core.first.call(null,be),prefer_table);
}
})())?e__17942:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__17944),k__17940,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__17940),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__17944)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__17944;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__17945))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__17945));
return cljs.core.second.call(null,best_entry__17945);
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
if((function (){var and__3822__auto____17950 = mf;
if(and__3822__auto____17950)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____17950;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2322__auto____17951 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17952 = (cljs.core._reset[goog.typeOf(x__2322__auto____17951)]);
if(or__3824__auto____17952)
{return or__3824__auto____17952;
} else
{var or__3824__auto____17953 = (cljs.core._reset["_"]);
if(or__3824__auto____17953)
{return or__3824__auto____17953;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____17958 = mf;
if(and__3822__auto____17958)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____17958;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2322__auto____17959 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17960 = (cljs.core._add_method[goog.typeOf(x__2322__auto____17959)]);
if(or__3824__auto____17960)
{return or__3824__auto____17960;
} else
{var or__3824__auto____17961 = (cljs.core._add_method["_"]);
if(or__3824__auto____17961)
{return or__3824__auto____17961;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____17966 = mf;
if(and__3822__auto____17966)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____17966;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2322__auto____17967 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17968 = (cljs.core._remove_method[goog.typeOf(x__2322__auto____17967)]);
if(or__3824__auto____17968)
{return or__3824__auto____17968;
} else
{var or__3824__auto____17969 = (cljs.core._remove_method["_"]);
if(or__3824__auto____17969)
{return or__3824__auto____17969;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____17974 = mf;
if(and__3822__auto____17974)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____17974;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2322__auto____17975 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17976 = (cljs.core._prefer_method[goog.typeOf(x__2322__auto____17975)]);
if(or__3824__auto____17976)
{return or__3824__auto____17976;
} else
{var or__3824__auto____17977 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____17977)
{return or__3824__auto____17977;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____17982 = mf;
if(and__3822__auto____17982)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____17982;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2322__auto____17983 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17984 = (cljs.core._get_method[goog.typeOf(x__2322__auto____17983)]);
if(or__3824__auto____17984)
{return or__3824__auto____17984;
} else
{var or__3824__auto____17985 = (cljs.core._get_method["_"]);
if(or__3824__auto____17985)
{return or__3824__auto____17985;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____17990 = mf;
if(and__3822__auto____17990)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____17990;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2322__auto____17991 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____17992 = (cljs.core._methods[goog.typeOf(x__2322__auto____17991)]);
if(or__3824__auto____17992)
{return or__3824__auto____17992;
} else
{var or__3824__auto____17993 = (cljs.core._methods["_"]);
if(or__3824__auto____17993)
{return or__3824__auto____17993;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____17998 = mf;
if(and__3822__auto____17998)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____17998;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2322__auto____17999 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18000 = (cljs.core._prefers[goog.typeOf(x__2322__auto____17999)]);
if(or__3824__auto____18000)
{return or__3824__auto____18000;
} else
{var or__3824__auto____18001 = (cljs.core._prefers["_"]);
if(or__3824__auto____18001)
{return or__3824__auto____18001;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____18006 = mf;
if(and__3822__auto____18006)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____18006;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2322__auto____18007 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18008 = (cljs.core._dispatch[goog.typeOf(x__2322__auto____18007)]);
if(or__3824__auto____18008)
{return or__3824__auto____18008;
} else
{var or__3824__auto____18009 = (cljs.core._dispatch["_"]);
if(or__3824__auto____18009)
{return or__3824__auto____18009;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__18012 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__18013 = cljs.core._get_method.call(null,mf,dispatch_val__18012);
if(cljs.core.truth_(target_fn__18013))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__18012)].join('')));
}
return cljs.core.apply.call(null,target_fn__18013,args);
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
var this__18014 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__18015 = this;
cljs.core.swap_BANG_.call(null,this__18015.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18015.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18015.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18015.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__18016 = this;
cljs.core.swap_BANG_.call(null,this__18016.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__18016.method_cache,this__18016.method_table,this__18016.cached_hierarchy,this__18016.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__18017 = this;
cljs.core.swap_BANG_.call(null,this__18017.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__18017.method_cache,this__18017.method_table,this__18017.cached_hierarchy,this__18017.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__18018 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__18018.cached_hierarchy),cljs.core.deref.call(null,this__18018.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__18018.method_cache,this__18018.method_table,this__18018.cached_hierarchy,this__18018.hierarchy);
}
var temp__3971__auto____18019 = cljs.core.deref.call(null,this__18018.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____18019))
{var target_fn__18020 = temp__3971__auto____18019;
return target_fn__18020;
} else
{var temp__3971__auto____18021 = cljs.core.find_and_cache_best_method.call(null,this__18018.name,dispatch_val,this__18018.hierarchy,this__18018.method_table,this__18018.prefer_table,this__18018.method_cache,this__18018.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____18021))
{var target_fn__18022 = temp__3971__auto____18021;
return target_fn__18022;
} else
{return cljs.core.deref.call(null,this__18018.method_table).call(null,this__18018.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__18023 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__18023.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__18023.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__18023.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__18023.method_cache,this__18023.method_table,this__18023.cached_hierarchy,this__18023.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__18024 = this;
return cljs.core.deref.call(null,this__18024.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__18025 = this;
return cljs.core.deref.call(null,this__18025.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__18026 = this;
return cljs.core.do_dispatch.call(null,mf,this__18026.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__18028__delegate = function (_,args){
var self__18027 = this;
return cljs.core._dispatch.call(null,self__18027,args);
};
var G__18028 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18028__delegate.call(this, _, args);
};
G__18028.cljs$lang$maxFixedArity = 1;
G__18028.cljs$lang$applyTo = (function (arglist__18029){
var _ = cljs.core.first(arglist__18029);
var args = cljs.core.rest(arglist__18029);
return G__18028__delegate(_, args);
});
G__18028.cljs$lang$arity$variadic = G__18028__delegate;
return G__18028;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__18030 = this;
return cljs.core._dispatch.call(null,self__18030,args);
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
var this__18031 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_18033,_){
var this__18032 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__18032.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__18034 = this;
var and__3822__auto____18035 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____18035)
{return (this__18034.uuid === other.uuid);
} else
{return and__3822__auto____18035;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__18036 = this;
var this__18037 = this;
return cljs.core.pr_str.call(null,this__18037);
});
cljs.core.UUID;
