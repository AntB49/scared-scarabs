(this["webpackJsonpethereum-boilerplate"]=this["webpackJsonpethereum-boilerplate"]||[]).push([[15],{1743:function(r,e){},2015:function(r,e,t){"use strict";t.r(e),function(r){t.d(e,"getED25519Key",(function(){return o}));var n=t(13),a=t(1816),i=t.n(a).a.lowlevel;function o(e){var t;t="string"===typeof e?r.from(e,"hex"):e;var a=new Uint8Array(64),o=[i.gf(),i.gf(),i.gf(),i.gf()],c=new Uint8Array([].concat(Object(n.a)(new Uint8Array(t)),Object(n.a)(new Uint8Array(32)))),f=new Uint8Array(32);i.crypto_hash(a,c,32),a[0]&=248,a[31]&=127,a[31]|=64,i.scalarbase(o,a),i.pack(f,o);for(var s=0;s<32;s+=1)c[s+32]=f[s];return{sk:r.from(c),pk:r.from(f)}}}.call(this,t(35).Buffer)}}]);
//# sourceMappingURL=15.73d20474.chunk.js.map