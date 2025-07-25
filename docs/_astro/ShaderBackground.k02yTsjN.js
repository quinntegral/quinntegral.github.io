import{r as dg,g as Dx,d as Px,a as Ke}from"./index.CsEDrpzt.js";var Ap={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function gb(){if(m_)return Ll;m_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,i,a){var l=null;if(a!==void 0&&(l=""+a),i.key!==void 0&&(l=""+i.key),"key"in i){a={};for(var c in i)c!=="key"&&(a[c]=i[c])}else a=i;return i=a.ref,{$$typeof:s,type:n,key:l,ref:i!==void 0?i:null,props:a}}return Ll.Fragment=e,Ll.jsx=t,Ll.jsxs=t,Ll}var g_;function vb(){return g_||(g_=1,Ap.exports=gb()),Ap.exports}var ft=vb();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="178",_b={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yb={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,Gm=1,Nx=2,xb=3,Lx=0,Sf=1,nc=2,is=3,Ks=0,ii=1,rs=2,Zs=0,Ca=1,km=2,Xm=3,Wm=4,Ox=5,Ar=100,Bx=101,zx=102,Ix=103,Fx=104,Hx=200,Vx=201,Gx=202,kx=203,Ah=204,wh=205,Xx=206,Wx=207,qx=208,Yx=209,Zx=210,jx=211,Kx=212,Jx=213,Qx=214,Rh=0,Dh=1,Ph=2,Ra=3,Uh=4,Nh=5,Lh=6,Oh=7,Dc=0,$x=1,e1=2,bs=0,t1=1,n1=2,i1=3,pg=4,s1=5,r1=6,a1=7,qm="attached",o1="detached",Mf=300,Js=301,Dr=302,ko=303,dc=304,el=306,pc=1e3,ki=1001,mc=1002,On=1003,mg=1004,Sb=1004,zo=1005,Mb=1005,cn=1006,ic=1007,Eb=1007,Ss=1008,bb=1008,Wi=1009,gg=1010,vg=1011,Xo=1012,Ef=1013,Qs=1014,Nn=1015,Ms=1016,bf=1017,Tf=1018,Wo=1020,_g=35902,yg=1021,xg=1022,Ln=1023,qo=1026,Yo=1027,Cf=1028,Pc=1029,Sg=1030,Af=1031,Tb=1032,wf=1033,sc=33776,rc=33777,ac=33778,oc=33779,Bh=35840,zh=35841,Ih=35842,Fh=35843,Hh=36196,Vh=37492,Gh=37496,kh=37808,Xh=37809,Wh=37810,qh=37811,Yh=37812,Zh=37813,jh=37814,Kh=37815,Jh=37816,Qh=37817,$h=37818,ef=37819,tf=37820,nf=37821,lc=36492,sf=36494,rf=36495,Mg=36283,af=36284,of=36285,lf=36286,l1=2200,c1=2201,u1=2202,gc=2300,cf=2301,Mh=2302,Ma=2400,Ea=2401,vc=2402,Rf=2500,Eg=2501,Cb=0,Ab=1,wb=2,h1=3200,f1=3201,Rb=3202,Db=3203,Nr=0,d1=1,qs="",qn="srgb",Pr="srgb-linear",_c="linear",qt="srgb",Pb=0,ya=7680,Ub=7681,Nb=7682,Lb=7683,Ob=34055,Bb=34056,zb=5386,Ib=512,Fb=513,Hb=514,Vb=515,Gb=516,kb=517,Xb=518,Ym=519,p1=512,m1=513,g1=514,bg=515,v1=516,_1=517,y1=518,x1=519,yc=35044,Wb=35048,qb=35040,Yb=35045,Zb=35049,jb=35041,Kb=35046,Jb=35050,Qb=35042,$b="100",Zm="300 es",Xi=2e3,xc=2001,eT={COMPUTE:"compute",RENDER:"render"},tT={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},nT={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,l=i.length;a<l;a++)i[a].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let v_=1234567;const Aa=Math.PI/180,Zo=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Tg(s,e){return(s%e+e)%e}function iT(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function sT(s,e,t){return s!==e?(t-s)/(e-s):0}function cc(s,e,t){return(1-t)*s+t*e}function rT(s,e,t,n){return cc(s,e,1-Math.exp(-t*n))}function aT(s,e=1){return e-Math.abs(Tg(s,e*2)-e)}function oT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cT(s,e){return s+Math.floor(Math.random()*(e-s+1))}function uT(s,e){return s+Math.random()*(e-s)}function hT(s){return s*(.5-Math.random())}function fT(s){s!==void 0&&(v_=s);let e=v_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dT(s){return s*Aa}function pT(s){return s*Zo}function mT(s){return(s&s-1)===0&&s!==0}function gT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _T(s,e,t,n,i){const a=Math.cos,l=Math.sin,c=a(t/2),u=l(t/2),f=a((e+n)/2),d=l((e+n)/2),m=a((e-n)/2),v=l((e-n)/2),_=a((n-e)/2),S=l((n-e)/2);switch(i){case"XYX":s.set(c*d,u*m,u*v,c*f);break;case"YZY":s.set(u*v,c*d,u*m,c*f);break;case"ZXZ":s.set(u*m,u*v,c*d,c*f);break;case"XZX":s.set(c*d,u*S,u*_,c*f);break;case"YXY":s.set(u*_,c*d,u*S,c*f);break;case"ZYZ":s.set(u*S,u*_,c*d,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yT={DEG2RAD:Aa,RAD2DEG:Zo,generateUUID:wi,clamp:_t,euclideanModulo:Tg,mapLinear:iT,inverseLerp:sT,lerp:cc,damp:rT,pingpong:aT,smoothstep:oT,smootherstep:lT,randInt:cT,randFloat:uT,randFloatSpread:hT,seededRandom:fT,degToRad:dT,radToDeg:pT,isPowerOfTwo:mT,ceilPowerOfTwo:gT,floorPowerOfTwo:vT,setQuaternionFromProperEuler:_T,normalize:St,denormalize:ni};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*i+e.x,this.y=a*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,l,c){let u=n[i+0],f=n[i+1],d=n[i+2],m=n[i+3];const v=a[l+0],_=a[l+1],S=a[l+2],T=a[l+3];if(c===0){e[t+0]=u,e[t+1]=f,e[t+2]=d,e[t+3]=m;return}if(c===1){e[t+0]=v,e[t+1]=_,e[t+2]=S,e[t+3]=T;return}if(m!==T||u!==v||f!==_||d!==S){let M=1-c;const g=u*v+f*_+d*S+m*T,x=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,g*x);M=Math.sin(M*A)/w,c=Math.sin(c*A)/w}const b=c*x;if(u=u*M+v*b,f=f*M+_*b,d=d*M+S*b,m=m*M+T*b,M===1-c){const w=1/Math.sqrt(u*u+f*f+d*d+m*m);u*=w,f*=w,d*=w,m*=w}}e[t]=u,e[t+1]=f,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,a,l){const c=n[i],u=n[i+1],f=n[i+2],d=n[i+3],m=a[l],v=a[l+1],_=a[l+2],S=a[l+3];return e[t]=c*S+d*m+u*_-f*v,e[t+1]=u*S+d*v+f*m-c*_,e[t+2]=f*S+d*_+c*v-u*m,e[t+3]=d*S-c*m-u*v-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,l=e._order,c=Math.cos,u=Math.sin,f=c(n/2),d=c(i/2),m=c(a/2),v=u(n/2),_=u(i/2),S=u(a/2);switch(l){case"XYZ":this._x=v*d*m+f*_*S,this._y=f*_*m-v*d*S,this._z=f*d*S+v*_*m,this._w=f*d*m-v*_*S;break;case"YXZ":this._x=v*d*m+f*_*S,this._y=f*_*m-v*d*S,this._z=f*d*S-v*_*m,this._w=f*d*m+v*_*S;break;case"ZXY":this._x=v*d*m-f*_*S,this._y=f*_*m+v*d*S,this._z=f*d*S+v*_*m,this._w=f*d*m-v*_*S;break;case"ZYX":this._x=v*d*m-f*_*S,this._y=f*_*m+v*d*S,this._z=f*d*S-v*_*m,this._w=f*d*m+v*_*S;break;case"YZX":this._x=v*d*m+f*_*S,this._y=f*_*m+v*d*S,this._z=f*d*S-v*_*m,this._w=f*d*m-v*_*S;break;case"XZY":this._x=v*d*m-f*_*S,this._y=f*_*m-v*d*S,this._z=f*d*S+v*_*m,this._w=f*d*m+v*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],l=t[1],c=t[5],u=t[9],f=t[2],d=t[6],m=t[10],v=n+c+m;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(d-u)*_,this._y=(a-f)*_,this._z=(l-i)*_}else if(n>c&&n>m){const _=2*Math.sqrt(1+n-c-m);this._w=(d-u)/_,this._x=.25*_,this._y=(i+l)/_,this._z=(a+f)/_}else if(c>m){const _=2*Math.sqrt(1+c-n-m);this._w=(a-f)/_,this._x=(i+l)/_,this._y=.25*_,this._z=(u+d)/_}else{const _=2*Math.sqrt(1+m-n-c);this._w=(l-i)/_,this._x=(a+f)/_,this._y=(u+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,l=e._w,c=t._x,u=t._y,f=t._z,d=t._w;return this._x=n*d+l*c+i*f-a*u,this._y=i*d+l*u+a*c-n*f,this._z=a*d+l*f+n*u-i*c,this._w=l*d-n*c-i*u-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+i*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=i,this._z=a,this;const u=1-c*c;if(u<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const f=Math.sqrt(u),d=Math.atan2(f,c),m=Math.sin((1-t)*d)/f,v=Math.sin(t*d)/f;return this._w=l*m+this._w*v,this._x=n*m+this._x*v,this._y=i*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(__.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(__.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,l=e.y,c=e.z,u=e.w,f=2*(l*i-c*n),d=2*(c*t-a*i),m=2*(a*n-l*t);return this.x=t+u*f+l*m-c*d,this.y=n+u*d+c*f-a*m,this.z=i+u*m+a*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,l=t.x,c=t.y,u=t.z;return this.x=i*u-a*c,this.y=a*l-n*u,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wp.copy(this).projectOnVector(e),this.sub(wp)}reflect(e){return this.sub(wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wp=new z,__=new di;class yt{constructor(e,t,n,i,a,l,c,u,f){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,l,c,u,f)}set(e,t,n,i,a,l,c,u,f){const d=this.elements;return d[0]=e,d[1]=i,d[2]=c,d[3]=t,d[4]=a,d[5]=u,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],d=n[4],m=n[7],v=n[2],_=n[5],S=n[8],T=i[0],M=i[3],g=i[6],x=i[1],E=i[4],b=i[7],w=i[2],A=i[5],U=i[8];return a[0]=l*T+c*x+u*w,a[3]=l*M+c*E+u*A,a[6]=l*g+c*b+u*U,a[1]=f*T+d*x+m*w,a[4]=f*M+d*E+m*A,a[7]=f*g+d*b+m*U,a[2]=v*T+_*x+S*w,a[5]=v*M+_*E+S*A,a[8]=v*g+_*b+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8];return t*l*d-t*c*f-n*a*d+n*c*u+i*a*f-i*l*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8],m=d*l-c*f,v=c*u-d*a,_=f*a-l*u,S=t*m+n*v+i*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=m*T,e[1]=(i*f-d*n)*T,e[2]=(c*n-i*l)*T,e[3]=v*T,e[4]=(d*t-i*u)*T,e[5]=(i*a-c*t)*T,e[6]=_*T,e[7]=(n*u-f*t)*T,e[8]=(l*t-n*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,l,c){const u=Math.cos(a),f=Math.sin(a);return this.set(n*u,n*f,-n*(u*l+f*c)+l+e,-i*f,i*u,-i*(-f*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Rp.makeScale(e,t)),this}rotate(e){return this.premultiply(Rp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rp=new yt;function S1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const xT={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Io(s,e){return new xT[s](e)}function Sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M1(){const s=Sc("canvas");return s.style.display="block",s}const y_={};function Vo(s){s in y_||(y_[s]=!0,console.warn(s))}function ST(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function MT(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ET(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const x_=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bT(){const s={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(i,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===qt&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===qt&&(i.r=Go(i.r),i.g=Go(i.g),i.b=Go(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qs?_c:this.spaces[i].transfer},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,l){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pr]:{primaries:e,whitePoint:n,transfer:_c,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:n,transfer:qt,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}const Rt=bT();function js(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let co;class E1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=Sc("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let l=0;l<a.length;l++)a[l]=js(a[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TT=0;class Rr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?a.push(Dp(i[l].image)):a.push(Dp(i[l]))}else a=Dp(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Dp(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?E1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CT=0;const Pp=new z;class mn extends ls{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=ki,i=ki,a=cn,l=Ss,c=Ln,u=Wi,f=mn.DEFAULT_ANISOTROPY,d=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=wi(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pp).x}get height(){return this.source.getSize(Pp).y}get depth(){return this.source.getSize(Pp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Mf;mn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const u=e.elements,f=u[0],d=u[4],m=u[8],v=u[1],_=u[5],S=u[9],T=u[2],M=u[6],g=u[10];if(Math.abs(d-v)<.01&&Math.abs(m-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(d+v)<.1&&Math.abs(m+T)<.1&&Math.abs(S+M)<.1&&Math.abs(f+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,b=(_+1)/2,w=(g+1)/2,A=(d+v)/4,U=(m+T)/4,N=(S+M)/4;return E>b&&E>w?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=A/n,a=U/n):b>w?b<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(b),n=A/i,a=N/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=U/a,i=N/a),this.set(n,i,a,t),this}let x=Math.sqrt((M-S)*(M-S)+(m-T)*(m-T)+(v-d)*(v-d));return Math.abs(x)<.001&&(x=1),this.x=(M-S)/x,this.y=(m-T)/x,this.z=(v-d)/x,this.w=Math.acos((f+_+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cg extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},a=new mn(i);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Cg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Df extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AT extends os{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Df(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Pf extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wT extends os{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Pf(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Yn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,$i):$i.fromBufferAttribute(a,l),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tu.copy(n.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const i=e.children;for(let a=0,l=i.length;a<l;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ol),Cu.subVectors(this.max,Ol),uo.subVectors(e.a,Ol),ho.subVectors(e.b,Ol),fo.subVectors(e.c,Ol),vr.subVectors(ho,uo),_r.subVectors(fo,ho),ia.subVectors(uo,fo);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-ia.z,ia.y,vr.z,0,-vr.x,_r.z,0,-_r.x,ia.z,0,-ia.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-ia.y,ia.x,0];return!Up(t,uo,ho,fo,Cu)||(t=[1,0,0,0,1,0,0,0,1],!Up(t,uo,ho,fo,Cu))?!1:(Au.crossVectors(vr,_r),t=[Au.x,Au.y,Au.z],Up(t,uo,ho,fo,Cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Is=[new z,new z,new z,new z,new z,new z,new z,new z],$i=new z,Tu=new Yn,uo=new z,ho=new z,fo=new z,vr=new z,_r=new z,ia=new z,Ol=new z,Cu=new z,Au=new z,sa=new z;function Up(s,e,t,n,i){for(let a=0,l=s.length-3;a<=l;a+=3){sa.fromArray(s,a);const c=i.x*Math.abs(sa.x)+i.y*Math.abs(sa.y)+i.z*Math.abs(sa.z),u=e.dot(sa),f=t.dot(sa),d=n.dot(sa);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>c)return!1}return!0}const RT=new Yn,Bl=new z,Np=new z;class Bn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):RT.setFromPoints(e).getCenter(n);let i=0;for(let a=0,l=e.length;a<l;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bl.subVectors(e,this.center);const t=Bl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Np.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bl.copy(e.center).add(Np)),this.expandByPoint(Bl.copy(e.center).sub(Np))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fs=new z,Lp=new z,wu=new z,yr=new z,Op=new z,Ru=new z,Bp=new z;class tl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fs.copy(this.origin).addScaledVector(this.direction,t),Fs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lp.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Lp);const a=e.distanceTo(t)*.5,l=-this.direction.dot(wu),c=yr.dot(this.direction),u=-yr.dot(wu),f=yr.lengthSq(),d=Math.abs(1-l*l);let m,v,_,S;if(d>0)if(m=l*u-c,v=l*c-u,S=a*d,m>=0)if(v>=-S)if(v<=S){const T=1/d;m*=T,v*=T,_=m*(m+l*v+2*c)+v*(l*m+v+2*u)+f}else v=a,m=Math.max(0,-(l*v+c)),_=-m*m+v*(v+2*u)+f;else v=-a,m=Math.max(0,-(l*v+c)),_=-m*m+v*(v+2*u)+f;else v<=-S?(m=Math.max(0,-(-l*a+c)),v=m>0?-a:Math.min(Math.max(-a,-u),a),_=-m*m+v*(v+2*u)+f):v<=S?(m=0,v=Math.min(Math.max(-a,-u),a),_=v*(v+2*u)+f):(m=Math.max(0,-(l*a+c)),v=m>0?a:Math.min(Math.max(-a,-u),a),_=-m*m+v*(v+2*u)+f);else v=l>0?-a:a,m=Math.max(0,-(l*v+c)),_=-m*m+v*(v+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Lp).addScaledVector(wu,v),_}intersectSphere(e,t){Fs.subVectors(e.center,this.origin);const n=Fs.dot(this.direction),i=Fs.dot(Fs)-n*n,a=e.radius*e.radius;if(i>a)return null;const l=Math.sqrt(a-i),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,l,c,u;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,i=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,i=(e.min.x-v.x)*f),d>=0?(a=(e.min.y-v.y)*d,l=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,l=(e.min.y-v.y)*d),n>l||a>i||((a>n||isNaN(n))&&(n=a),(l<i||isNaN(i))&&(i=l),m>=0?(c=(e.min.z-v.z)*m,u=(e.max.z-v.z)*m):(c=(e.max.z-v.z)*m,u=(e.min.z-v.z)*m),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fs)!==null}intersectTriangle(e,t,n,i,a){Op.subVectors(t,e),Ru.subVectors(n,e),Bp.crossVectors(Op,Ru);let l=this.direction.dot(Bp),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;yr.subVectors(this.origin,e);const u=c*this.direction.dot(Ru.crossVectors(yr,Ru));if(u<0)return null;const f=c*this.direction.dot(Op.cross(yr));if(f<0||u+f>l)return null;const d=-c*yr.dot(Bp);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,a,l,c,u,f,d,m,v,_,S,T,M){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,l,c,u,f,d,m,v,_,S,T,M)}set(e,t,n,i,a,l,c,u,f,d,m,v,_,S,T,M){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=a,g[5]=l,g[9]=c,g[13]=u,g[2]=f,g[6]=d,g[10]=m,g[14]=v,g[3]=_,g[7]=S,g[11]=T,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/po.setFromMatrixColumn(e,0).length(),a=1/po.setFromMatrixColumn(e,1).length(),l=1/po.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=l*d,_=l*m,S=c*d,T=c*m;t[0]=u*d,t[4]=-u*m,t[8]=f,t[1]=_+S*f,t[5]=v-T*f,t[9]=-c*u,t[2]=T-v*f,t[6]=S+_*f,t[10]=l*u}else if(e.order==="YXZ"){const v=u*d,_=u*m,S=f*d,T=f*m;t[0]=v+T*c,t[4]=S*c-_,t[8]=l*f,t[1]=l*m,t[5]=l*d,t[9]=-c,t[2]=_*c-S,t[6]=T+v*c,t[10]=l*u}else if(e.order==="ZXY"){const v=u*d,_=u*m,S=f*d,T=f*m;t[0]=v-T*c,t[4]=-l*m,t[8]=S+_*c,t[1]=_+S*c,t[5]=l*d,t[9]=T-v*c,t[2]=-l*f,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const v=l*d,_=l*m,S=c*d,T=c*m;t[0]=u*d,t[4]=S*f-_,t[8]=v*f+T,t[1]=u*m,t[5]=T*f+v,t[9]=_*f-S,t[2]=-f,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const v=l*u,_=l*f,S=c*u,T=c*f;t[0]=u*d,t[4]=T-v*m,t[8]=S*m+_,t[1]=m,t[5]=l*d,t[9]=-c*d,t[2]=-f*d,t[6]=_*m+S,t[10]=v-T*m}else if(e.order==="XZY"){const v=l*u,_=l*f,S=c*u,T=c*f;t[0]=u*d,t[4]=-m,t[8]=f*d,t[1]=v*m+T,t[5]=l*d,t[9]=_*m-S,t[2]=S*m-_,t[6]=c*d,t[10]=T*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DT,e,PT)}lookAt(e,t,n){const i=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),xr.crossVectors(n,Ci),xr.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),xr.crossVectors(n,Ci)),xr.normalize(),Du.crossVectors(Ci,xr),i[0]=xr.x,i[4]=Du.x,i[8]=Ci.x,i[1]=xr.y,i[5]=Du.y,i[9]=Ci.y,i[2]=xr.z,i[6]=Du.z,i[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],d=n[1],m=n[5],v=n[9],_=n[13],S=n[2],T=n[6],M=n[10],g=n[14],x=n[3],E=n[7],b=n[11],w=n[15],A=i[0],U=i[4],N=i[8],D=i[12],R=i[1],F=i[5],j=i[9],G=i[13],J=i[2],ie=i[6],V=i[10],$=i[14],W=i[3],le=i[7],ge=i[11],xe=i[15];return a[0]=l*A+c*R+u*J+f*W,a[4]=l*U+c*F+u*ie+f*le,a[8]=l*N+c*j+u*V+f*ge,a[12]=l*D+c*G+u*$+f*xe,a[1]=d*A+m*R+v*J+_*W,a[5]=d*U+m*F+v*ie+_*le,a[9]=d*N+m*j+v*V+_*ge,a[13]=d*D+m*G+v*$+_*xe,a[2]=S*A+T*R+M*J+g*W,a[6]=S*U+T*F+M*ie+g*le,a[10]=S*N+T*j+M*V+g*ge,a[14]=S*D+T*G+M*$+g*xe,a[3]=x*A+E*R+b*J+w*W,a[7]=x*U+E*F+b*ie+w*le,a[11]=x*N+E*j+b*V+w*ge,a[15]=x*D+E*G+b*$+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],l=e[1],c=e[5],u=e[9],f=e[13],d=e[2],m=e[6],v=e[10],_=e[14],S=e[3],T=e[7],M=e[11],g=e[15];return S*(+a*u*m-i*f*m-a*c*v+n*f*v+i*c*_-n*u*_)+T*(+t*u*_-t*f*v+a*l*v-i*l*_+i*f*d-a*u*d)+M*(+t*f*m-t*c*_-a*l*m+n*l*_+a*c*d-n*f*d)+g*(-i*c*d-t*u*m+t*c*v+i*l*m-n*l*v+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8],m=e[9],v=e[10],_=e[11],S=e[12],T=e[13],M=e[14],g=e[15],x=m*M*f-T*v*f+T*u*_-c*M*_-m*u*g+c*v*g,E=S*v*f-d*M*f-S*u*_+l*M*_+d*u*g-l*v*g,b=d*T*f-S*m*f+S*c*_-l*T*_-d*c*g+l*m*g,w=S*m*u-d*T*u-S*c*v+l*T*v+d*c*M-l*m*M,A=t*x+n*E+i*b+a*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=x*U,e[1]=(T*v*a-m*M*a-T*i*_+n*M*_+m*i*g-n*v*g)*U,e[2]=(c*M*a-T*u*a+T*i*f-n*M*f-c*i*g+n*u*g)*U,e[3]=(m*u*a-c*v*a-m*i*f+n*v*f+c*i*_-n*u*_)*U,e[4]=E*U,e[5]=(d*M*a-S*v*a+S*i*_-t*M*_-d*i*g+t*v*g)*U,e[6]=(S*u*a-l*M*a-S*i*f+t*M*f+l*i*g-t*u*g)*U,e[7]=(l*v*a-d*u*a+d*i*f-t*v*f-l*i*_+t*u*_)*U,e[8]=b*U,e[9]=(S*m*a-d*T*a-S*n*_+t*T*_+d*n*g-t*m*g)*U,e[10]=(l*T*a-S*c*a+S*n*f-t*T*f-l*n*g+t*c*g)*U,e[11]=(d*c*a-l*m*a-d*n*f+t*m*f+l*n*_-t*c*_)*U,e[12]=w*U,e[13]=(d*T*i-S*m*i+S*n*v-t*T*v-d*n*M+t*m*M)*U,e[14]=(S*c*i-l*T*i-S*n*u+t*T*u+l*n*M-t*c*M)*U,e[15]=(l*m*i-d*c*i+d*n*u-t*m*u-l*n*v+t*c*v)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,l=e.x,c=e.y,u=e.z,f=a*l,d=a*c;return this.set(f*l+n,f*c-i*u,f*u+i*c,0,f*c+i*u,d*c+n,d*u-i*l,0,f*u-i*c,d*u+i*l,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,l){return this.set(1,n,a,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,l=t._y,c=t._z,u=t._w,f=a+a,d=l+l,m=c+c,v=a*f,_=a*d,S=a*m,T=l*d,M=l*m,g=c*m,x=u*f,E=u*d,b=u*m,w=n.x,A=n.y,U=n.z;return i[0]=(1-(T+g))*w,i[1]=(_+b)*w,i[2]=(S-E)*w,i[3]=0,i[4]=(_-b)*A,i[5]=(1-(v+g))*A,i[6]=(M+x)*A,i[7]=0,i[8]=(S+E)*U,i[9]=(M-x)*U,i[10]=(1-(v+T))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=po.set(i[0],i[1],i[2]).length();const l=po.set(i[4],i[5],i[6]).length(),c=po.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],es.copy(this);const f=1/a,d=1/l,m=1/c;return es.elements[0]*=f,es.elements[1]*=f,es.elements[2]*=f,es.elements[4]*=d,es.elements[5]*=d,es.elements[6]*=d,es.elements[8]*=m,es.elements[9]*=m,es.elements[10]*=m,t.setFromRotationMatrix(es),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,i,a,l,c=Xi){const u=this.elements,f=2*a/(t-e),d=2*a/(n-i),m=(t+e)/(t-e),v=(n+i)/(n-i);let _,S;if(c===Xi)_=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(c===xc)_=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,a,l,c=Xi){const u=this.elements,f=1/(t-e),d=1/(n-i),m=1/(l-a),v=(t+e)*f,_=(n+i)*d;let S,T;if(c===Xi)S=(l+a)*m,T=-2*m;else if(c===xc)S=a*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-v,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=T,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const po=new z,es=new at,DT=new z(0,0,0),PT=new z(1,1,1),xr=new z,Du=new z,Ci=new z,M_=new at,E_=new di;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],l=i[4],c=i[8],u=i[1],f=i[5],d=i[9],m=i[2],v=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return M_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UT=0;const b_=new z,mo=new di,Hs=new at,Pu=new z,zl=new z,NT=new z,LT=new di,T_=new z(1,0,0),C_=new z(0,1,0),A_=new z(0,0,1),w_={type:"added"},OT={type:"removed"},go={type:"childadded",child:null},zp={type:"childremoved",child:null};class Lt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,t=new Ri,n=new di,i=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new yt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(T_,e)}rotateY(e){return this.rotateOnAxis(C_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,t){return b_.copy(e).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T_,e)}translateY(e){return this.translateOnAxis(C_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pu.copy(e):Pu.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hs.lookAt(zl,Pu,this.up):Hs.lookAt(Pu,zl,this.up),this.quaternion.setFromRotationMatrix(Hs),i&&(Hs.extractRotation(i.matrixWorld),mo.setFromRotationMatrix(Hs),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),go.child=e,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OT),zp.child=e,this.dispatchEvent(zp),zp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,e,NT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,LT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const m=u[f];a(e.shapes,m)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(a(e.materials,this.material[u]));i.material=c}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(a(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),f=l(e.textures),d=l(e.images),m=l(e.shapes),v=l(e.skeletons),_=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=i,n;function l(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ts=new z,Vs=new z,Ip=new z,Gs=new z,vo=new z,_o=new z,R_=new z,Fp=new z,Hp=new z,Vp=new z,Gp=new Nt,kp=new Nt,Xp=new Nt;class fi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ts.subVectors(e,t),i.cross(ts);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){ts.subVectors(i,t),Vs.subVectors(n,t),Ip.subVectors(e,t);const l=ts.dot(ts),c=ts.dot(Vs),u=ts.dot(Ip),f=Vs.dot(Vs),d=Vs.dot(Ip),m=l*f-c*c;if(m===0)return a.set(0,0,0),null;const v=1/m,_=(f*u-c*d)*v,S=(l*d-c*u)*v;return a.set(1-_-S,S,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gs)===null?!1:Gs.x>=0&&Gs.y>=0&&Gs.x+Gs.y<=1}static getInterpolation(e,t,n,i,a,l,c,u){return this.getBarycoord(e,t,n,i,Gs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Gs.x),u.addScaledVector(l,Gs.y),u.addScaledVector(c,Gs.z),u)}static getInterpolatedAttribute(e,t,n,i,a,l){return Gp.setScalar(0),kp.setScalar(0),Xp.setScalar(0),Gp.fromBufferAttribute(e,t),kp.fromBufferAttribute(e,n),Xp.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(Gp,a.x),l.addScaledVector(kp,a.y),l.addScaledVector(Xp,a.z),l}static isFrontFacing(e,t,n,i){return ts.subVectors(n,t),Vs.subVectors(e,t),ts.cross(Vs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ts.subVectors(this.c,this.b),Vs.subVectors(this.a,this.b),ts.cross(Vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let l,c;vo.subVectors(i,n),_o.subVectors(a,n),Fp.subVectors(e,n);const u=vo.dot(Fp),f=_o.dot(Fp);if(u<=0&&f<=0)return t.copy(n);Hp.subVectors(e,i);const d=vo.dot(Hp),m=_o.dot(Hp);if(d>=0&&m<=d)return t.copy(i);const v=u*m-d*f;if(v<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(vo,l);Vp.subVectors(e,a);const _=vo.dot(Vp),S=_o.dot(Vp);if(S>=0&&_<=S)return t.copy(a);const T=_*f-u*S;if(T<=0&&f>=0&&S<=0)return c=f/(f-S),t.copy(n).addScaledVector(_o,c);const M=d*S-_*m;if(M<=0&&m-d>=0&&_-S>=0)return R_.subVectors(a,i),c=(m-d)/(m-d+(_-S)),t.copy(i).addScaledVector(R_,c);const g=1/(M+T+v);return l=T*g,c=v*g,t.copy(n).addScaledVector(vo,l).addScaledVector(_o,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Wp(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=Tg(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Wp(l,a,e+1/3),this.g=Wp(l,a,e),this.b=Wp(l,a,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=qn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const n=b1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Rt.workingToColorSpace(Xn.copy(this),e),Math.round(_t(Xn.r*255,0,255))*65536+Math.round(_t(Xn.g*255,0,255))*256+Math.round(_t(Xn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Xn.copy(this),t);const n=Xn.r,i=Xn.g,a=Xn.b,l=Math.max(n,i,a),c=Math.min(n,i,a);let u,f;const d=(c+l)/2;if(c===l)u=0,f=0;else{const m=l-c;switch(f=d<=.5?m/(l+c):m/(2-l-c),l){case n:u=(i-a)/m+(i<a?6:0);break;case i:u=(a-n)/m+2;break;case a:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=d,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=qn){Rt.workingToColorSpace(Xn.copy(this),e);const t=Xn.r,n=Xn.g,i=Xn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Uu);const n=cc(Sr.h,Uu.h,t),i=cc(Sr.s,Uu.s,t),a=cc(Sr.l,Uu.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new ze;ze.NAMES=b1;let BT=0;class Zn extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ca,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=wh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(n.blending=this.blending),this.side!==Ks&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ah&&(n.blendSrc=this.blendSrc),this.blendDst!==wh&&(n.blendDst=this.blendDst),this.blendEquation!==Ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ya&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ya&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ya&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(t){const a=i(e.textures),l=i(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ys=zT();function zT(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const f=u-127;f<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):f<-14?(n[u]=1024>>-f-14,n[u|256]=1024>>-f-14|32768,i[u]=-f-1,i[u|256]=-f-1):f<=15?(n[u]=f+15<<10,n[u|256]=f+15<<10|32768,i[u]=13,i[u|256]=13):f<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const a=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let f=u<<13,d=0;for(;(f&8388608)===0;)f<<=1,d-=8388608;f&=-8388609,d+=947912704,a[u]=f|d}for(let u=1024;u<2048;++u)a[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)l[u]=u<<23;l[31]=1199570944,l[32]=2147483648;for(let u=33;u<63;++u)l[u]=2147483648+(u-32<<23);l[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:a,exponentTable:l,offsetTable:c}}function hi(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_t(s,-65504,65504),Ys.floatView[0]=s;const e=Ys.uint32View[0],t=e>>23&511;return Ys.baseTable[t]+((e&8388607)>>Ys.shiftTable[t])}function Ql(s){const e=s>>10;return Ys.uint32View[0]=Ys.mantissaTable[Ys.offsetTable[e]+(s&1023)]+Ys.exponentTable[e],Ys.floatView[0]}class $l{static toHalfFloat(e){return hi(e)}static fromHalfFloat(e){return Ql(e)}}const yn=new z,Nu=new de;let IT=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nu.fromBufferAttribute(this,t),Nu.applyMatrix3(e),this.setXY(t,Nu.x,Nu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class FT extends jt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class HT extends jt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class VT extends jt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class GT extends jt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ag extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kT extends jt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class wg extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class XT extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ql(this.array[e*this.itemSize]);return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=hi(t),this}getY(e){let t=Ql(this.array[e*this.itemSize+1]);return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=hi(t),this}getZ(e){let t=Ql(this.array[e*this.itemSize+2]);return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=hi(t),this}getW(e){let t=Ql(this.array[e*this.itemSize+3]);return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=hi(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(n),this.array[e+2]=hi(i),this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),a=St(a,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(n),this.array[e+2]=hi(i),this.array[e+3]=hi(a),this}}class He extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let WT=0;const Hi=new at,qp=new Lt,yo=new z,Ai=new Yn,Il=new Yn,An=new z;class gt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S1(e)?wg:Ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new yt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,n){return Hi.makeTranslation(e,t,n),this.applyMatrix4(Hi),this}scale(e,t,n){return Hi.makeScale(e,t,n),this.applyMatrix4(Hi),this}lookAt(e){return qp.lookAt(e),qp.updateMatrix(),this.applyMatrix4(qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Il.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(Ai.min,Il.min),Ai.expandByPoint(An),An.addVectors(Ai.max,Il.max),Ai.expandByPoint(An)):(Ai.expandByPoint(Il.min),Ai.expandByPoint(Il.max))}Ai.getCenter(n);let i=0;for(let a=0,l=e.count;a<l;a++)An.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(An));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],u=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)An.fromBufferAttribute(c,f),u&&(yo.fromBufferAttribute(e,f),An.add(yo)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let N=0;N<n.count;N++)c[N]=new z,u[N]=new z;const f=new z,d=new z,m=new z,v=new de,_=new de,S=new de,T=new z,M=new z;function g(N,D,R){f.fromBufferAttribute(n,N),d.fromBufferAttribute(n,D),m.fromBufferAttribute(n,R),v.fromBufferAttribute(a,N),_.fromBufferAttribute(a,D),S.fromBufferAttribute(a,R),d.sub(f),m.sub(f),_.sub(v),S.sub(v);const F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(T.copy(d).multiplyScalar(S.y).addScaledVector(m,-_.y).multiplyScalar(F),M.copy(m).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(F),c[N].add(T),c[D].add(T),c[R].add(T),u[N].add(M),u[D].add(M),u[R].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,D=x.length;N<D;++N){const R=x[N],F=R.start,j=R.count;for(let G=F,J=F+j;G<J;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new z,b=new z,w=new z,A=new z;function U(N){w.fromBufferAttribute(i,N),A.copy(w);const D=c[N];E.copy(D),E.sub(w.multiplyScalar(w.dot(D))).normalize(),b.crossVectors(A,D);const F=b.dot(u[N])<0?-1:1;l.setXYZW(N,E.x,E.y,E.z,F)}for(let N=0,D=x.length;N<D;++N){const R=x[N],F=R.start,j=R.count;for(let G=F,J=F+j;G<J;G+=3)U(e.getX(G+0)),U(e.getX(G+1)),U(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,_=n.count;v<_;v++)n.setXYZ(v,0,0,0);const i=new z,a=new z,l=new z,c=new z,u=new z,f=new z,d=new z,m=new z;if(e)for(let v=0,_=e.count;v<_;v+=3){const S=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);i.fromBufferAttribute(t,S),a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,M),d.subVectors(l,a),m.subVectors(i,a),d.cross(m),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),c.add(d),u.add(d),f.add(d),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(M,f.x,f.y,f.z)}else for(let v=0,_=t.count;v<_;v+=3)i.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),d.subVectors(l,a),m.subVectors(i,a),d.cross(m),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(c,u){const f=c.array,d=c.itemSize,m=c.normalized,v=new f.constructor(u.length*d);let _=0,S=0;for(let T=0,M=u.length;T<M;T++){c.isInterleavedBufferAttribute?_=u[T]*c.data.stride+c.offset:_=u[T]*d;for(let g=0;g<d;g++)v[S++]=f[_++]}return new jt(v,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],f=e(u,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,m=f.length;d<m;d++){const v=f[d],_=e(v,n);u.push(_)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const i={};let a=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let m=0,v=f.length;m<v;m++){const _=f[m];d.push(_.toJSON(e.data))}d.length>0&&(i[u]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const f in i){const d=i[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],m=a[f];for(let v=0,_=m.length;v<_;v++)d.push(m[v].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const m=l[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new at,ra=new tl,Lu=new Bn,P_=new z,Ou=new z,Bu=new z,zu=new z,Yp=new z,Iu=new z,U_=new z,Fu=new z;class pn extends Lt{constructor(e=new gt,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(a&&c){Iu.set(0,0,0);for(let u=0,f=a.length;u<f;u++){const d=c[u],m=a[u];d!==0&&(Yp.fromBufferAttribute(m,e),l?Iu.addScaledVector(Yp,d):Iu.addScaledVector(Yp.sub(t),d))}t.add(Iu)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lu.copy(n.boundingSphere),Lu.applyMatrix4(a),ra.copy(e.ray).recast(e.near),!(Lu.containsPoint(ra.origin)===!1&&(ra.intersectSphere(Lu,P_)===null||ra.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(D_.copy(a).invert(),ra.copy(e.ray).applyMatrix4(D_),!(n.boundingBox!==null&&ra.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}_computeIntersections(e,t,n){let i;const a=this.geometry,l=this.material,c=a.index,u=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,v=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,T=v.length;S<T;S++){const M=v[S],g=l[M.materialIndex],x=Math.max(M.start,_.start),E=Math.min(c.count,Math.min(M.start+M.count,_.start+_.count));for(let b=x,w=E;b<w;b+=3){const A=c.getX(b),U=c.getX(b+1),N=c.getX(b+2);i=Hu(this,g,e,n,f,d,m,A,U,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),T=Math.min(c.count,_.start+_.count);for(let M=S,g=T;M<g;M+=3){const x=c.getX(M),E=c.getX(M+1),b=c.getX(M+2);i=Hu(this,l,e,n,f,d,m,x,E,b),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let S=0,T=v.length;S<T;S++){const M=v[S],g=l[M.materialIndex],x=Math.max(M.start,_.start),E=Math.min(u.count,Math.min(M.start+M.count,_.start+_.count));for(let b=x,w=E;b<w;b+=3){const A=b,U=b+1,N=b+2;i=Hu(this,g,e,n,f,d,m,A,U,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),T=Math.min(u.count,_.start+_.count);for(let M=S,g=T;M<g;M+=3){const x=M,E=M+1,b=M+2;i=Hu(this,l,e,n,f,d,m,x,E,b),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}}function qT(s,e,t,n,i,a,l,c){let u;if(e.side===ii?u=n.intersectTriangle(l,a,i,!0,c):u=n.intersectTriangle(i,a,l,e.side===Ks,c),u===null)return null;Fu.copy(c),Fu.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Fu);return f<t.near||f>t.far?null:{distance:f,point:Fu.clone(),object:s}}function Hu(s,e,t,n,i,a,l,c,u,f){s.getVertexPosition(c,Ou),s.getVertexPosition(u,Bu),s.getVertexPosition(f,zu);const d=qT(s,e,t,n,Ou,Bu,zu,U_);if(d){const m=new z;fi.getBarycoord(U_,Ou,Bu,zu,m),i&&(d.uv=fi.getInterpolatedAttribute(i,c,u,f,m,new de)),a&&(d.uv1=fi.getInterpolatedAttribute(a,c,u,f,m,new de)),l&&(d.normal=fi.getInterpolatedAttribute(l,c,u,f,m,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const v={a:c,b:u,c:f,normal:new z,materialIndex:0};fi.getNormal(Ou,Bu,zu,v.normal),d.face=v,d.barycoord=m}return d}class Na extends gt{constructor(e=1,t=1,n=1,i=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:l};const c=this;i=Math.floor(i),a=Math.floor(a),l=Math.floor(l);const u=[],f=[],d=[],m=[];let v=0,_=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,i,l,2),S("x","z","y",1,-1,e,n,-t,i,l,3),S("x","y","z",1,-1,e,t,n,i,a,4),S("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(u),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(m,2));function S(T,M,g,x,E,b,w,A,U,N,D){const R=b/U,F=w/N,j=b/2,G=w/2,J=A/2,ie=U+1,V=N+1;let $=0,W=0;const le=new z;for(let ge=0;ge<V;ge++){const xe=ge*F-G;for(let Le=0;Le<ie;Le++){const Qe=Le*R-j;le[T]=Qe*x,le[M]=xe*E,le[g]=J,f.push(le.x,le.y,le.z),le[T]=0,le[M]=0,le[g]=A>0?1:-1,d.push(le.x,le.y,le.z),m.push(Le/U),m.push(1-ge/N),$+=1}}for(let ge=0;ge<N;ge++)for(let xe=0;xe<U;xe++){const Le=v+xe+ie*ge,Qe=v+xe+ie*(ge+1),te=v+(xe+1)+ie*(ge+1),Se=v+(xe+1)+ie*ge;u.push(Le,Qe,Se),u.push(Qe,te,Se),W+=6}c.addGroup(_,W,D),_+=W,v+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const n=Ko(s[t]);for(const i in n)e[i]=n[i]}return e}function YT(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function T1(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Uc={clone:Ko,merge:ei};var ZT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=YT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new z,N_=new de,L_=new de;class wn extends Uf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,N_,L_),t.subVectors(L_,N_)}setViewOffset(e,t,n,i,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*i/u,t-=l.offsetY*n/f,i*=l.width/u,n*=l.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xo=-90,So=1;class C1 extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wn(xo,So,e,t);i.layers=this.layers,this.add(i);const a=new wn(xo,So,e,t);a.layers=this.layers,this.add(a);const l=new wn(xo,So,e,t);l.layers=this.layers,this.add(l);const c=new wn(xo,So,e,t);c.layers=this.layers,this.add(c);const u=new wn(xo,So,e,t);u.layers=this.layers,this.add(u);const f=new wn(xo,So,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,l,c,u]=t;for(const f of t)this.remove(f);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,u,f,d]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(m,v,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Nc extends mn{constructor(e=[],t=Js,n,i,a,l,c,u,f,d){super(e,t,n,i,a,l,c,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A1 extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Na(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ii,blending:Zs});a.uniforms.tEquirect.value=t;const l=new pn(i,a),c=t.minFilter;return t.minFilter===Ss&&(t.minFilter=cn),new C1(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(a)}}class Fo extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,l=null;const c=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const T of e.hand.values()){const M=t.getJointPose(T,n),g=this._getHandJoint(f,T);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],v=d.position.distanceTo(m.position),_=.02,S=.005;f.inputState.pinching&&v>_+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=_-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Nf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lf{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Lf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rg extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new z;class Da{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),a=St(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Da(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dg extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mo;const Fl=new z,Eo=new z,bo=new z,To=new de,Hl=new de,w1=new at,Vu=new z,Vl=new z,Gu=new z,O_=new de,Zp=new de,B_=new de;class R1 extends Lt{constructor(e=new Dg){if(super(),this.isSprite=!0,this.type="Sprite",Mo===void 0){Mo=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Of(t,5);Mo.setIndex([0,1,2,0,2,3]),Mo.setAttribute("position",new Da(n,3,0,!1)),Mo.setAttribute("uv",new Da(n,2,3,!1))}this.geometry=Mo,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Eo.setFromMatrixScale(this.matrixWorld),w1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Eo.multiplyScalar(-bo.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const l=this.center;ku(Vu.set(-.5,-.5,0),bo,l,Eo,i,a),ku(Vl.set(.5,-.5,0),bo,l,Eo,i,a),ku(Gu.set(.5,.5,0),bo,l,Eo,i,a),O_.set(0,0),Zp.set(1,0),B_.set(1,1);let c=e.ray.intersectTriangle(Vu,Vl,Gu,!1,Fl);if(c===null&&(ku(Vl.set(-.5,.5,0),bo,l,Eo,i,a),Zp.set(0,1),c=e.ray.intersectTriangle(Vu,Gu,Vl,!1,Fl),c===null))return;const u=e.ray.origin.distanceTo(Fl);u<e.near||u>e.far||t.push({distance:u,point:Fl.clone(),uv:fi.getInterpolation(Fl,Vu,Vl,Gu,O_,Zp,B_,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ku(s,e,t,n,i,a){To.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Hl.x=a*To.x-i*To.y,Hl.y=i*To.x+a*To.y):Hl.copy(To),s.copy(e),s.x+=Hl.x,s.y+=Hl.y,s.applyMatrix4(w1)}const Xu=new z,z_=new z;class D1 extends Lt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const a=t[n];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let a;for(a=0;a<i.length&&!(t<i[a].distance);a++);return i.splice(a,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),e<a)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Xu.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Xu);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Xu.setFromMatrixPosition(e.matrixWorld),z_.setFromMatrixPosition(this.matrixWorld);const n=Xu.distanceTo(z_)/e.zoom;t[0].object.visible=!0;let i,a;for(i=1,a=t.length;i<a;i++){let l=t[i].distance;if(t[i].object.visible&&(l-=l*t[i].hysteresis),n>=l)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<a;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,a=n.length;i<a;i++){const l=n[i];t.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return t}}const I_=new z,F_=new Nt,H_=new Nt,JT=new z,V_=new at,Wu=new z,jp=new Bn,G_=new at,Kp=new tl;class P1 extends pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qm,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wu),this.boundingBox.expandByPoint(Wu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wu),this.boundingSphere.expandByPoint(Wu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jp.copy(this.boundingSphere),jp.applyMatrix4(i),e.ray.intersectsSphere(jp)!==!1&&(G_.copy(i).invert(),Kp.copy(e.ray).applyMatrix4(G_),!(this.boundingBox!==null&&Kp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;F_.fromBufferAttribute(i.attributes.skinIndex,e),H_.fromBufferAttribute(i.attributes.skinWeight,e),I_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=H_.getComponent(a);if(l!==0){const c=F_.getComponent(a);V_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(JT.copy(I_).applyMatrix4(V_),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pg extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ts extends mn{constructor(e=null,t=1,n=1,i,a,l,c,u,f=On,d=On,m,v){super(null,l,c,u,f,d,i,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const k_=new at,QT=new at;class Bf{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const c=e[a]?e[a].matrixWorld:QT;k_.multiplyMatrices(c,t[a]),k_.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ts(t,e,e,Ln,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new Pg),this.bones.push(l),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Jo extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Co=new at,X_=new at,qu=[],W_=new Yn,$T=new at,Gl=new pn,kl=new Bn;class U1 extends pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$T)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),W_.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(W_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),kl.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(kl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,l=e*a+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gl.geometry=this.geometry,Gl.material=this.material,Gl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(n),e.ray.intersectsSphere(kl)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Co),X_.multiplyMatrices(n,Co),Gl.matrixWorld=X_,Gl.raycast(e,qu);for(let l=0,c=qu.length;l<c;l++){const u=qu[l];u.instanceId=a,u.object=this,t.push(u)}qu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(i*this.count),i,this.count,Cf,Nn));const a=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,u=i*e;a[u]=c,a.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jp=new z,eC=new z,tC=new yt;class Cr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jp.subVectors(n,t).cross(eC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jp),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tC.getNormalMatrix(e),i=this.coplanarPoint(Jp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const aa=new Bn,nC=new de(.5,.5),Yu=new z;class nl{constructor(e=new Cr,t=new Cr,n=new Cr,i=new Cr,a=new Cr,l=new Cr){this.planes=[e,t,n,i,a,l]}set(e,t,n,i,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,a=i[0],l=i[1],c=i[2],u=i[3],f=i[4],d=i[5],m=i[6],v=i[7],_=i[8],S=i[9],T=i[10],M=i[11],g=i[12],x=i[13],E=i[14],b=i[15];if(n[0].setComponents(u-a,v-f,M-_,b-g).normalize(),n[1].setComponents(u+a,v+f,M+_,b+g).normalize(),n[2].setComponents(u+l,v+d,M+S,b+x).normalize(),n[3].setComponents(u-l,v-d,M-S,b-x).normalize(),n[4].setComponents(u-c,v-m,M-T,b-E).normalize(),t===Xi)n[5].setComponents(u+c,v+m,M+T,b+E).normalize();else if(t===xc)n[5].setComponents(c,m,T,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),aa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),aa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(aa)}intersectsSprite(e){aa.center.set(0,0,0);const t=nC.distanceTo(e.center);return aa.radius=.7071067811865476+t,aa.applyMatrix4(e.matrixWorld),this.intersectsSphere(aa)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yu.x=i.normal.x>0?e.max.x:e.min.x,Yu.y=i.normal.y>0?e.max.y:e.min.y,Yu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vs=new at,_s=new nl;class zf{constructor(){this.coordinateSystem=Xi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_s.setFromProjectionMatrix(vs,this.coordinateSystem),_s.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_s.setFromProjectionMatrix(vs,this.coordinateSystem),_s.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_s.setFromProjectionMatrix(vs,this.coordinateSystem),_s.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_s.setFromProjectionMatrix(vs,this.coordinateSystem),_s.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(vs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_s.setFromProjectionMatrix(vs,this.coordinateSystem),_s.containsPoint(e))return!0}return!1}clone(){return new zf}}function Qp(s,e){return s-e}function iC(s,e){return s.z-e.z}function sC(s,e){return e.z-s.z}class rC{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const a=this.pool,l=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});const c=a[this.index];l.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const ci=new at,aC=new ze(1,1,1),q_=new nl,oC=new zf,Zu=new Yn,oa=new Bn,Xl=new z,Y_=new z,lC=new z,$p=new rC,Wn=new pn,ju=[];function cC(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let a=0;a<i;a++)for(let l=0;l<n;l++)e.setComponent(a+t,l,s.getComponent(a,l))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function la(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class N1 extends pn{constructor(e,t,n=t*2,i){super(new gt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ts(t,e,e,Ln,Nn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Ts(t,e,e,Pc,Qs);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Ts(t,e,e,Ln,Nn);n.colorSpace=Rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const l=e.getAttribute(a),{array:c,itemSize:u,normalized:f}=l,d=new c.constructor(n*u),m=new jt(d,u,f);t.setAttribute(a,m)}if(e.getIndex()!==null){const a=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new jt(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),a=t.getAttribute(n);if(i.itemSize!==a.itemSize||i.normalized!==a.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const a=t[n].geometryIndex;this.getMatrixAt(n,ci),this.getBoundingBoxAt(a,Zu).applyMatrix4(ci),e.union(Zu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const a=t[n].geometryIndex;this.getMatrixAt(n,ci),this.getBoundingSphereAt(a,oa).applyMatrix4(ci),e.union(oa)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Qp),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const a=this._matricesTexture;ci.identity().toArray(a.image.data,i*16),a.needsUpdate=!0;const l=this._colorsTexture;return l&&(aC.toArray(l.image.data,i*4),l.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},a=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const l=e.getIndex();if(l!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?l.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Qp),u=this._availableGeometryIds.shift(),a[u]=i):(u=this._geometryCount,this._geometryCount++,a.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,a=n.getIndex(),l=t.getIndex(),c=this._geometryInfo[e];if(i&&l.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,f=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const d in n.attributes){const m=t.getAttribute(d),v=n.getAttribute(d);cC(m,v,u);const _=m.itemSize;for(let S=m.count,T=f;S<T;S++){const M=u+S;for(let g=0;g<_;g++)v.setComponent(M,g,0)}v.needsUpdate=!0,v.addUpdateRange(u*_,f*_)}if(i){const d=c.indexStart,m=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let v=0;v<l.count;v++)a.setX(d+v,u+l.getX(v));for(let v=l.count,_=m;v<_;v++)a.setX(d+v,u);a.needsUpdate=!0,a.addUpdateRange(d,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,a=n.length;i<a;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((l,c)=>c).sort((l,c)=>n[l].vertexStart-n[c].vertexStart),a=this.geometry;for(let l=0,c=n.length;l<c;l++){const u=i[l],f=n[u];if(f.active!==!1){if(a.index!==null){if(f.indexStart!==t){const{indexStart:d,vertexStart:m,reservedIndexCount:v}=f,_=a.index,S=_.array,T=e-m;for(let M=d;M<d+v;M++)S[M]=S[M]+T;_.array.copyWithin(t,d,d+v),_.addUpdateRange(t,v),f.indexStart=t}t+=f.reservedIndexCount}if(f.vertexStart!==e){const{vertexStart:d,reservedVertexCount:m}=f,v=a.attributes;for(const _ in v){const S=v[_],{array:T,itemSize:M}=S;T.copyWithin(e*M,d*M,(d+m)*M),S.addUpdateRange(e*M,m*M)}f.vertexStart=e}e+=f.reservedVertexCount,f.start=a.index?f.indexStart:f.vertexStart,this._nextIndexStart=a.index?f.indexStart+f.reservedIndexCount:0,this._nextVertexStart=f.vertexStart+f.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const a=new Yn,l=n.index,c=n.attributes.position;for(let u=i.start,f=i.start+i.count;u<f;u++){let d=u;l&&(d=l.getX(d)),a.expandByPoint(Xl.fromBufferAttribute(c,d))}i.boundingBox=a}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const a=new Bn;this.getBoundingBoxAt(e,Zu),Zu.getCenter(a.center);const l=n.index,c=n.attributes.position;let u=0;for(let f=i.start,d=i.start+i.count;f<d;f++){let m=f;l&&(m=l.getX(m)),Xl.fromBufferAttribute(c,m),u=Math.max(u,a.center.distanceToSquared(Xl))}a.radius=Math.sqrt(u),i.boundingSphere=a}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Qp);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),a=new Int32Array(e);la(this._multiDrawCounts,i),la(this._multiDrawStarts,a),this._multiDrawCounts=i,this._multiDrawStarts=a,this._maxInstanceCount=e;const l=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),la(l.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),la(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),la(u.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const a=this.geometry;a.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new gt,this._initializeGeometry(a));const l=this.geometry;a.index&&la(a.index.array,l.index.array);for(const c in a.attributes)la(a.attributes[c].array,l.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,a=this.matrixWorld,l=this.geometry;Wn.material=this.material,Wn.geometry.index=l.index,Wn.geometry.attributes=l.attributes,Wn.geometry.boundingBox===null&&(Wn.geometry.boundingBox=new Yn),Wn.geometry.boundingSphere===null&&(Wn.geometry.boundingSphere=new Bn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const f=n[c].geometryIndex,d=i[f];Wn.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(c,Wn.matrixWorld).premultiply(a),this.getBoundingBoxAt(f,Wn.geometry.boundingBox),this.getBoundingSphereAt(f,Wn.geometry.boundingSphere),Wn.raycast(e,ju);for(let m=0,v=ju.length;m<v;m++){const _=ju[m];_.object=this,_.batchId=c,t.push(_)}ju.length=0}Wn.material=null,Wn.geometry.index=null,Wn.geometry.attributes={},Wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,u=this._instanceInfo,f=this._multiDrawStarts,d=this._multiDrawCounts,m=this._geometryInfo,v=this.perObjectFrustumCulled,_=this._indirectTexture,S=_.image.data,T=n.isArrayCamera?oC:q_;v&&!n.isArrayCamera&&(ci.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),q_.setFromProjectionMatrix(ci,e.coordinateSystem));let M=0;if(this.sortObjects){ci.copy(this.matrixWorld).invert(),Xl.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ci),Y_.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ci);for(let E=0,b=u.length;E<b;E++)if(u[E].visible&&u[E].active){const w=u[E].geometryIndex;this.getMatrixAt(E,ci),this.getBoundingSphereAt(w,oa).applyMatrix4(ci);let A=!1;if(v&&(A=!T.intersectsSphere(oa,n)),!A){const U=m[w],N=lC.subVectors(oa.center,Xl).dot(Y_);$p.push(U.start,U.count,N,E)}}const g=$p.list,x=this.customSort;x===null?g.sort(a.transparent?sC:iC):x.call(this,g,n);for(let E=0,b=g.length;E<b;E++){const w=g[E];f[M]=w.start*c,d[M]=w.count,S[M]=w.index,M++}$p.reset()}else for(let g=0,x=u.length;g<x;g++)if(u[g].visible&&u[g].active){const E=u[g].geometryIndex;let b=!1;if(v&&(this.getMatrixAt(g,ci),this.getBoundingSphereAt(E,oa).applyMatrix4(ci),b=!T.intersectsSphere(oa,n)),!b){const w=m[E];f[M]=w.start*c,d[M]=w.count,S[M]=g,M++}}_.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,a,l){this.onBeforeRender(e,null,i,a,l)}}class si extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uf=new z,hf=new z,Z_=new at,Wl=new tl,Ku=new Bn,em=new z,j_=new z;class Ur extends Lt{constructor(e=new gt,t=new si){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)uf.fromBufferAttribute(t,i-1),hf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uf.distanceTo(hf);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ku.copy(n.boundingSphere),Ku.applyMatrix4(i),Ku.radius+=a,e.ray.intersectsSphere(Ku)===!1)return;Z_.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(Z_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=this.isLineSegments?2:1,d=n.index,v=n.attributes.position;if(d!==null){const _=Math.max(0,l.start),S=Math.min(d.count,l.start+l.count);for(let T=_,M=S-1;T<M;T+=f){const g=d.getX(T),x=d.getX(T+1),E=Ju(this,e,Wl,u,g,x,T);E&&t.push(E)}if(this.isLineLoop){const T=d.getX(S-1),M=d.getX(_),g=Ju(this,e,Wl,u,T,M,S-1);g&&t.push(g)}}else{const _=Math.max(0,l.start),S=Math.min(v.count,l.start+l.count);for(let T=_,M=S-1;T<M;T+=f){const g=Ju(this,e,Wl,u,T,T+1,T);g&&t.push(g)}if(this.isLineLoop){const T=Ju(this,e,Wl,u,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ju(s,e,t,n,i,a,l){const c=s.geometry.attributes.position;if(uf.fromBufferAttribute(c,i),hf.fromBufferAttribute(c,a),t.distanceSqToSegment(uf,hf,em,j_)>n)return;em.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(em);if(!(f<e.near||f>e.far))return{distance:f,point:j_.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const K_=new z,J_=new z;class Cs extends Ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)K_.fromBufferAttribute(t,i),J_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+K_.distanceTo(J_);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L1 extends Ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ug extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Q_=new at,jm=new tl,Qu=new Bn,$u=new z;class O1 extends Lt{constructor(e=new gt,t=new Ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qu.copy(n.boundingSphere),Qu.applyMatrix4(i),Qu.radius+=a,e.ray.intersectsSphere(Qu)===!1)return;Q_.copy(i).invert(),jm.copy(e.ray).applyMatrix4(Q_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=n.index,m=n.attributes.position;if(f!==null){const v=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let S=v,T=_;S<T;S++){const M=f.getX(S);$u.fromBufferAttribute(m,M),$_($u,M,u,i,e,t,this)}}else{const v=Math.max(0,l.start),_=Math.min(m.count,l.start+l.count);for(let S=v,T=_;S<T;S++)$u.fromBufferAttribute(m,S),$_($u,S,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function $_(s,e,t,n,i,a,l){const c=jm.distanceSqToPoint(s);if(c<t){const u=new z;jm.closestPointToPoint(s,u),u.applyMatrix4(n);const f=i.ray.origin.distanceTo(u);if(f<i.near||f>i.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class B1 extends mn{constructor(e,t,n,i,a=cn,l=cn,c,u,f){super(e,t,n,i,a,l,c,u,f),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function m(){d.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class uC extends B1{constructor(e,t,n,i,a,l,c,u){super({},e,t,n,i,a,l,c,u),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class hC extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=On,this.minFilter=On,this.generateMipmaps=!1,this.needsUpdate=!0}}class If extends mn{constructor(e,t,n,i,a,l,c,u,f,d,m,v){super(null,l,c,u,f,d,i,a,m,v),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class fC extends If{constructor(e,t,n,i,a,l){super(e,t,n,a,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ki,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dC extends If{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Js),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class pC extends mn{constructor(e,t,n,i,a,l,c,u,f){super(e,t,n,i,a,l,c,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ng extends mn{constructor(e,t,n=Qs,i,a,l,c=On,u=On,f,d=qo,m=1){if(d!==qo&&d!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,i,a,l,c,u,d,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ff extends gt{constructor(e=1,t=1,n=4,i=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),a=Math.max(1,Math.floor(a));const l=[],c=[],u=[],f=[],d=t/2,m=Math.PI/2*e,v=t,_=2*m+v,S=n*2+a,T=i+1,M=new z,g=new z;for(let x=0;x<=S;x++){let E=0,b=0,w=0,A=0;if(x<=n){const D=x/n,R=D*Math.PI/2;b=-d-e*Math.cos(R),w=e*Math.sin(R),A=-e*Math.cos(R),E=D*m}else if(x<=n+a){const D=(x-n)/a;b=-d+D*t,w=e,A=0,E=m+D*v}else{const D=(x-n-a)/n,R=D*Math.PI/2;b=d+e*Math.sin(R),w=e*Math.cos(R),A=e*Math.sin(R),E=m+v+D*m}const U=Math.max(0,Math.min(1,E/_));let N=0;x===0?N=.5/i:x===S&&(N=-.5/i);for(let D=0;D<=i;D++){const R=D/i,F=R*Math.PI*2,j=Math.sin(F),G=Math.cos(F);g.x=-w*G,g.y=b,g.z=w*j,c.push(g.x,g.y,g.z),M.set(-w*G,A,w*j),M.normalize(),u.push(M.x,M.y,M.z),f.push(R+N,U)}if(x>0){const D=(x-1)*T;for(let R=0;R<i;R++){const F=D+R,j=D+R+1,G=x*T+R,J=x*T+R+1;l.push(F,j,G),l.push(j,J,G)}}}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hf extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],l=[],c=[],u=[],f=new z,d=new de;l.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){const _=n+m/t*i;f.x=e*Math.cos(_),f.y=e*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),d.x=(l[v]/e+1)/2,d.y=(l[v+1]/e+1)/2,u.push(d.x,d.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lc extends gt{constructor(e=1,t=1,n=1,i=32,a=1,l=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:u};const f=this;i=Math.floor(i),a=Math.floor(a);const d=[],m=[],v=[],_=[];let S=0;const T=[],M=n/2;let g=0;x(),l===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(_,2));function x(){const b=new z,w=new z;let A=0;const U=(t-e)/n;for(let N=0;N<=a;N++){const D=[],R=N/a,F=R*(t-e)+e;for(let j=0;j<=i;j++){const G=j/i,J=G*u+c,ie=Math.sin(J),V=Math.cos(J);w.x=F*ie,w.y=-R*n+M,w.z=F*V,m.push(w.x,w.y,w.z),b.set(ie,U,V).normalize(),v.push(b.x,b.y,b.z),_.push(G,1-R),D.push(S++)}T.push(D)}for(let N=0;N<i;N++)for(let D=0;D<a;D++){const R=T[D][N],F=T[D+1][N],j=T[D+1][N+1],G=T[D][N+1];(e>0||D!==0)&&(d.push(R,F,G),A+=3),(t>0||D!==a-1)&&(d.push(F,j,G),A+=3)}f.addGroup(g,A,0),g+=A}function E(b){const w=S,A=new de,U=new z;let N=0;const D=b===!0?e:t,R=b===!0?1:-1;for(let j=1;j<=i;j++)m.push(0,M*R,0),v.push(0,R,0),_.push(.5,.5),S++;const F=S;for(let j=0;j<=i;j++){const J=j/i*u+c,ie=Math.cos(J),V=Math.sin(J);U.x=D*V,U.y=M*R,U.z=D*ie,m.push(U.x,U.y,U.z),v.push(0,R,0),A.x=ie*.5+.5,A.y=V*.5*R+.5,_.push(A.x,A.y),S++}for(let j=0;j<i;j++){const G=w+j,J=F+j;b===!0?d.push(J,J+1,G):d.push(J+1,J,G),N+=3}f.addGroup(g,N,b===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc extends Lc{constructor(e=1,t=1,n=32,i=1,a=!1,l=0,c=Math.PI*2){super(0,e,t,n,i,a,l,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:l,thetaLength:c}}static fromJSON(e){return new Oc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],l=[];c(i),f(n),d(),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(a.slice(),3)),this.setAttribute("uv",new He(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(x){const E=new z,b=new z,w=new z;for(let A=0;A<t.length;A+=3)_(t[A+0],E),_(t[A+1],b),_(t[A+2],w),u(E,b,w,x)}function u(x,E,b,w){const A=w+1,U=[];for(let N=0;N<=A;N++){U[N]=[];const D=x.clone().lerp(b,N/A),R=E.clone().lerp(b,N/A),F=A-N;for(let j=0;j<=F;j++)j===0&&N===A?U[N][j]=D:U[N][j]=D.clone().lerp(R,j/F)}for(let N=0;N<A;N++)for(let D=0;D<2*(A-N)-1;D++){const R=Math.floor(D/2);D%2===0?(v(U[N][R+1]),v(U[N+1][R]),v(U[N][R])):(v(U[N][R+1]),v(U[N+1][R+1]),v(U[N+1][R]))}}function f(x){const E=new z;for(let b=0;b<a.length;b+=3)E.x=a[b+0],E.y=a[b+1],E.z=a[b+2],E.normalize().multiplyScalar(x),a[b+0]=E.x,a[b+1]=E.y,a[b+2]=E.z}function d(){const x=new z;for(let E=0;E<a.length;E+=3){x.x=a[E+0],x.y=a[E+1],x.z=a[E+2];const b=M(x)/2/Math.PI+.5,w=g(x)/Math.PI+.5;l.push(b,1-w)}S(),m()}function m(){for(let x=0;x<l.length;x+=6){const E=l[x+0],b=l[x+2],w=l[x+4],A=Math.max(E,b,w),U=Math.min(E,b,w);A>.9&&U<.1&&(E<.2&&(l[x+0]+=1),b<.2&&(l[x+2]+=1),w<.2&&(l[x+4]+=1))}}function v(x){a.push(x.x,x.y,x.z)}function _(x,E){const b=x*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function S(){const x=new z,E=new z,b=new z,w=new z,A=new de,U=new de,N=new de;for(let D=0,R=0;D<a.length;D+=9,R+=6){x.set(a[D+0],a[D+1],a[D+2]),E.set(a[D+3],a[D+4],a[D+5]),b.set(a[D+6],a[D+7],a[D+8]),A.set(l[R+0],l[R+1]),U.set(l[R+2],l[R+3]),N.set(l[R+4],l[R+5]),w.copy(x).add(E).add(b).divideScalar(3);const F=M(w);T(A,R+0,x,F),T(U,R+2,E,F),T(N,R+4,b,F)}}function T(x,E,b,w){w<0&&x.x===1&&(l[E]=x.x-1),b.x===0&&b.z===0&&(l[E]=w/2/Math.PI+.5)}function M(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.vertices,e.indices,e.radius,e.details)}}class Vf extends Or{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vf(e.radius,e.detail)}}const eh=new z,th=new z,tm=new z,nh=new fi;class z1 extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),a=Math.cos(Aa*t),l=e.getIndex(),c=e.getAttribute("position"),u=l?l.count:c.count,f=[0,0,0],d=["a","b","c"],m=new Array(3),v={},_=[];for(let S=0;S<u;S+=3){l?(f[0]=l.getX(S),f[1]=l.getX(S+1),f[2]=l.getX(S+2)):(f[0]=S,f[1]=S+1,f[2]=S+2);const{a:T,b:M,c:g}=nh;if(T.fromBufferAttribute(c,f[0]),M.fromBufferAttribute(c,f[1]),g.fromBufferAttribute(c,f[2]),nh.getNormal(tm),m[0]=`${Math.round(T.x*i)},${Math.round(T.y*i)},${Math.round(T.z*i)}`,m[1]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,m[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let x=0;x<3;x++){const E=(x+1)%3,b=m[x],w=m[E],A=nh[d[x]],U=nh[d[E]],N=`${b}_${w}`,D=`${w}_${b}`;D in v&&v[D]?(tm.dot(v[D].normal)<=a&&(_.push(A.x,A.y,A.z),_.push(U.x,U.y,U.z)),v[D]=null):N in v||(v[N]={index0:f[x],index1:f[E],normal:tm.clone()})}}for(const S in v)if(v[S]){const{index0:T,index1:M}=v[S];eh.fromBufferAttribute(c,T),th.fromBufferAttribute(c,M),_.push(eh.x,eh.y,eh.z),_.push(th.x,th.y,th.z)}this.setAttribute("position",new He(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,u=a-1,f;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),f=n[i]-l,f<0)c=i+1;else if(f>0)u=i-1;else{u=i;break}if(i=u,n[i]===l)return i/(a-1);const d=n[i],v=n[i+1]-d,_=(l-d)/v;return(i+_)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const l=this.getPoint(i),c=this.getPoint(a),u=t||(l.isVector2?new de:new z);return u.copy(c).sub(l).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,i=[],a=[],l=[],c=new z,u=new at;for(let _=0;_<=e;_++){const S=_/e;i[_]=this.getTangentAt(S,new z)}a[0]=new z,l[0]=new z;let f=Number.MAX_VALUE;const d=Math.abs(i[0].x),m=Math.abs(i[0].y),v=Math.abs(i[0].z);d<=f&&(f=d,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),v<=f&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],c),l[0].crossVectors(i[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(i[_-1],i[_]),c.length()>Number.EPSILON){c.normalize();const S=Math.acos(_t(i[_-1].dot(i[_]),-1,1));a[_].applyMatrix4(u.makeRotationAxis(c,S))}l[_].crossVectors(i[_],a[_])}if(t===!0){let _=Math.acos(_t(a[0].dot(a[e]),-1,1));_/=e,i[0].dot(c.crossVectors(a[0],a[e]))>0&&(_=-_);for(let S=1;S<=e;S++)a[S].applyMatrix4(u.makeRotationAxis(i[S],_*S)),l[S].crossVectors(i[S],a[S])}return{tangents:i,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gf extends cs{constructor(e=0,t=0,n=1,i=1,a=0,l=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new de){const n=t,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(l?a=0:a=i),this.aClockwise===!0&&!l&&(a===i?a=-i:a=a-i);const c=this.aStartAngle+e*a;let u=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=u-this.aX,_=f-this.aY;u=v*d-_*m+this.aX,f=v*m+_*d+this.aY}return n.set(u,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class I1 extends Gf{constructor(e,t,n,i,a,l){super(e,t,n,n,i,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Lg(){let s=0,e=0,t=0,n=0;function i(a,l,c,u){s=a,e=c,t=-3*a+3*l-2*c-u,n=2*a-2*l+c+u}return{initCatmullRom:function(a,l,c,u,f){i(l,c,f*(c-a),f*(u-l))},initNonuniformCatmullRom:function(a,l,c,u,f,d,m){let v=(l-a)/f-(c-a)/(f+d)+(c-l)/d,_=(c-l)/d-(u-l)/(d+m)+(u-c)/m;v*=d,_*=d,i(l,c,v,_)},calc:function(a){const l=a*a,c=l*a;return s+e*a+t*l+n*c}}}const ih=new z,nm=new Lg,im=new Lg,sm=new Lg;class F1 extends cs{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,a=i.length,l=(a-(this.closed?0:1))*e;let c=Math.floor(l),u=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:u===0&&c===a-1&&(c=a-2,u=1);let f,d;this.closed||c>0?f=i[(c-1)%a]:(ih.subVectors(i[0],i[1]).add(i[0]),f=ih);const m=i[c%a],v=i[(c+1)%a];if(this.closed||c+2<a?d=i[(c+2)%a]:(ih.subVectors(i[a-1],i[a-2]).add(i[a-1]),d=ih),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(f.distanceToSquared(m),_),T=Math.pow(m.distanceToSquared(v),_),M=Math.pow(v.distanceToSquared(d),_);T<1e-4&&(T=1),S<1e-4&&(S=T),M<1e-4&&(M=T),nm.initNonuniformCatmullRom(f.x,m.x,v.x,d.x,S,T,M),im.initNonuniformCatmullRom(f.y,m.y,v.y,d.y,S,T,M),sm.initNonuniformCatmullRom(f.z,m.z,v.z,d.z,S,T,M)}else this.curveType==="catmullrom"&&(nm.initCatmullRom(f.x,m.x,v.x,d.x,this.tension),im.initCatmullRom(f.y,m.y,v.y,d.y,this.tension),sm.initCatmullRom(f.z,m.z,v.z,d.z,this.tension));return n.set(nm.calc(u),im.calc(u),sm.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ey(s,e,t,n,i){const a=(n-e)*.5,l=(i-t)*.5,c=s*s,u=s*c;return(2*t-2*n+a+l)*u+(-3*t+3*n-2*a-l)*c+a*s+t}function mC(s,e){const t=1-s;return t*t*e}function gC(s,e){return 2*(1-s)*s*e}function vC(s,e){return s*s*e}function uc(s,e,t,n){return mC(s,e)+gC(s,t)+vC(s,n)}function _C(s,e){const t=1-s;return t*t*t*e}function yC(s,e){const t=1-s;return 3*t*t*s*e}function xC(s,e){return 3*(1-s)*s*s*e}function SC(s,e){return s*s*s*e}function hc(s,e,t,n,i){return _C(s,e)+yC(s,t)+xC(s,n)+SC(s,i)}class Og extends cs{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(hc(e,i.x,a.x,l.x,c.x),hc(e,i.y,a.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H1 extends cs{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(hc(e,i.x,a.x,l.x,c.x),hc(e,i.y,a.y,l.y,c.y),hc(e,i.z,a.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bg extends cs{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V1 extends cs{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zg extends cs{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,a=this.v1,l=this.v2;return n.set(uc(e,i.x,a.x,l.x),uc(e,i.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ig extends cs{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,a=this.v1,l=this.v2;return n.set(uc(e,i.x,a.x,l.x),uc(e,i.y,a.y,l.y),uc(e,i.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fg extends cs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,a=(i.length-1)*e,l=Math.floor(a),c=a-l,u=i[l===0?l:l-1],f=i[l],d=i[l>i.length-2?i.length-1:l+1],m=i[l>i.length-3?i.length-1:l+2];return n.set(ey(c,u.x,f.x,d.x,m.x),ey(c,u.y,f.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}var ff=Object.freeze({__proto__:null,ArcCurve:I1,CatmullRomCurve3:F1,CubicBezierCurve:Og,CubicBezierCurve3:H1,EllipseCurve:Gf,LineCurve:Bg,LineCurve3:V1,QuadraticBezierCurve:zg,QuadraticBezierCurve3:Ig,SplineCurve:Fg});class G1 extends cs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ff[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const l=i[a]-n,c=this.curves[a],u=c.getLength(),f=u===0?0:1-l/u;return c.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const l=a[i],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,u=l.getPoints(c);for(let f=0;f<u.length;f++){const d=u[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ff[i.type]().fromJSON(i))}return this}}class df extends G1{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Bg(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const a=new zg(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,a,l){const c=new Og(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,a,l),this}absarc(e,t,n,i,a,l){return this.absellipse(e,t,n,n,i,a,l),this}ellipse(e,t,n,i,a,l,c,u){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,i,a,l,c,u),this}absellipse(e,t,n,i,a,l,c,u){const f=new Gf(e,t,n,i,a,l,c,u);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wa extends df{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new df().fromJSON(i))}return this}}function MC(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let a=k1(s,0,i,t,!0);const l=[];if(!a||a.next===a.prev)return l;let c,u,f;if(n&&(a=AC(s,e,a,t)),s.length>80*t){c=1/0,u=1/0;let d=-1/0,m=-1/0;for(let v=t;v<i;v+=t){const _=s[v],S=s[v+1];_<c&&(c=_),S<u&&(u=S),_>d&&(d=_),S>m&&(m=S)}f=Math.max(d-c,m-u),f=f!==0?32767/f:0}return Mc(a,l,t,c,u,f,0),l}function k1(s,e,t,n,i){let a;if(i===IC(s,e,t,n)>0)for(let l=e;l<t;l+=n)a=ty(l/n|0,s[l],s[l+1],a);else for(let l=t-n;l>=e;l-=n)a=ty(l/n|0,s[l],s[l+1],a);return a&&Qo(a,a.next)&&(bc(a),a=a.next),a}function Pa(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Qo(t,t.next)||ln(t.prev,t,t.next)===0)){if(bc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mc(s,e,t,n,i,a,l){if(!s)return;!l&&a&&UC(s,n,i,a);let c=s;for(;s.prev!==s.next;){const u=s.prev,f=s.next;if(a?bC(s,n,i,a):EC(s)){e.push(u.i,s.i,f.i),bc(s),s=f.next,c=f.next;continue}if(s=f,s===c){l?l===1?(s=TC(Pa(s),e),Mc(s,e,t,n,i,a,2)):l===2&&CC(s,e,t,n,i,a):Mc(Pa(s),e,t,n,i,a,1);break}}}function EC(s){const e=s.prev,t=s,n=s.next;if(ln(e,t,n)>=0)return!1;const i=e.x,a=t.x,l=n.x,c=e.y,u=t.y,f=n.y,d=Math.min(i,a,l),m=Math.min(c,u,f),v=Math.max(i,a,l),_=Math.max(c,u,f);let S=n.next;for(;S!==e;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=_&&ec(i,c,a,u,l,f,S.x,S.y)&&ln(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function bC(s,e,t,n){const i=s.prev,a=s,l=s.next;if(ln(i,a,l)>=0)return!1;const c=i.x,u=a.x,f=l.x,d=i.y,m=a.y,v=l.y,_=Math.min(c,u,f),S=Math.min(d,m,v),T=Math.max(c,u,f),M=Math.max(d,m,v),g=Km(_,S,e,t,n),x=Km(T,M,e,t,n);let E=s.prevZ,b=s.nextZ;for(;E&&E.z>=g&&b&&b.z<=x;){if(E.x>=_&&E.x<=T&&E.y>=S&&E.y<=M&&E!==i&&E!==l&&ec(c,d,u,m,f,v,E.x,E.y)&&ln(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=_&&b.x<=T&&b.y>=S&&b.y<=M&&b!==i&&b!==l&&ec(c,d,u,m,f,v,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=g;){if(E.x>=_&&E.x<=T&&E.y>=S&&E.y<=M&&E!==i&&E!==l&&ec(c,d,u,m,f,v,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=x;){if(b.x>=_&&b.x<=T&&b.y>=S&&b.y<=M&&b!==i&&b!==l&&ec(c,d,u,m,f,v,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function TC(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Qo(n,i)&&W1(n,t,t.next,i)&&Ec(n,i)&&Ec(i,n)&&(e.push(n.i,t.i,i.i),bc(t),bc(t.next),t=s=i),t=t.next}while(t!==s);return Pa(t)}function CC(s,e,t,n,i,a){let l=s;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&OC(l,c)){let u=q1(l,c);l=Pa(l,l.next),u=Pa(u,u.next),Mc(l,e,t,n,i,a,0),Mc(u,e,t,n,i,a,0);return}c=c.next}l=l.next}while(l!==s)}function AC(s,e,t,n){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a]*n,u=a<l-1?e[a+1]*n:s.length,f=k1(s,c,u,n,!1);f===f.next&&(f.steiner=!0),i.push(LC(f))}i.sort(wC);for(let a=0;a<i.length;a++)t=RC(i[a],t);return t}function wC(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function RC(s,e){const t=DC(s,e);if(!t)return e;const n=q1(t,s);return Pa(n,n.next),Pa(t,t.next)}function DC(s,e){let t=e;const n=s.x,i=s.y;let a=-1/0,l;if(Qo(s,t))return t;do{if(Qo(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const m=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>a&&(a=m,l=t.x<t.next.x?t:t.next,m===n))return l}t=t.next}while(t!==e);if(!l)return null;const c=l,u=l.x,f=l.y;let d=1/0;t=l;do{if(n>=t.x&&t.x>=u&&n!==t.x&&X1(i<f?n:a,i,u,f,i<f?a:n,i,t.x,t.y)){const m=Math.abs(i-t.y)/(n-t.x);Ec(t,s)&&(m<d||m===d&&(t.x>l.x||t.x===l.x&&PC(l,t)))&&(l=t,d=m)}t=t.next}while(t!==c);return l}function PC(s,e){return ln(s.prev,s,e.prev)<0&&ln(e.next,s,s.next)<0}function UC(s,e,t,n){let i=s;do i.z===0&&(i.z=Km(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,NC(i)}function NC(s){let e,t=1;do{let n=s,i;s=null;let a=null;for(e=0;n;){e++;let l=n,c=0;for(let f=0;f<t&&(c++,l=l.nextZ,!!l);f++);let u=t;for(;c>0||u>0&&l;)c!==0&&(u===0||!l||n.z<=l.z)?(i=n,n=n.nextZ,c--):(i=l,l=l.nextZ,u--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=l}a.nextZ=null,t*=2}while(e>1);return s}function Km(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function LC(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function X1(s,e,t,n,i,a,l,c){return(i-l)*(e-c)>=(s-l)*(a-c)&&(s-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(a-c)>=(i-l)*(n-c)}function ec(s,e,t,n,i,a,l,c){return!(s===l&&e===c)&&X1(s,e,t,n,i,a,l,c)}function OC(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!BC(s,e)&&(Ec(s,e)&&Ec(e,s)&&zC(s,e)&&(ln(s.prev,s,e.prev)||ln(s,e.prev,e))||Qo(s,e)&&ln(s.prev,s,s.next)>0&&ln(e.prev,e,e.next)>0)}function ln(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Qo(s,e){return s.x===e.x&&s.y===e.y}function W1(s,e,t,n){const i=rh(ln(s,e,t)),a=rh(ln(s,e,n)),l=rh(ln(t,n,s)),c=rh(ln(t,n,e));return!!(i!==a&&l!==c||i===0&&sh(s,t,e)||a===0&&sh(s,n,e)||l===0&&sh(t,s,n)||c===0&&sh(t,e,n))}function sh(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function rh(s){return s>0?1:s<0?-1:0}function BC(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&W1(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ec(s,e){return ln(s.prev,s,s.next)<0?ln(s,e,s.next)>=0&&ln(s,s.prev,e)>=0:ln(s,e,s.prev)<0||ln(s,s.next,e)<0}function zC(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,a=(s.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&i<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function q1(s,e){const t=Jm(s.i,s.x,s.y),n=Jm(e.i,e.x,e.y),i=s.next,a=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function ty(s,e,t,n){const i=Jm(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jm(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function IC(s,e,t,n){let i=0;for(let a=e,l=t-n;a<t;a+=n)i+=(s[l]-s[a])*(s[a+1]+s[l+1]),l=a;return i}class FC{static triangulate(e,t,n=2){return MC(e,t,n)}}class as{static area(e){const t=e.length;let n=0;for(let i=t-1,a=0;a<t;i=a++)n+=e[i].x*e[a].y-e[a].x*e[i].y;return n*.5}static isClockWise(e){return as.area(e)<0}static triangulateShape(e,t){const n=[],i=[],a=[];ny(e),iy(n,e);let l=e.length;t.forEach(ny);for(let u=0;u<t.length;u++)i.push(l),l+=t[u].length,iy(n,t[u]);const c=FC.triangulate(n,i);for(let u=0;u<c.length;u+=3)a.push(c.slice(u,u+3));return a}}function ny(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function iy(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class kf extends gt{constructor(e=new wa([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],a=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];l(f)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(a,2)),this.computeVertexNormals();function l(c){const u=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,_=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:_-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:HC;let E,b=!1,w,A,U,N;g&&(E=g.getSpacedPoints(d),b=!0,v=!1,w=g.computeFrenetFrames(d,!1),A=new z,U=new z,N=new z),v||(M=0,_=0,S=0,T=0);const D=c.extractPoints(f);let R=D.shape;const F=D.holes;if(!as.isClockWise(R)){R=R.reverse();for(let B=0,Ce=F.length;B<Ce;B++){const ve=F[B];as.isClockWise(ve)&&(F[B]=ve.reverse())}}function G(B){const ve=10000000000000001e-36;let be=B[0];for(let ue=1;ue<=B.length;ue++){const Ie=ue%B.length,me=B[Ie],Be=me.x-be.x,dt=me.y-be.y,I=Be*Be+dt*dt,P=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(be.x),Math.abs(be.y)),K=ve*P*P;if(I<=K){B.splice(Ie,1),ue--;continue}be=me}}G(R),F.forEach(G);const J=F.length,ie=R;for(let B=0;B<J;B++){const Ce=F[B];R=R.concat(Ce)}function V(B,Ce,ve){return Ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Ce,ve)}const $=R.length;function W(B,Ce,ve){let be,ue,Ie;const me=B.x-Ce.x,Be=B.y-Ce.y,dt=ve.x-B.x,I=ve.y-B.y,P=me*me+Be*Be,K=me*I-Be*dt;if(Math.abs(K)>Number.EPSILON){const re=Math.sqrt(P),pe=Math.sqrt(dt*dt+I*I),ae=Ce.x-Be/re,je=Ce.y+me/re,we=ve.x-I/pe,Xe=ve.y+dt/pe,Ze=((we-ae)*I-(Xe-je)*dt)/(me*I-Be*dt);be=ae+me*Ze-B.x,ue=je+Be*Ze-B.y;const fe=be*be+ue*ue;if(fe<=2)return new de(be,ue);Ie=Math.sqrt(fe/2)}else{let re=!1;me>Number.EPSILON?dt>Number.EPSILON&&(re=!0):me<-Number.EPSILON?dt<-Number.EPSILON&&(re=!0):Math.sign(Be)===Math.sign(I)&&(re=!0),re?(be=-Be,ue=me,Ie=Math.sqrt(P)):(be=me,ue=Be,Ie=Math.sqrt(P/2))}return new de(be/Ie,ue/Ie)}const le=[];for(let B=0,Ce=ie.length,ve=Ce-1,be=B+1;B<Ce;B++,ve++,be++)ve===Ce&&(ve=0),be===Ce&&(be=0),le[B]=W(ie[B],ie[ve],ie[be]);const ge=[];let xe,Le=le.concat();for(let B=0,Ce=J;B<Ce;B++){const ve=F[B];xe=[];for(let be=0,ue=ve.length,Ie=ue-1,me=be+1;be<ue;be++,Ie++,me++)Ie===ue&&(Ie=0),me===ue&&(me=0),xe[be]=W(ve[be],ve[Ie],ve[me]);ge.push(xe),Le=Le.concat(xe)}let Qe;if(M===0)Qe=as.triangulateShape(ie,F);else{const B=[],Ce=[];for(let ve=0;ve<M;ve++){const be=ve/M,ue=_*Math.cos(be*Math.PI/2),Ie=S*Math.sin(be*Math.PI/2)+T;for(let me=0,Be=ie.length;me<Be;me++){const dt=V(ie[me],le[me],Ie);vt(dt.x,dt.y,-ue),be===0&&B.push(dt)}for(let me=0,Be=J;me<Be;me++){const dt=F[me];xe=ge[me];const I=[];for(let P=0,K=dt.length;P<K;P++){const re=V(dt[P],xe[P],Ie);vt(re.x,re.y,-ue),be===0&&I.push(re)}be===0&&Ce.push(I)}}Qe=as.triangulateShape(B,Ce)}const te=Qe.length,Se=S+T;for(let B=0;B<$;B++){const Ce=v?V(R[B],Le[B],Se):R[B];b?(U.copy(w.normals[0]).multiplyScalar(Ce.x),A.copy(w.binormals[0]).multiplyScalar(Ce.y),N.copy(E[0]).add(U).add(A),vt(N.x,N.y,N.z)):vt(Ce.x,Ce.y,0)}for(let B=1;B<=d;B++)for(let Ce=0;Ce<$;Ce++){const ve=v?V(R[Ce],Le[Ce],Se):R[Ce];b?(U.copy(w.normals[B]).multiplyScalar(ve.x),A.copy(w.binormals[B]).multiplyScalar(ve.y),N.copy(E[B]).add(U).add(A),vt(N.x,N.y,N.z)):vt(ve.x,ve.y,m/d*B)}for(let B=M-1;B>=0;B--){const Ce=B/M,ve=_*Math.cos(Ce*Math.PI/2),be=S*Math.sin(Ce*Math.PI/2)+T;for(let ue=0,Ie=ie.length;ue<Ie;ue++){const me=V(ie[ue],le[ue],be);vt(me.x,me.y,m+ve)}for(let ue=0,Ie=F.length;ue<Ie;ue++){const me=F[ue];xe=ge[ue];for(let Be=0,dt=me.length;Be<dt;Be++){const I=V(me[Be],xe[Be],be);b?vt(I.x,I.y+E[d-1].y,E[d-1].x+ve):vt(I.x,I.y,m+ve)}}}qe(),De();function qe(){const B=i.length/3;if(v){let Ce=0,ve=$*Ce;for(let be=0;be<te;be++){const ue=Qe[be];$e(ue[2]+ve,ue[1]+ve,ue[0]+ve)}Ce=d+M*2,ve=$*Ce;for(let be=0;be<te;be++){const ue=Qe[be];$e(ue[0]+ve,ue[1]+ve,ue[2]+ve)}}else{for(let Ce=0;Ce<te;Ce++){const ve=Qe[Ce];$e(ve[2],ve[1],ve[0])}for(let Ce=0;Ce<te;Ce++){const ve=Qe[Ce];$e(ve[0]+$*d,ve[1]+$*d,ve[2]+$*d)}}n.addGroup(B,i.length/3-B,0)}function De(){const B=i.length/3;let Ce=0;ke(ie,Ce),Ce+=ie.length;for(let ve=0,be=F.length;ve<be;ve++){const ue=F[ve];ke(ue,Ce),Ce+=ue.length}n.addGroup(B,i.length/3-B,1)}function ke(B,Ce){let ve=B.length;for(;--ve>=0;){const be=ve;let ue=ve-1;ue<0&&(ue=B.length-1);for(let Ie=0,me=d+M*2;Ie<me;Ie++){const Be=$*Ie,dt=$*(Ie+1),I=Ce+be+Be,P=Ce+ue+Be,K=Ce+ue+dt,re=Ce+be+dt;Ft(I,P,K,re)}}}function vt(B,Ce,ve){u.push(B),u.push(Ce),u.push(ve)}function $e(B,Ce,ve){Et(B),Et(Ce),Et(ve);const be=i.length/3,ue=x.generateTopUV(n,i,be-3,be-2,be-1);ct(ue[0]),ct(ue[1]),ct(ue[2])}function Ft(B,Ce,ve,be){Et(B),Et(Ce),Et(be),Et(Ce),Et(ve),Et(be);const ue=i.length/3,Ie=x.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);ct(Ie[0]),ct(Ie[1]),ct(Ie[3]),ct(Ie[1]),ct(Ie[2]),ct(Ie[3])}function Et(B){i.push(u[B*3+0]),i.push(u[B*3+1]),i.push(u[B*3+2])}function ct(B){a.push(B.x),a.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return VC(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,l=e.shapes.length;a<l;a++){const c=t[e.shapes[a]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ff[i.type]().fromJSON(i)),new kf(n,e.options)}}const HC={generateTopUV:function(s,e,t,n,i){const a=e[t*3],l=e[t*3+1],c=e[n*3],u=e[n*3+1],f=e[i*3],d=e[i*3+1];return[new de(a,l),new de(c,u),new de(f,d)]},generateSideWallUV:function(s,e,t,n,i,a){const l=e[t*3],c=e[t*3+1],u=e[t*3+2],f=e[n*3],d=e[n*3+1],m=e[n*3+2],v=e[i*3],_=e[i*3+1],S=e[i*3+2],T=e[a*3],M=e[a*3+1],g=e[a*3+2];return Math.abs(c-d)<Math.abs(l-f)?[new de(l,1-u),new de(f,1-m),new de(v,1-S),new de(T,1-g)]:[new de(c,1-u),new de(d,1-m),new de(_,1-S),new de(M,1-g)]}};function VC(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];t.shapes.push(a.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xf extends Or{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xf(e.radius,e.detail)}}class Wf extends gt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,Math.PI*2);const a=[],l=[],c=[],u=[],f=[],d=1/t,m=new z,v=new de,_=new z,S=new z,T=new z;let M=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:M=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,_.x=g*1,_.y=-M,_.z=g*0,T.copy(_),_.normalize(),u.push(_.x,_.y,_.z);break;case e.length-1:u.push(T.x,T.y,T.z);break;default:M=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,_.x=g*1,_.y=-M,_.z=g*0,S.copy(_),_.x+=T.x,_.y+=T.y,_.z+=T.z,_.normalize(),u.push(_.x,_.y,_.z),T.copy(S)}for(let x=0;x<=t;x++){const E=n+x*d*i,b=Math.sin(E),w=Math.cos(E);for(let A=0;A<=e.length-1;A++){m.x=e[A].x*b,m.y=e[A].y,m.z=e[A].x*w,l.push(m.x,m.y,m.z),v.x=x/t,v.y=A/(e.length-1),c.push(v.x,v.y);const U=u[3*A+0]*b,N=u[3*A+1],D=u[3*A+0]*w;f.push(U,N,D)}}for(let x=0;x<t;x++)for(let E=0;E<e.length-1;E++){const b=E+x*e.length,w=b,A=b+e.length,U=b+e.length+1,N=b+1;a.push(w,A,N),a.push(U,N,A)}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("uv",new He(c,2)),this.setAttribute("normal",new He(f,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.points,e.segments,e.phiStart,e.phiLength)}}class Bc extends Or{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bc(e.radius,e.detail)}}class il extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,l=t/2,c=Math.floor(n),u=Math.floor(i),f=c+1,d=u+1,m=e/c,v=t/u,_=[],S=[],T=[],M=[];for(let g=0;g<d;g++){const x=g*v-l;for(let E=0;E<f;E++){const b=E*m-a;S.push(b,-x,0),T.push(0,0,1),M.push(E/c),M.push(1-g/u)}}for(let g=0;g<u;g++)for(let x=0;x<c;x++){const E=x+f*g,b=x+f*(g+1),w=x+1+f*(g+1),A=x+1+f*g;_.push(E,b,A),_.push(b,w,A)}this.setIndex(_),this.setAttribute("position",new He(S,3)),this.setAttribute("normal",new He(T,3)),this.setAttribute("uv",new He(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}class qf extends gt{constructor(e=.5,t=1,n=32,i=1,a=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],f=[],d=[];let m=e;const v=(t-e)/i,_=new z,S=new de;for(let T=0;T<=i;T++){for(let M=0;M<=n;M++){const g=a+M/n*l;_.x=m*Math.cos(g),_.y=m*Math.sin(g),u.push(_.x,_.y,_.z),f.push(0,0,1),S.x=(_.x/t+1)/2,S.y=(_.y/t+1)/2,d.push(S.x,S.y)}m+=v}for(let T=0;T<i;T++){const M=T*(n+1);for(let g=0;g<n;g++){const x=g+M,E=x,b=x+n+1,w=x+n+2,A=x+1;c.push(E,b,A),c.push(b,w,A)}}this.setIndex(c),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yf extends gt{constructor(e=new wa([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],a=[],l=[];let c=0,u=0;if(Array.isArray(e)===!1)f(e);else for(let d=0;d<e.length;d++)f(e[d]),this.addGroup(c,u,d),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new He(i,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2));function f(d){const m=i.length/3,v=d.extractPoints(t);let _=v.shape;const S=v.holes;as.isClockWise(_)===!1&&(_=_.reverse());for(let M=0,g=S.length;M<g;M++){const x=S[M];as.isClockWise(x)===!0&&(S[M]=x.reverse())}const T=as.triangulateShape(_,S);for(let M=0,g=S.length;M<g;M++){const x=S[M];_=_.concat(x)}for(let M=0,g=_.length;M<g;M++){const x=_[M];i.push(x.x,x.y,0),a.push(0,0,1),l.push(x.x,x.y)}for(let M=0,g=T.length;M<g;M++){const x=T[M],E=x[0]+m,b=x[1]+m,w=x[2]+m;n.push(E,b,w),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return GC(t,e)}static fromJSON(e,t){const n=[];for(let i=0,a=e.shapes.length;i<a;i++){const l=t[e.shapes[i]];n.push(l)}return new Yf(n,e.curveSegments)}}function GC(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class zc extends gt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(l+c,Math.PI);let f=0;const d=[],m=new z,v=new z,_=[],S=[],T=[],M=[];for(let g=0;g<=n;g++){const x=[],E=g/n;let b=0;g===0&&l===0?b=.5/t:g===n&&u===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const A=w/t;m.x=-e*Math.cos(i+A*a)*Math.sin(l+E*c),m.y=e*Math.cos(l+E*c),m.z=e*Math.sin(i+A*a)*Math.sin(l+E*c),S.push(m.x,m.y,m.z),v.copy(m).normalize(),T.push(v.x,v.y,v.z),M.push(A+b,1-E),x.push(f++)}d.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const E=d[g][x+1],b=d[g][x],w=d[g+1][x],A=d[g+1][x+1];(g!==0||l>0)&&_.push(E,b,A),(g!==n-1||u<Math.PI)&&_.push(b,w,A)}this.setIndex(_),this.setAttribute("position",new He(S,3)),this.setAttribute("normal",new He(T,3)),this.setAttribute("uv",new He(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zf extends Or{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zf(e.radius,e.detail)}}class jf extends gt{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],f=[],d=new z,m=new z,v=new z;for(let _=0;_<=n;_++)for(let S=0;S<=i;S++){const T=S/i*a,M=_/n*Math.PI*2;m.x=(e+t*Math.cos(M))*Math.cos(T),m.y=(e+t*Math.cos(M))*Math.sin(T),m.z=t*Math.sin(M),c.push(m.x,m.y,m.z),d.x=e*Math.cos(T),d.y=e*Math.sin(T),v.subVectors(m,d).normalize(),u.push(v.x,v.y,v.z),f.push(S/i),f.push(_/n)}for(let _=1;_<=n;_++)for(let S=1;S<=i;S++){const T=(i+1)*_+S-1,M=(i+1)*(_-1)+S-1,g=(i+1)*(_-1)+S,x=(i+1)*_+S;l.push(T,M,x),l.push(M,g,x)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kf extends gt{constructor(e=1,t=.4,n=64,i=8,a=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:a,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],f=[],d=[],m=new z,v=new z,_=new z,S=new z,T=new z,M=new z,g=new z;for(let E=0;E<=n;++E){const b=E/n*a*Math.PI*2;x(b,a,l,e,_),x(b+.01,a,l,e,S),M.subVectors(S,_),g.addVectors(S,_),T.crossVectors(M,g),g.crossVectors(T,M),T.normalize(),g.normalize();for(let w=0;w<=i;++w){const A=w/i*Math.PI*2,U=-t*Math.cos(A),N=t*Math.sin(A);m.x=_.x+(U*g.x+N*T.x),m.y=_.y+(U*g.y+N*T.y),m.z=_.z+(U*g.z+N*T.z),u.push(m.x,m.y,m.z),v.subVectors(m,_).normalize(),f.push(v.x,v.y,v.z),d.push(E/n),d.push(w/i)}}for(let E=1;E<=n;E++)for(let b=1;b<=i;b++){const w=(i+1)*(E-1)+(b-1),A=(i+1)*E+(b-1),U=(i+1)*E+b,N=(i+1)*(E-1)+b;c.push(w,A,N),c.push(A,U,N)}this.setIndex(c),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2));function x(E,b,w,A,U){const N=Math.cos(E),D=Math.sin(E),R=w/b*E,F=Math.cos(R);U.x=A*(2+F)*.5*N,U.y=A*(2+F)*D*.5,U.z=A*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Jf extends gt{constructor(e=new Ig(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const l=e.computeFrenetFrames(t,a);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new z,u=new z,f=new de;let d=new z;const m=[],v=[],_=[],S=[];T(),this.setIndex(S),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(_,2));function T(){for(let E=0;E<t;E++)M(E);M(a===!1?t:0),x(),g()}function M(E){d=e.getPointAt(E/t,d);const b=l.normals[E],w=l.binormals[E];for(let A=0;A<=i;A++){const U=A/i*Math.PI*2,N=Math.sin(U),D=-Math.cos(U);u.x=D*b.x+N*w.x,u.y=D*b.y+N*w.y,u.z=D*b.z+N*w.z,u.normalize(),v.push(u.x,u.y,u.z),c.x=d.x+n*u.x,c.y=d.y+n*u.y,c.z=d.z+n*u.z,m.push(c.x,c.y,c.z)}}function g(){for(let E=1;E<=t;E++)for(let b=1;b<=i;b++){const w=(i+1)*(E-1)+(b-1),A=(i+1)*E+(b-1),U=(i+1)*E+b,N=(i+1)*(E-1)+b;S.push(w,A,N),S.push(A,U,N)}}function x(){for(let E=0;E<=t;E++)for(let b=0;b<=i;b++)f.x=E/t,f.y=b/i,_.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jf(new ff[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Y1 extends gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new z,a=new z;if(e.index!==null){const l=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let f=0,d=u.length;f<d;++f){const m=u[f],v=m.start,_=m.count;for(let S=v,T=v+_;S<T;S+=3)for(let M=0;M<3;M++){const g=c.getX(S+M),x=c.getX(S+(M+1)%3);i.fromBufferAttribute(l,g),a.fromBufferAttribute(l,x),sy(i,a,n)===!0&&(t.push(i.x,i.y,i.z),t.push(a.x,a.y,a.z))}}}else{const l=e.attributes.position;for(let c=0,u=l.count/3;c<u;c++)for(let f=0;f<3;f++){const d=3*c+f,m=3*c+(f+1)%3;i.fromBufferAttribute(l,d),a.fromBufferAttribute(l,m),sy(i,a,n)===!0&&(t.push(i.x,i.y,i.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new He(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function sy(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ry=Object.freeze({__proto__:null,BoxGeometry:Na,CapsuleGeometry:Ff,CircleGeometry:Hf,ConeGeometry:Oc,CylinderGeometry:Lc,DodecahedronGeometry:Vf,EdgesGeometry:z1,ExtrudeGeometry:kf,IcosahedronGeometry:Xf,LatheGeometry:Wf,OctahedronGeometry:Bc,PlaneGeometry:il,PolyhedronGeometry:Or,RingGeometry:qf,ShapeGeometry:Yf,SphereGeometry:zc,TetrahedronGeometry:Zf,TorusGeometry:jf,TorusKnotGeometry:Kf,TubeGeometry:Jf,WireframeGeometry:Y1});class Z1 extends Zn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class j1 extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hg extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vg extends Hg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class K1 extends Zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J1 extends Zn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Q1 extends Zn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $1 extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gg extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kg extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class eS extends Zn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ze(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tS extends si{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ba(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function iS(s){function e(i,a){return s[i]-s[a]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qm(s,e,t){const n=s.length,i=new s.constructor(n);for(let a=0,l=0;l!==n;++a){const c=t[a]*e;for(let u=0;u!==e;++u)i[l++]=s[c+u]}return i}function Xg(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push(...l)),a=s[i++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=s[i++];while(a!==void 0)}function kC(s,e,t,n,i=30){const a=s.clone();a.name=e;const l=[];for(let u=0;u<a.tracks.length;++u){const f=a.tracks[u],d=f.getValueSize(),m=[],v=[];for(let _=0;_<f.times.length;++_){const S=f.times[_]*i;if(!(S<t||S>=n)){m.push(f.times[_]);for(let T=0;T<d;++T)v.push(f.values[_*d+T])}}m.length!==0&&(f.times=ba(m,f.times.constructor),f.values=ba(v,f.values.constructor),l.push(f))}a.tracks=l;let c=1/0;for(let u=0;u<a.tracks.length;++u)c>a.tracks[u].times[0]&&(c=a.tracks[u].times[0]);for(let u=0;u<a.tracks.length;++u)a.tracks[u].shift(-1*c);return a.resetDuration(),a}function XC(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,a=e/n;for(let l=0;l<i;++l){const c=t.tracks[l],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const f=s.tracks.find(function(g){return g.name===c.name&&g.ValueTypeName===u});if(f===void 0)continue;let d=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=m/3);let v=0;const _=f.getValueSize();f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(v=_/3);const S=c.times.length-1;let T;if(a<=c.times[0]){const g=d,x=m-d;T=c.values.slice(g,x)}else if(a>=c.times[S]){const g=S*m+d,x=g+m-d;T=c.values.slice(g,x)}else{const g=c.createInterpolant(),x=d,E=m-d;g.evaluate(a),T=g.resultBuffer.slice(x,E)}u==="quaternion"&&new di().fromArray(T).normalize().conjugate().toArray(T);const M=f.times.length;for(let g=0;g<M;++g){const x=g*_+v;if(u==="quaternion")di.multiplyQuaternionsFlat(f.values,x,T,0,f.values,x);else{const E=_-v*2;for(let b=0;b<E;++b)f.values[x+b]-=T[b]}}}return s.blendMode=Eg,s}class WC{static convertArray(e,t){return ba(e,t)}static isTypedArray(e){return nS(e)}static getKeyframeOrder(e){return iS(e)}static sortedArray(e,t,n){return Qm(e,t,n)}static flattenJSON(e,t,n,i){Xg(e,t,n,i)}static subclip(e,t,n,i,a=30){return kC(e,t,n,i,a)}static makeClipAdditive(e,t=0,n=e,i=30){return XC(e,t,n,i)}}class Ic{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(n=2,a=c);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let l=0;l!==i;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sS extends Ic{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ma,endingEnd:Ma}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,l=e+1,c=i[a],u=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case Ea:a=e,c=2*t-n;break;case vc:a=i.length-2,c=t+i[a]-i[a+1];break;default:a=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ea:l=e,u=2*n-t;break;case vc:l=1,u=n+i[1]-i[0];break;default:l=e-1,u=t}const f=(n-t)*.5,d=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(u-n),this._offsetPrev=a*d,this._offsetNext=l*d}interpolate_(e,t,n,i){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,d=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,_=this._weightNext,S=(n-t)/(i-t),T=S*S,M=T*S,g=-v*M+2*v*T-v*S,x=(1+v)*M+(-1.5-2*v)*T+(-.5+v)*S+1,E=(-1-_)*M+(1.5+_)*T+.5*S,b=_*M-_*T;for(let w=0;w!==c;++w)a[w]=g*l[d+w]+x*l[f+w]+E*l[u+w]+b*l[m+w];return a}}class Wg extends Ic{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,d=(n-t)/(i-t),m=1-d;for(let v=0;v!==c;++v)a[v]=l[f+v]*m+l[u+v]*d;return a}}class rS extends Ic{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gc:t=this.InterpolantFactoryMethodDiscrete;break;case cf:t=this.InterpolantFactoryMethodLinear;break;case Mh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gc;case this.InterpolantFactoryMethodLinear:return cf;case this.InterpolantFactoryMethodSmooth:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,l=i-1;for(;a!==i&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==i){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(i!==void 0&&nS(i))for(let c=0,u=i.length;c!==u;++c){const f=i[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mh,a=e.length-1;let l=1;for(let c=1;c<a;++c){let u=!1;const f=e[c],d=e[c+1];if(f!==d&&(c!==1||f!==e[0]))if(i)u=!0;else{const m=c*n,v=m-n,_=m+n;for(let S=0;S!==n;++S){const T=t[m+S];if(T!==t[v+S]||T!==t[_+S]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];const m=c*n,v=l*n;for(let _=0;_!==n;++_)t[v+_]=t[m+_]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,u=l*n,f=0;f!==n;++f)t[u+f]=t[c+f];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qi.prototype.ValueTypeName="";qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=cf;class La extends qi{constructor(e,t,n){super(e,t,n)}}La.prototype.ValueTypeName="bool";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=gc;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;class qg extends qi{constructor(e,t,n,i){super(e,t,n,i)}}qg.prototype.ValueTypeName="color";class Tc extends qi{constructor(e,t,n,i){super(e,t,n,i)}}Tc.prototype.ValueTypeName="number";class aS extends Ic{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let f=e*c;for(let d=f+c;f!==d;f+=4)di.slerpFlat(a,0,l,f-c,l,f,u);return a}}class Fc extends qi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new aS(this.times,this.values,this.getValueSize(),e)}}Fc.prototype.ValueTypeName="quaternion";Fc.prototype.InterpolantFactoryMethodSmooth=void 0;class Oa extends qi{constructor(e,t,n){super(e,t,n)}}Oa.prototype.ValueTypeName="string";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=gc;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Cc extends qi{constructor(e,t,n,i){super(e,t,n,i)}}Cc.prototype.ValueTypeName="vector";class Ac{constructor(e="",t=-1,n=[],i=Rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(YC(n[l]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,l=n.length;a!==l;++a)t.push(qi.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,l=[];for(let c=0;c<a;c++){let u=[],f=[];u.push((c+a-1)%a,c,(c+1)%a),f.push(0,1,0);const d=iS(u);u=Qm(u,1,d),f=Qm(f,1,d),!i&&u[0]===0&&(u.push(a),f.push(f[0])),l.push(new Tc(".morphTargetInfluences["+t[c].name+"]",u,f).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const f=e[c],d=f.name.match(a);if(d&&d.length>1){const m=d[1];let v=i[m];v||(i[m]=v=[]),v.push(f)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,v,_,S,T){if(_.length!==0){const M=[],g=[];Xg(_,M,g,S),M.length!==0&&T.push(new m(v,M,g))}},i=[],a=e.name||"default",l=e.fps||30,c=e.blendMode;let u=e.length||-1;const f=e.hierarchy||[];for(let m=0;m<f.length;m++){const v=f[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const _={};let S;for(S=0;S<v.length;S++)if(v[S].morphTargets)for(let T=0;T<v[S].morphTargets.length;T++)_[v[S].morphTargets[T]]=-1;for(const T in _){const M=[],g=[];for(let x=0;x!==v[S].morphTargets.length;++x){const E=v[S];M.push(E.time),g.push(E.morphTarget===T?1:0)}i.push(new Tc(".morphTargetInfluence["+T+"]",M,g))}u=_.length*l}else{const _=".bones["+t[m].name+"]";n(Cc,_+".position",v,"pos",i),n(Fc,_+".quaternion",v,"rot",i),n(Cc,_+".scale",v,"scl",i)}}return i.length===0?null:new this(a,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qC(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tc;case"vector":case"vector2":case"vector3":case"vector4":return Cc;case"color":return qg;case"quaternion":return Fc;case"bool":case"boolean":return La;case"string":return Oa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function YC(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qC(s.type);if(s.times===void 0){const t=[],n=[];Xg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Es={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yg{constructor(e,t,n){const i=this;let a=!1,l=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&i.onStart!==void 0&&i.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,i.onProgress!==void 0&&i.onProgress(d,l,c),l===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,m){return f.push(d,m),this},this.removeHandler=function(d){const m=f.indexOf(d);return m!==-1&&f.splice(m,2),this},this.getHandler=function(d){for(let m=0,v=f.length;m<v;m+=2){const _=f[m],S=f[m+1];if(_.global&&(_.lastIndex=0),_.test(d))return S}return null}}}const oS=new Yg;class mi{constructor(e){this.manager=e!==void 0?e:oS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ks={};class ZC extends Error{constructor(e,t){super(e),this.response=t}}class $s extends mi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Es.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ks[e]!==void 0){ks[e].push({onLoad:t,onProgress:n,onError:i});return}ks[e]=[],ks[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=ks[e],m=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),_=v?parseInt(v):0,S=_!==0;let T=0;const M=new ReadableStream({start(g){x();function x(){m.read().then(({done:E,value:b})=>{if(E)g.close();else{T+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:_});for(let A=0,U=d.length;A<U;A++){const N=d[A];N.onProgress&&N.onProgress(w)}g.enqueue(b),x()}},E=>{g.error(E)})}}});return new Response(M)}else throw new ZC(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return f.json();default:if(c==="")return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),v=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(v);return f.arrayBuffer().then(S=>_.decode(S))}}}).then(f=>{Es.add(`file:${e}`,f);const d=ks[e];delete ks[e];for(let m=0,v=d.length;m<v;m++){const _=d[m];_.onLoad&&_.onLoad(f)}}).catch(f=>{const d=ks[e];if(d===void 0)throw this.manager.itemError(e),f;delete ks[e];for(let m=0,v=d.length;m<v;m++){const _=d[m];_.onError&&_.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jC extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=new $s(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(a.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),a.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ac.parse(e[n]);t.push(i)}return t}}class KC extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=[],c=new If,u=new $s(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(a.withCredentials);let f=0;function d(m){u.load(e[m],function(v){const _=a.parse(v,!0);l[m]={width:_.width,height:_.height,format:_.format,mipmaps:_.mipmaps},f+=1,f===6&&(_.mipmapCount===1&&(c.minFilter=cn),c.image=l,c.format=_.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let m=0,v=e.length;m<v;++m)d(m);else u.load(e,function(m){const v=a.parse(m,!0);if(v.isCubemap){const _=v.mipmaps.length/v.mipmapCount;for(let S=0;S<_;S++){l[S]={mipmaps:[]};for(let T=0;T<v.mipmapCount;T++)l[S].mipmaps.push(v.mipmaps[S*v.mipmapCount+T]),l[S].format=v.format,l[S].width=v.width,l[S].height=v.height}c.image=l}else c.image.width=v.width,c.image.height=v.height,c.mipmaps=v.mipmaps;v.mipmapCount===1&&(c.minFilter=cn),c.format=v.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}const Ao=new WeakMap;class wc extends mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Es.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let m=Ao.get(l);m===void 0&&(m=[],Ao.set(l,m)),m.push({onLoad:t,onError:i})}return l}const c=Sc("img");function u(){d(),t&&t(this);const m=Ao.get(this)||[];for(let v=0;v<m.length;v++){const _=m[v];_.onLoad&&_.onLoad(this)}Ao.delete(this),a.manager.itemEnd(e)}function f(m){d(),i&&i(m),Es.remove(`image:${e}`);const v=Ao.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onError&&S.onError(m)}Ao.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Es.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class JC extends mi{constructor(e){super(e)}load(e,t,n,i){const a=new Nc;a.colorSpace=qn;const l=new wc(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function u(f){l.load(e[f],function(d){a.images[f]=d,c++,c===6&&(a.needsUpdate=!0,t&&t(a))},void 0,i)}for(let f=0;f<e.length;++f)u(f);return a}}class lS extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=new Ts,c=new $s(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(a.withCredentials),c.load(e,function(u){let f;try{f=a.parse(u)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}f.image!==void 0?l.image=f.image:f.data!==void 0&&(l.image.width=f.width,l.image.height=f.height,l.image.data=f.data),l.wrapS=f.wrapS!==void 0?f.wrapS:ki,l.wrapT=f.wrapT!==void 0?f.wrapT:ki,l.magFilter=f.magFilter!==void 0?f.magFilter:cn,l.minFilter=f.minFilter!==void 0?f.minFilter:cn,l.anisotropy=f.anisotropy!==void 0?f.anisotropy:1,f.colorSpace!==void 0&&(l.colorSpace=f.colorSpace),f.flipY!==void 0&&(l.flipY=f.flipY),f.format!==void 0&&(l.format=f.format),f.type!==void 0&&(l.type=f.type),f.mipmaps!==void 0&&(l.mipmaps=f.mipmaps,l.minFilter=Ss),f.mipmapCount===1&&(l.minFilter=cn),f.generateMipmaps!==void 0&&(l.generateMipmaps=f.generateMipmaps),l.needsUpdate=!0,t&&t(l,f)},n,i),l}}class QC extends mi{constructor(e){super(e)}load(e,t,n,i){const a=new mn,l=new wc(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Br extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cS extends Br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rm=new at,ay=new z,oy=new z;class Zg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ay.setFromMatrixPosition(e.matrixWorld),t.position.copy(ay),oy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oy),t.updateMatrixWorld(),rm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $C extends Zg{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uS extends Br{constructor(e,t,n=0,i=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new $C}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ly=new at,ql=new z,am=new z;class eA extends Zg{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ql.setFromMatrixPosition(e.matrixWorld),n.position.copy(ql),am.copy(n.position),am.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(am),n.updateMatrixWorld(),i.makeTranslation(-ql.x,-ql.y,-ql.z),ly.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ly)}}class hS extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new eA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zr extends Uf{constructor(e=-1,t=1,n=1,i=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tA extends Zg{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fS extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new tA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dS extends Br{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pS extends Br{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class mS{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new z)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,a=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*i),t.addScaledVector(l[2],.488603*a),t.addScaledVector(l[3],.488603*n),t.addScaledVector(l[4],1.092548*(n*i)),t.addScaledVector(l[5],1.092548*(i*a)),t.addScaledVector(l[6],.315392*(3*a*a-1)),t.addScaledVector(l[7],1.092548*(n*a)),t.addScaledVector(l[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,a=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*i),t.addScaledVector(l[2],2*.511664*a),t.addScaledVector(l[3],2*.511664*n),t.addScaledVector(l[4],2*.429043*n*i),t.addScaledVector(l[5],2*.429043*i*a),t.addScaledVector(l[6],.743125*a*a-.247708),t.addScaledVector(l[7],2*.429043*n*a),t.addScaledVector(l[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,a=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*a,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*n*a,t[8]=.546274*(n*n-i*i)}}class gS extends Br{constructor(e=new mS,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Qf extends mi{constructor(e){super(e),this.textures={}}load(e,t,n,i){const a=this,l=new $s(a.manager);l.setPath(a.path),l.setRequestHeader(a.requestHeader),l.setWithCredentials(a.withCredentials),l.load(e,function(c){try{t(a.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),a.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(a){return t[a]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",a),t[a]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(i.uniforms[a]={},l.type){case"t":i.uniforms[a].value=n(l.value);break;case"c":i.uniforms[a].value=new ze().setHex(l.value);break;case"v2":i.uniforms[a].value=new de().fromArray(l.value);break;case"v3":i.uniforms[a].value=new z().fromArray(l.value);break;case"v4":i.uniforms[a].value=new Nt().fromArray(l.value);break;case"m3":i.uniforms[a].value=new yt().fromArray(l.value);break;case"m4":i.uniforms[a].value=new at().fromArray(l.value);break;default:i.uniforms[a].value=l.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)i.extensions[a]=e.extensions[a];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),i.normalScale=new de().fromArray(a)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Qf.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Z1,SpriteMaterial:Dg,RawShaderMaterial:j1,ShaderMaterial:pi,PointsMaterial:Ug,MeshPhysicalMaterial:Vg,MeshStandardMaterial:Hg,MeshPhongMaterial:K1,MeshToonMaterial:J1,MeshNormalMaterial:Q1,MeshLambertMaterial:$1,MeshDepthMaterial:Gg,MeshDistanceMaterial:kg,MeshBasicMaterial:Lr,MeshMatcapMaterial:eS,LineDashedMaterial:tS,LineBasicMaterial:si,Material:Zn};return new t[e]}}class $m{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vS extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _S extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=new $s(a.manager);l.setPath(a.path),l.setRequestHeader(a.requestHeader),l.setWithCredentials(a.withCredentials),l.load(e,function(c){try{t(a.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),a.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(_,S){if(t[S]!==void 0)return t[S];const M=_.interleavedBuffers[S],g=a(_,M.buffer),x=Io(M.type,g),E=new Of(x,M.stride);return E.uuid=M.uuid,t[S]=E,E}function a(_,S){if(n[S]!==void 0)return n[S];const M=_.arrayBuffers[S],g=new Uint32Array(M).buffer;return n[S]=g,g}const l=e.isInstancedBufferGeometry?new vS:new gt,c=e.data.index;if(c!==void 0){const _=Io(c.type,c.array);l.setIndex(new jt(_,1))}const u=e.data.attributes;for(const _ in u){const S=u[_];let T;if(S.isInterleavedBufferAttribute){const M=i(e.data,S.data);T=new Da(M,S.itemSize,S.offset,S.normalized)}else{const M=Io(S.type,S.array),g=S.isInstancedBufferAttribute?Jo:jt;T=new g(M,S.itemSize,S.normalized)}S.name!==void 0&&(T.name=S.name),S.usage!==void 0&&T.setUsage(S.usage),l.setAttribute(_,T)}const f=e.data.morphAttributes;if(f)for(const _ in f){const S=f[_],T=[];for(let M=0,g=S.length;M<g;M++){const x=S[M];let E;if(x.isInterleavedBufferAttribute){const b=i(e.data,x.data);E=new Da(b,x.itemSize,x.offset,x.normalized)}else{const b=Io(x.type,x.array);E=new jt(b,x.itemSize,x.normalized)}x.name!==void 0&&(E.name=x.name),T.push(E)}l.morphAttributes[_]=T}e.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const m=e.data.groups||e.data.drawcalls||e.data.offsets;if(m!==void 0)for(let _=0,S=m.length;_!==S;++_){const T=m[_];l.addGroup(T.start,T.count,T.materialIndex)}const v=e.data.boundingSphere;return v!==void 0&&(l.boundingSphere=new Bn().fromJSON(v)),e.name&&(l.name=e.name),e.userData&&(l.userData=e.userData),l}}class nA extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=this.path===""?$m.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||l;const c=new $s(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let f=null;try{f=JSON.parse(u)}catch(m){i!==void 0&&i(m),console.error("THREE:ObjectLoader: Can't parse "+e+".",m.message);return}const d=f.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}a.parse(f,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$m.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const a=new $s(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials);const l=await a.loadAsync(e,t),c=JSON.parse(l),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,i),l=this.parseImages(e.images,function(){t!==void 0&&t(f)}),c=this.parseTextures(e.textures,l),u=this.parseMaterials(e.materials,c),f=this.parseObject(e.object,a,u,c,n),d=this.parseSkeletons(e.skeletons,f);if(this.bindSkeletons(f,d),this.bindLightTargets(f),t!==void 0){let m=!1;for(const v in l)if(l[v].data instanceof HTMLImageElement){m=!0;break}m===!1&&t(f)}return f}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),a=await this.parseImagesAsync(e.images),l=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,l),u=this.parseObject(e.object,i,c,l,t),f=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,f),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const a=new wa().fromJSON(e[n]);t[a.uuid]=a}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(a){a.isBone&&(i[a.uuid]=a)}),e!==void 0)for(let a=0,l=e.length;a<l;a++){const c=new Bf().fromJSON(e[a],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new _S;for(let a=0,l=e.length;a<l;a++){let c;const u=e[a];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in ry?c=ry[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const a=new Qf;a.setTextures(t);for(let l=0,c=e.length;l<c;l++){const u=e[l];n[u.uuid]===void 0&&(n[u.uuid]=a.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],a=Ac.parse(i);t[a.uuid]=a}return t}parseImages(e,t){const n=this,i={};let a;function l(u){return n.manager.itemStart(u),a.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const f=u,d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;return l(d)}else return u.data?{data:Io(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Yg(t);a=new wc(u),a.setCrossOrigin(this.crossOrigin);for(let f=0,d=e.length;f<d;f++){const m=e[f],v=m.url;if(Array.isArray(v)){const _=[];for(let S=0,T=v.length;S<T;S++){const M=v[S],g=c(M);g!==null&&(g instanceof HTMLImageElement?_.push(g):_.push(new Ts(g.data,g.width,g.height)))}i[m.uuid]=new Rr(_)}else{const _=c(m.url);i[m.uuid]=new Rr(_)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return l.data?{data:Io(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){i=new wc(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const u=e[l],f=u.url;if(Array.isArray(f)){const d=[];for(let m=0,v=f.length;m<v;m++){const _=f[m],S=await a(_);S!==null&&(S instanceof HTMLImageElement?d.push(S):d.push(new Ts(S.data,S.width,S.height)))}n[u.uuid]=new Rr(d)}else{const d=await a(u.url);n[u.uuid]=new Rr(d)}}}return n}parseTextures(e,t){function n(a,l){return typeof a=="number"?a:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a),l[a])}const i={};if(e!==void 0)for(let a=0,l=e.length;a<l;a++){const c=e[a];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],f=u.data;let d;Array.isArray(f)?(d=new Nc,f.length===6&&(d.needsUpdate=!0)):(f&&f.data?d=new Ts:d=new mn,f&&(d.needsUpdate=!0)),d.source=u,d.uuid=c.uuid,c.name!==void 0&&(d.name=c.name),c.mapping!==void 0&&(d.mapping=n(c.mapping,iA)),c.channel!==void 0&&(d.channel=c.channel),c.offset!==void 0&&d.offset.fromArray(c.offset),c.repeat!==void 0&&d.repeat.fromArray(c.repeat),c.center!==void 0&&d.center.fromArray(c.center),c.rotation!==void 0&&(d.rotation=c.rotation),c.wrap!==void 0&&(d.wrapS=n(c.wrap[0],cy),d.wrapT=n(c.wrap[1],cy)),c.format!==void 0&&(d.format=c.format),c.internalFormat!==void 0&&(d.internalFormat=c.internalFormat),c.type!==void 0&&(d.type=c.type),c.colorSpace!==void 0&&(d.colorSpace=c.colorSpace),c.minFilter!==void 0&&(d.minFilter=n(c.minFilter,uy)),c.magFilter!==void 0&&(d.magFilter=n(c.magFilter,uy)),c.anisotropy!==void 0&&(d.anisotropy=c.anisotropy),c.flipY!==void 0&&(d.flipY=c.flipY),c.generateMipmaps!==void 0&&(d.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(d.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(d.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(d.compareFunction=c.compareFunction),c.userData!==void 0&&(d.userData=c.userData),i[c.uuid]=d}return i}parseObject(e,t,n,i,a){let l;function c(v){return t[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",v),t[v]}function u(v){if(v!==void 0){if(Array.isArray(v)){const _=[];for(let S=0,T=v.length;S<T;S++){const M=v[S];n[M]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",M),_.push(n[M])}return _}return n[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),n[v]}}function f(v){return i[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",v),i[v]}let d,m;switch(e.type){case"Scene":l=new Rg,e.background!==void 0&&(Number.isInteger(e.background)?l.background=new ze(e.background):l.background=f(e.background)),e.environment!==void 0&&(l.environment=f(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?l.fog=new Lf(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(l.fog=new Nf(e.fog.color,e.fog.density)),e.fog.name!==""&&(l.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(l.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(l.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&l.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":l=new wn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(l.focus=e.focus),e.zoom!==void 0&&(l.zoom=e.zoom),e.filmGauge!==void 0&&(l.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(l.filmOffset=e.filmOffset),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"OrthographicCamera":l=new zr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(l.zoom=e.zoom),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"AmbientLight":l=new dS(e.color,e.intensity);break;case"DirectionalLight":l=new fS(e.color,e.intensity),l.target=e.target||"";break;case"PointLight":l=new hS(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":l=new pS(e.color,e.intensity,e.width,e.height);break;case"SpotLight":l=new uS(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),l.target=e.target||"";break;case"HemisphereLight":l=new cS(e.color,e.groundColor,e.intensity);break;case"LightProbe":l=new gS().fromJSON(e);break;case"SkinnedMesh":d=c(e.geometry),m=u(e.material),l=new P1(d,m),e.bindMode!==void 0&&(l.bindMode=e.bindMode),e.bindMatrix!==void 0&&l.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(l.skeleton=e.skeleton);break;case"Mesh":d=c(e.geometry),m=u(e.material),l=new pn(d,m);break;case"InstancedMesh":d=c(e.geometry),m=u(e.material);const v=e.count,_=e.instanceMatrix,S=e.instanceColor;l=new U1(d,m,v),l.instanceMatrix=new Jo(new Float32Array(_.array),16),S!==void 0&&(l.instanceColor=new Jo(new Float32Array(S.array),S.itemSize));break;case"BatchedMesh":d=c(e.geometry),m=u(e.material),l=new N1(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,m),l.geometry=d,l.perObjectFrustumCulled=e.perObjectFrustumCulled,l.sortObjects=e.sortObjects,l._drawRanges=e.drawRanges,l._reservedRanges=e.reservedRanges,l._geometryInfo=e.geometryInfo.map(T=>{let M=null,g=null;return T.boundingBox!==void 0&&(M=new Yn().fromJSON(T.boundingBox)),T.boundingSphere!==void 0&&(g=new Bn().fromJSON(T.boundingSphere)),{...T,boundingBox:M,boundingSphere:g}}),l._instanceInfo=e.instanceInfo,l._availableInstanceIds=e._availableInstanceIds,l._availableGeometryIds=e._availableGeometryIds,l._nextIndexStart=e.nextIndexStart,l._nextVertexStart=e.nextVertexStart,l._geometryCount=e.geometryCount,l._maxInstanceCount=e.maxInstanceCount,l._maxVertexCount=e.maxVertexCount,l._maxIndexCount=e.maxIndexCount,l._geometryInitialized=e.geometryInitialized,l._matricesTexture=f(e.matricesTexture.uuid),l._indirectTexture=f(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(l._colorsTexture=f(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(l.boundingSphere=new Bn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(l.boundingBox=new Yn().fromJSON(e.boundingBox));break;case"LOD":l=new D1;break;case"Line":l=new Ur(c(e.geometry),u(e.material));break;case"LineLoop":l=new L1(c(e.geometry),u(e.material));break;case"LineSegments":l=new Cs(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":l=new O1(c(e.geometry),u(e.material));break;case"Sprite":l=new R1(u(e.material));break;case"Group":l=new Fo;break;case"Bone":l=new Pg;break;default:l=new Lt}if(l.uuid=e.uuid,e.name!==void 0&&(l.name=e.name),e.matrix!==void 0?(l.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=e.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(e.position!==void 0&&l.position.fromArray(e.position),e.rotation!==void 0&&l.rotation.fromArray(e.rotation),e.quaternion!==void 0&&l.quaternion.fromArray(e.quaternion),e.scale!==void 0&&l.scale.fromArray(e.scale)),e.up!==void 0&&l.up.fromArray(e.up),e.castShadow!==void 0&&(l.castShadow=e.castShadow),e.receiveShadow!==void 0&&(l.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(l.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(l.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(l.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(l.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(l.visible=e.visible),e.frustumCulled!==void 0&&(l.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(l.renderOrder=e.renderOrder),e.userData!==void 0&&(l.userData=e.userData),e.layers!==void 0&&(l.layers.mask=e.layers),e.children!==void 0){const v=e.children;for(let _=0;_<v.length;_++)l.add(this.parseObject(v[_],t,n,i,a))}if(e.animations!==void 0){const v=e.animations;for(let _=0;_<v.length;_++){const S=v[_];l.animations.push(a[S])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(l.autoUpdate=e.autoUpdate);const v=e.levels;for(let _=0;_<v.length;_++){const S=v[_],T=l.getObjectByProperty("uuid",S.object);T!==void 0&&l.addLevel(T,S.distance,S.hysteresis)}}return l}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Lt}})}}const iA={UVMapping:Mf,CubeReflectionMapping:Js,CubeRefractionMapping:Dr,EquirectangularReflectionMapping:ko,EquirectangularRefractionMapping:dc,CubeUVReflectionMapping:el},cy={RepeatWrapping:pc,ClampToEdgeWrapping:ki,MirroredRepeatWrapping:mc},uy={NearestFilter:On,NearestMipmapNearestFilter:mg,NearestMipmapLinearFilter:zo,LinearFilter:cn,LinearMipmapNearestFilter:ic,LinearMipmapLinearFilter:Ss},om=new WeakMap;class sA extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Es.get(`image-bitmap:${e}`);if(l!==void 0){if(a.manager.itemStart(e),l.then){l.then(f=>{if(om.has(l)===!0)i&&i(om.get(l)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(f),a.manager.itemEnd(e),f});return}return setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(f){return Es.add(`image-bitmap:${e}`,f),t&&t(f),a.manager.itemEnd(e),f}).catch(function(f){i&&i(f),om.set(u,f),Es.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Es.add(`image-bitmap:${e}`,u),a.manager.itemStart(e)}}let ah;class jg{static getContext(){return ah===void 0&&(ah=new(window.AudioContext||window.webkitAudioContext)),ah}static setContext(e){ah=e}}class rA extends mi{constructor(e){super(e)}load(e,t,n,i){const a=this,l=new $s(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{const f=u.slice(0);jg.getContext().decodeAudioData(f,function(m){t(m)}).catch(c)}catch(f){c(f)}},n,i);function c(u){i?i(u):console.error(u),a.manager.itemError(e)}}}const hy=new at,fy=new at,ca=new at;class aA{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new wn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new wn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ca.copy(e.projectionMatrix);const i=t.eyeSep/2,a=i*t.near/t.focus,l=t.near*Math.tan(Aa*t.fov*.5)/t.zoom;let c,u;fy.elements[12]=-i,hy.elements[12]=i,c=-l*t.aspect+a,u=l*t.aspect+a,ca.elements[0]=2*t.near/(u-c),ca.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(ca),c=-l*t.aspect-a,u=l*t.aspect-a,ca.elements[0]=2*t.near/(u-c),ca.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(ca)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(fy),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(hy)}}class yS extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $f{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ua=new z,lm=new di,oA=new z,ha=new z,fa=new z;class lA extends Lt{constructor(){super(),this.type="AudioListener",this.context=jg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $f}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ua,lm,oA),ha.set(0,0,-1).applyQuaternion(lm),fa.set(0,1,0).applyQuaternion(lm),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ua.x,n),t.positionY.linearRampToValueAtTime(ua.y,n),t.positionZ.linearRampToValueAtTime(ua.z,n),t.forwardX.linearRampToValueAtTime(ha.x,n),t.forwardY.linearRampToValueAtTime(ha.y,n),t.forwardZ.linearRampToValueAtTime(ha.z,n),t.upX.linearRampToValueAtTime(fa.x,n),t.upY.linearRampToValueAtTime(fa.y,n),t.upZ.linearRampToValueAtTime(fa.z,n)}else t.setPosition(ua.x,ua.y,ua.z),t.setOrientation(ha.x,ha.y,ha.z,fa.x,fa.y,fa.z)}}class xS extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const da=new z,dy=new di,cA=new z,pa=new z;class uA extends xS{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(da,dy,cA),pa.set(0,0,1).applyQuaternion(dy);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(da.x,n),t.positionY.linearRampToValueAtTime(da.y,n),t.positionZ.linearRampToValueAtTime(da.z,n),t.orientationX.linearRampToValueAtTime(pa.x,n),t.orientationY.linearRampToValueAtTime(pa.y,n),t.orientationZ.linearRampToValueAtTime(pa.z,n)}else t.setPosition(da.x,da.y,da.z),t.setOrientation(pa.x,pa.y,pa.z)}}class hA{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class SS{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,a,l;switch(t){case"quaternion":i=this._slerp,a=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,a=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,a=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=a,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,a=e*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[a+c]=n[c];l=t}else{l+=t;const c=t/l;this._mixBufferRegion(n,a,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,a=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-a,t)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,f=t+t;u!==f;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let a=n,l=i;a!==l;++a)t[a]=t[i+a%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,a){if(i>=.5)for(let l=0;l!==a;++l)e[t+l]=e[n+l]}_slerp(e,t,n,i){di.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,a){const l=this._workIndex*a;di.multiplyQuaternionsFlat(e,l,e,t,e,n),di.slerpFlat(e,t,e,t,e,l,i)}_lerp(e,t,n,i,a){const l=1-i;for(let c=0;c!==a;++c){const u=t+c;e[u]=e[u]*l+e[n+c]*i}}_lerpAdditive(e,t,n,i,a){for(let l=0;l!==a;++l){const c=t+l;e[c]=e[c]+e[n+l]*i}}}const Kg="\\[\\]\\.:\\/",fA=new RegExp("["+Kg+"]","g"),Jg="[^"+Kg+"]",dA="[^"+Kg.replace("\\.","")+"]",pA=/((?:WC+[\/:])*)/.source.replace("WC",Jg),mA=/(WCOD+)?/.source.replace("WCOD",dA),gA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jg),vA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jg),_A=new RegExp("^"+pA+mA+gA+vA+"$"),yA=["material","materials","bones","map"];class xA{constructor(e,t,n){const i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ut{constructor(e,t,n){this.path=t,this.parsedPath=n||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,n):new Ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fA,"")}static parseTrackName(e){const t=_A.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);yA.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===f){f=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const l=e[i];if(l===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=xA;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class SA{constructor(){this.isAnimationObjectGroup=!0,this.uuid=wi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,a=this._bindings,l=a.length;let c,u=e.length,f=this.nCachedObjects_;for(let d=0,m=arguments.length;d!==m;++d){const v=arguments[d],_=v.uuid;let S=t[_];if(S===void 0){S=u++,t[_]=S,e.push(v);for(let T=0,M=l;T!==M;++T)a[T].push(new Ut(v,n[T],i[T]))}else if(S<f){c=e[S];const T=--f,M=e[T];t[M.uuid]=S,e[S]=M,t[_]=T,e[T]=v;for(let g=0,x=l;g!==x;++g){const E=a[g],b=E[T];let w=E[S];E[S]=b,w===void 0&&(w=new Ut(v,n[g],i[g])),E[T]=w}}else e[S]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=f}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let a=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const u=arguments[l],f=u.uuid,d=t[f];if(d!==void 0&&d>=a){const m=a++,v=e[m];t[v.uuid]=d,e[d]=v,t[f]=m,e[m]=u;for(let _=0,S=i;_!==S;++_){const T=n[_],M=T[m],g=T[d];T[d]=M,T[m]=g}}}this.nCachedObjects_=a}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let a=this.nCachedObjects_,l=e.length;for(let c=0,u=arguments.length;c!==u;++c){const f=arguments[c],d=f.uuid,m=t[d];if(m!==void 0)if(delete t[d],m<a){const v=--a,_=e[v],S=--l,T=e[S];t[_.uuid]=m,e[m]=_,t[T.uuid]=v,e[v]=T,e.pop();for(let M=0,g=i;M!==g;++M){const x=n[M],E=x[v],b=x[S];x[m]=E,x[v]=b,x.pop()}}else{const v=--l,_=e[v];v>0&&(t[_.uuid]=m),e[m]=_,e.pop();for(let S=0,T=i;S!==T;++S){const M=n[S];M[m]=M[v],M.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const a=this._bindings;if(i!==void 0)return a[i];const l=this._paths,c=this._parsedPaths,u=this._objects,f=u.length,d=this.nCachedObjects_,m=new Array(f);i=a.length,n[e]=i,l.push(e),c.push(t),a.push(m);for(let v=d,_=u.length;v!==_;++v){const S=u[v];m[v]=new Ut(S,e,t)}return m}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,a=this._parsedPaths,l=this._bindings,c=l.length-1,u=l[c],f=e[c];t[f]=n,l[n]=u,l.pop(),a[n]=a[c],a.pop(),i[n]=i[c],i.pop()}}}class MS{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const a=t.tracks,l=a.length,c=new Array(l),u={endingStart:Ma,endingEnd:Ma};for(let f=0;f!==l;++f){const d=a[f].createInterpolant(null);c[f]=d,d.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=c1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,a=e._clip.duration,l=a/i,c=i/a;e.warp(1,l,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,a=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,f=c.sampleValues;return u[0]=a,u[1]=a+n,f[0]=e/l,f[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const u=(e-a)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const l=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,f=this._propertyBindings;switch(this.blendMode){case Eg:for(let d=0,m=u.length;d!==m;++d)u[d].evaluate(l),f[d].accumulateAdditive(c);break;case Rf:default:for(let d=0,m=u.length;d!==m;++d)u[d].evaluate(l),f[d].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,a=this._loopCount;const l=n===u1;if(e===0)return a===-1?i:l&&(a&1)===1?t-i:i;if(n===l1){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,a+=Math.abs(c);const u=this.repetitions-a;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const f=e<0;this._setEndings(f,!f,l)}else this._setEndings(!1,!1,l);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(a&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ea,i.endingEnd=Ea):(e?i.endingStart=this.zeroSlopeAtStart?Ea:Ma:i.endingStart=vc,t?i.endingEnd=this.zeroSlopeAtEnd?Ea:Ma:i.endingEnd=vc)}_scheduleFading(e,t,n){const i=this._mixer,a=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,u=l.sampleValues;return c[0]=a,u[0]=t,c[1]=a+e,u[1]=n,this}}const MA=new Float32Array(1);class EA extends ls{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,a=i.length,l=e._propertyBindings,c=e._interpolants,u=n.uuid,f=this._bindingsByRootAndName;let d=f[u];d===void 0&&(d={},f[u]=d);for(let m=0;m!==a;++m){const v=i[m],_=v.name;let S=d[_];if(S!==void 0)++S.referenceCount,l[m]=S;else{if(S=l[m],S!==void 0){S._cacheIndex===null&&(++S.referenceCount,this._addInactiveBinding(S,u,_));continue}const T=t&&t._propertyBindings[m].binding.parsedPath;S=new SS(Ut.create(n,_,T),v.ValueTypeName,v.getValueSize()),++S.referenceCount,this._addInactiveBinding(S,u,_),l[m]=S}c[m].resultBuffer=S.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,a=this._actionsByClip[i];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,a=this._actionsByClip;let l=a[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=l;else{const c=l.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,l=this._actionsByClip,c=l[a],u=c.knownActions,f=u[u.length-1],d=e._byClipCacheIndex;f._byClipCacheIndex=d,u[d]=f,u.pop(),e._byClipCacheIndex=null;const m=c.actionByRoot,v=(e._localRoot||this._root).uuid;delete m[v],u.length===0&&delete l[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,a=this._bindings;let l=i[t];l===void 0&&(l={},i[t]=l),l[n]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,a=n.path,l=this._bindingsByRootAndName,c=l[i],u=t[t.length-1],f=e._cacheIndex;u._cacheIndex=f,t[f]=u,t.pop(),delete c[a],Object.keys(c).length===0&&delete l[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wg(new Float32Array(2),new Float32Array(2),1,MA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,a=t[i];e.__cacheIndex=i,t[i]=e,a.__cacheIndex=n,t[n]=a}clipAction(e,t,n){const i=t||this._root,a=i.uuid;let l=typeof e=="string"?Ac.findByName(i,e):e;const c=l!==null?l.uuid:e,u=this._actionsByClip[c];let f=null;if(n===void 0&&(l!==null?n=l.blendMode:n=Rf),u!==void 0){const m=u.actionByRoot[a];if(m!==void 0&&m.blendMode===n)return m;f=u.knownActions[0],l===null&&(l=f._clip)}if(l===null)return null;const d=new MS(this,l,t,n);return this._bindAction(d,f),this._addInactiveAction(d,c,a),d}existingAction(e,t){const n=t||this._root,i=n.uuid,a=typeof e=="string"?Ac.findByName(n,e):e,l=a?a.uuid:e,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,a=Math.sign(e),l=this._accuIndex^=1;for(let f=0;f!==n;++f)t[f]._update(i,e,a,l);const c=this._bindings,u=this._nActiveBindings;for(let f=0;f!==u;++f)c[f].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,a=i[n];if(a!==void 0){const l=a.knownActions;for(let c=0,u=l.length;c!==u;++c){const f=l[c];this._deactivateAction(f);const d=f._cacheIndex,m=t[t.length-1];f._cacheIndex=null,f._byClipCacheIndex=null,m._cacheIndex=d,t[d]=m,t.pop(),this._removeInactiveBindingsForAction(f)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,a=i[t];if(a!==void 0)for(const l in a){const c=a[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bA extends Cg{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Pf(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ed{constructor(e){this.value=e}clone(){return new ed(this.value.clone===void 0?this.value:this.value.clone())}}let TA=0;class CA extends ls{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.usage=yc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const a=Array.isArray(t[n])?t[n]:[t[n]];for(let l=0;l<a.length;l++)this.uniforms.push(a[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class AA extends Of{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class wA{constructor(e,t,n,i,a,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=a,this.normalized=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const py=new at;class ES{constructor(e,t,n=0,i=1/0){this.ray=new tl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return py.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(py),this}intersectObject(e,t=!0,n=[]){return eg(e,this,n,t),n.sort(my),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)eg(e[i],this,n,t);return n.sort(my),n}}function my(s,e){return s.distance-e.distance}function eg(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let l=0,c=a.length;l<c;l++)eg(a[l],e,t,!0)}}class RA{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DA{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Qg{constructor(e,t,n,i){Qg.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=i,this}}const gy=new de;class PA{constructor(e=new de(1/0,1/0),t=new de(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gy.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gy).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vy=new z,oh=new z;class UA{constructor(e=new z,t=new z){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vy.subVectors(e,this.start),oh.subVectors(this.end,this.start);const n=oh.dot(oh);let a=oh.dot(vy)/n;return t&&(a=_t(a,0,1)),a}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _y=new z;class NA extends Lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new gt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,u=32;l<u;l++,c++){const f=l/u*Math.PI*2,d=c/u*Math.PI*2;i.push(Math.cos(f),Math.sin(f),1,Math.cos(d),Math.sin(d),1)}n.setAttribute("position",new He(i,3));const a=new si({fog:!1,toneMapped:!1});this.cone=new Cs(n,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_y.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_y),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Er=new z,lh=new at,cm=new at;class LA extends Cs{constructor(e){const t=bS(e),n=new gt,i=[],a=[],l=new ze(0,0,1),c=new ze(0,1,0);for(let f=0;f<t.length;f++){const d=t[f];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),a.push(l.r,l.g,l.b),a.push(c.r,c.g,c.b))}n.setAttribute("position",new He(i,3)),n.setAttribute("color",new He(a,3));const u=new si({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");cm.copy(this.root.matrixWorld).invert();for(let a=0,l=0;a<t.length;a++){const c=t[a];c.parent&&c.parent.isBone&&(lh.multiplyMatrices(cm,c.matrixWorld),Er.setFromMatrixPosition(lh),i.setXYZ(l,Er.x,Er.y,Er.z),lh.multiplyMatrices(cm,c.parent.matrixWorld),Er.setFromMatrixPosition(lh),i.setXYZ(l+1,Er.x,Er.y,Er.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function bS(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...bS(s.children[t]));return e}class OA extends pn{constructor(e,t,n){const i=new zc(t,4,2),a=new Lr({wireframe:!0,fog:!1,toneMapped:!1});super(i,a),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const BA=new z,yy=new ze,xy=new ze;class zA extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Bc(t);i.rotateY(Math.PI*.5),this.material=new Lr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const a=i.getAttribute("position"),l=new Float32Array(a.count*3);i.setAttribute("color",new jt(l,3)),this.add(new pn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");yy.copy(this.light.color),xy.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const a=n<i/2?yy:xy;t.setXYZ(n,a.r,a.g,a.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(BA.setFromMatrixPosition(this.light.matrixWorld).negate())}}class IA extends Cs{constructor(e=10,t=10,n=4473924,i=8947848){n=new ze(n),i=new ze(i);const a=t/2,l=e/t,c=e/2,u=[],f=[];for(let v=0,_=0,S=-c;v<=t;v++,S+=l){u.push(-c,0,S,c,0,S),u.push(S,0,-c,S,0,c);const T=v===a?n:i;T.toArray(f,_),_+=3,T.toArray(f,_),_+=3,T.toArray(f,_),_+=3,T.toArray(f,_),_+=3}const d=new gt;d.setAttribute("position",new He(u,3)),d.setAttribute("color",new He(f,3));const m=new si({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FA extends Cs{constructor(e=10,t=16,n=8,i=64,a=4473924,l=8947848){a=new ze(a),l=new ze(l);const c=[],u=[];if(t>1)for(let m=0;m<t;m++){const v=m/t*(Math.PI*2),_=Math.sin(v)*e,S=Math.cos(v)*e;c.push(0,0,0),c.push(_,0,S);const T=m&1?a:l;u.push(T.r,T.g,T.b),u.push(T.r,T.g,T.b)}for(let m=0;m<n;m++){const v=m&1?a:l,_=e-e/n*m;for(let S=0;S<i;S++){let T=S/i*(Math.PI*2),M=Math.sin(T)*_,g=Math.cos(T)*_;c.push(M,0,g),u.push(v.r,v.g,v.b),T=(S+1)/i*(Math.PI*2),M=Math.sin(T)*_,g=Math.cos(T)*_,c.push(M,0,g),u.push(v.r,v.g,v.b)}}const f=new gt;f.setAttribute("position",new He(c,3)),f.setAttribute("color",new He(u,3));const d=new si({vertexColors:!0,toneMapped:!1});super(f,d),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Sy=new z,ch=new z,My=new z;class HA extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new gt;i.setAttribute("position",new He([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new si({fog:!1,toneMapped:!1});this.lightPlane=new Ur(i,a),this.add(this.lightPlane),i=new gt,i.setAttribute("position",new He([0,0,0,0,0,1],3)),this.targetLine=new Ur(i,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Sy.setFromMatrixPosition(this.light.matrixWorld),ch.setFromMatrixPosition(this.light.target.matrixWorld),My.subVectors(ch,Sy),this.lightPlane.lookAt(ch),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ch),this.targetLine.scale.z=My.length()}}const uh=new z,dn=new Uf;class VA extends Cs{constructor(e){const t=new gt,n=new si({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],a=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(S,T){u(S),u(T)}function u(S){i.push(0,0,0),a.push(0,0,0),l[S]===void 0&&(l[S]=[]),l[S].push(i.length/3-1)}t.setAttribute("position",new He(i,3)),t.setAttribute("color",new He(a,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const f=new ze(16755200),d=new ze(16711680),m=new ze(43775),v=new ze(16777215),_=new ze(3355443);this.setColors(f,d,m,v,_)}setColors(e,t,n,i,a){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,a.r,a.g,a.b),c.setXYZ(41,a.r,a.g,a.b),c.setXYZ(42,a.r,a.g,a.b),c.setXYZ(43,a.r,a.g,a.b),c.setXYZ(44,a.r,a.g,a.b),c.setXYZ(45,a.r,a.g,a.b),c.setXYZ(46,a.r,a.g,a.b),c.setXYZ(47,a.r,a.g,a.b),c.setXYZ(48,a.r,a.g,a.b),c.setXYZ(49,a.r,a.g,a.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;dn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const a=this.camera.coordinateSystem===Xi?-1:0;gn("c",t,e,dn,0,0,a),gn("t",t,e,dn,0,0,1),gn("n1",t,e,dn,-n,-i,a),gn("n2",t,e,dn,n,-i,a),gn("n3",t,e,dn,-n,i,a),gn("n4",t,e,dn,n,i,a),gn("f1",t,e,dn,-n,-i,1),gn("f2",t,e,dn,n,-i,1),gn("f3",t,e,dn,-n,i,1),gn("f4",t,e,dn,n,i,1),gn("u1",t,e,dn,n*.7,i*1.1,a),gn("u2",t,e,dn,-n*.7,i*1.1,a),gn("u3",t,e,dn,0,i*2,a),gn("cf1",t,e,dn,-n,0,1),gn("cf2",t,e,dn,n,0,1),gn("cf3",t,e,dn,0,-i,1),gn("cf4",t,e,dn,0,i,1),gn("cn1",t,e,dn,-n,0,a),gn("cn2",t,e,dn,n,0,a),gn("cn3",t,e,dn,0,-i,a),gn("cn4",t,e,dn,0,i,a),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function gn(s,e,t,n,i,a,l){uh.set(i,a,l).unproject(n);const c=e[s];if(c!==void 0){const u=t.getAttribute("position");for(let f=0,d=c.length;f<d;f++)u.setXYZ(c[f],uh.x,uh.y,uh.z)}}const hh=new Yn;class GA extends Cs{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),a=new gt;a.setIndex(new jt(n,1)),a.setAttribute("position",new jt(i,3)),super(a,new si({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&hh.setFromObject(this.object),hh.isEmpty())return;const e=hh.min,t=hh.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kA extends Cs{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new gt;a.setIndex(new jt(n,1)),a.setAttribute("position",new He(i,3)),super(a,new si({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class XA extends Ur{constructor(e,t=1,n=16776960){const i=n,a=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new gt;l.setAttribute("position",new He(a,3)),l.computeBoundingSphere(),super(l,new si({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new gt;u.setAttribute("position",new He(c,3)),u.computeBoundingSphere(),this.add(new pn(u,new Lr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ey=new z;let fh,um;class WA extends Lt{constructor(e=new z(0,0,1),t=new z(0,0,0),n=1,i=16776960,a=n*.2,l=a*.2){super(),this.type="ArrowHelper",fh===void 0&&(fh=new gt,fh.setAttribute("position",new He([0,0,0,0,1,0],3)),um=new Oc(.5,1,5,1),um.translate(0,-.5,0)),this.position.copy(t),this.line=new Ur(fh,new si({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new pn(um,new Lr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,a,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ey.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ey,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qA extends Cs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new gt;i.setAttribute("position",new He(t,3)),i.setAttribute("color",new He(n,3));const a=new si({vertexColors:!0,toneMapped:!1});super(i,a),this.type="AxesHelper"}setColors(e,t,n){const i=new ze,a=this.geometry.attributes.color.array;return i.set(e),i.toArray(a,0),i.toArray(a,3),i.set(t),i.toArray(a,6),i.toArray(a,9),i.set(n),i.toArray(a,12),i.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class YA{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new df,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,a,l){return this.currentPath.bezierCurveTo(e,t,n,i,a,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let E=0,b=g.length;E<b;E++){const w=g[E],A=new wa;A.curves=w.curves,x.push(A)}return x}function n(g,x){const E=x.length;let b=!1;for(let w=E-1,A=0;A<E;w=A++){let U=x[w],N=x[A],D=N.x-U.x,R=N.y-U.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(U=x[A],D=-D,N=x[w],R=-R),g.y<U.y||g.y>N.y)continue;if(g.y===U.y){if(g.x===U.x)return!0}else{const F=R*(g.x-U.x)-D*(g.y-U.y);if(F===0)return!0;if(F<0)continue;b=!b}}else{if(g.y!==U.y)continue;if(N.x<=g.x&&g.x<=U.x||U.x<=g.x&&g.x<=N.x)return!0}}return b}const i=as.isClockWise,a=this.subPaths;if(a.length===0)return[];let l,c,u;const f=[];if(a.length===1)return c=a[0],u=new wa,u.curves=c.curves,f.push(u),f;let d=!i(a[0].getPoints());d=e?!d:d;const m=[],v=[];let _=[],S=0,T;v[S]=void 0,_[S]=[];for(let g=0,x=a.length;g<x;g++)c=a[g],T=c.getPoints(),l=i(T),l=e?!l:l,l?(!d&&v[S]&&S++,v[S]={s:new wa,p:T},v[S].s.curves=c.curves,d&&S++,_[S]=[]):_[S].push({h:c,p:T[0]});if(!v[0])return t(a);if(v.length>1){let g=!1,x=0;for(let E=0,b=v.length;E<b;E++)m[E]=[];for(let E=0,b=v.length;E<b;E++){const w=_[E];for(let A=0;A<w.length;A++){const U=w[A];let N=!0;for(let D=0;D<v.length;D++)n(U.p,v[D].p)&&(E!==D&&x++,N?(N=!1,m[D].push(U)):g=!0);N&&m[E].push(U)}}x>0&&g===!1&&(_=m)}let M;for(let g=0,x=v.length;g<x;g++){u=v[g].s,f.push(u),M=_[g];for(let E=0,b=M.length;E<b;E++)u.holes.push(M[E].h)}return f}}class ZA extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function jA(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function KA(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function JA(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function tg(s,e,t,n){const i=QA(n);switch(t){case yg:return s*e;case Cf:return s*e/i.components*i.byteLength;case Pc:return s*e/i.components*i.byteLength;case Sg:return s*e*2/i.components*i.byteLength;case Af:return s*e*2/i.components*i.byteLength;case xg:return s*e*3/i.components*i.byteLength;case Ln:return s*e*4/i.components*i.byteLength;case wf:return s*e*4/i.components*i.byteLength;case sc:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:case Fh:return Math.max(s,16)*Math.max(e,8)/4;case Bh:case Ih:return Math.max(s,8)*Math.max(e,8)/2;case Hh:case Vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lc:case sf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mg:case af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case of:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QA(s){switch(s){case Wi:case gg:return{byteLength:1,components:1};case Xo:case vg:case Ms:return{byteLength:2,components:1};case bf:case Tf:return{byteLength:2,components:4};case Qs:case Ef:case Nn:return{byteLength:4,components:1};case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class $A{static contain(e,t){return jA(e,t)}static cover(e,t){return KA(e,t)}static fill(e){return JA(e)}static getByteLength(e,t,n,i){return tg(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function TS(){let s=null,e=!1,t=null,n=null;function i(a,l){t(a,l),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function ew(s){const e=new WeakMap;function t(c,u){const f=c.array,d=c.usage,m=f.byteLength,v=s.createBuffer();s.bindBuffer(u,v),s.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=s.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,u,f){const d=u.array,m=u.updateRanges;if(s.bindBuffer(f,c),m.length===0)s.bufferSubData(f,0,d);else{m.sort((_,S)=>_.start-S.start);let v=0;for(let _=1;_<m.length;_++){const S=m[v],T=m[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++v,m[v]=T)}m.length=v+1;for(let _=0,S=m.length;_<S;_++){const T=m[_];s.bufferSubData(f,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(s.deleteBuffer(u.buffer),e.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:i,remove:a,update:l}}var tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ow=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$w=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:tw,alphahash_pars_fragment:nw,alphamap_fragment:iw,alphamap_pars_fragment:sw,alphatest_fragment:rw,alphatest_pars_fragment:aw,aomap_fragment:ow,aomap_pars_fragment:lw,batching_pars_vertex:cw,batching_vertex:uw,begin_vertex:hw,beginnormal_vertex:fw,bsdfs:dw,iridescence_fragment:pw,bumpmap_pars_fragment:mw,clipping_planes_fragment:gw,clipping_planes_pars_fragment:vw,clipping_planes_pars_vertex:_w,clipping_planes_vertex:yw,color_fragment:xw,color_pars_fragment:Sw,color_pars_vertex:Mw,color_vertex:Ew,common:bw,cube_uv_reflection_fragment:Tw,defaultnormal_vertex:Cw,displacementmap_pars_vertex:Aw,displacementmap_vertex:ww,emissivemap_fragment:Rw,emissivemap_pars_fragment:Dw,colorspace_fragment:Pw,colorspace_pars_fragment:Uw,envmap_fragment:Nw,envmap_common_pars_fragment:Lw,envmap_pars_fragment:Ow,envmap_pars_vertex:Bw,envmap_physical_pars_fragment:Yw,envmap_vertex:zw,fog_vertex:Iw,fog_pars_vertex:Fw,fog_fragment:Hw,fog_pars_fragment:Vw,gradientmap_pars_fragment:Gw,lightmap_pars_fragment:kw,lights_lambert_fragment:Xw,lights_lambert_pars_fragment:Ww,lights_pars_begin:qw,lights_toon_fragment:Zw,lights_toon_pars_fragment:jw,lights_phong_fragment:Kw,lights_phong_pars_fragment:Jw,lights_physical_fragment:Qw,lights_physical_pars_fragment:$w,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:s2,logdepthbuf_pars_vertex:r2,logdepthbuf_vertex:a2,map_fragment:o2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:h2,metalnessmap_pars_fragment:f2,morphinstance_vertex:d2,morphcolor_vertex:p2,morphnormal_vertex:m2,morphtarget_pars_vertex:g2,morphtarget_vertex:v2,normal_fragment_begin:_2,normal_fragment_maps:y2,normal_pars_fragment:x2,normal_pars_vertex:S2,normal_vertex:M2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:b2,clearcoat_normal_fragment_maps:T2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:A2,opaque_fragment:w2,packing:R2,premultiplied_alpha_fragment:D2,project_vertex:P2,dithering_fragment:U2,dithering_pars_fragment:N2,roughnessmap_fragment:L2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:B2,shadowmap_pars_vertex:z2,shadowmap_vertex:I2,shadowmask_pars_fragment:F2,skinbase_vertex:H2,skinning_pars_vertex:V2,skinning_vertex:G2,skinnormal_vertex:k2,specularmap_fragment:X2,specularmap_pars_fragment:W2,tonemapping_fragment:q2,tonemapping_pars_fragment:Y2,transmission_fragment:Z2,transmission_pars_fragment:j2,uv_pars_fragment:K2,uv_pars_vertex:J2,uv_vertex:Q2,worldpos_vertex:$2,background_vert:eR,background_frag:tR,backgroundCube_vert:nR,backgroundCube_frag:iR,cube_vert:sR,cube_frag:rR,depth_vert:aR,depth_frag:oR,distanceRGBA_vert:lR,distanceRGBA_frag:cR,equirect_vert:uR,equirect_frag:hR,linedashed_vert:fR,linedashed_frag:dR,meshbasic_vert:pR,meshbasic_frag:mR,meshlambert_vert:gR,meshlambert_frag:vR,meshmatcap_vert:_R,meshmatcap_frag:yR,meshnormal_vert:xR,meshnormal_frag:SR,meshphong_vert:MR,meshphong_frag:ER,meshphysical_vert:bR,meshphysical_frag:TR,meshtoon_vert:CR,meshtoon_frag:AR,points_vert:wR,points_frag:RR,shadow_vert:DR,shadow_frag:PR,sprite_vert:UR,sprite_frag:NR},Pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ss={basic:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ei([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ei([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ei([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ei([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ei([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ei([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:ei([Pe.common,Pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:ei([Pe.lights,Pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ss.physical={uniforms:ei([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const dh={r:0,b:0,g:0},ma=new Ri,LR=new at;function OR(s,e,t,n,i,a,l){const c=new ze(0);let u=a===!0?0:1,f,d,m=null,v=0,_=null;function S(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function T(E){let b=!1;const w=S(E);w===null?g(c,u):w&&w.isColor&&(g(w,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,l):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(E,b){const w=S(b);w&&(w.isCubeTexture||w.mapping===el)?(d===void 0&&(d=new pn(new Na(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ko(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ma.copy(b.backgroundRotation),ma.x*=-1,ma.y*=-1,ma.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ma.y*=-1,ma.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(LR.makeRotationFromEuler(ma)),d.material.toneMapped=Rt.getTransfer(w.colorSpace)!==qt,(m!==w||v!==w.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,m=w,v=w.version,_=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new pn(new il(2,2),new pi({name:"BackgroundMaterial",uniforms:Ko(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(w.colorSpace)!==qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||v!==w.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,m=w,v=w.version,_=s.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null))}function g(E,b){E.getRGB(dh,T1(s)),n.buffers.color.setClear(dh.r,dh.g,dh.b,b,l)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,b=1){c.set(E),u=b,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,g(c,u)},render:T,addToRenderList:M,dispose:x}}function BR(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=v(null);let a=i,l=!1;function c(R,F,j,G,J){let ie=!1;const V=m(G,j,F);a!==V&&(a=V,f(a.object)),ie=_(R,G,j,J),ie&&S(R,G,j,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ie||l)&&(l=!1,b(R,F,j,G),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return s.createVertexArray()}function f(R){return s.bindVertexArray(R)}function d(R){return s.deleteVertexArray(R)}function m(R,F,j){const G=j.wireframe===!0;let J=n[R.id];J===void 0&&(J={},n[R.id]=J);let ie=J[F.id];ie===void 0&&(ie={},J[F.id]=ie);let V=ie[G];return V===void 0&&(V=v(u()),ie[G]=V),V}function v(R){const F=[],j=[],G=[];for(let J=0;J<t;J++)F[J]=0,j[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:G,object:R,attributes:{},index:null}}function _(R,F,j,G){const J=a.attributes,ie=F.attributes;let V=0;const $=j.getAttributes();for(const W in $)if($[W].location>=0){const ge=J[W];let xe=ie[W];if(xe===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;V++}return a.attributesNum!==V||a.index!==G}function S(R,F,j,G){const J={},ie=F.attributes;let V=0;const $=j.getAttributes();for(const W in $)if($[W].location>=0){let ge=ie[W];ge===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));const xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),J[W]=xe,V++}a.attributes=J,a.attributesNum=V,a.index=G}function T(){const R=a.newAttributes;for(let F=0,j=R.length;F<j;F++)R[F]=0}function M(R){g(R,0)}function g(R,F){const j=a.newAttributes,G=a.enabledAttributes,J=a.attributeDivisors;j[R]=1,G[R]===0&&(s.enableVertexAttribArray(R),G[R]=1),J[R]!==F&&(s.vertexAttribDivisor(R,F),J[R]=F)}function x(){const R=a.newAttributes,F=a.enabledAttributes;for(let j=0,G=F.length;j<G;j++)F[j]!==R[j]&&(s.disableVertexAttribArray(j),F[j]=0)}function E(R,F,j,G,J,ie,V){V===!0?s.vertexAttribIPointer(R,F,j,J,ie):s.vertexAttribPointer(R,F,j,G,J,ie)}function b(R,F,j,G){T();const J=G.attributes,ie=j.getAttributes(),V=F.defaultAttributeValues;for(const $ in ie){const W=ie[$];if(W.location>=0){let le=J[$];if(le===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const ge=le.normalized,xe=le.itemSize,Le=e.get(le);if(Le===void 0)continue;const Qe=Le.buffer,te=Le.type,Se=Le.bytesPerElement,qe=te===s.INT||te===s.UNSIGNED_INT||le.gpuType===Ef;if(le.isInterleavedBufferAttribute){const De=le.data,ke=De.stride,vt=le.offset;if(De.isInstancedInterleavedBuffer){for(let $e=0;$e<W.locationSize;$e++)g(W.location+$e,De.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let $e=0;$e<W.locationSize;$e++)M(W.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let $e=0;$e<W.locationSize;$e++)E(W.location+$e,xe/W.locationSize,te,ge,ke*Se,(vt+xe/W.locationSize*$e)*Se,qe)}else{if(le.isInstancedBufferAttribute){for(let De=0;De<W.locationSize;De++)g(W.location+De,le.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<W.locationSize;De++)M(W.location+De);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let De=0;De<W.locationSize;De++)E(W.location+De,xe/W.locationSize,te,ge,xe*Se,xe/W.locationSize*De*Se,qe)}}else if(V!==void 0){const ge=V[$];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(W.location,ge);break;case 3:s.vertexAttrib3fv(W.location,ge);break;case 4:s.vertexAttrib4fv(W.location,ge);break;default:s.vertexAttrib1fv(W.location,ge)}}}}x()}function w(){N();for(const R in n){const F=n[R];for(const j in F){const G=F[j];for(const J in G)d(G[J].object),delete G[J];delete F[j]}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const j in F){const G=F[j];for(const J in G)d(G[J].object),delete G[J];delete F[j]}delete n[R.id]}function U(R){for(const F in n){const j=n[F];if(j[R.id]===void 0)continue;const G=j[R.id];for(const J in G)d(G[J].object),delete G[J];delete j[R.id]}}function N(){D(),l=!0,a!==i&&(a=i,f(a.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:N,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:M,disableUnusedAttributes:x}}function zR(s,e,t){let n;function i(f){n=f}function a(f,d){s.drawArrays(n,f,d),t.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawArraysInstanced(n,f,d,m),t.update(d,n,m))}function c(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,m);let _=0;for(let S=0;S<m;S++)_+=d[S];t.update(_,n,1)}function u(f,d,m,v){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<f.length;S++)l(f[S],d[S],v[S]);else{_.multiDrawArraysInstancedWEBGL(n,f,0,d,0,v,0,m);let S=0;for(let T=0;T<m;T++)S+=d[T]*v[T];t.update(S,n,1)}}this.setMode=i,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function IR(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(U){return!(U!==Ln&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const N=U===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Wi&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Nn&&!N)}function u(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=u(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=S>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:w,maxSamples:A}}function FR(s){const e=this;let t=null,n=0,i=!1,a=!1;const l=new Cr,c=new yt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||n!==0||i;return i=v,n=m.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=d(m,v,0)},this.setState=function(m,v,_){const S=m.clippingPlanes,T=m.clipIntersection,M=m.clipShadows,g=s.get(m);if(!i||S===null||S.length===0||a&&!M)a?d(null):f();else{const x=a?0:n,E=x*4;let b=g.clippingState||null;u.value=b,b=d(S,v,E,_);for(let w=0;w!==E;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=x}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,v,_,S){const T=m!==null?m.length:0;let M=null;if(T!==0){if(M=u.value,S!==!0||M===null){const g=_+T*4,x=v.matrixWorldInverse;c.getNormalMatrix(x),(M===null||M.length<g)&&(M=new Float32Array(g));for(let E=0,b=_;E!==T;++E,b+=4)l.copy(m[E]).applyMatrix4(x,c),l.normal.toArray(M,b),M[b+3]=l.constant}u.value=M,u.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function HR(s){let e=new WeakMap;function t(l,c){return c===ko?l.mapping=Js:c===dc&&(l.mapping=Dr),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===ko||c===dc)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new A1(u.height);return f.fromEquirectangularTexture(s,l),e.set(l,f),l.addEventListener("dispose",i),t(f.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ho=4,by=[.125,.215,.35,.446,.526,.582],Sa=20,hm=new zr,Ty=new ze;let fm=null,dm=0,pm=0,mm=!1;const xa=(1+Math.sqrt(5))/2,wo=1/xa,Cy=[new z(-xa,wo,0),new z(xa,wo,0),new z(-wo,0,xa),new z(wo,0,xa),new z(0,xa,-wo),new z(0,xa,wo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],VR=new z;class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,a={}){const{size:l=256,position:c=VR}=a;fm=this._renderer.getRenderTarget(),dm=this._renderer.getActiveCubeFace(),pm=this._renderer.getActiveMipmapLevel(),mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ry(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fm,dm,pm),this._renderer.xr.enabled=mm,e.scissorTest=!1,ph(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fm=this._renderer.getRenderTarget(),dm=this._renderer.getActiveCubeFace(),pm=this._renderer.getActiveMipmapLevel(),mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ms,format:Ln,colorSpace:Pr,depthBuffer:!1},i=Ay(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ay(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GR(a)),this._blurMaterial=kR(a,e,t)}return i}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,hm)}_sceneToCubeUV(e,t,n,i,a){const u=new wn(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,_=m.toneMapping;m.getClearColor(Ty),m.toneMapping=bs,m.autoClear=!1;const S=new Lr({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),T=new pn(new Na,S);let M=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,M=!0):(S.color.copy(Ty),M=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(u.up.set(0,f[x],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+d[x],a.y,a.z)):E===1?(u.up.set(0,0,f[x]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+d[x],a.z)):(u.up.set(0,f[x],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+d[x]));const b=this._cubeSize;ph(i,E*b,x>2?b:0,b,b),m.setRenderTarget(i),M&&m.render(T,u),m.render(e,u)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=_,m.autoClear=v,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ry()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wy());const a=i?this._cubemapMaterial:this._equirectMaterial,l=new pn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const u=this._cubeSize;ph(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,hm)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Cy[(i-a-1)%Cy.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,i,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",a),this._halfBlur(l,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,l,c){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new pn(this._lodPlanes[i],f),v=f.uniforms,_=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Sa-1),T=a/S,M=isFinite(a)?1+Math.floor(d*T):Sa;M>Sa&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sa}`);const g=[];let x=0;for(let U=0;U<Sa;++U){const N=U/T,D=Math.exp(-N*N/2);g.push(D),U===0?x+=D:U<M&&(x+=2*D)}for(let U=0;U<g.length;U++)g[U]=g[U]/x;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=g,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:E}=this;v.dTheta.value=S,v.mipInt.value=E-n;const b=this._sizeLods[i],w=3*b*(i>E-Ho?i-E+Ho:0),A=4*(this._cubeSize-b);ph(t,w,A,3*b,2*b),u.setRenderTarget(t),u.render(m,hm)}}function GR(s){const e=[],t=[],n=[];let i=s;const a=s-Ho+1+by.length;for(let l=0;l<a;l++){const c=Math.pow(2,i);t.push(c);let u=1/c;l>s-Ho?u=by[l-s+Ho-1]:l===0&&(u=0),n.push(u);const f=1/(c-2),d=-f,m=1+f,v=[d,d,m,d,m,m,d,d,m,m,d,m],_=6,S=6,T=3,M=2,g=1,x=new Float32Array(T*S*_),E=new Float32Array(M*S*_),b=new Float32Array(g*S*_);for(let A=0;A<_;A++){const U=A%3*2/3-1,N=A>2?0:-1,D=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];x.set(D,T*S*A),E.set(v,M*S*A);const R=[A,A,A,A,A,A];b.set(R,g*S*A)}const w=new gt;w.setAttribute("position",new jt(x,T)),w.setAttribute("uv",new jt(E,M)),w.setAttribute("faceIndex",new jt(b,g)),e.push(w),i>Ho&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ay(s,e,t){const n=new os(s,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ph(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kR(s,e,t){const n=new Float32Array(Sa),i=new z(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Sa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$g(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function wy(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$g(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function Ry(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$g(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function $g(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XR(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===ko||u===dc,d=u===Js||u===Dr;if(f||d){let m=e.get(c);const v=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new ng(s)),m=f?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const _=c.image;return f&&_&&_.height>0||d&&_&&i(_)?(t===null&&(t=new ng(s)),m=f?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function i(c){let u=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&u++;return u===f}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function WR(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qR(s,e,t,n){const i={},a=new WeakMap;function l(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);v.removeEventListener("dispose",l),delete i[v.id];const _=a.get(v);_&&(e.remove(_),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(m,v){return i[v.id]===!0||(v.addEventListener("dispose",l),i[v.id]=!0,t.memory.geometries++),v}function u(m){const v=m.attributes;for(const _ in v)e.update(v[_],s.ARRAY_BUFFER)}function f(m){const v=[],_=m.index,S=m.attributes.position;let T=0;if(_!==null){const x=_.array;T=_.version;for(let E=0,b=x.length;E<b;E+=3){const w=x[E+0],A=x[E+1],U=x[E+2];v.push(w,A,A,U,U,w)}}else if(S!==void 0){const x=S.array;T=S.version;for(let E=0,b=x.length/3-1;E<b;E+=3){const w=E+0,A=E+1,U=E+2;v.push(w,A,A,U,U,w)}}else return;const M=new(S1(v)?wg:Ag)(v,1);M.version=T;const g=a.get(m);g&&e.remove(g),a.set(m,M)}function d(m){const v=a.get(m);if(v){const _=m.index;_!==null&&v.version<_.version&&f(m)}else f(m);return a.get(m)}return{get:c,update:u,getWireframeAttribute:d}}function YR(s,e,t){let n;function i(v){n=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function u(v,_){s.drawElements(n,_,a,v*l),t.update(_,n,1)}function f(v,_,S){S!==0&&(s.drawElementsInstanced(n,_,a,v*l,S),t.update(_,n,S))}function d(v,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,v,0,S);let M=0;for(let g=0;g<S;g++)M+=_[g];t.update(M,n,1)}function m(v,_,S,T){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<v.length;g++)f(v[g]/l,_[g],T[g]);else{M.multiDrawElementsInstancedWEBGL(n,_,0,a,v,0,T,0,S);let g=0;for(let x=0;x<S;x++)g+=_[x]*T[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ZR(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jR(s,e,t){const n=new WeakMap,i=new Nt;function a(l,c,u){const f=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0;let v=n.get(c);if(v===void 0||v.count!==m){let D=function(){U.dispose(),n.delete(c),c.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const _=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],x=c.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),T===!0&&(E=3);let b=c.attributes.position.count*E,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*m),U=new Df(A,b,w,m);U.type=Nn,U.needsUpdate=!0;const N=E*4;for(let R=0;R<m;R++){const F=M[R],j=g[R],G=x[R],J=b*w*4*R;for(let ie=0;ie<F.count;ie++){const V=ie*N;_===!0&&(i.fromBufferAttribute(F,ie),A[J+V+0]=i.x,A[J+V+1]=i.y,A[J+V+2]=i.z,A[J+V+3]=0),S===!0&&(i.fromBufferAttribute(j,ie),A[J+V+4]=i.x,A[J+V+5]=i.y,A[J+V+6]=i.z,A[J+V+7]=0),T===!0&&(i.fromBufferAttribute(G,ie),A[J+V+8]=i.x,A[J+V+9]=i.y,A[J+V+10]=i.z,A[J+V+11]=G.itemSize===4?i.w:1)}}v={count:m,texture:U,size:new de(b,w)},n.set(c,v),c.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let _=0;for(let T=0;T<f.length;T++)_+=f[T];const S=c.morphTargetsRelative?1:1-_;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:a}}function KR(s,e,t,n){let i=new WeakMap;function a(u){const f=n.render.frame,d=u.geometry,m=e.get(u,d);if(i.get(m)!==f&&(e.update(m),i.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==f&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),i.set(u,f))),u.isSkinnedMesh){const v=u.skeleton;i.get(v)!==f&&(v.update(),i.set(v,f))}return m}function l(){i=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}const CS=new mn,Dy=new Ng(1,1),AS=new Df,wS=new Pf,RS=new Nc,Py=[],Uy=[],Ny=new Float32Array(16),Ly=new Float32Array(9),Oy=new Float32Array(4);function sl(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Py[i];if(a===void 0&&(a=new Float32Array(i),Py[i]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function En(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function td(s,e){let t=Uy[e];t===void 0&&(t=new Int32Array(e),Uy[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function JR(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QR(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),En(t,e)}}function $R(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),En(t,e)}}function e3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),En(t,e)}}function t3(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,n))return;Oy.set(n),s.uniformMatrix2fv(this.addr,!1,Oy),En(t,n)}}function n3(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,n))return;Ly.set(n),s.uniformMatrix3fv(this.addr,!1,Ly),En(t,n)}}function i3(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,n))return;Ny.set(n),s.uniformMatrix4fv(this.addr,!1,Ny),En(t,n)}}function s3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function r3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),En(t,e)}}function a3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),En(t,e)}}function o3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),En(t,e)}}function l3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function c3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),En(t,e)}}function u3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),En(t,e)}}function h3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),En(t,e)}}function f3(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Dy.compareFunction=bg,a=Dy):a=CS,t.setTexture2D(e||a,i)}function d3(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wS,i)}function p3(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||RS,i)}function m3(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||AS,i)}function g3(s){switch(s){case 5126:return JR;case 35664:return QR;case 35665:return $R;case 35666:return e3;case 35674:return t3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return s3;case 35667:case 35671:return r3;case 35668:case 35672:return a3;case 35669:case 35673:return o3;case 5125:return l3;case 36294:return c3;case 36295:return u3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return f3;case 35679:case 36299:case 36307:return d3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}function v3(s,e){s.uniform1fv(this.addr,e)}function _3(s,e){const t=sl(e,this.size,2);s.uniform2fv(this.addr,t)}function y3(s,e){const t=sl(e,this.size,3);s.uniform3fv(this.addr,t)}function x3(s,e){const t=sl(e,this.size,4);s.uniform4fv(this.addr,t)}function S3(s,e){const t=sl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function M3(s,e){const t=sl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function E3(s,e){const t=sl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function b3(s,e){s.uniform1iv(this.addr,e)}function T3(s,e){s.uniform2iv(this.addr,e)}function C3(s,e){s.uniform3iv(this.addr,e)}function A3(s,e){s.uniform4iv(this.addr,e)}function w3(s,e){s.uniform1uiv(this.addr,e)}function R3(s,e){s.uniform2uiv(this.addr,e)}function D3(s,e){s.uniform3uiv(this.addr,e)}function P3(s,e){s.uniform4uiv(this.addr,e)}function U3(s,e,t){const n=this.cache,i=e.length,a=td(t,i);Mn(n,a)||(s.uniform1iv(this.addr,a),En(n,a));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||CS,a[l])}function N3(s,e,t){const n=this.cache,i=e.length,a=td(t,i);Mn(n,a)||(s.uniform1iv(this.addr,a),En(n,a));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||wS,a[l])}function L3(s,e,t){const n=this.cache,i=e.length,a=td(t,i);Mn(n,a)||(s.uniform1iv(this.addr,a),En(n,a));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||RS,a[l])}function O3(s,e,t){const n=this.cache,i=e.length,a=td(t,i);Mn(n,a)||(s.uniform1iv(this.addr,a),En(n,a));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||AS,a[l])}function B3(s){switch(s){case 5126:return v3;case 35664:return _3;case 35665:return y3;case 35666:return x3;case 35674:return S3;case 35675:return M3;case 35676:return E3;case 5124:case 35670:return b3;case 35667:case 35671:return T3;case 35668:case 35672:return C3;case 35669:case 35673:return A3;case 5125:return w3;case 36294:return R3;case 36295:return D3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return U3;case 35679:case 36299:case 36307:return N3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return O3}}class z3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g3(t.type)}}class I3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B3(t.type)}}class F3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,l=i.length;a!==l;++a){const c=i[a];c.setValue(e,t[c.id],n)}}}const gm=/(\w+)(\])?(\[|\.)?/g;function By(s,e){s.seq.push(e),s.map[e.id]=e}function H3(s,e,t){const n=s.name,i=n.length;for(gm.lastIndex=0;;){const a=gm.exec(n),l=gm.lastIndex;let c=a[1];const u=a[2]==="]",f=a[3];if(u&&(c=c|0),f===void 0||f==="["&&l+2===i){By(t,f===void 0?new z3(c,s,e):new I3(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new F3(c),By(t,m)),t=m}}}class bh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),l=e.getUniformLocation(t,a.name);H3(a,l,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,l=t.length;a!==l;++a){const c=t[a],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function zy(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const V3=37297;let G3=0;function k3(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=i;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Iy=new yt;function X3(s){Rt._getMatrix(Iy,Rt.workingColorSpace,s);const e=`mat3( ${Iy.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fy(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+k3(s.getShaderSource(e),l)}else return i}function W3(s,e){const t=X3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q3(s,e){let t;switch(e){case t1:t="Linear";break;case n1:t="Reinhard";break;case i1:t="Cineon";break;case pg:t="ACESFilmic";break;case r1:t="AgX";break;case a1:t="Neutral";break;case s1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mh=new z;function Y3(){Rt.getLuminanceCoefficients(mh);const s=mh.x.toFixed(4),e=mh.y.toFixed(4),t=mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function j3(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K3(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function tc(s){return s!==""}function Hy(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vy(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J3=/^[ \t]*#include +<([\w\d./]+)>/gm;function ig(s){return s.replace(J3,$3)}const Q3=new Map;function $3(s,e){let t=mt[e];if(t===void 0){const n=Q3.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ig(t)}const eD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gy(s){return s.replace(eD,tD)}function tD(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function ky(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nD(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function iD(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Dr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sD(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function rD(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case e1:e="ENVMAP_BLENDING_ADD";break}return e}function aD(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function oD(s,e,t,n){const i=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=nD(t),f=iD(t),d=sD(t),m=rD(t),v=aD(t),_=Z3(t),S=j3(a),T=i.createProgram();let M,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(tc).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(tc).join(`
`),g.length>0&&(g+=`
`)):(M=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),g=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?mt.tonemapping_pars_fragment:"",t.toneMapping!==bs?q3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,W3("linearToOutputTexel",t.outputColorSpace),Y3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tc).join(`
`)),l=ig(l),l=Hy(l,t),l=Vy(l,t),c=ig(c),c=Hy(c,t),c=Vy(c,t),l=Gy(l),c=Gy(c),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,M=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=x+M+l,b=x+g+c,w=zy(i,i.VERTEX_SHADER,E),A=zy(i,i.FRAGMENT_SHADER,b);i.attachShader(T,w),i.attachShader(T,A),t.index0AttributeName!==void 0?i.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(T,0,"position"),i.linkProgram(T);function U(F){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(T).trim(),G=i.getShaderInfoLog(w).trim(),J=i.getShaderInfoLog(A).trim();let ie=!0,V=!0;if(i.getProgramParameter(T,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,T,w,A);else{const $=Fy(i,w,"vertex"),W=Fy(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(T,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+$+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||J==="")&&(V=!1);V&&(F.diagnostics={runnable:ie,programLog:j,vertexShader:{log:G,prefix:M},fragmentShader:{log:J,prefix:g}})}i.deleteShader(w),i.deleteShader(A),N=new bh(i,T),D=K3(i,T)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(T,V3)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=w,this.fragmentShader=A,this}let lD=0;class cD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uD(e),t.set(e,n)),n}}class uD{constructor(e){this.id=lD++,this.code=e,this.usedTimes=0}}function hD(s,e,t,n,i,a,l){const c=new jo,u=new cD,f=new Set,d=[],m=i.logarithmicDepthBuffer,v=i.vertexTextures;let _=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return f.add(D),D===0?"uv":`uv${D}`}function M(D,R,F,j,G){const J=j.fog,ie=G.geometry,V=D.isMeshStandardMaterial?j.environment:null,$=(D.isMeshStandardMaterial?t:e).get(D.envMap||V),W=$&&$.mapping===el?$.image.height:null,le=S[D.type];D.precision!==null&&(_=i.getMaxPrecision(D.precision),_!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",_,"instead."));const ge=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,xe=ge!==void 0?ge.length:0;let Le=0;ie.morphAttributes.position!==void 0&&(Le=1),ie.morphAttributes.normal!==void 0&&(Le=2),ie.morphAttributes.color!==void 0&&(Le=3);let Qe,te,Se,qe;if(le){const Dt=ss[le];Qe=Dt.vertexShader,te=Dt.fragmentShader}else Qe=D.vertexShader,te=D.fragmentShader,u.update(D),Se=u.getVertexShaderID(D),qe=u.getFragmentShaderID(D);const De=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),vt=G.isInstancedMesh===!0,$e=G.isBatchedMesh===!0,Ft=!!D.map,Et=!!D.matcap,ct=!!$,B=!!D.aoMap,Ce=!!D.lightMap,ve=!!D.bumpMap,be=!!D.normalMap,ue=!!D.displacementMap,Ie=!!D.emissiveMap,me=!!D.metalnessMap,Be=!!D.roughnessMap,dt=D.anisotropy>0,I=D.clearcoat>0,P=D.dispersion>0,K=D.iridescence>0,re=D.sheen>0,pe=D.transmission>0,ae=dt&&!!D.anisotropyMap,je=I&&!!D.clearcoatMap,we=I&&!!D.clearcoatNormalMap,Xe=I&&!!D.clearcoatRoughnessMap,Ze=K&&!!D.iridescenceMap,fe=K&&!!D.iridescenceThicknessMap,Ne=re&&!!D.sheenColorMap,tt=re&&!!D.sheenRoughnessMap,nt=!!D.specularMap,Ae=!!D.specularColorMap,st=!!D.specularIntensityMap,k=pe&&!!D.transmissionMap,Ue=pe&&!!D.thicknessMap,_e=!!D.gradientMap,Ge=!!D.alphaMap,Me=D.alphaTest>0,he=!!D.alphaHash,Ye=!!D.extensions;let ot=bs;D.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Ht={shaderID:le,shaderType:D.type,shaderName:D.name,vertexShader:Qe,fragmentShader:te,defines:D.defines,customVertexShaderID:Se,customFragmentShaderID:qe,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:_,batching:$e,batchingColor:$e&&G._colorsTexture!==null,instancing:vt,instancingColor:vt&&G.instanceColor!==null,instancingMorph:vt&&G.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Pr,alphaToCoverage:!!D.alphaToCoverage,map:Ft,matcap:Et,envMap:ct,envMapMode:ct&&$.mapping,envMapCubeUVHeight:W,aoMap:B,lightMap:Ce,bumpMap:ve,normalMap:be,displacementMap:v&&ue,emissiveMap:Ie,normalMapObjectSpace:be&&D.normalMapType===d1,normalMapTangentSpace:be&&D.normalMapType===Nr,metalnessMap:me,roughnessMap:Be,anisotropy:dt,anisotropyMap:ae,clearcoat:I,clearcoatMap:je,clearcoatNormalMap:we,clearcoatRoughnessMap:Xe,dispersion:P,iridescence:K,iridescenceMap:Ze,iridescenceThicknessMap:fe,sheen:re,sheenColorMap:Ne,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:Ae,specularIntensityMap:st,transmission:pe,transmissionMap:k,thicknessMap:Ue,gradientMap:_e,opaque:D.transparent===!1&&D.blending===Ca&&D.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Me,alphaHash:he,combine:D.combine,mapUv:Ft&&T(D.map.channel),aoMapUv:B&&T(D.aoMap.channel),lightMapUv:Ce&&T(D.lightMap.channel),bumpMapUv:ve&&T(D.bumpMap.channel),normalMapUv:be&&T(D.normalMap.channel),displacementMapUv:ue&&T(D.displacementMap.channel),emissiveMapUv:Ie&&T(D.emissiveMap.channel),metalnessMapUv:me&&T(D.metalnessMap.channel),roughnessMapUv:Be&&T(D.roughnessMap.channel),anisotropyMapUv:ae&&T(D.anisotropyMap.channel),clearcoatMapUv:je&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:tt&&T(D.sheenRoughnessMap.channel),specularMapUv:nt&&T(D.specularMap.channel),specularColorMapUv:Ae&&T(D.specularColorMap.channel),specularIntensityMapUv:st&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:Ue&&T(D.thicknessMap.channel),alphaMapUv:Ge&&T(D.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(be||dt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ie.attributes.uv&&(Ft||Ge),fog:!!J,useFog:D.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:ke,skinning:G.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ft&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===qt,decodeVideoTextureEmissive:Ie&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===qt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===rs,flipSided:D.side===ii,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ye&&D.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&D.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ht.vertexUv1s=f.has(1),Ht.vertexUv2s=f.has(2),Ht.vertexUv3s=f.has(3),f.clear(),Ht}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)R.push(F),R.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(x(R,D),E(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function x(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function E(D,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),D.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),D.push(c.mask)}function b(D){const R=S[D.type];let F;if(R){const j=ss[R];F=Uc.clone(j.uniforms)}else F=D.uniforms;return F}function w(D,R){let F;for(let j=0,G=d.length;j<G;j++){const J=d[j];if(J.cacheKey===R){F=J,++F.usedTimes;break}}return F===void 0&&(F=new oD(s,R,D,a),d.push(F)),F}function A(D){if(--D.usedTimes===0){const R=d.indexOf(D);d[R]=d[d.length-1],d.pop(),D.destroy()}}function U(D){u.remove(D)}function N(){u.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:U,programs:d,dispose:N}}function fD(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function i(l,c,u){s.get(l)[c]=u}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function dD(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wy(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function l(m,v,_,S,T,M){let g=s[e];return g===void 0?(g={id:m.id,object:m,geometry:v,material:_,groupOrder:S,renderOrder:m.renderOrder,z:T,group:M},s[e]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=_,g.groupOrder=S,g.renderOrder=m.renderOrder,g.z=T,g.group=M),e++,g}function c(m,v,_,S,T,M){const g=l(m,v,_,S,T,M);_.transmission>0?n.push(g):_.transparent===!0?i.push(g):t.push(g)}function u(m,v,_,S,T,M){const g=l(m,v,_,S,T,M);_.transmission>0?n.unshift(g):_.transparent===!0?i.unshift(g):t.unshift(g)}function f(m,v){t.length>1&&t.sort(m||dD),n.length>1&&n.sort(v||Xy),i.length>1&&i.sort(v||Xy)}function d(){for(let m=e,v=s.length;m<v;m++){const _=s[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:c,unshift:u,finish:d,sort:f}}function pD(){let s=new WeakMap;function e(n,i){const a=s.get(n);let l;return a===void 0?(l=new Wy,s.set(n,[l])):i>=a.length?(l=new Wy,a.push(l)):l=a[i],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function mD(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function gD(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vD=0;function _D(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yD(s){const e=new mD,t=gD(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new z);const i=new z,a=new at,l=new at;function c(f){let d=0,m=0,v=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,S=0,T=0,M=0,g=0,x=0,E=0,b=0,w=0,A=0,U=0;f.sort(_D);for(let D=0,R=f.length;D<R;D++){const F=f[D],j=F.color,G=F.intensity,J=F.distance,ie=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=j.r*G,m+=j.g*G,v+=j.b*G;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],G);U++}else if(F.isDirectionalLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,W=t.get(F);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[_]=W,n.directionalShadowMap[_]=ie,n.directionalShadowMatrix[_]=F.shadow.matrix,x++}n.directional[_]=V,_++}else if(F.isSpotLight){const V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(j).multiplyScalar(G),V.distance=J,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[T]=V;const $=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,$.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[T]=$.matrix,F.castShadow){const W=t.get(F);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[T]=W,n.spotShadowMap[T]=ie,b++}T++}else if(F.isRectAreaLight){const V=e.get(F);V.color.copy(j).multiplyScalar(G),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[M]=V,M++}else if(F.isPointLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const $=F.shadow,W=t.get(F);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[S]=W,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=F.shadow.matrix,E++}n.point[S]=V,S++}else if(F.isHemisphereLight){const V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(G),V.groundColor.copy(F.groundColor).multiplyScalar(G),n.hemi[g]=V,g++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=v;const N=n.hash;(N.directionalLength!==_||N.pointLength!==S||N.spotLength!==T||N.rectAreaLength!==M||N.hemiLength!==g||N.numDirectionalShadows!==x||N.numPointShadows!==E||N.numSpotShadows!==b||N.numSpotMaps!==w||N.numLightProbes!==U)&&(n.directional.length=_,n.spot.length=T,n.rectArea.length=M,n.point.length=S,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,N.directionalLength=_,N.pointLength=S,N.spotLength=T,N.rectAreaLength=M,N.hemiLength=g,N.numDirectionalShadows=x,N.numPointShadows=E,N.numSpotShadows=b,N.numSpotMaps=w,N.numLightProbes=U,n.version=vD++)}function u(f,d){let m=0,v=0,_=0,S=0,T=0;const M=d.matrixWorldInverse;for(let g=0,x=f.length;g<x;g++){const E=f[g];if(E.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(M),m++}else if(E.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(M),_++}else if(E.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(M),l.identity(),a.copy(E.matrixWorld),a.premultiply(M),l.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),S++}else if(E.isPointLight){const b=n.point[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(M),v++}else if(E.isHemisphereLight){const b=n.hemi[T];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(M),T++}}}return{setup:c,setupView:u,state:n}}function qy(s){const e=new yD(s),t=[],n=[];function i(d){f.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function xD(s){let e=new WeakMap;function t(i,a=0){const l=e.get(i);let c;return l===void 0?(c=new qy(s),e.set(i,[c])):a>=l.length?(c=new qy(s),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const SD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ED(s,e,t){let n=new nl;const i=new de,a=new de,l=new Nt,c=new Gg({depthPacking:f1}),u=new kg,f={},d=t.maxTextureSize,m={[Ks]:ii,[ii]:Ks,[rs]:rs},v=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:SD,fragmentShader:MD}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const S=new gt;S.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new pn(S,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let g=this.type;this.render=function(A,U,N){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||A.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Zs),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=g!==is&&this.type===is,J=g===is&&this.type!==is;for(let ie=0,V=A.length;ie<V;ie++){const $=A[ie],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const le=W.getFrameExtents();if(i.multiply(le),a.copy(W.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/le.x),i.x=a.x*le.x,W.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/le.y),i.y=a.y*le.y,W.mapSize.y=a.y)),W.map===null||G===!0||J===!0){const xe=this.type!==is?{minFilter:On,magFilter:On}:{};W.map!==null&&W.map.dispose(),W.map=new os(i.x,i.y,xe),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ge=W.getViewportCount();for(let xe=0;xe<ge;xe++){const Le=W.getViewport(xe);l.set(a.x*Le.x,a.y*Le.y,a.x*Le.z,a.y*Le.w),j.viewport(l),W.updateMatrices($,xe),n=W.getFrustum(),b(U,N,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===is&&x(W,N),W.needsUpdate=!1}g=this.type,M.needsUpdate=!1,s.setRenderTarget(D,R,F)};function x(A,U){const N=e.update(T);v.defines.VSM_SAMPLES!==A.blurSamples&&(v.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new os(i.x,i.y)),v.uniforms.shadow_pass.value=A.map.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(U,null,N,v,T,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(U,null,N,_,T,null)}function E(A,U,N,D){let R=null;const F=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)R=F;else if(R=N.isPointLight===!0?u:c,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const j=R.uuid,G=U.uuid;let J=f[j];J===void 0&&(J={},f[j]=J);let ie=J[G];ie===void 0&&(ie=R.clone(),J[G]=ie,U.addEventListener("dispose",w)),R=ie}if(R.visible=U.visible,R.wireframe=U.wireframe,D===is?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:m[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,N.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=s.properties.get(R);j.light=N}return R}function b(A,U,N,D,R){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===is)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const G=e.update(A),J=A.material;if(Array.isArray(J)){const ie=G.groups;for(let V=0,$=ie.length;V<$;V++){const W=ie[V],le=J[W.materialIndex];if(le&&le.visible){const ge=E(A,le,D,R);A.onBeforeShadow(s,A,U,N,G,ge,W),s.renderBufferDirect(N,null,G,ge,A,W),A.onAfterShadow(s,A,U,N,G,ge,W)}}}else if(J.visible){const ie=E(A,J,D,R);A.onBeforeShadow(s,A,U,N,G,ie,null),s.renderBufferDirect(N,null,G,ie,A,null),A.onAfterShadow(s,A,U,N,G,ie,null)}}const j=A.children;for(let G=0,J=j.length;G<J;G++)b(j[G],U,N,D,R)}function w(A){A.target.removeEventListener("dispose",w);for(const N in f){const D=f[N],R=A.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const bD={[Rh]:Dh,[Ph]:Lh,[Uh]:Oh,[Ra]:Nh,[Dh]:Rh,[Lh]:Ph,[Oh]:Uh,[Nh]:Ra};function TD(s,e){function t(){let k=!1;const Ue=new Nt;let _e=null;const Ge=new Nt(0,0,0,0);return{setMask:function(Me){_e!==Me&&!k&&(s.colorMask(Me,Me,Me,Me),_e=Me)},setLocked:function(Me){k=Me},setClear:function(Me,he,Ye,ot,Ht){Ht===!0&&(Me*=ot,he*=ot,Ye*=ot),Ue.set(Me,he,Ye,ot),Ge.equals(Ue)===!1&&(s.clearColor(Me,he,Ye,ot),Ge.copy(Ue))},reset:function(){k=!1,_e=null,Ge.set(-1,0,0,0)}}}function n(){let k=!1,Ue=!1,_e=null,Ge=null,Me=null;return{setReversed:function(he){if(Ue!==he){const Ye=e.get("EXT_clip_control");he?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ue=he;const ot=Me;Me=null,this.setClear(ot)}},getReversed:function(){return Ue},setTest:function(he){he?De(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(he){_e!==he&&!k&&(s.depthMask(he),_e=he)},setFunc:function(he){if(Ue&&(he=bD[he]),Ge!==he){switch(he){case Rh:s.depthFunc(s.NEVER);break;case Dh:s.depthFunc(s.ALWAYS);break;case Ph:s.depthFunc(s.LESS);break;case Ra:s.depthFunc(s.LEQUAL);break;case Uh:s.depthFunc(s.EQUAL);break;case Nh:s.depthFunc(s.GEQUAL);break;case Lh:s.depthFunc(s.GREATER);break;case Oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=he}},setLocked:function(he){k=he},setClear:function(he){Me!==he&&(Ue&&(he=1-he),s.clearDepth(he),Me=he)},reset:function(){k=!1,_e=null,Ge=null,Me=null,Ue=!1}}}function i(){let k=!1,Ue=null,_e=null,Ge=null,Me=null,he=null,Ye=null,ot=null,Ht=null;return{setTest:function(Dt){k||(Dt?De(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(Dt){Ue!==Dt&&!k&&(s.stencilMask(Dt),Ue=Dt)},setFunc:function(Dt,ri,Di){(_e!==Dt||Ge!==ri||Me!==Di)&&(s.stencilFunc(Dt,ri,Di),_e=Dt,Ge=ri,Me=Di)},setOp:function(Dt,ri,Di){(he!==Dt||Ye!==ri||ot!==Di)&&(s.stencilOp(Dt,ri,Di),he=Dt,Ye=ri,ot=Di)},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ht!==Dt&&(s.clearStencil(Dt),Ht=Dt)},reset:function(){k=!1,Ue=null,_e=null,Ge=null,Me=null,he=null,Ye=null,ot=null,Ht=null}}}const a=new t,l=new n,c=new i,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],S=null,T=!1,M=null,g=null,x=null,E=null,b=null,w=null,A=null,U=new ze(0,0,0),N=0,D=!1,R=null,F=null,j=null,G=null,J=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=$>=2);let le=null,ge={};const xe=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Qe=new Nt().fromArray(xe),te=new Nt().fromArray(Le);function Se(k,Ue,_e,Ge){const Me=new Uint8Array(4),he=s.createTexture();s.bindTexture(k,he),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<_e;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Ue+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return he}const qe={};qe[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),qe[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),qe[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),qe[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(s.DEPTH_TEST),l.setFunc(Ra),ve(!1),be(Gm),De(s.CULL_FACE),B(Zs);function De(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function ke(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function vt(k,Ue){return m[k]!==Ue?(s.bindFramebuffer(k,Ue),m[k]=Ue,k===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ue),k===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function $e(k,Ue){let _e=_,Ge=!1;if(k){_e=v.get(Ue),_e===void 0&&(_e=[],v.set(Ue,_e));const Me=k.textures;if(_e.length!==Me.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ye=Me.length;he<Ye;he++)_e[he]=s.COLOR_ATTACHMENT0+he;_e.length=Me.length,Ge=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(_e)}function Ft(k){return S!==k?(s.useProgram(k),S=k,!0):!1}const Et={[Ar]:s.FUNC_ADD,[Bx]:s.FUNC_SUBTRACT,[zx]:s.FUNC_REVERSE_SUBTRACT};Et[Ix]=s.MIN,Et[Fx]=s.MAX;const ct={[Hx]:s.ZERO,[Vx]:s.ONE,[Gx]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[Zx]:s.SRC_ALPHA_SATURATE,[qx]:s.DST_COLOR,[Xx]:s.DST_ALPHA,[kx]:s.ONE_MINUS_SRC_COLOR,[wh]:s.ONE_MINUS_SRC_ALPHA,[Yx]:s.ONE_MINUS_DST_COLOR,[Wx]:s.ONE_MINUS_DST_ALPHA,[jx]:s.CONSTANT_COLOR,[Kx]:s.ONE_MINUS_CONSTANT_COLOR,[Jx]:s.CONSTANT_ALPHA,[Qx]:s.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ue,_e,Ge,Me,he,Ye,ot,Ht,Dt){if(k===Zs){T===!0&&(ke(s.BLEND),T=!1);return}if(T===!1&&(De(s.BLEND),T=!0),k!==Ox){if(k!==M||Dt!==D){if((g!==Ar||b!==Ar)&&(s.blendEquation(s.FUNC_ADD),g=Ar,b=Ar),Dt)switch(k){case Ca:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFunc(s.ONE,s.ONE);break;case Xm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ca:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,E=null,w=null,A=null,U.set(0,0,0),N=0,M=k,D=Dt}return}Me=Me||Ue,he=he||_e,Ye=Ye||Ge,(Ue!==g||Me!==b)&&(s.blendEquationSeparate(Et[Ue],Et[Me]),g=Ue,b=Me),(_e!==x||Ge!==E||he!==w||Ye!==A)&&(s.blendFuncSeparate(ct[_e],ct[Ge],ct[he],ct[Ye]),x=_e,E=Ge,w=he,A=Ye),(ot.equals(U)===!1||Ht!==N)&&(s.blendColor(ot.r,ot.g,ot.b,Ht),U.copy(ot),N=Ht),M=k,D=!1}function Ce(k,Ue){k.side===rs?ke(s.CULL_FACE):De(s.CULL_FACE);let _e=k.side===ii;Ue&&(_e=!_e),ve(_e),k.blending===Ca&&k.transparent===!1?B(Zs):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Ge=k.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function be(k){k!==Ux?(De(s.CULL_FACE),k!==F&&(k===Gm?s.cullFace(s.BACK):k===Nx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),F=k}function ue(k){k!==j&&(V&&s.lineWidth(k),j=k)}function Ie(k,Ue,_e){k?(De(s.POLYGON_OFFSET_FILL),(G!==Ue||J!==_e)&&(s.polygonOffset(Ue,_e),G=Ue,J=_e)):ke(s.POLYGON_OFFSET_FILL)}function me(k){k?De(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function Be(k){k===void 0&&(k=s.TEXTURE0+ie-1),le!==k&&(s.activeTexture(k),le=k)}function dt(k,Ue,_e){_e===void 0&&(le===null?_e=s.TEXTURE0+ie-1:_e=le);let Ge=ge[_e];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[_e]=Ge),(Ge.type!==k||Ge.texture!==Ue)&&(le!==_e&&(s.activeTexture(_e),le=_e),s.bindTexture(k,Ue||qe[k]),Ge.type=k,Ge.texture=Ue)}function I(){const k=ge[le];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function P(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){Qe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Qe.copy(k))}function tt(k){te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function nt(k,Ue){let _e=f.get(Ue);_e===void 0&&(_e=new WeakMap,f.set(Ue,_e));let Ge=_e.get(k);Ge===void 0&&(Ge=s.getUniformBlockIndex(Ue,k.name),_e.set(k,Ge))}function Ae(k,Ue){const Ge=f.get(Ue).get(k);u.get(Ue)!==Ge&&(s.uniformBlockBinding(Ue,Ge,k.__bindingPointIndex),u.set(Ue,Ge))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},le=null,ge={},m={},v=new WeakMap,_=[],S=null,T=!1,M=null,g=null,x=null,E=null,b=null,w=null,A=null,U=new ze(0,0,0),N=0,D=!1,R=null,F=null,j=null,G=null,J=null,Qe.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:ke,bindFramebuffer:vt,drawBuffers:$e,useProgram:Ft,setBlending:B,setMaterial:Ce,setFlipSided:ve,setCullFace:be,setLineWidth:ue,setPolygonOffset:Ie,setScissorTest:me,activeTexture:Be,bindTexture:dt,unbindTexture:I,compressedTexImage2D:P,compressedTexImage3D:K,texImage2D:Ze,texImage3D:fe,updateUBOMapping:nt,uniformBlockBinding:Ae,texStorage2D:we,texStorage3D:Xe,texSubImage2D:re,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:je,scissor:Ne,viewport:tt,reset:st}}function CD(s,e,t,n,i,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new de,d=new WeakMap;let m;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,P){return _?new OffscreenCanvas(I,P):Sc("canvas")}function T(I,P,K){let re=1;const pe=dt(I);if((pe.width>K||pe.height>K)&&(re=K/Math.max(pe.width,pe.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(re*pe.width),je=Math.floor(re*pe.height);m===void 0&&(m=S(ae,je));const we=P?S(ae,je):m;return we.width=ae,we.height=je,we.getContext("2d").drawImage(I,0,0,ae,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+je+")."),we}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function M(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(I,P,K,re,pe=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=P;if(P===s.RED&&(K===s.FLOAT&&(ae=s.R32F),K===s.HALF_FLOAT&&(ae=s.R16F),K===s.UNSIGNED_BYTE&&(ae=s.R8)),P===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.R8UI),K===s.UNSIGNED_SHORT&&(ae=s.R16UI),K===s.UNSIGNED_INT&&(ae=s.R32UI),K===s.BYTE&&(ae=s.R8I),K===s.SHORT&&(ae=s.R16I),K===s.INT&&(ae=s.R32I)),P===s.RG&&(K===s.FLOAT&&(ae=s.RG32F),K===s.HALF_FLOAT&&(ae=s.RG16F),K===s.UNSIGNED_BYTE&&(ae=s.RG8)),P===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RG8UI),K===s.UNSIGNED_SHORT&&(ae=s.RG16UI),K===s.UNSIGNED_INT&&(ae=s.RG32UI),K===s.BYTE&&(ae=s.RG8I),K===s.SHORT&&(ae=s.RG16I),K===s.INT&&(ae=s.RG32I)),P===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),K===s.UNSIGNED_INT&&(ae=s.RGB32UI),K===s.BYTE&&(ae=s.RGB8I),K===s.SHORT&&(ae=s.RGB16I),K===s.INT&&(ae=s.RGB32I)),P===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),K===s.UNSIGNED_INT&&(ae=s.RGBA32UI),K===s.BYTE&&(ae=s.RGBA8I),K===s.SHORT&&(ae=s.RGBA16I),K===s.INT&&(ae=s.RGBA32I)),P===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),P===s.RGBA){const je=pe?_c:Rt.getTransfer(re);K===s.FLOAT&&(ae=s.RGBA32F),K===s.HALF_FLOAT&&(ae=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ae=je===qt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(I,P){let K;return I?P===null||P===Qs||P===Wo?K=s.DEPTH24_STENCIL8:P===Nn?K=s.DEPTH32F_STENCIL8:P===Xo&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Qs||P===Wo?K=s.DEPTH_COMPONENT24:P===Nn?K=s.DEPTH_COMPONENT32F:P===Xo&&(K=s.DEPTH_COMPONENT16),K}function w(I,P){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==On&&I.minFilter!==cn?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function A(I){const P=I.target;P.removeEventListener("dispose",A),N(P),P.isVideoTexture&&d.delete(P)}function U(I){const P=I.target;P.removeEventListener("dispose",U),R(P)}function N(I){const P=n.get(I);if(P.__webglInit===void 0)return;const K=I.source,re=v.get(K);if(re){const pe=re[P.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(I),Object.keys(re).length===0&&v.delete(K)}n.remove(I)}function D(I){const P=n.get(I);s.deleteTexture(P.__webglTexture);const K=I.source,re=v.get(K);delete re[P.__cacheKey],l.memory.textures--}function R(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(P.__webglFramebuffer[re]))for(let pe=0;pe<P.__webglFramebuffer[re].length;pe++)s.deleteFramebuffer(P.__webglFramebuffer[re][pe]);else s.deleteFramebuffer(P.__webglFramebuffer[re]);P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer[re])}else{if(Array.isArray(P.__webglFramebuffer))for(let re=0;re<P.__webglFramebuffer.length;re++)s.deleteFramebuffer(P.__webglFramebuffer[re]);else s.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&s.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let re=0;re<P.__webglColorRenderbuffer.length;re++)P.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(P.__webglColorRenderbuffer[re]);P.__webglDepthRenderbuffer&&s.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const K=I.textures;for(let re=0,pe=K.length;re<pe;re++){const ae=n.get(K[re]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),l.memory.textures--),n.remove(K[re])}n.remove(I)}let F=0;function j(){F=0}function G(){const I=F;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),F+=1,I}function J(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function ie(I,P){const K=n.get(I);if(I.isVideoTexture&&me(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(K,I,P);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+P)}function V(I,P){const K=n.get(I);if(I.version>0&&K.__version!==I.version){qe(K,I,P);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+P)}function $(I,P){const K=n.get(I);if(I.version>0&&K.__version!==I.version){qe(K,I,P);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+P)}function W(I,P){const K=n.get(I);if(I.version>0&&K.__version!==I.version){De(K,I,P);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+P)}const le={[pc]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[mc]:s.MIRRORED_REPEAT},ge={[On]:s.NEAREST,[mg]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[ic]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},xe={[p1]:s.NEVER,[x1]:s.ALWAYS,[m1]:s.LESS,[bg]:s.LEQUAL,[g1]:s.EQUAL,[y1]:s.GEQUAL,[v1]:s.GREATER,[_1]:s.NOTEQUAL};function Le(I,P){if(P.type===Nn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===cn||P.magFilter===ic||P.magFilter===zo||P.magFilter===Ss||P.minFilter===cn||P.minFilter===ic||P.minFilter===zo||P.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,le[P.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,le[P.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,le[P.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ge[P.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ge[P.minFilter]),P.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,xe[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===On||P.minFilter!==zo&&P.minFilter!==Ss||P.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Qe(I,P){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",A));const re=P.source;let pe=v.get(re);pe===void 0&&(pe={},v.set(re,pe));const ae=J(P);if(ae!==I.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,K=!0),pe[ae].usedTimes++;const je=pe[I.__cacheKey];je!==void 0&&(pe[I.__cacheKey].usedTimes--,je.usedTimes===0&&D(P)),I.__cacheKey=ae,I.__webglTexture=pe[ae].texture}return K}function te(I,P,K){return Math.floor(Math.floor(I/K)/P)}function Se(I,P,K,re){const ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,P.width,P.height,K,re,P.data);else{ae.sort((fe,Ne)=>fe.start-Ne.start);let je=0;for(let fe=1;fe<ae.length;fe++){const Ne=ae[je],tt=ae[fe],nt=Ne.start+Ne.count,Ae=te(tt.start,P.width,4),st=te(Ne.start,P.width,4);tt.start<=nt+1&&Ae===st&&te(tt.start+tt.count-1,P.width,4)===Ae?Ne.count=Math.max(Ne.count,tt.start+tt.count-Ne.start):(++je,ae[je]=tt)}ae.length=je+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,P.width);for(let fe=0,Ne=ae.length;fe<Ne;fe++){const tt=ae[fe],nt=Math.floor(tt.start/4),Ae=Math.ceil(tt.count/4),st=nt%P.width,k=Math.floor(nt/P.width),Ue=Ae,_e=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,st,k,Ue,_e,K,re,P.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ze)}}function qe(I,P,K){let re=s.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=s.TEXTURE_3D);const pe=Qe(I,P),ae=P.source;t.bindTexture(re,I.__webglTexture,s.TEXTURE0+K);const je=n.get(ae);if(ae.version!==je.__version||pe===!0){t.activeTexture(s.TEXTURE0+K);const we=Rt.getPrimaries(Rt.workingColorSpace),Xe=P.colorSpace===qs?null:Rt.getPrimaries(P.colorSpace),Ze=P.colorSpace===qs||we===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let fe=T(P.image,!1,i.maxTextureSize);fe=Be(P,fe);const Ne=a.convert(P.format,P.colorSpace),tt=a.convert(P.type);let nt=E(P.internalFormat,Ne,tt,P.colorSpace,P.isVideoTexture);Le(re,P);let Ae;const st=P.mipmaps,k=P.isVideoTexture!==!0,Ue=je.__version===void 0||pe===!0,_e=ae.dataReady,Ge=w(P,fe);if(P.isDepthTexture)nt=b(P.format===Yo,P.type),Ue&&(k?t.texStorage2D(s.TEXTURE_2D,1,nt,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,nt,fe.width,fe.height,0,Ne,tt,null));else if(P.isDataTexture)if(st.length>0){k&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ge,nt,st[0].width,st[0].height);for(let Me=0,he=st.length;Me<he;Me++)Ae=st[Me],k?_e&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,Ne,tt,Ae.data):t.texImage2D(s.TEXTURE_2D,Me,nt,Ae.width,Ae.height,0,Ne,tt,Ae.data);P.generateMipmaps=!1}else k?(Ue&&t.texStorage2D(s.TEXTURE_2D,Ge,nt,fe.width,fe.height),_e&&Se(P,fe,Ne,tt)):t.texImage2D(s.TEXTURE_2D,0,nt,fe.width,fe.height,0,Ne,tt,fe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){k&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,nt,st[0].width,st[0].height,fe.depth);for(let Me=0,he=st.length;Me<he;Me++)if(Ae=st[Me],P.format!==Ln)if(Ne!==null)if(k){if(_e)if(P.layerUpdates.size>0){const Ye=tg(Ae.width,Ae.height,P.format,P.type);for(const ot of P.layerUpdates){const Ht=Ae.data.subarray(ot*Ye/Ae.data.BYTES_PER_ELEMENT,(ot+1)*Ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,ot,Ae.width,Ae.height,1,Ne,Ht)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,fe.depth,Ne,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,nt,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,fe.depth,Ne,tt,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,nt,Ae.width,Ae.height,fe.depth,0,Ne,tt,Ae.data)}else{k&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ge,nt,st[0].width,st[0].height);for(let Me=0,he=st.length;Me<he;Me++)Ae=st[Me],P.format!==Ln?Ne!==null?k?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,Ne,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,nt,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,Ne,tt,Ae.data):t.texImage2D(s.TEXTURE_2D,Me,nt,Ae.width,Ae.height,0,Ne,tt,Ae.data)}else if(P.isDataArrayTexture)if(k){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,nt,fe.width,fe.height,fe.depth),_e)if(P.layerUpdates.size>0){const Me=tg(fe.width,fe.height,P.format,P.type);for(const he of P.layerUpdates){const Ye=fe.data.subarray(he*Me/fe.data.BYTES_PER_ELEMENT,(he+1)*Me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,Ne,tt,Ye)}P.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,tt,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,fe.width,fe.height,fe.depth,0,Ne,tt,fe.data);else if(P.isData3DTexture)k?(Ue&&t.texStorage3D(s.TEXTURE_3D,Ge,nt,fe.width,fe.height,fe.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,tt,fe.data)):t.texImage3D(s.TEXTURE_3D,0,nt,fe.width,fe.height,fe.depth,0,Ne,tt,fe.data);else if(P.isFramebufferTexture){if(Ue)if(k)t.texStorage2D(s.TEXTURE_2D,Ge,nt,fe.width,fe.height);else{let Me=fe.width,he=fe.height;for(let Ye=0;Ye<Ge;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,nt,Me,he,0,Ne,tt,null),Me>>=1,he>>=1}}else if(st.length>0){if(k&&Ue){const Me=dt(st[0]);t.texStorage2D(s.TEXTURE_2D,Ge,nt,Me.width,Me.height)}for(let Me=0,he=st.length;Me<he;Me++)Ae=st[Me],k?_e&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ne,tt,Ae):t.texImage2D(s.TEXTURE_2D,Me,nt,Ne,tt,Ae);P.generateMipmaps=!1}else if(k){if(Ue){const Me=dt(fe);t.texStorage2D(s.TEXTURE_2D,Ge,nt,Me.width,Me.height)}_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,tt,fe)}else t.texImage2D(s.TEXTURE_2D,0,nt,Ne,tt,fe);M(P)&&g(re),je.__version=ae.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function De(I,P,K){if(P.image.length!==6)return;const re=Qe(I,P),pe=P.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);const ae=n.get(pe);if(pe.version!==ae.__version||re===!0){t.activeTexture(s.TEXTURE0+K);const je=Rt.getPrimaries(Rt.workingColorSpace),we=P.colorSpace===qs?null:Rt.getPrimaries(P.colorSpace),Xe=P.colorSpace===qs||je===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ze=P.isCompressedTexture||P.image[0].isCompressedTexture,fe=P.image[0]&&P.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ze&&!fe?Ne[he]=T(P.image[he],!0,i.maxCubemapSize):Ne[he]=fe?P.image[he].image:P.image[he],Ne[he]=Be(P,Ne[he]);const tt=Ne[0],nt=a.convert(P.format,P.colorSpace),Ae=a.convert(P.type),st=E(P.internalFormat,nt,Ae,P.colorSpace),k=P.isVideoTexture!==!0,Ue=ae.__version===void 0||re===!0,_e=pe.dataReady;let Ge=w(P,tt);Le(s.TEXTURE_CUBE_MAP,P);let Me;if(Ze){k&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,st,tt.width,tt.height);for(let he=0;he<6;he++){Me=Ne[he].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){const ot=Me[Ye];P.format!==Ln?nt!==null?k?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,0,0,ot.width,ot.height,nt,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,st,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,0,0,ot.width,ot.height,nt,Ae,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,st,ot.width,ot.height,0,nt,Ae,ot.data)}}}else{if(Me=P.mipmaps,k&&Ue){Me.length>0&&Ge++;const he=dt(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,st,he.width,he.height)}for(let he=0;he<6;he++)if(fe){k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,nt,Ae,Ne[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ne[he].width,Ne[he].height,0,nt,Ae,Ne[he].data);for(let Ye=0;Ye<Me.length;Ye++){const Ht=Me[Ye].image[he].image;k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,0,0,Ht.width,Ht.height,nt,Ae,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,st,Ht.width,Ht.height,0,nt,Ae,Ht.data)}}else{k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,nt,Ae,Ne[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,nt,Ae,Ne[he]);for(let Ye=0;Ye<Me.length;Ye++){const ot=Me[Ye];k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,0,0,nt,Ae,ot.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,st,nt,Ae,ot.image[he])}}}M(P)&&g(s.TEXTURE_CUBE_MAP),ae.__version=pe.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ke(I,P,K,re,pe,ae){const je=a.convert(K.format,K.colorSpace),we=a.convert(K.type),Xe=E(K.internalFormat,je,we,K.colorSpace),Ze=n.get(P),fe=n.get(K);if(fe.__renderTarget=P,!Ze.__hasExternalTextures){const Ne=Math.max(1,P.width>>ae),tt=Math.max(1,P.height>>ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ae,Xe,Ne,tt,P.depth,0,je,we,null):t.texImage2D(pe,ae,Xe,Ne,tt,0,je,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ie(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,pe,fe.__webglTexture,0,ue(P)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,pe,fe.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(I,P,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),P.depthBuffer){const re=P.depthTexture,pe=re&&re.isDepthTexture?re.type:null,ae=b(P.stencilBuffer,pe),je=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=ue(P);Ie(P)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ae,P.width,P.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ae,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,I)}else{const re=P.textures;for(let pe=0;pe<re.length;pe++){const ae=re[pe],je=a.convert(ae.format,ae.colorSpace),we=a.convert(ae.type),Xe=E(ae.internalFormat,je,we,ae.colorSpace),Ze=ue(P);K&&Ie(P)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Xe,P.width,P.height):Ie(P)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Xe,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,Xe,P.width,P.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(P.depthTexture);re.__renderTarget=P,(!re.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ie(P.depthTexture,0);const pe=re.__webglTexture,ae=ue(P);if(P.depthTexture.format===qo)Ie(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(P.depthTexture.format===Yo)Ie(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ft(I){const P=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),re){const pe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,re.removeEventListener("dispose",pe)};re.addEventListener("dispose",pe),P.__depthDisposeCallback=pe}P.__boundDepthTexture=re}if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const re=I.texture.mipmaps;re&&re.length>0?$e(P.__webglFramebuffer[0],I):$e(P.__webglFramebuffer,I)}else if(K){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]===void 0)P.__webglDepthbuffer[re]=s.createRenderbuffer(),vt(P.__webglDepthbuffer[re],I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=P.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}else{const re=I.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=s.createRenderbuffer(),vt(P.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=P.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(I,P,K){const re=n.get(I);P!==void 0&&ke(re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ft(I)}function ct(I){const P=I.texture,K=n.get(I),re=n.get(P);I.addEventListener("dispose",U);const pe=I.textures,ae=I.isWebGLCubeRenderTarget===!0,je=pe.length>1;if(je||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=P.version,l.memory.textures++),ae){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Xe=0;Xe<P.mipmaps.length;Xe++)K.__webglFramebuffer[we][Xe]=s.createFramebuffer()}else K.__webglFramebuffer[we]=s.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<P.mipmaps.length;we++)K.__webglFramebuffer[we]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(je)for(let we=0,Xe=pe.length;we<Xe;we++){const Ze=n.get(pe[we]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),l.memory.textures++)}if(I.samples>0&&Ie(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<pe.length;we++){const Xe=pe[we];K.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const Ze=a.convert(Xe.format,Xe.colorSpace),fe=a.convert(Xe.type),Ne=E(Xe.internalFormat,Ze,fe,Xe.colorSpace,I.isXRRenderTarget===!0),tt=ue(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Ne,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,K.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Le(s.TEXTURE_CUBE_MAP,P);for(let we=0;we<6;we++)if(P.mipmaps&&P.mipmaps.length>0)for(let Xe=0;Xe<P.mipmaps.length;Xe++)ke(K.__webglFramebuffer[we][Xe],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe);else ke(K.__webglFramebuffer[we],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(P)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let we=0,Xe=pe.length;we<Xe;we++){const Ze=pe[we],fe=n.get(Ze);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),Le(s.TEXTURE_2D,Ze),ke(K.__webglFramebuffer,I,Ze,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),M(Ze)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,re.__webglTexture),Le(we,P),P.mipmaps&&P.mipmaps.length>0)for(let Xe=0;Xe<P.mipmaps.length;Xe++)ke(K.__webglFramebuffer[Xe],I,P,s.COLOR_ATTACHMENT0,we,Xe);else ke(K.__webglFramebuffer,I,P,s.COLOR_ATTACHMENT0,we,0);M(P)&&g(we),t.unbindTexture()}I.depthBuffer&&Ft(I)}function B(I){const P=I.textures;for(let K=0,re=P.length;K<re;K++){const pe=P[K];if(M(pe)){const ae=x(I),je=n.get(pe).__webglTexture;t.bindTexture(ae,je),g(ae),t.unbindTexture()}}}const Ce=[],ve=[];function be(I){if(I.samples>0){if(Ie(I)===!1){const P=I.textures,K=I.width,re=I.height;let pe=s.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=n.get(I),we=P.length>1;if(we)for(let Ze=0;Ze<P.length;Ze++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Xe=I.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ze=0;Ze<P.length;Ze++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ze]);const fe=n.get(P[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,pe,s.NEAREST),u===!0&&(Ce.length=0,ve.length=0,Ce.push(s.COLOR_ATTACHMENT0+Ze),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ce.push(ae),ve.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ze=0;Ze<P.length;Ze++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ze]);const fe=n.get(P[Ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const P=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[P])}}}function ue(I){return Math.min(i.maxSamples,I.samples)}function Ie(I){const P=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function me(I){const P=l.render.frame;d.get(I)!==P&&(d.set(I,P),I.update())}function Be(I,P){const K=I.colorSpace,re=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Pr&&K!==qs&&(Rt.getTransfer(K)===qt?(re!==Ln||pe!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),P}function dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=ie,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ie}function DS(s,e){function t(n,i=qs){let a;const l=Rt.getTransfer(i);if(n===Wi)return s.UNSIGNED_BYTE;if(n===bf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gg)return s.BYTE;if(n===vg)return s.SHORT;if(n===Xo)return s.UNSIGNED_SHORT;if(n===Ef)return s.INT;if(n===Qs)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Ms)return s.HALF_FLOAT;if(n===yg)return s.ALPHA;if(n===xg)return s.RGB;if(n===Ln)return s.RGBA;if(n===qo)return s.DEPTH_COMPONENT;if(n===Yo)return s.DEPTH_STENCIL;if(n===Cf)return s.RED;if(n===Pc)return s.RED_INTEGER;if(n===Sg)return s.RG;if(n===Af)return s.RG_INTEGER;if(n===wf)return s.RGBA_INTEGER;if(n===sc||n===rc||n===ac||n===oc)if(l===qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===zh||n===Ih||n===Fh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hh||n===Vh||n===Gh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Hh||n===Vh)return l===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Gh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kh||n===Xh||n===Wh||n===qh||n===Yh||n===Zh||n===jh||n===Kh||n===Jh||n===Qh||n===$h||n===ef||n===tf||n===nf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===kh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qh)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$h)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ef)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tf)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nf)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===sf||n===rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===lc)return l===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mg||n===af||n===of||n===lf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===of)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const AD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mn,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:AD,fragmentShader:wD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new il(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DD extends ls{constructor(e,t){super();const n=this;let i=null,a=1,l=null,c="local-floor",u=1,f=null,d=null,m=null,v=null,_=null,S=null;const T=new RD,M=t.getContextAttributes();let g=null,x=null;const E=[],b=[],w=new de;let A=null;const U=new wn;U.viewport=new Nt;const N=new wn;N.viewport=new Nt;const D=[U,N],R=new yS;let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Se=E[te];return Se===void 0&&(Se=new Eh,E[te]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(te){let Se=E[te];return Se===void 0&&(Se=new Eh,E[te]=Se),Se.getGripSpace()},this.getHand=function(te){let Se=E[te];return Se===void 0&&(Se=new Eh,E[te]=Se),Se.getHandSpace()};function G(te){const Se=b.indexOf(te.inputSource);if(Se===-1)return;const qe=E[Se];qe!==void 0&&(qe.update(te.inputSource,te.frame,f||l),qe.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",ie);for(let te=0;te<E.length;te++){const Se=b[te];Se!==null&&(b[te]=null,E[te].disconnect(Se))}F=null,j=null,T.reset(),e.setRenderTarget(g),_=null,v=null,m=null,i=null,x=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",J),i.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let qe=null,De=null,ke=null;M.depth&&(ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,qe=M.stencil?Yo:qo,De=M.stencil?Wo:Qs);const vt={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};m=new XRWebGLBinding(i,t),v=m.createProjectionLayer(vt),i.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),x=new os(v.textureWidth,v.textureHeight,{format:Ln,type:Wi,depthTexture:new Ng(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,qe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const qe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(i,t,qe),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),x=new os(_.framebufferWidth,_.framebufferHeight,{format:Ln,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await i.requestReferenceSpace(c),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ie(te){for(let Se=0;Se<te.removed.length;Se++){const qe=te.removed[Se],De=b.indexOf(qe);De>=0&&(b[De]=null,E[De].disconnect(qe))}for(let Se=0;Se<te.added.length;Se++){const qe=te.added[Se];let De=b.indexOf(qe);if(De===-1){for(let vt=0;vt<E.length;vt++)if(vt>=b.length){b.push(qe),De=vt;break}else if(b[vt]===null){b[vt]=qe,De=vt;break}if(De===-1)break}const ke=E[De];ke&&ke.connect(qe)}}const V=new z,$=new z;function W(te,Se,qe){V.setFromMatrixPosition(Se.matrixWorld),$.setFromMatrixPosition(qe.matrixWorld);const De=V.distanceTo($),ke=Se.projectionMatrix.elements,vt=qe.projectionMatrix.elements,$e=ke[14]/(ke[10]-1),Ft=ke[14]/(ke[10]+1),Et=(ke[9]+1)/ke[5],ct=(ke[9]-1)/ke[5],B=(ke[8]-1)/ke[0],Ce=(vt[8]+1)/vt[0],ve=$e*B,be=$e*Ce,ue=De/(-B+Ce),Ie=ue*-B;if(Se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ie),te.translateZ(ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ke[10]===-1)te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const me=$e+ue,Be=Ft+ue,dt=ve-Ie,I=be+(De-Ie),P=Et*Ft/Be*me,K=ct*Ft/Be*me;te.projectionMatrix.makePerspective(dt,I,P,K,me,Be),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,Se){Se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let Se=te.near,qe=te.far;T.texture!==null&&(T.depthNear>0&&(Se=T.depthNear),T.depthFar>0&&(qe=T.depthFar)),R.near=N.near=U.near=Se,R.far=N.far=U.far=qe,(F!==R.near||j!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,j=R.far),U.layers.mask=te.layers.mask|2,N.layers.mask=te.layers.mask|4,R.layers.mask=U.layers.mask|N.layers.mask;const De=te.parent,ke=R.cameras;le(R,De);for(let vt=0;vt<ke.length;vt++)le(ke[vt],De);ke.length===2?W(R,U,N):R.projectionMatrix.copy(U.projectionMatrix),ge(te,R,De)};function ge(te,Se,qe){qe===null?te.matrix.copy(Se.matrixWorld):(te.matrix.copy(qe.matrixWorld),te.matrix.invert(),te.matrix.multiply(Se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Zo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&_===null))return u},this.setFoveation=function(te){u=te,v!==null&&(v.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let xe=null;function Le(te,Se){if(d=Se.getViewerPose(f||l),S=Se,d!==null){const qe=d.views;_!==null&&(e.setRenderTargetFramebuffer(x,_.framebuffer),e.setRenderTarget(x));let De=!1;qe.length!==R.cameras.length&&(R.cameras.length=0,De=!0);for(let $e=0;$e<qe.length;$e++){const Ft=qe[$e];let Et=null;if(_!==null)Et=_.getViewport(Ft);else{const B=m.getViewSubImage(v,Ft);Et=B.viewport,$e===0&&(e.setRenderTargetTextures(x,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(x))}let ct=D[$e];ct===void 0&&(ct=new wn,ct.layers.enable($e),ct.viewport=new Nt,D[$e]=ct),ct.matrix.fromArray(Ft.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Ft.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Et.x,Et.y,Et.width,Et.height),$e===0&&(R.matrix.copy(ct.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),De===!0&&R.cameras.push(ct)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){const $e=m.getDepthInformation(qe[0]);$e&&$e.isValid&&$e.texture&&T.init(e,$e,i.renderState)}}for(let qe=0;qe<E.length;qe++){const De=b[qe],ke=E[qe];De!==null&&ke!==void 0&&ke.update(De,Se,f||l)}xe&&xe(te,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),S=null}const Qe=new TS;Qe.setAnimationLoop(Le),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}}const ga=new Ri,PD=new at;function UD(s,e){function t(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function n(M,g){g.color.getRGB(M.fogColor.value,T1(s)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function i(M,g,x,E,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(M,g):g.isMeshToonMaterial?(a(M,g),m(M,g)):g.isMeshPhongMaterial?(a(M,g),d(M,g)):g.isMeshStandardMaterial?(a(M,g),v(M,g),g.isMeshPhysicalMaterial&&_(M,g,b)):g.isMeshMatcapMaterial?(a(M,g),S(M,g)):g.isMeshDepthMaterial?a(M,g):g.isMeshDistanceMaterial?(a(M,g),T(M,g)):g.isMeshNormalMaterial?a(M,g):g.isLineBasicMaterial?(l(M,g),g.isLineDashedMaterial&&c(M,g)):g.isPointsMaterial?u(M,g,x,E):g.isSpriteMaterial?f(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,t(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===ii&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,t(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===ii&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,t(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,t(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const x=e.get(g),E=x.envMap,b=x.envMapRotation;E&&(M.envMap.value=E,ga.copy(b),ga.x*=-1,ga.y*=-1,ga.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ga.y*=-1,ga.z*=-1),M.envMapRotation.value.setFromMatrix4(PD.makeRotationFromEuler(ga)),M.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,M.aoMapTransform))}function l(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform))}function c(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function u(M,g,x,E){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*x,M.scale.value=E*.5,g.map&&(M.map.value=g.map,t(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function f(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function d(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function m(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function v(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function _(M,g,x){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ii&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=x.texture,M.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,g){g.matcap&&(M.matcap.value=g.matcap)}function T(M,g){const x=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(x.matrixWorld),M.nearDistance.value=x.shadow.camera.near,M.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ND(s,e,t,n){let i={},a={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(x,E){const b=E.program;n.uniformBlockBinding(x,b)}function f(x,E){let b=i[x.id];b===void 0&&(S(x),b=d(x),i[x.id]=b,x.addEventListener("dispose",M));const w=E.program;n.updateUBOMapping(x,w);const A=e.render.frame;a[x.id]!==A&&(v(x),a[x.id]=A)}function d(x){const E=m();x.__bindingPointIndex=E;const b=s.createBuffer(),w=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function m(){for(let x=0;x<c;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(x){const E=i[x.id],b=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,U=b.length;A<U;A++){const N=Array.isArray(b[A])?b[A]:[b[A]];for(let D=0,R=N.length;D<R;D++){const F=N[D];if(_(F,A,D,w)===!0){const j=F.__offset,G=Array.isArray(F.value)?F.value:[F.value];let J=0;for(let ie=0;ie<G.length;ie++){const V=G[ie],$=T(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,j+J,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,J),J+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(x,E,b,w){const A=x.value,U=E+"_"+b;if(w[U]===void 0)return typeof A=="number"||typeof A=="boolean"?w[U]=A:w[U]=A.clone(),!0;{const N=w[U];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return w[U]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function S(x){const E=x.uniforms;let b=0;const w=16;for(let U=0,N=E.length;U<N;U++){const D=Array.isArray(E[U])?E[U]:[E[U]];for(let R=0,F=D.length;R<F;R++){const j=D[R],G=Array.isArray(j.value)?j.value:[j.value];for(let J=0,ie=G.length;J<ie;J++){const V=G[J],$=T(V),W=b%w,le=W%$.boundary,ge=W+le;b+=le,ge!==0&&w-ge<$.storage&&(b+=w-ge),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=$.storage}}}const A=b%w;return A>0&&(b+=w-A),x.__size=b,x.__cache={},this}function T(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function M(x){const E=x.target;E.removeEventListener("dispose",M);const b=l.indexOf(E.__bindingPointIndex);l.splice(b,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);l=[],i={},a={}}return{bind:u,update:f,dispose:g}}class PS{constructor(e={}){const{canvas:t=M1(),context:n=null,depth:i=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=l;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,g=null;const x=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let w=!1;this._outputColorSpace=qn;let A=0,U=0,N=null,D=-1,R=null;const F=new Nt,j=new Nt;let G=null;const J=new ze(0);let ie=0,V=t.width,$=t.height,W=1,le=null,ge=null;const xe=new Nt(0,0,V,$),Le=new Nt(0,0,V,$);let Qe=!1;const te=new nl;let Se=!1,qe=!1;const De=new at,ke=new at,vt=new z,$e=new Nt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function ct(){return N===null?W:1}let B=n;function Ce(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:i,stencil:a,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xf}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",he,!1),B===null){const X="webgl2";if(B=Ce(X,L),B===null)throw Ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ve,be,ue,Ie,me,Be,dt,I,P,K,re,pe,ae,je,we,Xe,Ze,fe,Ne,tt,nt,Ae,st,k;function Ue(){ve=new WR(B),ve.init(),Ae=new DS(B,ve),be=new IR(B,ve,e,Ae),ue=new TD(B,ve),be.reverseDepthBuffer&&v&&ue.buffers.depth.setReversed(!0),Ie=new ZR(B),me=new fD,Be=new CD(B,ve,ue,me,be,Ae,Ie),dt=new HR(b),I=new XR(b),P=new ew(B),st=new BR(B,P),K=new qR(B,P,Ie,st),re=new KR(B,K,P,Ie),Ne=new jR(B,be,Be),Xe=new FR(me),pe=new hD(b,dt,I,ve,be,st,Xe),ae=new UD(b,me),je=new pD,we=new xD(ve),fe=new OR(b,dt,I,ue,re,_,u),Ze=new ED(b,re,be),k=new ND(B,Ie,be,ue),tt=new zR(B,ve,Ie),nt=new YR(B,ve,Ie),Ie.programs=pe.programs,b.capabilities=be,b.extensions=ve,b.properties=me,b.renderLists=je,b.shadowMap=Ze,b.state=ue,b.info=Ie}Ue();const _e=new DD(b,B);this.xr=_e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(V,$,!1))},this.getSize=function(L){return L.set(V,$)},this.setSize=function(L,X,ee=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=L,$=X,t.width=Math.floor(L*W),t.height=Math.floor(X*W),ee===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(V*W,$*W).floor()},this.setDrawingBufferSize=function(L,X,ee){V=L,$=X,W=ee,t.width=Math.floor(L*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(F)},this.getViewport=function(L){return L.copy(xe)},this.setViewport=function(L,X,ee,ne){L.isVector4?xe.set(L.x,L.y,L.z,L.w):xe.set(L,X,ee,ne),ue.viewport(F.copy(xe).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(Le)},this.setScissor=function(L,X,ee,ne){L.isVector4?Le.set(L.x,L.y,L.z,L.w):Le.set(L,X,ee,ne),ue.scissor(j.copy(Le).multiplyScalar(W).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(L){ue.setScissorTest(Qe=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){ge=L},this.getClearColor=function(L){return L.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,ee=!0){let ne=0;if(L){let q=!1;if(N!==null){const ye=N.texture.format;q=ye===wf||ye===Af||ye===Pc}if(q){const ye=N.texture.type,Re=ye===Wi||ye===Qs||ye===Xo||ye===Wo||ye===bf||ye===Tf,We=fe.getClearColor(),Ve=fe.getClearAlpha(),rt=We.r,lt=We.g,Je=We.b;Re?(S[0]=rt,S[1]=lt,S[2]=Je,S[3]=Ve,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=rt,T[1]=lt,T[2]=Je,T[3]=Ve,B.clearBufferiv(B.COLOR,0,T))}else ne|=B.COLOR_BUFFER_BIT}X&&(ne|=B.DEPTH_BUFFER_BIT),ee&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),je.dispose(),we.dispose(),me.dispose(),dt.dispose(),I.dispose(),re.dispose(),st.dispose(),k.dispose(),pe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",al),_e.removeEventListener("sessionend",Ba),Yi.stop()};function Ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=Ie.autoReset,X=Ze.enabled,ee=Ze.autoUpdate,ne=Ze.needsUpdate,q=Ze.type;Ue(),Ie.autoReset=L,Ze.enabled=X,Ze.autoUpdate=ee,Ze.needsUpdate=ne,Ze.type=q}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ye(L){const X=L.target;X.removeEventListener("dispose",Ye),ot(X)}function ot(L){Ht(L),me.remove(L)}function Ht(L){const X=me.get(L).programs;X!==void 0&&(X.forEach(function(ee){pe.releaseProgram(ee)}),L.isShaderMaterial&&pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,ee,ne,q,ye){X===null&&(X=Ft);const Re=q.isMesh&&q.matrixWorld.determinant()<0,We=Gc(L,X,ee,ne,q);ue.setMaterial(ne,Re);let Ve=ee.index,rt=1;if(ne.wireframe===!0){if(Ve=K.getWireframeAttribute(ee),Ve===void 0)return;rt=2}const lt=ee.drawRange,Je=ee.attributes.position;let bt=lt.start*rt,Vt=(lt.start+lt.count)*rt;ye!==null&&(bt=Math.max(bt,ye.start*rt),Vt=Math.min(Vt,(ye.start+ye.count)*rt)),Ve!==null?(bt=Math.max(bt,0),Vt=Math.min(Vt,Ve.count)):Je!=null&&(bt=Math.max(bt,0),Vt=Math.min(Vt,Je.count));const nn=Vt-bt;if(nn<0||nn===1/0)return;st.setup(q,ne,We,ee,Ve);let Xt,Gt=tt;if(Ve!==null&&(Xt=P.get(Ve),Gt=nt,Gt.setIndex(Xt)),q.isMesh)ne.wireframe===!0?(ue.setLineWidth(ne.wireframeLinewidth*ct()),Gt.setMode(B.LINES)):Gt.setMode(B.TRIANGLES);else if(q.isLine){let it=ne.linewidth;it===void 0&&(it=1),ue.setLineWidth(it*ct()),q.isLineSegments?Gt.setMode(B.LINES):q.isLineLoop?Gt.setMode(B.LINE_LOOP):Gt.setMode(B.LINE_STRIP)}else q.isPoints?Gt.setMode(B.POINTS):q.isSprite&&Gt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const it=q._multiDrawStarts,Qt=q._multiDrawCounts,wt=q._multiDrawCount,zn=Ve?P.get(Ve).bytesPerElement:1,us=me.get(ne).currentProgram.getUniforms();for(let In=0;In<wt;In++)us.setValue(B,"_gl_DrawID",In),Gt.render(it[In]/zn,Qt[In])}else if(q.isInstancedMesh)Gt.renderInstances(bt,nn,q.count);else if(ee.isInstancedBufferGeometry){const it=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Qt=Math.min(ee.instanceCount,it);Gt.renderInstances(bt,nn,Qt)}else Gt.render(bt,nn)};function Dt(L,X,ee){L.transparent===!0&&L.side===rs&&L.forceSinglePass===!1?(L.side=ii,L.needsUpdate=!0,Jt(L,X,ee),L.side=Ks,L.needsUpdate=!0,Jt(L,X,ee),L.side=rs):Jt(L,X,ee)}this.compile=function(L,X,ee=null){ee===null&&(ee=L),g=we.get(ee),g.init(X),E.push(g),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),L!==ee&&L.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const ne=new Set;return L.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const We=ye[Re];Dt(We,ee,q),ne.add(We)}else Dt(ye,ee,q),ne.add(ye)}),g=E.pop(),ne},this.compileAsync=function(L,X,ee=null){const ne=this.compile(L,X,ee);return new Promise(q=>{function ye(){if(ne.forEach(function(Re){me.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){q(L);return}setTimeout(ye,10)}ve.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ri=null;function Di(L){ri&&ri(L)}function al(){Yi.stop()}function Ba(){Yi.start()}const Yi=new TS;Yi.setAnimationLoop(Di),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(L){ri=L,_e.setAnimationLoop(L),L===null?Yi.stop():Yi.start()},_e.addEventListener("sessionstart",al),_e.addEventListener("sessionend",Ba),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,X,N),g=we.get(L,E.length),g.init(X),E.push(g),ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(ke),qe=this.localClippingEnabled,Se=Xe.init(this.clippingPlanes,qe),M=je.get(L,x.length),M.init(),x.push(M),_e.enabled===!0&&_e.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Pi(ye,X,-1/0,b.sortObjects)}Pi(L,X,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(le,ge),Et=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Et&&fe.addToRenderList(M,L),this.info.render.frame++,Se===!0&&Xe.beginShadows();const ee=g.state.shadowsArray;Ze.render(ee,L,X),Se===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=M.opaque,q=M.transmissive;if(g.setupLights(),X.isArrayCamera){const ye=X.cameras;if(q.length>0)for(let Re=0,We=ye.length;Re<We;Re++){const Ve=ye[Re];Zi(ne,q,L,Ve)}Et&&fe.render(L);for(let Re=0,We=ye.length;Re<We;Re++){const Ve=ye[Re];ol(M,L,Ve,Ve.viewport)}}else q.length>0&&Zi(ne,q,L,X),Et&&fe.render(L),ol(M,L,X);N!==null&&U===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(b,L,X),st.resetDefaultState(),D=-1,R=null,E.pop(),E.length>0?(g=E[E.length-1],Se===!0&&Xe.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function Pi(L,X,ee,ne){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){ne&&$e.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ke);const Re=re.update(L),We=L.material;We.visible&&M.push(L,Re,We,ee,$e.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){const Re=re.update(L),We=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),$e.copy(L.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),$e.copy(Re.boundingSphere.center)),$e.applyMatrix4(L.matrixWorld).applyMatrix4(ke)),Array.isArray(We)){const Ve=Re.groups;for(let rt=0,lt=Ve.length;rt<lt;rt++){const Je=Ve[rt],bt=We[Je.materialIndex];bt&&bt.visible&&M.push(L,Re,bt,ee,$e.z,Je)}}else We.visible&&M.push(L,Re,We,ee,$e.z,null)}}const ye=L.children;for(let Re=0,We=ye.length;Re<We;Re++)Pi(ye[Re],X,ee,ne)}function ol(L,X,ee,ne){const q=L.opaque,ye=L.transmissive,Re=L.transparent;g.setupLightsView(ee),Se===!0&&Xe.setGlobalState(b.clippingPlanes,ee),ne&&ue.viewport(F.copy(ne)),q.length>0&&ai(q,X,ee),ye.length>0&&ai(ye,X,ee),Re.length>0&&ai(Re,X,ee),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Zi(L,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new os(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Ms:Wi,minFilter:Ss,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[ne.id],Re=ne.viewport||F;ye.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const We=b.getRenderTarget(),Ve=b.getActiveCubeFace(),rt=b.getActiveMipmapLevel();b.setRenderTarget(ye),b.getClearColor(J),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),Et&&fe.render(ee);const lt=b.toneMapping;b.toneMapping=bs;const Je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),Se===!0&&Xe.setGlobalState(b.clippingPlanes,ne),ai(L,ee,ne),Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye),ve.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Vt=0,nn=X.length;Vt<nn;Vt++){const Xt=X[Vt],Gt=Xt.object,it=Xt.geometry,Qt=Xt.material,wt=Xt.group;if(Qt.side===rs&&Gt.layers.test(ne.layers)){const zn=Qt.side;Qt.side=ii,Qt.needsUpdate=!0,Ir(Gt,ee,ne,it,Qt,wt),Qt.side=zn,Qt.needsUpdate=!0,bt=!0}}bt===!0&&(Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye))}b.setRenderTarget(We,Ve,rt),b.setClearColor(J,ie),Je!==void 0&&(ne.viewport=Je),b.toneMapping=lt}function ai(L,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,ye=L.length;q<ye;q++){const Re=L[q],We=Re.object,Ve=Re.geometry,rt=Re.group;let lt=Re.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),We.layers.test(ee.layers)&&Ir(We,X,ee,Ve,lt,rt)}}function Ir(L,X,ee,ne,q,ye){L.onBeforeRender(b,X,ee,ne,q,ye),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),q.onBeforeRender(b,X,ee,ne,L,ye),q.transparent===!0&&q.side===rs&&q.forceSinglePass===!1?(q.side=ii,q.needsUpdate=!0,b.renderBufferDirect(ee,X,ne,q,L,ye),q.side=Ks,q.needsUpdate=!0,b.renderBufferDirect(ee,X,ne,q,L,ye),q.side=rs):b.renderBufferDirect(ee,X,ne,q,L,ye),L.onAfterRender(b,X,ee,ne,q,ye)}function Jt(L,X,ee){X.isScene!==!0&&(X=Ft);const ne=me.get(L),q=g.state.lights,ye=g.state.shadowsArray,Re=q.state.version,We=pe.getParameters(L,q.state,ye,X,ee),Ve=pe.getProgramCacheKey(We);let rt=ne.programs;ne.environment=L.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(L.isMeshStandardMaterial?I:dt).get(L.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,rt===void 0&&(L.addEventListener("dispose",Ye),rt=new Map,ne.programs=rt);let lt=rt.get(Ve);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Re)return Ia(L,We),lt}else We.uniforms=pe.getUniforms(L),L.onBeforeCompile(We,b),lt=pe.acquireProgram(We,Ve),rt.set(Ve,lt),ne.uniforms=We.uniforms;const Je=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),Ia(L,We),ne.needsLights=rd(L),ne.lightsStateVersion=Re,ne.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=lt,ne.uniformsList=null,lt}function za(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=bh.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Ia(L,X){const ee=me.get(L);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Gc(L,X,ee,ne,q){X.isScene!==!0&&(X=Ft),Be.resetTextureUnits();const ye=X.fog,Re=ne.isMeshStandardMaterial?X.environment:null,We=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Pr,Ve=(ne.isMeshStandardMaterial?I:dt).get(ne.envMap||Re),rt=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,lt=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!ee.morphAttributes.position,bt=!!ee.morphAttributes.normal,Vt=!!ee.morphAttributes.color;let nn=bs;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(nn=b.toneMapping);const Xt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Gt=Xt!==void 0?Xt.length:0,it=me.get(ne),Qt=g.state.lights;if(Se===!0&&(qe===!0||L!==R)){const Rn=L===R&&ne.id===D;Xe.setState(ne,L,Rn)}let wt=!1;ne.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Qt.state.version||it.outputColorSpace!==We||q.isBatchedMesh&&it.batching===!1||!q.isBatchedMesh&&it.batching===!0||q.isBatchedMesh&&it.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&it.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&it.instancing===!1||!q.isInstancedMesh&&it.instancing===!0||q.isSkinnedMesh&&it.skinning===!1||!q.isSkinnedMesh&&it.skinning===!0||q.isInstancedMesh&&it.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&it.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&it.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&it.instancingMorph===!1&&q.morphTexture!==null||it.envMap!==Ve||ne.fog===!0&&it.fog!==ye||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Xe.numPlanes||it.numIntersection!==Xe.numIntersection)||it.vertexAlphas!==rt||it.vertexTangents!==lt||it.morphTargets!==Je||it.morphNormals!==bt||it.morphColors!==Vt||it.toneMapping!==nn||it.morphTargetsCount!==Gt)&&(wt=!0):(wt=!0,it.__version=ne.version);let zn=it.currentProgram;wt===!0&&(zn=Jt(ne,X,q));let us=!1,In=!1,tr=!1;const Kt=zn.getUniforms(),jn=it.uniforms;if(ue.useProgram(zn.program)&&(us=!0,In=!0,tr=!0),ne.id!==D&&(D=ne.id,In=!0),us||R!==L){ue.buffers.depth.getReversed()?(De.copy(L.projectionMatrix),MT(De),ET(De),Kt.setValue(B,"projectionMatrix",De)):Kt.setValue(B,"projectionMatrix",L.projectionMatrix),Kt.setValue(B,"viewMatrix",L.matrixWorldInverse);const Dn=Kt.map.cameraPosition;Dn!==void 0&&Dn.setValue(B,vt.setFromMatrixPosition(L.matrixWorld)),be.logarithmicDepthBuffer&&Kt.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Kt.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,In=!0,tr=!0)}if(q.isSkinnedMesh){Kt.setOptional(B,q,"bindMatrix"),Kt.setOptional(B,q,"bindMatrixInverse");const Rn=q.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Kt.setValue(B,"boneTexture",Rn.boneTexture,Be))}q.isBatchedMesh&&(Kt.setOptional(B,q,"batchingTexture"),Kt.setValue(B,"batchingTexture",q._matricesTexture,Be),Kt.setOptional(B,q,"batchingIdTexture"),Kt.setValue(B,"batchingIdTexture",q._indirectTexture,Be),Kt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Kt.setValue(B,"batchingColorTexture",q._colorsTexture,Be));const Kn=ee.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ne.update(q,ee,zn),(In||it.receiveShadow!==q.receiveShadow)&&(it.receiveShadow=q.receiveShadow,Kt.setValue(B,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(jn.envMap.value=Ve,jn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(jn.envMapIntensity.value=X.environmentIntensity),In&&(Kt.setValue(B,"toneMappingExposure",b.toneMappingExposure),it.needsLights&&kc(jn,tr),ye&&ne.fog===!0&&ae.refreshFogUniforms(jn,ye),ae.refreshMaterialUniforms(jn,ne,W,$,g.state.transmissionRenderTarget[L.id]),bh.upload(B,za(it),jn,Be)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(bh.upload(B,za(it),jn,Be),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Kt.setValue(B,"center",q.center),Kt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Kt.setValue(B,"normalMatrix",q.normalMatrix),Kt.setValue(B,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Rn=ne.uniformsGroups;for(let Dn=0,hs=Rn.length;Dn<hs;Dn++){const fs=Rn[Dn];k.update(fs,zn),k.bind(fs,zn)}}return zn}function kc(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function rd(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,X,ee){const ne=me.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),me.get(L.texture).__webglTexture=X,me.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){const ee=me.get(L);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const ll=B.createFramebuffer();this.setRenderTarget=function(L,X=0,ee=0){N=L,A=X,U=ee;let ne=!0,q=null,ye=!1,Re=!1;if(L){const Ve=me.get(L);if(Ve.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(B.FRAMEBUFFER,null),ne=!1;else if(Ve.__webglFramebuffer===void 0)Be.setupRenderTarget(L);else if(Ve.__hasExternalTextures)Be.rebindTextures(L,me.get(L.texture).__webglTexture,me.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Je=L.depthTexture;if(Ve.__boundDepthTexture!==Je){if(Je!==null&&me.has(Je)&&(L.width!==Je.image.width||L.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(L)}}const rt=L.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Re=!0);const lt=me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(lt[X])?q=lt[X][ee]:q=lt[X],ye=!0):L.samples>0&&Be.useMultisampledRTT(L)===!1?q=me.get(L).__webglMultisampledFramebuffer:Array.isArray(lt)?q=lt[ee]:q=lt,F.copy(L.viewport),j.copy(L.scissor),G=L.scissorTest}else F.copy(xe).multiplyScalar(W).floor(),j.copy(Le).multiplyScalar(W).floor(),G=Qe;if(ee!==0&&(q=ll),ue.bindFramebuffer(B.FRAMEBUFFER,q)&&ne&&ue.drawBuffers(L,q),ue.viewport(F),ue.scissor(j),ue.setScissorTest(G),ye){const Ve=me.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,ee)}else if(Re){const Ve=me.get(L.texture),rt=X;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.__webglTexture,ee,rt)}else if(L!==null&&ee!==0){const Ve=me.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,ee)}D=-1},this.readRenderTargetPixels=function(L,X,ee,ne,q,ye,Re,We=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve){ue.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const rt=L.textures[We],lt=rt.format,Je=rt.type;if(!be.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-ne&&ee>=0&&ee<=L.height-q&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(X,ee,ne,q,Ae.convert(lt),Ae.convert(Je),ye))}finally{const rt=N!==null?me.get(N).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(L,X,ee,ne,q,ye,Re,We=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve)if(X>=0&&X<=L.width-ne&&ee>=0&&ee<=L.height-q){ue.bindFramebuffer(B.FRAMEBUFFER,Ve);const rt=L.textures[We],lt=rt.format,Je=rt.type;if(!be.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(X,ee,ne,q,Ae.convert(lt),Ae.convert(Je),0);const Vt=N!==null?me.get(N).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,Vt);const nn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ST(B,nn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(bt),B.deleteSync(nn),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,ee=0){const ne=Math.pow(2,-ee),q=Math.floor(L.image.width*ne),ye=Math.floor(L.image.height*ne),Re=X!==null?X.x:0,We=X!==null?X.y:0;Be.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Re,We,q,ye),ue.unbindTexture()};const cl=B.createFramebuffer(),ul=B.createFramebuffer();this.copyTextureToTexture=function(L,X,ee=null,ne=null,q=0,ye=null){ye===null&&(q!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Re,We,Ve,rt,lt,Je,bt,Vt,nn;const Xt=L.isCompressedTexture?L.mipmaps[ye]:L.image;if(ee!==null)Re=ee.max.x-ee.min.x,We=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,rt=ee.min.x,lt=ee.min.y,Je=ee.isBox3?ee.min.z:0;else{const Kn=Math.pow(2,-q);Re=Math.floor(Xt.width*Kn),We=Math.floor(Xt.height*Kn),L.isDataArrayTexture?Ve=Xt.depth:L.isData3DTexture?Ve=Math.floor(Xt.depth*Kn):Ve=1,rt=0,lt=0,Je=0}ne!==null?(bt=ne.x,Vt=ne.y,nn=ne.z):(bt=0,Vt=0,nn=0);const Gt=Ae.convert(X.format),it=Ae.convert(X.type);let Qt;X.isData3DTexture?(Be.setTexture3D(X,0),Qt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Be.setTexture2DArray(X,0),Qt=B.TEXTURE_2D_ARRAY):(Be.setTexture2D(X,0),Qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=B.getParameter(B.UNPACK_ROW_LENGTH),zn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),us=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),tr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,lt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const Kt=L.isDataArrayTexture||L.isData3DTexture,jn=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const Kn=me.get(L),Rn=me.get(X),Dn=me.get(Kn.__renderTarget),hs=me.get(Rn.__renderTarget);ue.bindFramebuffer(B.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let fs=0;fs<Ve;fs++)Kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(L).__webglTexture,q,Je+fs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(X).__webglTexture,ye,nn+fs)),B.blitFramebuffer(rt,lt,Re,We,bt,Vt,Re,We,B.DEPTH_BUFFER_BIT,B.NEAREST);ue.bindFramebuffer(B.READ_FRAMEBUFFER,null),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||L.isRenderTargetTexture||me.has(L)){const Kn=me.get(L),Rn=me.get(X);ue.bindFramebuffer(B.READ_FRAMEBUFFER,cl),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,ul);for(let Dn=0;Dn<Ve;Dn++)Kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kn.__webglTexture,q,Je+Dn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Kn.__webglTexture,q),jn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,ye,nn+Dn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,ye),q!==0?B.blitFramebuffer(rt,lt,Re,We,bt,Vt,Re,We,B.COLOR_BUFFER_BIT,B.NEAREST):jn?B.copyTexSubImage3D(Qt,ye,bt,Vt,nn+Dn,rt,lt,Re,We):B.copyTexSubImage2D(Qt,ye,bt,Vt,rt,lt,Re,We);ue.bindFramebuffer(B.READ_FRAMEBUFFER,null),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else jn?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(Qt,ye,bt,Vt,nn,Re,We,Ve,Gt,it,Xt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Qt,ye,bt,Vt,nn,Re,We,Ve,Gt,Xt.data):B.texSubImage3D(Qt,ye,bt,Vt,nn,Re,We,Ve,Gt,it,Xt):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,bt,Vt,Re,We,Gt,it,Xt.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,bt,Vt,Xt.width,Xt.height,Gt,Xt.data):B.texSubImage2D(B.TEXTURE_2D,ye,bt,Vt,Re,We,Gt,it,Xt);B.pixelStorei(B.UNPACK_ROW_LENGTH,wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,zn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,us),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tr),ye===0&&X.generateMipmaps&&B.generateMipmap(Qt),ue.unbindTexture()},this.copyTextureToTexture3D=function(L,X,ee=null,ne=null,q=0){return Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,X,ee,ne,q)},this.initRenderTarget=function(L){me.get(L).__webglFramebuffer===void 0&&Be.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Be.setTextureCube(L,0):L.isData3DTexture?Be.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Be.setTexture2DArray(L,0):Be.setTexture2D(L,0),ue.unbindTexture()},this.resetState=function(){A=0,U=0,N=null,ue.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const US=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:pg,AddEquation:Ar,AddOperation:e1,AdditiveAnimationBlendMode:Eg,AdditiveBlending:km,AgXToneMapping:r1,AlphaFormat:yg,AlwaysCompare:x1,AlwaysDepth:Dh,AlwaysStencilFunc:Ym,AmbientLight:dS,AnimationAction:MS,AnimationClip:Ac,AnimationLoader:jC,AnimationMixer:EA,AnimationObjectGroup:SA,AnimationUtils:WC,ArcCurve:I1,ArrayCamera:yS,ArrowHelper:WA,AttachedBindMode:qm,Audio:xS,AudioAnalyser:hA,AudioContext:jg,AudioListener:lA,AudioLoader:rA,AxesHelper:qA,BackSide:ii,BasicDepthPacking:h1,BasicShadowMap:Lx,BatchedMesh:N1,Bone:Pg,BooleanKeyframeTrack:La,Box2:PA,Box3:Yn,Box3Helper:kA,BoxGeometry:Na,BoxHelper:GA,BufferAttribute:jt,BufferGeometry:gt,BufferGeometryLoader:_S,ByteType:gg,Cache:Es,Camera:Uf,CameraHelper:VA,CanvasTexture:pC,CapsuleGeometry:Ff,CatmullRomCurve3:F1,CineonToneMapping:i1,CircleGeometry:Hf,ClampToEdgeWrapping:ki,Clock:$f,Color:ze,ColorKeyframeTrack:qg,ColorManagement:Rt,CompressedArrayTexture:fC,CompressedCubeTexture:dC,CompressedTexture:If,CompressedTextureLoader:KC,ConeGeometry:Oc,ConstantAlphaFactor:Jx,ConstantColorFactor:jx,Controls:ZA,CubeCamera:C1,CubeReflectionMapping:Js,CubeRefractionMapping:Dr,CubeTexture:Nc,CubeTextureLoader:JC,CubeUVReflectionMapping:el,CubicBezierCurve:Og,CubicBezierCurve3:H1,CubicInterpolant:sS,CullFaceBack:Gm,CullFaceFront:Nx,CullFaceFrontBack:xb,CullFaceNone:Ux,Curve:cs,CurvePath:G1,CustomBlending:Ox,CustomToneMapping:s1,CylinderGeometry:Lc,Cylindrical:DA,Data3DTexture:Pf,DataArrayTexture:Df,DataTexture:Ts,DataTextureLoader:lS,DataUtils:$l,DecrementStencilOp:Lb,DecrementWrapStencilOp:Bb,DefaultLoadingManager:oS,DepthFormat:qo,DepthStencilFormat:Yo,DepthTexture:Ng,DetachedBindMode:o1,DirectionalLight:fS,DirectionalLightHelper:HA,DiscreteInterpolant:rS,DodecahedronGeometry:Vf,DoubleSide:rs,DstAlphaFactor:Xx,DstColorFactor:qx,DynamicCopyUsage:Jb,DynamicDrawUsage:Wb,DynamicReadUsage:Zb,EdgesGeometry:z1,EllipseCurve:Gf,EqualCompare:g1,EqualDepth:Uh,EqualStencilFunc:Hb,EquirectangularReflectionMapping:ko,EquirectangularRefractionMapping:dc,Euler:Ri,EventDispatcher:ls,ExtrudeGeometry:kf,FileLoader:$s,Float16BufferAttribute:XT,Float32BufferAttribute:He,FloatType:Nn,Fog:Lf,FogExp2:Nf,FramebufferTexture:hC,FrontSide:Ks,Frustum:nl,FrustumArray:zf,GLBufferAttribute:wA,GLSL1:$b,GLSL3:Zm,GreaterCompare:v1,GreaterDepth:Lh,GreaterEqualCompare:y1,GreaterEqualDepth:Nh,GreaterEqualStencilFunc:Xb,GreaterStencilFunc:Gb,GridHelper:IA,Group:Fo,HalfFloatType:Ms,HemisphereLight:cS,HemisphereLightHelper:zA,IcosahedronGeometry:Xf,ImageBitmapLoader:sA,ImageLoader:wc,ImageUtils:E1,IncrementStencilOp:Nb,IncrementWrapStencilOp:Ob,InstancedBufferAttribute:Jo,InstancedBufferGeometry:vS,InstancedInterleavedBuffer:AA,InstancedMesh:U1,Int16BufferAttribute:GT,Int32BufferAttribute:kT,Int8BufferAttribute:FT,IntType:Ef,InterleavedBuffer:Of,InterleavedBufferAttribute:Da,Interpolant:Ic,InterpolateDiscrete:gc,InterpolateLinear:cf,InterpolateSmooth:Mh,InterpolationSamplingMode:nT,InterpolationSamplingType:tT,InvertStencilOp:zb,KeepStencilOp:ya,KeyframeTrack:qi,LOD:D1,LatheGeometry:Wf,Layers:jo,LessCompare:m1,LessDepth:Ph,LessEqualCompare:bg,LessEqualDepth:Ra,LessEqualStencilFunc:Vb,LessStencilFunc:Fb,Light:Br,LightProbe:gS,Line:Ur,Line3:UA,LineBasicMaterial:si,LineCurve:Bg,LineCurve3:V1,LineDashedMaterial:tS,LineLoop:L1,LineSegments:Cs,LinearFilter:cn,LinearInterpolant:Wg,LinearMipMapLinearFilter:bb,LinearMipMapNearestFilter:Eb,LinearMipmapLinearFilter:Ss,LinearMipmapNearestFilter:ic,LinearSRGBColorSpace:Pr,LinearToneMapping:t1,LinearTransfer:_c,Loader:mi,LoaderUtils:$m,LoadingManager:Yg,LoopOnce:l1,LoopPingPong:u1,LoopRepeat:c1,MOUSE:_b,Material:Zn,MaterialLoader:Qf,MathUtils:yT,Matrix2:Qg,Matrix3:yt,Matrix4:at,MaxEquation:Fx,Mesh:pn,MeshBasicMaterial:Lr,MeshDepthMaterial:Gg,MeshDistanceMaterial:kg,MeshLambertMaterial:$1,MeshMatcapMaterial:eS,MeshNormalMaterial:Q1,MeshPhongMaterial:K1,MeshPhysicalMaterial:Vg,MeshStandardMaterial:Hg,MeshToonMaterial:J1,MinEquation:Ix,MirroredRepeatWrapping:mc,MixOperation:$x,MultiplyBlending:Wm,MultiplyOperation:Dc,NearestFilter:On,NearestMipMapLinearFilter:Mb,NearestMipMapNearestFilter:Sb,NearestMipmapLinearFilter:zo,NearestMipmapNearestFilter:mg,NeutralToneMapping:a1,NeverCompare:p1,NeverDepth:Rh,NeverStencilFunc:Ib,NoBlending:Zs,NoColorSpace:qs,NoToneMapping:bs,NormalAnimationBlendMode:Rf,NormalBlending:Ca,NotEqualCompare:_1,NotEqualDepth:Oh,NotEqualStencilFunc:kb,NumberKeyframeTrack:Tc,Object3D:Lt,ObjectLoader:nA,ObjectSpaceNormalMap:d1,OctahedronGeometry:Bc,OneFactor:Vx,OneMinusConstantAlphaFactor:Qx,OneMinusConstantColorFactor:Kx,OneMinusDstAlphaFactor:Wx,OneMinusDstColorFactor:Yx,OneMinusSrcAlphaFactor:wh,OneMinusSrcColorFactor:kx,OrthographicCamera:zr,PCFShadowMap:Sf,PCFSoftShadowMap:nc,PMREMGenerator:ng,Path:df,PerspectiveCamera:wn,Plane:Cr,PlaneGeometry:il,PlaneHelper:XA,PointLight:hS,PointLightHelper:OA,Points:O1,PointsMaterial:Ug,PolarGridHelper:FA,PolyhedronGeometry:Or,PositionalAudio:uA,PropertyBinding:Ut,PropertyMixer:SS,QuadraticBezierCurve:zg,QuadraticBezierCurve3:Ig,Quaternion:di,QuaternionKeyframeTrack:Fc,QuaternionLinearInterpolant:aS,RED_GREEN_RGTC2_Format:of,RED_RGTC1_Format:Mg,REVISION:xf,RGBADepthPacking:f1,RGBAFormat:Ln,RGBAIntegerFormat:wf,RGBA_ASTC_10x10_Format:ef,RGBA_ASTC_10x5_Format:Jh,RGBA_ASTC_10x6_Format:Qh,RGBA_ASTC_10x8_Format:$h,RGBA_ASTC_12x10_Format:tf,RGBA_ASTC_12x12_Format:nf,RGBA_ASTC_4x4_Format:kh,RGBA_ASTC_5x4_Format:Xh,RGBA_ASTC_5x5_Format:Wh,RGBA_ASTC_6x5_Format:qh,RGBA_ASTC_6x6_Format:Yh,RGBA_ASTC_8x5_Format:Zh,RGBA_ASTC_8x6_Format:jh,RGBA_ASTC_8x8_Format:Kh,RGBA_BPTC_Format:lc,RGBA_ETC2_EAC_Format:Gh,RGBA_PVRTC_2BPPV1_Format:Fh,RGBA_PVRTC_4BPPV1_Format:Ih,RGBA_S3TC_DXT1_Format:rc,RGBA_S3TC_DXT3_Format:ac,RGBA_S3TC_DXT5_Format:oc,RGBDepthPacking:Rb,RGBFormat:xg,RGBIntegerFormat:Tb,RGB_BPTC_SIGNED_Format:sf,RGB_BPTC_UNSIGNED_Format:rf,RGB_ETC1_Format:Hh,RGB_ETC2_Format:Vh,RGB_PVRTC_2BPPV1_Format:zh,RGB_PVRTC_4BPPV1_Format:Bh,RGB_S3TC_DXT1_Format:sc,RGDepthPacking:Db,RGFormat:Sg,RGIntegerFormat:Af,RawShaderMaterial:j1,Ray:tl,Raycaster:ES,RectAreaLight:pS,RedFormat:Cf,RedIntegerFormat:Pc,ReinhardToneMapping:n1,RenderTarget:Cg,RenderTarget3D:bA,RepeatWrapping:pc,ReplaceStencilOp:Ub,ReverseSubtractEquation:zx,RingGeometry:qf,SIGNED_RED_GREEN_RGTC2_Format:lf,SIGNED_RED_RGTC1_Format:af,SRGBColorSpace:qn,SRGBTransfer:qt,Scene:Rg,ShaderChunk:mt,ShaderLib:ss,ShaderMaterial:pi,ShadowMaterial:Z1,Shape:wa,ShapeGeometry:Yf,ShapePath:YA,ShapeUtils:as,ShortType:vg,Skeleton:Bf,SkeletonHelper:LA,SkinnedMesh:P1,Source:Rr,Sphere:Bn,SphereGeometry:zc,Spherical:RA,SphericalHarmonics3:mS,SplineCurve:Fg,SpotLight:uS,SpotLightHelper:NA,Sprite:R1,SpriteMaterial:Dg,SrcAlphaFactor:Ah,SrcAlphaSaturateFactor:Zx,SrcColorFactor:Gx,StaticCopyUsage:Kb,StaticDrawUsage:yc,StaticReadUsage:Yb,StereoCamera:aA,StreamCopyUsage:Qb,StreamDrawUsage:qb,StreamReadUsage:jb,StringKeyframeTrack:Oa,SubtractEquation:Bx,SubtractiveBlending:Xm,TOUCH:yb,TangentSpaceNormalMap:Nr,TetrahedronGeometry:Zf,Texture:mn,TextureLoader:QC,TextureUtils:$A,TimestampQuery:eT,TorusGeometry:jf,TorusKnotGeometry:Kf,Triangle:fi,TriangleFanDrawMode:wb,TriangleStripDrawMode:Ab,TrianglesDrawMode:Cb,TubeGeometry:Jf,UVMapping:Mf,Uint16BufferAttribute:Ag,Uint32BufferAttribute:wg,Uint8BufferAttribute:HT,Uint8ClampedBufferAttribute:VT,Uniform:ed,UniformsGroup:CA,UniformsLib:Pe,UniformsUtils:Uc,UnsignedByteType:Wi,UnsignedInt248Type:Wo,UnsignedInt5999Type:_g,UnsignedIntType:Qs,UnsignedShort4444Type:bf,UnsignedShort5551Type:Tf,UnsignedShortType:Xo,VSMShadowMap:is,Vector2:de,Vector3:z,Vector4:Nt,VectorKeyframeTrack:Cc,VideoFrameTexture:uC,VideoTexture:B1,WebGL3DRenderTarget:wT,WebGLArrayRenderTarget:AT,WebGLCoordinateSystem:Xi,WebGLCubeRenderTarget:A1,WebGLRenderTarget:os,WebGLRenderer:PS,WebGLUtils:DS,WebGPUCoordinateSystem:xc,WebXRController:Eh,WireframeGeometry:Y1,WrapAroundEnding:vc,ZeroCurvatureEnding:Ma,ZeroFactor:Hx,ZeroSlopeEnding:Ea,ZeroStencilOp:Pb,createCanvasElement:M1},Symbol.toStringTag,{value:"Module"}));var nd=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},LD=new zr(-1,1,1,-1,0,1),e0=new gt;e0.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3));e0.setAttribute("uv",new He([0,2,0,0,2,0],2));var OD=class{constructor(e){this._mesh=new pn(e0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Yy=class extends nd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,c;this.inverse?(l=0,c=1):(l=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,l,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}},BD=class extends nd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Zy=class extends nd{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uc.clone(e.uniforms),this.material=new pi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new OD(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}},jy={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`},zD=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:cn,magFilter:cn,format:Ln},i=e.getSize(new de);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new os(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],jy===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Zy===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Zy(jy),this.clock=new $f}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,a=this.passes.length;i<a;i++){let l=this.passes[i];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){let c=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Yy!==void 0&&(l instanceof Yy?n=!0:l instanceof BD&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};new zr(-1,1,1,-1,0,1);var NS=new gt;NS.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3));NS.setAttribute("uv",new He([0,2,0,0,2,0],2));var ID=class extends nd{constructor(e,t,n,i,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=i}},Ro={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`},FD=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},HD=new zr(-1,1,1,-1,0,1),t0=new gt;t0.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3));t0.setAttribute("uv",new He([0,2,0,0,2,0],2));var VD=class{constructor(e){this._mesh=new pn(t0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,HD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},xn={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},GD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`,kD=`vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`,XD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`,WD=`float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,qD=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,YD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`,ZD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`,jD=`float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,KD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`,JD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`,QD=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`,$D=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`,eP=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`,tP=`float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,nP=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,iP=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`,sP=`float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,rP=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`,aP=new Map([[xn.SKIP,null],[xn.ADD,GD],[xn.ALPHA,kD],[xn.AVERAGE,XD],[xn.COLOR_BURN,WD],[xn.COLOR_DODGE,qD],[xn.DARKEN,YD],[xn.DIFFERENCE,ZD],[xn.EXCLUSION,KD],[xn.LIGHTEN,JD],[xn.MULTIPLY,QD],[xn.DIVIDE,jD],[xn.NEGATION,$D],[xn.NORMAL,eP],[xn.OVERLAY,tP],[xn.REFLECT,nP],[xn.SCREEN,iP],[xn.SOFT_LIGHT,sP],[xn.SUBTRACT,rP]]),oP=class extends ls{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new ed(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return aP.get(this.blendFunction)}},lP=class extends FD{constructor(e,t,n){super(),Ro===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=Uc.clone(Ro.uniforms),this.material=new pi({uniforms:this.uniforms,fragmentShader:Ro.fragmentShader,vertexShader:Ro.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t,this.uniforms.disable.value=n.disable,this.fsQuad=new VD(this.material),this.blendMode=new oP(xn.SCREEN),this.extensions=null}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}initialize(e,t,n){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return Ro.fragmentShader}getVertexShader(){return Ro.vertexShader}update(e,t,n){}},vm={exports:{}},Xs={};/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky;function cP(){return Ky||(Ky=1,Xs.ConcurrentRoot=1,Xs.ContinuousEventPriority=8,Xs.DefaultEventPriority=32,Xs.DiscreteEventPriority=2,Xs.IdleEventPriority=268435456,Xs.LegacyRoot=0,Xs.NoEventPriority=0),Xs}var Jy;function uP(){return Jy||(Jy=1,vm.exports=cP()),vm.exports}var Th=uP(),_m={exports:{}},ym={},xm={exports:{}},Sm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function hP(){if(Qy)return Sm;Qy=1;var s=dg();function e(m,v){return m===v&&(m!==0||1/m===1/v)||m!==m&&v!==v}var t=typeof Object.is=="function"?Object.is:e,n=s.useState,i=s.useEffect,a=s.useLayoutEffect,l=s.useDebugValue;function c(m,v){var _=v(),S=n({inst:{value:_,getSnapshot:v}}),T=S[0].inst,M=S[1];return a(function(){T.value=_,T.getSnapshot=v,u(T)&&M({inst:T})},[m,_,v]),i(function(){return u(T)&&M({inst:T}),m(function(){u(T)&&M({inst:T})})},[m]),l(_),_}function u(m){var v=m.getSnapshot;m=m.value;try{var _=v();return!t(m,_)}catch{return!0}}function f(m,v){return v()}var d=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return Sm.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:d,Sm}var $y;function fP(){return $y||($y=1,xm.exports=hP()),xm.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function dP(){if(ex)return ym;ex=1;var s=dg(),e=fP();function t(f,d){return f===d&&(f!==0||1/f===1/d)||f!==f&&d!==d}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,a=s.useRef,l=s.useEffect,c=s.useMemo,u=s.useDebugValue;return ym.useSyncExternalStoreWithSelector=function(f,d,m,v,_){var S=a(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=c(function(){function g(A){if(!x){if(x=!0,E=A,A=v(A),_!==void 0&&T.hasValue){var U=T.value;if(_(U,A))return b=U}return b=A}if(U=b,n(E,A))return U;var N=v(A);return _!==void 0&&_(U,N)?(E=A,U):(E=A,b=N)}var x=!1,E,b,w=m===void 0?null:m;return[function(){return g(d())},w===null?void 0:function(){return g(w())}]},[d,m,v,_]);var M=i(f,S[0],S[1]);return l(function(){T.hasValue=!0,T.value=M},[M]),u(M),M},ym}var tx;function pP(){return tx||(tx=1,_m.exports=dP()),_m.exports}var mP=pP();const gP=Dx(mP),nx=s=>{let e;const t=new Set,n=(f,d)=>{const m=typeof f=="function"?f(e):f;if(!Object.is(m,e)){const v=e;e=d??(typeof m!="object"||m===null)?m:Object.assign({},e,m),t.forEach(_=>_(e,v))}},i=()=>e,c={setState:n,getState:i,getInitialState:()=>u,subscribe:f=>(t.add(f),()=>t.delete(f))},u=e=s(n,i,c);return c},vP=s=>s?nx(s):nx,{useSyncExternalStoreWithSelector:_P}=gP,yP=s=>s;function xP(s,e=yP,t){const n=_P(s.subscribe,s.getState,s.getInitialState,e,t);return Px.useDebugValue(n),n}const ix=(s,e)=>{const t=vP(s),n=(i,a=e)=>xP(t,i,a);return Object.assign(n,t),n},SP=(s,e)=>s?ix(s,e):ix;var Mm={exports:{}},Em={exports:{}},bm={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function MP(){return sx||(sx=1,function(s){function e(V,$){var W=V.length;V.push($);e:for(;0<W;){var le=W-1>>>1,ge=V[le];if(0<i(ge,$))V[le]=$,V[W]=ge,W=le;else break e}}function t(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var $=V[0],W=V.pop();if(W!==$){V[0]=W;e:for(var le=0,ge=V.length,xe=ge>>>1;le<xe;){var Le=2*(le+1)-1,Qe=V[Le],te=Le+1,Se=V[te];if(0>i(Qe,W))te<ge&&0>i(Se,Qe)?(V[le]=Se,V[te]=W,le=te):(V[le]=Qe,V[Le]=W,le=Le);else if(te<ge&&0>i(Se,W))V[le]=Se,V[te]=W,le=te;else break e}}return $}function i(V,$){var W=V.sortIndex-$.sortIndex;return W!==0?W:V.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var u=[],f=[],d=1,m=null,v=3,_=!1,S=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function E(V){for(var $=t(f);$!==null;){if($.callback===null)n(f);else if($.startTime<=V)n(f),$.sortIndex=$.expirationTime,e(u,$);else break;$=t(f)}}function b(V){if(T=!1,E(V),!S)if(t(u)!==null)S=!0,J();else{var $=t(f);$!==null&&ie(b,$.startTime-V)}}var w=!1,A=-1,U=5,N=-1;function D(){return!(s.unstable_now()-N<U)}function R(){if(w){var V=s.unstable_now();N=V;var $=!0;try{e:{S=!1,T&&(T=!1,g(A),A=-1),_=!0;var W=v;try{t:{for(E(V),m=t(u);m!==null&&!(m.expirationTime>V&&D());){var le=m.callback;if(typeof le=="function"){m.callback=null,v=m.priorityLevel;var ge=le(m.expirationTime<=V);if(V=s.unstable_now(),typeof ge=="function"){m.callback=ge,E(V),$=!0;break t}m===t(u)&&n(u),E(V)}else n(u);m=t(u)}if(m!==null)$=!0;else{var xe=t(f);xe!==null&&ie(b,xe.startTime-V),$=!1}}break e}finally{m=null,v=W,_=!1}$=void 0}}finally{$?F():w=!1}}}var F;if(typeof x=="function")F=function(){x(R)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,G=j.port2;j.port1.onmessage=R,F=function(){G.postMessage(null)}}else F=function(){M(R,0)};function J(){w||(w=!0,F())}function ie(V,$){A=M(function(){V(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,J())},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(u)},s.unstable_next=function(V){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var W=v;v=$;try{return V()}finally{v=W}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=v;v=V;try{return $()}finally{v=W}},s.unstable_scheduleCallback=function(V,$,W){var le=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?le+W:le):W=le,V){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=W+ge,V={id:d++,callback:$,priorityLevel:V,startTime:W,expirationTime:ge,sortIndex:-1},W>le?(V.sortIndex=W,e(f,V),t(u)===null&&V===t(f)&&(T?(g(A),A=-1):T=!0,ie(b,W-le))):(V.sortIndex=ge,e(u,V),S||_||(S=!0,J())),V},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(V){var $=v;return function(){var W=v;v=$;try{return V.apply(this,arguments)}finally{v=W}}}}(Tm)),Tm}var rx;function LS(){return rx||(rx=1,bm.exports=MP()),bm.exports}/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function EP(){return ax||(ax=1,function(s){s.exports=function(e){function t(r,o,h,p){return new NM(r,o,h,p)}function n(){}function i(r){var o="https://react.dev/errors/"+r;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)o+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return r===null||typeof r!="object"?null:(r=Ov&&r[Ov]||r["@@iterator"],typeof r=="function"?r:null)}function l(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===FM?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Xa:return"Fragment";case ka:return"Portal";case Zd:return"Profiler";case Uv:return"StrictMode";case Kd:return"Suspense";case Jd:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case or:return(r.displayName||"Context")+".Provider";case Nv:return(r._context.displayName||"Context")+".Consumer";case jd:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Qd:return o=r.displayName||null,o!==null?o:l(r.type)||"Memo";case lr:o=r._payload,r=r._init;try{return l(r(o))}catch{}}return null}function c(r){if($d===void 0)try{throw Error()}catch(h){var o=h.stack.trim().match(/\n( *(at )?)/);$d=o&&o[1]||"",Bv=-1<h.stack.indexOf(`
    at`)?" (<anonymous>)":-1<h.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$d+r+Bv}function u(r,o){if(!r||ep)return"";ep=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var p={DetermineComponentFrameRoot:function(){try{if(o){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(xt){var Fe=xt}Reflect.construct(r,[],Oe)}else{try{Oe.call()}catch(xt){Fe=xt}r.call(Oe.prototype)}}else{try{throw Error()}catch(xt){Fe=xt}(Oe=r())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(xt){if(xt&&Fe&&typeof xt.stack=="string")return[xt.stack,Fe.stack]}return[null,null]}};p.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var y=Object.getOwnPropertyDescriptor(p.DetermineComponentFrameRoot,"name");y&&y.configurable&&Object.defineProperty(p.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var C=p.DetermineComponentFrameRoot(),O=C[0],H=C[1];if(O&&H){var Z=O.split(`
`),ce=H.split(`
`);for(y=p=0;p<Z.length&&!Z[p].includes("DetermineComponentFrameRoot");)p++;for(;y<ce.length&&!ce[y].includes("DetermineComponentFrameRoot");)y++;if(p===Z.length||y===ce.length)for(p=Z.length-1,y=ce.length-1;1<=p&&0<=y&&Z[p]!==ce[y];)y--;for(;1<=p&&0<=y;p--,y--)if(Z[p]!==ce[y]){if(p!==1||y!==1)do if(p--,y--,0>y||Z[p]!==ce[y]){var Te=`
`+Z[p].replace(" at new "," at ");return r.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",r.displayName)),Te}while(1<=p&&0<=y);break}}}finally{ep=!1,Error.prepareStackTrace=h}return(h=r?r.displayName||r.name:"")?c(h):""}function f(r){switch(r.tag){case 26:case 27:case 5:return c(r.type);case 16:return c("Lazy");case 13:return c("Suspense");case 19:return c("SuspenseList");case 0:case 15:return r=u(r.type,!1),r;case 11:return r=u(r.type.render,!1),r;case 1:return r=u(r.type,!0),r;default:return""}}function d(r){try{var o="";do o+=f(r),r=r.return;while(r);return o}catch(h){return`
Error generating stack: `+h.message+`
`+h.stack}}function m(r){var o=r,h=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(h=o.return),r=o.return;while(r)}return o.tag===3?h:null}function v(r){if(m(r)!==r)throw Error(i(188))}function _(r){var o=r.alternate;if(!o){if(o=m(r),o===null)throw Error(i(188));return o!==r?null:r}for(var h=r,p=o;;){var y=h.return;if(y===null)break;var C=y.alternate;if(C===null){if(p=y.return,p!==null){h=p;continue}break}if(y.child===C.child){for(C=y.child;C;){if(C===h)return v(y),r;if(C===p)return v(y),o;C=C.sibling}throw Error(i(188))}if(h.return!==p.return)h=y,p=C;else{for(var O=!1,H=y.child;H;){if(H===h){O=!0,h=y,p=C;break}if(H===p){O=!0,p=y,h=C;break}H=H.sibling}if(!O){for(H=C.child;H;){if(H===h){O=!0,h=C,p=y;break}if(H===p){O=!0,p=C,h=y;break}H=H.sibling}if(!O)throw Error(i(189))}}if(h.alternate!==p)throw Error(i(190))}if(h.tag!==3)throw Error(i(188));return h.stateNode.current===h?r:o}function S(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r;for(r=r.child;r!==null;){if(o=S(r),o!==null)return o;r=r.sibling}return null}function T(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r;for(r=r.child;r!==null;){if(r.tag!==4&&(o=T(r),o!==null))return o;r=r.sibling}return null}function M(r){return{current:r}}function g(r){0>qa||(r.current=ap[qa],ap[qa]=null,qa--)}function x(r,o){qa++,ap[qa]=r.current,r.current=o}function E(r){return r>>>=0,r===0?32:31-(eb(r)/tb|0)|0}function b(r){var o=r&42;if(o!==0)return o;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function w(r,o){var h=r.pendingLanes;if(h===0)return 0;var p=0,y=r.suspendedLanes,C=r.pingedLanes,O=r.warmLanes;r=r.finishedLanes!==0;var H=h&134217727;return H!==0?(h=H&~y,h!==0?p=b(h):(C&=H,C!==0?p=b(C):r||(O=H&~O,O!==0&&(p=b(O))))):(H=h&~y,H!==0?p=b(H):C!==0?p=b(C):r||(O=h&~O,O!==0&&(p=b(O)))),p===0?0:o!==0&&o!==p&&(o&y)===0&&(y=p&-p,O=o&-o,y>=O||y===32&&(O&4194176)!==0)?o:p}function A(r,o){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&o)===0}function U(r,o){switch(r){case 1:case 2:case 4:case 8:return o+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var r=ru;return ru<<=1,(ru&4194176)===0&&(ru=128),r}function D(){var r=au;return au<<=1,(au&62914560)===0&&(au=4194304),r}function R(r){for(var o=[],h=0;31>h;h++)o.push(r);return o}function F(r,o){r.pendingLanes|=o,o!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function j(r,o,h,p,y,C){var O=r.pendingLanes;r.pendingLanes=h,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=h,r.entangledLanes&=h,r.errorRecoveryDisabledLanes&=h,r.shellSuspendCounter=0;var H=r.entanglements,Z=r.expirationTimes,ce=r.hiddenUpdates;for(h=O&~h;0<h;){var Te=31-Si(h),Oe=1<<Te;H[Te]=0,Z[Te]=-1;var Fe=ce[Te];if(Fe!==null)for(ce[Te]=null,Te=0;Te<Fe.length;Te++){var xt=Fe[Te];xt!==null&&(xt.lane&=-536870913)}h&=~Oe}p!==0&&G(r,p,0),C!==0&&y===0&&r.tag!==0&&(r.suspendedLanes|=C&~(O&~o))}function G(r,o,h){r.pendingLanes|=o,r.suspendedLanes&=~o;var p=31-Si(o);r.entangledLanes|=o,r.entanglements[p]=r.entanglements[p]|1073741824|h&4194218}function J(r,o){var h=r.entangledLanes|=o;for(r=r.entanglements;h;){var p=31-Si(h),y=1<<p;y&o|r[p]&o&&(r[p]|=o),h&=~y}}function ie(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function V(r){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(Ml,r,void 0,(r.current.flags&128)===128)}catch{}}function $(r){if(typeof ab=="function"&&ob(r),Mi&&typeof Mi.setStrictMode=="function")try{Mi.setStrictMode(Ml,r)}catch{}}function W(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}function le(r,o){if(typeof r=="object"&&r!==null){var h=l_.get(r);return h!==void 0?h:(o={value:r,source:o,stack:d(o)},l_.set(r,o),o)}return{value:r,source:o,stack:d(o)}}function ge(r,o){Za[ja++]=cu,Za[ja++]=lu,lu=r,cu=o}function xe(r,o,h){Li[Oi++]=Us,Li[Oi++]=Ns,Li[Oi++]=Yr,Yr=r;var p=Us;r=Ns;var y=32-Si(p)-1;p&=~(1<<y),h+=1;var C=32-Si(o)+y;if(30<C){var O=y-y%5;C=(p&(1<<O)-1).toString(32),p>>=O,y-=O,Us=1<<32-Si(o)+y|h<<y|p,Ns=C+r}else Us=1<<C|h<<y|p,Ns=r}function Le(r){r.return!==null&&(ge(r,1),xe(r,1,0))}function Qe(r){for(;r===lu;)lu=Za[--ja],Za[ja]=null,cu=Za[--ja],Za[ja]=null;for(;r===Yr;)Yr=Li[--Oi],Li[Oi]=null,Ns=Li[--Oi],Li[Oi]=null,Us=Li[--Oi],Li[Oi]=null}function te(r,o){x(ur,o),x(El,r),x(Un,null),r=GM(o),g(Un),x(Un,r)}function Se(){g(Un),g(El),g(ur)}function qe(r){r.memoizedState!==null&&x(uu,r);var o=Un.current,h=kM(o,r.type);o!==h&&(x(El,r),x(Un,h))}function De(r){El.current===r&&(g(Un),g(El)),uu.current===r&&(g(uu),Ps?qr._currentValue=Wa:qr._currentValue2=Wa)}function ke(r){var o=Error(i(418,""));throw ct(le(o,r)),cp}function vt(r,o){if(!Ui)throw Error(i(175));BE(r.stateNode,r.type,r.memoizedProps,o,r)||ke(r)}function $e(r){for(Qn=r.return;Qn;)switch(Qn.tag){case 3:case 27:ds=!0;return;case 5:case 13:ds=!1;return;default:Qn=Qn.return}}function Ft(r){if(!Ui||r!==Qn)return!1;if(!Ot)return $e(r),Ot=!0,!1;var o=!1;if(Vn?r.tag!==3&&r.tag!==27&&(r.tag!==5||Jv(r.type)&&!su(r.type,r.memoizedProps))&&(o=!0):r.tag!==3&&(r.tag!==5||Jv(r.type)&&!su(r.type,r.memoizedProps))&&(o=!0),o&&Gn&&ke(r),$e(r),r.tag===13){if(!Ui)throw Error(i(316));if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));Gn=FE(r)}else Gn=Qn?jv(r.stateNode):null;return!0}function Et(){Ui&&(Gn=Qn=null,Ot=!1)}function ct(r){Ji===null?Ji=[r]:Ji.push(r)}function B(){for(var r=Ka,o=up=Ka=0;o<r;){var h=Bi[o];Bi[o++]=null;var p=Bi[o];Bi[o++]=null;var y=Bi[o];Bi[o++]=null;var C=Bi[o];if(Bi[o++]=null,p!==null&&y!==null){var O=p.pending;O===null?y.next=y:(y.next=O.next,O.next=y),p.pending=y}C!==0&&ue(h,y,C)}}function Ce(r,o,h,p){Bi[Ka++]=r,Bi[Ka++]=o,Bi[Ka++]=h,Bi[Ka++]=p,up|=p,r.lanes|=p,r=r.alternate,r!==null&&(r.lanes|=p)}function ve(r,o,h,p){return Ce(r,o,h,p),Ie(r)}function be(r,o){return Ce(r,null,null,o),Ie(r)}function ue(r,o,h){r.lanes|=h;var p=r.alternate;p!==null&&(p.lanes|=h);for(var y=!1,C=r.return;C!==null;)C.childLanes|=h,p=C.alternate,p!==null&&(p.childLanes|=h),C.tag===22&&(r=C.stateNode,r===null||r._visibility&1||(y=!0)),r=C,C=C.return;y&&o!==null&&r.tag===3&&(C=r.stateNode,y=31-Si(h),C=C.hiddenUpdates,r=C[y],r===null?C[y]=[o]:r.push(o),o.lane=h|536870912)}function Ie(r){if(50<Ul)throw Ul=0,Cp=null,Error(i(185));for(var o=r.return;o!==null;)r=o,o=r.return;return r.tag===3?r.stateNode:null}function me(r){r!==Ja&&r.next===null&&(Ja===null?hu=Ja=r:Ja=Ja.next=r),fu=!0,hp||(hp=!0,re(dt))}function Be(r,o){if(!fp&&fu){fp=!0;do for(var h=!1,p=hu;p!==null;){if(r!==0){var y=p.pendingLanes;if(y===0)var C=0;else{var O=p.suspendedLanes,H=p.pingedLanes;C=(1<<31-Si(42|r)+1)-1,C&=y&~(O&~H),C=C&201326677?C&201326677|1:C?C|2:0}C!==0&&(h=!0,K(p,C))}else C=Pt,C=w(p,p===$t?C:0),(C&3)===0||A(p,C)||(h=!0,K(p,C));p=p.next}while(h);fp=!1}}function dt(){fu=hp=!1;var r=0;Qa!==0&&(JM()&&(r=Qa),Qa=0);for(var o=Ki(),h=null,p=hu;p!==null;){var y=p.next,C=I(p,o);C===0?(p.next=null,h===null?hu=y:h.next=y,y===null&&(Ja=h)):(h=p,(r!==0||(C&3)!==0)&&(fu=!0)),p=y}Be(r)}function I(r,o){for(var h=r.suspendedLanes,p=r.pingedLanes,y=r.expirationTimes,C=r.pendingLanes&-62914561;0<C;){var O=31-Si(C),H=1<<O,Z=y[O];Z===-1?((H&h)===0||(H&p)!==0)&&(y[O]=U(H,o)):Z<=o&&(r.expiredLanes|=H),C&=~H}if(o=$t,h=Pt,h=w(r,r===o?h:0),p=r.callbackNode,h===0||r===o&&en===2||r.cancelPendingCommit!==null)return p!==null&&p!==null&&op(p),r.callbackNode=null,r.callbackPriority=0;if((h&3)===0||A(r,h)){if(o=h&-h,o===r.callbackPriority)return o;switch(p!==null&&op(p),ie(h)){case 2:case 8:h=sb;break;case 32:h=lp;break;case 268435456:h=rb;break;default:h=lp}return p=P.bind(null,r),h=ou(h,p),r.callbackPriority=o,r.callbackNode=h,o}return p!==null&&p!==null&&op(p),r.callbackPriority=2,r.callbackNode=null,2}function P(r,o){var h=r.callbackNode;if(kr()&&r.callbackNode!==h)return null;var p=Pt;return p=w(r,r===$t?p:0),p===0?null:(hv(r,p,o),I(r,Ki()),r.callbackNode!=null&&r.callbackNode===h?P.bind(null,r):null)}function K(r,o){if(kr())return null;hv(r,o,!0)}function re(r){iE?sE(function(){(Zt&6)!==0?ou(o_,r):r()}):ou(o_,r)}function pe(){return Qa===0&&(Qa=N()),Qa}function ae(r,o){if(bl===null){var h=bl=[];dp=0,$a=pe(),eo={status:"pending",value:void 0,then:function(p){h.push(p)}}}return dp++,o.then(je,je),o}function je(){if(--dp===0&&bl!==null){eo!==null&&(eo.status="fulfilled");var r=bl;bl=null,$a=0,eo=null;for(var o=0;o<r.length;o++)(0,r[o])()}}function we(r,o){var h=[],p={status:"pending",value:null,reason:null,then:function(y){h.push(y)}};return r.then(function(){p.status="fulfilled",p.value=o;for(var y=0;y<h.length;y++)(0,h[y])(o)},function(y){for(p.status="rejected",p.reason=y,y=0;y<h.length;y++)(0,h[y])(void 0)}),p}function Xe(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ze(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function fe(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ne(r,o,h){var p=r.updateQueue;if(p===null)return null;if(p=p.shared,(Zt&2)!==0){var y=p.pending;return y===null?o.next=o:(o.next=y.next,y.next=o),p.pending=o,o=Ie(r),ue(r,null,h),o}return Ce(r,p,o,h),Ie(r)}function tt(r,o,h){if(o=o.updateQueue,o!==null&&(o=o.shared,(h&4194176)!==0)){var p=o.lanes;p&=r.pendingLanes,h|=p,o.lanes=h,J(r,h)}}function nt(r,o){var h=r.updateQueue,p=r.alternate;if(p!==null&&(p=p.updateQueue,h===p)){var y=null,C=null;if(h=h.firstBaseUpdate,h!==null){do{var O={lane:h.lane,tag:h.tag,payload:h.payload,callback:null,next:null};C===null?y=C=O:C=C.next=O,h=h.next}while(h!==null);C===null?y=C=o:C=C.next=o}else y=C=o;h={baseState:p.baseState,firstBaseUpdate:y,lastBaseUpdate:C,shared:p.shared,callbacks:p.callbacks},r.updateQueue=h;return}r=h.lastBaseUpdate,r===null?h.firstBaseUpdate=o:r.next=o,h.lastBaseUpdate=o}function Ae(){if(pp){var r=eo;if(r!==null)throw r}}function st(r,o,h,p){pp=!1;var y=r.updateQueue;hr=!1;var C=y.firstBaseUpdate,O=y.lastBaseUpdate,H=y.shared.pending;if(H!==null){y.shared.pending=null;var Z=H,ce=Z.next;Z.next=null,O===null?C=ce:O.next=ce,O=Z;var Te=r.alternate;Te!==null&&(Te=Te.updateQueue,H=Te.lastBaseUpdate,H!==O&&(H===null?Te.firstBaseUpdate=ce:H.next=ce,Te.lastBaseUpdate=Z))}if(C!==null){var Oe=y.baseState;O=0,Te=ce=Z=null,H=C;do{var Fe=H.lane&-536870913,xt=Fe!==H.lane;if(xt?(Pt&Fe)===Fe:(p&Fe)===Fe){Fe!==0&&Fe===$a&&(pp=!0),Te!==null&&(Te=Te.next={lane:0,tag:H.tag,payload:H.payload,callback:null,next:null});e:{var Fi=r,Nl=H;Fe=o;var na=h;switch(Nl.tag){case 1:if(Fi=Nl.payload,typeof Fi=="function"){Oe=Fi.call(na,Oe,Fe);break e}Oe=Fi;break e;case 3:Fi.flags=Fi.flags&-65537|128;case 0:if(Fi=Nl.payload,Fe=typeof Fi=="function"?Fi.call(na,Oe,Fe):Fi,Fe==null)break e;Oe=Yd({},Oe,Fe);break e;case 2:hr=!0}}Fe=H.callback,Fe!==null&&(r.flags|=64,xt&&(r.flags|=8192),xt=y.callbacks,xt===null?y.callbacks=[Fe]:xt.push(Fe))}else xt={lane:Fe,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Te===null?(ce=Te=xt,Z=Oe):Te=Te.next=xt,O|=Fe;if(H=H.next,H===null){if(H=y.shared.pending,H===null)break;xt=H,H=xt.next,xt.next=null,y.lastBaseUpdate=xt,y.shared.pending=null}}while(!0);Te===null&&(Z=Oe),y.baseState=Z,y.firstBaseUpdate=ce,y.lastBaseUpdate=Te,C===null&&(y.shared.lanes=0),pr|=O,r.lanes=O,r.memoizedState=Oe}}function k(r,o){if(typeof r!="function")throw Error(i(191,r));r.call(o)}function Ue(r,o){var h=r.callbacks;if(h!==null)for(r.callbacks=null,r=0;r<h.length;r++)k(h[r],o)}function _e(r,o){if(Ei(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var h=Object.keys(r),p=Object.keys(o);if(h.length!==p.length)return!1;for(p=0;p<h.length;p++){var y=h[p];if(!lb.call(o,y)||!Ei(r[y],o[y]))return!1}return!0}function Ge(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Me(){}function he(r,o,h){switch(h=r[h],h===void 0?r.push(o):h!==o&&(o.then(Me,Me),o=h),o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,r===Tl?Error(i(483)):r;default:if(typeof o.status=="string")o.then(Me,Me);else{if(r=$t,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=o,r.status="pending",r.then(function(p){if(o.status==="pending"){var y=o;y.status="fulfilled",y.value=p}},function(p){if(o.status==="pending"){var y=o;y.status="rejected",y.reason=p}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,r===Tl?Error(i(483)):r}throw to=o,Tl}}function Ye(){if(to===null)throw Error(i(459));var r=to;return to=null,r}function ot(r){var o=Cl;return Cl+=1,no===null&&(no=[]),he(no,r,o)}function Ht(r,o){o=o.props.ref,r.ref=o!==void 0?o:null}function Dt(r,o){throw o.$$typeof===BM?Error(i(525)):(r=Object.prototype.toString.call(o),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r)))}function ri(r){var o=r._init;return o(r._payload)}function Di(r){function o(Q,Y){if(r){var se=Q.deletions;se===null?(Q.deletions=[Y],Q.flags|=16):se.push(Y)}}function h(Q,Y){if(!r)return null;for(;Y!==null;)o(Q,Y),Y=Y.sibling;return null}function p(Q){for(var Y=new Map;Q!==null;)Q.key!==null?Y.set(Q.key,Q):Y.set(Q.index,Q),Q=Q.sibling;return Y}function y(Q,Y){return Q=ar(Q,Y),Q.index=0,Q.sibling=null,Q}function C(Q,Y,se){return Q.index=se,r?(se=Q.alternate,se!==null?(se=se.index,se<Y?(Q.flags|=33554434,Y):se):(Q.flags|=33554434,Y)):(Q.flags|=1048576,Y)}function O(Q){return r&&Q.alternate===null&&(Q.flags|=33554434),Q}function H(Q,Y,se,Ee){return Y===null||Y.tag!==6?(Y=Xd(se,Q.mode,Ee),Y.return=Q,Y):(Y=y(Y,se),Y.return=Q,Y)}function Z(Q,Y,se,Ee){var et=se.type;return et===Xa?Te(Q,Y,se.props.children,Ee,se.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===lr&&ri(et)===Y.type)?(Y=y(Y,se.props),Ht(Y,se),Y.return=Q,Y):(Y=tu(se.type,se.key,se.props,null,Q.mode,Ee),Ht(Y,se),Y.return=Q,Y)}function ce(Q,Y,se,Ee){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=Wd(se,Q.mode,Ee),Y.return=Q,Y):(Y=y(Y,se.children||[]),Y.return=Q,Y)}function Te(Q,Y,se,Ee,et){return Y===null||Y.tag!==7?(Y=Xr(se,Q.mode,Ee,et),Y.return=Q,Y):(Y=y(Y,se),Y.return=Q,Y)}function Oe(Q,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Xd(""+Y,Q.mode,se),Y.return=Q,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case nu:return se=tu(Y.type,Y.key,Y.props,null,Q.mode,se),Ht(se,Y),se.return=Q,se;case ka:return Y=Wd(Y,Q.mode,se),Y.return=Q,Y;case lr:var Ee=Y._init;return Y=Ee(Y._payload),Oe(Q,Y,se)}if(iu(Y)||a(Y))return Y=Xr(Y,Q.mode,se,null),Y.return=Q,Y;if(typeof Y.then=="function")return Oe(Q,ot(Y),se);if(Y.$$typeof===or)return Oe(Q,jc(Q,Y),se);Dt(Q,Y)}return null}function Fe(Q,Y,se,Ee){var et=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return et!==null?null:H(Q,Y,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case nu:return se.key===et?Z(Q,Y,se,Ee):null;case ka:return se.key===et?ce(Q,Y,se,Ee):null;case lr:return et=se._init,se=et(se._payload),Fe(Q,Y,se,Ee)}if(iu(se)||a(se))return et!==null?null:Te(Q,Y,se,Ee,null);if(typeof se.then=="function")return Fe(Q,Y,ot(se),Ee);if(se.$$typeof===or)return Fe(Q,Y,jc(Q,se),Ee);Dt(Q,se)}return null}function xt(Q,Y,se,Ee,et){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return Q=Q.get(se)||null,H(Y,Q,""+Ee,et);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case nu:return Q=Q.get(Ee.key===null?se:Ee.key)||null,Z(Y,Q,Ee,et);case ka:return Q=Q.get(Ee.key===null?se:Ee.key)||null,ce(Y,Q,Ee,et);case lr:var sn=Ee._init;return Ee=sn(Ee._payload),xt(Q,Y,se,Ee,et)}if(iu(Ee)||a(Ee))return Q=Q.get(se)||null,Te(Y,Q,Ee,et,null);if(typeof Ee.then=="function")return xt(Q,Y,se,ot(Ee),et);if(Ee.$$typeof===or)return xt(Q,Y,se,jc(Y,Ee),et);Dt(Y,Ee)}return null}function Fi(Q,Y,se,Ee){for(var et=null,sn=null,ut=Y,Bt=Y=0,Cn=null;ut!==null&&Bt<se.length;Bt++){ut.index>Bt?(Cn=ut,ut=null):Cn=ut.sibling;var zt=Fe(Q,ut,se[Bt],Ee);if(zt===null){ut===null&&(ut=Cn);break}r&&ut&&zt.alternate===null&&o(Q,ut),Y=C(zt,Y,Bt),sn===null?et=zt:sn.sibling=zt,sn=zt,ut=Cn}if(Bt===se.length)return h(Q,ut),Ot&&ge(Q,Bt),et;if(ut===null){for(;Bt<se.length;Bt++)ut=Oe(Q,se[Bt],Ee),ut!==null&&(Y=C(ut,Y,Bt),sn===null?et=ut:sn.sibling=ut,sn=ut);return Ot&&ge(Q,Bt),et}for(ut=p(ut);Bt<se.length;Bt++)Cn=xt(ut,Q,Bt,se[Bt],Ee),Cn!==null&&(r&&Cn.alternate!==null&&ut.delete(Cn.key===null?Bt:Cn.key),Y=C(Cn,Y,Bt),sn===null?et=Cn:sn.sibling=Cn,sn=Cn);return r&&ut.forEach(function(gr){return o(Q,gr)}),Ot&&ge(Q,Bt),et}function Nl(Q,Y,se,Ee){if(se==null)throw Error(i(151));for(var et=null,sn=null,ut=Y,Bt=Y=0,Cn=null,zt=se.next();ut!==null&&!zt.done;Bt++,zt=se.next()){ut.index>Bt?(Cn=ut,ut=null):Cn=ut.sibling;var gr=Fe(Q,ut,zt.value,Ee);if(gr===null){ut===null&&(ut=Cn);break}r&&ut&&gr.alternate===null&&o(Q,ut),Y=C(gr,Y,Bt),sn===null?et=gr:sn.sibling=gr,sn=gr,ut=Cn}if(zt.done)return h(Q,ut),Ot&&ge(Q,Bt),et;if(ut===null){for(;!zt.done;Bt++,zt=se.next())zt=Oe(Q,zt.value,Ee),zt!==null&&(Y=C(zt,Y,Bt),sn===null?et=zt:sn.sibling=zt,sn=zt);return Ot&&ge(Q,Bt),et}for(ut=p(ut);!zt.done;Bt++,zt=se.next())zt=xt(ut,Q,Bt,zt.value,Ee),zt!==null&&(r&&zt.alternate!==null&&ut.delete(zt.key===null?Bt:zt.key),Y=C(zt,Y,Bt),sn===null?et=zt:sn.sibling=zt,sn=zt);return r&&ut.forEach(function(mb){return o(Q,mb)}),Ot&&ge(Q,Bt),et}function na(Q,Y,se,Ee){if(typeof se=="object"&&se!==null&&se.type===Xa&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case nu:e:{for(var et=se.key;Y!==null;){if(Y.key===et){if(et=se.type,et===Xa){if(Y.tag===7){h(Q,Y.sibling),Ee=y(Y,se.props.children),Ee.return=Q,Q=Ee;break e}}else if(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===lr&&ri(et)===Y.type){h(Q,Y.sibling),Ee=y(Y,se.props),Ht(Ee,se),Ee.return=Q,Q=Ee;break e}h(Q,Y);break}else o(Q,Y);Y=Y.sibling}se.type===Xa?(Ee=Xr(se.props.children,Q.mode,Ee,se.key),Ee.return=Q,Q=Ee):(Ee=tu(se.type,se.key,se.props,null,Q.mode,Ee),Ht(Ee,se),Ee.return=Q,Q=Ee)}return O(Q);case ka:e:{for(et=se.key;Y!==null;){if(Y.key===et)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){h(Q,Y.sibling),Ee=y(Y,se.children||[]),Ee.return=Q,Q=Ee;break e}else{h(Q,Y);break}else o(Q,Y);Y=Y.sibling}Ee=Wd(se,Q.mode,Ee),Ee.return=Q,Q=Ee}return O(Q);case lr:return et=se._init,se=et(se._payload),na(Q,Y,se,Ee)}if(iu(se))return Fi(Q,Y,se,Ee);if(a(se)){if(et=a(se),typeof et!="function")throw Error(i(150));return se=et.call(se),Nl(Q,Y,se,Ee)}if(typeof se.then=="function")return na(Q,Y,ot(se),Ee);if(se.$$typeof===or)return na(Q,Y,jc(Q,se),Ee);Dt(Q,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Y!==null&&Y.tag===6?(h(Q,Y.sibling),Ee=y(Y,se),Ee.return=Q,Q=Ee):(h(Q,Y),Ee=Xd(se,Q.mode,Ee),Ee.return=Q,Q=Ee),O(Q)):h(Q,Y)}return function(Q,Y,se,Ee){try{Cl=0;var et=na(Q,Y,se,Ee);return no=null,et}catch(ut){if(ut===Tl)throw ut;var sn=t(29,ut,null,Q.mode);return sn.lanes=Ee,sn.return=Q,sn}finally{}}}function al(r,o){r=zs,x(pu,r),x(io,o),zs=r|o.baseLanes}function Ba(){x(pu,zs),x(io,io.current)}function Yi(){zs=pu.current,g(io),g(pu)}function Pi(r){var o=r.alternate;x(Sn,Sn.current&1),x(zi,r),ps===null&&(o===null||io.current!==null||o.memoizedState!==null)&&(ps=r)}function ol(r){if(r.tag===22){if(x(Sn,Sn.current),x(zi,r),ps===null){var o=r.alternate;o!==null&&o.memoizedState!==null&&(ps=r)}}else Zi()}function Zi(){x(Sn,Sn.current),x(zi,zi.current)}function ai(r){g(zi),ps===r&&(ps=null),g(Sn)}function Ir(r){for(var o=r;o!==null;){if(o.tag===13){var h=o.memoizedState;if(h!==null&&(h=h.dehydrated,h===null||ip(h)||sp(h)))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function Jt(){throw Error(i(321))}function za(r,o){if(o===null)return!1;for(var h=0;h<o.length&&h<r.length;h++)if(!Ei(r[h],o[h]))return!1;return!0}function Ia(r,o,h,p,y,C){return fr=C,Tt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,pt.H=r===null||r.memoizedState===null?Kr:dr,jr=!1,C=h(p,y),jr=!1,so&&(C=kc(o,h,p,y)),Gc(r),C}function Gc(r){pt.H=ms;var o=Yt!==null&&Yt.next!==null;if(fr=0,vn=Yt=Tt=null,mu=!1,Al=0,ro=null,o)throw Error(i(300));r===null||bn||(r=r.dependencies,r!==null&&Zc(r)&&(bn=!0))}function kc(r,o,h,p){Tt=r;var y=0;do{if(so&&(ro=null),Al=0,so=!1,25<=y)throw Error(i(301));if(y+=1,vn=Yt=null,r.updateQueue!=null){var C=r.updateQueue;C.lastEffect=null,C.events=null,C.stores=null,C.memoCache!=null&&(C.memoCache.index=0)}pt.H=Jr,C=o(h,p)}while(so);return C}function rd(){var r=pt.H,o=r.useState()[0];return o=typeof o.then=="function"?ee(o):o,r=r.useState()[0],(Yt!==null?Yt.memoizedState:null)!==r&&(Tt.flags|=1024),o}function ll(){var r=gu!==0;return gu=0,r}function cl(r,o,h){o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~h}function ul(r){if(mu){for(r=r.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mu=!1}fr=0,vn=Yt=Tt=null,so=!1,Al=gu=0,ro=null}function L(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Tt.memoizedState=vn=r:vn=vn.next=r,vn}function X(){if(Yt===null){var r=Tt.alternate;r=r!==null?r.memoizedState:null}else r=Yt.next;var o=vn===null?Tt.memoizedState:vn.next;if(o!==null)vn=o,Yt=r;else{if(r===null)throw Tt.alternate===null?Error(i(467)):Error(i(310));Yt=r,r={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},vn===null?Tt.memoizedState=vn=r:vn=vn.next=r}return vn}function ee(r){var o=Al;return Al+=1,ro===null&&(ro=[]),r=he(ro,r,o),o=Tt,(vn===null?o.memoizedState:vn.next)===null&&(o=o.alternate,pt.H=o===null||o.memoizedState===null?Kr:dr),r}function ne(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return ee(r);if(r.$$typeof===or)return Fn(r)}throw Error(i(438,String(r)))}function q(r){var o=null,h=Tt.updateQueue;if(h!==null&&(o=h.memoCache),o==null){var p=Tt.alternate;p!==null&&(p=p.updateQueue,p!==null&&(p=p.memoCache,p!=null&&(o={data:p.data.map(function(y){return y.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),h===null&&(h=gp(),Tt.updateQueue=h),h.memoCache=o,h=o.data[o.index],h===void 0)for(h=o.data[o.index]=Array(r),p=0;p<r;p++)h[p]=IM;return o.index++,h}function ye(r,o){return typeof o=="function"?o(r):o}function Re(r){var o=X();return We(o,Yt,r)}function We(r,o,h){var p=r.queue;if(p===null)throw Error(i(311));p.lastRenderedReducer=h;var y=r.baseQueue,C=p.pending;if(C!==null){if(y!==null){var O=y.next;y.next=C.next,C.next=O}o.baseQueue=y=C,p.pending=null}if(C=r.baseState,y===null)r.memoizedState=C;else{o=y.next;var H=O=null,Z=null,ce=o,Te=!1;do{var Oe=ce.lane&-536870913;if(Oe!==ce.lane?(Pt&Oe)===Oe:(fr&Oe)===Oe){var Fe=ce.revertLane;if(Fe===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Oe===$a&&(Te=!0);else if((fr&Fe)===Fe){ce=ce.next,Fe===$a&&(Te=!0);continue}else Oe={lane:0,revertLane:ce.revertLane,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},Z===null?(H=Z=Oe,O=C):Z=Z.next=Oe,Tt.lanes|=Fe,pr|=Fe;Oe=ce.action,jr&&h(C,Oe),C=ce.hasEagerState?ce.eagerState:h(C,Oe)}else Fe={lane:Oe,revertLane:ce.revertLane,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},Z===null?(H=Z=Fe,O=C):Z=Z.next=Fe,Tt.lanes|=Oe,pr|=Oe;ce=ce.next}while(ce!==null&&ce!==o);if(Z===null?O=C:Z.next=H,!Ei(C,r.memoizedState)&&(bn=!0,Te&&(h=eo,h!==null)))throw h;r.memoizedState=C,r.baseState=O,r.baseQueue=Z,p.lastRenderedState=C}return y===null&&(p.lanes=0),[r.memoizedState,p.dispatch]}function Ve(r){var o=X(),h=o.queue;if(h===null)throw Error(i(311));h.lastRenderedReducer=r;var p=h.dispatch,y=h.pending,C=o.memoizedState;if(y!==null){h.pending=null;var O=y=y.next;do C=r(C,O.action),O=O.next;while(O!==y);Ei(C,o.memoizedState)||(bn=!0),o.memoizedState=C,o.baseQueue===null&&(o.baseState=C),h.lastRenderedState=C}return[C,p]}function rt(r,o,h){var p=Tt,y=X(),C=Ot;if(C){if(h===void 0)throw Error(i(407));h=h()}else h=o();var O=!Ei((Yt||y).memoizedState,h);if(O&&(y.memoizedState=h,bn=!0),y=y.queue,ad(bt.bind(null,p,y,r),[r]),y.getSnapshot!==o||O||vn!==null&&vn.memoizedState.tag&1){if(p.flags|=2048,hs(9,Je.bind(null,p,y,h,o),{destroy:void 0},null),$t===null)throw Error(i(349));C||(fr&60)!==0||lt(p,o,h)}return h}function lt(r,o,h){r.flags|=16384,r={getSnapshot:o,value:h},o=Tt.updateQueue,o===null?(o=gp(),Tt.updateQueue=o,o.stores=[r]):(h=o.stores,h===null?o.stores=[r]:h.push(r))}function Je(r,o,h,p){o.value=h,o.getSnapshot=p,Vt(o)&&nn(r)}function bt(r,o,h){return h(function(){Vt(o)&&nn(r)})}function Vt(r){var o=r.getSnapshot;r=r.value;try{var h=o();return!Ei(r,h)}catch{return!0}}function nn(r){var o=be(r,2);o!==null&&Jn(o,r,2)}function Xt(r){var o=L();if(typeof r=="function"){var h=r;if(r=h(),jr){$(!0);try{h()}finally{$(!1)}}}return o.memoizedState=o.baseState=r,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ye,lastRenderedState:r},o}function Gt(r,o,h,p){return r.baseState=h,We(r,Yt,typeof p=="function"?p:ye)}function it(r,o,h,p,y){if(qc(r))throw Error(i(485));if(r=o.action,r!==null){var C={payload:y,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(O){C.listeners.push(O)}};pt.T!==null?h(!0):C.isTransition=!1,p(C),h=o.pending,h===null?(C.next=o.pending=C,Qt(o,C)):(C.next=h.next,o.pending=h.next=C)}}function Qt(r,o){var h=o.action,p=o.payload,y=r.state;if(o.isTransition){var C=pt.T,O={};pt.T=O;try{var H=h(y,p),Z=pt.S;Z!==null&&Z(O,H),wt(r,o,H)}catch(ce){us(r,o,ce)}finally{pt.T=C}}else try{C=h(y,p),wt(r,o,C)}catch(ce){us(r,o,ce)}}function wt(r,o,h){h!==null&&typeof h=="object"&&typeof h.then=="function"?h.then(function(p){zn(r,o,p)},function(p){return us(r,o,p)}):zn(r,o,h)}function zn(r,o,h){o.status="fulfilled",o.value=h,In(o),r.state=h,o=r.pending,o!==null&&(h=o.next,h===o?r.pending=null:(h=h.next,o.next=h,Qt(r,h)))}function us(r,o,h){var p=r.pending;if(r.pending=null,p!==null){p=p.next;do o.status="rejected",o.reason=h,In(o),o=o.next;while(o!==p)}r.action=null}function In(r){r=r.listeners;for(var o=0;o<r.length;o++)(0,r[o])()}function tr(r,o){return o}function Kt(r,o){if(Ot){var h=$t.formState;if(h!==null){e:{var p=Tt;if(Ot){if(Gn){var y=RE(Gn,ds);if(y){Gn=jv(y),p=DE(y);break e}}ke(p)}p=!1}p&&(o=h[0])}}h=L(),h.memoizedState=h.baseState=o,p={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:o},h.queue=p,h=x0.bind(null,Tt,p),p.dispatch=h,p=Xt(!1);var C=ud.bind(null,Tt,!1,p.queue);return p=L(),y={state:o,dispatch:null,action:r,pending:null},p.queue=y,h=it.bind(null,Tt,y,C,h),y.dispatch=h,p.memoizedState=r,[o,h,!1]}function jn(r){var o=X();return Kn(o,Yt,r)}function Kn(r,o,h){o=We(r,o,tr)[0],r=Re(ye)[0],o=typeof o=="object"&&o!==null&&typeof o.then=="function"?ee(o):o;var p=X(),y=p.queue,C=y.dispatch;return h!==p.memoizedState&&(Tt.flags|=2048,hs(9,Rn.bind(null,y,h),{destroy:void 0},null)),[o,C,r]}function Rn(r,o){r.action=o}function Dn(r){var o=X(),h=Yt;if(h!==null)return Kn(o,h,r);X(),o=o.memoizedState,h=X();var p=h.queue.dispatch;return h.memoizedState=r,[o,p,!1]}function hs(r,o,h,p){return r={tag:r,create:o,inst:h,deps:p,next:null},o=Tt.updateQueue,o===null&&(o=gp(),Tt.updateQueue=o),h=o.lastEffect,h===null?o.lastEffect=r.next=r:(p=h.next,h.next=r,r.next=p,o.lastEffect=r),r}function fs(){return X().memoizedState}function Xc(r,o,h,p){var y=L();Tt.flags|=r,y.memoizedState=hs(1|o,h,{destroy:void 0},p===void 0?null:p)}function Wc(r,o,h,p){var y=X();p=p===void 0?null:p;var C=y.memoizedState.inst;Yt!==null&&p!==null&&za(p,Yt.memoizedState.deps)?y.memoizedState=hs(o,h,C,p):(Tt.flags|=r,y.memoizedState=hs(1|o,h,C,p))}function l0(r,o){Xc(8390656,8,r,o)}function ad(r,o){Wc(2048,8,r,o)}function c0(r,o){return Wc(4,2,r,o)}function u0(r,o){return Wc(4,4,r,o)}function h0(r,o){if(typeof o=="function"){r=r();var h=o(r);return function(){typeof h=="function"?h():o(null)}}if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function f0(r,o,h){h=h!=null?h.concat([r]):null,Wc(4,4,h0.bind(null,o,r),h)}function od(){}function d0(r,o){var h=X();o=o===void 0?null:o;var p=h.memoizedState;return o!==null&&za(o,p[1])?p[0]:(h.memoizedState=[r,o],r)}function p0(r,o){var h=X();o=o===void 0?null:o;var p=h.memoizedState;if(o!==null&&za(o,p[1]))return p[0];if(p=r(),jr){$(!0);try{r()}finally{$(!1)}}return h.memoizedState=[p,o],p}function ld(r,o,h){return h===void 0||(fr&1073741824)!==0?r.memoizedState=o:(r.memoizedState=h,r=uv(),Tt.lanes|=r,pr|=r,h)}function m0(r,o,h,p){return Ei(h,o)?h:io.current!==null?(r=ld(r,h,p),Ei(r,o)||(bn=!0),r):(fr&42)===0?(bn=!0,r.memoizedState=h):(r=uv(),Tt.lanes|=r,pr|=r,o)}function g0(r,o,h,p,y){var C=Wr();li(C!==0&&8>C?C:8);var O=pt.T,H={};pt.T=H,ud(r,!1,o,h);try{var Z=y(),ce=pt.S;if(ce!==null&&ce(H,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Te=we(Z,p);hl(r,o,Te,yi(r))}else hl(r,o,p,yi(r))}catch(Oe){hl(r,o,{then:function(){},status:"rejected",reason:Oe},yi())}finally{li(C),pt.T=O}}function v0(r){var o=r.memoizedState;if(o!==null)return o;o={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ye,lastRenderedState:Wa},next:null};var h={};return o.next={memoizedState:h,baseState:h,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ye,lastRenderedState:h},next:null},r.memoizedState=o,r=r.alternate,r!==null&&(r.memoizedState=o),o}function cd(){return Fn(qr)}function _0(){return X().memoizedState}function y0(){return X().memoizedState}function gM(r){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var h=yi();r=fe(h);var p=Ne(o,r,h);p!==null&&(Jn(p,o,h),tt(p,o,h)),o={cache:Ed()},r.payload=o;return}o=o.return}}function vM(r,o,h){var p=yi();h={lane:p,revertLane:0,action:h,hasEagerState:!1,eagerState:null,next:null},qc(r)?S0(o,h):(h=ve(r,o,h,p),h!==null&&(Jn(h,r,p),M0(h,o,p)))}function x0(r,o,h){var p=yi();hl(r,o,h,p)}function hl(r,o,h,p){var y={lane:p,revertLane:0,action:h,hasEagerState:!1,eagerState:null,next:null};if(qc(r))S0(o,y);else{var C=r.alternate;if(r.lanes===0&&(C===null||C.lanes===0)&&(C=o.lastRenderedReducer,C!==null))try{var O=o.lastRenderedState,H=C(O,h);if(y.hasEagerState=!0,y.eagerState=H,Ei(H,O))return Ce(r,o,y,0),$t===null&&B(),!1}catch{}finally{}if(h=ve(r,o,y,p),h!==null)return Jn(h,r,p),M0(h,o,p),!0}return!1}function ud(r,o,h,p){if(p={lane:2,revertLane:pe(),action:p,hasEagerState:!1,eagerState:null,next:null},qc(r)){if(o)throw Error(i(479))}else o=ve(r,h,p,2),o!==null&&Jn(o,r,2)}function qc(r){var o=r.alternate;return r===Tt||o!==null&&o===Tt}function S0(r,o){so=mu=!0;var h=r.pending;h===null?o.next=o:(o.next=h.next,h.next=o),r.pending=o}function M0(r,o,h){if((h&4194176)!==0){var p=o.lanes;p&=r.pendingLanes,h|=p,o.lanes=h,J(r,h)}}function hd(r,o,h,p){o=r.memoizedState,h=h(p,o),h=h==null?o:Yd({},o,h),r.memoizedState=h,r.lanes===0&&(r.updateQueue.baseState=h)}function E0(r,o,h,p,y,C,O){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(p,C,O):o.prototype&&o.prototype.isPureReactComponent?!_e(h,p)||!_e(y,C):!0}function b0(r,o,h,p){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(h,p),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(h,p),o.state!==r&&vp.enqueueReplaceState(o,o.state,null)}function Fr(r,o){var h=o;if("ref"in o){h={};for(var p in o)p!=="ref"&&(h[p]=o[p])}if(r=r.defaultProps){h===o&&(h=Yd({},h));for(var y in r)h[y]===void 0&&(h[y]=r[y])}return h}function Yc(r,o){try{var h=r.onUncaughtError;h(o.value,{componentStack:o.stack})}catch(p){setTimeout(function(){throw p})}}function T0(r,o,h){try{var p=r.onCaughtError;p(h.value,{componentStack:h.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(y){setTimeout(function(){throw y})}}function fd(r,o,h){return h=fe(h),h.tag=3,h.payload={element:null},h.callback=function(){Yc(r,o)},h}function C0(r){return r=fe(r),r.tag=3,r}function A0(r,o,h,p){var y=h.type.getDerivedStateFromError;if(typeof y=="function"){var C=p.value;r.payload=function(){return y(C)},r.callback=function(){T0(o,h,p)}}var O=h.stateNode;O!==null&&typeof O.componentDidCatch=="function"&&(r.callback=function(){T0(o,h,p),typeof y!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var H=p.stack;this.componentDidCatch(p.value,{componentStack:H!==null?H:""})})}function _M(r,o,h,p,y){if(h.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){if(o=h.alternate,o!==null&&dl(o,h,y,!0),h=zi.current,h!==null){switch(h.tag){case 13:return ps===null?Hd():h.alternate===null&&fn===0&&(fn=3),h.flags&=-257,h.flags|=65536,h.lanes=y,p===du?h.flags|=16384:(o=h.updateQueue,o===null?h.updateQueue=new Set([p]):o.add(p),Gd(r,p,y)),!1;case 22:return h.flags|=65536,p===du?h.flags|=16384:(o=h.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([p])},h.updateQueue=o):(h=o.retryQueue,h===null?o.retryQueue=new Set([p]):h.add(p)),Gd(r,p,y)),!1}throw Error(i(435,h.tag))}return Gd(r,p,y),Hd(),!1}if(Ot)return o=zi.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=y,p!==cp&&(r=Error(i(422),{cause:p}),ct(le(r,h)))):(p!==cp&&(o=Error(i(423),{cause:p}),ct(le(o,h))),r=r.current.alternate,r.flags|=65536,y&=-y,r.lanes|=y,p=le(p,h),y=fd(r.stateNode,p,y),nt(r,y),fn!==4&&(fn=2)),!1;var C=Error(i(520),{cause:p});if(C=le(C,h),Rl===null?Rl=[C]:Rl.push(C),fn!==4&&(fn=2),o===null)return!0;p=le(p,h),h=o;do{switch(h.tag){case 3:return h.flags|=65536,r=y&-y,h.lanes|=r,r=fd(h.stateNode,p,r),nt(h,r),!1;case 1:if(o=h.type,C=h.stateNode,(h.flags&128)===0&&(typeof o.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(mr===null||!mr.has(C))))return h.flags|=65536,y&=-y,h.lanes|=y,y=C0(y),A0(y,r,h,p),nt(h,y),!1}h=h.return}while(h!==null);return!1}function Pn(r,o,h,p){o.child=r===null?c_(o,null,h,p):Zr(o,r.child,h,p)}function w0(r,o,h,p,y){h=h.render;var C=o.ref;if("ref"in p){var O={};for(var H in p)H!=="ref"&&(O[H]=p[H])}else O=p;return Hr(o),p=Ia(r,o,h,O,C,y),H=ll(),r!==null&&!bn?(cl(r,o,y),As(r,o,y)):(Ot&&H&&Le(o),o.flags|=1,Pn(r,o,p,y),o.child)}function R0(r,o,h,p,y){if(r===null){var C=h.type;return typeof C=="function"&&!kd(C)&&C.defaultProps===void 0&&h.compare===null?(o.tag=15,o.type=C,D0(r,o,C,p,y)):(r=tu(h.type,null,p,o,o.mode,y),r.ref=o.ref,r.return=o,o.child=r)}if(C=r.child,!xd(r,y)){var O=C.memoizedProps;if(h=h.compare,h=h!==null?h:_e,h(O,p)&&r.ref===o.ref)return As(r,o,y)}return o.flags|=1,r=ar(C,p),r.ref=o.ref,r.return=o,o.child=r}function D0(r,o,h,p,y){if(r!==null){var C=r.memoizedProps;if(_e(C,p)&&r.ref===o.ref)if(bn=!1,o.pendingProps=p=C,xd(r,y))(r.flags&131072)!==0&&(bn=!0);else return o.lanes=r.lanes,As(r,o,y)}return dd(r,o,h,p,y)}function P0(r,o,h){var p=o.pendingProps,y=p.children,C=(o.stateNode._pendingVisibility&2)!==0,O=r!==null?r.memoizedState:null;if(fl(r,o),p.mode==="hidden"||C){if((o.flags&128)!==0){if(p=O!==null?O.baseLanes|h:h,r!==null){for(y=o.child=r.child,C=0;y!==null;)C=C|y.lanes|y.childLanes,y=y.sibling;o.childLanes=C&~p}else o.childLanes=0,o.child=null;return U0(r,o,p,h)}if((h&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},r!==null&&Kc(o,O!==null?O.cachePool:null),O!==null?al(o,O):Ba(),ol(o);else return o.lanes=o.childLanes=536870912,U0(r,o,O!==null?O.baseLanes|h:h,h)}else O!==null?(Kc(o,O.cachePool),al(o,O),Zi(),o.memoizedState=null):(r!==null&&Kc(o,null),Ba(),Zi());return Pn(r,o,y,h),o.child}function U0(r,o,h,p){var y=bd();return y=y===null?null:{parent:Ps?un._currentValue:un._currentValue2,pool:y},o.memoizedState={baseLanes:h,cachePool:y},r!==null&&Kc(o,null),Ba(),ol(o),r!==null&&dl(r,o,p,!0),null}function fl(r,o){var h=o.ref;if(h===null)r!==null&&r.ref!==null&&(o.flags|=2097664);else{if(typeof h!="function"&&typeof h!="object")throw Error(i(284));(r===null||r.ref!==h)&&(o.flags|=2097664)}}function dd(r,o,h,p,y){return Hr(o),h=Ia(r,o,h,p,void 0,y),p=ll(),r!==null&&!bn?(cl(r,o,y),As(r,o,y)):(Ot&&p&&Le(o),o.flags|=1,Pn(r,o,h,y),o.child)}function N0(r,o,h,p,y,C){return Hr(o),o.updateQueue=null,h=kc(o,p,h,y),Gc(r),p=ll(),r!==null&&!bn?(cl(r,o,C),As(r,o,C)):(Ot&&p&&Le(o),o.flags|=1,Pn(r,o,h,C),o.child)}function L0(r,o,h,p,y){if(Hr(o),o.stateNode===null){var C=Ya,O=h.contextType;typeof O=="object"&&O!==null&&(C=Fn(O)),C=new h(p,C),o.memoizedState=C.state!==null&&C.state!==void 0?C.state:null,C.updater=vp,o.stateNode=C,C._reactInternals=o,C=o.stateNode,C.props=p,C.state=o.memoizedState,C.refs={},Xe(o),O=h.contextType,C.context=typeof O=="object"&&O!==null?Fn(O):Ya,C.state=o.memoizedState,O=h.getDerivedStateFromProps,typeof O=="function"&&(hd(o,h,O,p),C.state=o.memoizedState),typeof h.getDerivedStateFromProps=="function"||typeof C.getSnapshotBeforeUpdate=="function"||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(O=C.state,typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount(),O!==C.state&&vp.enqueueReplaceState(C,C.state,null),st(o,p,C,y),Ae(),C.state=o.memoizedState),typeof C.componentDidMount=="function"&&(o.flags|=4194308),p=!0}else if(r===null){C=o.stateNode;var H=o.memoizedProps,Z=Fr(h,H);C.props=Z;var ce=C.context,Te=h.contextType;O=Ya,typeof Te=="object"&&Te!==null&&(O=Fn(Te));var Oe=h.getDerivedStateFromProps;Te=typeof Oe=="function"||typeof C.getSnapshotBeforeUpdate=="function",H=o.pendingProps!==H,Te||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H||ce!==O)&&b0(o,C,p,O),hr=!1;var Fe=o.memoizedState;C.state=Fe,st(o,p,C,y),Ae(),ce=o.memoizedState,H||Fe!==ce||hr?(typeof Oe=="function"&&(hd(o,h,Oe,p),ce=o.memoizedState),(Z=hr||E0(o,h,Z,p,Fe,ce,O))?(Te||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(o.flags|=4194308)):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=p,o.memoizedState=ce),C.props=p,C.state=ce,C.context=O,p=Z):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),p=!1)}else{C=o.stateNode,Ze(r,o),O=o.memoizedProps,Te=Fr(h,O),C.props=Te,Oe=o.pendingProps,Fe=C.context,ce=h.contextType,Z=Ya,typeof ce=="object"&&ce!==null&&(Z=Fn(ce)),H=h.getDerivedStateFromProps,(ce=typeof H=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(O!==Oe||Fe!==Z)&&b0(o,C,p,Z),hr=!1,Fe=o.memoizedState,C.state=Fe,st(o,p,C,y),Ae();var xt=o.memoizedState;O!==Oe||Fe!==xt||hr||r!==null&&r.dependencies!==null&&Zc(r.dependencies)?(typeof H=="function"&&(hd(o,h,H,p),xt=o.memoizedState),(Te=hr||E0(o,h,Te,p,Fe,xt,Z)||r!==null&&r.dependencies!==null&&Zc(r.dependencies))?(ce||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(p,xt,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(p,xt,Z)),typeof C.componentDidUpdate=="function"&&(o.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof C.componentDidUpdate!="function"||O===r.memoizedProps&&Fe===r.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||O===r.memoizedProps&&Fe===r.memoizedState||(o.flags|=1024),o.memoizedProps=p,o.memoizedState=xt),C.props=p,C.state=xt,C.context=Z,p=Te):(typeof C.componentDidUpdate!="function"||O===r.memoizedProps&&Fe===r.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||O===r.memoizedProps&&Fe===r.memoizedState||(o.flags|=1024),p=!1)}return C=p,fl(r,o),p=(o.flags&128)!==0,C||p?(C=o.stateNode,h=p&&typeof h.getDerivedStateFromError!="function"?null:C.render(),o.flags|=1,r!==null&&p?(o.child=Zr(o,r.child,null,y),o.child=Zr(o,null,h,y)):Pn(r,o,h,y),o.memoizedState=C.state,r=o.child):r=As(r,o,y),r}function O0(r,o,h,p){return Et(),o.flags|=256,Pn(r,o,h,p),o.child}function pd(r){return{baseLanes:r,cachePool:V0()}}function md(r,o,h){return r=r!==null?r.childLanes&~h:0,o&&(r|=Ii),r}function B0(r,o,h){var p=o.pendingProps,y=!1,C=(o.flags&128)!==0,O;if((O=C)||(O=r!==null&&r.memoizedState===null?!1:(Sn.current&2)!==0),O&&(y=!0,o.flags&=-129),O=(o.flags&32)!==0,o.flags&=-33,r===null){if(Ot){if(y?Pi(o):Zi(),Ot){var H=Gn,Z;(Z=H)&&(H=OE(H,ds),H!==null?(o.memoizedState={dehydrated:H,treeContext:Yr!==null?{id:Us,overflow:Ns}:null,retryLane:536870912},Z=t(18,null,null,0),Z.stateNode=H,Z.return=o,o.child=Z,Qn=o,Gn=null,Z=!0):Z=!1),Z||ke(o)}if(H=o.memoizedState,H!==null&&(H=H.dehydrated,H!==null))return sp(H)?o.lanes=16:o.lanes=536870912,null;ai(o)}return H=p.children,p=p.fallback,y?(Zi(),y=o.mode,H=vd({mode:"hidden",children:H},y),p=Xr(p,y,h,null),H.return=o,p.return=o,H.sibling=p,o.child=H,y=o.child,y.memoizedState=pd(h),y.childLanes=md(r,O,h),o.memoizedState=_p,p):(Pi(o),gd(o,H))}if(Z=r.memoizedState,Z!==null&&(H=Z.dehydrated,H!==null)){if(C)o.flags&256?(Pi(o),o.flags&=-257,o=_d(r,o,h)):o.memoizedState!==null?(Zi(),o.child=r.child,o.flags|=128,o=null):(Zi(),y=p.fallback,H=o.mode,p=vd({mode:"visible",children:p.children},H),y=Xr(y,H,h,null),y.flags|=2,p.return=o,y.return=o,p.sibling=y,o.child=p,Zr(o,r.child,null,h),p=o.child,p.memoizedState=pd(h),p.childLanes=md(r,O,h),o.memoizedState=_p,o=y);else if(Pi(o),sp(H))O=AE(H).digest,p=Error(i(419)),p.stack="",p.digest=O,ct({value:p,source:null,stack:null}),o=_d(r,o,h);else if(bn||dl(r,o,h,!1),O=(h&r.childLanes)!==0,bn||O){if(O=$t,O!==null){if(p=h&-h,(p&42)!==0)p=1;else switch(p){case 2:p=1;break;case 8:p=4;break;case 32:p=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:p=64;break;case 268435456:p=134217728;break;default:p=0}if(p=(p&(O.suspendedLanes|h))!==0?0:p,p!==0&&p!==Z.retryLane)throw Z.retryLane=p,be(r,p),Jn(O,r,p),h_}ip(H)||Hd(),o=_d(r,o,h)}else ip(H)?(o.flags|=128,o.child=r.child,o=DM.bind(null,r),wE(H,o),o=null):(r=Z.treeContext,Ui&&(Gn=UE(H),Qn=o,Ot=!0,Ji=null,ds=!1,r!==null&&(Li[Oi++]=Us,Li[Oi++]=Ns,Li[Oi++]=Yr,Us=r.id,Ns=r.overflow,Yr=o)),o=gd(o,p.children),o.flags|=4096);return o}return y?(Zi(),y=p.fallback,H=o.mode,Z=r.child,C=Z.sibling,p=ar(Z,{mode:"hidden",children:p.children}),p.subtreeFlags=Z.subtreeFlags&31457280,C!==null?y=ar(C,y):(y=Xr(y,H,h,null),y.flags|=2),y.return=o,p.return=o,p.sibling=y,o.child=p,p=y,y=o.child,H=r.child.memoizedState,H===null?H=pd(h):(Z=H.cachePool,Z!==null?(C=Ps?un._currentValue:un._currentValue2,Z=Z.parent!==C?{parent:C,pool:C}:Z):Z=V0(),H={baseLanes:H.baseLanes|h,cachePool:Z}),y.memoizedState=H,y.childLanes=md(r,O,h),o.memoizedState=_p,p):(Pi(o),h=r.child,r=h.sibling,h=ar(h,{mode:"visible",children:p.children}),h.return=o,h.sibling=null,r!==null&&(O=o.deletions,O===null?(o.deletions=[r],o.flags|=16):O.push(r)),o.child=h,o.memoizedState=null,h)}function gd(r,o){return o=vd({mode:"visible",children:o},r.mode),o.return=r,r.child=o}function vd(r,o){return Cv(r,o,0,null)}function _d(r,o,h){return Zr(o,r.child,null,h),r=gd(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function z0(r,o,h){r.lanes|=o;var p=r.alternate;p!==null&&(p.lanes|=o),Sd(r.return,o,h)}function yd(r,o,h,p,y){var C=r.memoizedState;C===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:p,tail:h,tailMode:y}:(C.isBackwards=o,C.rendering=null,C.renderingStartTime=0,C.last=p,C.tail=h,C.tailMode=y)}function I0(r,o,h){var p=o.pendingProps,y=p.revealOrder,C=p.tail;if(Pn(r,o,p.children,h),p=Sn.current,(p&2)!==0)p=p&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&z0(r,h,o);else if(r.tag===19)z0(r,h,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}p&=1}switch(x(Sn,p),y){case"forwards":for(h=o.child,y=null;h!==null;)r=h.alternate,r!==null&&Ir(r)===null&&(y=h),h=h.sibling;h=y,h===null?(y=o.child,o.child=null):(y=h.sibling,h.sibling=null),yd(o,!1,y,h,C);break;case"backwards":for(h=null,y=o.child,o.child=null;y!==null;){if(r=y.alternate,r!==null&&Ir(r)===null){o.child=y;break}r=y.sibling,y.sibling=h,h=y,y=r}yd(o,!0,h,null,C);break;case"together":yd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function As(r,o,h){if(r!==null&&(o.dependencies=r.dependencies),pr|=o.lanes,(h&o.childLanes)===0)if(r!==null){if(dl(r,o,h,!1),(h&o.childLanes)===0)return null}else return null;if(r!==null&&o.child!==r.child)throw Error(i(153));if(o.child!==null){for(r=o.child,h=ar(r,r.pendingProps),o.child=h,h.return=o;r.sibling!==null;)r=r.sibling,h=h.sibling=ar(r,r.pendingProps),h.return=o;h.sibling=null}return o.child}function xd(r,o){return(r.lanes&o)!==0?!0:(r=r.dependencies,!!(r!==null&&Zc(r)))}function yM(r,o,h){switch(o.tag){case 3:te(o,o.stateNode.containerInfo),nr(o,un,r.memoizedState.cache),Et();break;case 27:case 5:qe(o);break;case 4:te(o,o.stateNode.containerInfo);break;case 10:nr(o,o.type,o.memoizedProps.value);break;case 13:var p=o.memoizedState;if(p!==null)return p.dehydrated!==null?(Pi(o),o.flags|=128,null):(h&o.child.childLanes)!==0?B0(r,o,h):(Pi(o),r=As(r,o,h),r!==null?r.sibling:null);Pi(o);break;case 19:var y=(r.flags&128)!==0;if(p=(h&o.childLanes)!==0,p||(dl(r,o,h,!1),p=(h&o.childLanes)!==0),y){if(p)return I0(r,o,h);o.flags|=128}if(y=o.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),x(Sn,Sn.current),p)break;return null;case 22:case 23:return o.lanes=0,P0(r,o,h);case 24:nr(o,un,r.memoizedState.cache)}return As(r,o,h)}function F0(r,o,h){if(r!==null)if(r.memoizedProps!==o.pendingProps)bn=!0;else{if(!xd(r,h)&&(o.flags&128)===0)return bn=!1,yM(r,o,h);bn=(r.flags&131072)!==0}else bn=!1,Ot&&(o.flags&1048576)!==0&&xe(o,cu,o.index);switch(o.lanes=0,o.tag){case 16:e:{r=o.pendingProps;var p=o.elementType,y=p._init;if(p=y(p._payload),o.type=p,typeof p=="function")kd(p)?(r=Fr(p,r),o.tag=1,o=L0(null,o,p,r,h)):(o.tag=0,o=dd(null,o,p,r,h));else{if(p!=null){if(y=p.$$typeof,y===jd){o.tag=11,o=w0(null,o,p,r,h);break e}else if(y===Qd){o.tag=14,o=R0(null,o,p,r,h);break e}}throw o=l(p)||p,Error(i(306,o,""))}}return o;case 0:return dd(r,o,o.type,o.pendingProps,h);case 1:return p=o.type,y=Fr(p,o.pendingProps),L0(r,o,p,y,h);case 3:e:{if(te(o,o.stateNode.containerInfo),r===null)throw Error(i(387));var C=o.pendingProps;y=o.memoizedState,p=y.element,Ze(r,o),st(o,C,null,h);var O=o.memoizedState;if(C=O.cache,nr(o,un,C),C!==y.cache&&Md(o,[un],h,!0),Ae(),C=O.element,Ui&&y.isDehydrated)if(y={element:C,isDehydrated:!1,cache:O.cache},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){o=O0(r,o,C,h);break e}else if(C!==p){p=le(Error(i(424)),o),ct(p),o=O0(r,o,C,h);break e}else for(Ui&&(Gn=PE(o.stateNode.containerInfo),Qn=o,Ot=!0,Ji=null,ds=!0),h=c_(o,null,C,h),o.child=h;h;)h.flags=h.flags&-3|4096,h=h.sibling;else{if(Et(),C===p){o=As(r,o,h);break e}Pn(r,o,C,h)}o=o.child}return o;case 26:if(Ni)return fl(r,o),r===null?(h=$v(o.type,null,o.pendingProps,null))?o.memoizedState=h:Ot||(o.stateNode=YE(o.type,o.pendingProps,ur.current,o)):o.memoizedState=$v(o.type,r.memoizedProps,o.pendingProps,r.memoizedState),null;case 27:if(Vn)return qe(o),r===null&&Vn&&Ot&&(p=o.stateNode=r_(o.type,o.pendingProps,ur.current,Un.current,!1),Qn=o,ds=!0,Gn=Kv(p)),p=o.pendingProps.children,r!==null||Ot?Pn(r,o,p,h):o.child=Zr(o,null,p,h),fl(r,o),o.child;case 5:return r===null&&Ot&&(XE(o.type,o.pendingProps,Un.current),(y=p=Gn)&&(p=NE(p,o.type,o.pendingProps,ds),p!==null?(o.stateNode=p,Qn=o,Gn=Kv(p),ds=!1,y=!0):y=!1),y||ke(o)),qe(o),y=o.type,C=o.pendingProps,O=r!==null?r.memoizedProps:null,p=C.children,su(y,C)?p=null:O!==null&&su(y,O)&&(o.flags|=32),o.memoizedState!==null&&(y=Ia(r,o,rd,null,null,h),Ps?qr._currentValue=y:qr._currentValue2=y),fl(r,o),Pn(r,o,p,h),o.child;case 6:return r===null&&Ot&&(WE(o.pendingProps,Un.current),(r=h=Gn)&&(h=LE(h,o.pendingProps,ds),h!==null?(o.stateNode=h,Qn=o,Gn=null,r=!0):r=!1),r||ke(o)),null;case 13:return B0(r,o,h);case 4:return te(o,o.stateNode.containerInfo),p=o.pendingProps,r===null?o.child=Zr(o,null,p,h):Pn(r,o,p,h),o.child;case 11:return w0(r,o,o.type,o.pendingProps,h);case 7:return Pn(r,o,o.pendingProps,h),o.child;case 8:return Pn(r,o,o.pendingProps.children,h),o.child;case 12:return Pn(r,o,o.pendingProps.children,h),o.child;case 10:return p=o.pendingProps,nr(o,o.type,p.value),Pn(r,o,p.children,h),o.child;case 9:return y=o.type._context,p=o.pendingProps.children,Hr(o),y=Fn(y),p=p(y),o.flags|=1,Pn(r,o,p,h),o.child;case 14:return R0(r,o,o.type,o.pendingProps,h);case 15:return D0(r,o,o.type,o.pendingProps,h);case 19:return I0(r,o,h);case 22:return P0(r,o,h);case 24:return Hr(o),p=Fn(un),r===null?(y=bd(),y===null&&(y=$t,C=Ed(),y.pooledCache=C,C.refCount++,C!==null&&(y.pooledCacheLanes|=h),y=C),o.memoizedState={parent:p,cache:y},Xe(o),nr(o,un,y)):((r.lanes&h)!==0&&(Ze(r,o),st(o,null,null,h),Ae()),y=r.memoizedState,C=o.memoizedState,y.parent!==p?(y={parent:p,cache:p},o.memoizedState=y,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=y),nr(o,un,p)):(p=C.cache,nr(o,un,p),p!==y.cache&&Md(o,[un],h,!0))),Pn(r,o,o.pendingProps.children,h),o.child;case 29:throw o.pendingProps}throw Error(i(156,o.tag))}function nr(r,o,h){Ps?(x(vu,o._currentValue),o._currentValue=h):(x(vu,o._currentValue2),o._currentValue2=h)}function ws(r){var o=vu.current;Ps?r._currentValue=o:r._currentValue2=o,g(vu)}function Sd(r,o,h){for(;r!==null;){var p=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,p!==null&&(p.childLanes|=o)):p!==null&&(p.childLanes&o)!==o&&(p.childLanes|=o),r===h)break;r=r.return}}function Md(r,o,h,p){var y=r.child;for(y!==null&&(y.return=r);y!==null;){var C=y.dependencies;if(C!==null){var O=y.child;C=C.firstContext;e:for(;C!==null;){var H=C;C=y;for(var Z=0;Z<o.length;Z++)if(H.context===o[Z]){C.lanes|=h,H=C.alternate,H!==null&&(H.lanes|=h),Sd(C.return,h,r),p||(O=null);break e}C=H.next}}else if(y.tag===18){if(O=y.return,O===null)throw Error(i(341));O.lanes|=h,C=O.alternate,C!==null&&(C.lanes|=h),Sd(O,h,r),O=null}else O=y.child;if(O!==null)O.return=y;else for(O=y;O!==null;){if(O===r){O=null;break}if(y=O.sibling,y!==null){y.return=O.return,O=y;break}O=O.return}y=O}}function dl(r,o,h,p){r=null;for(var y=o,C=!1;y!==null;){if(!C){if((y.flags&524288)!==0)C=!0;else if((y.flags&262144)!==0)break}if(y.tag===10){var O=y.alternate;if(O===null)throw Error(i(387));if(O=O.memoizedProps,O!==null){var H=y.type;Ei(y.pendingProps.value,O.value)||(r!==null?r.push(H):r=[H])}}else if(y===uu.current){if(O=y.alternate,O===null)throw Error(i(387));O.memoizedState.memoizedState!==y.memoizedState.memoizedState&&(r!==null?r.push(qr):r=[qr])}y=y.return}r!==null&&Md(o,r,h,p),o.flags|=262144}function Zc(r){for(r=r.firstContext;r!==null;){var o=r.context;if(!Ei(Ps?o._currentValue:o._currentValue2,r.memoizedValue))return!0;r=r.next}return!1}function Hr(r){Qr=r,Ls=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Fn(r){return H0(Qr,r)}function jc(r,o){return Qr===null&&Hr(r),H0(r,o)}function H0(r,o){var h=Ps?o._currentValue:o._currentValue2;if(o={context:o,memoizedValue:h,next:null},Ls===null){if(r===null)throw Error(i(308));Ls=o,r.dependencies={lanes:0,firstContext:o},r.flags|=524288}else Ls=Ls.next=o;return h}function Ed(){return{controller:new ub,data:new Map,refCount:0}}function pl(r){r.refCount--,r.refCount===0&&hb(fb,function(){r.controller.abort()})}function bd(){var r=$r.current;return r!==null?r:$t.pooledCache}function Kc(r,o){o===null?x($r,$r.current):x($r,o.pool)}function V0(){var r=bd();return r===null?null:{parent:Ps?un._currentValue:un._currentValue2,pool:r}}function gi(r){r.flags|=4}function G0(r,o){if(r!==null&&r.child===o.child)return!1;if((o.flags&16)!==0)return!0;for(r=o.child;r!==null;){if((r.flags&13878)!==0||(r.subtreeFlags&13878)!==0)return!0;r=r.sibling}return!1}function Td(r,o,h,p){if(Hn)for(h=o.child;h!==null;){if(h.tag===5||h.tag===6)tp(r,h.stateNode);else if(!(h.tag===4||Vn&&h.tag===27)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===o)break;for(;h.sibling===null;){if(h.return===null||h.return===o)return;h=h.return}h.sibling.return=h.return,h=h.sibling}else if(cr)for(var y=o.child;y!==null;){if(y.tag===5){var C=y.stateNode;h&&p&&(C=Yv(C,y.type,y.memoizedProps)),tp(r,C)}else if(y.tag===6)C=y.stateNode,h&&p&&(C=Zv(C,y.memoizedProps)),tp(r,C);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)C=y.child,C!==null&&(C.return=y),Td(r,y,!0,!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===o)break;for(;y.sibling===null;){if(y.return===null||y.return===o)return;y=y.return}y.sibling.return=y.return,y=y.sibling}}function k0(r,o,h,p){if(cr)for(var y=o.child;y!==null;){if(y.tag===5){var C=y.stateNode;h&&p&&(C=Yv(C,y.type,y.memoizedProps)),Wv(r,C)}else if(y.tag===6)C=y.stateNode,h&&p&&(C=Zv(C,y.memoizedProps)),Wv(r,C);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)C=y.child,C!==null&&(C.return=y),k0(r,y,!(y.memoizedProps!==null&&y.memoizedProps.mode==="manual"),!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===o)break;for(;y.sibling===null;){if(y.return===null||y.return===o)return;y=y.return}y.sibling.return=y.return,y=y.sibling}}function X0(r,o){if(cr&&G0(r,o)){r=o.stateNode;var h=r.containerInfo,p=Xv();k0(p,o,!1,!1),r.pendingChildren=p,gi(o),CE(h,p)}}function Cd(r,o,h,p){if(Hn)r.memoizedProps!==p&&gi(o);else if(cr){var y=r.stateNode,C=r.memoizedProps;if((r=G0(r,o))||C!==p){var O=Un.current;C=TE(y,h,C,p,!r,null),C===y?o.stateNode=y:(Iv(C,h,p,O)&&gi(o),o.stateNode=C,r?Td(C,o,!1,!1):gi(o))}else o.stateNode=y}}function Ad(r,o,h){if($M(o,h)){if(r.flags|=16777216,!Vv(o,h))if(mv())r.flags|=8192;else throw to=du,mp}else r.flags&=-16777217}function W0(r,o){if(jE(o)){if(r.flags|=16777216,!s_(o))if(mv())r.flags|=8192;else throw to=du,mp}else r.flags&=-16777217}function Jc(r,o){o!==null&&(r.flags|=4),r.flags&16384&&(o=r.tag!==22?D():536870912,r.lanes|=o,lo|=o)}function ml(r,o){if(!Ot)switch(r.tailMode){case"hidden":o=r.tail;for(var h=null;o!==null;)o.alternate!==null&&(h=o),o=o.sibling;h===null?r.tail=null:h.sibling=null;break;case"collapsed":h=r.tail;for(var p=null;h!==null;)h.alternate!==null&&(p=h),h=h.sibling;p===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:p.sibling=null}}function an(r){var o=r.alternate!==null&&r.alternate.child===r.child,h=0,p=0;if(o)for(var y=r.child;y!==null;)h|=y.lanes|y.childLanes,p|=y.subtreeFlags&31457280,p|=y.flags&31457280,y.return=r,y=y.sibling;else for(y=r.child;y!==null;)h|=y.lanes|y.childLanes,p|=y.subtreeFlags,p|=y.flags,y.return=r,y=y.sibling;return r.subtreeFlags|=p,r.childLanes=h,o}function xM(r,o,h){var p=o.pendingProps;switch(Qe(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(o),null;case 1:return an(o),null;case 3:return h=o.stateNode,p=null,r!==null&&(p=r.memoizedState.cache),o.memoizedState.cache!==p&&(o.flags|=2048),ws(un),Se(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Ft(o)?gi(o):r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ji!==null&&(Id(Ji),Ji=null))),X0(r,o),an(o),null;case 26:if(Ni){h=o.type;var y=o.memoizedState;return r===null?(gi(o),y!==null?(an(o),W0(o,y)):(an(o),Ad(o,h,p))):y?y!==r.memoizedState?(gi(o),an(o),W0(o,y)):(an(o),o.flags&=-16777217):(Hn?r.memoizedProps!==p&&gi(o):Cd(r,o,h,p),an(o),Ad(o,h,p)),null}case 27:if(Vn){if(De(o),h=ur.current,y=o.type,r!==null&&o.stateNode!=null)Hn?r.memoizedProps!==p&&gi(o):Cd(r,o,y,p);else{if(!p){if(o.stateNode===null)throw Error(i(166));return an(o),null}r=Un.current,Ft(o)?vt(o,r):(r=r_(y,p,h,r,!0),o.stateNode=r,gi(o))}return an(o),null}case 5:if(De(o),h=o.type,r!==null&&o.stateNode!=null)Cd(r,o,h,p);else{if(!p){if(o.stateNode===null)throw Error(i(166));return an(o),null}r=Un.current,Ft(o)?vt(o,r):(y=qM(h,p,ur.current,r,o),Td(y,o,!1,!1),o.stateNode=y,Iv(y,h,p,r)&&gi(o))}return an(o),Ad(o,o.type,o.pendingProps),null;case 6:if(r&&o.stateNode!=null)h=r.memoizedProps,Hn?h!==p&&gi(o):cr&&(h!==p?(o.stateNode=Fv(p,ur.current,Un.current,o),gi(o)):o.stateNode=r.stateNode);else{if(typeof p!="string"&&o.stateNode===null)throw Error(i(166));if(r=ur.current,h=Un.current,Ft(o)){if(!Ui)throw Error(i(176));if(r=o.stateNode,h=o.memoizedProps,p=null,y=Qn,y!==null)switch(y.tag){case 27:case 5:p=y.memoizedProps}zE(r,h,o,p)||ke(o)}else o.stateNode=Fv(p,r,h,o)}return an(o),null;case 13:if(p=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(y=Ft(o),p!==null&&p.dehydrated!==null){if(r===null){if(!y)throw Error(i(318));if(!Ui)throw Error(i(344));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(i(317));IE(y,o)}else Et(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;an(o),y=!1}else Ji!==null&&(Id(Ji),Ji=null),y=!0;if(!y)return o.flags&256?(ai(o),o):(ai(o),null)}if(ai(o),(o.flags&128)!==0)return o.lanes=h,o;if(h=p!==null,r=r!==null&&r.memoizedState!==null,h){p=o.child,y=null,p.alternate!==null&&p.alternate.memoizedState!==null&&p.alternate.memoizedState.cachePool!==null&&(y=p.alternate.memoizedState.cachePool.pool);var C=null;p.memoizedState!==null&&p.memoizedState.cachePool!==null&&(C=p.memoizedState.cachePool.pool),C!==y&&(p.flags|=2048)}return h!==r&&h&&(o.child.flags|=8192),Jc(o,o.updateQueue),an(o),null;case 4:return Se(),X0(r,o),r===null&&jM(o.stateNode.containerInfo),an(o),null;case 10:return ws(o.type),an(o),null;case 19:if(g(Sn),y=o.memoizedState,y===null)return an(o),null;if(p=(o.flags&128)!==0,C=y.rendering,C===null)if(p)ml(y,!1);else{if(fn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(C=Ir(r),C!==null){for(o.flags|=128,ml(y,!1),r=C.updateQueue,o.updateQueue=r,Jc(o,r),o.subtreeFlags=0,r=h,h=o.child;h!==null;)Tv(h,r),h=h.sibling;return x(Sn,Sn.current&1|2),o.child}r=r.sibling}y.tail!==null&&Ki()>Dl&&(o.flags|=128,p=!0,ml(y,!1),o.lanes=4194304)}else{if(!p)if(r=Ir(C),r!==null){if(o.flags|=128,p=!0,r=r.updateQueue,o.updateQueue=r,Jc(o,r),ml(y,!0),y.tail===null&&y.tailMode==="hidden"&&!C.alternate&&!Ot)return an(o),null}else 2*Ki()-y.renderingStartTime>Dl&&h!==536870912&&(o.flags|=128,p=!0,ml(y,!1),o.lanes=4194304);y.isBackwards?(C.sibling=o.child,o.child=C):(r=y.last,r!==null?r.sibling=C:o.child=C,y.last=C)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Ki(),o.sibling=null,r=Sn.current,x(Sn,p?r&1|2:r&1),o):(an(o),null);case 22:case 23:return ai(o),Yi(),p=o.memoizedState!==null,r!==null?r.memoizedState!==null!==p&&(o.flags|=8192):p&&(o.flags|=8192),p?(h&536870912)!==0&&(o.flags&128)===0&&(an(o),o.subtreeFlags&6&&(o.flags|=8192)):an(o),h=o.updateQueue,h!==null&&Jc(o,h.retryQueue),h=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==h&&(o.flags|=2048),r!==null&&g($r),null;case 24:return h=null,r!==null&&(h=r.memoizedState.cache),o.memoizedState.cache!==h&&(o.flags|=2048),ws(un),an(o),null;case 25:return null}throw Error(i(156,o.tag))}function SM(r,o){switch(Qe(o),o.tag){case 1:return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return ws(un),Se(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 26:case 27:case 5:return De(o),null;case 13:if(ai(o),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(i(340));Et()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return g(Sn),null;case 4:return Se(),null;case 10:return ws(o.type),null;case 22:case 23:return ai(o),Yi(),r!==null&&g($r),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 24:return ws(un),null;case 25:return null;default:return null}}function q0(r,o){switch(Qe(o),o.tag){case 3:ws(un),Se();break;case 26:case 27:case 5:De(o);break;case 4:Se();break;case 13:ai(o);break;case 19:g(Sn);break;case 10:ws(o.type);break;case 22:case 23:ai(o),Yi(),r!==null&&g($r);break;case 24:ws(un)}}function gl(r,o){try{var h=o.updateQueue,p=h!==null?h.lastEffect:null;if(p!==null){var y=p.next;h=y;do{if((h.tag&r)===r){p=void 0;var C=h.create,O=h.inst;p=C(),O.destroy=p}h=h.next}while(h!==y)}}catch(H){Wt(o,o.return,H)}}function ir(r,o,h){try{var p=o.updateQueue,y=p!==null?p.lastEffect:null;if(y!==null){var C=y.next;p=C;do{if((p.tag&r)===r){var O=p.inst,H=O.destroy;if(H!==void 0){O.destroy=void 0,y=o;var Z=h;try{H()}catch(ce){Wt(y,Z,ce)}}}p=p.next}while(p!==C)}}catch(ce){Wt(o,o.return,ce)}}function Y0(r){var o=r.updateQueue;if(o!==null){var h=r.stateNode;try{Ue(o,h)}catch(p){Wt(r,r.return,p)}}}function Z0(r,o,h){h.props=Fr(r.type,r.memoizedProps),h.state=r.memoizedState;try{h.componentWillUnmount()}catch(p){Wt(r,o,p)}}function Vr(r,o){try{var h=r.ref;if(h!==null){var p=r.stateNode;switch(r.tag){case 26:case 27:case 5:var y=yl(p);break;default:y=p}typeof h=="function"?r.refCleanup=h(y):h.current=y}}catch(C){Wt(r,o,C)}}function vi(r,o){var h=r.ref,p=r.refCleanup;if(h!==null)if(typeof p=="function")try{p()}catch(y){Wt(r,o,y)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof h=="function")try{h(null)}catch(y){Wt(r,o,y)}else h.current=null}function j0(r){var o=r.type,h=r.memoizedProps,p=r.stateNode;try{pE(p,o,h,r)}catch(y){Wt(r,r.return,y)}}function K0(r,o,h){try{mE(r.stateNode,r.type,h,o,r)}catch(p){Wt(r,r.return,p)}}function J0(r){return r.tag===5||r.tag===3||(Ni?r.tag===26:!1)||(Vn?r.tag===27:!1)||r.tag===4}function wd(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||J0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&(!Vn||r.tag!==27)&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rd(r,o,h){var p=r.tag;if(p===5||p===6)r=r.stateNode,o?vE(h,r,o):fE(h,r);else if(!(p===4||Vn&&p===27)&&(r=r.child,r!==null))for(Rd(r,o,h),r=r.sibling;r!==null;)Rd(r,o,h),r=r.sibling}function Qc(r,o,h){var p=r.tag;if(p===5||p===6)r=r.stateNode,o?gE(h,r,o):hE(h,r);else if(!(p===4||Vn&&p===27)&&(r=r.child,r!==null))for(Qc(r,o,h),r=r.sibling;r!==null;)Qc(r,o,h),r=r.sibling}function Q0(r,o,h){r=r.containerInfo;try{qv(r,h)}catch(p){Wt(o,o.return,p)}}function MM(r,o){for(XM(r.containerInfo),Tn=o;Tn!==null;)if(r=Tn,o=r.child,(r.subtreeFlags&1028)!==0&&o!==null)o.return=r,Tn=o;else for(;Tn!==null;){r=Tn;var h=r.alternate;switch(o=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((o&1024)!==0&&h!==null){o=void 0;var p=r,y=h.memoizedProps;h=h.memoizedState;var C=p.stateNode;try{var O=Fr(p.type,y,p.elementType===p.type);o=C.getSnapshotBeforeUpdate(O,h),C.__reactInternalSnapshotBeforeUpdate=o}catch(H){Wt(p,p.return,H)}}break;case 3:(o&1024)!==0&&Hn&&bE(r.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((o&1024)!==0)throw Error(i(163))}if(o=r.sibling,o!==null){o.return=r.return,Tn=o;break}Tn=r.return}return O=p_,p_=!1,O}function $0(r,o,h){var p=h.flags;switch(h.tag){case 0:case 11:case 15:Rs(r,h),p&4&&gl(5,h);break;case 1:if(Rs(r,h),p&4)if(r=h.stateNode,o===null)try{r.componentDidMount()}catch(H){Wt(h,h.return,H)}else{var y=Fr(h.type,o.memoizedProps);o=o.memoizedState;try{r.componentDidUpdate(y,o,r.__reactInternalSnapshotBeforeUpdate)}catch(H){Wt(h,h.return,H)}}p&64&&Y0(h),p&512&&Vr(h,h.return);break;case 3:if(Rs(r,h),p&64&&(p=h.updateQueue,p!==null)){if(r=null,h.child!==null)switch(h.child.tag){case 27:case 5:r=yl(h.child.stateNode);break;case 1:r=h.child.stateNode}try{Ue(p,r)}catch(H){Wt(h,h.return,H)}}break;case 26:if(Ni){Rs(r,h),p&512&&Vr(h,h.return);break}case 27:case 5:Rs(r,h),o===null&&p&4&&j0(h),p&512&&Vr(h,h.return);break;case 12:Rs(r,h);break;case 13:Rs(r,h),p&4&&tv(r,h);break;case 22:if(y=h.memoizedState!==null||Os,!y){o=o!==null&&o.memoizedState!==null||hn;var C=Os,O=hn;Os=y,(hn=o)&&!O?sr(r,h,(h.subtreeFlags&8772)!==0):Rs(r,h),Os=C,hn=O}p&512&&(h.memoizedProps.mode==="manual"?Vr(h,h.return):vi(h,h.return));break;default:Rs(r,h)}}function ev(r){var o=r.alternate;o!==null&&(r.alternate=null,ev(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&QM(o)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ji(r,o,h){for(h=h.child;h!==null;)Dd(r,o,h),h=h.sibling}function Dd(r,o,h){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(Ml,h)}catch{}switch(h.tag){case 26:if(Ni){hn||vi(h,o),ji(r,o,h),h.memoizedState?t_(h.memoizedState):h.stateNode&&i_(h.stateNode);break}case 27:if(Vn){hn||vi(h,o);var p=_n,y=bi;_n=h.stateNode,ji(r,o,h),$E(h.stateNode),_n=p,bi=y;break}case 5:hn||vi(h,o);case 6:if(Hn){if(p=_n,y=bi,_n=null,ji(r,o,h),_n=p,bi=y,_n!==null)if(bi)try{yE(_n,h.stateNode)}catch(C){Wt(h,o,C)}else try{_E(_n,h.stateNode)}catch(C){Wt(h,o,C)}}else ji(r,o,h);break;case 18:Hn&&_n!==null&&(bi?kE(_n,h.stateNode):GE(_n,h.stateNode));break;case 4:Hn?(p=_n,y=bi,_n=h.stateNode.containerInfo,bi=!0,ji(r,o,h),_n=p,bi=y):(cr&&Q0(h.stateNode,h,Xv()),ji(r,o,h));break;case 0:case 11:case 14:case 15:hn||ir(2,h,o),hn||ir(4,h,o),ji(r,o,h);break;case 1:hn||(vi(h,o),p=h.stateNode,typeof p.componentWillUnmount=="function"&&Z0(h,o,p)),ji(r,o,h);break;case 21:ji(r,o,h);break;case 22:hn||vi(h,o),hn=(p=hn)||h.memoizedState!==null,ji(r,o,h),hn=p;break;default:ji(r,o,h)}}function tv(r,o){if(Ui&&o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{VE(r)}catch(h){Wt(o,o.return,h)}}function EM(r){switch(r.tag){case 13:case 19:var o=r.stateNode;return o===null&&(o=r.stateNode=new d_),o;case 22:return r=r.stateNode,o=r._retryCache,o===null&&(o=r._retryCache=new d_),o;default:throw Error(i(435,r.tag))}}function Pd(r,o){var h=EM(r);o.forEach(function(p){var y=PM.bind(null,r,p);h.has(p)||(h.add(p),p.then(y,y))})}function oi(r,o){var h=o.deletions;if(h!==null)for(var p=0;p<h.length;p++){var y=h[p],C=r,O=o;if(Hn){var H=O;e:for(;H!==null;){switch(H.tag){case 27:case 5:_n=H.stateNode,bi=!1;break e;case 3:_n=H.stateNode.containerInfo,bi=!0;break e;case 4:_n=H.stateNode.containerInfo,bi=!0;break e}H=H.return}if(_n===null)throw Error(i(160));Dd(C,O,y),_n=null,bi=!1}else Dd(C,O,y);C=y.alternate,C!==null&&(C.return=null),y.return=null}if(o.subtreeFlags&13878)for(o=o.child;o!==null;)nv(o,r),o=o.sibling}function nv(r,o){var h=r.alternate,p=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:oi(o,r),_i(r),p&4&&(ir(3,r,r.return),gl(3,r),ir(5,r,r.return));break;case 1:oi(o,r),_i(r),p&512&&(hn||h===null||vi(h,h.return)),p&64&&Os&&(r=r.updateQueue,r!==null&&(p=r.callbacks,p!==null&&(h=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=h===null?p:h.concat(p))));break;case 26:if(Ni){var y=Qi;oi(o,r),_i(r),p&512&&(hn||h===null||vi(h,h.return)),p&4&&(p=h!==null?h.memoizedState:null,o=r.memoizedState,h===null?o===null?r.stateNode===null?r.stateNode=qE(y,r.type,r.memoizedProps,r):n_(y,r.type,r.stateNode):r.stateNode=e_(y,o,r.memoizedProps):p!==o?(p===null?h.stateNode!==null&&i_(h.stateNode):t_(p),o===null?n_(y,r.type,r.stateNode):e_(y,o,r.memoizedProps)):o===null&&r.stateNode!==null&&K0(r,r.memoizedProps,h.memoizedProps));break}case 27:if(Vn&&p&4&&r.alternate===null){y=r.stateNode;var C=r.memoizedProps;try{JE(y),QE(r.type,C,y,r)}catch(Te){Wt(r,r.return,Te)}}case 5:if(oi(o,r),_i(r),p&512&&(hn||h===null||vi(h,h.return)),Hn){if(r.flags&32){o=r.stateNode;try{kv(o)}catch(Te){Wt(r,r.return,Te)}}p&4&&r.stateNode!=null&&(o=r.memoizedProps,K0(r,o,h!==null?h.memoizedProps:o)),p&1024&&(yp=!0)}break;case 6:if(oi(o,r),_i(r),p&4&&Hn){if(r.stateNode===null)throw Error(i(162));p=r.memoizedProps,h=h!==null?h.memoizedProps:p,o=r.stateNode;try{dE(o,h,p)}catch(Te){Wt(r,r.return,Te)}}break;case 3:if(Ni?(ZE(),y=Qi,Qi=rp(o.containerInfo),oi(o,r),Qi=y):oi(o,r),_i(r),p&4){if(Hn&&Ui&&h!==null&&h.memoizedState.isDehydrated)try{HE(o.containerInfo)}catch(Te){Wt(r,r.return,Te)}if(cr){p=o.containerInfo,h=o.pendingChildren;try{qv(p,h)}catch(Te){Wt(r,r.return,Te)}}}yp&&(yp=!1,iv(r));break;case 4:Ni?(h=Qi,Qi=rp(r.stateNode.containerInfo),oi(o,r),_i(r),Qi=h):(oi(o,r),_i(r)),p&4&&cr&&Q0(r.stateNode,r,r.stateNode.pendingChildren);break;case 12:oi(o,r),_i(r);break;case 13:oi(o,r),_i(r),r.child.flags&8192&&r.memoizedState!==null!=(h!==null&&h.memoizedState!==null)&&(Ep=Ki()),p&4&&(p=r.updateQueue,p!==null&&(r.updateQueue=null,Pd(r,p)));break;case 22:p&512&&(hn||h===null||vi(h,h.return)),y=r.memoizedState!==null;var O=h!==null&&h.memoizedState!==null,H=Os,Z=hn;if(Os=H||y,hn=Z||O,oi(o,r),hn=Z,Os=H,_i(r),o=r.stateNode,o._current=r,o._visibility&=-3,o._visibility|=o._pendingVisibility&2,p&8192&&(o._visibility=y?o._visibility&-2:o._visibility|1,y&&(o=Os||hn,h===null||O||o||Fa(r)),Hn&&(r.memoizedProps===null||r.memoizedProps.mode!=="manual"))){e:if(h=null,Hn)for(o=r;;){if(o.tag===5||Ni&&o.tag===26||Vn&&o.tag===27){if(h===null){O=h=o;try{C=O.stateNode,y?xE(C):ME(O.stateNode,O.memoizedProps)}catch(Te){Wt(O,O.return,Te)}}}else if(o.tag===6){if(h===null){O=o;try{var ce=O.stateNode;y?SE(ce):EE(ce,O.memoizedProps)}catch(Te){Wt(O,O.return,Te)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===r)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break e;for(;o.sibling===null;){if(o.return===null||o.return===r)break e;h===o&&(h=null),o=o.return}h===o&&(h=null),o.sibling.return=o.return,o=o.sibling}}p&4&&(p=r.updateQueue,p!==null&&(h=p.retryQueue,h!==null&&(p.retryQueue=null,Pd(r,h))));break;case 19:oi(o,r),_i(r),p&4&&(p=r.updateQueue,p!==null&&(r.updateQueue=null,Pd(r,p)));break;case 21:break;default:oi(o,r),_i(r)}}function _i(r){var o=r.flags;if(o&2){try{if(Hn&&(!Vn||r.tag!==27)){e:{for(var h=r.return;h!==null;){if(J0(h)){var p=h;break e}h=h.return}throw Error(i(160))}switch(p.tag){case 27:if(Vn){var y=p.stateNode,C=wd(r);Qc(r,C,y);break}case 5:var O=p.stateNode;p.flags&32&&(kv(O),p.flags&=-33);var H=wd(r);Qc(r,H,O);break;case 3:case 4:var Z=p.stateNode.containerInfo,ce=wd(r);Rd(r,ce,Z);break;default:throw Error(i(161))}}}catch(Te){Wt(r,r.return,Te)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function iv(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var o=r;iv(o),o.tag===5&&o.flags&1024&&nE(o.stateNode),r=r.sibling}}function Rs(r,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)$0(r,o.alternate,o),o=o.sibling}function Fa(r){for(r=r.child;r!==null;){var o=r;switch(o.tag){case 0:case 11:case 14:case 15:ir(4,o,o.return),Fa(o);break;case 1:vi(o,o.return);var h=o.stateNode;typeof h.componentWillUnmount=="function"&&Z0(o,o.return,h),Fa(o);break;case 26:case 27:case 5:vi(o,o.return),Fa(o);break;case 22:vi(o,o.return),o.memoizedState===null&&Fa(o);break;default:Fa(o)}r=r.sibling}}function sr(r,o,h){for(h=h&&(o.subtreeFlags&8772)!==0,o=o.child;o!==null;){var p=o.alternate,y=r,C=o,O=C.flags;switch(C.tag){case 0:case 11:case 15:sr(y,C,h),gl(4,C);break;case 1:if(sr(y,C,h),p=C,y=p.stateNode,typeof y.componentDidMount=="function")try{y.componentDidMount()}catch(ce){Wt(p,p.return,ce)}if(p=C,y=p.updateQueue,y!==null){var H=p.stateNode;try{var Z=y.shared.hiddenCallbacks;if(Z!==null)for(y.shared.hiddenCallbacks=null,y=0;y<Z.length;y++)k(Z[y],H)}catch(ce){Wt(p,p.return,ce)}}h&&O&64&&Y0(C),Vr(C,C.return);break;case 26:case 27:case 5:sr(y,C,h),h&&p===null&&O&4&&j0(C),Vr(C,C.return);break;case 12:sr(y,C,h);break;case 13:sr(y,C,h),h&&O&4&&tv(y,C);break;case 22:C.memoizedState===null&&sr(y,C,h),Vr(C,C.return);break;default:sr(y,C,h)}o=o.sibling}}function Ud(r,o){var h=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==h&&(r!=null&&r.refCount++,h!=null&&pl(h))}function Nd(r,o){r=null,o.alternate!==null&&(r=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==r&&(o.refCount++,r!=null&&pl(r))}function rr(r,o,h,p){if(o.subtreeFlags&10256)for(o=o.child;o!==null;)sv(r,o,h,p),o=o.sibling}function sv(r,o,h,p){var y=o.flags;switch(o.tag){case 0:case 11:case 15:rr(r,o,h,p),y&2048&&gl(9,o);break;case 3:rr(r,o,h,p),y&2048&&(r=null,o.alternate!==null&&(r=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==r&&(o.refCount++,r!=null&&pl(r)));break;case 12:if(y&2048){rr(r,o,h,p),r=o.stateNode;try{var C=o.memoizedProps,O=C.id,H=C.onPostCommit;typeof H=="function"&&H(O,o.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(Z){Wt(o,o.return,Z)}}else rr(r,o,h,p);break;case 23:break;case 22:C=o.stateNode,o.memoizedState!==null?C._visibility&4?rr(r,o,h,p):vl(r,o):C._visibility&4?rr(r,o,h,p):(C._visibility|=4,Ha(r,o,h,p,(o.subtreeFlags&10256)!==0)),y&2048&&Ud(o.alternate,o);break;case 24:rr(r,o,h,p),y&2048&&Nd(o.alternate,o);break;default:rr(r,o,h,p)}}function Ha(r,o,h,p,y){for(y=y&&(o.subtreeFlags&10256)!==0,o=o.child;o!==null;){var C=r,O=o,H=h,Z=p,ce=O.flags;switch(O.tag){case 0:case 11:case 15:Ha(C,O,H,Z,y),gl(8,O);break;case 23:break;case 22:var Te=O.stateNode;O.memoizedState!==null?Te._visibility&4?Ha(C,O,H,Z,y):vl(C,O):(Te._visibility|=4,Ha(C,O,H,Z,y)),y&&ce&2048&&Ud(O.alternate,O);break;case 24:Ha(C,O,H,Z,y),y&&ce&2048&&Nd(O.alternate,O);break;default:Ha(C,O,H,Z,y)}o=o.sibling}}function vl(r,o){if(o.subtreeFlags&10256)for(o=o.child;o!==null;){var h=r,p=o,y=p.flags;switch(p.tag){case 22:vl(h,p),y&2048&&Ud(p.alternate,p);break;case 24:vl(h,p),y&2048&&Nd(p.alternate,p);break;default:vl(h,p)}o=o.sibling}}function Gr(r){if(r.subtreeFlags&ao)for(r=r.child;r!==null;)rv(r),r=r.sibling}function rv(r){switch(r.tag){case 26:Gr(r),r.flags&ao&&(r.memoizedState!==null?KE(Qi,r.memoizedState,r.memoizedProps):Gv(r.type,r.memoizedProps));break;case 5:Gr(r),r.flags&ao&&Gv(r.type,r.memoizedProps);break;case 3:case 4:if(Ni){var o=Qi;Qi=rp(r.stateNode.containerInfo),Gr(r),Qi=o}else Gr(r);break;case 22:r.memoizedState===null&&(o=r.alternate,o!==null&&o.memoizedState!==null?(o=ao,ao=16777216,Gr(r),ao=o):Gr(r));break;default:Gr(r)}}function av(r){var o=r.alternate;if(o!==null&&(r=o.child,r!==null)){o.child=null;do o=r.sibling,r.sibling=null,r=o;while(r!==null)}}function _l(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var h=0;h<o.length;h++){var p=o[h];Tn=p,lv(p,r)}av(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ov(r),r=r.sibling}function ov(r){switch(r.tag){case 0:case 11:case 15:_l(r),r.flags&2048&&ir(9,r,r.return);break;case 3:_l(r);break;case 12:_l(r);break;case 22:var o=r.stateNode;r.memoizedState!==null&&o._visibility&4&&(r.return===null||r.return.tag!==13)?(o._visibility&=-5,$c(r)):_l(r);break;default:_l(r)}}function $c(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var h=0;h<o.length;h++){var p=o[h];Tn=p,lv(p,r)}av(r)}for(r=r.child;r!==null;){switch(o=r,o.tag){case 0:case 11:case 15:ir(8,o,o.return),$c(o);break;case 22:h=o.stateNode,h._visibility&4&&(h._visibility&=-5,$c(o));break;default:$c(o)}r=r.sibling}}function lv(r,o){for(;Tn!==null;){var h=Tn;switch(h.tag){case 0:case 11:case 15:ir(8,h,o);break;case 23:case 22:if(h.memoizedState!==null&&h.memoizedState.cachePool!==null){var p=h.memoizedState.cachePool.pool;p!=null&&p.refCount++}break;case 24:pl(h.memoizedState.cache)}if(p=h.child,p!==null)p.return=h,Tn=p;else e:for(h=r;Tn!==null;){p=Tn;var y=p.sibling,C=p.return;if(ev(p),p===h){Tn=null;break e}if(y!==null){y.return=C,Tn=y;break e}Tn=C}}}function Ld(r){var o=Hv(r);if(o!=null){if(typeof o.memoizedProps["data-testname"]!="string")throw Error(i(364));return o}if(r=rE(r),r===null)throw Error(i(362));return r.stateNode.current}function Od(r,o){var h=r.tag;switch(o.$$typeof){case _u:if(r.type===o.value)return!0;break;case yu:e:{for(o=o.value,r=[r,0],h=0;h<r.length;){var p=r[h++],y=p.tag,C=r[h++],O=o[C];if(y!==5&&y!==26&&y!==27||!Sl(p)){for(;O!=null&&Od(p,O);)C++,O=o[C];if(C===o.length){o=!0;break e}else for(p=p.child;p!==null;)r.push(p,C),p=p.sibling}}o=!1}return o;case xu:if((h===5||h===26||h===27)&&lE(r.stateNode,o.value))return!0;break;case Mu:if((h===5||h===6||h===26||h===27)&&(r=oE(r),r!==null&&0<=r.indexOf(o.value)))return!0;break;case Su:if((h===5||h===26||h===27)&&(r=r.memoizedProps["data-testname"],typeof r=="string"&&r.toLowerCase()===o.value.toLowerCase()))return!0;break;default:throw Error(i(365))}return!1}function Bd(r){switch(r.$$typeof){case _u:return"<"+(l(r.value)||"Unknown")+">";case yu:return":has("+(Bd(r)||"")+")";case xu:return'[role="'+r.value+'"]';case Mu:return'"'+r.value+'"';case Su:return'[data-testname="'+r.value+'"]';default:throw Error(i(365))}}function cv(r,o){var h=[];r=[r,0];for(var p=0;p<r.length;){var y=r[p++],C=y.tag,O=r[p++],H=o[O];if(C!==5&&C!==26&&C!==27||!Sl(y)){for(;H!=null&&Od(y,H);)O++,H=o[O];if(O===o.length)h.push(y);else for(y=y.child;y!==null;)r.push(y,O),y=y.sibling}}return h}function zd(r,o){if(!xl)throw Error(i(363));r=Ld(r),r=cv(r,o),o=[],r=Array.from(r);for(var h=0;h<r.length;){var p=r[h++],y=p.tag;if(y===5||y===26||y===27)Sl(p)||o.push(p.stateNode);else for(p=p.child;p!==null;)r.push(p),p=p.sibling}return o}function yi(){if((Zt&2)!==0&&Pt!==0)return Pt&-Pt;if(pt.T!==null){var r=$a;return r!==0?r:pe()}return KM()}function uv(){Ii===0&&(Ii=(Pt&536870912)===0||Ot?N():536870912);var r=zi.current;return r!==null&&(r.flags|=32),Ii}function Jn(r,o,h){(r===$t&&en===2||r.cancelPendingCommit!==null)&&(Va(r,0),Ds(r,Pt,Ii,!1)),F(r,h),((Zt&2)===0||r!==$t)&&(r===$t&&((Zt&2)===0&&(ea|=h),fn===4&&Ds(r,Pt,Ii,!1)),me(r))}function hv(r,o,h){if((Zt&6)!==0)throw Error(i(327));var p=!h&&(o&60)===0&&(o&r.expiredLanes)===0||A(r,o),y=p?CM(r,o):Vd(r,o,!0),C=p;do{if(y===0){oo&&!p&&Ds(r,o,0,!1);break}else if(y===6)Ds(r,o,0,!Bs);else{if(h=r.current.alternate,C&&!bM(h)){y=Vd(r,o,!1),C=!1;continue}if(y===2){if(C=o,r.errorRecoveryDisabledLanes&C)var O=0;else O=r.pendingLanes&-536870913,O=O!==0?O:O&536870912?536870912:0;if(O!==0){o=O;e:{var H=r;y=Rl;var Z=Ui&&H.current.memoizedState.isDehydrated;if(Z&&(Va(H,O).flags|=256),O=Vd(H,O,!1),O!==2){if(xp&&!Z){H.errorRecoveryDisabledLanes|=C,ea|=C,y=4;break e}C=gs,gs=y,C!==null&&Id(C)}y=O}if(C=!1,y!==2)continue}}if(y===1){Va(r,0),Ds(r,o,0,!0);break}e:{switch(p=r,y){case 0:case 1:throw Error(i(345));case 4:if((o&4194176)===o){Ds(p,o,Ii,!Bs);break e}break;case 2:gs=null;break;case 3:case 5:break;default:throw Error(i(329))}if(p.finishedWork=h,p.finishedLanes=o,(o&62914560)===o&&(C=Ep+300-Ki(),10<C)){if(Ds(p,o,Ii,!Bs),w(p,0)!==0)break e;p.timeoutHandle=YM(fv.bind(null,p,h,gs,Eu,Mp,o,Ii,ea,lo,Bs,2,-0,0),C);break e}fv(p,h,gs,Eu,Mp,o,Ii,ea,lo,Bs,0,-0,0)}}break}while(!0);me(r)}function Id(r){gs===null?gs=r:gs.push.apply(gs,r)}function fv(r,o,h,p,y,C,O,H,Z,ce,Te,Oe,Fe){var xt=o.subtreeFlags;if((xt&8192||(xt&16785408)===16785408)&&(eE(),rv(o),o=tE(),o!==null)){r.cancelPendingCommit=o(Sv.bind(null,r,h,p,y,O,H,Z,1,Oe,Fe)),Ds(r,C,O,!ce);return}Sv(r,h,p,y,O,H,Z,Te,Oe,Fe)}function bM(r){for(var o=r;;){var h=o.tag;if((h===0||h===11||h===15)&&o.flags&16384&&(h=o.updateQueue,h!==null&&(h=h.stores,h!==null)))for(var p=0;p<h.length;p++){var y=h[p],C=y.getSnapshot;y=y.value;try{if(!Ei(C(),y))return!1}catch{return!1}}if(h=o.child,o.subtreeFlags&16384&&h!==null)h.return=o,o=h;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ds(r,o,h,p){o&=~Sp,o&=~ea,r.suspendedLanes|=o,r.pingedLanes&=~o,p&&(r.warmLanes|=o),p=r.expirationTimes;for(var y=o;0<y;){var C=31-Si(y),O=1<<C;p[C]=-1,y&=~O}h!==0&&G(r,h,o)}function dv(){return(Zt&6)===0?(Be(0),!1):!0}function Fd(){if(At!==null){if(en===0)var r=At.return;else r=At,Ls=Qr=null,ul(r),no=null,Cl=0,r=At;for(;r!==null;)q0(r.alternate,r),r=r.return;At=null}}function Va(r,o){r.finishedWork=null,r.finishedLanes=0;var h=r.timeoutHandle;h!==np&&(r.timeoutHandle=np,ZM(h)),h=r.cancelPendingCommit,h!==null&&(r.cancelPendingCommit=null,h()),Fd(),$t=r,At=h=ar(r.current,null),Pt=o,en=0,Ti=null,Bs=!1,oo=A(r,o),xp=!1,lo=Ii=Sp=ea=pr=fn=0,gs=Rl=null,Mp=!1,(o&8)!==0&&(o|=o&32);var p=r.entangledLanes;if(p!==0)for(r=r.entanglements,p&=o;0<p;){var y=31-Si(p),C=1<<y;o|=r[y],p&=~C}return zs=o,B(),h}function pv(r,o){Tt=null,pt.H=ms,o===Tl?(o=Ye(),en=3):o===mp?(o=Ye(),en=4):en=o===h_?8:o!==null&&typeof o=="object"&&typeof o.then=="function"?6:1,Ti=o,At===null&&(fn=1,Yc(r,le(o,r.current)))}function mv(){var r=zi.current;return r===null?!0:(Pt&4194176)===Pt?ps===null:(Pt&62914560)===Pt||(Pt&536870912)!==0?r===ps:!1}function gv(){var r=pt.H;return pt.H=ms,r===null?ms:r}function vv(){var r=pt.A;return pt.A=db,r}function Hd(){fn=4,Bs||(Pt&4194176)!==Pt&&zi.current!==null||(oo=!0),(pr&134217727)===0&&(ea&134217727)===0||$t===null||Ds($t,Pt,Ii,!1)}function Vd(r,o,h){var p=Zt;Zt|=2;var y=gv(),C=vv();($t!==r||Pt!==o)&&(Eu=null,Va(r,o)),o=!1;var O=fn;e:do try{if(en!==0&&At!==null){var H=At,Z=Ti;switch(en){case 8:Fd(),O=6;break e;case 3:case 2:case 6:zi.current===null&&(o=!0);var ce=en;if(en=0,Ti=null,Ga(r,H,Z,ce),h&&oo){O=0;break e}break;default:ce=en,en=0,Ti=null,Ga(r,H,Z,ce)}}TM(),O=fn;break}catch(Te){pv(r,Te)}while(!0);return o&&r.shellSuspendCounter++,Ls=Qr=null,Zt=p,pt.H=y,pt.A=C,At===null&&($t=null,Pt=0,B()),O}function TM(){for(;At!==null;)_v(At)}function CM(r,o){var h=Zt;Zt|=2;var p=gv(),y=vv();$t!==r||Pt!==o?(Eu=null,Dl=Ki()+500,Va(r,o)):oo=A(r,o);e:do try{if(en!==0&&At!==null){o=At;var C=Ti;t:switch(en){case 1:en=0,Ti=null,Ga(r,o,C,1);break;case 2:if(Ge(C)){en=0,Ti=null,yv(o);break}o=function(){en===2&&$t===r&&(en=7),me(r)},C.then(o,o);break e;case 3:en=7;break e;case 4:en=5;break e;case 7:Ge(C)?(en=0,Ti=null,yv(o)):(en=0,Ti=null,Ga(r,o,C,7));break;case 5:var O=null;switch(At.tag){case 26:O=At.memoizedState;case 5:case 27:var H=At,Z=H.type,ce=H.pendingProps;if(O?s_(O):Vv(Z,ce)){en=0,Ti=null;var Te=H.sibling;if(Te!==null)At=Te;else{var Oe=H.return;Oe!==null?(At=Oe,eu(Oe)):At=null}break t}}en=0,Ti=null,Ga(r,o,C,5);break;case 6:en=0,Ti=null,Ga(r,o,C,6);break;case 8:Fd(),fn=6;break e;default:throw Error(i(462))}}AM();break}catch(Fe){pv(r,Fe)}while(!0);return Ls=Qr=null,pt.H=p,pt.A=y,Zt=h,At!==null?0:($t=null,Pt=0,B(),fn)}function AM(){for(;At!==null&&!nb();)_v(At)}function _v(r){var o=F0(r.alternate,r,zs);r.memoizedProps=r.pendingProps,o===null?eu(r):At=o}function yv(r){var o=r,h=o.alternate;switch(o.tag){case 15:case 0:o=N0(h,o,o.pendingProps,o.type,void 0,Pt);break;case 11:o=N0(h,o,o.pendingProps,o.type.render,o.ref,Pt);break;case 5:ul(o);default:q0(h,o),o=At=Tv(o,zs),o=F0(h,o,zs)}r.memoizedProps=r.pendingProps,o===null?eu(r):At=o}function Ga(r,o,h,p){Ls=Qr=null,ul(o),no=null,Cl=0;var y=o.return;try{if(_M(r,y,o,h,Pt)){fn=1,Yc(r,le(h,r.current)),At=null;return}}catch(C){if(y!==null)throw At=y,C;fn=1,Yc(r,le(h,r.current)),At=null;return}o.flags&32768?(Ot||p===1?r=!0:oo||(Pt&536870912)!==0?r=!1:(Bs=r=!0,(p===2||p===3||p===6)&&(p=zi.current,p!==null&&p.tag===13&&(p.flags|=16384))),xv(o,r)):eu(o)}function eu(r){var o=r;do{if((o.flags&32768)!==0){xv(o,Bs);return}r=o.return;var h=xM(o.alternate,o,zs);if(h!==null){At=h;return}if(o=o.sibling,o!==null){At=o;return}At=o=r}while(o!==null);fn===0&&(fn=5)}function xv(r,o){do{var h=SM(r.alternate,r);if(h!==null){h.flags&=32767,At=h;return}if(h=r.return,h!==null&&(h.flags|=32768,h.subtreeFlags=0,h.deletions=null),!o&&(r=r.sibling,r!==null)){At=r;return}At=r=h}while(r!==null);fn=6,At=null}function Sv(r,o,h,p,y,C,O,H,Z,ce){var Te=pt.T,Oe=Wr();try{li(2),pt.T=null,wM(r,o,h,p,Oe,y,C,O,H,Z,ce)}finally{pt.T=Te,li(Oe)}}function wM(r,o,h,p,y,C,O,H){do kr();while(ta!==null);if((Zt&6)!==0)throw Error(i(327));var Z=r.finishedWork;if(p=r.finishedLanes,Z===null)return null;if(r.finishedWork=null,r.finishedLanes=0,Z===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0,r.cancelPendingCommit=null;var ce=Z.lanes|Z.childLanes;if(ce|=up,j(r,p,ce,C,O,H),r===$t&&(At=$t=null,Pt=0),(Z.subtreeFlags&10256)===0&&(Z.flags&10256)===0||bu||(bu=!0,bp=ce,Tp=h,UM(lp,function(){return kr(),null})),h=(Z.flags&15990)!==0,(Z.subtreeFlags&15990)!==0||h?(h=pt.T,pt.T=null,C=Wr(),li(2),O=Zt,Zt|=4,MM(r,Z),nv(Z,r),WM(r.containerInfo),r.current=Z,$0(r,Z.alternate,Z),ib(),Zt=O,li(C),pt.T=h):r.current=Z,bu?(bu=!1,ta=r,Pl=p):Mv(r,ce),ce=r.pendingLanes,ce===0&&(mr=null),V(Z.stateNode),me(r),o!==null)for(y=r.onRecoverableError,Z=0;Z<o.length;Z++)ce=o[Z],y(ce.value,{componentStack:ce.stack});return(Pl&3)!==0&&kr(),ce=r.pendingLanes,(p&4194218)!==0&&(ce&42)!==0?r===Cp?Ul++:(Ul=0,Cp=r):Ul=0,Be(0),null}function Mv(r,o){(r.pooledCacheLanes&=o)===0&&(o=r.pooledCache,o!=null&&(r.pooledCache=null,pl(o)))}function kr(){if(ta!==null){var r=ta,o=bp;bp=0;var h=ie(Pl),p=32>h?32:h;h=pt.T;var y=Wr();try{if(li(p),pt.T=null,ta===null)var C=!1;else{p=Tp,Tp=null;var O=ta,H=Pl;if(ta=null,Pl=0,(Zt&6)!==0)throw Error(i(331));var Z=Zt;if(Zt|=4,ov(O.current),sv(O,O.current,H,p),Zt=Z,Be(0,!1),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(Ml,O)}catch{}C=!0}return C}finally{li(y),pt.T=h,Mv(r,o)}}return!1}function Ev(r,o,h){o=le(h,o),o=fd(r.stateNode,o,2),r=Ne(r,o,2),r!==null&&(F(r,2),me(r))}function Wt(r,o,h){if(r.tag===3)Ev(r,r,h);else for(;o!==null;){if(o.tag===3){Ev(o,r,h);break}else if(o.tag===1){var p=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(mr===null||!mr.has(p))){r=le(h,r),h=C0(2),p=Ne(o,h,2),p!==null&&(A0(h,p,o,r),F(p,2),me(p));break}}o=o.return}}function Gd(r,o,h){var p=r.pingCache;if(p===null){p=r.pingCache=new pb;var y=new Set;p.set(o,y)}else y=p.get(o),y===void 0&&(y=new Set,p.set(o,y));y.has(h)||(xp=!0,y.add(h),r=RM.bind(null,r,o,h),o.then(r,r))}function RM(r,o,h){var p=r.pingCache;p!==null&&p.delete(o),r.pingedLanes|=r.suspendedLanes&h,r.warmLanes&=~h,$t===r&&(Pt&h)===h&&(fn===4||fn===3&&(Pt&62914560)===Pt&&300>Ki()-Ep?(Zt&2)===0&&Va(r,0):Sp|=h,lo===Pt&&(lo=0)),me(r)}function bv(r,o){o===0&&(o=D()),r=be(r,o),r!==null&&(F(r,o),me(r))}function DM(r){var o=r.memoizedState,h=0;o!==null&&(h=o.retryLane),bv(r,h)}function PM(r,o){var h=0;switch(r.tag){case 13:var p=r.stateNode,y=r.memoizedState;y!==null&&(h=y.retryLane);break;case 19:p=r.stateNode;break;case 22:p=r.stateNode._retryCache;break;default:throw Error(i(314))}p!==null&&p.delete(o),bv(r,h)}function UM(r,o){return ou(r,o)}function NM(r,o,h,p){this.tag=r,this.key=h,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ar(r,o){var h=r.alternate;return h===null?(h=t(r.tag,o,r.key,r.mode),h.elementType=r.elementType,h.type=r.type,h.stateNode=r.stateNode,h.alternate=r,r.alternate=h):(h.pendingProps=o,h.type=r.type,h.flags=0,h.subtreeFlags=0,h.deletions=null),h.flags=r.flags&31457280,h.childLanes=r.childLanes,h.lanes=r.lanes,h.child=r.child,h.memoizedProps=r.memoizedProps,h.memoizedState=r.memoizedState,h.updateQueue=r.updateQueue,o=r.dependencies,h.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},h.sibling=r.sibling,h.index=r.index,h.ref=r.ref,h.refCleanup=r.refCleanup,h}function Tv(r,o){r.flags&=31457282;var h=r.alternate;return h===null?(r.childLanes=0,r.lanes=o,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=h.childLanes,r.lanes=h.lanes,r.child=h.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=h.memoizedProps,r.memoizedState=h.memoizedState,r.updateQueue=h.updateQueue,r.type=h.type,o=h.dependencies,r.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),r}function tu(r,o,h,p,y,C){var O=0;if(p=r,typeof r=="function")kd(r)&&(O=1);else if(typeof r=="string")O=Ni&&Vn?Qv(r,h,Un.current)?26:a_(r)?27:5:Ni?Qv(r,h,Un.current)?26:5:Vn&&a_(r)?27:5;else e:switch(r){case Xa:return Xr(h.children,y,C,o);case Uv:O=8,y|=24;break;case Zd:return r=t(12,h,o,y|2),r.elementType=Zd,r.lanes=C,r;case Kd:return r=t(13,h,o,y),r.elementType=Kd,r.lanes=C,r;case Jd:return r=t(19,h,o,y),r.elementType=Jd,r.lanes=C,r;case Lv:return Cv(h,y,C,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case zM:case or:O=10;break e;case Nv:O=9;break e;case jd:O=11;break e;case Qd:O=14;break e;case lr:O=16,p=null;break e}O=29,h=Error(i(130,r===null?"null":typeof r,"")),p=null}return o=t(O,h,o,y),o.elementType=r,o.type=p,o.lanes=C,o}function Xr(r,o,h,p){return r=t(7,r,p,o),r.lanes=h,r}function Cv(r,o,h,p){r=t(22,r,p,o),r.elementType=Lv,r.lanes=h;var y={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var C=y._current;if(C===null)throw Error(i(456));if((y._pendingVisibility&2)===0){var O=be(C,2);O!==null&&(y._pendingVisibility|=2,Jn(O,C,2))}},attach:function(){var C=y._current;if(C===null)throw Error(i(456));if((y._pendingVisibility&2)!==0){var O=be(C,2);O!==null&&(y._pendingVisibility&=-3,Jn(O,C,2))}}};return r.stateNode=y,r}function Xd(r,o,h){return r=t(6,r,null,o),r.lanes=h,r}function Wd(r,o,h){return o=t(4,r.children!==null?r.children:[],r.key,o),o.lanes=h,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function LM(r,o,h,p,y,C,O,H){this.tag=1,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=np,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=R(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=R(0),this.hiddenUpdates=R(null),this.identifierPrefix=p,this.onUncaughtError=y,this.onCaughtError=C,this.onRecoverableError=O,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Av(r,o,h,p,y,C,O,H,Z,ce,Te,Oe){return r=new LM(r,o,h,O,H,Z,ce,Oe),o=1,C===!0&&(o|=24),C=t(3,null,null,o),r.current=C,C.stateNode=r,o=Ed(),o.refCount++,r.pooledCache=o,o.refCount++,C.memoizedState={element:p,isDehydrated:h,cache:o},Xe(C),r}function wv(r){return r?(r=Ya,r):Ya}function Rv(r){var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=_(o),r=r!==null?S(r):null,r===null?null:yl(r.stateNode)}function Dv(r,o,h,p,y,C){y=wv(y),p.context===null?p.context=y:p.pendingContext=y,p=fe(o),p.payload={element:h},C=C===void 0?null:C,C!==null&&(p.callback=C),h=Ne(r,p,o),h!==null&&(Jn(h,r,o),tt(h,r,o))}function Pv(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var h=r.retryLane;r.retryLane=h!==0&&h<o?h:o}}function qd(r,o){Pv(r,o),(r=r.alternate)&&Pv(r,o)}var Ct={},OM=dg(),xi=LS(),Yd=Object.assign,BM=Symbol.for("react.element"),nu=Symbol.for("react.transitional.element"),ka=Symbol.for("react.portal"),Xa=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),zM=Symbol.for("react.provider"),Nv=Symbol.for("react.consumer"),or=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),IM=Symbol.for("react.memo_cache_sentinel"),Ov=Symbol.iterator,FM=Symbol.for("react.client.reference"),pt=OM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$d,Bv,ep=!1,iu=Array.isArray,HM=e.rendererVersion,VM=e.rendererPackageName,zv=e.extraDevToolsConfig,yl=e.getPublicInstance,GM=e.getRootHostContext,kM=e.getChildHostContext,XM=e.prepareForCommit,WM=e.resetAfterCommit,qM=e.createInstance,tp=e.appendInitialChild,Iv=e.finalizeInitialChildren,su=e.shouldSetTextContent,Fv=e.createTextInstance,YM=e.scheduleTimeout,ZM=e.cancelTimeout,np=e.noTimeout,Ps=e.isPrimaryRenderer;e.warnsIfNotActing;var Hn=e.supportsMutation,cr=e.supportsPersistence,Ui=e.supportsHydration,Hv=e.getInstanceFromNode;e.beforeActiveInstanceBlur,e.afterActiveInstanceBlur;var jM=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var li=e.setCurrentUpdatePriority,Wr=e.getCurrentUpdatePriority,KM=e.resolveUpdatePriority;e.resolveEventType,e.resolveEventTimeStamp;var JM=e.shouldAttemptEagerTransition,QM=e.detachDeletedInstance;e.requestPostPaintCallback;var $M=e.maySuspendCommit,Vv=e.preloadInstance,eE=e.startSuspendingCommit,Gv=e.suspendInstance,tE=e.waitForCommitToBeReady,Wa=e.NotPendingTransition,qr=e.HostTransitionContext,nE=e.resetFormInstance;e.bindToConsole;var iE=e.supportsMicrotasks,sE=e.scheduleMicrotask,xl=e.supportsTestSelectors,rE=e.findFiberRoot,aE=e.getBoundingRect,oE=e.getTextContent,Sl=e.isHiddenSubtree,lE=e.matchAccessibilityRole,cE=e.setFocusIfFocusable,uE=e.setupIntersectionObserver,hE=e.appendChild,fE=e.appendChildToContainer,dE=e.commitTextUpdate,pE=e.commitMount,mE=e.commitUpdate,gE=e.insertBefore,vE=e.insertInContainerBefore,_E=e.removeChild,yE=e.removeChildFromContainer,kv=e.resetTextContent,xE=e.hideInstance,SE=e.hideTextInstance,ME=e.unhideInstance,EE=e.unhideTextInstance,bE=e.clearContainer,TE=e.cloneInstance,Xv=e.createContainerChildSet,Wv=e.appendChildToContainerChildSet,CE=e.finalizeContainerChildren,qv=e.replaceContainerChildren,Yv=e.cloneHiddenInstance,Zv=e.cloneHiddenTextInstance,ip=e.isSuspenseInstancePending,sp=e.isSuspenseInstanceFallback,AE=e.getSuspenseInstanceFallbackErrorDetails,wE=e.registerSuspenseInstanceRetry,RE=e.canHydrateFormStateMarker,DE=e.isFormStateMarkerMatching,jv=e.getNextHydratableSibling,Kv=e.getFirstHydratableChild,PE=e.getFirstHydratableChildWithinContainer,UE=e.getFirstHydratableChildWithinSuspenseInstance,NE=e.canHydrateInstance,LE=e.canHydrateTextInstance,OE=e.canHydrateSuspenseInstance,BE=e.hydrateInstance,zE=e.hydrateTextInstance,IE=e.hydrateSuspenseInstance,FE=e.getNextHydratableInstanceAfterSuspenseInstance,HE=e.commitHydratedContainer,VE=e.commitHydratedSuspenseInstance,GE=e.clearSuspenseBoundary,kE=e.clearSuspenseBoundaryFromContainer,Jv=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var XE=e.validateHydratableInstance,WE=e.validateHydratableTextInstance,Ni=e.supportsResources,Qv=e.isHostHoistableType,rp=e.getHoistableRoot,$v=e.getResource,e_=e.acquireResource,t_=e.releaseResource,qE=e.hydrateHoistable,n_=e.mountHoistable,i_=e.unmountHoistable,YE=e.createHoistableInstance,ZE=e.prepareToCommitHoistables,jE=e.mayResourceSuspendCommit,s_=e.preloadResource,KE=e.suspendResource,Vn=e.supportsSingletons,r_=e.resolveSingletonInstance,JE=e.clearSingleton,QE=e.acquireSingletonInstance,$E=e.releaseSingletonInstance,a_=e.isHostSingletonType,ap=[],qa=-1,Ya={},Si=Math.clz32?Math.clz32:E,eb=Math.log,tb=Math.LN2,ru=128,au=4194304,ou=xi.unstable_scheduleCallback,op=xi.unstable_cancelCallback,nb=xi.unstable_shouldYield,ib=xi.unstable_requestPaint,Ki=xi.unstable_now,o_=xi.unstable_ImmediatePriority,sb=xi.unstable_UserBlockingPriority,lp=xi.unstable_NormalPriority,rb=xi.unstable_IdlePriority,ab=xi.log,ob=xi.unstable_setDisableYieldValue,Ml=null,Mi=null,Ei=typeof Object.is=="function"?Object.is:W,l_=new WeakMap,Za=[],ja=0,lu=null,cu=0,Li=[],Oi=0,Yr=null,Us=1,Ns="",Un=M(null),El=M(null),ur=M(null),uu=M(null),Qn=null,Gn=null,Ot=!1,Ji=null,ds=!1,cp=Error(i(519)),Bi=[],Ka=0,up=0,hu=null,Ja=null,hp=!1,fu=!1,fp=!1,Qa=0,bl=null,dp=0,$a=0,eo=null,hr=!1,pp=!1,lb=Object.prototype.hasOwnProperty,Tl=Error(i(460)),mp=Error(i(474)),du={then:function(){}},to=null,no=null,Cl=0,Zr=Di(!0),c_=Di(!1),io=M(null),pu=M(0),zi=M(null),ps=null,Sn=M(0),fr=0,Tt=null,Yt=null,vn=null,mu=!1,so=!1,jr=!1,gu=0,Al=0,ro=null,cb=0,gp=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}},ms={readContext:Fn,use:ne,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt};ms.useCacheRefresh=Jt,ms.useMemoCache=Jt,ms.useHostTransitionStatus=Jt,ms.useFormState=Jt,ms.useActionState=Jt,ms.useOptimistic=Jt;var Kr={readContext:Fn,use:ne,useCallback:function(r,o){return L().memoizedState=[r,o===void 0?null:o],r},useContext:Fn,useEffect:l0,useImperativeHandle:function(r,o,h){h=h!=null?h.concat([r]):null,Xc(4194308,4,h0.bind(null,o,r),h)},useLayoutEffect:function(r,o){return Xc(4194308,4,r,o)},useInsertionEffect:function(r,o){Xc(4,2,r,o)},useMemo:function(r,o){var h=L();o=o===void 0?null:o;var p=r();if(jr){$(!0);try{r()}finally{$(!1)}}return h.memoizedState=[p,o],p},useReducer:function(r,o,h){var p=L();if(h!==void 0){var y=h(o);if(jr){$(!0);try{h(o)}finally{$(!1)}}}else y=o;return p.memoizedState=p.baseState=y,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:y},p.queue=r,r=r.dispatch=vM.bind(null,Tt,r),[p.memoizedState,r]},useRef:function(r){var o=L();return r={current:r},o.memoizedState=r},useState:function(r){r=Xt(r);var o=r.queue,h=x0.bind(null,Tt,o);return o.dispatch=h,[r.memoizedState,h]},useDebugValue:od,useDeferredValue:function(r,o){var h=L();return ld(h,r,o)},useTransition:function(){var r=Xt(!1);return r=g0.bind(null,Tt,r.queue,!0,!1),L().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,o,h){var p=Tt,y=L();if(Ot){if(h===void 0)throw Error(i(407));h=h()}else{if(h=o(),$t===null)throw Error(i(349));(Pt&60)!==0||lt(p,o,h)}y.memoizedState=h;var C={value:h,getSnapshot:o};return y.queue=C,l0(bt.bind(null,p,C,r),[r]),p.flags|=2048,hs(9,Je.bind(null,p,C,h,o),{destroy:void 0},null),h},useId:function(){var r=L(),o=$t.identifierPrefix;if(Ot){var h=Ns,p=Us;h=(p&~(1<<32-Si(p)-1)).toString(32)+h,o=":"+o+"R"+h,h=gu++,0<h&&(o+="H"+h.toString(32)),o+=":"}else h=cb++,o=":"+o+"r"+h.toString(32)+":";return r.memoizedState=o},useCacheRefresh:function(){return L().memoizedState=gM.bind(null,Tt)}};Kr.useMemoCache=q,Kr.useHostTransitionStatus=cd,Kr.useFormState=Kt,Kr.useActionState=Kt,Kr.useOptimistic=function(r){var o=L();o.memoizedState=o.baseState=r;var h={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=h,o=ud.bind(null,Tt,!0,h),h.dispatch=o,[r,o]};var dr={readContext:Fn,use:ne,useCallback:d0,useContext:Fn,useEffect:ad,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Re,useRef:fs,useState:function(){return Re(ye)},useDebugValue:od,useDeferredValue:function(r,o){var h=X();return m0(h,Yt.memoizedState,r,o)},useTransition:function(){var r=Re(ye)[0],o=X().memoizedState;return[typeof r=="boolean"?r:ee(r),o]},useSyncExternalStore:rt,useId:_0};dr.useCacheRefresh=y0,dr.useMemoCache=q,dr.useHostTransitionStatus=cd,dr.useFormState=jn,dr.useActionState=jn,dr.useOptimistic=function(r,o){var h=X();return Gt(h,Yt,r,o)};var Jr={readContext:Fn,use:ne,useCallback:d0,useContext:Fn,useEffect:ad,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Ve,useRef:fs,useState:function(){return Ve(ye)},useDebugValue:od,useDeferredValue:function(r,o){var h=X();return Yt===null?ld(h,r,o):m0(h,Yt.memoizedState,r,o)},useTransition:function(){var r=Ve(ye)[0],o=X().memoizedState;return[typeof r=="boolean"?r:ee(r),o]},useSyncExternalStore:rt,useId:_0};Jr.useCacheRefresh=y0,Jr.useMemoCache=q,Jr.useHostTransitionStatus=cd,Jr.useFormState=Dn,Jr.useActionState=Dn,Jr.useOptimistic=function(r,o){var h=X();return Yt!==null?Gt(h,Yt,r,o):(h.baseState=r,[r,h.queue.dispatch])};var vp={isMounted:function(r){return(r=r._reactInternals)?m(r)===r:!1},enqueueSetState:function(r,o,h){r=r._reactInternals;var p=yi(),y=fe(p);y.payload=o,h!=null&&(y.callback=h),o=Ne(r,y,p),o!==null&&(Jn(o,r,p),tt(o,r,p))},enqueueReplaceState:function(r,o,h){r=r._reactInternals;var p=yi(),y=fe(p);y.tag=1,y.payload=o,h!=null&&(y.callback=h),o=Ne(r,y,p),o!==null&&(Jn(o,r,p),tt(o,r,p))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var h=yi(),p=fe(h);p.tag=2,o!=null&&(p.callback=o),o=Ne(r,p,h),o!==null&&(Jn(o,r,h),tt(o,r,h))}},u_=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},h_=Error(i(461)),bn=!1,_p={dehydrated:null,treeContext:null,retryLane:0},vu=M(null),Qr=null,Ls=null,ub=typeof AbortController<"u"?AbortController:function(){var r=[],o=this.signal={aborted:!1,addEventListener:function(h,p){r.push(p)}};this.abort=function(){o.aborted=!0,r.forEach(function(h){return h()})}},hb=xi.unstable_scheduleCallback,fb=xi.unstable_NormalPriority,un={$$typeof:or,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},f_=pt.S;pt.S=function(r,o){typeof o=="object"&&o!==null&&typeof o.then=="function"&&ae(r,o),f_!==null&&f_(r,o)};var $r=M(null),Os=!1,hn=!1,yp=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Tn=null,p_=!1,_n=null,bi=!1,Qi=null,ao=8192,db={getCacheForType:function(r){var o=Fn(un),h=o.data.get(r);return h===void 0&&(h=r(),o.data.set(r,h)),h}},_u=0,yu=1,xu=2,Su=3,Mu=4;if(typeof Symbol=="function"&&Symbol.for){var wl=Symbol.for;_u=wl("selector.component"),yu=wl("selector.has_pseudo_class"),xu=wl("selector.role"),Su=wl("selector.test_id"),Mu=wl("selector.text")}var pb=typeof WeakMap=="function"?WeakMap:Map,Zt=0,$t=null,At=null,Pt=0,en=0,Ti=null,Bs=!1,oo=!1,xp=!1,zs=0,fn=0,pr=0,ea=0,Sp=0,Ii=0,lo=0,Rl=null,gs=null,Mp=!1,Ep=0,Dl=1/0,Eu=null,mr=null,bu=!1,ta=null,Pl=0,bp=0,Tp=null,Ul=0,Cp=null;return Ct.attemptContinuousHydration=function(r){if(r.tag===13){var o=be(r,67108864);o!==null&&Jn(o,r,67108864),qd(r,67108864)}},Ct.attemptHydrationAtCurrentPriority=function(r){if(r.tag===13){var o=yi(),h=be(r,o);h!==null&&Jn(h,r,o),qd(r,o)}},Ct.attemptSynchronousHydration=function(r){switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=b(r.pendingLanes);if(o!==0){for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var h=1<<31-Si(o);r.entanglements[1]|=h,o&=~h}me(r),(Zt&6)===0&&(Dl=Ki()+500,Be(0))}}break;case 13:o=be(r,2),o!==null&&Jn(o,r,2),dv(),qd(r,2)}},Ct.batchedUpdates=function(r,o){return r(o)},Ct.createComponentSelector=function(r){return{$$typeof:_u,value:r}},Ct.createContainer=function(r,o,h,p,y,C,O,H,Z,ce){return Av(r,o,!1,null,h,p,C,O,H,Z,ce,null)},Ct.createHasPseudoClassSelector=function(r){return{$$typeof:yu,value:r}},Ct.createHydrationContainer=function(r,o,h,p,y,C,O,H,Z,ce,Te,Oe,Fe){return r=Av(h,p,!0,r,y,C,H,Z,ce,Te,Oe,Fe),r.context=wv(null),h=r.current,p=yi(),y=fe(p),y.callback=o??null,Ne(h,y,p),r.current.lanes=p,F(r,p),me(r),r},Ct.createPortal=function(r,o,h){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ka,key:p==null?null:""+p,children:r,containerInfo:o,implementation:h}},Ct.createRoleSelector=function(r){return{$$typeof:xu,value:r}},Ct.createTestNameSelector=function(r){return{$$typeof:Su,value:r}},Ct.createTextSelector=function(r){return{$$typeof:Mu,value:r}},Ct.defaultOnCaughtError=function(r){console.error(r)},Ct.defaultOnRecoverableError=function(r){u_(r)},Ct.defaultOnUncaughtError=function(r){u_(r)},Ct.deferredUpdates=function(r){var o=pt.T,h=Wr();try{return li(32),pt.T=null,r()}finally{li(h),pt.T=o}},Ct.discreteUpdates=function(r,o,h,p,y){var C=pt.T,O=Wr();try{return li(2),pt.T=null,r(o,h,p,y)}finally{li(O),pt.T=C,Zt===0&&(Dl=Ki()+500)}},Ct.findAllNodes=zd,Ct.findBoundingRects=function(r,o){if(!xl)throw Error(i(363));o=zd(r,o),r=[];for(var h=0;h<o.length;h++)r.push(aE(o[h]));for(o=r.length-1;0<o;o--){h=r[o];for(var p=h.x,y=p+h.width,C=h.y,O=C+h.height,H=o-1;0<=H;H--)if(o!==H){var Z=r[H],ce=Z.x,Te=ce+Z.width,Oe=Z.y,Fe=Oe+Z.height;if(p>=ce&&C>=Oe&&y<=Te&&O<=Fe){r.splice(o,1);break}else if(p!==ce||h.width!==Z.width||Fe<C||Oe>O){if(!(C!==Oe||h.height!==Z.height||Te<p||ce>y)){ce>p&&(Z.width+=ce-p,Z.x=p),Te<y&&(Z.width=y-ce),r.splice(o,1);break}}else{Oe>C&&(Z.height+=Oe-C,Z.y=C),Fe<O&&(Z.height=O-Oe),r.splice(o,1);break}}}return r},Ct.findHostInstance=Rv,Ct.findHostInstanceWithNoPortals=function(r){return r=_(r),r=r!==null?T(r):null,r===null?null:yl(r.stateNode)},Ct.findHostInstanceWithWarning=function(r){return Rv(r)},Ct.flushPassiveEffects=kr,Ct.flushSyncFromReconciler=function(r){var o=Zt;Zt|=1;var h=pt.T,p=Wr();try{if(li(2),pt.T=null,r)return r()}finally{li(p),pt.T=h,Zt=o,(Zt&6)===0&&Be(0)}},Ct.flushSyncWork=dv,Ct.focusWithin=function(r,o){if(!xl)throw Error(i(363));for(r=Ld(r),o=cv(r,o),o=Array.from(o),r=0;r<o.length;){var h=o[r++],p=h.tag;if(!Sl(h)){if((p===5||p===26||p===27)&&cE(h.stateNode))return!0;for(h=h.child;h!==null;)o.push(h),h=h.sibling}}return!1},Ct.getFindAllNodesFailureDescription=function(r,o){if(!xl)throw Error(i(363));var h=0,p=[];r=[Ld(r),0];for(var y=0;y<r.length;){var C=r[y++],O=C.tag,H=r[y++],Z=o[H];if((O!==5&&O!==26&&O!==27||!Sl(C))&&(Od(C,Z)&&(p.push(Bd(Z)),H++,H>h&&(h=H)),H<o.length))for(C=C.child;C!==null;)r.push(C,H),C=C.sibling}if(h<o.length){for(r=[];h<o.length;h++)r.push(Bd(o[h]));return`findAllNodes was able to match part of the selector:
  `+(p.join(" > ")+`

No matching component was found for:
  `)+r.join(" > ")}return null},Ct.getPublicRootInstance=function(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 27:case 5:return yl(r.child.stateNode);default:return r.child.stateNode}},Ct.injectIntoDevTools=function(){var r={bundleType:0,version:HM,rendererPackageName:VM,currentDispatcherRef:pt,findFiberByHostInstance:Hv,reconcilerVersion:"19.0.0"};if(zv!==null&&(r.rendererConfig=zv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")r=!1;else{var o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(o.isDisabled||!o.supportsFiber)r=!0;else{try{Ml=o.inject(r),Mi=o}catch{}r=!!o.checkDCE}}return r},Ct.isAlreadyRendering=function(){return!1},Ct.observeVisibleRects=function(r,o,h,p){if(!xl)throw Error(i(363));r=zd(r,o);var y=uE(r,h,p).disconnect;return{disconnect:function(){y()}}},Ct.shouldError=function(){return null},Ct.shouldSuspend=function(){return!1},Ct.startHostTransition=function(r,o,h,p){if(r.tag!==5)throw Error(i(476));var y=v0(r).queue;g0(r,y,o,Wa,h===null?n:function(){var C=v0(r).next.queue;return hl(r,C,{},yi()),h(p)})},Ct.updateContainer=function(r,o,h,p){var y=o.current,C=yi();return Dv(y,C,r,o,h,p),C},Ct.updateContainerSync=function(r,o,h,p){return o.tag===0&&kr(),Dv(o.current,2,r,o,h,p),2},Ct},s.exports.default=s.exports,Object.defineProperty(s.exports,"__esModule",{value:!0})}(Em)),Em.exports}var ox;function bP(){return ox||(ox=1,Mm.exports=EP()),Mm.exports}var TP=bP();const CP=Dx(TP);var lx=LS();const AP=s=>typeof s=="object"&&typeof s.then=="function",Ta=[];function OS(s,e,t=(n,i)=>n===i){if(s===e)return!0;if(!s||!e)return!1;const n=s.length;if(e.length!==n)return!1;for(let i=0;i<n;i++)if(!t(s[i],e[i]))return!1;return!0}function BS(s,e=null,t=!1,n={}){e===null&&(e=[s]);for(const a of Ta)if(OS(e,a.keys,a.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(a,"error"))throw a.error;if(Object.prototype.hasOwnProperty.call(a,"response"))return n.lifespan&&n.lifespan>0&&(a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(a.remove,n.lifespan)),a.response;if(!t)throw a.promise}const i={keys:e,equal:n.equal,remove:()=>{const a=Ta.indexOf(i);a!==-1&&Ta.splice(a,1)},promise:(AP(s)?s:s(...e)).then(a=>{i.response=a,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(a=>i.error=a)};if(Ta.push(i),!t)throw i.promise}const wP=(s,e,t)=>BS(s,e,!1,t),RP=(s,e,t)=>void BS(s,e,!0,t),DP=s=>{if(s===void 0||s.length===0)Ta.splice(0,Ta.length);else{const e=Ta.find(t=>OS(s,t.keys,t.equal));e&&e.remove()}};function n0(s,e,t){if(!s)return;if(t(s)===!0)return s;let n=e?s.return:s.child;for(;n;){const i=n0(n,e,t);if(i)return i;n=e?null:n.sibling}}function zS(s){try{return Object.defineProperties(s,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return s}}const i0=zS(Ke.createContext(null));let IS=class extends Ke.Component{render(){return Ke.createElement(i0.Provider,{value:this._reactInternals},this.props.children)}};function FS(){const s=Ke.useContext(i0);if(s===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=Ke.useId();return Ke.useMemo(()=>{for(const t of[s,s?.alternate]){if(!t)continue;const n=n0(t,!1,i=>{let a=i.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(n)return n}},[s,e])}const PP=Symbol.for("react.context"),UP=s=>s!==null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===PP;function NP(){const s=FS(),[e]=Ke.useState(()=>new Map);e.clear();let t=s;for(;t;){const n=t.type;UP(n)&&n!==i0&&!e.has(n)&&e.set(n,Ke.use(zS(n))),t=t.return}return e}function LP(){const s=NP();return Ke.useMemo(()=>Array.from(s.keys()).reduce((e,t)=>n=>Ke.createElement(e,null,Ke.createElement(t.Provider,{...n,value:s.get(t)})),e=>Ke.createElement(IS,{...e})),[s])}function HS(s){let e=s.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const VS=s=>s&&s.isOrthographicCamera,OP=s=>s&&s.hasOwnProperty("current"),BP=s=>s!=null&&(typeof s=="string"||typeof s=="number"||s.isColor),Hc=((s,e)=>typeof window<"u"&&(((s=window.document)==null?void 0:s.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?Ke.useLayoutEffect:Ke.useEffect;function GS(s){const e=Ke.useRef(s);return Hc(()=>void(e.current=s),[s]),e}function zP(){const s=FS(),e=LP();return Ke.useMemo(()=>({children:t})=>{const i=!!n0(s,!0,a=>a.type===Ke.StrictMode)?Ke.StrictMode:Ke.Fragment;return ft.jsx(i,{children:ft.jsx(e,{children:t})})},[s,e])}function IP({set:s}){return Hc(()=>(s(new Promise(()=>null)),()=>s(!1)),[s]),null}const FP=(s=>(s=class extends Ke.Component{constructor(...t){super(...t),this.state={error:!1}}componentDidCatch(t){this.props.set(t)}render(){return this.state.error?null:this.props.children}},s.getDerivedStateFromError=()=>({error:!0}),s))();function kS(s){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(s)?Math.min(Math.max(s[0],t),s[1]):s}function Do(s){var e;return(e=s.__r3f)==null?void 0:e.root.getState()}const rn={obj:s=>s===Object(s)&&!rn.arr(s)&&typeof s!="function",fun:s=>typeof s=="function",str:s=>typeof s=="string",num:s=>typeof s=="number",boo:s=>typeof s=="boolean",und:s=>s===void 0,nul:s=>s===null,arr:s=>Array.isArray(s),equ(s,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof s!=typeof e||!!s!=!!e)return!1;if(rn.str(s)||rn.num(s)||rn.boo(s))return s===e;const a=rn.obj(s);if(a&&n==="reference")return s===e;const l=rn.arr(s);if(l&&t==="reference")return s===e;if((l||a)&&s===e)return!0;let c;for(c in s)if(!(c in e))return!1;if(a&&t==="shallow"&&n==="shallow"){for(c in i?e:s)if(!rn.equ(s[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:s)if(s[c]!==e[c])return!1;if(rn.und(c)){if(l&&s.length===0&&e.length===0||a&&Object.keys(s).length===0&&Object.keys(e).length===0)return!0;if(s!==e)return!1}return!0}};function HP(s){const e={nodes:{},materials:{},meshes:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function VP(s){s.type!=="Scene"&&(s.dispose==null||s.dispose());for(const e in s){const t=s[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}const XS=["children","key","ref"];function GP(s){const e={};for(const t in s)XS.includes(t)||(e[t]=s[t]);return e}function pf(s,e,t,n){const i=s;let a=i?.__r3f;return a||(a={root:e,type:t,parent:null,children:[],props:GP(n),object:i,eventCount:0,handlers:{},isHidden:!1},i&&(i.__r3f=a)),a}function Rc(s,e){let t=s[e];if(!e.includes("-"))return{root:s,key:e,target:t};t=s;for(const i of e.split("-")){var n;e=i,s=t,t=(n=t)==null?void 0:n[e]}return{root:s,key:e,target:t}}const cx=/-\d+$/;function mf(s,e){if(rn.str(e.props.attach)){if(cx.test(e.props.attach)){const i=e.props.attach.replace(cx,""),{root:a,key:l}=Rc(s.object,i);Array.isArray(a[l])||(a[l]=[])}const{root:t,key:n}=Rc(s.object,e.props.attach);e.previousAttach=t[n],t[n]=e.object}else rn.fun(e.props.attach)&&(e.previousAttach=e.props.attach(s.object,e.object))}function gf(s,e){if(rn.str(e.props.attach)){const{root:t,key:n}=Rc(s.object,e.props.attach),i=e.previousAttach;i===void 0?delete t[n]:t[n]=i}else e.previousAttach==null||e.previousAttach(s.object,e.object);delete e.previousAttach}const sg=[...XS,"args","dispose","attach","object","onUpdate","dispose"],ux=new Map;function kP(s){let e=ux.get(s.constructor);try{e||(e=new s.constructor,ux.set(s.constructor,e))}catch{}return e}function XP(s,e){const t={};for(const n in e)if(!sg.includes(n)&&!rn.equ(e[n],s.props[n])){t[n]=e[n];for(const i in e)i.startsWith(`${n}-`)&&(t[i]=e[i])}for(const n in s.props){if(sg.includes(n)||e.hasOwnProperty(n))continue;const{root:i,key:a}=Rc(s.object,n);if(i.constructor&&i.constructor.length===0){const l=kP(i);rn.und(l)||(t[a]=l[a])}else t[a]=0}return t}const WP=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],qP=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function wr(s,e){var t;const n=s.__r3f,i=n&&HS(n).getState(),a=n?.eventCount;for(const c in e){let u=e[c];if(sg.includes(c))continue;if(n&&qP.test(c)){typeof u=="function"?n.handlers[c]=u:delete n.handlers[c],n.eventCount=Object.keys(n.handlers).length;continue}if(u===void 0)continue;let{root:f,key:d,target:m}=Rc(s,c);if(m instanceof jo&&u instanceof jo)m.mask=u.mask;else if(m instanceof ze&&BP(u))m.set(u);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof m.copy=="function"&&u!=null&&u.constructor&&m.constructor===u.constructor)m.copy(u);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&Array.isArray(u))typeof m.fromArray=="function"?m.fromArray(u):m.set(...u);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof u=="number")typeof m.setScalar=="function"?m.setScalar(u):m.set(u);else{var l;f[d]=u,i&&!i.linear&&WP.includes(d)&&(l=f[d])!=null&&l.isTexture&&f[d].format===Ln&&f[d].type===Wi&&(f[d].colorSpace=qn)}}if(n!=null&&n.parent&&i!=null&&i.internal&&(t=n.object)!=null&&t.isObject3D&&a!==n.eventCount){const c=n.object,u=i.internal.interaction.indexOf(c);u>-1&&i.internal.interaction.splice(u,1),n.eventCount&&c.raycast!==null&&i.internal.interaction.push(c)}return n&&n.props.attach===void 0&&(n.object.isBufferGeometry?n.props.attach="geometry":n.object.isMaterial&&(n.props.attach="material")),n&&rl(n),s}function rl(s){var e;if(!s.parent)return;s.props.onUpdate==null||s.props.onUpdate(s.object);const t=(e=s.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function YP(s,e){s.manual||(VS(s)?(s.left=e.width/-2,s.right=e.width/2,s.top=e.height/2,s.bottom=e.height/-2):s.aspect=e.width/e.height,s.updateProjectionMatrix())}const ti=s=>s?.isObject3D;function gh(s){return(s.eventObject||s.object).uuid+"/"+s.index+s.instanceId}function WS(s,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(s.delete(n),i.target.releasePointerCapture(n)))}function ZP(s,e){const{internal:t}=s.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{WS(t.capturedMap,e,n,i)})}function jP(s){function e(u){const{internal:f}=s.getState(),d=u.offsetX-f.initialClick[0],m=u.offsetY-f.initialClick[1];return Math.round(Math.sqrt(d*d+m*m))}function t(u){return u.filter(f=>["Move","Over","Enter","Out","Leave"].some(d=>{var m;return(m=f.__r3f)==null?void 0:m.handlers["onPointer"+d]}))}function n(u,f){const d=s.getState(),m=new Set,v=[],_=f?f(d.internal.interaction):d.internal.interaction;for(let g=0;g<_.length;g++){const x=Do(_[g]);x&&(x.raycaster.camera=void 0)}d.previousRoot||d.events.compute==null||d.events.compute(u,d);function S(g){const x=Do(g);if(!x||!x.events.enabled||x.raycaster.camera===null)return[];if(x.raycaster.camera===void 0){var E;x.events.compute==null||x.events.compute(u,x,(E=x.previousRoot)==null?void 0:E.getState()),x.raycaster.camera===void 0&&(x.raycaster.camera=null)}return x.raycaster.camera?x.raycaster.intersectObject(g,!0):[]}let T=_.flatMap(S).sort((g,x)=>{const E=Do(g.object),b=Do(x.object);return!E||!b?g.distance-x.distance:b.events.priority-E.events.priority||g.distance-x.distance}).filter(g=>{const x=gh(g);return m.has(x)?!1:(m.add(x),!0)});d.events.filter&&(T=d.events.filter(T,d));for(const g of T){let x=g.object;for(;x;){var M;(M=x.__r3f)!=null&&M.eventCount&&v.push({...g,eventObject:x}),x=x.parent}}if("pointerId"in u&&d.internal.capturedMap.has(u.pointerId))for(let g of d.internal.capturedMap.get(u.pointerId).values())m.has(gh(g.intersection))||v.push(g.intersection);return v}function i(u,f,d,m){if(u.length){const v={stopped:!1};for(const _ of u){let S=Do(_.object);if(S||_.object.traverseAncestors(T=>{const M=Do(T);if(M)return S=M,!1}),S){const{raycaster:T,pointer:M,camera:g,internal:x}=S,E=new z(M.x,M.y,0).unproject(g),b=D=>{var R,F;return(R=(F=x.capturedMap.get(D))==null?void 0:F.has(_.eventObject))!=null?R:!1},w=D=>{const R={intersection:_,target:f.target};x.capturedMap.has(D)?x.capturedMap.get(D).set(_.eventObject,R):x.capturedMap.set(D,new Map([[_.eventObject,R]])),f.target.setPointerCapture(D)},A=D=>{const R=x.capturedMap.get(D);R&&WS(x.capturedMap,_.eventObject,R,D)};let U={};for(let D in f){let R=f[D];typeof R!="function"&&(U[D]=R)}let N={..._,...U,pointer:M,intersections:u,stopped:v.stopped,delta:d,unprojectedPoint:E,ray:T.ray,camera:g,stopPropagation(){const D="pointerId"in f&&x.capturedMap.get(f.pointerId);if((!D||D.has(_.eventObject))&&(N.stopped=v.stopped=!0,x.hovered.size&&Array.from(x.hovered.values()).find(R=>R.eventObject===_.eventObject))){const R=u.slice(0,u.indexOf(_));a([...R,_])}},target:{hasPointerCapture:b,setPointerCapture:w,releasePointerCapture:A},currentTarget:{hasPointerCapture:b,setPointerCapture:w,releasePointerCapture:A},nativeEvent:f};if(m(N),v.stopped===!0)break}}}return u}function a(u){const{internal:f}=s.getState();for(const d of f.hovered.values())if(!u.length||!u.find(m=>m.object===d.object&&m.index===d.index&&m.instanceId===d.instanceId)){const v=d.eventObject.__r3f;if(f.hovered.delete(gh(d)),v!=null&&v.eventCount){const _=v.handlers,S={...d,intersections:u};_.onPointerOut==null||_.onPointerOut(S),_.onPointerLeave==null||_.onPointerLeave(S)}}}function l(u,f){for(let d=0;d<f.length;d++){const m=f[d].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>a([]);case"onLostPointerCapture":return f=>{const{internal:d}=s.getState();"pointerId"in f&&d.capturedMap.has(f.pointerId)&&requestAnimationFrame(()=>{d.capturedMap.has(f.pointerId)&&(d.capturedMap.delete(f.pointerId),a([]))})}}return function(d){const{onPointerMissed:m,internal:v}=s.getState();v.lastEvent.current=d;const _=u==="onPointerMove",S=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",M=n(d,_?t:void 0),g=S?e(d):0;u==="onPointerDown"&&(v.initialClick=[d.offsetX,d.offsetY],v.initialHits=M.map(E=>E.eventObject)),S&&!M.length&&g<=2&&(l(d,v.interaction),m&&m(d)),_&&a(M);function x(E){const b=E.eventObject,w=b.__r3f;if(!(w!=null&&w.eventCount))return;const A=w.handlers;if(_){if(A.onPointerOver||A.onPointerEnter||A.onPointerOut||A.onPointerLeave){const U=gh(E),N=v.hovered.get(U);N?N.stopped&&E.stopPropagation():(v.hovered.set(U,E),A.onPointerOver==null||A.onPointerOver(E),A.onPointerEnter==null||A.onPointerEnter(E))}A.onPointerMove==null||A.onPointerMove(E)}else{const U=A[u];U?(!S||v.initialHits.includes(b))&&(l(d,v.interaction.filter(N=>!v.initialHits.includes(N))),U(E)):S&&v.initialHits.includes(b)&&l(d,v.interaction.filter(N=>!v.initialHits.includes(N)))}}i(M,d,g,x)}}return{handlePointer:c}}const hx=s=>!!(s!=null&&s.render),qS=Ke.createContext(null),KP=(s,e)=>{const t=SP((c,u)=>{const f=new z,d=new z,m=new z;function v(g=u().camera,x=d,E=u().size){const{width:b,height:w,top:A,left:U}=E,N=b/w;x.isVector3?m.copy(x):m.set(...x);const D=g.getWorldPosition(f).distanceTo(m);if(VS(g))return{width:b/g.zoom,height:w/g.zoom,top:A,left:U,factor:1,distance:D,aspect:N};{const R=g.fov*Math.PI/180,F=2*Math.tan(R/2)*D,j=F*(b/w);return{width:j,height:F,top:A,left:U,factor:b/j,distance:D,aspect:N}}}let _;const S=g=>c(x=>({performance:{...x.performance,current:g}})),T=new de;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(g=1)=>s(u(),g),advance:(g,x)=>e(g,x,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new $f,pointer:T,mouse:T,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const g=u();_&&clearTimeout(_),g.performance.current!==g.performance.min&&S(g.performance.min),_=setTimeout(()=>S(u().performance.max),g.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:v},setEvents:g=>c(x=>({...x,events:{...x.events,...g}})),setSize:(g,x,E=0,b=0)=>{const w=u().camera,A={width:g,height:x,top:E,left:b};c(U=>({size:A,viewport:{...U.viewport,...v(w,d,A)}}))},setDpr:g=>c(x=>{const E=kS(g);return{viewport:{...x.viewport,dpr:E,initialDpr:x.viewport.initialDpr||E}}}),setFrameloop:(g="always")=>{const x=u().clock;x.stop(),x.elapsedTime=0,g!=="never"&&(x.start(),x.elapsedTime=0),c(()=>({frameloop:g}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:Ke.createRef(),active:!1,frames:0,priority:0,subscribe:(g,x,E)=>{const b=u().internal;return b.priority=b.priority+(x>0?1:0),b.subscribers.push({ref:g,priority:x,store:E}),b.subscribers=b.subscribers.sort((w,A)=>w.priority-A.priority),()=>{const w=u().internal;w!=null&&w.subscribers&&(w.priority=w.priority-(x>0?1:0),w.subscribers=w.subscribers.filter(A=>A.ref!==g))}}}}}),n=t.getState();let i=n.size,a=n.viewport.dpr,l=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:f,gl:d,set:m}=t.getState();if(u.width!==i.width||u.height!==i.height||f.dpr!==a){i=u,a=f.dpr,YP(c,u),f.dpr>0&&d.setPixelRatio(f.dpr);const v=typeof HTMLCanvasElement<"u"&&d.domElement instanceof HTMLCanvasElement;d.setSize(u.width,u.height,v)}c!==l&&(l=c,m(v=>({viewport:{...v.viewport,...v.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>s(c)),t};function YS(){const s=Ke.useContext(qS);if(!s)throw new Error("R3F: Hooks can only be used within the Canvas component!");return s}function vf(s=t=>t,e){return YS()(s,e)}function s0(s,e=0){const t=YS(),n=t.getState().internal.subscribe,i=GS(s);return Hc(()=>n(i,e,t),[e,n,t]),null}const fx=new WeakMap,JP=s=>{var e;return typeof s=="function"&&(s==null||(e=s.prototype)==null?void 0:e.constructor)===s};function ZS(s,e){return function(t,...n){let i;return JP(t)?(i=fx.get(t),i||(i=new t,fx.set(t,i))):i=t,s&&s(i),Promise.all(n.map(a=>new Promise((l,c)=>i.load(a,u=>{ti(u?.scene)&&Object.assign(u,HP(u.scene)),l(u)},e,u=>c(new Error(`Could not load ${a}: ${u?.message}`))))))}}function r0(s,e,t,n){const i=Array.isArray(e)?e:[e],a=wP(ZS(t,n),[s,...i],{equal:rn.equ});return Array.isArray(e)?a:a[0]}r0.preload=function(s,e,t){const n=Array.isArray(e)?e:[e];return RP(ZS(t),[s,...n])};r0.clear=function(s,e){const t=Array.isArray(e)?e:[e];return DP([s,...t])};function QP(s){const e=CP(s);return e.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ke.version}),e}const jS=0,$o={},$P=/^three(?=[A-Z])/,id=s=>`${s[0].toUpperCase()}${s.slice(1)}`;let eU=0;const tU=s=>typeof s=="function";function KS(s){if(tU(s)){const e=`${eU++}`;return $o[e]=s,e}else Object.assign($o,s)}function JS(s,e){const t=id(s),n=$o[t];if(s!=="primitive"&&!n)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(s==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function nU(s,e,t){var n;return s=id(s)in $o?s:s.replace($P,""),JS(s,e),s==="primitive"&&(n=e.object)!=null&&n.__r3f&&delete e.object.__r3f,pf(e.object,t,s,e)}function iU(s){if(!s.isHidden){var e;s.props.attach&&(e=s.parent)!=null&&e.object?gf(s.parent,s):ti(s.object)&&(s.object.visible=!1),s.isHidden=!0,rl(s)}}function QS(s){if(s.isHidden){var e;s.props.attach&&(e=s.parent)!=null&&e.object?mf(s.parent,s):ti(s.object)&&s.props.visible!==!1&&(s.object.visible=!0),s.isHidden=!1,rl(s)}}function a0(s,e,t){const n=e.root.getState();if(!(!s.parent&&s.object!==n.scene)){if(!e.object){var i,a;const l=$o[id(e.type)];e.object=(i=e.props.object)!=null?i:new l(...(a=e.props.args)!=null?a:[]),e.object.__r3f=e}if(wr(e.object,e.props),e.props.attach)mf(s,e);else if(ti(e.object)&&ti(s.object)){const l=s.object.children.indexOf(t?.object);if(t&&l!==-1){const c=s.object.children.indexOf(e.object);if(c!==-1){s.object.children.splice(c,1);const u=c<l?l-1:l;s.object.children.splice(u,0,e.object)}else e.object.parent=s.object,s.object.children.splice(l,0,e.object),e.object.dispatchEvent({type:"added"}),s.object.dispatchEvent({type:"childadded",child:e.object})}else s.object.add(e.object)}for(const l of e.children)a0(e,l);rl(e)}}function Cm(s,e){e&&(e.parent=s,s.children.push(e),a0(s,e))}function dx(s,e,t){if(!e||!t)return;e.parent=s;const n=s.children.indexOf(t);n!==-1?s.children.splice(n,0,e):s.children.push(e),a0(s,e,t)}function $S(s){if(typeof s.dispose=="function"){const e=()=>{try{s.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():lx.unstable_scheduleCallback(lx.unstable_IdlePriority,e)}}function rg(s,e,t){if(!e)return;e.parent=null;const n=s.children.indexOf(e);n!==-1&&s.children.splice(n,1),e.props.attach?gf(s,e):ti(e.object)&&ti(s.object)&&(s.object.remove(e.object),ZP(HS(e),e.object));const i=e.props.dispose!==null&&t!==!1;for(let a=e.children.length-1;a>=0;a--){const l=e.children[a];rg(e,l,i)}e.children.length=0,delete e.object.__r3f,i&&e.type!=="primitive"&&e.object.type!=="Scene"&&$S(e.object),t===void 0&&rl(e)}function sU(s,e){for(const t of[s,s.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();const n=t.ref(e);typeof n=="function"&&(t.refCleanup=n)}else t.ref&&(t.ref.current=e)}const Ch=[];function rU(){for(const[t]of Ch){const n=t.parent;if(n){t.props.attach?gf(n,t):ti(t.object)&&ti(n.object)&&n.object.remove(t.object);for(const i of t.children)i.props.attach?gf(t,i):ti(i.object)&&ti(t.object)&&t.object.remove(i.object)}t.isHidden&&QS(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&$S(t.object)}for(const[t,n,i]of Ch){t.props=n;const a=t.parent;if(a){var s,e;const l=$o[id(t.type)];t.object=(s=t.props.object)!=null?s:new l(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,sU(i,t.object),wr(t.object,t.props),t.props.attach?mf(a,t):ti(t.object)&&ti(a.object)&&a.object.add(t.object);for(const c of t.children)c.props.attach?mf(t,c):ti(c.object)&&ti(t.object)&&t.object.add(c.object);rl(t)}}Ch.length=0}const Am=()=>{},px={};let vh=jS;const aU=0,oU=4,ag=QP({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:nU,removeChild:rg,appendChild:Cm,appendInitialChild:Cm,insertBefore:dx,appendChildToContainer(s,e){const t=s.getState().scene.__r3f;!e||!t||Cm(t,e)},removeChildFromContainer(s,e){const t=s.getState().scene.__r3f;!e||!t||rg(t,e)},insertInContainerBefore(s,e,t){const n=s.getState().scene.__r3f;!e||!t||!n||dx(n,e,t)},getRootHostContext:()=>px,getChildHostContext:()=>px,commitUpdate(s,e,t,n,i){var a,l,c;JS(e,n);let u=!1;if((s.type==="primitive"&&t.object!==n.object||((a=n.args)==null?void 0:a.length)!==((l=t.args)==null?void 0:l.length)||(c=n.args)!=null&&c.some((d,m)=>{var v;return d!==((v=t.args)==null?void 0:v[m])}))&&(u=!0),u)Ch.push([s,{...n},i]);else{const d=XP(s,n);Object.keys(d).length&&(Object.assign(s.props,d),wr(s.object,d))}(i.sibling===null||(i.flags&oU)===aU)&&rU()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:s=>s?.object,prepareForCommit:()=>null,preparePortalMount:s=>pf(s.getState().scene,s,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:iU,unhideInstance:QS,createTextInstance:Am,hideTextInstance:Am,unhideTextInstance:Am,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:Ke.createContext(null),setCurrentUpdatePriority(s){vh=s},getCurrentUpdatePriority(){return vh},resolveUpdatePriority(){var s;if(vh!==jS)return vh;switch(typeof window<"u"&&((s=window.event)==null?void 0:s.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Th.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Th.ContinuousEventPriority;default:return Th.DefaultEventPriority}},resetFormInstance(){}}),Ua=new Map,Po={objects:"shallow",strict:!1};function lU(s,e){if(!e&&typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&s.parentElement){const{width:t,height:n,top:i,left:a}=s.parentElement.getBoundingClientRect();return{width:t,height:n,top:i,left:a}}else if(!e&&typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas)return{width:s.width,height:s.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function cU(s){const e=Ua.get(s),t=e?.fiber,n=e?.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,a=n||KP(cg,gx),l=t||ag.createContainer(a,Th.ConcurrentRoot,null,!1,null,"",i,i,i,null);e||Ua.set(s,{fiber:l,store:a});let c,u,f=!1,d=null;return{async configure(m={}){let v;d=new Promise(xe=>v=xe);let{gl:_,size:S,scene:T,events:M,onCreated:g,shadows:x=!1,linear:E=!1,flat:b=!1,legacy:w=!1,orthographic:A=!1,frameloop:U="always",dpr:N=[1,2],performance:D,raycaster:R,camera:F,onPointerMissed:j}=m,G=a.getState(),J=G.gl;if(!G.gl){const xe={canvas:s,powerPreference:"high-performance",antialias:!0,alpha:!0},Le=typeof _=="function"?await _(xe):_;hx(Le)?J=Le:J=new PS({...xe,..._}),G.set({gl:J})}let ie=G.raycaster;ie||G.set({raycaster:ie=new ES});const{params:V,...$}=R||{};if(rn.equ($,ie,Po)||wr(ie,{...$}),rn.equ(V,ie.params,Po)||wr(ie,{params:{...ie.params,...V}}),!G.camera||G.camera===u&&!rn.equ(u,F,Po)){u=F;const xe=F?.isCamera,Le=xe?F:A?new zr(0,0,0,0,.1,1e3):new wn(75,0,.1,1e3);xe||(Le.position.z=5,F&&(wr(Le,F),Le.manual||("aspect"in F||"left"in F||"right"in F||"bottom"in F||"top"in F)&&(Le.manual=!0,Le.updateProjectionMatrix())),!G.camera&&!(F!=null&&F.rotation)&&Le.lookAt(0,0,0)),G.set({camera:Le}),ie.camera=Le}if(!G.scene){let xe;T!=null&&T.isScene?(xe=T,pf(xe,a,"",{})):(xe=new Rg,pf(xe,a,"",{}),T&&wr(xe,T)),G.set({scene:xe})}M&&!G.events.handlers&&G.set({events:M(a)});const W=lU(s,S);if(rn.equ(W,G.size,Po)||G.setSize(W.width,W.height,W.top,W.left),N&&G.viewport.dpr!==kS(N)&&G.setDpr(N),G.frameloop!==U&&G.setFrameloop(U),G.onPointerMissed||G.set({onPointerMissed:j}),D&&!rn.equ(D,G.performance,Po)&&G.set(xe=>({performance:{...xe.performance,...D}})),!G.xr){var le;const xe=(te,Se)=>{const qe=a.getState();qe.frameloop!=="never"&&gx(te,!0,qe,Se)},Le=()=>{const te=a.getState();te.gl.xr.enabled=te.gl.xr.isPresenting,te.gl.xr.setAnimationLoop(te.gl.xr.isPresenting?xe:null),te.gl.xr.isPresenting||cg(te)},Qe={connect(){const te=a.getState().gl;te.xr.addEventListener("sessionstart",Le),te.xr.addEventListener("sessionend",Le)},disconnect(){const te=a.getState().gl;te.xr.removeEventListener("sessionstart",Le),te.xr.removeEventListener("sessionend",Le)}};typeof((le=J.xr)==null?void 0:le.addEventListener)=="function"&&Qe.connect(),G.set({xr:Qe})}if(J.shadowMap){const xe=J.shadowMap.enabled,Le=J.shadowMap.type;if(J.shadowMap.enabled=!!x,rn.boo(x))J.shadowMap.type=nc;else if(rn.str(x)){var ge;const Qe={basic:Lx,percentage:Sf,soft:nc,variance:is};J.shadowMap.type=(ge=Qe[x])!=null?ge:nc}else rn.obj(x)&&Object.assign(J.shadowMap,x);(xe!==J.shadowMap.enabled||Le!==J.shadowMap.type)&&(J.shadowMap.needsUpdate=!0)}return Rt.enabled=!w,f||(J.outputColorSpace=E?Pr:qn,J.toneMapping=b?bs:pg),G.legacy!==w&&G.set(()=>({legacy:w})),G.linear!==E&&G.set(()=>({linear:E})),G.flat!==b&&G.set(()=>({flat:b})),_&&!rn.fun(_)&&!hx(_)&&!rn.equ(_,J,Po)&&wr(J,_),c=g,f=!0,v(),this},render(m){return!f&&!d&&this.configure(),d.then(()=>{ag.updateContainer(ft.jsx(uU,{store:a,children:m,onCreated:c,rootElement:s}),l,null,()=>{})}),a},unmount(){eM(s)}}}function uU({store:s,children:e,onCreated:t,rootElement:n}){return Hc(()=>{const i=s.getState();i.set(a=>({internal:{...a.internal,active:!0}})),t&&t(i),s.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),ft.jsx(qS.Provider,{value:s,children:e})}function eM(s,e){const t=Ua.get(s),n=t?.fiber;if(n){const i=t?.store.getState();i&&(i.internal.active=!1),ag.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var a,l,c,u;i.events.disconnect==null||i.events.disconnect(),(a=i.gl)==null||(l=a.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),VP(i.scene),Ua.delete(s)}catch{}},500)})}}const hU=new Set,fU=new Set,dU=new Set;function wm(s,e){if(s.size)for(const{callback:t}of s.values())t(e)}function fc(s,e){switch(s){case"before":return wm(hU,e);case"after":return wm(fU,e);case"tail":return wm(dU,e)}}let Rm,Dm;function og(s,e,t){let n=e.clock.getDelta();e.frameloop==="never"&&typeof s=="number"&&(n=s-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=s),Rm=e.internal.subscribers;for(let i=0;i<Rm.length;i++)Dm=Rm[i],Dm.ref.current(Dm.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}let _f=!1,lg=!1,Pm,mx,Uo;function tM(s){mx=requestAnimationFrame(tM),_f=!0,Pm=0,fc("before",s),lg=!0;for(const t of Ua.values()){var e;Uo=t.store.getState(),Uo.internal.active&&(Uo.frameloop==="always"||Uo.internal.frames>0)&&!((e=Uo.gl.xr)!=null&&e.isPresenting)&&(Pm+=og(s,Uo))}if(lg=!1,fc("after",s),Pm===0)return fc("tail",s),_f=!1,cancelAnimationFrame(mx)}function cg(s,e=1){var t;if(!s)return Ua.forEach(n=>cg(n.store.getState(),e));(t=s.gl.xr)!=null&&t.isPresenting||!s.internal.active||s.frameloop==="never"||(e>1?s.internal.frames=Math.min(60,s.internal.frames+e):lg?s.internal.frames=2:s.internal.frames=1,_f||(_f=!0,requestAnimationFrame(tM)))}function gx(s,e=!0,t,n){if(e&&fc("before",s),t)og(s,t,n);else for(const i of Ua.values())og(s,i.store.getState());e&&fc("after",s)}const Um={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function pU(s){const{handlePointer:e}=jP(s);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Um).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=s.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{const{set:n,events:i}=s.getState();if(i.disconnect==null||i.disconnect(),n(a=>({events:{...a.events,connected:t}})),i.handlers)for(const a in i.handlers){const l=i.handlers[a],[c,u]=Um[a];t.addEventListener(c,l,{passive:u})}},disconnect:()=>{const{set:t,events:n}=s.getState();if(n.connected){if(n.handlers)for(const i in n.handlers){const a=n.handlers[i],[l]=Um[i];n.connected.removeEventListener(l,a)}t(i=>({events:{...i.events,connected:void 0}}))}}}}function vx(s,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>s(...n),e)}}function mU({debounce:s,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[a,l]=Ke.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=Ke.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a,orientationHandler:null}),u=s?typeof s=="number"?s:s.scroll:null,f=s?typeof s=="number"?s:s.resize:null,d=Ke.useRef(!1);Ke.useEffect(()=>(d.current=!0,()=>void(d.current=!1)));const[m,v,_]=Ke.useMemo(()=>{const g=()=>{if(!c.current.element)return;const{left:x,top:E,width:b,height:w,bottom:A,right:U,x:N,y:D}=c.current.element.getBoundingClientRect(),R={left:x,top:E,width:b,height:w,bottom:A,right:U,x:N,y:D};c.current.element instanceof HTMLElement&&n&&(R.height=c.current.element.offsetHeight,R.width=c.current.element.offsetWidth),Object.freeze(R),d.current&&!yU(c.current.lastBounds,R)&&l(c.current.lastBounds=R)};return[g,f?vx(g,f):g,u?vx(g,u):g]},[l,n,u,f]);function S(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(g=>g.removeEventListener("scroll",_,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function T(){c.current.element&&(c.current.resizeObserver=new i(_),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(g=>g.addEventListener("scroll",_,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{_()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const M=g=>{!g||g===c.current.element||(S(),c.current.element=g,c.current.scrollContainers=nM(g),T())};return vU(_,!!e),gU(v),Ke.useEffect(()=>{S(),T()},[e,_,v]),Ke.useEffect(()=>S,[]),[M,a,m]}function gU(s){Ke.useEffect(()=>{const e=s;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[s])}function vU(s,e){Ke.useEffect(()=>{if(e){const t=s;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[s,e])}function nM(s){const e=[];if(!s||s===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(s);return[t,n,i].some(a=>a==="auto"||a==="scroll")&&e.push(s),[...e,...nM(s.parentElement)]}const _U=["x","y","top","bottom","left","right","width","height"],yU=(s,e)=>_U.every(t=>s[t]===e[t]);function xU({ref:s,children:e,fallback:t,resize:n,style:i,gl:a,events:l=pU,eventSource:c,eventPrefix:u,shadows:f,linear:d,flat:m,legacy:v,orthographic:_,frameloop:S,dpr:T,performance:M,raycaster:g,camera:x,scene:E,onPointerMissed:b,onCreated:w,...A}){Ke.useMemo(()=>KS(US),[]);const U=zP(),[N,D]=mU({scroll:!0,debounce:{scroll:50,resize:0},...n}),R=Ke.useRef(null),F=Ke.useRef(null);Ke.useImperativeHandle(s,()=>R.current);const j=GS(b),[G,J]=Ke.useState(!1),[ie,V]=Ke.useState(!1);if(G)throw G;if(ie)throw ie;const $=Ke.useRef(null);Hc(()=>{const le=R.current;if(D.width>0&&D.height>0&&le){$.current||($.current=cU(le));async function ge(){await $.current.configure({gl:a,scene:E,events:l,shadows:f,linear:d,flat:m,legacy:v,orthographic:_,frameloop:S,dpr:T,performance:M,raycaster:g,camera:x,size:D,onPointerMissed:(...xe)=>j.current==null?void 0:j.current(...xe),onCreated:xe=>{xe.events.connect==null||xe.events.connect(c?OP(c)?c.current:c:F.current),u&&xe.setEvents({compute:(Le,Qe)=>{const te=Le[u+"X"],Se=Le[u+"Y"];Qe.pointer.set(te/Qe.size.width*2-1,-(Se/Qe.size.height)*2+1),Qe.raycaster.setFromCamera(Qe.pointer,Qe.camera)}}),w?.(xe)}}),$.current.render(ft.jsx(U,{children:ft.jsx(FP,{set:V,children:ft.jsx(Ke.Suspense,{fallback:ft.jsx(IP,{set:J}),children:e??null})})}))}ge()}}),Ke.useEffect(()=>{const le=R.current;if(le)return()=>eM(le)},[]);const W=c?"none":"auto";return ft.jsx("div",{ref:F,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:W,...i},...A,children:ft.jsx("div",{ref:N,style:{width:"100%",height:"100%"},children:ft.jsx("canvas",{ref:R,style:{display:"block"},children:t})})})}function SU(s){return ft.jsx(IS,{children:ft.jsx(xU,{...s})})}function MU({disable:s=!1}){let{gl:e,scene:t,camera:n,size:i}=vf(),a=Ke.useMemo(()=>{let l=new zD(e);l.addPass(new ID(t,n));let c={shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1,disable:s},u=new lP(i.width,i.height,c);return l.addPass(u),l},[e,t,n,i,s]);return Ke.useEffect(()=>a?.setSize(i.width,i.height),[a,i]),s0((l,c)=>(e.autoClear=!0,void a.render(c)),1),ft.jsx(ft.Fragment,{})}var EU=class extends lS{constructor(e){super(e),this.type=Ms}parse(e){let t=function(g,x){switch(g){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},n=`
`,i=function(g,x,E){x=x||1024;let b=g.pos,w=-1,A=0,U="",N=String.fromCharCode.apply(null,new Uint16Array(g.subarray(b,b+128)));for(;0>(w=N.indexOf(n))&&A<x&&b<g.byteLength;)U+=N,A+=N.length,b+=128,N+=String.fromCharCode.apply(null,new Uint16Array(g.subarray(b,b+128)));return-1<w?(g.pos+=A+w+1,U+N.slice(0,w)):!1},a=function(g){let x=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,A=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,D;for((g.pos>=g.byteLength||!(N=i(g)))&&t(1,"no header found"),(D=N.match(x))||t(3,"bad initial token"),U.valid|=1,U.programtype=D[1],U.string+=N+`
`;N=i(g),N!==!1;){if(U.string+=N+`
`,N.charAt(0)==="#"){U.comments+=N+`
`;continue}if((D=N.match(E))&&(U.gamma=parseFloat(D[1])),(D=N.match(b))&&(U.exposure=parseFloat(D[1])),(D=N.match(w))&&(U.valid|=2,U.format=D[1]),(D=N.match(A))&&(U.valid|=4,U.height=parseInt(D[1],10),U.width=parseInt(D[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||t(3,"missing format specifier"),U.valid&4||t(3,"missing image size specifier"),U},l=function(g,x,E){let b=x;if(b<8||b>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);b!==(g[2]<<8|g[3])&&t(3,"wrong scanline width");let w=new Uint8Array(4*x*E);w.length||t(4,"unable to allocate buffer space");let A=0,U=0,N=4*b,D=new Uint8Array(4),R=new Uint8Array(N),F=E;for(;F>0&&U<g.byteLength;){U+4>g.byteLength&&t(1),D[0]=g[U++],D[1]=g[U++],D[2]=g[U++],D[3]=g[U++],(D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=b)&&t(3,"bad rgbe scanline format");let j=0,G;for(;j<N&&U<g.byteLength;){G=g[U++];let ie=G>128;if(ie&&(G-=128),(G===0||j+G>N)&&t(3,"bad scanline data"),ie){let V=g[U++];for(let $=0;$<G;$++)R[j++]=V}else R.set(g.subarray(U,U+G),j),j+=G,U+=G}let J=b;for(let ie=0;ie<J;ie++){let V=0;w[A]=R[ie+V],V+=b,w[A+1]=R[ie+V],V+=b,w[A+2]=R[ie+V],V+=b,w[A+3]=R[ie+V],A+=4}F--}return w},c=function(g,x,E,b){let w=g[x+3],A=Math.pow(2,w-128)/255;E[b+0]=g[x+0]*A,E[b+1]=g[x+1]*A,E[b+2]=g[x+2]*A,E[b+3]=1},u=function(g,x,E,b){let w=g[x+3],A=Math.pow(2,w-128)/255;E[b+0]=$l.toHalfFloat(Math.min(g[x+0]*A,65504)),E[b+1]=$l.toHalfFloat(Math.min(g[x+1]*A,65504)),E[b+2]=$l.toHalfFloat(Math.min(g[x+2]*A,65504)),E[b+3]=$l.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;let d=a(f),m=d.width,v=d.height,_=l(f.subarray(f.pos),m,v),S,T,M;switch(this.type){case Nn:M=_.length/4;let g=new Float32Array(M*4);for(let E=0;E<M;E++)c(_,E*4,g,E*4);S=g,T=Nn;break;case Ms:M=_.length/4;let x=new Uint16Array(M*4);for(let E=0;E<M;E++)u(_,E*4,x,E*4);S=x,T=Ms;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:m,height:v,data:S,header:d.string,gamma:d.gamma,exposure:d.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function a(l,c){switch(l.type){case Nn:case Ms:"colorSpace"in l?l.colorSpace="srgb-linear":l.encoding=3e3,l.minFilter=cn,l.magFilter=cn,l.generateMipmaps=!1,l.flipY=!0;break}t&&t(l,c)}return super.load(e,a,n,i)}};function Nm(s,{path:e}){return r0(EU,s,t=>t.setPath(e))}function bU(s=!0,e=.1){let[t,n]=Ke.useState(!0),i=Ke.useRef(null);return Ke.useEffect(()=>{if(!s)return;let a=new IntersectionObserver(([l])=>{n(l.isIntersecting)},{threshold:e});return i.current&&a.observe(i.current),()=>a.disconnect()},[s,e]),{isInView:t,containerRef:i}}var TU=(s,e)=>({dpr:s,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}}),CU=1,AU=14,_x={zoom:1,distance:14},yx={zoom:5,distance:14},wU="https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/",RU=Object.create,sd=Object.defineProperty,DU=Object.defineProperties,PU=Object.getOwnPropertyDescriptor,UU=Object.getOwnPropertyDescriptors,NU=Object.getOwnPropertyNames,yf=Object.getOwnPropertySymbols,LU=Object.getPrototypeOf,o0=Object.prototype.hasOwnProperty,iM=Object.prototype.propertyIsEnumerable,xx=(s,e,t)=>e in s?sd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Gi=(s,e)=>{for(var t in e||(e={}))o0.call(e,t)&&xx(s,t,e[t]);if(yf)for(var t of yf(e))iM.call(e,t)&&xx(s,t,e[t]);return s},OU=(s,e)=>DU(s,UU(e)),ug=(s,e)=>{var t={};for(var n in s)o0.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&yf)for(var n of yf(s))e.indexOf(n)<0&&iM.call(s,n)&&(t[n]=s[n]);return t},Vc=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports),er=(s,e)=>{for(var t in e)sd(s,t,{get:e[t],enumerable:!0})},BU=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of NU(e))!o0.call(s,i)&&i!==t&&sd(s,i,{get:()=>e[i],enumerable:!(n=PU(e,i))||n.enumerable});return s},zU=(s,e,t)=>(t=s!=null?RU(LU(s)):{},BU(!s||!s.__esModule?sd(t,"default",{value:s,enumerable:!0}):t,s)),sM=Ke.createContext({}),IU=()=>Ke.useContext(sM);function FU({children:s,style:e={},pixelDensity:t=1,fov:n=45,pointerEvents:i,className:a,envBasePath:l,lazyLoad:c=!0,threshold:u=.1}){let{isInView:f,containerRef:d}=bU(c,u),m=Ke.useMemo(()=>({envBasePath:l}),[l]);return HU(),ft.jsx("div",{ref:d,style:Gi({width:"100%",height:"100%"},e),children:(!c||f)&&ft.jsx(sM.Provider,{value:m,children:ft.jsx(SU,OU(Gi({id:"gradientCanvas",style:{pointerEvents:i},resize:{offsetSize:!0},className:a},TU(t,n)),{children:s}))})})}function HU(){Ke.useEffect(()=>{mt.uv2_pars_vertex="",mt.uv2_vertex="",mt.uv2_pars_fragment="",mt.encodings_fragment=""},[])}var VU=s=>s.current&&s.current.isScene,GU=s=>VU(s)?s.current:s;function kU({background:s=!1,envPreset:e}){let{envBasePath:t}=IU(),n=t||wU,i=Nm("city.hdr",{path:n}),a=Nm("dawn.hdr",{path:n}),l=Nm("lobby.hdr",{path:n}),c={city:i,dawn:a,lobby:l}[e],u=vf(d=>d.scene);Px.useLayoutEffect(()=>{if(c){let d=GU(u);d.background;let m=d.environment;return s!=="only"&&(d.environment=c),s&&(d.background=c),()=>{s!=="only"&&(d.environment=m),s&&(d.background="black")}}},[u,c,s]);let f=c;return f.mapping=ko,null}function XU({lightType:s,brightness:e,envPreset:t}){return ft.jsxs(ft.Fragment,{children:[s==="3d"&&ft.jsx("ambientLight",{intensity:(e||1)*Math.PI}),s==="env"&&ft.jsx(Ke.Suspense,{fallback:ft.jsx(WU,{}),children:ft.jsx(kU,{envPreset:t,background:!1,loadingCallback:()=>{}})})]})}function WU(){return ft.jsx("ambientLight",{intensity:.4})}function qU({type:s}){return ft.jsxs(ft.Fragment,{children:[s==="plane"&&ft.jsx("planeGeometry",{args:[10,10,1,192]}),s==="sphere"&&ft.jsx("icosahedronGeometry",{args:[1,192/3]}),s==="waterPlane"&&ft.jsx("planeGeometry",{args:[10,10,192,192]})]})}function YU(s){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function ZU(s){let e=s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3])}:null}function Lm(s){if(s.startsWith("#"))return YU(s);if(s.startsWith("rgb"))return ZU(s);throw new Error("Invalid color format")}function Ws(s=0){return s/255}var jU=({animate:s,uniforms:e,vertexShader:t,fragmentShader:n,onInit:i})=>{let a=Ke.useMemo(()=>{let l=Object.entries(e),c=e.colors,u=Lm(c[0]),f=Lm(c[1]),d=Lm(c[2]),m={uC1r:{value:Ws(u?.r)},uC1g:{value:Ws(u?.g)},uC1b:{value:Ws(u?.b)},uC2r:{value:Ws(f?.r)},uC2g:{value:Ws(f?.g)},uC2b:{value:Ws(f?.b)},uC3r:{value:Ws(d?.r)},uC3g:{value:Ws(d?.g)},uC3b:{value:Ws(d?.b)}},v=l.reduce((S,[T,M])=>{let g=Uc.clone({[T]:{value:M}});return Gi(Gi({},S),g)},{}),_=new Vg({userData:v,metalness:.2,side:rs,onBeforeCompile:S=>{S.uniforms=Gi(Gi(Gi({},S.uniforms),v),m),S.vertexShader=t,S.fragmentShader=n}});return l.forEach(([S])=>Object.defineProperty(_,S,{get:()=>_.uniforms[S].value,set:T=>_.uniforms[S].value=T})),i&&i(_),_},[e,t,n,i]);return Ke.useEffect(()=>()=>{a.dispose()},[a]),s0(({clock:l})=>{s==="on"&&a.userData.uTime&&(a.userData.uTime.value=l.getElapsedTime())}),ft.jsx("primitive",{attach:"material",object:a})},rM={};er(rM,{fragment:()=>KU,vertex:()=>JU});var KU=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,JU=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,aM={};er(aM,{fragment:()=>QU,vertex:()=>$U});var QU=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,$U=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,oM={};er(oM,{fragment:()=>eN,vertex:()=>tN});var eN=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,tN=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,lM={};er(lM,{plane:()=>rM,sphere:()=>aM,waterPlane:()=>oM});var cM={};er(cM,{fragment:()=>nN,vertex:()=>iN});var nN=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;
void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,iN=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,uM={};er(uM,{fragment:()=>sN,vertex:()=>rN});var sN=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,rN=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,hM={};er(hM,{fragment:()=>aN,vertex:()=>oN});var aN=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,oN=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,fM={};er(fM,{plane:()=>hM,sphere:()=>cM,waterPlane:()=>uM});var dM={};er(dM,{defaults:()=>lM,positionMix:()=>fM});var br={performance:!0,render:!0},pM={enable:s=>{br[s]=!0},disable:s=>{br[s]=!1},enableAll:()=>{Object.keys(br).forEach(s=>{br[s]=!0})},disableAll:()=>{Object.keys(br).forEach(s=>{br[s]=!1})},performance:(...s)=>{br.performance&&console.log("[Performance]",...s)},render:(...s)=>{br.render&&console.log("[Render]",...s)}};typeof window<"u"&&(window.debug=pM);function hg(s){return s/180*Math.PI}function lN(s){return s.map(e=>hg(e))}function cN(s){return s.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}function uN({animate:s,positionX:e,positionY:t,positionZ:n,rotationX:i,rotationY:a,rotationZ:l,type:c,color1:u,color2:f,color3:d,uTime:m,uSpeed:v,uDensity:_,uStrength:S,uFrequency:T,uAmplitude:M,shader:g}){let{vertex:x,fragment:E}=dM[g][c];return ft.jsxs("mesh",{name:"shadergradient-mesh",position:[e,t,n],rotation:lN([i,a,l]),children:[ft.jsx(qU,{type:c}),ft.jsx(jU,{animate:s,uniforms:{colors:[u,f,d],uTime:m,uSpeed:v,uLoadingTime:1,uNoiseDensity:_,uNoiseStrength:S,uFrequency:T,uAmplitude:M,uIntensity:.5},vertexShader:x,fragmentShader:E,onInit:b=>{pM.performance("material (onInit)",b)}})]})}function hN({type:s,cAzimuthAngle:e,cPolarAngle:t,cDistance:n,cameraZoom:i,zoomOut:a,enableTransition:l=!0}){let c=Ke.useRef();return s0((u,f)=>c.current.update(f)),Ke.useEffect(()=>{let u=c.current;u?.rotateTo(hg(e),hg(t),l)},[c,e,t]),Ke.useEffect(()=>{let u=c.current;a?s==="sphere"?(u?.dollyTo(yx.distance,l),u?.zoomTo(yx.zoom,l)):(u?.dollyTo(_x.distance,l),u?.zoomTo(_x.zoom,l)):s==="sphere"?(u?.zoomTo(i,l),u?.dollyTo(AU,l)):(u?.dollyTo(n,l),u?.zoomTo(CU,l))},[c,a,s,i,n]),c}var on={LEFT:1,RIGHT:2,MIDDLE:4},oe=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768}),No={NONE:0,IN:1,OUT:-1};function va(s){return s.isPerspectiveCamera}function Tr(s){return s.isOrthographicCamera}var Lo=Math.PI*2,Sx=Math.PI/2,mM=1e-5,Yl=Math.PI/180;function ns(s,e,t){return Math.max(e,Math.min(t,s))}function tn(s,e=mM){return Math.abs(s)<e}function kt(s,e,t=mM){return tn(s-e,t)}function Mx(s,e){return Math.round(s/e)*e}function Zl(s){return isFinite(s)?s:s<0?-Number.MAX_VALUE:Number.MAX_VALUE}function jl(s){return Math.abs(s)<Number.MAX_VALUE?s:s*(1/0)}function _h(s,e,t,n,i=1/0,a){n=Math.max(1e-4,n);let l=2/n,c=l*a,u=1/(1+c+.48*c*c+.235*c*c*c),f=s-e,d=e,m=i*n;f=ns(f,-m,m),e=s-f;let v=(t.value+l*f)*a;t.value=(t.value-l*v)*u;let _=e+(f+v)*u;return d-s>0==_>d&&(_=d,t.value=(_-d)/a),_}function Ex(s,e,t,n,i=1/0,a,l){n=Math.max(1e-4,n);let c=2/n,u=c*a,f=1/(1+u+.48*u*u+.235*u*u*u),d=e.x,m=e.y,v=e.z,_=s.x-d,S=s.y-m,T=s.z-v,M=d,g=m,x=v,E=i*n,b=E*E,w=_*_+S*S+T*T;if(w>b){let ie=Math.sqrt(w);_=_/ie*E,S=S/ie*E,T=T/ie*E}d=s.x-_,m=s.y-S,v=s.z-T;let A=(t.x+c*_)*a,U=(t.y+c*S)*a,N=(t.z+c*T)*a;t.x=(t.x-c*A)*f,t.y=(t.y-c*U)*f,t.z=(t.z-c*N)*f,l.x=d+(_+A)*f,l.y=m+(S+U)*f,l.z=v+(T+N)*f;let D=M-s.x,R=g-s.y,F=x-s.z,j=l.x-M,G=l.y-g,J=l.z-x;return D*j+R*G+F*J>0&&(l.x=M,l.y=g,l.z=x,t.x=(l.x-M)/a,t.y=(l.y-g)/a,t.z=(l.z-x)/a),l}function Om(s,e){e.set(0,0),s.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=s.length,e.y/=s.length}function Bm(s,e){return Tr(s)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}var fN=class{constructor(){this._listeners={}}addEventListener(s,e){let t=this._listeners;t[s]===void 0&&(t[s]=[]),t[s].indexOf(e)===-1&&t[s].push(e)}hasEventListener(s,e){let t=this._listeners;return t[s]!==void 0&&t[s].indexOf(e)!==-1}removeEventListener(s,e){let t=this._listeners[s];if(t!==void 0){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}}removeAllEventListeners(s){if(!s){this._listeners={};return}Array.isArray(this._listeners[s])&&(this._listeners[s].length=0)}dispatchEvent(s){let e=this._listeners[s.type];if(e!==void 0){s.target=this;let t=e.slice(0);for(let n=0,i=t.length;n<i;n++)t[n].call(this,s)}}},zm,dN="2.9.0",yh=1/8,pN=/Mac/.test((zm=globalThis?.navigator)===null||zm===void 0?void 0:zm.platform),ht,bx,xh,Im,ui,Mt,It,Oo,Kl,ys,xs,_a,Tx,Cx,Vi,Jl,Bo,Ax,Fm,wx,Hm,Vm,Sh,Rx=class fg extends fN{static install(e){ht=e.THREE,bx=Object.freeze(new ht.Vector3(0,0,0)),xh=Object.freeze(new ht.Vector3(0,1,0)),Im=Object.freeze(new ht.Vector3(0,0,1)),ui=new ht.Vector2,Mt=new ht.Vector3,It=new ht.Vector3,Oo=new ht.Vector3,Kl=new ht.Vector3,ys=new ht.Vector3,xs=new ht.Vector3,_a=new ht.Vector3,Tx=new ht.Vector3,Cx=new ht.Vector3,Vi=new ht.Spherical,Jl=new ht.Spherical,Bo=new ht.Box3,Ax=new ht.Box3,Fm=new ht.Sphere,wx=new ht.Quaternion,Hm=new ht.Quaternion,Vm=new ht.Matrix4,Sh=new ht.Raycaster}static get ACTION(){return oe}constructor(e,t){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=Number.EPSILON,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=oe.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=No.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new ht.Vector3,this._focalOffsetVelocity=new ht.Vector3,this._zoomVelocity={value:0},this._truckInternal=(g,x,E)=>{let b,w;if(va(this._camera)){let A=Mt.copy(this._camera.position).sub(this._target),U=this._camera.getEffectiveFOV()*Yl,N=A.length()*Math.tan(U*.5);b=this.truckSpeed*g*N/this._elementRect.height,w=this.truckSpeed*x*N/this._elementRect.height}else if(Tr(this._camera)){let A=this._camera;b=g*(A.right-A.left)/A.zoom/this._elementRect.width,w=x*(A.top-A.bottom)/A.zoom/this._elementRect.height}else return;this.verticalDragToForward?(E?this.setFocalOffset(this._focalOffsetEnd.x+b,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(b,0,!0),this.forward(-w,!0)):E?this.setFocalOffset(this._focalOffsetEnd.x+b,this._focalOffsetEnd.y+w,this._focalOffsetEnd.z,!0):this.truck(b,w,!0)},this._rotateInternal=(g,x)=>{let E=Lo*this.azimuthRotateSpeed*g/this._elementRect.height,b=Lo*this.polarRotateSpeed*x/this._elementRect.height;this.rotate(E,b,!0)},this._dollyInternal=(g,x,E)=>{let b=Math.pow(.95,-g*this.dollySpeed),w=this._sphericalEnd.radius,A=this._sphericalEnd.radius*b,U=ns(A,this.minDistance,this.maxDistance),N=U-A;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(A,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(N,!0),this._dollyToNoClamp(U,!0)):this._dollyToNoClamp(U,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?A:U)-w,this._dollyControlCoord.set(x,E)),this._lastDollyDirection=Math.sign(-g)},this._zoomInternal=(g,x,E)=>{let b=Math.pow(.95,g*this.dollySpeed),w=this._zoom,A=this._zoom*b;this.zoomTo(A,!0),this.dollyToCursor&&(this._changedZoom+=A-w,this._dollyControlCoord.set(x,E))},typeof ht>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new ht.Quaternion().setFromUnitVectors(this._camera.up,xh),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=oe.NONE,this._target=new ht.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new ht.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new ht.Spherical().setFromVector3(Mt.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new ht.Vector3,new ht.Vector3,new ht.Vector3,new ht.Vector3],this._updateNearPlaneCorners(),this._boundary=new ht.Box3(new ht.Vector3(-1/0,-1/0,-1/0),new ht.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new ht.Vector2,this.mouseButtons={left:oe.ROTATE,middle:oe.DOLLY,right:oe.TRUCK,wheel:va(this._camera)?oe.DOLLY:Tr(this._camera)?oe.ZOOM:oe.NONE},this.touches={one:oe.TOUCH_ROTATE,two:va(this._camera)?oe.TOUCH_DOLLY_TRUCK:Tr(this._camera)?oe.TOUCH_ZOOM_TRUCK:oe.NONE,three:oe.TOUCH_TRUCK};let n=new ht.Vector2,i=new ht.Vector2,a=new ht.Vector2,l=g=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let b=this._domElement.getBoundingClientRect(),w=g.clientX/b.width,A=g.clientY/b.height;if(w<this._interactiveArea.left||w>this._interactiveArea.right||A<this._interactiveArea.top||A>this._interactiveArea.bottom)return}let x=g.pointerType!=="mouse"?null:(g.buttons&on.LEFT)===on.LEFT?on.LEFT:(g.buttons&on.MIDDLE)===on.MIDDLE?on.MIDDLE:(g.buttons&on.RIGHT)===on.RIGHT?on.RIGHT:null;if(x!==null){let b=this._findPointerByMouseButton(x);b&&this._disposePointer(b)}if((g.buttons&on.LEFT)===on.LEFT&&this._lockedPointer)return;let E={pointerId:g.pointerId,clientX:g.clientX,clientY:g.clientY,deltaX:0,deltaY:0,mouseButton:x};this._activePointers.push(E),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",u),this._domElement.ownerDocument.addEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",u),this._isDragging=!0,v(g)},c=g=>{g.cancelable&&g.preventDefault();let x=g.pointerId,E=this._lockedPointer||this._findPointerById(x);if(E){if(E.clientX=g.clientX,E.clientY=g.clientY,E.deltaX=g.movementX,E.deltaY=g.movementY,this._state=0,g.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(g.buttons&on.LEFT)===on.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(g.buttons&on.MIDDLE)===on.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(g.buttons&on.RIGHT)===on.RIGHT&&(this._state=this._state|this.mouseButtons.right);_()}},u=g=>{let x=this._findPointerById(g.pointerId);if(!(x&&x===this._lockedPointer)){if(x&&this._disposePointer(x),g.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=oe.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=oe.NONE;S()}},f=-1,d=g=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===oe.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let A=this._domElement.getBoundingClientRect(),U=g.clientX/A.width,N=g.clientY/A.height;if(U<this._interactiveArea.left||U>this._interactiveArea.right||N<this._interactiveArea.top||N>this._interactiveArea.bottom)return}if(g.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===oe.ROTATE||this.mouseButtons.wheel===oe.TRUCK){let A=performance.now();f-A<1e3&&this._getClientRect(this._elementRect),f=A}let x=pN?-1:-3,E=g.deltaMode===1?g.deltaY/x:g.deltaY/(x*10),b=this.dollyToCursor?(g.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,w=this.dollyToCursor?(g.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case oe.ROTATE:{this._rotateInternal(g.deltaX,g.deltaY),this._isUserControllingRotate=!0;break}case oe.TRUCK:{this._truckInternal(g.deltaX,g.deltaY,!1),this._isUserControllingTruck=!0;break}case oe.OFFSET:{this._truckInternal(g.deltaX,g.deltaY,!0),this._isUserControllingOffset=!0;break}case oe.DOLLY:{this._dollyInternal(-E,b,w),this._isUserControllingDolly=!0;break}case oe.ZOOM:{this._zoomInternal(-E,b,w),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},m=g=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===fg.ACTION.NONE){let x=g instanceof PointerEvent?g.pointerId:0,E=this._findPointerById(x);E&&this._disposePointer(E),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",u);return}g.preventDefault()}},v=g=>{if(this._enabled){if(Om(this._activePointers,ui),this._getClientRect(this._elementRect),n.copy(ui),i.copy(ui),this._activePointers.length>=2){let x=ui.x-this._activePointers[1].clientX,E=ui.y-this._activePointers[1].clientY,b=Math.sqrt(x*x+E*E);a.set(0,b);let w=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,A=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(w,A)}if(this._state=0,!g)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in g&&g.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(g.buttons&on.LEFT)===on.LEFT&&(this._state=this._state|this.mouseButtons.left),(g.buttons&on.MIDDLE)===on.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(g.buttons&on.RIGHT)===on.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&oe.ROTATE)===oe.ROTATE||(this._state&oe.TOUCH_ROTATE)===oe.TOUCH_ROTATE||(this._state&oe.TOUCH_DOLLY_ROTATE)===oe.TOUCH_DOLLY_ROTATE||(this._state&oe.TOUCH_ZOOM_ROTATE)===oe.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&oe.TRUCK)===oe.TRUCK||(this._state&oe.TOUCH_TRUCK)===oe.TOUCH_TRUCK||(this._state&oe.TOUCH_DOLLY_TRUCK)===oe.TOUCH_DOLLY_TRUCK||(this._state&oe.TOUCH_ZOOM_TRUCK)===oe.TOUCH_ZOOM_TRUCK)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&oe.DOLLY)===oe.DOLLY||(this._state&oe.TOUCH_DOLLY)===oe.TOUCH_DOLLY||(this._state&oe.TOUCH_DOLLY_TRUCK)===oe.TOUCH_DOLLY_TRUCK||(this._state&oe.TOUCH_DOLLY_OFFSET)===oe.TOUCH_DOLLY_OFFSET||(this._state&oe.TOUCH_DOLLY_ROTATE)===oe.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&oe.ZOOM)===oe.ZOOM||(this._state&oe.TOUCH_ZOOM)===oe.TOUCH_ZOOM||(this._state&oe.TOUCH_ZOOM_TRUCK)===oe.TOUCH_ZOOM_TRUCK||(this._state&oe.TOUCH_ZOOM_OFFSET)===oe.TOUCH_ZOOM_OFFSET||(this._state&oe.TOUCH_ZOOM_ROTATE)===oe.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&oe.OFFSET)===oe.OFFSET||(this._state&oe.TOUCH_OFFSET)===oe.TOUCH_OFFSET||(this._state&oe.TOUCH_DOLLY_OFFSET)===oe.TOUCH_DOLLY_OFFSET||(this._state&oe.TOUCH_ZOOM_OFFSET)===oe.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})}},_=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,Om(this._activePointers,ui);let g=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,x=g?-g.deltaX:i.x-ui.x,E=g?-g.deltaY:i.y-ui.y;if(i.copy(ui),((this._state&oe.ROTATE)===oe.ROTATE||(this._state&oe.TOUCH_ROTATE)===oe.TOUCH_ROTATE||(this._state&oe.TOUCH_DOLLY_ROTATE)===oe.TOUCH_DOLLY_ROTATE||(this._state&oe.TOUCH_ZOOM_ROTATE)===oe.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(x,E),this._isUserControllingRotate=!0),(this._state&oe.DOLLY)===oe.DOLLY||(this._state&oe.ZOOM)===oe.ZOOM){let b=this.dollyToCursor?(n.x-this._elementRect.x)/this._elementRect.width*2-1:0,w=this.dollyToCursor?(n.y-this._elementRect.y)/this._elementRect.height*-2+1:0,A=this.dollyDragInverted?-1:1;(this._state&oe.DOLLY)===oe.DOLLY?(this._dollyInternal(A*E*yh,b,w),this._isUserControllingDolly=!0):(this._zoomInternal(A*E*yh,b,w),this._isUserControllingZoom=!0)}if((this._state&oe.TOUCH_DOLLY)===oe.TOUCH_DOLLY||(this._state&oe.TOUCH_ZOOM)===oe.TOUCH_ZOOM||(this._state&oe.TOUCH_DOLLY_TRUCK)===oe.TOUCH_DOLLY_TRUCK||(this._state&oe.TOUCH_ZOOM_TRUCK)===oe.TOUCH_ZOOM_TRUCK||(this._state&oe.TOUCH_DOLLY_OFFSET)===oe.TOUCH_DOLLY_OFFSET||(this._state&oe.TOUCH_ZOOM_OFFSET)===oe.TOUCH_ZOOM_OFFSET||(this._state&oe.TOUCH_DOLLY_ROTATE)===oe.TOUCH_DOLLY_ROTATE||(this._state&oe.TOUCH_ZOOM_ROTATE)===oe.TOUCH_ZOOM_ROTATE){let b=ui.x-this._activePointers[1].clientX,w=ui.y-this._activePointers[1].clientY,A=Math.sqrt(b*b+w*w),U=a.y-A;a.set(0,A);let N=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,D=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&oe.TOUCH_DOLLY)===oe.TOUCH_DOLLY||(this._state&oe.TOUCH_DOLLY_ROTATE)===oe.TOUCH_DOLLY_ROTATE||(this._state&oe.TOUCH_DOLLY_TRUCK)===oe.TOUCH_DOLLY_TRUCK||(this._state&oe.TOUCH_DOLLY_OFFSET)===oe.TOUCH_DOLLY_OFFSET?(this._dollyInternal(U*yh,N,D),this._isUserControllingDolly=!0):(this._zoomInternal(U*yh,N,D),this._isUserControllingZoom=!0)}((this._state&oe.TRUCK)===oe.TRUCK||(this._state&oe.TOUCH_TRUCK)===oe.TOUCH_TRUCK||(this._state&oe.TOUCH_DOLLY_TRUCK)===oe.TOUCH_DOLLY_TRUCK||(this._state&oe.TOUCH_ZOOM_TRUCK)===oe.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(x,E,!1),this._isUserControllingTruck=!0),((this._state&oe.OFFSET)===oe.OFFSET||(this._state&oe.TOUCH_OFFSET)===oe.TOUCH_OFFSET||(this._state&oe.TOUCH_DOLLY_OFFSET)===oe.TOUCH_DOLLY_OFFSET||(this._state&oe.TOUCH_ZOOM_OFFSET)===oe.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(x,E,!0),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},S=()=>{Om(this._activePointers,ui),i.copy(ui),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",u),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",u),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",T),this._domElement.ownerDocument.addEventListener("pointerlockerror",M),this._domElement.ownerDocument.addEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",u),v())},this.unlockPointer=()=>{var g,x,E;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(g=this._domElement)===null||g===void 0||g.ownerDocument.exitPointerLock(),(x=this._domElement)===null||x===void 0||x.ownerDocument.removeEventListener("pointerlockchange",T),(E=this._domElement)===null||E===void 0||E.ownerDocument.removeEventListener("pointerlockerror",M),this.cancel()};let T=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},M=()=>{this.unlockPointer()};this._addAllEventListeners=g=>{this._domElement=g,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",l),this._domElement.addEventListener("pointercancel",u),this._domElement.addEventListener("wheel",d,{passive:!1}),this._domElement.addEventListener("contextmenu",m)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",l),this._domElement.removeEventListener("pointercancel",u),this._domElement.removeEventListener("wheel",d,{passive:!1}),this._domElement.removeEventListener("contextmenu",m),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",u),this._domElement.ownerDocument.removeEventListener("pointerlockchange",T),this._domElement.ownerDocument.removeEventListener("pointerlockerror",M))},this.cancel=()=>{this._state!==oe.NONE&&(this._state=oe.NONE,this._activePointers.length=0,S())},t&&this.connect(t),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=ns(e.width,0,1),this._interactiveArea.height=ns(e.height,0,1),this._interactiveArea.x=ns(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=ns(e.y,0,1-this._interactiveArea.height)}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,n=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,n)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,n=!1){this._isUserControllingRotate=!1;let i=ns(e,this.minAzimuthAngle,this.maxAzimuthAngle),a=ns(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=i,this._sphericalEnd.phi=a,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,n||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let l=!n||kt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&kt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(l)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=No.NONE,this._changedDolly=0,this._dollyToNoClamp(ns(e,this.minDistance,this.maxDistance),t)}_dollyToNoClamp(e,t=!1){let n=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){let a=this._collisionTest(),l=kt(a,this._spherical.radius);if(!(n>e)&&l)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,a)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let i=!t||kt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(i)}dollyInFixed(e,t=!1){this._targetEnd.add(this._getCameraDirection(Kl).multiplyScalar(e)),t||this._target.copy(this._targetEnd);let n=!t||kt(this._target.x,this._targetEnd.x,this.restThreshold)&&kt(this._target.y,this._targetEnd.y,this.restThreshold)&&kt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._isUserControllingZoom=!1,this._zoomEnd=ns(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let n=!t||kt(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(n)}pan(e,t,n=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,n)}truck(e,t,n=!1){this._camera.updateMatrix(),ys.setFromMatrixColumn(this._camera.matrix,0),xs.setFromMatrixColumn(this._camera.matrix,1),ys.multiplyScalar(e),xs.multiplyScalar(-t);let i=Mt.copy(ys).add(xs),a=It.copy(this._targetEnd).add(i);return this.moveTo(a.x,a.y,a.z,n)}forward(e,t=!1){Mt.setFromMatrixColumn(this._camera.matrix,0),Mt.crossVectors(this._camera.up,Mt),Mt.multiplyScalar(e);let n=It.copy(this._targetEnd).add(Mt);return this.moveTo(n.x,n.y,n.z,t)}elevate(e,t=!1){return Mt.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+Mt.x,this._targetEnd.y+Mt.y,this._targetEnd.z+Mt.z,t)}moveTo(e,t,n,i=!1){this._isUserControllingTruck=!1;let a=Mt.set(e,t,n).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,a,this.boundaryFriction),this._needsUpdate=!0,i||this._target.copy(this._targetEnd);let l=!i||kt(this._target.x,this._targetEnd.x,this.restThreshold)&&kt(this._target.y,this._targetEnd.y,this.restThreshold)&&kt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(l)}lookInDirectionOf(e,t,n,i=!1){let a=Mt.set(e,t,n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(a.x,a.y,a.z,i)}fitToBox(e,t,{cover:n=!1,paddingLeft:i=0,paddingRight:a=0,paddingBottom:l=0,paddingTop:c=0}={}){let u=[],f=e.isBox3?Bo.copy(e):Bo.setFromObject(e);f.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let d=Mx(this._sphericalEnd.theta,Sx),m=Mx(this._sphericalEnd.phi,Sx);u.push(this.rotateTo(d,m,t));let v=Mt.setFromSpherical(this._sphericalEnd).normalize(),_=wx.setFromUnitVectors(v,Im),S=kt(Math.abs(v.y),1);S&&_.multiply(Hm.setFromAxisAngle(xh,d)),_.multiply(this._yAxisUpSpaceInverse);let T=Ax.makeEmpty();It.copy(f.min).applyQuaternion(_),T.expandByPoint(It),It.copy(f.min).setX(f.max.x).applyQuaternion(_),T.expandByPoint(It),It.copy(f.min).setY(f.max.y).applyQuaternion(_),T.expandByPoint(It),It.copy(f.max).setZ(f.min.z).applyQuaternion(_),T.expandByPoint(It),It.copy(f.min).setZ(f.max.z).applyQuaternion(_),T.expandByPoint(It),It.copy(f.max).setY(f.min.y).applyQuaternion(_),T.expandByPoint(It),It.copy(f.max).setX(f.min.x).applyQuaternion(_),T.expandByPoint(It),It.copy(f.max).applyQuaternion(_),T.expandByPoint(It),T.min.x-=i,T.min.y-=l,T.max.x+=a,T.max.y+=c,_.setFromUnitVectors(Im,v),S&&_.premultiply(Hm.invert()),_.premultiply(this._yAxisUpSpace);let M=T.getSize(Mt),g=T.getCenter(It).applyQuaternion(_);if(va(this._camera)){let x=this.getDistanceToFitBox(M.x,M.y,M.z,n);u.push(this.moveTo(g.x,g.y,g.z,t)),u.push(this.dollyTo(x,t)),u.push(this.setFocalOffset(0,0,0,t))}else if(Tr(this._camera)){let x=this._camera,E=x.right-x.left,b=x.top-x.bottom,w=n?Math.max(E/M.x,b/M.y):Math.min(E/M.x,b/M.y);u.push(this.moveTo(g.x,g.y,g.z,t)),u.push(this.zoomTo(w,t)),u.push(this.setFocalOffset(0,0,0,t))}return Promise.all(u)}fitToSphere(e,t){let n=[],i="isObject3D"in e?fg.createBoundingSphere(e,Fm):Fm.copy(e);if(n.push(this.moveTo(i.center.x,i.center.y,i.center.z,t)),va(this._camera)){let a=this.getDistanceToFitSphere(i.radius);n.push(this.dollyTo(a,t))}else if(Tr(this._camera)){let a=this._camera.right-this._camera.left,l=this._camera.top-this._camera.bottom,c=2*i.radius,u=Math.min(a/c,l/c);n.push(this.zoomTo(u,t))}return n.push(this.setFocalOffset(0,0,0,t)),Promise.all(n)}setLookAt(e,t,n,i,a,l,c=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=No.NONE,this._changedDolly=0;let u=It.set(i,a,l),f=Mt.set(e,t,n);this._targetEnd.copy(u),this._sphericalEnd.setFromVector3(f.sub(u).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,c||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let d=!c||kt(this._target.x,this._targetEnd.x,this.restThreshold)&&kt(this._target.y,this._targetEnd.y,this.restThreshold)&&kt(this._target.z,this._targetEnd.z,this.restThreshold)&&kt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&kt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&kt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(d)}lerpLookAt(e,t,n,i,a,l,c,u,f,d,m,v,_,S=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=No.NONE,this._changedDolly=0;let T=Mt.set(i,a,l),M=It.set(e,t,n);Vi.setFromVector3(M.sub(T).applyQuaternion(this._yAxisUpSpace));let g=Oo.set(d,m,v),x=It.set(c,u,f);Jl.setFromVector3(x.sub(g).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(T.lerp(g,_));let E=Jl.theta-Vi.theta,b=Jl.phi-Vi.phi,w=Jl.radius-Vi.radius;this._sphericalEnd.set(Vi.radius+w*_,Vi.phi+b*_,Vi.theta+E*_),this.normalizeRotations(),this._needsUpdate=!0,S||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let A=!S||kt(this._target.x,this._targetEnd.x,this.restThreshold)&&kt(this._target.y,this._targetEnd.y,this.restThreshold)&&kt(this._target.z,this._targetEnd.z,this.restThreshold)&&kt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&kt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&kt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(A)}setPosition(e,t,n,i=!1){return this.setLookAt(e,t,n,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,i)}setTarget(e,t,n,i=!1){let a=this.getPosition(Mt),l=this.setLookAt(a.x,a.y,a.z,e,t,n,i);return this._sphericalEnd.phi=ns(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),l}setFocalOffset(e,t,n,i=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,t,n),this._needsUpdate=!0,i||this._focalOffset.copy(this._focalOffsetEnd);let a=!i||kt(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&kt(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&kt(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}setOrbitPoint(e,t,n){this._camera.updateMatrixWorld(),ys.setFromMatrixColumn(this._camera.matrixWorldInverse,0),xs.setFromMatrixColumn(this._camera.matrixWorldInverse,1),_a.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let i=Mt.set(e,t,n),a=i.distanceTo(this._camera.position),l=i.sub(this._camera.position);ys.multiplyScalar(l.x),xs.multiplyScalar(l.y),_a.multiplyScalar(l.z),Mt.copy(ys).add(xs).add(_a),Mt.z=Mt.z+a,this.dollyTo(a,!1),this.setFocalOffset(-Mt.x,Mt.y,-Mt.z,!1),this.moveTo(e,t,n,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,n,i){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new ht.Vector4,typeof e=="number"?this._viewport.set(e,t,n,i):this._viewport.copy(e)}getDistanceToFitBox(e,t,n,i=!1){if(Bm(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let a=e/t,l=this._camera.getEffectiveFOV()*Yl,c=this._camera.aspect;return((i?a>c:a<c)?t:e/c)*.5/Math.tan(l*.5)+n*.5}getDistanceToFitSphere(e){if(Bm(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*Yl,n=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,i=1<this._camera.aspect?t:n;return e/Math.sin(i*.5)}getTarget(e,t=!0){return(e&&e.isVector3?e:new ht.Vector3).copy(t?this._targetEnd:this._target)}getPosition(e,t=!0){return(e&&e.isVector3?e:new ht.Vector3).setFromSpherical(t?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t?this._targetEnd:this._target)}getSpherical(e,t=!0){return(e||new ht.Spherical).copy(t?this._sphericalEnd:this._spherical)}getFocalOffset(e,t=!0){return(e&&e.isVector3?e:new ht.Vector3).copy(t?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%Lo,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=Lo),this._spherical.theta+=Lo*Math.round((this._sphericalEnd.theta-this._spherical.theta)/Lo)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!kt(this._camera.up.x,this._cameraUp0.x)||!kt(this._camera.up.y,this._cameraUp0.y)||!kt(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);let n=this.getPosition(Mt);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}let t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,xh),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){let e=Mt.subVectors(this._target,this._camera.position).normalize(),t=It.crossVectors(e,this._camera.up);this._camera.up.crossVectors(t,e).normalize(),this._camera.updateMatrixWorld();let n=this.getPosition(Mt);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}update(e){let t=this._sphericalEnd.theta-this._spherical.theta,n=this._sphericalEnd.phi-this._spherical.phi,i=this._sphericalEnd.radius-this._spherical.radius,a=Tx.subVectors(this._targetEnd,this._target),l=Cx.subVectors(this._focalOffsetEnd,this._focalOffset),c=this._zoomEnd-this._zoom;if(tn(t))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{let d=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=_h(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,d,1/0,e),this._needsUpdate=!0}if(tn(n))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{let d=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=_h(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,d,1/0,e),this._needsUpdate=!0}if(tn(i))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{let d=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=_h(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,d,this.maxSpeed,e),this._needsUpdate=!0}if(tn(a.x)&&tn(a.y)&&tn(a.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{let d=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;Ex(this._target,this._targetEnd,this._targetVelocity,d,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(tn(l.x)&&tn(l.y)&&tn(l.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{let d=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;Ex(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,d,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(tn(c))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{let d=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=_h(this._zoom,this._zoomEnd,this._zoomVelocity,d,1/0,e)}if(this.dollyToCursor){if(va(this._camera)&&this._changedDolly!==0){let d=this._spherical.radius-this._lastDistance,m=this._camera,v=this._getCameraDirection(Kl),_=Mt.copy(v).cross(m.up).normalize();_.lengthSq()===0&&(_.x=1);let S=It.crossVectors(_,v),T=this._sphericalEnd.radius*Math.tan(m.getEffectiveFOV()*Yl*.5),M=(this._sphericalEnd.radius-d-this._sphericalEnd.radius)/this._sphericalEnd.radius,g=Oo.copy(this._targetEnd).add(_.multiplyScalar(this._dollyControlCoord.x*T*m.aspect)).add(S.multiplyScalar(this._dollyControlCoord.y*T)),x=Mt.copy(this._targetEnd).lerp(g,M),E=this._lastDollyDirection===No.IN&&this._spherical.radius<=this.minDistance,b=this._lastDollyDirection===No.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(E||b)){this._sphericalEnd.radius-=d,this._spherical.radius-=d;let A=It.copy(v).multiplyScalar(-d);x.add(A)}this._boundary.clampPoint(x,x);let w=It.subVectors(x,this._targetEnd);this._targetEnd.copy(x),this._target.add(w),this._changedDolly-=d,tn(this._changedDolly)&&(this._changedDolly=0)}else if(Tr(this._camera)&&this._changedZoom!==0){let d=this._zoom-this._lastZoom,m=this._camera,v=Mt.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(m.near+m.far)/(m.near-m.far)).unproject(m),_=It.set(0,0,-1).applyQuaternion(m.quaternion),S=Oo.copy(v).add(_.multiplyScalar(-v.dot(m.up))),T=-(this._zoom-d-this._zoom)/this._zoom,M=this._getCameraDirection(Kl),g=this._targetEnd.dot(M),x=Mt.copy(this._targetEnd).lerp(S,T),E=x.dot(M),b=M.multiplyScalar(E-g);x.sub(b),this._boundary.clampPoint(x,x);let w=It.subVectors(x,this._targetEnd);this._targetEnd.copy(x),this._target.add(w),this._changedZoom-=d,tn(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;let u=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,u),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!tn(this._focalOffset.x)||!tn(this._focalOffset.y)||!tn(this._focalOffset.z))&&(this._camera.updateMatrixWorld(),ys.setFromMatrixColumn(this._camera.matrix,0),xs.setFromMatrixColumn(this._camera.matrix,1),_a.setFromMatrixColumn(this._camera.matrix,2),ys.multiplyScalar(this._focalOffset.x),xs.multiplyScalar(-this._focalOffset.y),_a.multiplyScalar(this._focalOffset.z),Mt.copy(ys).add(xs).add(_a),this._camera.position.add(Mt)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),Mt.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let f=this._needsUpdate;return f&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):f?(this.dispatchEvent({type:"update"}),tn(t,this.restThreshold)&&tn(n,this.restThreshold)&&tn(i,this.restThreshold)&&tn(a.x,this.restThreshold)&&tn(a.y,this.restThreshold)&&tn(a.z,this.restThreshold)&&tn(l.x,this.restThreshold)&&tn(l.y,this.restThreshold)&&tn(l.z,this.restThreshold)&&tn(c,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!f&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=f,this._needsUpdate=!1,f}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:Zl(this.maxDistance),minZoom:this.minZoom,maxZoom:Zl(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:Zl(this.maxPolarAngle),minAzimuthAngle:Zl(this.minAzimuthAngle),maxAzimuthAngle:Zl(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:Mt.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let n=JSON.parse(e);this.enabled=n.enabled,this.minDistance=n.minDistance,this.maxDistance=jl(n.maxDistance),this.minZoom=n.minZoom,this.maxZoom=jl(n.maxZoom),this.minPolarAngle=n.minPolarAngle,this.maxPolarAngle=jl(n.maxPolarAngle),this.minAzimuthAngle=jl(n.minAzimuthAngle),this.maxAzimuthAngle=jl(n.maxAzimuthAngle),this.smoothTime=n.smoothTime,this.draggingSmoothTime=n.draggingSmoothTime,this.dollySpeed=n.dollySpeed,this.truckSpeed=n.truckSpeed,this.dollyToCursor=n.dollyToCursor,this.verticalDragToForward=n.verticalDragToForward,this._target0.fromArray(n.target0),this._position0.fromArray(n.position0),this._zoom0=n.zoom0,this._focalOffset0.fromArray(n.focalOffset0),this.moveTo(n.target[0],n.target[1],n.target[2],t),Vi.setFromVector3(Mt.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(Vi.theta,Vi.phi,t),this.dollyTo(Vi.radius,t),this.zoomTo(n.zoom,t),this.setFocalOffset(n.focalOffset[0],n.focalOffset[1],n.focalOffset[2],t),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",dN),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(t=>t.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(t=>t.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,t,n){let i=t.lengthSq();if(i===0)return e;let a=It.copy(t).add(e),l=this._boundary.clampPoint(a,Oo).sub(a),c=l.lengthSq();if(c===0)return e.add(t);if(c===i)return e;if(n===0)return e.add(t).add(l);{let u=1+n*c/t.dot(l);return e.add(It.copy(t).multiplyScalar(u)).add(l.multiplyScalar(1-n))}}_updateNearPlaneCorners(){if(va(this._camera)){let e=this._camera,t=e.near,n=e.getEffectiveFOV()*Yl,i=Math.tan(n*.5)*t,a=i*e.aspect;this._nearPlaneCorners[0].set(-a,-i,0),this._nearPlaneCorners[1].set(a,-i,0),this._nearPlaneCorners[2].set(a,i,0),this._nearPlaneCorners[3].set(-a,i,0)}else if(Tr(this._camera)){let e=this._camera,t=1/e.zoom,n=e.left*t,i=e.right*t,a=e.top*t,l=e.bottom*t;this._nearPlaneCorners[0].set(n,a,0),this._nearPlaneCorners[1].set(i,a,0),this._nearPlaneCorners[2].set(i,l,0),this._nearPlaneCorners[3].set(n,l,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||Bm(this._camera,"_collisionTest"))return e;let t=this._getTargetDirection(Kl);Vm.lookAt(bx,t,this._camera.up);for(let n=0;n<4;n++){let i=It.copy(this._nearPlaneCorners[n]);i.applyMatrix4(Vm);let a=Oo.addVectors(this._target,i);Sh.set(a,t),Sh.far=this._spherical.radius+1;let l=Sh.intersectObjects(this.colliderMeshes);l.length!==0&&l[0].distance<e&&(e=l[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{let n=()=>{this.removeEventListener("rest",n),t()};this.addEventListener("rest",n)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,t=new ht.Sphere){let n=t,i=n.center;Bo.makeEmpty(),e.traverseVisible(l=>{l.isMesh&&Bo.expandByObject(l)}),Bo.getCenter(i);let a=0;return e.traverseVisible(l=>{if(!l.isMesh)return;let c=l,u=c.geometry.clone();u.applyMatrix4(c.matrixWorld);let f=u.attributes.position;for(let d=0,m=f.count;d<m;d++)Mt.fromBufferAttribute(f,d),a=Math.max(a,i.distanceToSquared(Mt))}),n.radius=Math.sqrt(a),n}};function mN(s){var e=s,{smoothTime:t=.05}=e,n=ug(e,["smoothTime"]);Rx.install({THREE:US}),KS({CameraControls:Rx});let i=vf(c=>c.camera),a=vf(c=>c.gl),l=hN(n);return ft.jsx("cameraControls",{ref:l,args:[i,a.domElement],enableDamping:!0,smoothTime:t,zoomSpeed:10,dollySpeed:10,restThreshold:0})}/*! Bundled license information:

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/function gN(s){return ft.jsx(ft.Fragment,{children:ft.jsx(mN,Gi({},s))})}var vN={halo:{props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}}},_N=Vc((s,e)=>{e.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,n=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`)}),yN=Vc((s,e)=>{var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),i=new RegExp("("+t+")+","gi");function a(u,f){try{return[decodeURIComponent(u.join(""))]}catch{}if(u.length===1)return u;f=f||1;var d=u.slice(0,f),m=u.slice(f);return Array.prototype.concat.call([],a(d),a(m))}function l(u){try{return decodeURIComponent(u)}catch{for(var f=u.match(n)||[],d=1;d<f.length;d++)u=a(f,d).join(""),f=u.match(n)||[];return u}}function c(u){for(var f={"%FE%FF":"��","%FF%FE":"��"},d=i.exec(u);d;){try{f[d[0]]=decodeURIComponent(d[0])}catch{var m=l(d[0]);m!==d[0]&&(f[d[0]]=m)}d=i.exec(u)}f["%C2"]="�";for(var v=Object.keys(f),_=0;_<v.length;_++){var S=v[_];u=u.replace(new RegExp(S,"g"),f[S])}return u}e.exports=function(u){if(typeof u!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof u+"`");try{return u=u.replace(/\+/g," "),decodeURIComponent(u)}catch{return c(u)}}}),xN=Vc((s,e)=>{e.exports=(t,n)=>{if(!(typeof t=="string"&&typeof n=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(n==="")return[t];let i=t.indexOf(n);return i===-1?[t]:[t.slice(0,i),t.slice(i+n.length)]}}),SN=Vc((s,e)=>{e.exports=function(t,n){for(var i={},a=Object.keys(t),l=Array.isArray(n),c=0;c<a.length;c++){var u=a[c],f=t[u];(l?n.indexOf(u)!==-1:n(u,f,t))&&(i[u]=f)}return i}}),MN=Vc(s=>{var e=_N(),t=yN(),n=xN(),i=SN(),a=x=>x==null,l=Symbol("encodeFragmentIdentifier");function c(x){switch(x.arrayFormat){case"index":return E=>(b,w)=>{let A=b.length;return w===void 0||x.skipNull&&w===null||x.skipEmptyString&&w===""?b:w===null?[...b,[d(E,x),"[",A,"]"].join("")]:[...b,[d(E,x),"[",d(A,x),"]=",d(w,x)].join("")]};case"bracket":return E=>(b,w)=>w===void 0||x.skipNull&&w===null||x.skipEmptyString&&w===""?b:w===null?[...b,[d(E,x),"[]"].join("")]:[...b,[d(E,x),"[]=",d(w,x)].join("")];case"colon-list-separator":return E=>(b,w)=>w===void 0||x.skipNull&&w===null||x.skipEmptyString&&w===""?b:w===null?[...b,[d(E,x),":list="].join("")]:[...b,[d(E,x),":list=",d(w,x)].join("")];case"comma":case"separator":case"bracket-separator":{let E=x.arrayFormat==="bracket-separator"?"[]=":"=";return b=>(w,A)=>A===void 0||x.skipNull&&A===null||x.skipEmptyString&&A===""?w:(A=A===null?"":A,w.length===0?[[d(b,x),E,d(A,x)].join("")]:[[w,d(A,x)].join(x.arrayFormatSeparator)])}default:return E=>(b,w)=>w===void 0||x.skipNull&&w===null||x.skipEmptyString&&w===""?b:w===null?[...b,d(E,x)]:[...b,[d(E,x),"=",d(w,x)].join("")]}}function u(x){let E;switch(x.arrayFormat){case"index":return(b,w,A)=>{if(E=/\[(\d*)\]$/.exec(b),b=b.replace(/\[\d*\]$/,""),!E){A[b]=w;return}A[b]===void 0&&(A[b]={}),A[b][E[1]]=w};case"bracket":return(b,w,A)=>{if(E=/(\[\])$/.exec(b),b=b.replace(/\[\]$/,""),!E){A[b]=w;return}if(A[b]===void 0){A[b]=[w];return}A[b]=[].concat(A[b],w)};case"colon-list-separator":return(b,w,A)=>{if(E=/(:list)$/.exec(b),b=b.replace(/:list$/,""),!E){A[b]=w;return}if(A[b]===void 0){A[b]=[w];return}A[b]=[].concat(A[b],w)};case"comma":case"separator":return(b,w,A)=>{let U=typeof w=="string"&&w.includes(x.arrayFormatSeparator),N=typeof w=="string"&&!U&&m(w,x).includes(x.arrayFormatSeparator);w=N?m(w,x):w;let D=U||N?w.split(x.arrayFormatSeparator).map(R=>m(R,x)):w===null?w:m(w,x);A[b]=D};case"bracket-separator":return(b,w,A)=>{let U=/(\[\])$/.test(b);if(b=b.replace(/\[\]$/,""),!U){A[b]=w&&m(w,x);return}let N=w===null?[]:w.split(x.arrayFormatSeparator).map(D=>m(D,x));if(A[b]===void 0){A[b]=N;return}A[b]=[].concat(A[b],N)};default:return(b,w,A)=>{if(A[b]===void 0){A[b]=w;return}A[b]=[].concat(A[b],w)}}}function f(x){if(typeof x!="string"||x.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function d(x,E){return E.encode?E.strict?e(x):encodeURIComponent(x):x}function m(x,E){return E.decode?t(x):x}function v(x){return Array.isArray(x)?x.sort():typeof x=="object"?v(Object.keys(x)).sort((E,b)=>Number(E)-Number(b)).map(E=>x[E]):x}function _(x){let E=x.indexOf("#");return E!==-1&&(x=x.slice(0,E)),x}function S(x){let E="",b=x.indexOf("#");return b!==-1&&(E=x.slice(b)),E}function T(x){x=_(x);let E=x.indexOf("?");return E===-1?"":x.slice(E+1)}function M(x,E){return E.parseNumbers&&!Number.isNaN(Number(x))&&typeof x=="string"&&x.trim()!==""?x=Number(x):E.parseBooleans&&x!==null&&(x.toLowerCase()==="true"||x.toLowerCase()==="false")&&(x=x.toLowerCase()==="true"),x}function g(x,E){E=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},E),f(E.arrayFormatSeparator);let b=u(E),w=Object.create(null);if(typeof x!="string"||(x=x.trim().replace(/^[?#&]/,""),!x))return w;for(let A of x.split("&")){if(A==="")continue;let[U,N]=n(E.decode?A.replace(/\+/g," "):A,"=");N=N===void 0?null:["comma","separator","bracket-separator"].includes(E.arrayFormat)?N:m(N,E),b(m(U,E),N,w)}for(let A of Object.keys(w)){let U=w[A];if(typeof U=="object"&&U!==null)for(let N of Object.keys(U))U[N]=M(U[N],E);else w[A]=M(U,E)}return E.sort===!1?w:(E.sort===!0?Object.keys(w).sort():Object.keys(w).sort(E.sort)).reduce((A,U)=>{let N=w[U];return N&&typeof N=="object"&&!Array.isArray(N)?A[U]=v(N):A[U]=N,A},Object.create(null))}s.extract=T,s.parse=g,s.stringify=(x,E)=>{if(!x)return"";E=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},E),f(E.arrayFormatSeparator);let b=N=>E.skipNull&&a(x[N])||E.skipEmptyString&&x[N]==="",w=c(E),A={};for(let N of Object.keys(x))b(N)||(A[N]=x[N]);let U=Object.keys(A);return E.sort!==!1&&U.sort(E.sort),U.map(N=>{let D=x[N];return D===void 0?"":D===null?d(N,E):Array.isArray(D)?D.length===0&&E.arrayFormat==="bracket-separator"?d(N,E)+"[]":D.reduce(w(N),[]).join("&"):d(N,E)+"="+d(D,E)}).filter(N=>N.length>0).join("&")},s.parseUrl=(x,E)=>{E=Object.assign({decode:!0},E);let[b,w]=n(x,"#");return Object.assign({url:b.split("?")[0]||"",query:g(T(x),E)},E&&E.parseFragmentIdentifier&&w?{fragmentIdentifier:m(w,E)}:{})},s.stringifyUrl=(x,E)=>{E=Object.assign({encode:!0,strict:!0,[l]:!0},E);let b=_(x.url).split("?")[0]||"",w=s.extract(x.url),A=s.parse(w,{sort:!1}),U=Object.assign(A,x.query),N=s.stringify(U,E);N&&(N=`?${N}`);let D=S(x.url);return x.fragmentIdentifier&&(D=`#${E[l]?d(x.fragmentIdentifier,E):x.fragmentIdentifier}`),`${b}${N}${D}`},s.pick=(x,E,b)=>{b=Object.assign({parseFragmentIdentifier:!0,[l]:!1},b);let{url:w,query:A,fragmentIdentifier:U}=s.parseUrl(x,b);return s.stringifyUrl({url:w,query:i(A,E),fragmentIdentifier:U},b)},s.exclude=(x,E,b)=>{let w=Array.isArray(E)?A=>!E.includes(A):(A,U)=>!E(A,U);return s.pick(x,w,b)}}),EN=zU(MN());function bN(s){let e=Gi(Gi({},vN.halo.props),s),{control:t,urlString:n}=e,i=ug(e,["control","urlString"]);t==="query"&&(i=EN.parse(cN(n),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let a=i,{lightType:l,envPreset:c,brightness:u,grain:f,toggleAxis:d}=a;return ug(a,["lightType","envPreset","brightness","grain","toggleAxis"]),ft.jsxs(ft.Fragment,{children:[ft.jsx(uN,Gi({},i)),ft.jsx(XU,{lightType:l,brightness:u,envPreset:c}),f!=="off"&&ft.jsx(MU,{}),ft.jsx(gN,Gi({},i))]})}function HN(){return ft.jsx(FU,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1},children:ft.jsx(bN,{control:"query",urlString:"https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.6&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=16&color1=%23ff7152&color2=%231f5aff&color3=%23669cff&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=0.4&positionX=0&positionY=-0.15&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=2&uDensity=1.5&uFrequency=5.5&uSpeed=0.2&uStrength=0.4&uTime=0&wireframe=false&zoomOut=false"})})}export{HN as default};
