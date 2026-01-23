// @__NO_SIDE_EFFECTS__
function su(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Qe = {}, Sl = [], Pn = () => {
}, Wf = () => !1, Ri = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), uu = (e) => e.startsWith("onUpdate:"), wt = Object.assign, cu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sb = Object.prototype.hasOwnProperty, Ge = (e, t) => Sb.call(e, t), Me = Array.isArray, kl = (e) => Hi(e) === "[object Map]", zf = (e) => Hi(e) === "[object Set]", Le = (e) => typeof e == "function", ut = (e) => typeof e == "string", xa = (e) => typeof e == "symbol", nt = (e) => e !== null && typeof e == "object", jf = (e) => (nt(e) || Le(e)) && Le(e.then) && Le(e.catch), Yf = Object.prototype.toString, Hi = (e) => Yf.call(e), kb = (e) => Hi(e).slice(8, -1), Uf = (e) => Hi(e) === "[object Object]", Wi = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jl = /* @__PURE__ */ su(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, wb = /-\w/g, zt = zi(
  (e) => e.replace(wb, (t) => t.slice(1).toUpperCase())
), pb = /\B([A-Z])/g, Qa = zi(
  (e) => e.replace(pb, "-$1").toLowerCase()
), Bn = zi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ar = zi(
  (e) => e ? `on${Bn(e)}` : ""
), fa = (e, t) => !Object.is(e, t), ci = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Kf = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, du = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xb = (e) => {
  const t = ut(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lc;
const ji = () => Lc || (Lc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ve(e) {
  if (Me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = ut(a) ? Ib(a) : ve(a);
      if (l)
        for (const o in l)
          t[o] = l[o];
    }
    return t;
  } else if (ut(e) || nt(e))
    return e;
}
const Cb = /;(?![^(]*\))/g, _b = /:([^]+)/, Vb = /\/\*[^]*?\*\//g;
function Ib(e) {
  const t = {};
  return e.replace(Vb, "").split(Cb).forEach((n) => {
    if (n) {
      const a = n.split(_b);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (ut(e))
    t = e;
  else if (Me(e))
    for (let n = 0; n < e.length; n++) {
      const a = ee(e[n]);
      a && (t += a + " ");
    }
  else if (nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Pb(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ut(t) && (e.class = ee(t)), n && (e.style = ve(n)), e;
}
const Tb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ab = /* @__PURE__ */ su(Tb);
function Gf(e) {
  return !!e || e === "";
}
const qf = (e) => !!(e && e.__v_isRef === !0), Tn = (e) => ut(e) ? e : e == null ? "" : Me(e) || nt(e) && (e.toString === Yf || !Le(e.toString)) ? qf(e) ? Tn(e.value) : JSON.stringify(e, Xf, 2) : String(e), Xf = (e, t) => qf(t) ? Xf(e, t.value) : kl(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], o) => (n[Dr(a, o) + " =>"] = l, n),
    {}
  )
} : zf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Dr(n))
} : xa(t) ? Dr(t) : nt(t) && !Me(t) && !Uf(t) ? String(t) : t, Dr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xa(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Bt;
class Zf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Bt, !t && Bt && (this.index = (Bt.scopes || (Bt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Bt;
      try {
        return Bt = this, t();
      } finally {
        Bt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Bt, Bt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Bt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Cl(e) {
  return new Zf(e);
}
function Jf() {
  return Bt;
}
function ot(e, t = !1) {
  Bt && Bt.cleanups.push(e);
}
let tt;
const Er = /* @__PURE__ */ new WeakSet();
class Qf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Bt && Bt.active && Bt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Er.has(this) && (Er.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tv(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oc(this), nv(this);
    const t = tt, n = hn;
    tt = this, hn = !0;
    try {
      return this.fn();
    } finally {
      av(this), tt = t, hn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mu(t);
      this.deps = this.depsTail = void 0, Oc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Er.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ls(this) && this.run();
  }
  get dirty() {
    return ls(this);
  }
}
let ev = 0, Ql, eo;
function tv(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = eo, eo = e;
    return;
  }
  e.next = Ql, Ql = e;
}
function fu() {
  ev++;
}
function vu() {
  if (--ev > 0)
    return;
  if (eo) {
    let t = eo;
    for (eo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ql; ) {
    let t = Ql;
    for (Ql = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function nv(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function av(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), mu(a), Db(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lv(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === so) || (e.globalVersion = so, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = tt, a = hn;
  tt = e, hn = !0;
  try {
    nv(e);
    const l = e.fn(e._value);
    (t.version === 0 || fa(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    tt = n, hn = a, av(e), e.flags &= -3;
  }
}
function mu(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      mu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Db(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let hn = !0;
const ov = [];
function Kn() {
  ov.push(hn), hn = !1;
}
function Gn() {
  const e = ov.pop();
  hn = e === void 0 ? !0 : e;
}
function Oc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = tt;
    tt = void 0;
    try {
      t();
    } finally {
      tt = n;
    }
  }
}
let so = 0;
class Eb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!tt || !hn || tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== tt)
      n = this.activeLink = new Eb(tt, this), tt.deps ? (n.prevDep = tt.depsTail, tt.depsTail.nextDep = n, tt.depsTail = n) : tt.deps = tt.depsTail = n, iv(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = tt.depsTail, n.nextDep = void 0, tt.depsTail.nextDep = n, tt.depsTail = n, tt.deps === n && (tt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, so++, this.notify(t);
  }
  notify(t) {
    fu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      vu();
    }
  }
}
function iv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        iv(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const yi = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ Symbol(
  ""
), os = /* @__PURE__ */ Symbol(
  ""
), uo = /* @__PURE__ */ Symbol(
  ""
);
function Ft(e, t, n) {
  if (hn && tt) {
    let a = yi.get(e);
    a || yi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Yi()), l.map = a, l.key = n), l.track();
  }
}
function zn(e, t, n, a, l, o) {
  const i = yi.get(e);
  if (!i) {
    so++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (fu(), t === "clear")
    i.forEach(r);
  else {
    const s = Me(e), u = s && Wi(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === uo || !xa(f) && f >= c) && r(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(uo)), t) {
        case "add":
          s ? u && r(i.get("length")) : (r(i.get(Fa)), kl(e) && r(i.get(os)));
          break;
        case "delete":
          s || (r(i.get(Fa)), kl(e) && r(i.get(os)));
          break;
        case "set":
          kl(e) && r(i.get(Fa));
          break;
      }
  }
  vu();
}
function Mb(e, t) {
  const n = yi.get(e);
  return n && n.get(t);
}
function ul(e) {
  const t = /* @__PURE__ */ Ie(e);
  return t === e ? t : (Ft(t, "iterate", uo), /* @__PURE__ */ fn(e) ? t : t.map(qn));
}
function gu(e) {
  return Ft(e = /* @__PURE__ */ Ie(e), "iterate", uo), e;
}
function ua(e, t) {
  return /* @__PURE__ */ ga(e) ? co(/* @__PURE__ */ La(e) ? qn(t) : t) : qn(t);
}
const Bb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mr(this, Symbol.iterator, (e) => ua(this, e));
  },
  concat(...e) {
    return ul(this).concat(
      ...e.map((t) => Me(t) ? ul(t) : t)
    );
  },
  entries() {
    return Mr(this, "entries", (e) => (e[1] = ua(this, e[1]), e));
  },
  every(e, t) {
    return $n(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $n(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => ua(this, a)),
      arguments
    );
  },
  find(e, t) {
    return $n(
      this,
      "find",
      e,
      t,
      (n) => ua(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return $n(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $n(
      this,
      "findLast",
      e,
      t,
      (n) => ua(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $n(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $n(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Br(this, "includes", e);
  },
  indexOf(...e) {
    return Br(this, "indexOf", e);
  },
  join(e) {
    return ul(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Br(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $n(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jl(this, "pop");
  },
  push(...e) {
    return jl(this, "push", e);
  },
  reduce(e, ...t) {
    return $c(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return $c(this, "reduceRight", e, t);
  },
  shift() {
    return jl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $n(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jl(this, "splice", e);
  },
  toReversed() {
    return ul(this).toReversed();
  },
  toSorted(e) {
    return ul(this).toSorted(e);
  },
  toSpliced(...e) {
    return ul(this).toSpliced(...e);
  },
  unshift(...e) {
    return jl(this, "unshift", e);
  },
  values() {
    return Mr(this, "values", (e) => ua(this, e));
  }
};
function Mr(e, t, n) {
  const a = gu(e), l = a[t]();
  return a !== e && !/* @__PURE__ */ fn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Fb = Array.prototype;
function $n(e, t, n, a, l, o) {
  const i = gu(e), r = i !== e && !/* @__PURE__ */ fn(e), s = i[t];
  if (s !== Fb[t]) {
    const d = s.apply(e, o);
    return r ? qn(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, ua(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function $c(e, t, n, a) {
  const l = gu(e);
  let o = n;
  return l !== e && (/* @__PURE__ */ fn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, ua(e, r), s, e);
  }), l[t](o, ...a);
}
function Br(e, t, n) {
  const a = /* @__PURE__ */ Ie(e);
  Ft(a, "iterate", uo);
  const l = a[t](...n);
  return (l === -1 || l === !1) && /* @__PURE__ */ Mo(n[0]) ? (n[0] = /* @__PURE__ */ Ie(n[0]), a[t](...n)) : l;
}
function jl(e, t, n = []) {
  Kn(), fu();
  const a = (/* @__PURE__ */ Ie(e))[t].apply(e, n);
  return vu(), Gn(), a;
}
const Lb = /* @__PURE__ */ su("__proto__,__v_isRef,__isVue"), rv = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xa)
);
function Ob(e) {
  xa(e) || (e = String(e));
  const t = /* @__PURE__ */ Ie(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class sv {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return a === (l ? o ? Kb : fv : o ? dv : cv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Me(t);
    if (!l) {
      let s;
      if (i && (s = Bb[n]))
        return s;
      if (n === "hasOwnProperty")
        return Ob;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ st(t) ? t : a
    );
    if ((xa(n) ? rv.has(n) : Lb(n)) || (l || Ft(t, "get", n), o))
      return r;
    if (/* @__PURE__ */ st(r)) {
      const s = i && Wi(n) ? r : r.value;
      return l && nt(s) ? /* @__PURE__ */ za(s) : s;
    }
    return nt(r) ? l ? /* @__PURE__ */ za(r) : /* @__PURE__ */ pt(r) : r;
  }
}
class uv extends sv {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Me(t) && Wi(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ga(o);
      if (!/* @__PURE__ */ fn(a) && !/* @__PURE__ */ ga(a) && (o = /* @__PURE__ */ Ie(o), a = /* @__PURE__ */ Ie(a)), !i && /* @__PURE__ */ st(o) && !/* @__PURE__ */ st(a))
        return u || (o.value = a), !0;
    }
    const r = i ? Number(n) < t.length : Ge(t, n), s = Reflect.set(
      t,
      n,
      a,
      /* @__PURE__ */ st(t) ? t : l
    );
    return t === /* @__PURE__ */ Ie(l) && (r ? fa(a, o) && zn(t, "set", n, a) : zn(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = Ge(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && zn(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!xa(n) || !rv.has(n)) && Ft(t, "has", n), a;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Me(t) ? "length" : Fa
    ), Reflect.ownKeys(t);
  }
}
class $b extends sv {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Nb = /* @__PURE__ */ new uv(), Rb = /* @__PURE__ */ new $b(), Hb = /* @__PURE__ */ new uv(!0);
const is = (e) => e, Zo = (e) => Reflect.getPrototypeOf(e);
function Wb(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = /* @__PURE__ */ Ie(l), i = kl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? is : t ? co : qn;
    return !t && Ft(
      o,
      "iterate",
      s ? os : Fa
    ), wt(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = u.next();
          return f ? { value: d, done: f } : {
            value: r ? [c(d[0]), c(d[1])] : c(d),
            done: f
          };
        }
      }
    );
  };
}
function Jo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zb(e, t) {
  const n = {
    get(l) {
      const o = this.__v_raw, i = /* @__PURE__ */ Ie(o), r = /* @__PURE__ */ Ie(l);
      e || (fa(l, r) && Ft(i, "get", l), Ft(i, "get", r));
      const { has: s } = Zo(i), u = t ? is : e ? co : qn;
      if (s.call(i, l))
        return u(o.get(l));
      if (s.call(i, r))
        return u(o.get(r));
      o !== i && o.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(/* @__PURE__ */ Ie(l), "iterate", Fa), l.size;
    },
    has(l) {
      const o = this.__v_raw, i = /* @__PURE__ */ Ie(o), r = /* @__PURE__ */ Ie(l);
      return e || (fa(l, r) && Ft(i, "has", l), Ft(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
    },
    forEach(l, o) {
      const i = this, r = i.__v_raw, s = /* @__PURE__ */ Ie(r), u = t ? is : e ? co : qn;
      return !e && Ft(s, "iterate", Fa), r.forEach((c, d) => l.call(o, u(c), u(d), i));
    }
  };
  return wt(
    n,
    e ? {
      add: Jo("add"),
      set: Jo("set"),
      delete: Jo("delete"),
      clear: Jo("clear")
    } : {
      add(l) {
        !t && !/* @__PURE__ */ fn(l) && !/* @__PURE__ */ ga(l) && (l = /* @__PURE__ */ Ie(l));
        const o = /* @__PURE__ */ Ie(this);
        return Zo(o).has.call(o, l) || (o.add(l), zn(o, "add", l, l)), this;
      },
      set(l, o) {
        !t && !/* @__PURE__ */ fn(o) && !/* @__PURE__ */ ga(o) && (o = /* @__PURE__ */ Ie(o));
        const i = /* @__PURE__ */ Ie(this), { has: r, get: s } = Zo(i);
        let u = r.call(i, l);
        u || (l = /* @__PURE__ */ Ie(l), u = r.call(i, l));
        const c = s.call(i, l);
        return i.set(l, o), u ? fa(o, c) && zn(i, "set", l, o) : zn(i, "add", l, o), this;
      },
      delete(l) {
        const o = /* @__PURE__ */ Ie(this), { has: i, get: r } = Zo(o);
        let s = i.call(o, l);
        s || (l = /* @__PURE__ */ Ie(l), s = i.call(o, l)), r && r.call(o, l);
        const u = o.delete(l);
        return s && zn(o, "delete", l, void 0), u;
      },
      clear() {
        const l = /* @__PURE__ */ Ie(this), o = l.size !== 0, i = l.clear();
        return o && zn(
          l,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    n[l] = Wb(l, e, t);
  }), n;
}
function hu(e, t) {
  const n = zb(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    Ge(n, l) && l in a ? n : a,
    l,
    o
  );
}
const jb = {
  get: /* @__PURE__ */ hu(!1, !1)
}, Yb = {
  get: /* @__PURE__ */ hu(!1, !0)
}, Ub = {
  get: /* @__PURE__ */ hu(!0, !1)
};
const cv = /* @__PURE__ */ new WeakMap(), dv = /* @__PURE__ */ new WeakMap(), fv = /* @__PURE__ */ new WeakMap(), Kb = /* @__PURE__ */ new WeakMap();
function Gb(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function qb(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gb(kb(e));
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return /* @__PURE__ */ ga(e) ? e : yu(
    e,
    !1,
    Nb,
    jb,
    cv
  );
}
// @__NO_SIDE_EFFECTS__
function Xb(e) {
  return yu(
    e,
    !1,
    Hb,
    Yb,
    dv
  );
}
// @__NO_SIDE_EFFECTS__
function za(e) {
  return yu(
    e,
    !0,
    Rb,
    Ub,
    fv
  );
}
function yu(e, t, n, a, l) {
  if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = qb(e);
  if (o === 0)
    return e;
  const i = l.get(e);
  if (i)
    return i;
  const r = new Proxy(
    e,
    o === 2 ? a : n
  );
  return l.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function La(e) {
  return /* @__PURE__ */ ga(e) ? /* @__PURE__ */ La(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ie(t) : e;
}
function vv(e) {
  return !Ge(e, "__v_skip") && Object.isExtensible(e) && Kf(e, "__v_skip", !0), e;
}
const qn = (e) => nt(e) ? /* @__PURE__ */ pt(e) : e, co = (e) => nt(e) ? /* @__PURE__ */ za(e) : e;
// @__NO_SIDE_EFFECTS__
function st(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return mv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return mv(e, !0);
}
function mv(e, t) {
  return /* @__PURE__ */ st(e) ? e : new Zb(e, t);
}
class Zb {
  constructor(t, n) {
    this.dep = new Yi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ie(t), this._value = n ? t : qn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ fn(t) || /* @__PURE__ */ ga(t);
    t = a ? t : /* @__PURE__ */ Ie(t), fa(t, n) && (this._rawValue = t, this._value = a ? t : qn(t), this.dep.trigger());
  }
}
function be(e) {
  return /* @__PURE__ */ st(e) ? e.value : e;
}
function kt(e) {
  return Le(e) ? e() : be(e);
}
const Jb = {
  get: (e, t, n) => t === "__v_raw" ? e : be(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return /* @__PURE__ */ st(l) && !/* @__PURE__ */ st(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function gv(e) {
  return /* @__PURE__ */ La(e) ? e : new Proxy(e, Jb);
}
class Qb {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Yi(), { get: a, set: l } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = a, this._set = l;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function eS(e) {
  return new Qb(e);
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  const t = Me(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = hv(e, n);
  return t;
}
class tS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ Ie(t);
    let l = !0, o = t;
    if (!Me(t) || !Wi(String(n)))
      do
        l = !/* @__PURE__ */ Mo(o) || /* @__PURE__ */ fn(o);
      while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = be(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ st(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ st(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Mb(this._raw, this._key);
  }
}
class nS {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function E(e, t, n) {
  return /* @__PURE__ */ st(e) ? e : Le(e) ? new nS(e) : nt(e) && arguments.length > 1 ? hv(e, t, n) : /* @__PURE__ */ ae(e);
}
function hv(e, t, n) {
  return new tS(e, t, n);
}
class aS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = so - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return tv(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function lS(e, t, n = !1) {
  let a, l;
  return Le(e) ? a = e : (a = e.get, l = e.set), new aS(a, l, n);
}
const Qo = {}, bi = /* @__PURE__ */ new WeakMap();
let Da;
function oS(e, t = !1, n = Da) {
  if (n) {
    let a = bi.get(n);
    a || bi.set(n, a = []), a.push(e);
  }
}
function iS(e, t, n = Qe) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (b) => l ? b : /* @__PURE__ */ fn(b) || l === !1 || l === 0 ? jn(b, 1) : jn(b);
  let c, d, f, v, k = !1, m = !1;
  if (/* @__PURE__ */ st(e) ? (d = () => e.value, k = /* @__PURE__ */ fn(e)) : /* @__PURE__ */ La(e) ? (d = () => u(e), k = !0) : Me(e) ? (m = !0, k = e.some((b) => /* @__PURE__ */ La(b) || /* @__PURE__ */ fn(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ st(b))
      return b.value;
    if (/* @__PURE__ */ La(b))
      return u(b);
    if (Le(b))
      return s ? s(b, 2) : b();
  })) : Le(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      Kn();
      try {
        f();
      } finally {
        Gn();
      }
    }
    const b = Da;
    Da = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Da = b;
    }
  } : d = Pn, t && l) {
    const b = d, S = l === !0 ? 1 / 0 : l;
    d = () => jn(b(), S);
  }
  const y = Jf(), h = () => {
    c.stop(), y && y.active && cu(y.effects, c);
  };
  if (o && t) {
    const b = t;
    t = (...S) => {
      b(...S), h();
    };
  }
  let x = m ? new Array(e.length).fill(Qo) : Qo;
  const w = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const S = c.run();
        if (l || k || (m ? S.some((g, I) => fa(g, x[I])) : fa(S, x))) {
          f && f();
          const g = Da;
          Da = c;
          try {
            const I = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === Qo ? void 0 : m && x[0] === Qo ? [] : x,
              v
            ];
            x = S, s ? s(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Da = g;
          }
        }
      } else
        c.run();
  };
  return r && r(w), c = new Qf(d), c.scheduler = i ? () => i(w, !1) : w, v = (b) => oS(b, !1, c), f = c.onStop = () => {
    const b = bi.get(c);
    if (b) {
      if (s)
        s(b, 4);
      else
        for (const S of b) S();
      bi.delete(c);
    }
  }, t ? a ? w(!0) : x = c.run() : i ? i(w.bind(null, !0), !0) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function jn(e, t = 1 / 0, n) {
  if (t <= 0 || !nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ st(e))
    jn(e.value, t, n);
  else if (Me(e))
    for (let a = 0; a < e.length; a++)
      jn(e[a], t, n);
  else if (zf(e) || kl(e))
    e.forEach((a) => {
      jn(a, t, n);
    });
  else if (Uf(e)) {
    for (const a in e)
      jn(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && jn(e[a], t, n);
  }
  return e;
}
function Bo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Ui(l, t, n);
  }
}
function Sn(e, t, n, a) {
  if (Le(e)) {
    const l = Bo(e, t, n, a);
    return l && jf(l) && l.catch((o) => {
      Ui(o, t, n);
    }), l;
  }
  if (Me(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++)
      l.push(Sn(e[o], t, n, a));
    return l;
  }
}
function Ui(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Qe;
  if (t) {
    let r = t.parent;
    const s = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, s, u) === !1)
            return;
      }
      r = r.parent;
    }
    if (o) {
      Kn(), Bo(o, null, 10, [
        e,
        s,
        u
      ]), Gn();
      return;
    }
  }
  rS(e, n, l, a, i);
}
function rS(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Wt = [];
let Vn = -1;
const wl = [];
let ca = null, ml = 0;
const yv = /* @__PURE__ */ Promise.resolve();
let Si = null;
function Te(e) {
  const t = Si || yv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sS(e) {
  let t = Vn + 1, n = Wt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Wt[a], o = fo(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function bu(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = Wt[Wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? Wt.push(e) : Wt.splice(sS(t), 0, e), e.flags |= 1, bv();
  }
}
function bv() {
  Si || (Si = yv.then(kv));
}
function uS(e) {
  Me(e) ? wl.push(...e) : ca && e.id === -1 ? ca.splice(ml + 1, 0, e) : e.flags & 1 || (wl.push(e), e.flags |= 1), bv();
}
function Nc(e, t, n = Vn + 1) {
  for (; n < Wt.length; n++) {
    const a = Wt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Wt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Sv(e) {
  if (wl.length) {
    const t = [...new Set(wl)].sort(
      (n, a) => fo(n) - fo(a)
    );
    if (wl.length = 0, ca) {
      ca.push(...t);
      return;
    }
    for (ca = t, ml = 0; ml < ca.length; ml++) {
      const n = ca[ml];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ca = null, ml = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kv(e) {
  try {
    for (Vn = 0; Vn < Wt.length; Vn++) {
      const t = Wt[Vn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vn < Wt.length; Vn++) {
      const t = Wt[Vn];
      t && (t.flags &= -2);
    }
    Vn = -1, Wt.length = 0, Sv(), Si = null, (Wt.length || wl.length) && kv();
  }
}
let Zt = null, wv = null;
function ki(e) {
  const t = Zt;
  return Zt = e, wv = e && e.type.__scopeId || null, t;
}
function pv(e, t = Zt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && xi(-1);
    const o = ki(t);
    let i;
    try {
      i = e(...l);
    } finally {
      ki(o), a._d && xi(1);
    }
    return i;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function qe(e, t) {
  if (Zt === null)
    return e;
  const n = Ji(Zt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = Qe] = t[l];
    o && (Le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && jn(i), a.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: r,
      modifiers: s
    }));
  }
  return e;
}
function Va(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (Kn(), Sn(s, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Gn());
  }
}
function Ze(e, t) {
  if (Lt) {
    let n = Lt.provides;
    const a = Lt.parent && Lt.parent.provides;
    a === n && (n = Lt.provides = Object.create(a)), n[e] = t;
  }
}
function $e(e, t, n = !1) {
  const a = Lo();
  if (a || pl) {
    let l = pl ? pl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && Le(t) ? t.call(a && a.proxy) : t;
  }
}
const cS = /* @__PURE__ */ Symbol.for("v-scx"), dS = () => $e(cS);
function at(e, t) {
  return Su(e, null, t);
}
function ue(e, t, n) {
  return Su(e, t, n);
}
function Su(e, t, n = Qe) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = wt({}, n), s = t && a || !t && o !== "post";
  let u;
  if (ho) {
    if (o === "sync") {
      const v = dS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Pn, v.resume = Pn, v.pause = Pn, v;
    }
  }
  const c = Lt;
  r.call = (v, k, m) => Sn(v, c, k, m);
  let d = !1;
  o === "post" ? r.scheduler = (v) => {
    Ht(v, c && c.suspense);
  } : o !== "sync" && (d = !0, r.scheduler = (v, k) => {
    k ? v() : bu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = iS(e, t, r);
  return ho && (u ? u.push(f) : s && f()), f;
}
function fS(e, t, n) {
  const a = this.proxy, l = ut(e) ? e.includes(".") ? xv(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Le(t) ? o = t : (o = t.handler, n = t);
  const i = Oo(this), r = Su(l, o.bind(a), n);
  return i(), r;
}
function xv(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const Cv = /* @__PURE__ */ Symbol("_vte"), _v = (e) => e.__isTeleport, to = (e) => e && (e.disabled || e.disabled === ""), Rc = (e) => e && (e.defer || e.defer === ""), Hc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rs = (e, t) => {
  const n = e && e.to;
  return ut(n) ? t ? t(n) : null : n;
}, Vv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, o, i, r, s, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: v, querySelector: k, createText: m, createComment: y }
    } = u, h = to(t.props);
    let { shapeFlag: x, children: w, dynamicChildren: b } = t;
    if (e == null) {
      const S = t.el = m(""), g = t.anchor = m("");
      v(S, n, a), v(g, n, a);
      const I = (T, P) => {
        x & 16 && c(
          w,
          T,
          P,
          l,
          o,
          i,
          r,
          s
        );
      }, C = () => {
        const T = t.target = rs(t.props, k), P = Iv(T, t, m, v);
        T && (i !== "svg" && Hc(T) ? i = "svg" : i !== "mathml" && Wc(T) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), h || (I(T, P), di(t, !1)));
      };
      h && (I(n, g), di(t, !0)), Rc(t.props) ? (t.el.__isMounted = !1, Ht(() => {
        C(), delete t.el.__isMounted;
      }, o)) : C();
    } else {
      if (Rc(t.props) && e.el.__isMounted === !1) {
        Ht(() => {
          Vv.process(
            e,
            t,
            n,
            a,
            l,
            o,
            i,
            r,
            s,
            u
          );
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, g = t.target = e.target, I = t.targetAnchor = e.targetAnchor, C = to(e.props), T = C ? n : g, P = C ? S : I;
      if (i === "svg" || Hc(g) ? i = "svg" : (i === "mathml" || Wc(g)) && (i = "mathml"), b ? (f(
        e.dynamicChildren,
        b,
        T,
        l,
        o,
        i,
        r
      ), Cu(e, t, !0)) : s || d(
        e,
        t,
        T,
        P,
        l,
        o,
        i,
        r,
        !1
      ), h)
        C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ei(
          t,
          n,
          S,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = rs(
          t.props,
          k
        );
        F && ei(
          t,
          F,
          null,
          u,
          0
        );
      } else C && ei(
        t,
        g,
        I,
        u,
        1
      );
      di(t, h);
    }
  },
  remove(e, t, n, { um: a, o: { remove: l } }, o) {
    const {
      shapeFlag: i,
      children: r,
      anchor: s,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e;
    if (d && (l(u), l(c)), o && l(s), i & 16) {
      const v = o || !to(f);
      for (let k = 0; k < r.length; k++) {
        const m = r[k];
        a(
          m,
          t,
          n,
          v,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: ei,
  hydrate: vS
};
function ei(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || to(c)) && s & 16)
    for (let f = 0; f < u.length; f++)
      l(
        u[f],
        t,
        n,
        2
      );
  d && a(r, t, n);
}
function vS(e, t, n, a, l, o, {
  o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c }
}, d) {
  function f(m, y, h, x) {
    y.anchor = d(
      i(m),
      y,
      r(m),
      n,
      a,
      l,
      o
    ), y.targetStart = h, y.targetAnchor = x;
  }
  const v = t.target = rs(
    t.props,
    s
  ), k = to(t.props);
  if (v) {
    const m = v._lpa || v.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        f(
          e,
          t,
          m,
          m && i(m)
        );
      else {
        t.anchor = i(e);
        let y = m;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, v._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          y = i(y);
        }
        t.targetAnchor || Iv(v, t, c, u), d(
          m && i(m),
          t,
          v,
          n,
          a,
          l,
          o
        );
      }
    di(t, k);
  } else k && t.shapeFlag & 16 && f(e, t, e, i(e));
  return t.anchor && i(t.anchor);
}
const mS = Vv;
function di(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Iv(e, t, n, a) {
  const l = t.targetStart = n(""), o = t.targetAnchor = n("");
  return l[Cv] = o, e && (a(l, e), a(o, e)), o;
}
const Hn = /* @__PURE__ */ Symbol("_leaveCb"), ti = /* @__PURE__ */ Symbol("_enterCb");
function Pv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return yt(() => {
    e.isMounted = !0;
  }), Dt(() => {
    e.isUnmounting = !0;
  }), e;
}
const cn = [Function, Array], Tv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: cn,
  onEnter: cn,
  onAfterEnter: cn,
  onEnterCancelled: cn,
  // leave
  onBeforeLeave: cn,
  onLeave: cn,
  onAfterLeave: cn,
  onLeaveCancelled: cn,
  // appear
  onBeforeAppear: cn,
  onAppear: cn,
  onAfterAppear: cn,
  onAppearCancelled: cn
}, Av = (e) => {
  const t = e.subTree;
  return t.component ? Av(t.component) : t;
}, gS = {
  name: "BaseTransition",
  props: Tv,
  setup(e, { slots: t }) {
    const n = Lo(), a = Pv();
    return () => {
      const l = t.default && ku(t.default(), !0);
      if (!l || !l.length)
        return;
      const o = Dv(l), i = /* @__PURE__ */ Ie(e), { mode: r } = i;
      if (a.isLeaving)
        return Fr(o);
      const s = zc(o);
      if (!s)
        return Fr(o);
      let u = vo(
        s,
        i,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      s.type !== Kt && ja(s, u);
      let c = n.subTree && zc(n.subTree);
      if (c && c.type !== Kt && !Ma(c, s) && Av(n).type !== Kt) {
        let d = vo(
          c,
          i,
          a,
          n
        );
        if (ja(c, d), r === "out-in" && s.type !== Kt)
          return a.isLeaving = !0, d.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Fr(o);
        r === "in-out" && s.type !== Kt ? d.delayLeave = (f, v, k) => {
          const m = Ev(
            a,
            c
          );
          m[String(c.key)] = c, f[Hn] = () => {
            v(), f[Hn] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            k(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function Dv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Kt) {
        t = n;
        break;
      }
  }
  return t;
}
const hS = gS;
function Ev(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function vo(e, t, n, a, l) {
  const {
    appear: o,
    mode: i,
    persisted: r = !1,
    onBeforeEnter: s,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: v,
    onAfterLeave: k,
    onLeaveCancelled: m,
    onBeforeAppear: y,
    onAppear: h,
    onAfterAppear: x,
    onAppearCancelled: w
  } = t, b = String(e.key), S = Ev(n, e), g = (T, P) => {
    T && Sn(
      T,
      a,
      9,
      P
    );
  }, I = (T, P) => {
    const F = P[1];
    g(T, P), Me(T) ? T.every((A) => A.length <= 1) && F() : T.length <= 1 && F();
  }, C = {
    mode: i,
    persisted: r,
    beforeEnter(T) {
      let P = s;
      if (!n.isMounted)
        if (o)
          P = y || s;
        else
          return;
      T[Hn] && T[Hn](
        !0
        /* cancelled */
      );
      const F = S[b];
      F && Ma(e, F) && F.el[Hn] && F.el[Hn](), g(P, [T]);
    },
    enter(T) {
      let P = u, F = c, A = d;
      if (!n.isMounted)
        if (o)
          P = h || u, F = x || c, A = w || d;
        else
          return;
      let B = !1;
      const D = T[ti] = (L) => {
        B || (B = !0, L ? g(A, [T]) : g(F, [T]), C.delayedLeave && C.delayedLeave(), T[ti] = void 0);
      };
      P ? I(P, [T, D]) : D();
    },
    leave(T, P) {
      const F = String(e.key);
      if (T[ti] && T[ti](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      g(f, [T]);
      let A = !1;
      const B = T[Hn] = (D) => {
        A || (A = !0, P(), D ? g(m, [T]) : g(k, [T]), T[Hn] = void 0, S[F] === e && delete S[F]);
      };
      S[F] = e, v ? I(v, [T, B]) : B();
    },
    clone(T) {
      const P = vo(
        T,
        t,
        n,
        a,
        l
      );
      return l && l(P), P;
    }
  };
  return C;
}
function Fr(e) {
  if (Ki(e))
    return e = Xn(e), e.children = null, e;
}
function zc(e) {
  if (!Ki(e))
    return _v(e.type) && e.children ? Dv(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Le(n.default))
      return n.default();
  }
}
function ja(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ja(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ku(e, t = !1, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ye ? (i.patchFlag & 128 && l++, a = a.concat(
      ku(i.children, t, r)
    )) : (t || i.type !== Kt) && a.push(r != null ? Xn(i, { key: r }) : i);
  }
  if (l > 1)
    for (let o = 0; o < a.length; o++)
      a[o].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Mv(e, t) {
  return Le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function At() {
  const e = Lo();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Bv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const wi = /* @__PURE__ */ new WeakMap();
function no(e, t, n, a, l = !1) {
  if (Me(e)) {
    e.forEach(
      (k, m) => no(
        k,
        t && (Me(t) ? t[m] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (ao(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && no(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? Ji(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === Qe ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ Ie(d), v = d === Qe ? Wf : (k) => Ge(f, k);
  if (u != null && u !== s) {
    if (jc(t), ut(u))
      c[u] = null, v(u) && (d[u] = null);
    else if (/* @__PURE__ */ st(u)) {
      u.value = null;
      const k = t;
      k.k && (c[k.k] = null);
    }
  }
  if (Le(s))
    Bo(s, r, 12, [i, c]);
  else {
    const k = ut(s), m = /* @__PURE__ */ st(s);
    if (k || m) {
      const y = () => {
        if (e.f) {
          const h = k ? v(s) ? d[s] : c[s] : s.value;
          if (l)
            Me(h) && cu(h, o);
          else if (Me(h))
            h.includes(o) || h.push(o);
          else if (k)
            c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const x = [o];
            s.value = x, e.k && (c[e.k] = x);
          }
        } else k ? (c[s] = i, v(s) && (d[s] = i)) : m && (s.value = i, e.k && (c[e.k] = i));
      };
      if (i) {
        const h = () => {
          y(), wi.delete(e);
        };
        h.id = -1, wi.set(e, h), Ht(h, n);
      } else
        jc(e), y();
    }
  }
}
function jc(e) {
  const t = wi.get(e);
  t && (t.flags |= 8, wi.delete(e));
}
ji().requestIdleCallback;
ji().cancelIdleCallback;
const ao = (e) => !!e.type.__asyncLoader, Ki = (e) => e.type.__isKeepAlive;
function Fv(e, t) {
  Lv(e, "a", t);
}
function wu(e, t) {
  Lv(e, "da", t);
}
function Lv(e, t, n = Lt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Gi(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      Ki(l.parent.vnode) && yS(a, t, n, l), l = l.parent;
  }
}
function yS(e, t, n, a) {
  const l = Gi(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Xi(() => {
    cu(a[t], l);
  }, n);
}
function Gi(e, t, n = Lt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Kn();
      const r = Oo(n), s = Sn(t, n, e, i);
      return r(), Gn(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const Qn = (e) => (t, n = Lt) => {
  (!ho || e === "sp") && Gi(e, (...a) => t(...a), n);
}, Fl = Qn("bm"), yt = Qn("m"), Ov = Qn(
  "bu"
), qi = Qn("u"), Dt = Qn(
  "bum"
), Xi = Qn("um"), bS = Qn(
  "sp"
), SS = Qn("rtg"), kS = Qn("rtc");
function wS(e, t = Lt) {
  Gi("ec", e, t);
}
const $v = "components";
function Nv(e, t) {
  return Rv($v, e, !0, t) || e;
}
const pS = /* @__PURE__ */ Symbol.for("v-ndc");
function xS(e) {
  return ut(e) && Rv($v, e, !1) || e;
}
function Rv(e, t, n = !0, a = !1) {
  const l = Zt || Lt;
  if (l) {
    const o = l.type;
    {
      const r = sk(
        o,
        !1
      );
      if (r && (r === t || r === zt(t) || r === Bn(zt(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yc(l[e] || o[e], t) || // global registration
      Yc(l.appContext[e], t)
    );
    return !i && a ? o : i;
  }
}
function Yc(e, t) {
  return e && (e[t] || e[zt(t)] || e[Bn(zt(t))]);
}
const ss = (e) => e ? lm(e) ? Ji(e) : ss(e.parent) : null, lo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ss(e.parent),
    $root: (e) => ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wv(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Te.bind(e.proxy)),
    $watch: (e) => fS.bind(e)
  })
), Lr = (e, t) => e !== Qe && !e.__isScriptSetup && Ge(e, t), CS = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: a, data: l, props: o, accessCache: i, type: r, appContext: s } = e;
    if (t[0] !== "$") {
      const f = i[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Lr(a, t))
          return i[t] = 1, a[t];
        if (l !== Qe && Ge(l, t))
          return i[t] = 2, l[t];
        if (Ge(o, t))
          return i[t] = 3, o[t];
        if (n !== Qe && Ge(n, t))
          return i[t] = 4, n[t];
        us && (i[t] = 0);
      }
    }
    const u = lo[t];
    let c, d;
    if (u)
      return t === "$attrs" && Ft(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = r.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Qe && Ge(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = s.config.globalProperties, Ge(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: o } = e;
    return Lr(l, t) ? (l[t] = n, !0) : a !== Qe && Ge(a, t) ? (a[t] = n, !0) : Ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i }
  }, r) {
    let s;
    return !!(n[r] || e !== Qe && r[0] !== "$" && Ge(e, r) || Lr(t, r) || Ge(o, r) || Ge(a, r) || Ge(lo, r) || Ge(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Uc(e) {
  return Me(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let us = !0;
function _S(e) {
  const t = Wv(e), n = e.proxy, a = e.ctx;
  us = !1, t.beforeCreate && Kc(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: o,
    methods: i,
    watch: r,
    provide: s,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: v,
    updated: k,
    activated: m,
    deactivated: y,
    beforeDestroy: h,
    beforeUnmount: x,
    destroyed: w,
    unmounted: b,
    render: S,
    renderTracked: g,
    renderTriggered: I,
    errorCaptured: C,
    serverPrefetch: T,
    // public API
    expose: P,
    inheritAttrs: F,
    // assets
    components: A,
    directives: B,
    filters: D
  } = t;
  if (u && VS(u, a, null), i)
    for (const N in i) {
      const J = i[N];
      Le(J) && (a[N] = J.bind(n));
    }
  if (l) {
    const N = l.call(n, n);
    nt(N) && (e.data = /* @__PURE__ */ pt(N));
  }
  if (us = !0, o)
    for (const N in o) {
      const J = o[N], q = Le(J) ? J.bind(n, n) : Le(J.get) ? J.get.bind(n, n) : Pn, $ = !Le(J) && Le(J.set) ? J.set.bind(n) : Pn, ne = V({
        get: q,
        set: $
      });
      Object.defineProperty(a, N, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (K) => ne.value = K
      });
    }
  if (r)
    for (const N in r)
      Hv(r[N], a, n, N);
  if (s) {
    const N = Le(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((J) => {
      Ze(J, N[J]);
    });
  }
  c && Kc(c, e, "c");
  function W(N, J) {
    Me(J) ? J.forEach((q) => N(q.bind(n))) : J && N(J.bind(n));
  }
  if (W(Fl, d), W(yt, f), W(Ov, v), W(qi, k), W(Fv, m), W(wu, y), W(wS, C), W(kS, g), W(SS, I), W(Dt, x), W(Xi, b), W(bS, T), Me(P))
    if (P.length) {
      const N = e.exposed || (e.exposed = {});
      P.forEach((J) => {
        Object.defineProperty(N, J, {
          get: () => n[J],
          set: (q) => n[J] = q,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Pn && (e.render = S), F != null && (e.inheritAttrs = F), A && (e.components = A), B && (e.directives = B), T && Bv(e);
}
function VS(e, t, n = Pn) {
  Me(e) && (e = cs(e));
  for (const a in e) {
    const l = e[a];
    let o;
    nt(l) ? "default" in l ? o = $e(
      l.from || a,
      l.default,
      !0
    ) : o = $e(l.from || a) : o = $e(l), /* @__PURE__ */ st(o) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[a] = o;
  }
}
function Kc(e, t, n) {
  Sn(
    Me(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hv(e, t, n, a) {
  let l = a.includes(".") ? xv(n, a) : () => n[a];
  if (ut(e)) {
    const o = t[e];
    Le(o) && ue(l, o);
  } else if (Le(e))
    ue(l, e.bind(n));
  else if (nt(e))
    if (Me(e))
      e.forEach((o) => Hv(o, t, n, a));
    else {
      const o = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
      Le(o) && ue(l, o, e);
    }
}
function Wv(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach(
    (u) => pi(s, u, i, !0)
  ), pi(s, t, i)), nt(t) && o.set(t, s), s;
}
function pi(e, t, n, a = !1) {
  const { mixins: l, extends: o } = t;
  o && pi(e, o, n, !0), l && l.forEach(
    (i) => pi(e, i, n, !0)
  );
  for (const i in t)
    if (!(a && i === "expose")) {
      const r = IS[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const IS = {
  data: Gc,
  props: qc,
  emits: qc,
  // objects
  methods: ql,
  computed: ql,
  // lifecycle
  beforeCreate: Rt,
  created: Rt,
  beforeMount: Rt,
  mounted: Rt,
  beforeUpdate: Rt,
  updated: Rt,
  beforeDestroy: Rt,
  beforeUnmount: Rt,
  destroyed: Rt,
  unmounted: Rt,
  activated: Rt,
  deactivated: Rt,
  errorCaptured: Rt,
  serverPrefetch: Rt,
  // assets
  components: ql,
  directives: ql,
  // watch
  watch: TS,
  // provide / inject
  provide: Gc,
  inject: PS
};
function Gc(e, t) {
  return t ? e ? function() {
    return wt(
      Le(e) ? e.call(this, this) : e,
      Le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function PS(e, t) {
  return ql(cs(e), cs(t));
}
function cs(e) {
  if (Me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ql(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qc(e, t) {
  return e ? Me(e) && Me(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    Uc(e),
    Uc(t ?? {})
  ) : t;
}
function TS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = Rt(e[a], t[a]);
  return n;
}
function zv() {
  return {
    app: null,
    config: {
      isNativeTag: Wf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let AS = 0;
function DS(e, t) {
  return function(a, l = null) {
    Le(a) || (a = wt({}, a)), l != null && !nt(l) && (l = null);
    const o = zv(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = !1;
    const u = o.app = {
      _uid: AS++,
      _component: a,
      _props: l,
      _container: null,
      _context: o,
      _instance: null,
      version: ck,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return i.has(c) || (c && Le(c.install) ? (i.add(c), c.install(u, ...d)) : Le(c) && (i.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (o.components[c] = d, u) : o.components[c];
      },
      directive(c, d) {
        return d ? (o.directives[c] = d, u) : o.directives[c];
      },
      mount(c, d, f) {
        if (!s) {
          const v = u._ceVNode || p(a, l);
          return v.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(v, c, f), s = !0, u._container = c, c.__vue_app__ = u, Ji(v.component);
        }
      },
      onUnmount(c) {
        r.push(c);
      },
      unmount() {
        s && (Sn(
          r,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return o.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = pl;
        pl = u;
        try {
          return c();
        } finally {
          pl = d;
        }
      }
    };
    return u;
  };
}
let pl = null;
const ES = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${zt(t)}Modifiers`] || e[`${Qa(t)}Modifiers`];
function MS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Qe;
  let l = n;
  const o = t.startsWith("update:"), i = o && ES(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => ut(c) ? c.trim() : c)), i.number && (l = n.map(du)));
  let r, s = a[r = Ar(t)] || // also try camelCase event handler (#2249)
  a[r = Ar(zt(t))];
  !s && o && (s = a[r = Ar(Qa(t))]), s && Sn(
    s,
    e,
    6,
    l
  );
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Sn(
      u,
      e,
      6,
      l
    );
  }
}
const BS = /* @__PURE__ */ new WeakMap();
function jv(e, t, n = !1) {
  const a = n ? BS : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const o = e.emits;
  let i = {}, r = !1;
  if (!Le(e)) {
    const s = (u) => {
      const c = jv(u, t, !0);
      c && (r = !0, wt(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (nt(e) && a.set(e, null), null) : (Me(o) ? o.forEach((s) => i[s] = null) : wt(i, o), nt(e) && a.set(e, i), i);
}
function Zi(e, t) {
  return !e || !Ri(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ge(e, t[0].toLowerCase() + t.slice(1)) || Ge(e, Qa(t)) || Ge(e, t));
}
function Xc(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    propsOptions: [o],
    slots: i,
    attrs: r,
    emit: s,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: v,
    ctx: k,
    inheritAttrs: m
  } = e, y = ki(e);
  let h, x;
  try {
    if (n.shapeFlag & 4) {
      const b = l || a, S = b;
      h = In(
        u.call(
          S,
          b,
          c,
          d,
          v,
          f,
          k
        )
      ), x = r;
    } else {
      const b = t;
      h = In(
        b.length > 1 ? b(
          d,
          { attrs: r, slots: i, emit: s }
        ) : b(
          d,
          null
        )
      ), x = t.props ? r : FS(r);
    }
  } catch (b) {
    oo.length = 0, Ui(b, e, 1), h = p(Kt);
  }
  let w = h;
  if (x && m !== !1) {
    const b = Object.keys(x), { shapeFlag: S } = w;
    b.length && S & 7 && (o && b.some(uu) && (x = LS(
      x,
      o
    )), w = Xn(w, x, !1, !0));
  }
  return n.dirs && (w = Xn(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && ja(w, n.transition), h = w, ki(y), h;
}
const FS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ri(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, LS = (e, t) => {
  const n = {};
  for (const a in e)
    (!uu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function OS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return a ? Zc(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (i[f] !== a[f] && !Zi(u, f))
          return !0;
      }
    }
  } else
    return (l || r) && (!r || !r.$stable) ? !0 : a === i ? !1 : a ? i ? Zc(a, i, u) : !0 : !!i;
  return !1;
}
function Zc(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (t[o] !== e[o] && !Zi(n, o))
      return !0;
  }
  return !1;
}
function $S({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Yv = {}, Uv = () => Object.create(Yv), Kv = (e) => Object.getPrototypeOf(e) === Yv;
function NS(e, t, n, a = !1) {
  const l = {}, o = Uv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gv(e, t, l, o);
  for (const i in e.propsOptions[0])
    i in l || (l[i] = void 0);
  n ? e.props = a ? l : /* @__PURE__ */ Xb(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function RS(e, t, n, a) {
  const {
    props: l,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, r = /* @__PURE__ */ Ie(l), [s] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Zi(e.emitsOptions, f))
          continue;
        const v = t[f];
        if (s)
          if (Ge(o, f))
            v !== o[f] && (o[f] = v, u = !0);
          else {
            const k = zt(f);
            l[k] = ds(
              s,
              r,
              k,
              v,
              e,
              !1
            );
          }
        else
          v !== o[f] && (o[f] = v, u = !0);
      }
    }
  } else {
    Gv(e, t, l, o) && (u = !0);
    let c;
    for (const d in r)
      (!t || // for camelCase
      !Ge(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Qa(d)) === d || !Ge(t, c))) && (s ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (l[d] = ds(
        s,
        r,
        d,
        void 0,
        e,
        !0
      )) : delete l[d]);
    if (o !== r)
      for (const d in o)
        (!t || !Ge(t, d)) && (delete o[d], u = !0);
  }
  u && zn(e.attrs, "set", "");
}
function Gv(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let s in t) {
      if (Jl(s))
        continue;
      const u = t[s];
      let c;
      l && Ge(l, c = zt(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Zi(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = !0);
    }
  if (o) {
    const s = /* @__PURE__ */ Ie(n), u = r || Qe;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = ds(
        l,
        s,
        d,
        u[d],
        e,
        !Ge(u, d)
      );
    }
  }
  return i;
}
function ds(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = Ge(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && Le(s)) {
        const { propsDefaults: u } = l;
        if (n in u)
          a = u[n];
        else {
          const c = Oo(l);
          a = u[n] = s.call(
            null,
            t
          ), c();
        }
      } else
        a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !r ? a = !1 : i[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Qa(n)) && (a = !0));
  }
  return a;
}
const HS = /* @__PURE__ */ new WeakMap();
function qv(e, t, n = !1) {
  const a = n ? HS : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const o = e.props, i = {}, r = [];
  let s = !1;
  if (!Le(e)) {
    const c = (d) => {
      s = !0;
      const [f, v] = qv(d, t, !0);
      wt(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s)
    return nt(e) && a.set(e, Sl), Sl;
  if (Me(o))
    for (let c = 0; c < o.length; c++) {
      const d = zt(o[c]);
      Jc(d) && (i[d] = Qe);
    }
  else if (o)
    for (const c in o) {
      const d = zt(c);
      if (Jc(d)) {
        const f = o[c], v = i[d] = Me(f) || Le(f) ? { type: f } : wt({}, f), k = v.type;
        let m = !1, y = !0;
        if (Me(k))
          for (let h = 0; h < k.length; ++h) {
            const x = k[h], w = Le(x) && x.name;
            if (w === "Boolean") {
              m = !0;
              break;
            } else w === "String" && (y = !1);
          }
        else
          m = Le(k) && k.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = m, v[
          1
          /* shouldCastTrue */
        ] = y, (m || Ge(v, "default")) && r.push(d);
      }
    }
  const u = [i, r];
  return nt(e) && a.set(e, u), u;
}
function Jc(e) {
  return e[0] !== "$" && !Jl(e);
}
const pu = (e) => e === "_" || e === "_ctx" || e === "$stable", xu = (e) => Me(e) ? e.map(In) : [In(e)], WS = (e, t, n) => {
  if (t._n)
    return t;
  const a = pv((...l) => xu(t(...l)), n);
  return a._c = !1, a;
}, Xv = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (pu(l)) continue;
    const o = e[l];
    if (Le(o))
      t[l] = WS(l, o, a);
    else if (o != null) {
      const i = xu(o);
      t[l] = () => i;
    }
  }
}, Zv = (e, t) => {
  const n = xu(t);
  e.slots.default = () => n;
}, Jv = (e, t, n) => {
  for (const a in t)
    (n || !pu(a)) && (e[a] = t[a]);
}, zS = (e, t, n) => {
  const a = e.slots = Uv();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Jv(a, t, n), n && Kf(a, "_", l, !0)) : Xv(t, a);
  } else t && Zv(e, t);
}, jS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = !0, i = Qe;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = !1 : Jv(l, t, n) : (o = !t.$stable, Xv(t, l)), i = t;
  } else t && (Zv(e, t), i = { default: 1 });
  if (o)
    for (const r in l)
      !pu(r) && i[r] == null && delete l[r];
}, Ht = qS;
function YS(e) {
  return US(e);
}
function US(e, t) {
  const n = ji();
  n.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: o,
    createElement: i,
    createText: r,
    createComment: s,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: v = Pn,
    insertStaticContent: k
  } = e, m = (M, O, j, re = null, z = null, ie = null, me = void 0, Y = null, le = !!O.dynamicChildren) => {
    if (M === O)
      return;
    M && !Ma(M, O) && (re = Z(M), K(M, z, ie, !0), M = null), O.patchFlag === -2 && (le = !1, O.dynamicChildren = null);
    const { type: oe, ref: ge, shapeFlag: he } = O;
    switch (oe) {
      case Fo:
        y(M, O, j, re);
        break;
      case Kt:
        h(M, O, j, re);
        break;
      case $r:
        M == null && x(O, j, re, me);
        break;
      case ye:
        A(
          M,
          O,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le
        );
        break;
      default:
        he & 1 ? S(
          M,
          O,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le
        ) : he & 6 ? B(
          M,
          O,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le
        ) : (he & 64 || he & 128) && oe.process(
          M,
          O,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le,
          Ve
        );
    }
    ge != null && z ? no(ge, M && M.ref, ie, O || M, !O) : ge == null && M && M.ref != null && no(M.ref, null, ie, M, !0);
  }, y = (M, O, j, re) => {
    if (M == null)
      a(
        O.el = r(O.children),
        j,
        re
      );
    else {
      const z = O.el = M.el;
      O.children !== M.children && u(z, O.children);
    }
  }, h = (M, O, j, re) => {
    M == null ? a(
      O.el = s(O.children || ""),
      j,
      re
    ) : O.el = M.el;
  }, x = (M, O, j, re) => {
    [M.el, M.anchor] = k(
      M.children,
      O,
      j,
      re,
      M.el,
      M.anchor
    );
  }, w = ({ el: M, anchor: O }, j, re) => {
    let z;
    for (; M && M !== O; )
      z = f(M), a(M, j, re), M = z;
    a(O, j, re);
  }, b = ({ el: M, anchor: O }) => {
    let j;
    for (; M && M !== O; )
      j = f(M), l(M), M = j;
    l(O);
  }, S = (M, O, j, re, z, ie, me, Y, le) => {
    if (O.type === "svg" ? me = "svg" : O.type === "math" && (me = "mathml"), M == null)
      g(
        O,
        j,
        re,
        z,
        ie,
        me,
        Y,
        le
      );
    else {
      const oe = M.el && M.el._isVueCE ? M.el : null;
      try {
        oe && oe._beginPatch(), T(
          M,
          O,
          z,
          ie,
          me,
          Y,
          le
        );
      } finally {
        oe && oe._endPatch();
      }
    }
  }, g = (M, O, j, re, z, ie, me, Y) => {
    let le, oe;
    const { props: ge, shapeFlag: he, transition: ke, dirs: we } = M;
    if (le = M.el = i(
      M.type,
      ie,
      ge && ge.is,
      ge
    ), he & 8 ? c(le, M.children) : he & 16 && C(
      M.children,
      le,
      null,
      re,
      z,
      Or(M, ie),
      me,
      Y
    ), we && Va(M, null, re, "created"), I(le, M, M.scopeId, me, re), ge) {
      for (const Fe in ge)
        Fe !== "value" && !Jl(Fe) && o(le, Fe, null, ge[Fe], ie, re);
      "value" in ge && o(le, "value", null, ge.value, ie), (oe = ge.onVnodeBeforeMount) && Cn(oe, re, M);
    }
    we && Va(M, null, re, "beforeMount");
    const De = KS(z, ke);
    De && ke.beforeEnter(le), a(le, O, j), ((oe = ge && ge.onVnodeMounted) || De || we) && Ht(() => {
      oe && Cn(oe, re, M), De && ke.enter(le), we && Va(M, null, re, "mounted");
    }, z);
  }, I = (M, O, j, re, z) => {
    if (j && v(M, j), re)
      for (let ie = 0; ie < re.length; ie++)
        v(M, re[ie]);
    if (z) {
      let ie = z.subTree;
      if (O === ie || tm(ie.type) && (ie.ssContent === O || ie.ssFallback === O)) {
        const me = z.vnode;
        I(
          M,
          me,
          me.scopeId,
          me.slotScopeIds,
          z.parent
        );
      }
    }
  }, C = (M, O, j, re, z, ie, me, Y, le = 0) => {
    for (let oe = le; oe < M.length; oe++) {
      const ge = M[oe] = Y ? da(M[oe]) : In(M[oe]);
      m(
        null,
        ge,
        O,
        j,
        re,
        z,
        ie,
        me,
        Y
      );
    }
  }, T = (M, O, j, re, z, ie, me) => {
    const Y = O.el = M.el;
    let { patchFlag: le, dynamicChildren: oe, dirs: ge } = O;
    le |= M.patchFlag & 16;
    const he = M.props || Qe, ke = O.props || Qe;
    let we;
    if (j && Ia(j, !1), (we = ke.onVnodeBeforeUpdate) && Cn(we, j, O, M), ge && Va(O, M, j, "beforeUpdate"), j && Ia(j, !0), (he.innerHTML && ke.innerHTML == null || he.textContent && ke.textContent == null) && c(Y, ""), oe ? P(
      M.dynamicChildren,
      oe,
      Y,
      j,
      re,
      Or(O, z),
      ie
    ) : me || J(
      M,
      O,
      Y,
      null,
      j,
      re,
      Or(O, z),
      ie,
      !1
    ), le > 0) {
      if (le & 16)
        F(Y, he, ke, j, z);
      else if (le & 2 && he.class !== ke.class && o(Y, "class", null, ke.class, z), le & 4 && o(Y, "style", he.style, ke.style, z), le & 8) {
        const De = O.dynamicProps;
        for (let Fe = 0; Fe < De.length; Fe++) {
          const Re = De[Fe], mt = he[Re], Ke = ke[Re];
          (Ke !== mt || Re === "value") && o(Y, Re, mt, Ke, z, j);
        }
      }
      le & 1 && M.children !== O.children && c(Y, O.children);
    } else !me && oe == null && F(Y, he, ke, j, z);
    ((we = ke.onVnodeUpdated) || ge) && Ht(() => {
      we && Cn(we, j, O, M), ge && Va(O, M, j, "updated");
    }, re);
  }, P = (M, O, j, re, z, ie, me) => {
    for (let Y = 0; Y < O.length; Y++) {
      const le = M[Y], oe = O[Y], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ma(le, oe) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? d(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      m(
        le,
        oe,
        ge,
        null,
        re,
        z,
        ie,
        me,
        !0
      );
    }
  }, F = (M, O, j, re, z) => {
    if (O !== j) {
      if (O !== Qe)
        for (const ie in O)
          !Jl(ie) && !(ie in j) && o(
            M,
            ie,
            O[ie],
            null,
            z,
            re
          );
      for (const ie in j) {
        if (Jl(ie)) continue;
        const me = j[ie], Y = O[ie];
        me !== Y && ie !== "value" && o(M, ie, Y, me, z, re);
      }
      "value" in j && o(M, "value", O.value, j.value, z);
    }
  }, A = (M, O, j, re, z, ie, me, Y, le) => {
    const oe = O.el = M ? M.el : r(""), ge = O.anchor = M ? M.anchor : r("");
    let { patchFlag: he, dynamicChildren: ke, slotScopeIds: we } = O;
    we && (Y = Y ? Y.concat(we) : we), M == null ? (a(oe, j, re), a(ge, j, re), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      j,
      ge,
      z,
      ie,
      me,
      Y,
      le
    )) : he > 0 && he & 64 && ke && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    M.dynamicChildren && M.dynamicChildren.length === ke.length ? (P(
      M.dynamicChildren,
      ke,
      j,
      z,
      ie,
      me,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || z && O === z.subTree) && Cu(
      M,
      O,
      !0
      /* shallow */
    )) : J(
      M,
      O,
      j,
      ge,
      z,
      ie,
      me,
      Y,
      le
    );
  }, B = (M, O, j, re, z, ie, me, Y, le) => {
    O.slotScopeIds = Y, M == null ? O.shapeFlag & 512 ? z.ctx.activate(
      O,
      j,
      re,
      me,
      le
    ) : D(
      O,
      j,
      re,
      z,
      ie,
      me,
      le
    ) : L(M, O, le);
  }, D = (M, O, j, re, z, ie, me) => {
    const Y = M.component = ak(
      M,
      re,
      z
    );
    if (Ki(M) && (Y.ctx.renderer = Ve), lk(Y, !1, me), Y.asyncDep) {
      if (z && z.registerDep(Y, W, me), !M.el) {
        const le = Y.subTree = p(Kt);
        h(null, le, O, j), M.placeholder = le.el;
      }
    } else
      W(
        Y,
        M,
        O,
        j,
        z,
        ie,
        me
      );
  }, L = (M, O, j) => {
    const re = O.component = M.component;
    if (OS(M, O, j))
      if (re.asyncDep && !re.asyncResolved) {
        N(re, O, j);
        return;
      } else
        re.next = O, re.update();
    else
      O.el = M.el, re.vnode = O;
  }, W = (M, O, j, re, z, ie, me) => {
    const Y = () => {
      if (M.isMounted) {
        let { next: he, bu: ke, u: we, parent: De, vnode: Fe } = M;
        {
          const sn = Qv(M);
          if (sn) {
            he && (he.el = Fe.el, N(M, he, me)), sn.asyncDep.then(() => {
              M.isUnmounted || Y();
            });
            return;
          }
        }
        let Re = he, mt;
        Ia(M, !1), he ? (he.el = Fe.el, N(M, he, me)) : he = Fe, ke && ci(ke), (mt = he.props && he.props.onVnodeBeforeUpdate) && Cn(mt, De, he, Fe), Ia(M, !0);
        const Ke = Xc(M), Yt = M.subTree;
        M.subTree = Ke, m(
          Yt,
          Ke,
          // parent may have changed if it's in a teleport
          d(Yt.el),
          // anchor may have changed if it's in a fragment
          Z(Yt),
          M,
          z,
          ie
        ), he.el = Ke.el, Re === null && $S(M, Ke.el), we && Ht(we, z), (mt = he.props && he.props.onVnodeUpdated) && Ht(
          () => Cn(mt, De, he, Fe),
          z
        );
      } else {
        let he;
        const { el: ke, props: we } = O, { bm: De, m: Fe, parent: Re, root: mt, type: Ke } = M, Yt = ao(O);
        Ia(M, !1), De && ci(De), !Yt && (he = we && we.onVnodeBeforeMount) && Cn(he, Re, O), Ia(M, !0);
        {
          mt.ce && // @ts-expect-error _def is private
          mt.ce._def.shadowRoot !== !1 && mt.ce._injectChildStyle(Ke);
          const sn = M.subTree = Xc(M);
          m(
            null,
            sn,
            j,
            re,
            M,
            z,
            ie
          ), O.el = sn.el;
        }
        if (Fe && Ht(Fe, z), !Yt && (he = we && we.onVnodeMounted)) {
          const sn = O;
          Ht(
            () => Cn(he, Re, sn),
            z
          );
        }
        (O.shapeFlag & 256 || Re && ao(Re.vnode) && Re.vnode.shapeFlag & 256) && M.a && Ht(M.a, z), M.isMounted = !0, O = j = re = null;
      }
    };
    M.scope.on();
    const le = M.effect = new Qf(Y);
    M.scope.off();
    const oe = M.update = le.run.bind(le), ge = M.job = le.runIfDirty.bind(le);
    ge.i = M, ge.id = M.uid, le.scheduler = () => bu(ge), Ia(M, !0), oe();
  }, N = (M, O, j) => {
    O.component = M;
    const re = M.vnode.props;
    M.vnode = O, M.next = null, RS(M, O.props, re, j), jS(M, O.children, j), Kn(), Nc(M), Gn();
  }, J = (M, O, j, re, z, ie, me, Y, le = !1) => {
    const oe = M && M.children, ge = M ? M.shapeFlag : 0, he = O.children, { patchFlag: ke, shapeFlag: we } = O;
    if (ke > 0) {
      if (ke & 128) {
        $(
          oe,
          he,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le
        );
        return;
      } else if (ke & 256) {
        q(
          oe,
          he,
          j,
          re,
          z,
          ie,
          me,
          Y,
          le
        );
        return;
      }
    }
    we & 8 ? (ge & 16 && fe(oe, z, ie), he !== oe && c(j, he)) : ge & 16 ? we & 16 ? $(
      oe,
      he,
      j,
      re,
      z,
      ie,
      me,
      Y,
      le
    ) : fe(oe, z, ie, !0) : (ge & 8 && c(j, ""), we & 16 && C(
      he,
      j,
      re,
      z,
      ie,
      me,
      Y,
      le
    ));
  }, q = (M, O, j, re, z, ie, me, Y, le) => {
    M = M || Sl, O = O || Sl;
    const oe = M.length, ge = O.length, he = Math.min(oe, ge);
    let ke;
    for (ke = 0; ke < he; ke++) {
      const we = O[ke] = le ? da(O[ke]) : In(O[ke]);
      m(
        M[ke],
        we,
        j,
        null,
        z,
        ie,
        me,
        Y,
        le
      );
    }
    oe > ge ? fe(
      M,
      z,
      ie,
      !0,
      !1,
      he
    ) : C(
      O,
      j,
      re,
      z,
      ie,
      me,
      Y,
      le,
      he
    );
  }, $ = (M, O, j, re, z, ie, me, Y, le) => {
    let oe = 0;
    const ge = O.length;
    let he = M.length - 1, ke = ge - 1;
    for (; oe <= he && oe <= ke; ) {
      const we = M[oe], De = O[oe] = le ? da(O[oe]) : In(O[oe]);
      if (Ma(we, De))
        m(
          we,
          De,
          j,
          null,
          z,
          ie,
          me,
          Y,
          le
        );
      else
        break;
      oe++;
    }
    for (; oe <= he && oe <= ke; ) {
      const we = M[he], De = O[ke] = le ? da(O[ke]) : In(O[ke]);
      if (Ma(we, De))
        m(
          we,
          De,
          j,
          null,
          z,
          ie,
          me,
          Y,
          le
        );
      else
        break;
      he--, ke--;
    }
    if (oe > he) {
      if (oe <= ke) {
        const we = ke + 1, De = we < ge ? O[we].el : re;
        for (; oe <= ke; )
          m(
            null,
            O[oe] = le ? da(O[oe]) : In(O[oe]),
            j,
            De,
            z,
            ie,
            me,
            Y,
            le
          ), oe++;
      }
    } else if (oe > ke)
      for (; oe <= he; )
        K(M[oe], z, ie, !0), oe++;
    else {
      const we = oe, De = oe, Fe = /* @__PURE__ */ new Map();
      for (oe = De; oe <= ke; oe++) {
        const Ut = O[oe] = le ? da(O[oe]) : In(O[oe]);
        Ut.key != null && Fe.set(Ut.key, oe);
      }
      let Re, mt = 0;
      const Ke = ke - De + 1;
      let Yt = !1, sn = 0;
      const _a = new Array(Ke);
      for (oe = 0; oe < Ke; oe++) _a[oe] = 0;
      for (oe = we; oe <= he; oe++) {
        const Ut = M[oe];
        if (mt >= Ke) {
          K(Ut, z, ie, !0);
          continue;
        }
        let un;
        if (Ut.key != null)
          un = Fe.get(Ut.key);
        else
          for (Re = De; Re <= ke; Re++)
            if (_a[Re - De] === 0 && Ma(Ut, O[Re])) {
              un = Re;
              break;
            }
        un === void 0 ? K(Ut, z, ie, !0) : (_a[un - De] = oe + 1, un >= sn ? sn = un : Yt = !0, m(
          Ut,
          O[un],
          j,
          null,
          z,
          ie,
          me,
          Y,
          le
        ), mt++);
      }
      const Tr = Yt ? GS(_a) : Sl;
      for (Re = Tr.length - 1, oe = Ke - 1; oe >= 0; oe--) {
        const Ut = De + oe, un = O[Ut], Bc = O[Ut + 1], Fc = Ut + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bc.el || em(Bc)
        ) : re;
        _a[oe] === 0 ? m(
          null,
          un,
          j,
          Fc,
          z,
          ie,
          me,
          Y,
          le
        ) : Yt && (Re < 0 || oe !== Tr[Re] ? ne(un, j, Fc, 2) : Re--);
      }
    }
  }, ne = (M, O, j, re, z = null) => {
    const { el: ie, type: me, transition: Y, children: le, shapeFlag: oe } = M;
    if (oe & 6) {
      ne(M.component.subTree, O, j, re);
      return;
    }
    if (oe & 128) {
      M.suspense.move(O, j, re);
      return;
    }
    if (oe & 64) {
      me.move(M, O, j, Ve);
      return;
    }
    if (me === ye) {
      a(ie, O, j);
      for (let he = 0; he < le.length; he++)
        ne(le[he], O, j, re);
      a(M.anchor, O, j);
      return;
    }
    if (me === $r) {
      w(M, O, j);
      return;
    }
    if (re !== 2 && oe & 1 && Y)
      if (re === 0)
        Y.beforeEnter(ie), a(ie, O, j), Ht(() => Y.enter(ie), z);
      else {
        const { leave: he, delayLeave: ke, afterLeave: we } = Y, De = () => {
          M.ctx.isUnmounted ? l(ie) : a(ie, O, j);
        }, Fe = () => {
          ie._isLeaving && ie[Hn](
            !0
            /* cancelled */
          ), he(ie, () => {
            De(), we && we();
          });
        };
        ke ? ke(ie, De, Fe) : Fe();
      }
    else
      a(ie, O, j);
  }, K = (M, O, j, re = !1, z = !1) => {
    const {
      type: ie,
      props: me,
      ref: Y,
      children: le,
      dynamicChildren: oe,
      shapeFlag: ge,
      patchFlag: he,
      dirs: ke,
      cacheIndex: we
    } = M;
    if (he === -2 && (z = !1), Y != null && (Kn(), no(Y, null, j, M, !0), Gn()), we != null && (O.renderCache[we] = void 0), ge & 256) {
      O.ctx.deactivate(M);
      return;
    }
    const De = ge & 1 && ke, Fe = !ao(M);
    let Re;
    if (Fe && (Re = me && me.onVnodeBeforeUnmount) && Cn(Re, O, M), ge & 6)
      X(M.component, j, re);
    else {
      if (ge & 128) {
        M.suspense.unmount(j, re);
        return;
      }
      De && Va(M, null, O, "beforeUnmount"), ge & 64 ? M.type.remove(
        M,
        O,
        j,
        Ve,
        re
      ) : oe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !oe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ie !== ye || he > 0 && he & 64) ? fe(
        oe,
        O,
        j,
        !1,
        !0
      ) : (ie === ye && he & 384 || !z && ge & 16) && fe(le, O, j), re && H(M);
    }
    (Fe && (Re = me && me.onVnodeUnmounted) || De) && Ht(() => {
      Re && Cn(Re, O, M), De && Va(M, null, O, "unmounted");
    }, j);
  }, H = (M) => {
    const { type: O, el: j, anchor: re, transition: z } = M;
    if (O === ye) {
      G(j, re);
      return;
    }
    if (O === $r) {
      b(M);
      return;
    }
    const ie = () => {
      l(j), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (M.shapeFlag & 1 && z && !z.persisted) {
      const { leave: me, delayLeave: Y } = z, le = () => me(j, ie);
      Y ? Y(M.el, ie, le) : le();
    } else
      ie();
  }, G = (M, O) => {
    let j;
    for (; M !== O; )
      j = f(M), l(M), M = j;
    l(O);
  }, X = (M, O, j) => {
    const { bum: re, scope: z, job: ie, subTree: me, um: Y, m: le, a: oe } = M;
    Qc(le), Qc(oe), re && ci(re), z.stop(), ie && (ie.flags |= 8, K(me, M, O, j)), Y && Ht(Y, O), Ht(() => {
      M.isUnmounted = !0;
    }, O);
  }, fe = (M, O, j, re = !1, z = !1, ie = 0) => {
    for (let me = ie; me < M.length; me++)
      K(M[me], O, j, re, z);
  }, Z = (M) => {
    if (M.shapeFlag & 6)
      return Z(M.component.subTree);
    if (M.shapeFlag & 128)
      return M.suspense.next();
    const O = f(M.anchor || M.el), j = O && O[Cv];
    return j ? f(j) : O;
  };
  let ce = !1;
  const Ce = (M, O, j) => {
    let re;
    M == null ? O._vnode && (K(O._vnode, null, null, !0), re = O._vnode.component) : m(
      O._vnode || null,
      M,
      O,
      null,
      null,
      null,
      j
    ), O._vnode = M, ce || (ce = !0, Nc(re), Sv(), ce = !1);
  }, Ve = {
    p: m,
    um: K,
    m: ne,
    r: H,
    mt: D,
    mc: C,
    pc: J,
    pbc: P,
    n: Z,
    o: e
  };
  return {
    render: Ce,
    hydrate: void 0,
    createApp: DS(Ce)
  };
}
function Or({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ia({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function KS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cu(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (Me(a) && Me(l))
    for (let o = 0; o < a.length; o++) {
      const i = a[o];
      let r = l[o];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = da(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Cu(i, r)), r.type === Fo && (r.patchFlag !== -1 ? r.el = i.el : r.__elIndex = o + // take fragment start anchor into account
      (e.type === ye ? 1 : 0)), r.type === Kt && !r.el && (r.el = i.el);
    }
}
function GS(e) {
  const t = e.slice(), n = [0];
  let a, l, o, i, r;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (l = n[n.length - 1], e[l] < u) {
        t[a] = l, n.push(a);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        r = o + i >> 1, e[n[r]] < u ? o = r + 1 : i = r;
      u < e[n[o]] && (o > 0 && (t[a] = n[o - 1]), n[o] = a);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Qv(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qv(t);
}
function Qc(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function em(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? em(t.subTree) : null;
}
const tm = (e) => e.__isSuspense;
function qS(e, t) {
  t && t.pendingBranch ? Me(e) ? t.effects.push(...e) : t.effects.push(e) : uS(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Fo = /* @__PURE__ */ Symbol.for("v-txt"), Kt = /* @__PURE__ */ Symbol.for("v-cmt"), $r = /* @__PURE__ */ Symbol.for("v-stc"), oo = [];
let Jt = null;
function XS(e = !1) {
  oo.push(Jt = e ? null : []);
}
function ZS() {
  oo.pop(), Jt = oo[oo.length - 1] || null;
}
let mo = 1;
function xi(e, t = !1) {
  mo += e, e < 0 && Jt && t && (Jt.hasOnce = !0);
}
function JS(e) {
  return e.dynamicChildren = mo > 0 ? Jt || Sl : null, ZS(), mo > 0 && Jt && Jt.push(e), e;
}
function QS(e, t, n, a, l) {
  return JS(
    p(
      e,
      t,
      n,
      a,
      l,
      !0
    )
  );
}
function go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ma(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nm = ({ key: e }) => e ?? null, fi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || /* @__PURE__ */ st(e) || Le(e) ? { i: Zt, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, a = 0, l = null, o = e === ye ? 0 : 1, i = !1, r = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nm(t),
    ref: t && fi(t),
    scopeId: wv,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Zt
  };
  return r ? (_u(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= ut(n) ? 8 : 16), mo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Jt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Jt.push(s), s;
}
const p = ek;
function ek(e, t = null, n = null, a = 0, l = null, o = !1) {
  if ((!e || e === pS) && (e = Kt), go(e)) {
    const r = Xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _u(r, n), mo > 0 && !o && Jt && (r.shapeFlag & 6 ? Jt[Jt.indexOf(e)] = r : Jt.push(r)), r.patchFlag = -2, r;
  }
  if (uk(e) && (e = e.__vccOpts), t) {
    t = am(t);
    let { class: r, style: s } = t;
    r && !ut(r) && (t.class = ee(r)), nt(s) && (/* @__PURE__ */ Mo(s) && !Me(s) && (s = wt({}, s)), t.style = ve(s));
  }
  const i = ut(e) ? 1 : tm(e) ? 128 : _v(e) ? 64 : nt(e) ? 4 : Le(e) ? 2 : 0;
  return _(
    e,
    t,
    n,
    a,
    l,
    i,
    o,
    !0
  );
}
function am(e) {
  return e ? /* @__PURE__ */ Mo(e) || Kv(e) ? wt({}, e) : e : null;
}
function Xn(e, t, n = !1, a = !1) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? U(l || {}, t) : l, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && nm(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Me(o) ? o.concat(fi(t)) : [o, fi(t)] : fi(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: s,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xn(e.ssContent),
    ssFallback: e.ssFallback && Xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && a && ja(
    c,
    s.clone(c)
  ), c;
}
function qt(e = " ", t = 0) {
  return p(Fo, null, e, t);
}
function In(e) {
  return e == null || typeof e == "boolean" ? p(Kt) : Me(e) ? p(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : go(e) ? da(e) : p(Fo, null, String(e));
}
function da(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xn(e);
}
function _u(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Me(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), _u(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Kv(t) ? t._ctx = Zt : l === 3 && Zt && (Zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Le(t) ? (t = { default: t, _ctx: Zt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [qt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function U(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = ee([t.class, a.class]));
      else if (l === "style")
        t.style = ve([t.style, a.style]);
      else if (Ri(l)) {
        const o = t[l], i = a[l];
        i && o !== i && !(Me(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Cn(e, t, n, a = null) {
  Sn(e, t, 7, [
    n,
    a
  ]);
}
const tk = zv();
let nk = 0;
function ak(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || tk, o = {
    uid: nk++,
    vnode: e,
    type: a,
    parent: t,
    appContext: l,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Zf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(l.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qv(a, l),
    emitsOptions: jv(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Qe,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Qe,
    data: Qe,
    props: Qe,
    attrs: Qe,
    slots: Qe,
    refs: Qe,
    setupState: Qe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = MS.bind(null, o), e.ce && e.ce(o), o;
}
let Lt = null;
const Lo = () => Lt || Zt;
let Ci, fs;
{
  const e = ji(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Ci = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Lt = n
  ), fs = t(
    "__VUE_SSR_SETTERS__",
    (n) => ho = n
  );
}
const Oo = (e) => {
  const t = Lt;
  return Ci(e), e.scope.on(), () => {
    e.scope.off(), Ci(t);
  };
}, ed = () => {
  Lt && Lt.scope.off(), Ci(null);
};
function lm(e) {
  return e.vnode.shapeFlag & 4;
}
let ho = !1;
function lk(e, t = !1, n = !1) {
  t && fs(t);
  const { props: a, children: l } = e.vnode, o = lm(e);
  NS(e, a, o, t), zS(e, l, n || t);
  const i = o ? ok(e, t) : void 0;
  return t && fs(!1), i;
}
function ok(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, CS);
  const { setup: a } = n;
  if (a) {
    Kn();
    const l = e.setupContext = a.length > 1 ? rk(e) : null, o = Oo(e), i = Bo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), r = jf(i);
    if (Gn(), o(), (r || e.sp) && !ao(e) && Bv(e), r) {
      if (i.then(ed, ed), t)
        return i.then((s) => {
          td(e, s);
        }).catch((s) => {
          Ui(s, e, 0);
        });
      e.asyncDep = i;
    } else
      td(e, i);
  } else
    om(e);
}
function td(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = gv(t)), om(e);
}
function om(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Pn);
  {
    const l = Oo(e);
    Kn();
    try {
      _S(e);
    } finally {
      Gn(), l();
    }
  }
}
const ik = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function rk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ik),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ji(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gv(vv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lo)
        return lo[n](e);
    },
    has(t, n) {
      return n in t || n in lo;
    }
  })) : e.proxy;
}
function sk(e, t = !0) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uk(e) {
  return Le(e) && "__vccOpts" in e;
}
const V = (e, t) => /* @__PURE__ */ lS(e, t, ho);
function kn(e, t, n) {
  try {
    xi(-1);
    const a = arguments.length;
    return a === 2 ? nt(t) && !Me(t) ? go(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && go(n) && (n = [n]), p(e, t, n));
  } finally {
    xi(1);
  }
}
const ck = "3.5.27";
let vs;
const nd = typeof window < "u" && window.trustedTypes;
if (nd)
  try {
    vs = /* @__PURE__ */ nd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const im = vs ? (e) => vs.createHTML(e) : (e) => e, dk = "http://www.w3.org/2000/svg", fk = "http://www.w3.org/1998/Math/MathML", Rn = typeof document < "u" ? document : null, ad = Rn && /* @__PURE__ */ Rn.createElement("template"), vk = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Rn.createElementNS(dk, e) : t === "mathml" ? Rn.createElementNS(fk, e) : n ? Rn.createElement(e, { is: n }) : Rn.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Rn.createTextNode(e),
  createComment: (e) => Rn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Rn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, l, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (l && (l === o || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), n), !(l === o || !(l = l.nextSibling)); )
        ;
    else {
      ad.innerHTML = im(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const r = ad.content;
      if (a === "svg" || a === "mathml") {
        const s = r.firstChild;
        for (; s.firstChild; )
          r.appendChild(s.firstChild);
        r.removeChild(s);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ra = "transition", Yl = "animation", _l = /* @__PURE__ */ Symbol("_vtc"), rm = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, sm = /* @__PURE__ */ wt(
  {},
  Tv,
  rm
), mk = (e) => (e.displayName = "Transition", e.props = sm, e), ha = /* @__PURE__ */ mk(
  (e, { slots: t }) => kn(hS, um(e), t)
), Pa = (e, t = []) => {
  Me(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ld = (e) => e ? Me(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function um(e) {
  const t = {};
  for (const A in e)
    A in rm || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: a,
    duration: l,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: s = o,
    appearActiveClass: u = i,
    appearToClass: c = r,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, k = gk(l), m = k && k[0], y = k && k[1], {
    onBeforeEnter: h,
    onEnter: x,
    onEnterCancelled: w,
    onLeave: b,
    onLeaveCancelled: S,
    onBeforeAppear: g = h,
    onAppear: I = x,
    onAppearCancelled: C = w
  } = t, T = (A, B, D, L) => {
    A._enterCancelled = L, sa(A, B ? c : r), sa(A, B ? u : i), D && D();
  }, P = (A, B) => {
    A._isLeaving = !1, sa(A, d), sa(A, v), sa(A, f), B && B();
  }, F = (A) => (B, D) => {
    const L = A ? I : x, W = () => T(B, A, D);
    Pa(L, [B, W]), od(() => {
      sa(B, A ? s : o), _n(B, A ? c : r), ld(L) || id(B, a, m, W);
    });
  };
  return wt(t, {
    onBeforeEnter(A) {
      Pa(h, [A]), _n(A, o), _n(A, i);
    },
    onBeforeAppear(A) {
      Pa(g, [A]), _n(A, s), _n(A, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(A, B) {
      A._isLeaving = !0;
      const D = () => P(A, B);
      _n(A, d), A._enterCancelled ? (_n(A, f), ms(A)) : (ms(A), _n(A, f)), od(() => {
        A._isLeaving && (sa(A, d), _n(A, v), ld(b) || id(A, a, y, D));
      }), Pa(b, [A, D]);
    },
    onEnterCancelled(A) {
      T(A, !1, void 0, !0), Pa(w, [A]);
    },
    onAppearCancelled(A) {
      T(A, !0, void 0, !0), Pa(C, [A]);
    },
    onLeaveCancelled(A) {
      P(A), Pa(S, [A]);
    }
  });
}
function gk(e) {
  if (e == null)
    return null;
  if (nt(e))
    return [Nr(e.enter), Nr(e.leave)];
  {
    const t = Nr(e);
    return [t, t];
  }
}
function Nr(e) {
  return xb(e);
}
function _n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[_l] || (e[_l] = /* @__PURE__ */ new Set())).add(t);
}
function sa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[_l];
  n && (n.delete(t), n.size || (e[_l] = void 0));
}
function od(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hk = 0;
function id(e, t, n, a) {
  const l = e._endId = ++hk, o = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = cm(e, t);
  if (!i)
    return a();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), o();
  }, f = (v) => {
    v.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, r + 1), e.addEventListener(u, f);
}
function cm(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${ra}Delay`), o = a(`${ra}Duration`), i = rd(l, o), r = a(`${Yl}Delay`), s = a(`${Yl}Duration`), u = rd(r, s);
  let c = null, d = 0, f = 0;
  t === ra ? i > 0 && (c = ra, d = i, f = o.length) : t === Yl ? u > 0 && (c = Yl, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? ra : Yl : null, f = c ? c === ra ? o.length : s.length : 0);
  const v = c === ra && /\b(?:transform|all)(?:,|$)/.test(
    a(`${ra}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: v
  };
}
function rd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => sd(n) + sd(e[a])));
}
function sd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ms(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function yk(e, t, n) {
  const a = e[_l];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _i = /* @__PURE__ */ Symbol("_vod"), dm = /* @__PURE__ */ Symbol("_vsh"), xn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[_i] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ul(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), Ul(e, !0), a.enter(e)) : a.leave(e, () => {
      Ul(e, !1);
    }) : Ul(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ul(e, t);
  }
};
function Ul(e, t) {
  e.style.display = t ? e[_i] : "none", e[dm] = !t;
}
const bk = /* @__PURE__ */ Symbol(""), Sk = /(?:^|;)\s*display\s*:/;
function kk(e, t, n) {
  const a = e.style, l = ut(n);
  let o = !1;
  if (n && !l) {
    if (t)
      if (ut(t))
        for (const i of t.split(";")) {
          const r = i.slice(0, i.indexOf(":")).trim();
          n[r] == null && vi(a, r, "");
        }
      else
        for (const i in t)
          n[i] == null && vi(a, i, "");
    for (const i in n)
      i === "display" && (o = !0), vi(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[bk];
      i && (n += ";" + i), a.cssText = n, o = Sk.test(n);
    }
  } else t && e.removeAttribute("style");
  _i in e && (e[_i] = o ? a.display : "", e[dm] && (a.display = "none"));
}
const ud = /\s*!important$/;
function vi(e, t, n) {
  if (Me(n))
    n.forEach((a) => vi(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = wk(e, t);
    ud.test(n) ? e.setProperty(
      Qa(a),
      n.replace(ud, ""),
      "important"
    ) : e[a] = n;
  }
}
const cd = ["Webkit", "Moz", "ms"], Rr = {};
function wk(e, t) {
  const n = Rr[t];
  if (n)
    return n;
  let a = zt(t);
  if (a !== "filter" && a in e)
    return Rr[t] = a;
  a = Bn(a);
  for (let l = 0; l < cd.length; l++) {
    const o = cd[l] + a;
    if (o in e)
      return Rr[t] = o;
  }
  return t;
}
const dd = "http://www.w3.org/1999/xlink";
function fd(e, t, n, a, l, o = Ab(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dd, t.slice(6, t.length)) : e.setAttributeNS(dd, t, n) : n == null || o && !Gf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : xa(n) ? String(n) : n
  );
}
function vd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? im(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const r = o === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Gf(n) : n == null && r === "string" ? (n = "", i = !0) : r === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function gl(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function pk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const md = /* @__PURE__ */ Symbol("_vei");
function xk(e, t, n, a, l = null) {
  const o = e[md] || (e[md] = {}), i = o[t];
  if (a && i)
    i.value = a;
  else {
    const [r, s] = Ck(t);
    if (a) {
      const u = o[t] = Ik(
        a,
        l
      );
      gl(e, r, u, s);
    } else i && (pk(e, r, i, s), o[t] = void 0);
  }
}
const gd = /(?:Once|Passive|Capture)$/;
function Ck(e) {
  let t;
  if (gd.test(e)) {
    t = {};
    let a;
    for (; a = e.match(gd); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qa(e.slice(2)), t];
}
let Hr = 0;
const _k = /* @__PURE__ */ Promise.resolve(), Vk = () => Hr || (_k.then(() => Hr = 0), Hr = Date.now());
function Ik(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Sn(
      Pk(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = Vk(), n;
}
function Pk(e, t) {
  if (Me(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const hd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tk = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? yk(e, a, i) : t === "style" ? kk(e, n, a) : Ri(t) ? uu(t) || xk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ak(e, t, a, i)) ? (vd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fd(e, t, a, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ut(a)) ? vd(e, zt(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), fd(e, t, a, i));
};
function Ak(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hd(t) && Le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hd(t) && ut(n) ? !1 : t in e;
}
const fm = /* @__PURE__ */ new WeakMap(), vm = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ Symbol("_moveCb"), yd = /* @__PURE__ */ Symbol("_enterCb"), Dk = (e) => (delete e.props.mode, e), Ek = /* @__PURE__ */ Dk({
  name: "TransitionGroup",
  props: /* @__PURE__ */ wt({}, sm, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Lo(), a = Pv();
    let l, o;
    return qi(() => {
      if (!l.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Lk(
        l[0].el,
        n.vnode.el,
        i
      )) {
        l = [];
        return;
      }
      l.forEach(Mk), l.forEach(Bk);
      const r = l.filter(Fk);
      ms(n.vnode.el), r.forEach((s) => {
        const u = s.el, c = u.style;
        _n(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const d = u[Vi] = (f) => {
          f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Vi] = null, sa(u, i));
        };
        u.addEventListener("transitionend", d);
      }), l = [];
    }), () => {
      const i = /* @__PURE__ */ Ie(e), r = um(i);
      let s = i.tag || ye;
      if (l = [], o)
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c.el && c.el instanceof Element && (l.push(c), ja(
            c,
            vo(
              c,
              r,
              a,
              n
            )
          ), fm.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      o = t.default ? ku(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const c = o[u];
        c.key != null && ja(
          c,
          vo(c, r, a, n)
        );
      }
      return p(s, null, o);
    };
  }
}), Vu = Ek;
function Mk(e) {
  const t = e.el;
  t[Vi] && t[Vi](), t[yd] && t[yd]();
}
function Bk(e) {
  vm.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Fk(e) {
  const t = fm.get(e), n = vm.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${a}px,${l}px)`, o.transitionDuration = "0s", e;
  }
}
function Lk(e, t, n) {
  const a = e.cloneNode(), l = e[_l];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = cm(a);
  return o.removeChild(a), i;
}
const bd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Me(t) ? (n) => ci(t, n) : t;
};
function Ok(e) {
  e.target.composing = !0;
}
function Sd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wr = /* @__PURE__ */ Symbol("_assign");
function kd(e, t, n) {
  return t && (e = e.trim()), n && (e = du(e)), e;
}
const $k = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[Wr] = bd(l);
    const o = a || l.props && l.props.type === "number";
    gl(e, t ? "change" : "input", (i) => {
      i.target.composing || e[Wr](kd(e.value, n, o));
    }), (n || o) && gl(e, "change", () => {
      e.value = kd(e.value, n, o);
    }), t || (gl(e, "compositionstart", Ok), gl(e, "compositionend", Sd), gl(e, "change", Sd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
    if (e[Wr] = bd(i), e.composing) return;
    const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? du(e.value) : e.value, s = t ?? "";
    r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
  }
}, Nk = ["ctrl", "shift", "alt", "meta"], Rk = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Nk.some((n) => e[`${n}Key`] && !t.includes(n))
}, ni = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = Rk[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, Hk = /* @__PURE__ */ wt({ patchProp: Tk }, vk);
let wd;
function mm() {
  return wd || (wd = YS(Hk));
}
const gm = ((...e) => {
  mm().render(...e);
}), Wk = ((...e) => {
  const t = mm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = jk(a);
    if (!l) return;
    const o = t._component;
    !Le(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, !1, zk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function zk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function jk(e) {
  return ut(e) ? document.querySelector(e) : e;
}
function hm(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ye = typeof window < "u", Iu = Ye && "IntersectionObserver" in window, Yk = Ye && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), pd = Ye && "EyeDropper" in window, Pu = Ye && "matchMedia" in window && typeof window.matchMedia == "function", An = () => Pu && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function xd(e, t, n) {
  Uk(e, t), t.set(e, n);
}
function Uk(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Cd(e, t, n) {
  return e.set(ym(e, t), n), n;
}
function Nn(e, t) {
  return e.get(ym(e, t));
}
function ym(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function bm(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Ya(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), bm(e, t.split("."), n));
}
function rt(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return Ya(e, t, n);
  if (Array.isArray(t)) return bm(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function de(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function Ua(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function gs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Tu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const hs = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Sm(e) {
  return Object.keys(e);
}
function Ba(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function jt(e, t) {
  const n = {};
  for (const a of t)
    Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function ys(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Be(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const km = /^on[^a-z]/, Au = (e) => km.test(e), Kk = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Gk = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function qk(e) {
  return e.isComposing && Gk.includes(e.key);
}
function Fn(e) {
  const [t, n] = ys(e, [km]), a = Be(t, Kk), [l, o] = ys(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function Xe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function wm(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), be(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function _d(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Vd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Id(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Xk(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Pd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t)
    return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; )
    e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (gs(o) && gs(i)) {
      a[l] = It(o, i, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(i)) {
      a[l] = n(o, i);
      continue;
    }
    a[l] = i;
  }
  return a;
}
function pm(e) {
  return e.map((t) => t.type === ye ? pm(t.children) : t).flat();
}
function Oa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Oa.cache.has(e)) return Oa.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Oa.cache.set(e, t), t;
}
Oa.cache = /* @__PURE__ */ new Map();
function yl(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => yl(e, n)).flat(1);
  if (t.suspense)
    return yl(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => yl(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e))
      return [t.component];
    if (t.component.subTree)
      return yl(e, t.component.subTree).flat(1);
  }
  return [];
}
var cl = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap();
class xm {
  constructor(t) {
    xd(this, cl, []), xd(this, Ta, 0), this.size = t;
  }
  get isFull() {
    return Nn(cl, this).length === this.size;
  }
  push(t) {
    Nn(cl, this)[Nn(Ta, this)] = t, Cd(Ta, this, (Nn(Ta, this) + 1) % this.size);
  }
  values() {
    return Nn(cl, this).slice(Nn(Ta, this)).concat(Nn(cl, this).slice(0, Nn(Ta, this)));
  }
  clear() {
    Nn(cl, this).length = 0, Cd(Ta, this, 0);
  }
}
function Zk(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function Du(e) {
  const t = /* @__PURE__ */ pt({});
  at(() => {
    const a = e();
    for (const l in a)
      t[l] = a[l];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const a in t)
    n[a] = /* @__PURE__ */ E(() => t[a]);
  return n;
}
function Ii(e, t) {
  return e.includes(t);
}
function Cm(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const _t = () => [Function, Array];
function Td(e, t) {
  return t = "on" + Bn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function $o(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function $a(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let a;
  try {
    a = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return a.filter((l) => !l.closest("[inert]")).filter((l) => !!l.offsetParent || l.getClientRects().length > 0).filter((l) => !l.parentElement?.closest("details:not([open])") || l.tagName === "SUMMARY" && l.parentElement?.tagName === "DETAILS");
}
function _m(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !(n?.(a) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function Na(e, t) {
  const n = $a(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && n[0]?.focus();
  else if (t === "first")
    n[0]?.focus();
  else if (t === "last")
    n.at(-1)?.focus();
  else if (typeof t == "number")
    n[t]?.focus();
  else {
    const a = _m(n, t);
    a ? a.focus() : Na(e, t === "next" ? "first" : "last");
  }
}
function ai(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Qi() {
}
function Vl(e, t) {
  if (!(Ye && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function er(e) {
  return e.some((t) => go(t) ? t.type === Kt ? !1 : t.type !== ye || er(t.children) : !0) ? e : null;
}
function li(e, t, n) {
  return e?.(t) ?? n?.(t);
}
function Jk(e, t) {
  if (!Ye || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Qk(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function Pi() {
  const e = /* @__PURE__ */ se(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Tu(e.value)
  }), t;
}
function Il(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function ya(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Ti(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function e0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Ti(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || // sign allowed at the start
  i === n && r === s.indexOf(i) || // decimal separator allowed only once
  /\d/.test(i)).join("");
  if (t === 0)
    return l.split(n)[0];
  const o = new RegExp(`${Ti(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function t0(e) {
  const t = {};
  for (const n in e)
    t[zt(n)] = e[n];
  return t;
}
function n0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function Ad(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : /* @__PURE__ */ st(n) || /* @__PURE__ */ La(n) || /* @__PURE__ */ Mo(n) ? t(/* @__PURE__ */ Ie(n)) : gs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Vm = ["top", "bottom"], a0 = ["start", "end", "left", "right"];
function bs(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Ii(Vm, n) ? "start" : Ii(a0, n) ? "top" : "center"), {
    side: Ss(n, t),
    align: Ss(a, t)
  };
}
function Ss(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function zr(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function jr(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Dd(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Ed(e) {
  return Ii(Vm, e.side) ? "y" : "x";
}
class dn {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, a = t instanceof Element, l = a ? 1 + (1 - n) / n : 1, {
      x: o,
      y: i,
      width: r,
      height: s
    } = a ? t.getBoundingClientRect() : t;
    this.x = o * l, this.y = i * l, this.width = r * l, this.height = s * l;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Md(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Im(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new dn({
      x: e[0] * n,
      y: e[1] * n,
      width: 0 * n,
      height: 0 * n
    });
  } else
    return new dn(e);
}
function l0(e) {
  if (e === document.documentElement)
    if (visualViewport) {
      const t = document.body.currentCSSZoom ?? 1;
      return new dn({
        x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
        y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
        width: visualViewport.width * visualViewport.scale / t,
        height: visualViewport.height * visualViewport.scale / t
      });
    } else
      return new dn({
        x: 0,
        y: 0,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
  else
    return new dn(e);
}
function Eu(e) {
  const t = new dn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else
      return new dn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new dn({
      x: c,
      y: d,
      width: f,
      height: v
    });
  } else
    return new dn(t);
}
function Wn(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const mi = /* @__PURE__ */ new WeakMap();
function o0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Au(n)) {
      const a = Cm(n), l = mi.get(e);
      if (t[n] == null)
        l?.forEach((o) => {
          const [i, r] = o;
          i === a && (e.removeEventListener(a, r), l.delete(o));
        });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), mi.has(e) || mi.set(e, o);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function i0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Au(n)) {
      const a = Cm(n), l = mi.get(e);
      l?.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else
      e.removeAttribute(n);
  });
}
const dl = 2.4, Bd = 0.2126729, Fd = 0.7151522, Ld = 0.072175, r0 = 0.55, s0 = 0.58, u0 = 0.57, c0 = 0.62, oi = 0.03, Od = 1.45, d0 = 5e-4, f0 = 1.25, v0 = 1.25, $d = 0.078, Nd = 12.82051282051282, ii = 0.06, Rd = 1e-3;
function Hd(e, t) {
  const n = (e.r / 255) ** dl, a = (e.g / 255) ** dl, l = (e.b / 255) ** dl, o = (t.r / 255) ** dl, i = (t.g / 255) ** dl, r = (t.b / 255) ** dl;
  let s = n * Bd + a * Fd + l * Ld, u = o * Bd + i * Fd + r * Ld;
  if (s <= oi && (s += (oi - s) ** Od), u <= oi && (u += (oi - u) ** Od), Math.abs(u - s) < d0) return 0;
  let c;
  if (u > s) {
    const d = (u ** r0 - s ** s0) * f0;
    c = d < Rd ? 0 : d < $d ? d - d * Nd * ii : d - ii;
  } else {
    const d = (u ** c0 - s ** u0) * v0;
    c = d > -Rd ? 0 : d > -$d ? d - d * Nd * ii : d + ii;
  }
  return c * 100;
}
const Ai = 0.20689655172413793, m0 = (e) => e > Ai ** 3 ? Math.cbrt(e) : e / (3 * Ai ** 2) + 4 / 29, g0 = (e) => e > Ai ? e ** 3 : 3 * Ai ** 2 * (e - 4 / 29);
function Pm(e) {
  const t = m0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Tm(e) {
  const t = g0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const h0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], y0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, b0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], S0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Am(e) {
  const t = Array(3), n = y0, a = h0;
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round(je(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function Mu(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], o = S0, i = b0;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function ks(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function k0(e) {
  return ks(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Wd = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, w0 = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => zd({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => zd({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => Dn({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => Dn({
    h: e,
    s: t,
    v: n,
    a
  })
};
function en(e) {
  if (typeof e == "number")
    return {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Wd.test(e)) {
    const {
      groups: t
    } = e.match(Wd), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || // unitless slv are %
    i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return w0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Bm(t);
  } else if (typeof e == "object") {
    if (Ba(e, ["r", "g", "b"]))
      return e;
    if (Ba(e, ["h", "s", "l"]))
      return Dn(Bu(e));
    if (Ba(e, ["h", "s", "v"]))
      return Dn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Dn(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return {
    r: i[0],
    g: i[1],
    b: i[2],
    a: l
  };
}
function zd(e) {
  return Dn(Bu(e));
}
function No(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function ws(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return {
    h: t,
    s: i,
    l: o,
    a: l
  };
}
function Bu(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return {
    h: t,
    s: i,
    v: o,
    a: l
  };
}
function Dm(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Em(e) {
  return Dm(Dn(e));
}
function ri(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Mm(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[ri(t), ri(n), ri(a), l !== void 0 ? ri(Math.round(l * 255)) : ""].join("")}`;
}
function Bm(e) {
  e = x0(e);
  let [t, n, a, l] = Xk(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function p0(e) {
  const t = Bm(e);
  return No(t);
}
function Fm(e) {
  return Mm(Dn(e));
}
function x0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Vd(Vd(e, 6), 8, "F")), e;
}
function C0(e, t) {
  const n = Pm(Mu(e));
  return n[0] = n[0] + t * 10, Am(Tm(n));
}
function _0(e, t) {
  const n = Pm(Mu(e));
  return n[0] = n[0] - t * 10, Am(Tm(n));
}
function ps(e) {
  const t = en(e);
  return Mu(t)[1];
}
function V0(e, t) {
  const n = ps(e), a = ps(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function Lm(e) {
  const t = Math.abs(Hd(en(0), en(e)));
  return Math.abs(Hd(en(16777215), en(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function R(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...i,
      default: n[l]
    } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const Se = R({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function ct(e, t) {
  const n = Lo();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ln() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = ct(e).type;
  return Oa(t?.aliasName || t?.name);
}
function I0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Pl = /* @__PURE__ */ Symbol.for("vuetify:defaults");
function P0(e) {
  return /* @__PURE__ */ ae(e);
}
function Fu() {
  const e = $e(Pl);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function lt(e, t) {
  const n = Fu(), a = /* @__PURE__ */ ae(e), l = V(() => {
    if (be(t?.disabled)) return n.value;
    const i = be(t?.scoped), r = be(t?.reset), s = be(t?.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = It(a.value, {
      prev: n.value
    });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = It(It(u, {
        prev: u
      }), u[s])), u;
    }
    return u.prev ? It(u.prev, u) : u;
  });
  return Ze(Pl, l), l;
}
function T0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Oa(t)] < "u");
}
function A0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fu();
  const a = ct("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = V(() => n.value?.[e._as ?? t]), o = new Proxy(e, {
    get(s, u) {
      const c = Reflect.get(s, u);
      if (u === "class" || u === "style")
        return [l.value?.[u], c].filter((v) => v != null);
      if (T0(a.vnode, u)) return c;
      const d = l.value?.[u];
      if (d !== void 0) return d;
      const f = n.value?.global?.[u];
      return f !== void 0 ? f : c;
    }
  }), i = /* @__PURE__ */ se();
  at(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      i.value = void 0;
  });
  function r() {
    const s = I0(Pl, a);
    Ze(Pl, V(() => i.value ? It(s?.value ?? {}, i.value) : s?.value));
  }
  return {
    props: o,
    provideSubDefaults: r
  };
}
function $t(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return jt(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = Fu();
      if (!o.value) return e._setup(a, l);
      const {
        props: i,
        provideSubDefaults: r
      } = A0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? $t : Mv)(t);
}
function D0(e, t) {
  return t.props = e, t;
}
function ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Q()({
    name: n ?? Bn(zt(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...Se()
    },
    setup(a, l) {
      let {
        slots: o
      } = l;
      return () => kn(a.tag, {
        class: [e, a.class],
        style: a.style
      }, o.default?.());
    }
  });
}
function E0(e, t, n, a) {
  if (!n || ya(e) || ya(t)) return;
  const l = n.get(e);
  if (l)
    l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function M0(e, t, n) {
  if (!n || ya(e) || ya(t)) return null;
  const a = n.get(e)?.get(t);
  if (typeof a == "boolean") return a;
  const l = n.get(t)?.get(e);
  return typeof l == "boolean" ? l : null;
}
function xt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length)
    return !1;
  const l = M0(e, t, n);
  return l || (E0(e, t, n, !0), a.every((o) => xt(e[o], t[o], n)));
}
function Om(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const yo = "cubic-bezier(0.4, 0, 0.2, 1)", jd = "cubic-bezier(0.0, 0, 0.2, 1)", Yd = "cubic-bezier(0.4, 0, 1, 1)", B0 = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5,
  instant: (e) => 1
};
function tn(e, t, n) {
  return Object.keys(e).filter((a) => Au(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => $o(e[l], o, n(o)), a), {});
}
function tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? F0(e) : Lu(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Di(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Lu(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Lu(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function F0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function L0(e) {
  let {
    depth: t,
    isLast: n,
    isLastGroup: a,
    leafLinks: l,
    separateRoots: o,
    parentIndentLines: i,
    variant: r
  } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? {
    leaf: void 0,
    node: void 0,
    children: i,
    footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"]
  } : r === "simple" ? {
    leaf: [...i, "line"],
    node: [...i, "line"],
    children: [...i, "line"],
    footer: [...i, "line", "line"]
  } : {
    leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []],
    node: [...i, s ? "last-leaf" : "leaf"],
    children: [...i, s ? "none" : "line"],
    footer: [...i, s ? "none" : "line"]
  };
}
function O0(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function te(e) {
  const t = ct("useRender");
  t.render = e;
}
function $0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    leading: !0,
    trailing: !0
  }, a = 0, l = 0, o = !1, i = 0;
  function r() {
    clearTimeout(a), o = !1, i = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    i || (i = f);
    const v = f - Math.max(i, l);
    function k() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? k() : n.trailing && (a = setTimeout(k, t - v)) : (o = !0, n.leading && k());
  };
  return s.clear = r, s.immediate = e, s;
}
const xe = [String, Function, Object, Array], xs = /* @__PURE__ */ Symbol.for("vuetify:icons"), nr = R({
  icon: {
    type: xe
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), Cs = Q()({
  name: "VComponentIcon",
  props: nr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return p(e.tag, null, {
        default: () => [e.icon ? p(a, null, null) : n.default?.()]
      });
    };
  }
}), Ou = $t({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: nr(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => p(e.tag, U(n, {
      style: null
    }), {
      default: () => [_("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? _("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : _("path", {
        d: a
      }, null)) : _("path", {
        d: e.icon
      }, null)])]
    });
  }
}), N0 = $t({
  name: "VLigatureIcon",
  props: nr(),
  setup(e) {
    return () => p(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), $u = $t({
  name: "VClassIcon",
  props: nr(),
  setup(e) {
    return () => p(e.tag, {
      class: ee(e.icon)
    }, null);
  }
}), R0 = (e) => {
  const t = $e(xs);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: V(() => {
      const a = kt(e);
      if (!a) return {
        component: Cs
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = t.aliases?.[l.slice(1)])), Array.isArray(l))
        return {
          component: Ou,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Cs,
          icon: l
        };
      const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
      return {
        component: t.sets[o ?? t.defaultSet].component,
        icon: i
      };
    })
  };
}, H0 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  tableGroupCollapse: "mdi-chevron-down",
  tableGroupExpand: "mdi-chevron-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace",
  play: "mdi-play",
  pause: "mdi-pause",
  fullscreen: "mdi-fullscreen",
  fullscreenExit: "mdi-fullscreen-exit",
  volumeHigh: "mdi-volume-high",
  volumeMedium: "mdi-volume-medium",
  volumeLow: "mdi-volume-low",
  volumeOff: "mdi-volume-variant-off"
}, W0 = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => kn($u, {
    ...e,
    class: "mdi"
  })
};
function z0() {
  return {
    svg: {
      component: Ou
    },
    class: {
      component: $u
    }
  };
}
function j0(e) {
  const t = z0(), n = e?.defaultSet ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = W0), It({
    defaultSet: n,
    sets: t,
    aliases: {
      ...H0,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
function Pt(e, t) {
  let n;
  function a() {
    n = Cl(), n.run(() => t.length ? t(() => {
      n?.stop(), a();
    }) : t());
  }
  ue(e, (l) => {
    l && !n ? a() : l || (n?.stop(), n = void 0);
  }, {
    immediate: !0
  }), ot(() => {
    n?.stop();
  });
}
function pe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = ct("useProxiedModel"), i = /* @__PURE__ */ ae(e[t] !== void 0 ? e[t] : n), r = Oa(t), u = V(r !== t ? () => (e[t], !!((o.vnode.props?.hasOwnProperty(t) || o.vnode.props?.hasOwnProperty(r)) && (o.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || o.vnode.props?.hasOwnProperty(`onUpdate:${r}`)))) : () => (e[t], !!(o.vnode.props?.hasOwnProperty(t) && o.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  Pt(() => !u.value, () => {
    ue(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = V({
    get() {
      const d = e[t];
      return a(u.value ? d : i.value);
    },
    set(d) {
      const f = l(d), v = /* @__PURE__ */ Ie(u.value ? e[t] : i.value);
      v === f || a(v) === d || (i.value = f, o?.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : i.value
  }), c;
}
const Y0 = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    },
    ariaLabel: {
      previousMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      previousYear: "Previous year",
      nextYear: "Next year",
      selectMonth: "Select month",
      selectDate: "{0}",
      // Full date format
      currentDate: "Today, {0}"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time",
    hour: "Hour",
    minute: "Minute",
    second: "Second"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}",
    or: "or"
  },
  video: {
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    volume: "Volume",
    showVolume: "Show volume control",
    mute: "Mute",
    unmute: "Unmute",
    enterFullscreen: "Full screen",
    exitFullscreen: "Exit full screen"
  },
  colorPicker: {
    ariaLabel: {
      eyedropper: "Select color with eyedropper",
      hueSlider: "Hue",
      alphaSlider: "Alpha",
      redInput: "Red value",
      greenInput: "Green value",
      blueInput: "Blue value",
      alphaInput: "Alpha value",
      hueInput: "Hue value",
      saturationInput: "Saturation value",
      lightnessInput: "Lightness value",
      hexInput: "HEX value",
      hexaInput: "HEX with alpha value",
      changeFormat: "Change color format"
    }
  }
}, Ud = "$vuetify.", Kd = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), $m = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++)
    o[i - 1] = arguments[i];
  if (!a.startsWith(Ud))
    return Kd(a, o);
  const r = a.replace(Ud, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = Ya(s, r, null);
  return c || (`${a}${e.value}`, c = Ya(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Kd(c, o);
};
function Nu(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Nm(e, t) {
  return Nu(e, t)(0.1).includes(",") ? "," : ".";
}
function Yr(e, t, n) {
  const a = pe(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ue(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Rm(e) {
  return (t) => {
    const n = Yr(t, "locale", e.current), a = Yr(t, "fallback", e.fallback), l = Yr(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      decimalSeparator: /* @__PURE__ */ E(() => Nm(n, a)),
      t: $m(n, a, l),
      n: Nu(n, a),
      provide: Rm({
        current: n,
        fallback: a,
        messages: l
      })
    };
  };
}
function U0(e) {
  const t = /* @__PURE__ */ se(e?.locale ?? "en"), n = /* @__PURE__ */ se(e?.fallback ?? "en"), a = /* @__PURE__ */ ae({
    en: Y0,
    ...e?.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    decimalSeparator: /* @__PURE__ */ E(() => e?.decimalSeparator ?? Nm(t, n)),
    t: $m(t, n, a),
    n: Nu(t, n),
    provide: Rm({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const Tl = /* @__PURE__ */ Symbol.for("vuetify:locale");
function K0(e) {
  return e.name != null;
}
function G0(e) {
  const t = e?.adapter && K0(e?.adapter) ? e?.adapter : U0(e), n = X0(t, e);
  return {
    ...t,
    ...n
  };
}
function Ue() {
  const e = $e(Tl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Hm(e) {
  const t = $e(Tl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = Z0(n, t.rtl, e), l = {
    ...n,
    ...a
  };
  return Ze(Tl, l), l;
}
function q0() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function X0(e, t) {
  const n = /* @__PURE__ */ ae(t?.rtl ?? q0()), a = V(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: /* @__PURE__ */ E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Z0(e, t, n) {
  const a = V(() => n.rtl ?? t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: /* @__PURE__ */ E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function gt() {
  const e = $e(Tl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function Ro(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function J0(e, t, n) {
  const a = [];
  let l = [];
  const o = Wm(e), i = zm(e), r = n ?? Ro(t)?.firstDay ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() - (s - c)), l.push(d);
  }
  for (let c = 1; c <= i.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    l.push(d), l.length === 7 && (a.push(l), l = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(i);
    d.setDate(d.getDate() + c), l.push(d);
  }
  return l.length > 0 && a.push(l), a;
}
function io(e, t, n) {
  let a = (n ?? Ro(t)?.firstDay ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Q0(e, t) {
  const n = new Date(e), a = ((Ro(t)?.firstDay ?? 0) + 6) % 7;
  for (; n.getDay() !== a; )
    n.setDate(n.getDate() + 1);
  return n;
}
function Wm(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function zm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ew(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const tw = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function jm(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (tw.test(e))
      return ew(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Gd = new Date(2e3, 0, 2);
function nw(e, t, n) {
  const a = t ?? Ro(e)?.firstDay ?? 0;
  return Qt(7).map((l) => {
    const o = new Date(Gd);
    return o.setDate(Gd.getDate() + a + l), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(o);
  });
}
function aw(e, t, n, a) {
  const l = jm(e) ?? /* @__PURE__ */ new Date(), o = a?.[t];
  if (typeof o == "function")
    return o(l, t, n);
  let i = {};
  switch (t) {
    case "fullDate":
      i = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      i = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      i = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      i = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      i = {
        year: "numeric"
      };
      break;
    case "month":
      i = {
        month: "long"
      };
      break;
    case "monthShort":
      i = {
        month: "short"
      };
      break;
    case "monthAndYear":
      i = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      i = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      i = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      i = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      i = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      i = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      i = {
        minute: "numeric"
      };
      break;
    case "seconds":
      i = {
        second: "numeric"
      };
      break;
    case "fullTime":
      i = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      i = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      i = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      i = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      i = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      i = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    default:
      i = o ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, i).format(l);
}
function lw(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Id(String(n.getMonth() + 1), 2, "0"), o = Id(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function ow(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function iw(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function rw(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Ra(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function sw(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function uw(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function bo(e) {
  return e.getFullYear();
}
function cw(e) {
  return e.getMonth();
}
function dw(e, t, n, a) {
  const l = Ro(t), o = n ?? l?.firstDay ?? 0, i = l?.firstWeekSize ?? 1;
  return a !== void 0 ? fw(e, t, o, a) : vw(e, t, o, i);
}
function fw(e, t, n, a) {
  const l = (7 + a - n) % 7, o = io(e, t, n), i = Ra(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = bo(o);
  s < bo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? Ra(u, -c) : Ra(u, 7 - c);
  return 1 + Mi(Ru(o), So(d), "weeks");
}
function vw(e, t, n, a) {
  const l = io(e, t, n), o = Ra(io(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - Mi(f, io(f, t, n), "days");
  }
  let r = bo(l);
  r < bo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? Ra(s, u - 7) : Ra(s, u);
  return 1 + Mi(Ru(l), So(c), "weeks");
}
function mw(e) {
  return e.getDate();
}
function gw(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function hw(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function yw(e) {
  return e.getHours();
}
function bw(e) {
  return e.getMinutes();
}
function Sw(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function kw(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function ww(e, t) {
  return Ei(e, t[0]) && Cw(e, t[1]);
}
function pw(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ei(e, t) {
  return e.getTime() > t.getTime();
}
function xw(e, t) {
  return Ei(So(e), So(t));
}
function Cw(e, t) {
  return e.getTime() < t.getTime();
}
function qd(e, t) {
  return e.getTime() === t.getTime();
}
function _w(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Vw(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Iw(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Mi(e, t, n) {
  const a = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Pw(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function Tw(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Aw(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Dw(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Ew(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function So(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Ru(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Mw {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return jm(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return lw(this, t);
  }
  parseISO(t) {
    return ow(t);
  }
  addMinutes(t, n) {
    return iw(t, n);
  }
  addHours(t, n) {
    return rw(t, n);
  }
  addDays(t, n) {
    return Ra(t, n);
  }
  addWeeks(t, n) {
    return sw(t, n);
  }
  addMonths(t, n) {
    return uw(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return J0(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return io(t, this.locale, a);
  }
  endOfWeek(t) {
    return Q0(t, this.locale);
  }
  startOfMonth(t) {
    return Wm(t);
  }
  endOfMonth(t) {
    return zm(t);
  }
  format(t, n) {
    return aw(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return qd(t, n);
  }
  isValid(t) {
    return pw(t);
  }
  isWithinRange(t, n) {
    return ww(t, n);
  }
  isAfter(t, n) {
    return Ei(t, n);
  }
  isAfterDay(t, n) {
    return xw(t, n);
  }
  isBefore(t, n) {
    return !Ei(t, n) && !qd(t, n);
  }
  isSameDay(t, n) {
    return _w(t, n);
  }
  isSameMonth(t, n) {
    return Vw(t, n);
  }
  isSameYear(t, n) {
    return Iw(t, n);
  }
  setMinutes(t, n) {
    return Tw(t, n);
  }
  setHours(t, n) {
    return Pw(t, n);
  }
  setMonth(t, n) {
    return Aw(t, n);
  }
  setDate(t, n) {
    return Dw(t, n);
  }
  setYear(t, n) {
    return Ew(t, n);
  }
  getDiff(t, n, a) {
    return Mi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return nw(this.locale, a, n);
  }
  getYear(t) {
    return bo(t);
  }
  getMonth(t) {
    return cw(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return dw(t, this.locale, l, o);
  }
  getDate(t) {
    return mw(t);
  }
  getNextMonth(t) {
    return gw(t);
  }
  getPreviousMonth(t) {
    return hw(t);
  }
  getHours(t) {
    return yw(t);
  }
  getMinutes(t) {
    return bw(t);
  }
  startOfDay(t) {
    return So(t);
  }
  endOfDay(t) {
    return Ru(t);
  }
  startOfYear(t) {
    return Sw(t);
  }
  endOfYear(t) {
    return kw(t);
  }
}
const Ym = /* @__PURE__ */ Symbol.for("vuetify:date-options"), Xd = /* @__PURE__ */ Symbol.for("vuetify:date-adapter");
function Bw(e, t) {
  const n = It({
    adapter: Mw,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: Km(n, t)
  };
}
function Fw(e, t, n) {
  const a = Um(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Um(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Km(e, t) {
  const n = /* @__PURE__ */ pt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return ue(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function el() {
  const e = $e(Ym);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Ue();
  return Km(e, t);
}
const ar = ["sm", "md", "lg", "xl", "xxl"], _s = /* @__PURE__ */ Symbol.for("vuetify:display"), Zd = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Lw = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zd;
  return It(Zd, e);
};
function Jd(e) {
  return Ye && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Qd(e) {
  return Ye && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function ef(e) {
  const t = Ye && !e ? window.navigator.userAgent : "ssr";
  function n(k) {
    return !!t.match(k);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: o,
    electron: i,
    chrome: r,
    edge: s,
    firefox: u,
    opera: c,
    win: d,
    mac: f,
    linux: v,
    touch: Yk,
    ssr: t === "ssr"
  };
}
function Ow(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = Lw(e), l = /* @__PURE__ */ se(Qd(t)), o = /* @__PURE__ */ se(ef(t)), i = /* @__PURE__ */ pt({}), r = /* @__PURE__ */ se(Jd(t));
  function s() {
    l.value = Qd(), r.value = Jd();
  }
  function u() {
    s(), o.value = ef();
  }
  return at(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), k = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, y = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : k ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], x = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = k, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || k || m), i.mdAndDown = !(v || k || m), i.lgAndDown = !(k || m), i.xlAndDown = !m, i.name = y, i.height = l.value, i.width = r.value, i.mobile = x, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Ye && (window.addEventListener("resize", s, {
    passive: !0
  }), ot(() => {
    window.removeEventListener("resize", s);
  }, !0)), {
    .../* @__PURE__ */ Bl(i),
    update: u,
    ssr: !!t
  };
}
const tl = R({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ln() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  const n = $e(_s);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = V(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1);
  return {
    ...n,
    displayClasses: /* @__PURE__ */ E(() => t ? {
      [`${t}--mobile`]: a.value
    } : {}),
    mobile: a
  };
}
const Gm = /* @__PURE__ */ Symbol.for("vuetify:goto");
function qm() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: B0
  };
}
function $w(e) {
  return Hu(e) ?? (document.scrollingElement || document.body);
}
function Hu(e) {
  return typeof e == "string" ? document.querySelector(e) : Tu(e);
}
function Ur(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Hu(e), l = 0;
  for (; a; )
    l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Nw(e, t) {
  return {
    rtl: t.isRtl,
    options: It(qm(), e)
  };
}
async function tf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = It(a?.options ?? qm(), t), i = a?.rtl.value, r = (typeof e == "number" ? e : Hu(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : $w(o.container), u = An() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number")
    c = Ur(r, n, i);
  else if (c = Ur(r, n, i) - Ur(s, n, i), o.layout) {
    const k = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    k && (c -= parseInt(k, 10));
  }
  c += o.offset, c = Hw(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function k(m) {
    const h = (m - f) / o.duration, x = Math.floor(d + (c - d) * u(je(h, 0, 1)));
    if (s[l] = x, h >= 1 && Math.abs(x - s[l]) < 10)
      return v(c);
    if (h > 2)
      return v(s[l]);
    requestAnimationFrame(k);
  }));
}
function Rw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = $e(Gm), {
    isRtl: n
  } = gt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...t,
    // can be set via VLocaleProvider
    rtl: /* @__PURE__ */ E(() => t.rtl.value || n.value)
  };
  async function l(o, i) {
    return tf(o, It(e, i), !1, a);
  }
  return l.horizontal = async (o, i) => tf(o, It(e, i), !0, a), l;
}
function Hw(e, t, n, a) {
  const {
    scrollWidth: l,
    scrollHeight: o
  } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), je(t, s, u);
}
const ko = /* @__PURE__ */ Symbol.for("vuetify:theme"), Ne = R({
  theme: String
}, "theme");
function nf() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function Ww() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nf();
  const t = nf();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? t.themes?.dark : t.themes?.light;
    n[a] = It(o, l);
  }
  return It(t, {
    ...e,
    themes: n
  });
}
function Aa(e, t, n, a) {
  e.push(`${Uw(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function af(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = en(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${ps(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? en(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function zw(e, t, n) {
  const a = {};
  if (n)
    for (const l of ["lighten", "darken"]) {
      const o = l === "lighten" ? C0 : _0;
      for (const i of Qt(n[l], 1))
        a[`${e}-${l}-${i}`] = Mm(o(en(t), i));
    }
  return a;
}
function jw(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = {
      ...n,
      ...zw(a, l, t)
    });
  }
  return n;
}
function Yw(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = en(e[n]);
    t[a] = Lm(l);
  }
  return t;
}
function Uw(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function Kw(e, t, n) {
  const a = Gw(e, t);
  a && (a.innerHTML = n);
}
function Gw(e, t) {
  if (!Ye) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function qw(e) {
  const t = Ww(e), n = /* @__PURE__ */ se(t.defaultTheme), a = /* @__PURE__ */ ae(t.themes), l = /* @__PURE__ */ se("light"), o = V({
    get() {
      return n.value === "system" ? l.value : n.value;
    },
    set(h) {
      n.value = h;
    }
  }), i = V(() => {
    const h = {};
    for (const [x, w] of Object.entries(a.value)) {
      const b = {
        ...w.colors,
        ...jw(w.colors, t.variations)
      };
      h[x] = {
        ...w,
        colors: {
          ...b,
          ...Yw(b)
        }
      };
    }
    return h;
  }), r = /* @__PURE__ */ E(() => i.value[o.value]), s = /* @__PURE__ */ E(() => n.value === "system"), u = V(() => {
    const h = [], x = t.unimportant ? "" : " !important", w = t.scoped ? t.prefix : "";
    r.value?.dark && Aa(h, ":root", ["color-scheme: dark"], t.scope), Aa(h, ":root", af(r.value, t.prefix), t.scope);
    for (const [S, g] of Object.entries(i.value))
      Aa(h, `.${t.prefix}theme--${S}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...af(g, t.prefix)], t.scope);
    if (t.utilities) {
      const S = [], g = [], I = new Set(Object.values(i.value).flatMap((C) => Object.keys(C.colors)));
      for (const C of I)
        C.startsWith("on-") ? Aa(g, `.${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${x}`], t.scope) : (Aa(S, `.${w}bg-${C}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${C}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${C}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${C}))${x}`], t.scope), Aa(g, `.${w}text-${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${x}`], t.scope), Aa(g, `.${w}border-${C}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${C})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...S.map((C) => `  ${C}`), `}
`, `@layer foreground {
`, ...g.map((C) => `  ${C}`), `}
`) : h.push(...S, ...g);
    }
    let b = h.map((S, g) => g === 0 ? S : `    ${S}`).join("");
    return t.layers && (b = `@layer vuetify.theme {
` + h.map((S) => `  ${S}`).join("") + `
}`), b;
  }), c = /* @__PURE__ */ E(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = /* @__PURE__ */ E(() => Object.keys(i.value));
  if (Pu) {
    let x = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    x(), h.addEventListener("change", x, {
      passive: !0
    }), Jf() && ot(() => {
      h.removeEventListener("change", x);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const x = h._context.provides.usehead;
    if (x) {
      let w = function() {
        return {
          style: [{
            textContent: u.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (x.push) {
        const b = x.push(w);
        Ye && ue(u, () => {
          b.patch(w);
        });
      } else
        Ye ? (x.addHeadObjs(/* @__PURE__ */ E(w)), at(() => x.updateDOM())) : x.addHeadObjs(w());
    } else {
      let w = function() {
        Kw(t.stylesheetId, t.cspNonce, u.value);
      };
      Ye ? ue(u, w, {
        immediate: !0
      }) : w();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function k() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = h.indexOf(o.value), w = x === -1 ? 0 : (x + 1) % h.length;
    v(h[w]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    k(h);
  }
  const y = new Proxy(o, {
    get(h, x) {
      return Reflect.get(h, x);
    },
    set(h, x, w) {
      return x === "value" && hm(`theme.global.name.value = ${w}`, `theme.change('${w}')`), Reflect.set(h, x, w);
    }
  });
  return {
    install: f,
    change: v,
    cycle: k,
    toggle: m,
    isDisabled: t.isDisabled,
    isSystem: s,
    name: o,
    themes: a,
    current: r,
    computedThemes: i,
    prefix: t.prefix,
    themeClasses: c,
    styles: u,
    global: {
      name: y,
      current: r
    }
  };
}
function We(e) {
  ct("provideTheme");
  const t = $e(ko, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = /* @__PURE__ */ E(() => e.theme ?? t.name.value), o = {
    ...t,
    name: n,
    current: /* @__PURE__ */ E(() => t.themes.value[n.value]),
    themeClasses: /* @__PURE__ */ E(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`)
  };
  return Ze(ko, o), o;
}
function lr() {
  ct("useTheme");
  const e = $e(ko, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Pi(), a = /* @__PURE__ */ ae();
  if (Ye) {
    const l = new ResizeObserver((o) => {
      e?.(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Dt(() => {
      l.disconnect();
    }), ue(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: /* @__PURE__ */ za(a)
  };
}
const wo = /* @__PURE__ */ Symbol.for("vuetify:layout"), Xm = /* @__PURE__ */ Symbol.for("vuetify:layout-item"), lf = 1e3, Zm = R({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), nl = R({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Jm() {
  const e = $e(wo);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function al(e) {
  const t = $e(wo);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${At()}`, a = ct("useLayoutItem");
  Ze(Xm, {
    id: n
  });
  const l = /* @__PURE__ */ se(!1);
  wu(() => l.value = !0), Fv(() => l.value = !1);
  const {
    layoutItemStyles: o,
    layoutItemScrimStyles: i
  } = t.register(a, {
    ...e,
    active: V(() => l.value ? !1 : e.active.value),
    id: n
  });
  return Dt(() => t.unregister(n)), {
    layoutItemStyles: o,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: i
  };
}
const Xw = (e, t, n, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const o = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const i of e) {
    const r = t.get(i), s = n.get(i), u = a.get(i);
    if (!r || !s || !u) continue;
    const c = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0)
    };
    o.push({
      id: i,
      layer: c
    }), l = c;
  }
  return o;
};
function Qm(e) {
  const t = $e(wo, null), n = V(() => t ? t.rootZIndex.value - 100 : lf), a = /* @__PURE__ */ ae([]), l = /* @__PURE__ */ pt(/* @__PURE__ */ new Map()), o = /* @__PURE__ */ pt(/* @__PURE__ */ new Map()), i = /* @__PURE__ */ pt(/* @__PURE__ */ new Map()), r = /* @__PURE__ */ pt(/* @__PURE__ */ new Map()), s = /* @__PURE__ */ pt(/* @__PURE__ */ new Map()), {
    resizeRef: u,
    contentRect: c
  } = vn(), d = V(() => {
    const g = /* @__PURE__ */ new Map(), I = e.overlaps ?? [];
    for (const C of I.filter((T) => T.includes(":"))) {
      const [T, P] = C.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const F = l.get(T), A = l.get(P), B = o.get(T), D = o.get(P);
      !F || !A || !B || !D || (g.set(P, {
        position: F.value,
        amount: parseInt(B.value, 10)
      }), g.set(T, {
        position: A.value,
        amount: -parseInt(D.value, 10)
      }));
    }
    return g;
  }), f = V(() => {
    const g = [...new Set([...i.values()].map((C) => C.value))].sort((C, T) => C - T), I = [];
    for (const C of g) {
      const T = a.value.filter((P) => i.get(P)?.value === C);
      I.push(...T);
    }
    return Xw(I, l, o, r);
  }), v = V(() => !Array.from(s.values()).some((g) => g.value)), k = V(() => f.value[f.value.length - 1].layer), m = /* @__PURE__ */ E(() => ({
    "--v-layout-left": de(k.value.left),
    "--v-layout-right": de(k.value.right),
    "--v-layout-top": de(k.value.top),
    "--v-layout-bottom": de(k.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), y = V(() => f.value.slice(1).map((g, I) => {
    let {
      id: C
    } = g;
    const {
      layer: T
    } = f.value[I], P = o.get(C), F = l.get(C);
    return {
      id: C,
      ...T,
      size: Number(P.value),
      position: F.value
    };
  })), h = (g) => y.value.find((I) => I.id === g), x = ct("createLayout"), w = /* @__PURE__ */ se(!1);
  return yt(() => {
    w.value = !0;
  }), Ze(wo, {
    register: (g, I) => {
      let {
        id: C,
        order: T,
        position: P,
        layoutSize: F,
        elementSize: A,
        active: B,
        disableTransitions: D,
        absolute: L
      } = I;
      i.set(C, T), l.set(C, P), o.set(C, F), r.set(C, B), D && s.set(C, D);
      const N = yl(Xm, x?.vnode).indexOf(g);
      N > -1 ? a.value.splice(N, 0, C) : a.value.push(C);
      const J = V(() => y.value.findIndex((K) => K.id === C)), q = V(() => n.value + f.value.length * 2 - J.value * 2), $ = V(() => {
        const K = P.value === "left" || P.value === "right", H = P.value === "right", G = P.value === "bottom", X = A.value ?? F.value, fe = X === 0 ? "%" : "px", Z = {
          [P.value]: 0,
          zIndex: q.value,
          transform: `translate${K ? "X" : "Y"}(${(B.value ? 0 : -(X === 0 ? 100 : X)) * (H || G ? -1 : 1)}${fe})`,
          position: L.value || n.value !== lf ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!w.value) return Z;
        const ce = y.value[J.value], Ce = d.value.get(C);
        return Ce && (ce[Ce.position] += Ce.amount), {
          ...Z,
          height: K ? `calc(100% - ${ce.top}px - ${ce.bottom}px)` : A.value ? `${A.value}px` : void 0,
          left: H ? void 0 : `${ce.left}px`,
          right: H ? `${ce.right}px` : void 0,
          top: P.value !== "bottom" ? `${ce.top}px` : void 0,
          bottom: P.value !== "top" ? `${ce.bottom}px` : void 0,
          width: K ? A.value ? `${A.value}px` : void 0 : `calc(100% - ${ce.left}px - ${ce.right}px)`
        };
      }), ne = V(() => ({
        zIndex: q.value - 1
      }));
      return {
        layoutItemStyles: $,
        layoutItemScrimStyles: ne,
        zIndex: q
      };
    },
    unregister: (g) => {
      i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((I) => I !== g);
    },
    mainRect: k,
    mainStyles: m,
    getLayoutItem: h,
    items: y,
    layoutRect: c,
    rootZIndex: n
  }), {
    layoutClasses: /* @__PURE__ */ E(() => ["v-layout", {
      "v-layout--full-height": e.fullHeight
    }]),
    layoutStyles: /* @__PURE__ */ E(() => ({
      zIndex: t ? n.value : void 0,
      position: t ? "relative" : void 0,
      overflow: t ? "hidden" : void 0
    })),
    getLayoutItem: h,
    items: y,
    layoutRect: c,
    layoutRef: u
  };
}
const Zw = {
  // Modifier aliases (from vue-use, other libraries, and current implementation)
  control: "ctrl",
  command: "cmd",
  option: "alt",
  // Arrow key aliases (common abbreviations)
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright",
  // Other common key aliases
  esc: "escape",
  spacebar: " ",
  space: " ",
  return: "enter",
  del: "delete",
  // Symbol aliases (existing from hotkey-parsing.ts)
  minus: "-",
  hyphen: "-"
};
function of(e) {
  const t = e.toLowerCase();
  return Zw[t] || t;
}
function eg(e) {
  const t = {
    keys: [],
    separators: []
  };
  if (!e || e.length > 1 && // Starts with a single separator followed by a non-separator character (e.g. '+a', '_a')
  ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || // Disallow literal + or _ keys (they require shift)
  e.includes("++") || e.includes("__") || e === "+" || e === "_" || // Ends with a separator that is not part of a doubled literal
  e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || // Stand-alone doubled separators (dangling)
  e === "++" || e === "--" || e === "__")
    return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(of(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? {
    keys: [of(e)],
    separators: o
  } : {
    keys: l,
    separators: o
  };
}
function Jw(e) {
  if (!e)
    return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n)
    return [];
  const a = [];
  let l = "", o = 0;
  for (; o < e.length; ) {
    const u = e[o];
    if (u === "-") {
      const c = e[o - 1], d = o > 1 ? e[o - 2] : void 0;
      ["+", "_"].includes(c) && !["+", "/"].includes(d ?? "") ? (l += u, o++) : (l ? (a.push(l), l = "") : a.push("-"), o++);
    } else
      l += u, o++;
  }
  l && a.push(l);
  const i = [];
  let r = 0;
  for (const u of a)
    u === "-" ? (r % 2 === 0 && i.push("-"), r++) : (r = 0, i.push(u));
  return i.every((u) => eg(u).keys.length > 0) ? i : [];
}
function tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = It(t, n), {
    aliases: l = {},
    components: o = {},
    directives: i = {}
  } = a, r = Cl();
  return r.run(() => {
    const s = P0(a.defaults), u = Ow(a.display, a.ssr), c = qw(a.theme), d = j0(a.icons), f = G0(a.locale), v = Bw(a.date, f), k = Nw(a.goTo, f);
    function m(h) {
      for (const w in i)
        h.directive(w, i[w]);
      for (const w in o)
        h.component(w, o[w]);
      for (const w in l)
        h.component(w, $t({
          ...l[w],
          name: w,
          aliasName: l[w].name
        }));
      const x = Cl();
      if (x.run(() => {
        c.install(h);
      }), h.onUnmount(() => x.stop()), h.provide(Pl, s), h.provide(_s, u), h.provide(ko, c), h.provide(xs, d), h.provide(Tl, f), h.provide(Ym, v.options), h.provide(Xd, v.instance), h.provide(Gm, k), Ye && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: w
          } = h;
          h.mount = function() {
            const b = w(...arguments);
            return Te(() => u.update()), h.mount = w, b;
          };
        }
      h.mixin({
        computed: {
          $vuetify() {
            return /* @__PURE__ */ pt({
              defaults: fl.call(this, Pl),
              display: fl.call(this, _s),
              theme: fl.call(this, ko),
              icons: fl.call(this, xs),
              locale: fl.call(this, Tl),
              date: fl.call(this, Xd)
            });
          }
        }
      });
    }
    function y() {
      r.stop();
    }
    return {
      install: m,
      unmount: y,
      defaults: s,
      display: u,
      theme: c,
      icons: d,
      locale: f,
      date: v,
      goTo: k
    };
  });
}
const Qw = "3.11.7";
tg.version = Qw;
function fl(e) {
  const t = this.$, n = t.parent?.provides ?? t.vnode.appContext?.provides;
  if (n && e in n)
    return n[e];
}
const ep = R({
  ...Se(),
  ...Be(Zm(), ["fullHeight"]),
  ...Ne()
}, "VApp"), tp = Q()({
  name: "VApp",
  props: ep(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = We(e), {
      layoutClasses: l,
      getLayoutItem: o,
      items: i,
      layoutRef: r
    } = Qm({
      ...e,
      fullHeight: !0
    }), {
      rtlClasses: s
    } = gt();
    return te(() => _("div", {
      ref: r,
      class: ee(["v-application", a.themeClasses.value, l.value, s.value, e.class]),
      style: ve([e.style])
    }, [_("div", {
      class: "v-application__wrap"
    }, [n.default?.()])])), {
      getLayoutItem: o,
      items: i,
      theme: a
    };
  }
}), Ae = R({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), ng = R({
  text: String,
  ...Se(),
  ...Ae()
}, "VToolbarTitle"), Wu = Q()({
  name: "VToolbarTitle",
  props: ng(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = !!(n.default || n.text || e.text);
      return p(e.tag, {
        class: ee(["v-toolbar-title", e.class]),
        style: ve(e.style)
      }, {
        default: () => [a && _("div", {
          class: "v-toolbar-title__placeholder"
        }, [n.text ? n.text() : e.text, n.default?.()])]
      });
    }), {};
  }
}), np = R({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function on(e, t, n) {
  return Q()({
    name: e,
    props: np({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: o
      } = l;
      const i = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: u,
              offsetWidth: c,
              offsetHeight: d
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${u}px`, r.style.width = `${c}px`, r.style.height = `${d}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && r?._transitionInitialStyles) {
            const {
              position: s,
              top: u,
              left: c,
              width: d,
              height: f
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = u || "", r.style.left = c || "", r.style.width = d || "", r.style.height = f || "";
          }
        }
      };
      return () => {
        const r = a.group ? Vu : ha;
        return kn(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : i
        }, o.default);
      };
    }
  });
}
function ag(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Q()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: {
        type: Boolean,
        default: An()
      },
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: o
      } = l;
      const i = a.group ? Vu : ha;
      return () => kn(i, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, o.default);
    }
  });
}
function lg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = zt(`offset-${n}`);
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        [n]: i.style[n]
      };
    },
    onEnter(i) {
      const r = i._initialStyle;
      if (!r) return;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const s = `${i[a]}px`;
      i.style[n] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        i.style[n] = s;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [n]: i.style[n]
      }, i.style.overflow = "hidden", i.style[n] = `${i[a]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    if (!i._initialStyle) return;
    const r = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, r != null && (i.style[n] = r), delete i._initialStyle;
  }
}
const ap = R({
  target: [Object, Array]
}, "v-dialog-transition"), Kr = /* @__PURE__ */ new WeakMap(), or = Q()({
  name: "VDialogTransition",
  props: ap(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, o) {
        await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
        const i = sf(e.target, l), {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = i;
        if (Kr.set(l, i), An())
          Wn(l, [{
            opacity: 0
          }, {}], {
            duration: 125 * d,
            easing: jd
          }).finished.then(() => o());
        else {
          const f = Wn(l, [{
            transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
            opacity: 0
          }, {}], {
            duration: 225 * d,
            easing: jd
          });
          rf(l)?.forEach((v) => {
            Wn(v, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 450 * d,
              easing: yo
            });
          }), f.finished.then(() => o());
        }
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, o) {
        await new Promise((f) => requestAnimationFrame(f));
        let i;
        !Kr.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = sf(e.target, l) : i = Kr.get(l);
        const {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = i;
        An() ? Wn(l, [{}, {
          opacity: 0
        }], {
          duration: 85 * d,
          easing: Yd
        }).finished.then(() => o()) : (Wn(l, [{}, {
          transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Yd
        }).finished.then(() => o()), rf(l)?.forEach((v) => {
          Wn(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * d,
            easing: yo
          });
        }));
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? p(ha, U({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : p(ha, {
      name: "dialog-transition"
    }, n);
  }
});
function rf(e) {
  const t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return t && [...t];
}
function sf(e, t) {
  const n = Im(e), a = Eu(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, k = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: u - (o + a.top),
    sx: v,
    sy: k,
    speed: y
  };
}
const lp = on("fab-transition", "center center", "out-in"), op = on("dialog-bottom-transition"), ip = on("dialog-top-transition"), po = on("fade-transition"), zu = on("scale-transition"), rp = on("scroll-x-transition"), sp = on("scroll-x-reverse-transition"), up = on("scroll-y-transition"), cp = on("scroll-y-reverse-transition"), dp = on("slide-x-transition"), fp = on("slide-x-reverse-transition"), ju = on("slide-y-transition"), vp = on("slide-y-reverse-transition"), ir = ag("expand-transition", lg()), Yu = ag("expand-x-transition", lg("", !0)), mp = R({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Ee = Q(!1)({
  name: "VDefaultsProvider",
  props: mp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: o,
      root: i,
      scoped: r
    } = /* @__PURE__ */ Bl(e);
    return lt(a, {
      reset: o,
      root: i,
      scoped: r,
      disabled: l
    }), () => n.default?.();
  }
}), dt = R({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ft(e) {
  return {
    dimensionStyles: V(() => {
      const n = {}, a = de(e.height), l = de(e.maxHeight), o = de(e.maxWidth), i = de(e.minHeight), r = de(e.minWidth), s = de(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
function gp(e) {
  return {
    aspectStyles: V(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const og = R({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...Se(),
  ...dt()
}, "VResponsive"), Vs = Q()({
  name: "VResponsive",
  props: og(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = gp(e), {
      dimensionStyles: l
    } = ft(e);
    return te(() => _("div", {
      class: ee(["v-responsive", {
        "v-responsive--inline": e.inline
      }, e.class]),
      style: ve([l.value, e.style])
    }, [_("div", {
      class: "v-responsive__sizer",
      style: ve(a.value)
    }, null), n.additional?.(), n.default && _("div", {
      class: ee(["v-responsive__content", e.contentClass])
    }, [n.default()])])), {};
  }
});
function Uu(e) {
  return Du(() => {
    const {
      class: t,
      style: n
    } = ig(e);
    return {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function Ct(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Uu(() => ({
    text: kt(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function ze(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Uu(() => ({
    background: kt(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
function ig(e) {
  const t = kt(e), n = [], a = {};
  if (t.background)
    if (ks(t.background)) {
      if (a.backgroundColor = t.background, !t.text && k0(t.background)) {
        const l = en(t.background);
        if (l.a == null || l.a === 1) {
          const o = Lm(l);
          a.color = o, a.caretColor = o;
        }
      }
    } else
      n.push(`bg-${t.background}`);
  return t.text && (ks(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), {
    class: n,
    style: a
  };
}
const Je = R({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return {
    roundedClasses: V(() => {
      const a = /* @__PURE__ */ st(e) ? e.value : e.rounded, l = /* @__PURE__ */ st(e) ? !1 : e.tile, o = [];
      if (l || a === !1)
        o.push("rounded-0");
      else if (a === !0 || a === "")
        o.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          o.push(`rounded-${i}`);
      return o;
    })
  };
}
const ta = R({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Ot = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: o,
    ...i
  } = e, {
    component: r = o ? Vu : ha,
    ...s
  } = Ua(a) ? a : {};
  let u;
  return Ua(a) ? u = U(s, n0({
    disabled: l,
    group: o
  }), i) : u = U({
    name: l || !a ? "" : a
  }, i), kn(r, u, n);
};
function hp(e, t) {
  if (!Iu) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: o
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, i = new IntersectionObserver(function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = e._observe?.[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? rg(e, t) : u.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: i
  }, i.observe(e);
}
function rg(e, t) {
  const n = e._observe?.[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const wn = {
  mounted: hp,
  unmounted: rg
}, sg = R({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...og(),
  ...Se(),
  ...Je(),
  ...ta()
}, "VImg"), Zn = Q()({
  name: "VImg",
  directives: {
    vIntersect: wn
  },
  props: sg(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color), {
      roundedClasses: i
    } = et(e), r = ct("VImg"), s = /* @__PURE__ */ se(""), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ se(e.eager ? "loading" : "idle"), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), v = V(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), k = V(() => v.value.aspect || d.value / f.value || 0);
    ue(() => e.src, () => {
      m(c.value !== "idle");
    }), ue(k, (A, B) => {
      !A && B && u.value && b(u.value);
    }), Fl(() => m());
    function m(A) {
      if (!(e.eager && A) && !(Iu && !A && !e.eager)) {
        if (c.value = "loading", v.value.lazySrc) {
          const B = new Image();
          B.src = v.value.lazySrc, b(B, null);
        }
        v.value.src && Te(() => {
          n("loadstart", u.value?.currentSrc || v.value.src), setTimeout(() => {
            if (!r.isUnmounted)
              if (u.value?.complete) {
                if (u.value.naturalWidth || h(), c.value === "error") return;
                k.value || b(u.value, null), c.value === "loading" && y();
              } else
                k.value || b(u.value), x();
          });
        });
      }
    }
    function y() {
      r.isUnmounted || (x(), b(u.value), c.value = "loaded", n("load", u.value?.currentSrc || v.value.src));
    }
    function h() {
      r.isUnmounted || (c.value = "error", n("error", u.value?.currentSrc || v.value.src));
    }
    function x() {
      const A = u.value;
      A && (s.value = A.currentSrc || A.src);
    }
    let w = -1;
    Dt(() => {
      clearTimeout(w);
    });
    function b(A) {
      let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const D = () => {
        if (clearTimeout(w), r.isUnmounted) return;
        const {
          naturalHeight: L,
          naturalWidth: W
        } = A;
        L || W ? (d.value = W, f.value = L) : !A.complete && c.value === "loading" && B != null ? w = window.setTimeout(D, B) : (A.currentSrc.endsWith(".svg") || A.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
      };
      D();
    }
    const S = /* @__PURE__ */ E(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), g = () => {
      if (!v.value.src || c.value === "idle") return null;
      const A = _("img", {
        class: ee(["v-img__img", S.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: u,
        onLoad: y,
        onError: h
      }, null), B = a.sources?.();
      return p(Ot, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [qe(B ? _("picture", {
          class: "v-img__picture"
        }, [B, A]) : A, [[xn, c.value === "loaded"]])]
      });
    }, I = () => p(Ot, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && c.value !== "loaded" && _("img", {
        class: ee(["v-img__img", "v-img__img--preload", S.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: v.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), C = () => a.placeholder ? p(Ot, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !a.error) && _("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, T = () => a.error ? p(Ot, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && _("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, P = () => e.gradient ? _("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, F = /* @__PURE__ */ se(!1);
    {
      const A = ue(k, (B) => {
        B && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            F.value = !0;
          });
        }), A());
      });
    }
    return te(() => {
      const A = Vs.filterProps(e);
      return qe(p(Vs, U({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !F.value
        }, l.value, i.value, e.class],
        style: [{
          width: de(e.width === "auto" ? d.value : e.width)
        }, o.value, e.style]
      }, A, {
        aspectRatio: k.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => _(ye, null, [p(g, null, null), p(I, null, null), p(P, null, null), p(C, null, null), p(T, null, null)]),
        default: a.default
      }), [[wn, {
        handler: m,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: u,
      state: c,
      naturalWidth: d,
      naturalHeight: f
    };
  }
}), Et = R({
  border: [Boolean, Number, String]
}, "border");
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return {
    borderClasses: V(() => {
      const a = e.border;
      return a === !0 || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
    })
  };
}
const vt = R({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function bt(e) {
  return {
    elevationClasses: /* @__PURE__ */ E(() => {
      const n = /* @__PURE__ */ st(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const yp = [null, "prominent", "default", "comfortable", "compact"], ug = R({
  absolute: Boolean,
  collapse: Boolean,
  collapsePosition: {
    type: String,
    default: "start"
  },
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => yp.includes(e)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Et(),
  ...Se(),
  ...vt(),
  ...Je(),
  ...Ae({
    tag: "header"
  }),
  ...Ne()
}, "VToolbar"), Is = Q()({
  name: "VToolbar",
  props: ug(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = ze(() => e.color), {
      borderClasses: o
    } = Nt(e), {
      elevationClasses: i
    } = bt(e), {
      roundedClasses: r
    } = et(e), {
      themeClasses: s
    } = We(e), {
      rtlClasses: u
    } = gt(), c = /* @__PURE__ */ se(e.extended === null ? !!n.extension?.() : e.extended), d = V(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = V(() => c.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return lt({
      VBtn: {
        variant: "text"
      }
    }), te(() => {
      const v = !!(e.title || n.title), k = !!(n.image || e.image), m = n.extension?.();
      return c.value = e.extended === null ? !!m : e.extended, p(e.tag, {
        class: ee(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, o.value, i.value, r.value, s.value, u.value, e.class]),
        style: ve([l.value, e.style])
      }, {
        default: () => [k && _("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? p(Ee, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : p(Zn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), p(Ee, {
          defaults: {
            VTabs: {
              height: de(d.value)
            }
          }
        }, {
          default: () => [_("div", {
            class: "v-toolbar__content",
            style: {
              height: de(d.value)
            }
          }, [n.prepend && _("div", {
            class: "v-toolbar__prepend"
          }, [n.prepend?.()]), v && p(Wu, {
            key: "title",
            text: e.title
          }, {
            text: n.title
          }), n.default?.(), n.append && _("div", {
            class: "v-toolbar__append"
          }, [n.append?.()])])]
        }), p(Ee, {
          defaults: {
            VTabs: {
              height: de(f.value)
            }
          }
        }, {
          default: () => [p(ir, null, {
            default: () => [c.value && _("div", {
              class: "v-toolbar__extension",
              style: {
                height: de(f.value)
              }
            }, [m])]
          })]
        })]
      });
    }), {
      contentHeight: d,
      extensionHeight: f
    };
  }
}), bp = R({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Sp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: n,
    layoutSize: a
  } = t;
  let l = 0, o = 0;
  const i = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ se(0), s = /* @__PURE__ */ se(0), u = /* @__PURE__ */ se(0), c = /* @__PURE__ */ se(!1), d = /* @__PURE__ */ se(!1), f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ se(!0), m = V(() => Number(e.scrollThreshold)), y = V(() => je((m.value - r.value) / m.value || 0));
  function h(S) {
    const g = "window" in S ? window.innerHeight : S.clientHeight, I = "window" in S ? document.documentElement.scrollHeight : S.scrollHeight;
    return {
      clientHeight: g,
      scrollHeight: I
    };
  }
  function x() {
    const S = i.value;
    if (!S) return;
    const {
      clientHeight: g,
      scrollHeight: I
    } = h(S), C = I - g, T = a?.value || 0, P = m.value + T;
    k.value = C > P;
  }
  function w() {
    x();
  }
  function b() {
    const S = i.value;
    if (!S || n && !n.value) return;
    l = r.value, r.value = "window" in S ? S.pageYOffset : S.scrollTop;
    const g = S instanceof Window ? document.documentElement.scrollHeight : S.scrollHeight;
    o !== g && (g > o && x(), o = g), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const {
      clientHeight: I,
      scrollHeight: C
    } = h(S), T = r.value + I >= C - 5;
    !d.value && T && r.value >= m.value && k.value && (v.value = !0);
    const P = Math.abs(r.value - l) > 100, F = r.value <= 5;
    (d.value && l - r.value > 1 && !T || P && r.value < m.value || F) && (v.value = !1), f.value = T;
  }
  return ue(d, () => {
    s.value = s.value || r.value;
  }), ue(c, () => {
    s.value = 0;
  }), yt(() => {
    ue(() => e.scrollTarget, (S) => {
      const g = S ? document.querySelector(S) : window;
      g && g !== i.value && (i.value?.removeEventListener("scroll", b), i.value = g, i.value.addEventListener("scroll", b, {
        passive: !0
      }), Promise.resolve().then(() => {
        x();
      }));
    }, {
      immediate: !0
    }), window.addEventListener("resize", w, {
      passive: !0
    });
  }), Dt(() => {
    i.value?.removeEventListener("scroll", b), window.removeEventListener("resize", w);
  }), n && ue(n, b, {
    immediate: !0
  }), {
    scrollThreshold: m,
    currentScroll: r,
    currentThreshold: u,
    isScrollActive: c,
    scrollRatio: y,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: d,
    savedScroll: s,
    isAtBottom: f,
    reachedBottomWhileScrollingDown: v,
    hasEnoughScrollableSpace: k
  };
}
function ll() {
  const e = /* @__PURE__ */ se(!1);
  return yt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: /* @__PURE__ */ E(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: /* @__PURE__ */ za(e)
  };
}
const kp = R({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...ug(),
  ...nl(),
  ...bp(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), wp = Q()({
  name: "VAppBar",
  props: kp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = pe(e, "modelValue"), o = V(() => {
      const g = new Set(e.scrollBehavior?.split(" ") ?? []);
      return {
        hide: g.has("hide"),
        fullyHide: g.has("fully-hide"),
        inverted: g.has("inverted"),
        collapse: g.has("collapse"),
        elevate: g.has("elevate"),
        fadeImage: g.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), i = V(() => {
      const g = o.value;
      return g.hide || g.fullyHide || g.inverted || g.collapse || g.elevate || g.fadeImage || // behavior.shrink ||
      !l.value;
    }), r = V(() => {
      const g = a.value?.contentHeight ?? 0, I = a.value?.extensionHeight ?? 0;
      return g + I;
    }), {
      currentScroll: s,
      scrollThreshold: u,
      isScrollingUp: c,
      scrollRatio: d,
      isAtBottom: f,
      reachedBottomWhileScrollingDown: v,
      hasEnoughScrollableSpace: k
    } = Sp(e, {
      canScroll: i,
      layoutSize: r
    }), m = /* @__PURE__ */ E(() => o.value.hide || o.value.fullyHide), y = V(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = V(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), x = V(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), w = V(() => {
      if (o.value.hide && o.value.inverted) return 0;
      const g = a.value?.contentHeight ?? 0, I = a.value?.extensionHeight ?? 0;
      return m.value ? s.value < u.value || o.value.fullyHide ? g + I : g : g + I;
    });
    Pt(() => !!e.scrollBehavior, () => {
      at(() => {
        if (!m.value) {
          l.value = !0;
          return;
        }
        if (o.value.inverted) {
          l.value = s.value > u.value;
          return;
        }
        if (!k.value) {
          l.value = !0;
          return;
        }
        if (v.value) {
          l.value = !1;
          return;
        }
        l.value = c.value && !f.value || s.value < u.value;
      });
    });
    const {
      ssrBootStyles: b
    } = ll(), {
      layoutItemStyles: S
    } = al({
      id: e.name,
      order: V(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => e.location),
      layoutSize: w,
      elementSize: /* @__PURE__ */ se(void 0),
      active: l,
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return te(() => {
      const g = Is.filterProps(e);
      return p(Is, U({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": x.value,
          height: void 0,
          ...b.value
        }, e.style]
      }, g, {
        collapse: y.value,
        flat: h.value
      }), n);
    }), {};
  }
}), pp = [null, "default", "comfortable", "compact"], it = R({
  density: {
    type: String,
    default: "default",
    validator: (e) => pp.includes(e)
  }
}, "density");
function Mt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return {
    densityClasses: /* @__PURE__ */ E(() => `${t}--density-${e.density}`)
  };
}
const xp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function na(e, t) {
  return _(ye, null, [e && _("span", {
    key: "overlay",
    class: ee(`${t}__overlay`)
  }, null), _("span", {
    key: "underlay",
    class: ee(`${t}__underlay`)
  }, null)]);
}
const rn = R({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => xp.includes(e)
  }
}, "variant");
function aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  const n = /* @__PURE__ */ E(() => {
    const {
      variant: o
    } = kt(e);
    return `${t}--variant-${o}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Uu(() => {
    const {
      variant: o,
      color: i
    } = kt(e);
    return {
      [["elevated", "flat"].includes(o) ? "background" : "text"]: i
    };
  });
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const cg = R({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Et(),
  ...Se(),
  ...it(),
  ...vt(),
  ...Je(),
  ...Ae(),
  ...Ne(),
  ...rn()
}, "VBtnGroup"), Ps = Q()({
  name: "VBtnGroup",
  props: cg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      densityClasses: l
    } = Mt(e), {
      borderClasses: o
    } = Nt(e), {
      elevationClasses: i
    } = bt(e), {
      roundedClasses: r
    } = et(e);
    lt({
      VBtn: {
        height: /* @__PURE__ */ E(() => e.direction === "horizontal" ? "auto" : null),
        baseColor: /* @__PURE__ */ E(() => e.baseColor),
        color: /* @__PURE__ */ E(() => e.color),
        density: /* @__PURE__ */ E(() => e.density),
        flat: !0,
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => p(e.tag, {
      class: ee(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided
      }, a.value, o.value, l.value, i.value, r.value, e.class]),
      style: ve(e.style)
    }, n));
  }
}), ol = R({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), il = R({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function ba(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = ct("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = At();
  Ze(/* @__PURE__ */ Symbol.for(`${t.description}:id`), l);
  const o = $e(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = /* @__PURE__ */ E(() => e.value), r = V(() => !!(o.disabled.value || e.disabled));
  function s() {
    o?.register({
      id: l,
      value: i,
      disabled: r
    }, a);
  }
  function u() {
    o?.unregister(l);
  }
  s(), Dt(() => u());
  const c = V(() => o.isSelected(l)), d = V(() => o.items.value[0].id === l), f = V(() => o.items.value[o.items.value.length - 1].id === l), v = V(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return ue(c, (k) => {
    a.emit("group:selected", {
      value: k
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: c,
    isFirst: d,
    isLast: f,
    toggle: () => o.select(l, !c.value),
    select: (k) => o.select(l, k),
    selectedClass: v,
    value: i,
    disabled: r,
    group: o,
    register: s,
    unregister: u
  };
}
function Ca(e, t) {
  let n = !1;
  const a = /* @__PURE__ */ pt([]), l = pe(e, "modelValue", [], (f) => f === void 0 ? [] : dg(a, f === null ? [null] : Xe(f)), (f) => {
    const v = _p(a, f);
    return e.multiple ? v : v[0];
  }), o = ct("useGroup");
  function i(f, v) {
    const k = f, m = /* @__PURE__ */ Symbol.for(`${t.description}:id`), h = yl(m, o?.vnode).indexOf(v);
    be(k.value) === void 0 && (k.value = h, k.useIndexAsValue = !0), h > -1 ? a.splice(h, 0, k) : a.push(k);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((k) => k.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  yt(() => {
    s();
  }), Dt(() => {
    n = !0;
  }), qi(() => {
    for (let f = 0; f < a.length; f++)
      a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const k = a.find((m) => m.id === f);
    if (!(v && k?.disabled))
      if (e.multiple) {
        const m = l.value.slice(), y = m.findIndex((x) => x === f), h = ~y;
        if (v = v ?? !h, h && e.mandatory && m.length <= 1 || !h && e.max != null && m.length + 1 > e.max) return;
        y < 0 && v ? m.push(f) : y >= 0 && !v && m.splice(y, 1), l.value = m;
      } else {
        const m = l.value.includes(f);
        if (e.mandatory && m || !m && !v) return;
        l.value = v ?? !m ? [f] : [];
      }
  }
  function c(f) {
    if (e.multiple, l.value.length) {
      const v = l.value[0], k = a.findIndex((h) => h.id === v);
      let m = (k + f) % a.length, y = a[m];
      for (; y.disabled && m !== k; )
        m = (m + f) % a.length, y = a[m];
      if (y.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((k) => !k.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = {
    register: i,
    unregister: r,
    selected: l,
    select: u,
    disabled: /* @__PURE__ */ E(() => e.disabled),
    prev: () => c(a.length - 1),
    next: () => c(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: /* @__PURE__ */ E(() => e.selectedClass),
    items: /* @__PURE__ */ E(() => a),
    getItemIndex: (f) => Cp(a, f)
  };
  return Ze(t, d), d;
}
function Cp(e, t) {
  const n = dg(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function dg(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => xt(a, i.value)), o = e[a];
    l?.value !== void 0 ? n.push(l.id) : o?.useIndexAsValue && n.push(o.id);
  }), n;
}
function _p(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Ku = /* @__PURE__ */ Symbol.for("vuetify:v-btn-toggle"), Vp = R({
  ...cg(),
  ...ol()
}, "VBtnToggle"), Ip = Q()({
  name: "VBtnToggle",
  props: Vp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: o,
      select: i,
      selected: r
    } = Ca(e, Ku);
    return te(() => {
      const s = Ps.filterProps(e);
      return p(Ps, U({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: a,
          next: l,
          prev: o,
          select: i,
          selected: r
        })]
      });
    }), {
      next: l,
      prev: o,
      select: i
    };
  }
}), Pp = ["x-small", "small", "default", "large", "x-large"], On = R({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return Du(() => {
    const n = e.size;
    let a, l;
    return Ii(Pp, n) ? a = `${t}--size-${n}` : n && (l = {
      width: de(n),
      height: de(n)
    }), {
      sizeClasses: a,
      sizeStyles: l
    };
  });
}
const Tp = R({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: xe,
  opacity: [String, Number],
  ...Se(),
  ...On(),
  ...Ae({
    tag: "i"
  }),
  ...Ne()
}, "VIcon"), He = Q()({
  name: "VIcon",
  props: Tp(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = /* @__PURE__ */ se(), {
      themeClasses: o
    } = lr(), {
      iconData: i
    } = R0(() => l.value || e.icon), {
      sizeClasses: r
    } = Ll(e), {
      textColorClasses: s,
      textColorStyles: u
    } = Ct(() => e.color);
    return te(() => {
      const c = a.default?.();
      c && (l.value = pm(c).filter((f) => f.type === Fo && f.children && typeof f.children == "string")[0]?.children);
      const d = !!(n.onClick || n.onClickOnce);
      return p(i.value.component, {
        tag: e.tag,
        icon: i.value.icon,
        class: ee(["v-icon", "notranslate", o.value, r.value, s.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ve([{
          "--v-icon-opacity": e.opacity
        }, r.value ? void 0 : {
          fontSize: de(e.size),
          height: de(e.size),
          width: de(e.size)
        }, u.value, e.style]),
        role: d ? "button" : void 0,
        "aria-hidden": !d,
        tabindex: d ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function Ho(e, t) {
  const n = /* @__PURE__ */ ae(), a = /* @__PURE__ */ se(!1);
  if (Iu) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    ot(() => {
      l.disconnect();
    }), ue(n, (o, i) => {
      i && (l.unobserve(i), a.value = !1), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const Ap = R({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  rounded: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...Se(),
  ...On(),
  ...Ae({
    tag: "div"
  }),
  ...Ne()
}, "VProgressCircular"), Sa = Q()({
  name: "VProgressCircular",
  props: Ap(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, o = /* @__PURE__ */ ae(), {
      themeClasses: i
    } = We(e), {
      sizeClasses: r,
      sizeStyles: s
    } = Ll(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Ct(() => e.color), {
      textColorClasses: d,
      textColorStyles: f
    } = Ct(() => e.bgColor), {
      intersectionRef: v,
      isIntersecting: k
    } = Ho(), {
      resizeRef: m,
      contentRect: y
    } = vn(), h = /* @__PURE__ */ E(() => je(parseFloat(e.modelValue), 0, 100)), x = /* @__PURE__ */ E(() => Number(e.width)), w = /* @__PURE__ */ E(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(x.value, 32)), b = /* @__PURE__ */ E(() => a / (1 - x.value / w.value) * 2), S = /* @__PURE__ */ E(() => x.value / w.value * b.value), g = /* @__PURE__ */ E(() => {
      const C = (100 - h.value) / 100 * l;
      return e.rounded && h.value > 0 && h.value < 100 ? de(Math.min(l - 0.01, C + S.value)) : de(C);
    }), I = V(() => {
      const C = Number(e.rotate);
      return e.rounded ? C + S.value / 2 / l * 360 : C;
    });
    return at(() => {
      v.value = o.value, m.value = o.value;
    }), te(() => p(e.tag, {
      ref: o,
      class: ee(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": k.value,
        "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || An())
      }, i.value, r.value, u.value, e.class]),
      style: ve([s.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : h.value
    }, {
      default: () => [_("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${I.value}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${b.value} ${b.value}`
      }, [_("circle", {
        class: ee(["v-progress-circular__underlay", d.value]),
        style: ve(f.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": S.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), _("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": S.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": g.value,
        "stroke-linecap": e.rounded ? "round" : void 0
      }, null)]), n.default && _("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: h.value
      })])]
    })), {};
  }
}), uf = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, la = R({
  location: String
}, "location");
function rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = gt();
  return {
    locationStyles: V(() => {
      if (!e.location) return {};
      const {
        side: o,
        align: i
      } = bs(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return o !== "center" && (t ? s[uf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[uf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), s;
    })
  };
}
const Dp = R({
  chunkCount: {
    type: [Number, String],
    default: null
  },
  chunkWidth: {
    type: [Number, String],
    default: null
  },
  chunkGap: {
    type: [Number, String],
    default: 4
  }
}, "chunks");
function Ep(e, t) {
  const n = /* @__PURE__ */ E(() => !!e.chunkCount || !!e.chunkWidth), a = V(() => {
    const r = kt(t);
    if (!r)
      return 0;
    if (!e.chunkCount)
      return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = /* @__PURE__ */ E(() => Number(e.chunkGap)), o = V(() => {
    if (!n.value)
      return {};
    const r = de(l.value), s = de(a.value);
    return {
      maskRepeat: "repeat-x",
      maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`,
      maskSize: `calc(${s} + ${r}) 100%`
    };
  });
  function i(r) {
    const s = kt(t);
    if (!s)
      return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return je(0, d * c - u / 2, 100);
  }
  return {
    hasChunks: n,
    chunksMaskStyles: o,
    snapValueToChunk: i
  };
}
const Mp = R({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Dp(),
  ...Se(),
  ...la({
    location: "top"
  }),
  ...Je(),
  ...Ae(),
  ...Ne()
}, "VProgressLinear"), rr = Q()({
  name: "VProgressLinear",
  props: Mp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = pe(e, "modelValue"), {
      isRtl: o,
      rtlClasses: i
    } = gt(), {
      themeClasses: r
    } = We(e), {
      locationStyles: s
    } = rl(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Ct(() => e.color), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = ze(() => e.bgColor || e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: k
    } = ze(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: m,
      backgroundColorStyles: y
    } = ze(() => e.color), {
      roundedClasses: h
    } = et(e), {
      intersectionRef: x,
      isIntersecting: w
    } = Ho(), b = V(() => parseFloat(e.max)), S = V(() => parseFloat(e.height)), g = V(() => je(parseFloat(e.bufferValue) / b.value * 100, 0, 100)), I = V(() => je(parseFloat(l.value) / b.value * 100, 0, 100)), C = V(() => o.value !== e.reverse), T = V(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = /* @__PURE__ */ se(0), {
      hasChunks: F,
      chunksMaskStyles: A,
      snapValueToChunk: B
    } = Ep(e, P);
    Pt(F, () => {
      const {
        resizeRef: N
      } = vn((J) => P.value = J[0].contentRect.width);
      at(() => N.value = a.value);
    });
    const D = V(() => F.value ? B(g.value) : g.value), L = V(() => F.value ? B(I.value) : I.value);
    function W(N) {
      if (!x.value) return;
      const {
        left: J,
        right: q,
        width: $
      } = x.value.getBoundingClientRect(), ne = C.value ? $ - N.clientX + (q - $) : N.clientX - J;
      l.value = Math.round(ne / $ * b.value);
    }
    return at(() => {
      x.value = a.value;
    }), te(() => p(e.tag, {
      ref: a,
      class: ee(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && w.value,
        "v-progress-linear--reverse": C.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped,
        "v-progress-linear--clickable": e.clickable
      }, h.value, r.value, i.value, e.class]),
      style: ve([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? de(S.value) : 0,
        "--v-progress-linear-height": de(S.value),
        ...e.absolute ? s.value : {}
      }, A.value, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), b.value),
      onClick: e.clickable && W
    }, {
      default: () => [e.stream && _("div", {
        key: "stream",
        class: ee(["v-progress-linear__stream", u.value]),
        style: {
          ...c.value,
          [C.value ? "left" : "right"]: de(-S.value),
          borderTop: `${de(S.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${de(S.value / 4)})`,
          width: de(100 - g.value, "%"),
          "--v-progress-linear-stream-to": de(S.value * (C.value ? 1 : -1))
        }
      }, null), _("div", {
        class: ee(["v-progress-linear__background", d.value]),
        style: ve([f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), _("div", {
        class: ee(["v-progress-linear__buffer", v.value]),
        style: ve([k.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: de(D.value, "%")
        }])
      }, null), p(ha, {
        name: T.value
      }, {
        default: () => [e.indeterminate ? _("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((N) => _("div", {
          key: N,
          class: ee(["v-progress-linear__indeterminate", N, m.value]),
          style: ve(y.value)
        }, null))]) : _("div", {
          class: ee(["v-progress-linear__determinate", m.value]),
          style: ve([y.value, {
            width: de(L.value, "%")
          }])
        }, null)]
      }), n.default && _("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: I.value,
        buffer: g.value
      })])]
    })), {};
  }
}), sr = R({
  loading: [Boolean, String]
}, "loader");
function Wo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return {
    loaderClasses: /* @__PURE__ */ E(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function zo(e, t) {
  let {
    slots: n
  } = t;
  return _("div", {
    class: ee(`${e.name}__loader`)
  }, [n.default?.({
    color: e.color,
    isActive: e.active
  }) || p(rr, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Bp = ["static", "relative", "fixed", "absolute", "sticky"], Ol = R({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Bp.includes(e)
    )
  }
}, "position");
function $l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  return {
    positionClasses: /* @__PURE__ */ E(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Fp() {
  const e = ct("useRoute");
  return V(() => e?.proxy?.$route);
}
function fg() {
  return ct("useRouter")?.proxy?.$router;
}
function jo(e, t) {
  const n = xS("RouterLink"), a = /* @__PURE__ */ E(() => !!(e.href || e.to)), l = V(() => a?.value || Td(t, "click") || Td(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = /* @__PURE__ */ E(() => e.href);
    return {
      isLink: a,
      isRouterLink: /* @__PURE__ */ E(() => !1),
      isClickable: l,
      href: d,
      linkProps: /* @__PURE__ */ pt({
        href: d
      })
    };
  }
  const o = n.useLink({
    to: /* @__PURE__ */ E(() => e.to || ""),
    replace: /* @__PURE__ */ E(() => e.replace)
  }), i = V(() => e.to ? o : void 0), r = Fp(), s = V(() => i.value ? e.exact ? r.value ? i.value.isExactActive?.value && xt(i.value.route.value.query, r.value.query) : i.value.isExactActive?.value ?? !1 : i.value.isActive?.value ?? !1 : !1), u = V(() => e.to ? i.value?.route.value.href : e.href);
  return {
    isLink: a,
    isRouterLink: /* @__PURE__ */ E(() => !!e.to),
    isClickable: l,
    isActive: s,
    route: i.value?.route,
    navigate: i.value?.navigate,
    href: u,
    linkProps: /* @__PURE__ */ pt({
      href: u,
      "aria-current": /* @__PURE__ */ E(() => s.value ? "page" : void 0),
      "aria-disabled": /* @__PURE__ */ E(() => e.disabled && a.value ? "true" : void 0),
      tabindex: /* @__PURE__ */ E(() => e.disabled && a.value ? "-1" : void 0)
    })
  };
}
const Yo = R({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Gr = !1;
function Lp(e, t) {
  let n = !1, a, l;
  Ye && e?.beforeEach && (Te(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      Gr ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Gr = !0;
    }), l = e?.afterEach(() => {
      Gr = !1;
    });
  }), ot(() => {
    window.removeEventListener("popstate", o), a?.(), l?.();
  }));
  function o(i) {
    i.state?.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Op(e, t) {
  ue(() => e.isActive?.value, (n) => {
    e.isLink.value && n != null && t && Te(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const Ts = /* @__PURE__ */ Symbol("rippleStop"), $p = 80;
function cf(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function As(e) {
  return e.constructor.name === "TouchEvent";
}
function vg(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Np = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!vg(e)) {
    const d = t.getBoundingClientRect(), f = As(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  t._ripple?.circle ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return {
    radius: o,
    scale: i,
    x: u,
    y: c,
    centerX: r,
    centerY: s
  };
}, Bi = {
  /* eslint-disable max-statements */
  show(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: o,
      scale: i,
      x: r,
      y: s,
      centerX: u,
      centerY: c
    } = Np(e, t, n), d = `${o * 2}px`;
    l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), cf(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), cf(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((o) => !o.dataset.isHiding);
    if (n) n.dataset.isHiding = "true";
    else return;
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function mg(e) {
  return typeof e > "u" || !!e;
}
function xo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[Ts])) {
    if (e[Ts] = !0, As(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || vg(e), n._ripple.class && (t.class = n._ripple.class), As(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Bi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, $p);
    } else
      Bi.show(e, n, t);
  }
}
function Fi(e) {
  e[Ts] = !0;
}
function Xt(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Xt(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Bi.hide(t);
  }
}
function gg(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Co = !1;
function Rp(e, t) {
  !Co && t.includes(e.key) && (Co = !0, xo(e));
}
function hg(e) {
  Co = !1, Xt(e);
}
function yg(e) {
  Co && (Co = !1, Xt(e));
}
function bg(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, o = mg(a);
  o || Bi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = Ua(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => Rp(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Fi, {
        passive: !0
      }), e.addEventListener("mousedown", Fi);
      return;
    }
    e.addEventListener("touchstart", xo, {
      passive: !0
    }), e.addEventListener("touchend", Xt, {
      passive: !0
    }), e.addEventListener("touchmove", gg, {
      passive: !0
    }), e.addEventListener("touchcancel", Xt), e.addEventListener("mousedown", xo), e.addEventListener("mouseup", Xt), e.addEventListener("mouseleave", Xt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", hg), e.addEventListener("blur", yg), e.addEventListener("dragstart", Xt, {
      passive: !0
    });
  } else !o && n && Sg(e);
}
function Sg(e) {
  e.removeEventListener("touchstart", Fi), e.removeEventListener("mousedown", Fi), e.removeEventListener("touchstart", xo), e.removeEventListener("touchend", Xt), e.removeEventListener("touchmove", gg), e.removeEventListener("touchcancel", Xt), e.removeEventListener("mousedown", xo), e.removeEventListener("mouseup", Xt), e.removeEventListener("mouseleave", Xt), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", hg), e.removeEventListener("blur", yg), e.removeEventListener("dragstart", Xt);
}
function Hp(e, t) {
  bg(e, t, !1);
}
function Wp(e) {
  Sg(e), delete e._ripple;
}
function zp(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = mg(t.oldValue);
  bg(e, t, n);
}
const Vt = {
  mounted: Hp,
  unmounted: Wp,
  updated: zp
}, ur = R({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Ku
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: xe,
  appendIcon: xe,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  spaced: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Et(),
  ...Se(),
  ...it(),
  ...dt(),
  ...vt(),
  ...il(),
  ...sr(),
  ...la(),
  ...Ol(),
  ...Je(),
  ...Yo(),
  ...On(),
  ...Ae({
    tag: "button"
  }),
  ...Ne(),
  ...rn({
    variant: "elevated"
  })
}, "VBtn"), Oe = Q()({
  name: "VBtn",
  props: ur(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      borderClasses: o
    } = Nt(e), {
      densityClasses: i
    } = Mt(e), {
      dimensionStyles: r
    } = ft(e), {
      elevationClasses: s
    } = bt(e), {
      loaderClasses: u
    } = Wo(e), {
      locationStyles: c
    } = rl(e), {
      positionClasses: d
    } = $l(e), {
      roundedClasses: f
    } = et(e), {
      sizeClasses: v,
      sizeStyles: k
    } = Ll(e), m = ba(e, e.symbol, !1), y = jo(e, n), h = V(() => e.active !== void 0 ? e.active : y.isRouterLink.value ? y.isActive?.value : m?.isSelected.value), x = /* @__PURE__ */ E(() => h.value ? e.activeColor ?? e.color : e.color), w = V(() => ({
      color: m?.isSelected.value && (!y.isLink.value || y.isActive?.value) || !m || y.isActive?.value ? x.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    })), {
      colorClasses: b,
      colorStyles: S,
      variantClasses: g
    } = aa(w), I = V(() => m?.disabled.value || e.disabled), C = /* @__PURE__ */ E(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = V(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function P(F) {
      I.value || y.isLink.value && (F.metaKey || F.ctrlKey || F.shiftKey || F.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? y.navigate?.(F) : m?.toggle());
    }
    return Op(y, m?.select), te(() => {
      const F = y.isLink.value ? "a" : e.tag, A = !!(e.prependIcon || a.prepend), B = !!(e.appendIcon || a.append), D = !!(e.icon && e.icon !== !0);
      return qe(p(F, U(y.linkProps, {
        type: F === "a" ? void 0 : "button",
        class: ["v-btn", m?.selectedClass.value, {
          "v-btn--active": h.value,
          "v-btn--block": e.block,
          "v-btn--disabled": I.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, b.value, i.value, s.value, u.value, d.value, f.value, v.value, g.value, e.class],
        style: [S.value, r.value, c.value, k.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: I.value && F !== "a" || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: P,
        value: T.value
      }), {
        default: () => [na(!0, "v-btn"), !e.icon && A && _("span", {
          key: "prepend",
          class: "v-btn__prepend"
        }, [a.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !e.prependIcon,
          defaults: {
            VIcon: {
              icon: e.prependIcon
            }
          }
        }, a.prepend) : p(He, {
          key: "prepend-icon",
          icon: e.prependIcon
        }, null)]), _("span", {
          class: "v-btn__content",
          "data-no-activator": ""
        }, [!a.default && D ? p(He, {
          key: "content-icon",
          icon: e.icon
        }, null) : p(Ee, {
          key: "content-defaults",
          disabled: !D,
          defaults: {
            VIcon: {
              icon: e.icon
            }
          }
        }, {
          default: () => [a.default?.() ?? Tn(e.text)]
        })]), !e.icon && B && _("span", {
          key: "append",
          class: "v-btn__append"
        }, [a.append ? p(Ee, {
          key: "append-defaults",
          disabled: !e.appendIcon,
          defaults: {
            VIcon: {
              icon: e.appendIcon
            }
          }
        }, a.append) : p(He, {
          key: "append-icon",
          icon: e.appendIcon
        }, null)]), !!e.loading && _("span", {
          key: "loader",
          class: "v-btn__loader"
        }, [a.loader?.() ?? p(Sa, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: !0,
          width: "2"
        }, null)])]
      }), [[Vt, !I.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: m
    };
  }
}), jp = R({
  ...Be(ur({
    icon: "$menu",
    variant: "text"
  }), ["spaced"])
}, "VAppBarNavIcon"), Yp = Q()({
  name: "VAppBarNavIcon",
  props: jp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(Oe, U(e, {
      class: ["v-app-bar-nav-icon"]
    }), n)), {};
  }
}), Up = Q()({
  name: "VAppBarTitle",
  props: ng(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(Wu, U(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
}), kg = ea("v-alert-title"), wg = R({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  }
}, "iconSize");
function pg(e, t) {
  return {
    iconSize: V(() => {
      const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
      return a.has(l) ? a.get(l) : l;
    })
  };
}
const Kp = ["success", "info", "warning", "error"], Gp = R({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: xe,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => Kp.includes(e)
  },
  ...Se(),
  ...it(),
  ...dt(),
  ...vt(),
  ...wg(),
  ...la(),
  ...Ol(),
  ...Je(),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "flat"
  })
}, "VAlert"), qp = Q()({
  name: "VAlert",
  props: Gp(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = pe(e, "modelValue"), o = /* @__PURE__ */ E(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), {
      iconSize: i
    } = pg(e, () => e.prominent ? 44 : void 0), {
      themeClasses: r
    } = We(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: c
    } = aa(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      densityClasses: d
    } = Mt(e), {
      dimensionStyles: f
    } = ft(e), {
      elevationClasses: v
    } = bt(e), {
      locationStyles: k
    } = rl(e), {
      positionClasses: m
    } = $l(e), {
      roundedClasses: y
    } = et(e), {
      textColorClasses: h,
      textColorStyles: x
    } = Ct(() => e.borderColor), {
      t: w
    } = Ue(), b = /* @__PURE__ */ E(() => ({
      "aria-label": w(e.closeLabel),
      onClick(S) {
        l.value = !1, n("click:close", S);
      }
    }));
    return () => {
      const S = !!(a.prepend || o.value), g = !!(a.title || e.title), I = !!(a.close || e.closable), C = {
        density: e.density,
        icon: o.value,
        size: e.iconSize || e.prominent ? i.value : void 0
      };
      return l.value && p(e.tag, {
        class: ee(["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, d.value, v.value, m.value, y.value, c.value, e.class]),
        style: ve([u.value, f.value, k.value, e.style]),
        role: "alert"
      }, {
        default: () => [na(!1, "v-alert"), e.border && _("div", {
          key: "border",
          class: ee(["v-alert__border", h.value]),
          style: ve(x.value)
        }, null), S && _("div", {
          key: "prepend",
          class: "v-alert__prepend"
        }, [a.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !o.value,
          defaults: {
            VIcon: {
              ...C
            }
          }
        }, a.prepend) : p(He, U({
          key: "prepend-icon"
        }, C), null)]), _("div", {
          class: "v-alert__content"
        }, [g && p(kg, {
          key: "title"
        }, {
          default: () => [a.title?.() ?? e.title]
        }), a.text?.() ?? e.text, a.default?.()]), a.append && _("div", {
          key: "append",
          class: "v-alert__append"
        }, [a.append()]), I && _("div", {
          key: "close",
          class: "v-alert__close"
        }, [a.close ? p(Ee, {
          key: "close-defaults",
          defaults: {
            VBtn: {
              icon: e.closeIcon,
              size: "x-small",
              variant: "text"
            }
          }
        }, {
          default: () => [a.close?.({
            props: b.value
          })]
        }) : p(Oe, U({
          key: "close-btn",
          icon: e.closeIcon,
          size: "x-small",
          variant: "text"
        }, b.value), null)])]
      });
    };
  }
}), Xp = R({
  start: Boolean,
  end: Boolean,
  icon: xe,
  image: String,
  text: String,
  ...Et(),
  ...Se(),
  ...it(),
  ...Je(),
  ...On(),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "flat"
  })
}, "VAvatar"), an = Q()({
  name: "VAvatar",
  props: Xp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      borderClasses: l
    } = Nt(e), {
      colorClasses: o,
      colorStyles: i,
      variantClasses: r
    } = aa(e), {
      densityClasses: s
    } = Mt(e), {
      roundedClasses: u
    } = et(e), {
      sizeClasses: c,
      sizeStyles: d
    } = Ll(e);
    return te(() => p(e.tag, {
      class: ee(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]),
      style: ve([i.value, d.value, e.style])
    }, {
      default: () => [n.default ? p(Ee, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? p(Zn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? p(He, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, na(!1, "v-avatar")]
    })), {};
  }
}), Zp = R({
  text: String,
  onClick: _t(),
  ...Se(),
  ...Ne()
}, "VLabel"), Nl = Q()({
  name: "VLabel",
  props: Zp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => _("label", {
      class: ee(["v-label", {
        "v-label--clickable": !!e.onClick
      }, e.class]),
      style: ve(e.style),
      onClick: e.onClick
    }, [e.text, n.default?.()])), {};
  }
}), xg = /* @__PURE__ */ Symbol.for("vuetify:selection-control-group"), Gu = R({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: xe,
  trueIcon: xe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: xt
  },
  ...Se(),
  ...it(),
  ...Ne()
}, "SelectionControlGroup"), Jp = R({
  ...Gu({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Cg = Q()({
  name: "VSelectionControlGroup",
  props: Jp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), l = At(), o = /* @__PURE__ */ E(() => e.id || `v-selection-control-group-${l}`), i = /* @__PURE__ */ E(() => e.name || o.value), r = /* @__PURE__ */ new Set();
    return Ze(xg, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), ot(() => {
          r.delete(s);
        });
      }
    }), lt({
      [e.defaultsTarget]: {
        color: /* @__PURE__ */ E(() => e.color),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        density: /* @__PURE__ */ E(() => e.density),
        error: /* @__PURE__ */ E(() => e.error),
        inline: /* @__PURE__ */ E(() => e.inline),
        modelValue: a,
        multiple: /* @__PURE__ */ E(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: i,
        falseIcon: /* @__PURE__ */ E(() => e.falseIcon),
        trueIcon: /* @__PURE__ */ E(() => e.trueIcon),
        readonly: /* @__PURE__ */ E(() => e.readonly),
        ripple: /* @__PURE__ */ E(() => e.ripple),
        type: /* @__PURE__ */ E(() => e.type),
        valueComparator: /* @__PURE__ */ E(() => e.valueComparator)
      }
    }), te(() => _("div", {
      class: ee(["v-selection-control-group", {
        "v-selection-control-group--inline": e.inline
      }, e.class]),
      style: ve(e.style),
      role: e.type === "radio" ? "radiogroup" : void 0
    }, [n.default?.()])), {};
  }
}), cr = R({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Se(),
  ...Gu()
}, "VSelectionControl");
function Qp(e) {
  const t = $e(xg, void 0), {
    densityClasses: n
  } = Mt(e), a = pe(e, "modelValue"), l = V(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), o = V(() => e.falseValue !== void 0 ? e.falseValue : !1), i = V(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = V({
    get() {
      const v = t ? t.modelValue.value : a.value;
      return i.value ? Xe(v).some((k) => e.valueComparator(k, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const k = v ? l.value : o.value;
      let m = k;
      i.value && (m = v ? [...Xe(a.value), k] : Xe(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = m : a.value = m;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = Ct(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: c,
    backgroundColorStyles: d
  } = ze(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = V(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: o,
    model: r,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: d,
    icon: f
  };
}
const ka = Q()({
  name: "VSelectionControl",
  directives: {
    vRipple: Vt
  },
  inheritAttrs: !1,
  props: cr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: o,
      icon: i,
      model: r,
      textColorClasses: s,
      textColorStyles: u,
      backgroundColorClasses: c,
      backgroundColorStyles: d,
      trueValue: f
    } = Qp(e), v = At(), k = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ ae(), h = /* @__PURE__ */ E(() => e.id || `input-${v}`), x = /* @__PURE__ */ E(() => !e.disabled && !e.readonly);
    l?.onForceUpdate(() => {
      y.value && (y.value.checked = r.value);
    });
    function w(I) {
      x.value && (k.value = !0, Vl(I.target, ":focus-visible") !== !1 && (m.value = !0));
    }
    function b() {
      k.value = !1, m.value = !1;
    }
    function S(I) {
      I.stopPropagation();
    }
    function g(I) {
      if (!x.value) {
        y.value && (y.value.checked = r.value);
        return;
      }
      e.readonly && l && Te(() => l.forceUpdate()), r.value = I.target.checked;
    }
    return te(() => {
      const I = a.label ? a.label({
        label: e.label,
        props: {
          for: h.value
        }
      }) : e.label, [C, T] = Fn(n), P = _("input", U({
        ref: y,
        checked: r.value,
        disabled: !!e.disabled,
        id: h.value,
        onBlur: b,
        onFocus: w,
        onInput: g,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, T), null);
      return _("div", U({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": k.value,
          "v-selection-control--focus-visible": m.value,
          "v-selection-control--inline": e.inline
        }, o.value, e.class]
      }, C, {
        style: e.style
      }), [_("div", {
        class: ee(["v-selection-control__wrapper", s.value]),
        style: ve(u.value)
      }, [a.default?.({
        backgroundColorClasses: c,
        backgroundColorStyles: d
      }), qe(_("div", {
        class: ee(["v-selection-control__input"])
      }, [a.input?.({
        model: r,
        textColorClasses: s,
        textColorStyles: u,
        backgroundColorClasses: c,
        backgroundColorStyles: d,
        inputNode: P,
        icon: i.value,
        props: {
          onFocus: w,
          onBlur: b,
          id: h.value
        }
      }) ?? _(ye, null, [i.value && p(He, {
        key: "icon",
        icon: i.value
      }, null), P])]), [[Vt, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), I && p(Nl, {
        for: h.value,
        onClick: S
      }, {
        default: () => [I]
      })]);
    }), {
      isFocused: k,
      input: y
    };
  }
}), _g = R({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: xe,
    default: "$checkboxIndeterminate"
  },
  ...cr({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), pn = Q()({
  name: "VCheckboxBtn",
  props: _g(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "indeterminate"), l = pe(e, "modelValue");
    function o(s) {
      a.value && (a.value = !1);
    }
    const i = /* @__PURE__ */ E(() => a.value ? e.indeterminateIcon : e.falseIcon), r = /* @__PURE__ */ E(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return te(() => {
      const s = Be(ka.filterProps(e), ["modelValue"]);
      return p(ka, U(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(u) => l.value = u, o],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: i.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function Uo(e) {
  const {
    t
  } = Ue();
  function n(a) {
    let {
      name: l,
      color: o,
      ...i
    } = a;
    const r = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), $o(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return p(He, U({
      icon: e[`${l}Icon`],
      "aria-label": c,
      onClick: s,
      onKeydown: u,
      color: o
    }, i), null);
  }
  return {
    InputIcon: n
  };
}
const ex = R({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Se(),
  ...ta({
    transition: {
      component: ju,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Vg = Q()({
  name: "VMessages",
  props: ex(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = V(() => Xe(e.messages)), {
      textColorClasses: l,
      textColorStyles: o
    } = Ct(() => e.color);
    return te(() => p(Ot, {
      transition: e.transition,
      tag: "div",
      class: ee(["v-messages", l.value, e.class]),
      style: ve([o.value, e.style])
    }, {
      default: () => [e.active && a.value.map((i, r) => _("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: i
      }) : i]))]
    })), {};
  }
}), Ko = R({
  focused: Boolean,
  "onUpdate:focused": _t()
}, "focus");
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln();
  const n = pe(e, "focused"), a = /* @__PURE__ */ E(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function o() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: o
  };
}
const Ig = /* @__PURE__ */ Symbol.for("vuetify:form"), tx = R({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function nx(e) {
  const t = pe(e, "modelValue"), n = /* @__PURE__ */ E(() => e.disabled), a = /* @__PURE__ */ E(() => e.readonly), l = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ ae([]), i = /* @__PURE__ */ ae([]);
  async function r() {
    const c = [];
    let d = !0;
    i.value = [], l.value = !0;
    for (const f of o.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = !1, c.push({
        id: f.id,
        errorMessages: v
      })), !d && e.fastFail) break;
    }
    return i.value = c, l.value = !1, {
      valid: d,
      errors: i.value
    };
  }
  function s() {
    o.value.forEach((c) => c.reset());
  }
  function u() {
    o.value.forEach((c) => c.resetValidation());
  }
  return ue(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of o.value)
      v.isValid === !1 ? (d++, f.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && c++;
    i.value = f, t.value = d > 0 ? !1 : c === o.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Ze(Ig, {
    register: (c) => {
      let {
        id: d,
        vm: f,
        validate: v,
        reset: k,
        resetValidation: m
      } = c;
      o.value.some((y) => y.id === d), o.value.push({
        id: d,
        validate: v,
        reset: k,
        resetValidation: m,
        vm: vv(f),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (c) => {
      o.value = o.value.filter((d) => d.id !== c);
    },
    update: (c, d, f) => {
      const v = o.value.find((k) => k.id === c);
      v && (v.isValid = d, v.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: o,
    validateOn: /* @__PURE__ */ E(() => e.validateOn)
  }), {
    errors: i,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: o,
    validate: r,
    reset: s,
    resetValidation: u
  };
}
function Rl(e) {
  const t = $e(Ig, null);
  return {
    ...t,
    isReadonly: V(() => !!(e?.readonly ?? t?.isReadonly.value)),
    isDisabled: V(() => !!(e?.disabled ?? t?.isDisabled.value))
  };
}
const ax = /* @__PURE__ */ Symbol.for("vuetify:rules");
function lx(e) {
  const t = $e(ax, null);
  if (!e) {
    if (!t)
      throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return t?.resolve(e) ?? /* @__PURE__ */ E(e);
}
const Pg = R({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Ko()
}, "validation");
function Tg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : At();
  const a = pe(e, "modelValue"), l = V(() => e.validationValue === void 0 ? a.value : e.validationValue), o = Rl(e), i = lx(() => e.rules), r = /* @__PURE__ */ ae([]), s = /* @__PURE__ */ se(!0), u = V(() => !!(Xe(a.value === "" ? null : a.value).length || Xe(l.value === "" ? null : l.value).length)), c = V(() => e.errorMessages?.length ? Xe(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value), d = V(() => {
    let b = (e.validateOn ?? o.validateOn?.value) || "input";
    b === "lazy" && (b = "input lazy"), b === "eager" && (b = "input eager");
    const S = new Set(b?.split(" ") ?? []);
    return {
      input: S.has("input"),
      blur: S.has("blur") || S.has("input") || S.has("invalid-input"),
      invalidInput: S.has("invalid-input"),
      lazy: S.has("lazy"),
      eager: S.has("eager")
    };
  }), f = V(() => e.error || e.errorMessages?.length ? !1 : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : !0 : !r.value.length : !0), v = /* @__PURE__ */ se(!1), k = V(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: o.isDisabled.value,
    [`${t}--readonly`]: o.isReadonly.value
  })), m = ct("validation"), y = V(() => e.name ?? be(n));
  Fl(() => {
    o.register?.({
      id: y.value,
      vm: m,
      validate: w,
      reset: h,
      resetValidation: x
    });
  }), Dt(() => {
    o.unregister?.(y.value);
  }), yt(async () => {
    d.value.lazy || await w(!d.value.eager), o.update?.(y.value, f.value, c.value);
  }), Pt(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    ue(l, () => {
      if (l.value != null)
        w();
      else if (e.focused) {
        const b = ue(() => e.focused, (S) => {
          S || w(), b();
        });
      }
    });
  }), Pt(() => d.value.blur, () => {
    ue(() => e.focused, (b) => {
      b || w();
    });
  }), ue([f, c], () => {
    o.update?.(y.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Te(), await x();
  }
  async function x() {
    s.value = !0, d.value.lazy ? r.value = [] : await w(!d.value.eager);
  }
  async function w() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const S = [];
    v.value = !0;
    for (const g of i.value) {
      if (S.length >= Number(e.maxErrors ?? 1))
        break;
      const C = await (typeof g == "function" ? g : () => g)(l.value);
      if (C !== !0) {
        if (C !== !1 && typeof C != "string") {
          console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        S.push(C || "");
      }
    }
    return r.value = S, v.value = !1, s.value = b, r.value;
  }
  return {
    errorMessages: c,
    isDirty: u,
    isDisabled: o.isDisabled,
    isReadonly: o.isReadonly,
    isPristine: s,
    isValid: f,
    isValidating: v,
    reset: h,
    resetValidation: x,
    validate: w,
    validationClasses: k
  };
}
const ia = R({
  id: String,
  appendIcon: xe,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: xe,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": _t(),
  "onClick:append": _t(),
  ...Se(),
  ...it(),
  ...jt(dt(), ["maxWidth", "minWidth", "width"]),
  ...Ne(),
  ...Pg()
}, "VInput"), Tt = Q()({
  name: "VInput",
  props: {
    ...ia()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: o
    } = Mt(e), {
      dimensionStyles: i
    } = ft(e), {
      themeClasses: r
    } = We(e), {
      rtlClasses: s
    } = gt(), {
      InputIcon: u
    } = Uo(e), c = At(), d = V(() => e.id || `input-${c}`), {
      errorMessages: f,
      isDirty: v,
      isDisabled: k,
      isReadonly: m,
      isPristine: y,
      isValid: h,
      isValidating: x,
      reset: w,
      resetValidation: b,
      validate: S,
      validationClasses: g
    } = Tg(e, "v-input", d), I = V(() => e.errorMessages?.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages), C = /* @__PURE__ */ E(() => I.value.length > 0), T = /* @__PURE__ */ E(() => !e.hideDetails || e.hideDetails === "auto" && (C.value || !!a.details)), P = V(() => T.value ? `${d.value}-messages` : void 0), F = V(() => ({
      id: d,
      messagesId: P,
      isDirty: v,
      isDisabled: k,
      isReadonly: m,
      isPristine: y,
      isValid: h,
      isValidating: x,
      hasDetails: T,
      reset: w,
      resetValidation: b,
      validate: S
    })), A = /* @__PURE__ */ E(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), B = /* @__PURE__ */ E(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? A.value : e.iconColor;
    });
    return te(() => {
      const D = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
      return _("div", {
        class: ee(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, o.value, r.value, s.value, g.value, e.class]),
        style: ve([i.value, e.style])
      }, [D && _("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [a.prepend ? a.prepend(F.value) : e.prependIcon && p(u, {
        key: "prepend-icon",
        name: "prepend",
        color: B.value
      }, null)]), a.default && _("div", {
        class: "v-input__control"
      }, [a.default?.(F.value)]), L && _("div", {
        key: "append",
        class: "v-input__append"
      }, [a.append ? a.append(F.value) : e.appendIcon && p(u, {
        key: "append-icon",
        name: "append",
        color: B.value
      }, null)]), T.value && _("div", {
        id: P.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [p(Vg, {
        active: C.value,
        messages: I.value
      }, {
        message: a.message
      }), a.details?.(F.value)])]);
    }), {
      reset: w,
      resetValidation: b,
      validate: S,
      isValid: h,
      errorMessages: f
    };
  }
}), qr = /* @__PURE__ */ Symbol("Forwarded refs");
function Xr(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function St(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[qr] = n, new Proxy(e, {
    get(l, o) {
      if (Reflect.has(l, o))
        return Reflect.get(l, o);
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const i of n)
          if (i.value && Reflect.has(i.value, o)) {
            const r = Reflect.get(i.value, o);
            return typeof r == "function" ? r.bind(i.value) : r;
          }
      }
    },
    has(l, o) {
      if (Reflect.has(l, o))
        return !0;
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const i of n)
        if (i.value && Reflect.has(i.value, o))
          return !0;
      return !1;
    },
    set(l, o, i) {
      if (Reflect.has(l, o))
        return Reflect.set(l, o, i);
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, o))
          return Reflect.set(r.value, o, i);
      return !1;
    },
    getOwnPropertyDescriptor(l, o) {
      const i = Reflect.getOwnPropertyDescriptor(l, o);
      if (i) return i;
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const r of n) {
          if (!r.value) continue;
          const s = Xr(r.value, o) ?? ("_" in r.value ? Xr(r.value._?.setupState, o) : void 0);
          if (s) return s;
        }
        for (const r of n) {
          const s = r.value && r.value[qr];
          if (!s) continue;
          const u = s.slice();
          for (; u.length; ) {
            const c = u.shift(), d = Xr(c.value, o);
            if (d) return d;
            const f = c.value && c.value[qr];
            f && u.push(...f);
          }
        }
      }
    }
  });
}
const ox = R({
  ...Be(ia(), ["direction"]),
  ...Be(_g(), ["inline"])
}, "VCheckbox"), ix = Q()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: ox(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = pe(e, "modelValue"), {
      isFocused: o,
      focus: i,
      blur: r
    } = oa(e), s = /* @__PURE__ */ ae(), u = At();
    return te(() => {
      const [c, d] = Fn(n), f = Tt.filterProps(e), v = pn.filterProps(e);
      return p(Tt, U({
        ref: s,
        class: ["v-checkbox", e.class]
      }, c, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (k) => l.value = k,
        id: e.id || `checkbox-${u}`,
        focused: o.value,
        style: e.style
      }), {
        ...a,
        default: (k) => {
          let {
            id: m,
            messagesId: y,
            isDisabled: h,
            isReadonly: x,
            isValid: w
          } = k;
          return p(pn, U(v, {
            id: m.value,
            "aria-describedby": y.value,
            disabled: h.value,
            readonly: x.value
          }, d, {
            error: w.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (b) => l.value = b,
            onFocus: i,
            onBlur: r
          }), a);
        }
      });
    }), St({}, s);
  }
});
function rx(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: a,
    isHorizontal: l
  } = e;
  const o = _o(l, n), i = Ag(l, a, n), r = _o(l, t), s = Dg(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function sx(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: a
  } = e;
  const l = _o(a, n), o = Dg(a, t), i = _o(a, t);
  return o - l / 2 + i / 2;
}
function df(e, t) {
  return t?.[e ? "scrollWidth" : "scrollHeight"] || 0;
}
function ux(e, t) {
  return t?.[e ? "clientWidth" : "clientHeight"] || 0;
}
function Ag(e, t, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: o
  } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function _o(e, t) {
  return t?.[e ? "offsetWidth" : "offsetHeight"] || 0;
}
function Dg(e, t) {
  return t?.[e ? "offsetLeft" : "offsetTop"] || 0;
}
const qu = /* @__PURE__ */ Symbol.for("vuetify:v-slide-group"), Xu = R({
  centerActive: Boolean,
  scrollToActive: {
    type: Boolean,
    default: !0
  },
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: qu
  },
  nextIcon: {
    type: xe,
    default: "$next"
  },
  prevIcon: {
    type: xe,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e)
  },
  ...Se(),
  ...tl({
    mobile: null
  }),
  ...Ae(),
  ...ol({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Vo = Q()({
  name: "VSlideGroup",
  props: Xu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = gt(), {
      displayClasses: l,
      mobile: o
    } = ln(e), i = Ca(e, e.symbol), r = /* @__PURE__ */ se(!1), s = /* @__PURE__ */ se(0), u = /* @__PURE__ */ se(0), c = /* @__PURE__ */ se(0), d = V(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: v
    } = vn(), {
      resizeRef: k,
      contentRect: m
    } = vn(), y = Rw(), h = V(() => ({
      container: f.el,
      duration: 200,
      easing: "easeOutQuart"
    })), x = V(() => i.selected.value.length ? i.items.value.findIndex((K) => K.id === i.selected.value[0]) : -1), w = V(() => i.selected.value.length ? i.items.value.findIndex((K) => K.id === i.selected.value[i.selected.value.length - 1]) : -1);
    if (Ye) {
      let K = -1;
      ue(() => [i.selected.value, v.value, m.value, d.value], () => {
        cancelAnimationFrame(K), K = requestAnimationFrame(() => {
          if (v.value && m.value) {
            const H = d.value ? "width" : "height";
            u.value = v.value[H], c.value = m.value[H], r.value = u.value + 1 < c.value;
          }
          if (e.scrollToActive && x.value >= 0 && k.el) {
            const H = k.el.children[w.value];
            S(H, e.centerActive);
          }
        });
      });
    }
    const b = /* @__PURE__ */ se(!1);
    function S(K, H) {
      let G = 0;
      H ? G = sx({
        containerElement: f.el,
        isHorizontal: d.value,
        selectedElement: K
      }) : G = rx({
        containerElement: f.el,
        isHorizontal: d.value,
        isRtl: a.value,
        selectedElement: K
      }), g(G);
    }
    function g(K) {
      if (!Ye || !f.el) return;
      const H = _o(d.value, f.el), G = Ag(d.value, a.value, f.el);
      if (!(df(d.value, f.el) <= H || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(K - G) < 16)) {
        if (d.value && a.value && f.el) {
          const {
            scrollWidth: fe,
            offsetWidth: Z
          } = f.el;
          K = fe - Z - K;
        }
        d.value ? y.horizontal(K, h.value) : y(K, h.value);
      }
    }
    function I(K) {
      const {
        scrollTop: H,
        scrollLeft: G
      } = K.target;
      s.value = d.value ? G : H;
    }
    function C(K) {
      if (b.value = !0, !(!r.value || !k.el)) {
        for (const H of K.composedPath())
          for (const G of k.el.children)
            if (G === H) {
              S(G);
              return;
            }
      }
    }
    function T(K) {
      b.value = !1;
    }
    let P = !1;
    function F(K) {
      !P && !b.value && !(K.relatedTarget && k.el?.contains(K.relatedTarget)) && L(), P = !1;
    }
    function A() {
      P = !0;
    }
    function B(K) {
      if (!k.el) return;
      function H(G) {
        K.preventDefault(), L(G);
      }
      d.value ? K.key === "ArrowRight" ? H(a.value ? "prev" : "next") : K.key === "ArrowLeft" && H(a.value ? "next" : "prev") : K.key === "ArrowDown" ? H("next") : K.key === "ArrowUp" && H("prev"), K.key === "Home" ? H("first") : K.key === "End" && H("last");
    }
    function D(K, H) {
      if (!K) return;
      let G = K;
      do
        G = G?.[H === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (G?.hasAttribute("disabled"));
      return G;
    }
    function L(K) {
      if (!k.el) return;
      let H;
      if (!K)
        H = $a(k.el)[0];
      else if (K === "next") {
        if (H = D(k.el.querySelector(":focus"), K), !H) return L("first");
      } else if (K === "prev") {
        if (H = D(k.el.querySelector(":focus"), K), !H) return L("last");
      } else K === "first" ? (H = k.el.firstElementChild, H?.hasAttribute("disabled") && (H = D(H, "next"))) : K === "last" && (H = k.el.lastElementChild, H?.hasAttribute("disabled") && (H = D(H, "prev")));
      H && H.focus({
        preventScroll: !0
      });
    }
    function W(K) {
      const H = d.value && a.value ? -1 : 1, G = (K === "prev" ? -H : H) * u.value;
      let X = s.value + G;
      if (d.value && a.value && f.el) {
        const {
          scrollWidth: fe,
          offsetWidth: Z
        } = f.el;
        X += fe - Z;
      }
      g(X);
    }
    const N = V(() => ({
      next: i.next,
      prev: i.prev,
      select: i.select,
      isSelected: i.isSelected
    })), J = V(() => r.value || Math.abs(s.value) > 0), q = V(() => {
      switch (e.showArrows) {
        case "never":
          return !1;
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !o.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return J.value;
        // Always show on mobile
        case "mobile":
          return o.value || J.value;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !o.value && J.value;
      }
    }), $ = V(() => Math.abs(s.value) > 1), ne = V(() => {
      if (!f.value || !J.value) return !1;
      const K = df(d.value, f.el), H = ux(d.value, f.el);
      return K - H - Math.abs(s.value) > 1;
    });
    return te(() => p(e.tag, {
      class: ee(["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": q.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class]),
      style: ve(e.style),
      tabindex: b.value || i.selected.value.length ? -1 : 0,
      onFocus: F
    }, {
      default: () => [q.value && _("div", {
        key: "prev",
        class: ee(["v-slide-group__prev", {
          "v-slide-group__prev--disabled": !$.value
        }]),
        onMousedown: A,
        onClick: () => $.value && W("prev")
      }, [n.prev?.(N.value) ?? p(po, null, {
        default: () => [p(He, {
          icon: a.value ? e.nextIcon : e.prevIcon
        }, null)]
      })]), _("div", {
        key: "container",
        ref: f,
        class: ee(["v-slide-group__container", e.contentClass]),
        onScroll: I
      }, [_("div", {
        ref: k,
        class: "v-slide-group__content",
        onFocusin: C,
        onFocusout: T,
        onKeydown: B
      }, [n.default?.(N.value)])]), q.value && _("div", {
        key: "next",
        class: ee(["v-slide-group__next", {
          "v-slide-group__next--disabled": !ne.value
        }]),
        onMousedown: A,
        onClick: () => ne.value && W("next")
      }, [n.next?.(N.value) ?? p(po, null, {
        default: () => [p(He, {
          icon: a.value ? e.prevIcon : e.nextIcon
        }, null)]
      })])]
    })), {
      selected: i.selected,
      scrollTo: W,
      scrollOffset: s,
      focus: L,
      hasPrev: $,
      hasNext: ne
    };
  }
}), Eg = /* @__PURE__ */ Symbol.for("vuetify:v-chip-group"), cx = R({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: xt
  },
  ...Xu({
    scrollToActive: !1
  }),
  ...Se(),
  ...ol({
    selectedClass: "v-chip--selected"
  }),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "tonal"
  })
}, "VChipGroup"), dx = Q()({
  name: "VChipGroup",
  props: cx(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      isSelected: l,
      select: o,
      next: i,
      prev: r,
      selected: s
    } = Ca(e, Eg);
    return lt({
      VChip: {
        baseColor: /* @__PURE__ */ E(() => e.baseColor),
        color: /* @__PURE__ */ E(() => e.color),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        filter: /* @__PURE__ */ E(() => e.filter),
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => {
      const u = Vo.filterProps(e);
      return p(Vo, U(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: l,
          select: o,
          next: i,
          prev: r,
          selected: s.value
        })]
      });
    }), {};
  }
}), fx = R({
  activeClass: String,
  appendAvatar: String,
  appendIcon: xe,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: xe,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: xe,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: xe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: _t(),
  onClickOnce: _t(),
  ...Et(),
  ...Se(),
  ...it(),
  ...vt(),
  ...il(),
  ...Je(),
  ...Yo(),
  ...On(),
  ...Ae({
    tag: "span"
  }),
  ...Ne(),
  ...rn({
    variant: "tonal"
  })
}, "VChip"), Jn = Q()({
  name: "VChip",
  directives: {
    vRipple: Vt
  },
  props: fx(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: o
    } = Ue(), {
      borderClasses: i
    } = Nt(e), {
      densityClasses: r
    } = Mt(e), {
      elevationClasses: s
    } = bt(e), {
      roundedClasses: u
    } = et(e), {
      sizeClasses: c
    } = Ll(e), {
      themeClasses: d
    } = We(e), f = pe(e, "modelValue"), v = ba(e, Eg, !1), k = ba(e, qu, !1), m = jo(e, n), y = /* @__PURE__ */ E(() => e.link !== !1 && m.isLink.value), h = V(() => !e.disabled && e.link !== !1 && (!!v || e.link || m.isClickable.value)), x = /* @__PURE__ */ E(() => ({
      "aria-label": o(e.closeLabel),
      disabled: e.disabled,
      onClick(C) {
        C.preventDefault(), C.stopPropagation(), f.value = !1, a("click:close", C);
      }
    }));
    ue(f, (C) => {
      C ? (v?.register(), k?.register()) : (v?.unregister(), k?.unregister());
    });
    const {
      colorClasses: w,
      colorStyles: b,
      variantClasses: S
    } = aa(() => ({
      color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function g(C) {
      a("click", C), h.value && (m.navigate?.(C), v?.toggle());
    }
    function I(C) {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), g(C));
    }
    return () => {
      const C = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || l.append), F = !!(l.close || e.closable), A = !!(l.filter || e.filter) && v, B = !!(e.prependIcon || e.prependAvatar), D = !!(B || l.prepend);
      return f.value && qe(p(C, U(m.linkProps, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": h.value,
          "v-chip--filter": A,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && m.isActive?.value
        }, d.value, i.value, w.value, r.value, s.value, u.value, c.value, S.value, v?.selectedClass.value, e.class],
        style: [b.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: h.value ? 0 : void 0,
        onClick: g,
        onKeydown: h.value && !y.value && I
      }), {
        default: () => [na(h.value, "v-chip"), A && p(Yu, {
          key: "filter"
        }, {
          default: () => [qe(_("div", {
            class: "v-chip__filter"
          }, [l.filter ? p(Ee, {
            key: "filter-defaults",
            disabled: !e.filterIcon,
            defaults: {
              VIcon: {
                icon: e.filterIcon
              }
            }
          }, l.filter) : p(He, {
            key: "filter-icon",
            icon: e.filterIcon
          }, null)]), [[xn, v.isSelected.value]])]
        }), D && _("div", {
          key: "prepend",
          class: "v-chip__prepend"
        }, [l.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !B,
          defaults: {
            VAvatar: {
              image: e.prependAvatar,
              start: !0
            },
            VIcon: {
              icon: e.prependIcon,
              start: !0
            }
          }
        }, l.prepend) : _(ye, null, [e.prependIcon && p(He, {
          key: "prepend-icon",
          icon: e.prependIcon,
          start: !0
        }, null), e.prependAvatar && p(an, {
          key: "prepend-avatar",
          image: e.prependAvatar,
          start: !0
        }, null)])]), _("div", {
          class: "v-chip__content",
          "data-no-activator": ""
        }, [l.default?.({
          isSelected: v?.isSelected.value,
          selectedClass: v?.selectedClass.value,
          select: v?.select,
          toggle: v?.toggle,
          value: v?.value.value,
          disabled: e.disabled
        }) ?? Tn(e.text)]), P && _("div", {
          key: "append",
          class: "v-chip__append"
        }, [l.append ? p(Ee, {
          key: "append-defaults",
          disabled: !T,
          defaults: {
            VAvatar: {
              end: !0,
              image: e.appendAvatar
            },
            VIcon: {
              end: !0,
              icon: e.appendIcon
            }
          }
        }, l.append) : _(ye, null, [e.appendIcon && p(He, {
          key: "append-icon",
          end: !0,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(an, {
          key: "append-avatar",
          end: !0,
          image: e.appendAvatar
        }, null)])]), F && _("button", U({
          key: "close",
          class: "v-chip__close",
          type: "button",
          "data-testid": "close-chip"
        }, x.value), [l.close ? p(Ee, {
          key: "close-defaults",
          defaults: {
            VIcon: {
              icon: e.closeIcon,
              size: "x-small"
            }
          }
        }, l.close) : p(He, {
          key: "close-icon",
          icon: e.closeIcon,
          size: "x-small"
        }, null)])]
      }), [[Vt, h.value && e.ripple, null]]);
    };
  }
}), vx = ["dotted", "dashed", "solid", "double"], mx = R({
  color: String,
  contentOffset: [Number, String, Array],
  gradient: Boolean,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  variant: {
    type: String,
    default: "solid",
    validator: (e) => vx.includes(e)
  },
  ...Se(),
  ...Ne()
}, "VDivider"), nn = Q()({
  name: "VDivider",
  props: mx(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      textColorClasses: o,
      textColorStyles: i
    } = Ct(() => e.color), r = V(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = de(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = de(e.thickness)), u;
    }), s = /* @__PURE__ */ E(() => {
      const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
      return {
        marginBlock: e.vertical && u ? de(u) : void 0,
        marginInline: !e.vertical && u ? de(u) : void 0,
        transform: c ? `translate${e.vertical ? "X" : "Y"}(${de(c)})` : void 0
      };
    });
    return te(() => {
      const u = _("hr", {
        class: ee([{
          "v-divider": !0,
          "v-divider--gradient": e.gradient && !a.default,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, o.value, e.class]),
        style: ve([r.value, i.value, {
          "--v-border-opacity": e.opacity
        }, {
          "border-style": e.variant
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? _("div", {
        class: ee(["v-divider__wrapper", {
          "v-divider__wrapper--gradient": e.gradient,
          "v-divider__wrapper--inset": e.inset,
          "v-divider__wrapper--vertical": e.vertical
        }])
      }, [u, _("div", {
        class: "v-divider__content",
        style: ve(s.value)
      }, [a.default()]), u]) : u;
    }), {};
  }
}), Ds = /* @__PURE__ */ Symbol.for("vuetify:list");
function Mg() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const t = $e(Ds, {
    filterable: !1,
    hasPrepend: /* @__PURE__ */ se(!1),
    updateHasPrepend: () => null
  }), n = {
    filterable: t.filterable || e,
    hasPrepend: /* @__PURE__ */ se(!1),
    updateHasPrepend: (a) => {
      a && (n.hasPrepend.value = a);
    }
  };
  return Ze(Ds, n), t;
}
function Bg() {
  return $e(Ds, null);
}
const Zu = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: l,
        activated: o
      } = n;
      return a = /* @__PURE__ */ Ie(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
    },
    in: (n, a, l) => {
      let o = /* @__PURE__ */ new Set();
      if (n != null)
        for (const i of Xe(n))
          o = t.activate({
            id: i,
            value: !0,
            activated: new Set(o),
            children: a,
            parents: l
          });
      return o;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, Fg = (e) => {
  const t = Zu(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: o,
        ...i
      } = a;
      o = /* @__PURE__ */ Ie(o);
      const r = l.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...i,
        id: o,
        activated: r
      });
    },
    in: (a, l, o) => {
      let i = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Xe(a);
        r.length && (i = t.in(r.slice(0, 1), l, o));
      }
      return i;
    },
    out: (a, l, o) => t.out(a, l, o)
  };
}, gx = (e) => {
  const t = Zu(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: o,
        children: i,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ie(l), i.has(l) ? o : t.activate({
        id: l,
        activated: o,
        children: i,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, hx = (e) => {
  const t = Fg(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: o,
        children: i,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ie(l), i.has(l) ? o : t.activate({
        id: l,
        activated: o,
        children: i,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, yx = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      const o = /* @__PURE__ */ new Set();
      o.add(t);
      let i = l.get(t);
      for (; i != null; )
        o.add(i), i = l.get(i);
      return o;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, Lg = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      let o = l.get(t);
      for (a.add(t); o != null && o !== t; )
        a.add(o), o = l.get(o);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, bx = {
  open: Lg.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (!n) return a;
    const o = [];
    let i = l.get(t);
    for (; i != null; )
      o.push(i), i = l.get(i);
    return new Set(o);
  }
}, Ju = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: o
      } = n;
      if (a = /* @__PURE__ */ Ie(a), e && !l) {
        const i = Array.from(o.entries()).reduce((r, s) => {
          let [u, c] = s;
          return c === "on" && r.push(u), r;
        }, []);
        if (i.length === 1 && i[0] === a) return o;
      }
      return o.set(a, l ? "on" : "off"), o;
    },
    in: (n, a, l, o) => {
      const i = /* @__PURE__ */ new Map();
      for (const r of n || [])
        t.select({
          id: r,
          value: !0,
          selected: i,
          children: a,
          parents: l,
          disabled: o
        });
      return i;
    },
    out: (n) => {
      const a = [];
      for (const [l, o] of n.entries())
        o === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, Og = (e) => {
  const t = Ju(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: o,
        ...i
      } = a;
      o = /* @__PURE__ */ Ie(o);
      const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...i,
        id: o,
        selected: r
      });
    },
    in: (a, l, o, i) => a?.length ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(),
    out: (a, l, o) => t.out(a, l, o)
  };
}, Sx = (e) => {
  const t = Ju(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: o,
        children: i,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ie(l), i.has(l) ? o : t.select({
        id: l,
        selected: o,
        children: i,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, kx = (e) => {
  const t = Og(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: o,
        children: i,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ie(l), i.has(l) ? o : t.select({
        id: l,
        selected: o,
        children: i,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, $g = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: o,
        children: i,
        parents: r,
        disabled: s
      } = n;
      a = /* @__PURE__ */ Ie(a);
      const u = new Map(o), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        s.has(f) || o.set(/* @__PURE__ */ Ie(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
      }
      let d = /* @__PURE__ */ Ie(r.get(a));
      for (; d; ) {
        let f = !0, v = !0;
        for (const k of i.get(d)) {
          const m = /* @__PURE__ */ Ie(k);
          if (!s.has(m) && (o.get(m) !== "on" && (f = !1), o.has(m) && o.get(m) !== "off" && (v = !1), !f && !v))
            break;
        }
        o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = /* @__PURE__ */ Ie(r.get(d));
      }
      return e && !l && Array.from(o.entries()).reduce((v, k) => {
        let [m, y] = k;
        return y === "on" && v.push(m), v;
      }, []).length === 0 ? u : o;
    },
    in: (n, a, l) => {
      let o = /* @__PURE__ */ new Map();
      for (const i of n || [])
        o = t.select({
          id: i,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: /* @__PURE__ */ new Set()
        });
      return o;
    },
    out: (n, a) => {
      const l = [];
      for (const [o, i] of n.entries())
        i === "on" && !a.has(o) && l.push(o);
      return l;
    }
  };
  return t;
}, wx = (e) => {
  const t = $g(e);
  return {
    select: t.select,
    in: t.in,
    out: (a, l, o) => {
      const i = [];
      for (const [r, s] of a.entries())
        if (s === "on") {
          if (o.has(r)) {
            const u = o.get(r);
            if (a.get(u) === "on") continue;
          }
          i.push(r);
        }
      return i;
    }
  };
}, Al = /* @__PURE__ */ Symbol.for("vuetify:nested"), Ng = {
  id: /* @__PURE__ */ se(),
  root: {
    itemsRegistration: /* @__PURE__ */ ae("render"),
    register: () => null,
    unregister: () => null,
    updateDisabled: () => null,
    children: /* @__PURE__ */ ae(/* @__PURE__ */ new Map()),
    parents: /* @__PURE__ */ ae(/* @__PURE__ */ new Map()),
    disabled: /* @__PURE__ */ ae(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: /* @__PURE__ */ ae(!1),
    selectable: /* @__PURE__ */ ae(!1),
    opened: /* @__PURE__ */ ae(/* @__PURE__ */ new Set()),
    activated: /* @__PURE__ */ ae(/* @__PURE__ */ new Set()),
    selected: /* @__PURE__ */ ae(/* @__PURE__ */ new Map()),
    selectedValues: /* @__PURE__ */ ae([]),
    getPath: () => []
  }
}, px = R({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean,
  itemsRegistration: {
    type: String,
    default: "render"
  }
}, "nested"), xx = (e, t, n) => {
  let a = !1;
  const l = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), o = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), i = /* @__PURE__ */ se(/* @__PURE__ */ new Set()), r = pe(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((b) => /* @__PURE__ */ Ie(b)) : w), (w) => [...w.values()]), s = V(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return gx(e.mandatory);
      case "single-leaf":
        return hx(e.mandatory);
      case "independent":
        return Zu(e.mandatory);
      default:
        return Fg(e.mandatory);
    }
  }), u = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return kx(e.mandatory);
      case "leaf":
        return Sx(e.mandatory);
      case "independent":
        return Ju(e.mandatory);
      case "single-independent":
        return Og(e.mandatory);
      case "trunk":
        return wx(e.mandatory);
      default:
        return $g(e.mandatory);
    }
  }), c = V(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return bx;
      case "single":
        return yx;
      default:
        return Lg;
    }
  }), d = pe(e, "activated", e.activated, (w) => s.value.in(w, l.value, o.value), (w) => s.value.out(w, l.value, o.value)), f = pe(e, "selected", e.selected, (w) => u.value.in(w, l.value, o.value, i.value), (w) => u.value.out(w, l.value, o.value));
  Dt(() => {
    a = !0;
  });
  function v(w) {
    const b = [];
    let S = /* @__PURE__ */ Ie(w);
    for (; S !== void 0; )
      b.unshift(S), S = o.value.get(S);
    return b;
  }
  const k = ct("nested"), m = /* @__PURE__ */ new Set(), y = $0(() => {
    Te(() => {
      l.value = new Map(l.value), o.value = new Map(o.value);
    });
  }, 100);
  ue(() => [t.value, kt(n)], () => {
    e.itemsRegistration === "props" && h();
  }, {
    immediate: !0
  });
  function h() {
    const w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set(), g = kt(n) ? (T) => /* @__PURE__ */ Ie(T.raw) : (T) => T.value, I = [...t.value];
    let C = 0;
    for (; C < I.length; ) {
      const T = I[C++], P = g(T);
      if (T.children) {
        const F = [];
        for (const A of T.children) {
          const B = g(A);
          w.set(B, P), F.push(B), I.push(A);
        }
        b.set(P, F);
      }
      T.props.disabled && S.add(P);
    }
    l.value = b, o.value = w, i.value = S;
  }
  const x = {
    id: /* @__PURE__ */ se(),
    root: {
      opened: r,
      activatable: /* @__PURE__ */ E(() => e.activatable),
      selectable: /* @__PURE__ */ E(() => e.selectable),
      activated: d,
      selected: f,
      selectedValues: V(() => {
        const w = [];
        for (const [b, S] of f.value.entries())
          S === "on" && w.push(b);
        return w;
      }),
      itemsRegistration: /* @__PURE__ */ E(() => e.itemsRegistration),
      register: (w, b, S, g) => {
        if (m.has(w)) {
          v(w).map(String).join(" -> "), v(b).concat(w).map(String).join(" -> ");
          return;
        } else
          m.add(w);
        b && w !== b && o.value.set(w, b), S && i.value.add(w), g && l.value.set(w, []), b != null && l.value.set(b, [...l.value.get(b) || [], w]), y();
      },
      unregister: (w) => {
        if (a) return;
        m.delete(w), l.value.delete(w), i.value.delete(w);
        const b = o.value.get(w);
        if (b) {
          const S = l.value.get(b) ?? [];
          l.value.set(b, S.filter((g) => g !== w));
        }
        o.value.delete(w), y();
      },
      updateDisabled: (w, b) => {
        b ? i.value.add(w) : i.value.delete(w);
      },
      open: (w, b, S) => {
        k.emit("click:open", {
          id: w,
          value: b,
          path: v(w),
          event: S
        });
        const g = c.value.open({
          id: w,
          value: b,
          opened: new Set(r.value),
          children: l.value,
          parents: o.value,
          event: S
        });
        g && (r.value = g);
      },
      openOnSelect: (w, b, S) => {
        const g = c.value.select({
          id: w,
          value: b,
          selected: new Map(f.value),
          opened: new Set(r.value),
          children: l.value,
          parents: o.value,
          event: S
        });
        g && (r.value = g);
      },
      select: (w, b, S) => {
        k.emit("click:select", {
          id: w,
          value: b,
          path: v(w),
          event: S
        });
        const g = u.value.select({
          id: w,
          value: b,
          selected: new Map(f.value),
          children: l.value,
          parents: o.value,
          disabled: i.value,
          event: S
        });
        g && (f.value = g), x.root.openOnSelect(w, b, S);
      },
      activate: (w, b, S) => {
        if (!e.activatable)
          return x.root.select(w, !0, S);
        k.emit("click:activate", {
          id: w,
          value: b,
          path: v(w),
          event: S
        });
        const g = s.value.activate({
          id: w,
          value: b,
          activated: new Set(d.value),
          children: l.value,
          parents: o.value,
          event: S
        });
        if (g.size !== d.value.size)
          d.value = g;
        else {
          for (const I of g)
            if (!d.value.has(I)) {
              d.value = g;
              return;
            }
          for (const I of d.value)
            if (!g.has(I)) {
              d.value = g;
              return;
            }
        }
      },
      children: l,
      parents: o,
      disabled: i,
      getPath: v
    }
  };
  return Ze(Al, x), x.root;
}, Rg = (e, t, n) => {
  const a = $e(Al, Ng), l = /* @__PURE__ */ Symbol("nested item"), o = V(() => {
    const r = /* @__PURE__ */ Ie(kt(e));
    return r !== void 0 ? r : l;
  }), i = {
    ...a,
    id: o,
    open: (r, s) => a.root.open(o.value, r, s),
    openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s),
    isOpen: V(() => a.root.opened.value.has(o.value)),
    parent: V(() => a.root.parents.value.get(o.value)),
    activate: (r, s) => a.root.activate(o.value, r, s),
    isActivated: V(() => a.root.activated.value.has(o.value)),
    select: (r, s) => a.root.select(o.value, r, s),
    isSelected: V(() => a.root.selected.value.get(o.value) === "on"),
    isIndeterminate: V(() => a.root.selected.value.get(o.value) === "indeterminate"),
    isLeaf: V(() => !a.root.children.value.get(o.value)),
    isGroupActivator: a.isGroupActivator
  };
  return Fl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Te(() => {
      a.root.register(o.value, a.id.value, kt(t), n);
    });
  }), Dt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), ue(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Te(() => {
      a.root.register(r, a.id.value, kt(t), n);
    }));
  }), ue(() => kt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && Ze(Al, i), i;
}, Cx = () => {
  const e = $e(Al, Ng);
  Ze(Al, {
    ...e,
    isGroupActivator: !0
  });
}, _x = $t({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Cx(), () => n.default?.();
  }
}), Hg = R({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: xe,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: xe,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: xe,
  appendIcon: xe,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...Se(),
  ...Ae()
}, "VListGroup"), Io = Q()({
  name: "VListGroup",
  props: Hg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: o
    } = Rg(() => e.value, () => e.disabled, !0), i = V(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Bg(), {
      isBooted: s
    } = ll(), u = $e(Al), c = /* @__PURE__ */ E(() => u?.root?.itemsRegistration.value === "render");
    function d(m) {
      ["INPUT", "TEXTAREA"].includes(m.target?.tagName) || l(!a.value, m);
    }
    const f = V(() => ({
      onClick: d,
      class: "v-list-group__header",
      id: i.value
    })), v = V(() => a.value ? e.collapseIcon : e.expandIcon), k = V(() => ({
      VListItem: {
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && v.value,
        appendIcon: e.appendIcon || !e.subgroup && v.value,
        title: e.title,
        value: e.value
      }
    }));
    return te(() => p(e.tag, {
      class: ee(["v-list-group", {
        "v-list-group--prepend": r?.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.activator && p(Ee, {
        defaults: k.value
      }, {
        default: () => [p(_x, null, {
          default: () => [n.activator({
            props: f.value,
            isOpen: a.value
          })]
        })]
      }), p(Ot, {
        transition: {
          component: ir
        },
        disabled: !s.value
      }, {
        default: () => [c.value ? qe(_("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": i.value
        }, [n.default?.()]), [[xn, a.value]]) : a.value && _("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": i.value
        }, [n.default?.()])]
      })]
    })), {
      isOpen: a
    };
  }
}), Vx = R({
  opacity: [Number, String],
  ...Se(),
  ...Ae()
}, "VListItemSubtitle"), Wg = Q()({
  name: "VListItemSubtitle",
  props: Vx(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-list-item-subtitle", e.class]),
      style: ve([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), zg = ea("v-list-item-title"), jg = R({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: xe,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: xe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  prependGap: [Number, String],
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: _t(),
  onClickOnce: _t(),
  ...Et(),
  ...Se(),
  ...it(),
  ...dt(),
  ...vt(),
  ...Je(),
  ...Yo(),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "text"
  })
}, "VListItem"), mn = Q()({
  name: "VListItem",
  directives: {
    vRipple: Vt
  },
  props: jg(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const o = jo(e, n), i = V(() => e.value === void 0 ? o.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: u,
      isOpen: c,
      isSelected: d,
      isIndeterminate: f,
      isGroupActivator: v,
      root: k,
      parent: m,
      openOnSelect: y,
      id: h
    } = Rg(i, () => e.disabled, !1), x = Bg(), w = V(() => e.active !== !1 && (e.active || o.isActive?.value || (k.activatable.value ? s.value : d.value))), b = /* @__PURE__ */ E(() => e.link !== !1 && o.isLink.value), S = V(() => !!x && (k.selectable.value || k.activatable.value || e.value != null)), g = V(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || S.value)), I = V(() => x ? b.value ? "link" : S.value ? "option" : "listitem" : void 0), C = V(() => {
      if (S.value)
        return k.activatable.value ? s.value : k.selectable.value ? d.value : w.value;
    }), T = /* @__PURE__ */ E(() => e.rounded || e.nav), P = /* @__PURE__ */ E(() => e.color ?? e.activeColor), F = /* @__PURE__ */ E(() => ({
      color: w.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    ue(() => o.isActive?.value, (Z) => {
      Z && A();
    }), Fl(() => {
      o.isActive?.value && Te(() => A());
    });
    function A() {
      m.value != null && k.open(m.value, !0), y(!0);
    }
    const {
      themeClasses: B
    } = We(e), {
      borderClasses: D
    } = Nt(e), {
      colorClasses: L,
      colorStyles: W,
      variantClasses: N
    } = aa(F), {
      densityClasses: J
    } = Mt(e), {
      dimensionStyles: q
    } = ft(e), {
      elevationClasses: $
    } = bt(e), {
      roundedClasses: ne
    } = et(T), K = /* @__PURE__ */ E(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), H = /* @__PURE__ */ E(() => e.ripple !== void 0 && e.ripple && x?.filterable ? {
      keys: ["Enter"]
    } : e.ripple), G = V(() => ({
      isActive: w.value,
      select: u,
      isOpen: c.value,
      isSelected: d.value,
      isIndeterminate: f.value
    }));
    function X(Z) {
      l("click", Z), !["INPUT", "TEXTAREA"].includes(Z.target?.tagName) && g.value && (o.navigate?.(Z), !v && (k.activatable.value ? r(!s.value, Z) : (k.selectable.value || e.value != null && !b.value) && u(!d.value, Z)));
    }
    function fe(Z) {
      const ce = Z.target;
      ["INPUT", "TEXTAREA"].includes(ce.tagName) || (Z.key === "Enter" || Z.key === " " && !x?.filterable) && (Z.preventDefault(), Z.stopPropagation(), Z.target.dispatchEvent(new MouseEvent("click", Z)));
    }
    return te(() => {
      const Z = b.value ? "a" : e.tag, ce = a.title || e.title != null, Ce = a.subtitle || e.subtitle != null, Ve = !!(e.appendAvatar || e.appendIcon), Pe = !!(Ve || a.append), M = !!(e.prependAvatar || e.prependIcon), O = !!(M || a.prepend);
      return x?.updateHasPrepend(O), e.activeColor && hm("active-color", ["color", "base-color"]), qe(p(Z, U(o.linkProps, {
        class: ["v-list-item", {
          "v-list-item--active": w.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": g.value,
          "v-list-item--nav": e.nav,
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && w.value
        }, B.value, D.value, L.value, J.value, $.value, K.value, ne.value, N.value, e.class],
        style: [{
          "--v-list-prepend-gap": de(e.prependGap)
        }, W.value, q.value, e.style],
        tabindex: g.value ? x ? -2 : 0 : void 0,
        "aria-selected": C.value,
        role: I.value,
        onClick: X,
        onKeydown: g.value && !b.value && fe
      }), {
        default: () => [na(g.value || w.value, "v-list-item"), O && _("div", {
          key: "prepend",
          class: "v-list-item__prepend"
        }, [a.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !M,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            },
            VListItemAction: {
              start: !0
            }
          }
        }, {
          default: () => [a.prepend?.(G.value)]
        }) : _(ye, null, [e.prependAvatar && p(an, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(He, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)]), _("div", {
          class: "v-list-item__spacer"
        }, null)]), _("div", {
          class: "v-list-item__content",
          "data-no-activator": ""
        }, [ce && p(zg, {
          key: "title"
        }, {
          default: () => [a.title?.({
            title: e.title
          }) ?? Tn(e.title)]
        }), Ce && p(Wg, {
          key: "subtitle"
        }, {
          default: () => [a.subtitle?.({
            subtitle: e.subtitle
          }) ?? Tn(e.subtitle)]
        }), a.default?.(G.value)]), Pe && _("div", {
          key: "append",
          class: "v-list-item__append"
        }, [a.append ? p(Ee, {
          key: "append-defaults",
          disabled: !Ve,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            },
            VListItemAction: {
              end: !0
            }
          }
        }, {
          default: () => [a.append?.(G.value)]
        }) : _(ye, null, [e.appendIcon && p(He, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(an, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)]), _("div", {
          class: "v-list-item__spacer"
        }, null)])]
      }), [[Vt, g.value && H.value]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: v,
      isSelected: d,
      list: x,
      select: u,
      root: k,
      id: h,
      link: o
    };
  }
}), Ix = R({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Se(),
  ...Ae()
}, "VListSubheader"), Hl = Q()({
  name: "VListSubheader",
  props: Ix(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ct(() => e.color);
    return te(() => {
      const o = !!(n.default || e.title);
      return p(e.tag, {
        class: ee(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class]),
        style: ve([{
          textColorStyles: l
        }, e.style])
      }, {
        default: () => [o && _("div", {
          class: "v-list-subheader__text"
        }, [n.default?.() ?? e.title])]
      });
    }), {};
  }
}), Px = R({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Yg = Q()({
  name: "VListChildren",
  props: Px(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Mg(), () => n.default?.() ?? e.items?.map((a) => {
      let {
        children: l,
        props: o,
        type: i,
        raw: r
      } = a;
      if (i === "divider")
        return n.divider?.({
          props: o
        }) ?? p(nn, o, null);
      if (i === "subheader")
        return n.subheader?.({
          props: o
        }) ?? p(Hl, o, null);
      const s = {
        subtitle: n.subtitle ? (c) => n.subtitle?.({
          ...c,
          item: r
        }) : void 0,
        prepend: n.prepend ? (c) => n.prepend?.({
          ...c,
          item: r
        }) : void 0,
        append: n.append ? (c) => n.append?.({
          ...c,
          item: r
        }) : void 0,
        title: n.title ? (c) => n.title?.({
          ...c,
          item: r
        }) : void 0
      }, u = Io.filterProps(o);
      return l ? p(Io, U(u, {
        value: e.returnObject ? r : o?.value,
        rawId: o?.value
      }), {
        activator: (c) => {
          let {
            props: d
          } = c;
          const f = U(o, d, {
            value: e.returnObject ? r : o.value
          });
          return n.header ? n.header({
            props: f
          }) : p(mn, f, s);
        },
        default: () => p(Yg, {
          items: l,
          returnObject: e.returnObject
        }, n)
      }) : n.item ? n.item({
        props: o
      }) : p(mn, U(o, {
        value: e.returnObject ? r : o.value
      }), s);
    });
  }
}), Ug = R({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items"), Tx = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function gn(e, t) {
  const n = rt(t, e.itemTitle, t), a = rt(t, e.itemValue, n), l = rt(t, e.itemChildren), o = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Be(t, ["children"]) : t : void 0 : rt(t, e.itemProps);
  let i = rt(t, e.itemType, "item");
  Tx.has(i) || (i = "item");
  const r = {
    title: n,
    value: a,
    ...o
  };
  return {
    type: i,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: i === "item" && Array.isArray(l) ? Kg(e, l) : void 0,
    raw: t
  };
}
gn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Kg(e, t) {
  const n = jt(e, gn.neededProps), a = [];
  for (const l of t)
    a.push(gn(n, l));
  return a;
}
function Qu(e) {
  const t = V(() => Kg(e, e.items)), n = V(() => t.value.some((r) => r.value === null)), a = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), l = /* @__PURE__ */ se([]);
  at(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (ya(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else
        u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, k = e.valueComparator || xt, m = jt(e, gn.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(gn(m, h));
        continue;
      }
      const x = s.get(h);
      if (v || !x) {
        for (const w of v ? u : c)
          if (k(h, w.value)) {
            y.push(w);
            continue e;
          }
        y.push(gn(m, h));
        continue;
      }
      y.push(...x);
    }
    return y;
  }
  function i(r) {
    return e.returnObject ? r.map((s) => {
      let {
        raw: u
      } = s;
      return u;
    }) : r.map((s) => {
      let {
        value: u
      } = s;
      return u;
    });
  }
  return {
    items: t,
    transformIn: o,
    transformOut: i
  };
}
const Ax = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Dx(e, t) {
  const n = ya(t) ? t : rt(t, e.itemTitle), a = ya(t) ? t : rt(t, e.itemValue, void 0), l = rt(t, e.itemChildren), o = e.itemProps === !0 ? Be(t, ["children"]) : rt(t, e.itemProps);
  let i = rt(t, e.itemType, "item");
  Ax.has(i) || (i = "item");
  const r = {
    title: n,
    value: a,
    ...o
  };
  return {
    type: i,
    title: r.title,
    value: r.value,
    props: r,
    children: i === "item" && l ? Gg(e, l) : void 0,
    raw: t
  };
}
function Gg(e, t) {
  const n = [];
  for (const a of t)
    n.push(Dx(e, a));
  return n;
}
function qg(e) {
  return {
    items: V(() => Gg(e, e.items))
  };
}
const Xg = R({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: xe,
  collapseIcon: xe,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  prependGap: [Number, String],
  indent: [Number, String],
  nav: Boolean,
  "onClick:open": _t(),
  "onClick:select": _t(),
  "onUpdate:opened": _t(),
  ...px({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Et(),
  ...Se(),
  ...it(),
  ...dt(),
  ...vt(),
  ...Ug(),
  ...Je(),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "text"
  })
}, "VList"), Dl = Q()({
  name: "VList",
  props: Xg(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = qg(e), {
      themeClasses: l
    } = We(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = ze(() => e.bgColor), {
      borderClasses: r
    } = Nt(e), {
      densityClasses: s
    } = Mt(e), {
      dimensionStyles: u
    } = ft(e), {
      elevationClasses: c
    } = bt(e), {
      roundedClasses: d
    } = et(e), {
      children: f,
      open: v,
      parents: k,
      select: m,
      getPath: y
    } = xx(e, a, () => e.returnObject), h = /* @__PURE__ */ E(() => e.lines ? `v-list--${e.lines}-line` : void 0), x = /* @__PURE__ */ E(() => e.activeColor), w = /* @__PURE__ */ E(() => e.baseColor), b = /* @__PURE__ */ E(() => e.color), S = /* @__PURE__ */ E(() => e.selectable || e.activatable);
    Mg({
      filterable: e.filterable
    }), lt({
      VListGroup: {
        activeColor: x,
        baseColor: w,
        color: b,
        expandIcon: /* @__PURE__ */ E(() => e.expandIcon),
        collapseIcon: /* @__PURE__ */ E(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: /* @__PURE__ */ E(() => e.activeClass),
        activeColor: x,
        baseColor: w,
        color: b,
        density: /* @__PURE__ */ E(() => e.density),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        lines: /* @__PURE__ */ E(() => e.lines),
        nav: /* @__PURE__ */ E(() => e.nav),
        slim: /* @__PURE__ */ E(() => e.slim),
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    });
    const g = /* @__PURE__ */ se(!1), I = /* @__PURE__ */ ae();
    function C(D) {
      g.value = !0;
    }
    function T(D) {
      g.value = !1;
    }
    function P(D) {
      !g.value && !(D.relatedTarget && I.value?.contains(D.relatedTarget)) && B();
    }
    function F(D) {
      const L = D.target;
      if (!(!I.value || L.tagName === "INPUT" && ["Home", "End"].includes(D.key) || L.tagName === "TEXTAREA")) {
        if (D.key === "ArrowDown")
          B("next");
        else if (D.key === "ArrowUp")
          B("prev");
        else if (D.key === "Home")
          B("first");
        else if (D.key === "End")
          B("last");
        else
          return;
        D.preventDefault();
      }
    }
    function A(D) {
      g.value = !0;
    }
    function B(D) {
      if (I.value)
        return Na(I.value, D);
    }
    return te(() => {
      const D = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0);
      return p(e.tag, {
        ref: I,
        class: ee(["v-list", {
          "v-list--disabled": e.disabled,
          "v-list--nav": e.nav,
          "v-list--slim": e.slim
        }, l.value, o.value, r.value, s.value, c.value, h.value, d.value, e.class]),
        style: ve([{
          "--v-list-indent": de(D),
          "--v-list-group-prepend": D ? "0px" : void 0,
          "--v-list-prepend-gap": de(e.prependGap)
        }, i.value, u.value, e.style]),
        tabindex: e.disabled ? -1 : 0,
        role: S.value ? "listbox" : "list",
        "aria-activedescendant": void 0,
        onFocusin: C,
        onFocusout: T,
        onFocus: P,
        onKeydown: F,
        onMousedown: A
      }, {
        default: () => [p(Yg, {
          items: a.value,
          returnObject: e.returnObject
        }, n)]
      });
    }), {
      open: v,
      select: m,
      focus: B,
      children: f,
      parents: k,
      getPath: y
    };
  }
}), Ex = ea("v-list-img"), Mx = R({
  start: Boolean,
  end: Boolean,
  ...Se(),
  ...Ae()
}, "VListItemAction"), ec = Q()({
  name: "VListItemAction",
  props: Mx(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class]),
      style: ve(e.style)
    }, n)), {};
  }
}), Bx = R({
  start: Boolean,
  end: Boolean,
  ...Se(),
  ...Ae()
}, "VListItemMedia"), Fx = Q()({
  name: "VListItemMedia",
  props: Bx(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class]),
      style: ve(e.style)
    }, n)), {};
  }
});
function Zr(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Lx(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ff(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Zr({
      x: l,
      y: o
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Zr({
      x: l,
      y: o
    }, t);
  }
  return Zr({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Zg = {
  static: Nx,
  // specific viewport position, usually centered
  connected: Hx
  // connected to a certain element
}, Ox = R({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Zg
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array],
  stickToTarget: Boolean,
  viewportMargin: {
    type: [Number, String],
    default: 12
  }
}, "VOverlay-location-strategies");
function $x(e, t) {
  const n = /* @__PURE__ */ ae({}), a = /* @__PURE__ */ ae();
  Ye && Pt(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    ue(() => e.locationStrategy, r), ot(() => {
      window.removeEventListener("resize", l), visualViewport?.removeEventListener("resize", o), visualViewport?.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), visualViewport?.addEventListener("resize", o, {
      passive: !0
    }), visualViewport?.addEventListener("scroll", i, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = e.locationStrategy(t, e, n)?.updateLocation : a.value = Zg[e.locationStrategy](t, e, n)?.updateLocation;
  });
  function l(r) {
    a.value?.(r);
  }
  function o(r) {
    a.value?.(r);
  }
  function i(r) {
    a.value?.(r);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function Nx() {
}
function Rx(e, t) {
  const n = Eu(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Hx(e, t, n) {
  (Array.isArray(e.target.value) || O0(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: o
  } = Du(() => {
    const h = bs(t.location, e.isRtl.value), x = t.origin === "overlap" ? h : t.origin === "auto" ? zr(h) : bs(t.origin, e.isRtl.value);
    return h.side === x.side && h.align === jr(x).align ? {
      preferredAnchor: Dd(h),
      preferredOrigin: Dd(x)
    } : {
      preferredAnchor: h,
      preferredOrigin: x
    };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => V(() => {
    const x = parseFloat(t[h]);
    return isNaN(x) ? 1 / 0 : x;
  })), c = V(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1, f = -1;
  const v = new xm(4), k = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((x) => {
      x !== f && v.clear(), requestAnimationFrame((w) => {
        f = w;
      });
    }), v.isFull) {
      const x = v.values();
      if (xt(x.at(-1), x.at(-3)) && !xt(x.at(-1), x.at(-2)))
        return;
    }
    const h = y();
    h && v.push(h.flipped);
  });
  let m = new dn({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  ue(e.target, (h, x) => {
    x && !Array.isArray(x) && k.unobserve(x), Array.isArray(h) ? xt(h, x) || y() : h && k.observe(h);
  }, {
    immediate: !0
  }), ue(e.contentEl, (h, x) => {
    x && k.unobserve(x), h && k.observe(h);
  }, {
    immediate: !0
  }), ot(() => {
    k.disconnect();
  });
  function y() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = Im(e.target.value));
    const h = Rx(e.contentEl.value, e.isRtl.value), x = Di(e.contentEl.value), w = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = x.reduce((B, D) => {
      const L = l0(D);
      return B ? new dn({
        x: Math.max(B.left, L.left),
        y: Math.max(B.top, L.top),
        width: Math.min(B.right, L.right) - Math.max(B.left, L.left),
        height: Math.min(B.bottom, L.bottom) - Math.max(B.top, L.top)
      }) : L;
    }, void 0);
    t.stickToTarget ? (b.x += Math.min(w, m.x), b.y += Math.min(w, m.y), b.width = Math.max(b.width - w * 2, m.x + m.width - w), b.height = Math.max(b.height - w * 2, m.y + m.height - w)) : (b.x += w, b.y += w, b.width -= w * 2, b.height -= w * 2);
    let S = {
      anchor: l.value,
      origin: o.value
    };
    function g(B) {
      const D = new dn(h), L = ff(B.anchor, m), W = ff(B.origin, D);
      let {
        x: N,
        y: J
      } = Lx(L, W);
      switch (B.anchor.side) {
        case "top":
          J -= c.value[0];
          break;
        case "bottom":
          J += c.value[0];
          break;
        case "left":
          N -= c.value[0];
          break;
        case "right":
          N += c.value[0];
          break;
      }
      switch (B.anchor.align) {
        case "top":
          J -= c.value[1];
          break;
        case "bottom":
          J += c.value[1];
          break;
        case "left":
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
          break;
      }
      return D.x += N, D.y += J, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, u.value), {
        overflows: Md(D, b),
        x: N,
        y: J
      };
    }
    let I = 0, C = 0;
    const T = {
      x: 0,
      y: 0
    }, P = {
      x: !1,
      y: !1
    };
    let F = -1;
    for (; !(F++ > 10); ) {
      const {
        x: B,
        y: D,
        overflows: L
      } = g(S);
      I += B, C += D, h.x += B, h.y += D;
      {
        const W = Ed(S.anchor), N = L.x.before || L.x.after, J = L.y.before || L.y.after;
        let q = !1;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && N && !P.x || $ === "y" && J && !P.y) {
            const ne = {
              anchor: {
                ...S.anchor
              },
              origin: {
                ...S.origin
              }
            }, K = $ === "x" ? W === "y" ? jr : zr : W === "y" ? zr : jr;
            ne.anchor = K(ne.anchor), ne.origin = K(ne.origin);
            const {
              overflows: H
            } = g(ne);
            (H[$].before <= L[$].before && H[$].after <= L[$].after || H[$].before + H[$].after < (L[$].before + L[$].after) / 2) && (S = ne, q = P[$] = !0);
          }
        }), q) continue;
      }
      L.x.before && (I += L.x.before, h.x += L.x.before), L.x.after && (I -= L.x.after, h.x -= L.x.after), L.y.before && (C += L.y.before, h.y += L.y.before), L.y.after && (C -= L.y.after, h.y -= L.y.after);
      {
        const W = Md(h, b);
        T.x = b.width - W.x.before - W.x.after, T.y = b.height - W.y.before - W.y.after, I += W.x.before, h.x += W.x.before, C += W.y.before, h.y += W.y.before;
      }
      break;
    }
    const A = Ed(S.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`,
      transformOrigin: `${S.origin.side} ${S.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: de(Jr(C)),
      left: e.isRtl.value ? void 0 : de(Jr(I)),
      right: e.isRtl.value ? de(Jr(-I)) : void 0,
      minWidth: de(A === "y" ? Math.min(i.value, m.width) : i.value),
      maxWidth: de(vf(je(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))),
      maxHeight: de(vf(je(T.y, r.value === 1 / 0 ? 0 : r.value, u.value)))
    }), {
      available: T,
      contentBox: h,
      flipped: P
    };
  }
  return ue(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Te(() => {
    const h = y();
    if (!h) return;
    const {
      available: x,
      contentBox: w
    } = h;
    w.height > x.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), {
    updateLocation: y
  };
}
function Jr(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function vf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Es = !0;
const Li = [];
function Wx(e) {
  !Es || Li.length ? (Li.push(e), Ms()) : (Es = !1, e(), Ms());
}
let mf = -1;
function Ms() {
  cancelAnimationFrame(mf), mf = requestAnimationFrame(() => {
    const e = Li.shift();
    e && e(), Li.length ? Ms() : Es = !0;
  });
}
const Jg = {
  none: null,
  close: Yx,
  block: Ux,
  reposition: Kx
}, zx = R({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Jg
  }
}, "VOverlay-scroll-strategies");
function jx(e, t) {
  if (!Ye) return;
  let n;
  at(async () => {
    n?.stop(), t.isActive.value && e.scrollStrategy && (n = Cl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : Jg[e.scrollStrategy]?.(t, e, n);
    }));
  }), ot(() => {
    n?.stop();
  });
}
function Yx(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Qg(tc(e.target.value, e.contentEl.value), t);
}
function Ux(e, t) {
  const n = e.root.value?.offsetParent, a = tc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Di(a, t.contained ? n : void 0), ...Di(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Lu(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", de(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", de(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", de(o)), r.classList.add("v-overlay-scroll-blocked");
  }), ot(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Kx(e, t, n) {
  let a = !1, l = -1, o = -1;
  function i(r) {
    Wx(() => {
      const s = performance.now();
      e.updateLocation.value?.(r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Qg(tc(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), ot(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function tc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !t?.contains(n)) : e ?? t;
}
function Qg(e, t) {
  const n = [document, ...Di(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), ot(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Bs = /* @__PURE__ */ Symbol.for("vuetify:v-menu"), nc = R({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function ac(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n?.();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max(r?.minDelay ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Jk(u, () => {
        t?.(i), c(i);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function o(i) {
    return a(!1, i);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: o
  };
}
const Gx = R({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...nc()
}, "VOverlay-activator");
function qx(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const o = ct("useActivator"), i = /* @__PURE__ */ ae();
  let r = !1, s = !1, u = !0;
  const c = V(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = V(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: v
  } = ac(e, (C) => {
    C === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== C && (u = !0), n.value = C);
  }), k = /* @__PURE__ */ ae(), m = {
    onClick: (C) => {
      C.stopPropagation(), i.value = C.currentTarget || C.target, n.value || (k.value = [C.clientX, C.clientY]), n.value = !n.value;
    },
    onMouseenter: (C) => {
      r = !0, i.value = C.currentTarget || C.target, f();
    },
    onMouseleave: (C) => {
      r = !1, v();
    },
    onFocus: (C) => {
      Vl(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, f());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), v({
        minDelay: 1
      });
    }
  }, y = V(() => {
    const C = {};
    return d.value && (C.onClick = m.onClick), e.openOnHover && (C.onMouseenter = m.onMouseenter, C.onMouseleave = m.onMouseleave), c.value && (C.onFocus = m.onFocus, C.onBlur = m.onBlur), C;
  }), h = V(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      r = !0, f();
    }, C.onMouseleave = () => {
      r = !1, v();
    }), c.value && (C.onFocusin = (T) => {
      T.target.matches(":focus-visible") && (s = !0, f());
    }, C.onFocusout = () => {
      s = !1, v({
        minDelay: 1
      });
    }), e.closeOnContentClick) {
      const T = $e(Bs, null);
      C.onClick = () => {
        n.value = !1, T?.closeParents();
      };
    }
    return C;
  }), x = V(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      u && (r = !0, u = !1, f());
    }, C.onMouseleave = () => {
      r = !1, v();
    }), C;
  });
  ue(a, (C) => {
    C && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !l.value?.contains(document.activeElement) && (n.value = !1);
  }), ue(n, (C) => {
    C || setTimeout(() => {
      k.value = void 0;
    });
  }, {
    flush: "post"
  });
  const w = Pi();
  at(() => {
    w.value && Te(() => {
      i.value = w.el;
    });
  });
  const b = Pi(), S = V(() => e.target === "cursor" && k.value ? k.value : b.value ? b.el : eh(e.target, o) || i.value), g = V(() => Array.isArray(S.value) ? void 0 : S.value);
  let I;
  return ue(() => !!e.activator, (C) => {
    C && Ye ? (I = Cl(), I.run(() => {
      Xx(e, o, {
        activatorEl: i,
        activatorEvents: y
      });
    })) : I && I.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ot(() => {
    I?.stop();
  }), {
    activatorEl: i,
    activatorRef: w,
    target: S,
    targetEl: g,
    targetRef: b,
    activatorEvents: y,
    contentEvents: h,
    scrimEvents: x
  };
}
function Xx(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  ue(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Te(() => o());
  }, {
    immediate: !0
  }), ue(() => e.activatorProps, () => {
    o();
  }), ot(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && o0(s, U(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && i0(s, U(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = eh(s, t);
    return a.value = u?.nodeType === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function eh(e, t) {
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = t?.proxy?.$el?.parentNode;
    for (; a?.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const th = R({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, "focusTrap"), gi = /* @__PURE__ */ new Map();
let gf = 0;
function hf(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(gi.values()).filter((u) => {
    let {
      isActive: c,
      contentEl: d
    } = u;
    return c.value && d.value?.contains(t);
  }).map((u) => u.contentEl.value);
  let a, l = t.parentElement;
  for (; l; ) {
    if (n.includes(l)) {
      a = l;
      break;
    }
    l = l.parentElement;
  }
  if (!a) return;
  const o = $a(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function nh(e, t) {
  let {
    isActive: n,
    localTop: a,
    activatorEl: l,
    contentEl: o
  } = t;
  const i = /* @__PURE__ */ Symbol("trap");
  let r = !1, s = -1;
  async function u() {
    r = !0, s = window.setTimeout(() => {
      r = !1;
    }, 100);
  }
  async function c(v) {
    const k = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Te(), n.value && !r && k !== m && o.value && // We're the menu without open submenus or overlays
    kt(a) && // It isn't the document or the container body
    ![document, o.value].includes(m) && // It isn't inside the container body
    !o.value.contains(m) && $a(o.value)[0]?.focus();
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const k = $a(document.documentElement);
      if (v.shiftKey && v.target === k.at(0) || !v.shiftKey && v.target === k.at(-1)) {
        const m = $a(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = /* @__PURE__ */ E(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Ye && (ue(() => e.retainFocus, (v) => {
    v ? gi.set(i, {
      isActive: n,
      contentEl: o
    }) : gi.delete(i);
  }, {
    immediate: !0
  }), ue(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, {
      once: !0
    }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, {
    immediate: !0
  }), gf++ < 1 && document.addEventListener("keydown", hf)), ot(() => {
    gi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --gf < 1 && document.removeEventListener("keydown", hf);
  });
}
function ah() {
  if (!Ye) return /* @__PURE__ */ se(!1);
  const {
    ssr: e
  } = ln();
  if (e) {
    const t = /* @__PURE__ */ se(!1);
    return yt(() => {
      t.value = !0;
    }), t;
  } else
    return /* @__PURE__ */ se(!0);
}
const lc = R({
  eager: Boolean
}, "lazy");
function oc(e, t) {
  const n = /* @__PURE__ */ se(!1), a = /* @__PURE__ */ E(() => n.value || e.eager || t.value);
  ue(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function sl() {
  const t = ct("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const yf = /* @__PURE__ */ Symbol.for("vuetify:stack"), Kl = /* @__PURE__ */ pt([]);
function Zx(e, t, n) {
  const a = ct("useStack"), l = !n, o = $e(yf, void 0), i = /* @__PURE__ */ pt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ze(yf, i);
  const r = /* @__PURE__ */ se(Number(kt(t)));
  Pt(e, () => {
    const c = Kl.at(-1)?.[1];
    r.value = c ? c + 10 : Number(kt(t)), l && Kl.push([a.uid, r.value]), o?.activeChildren.add(a.uid), ot(() => {
      if (l) {
        const d = (/* @__PURE__ */ Ie(Kl)).findIndex((f) => f[0] === a.uid);
        Kl.splice(d, 1);
      }
      o?.activeChildren.delete(a.uid);
    });
  });
  const s = /* @__PURE__ */ se(!0);
  return l && at(() => {
    const c = Kl.at(-1)?.[0] === a.uid;
    setTimeout(() => s.value = c);
  }), {
    globalTop: /* @__PURE__ */ za(s),
    localTop: /* @__PURE__ */ E(() => !i.activeChildren.size),
    stackStyles: /* @__PURE__ */ E(() => ({
      zIndex: r.value
    }))
  };
}
function Jx(e) {
  return {
    teleportTarget: V(() => {
      const n = e();
      if (n === !0 || !Ye) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null)
        return;
      let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Qx() {
  return !0;
}
function lh(e, t, n) {
  if (!e || oh(e, n) === !1) return !1;
  const a = Om(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o?.contains(e.target));
}
function oh(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Qx)(e);
}
function eC(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && lh(e, t, n) && setTimeout(() => {
    oh(e, n) && a && a(e);
  }, 0);
}
function bf(e, t) {
  const n = Om(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Fs = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => eC(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = lh(l, e, t);
    };
    bf(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (bf(e, (n) => {
      if (!n || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function tC(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return p(ha, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && _("div", U({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Go = R({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Gx(),
  ...Se(),
  ...dt(),
  ...lc(),
  ...Ox(),
  ...zx(),
  ...th(),
  ...Ne(),
  ...ta()
}, "VOverlay"), En = Q()({
  name: "VOverlay",
  directives: {
    vClickOutside: Fs
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Be(Go(), ["disableInitialFocus"])
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const o = ct("VOverlay"), i = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), s = /* @__PURE__ */ ae(), u = pe(e, "modelValue"), c = V({
      get: () => u.value,
      set: (Z) => {
        Z && e.disabled || (u.value = Z);
      }
    }), {
      themeClasses: d
    } = We(e), {
      rtlClasses: f,
      isRtl: v
    } = gt(), {
      hasContent: k,
      onAfterLeave: m
    } = oc(e, c), y = ze(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: h,
      localTop: x,
      stackStyles: w
    } = Zx(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: b,
      activatorRef: S,
      target: g,
      targetEl: I,
      targetRef: C,
      activatorEvents: T,
      contentEvents: P,
      scrimEvents: F
    } = qx(e, {
      isActive: c,
      isTop: x,
      contentEl: s
    }), {
      teleportTarget: A
    } = Jx(() => {
      const Z = e.attach || e.contained;
      if (Z) return Z;
      const ce = b?.value?.getRootNode() || o.proxy?.$el?.getRootNode();
      return ce instanceof ShadowRoot ? ce : !1;
    }), {
      dimensionStyles: B
    } = ft(e), D = ah(), {
      scopeId: L
    } = sl();
    ue(() => e.disabled, (Z) => {
      Z && (c.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: N
    } = $x(e, {
      isRtl: v,
      contentEl: s,
      target: g,
      isActive: c
    });
    jx(e, {
      root: i,
      contentEl: s,
      targetEl: I,
      target: g,
      isActive: c,
      updateLocation: N
    });
    function J(Z) {
      l("click:outside", Z), e.persistent ? G() : c.value = !1;
    }
    function q(Z) {
      return c.value && x.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || Z.target === r.value || Z instanceof MouseEvent && Z.shadowTarget === r.value);
    }
    nh(e, {
      isActive: c,
      localTop: x,
      contentEl: s,
      activatorEl: b
    }), Ye && ue(c, (Z) => {
      Z ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
    }, {
      immediate: !0
    }), Dt(() => {
      Ye && window.removeEventListener("keydown", $);
    });
    function $(Z) {
      Z.key === "Escape" && h.value && (s.value?.contains(document.activeElement) || l("keydown", Z), e.persistent ? G() : (c.value = !1, s.value?.contains(document.activeElement) && b.value?.focus()));
    }
    function ne(Z) {
      Z.key === "Escape" && !h.value || l("keydown", Z);
    }
    const K = fg();
    Pt(() => e.closeOnBack, () => {
      Lp(K, (Z) => {
        h.value && c.value ? (Z(!1), e.persistent ? G() : c.value = !1) : Z();
      });
    });
    const H = /* @__PURE__ */ ae();
    ue(() => c.value && (e.absolute || e.contained) && A.value == null, (Z) => {
      if (Z) {
        const ce = tr(i.value);
        ce && ce !== document.scrollingElement && (H.value = ce.scrollTop);
      }
    });
    function G() {
      e.noClickAnimation || s.value && Wn(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: yo
      });
    }
    function X() {
      l("afterEnter");
    }
    function fe() {
      m(), l("afterLeave");
    }
    return te(() => _(ye, null, [n.activator?.({
      isActive: c.value,
      targetRef: C,
      props: U({
        ref: S
      }, T.value, e.activatorProps)
    }), D.value && k.value && p(mS, {
      disabled: !A.value,
      to: A.value
    }, {
      default: () => [_("div", U({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": c.value,
          "v-overlay--contained": e.contained
        }, d.value, f.value, e.class],
        style: [w.value, {
          "--v-overlay-opacity": e.opacity,
          top: de(H.value)
        }, e.style],
        ref: i,
        onKeydown: ne
      }, L, a), [p(tC, U({
        color: y,
        modelValue: c.value && !!e.scrim,
        ref: r
      }, F.value), null), p(Ot, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: g.value,
        onAfterEnter: X,
        onAfterLeave: fe
      }, {
        default: () => [qe(_("div", U({
          ref: s,
          class: ["v-overlay__content", e.contentClass],
          style: [B.value, W.value]
        }, P.value, e.contentProps), [n.default?.({
          isActive: c
        })]), [[xn, c.value], [Fs, {
          handler: J,
          closeConditional: q,
          include: () => [b.value]
        }]])]
      })])]
    })])), {
      activatorEl: b,
      scrimEl: r,
      target: g,
      animateClick: G,
      contentEl: s,
      rootEl: i,
      globalTop: h,
      localTop: x,
      updateLocation: N
    };
  }
}), ih = R({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Be(Go({
    captureFocus: !0,
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: or
    }
  }), ["absolute"])
}, "VMenu"), El = Q()({
  name: "VMenu",
  props: ih(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), {
      scopeId: l
    } = sl(), {
      isRtl: o
    } = gt(), i = At(), r = /* @__PURE__ */ E(() => e.id || `v-menu-${i}`), s = /* @__PURE__ */ ae(), u = $e(Bs, null), c = /* @__PURE__ */ se(/* @__PURE__ */ new Set());
    Ze(Bs, {
      register() {
        c.value.add(i);
      },
      unregister() {
        c.value.delete(i);
      },
      closeParents(m) {
        setTimeout(() => {
          !c.value.size && !e.persistent && (m == null || s.value?.contentEl && !Qk(m, s.value.contentEl)) && (a.value = !1, u?.closeParents());
        }, 40);
      }
    }), Dt(() => u?.unregister()), wu(() => a.value = !1), ue(a, (m) => {
      m ? u?.register() : u?.unregister();
    }, {
      immediate: !0
    });
    function d(m) {
      u?.closeParents(m);
    }
    function f(m) {
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), !_m($a(s.value?.contentEl, !1), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = !1, s.value?.activatorEl?.focus());
        } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, s.value?.activatorEl?.focus());
    }
    function v(m) {
      if (e.disabled) return;
      const y = s.value?.contentEl;
      y && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Na(y, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Na(y, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Na(y, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
    }
    const k = V(() => U({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      "aria-owns": r.value,
      onKeydown: v
    }, e.activatorProps));
    return te(() => {
      const m = En.filterProps(e);
      return p(En, U({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (y) => a.value = y,
        absolute: !0,
        activatorProps: k.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": d,
        onKeydown: f
      }, l), {
        activator: n.activator,
        default: function() {
          for (var y = arguments.length, h = new Array(y), x = 0; x < y; x++)
            h[x] = arguments[x];
          return p(Ee, {
            root: "VMenu"
          }, {
            default: () => [n.default?.(...h)]
          });
        }
      });
    }), St({
      id: r,
      ΨopenChildren: c
    }, s);
  }
}), nC = R({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...Se(),
  ...ta({
    transition: {
      component: ju
    }
  })
}, "VCounter"), dr = Q()({
  name: "VCounter",
  functional: !0,
  props: nC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ E(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return te(() => p(Ot, {
      transition: e.transition
    }, {
      default: () => [qe(_("div", {
        class: ee(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ve(e.style)
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[xn, e.active]])]
    })), {};
  }
}), aC = R({
  floating: Boolean,
  ...Se()
}, "VFieldLabel"), Xl = Q()({
  name: "VFieldLabel",
  props: aC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(Nl, {
      class: ee(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ve(e.style)
    }, n)), {};
  }
}), lC = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], qo = R({
  appendInnerIcon: xe,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: xe,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: xe,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => lC.includes(e)
  },
  "onClick:clear": _t(),
  "onClick:appendInner": _t(),
  "onClick:prependInner": _t(),
  ...Se(),
  ...sr(),
  ...Je(),
  ...Ne()
}, "VField"), wa = Q()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    details: Boolean,
    labelId: String,
    ...Ko(),
    ...qo()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: o
    } = We(e), {
      loaderClasses: i
    } = Wo(e), {
      focusClasses: r,
      isFocused: s,
      focus: u,
      blur: c
    } = oa(e), {
      InputIcon: d
    } = Uo(e), {
      roundedClasses: f
    } = et(e), {
      rtlClasses: v
    } = gt(), k = /* @__PURE__ */ E(() => e.dirty || e.active), m = /* @__PURE__ */ E(() => !!(e.label || l.label)), y = /* @__PURE__ */ E(() => !e.singleLine && m.value), h = At(), x = V(() => e.id || `input-${h}`), w = /* @__PURE__ */ E(() => e.details ? `${x.value}-messages` : void 0), b = /* @__PURE__ */ ae(), S = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae(), I = V(() => ["plain", "underlined"].includes(e.variant)), C = V(() => e.error || e.disabled ? void 0 : k.value && s.value ? e.color : e.baseColor), T = V(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? C.value : e.iconColor;
    }), {
      backgroundColorClasses: P,
      backgroundColorStyles: F
    } = ze(() => e.bgColor), {
      textColorClasses: A,
      textColorStyles: B
    } = Ct(C);
    ue(k, (W) => {
      if (y.value && !An()) {
        const N = b.value.$el, J = S.value.$el;
        requestAnimationFrame(() => {
          const q = Eu(N), $ = J.getBoundingClientRect(), ne = $.x - q.x, K = $.y - q.y - (q.height / 2 - $.height / 2), H = $.width / 0.75, G = Math.abs(H - q.width) > 1 ? {
            maxWidth: de(H)
          } : void 0, X = getComputedStyle(N), fe = getComputedStyle(J), Z = parseFloat(X.transitionDuration) * 1e3 || 150, ce = parseFloat(fe.getPropertyValue("--v-field-label-scale")), Ce = fe.getPropertyValue("color");
          N.style.visibility = "visible", J.style.visibility = "hidden", Wn(N, {
            transform: `translate(${ne}px, ${K}px) scale(${ce})`,
            color: Ce,
            ...G
          }, {
            duration: Z,
            easing: yo,
            direction: W ? "normal" : "reverse"
          }).finished.then(() => {
            N.style.removeProperty("visibility"), J.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const D = V(() => ({
      isActive: k,
      isFocused: s,
      controlRef: g,
      iconColor: T,
      blur: c,
      focus: u
    }));
    function L(W) {
      W.target !== document.activeElement && W.preventDefault();
    }
    return te(() => {
      const W = e.variant === "outlined", N = !!(l["prepend-inner"] || e.prependInnerIcon), J = !!(e.clearable || l.clear) && !e.disabled, q = !!(l["append-inner"] || e.appendInnerIcon || J), $ = () => l.label ? l.label({
        ...D.value,
        label: e.label,
        props: {
          for: x.value
        }
      }) : e.label;
      return _("div", U({
        class: ["v-field", {
          "v-field--active": k.value,
          "v-field--appended": q,
          "v-field--center-affix": e.centerAffix ?? !I.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": N,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !$(),
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, P.value, r.value, i.value, f.value, v.value, e.class],
        style: [F.value, e.style],
        onClick: L
      }, n), [_("div", {
        class: "v-field__overlay"
      }, null), p(zo, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), N && _("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [l["prepend-inner"] ? l["prepend-inner"](D.value) : e.prependInnerIcon && p(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: T.value
      }, null)]), _("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && p(Xl, {
        key: "floating-label",
        ref: S,
        class: ee([A.value]),
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value,
        style: ve(B.value)
      }, {
        default: () => [$()]
      }), m.value && p(Xl, {
        key: "label",
        ref: b,
        id: e.labelId,
        for: x.value,
        "aria-hidden": y.value && k.value
      }, {
        default: () => [$()]
      }), l.default?.({
        ...D.value,
        props: {
          id: x.value,
          class: "v-field__input",
          "aria-describedby": w.value
        },
        focus: u,
        blur: c
      }) ?? _("div", {
        id: x.value,
        class: "v-field__input",
        "aria-describedby": w.value
      }, null)]), J && p(Yu, {
        key: "clear"
      }, {
        default: () => [qe(_("div", {
          class: "v-field__clearable",
          onMousedown: (ne) => {
            ne.preventDefault(), ne.stopPropagation();
          }
        }, [p(Ee, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...D.value,
            props: {
              onFocus: u,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : p(d, {
            name: "clear",
            onFocus: u,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[xn, e.dirty]])]
      }), q && _("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [l["append-inner"] ? l["append-inner"](D.value) : e.appendInnerIcon && p(d, {
        key: "append-icon",
        name: "appendInner",
        color: T.value
      }, null)]), _("div", {
        class: ee(["v-field__outline", A.value]),
        style: ve(B.value)
      }, [W && _(ye, null, [_("div", {
        class: "v-field__outline__start"
      }, null), y.value && _("div", {
        class: "v-field__outline__notch"
      }, [p(Xl, {
        ref: S,
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value
      }, {
        default: () => [$()]
      })]), _("div", {
        class: "v-field__outline__end"
      }, null)]), I.value && y.value && p(Xl, {
        ref: S,
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value
      }, {
        default: () => [$()]
      })])]);
    }), {
      controlRef: g,
      fieldIconColor: T
    };
  }
}), rh = R({
  autocomplete: String
}, "autocomplete");
function ic(e) {
  const t = At(), n = /* @__PURE__ */ se(0), a = /* @__PURE__ */ E(() => e.autocomplete === "suppress");
  return {
    isSuppressing: a,
    fieldAutocomplete: /* @__PURE__ */ E(() => a.value ? "off" : e.autocomplete),
    fieldName: /* @__PURE__ */ E(() => {
      if (e.name)
        return a.value ? `${e.name}-${t}-${n.value}` : e.name;
    }),
    update: () => n.value = (/* @__PURE__ */ new Date()).getTime()
  };
}
function sh(e) {
  function t(n, a) {
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (l.matches("input,textarea") ? l : l.querySelector("input,textarea"))?.focus();
  }
  return {
    onIntersect: t
  };
}
const oC = ["color", "file", "time", "date", "datetime-local", "week", "month"], Xo = R({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...rh(),
  ...Be(ia(), ["direction"]),
  ...qo()
}, "VTextField"), Mn = Q()({
  name: "VTextField",
  directives: {
    vIntersect: wn
  },
  inheritAttrs: !1,
  props: Xo(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const o = pe(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: s
    } = oa(e), {
      onIntersect: u
    } = sh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = V(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = V(() => ["plain", "underlined"].includes(e.variant)), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), y = ic(e), h = V(() => oC.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
    function x() {
      y.isSuppressing.value && y.update(), i.value || r(), Te(() => {
        m.value !== document.activeElement && m.value?.focus();
      });
    }
    function w(I) {
      a("mousedown:control", I), I.target !== m.value && (x(), I.preventDefault());
    }
    function b(I) {
      a("click:control", I);
    }
    function S(I, C) {
      I.stopPropagation(), x(), Te(() => {
        C(), $o(e["onClick:clear"], I);
      });
    }
    function g(I) {
      const C = I.target;
      if (!(e.modelModifiers?.trim && ["text", "search", "password", "tel", "url"].includes(e.type))) {
        o.value = C.value;
        return;
      }
      const T = C.value, P = C.selectionStart, F = C.selectionEnd;
      o.value = T, Te(() => {
        let A = 0;
        T.trimStart().length === C.value.length && (A = T.length - C.value.length), P != null && (C.selectionStart = P - A), F != null && (C.selectionEnd = F - A);
      });
    }
    return te(() => {
      const I = !!(l.counter || e.counter !== !1 && e.counter != null), C = !!(I || l.details), [T, P] = Fn(n), {
        modelValue: F,
        ...A
      } = Tt.filterProps(e), B = wa.filterProps(e);
      return p(Tt, U({
        ref: v,
        modelValue: o.value,
        "onUpdate:modelValue": (D) => o.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, T, A, {
        centerAffix: !f.value,
        focused: i.value
      }), {
        ...l,
        default: (D) => {
          let {
            id: L,
            isDisabled: W,
            isDirty: N,
            isReadonly: J,
            isValid: q,
            hasDetails: $,
            reset: ne
          } = D;
          return p(wa, U({
            ref: k,
            onMousedown: w,
            onClick: b,
            "onClick:clear": (K) => S(K, ne),
            role: e.role
          }, Be(B, ["onClick:clear"]), {
            id: L.value,
            labelId: `${L.value}-label`,
            active: h.value || N.value,
            dirty: N.value || e.dirty,
            disabled: W.value,
            focused: i.value,
            details: $.value,
            error: q.value === !1
          }), {
            ...l,
            default: (K) => {
              let {
                props: {
                  class: H,
                  ...G
                },
                controlRef: X
              } = K;
              const fe = _("input", U({
                ref: (Z) => m.value = X.value = Z,
                value: o.value,
                onInput: g,
                autofocus: e.autofocus,
                readonly: J.value,
                disabled: W.value,
                name: y.fieldName.value,
                autocomplete: y.fieldAutocomplete.value,
                placeholder: e.placeholder,
                size: 1,
                role: e.role,
                type: e.type,
                onFocus: r,
                onBlur: s,
                "aria-labelledby": `${L.value}-label`
              }, G, P), null);
              return _(ye, null, [e.prefix && _("span", {
                class: "v-text-field__prefix"
              }, [_("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), qe(l.default ? _("div", {
                class: ee(H),
                "data-no-activator": ""
              }, [l.default({
                id: L
              }), fe]) : Xn(fe, {
                class: H
              }), [[wn, u, null, {
                once: !0
              }]]), e.suffix && _("span", {
                class: "v-text-field__suffix"
              }, [_("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: C ? (D) => _(ye, null, [l.details?.(D), I && _(ye, null, [_("span", null, null), p(dr, {
          active: e.persistentCounter || i.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), St({}, v, k, m);
  }
}), iC = R({
  renderless: Boolean,
  ...Se()
}, "VVirtualScrollItem"), uh = Q()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: iC(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      resizeRef: o,
      contentRect: i
    } = vn(void 0, "border");
    ue(() => i.value?.height, (r) => {
      r != null && a("update:height", r);
    }), te(() => e.renderless ? _(ye, null, [l.default?.({
      itemRef: o
    })]) : _("div", U({
      ref: o,
      class: ["v-virtual-scroll__item", e.class],
      style: e.style
    }, n), [l.default?.()]));
  }
}), rC = -1, sC = 1, Qr = 100, ch = R({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function dh(e, t) {
  const n = ln(), a = /* @__PURE__ */ se(0);
  at(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = /* @__PURE__ */ se(0), o = /* @__PURE__ */ se(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), i = /* @__PURE__ */ se(0), r = /* @__PURE__ */ se(0), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let c = 0;
  const {
    resizeRef: d,
    contentRect: f
  } = vn();
  at(() => {
    d.value = s.value;
  });
  const v = V(() => s.value === document.documentElement ? n.height.value : f.value?.height || parseInt(e.height) || 0), k = V(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({
    length: t.value.length
  }), y = Array.from({
    length: t.value.length
  });
  const h = /* @__PURE__ */ se(0);
  let x = -1;
  function w($) {
    return m[$] || a.value;
  }
  const b = wm(() => {
    const $ = performance.now();
    y[0] = 0;
    const ne = t.value.length;
    for (let K = 1; K <= ne; K++)
      y[K] = (y[K - 1] || 0) + w(K - 1);
    h.value = Math.max(h.value, performance.now() - $);
  }, h), S = ue(k, ($) => {
    $ && (S(), c = u.value.offsetTop, b.immediate(), W(), ~x && Te(() => {
      Ye && window.requestAnimationFrame(() => {
        J(x), x = -1;
      });
    }));
  });
  ot(() => {
    b.clear();
  });
  function g($, ne) {
    const K = m[$], H = a.value;
    a.value = H ? Math.min(a.value, ne) : ne, (K !== ne || H !== a.value) && (m[$] = ne, b());
  }
  function I($) {
    $ = je($, 0, t.value.length);
    const ne = Math.floor($), K = $ % 1, H = ne + 1, G = y[ne] || 0, X = y[H] || G;
    return G + (X - G) * K;
  }
  function C($) {
    return uC(y, $);
  }
  let T = 0, P = 0, F = 0;
  ue(v, ($, ne) => {
    W(), $ < ne && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let A = -1;
  function B() {
    if (!s.value || !u.value) return;
    const $ = s.value.scrollTop, ne = performance.now();
    ne - F > 500 ? (P = Math.sign($ - T), c = u.value.offsetTop) : P = $ - T, T = $, F = ne, window.clearTimeout(A), A = window.setTimeout(D, 500), W();
  }
  function D() {
    !s.value || !u.value || (P = 0, F = 0, window.clearTimeout(A), W());
  }
  let L = -1;
  function W() {
    cancelAnimationFrame(L), L = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !v.value || !a.value) return;
    const $ = T - c, ne = Math.sign(P), K = Math.max(0, $ - Qr), H = je(C(K), 0, t.value.length), G = $ + v.value + Qr, X = je(C(G) + 1, H + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (ne !== rC || H < l.value) && (ne !== sC || X > o.value)
    ) {
      const fe = I(l.value) - I(H), Z = I(X) - I(o.value);
      Math.max(fe, Z) > Qr ? (l.value = H, o.value = X) : (H <= 0 && (l.value = H), X >= t.value.length && (o.value = X));
    }
    i.value = I(l.value), r.value = I(t.value.length) - I(o.value);
  }
  function J($) {
    const ne = I($);
    !s.value || $ && !ne ? x = $ : s.value.scrollTop = ne;
  }
  const q = V(() => t.value.slice(l.value, o.value).map(($, ne) => {
    const K = ne + l.value;
    return {
      raw: $,
      index: K,
      key: rt($, e.itemKey, K)
    };
  }));
  return ue(t, () => {
    m = Array.from({
      length: t.value.length
    }), y = Array.from({
      length: t.value.length
    }), b.immediate(), W();
  }, {
    deep: 1
  }), {
    calculateVisibleItems: W,
    containerRef: s,
    markerRef: u,
    computedItems: q,
    paddingTop: i,
    paddingBottom: r,
    scrollToIndex: J,
    handleScroll: B,
    handleScrollend: D,
    handleItemResize: g
  };
}
function uC(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, o = e[l], o > t)
      n = l - 1;
    else if (o < t)
      i = l, a = l + 1;
    else return o === t ? l : a;
  return i;
}
const cC = R({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...ch(),
  ...Se(),
  ...dt()
}, "VVirtualScroll"), fr = Q()({
  name: "VVirtualScroll",
  props: cC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ct("VVirtualScroll"), {
      dimensionStyles: l
    } = ft(e), {
      calculateVisibleItems: o,
      containerRef: i,
      markerRef: r,
      handleScroll: s,
      handleScrollend: u,
      handleItemResize: c,
      scrollToIndex: d,
      paddingTop: f,
      paddingBottom: v,
      computedItems: k
    } = dh(e, /* @__PURE__ */ E(() => e.items));
    return Pt(() => e.renderless, () => {
      function m() {
        const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[h]("scroll", s, {
          passive: !0
        }), document[h]("scrollend", u)) : (i.value?.[h]("scroll", s, {
          passive: !0
        }), i.value?.[h]("scrollend", u));
      }
      yt(() => {
        i.value = tr(a.vnode.el, !0), m(!0);
      }), ot(m);
    }), te(() => {
      const m = k.value.map((y) => p(uh, {
        key: y.key,
        renderless: e.renderless,
        "onUpdate:height": (h) => c(y.index, h)
      }, {
        default: (h) => n.default?.({
          item: y.raw,
          index: y.index,
          ...h
        })
      }));
      return e.renderless ? _(ye, null, [_("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: de(f.value)
        }
      }, null), m, _("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: de(v.value)
        }
      }, null)]) : _("div", {
        ref: i,
        class: ee(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: u,
        style: ve([l.value, e.style])
      }, [_("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: de(f.value),
          paddingBottom: de(v.value)
        }
      }, [m])]);
    }), {
      calculateVisibleItems: o,
      scrollToIndex: d
    };
  }
});
function rc(e, t) {
  const n = /* @__PURE__ */ se(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function o() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = ue(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function i(r) {
    if (r.key === "Tab" && t.value?.focus(), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = e.value?.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await o();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const c = s.getBoundingClientRect().top;
      for (const d of u)
        if (d.getBoundingClientRect().top >= c) {
          d.focus();
          break;
        }
    } else {
      const c = s.getBoundingClientRect().bottom;
      for (const d of [...u].reverse())
        if (d.getBoundingClientRect().bottom <= c) {
          d.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: i
  };
}
const dC = R({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function sc(e, t) {
  const n = At(), a = V(() => `menu-${n}`);
  return {
    menuId: a,
    ariaExpanded: /* @__PURE__ */ E(() => kt(t)),
    ariaControls: /* @__PURE__ */ E(() => a.value)
  };
}
const uc = R({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: xe,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...dC(),
  ...Ug({
    itemChildren: !1
  })
}, "Select"), fC = R({
  ...uc(),
  ...Be(Xo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"]),
  ...ta({
    transition: {
      component: or
    }
  })
}, "VSelect"), cc = Q()({
  name: "VSelect",
  props: fC(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ue(), l = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae(), {
      items: r,
      transformIn: s,
      transformOut: u
    } = Qu(e), c = pe(e, "modelValue", [], (X) => s(X === null ? [null] : Xe(X)), (X) => {
      const fe = u(X);
      return e.multiple ? fe : fe[0] ?? null;
    }), d = V(() => typeof e.counterValue == "function" ? e.counterValue(c.value) : typeof e.counterValue == "number" ? e.counterValue : c.value.length), f = Rl(e), v = ic(e), k = V(() => c.value.map((X) => X.value)), m = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ E(() => e.closableChips && !f.isReadonly.value && !f.isDisabled.value), {
      InputIcon: h
    } = Uo(e);
    let x = "", w = 0, b;
    const S = V(() => e.hideSelected ? r.value.filter((X) => !c.value.some((fe) => (e.valueComparator || xt)(fe, X))) : r.value), g = V(() => e.hideNoData && !S.value.length || f.isReadonly.value || f.isDisabled.value), I = pe(e, "menu"), C = V({
      get: () => I.value,
      set: (X) => {
        I.value && !X && o.value?.ΨopenChildren.size || X && g.value || (I.value = X);
      }
    }), {
      menuId: T,
      ariaExpanded: P,
      ariaControls: F
    } = sc(e, C), A = V(() => ({
      ...e.menuProps,
      activatorProps: {
        ...e.menuProps?.activatorProps || {},
        "aria-haspopup": "listbox"
        // Set aria-haspopup to 'listbox'
      }
    })), B = /* @__PURE__ */ ae(), D = rc(B, l);
    function L(X) {
      e.openOnClear && (C.value = !0);
    }
    function W() {
      g.value || (C.value = !C.value);
    }
    function N(X) {
      Il(X) && J(X);
    }
    function J(X) {
      if (!X.key || f.isReadonly.value) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown", " "].includes(X.key) && (C.value = !0), ["Escape", "Tab"].includes(X.key) && (C.value = !1), e.clearable && X.key === "Backspace") {
        X.preventDefault(), c.value = [], L();
        return;
      }
      X.key === "Home" ? B.value?.focus("first") : X.key === "End" && B.value?.focus("last");
      const fe = 1e3;
      if (!Il(X)) return;
      const Z = performance.now();
      Z - b > fe && (x = "", w = 0), x += X.key.toLowerCase(), b = Z;
      const ce = S.value;
      function Ce() {
        let j = Ve();
        return j || x.at(-1) === x.at(-2) && (x = x.slice(0, -1), w++, j = Ve(), j) || (w = 0, j = Ve(), j) ? j : (x = X.key.toLowerCase(), Ve());
      }
      function Ve() {
        for (let j = w; j < ce.length; j++) {
          const re = ce[j];
          if (re.title.toLowerCase().startsWith(x))
            return [re, j];
        }
      }
      const Pe = Ce();
      if (!Pe) return;
      const [M, O] = Pe;
      w = O, B.value?.focus(O), e.multiple || (c.value = [M]);
    }
    function q(X) {
      let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!X.props.disabled)
        if (e.multiple) {
          const Z = c.value.findIndex((Ce) => (e.valueComparator || xt)(Ce.value, X.value)), ce = fe ?? !~Z;
          if (~Z) {
            const Ce = ce ? [...c.value, X] : [...c.value];
            Ce.splice(Z, 1), c.value = Ce;
          } else ce && (c.value = [...c.value, X]);
        } else {
          const Z = fe !== !1;
          c.value = Z ? [X] : [], Te(() => {
            C.value = !1;
          });
        }
    }
    function $(X) {
      B.value?.$el.contains(X.relatedTarget) || (C.value = !1);
    }
    function ne() {
      e.eager && i.value?.calculateVisibleItems();
    }
    function K() {
      m.value && l.value?.focus();
    }
    function H(X) {
      m.value = !0;
    }
    function G(X) {
      if (X == null) c.value = [];
      else if (Vl(l.value, ":autofill") || Vl(l.value, ":-webkit-autofill")) {
        const fe = r.value.find((Z) => Z.title === X);
        fe && q(fe);
      } else l.value && (l.value.value = "");
    }
    return ue(C, () => {
      if (!e.hideSelected && C.value && c.value.length) {
        const X = S.value.findIndex((fe) => c.value.some((Z) => (e.valueComparator || xt)(Z.value, fe.value)));
        Ye && !e.noAutoScroll && window.requestAnimationFrame(() => {
          X >= 0 && i.value?.scrollToIndex(X);
        });
      }
    }), ue(r, (X, fe) => {
      C.value || m.value && e.hideNoData && !fe.length && X.length && (C.value = !0);
    }), te(() => {
      const X = !!(e.chips || n.chip), fe = !!(!e.hideNoData || S.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), Z = c.value.length > 0, ce = Mn.filterProps(e), Ce = Z || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return p(Mn, U({
        ref: l
      }, ce, {
        modelValue: c.value.map((Ve) => Ve.props.title).join(", "),
        name: void 0,
        "onUpdate:modelValue": G,
        focused: m.value,
        "onUpdate:focused": (Ve) => m.value = Ve,
        validationValue: c.externalValue,
        counterValue: d.value,
        dirty: Z,
        class: ["v-select", {
          "v-select--active-menu": C.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": c.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: Ce,
        "onClick:clear": L,
        "onMousedown:control": W,
        onBlur: $,
        onKeydown: J,
        "aria-expanded": P.value,
        "aria-controls": F.value
      }), {
        ...n,
        default: (Ve) => {
          let {
            id: Pe
          } = Ve;
          return _(ye, null, [_("select", {
            hidden: !0,
            multiple: e.multiple,
            name: v.fieldName.value
          }, [r.value.map((M) => _("option", {
            key: M.value,
            value: M.value,
            selected: k.value.includes(M.value)
          }, null))]), p(El, U({
            id: T.value,
            ref: o,
            modelValue: C.value,
            "onUpdate:modelValue": (M) => C.value = M,
            activator: "parent",
            contentClass: "v-select__content",
            disabled: g.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            transition: e.transition,
            onAfterEnter: ne,
            onAfterLeave: K
          }, A.value), {
            default: () => [fe && p(Dl, U({
              ref: B,
              selected: k.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (M) => M.preventDefault(),
              onKeydown: N,
              onFocusin: H,
              tabindex: "-1",
              selectable: !!S.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${Pe.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, D, e.listProps), {
              default: () => [n["prepend-item"]?.(), !S.value.length && !e.hideNoData && (n["no-data"]?.() ?? p(mn, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), p(fr, {
                ref: i,
                renderless: !0,
                items: S.value,
                itemKey: "value"
              }, {
                default: (M) => {
                  let {
                    item: O,
                    index: j,
                    itemRef: re
                  } = M;
                  const z = t0(O.props), ie = U(O.props, {
                    ref: re,
                    key: O.value,
                    onClick: () => q(O, null),
                    "aria-posinset": j + 1,
                    "aria-setsize": S.value.length
                  });
                  return O.type === "divider" ? n.divider?.({
                    props: O.raw,
                    index: j
                  }) ?? p(nn, U(O.props, {
                    key: `divider-${j}`
                  }), null) : O.type === "subheader" ? n.subheader?.({
                    props: O.raw,
                    index: j
                  }) ?? p(Hl, U(O.props, {
                    key: `subheader-${j}`
                  }), null) : n.item?.({
                    item: O,
                    index: j,
                    props: ie
                  }) ?? p(mn, U(ie, {
                    role: "option"
                  }), {
                    prepend: (me) => {
                      let {
                        isSelected: Y
                      } = me;
                      return _(ye, null, [e.multiple && !e.hideSelected ? p(pn, {
                        key: O.value,
                        modelValue: Y,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (le) => le.preventDefault()
                      }, null) : void 0, z.prependAvatar && p(an, {
                        image: z.prependAvatar
                      }, null), z.prependIcon && p(He, {
                        icon: z.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), n["append-item"]?.()]
            })]
          }), c.value.map((M, O) => {
            function j(me) {
              me.stopPropagation(), me.preventDefault(), q(M, !1);
            }
            const re = U(Jn.filterProps(M.props), {
              "onClick:close": j,
              onKeydown(me) {
                me.key !== "Enter" && me.key !== " " || (me.preventDefault(), me.stopPropagation(), j(me));
              },
              onMousedown(me) {
                me.preventDefault(), me.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), z = X ? !!n.chip : !!n.selection, ie = z ? er(X ? n.chip({
              item: M,
              index: O,
              props: re
            }) : n.selection({
              item: M,
              index: O
            })) : void 0;
            if (!(z && !ie))
              return _("div", {
                key: M.value,
                class: "v-select__selection"
              }, [X ? n.chip ? p(Ee, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: y.value,
                    size: "small",
                    text: M.title
                  }
                }
              }, {
                default: () => [ie]
              }) : p(Jn, U({
                key: "chip",
                closable: y.value,
                size: "small",
                text: M.title,
                disabled: M.props.disabled
              }, re), null) : ie ?? _("span", {
                class: "v-select__selection-text"
              }, [M.title, e.multiple && O < c.value.length - 1 && _("span", {
                class: "v-select__selection-comma"
              }, [qt(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var Ve = arguments.length, Pe = new Array(Ve), M = 0; M < Ve; M++)
            Pe[M] = arguments[M];
          return _(ye, null, [n["append-inner"]?.(...Pe), e.menuIcon ? p(He, {
            class: "v-select__menu-icon",
            color: l.value?.fieldIconColor,
            icon: e.menuIcon,
            "aria-hidden": !0
          }, null) : void 0, e.appendInnerIcon && p(h, {
            key: "append-icon",
            name: "appendInner",
            color: Pe[0].iconColor.value
          }, null)]);
        }
      });
    }), St({
      isFocused: m,
      menu: C,
      select: q
    }, l);
  }
}), vC = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; )
    a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function es(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1))
    return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Wl = R({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function mC(e, t, n) {
  const a = [], l = n?.default ?? vC, o = n?.filterKeys ? Xe(n.filterKeys) : !1, i = Object.keys(n?.customKeyFilter ?? {}).length;
  if (!e?.length) return a;
  let r = null;
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = Xe(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !n?.noFilter) {
      let k = !1;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          r?.type === "divider" && u.type === "subheader" && a.push(r), r = {
            index: s,
            matches: {},
            type: u.type
          };
          continue;
        }
        const h = o || Object.keys(c);
        k = h.length === i;
        for (const x of h) {
          const w = rt(c, x), b = n?.customKeyFilter?.[x];
          if (v = b ? b(w, t, u) : l(w, t, u), v !== -1 && v !== !1)
            b ? d[x] = es(v, t) : f[x] = es(v, t);
          else if (n?.filterMode === "every")
            continue e;
        }
      } else
        v = l(u, t, u), v !== -1 && v !== !1 && (f.title = es(v, t));
      const m = Object.keys(f).length, y = Object.keys(d).length;
      if (!m && !y || n?.filterMode === "union" && y !== i && !m || n?.filterMode === "intersection" && (y !== i || !m && i > 0 && !k)) continue;
    }
    r && (a.push(r), r = null), a.push({
      index: s,
      matches: {
        ...f,
        ...d
      }
    });
  }
  return a;
}
function zl(e, t, n, a) {
  const l = /* @__PURE__ */ se([]), o = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), i = V(() => a?.transform ? be(t).map((s) => [s, a.transform(s)]) : be(t));
  at(() => {
    const s = typeof n == "function" ? n() : be(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = mC(i.value, u, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...be(a?.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), d = be(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((k) => {
      let {
        index: m,
        matches: y
      } = k;
      const h = d[m];
      f.push(h), v.set(h.value, y);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: o,
    getMatches: r
  };
}
function fh(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [_("span", {
      class: ee(`${e}__unmask`)
    }, [t.slice(o, a[0])]), _("span", {
      class: ee(`${e}__mask`)
    }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(_("span", {
      class: ee(`${e}__unmask`)
    }, [t.slice(a[1])])), _(ye, null, [i]);
  });
}
const gC = R({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...Wl({
    filterKeys: ["title"]
  }),
  ...uc(),
  ...Be(Xo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"])
}, "VAutocomplete"), hC = Q()({
  name: "VAutocomplete",
  props: gC(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ue(), l = /* @__PURE__ */ ae(), o = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(!0), r = /* @__PURE__ */ se(!1), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ se(-1), d = /* @__PURE__ */ se(null), {
      items: f,
      transformIn: v,
      transformOut: k
    } = Qu(e), {
      textColorClasses: m,
      textColorStyles: y
    } = Ct(() => l.value?.color), {
      InputIcon: h
    } = Uo(e), x = pe(e, "search", ""), w = pe(e, "modelValue", [], (z) => v(z === null ? [null] : Xe(z)), (z) => {
      const ie = k(z);
      return e.multiple ? ie : ie[0] ?? null;
    }), b = V(() => typeof e.counterValue == "function" ? e.counterValue(w.value) : typeof e.counterValue == "number" ? e.counterValue : w.value.length), S = Rl(e), {
      filteredItems: g,
      getMatches: I
    } = zl(e, f, () => d.value ?? (i.value ? "" : x.value)), C = V(() => e.hideSelected && d.value === null ? g.value.filter((z) => !w.value.some((ie) => ie.value === z.value)) : g.value), T = /* @__PURE__ */ E(() => e.closableChips && !S.isReadonly.value && !S.isDisabled.value), P = V(() => !!(e.chips || n.chip)), F = V(() => P.value || !!n.selection), A = V(() => w.value.map((z) => z.props.value)), B = V(() => C.value.find((z) => z.type === "item" && !z.props.disabled)), D = V(() => (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && x.value === B.value?.title) && C.value.length > 0 && !i.value && !r.value), L = V(() => e.hideNoData && !C.value.length || S.isReadonly.value || S.isDisabled.value), W = pe(e, "menu"), N = V({
      get: () => W.value,
      set: (z) => {
        W.value && !z && s.value?.ΨopenChildren.size || z && L.value || (W.value = z);
      }
    }), {
      menuId: J,
      ariaExpanded: q,
      ariaControls: $
    } = sc(e, N), ne = /* @__PURE__ */ ae(), K = rc(ne, l);
    function H(z) {
      e.openOnClear && (N.value = !0), x.value = "";
    }
    function G() {
      L.value || (N.value = !0);
    }
    function X(z) {
      L.value || (o.value && (z.preventDefault(), z.stopPropagation()), N.value = !N.value);
    }
    function fe(z) {
      (Il(z) || z.key === "Backspace") && l.value?.focus();
    }
    function Z(z) {
      if (S.isReadonly.value) return;
      const ie = l.value?.selectionStart, me = w.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(z.key) && z.preventDefault(), ["Enter", "ArrowDown"].includes(z.key) && (N.value = !0), ["Escape"].includes(z.key) && (N.value = !1), D.value && ["Enter", "Tab"].includes(z.key) && B.value && !w.value.some((Y) => {
        let {
          value: le
        } = Y;
        return le === B.value.value;
      }) && re(B.value), z.key === "ArrowDown" && D.value && ne.value?.focus("next"), ["Backspace", "Delete"].includes(z.key)) {
        if (!e.multiple && F.value && w.value.length > 0 && !x.value) return re(w.value[0], !1);
        if (~c.value) {
          z.preventDefault();
          const Y = c.value;
          re(w.value[c.value], !1), c.value = Y >= me - 1 ? me - 2 : Y;
        } else z.key === "Backspace" && !x.value && (c.value = me - 1);
        return;
      }
      if (e.multiple)
        if (z.key === "ArrowLeft") {
          if (c.value < 0 && ie && ie > 0) return;
          const Y = c.value > -1 ? c.value - 1 : me - 1;
          if (w.value[Y])
            c.value = Y;
          else {
            const le = x.value?.length ?? null;
            c.value = -1, l.value?.setSelectionRange(le, le);
          }
        } else if (z.key === "ArrowRight") {
          if (c.value < 0) return;
          const Y = c.value + 1;
          w.value[Y] ? c.value = Y : (c.value = -1, l.value?.setSelectionRange(0, 0));
        } else ~c.value && Il(z) && (c.value = -1);
    }
    function ce(z) {
      if (Vl(l.value, ":autofill") || Vl(l.value, ":-webkit-autofill")) {
        const ie = f.value.find((me) => me.title === z.target.value);
        ie && re(ie);
      }
    }
    function Ce() {
      e.eager && u.value?.calculateVisibleItems();
    }
    function Ve() {
      o.value && (i.value = !0, l.value?.focus()), d.value = null;
    }
    function Pe(z) {
      o.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function M(z) {
      r.value = !1;
    }
    function O(z) {
      (z == null || z === "" && !e.multiple && !F.value) && (w.value = []);
    }
    const j = /* @__PURE__ */ se(!1);
    function re(z) {
      let ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!z || z.props.disabled))
        if (e.multiple) {
          const me = w.value.findIndex((le) => (e.valueComparator || xt)(le.value, z.value)), Y = ie ?? !~me;
          if (~me) {
            const le = Y ? [...w.value, z] : [...w.value];
            le.splice(me, 1), w.value = le;
          } else Y && (w.value = [...w.value, z]);
          e.clearOnSelect && (x.value = "");
        } else {
          const me = ie !== !1;
          w.value = me ? [z] : [], d.value = i.value ? "" : x.value ?? "", x.value = me && !F.value ? z.title : "", Te(() => {
            N.value = !1, i.value = !0;
          });
        }
    }
    return ue(o, (z, ie) => {
      z !== ie && (z ? (j.value = !0, x.value = e.multiple || F.value ? "" : String(w.value.at(-1)?.props.title ?? ""), i.value = !0, Te(() => j.value = !1)) : (!e.multiple && x.value == null && (w.value = []), N.value = !1, !i.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
    }), ue(x, (z) => {
      !o.value || j.value || (z && (N.value = !0), i.value = !z);
    }), ue(N, (z) => {
      if (!e.hideSelected && z && w.value.length && i.value) {
        const ie = C.value.findIndex((me) => w.value.some((Y) => me.value === Y.value));
        Ye && window.requestAnimationFrame(() => {
          ie >= 0 && u.value?.scrollToIndex(ie);
        });
      }
      z && (d.value = null);
    }), ue(f, (z, ie) => {
      N.value || o.value && !ie.length && z.length && (N.value = !0);
    }), te(() => {
      const z = !!(!e.hideNoData || C.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ie = w.value.length > 0, me = Mn.filterProps(e);
      return p(Mn, U({
        ref: l
      }, me, {
        modelValue: x.value,
        "onUpdate:modelValue": [(Y) => x.value = Y, O],
        focused: o.value,
        "onUpdate:focused": (Y) => o.value = Y,
        validationValue: w.externalValue,
        counterValue: b.value,
        dirty: ie,
        onChange: ce,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": N.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!F.value,
          "v-autocomplete--selecting-index": c.value > -1
        }, e.class],
        style: e.style,
        readonly: S.isReadonly.value,
        placeholder: ie ? void 0 : e.placeholder,
        "onClick:clear": H,
        "onMousedown:control": G,
        onKeydown: Z,
        "aria-expanded": q.value,
        "aria-controls": $.value
      }), {
        ...n,
        default: (Y) => {
          let {
            id: le
          } = Y;
          return _(ye, null, [p(El, U({
            id: J.value,
            ref: s,
            modelValue: N.value,
            "onUpdate:modelValue": (oe) => N.value = oe,
            activator: "parent",
            contentClass: "v-autocomplete__content",
            disabled: L.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            onAfterEnter: Ce,
            onAfterLeave: Ve
          }, e.menuProps), {
            default: () => [z && p(Dl, U({
              ref: ne,
              filterable: !0,
              selected: A.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (oe) => oe.preventDefault(),
              onKeydown: fe,
              onFocusin: Pe,
              onFocusout: M,
              tabindex: "-1",
              selectable: !!C.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${le.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, K, e.listProps), {
              default: () => [n["prepend-item"]?.(), !C.value.length && !e.hideNoData && (n["no-data"]?.() ?? p(mn, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), p(fr, {
                ref: u,
                renderless: !0,
                items: C.value,
                itemKey: "value"
              }, {
                default: (oe) => {
                  let {
                    item: ge,
                    index: he,
                    itemRef: ke
                  } = oe;
                  const we = U(ge.props, {
                    ref: ke,
                    key: ge.value,
                    active: D.value && ge === B.value ? !0 : void 0,
                    onClick: () => re(ge, null),
                    "aria-posinset": he + 1,
                    "aria-setsize": C.value.length
                  });
                  return ge.type === "divider" ? n.divider?.({
                    props: ge.raw,
                    index: he
                  }) ?? p(nn, U(ge.props, {
                    key: `divider-${he}`
                  }), null) : ge.type === "subheader" ? n.subheader?.({
                    props: ge.raw,
                    index: he
                  }) ?? p(Hl, U(ge.props, {
                    key: `subheader-${he}`
                  }), null) : n.item?.({
                    item: ge,
                    index: he,
                    props: we
                  }) ?? p(mn, U(we, {
                    role: "option"
                  }), {
                    prepend: (De) => {
                      let {
                        isSelected: Fe
                      } = De;
                      return _(ye, null, [e.multiple && !e.hideSelected ? p(pn, {
                        key: ge.value,
                        modelValue: Fe,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (Re) => Re.preventDefault()
                      }, null) : void 0, ge.props.prependAvatar && p(an, {
                        image: ge.props.prependAvatar
                      }, null), ge.props.prependIcon && p(He, {
                        icon: ge.props.prependIcon
                      }, null)]);
                    },
                    title: () => i.value ? ge.title : fh("v-autocomplete", ge.title, I(ge)?.title)
                  });
                }
              }), n["append-item"]?.()]
            })]
          }), w.value.map((oe, ge) => {
            function he(Fe) {
              Fe.stopPropagation(), Fe.preventDefault(), re(oe, !1);
            }
            const ke = U(Jn.filterProps(oe.props), {
              "onClick:close": he,
              onKeydown(Fe) {
                Fe.key !== "Enter" && Fe.key !== " " || (Fe.preventDefault(), Fe.stopPropagation(), he(Fe));
              },
              onMousedown(Fe) {
                Fe.preventDefault(), Fe.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), we = P.value ? !!n.chip : !!n.selection, De = we ? er(P.value ? n.chip({
              item: oe,
              index: ge,
              props: ke
            }) : n.selection({
              item: oe,
              index: ge
            })) : void 0;
            if (!(we && !De))
              return _("div", {
                key: oe.value,
                class: ee(["v-autocomplete__selection", ge === c.value && ["v-autocomplete__selection--selected", m.value]]),
                style: ve(ge === c.value ? y.value : {})
              }, [P.value ? n.chip ? p(Ee, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: T.value,
                    size: "small",
                    text: oe.title
                  }
                }
              }, {
                default: () => [De]
              }) : p(Jn, U({
                key: "chip",
                closable: T.value,
                size: "small",
                text: oe.title,
                disabled: oe.props.disabled
              }, ke), null) : De ?? _("span", {
                class: "v-autocomplete__selection-text"
              }, [oe.title, e.multiple && ge < w.value.length - 1 && _("span", {
                class: "v-autocomplete__selection-comma"
              }, [qt(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var Y = arguments.length, le = new Array(Y), oe = 0; oe < Y; oe++)
            le[oe] = arguments[oe];
          return _(ye, null, [n["append-inner"]?.(...le), e.menuIcon ? p(He, {
            class: "v-autocomplete__menu-icon",
            color: l.value?.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: X,
            onClick: Qi,
            "aria-hidden": !0,
            tabindex: "-1"
          }, null) : void 0, e.appendInnerIcon && p(h, {
            key: "append-icon",
            name: "appendInner",
            color: le[0].iconColor.value
          }, null)]);
        }
      });
    }), St({
      isFocused: o,
      isPristine: i,
      menu: N,
      search: x,
      filteredItems: g,
      select: re
    }, l);
  }
}), yC = R({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: xe,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...Se(),
  ...la({
    location: "top end"
  }),
  ...Je(),
  ...Ae(),
  ...Ne(),
  ...ta({
    transition: "scale-rotate-transition"
  }),
  ...dt()
}, "VBadge"), vh = Q()({
  name: "VBadge",
  inheritAttrs: !1,
  props: yC(),
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: a
    } = ze(() => e.color), {
      roundedClasses: l
    } = et(e), {
      t: o
    } = Ue(), {
      textColorClasses: i,
      textColorStyles: r
    } = Ct(() => e.textColor), {
      themeClasses: s
    } = lr(), {
      locationStyles: u
    } = rl(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), {
      dimensionStyles: c
    } = ft(e);
    return te(() => {
      const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, k] = ys(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return p(e.tag, U({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, k, {
        style: e.style
      }), {
        default: () => [_("div", {
          class: "v-badge__wrapper"
        }, [t.slots.default?.(), p(Ot, {
          transition: e.transition
        }, {
          default: () => [qe(_("span", U({
            class: ["v-badge__badge", s.value, n.value, l.value, i.value],
            style: [a.value, r.value, c.value, e.inline ? {} : u.value],
            "aria-atomic": "true",
            "aria-label": o(e.label, d),
            "aria-live": "polite",
            role: "status"
          }, v), [e.dot ? void 0 : t.slots.badge ? t.slots.badge?.() : e.icon ? p(He, {
            icon: e.icon
          }, null) : f]), [[xn, e.modelValue]])]
        })])]
      });
    }), {};
  }
}), bC = R({
  color: String,
  density: String,
  ...Se()
}, "VBannerActions"), mh = Q()({
  name: "VBannerActions",
  props: bC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lt({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), te(() => _("div", {
      class: ee(["v-banner-actions", e.class]),
      style: ve(e.style)
    }, [n.default?.()])), {};
  }
}), gh = ea("v-banner-text"), SC = R({
  avatar: String,
  bgColor: String,
  color: String,
  icon: xe,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...Et(),
  ...Se(),
  ...it(),
  ...dt(),
  ...tl({
    mobile: null
  }),
  ...vt(),
  ...la(),
  ...Ol(),
  ...Je(),
  ...Ae(),
  ...Ne()
}, "VBanner"), kC = Q()({
  name: "VBanner",
  props: SC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = ze(() => e.bgColor), {
      borderClasses: o
    } = Nt(e), {
      densityClasses: i
    } = Mt(e), {
      displayClasses: r,
      mobile: s
    } = ln(e), {
      dimensionStyles: u
    } = ft(e), {
      elevationClasses: c
    } = bt(e), {
      locationStyles: d
    } = rl(e), {
      positionClasses: f
    } = $l(e), {
      roundedClasses: v
    } = et(e), {
      themeClasses: k
    } = We(e), m = /* @__PURE__ */ E(() => e.color), y = /* @__PURE__ */ E(() => e.density);
    lt({
      VBannerActions: {
        color: m,
        density: y
      }
    }), te(() => {
      const h = !!(e.text || n.text), x = !!(e.avatar || e.icon), w = !!(x || n.prepend);
      return p(e.tag, {
        class: ee(["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, k.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]),
        style: ve([l.value, u.value, d.value, e.style]),
        role: "banner"
      }, {
        default: () => [w && _("div", {
          key: "prepend",
          class: "v-banner__prepend"
        }, [n.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !x,
          defaults: {
            VAvatar: {
              color: m.value,
              density: y.value,
              icon: e.icon,
              image: e.avatar
            }
          }
        }, n.prepend) : p(an, {
          key: "prepend-avatar",
          color: m.value,
          density: y.value,
          icon: e.icon,
          image: e.avatar
        }, null)]), _("div", {
          class: "v-banner__content"
        }, [h && p(gh, {
          key: "text"
        }, {
          default: () => [n.text?.() ?? e.text]
        }), n.default?.()]), n.actions && p(mh, {
          key: "actions"
        }, n.actions)]
      });
    });
  }
}), wC = R({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...Et(),
  ...Se(),
  ...it(),
  ...vt(),
  ...Je(),
  ...nl({
    name: "bottom-navigation"
  }),
  ...Ae({
    tag: "header"
  }),
  ...ol({
    selectedClass: "v-btn--selected"
  }),
  ...Ne()
}, "VBottomNavigation"), pC = Q()({
  name: "VBottomNavigation",
  props: wC(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = lr(), {
      borderClasses: l
    } = Nt(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = ze(() => e.bgColor), {
      densityClasses: r
    } = Mt(e), {
      elevationClasses: s
    } = bt(e), {
      roundedClasses: u
    } = et(e), {
      ssrBootStyles: c
    } = ll(), d = V(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = pe(e, "active", e.active), {
      layoutItemStyles: v
    } = al({
      id: e.name,
      order: V(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => "bottom"),
      layoutSize: /* @__PURE__ */ E(() => f.value ? d.value : 0),
      elementSize: d,
      active: f,
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return Ca(e, Ku), lt({
      VBtn: {
        baseColor: /* @__PURE__ */ E(() => e.baseColor),
        color: /* @__PURE__ */ E(() => e.color),
        density: /* @__PURE__ */ E(() => e.density),
        stacked: /* @__PURE__ */ E(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), te(() => p(e.tag, {
      class: ee(["v-bottom-navigation", {
        "v-bottom-navigation--active": f.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]),
      style: ve([i.value, v.value, {
        height: de(d.value)
      }, c.value, e.style])
    }, {
      default: () => [n.default && _("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
}), hh = R({
  fullscreen: Boolean,
  scrollable: Boolean,
  ...Be(Go({
    captureFocus: !0,
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: or
    },
    zIndex: 2400,
    retainFocus: !0
  }), ["disableInitialFocus"])
}, "VDialog"), Ls = Q()({
  name: "VDialog",
  props: hh(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = pe(e, "modelValue"), {
      scopeId: o
    } = sl(), i = /* @__PURE__ */ ae();
    function r() {
      n("afterEnter"), (e.scrim || e.retainFocus) && i.value?.contentEl && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function s() {
      n("afterLeave");
    }
    return ue(l, async (u) => {
      u || (await Te(), i.value.activatorEl?.focus({
        preventScroll: !0
      }));
    }), te(() => {
      const u = En.filterProps(e), c = U({
        "aria-haspopup": "dialog"
      }, e.activatorProps), d = U({
        tabindex: -1
      }, e.contentProps);
      return p(En, U({
        ref: i,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, u, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        "aria-modal": "true",
        activatorProps: c,
        contentProps: d,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: r,
        onAfterLeave: s
      }, o), {
        activator: a.activator,
        default: function() {
          for (var f = arguments.length, v = new Array(f), k = 0; k < f; k++)
            v[k] = arguments[k];
          return p(Ee, {
            root: "VDialog"
          }, {
            default: () => [a.default?.(...v)]
          });
        }
      });
    }), St({}, i);
  }
}), xC = R({
  inset: Boolean,
  ...hh({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), CC = Q()({
  name: "VBottomSheet",
  props: xC(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue");
    return te(() => {
      const l = Ls.filterProps(e);
      return p(Ls, U(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (o) => a.value = o,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), n);
    }), {};
  }
}), _C = R({
  divider: [Number, String],
  ...Se()
}, "VBreadcrumbsDivider"), yh = Q()({
  name: "VBreadcrumbsDivider",
  props: _C(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => _("li", {
      "aria-hidden": "true",
      class: ee(["v-breadcrumbs-divider", e.class]),
      style: ve(e.style)
    }, [n?.default?.() ?? e.divider])), {};
  }
}), VC = R({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...Se(),
  ...jt(dt(), ["width", "maxWidth"]),
  ...Yo(),
  ...Ae({
    tag: "li"
  })
}, "VBreadcrumbsItem"), bh = Q()({
  name: "VBreadcrumbsItem",
  props: VC(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = jo(e, a), o = V(() => e.active || l.isActive?.value), {
      dimensionStyles: i
    } = ft(e), {
      textColorClasses: r,
      textColorStyles: s
    } = Ct(() => o.value ? e.activeColor : e.color);
    return te(() => p(e.tag, {
      class: ee(["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": o.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: o.value && e.activeClass
      }, r.value, e.class]),
      style: ve([s.value, i.value, e.style]),
      "aria-current": o.value ? "page" : void 0
    }, {
      default: () => [l.isLink.value ? _("a", U({
        class: "v-breadcrumbs-item--link",
        onClick: l.navigate
      }, l.linkProps), [n.default?.() ?? e.title]) : n.default?.() ?? e.title]
    })), {};
  }
}), IC = R({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: xe,
  items: {
    type: Array,
    default: () => []
  },
  ...Se(),
  ...it(),
  ...Je(),
  ...Ae({
    tag: "ul"
  })
}, "VBreadcrumbs"), PC = Q()({
  name: "VBreadcrumbs",
  props: IC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = ze(() => e.bgColor), {
      densityClasses: o
    } = Mt(e), {
      roundedClasses: i
    } = et(e);
    lt({
      VBreadcrumbsDivider: {
        divider: /* @__PURE__ */ E(() => e.divider)
      },
      VBreadcrumbsItem: {
        activeClass: /* @__PURE__ */ E(() => e.activeClass),
        activeColor: /* @__PURE__ */ E(() => e.activeColor),
        color: /* @__PURE__ */ E(() => e.color),
        disabled: /* @__PURE__ */ E(() => e.disabled)
      }
    });
    const r = V(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return te(() => {
      const s = !!(n.prepend || e.icon);
      return p(e.tag, {
        class: ee(["v-breadcrumbs", a.value, o.value, i.value, e.class]),
        style: ve([l.value, e.style])
      }, {
        default: () => [s && _("li", {
          key: "prepend",
          class: "v-breadcrumbs__prepend"
        }, [n.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !e.icon,
          defaults: {
            VIcon: {
              icon: e.icon,
              start: !0
            }
          }
        }, n.prepend) : p(He, {
          key: "prepend-icon",
          start: !0,
          icon: e.icon
        }, null)]), r.value.map((u, c, d) => {
          let {
            item: f,
            raw: v
          } = u;
          return _(ye, null, [n.item?.({
            item: f,
            index: c
          }) ?? p(bh, U({
            key: c,
            disabled: c >= d.length - 1
          }, typeof f == "string" ? {
            title: f
          } : f), {
            default: n.title ? () => n.title?.({
              item: f,
              index: c
            }) : void 0
          }), c < d.length - 1 && p(yh, null, {
            default: n.divider ? () => n.divider?.({
              item: v,
              index: c
            }) : void 0
          })]);
        }), n.default?.()]
      });
    }), {};
  }
}), TC = R({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  activeIcon: [String, Function, Object],
  activeVariant: String,
  baseVariant: {
    type: String,
    default: "tonal"
  },
  disabled: Boolean,
  height: [Number, String],
  width: [Number, String],
  hideOverlay: Boolean,
  icon: [String, Function, Object],
  iconColor: String,
  loading: Boolean,
  opacity: [Number, String],
  readonly: Boolean,
  rotate: [Number, String],
  size: {
    type: [Number, String],
    default: "default"
  },
  sizes: {
    type: Array,
    default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]]
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Et(),
  ...Se(),
  ...vt(),
  ...wg(),
  ...Je(),
  ...Ae({
    tag: "button"
  }),
  ...Ne(),
  ...rn({
    variant: "flat"
  })
}, "VIconBtn"), Sh = Q()({
  name: "VIconBtn",
  props: TC(),
  emits: {
    "update:active": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = pe(e, "active"), {
      themeClasses: o
    } = We(e), {
      borderClasses: i
    } = Nt(e), {
      elevationClasses: r
    } = bt(e), {
      roundedClasses: s
    } = et(e), {
      colorClasses: u,
      colorStyles: c,
      variantClasses: d
    } = aa(() => ({
      color: (() => {
        if (!e.disabled)
          return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
      })(),
      variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant
    })), f = new Map(e.sizes);
    function v() {
      e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
    }
    return te(() => {
      const k = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, x = e.height ?? h, w = e.width ?? h, {
        iconSize: b
      } = pg(e, () => new Map(e.iconSizes).get(m)), S = {
        icon: k,
        size: b.value,
        color: e.iconColor,
        opacity: e.opacity
      };
      return p(e.tag, {
        type: e.tag === "button" ? "button" : void 0,
        class: ee([{
          "v-icon-btn": !0,
          "v-icon-btn--active": l.value,
          "v-icon-btn--disabled": e.disabled,
          "v-icon-btn--loading": e.loading,
          "v-icon-btn--readonly": e.readonly,
          [`v-icon-btn--${e.size}`]: !0
        }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]),
        style: ve([{
          "--v-icon-btn-rotate": de(e.rotate, "deg"),
          "--v-icon-btn-height": de(x),
          "--v-icon-btn-width": de(w)
        }, c.value, e.style]),
        tabindex: e.disabled || e.readonly ? -1 : 0,
        onClick: v
      }, {
        default: () => [na(!e.hideOverlay, "v-icon-btn"), _("div", {
          class: "v-icon-btn__content",
          "data-no-activator": ""
        }, [!a.default && k ? p(He, U({
          key: "content-icon"
        }, S), null) : p(Ee, {
          key: "content-defaults",
          disabled: !k,
          defaults: {
            VIcon: {
              ...S
            }
          }
        }, {
          default: () => a.default?.() ?? Tn(e.text)
        })]), !!e.loading && _("span", {
          key: "loader",
          class: "v-icon-btn__loader"
        }, [a.loader?.() ?? p(Sa, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: "disable-shrink",
          width: "2",
          size: b.value
        }, null)])]
      });
    }), {};
  }
});
function AC(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const kh = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, wh = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, DC = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], EC = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], MC = 28, BC = 31, dc = 12, ph = 1, vr = 1, va = 7, Sf = 60, FC = 59, LC = 1440, OC = 24, $C = 23, NC = 0, RC = 1e4, HC = 100, WC = 100, zC = 1e4;
function jC(e, t, n) {
  const a = Gt(e);
  return Ph(a, t[0], Ih), yn(a), n && Ka(a, n, a.hasTime), a;
}
function YC(e, t, n) {
  const a = Gt(e);
  return Ph(a, t[t.length - 1]), yn(a), n && Ka(a, n, a.hasTime), a;
}
function xh(e) {
  const t = Gt(e);
  return t.day = vr, mr(t), yn(t), t;
}
function Ch(e) {
  const t = Gt(e);
  return t.day = vc(t.year, t.month), mr(t), yn(t), t;
}
function hl(e) {
  return isFinite(parseInt(e));
}
function UC(e) {
  return typeof e == "number" && isFinite(e) || !!wh.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function kf(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    const t = wh.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : !1;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? !1 : e.hour * 60 + e.minute : !1;
}
function xl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!kh.exec(e) || e instanceof Date;
}
function Un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = fc(e);
    return n && Ka(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t)
      throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = kh.exec(e);
  if (!a) {
    if (t)
      throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = {
    date: e,
    time: "",
    year: parseInt(a[1]),
    month: parseInt(a[2]),
    day: parseInt(a[4]) || 1,
    hour: parseInt(a[6]) || 0,
    minute: parseInt(a[8]) || 0,
    weekday: 0,
    hasDay: !!a[4],
    hasTime: !!(a[6] && a[8]),
    past: !1,
    present: !1,
    future: !1
  };
  return mr(l), yn(l), n && Ka(l, n, l.hasTime), l;
}
function fc(e) {
  return yn({
    date: "",
    time: "",
    year: e.getFullYear(),
    month: e.getMonth() + 1,
    day: e.getDate(),
    weekday: e.getDay(),
    hour: e.getHours(),
    minute: e.getMinutes(),
    hasDay: !0,
    hasTime: !0,
    past: !1,
    present: !0,
    future: !1
  });
}
function ht(e) {
  return e.year * RC + e.month * HC + e.day;
}
function Os(e) {
  return e.hour * WC + e.minute;
}
function pa(e) {
  return ht(e) * zC + Os(e);
}
function Ka(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = ht(t), l = ht(e), o = a === l;
  return e.hasTime && n && o && (a = Os(t), l = Os(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function wf(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function pf(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = $C, e.minute = FC, e.time = Vh(e))), e;
}
function _h(e, t, n) {
  return e.hasTime = !0, e.hour = 0, e.minute = 0, $s(e, t), yn(e), n && Ka(e, n, !0), e;
}
function mr(e) {
  return e.weekday = KC(e), e;
}
function yn(e) {
  return e.time = Vh(e), e.date = GC(e), e;
}
function KC(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % dc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function vc(e, t) {
  return AC(e) ? EC[t] : DC[t];
}
function Gt(e) {
  if (e == null) return null;
  const {
    date: t,
    time: n,
    year: a,
    month: l,
    day: o,
    weekday: i,
    hour: r,
    minute: s,
    hasDay: u,
    hasTime: c,
    past: d,
    present: f,
    future: v
  } = e;
  return {
    date: t,
    time: n,
    year: a,
    month: l,
    day: o,
    weekday: i,
    hour: r,
    minute: s,
    hasDay: u,
    hasTime: c,
    past: d,
    present: f,
    future: v
  };
}
function Ha(e, t) {
  let n = String(e);
  for (; n.length < t; )
    n = "0" + n;
  return n;
}
function GC(e) {
  let t = `${Ha(e.year, 4)}-${Ha(e.month, 2)}`;
  return e.hasDay && (t += `-${Ha(e.day, 2)}`), t;
}
function Vh(e) {
  return e.hasTime ? `${Ha(e.hour, 2)}:${Ha(e.minute, 2)}` : "";
}
function $s(e, t) {
  for (e.minute += t; e.minute >= Sf; )
    e.minute -= Sf, e.hour++, e.hour >= OC && (ma(e), e.hour = NC);
  return e;
}
function ma(e) {
  return e.day++, e.weekday = (e.weekday + 1) % va, e.day > MC && e.day > vc(e.year, e.month) && (e.day = vr, e.month++, e.month > dc && (e.month = ph, e.year++)), e;
}
function Ih(e) {
  return e.day--, e.weekday = (e.weekday + 6) % va, e.day < vr && (e.month--, e.month < ph && (e.year--, e.month = dc), e.day = vc(e.year, e.month)), e;
}
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ma, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function qC(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Ph(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ma, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function XC(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++)
    n[e[a]] = 1;
  for (let a = 0; a < va; a++) {
    let l = 1;
    for (let o = 1; o < va; o++) {
      const i = (a + o) % va;
      if (n[i])
        break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function Ns(e) {
  const t = `${Ha(e.hour, 2)}:${Ha(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Oi(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = ht(t), r = [];
  let s = Gt(e), u = 0, c = u === i;
  if (i < ht(e))
    throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = ht(s), c = c || u === i, a[s.weekday] === 0) {
      s = ma(s);
      continue;
    }
    const d = Gt(s);
    yn(d), Ka(d, n), r.push(d), s = Ea(s, ma, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function ZC(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = Gt(e);
    o.push(_h(s, r, l));
  }
  return o;
}
function ro(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(Ns(a));
    } catch {
      return "";
    }
  };
}
function JC(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > va || t.length === 0)
      return !1;
    const n = {};
    let a = !1;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= va)
        return !1;
      if (l > 0) {
        const i = o - t[l - 1];
        if (i < 0) {
          if (a)
            return !1;
          a = !0;
        } else if (i === 0)
          return !1;
      }
      if (n[o])
        return !1;
      n[o] = !0;
    }
    return !0;
  }
  return !1;
}
function QC(e) {
  const t = /* @__PURE__ */ pt({
    now: Un("0000-00-00 00:00", !0),
    today: Un("0000-00-00", !0)
  }), n = V(() => e.now && xl(e.now) ? Un(e.now, !0) : null);
  function a() {
    t.now.present = t.today.present = !0, t.now.past = t.today.past = !1, t.now.future = t.today.future = !1;
  }
  function l() {
    return fc(/* @__PURE__ */ new Date());
  }
  function o(s, u) {
    s.date !== u.date && (u.year = s.year, u.month = s.month, u.day = s.day, u.weekday = s.weekday, u.date = s.date);
  }
  function i(s, u) {
    s.time !== u.time && (u.hour = s.hour, u.minute = s.minute, u.time = s.time);
  }
  function r() {
    const s = n.value || l();
    o(s, t.now), i(s, t.now), o(s, t.today);
  }
  return ue(n, r), r(), a(), {
    times: t,
    parsedNow: n,
    updateTimes: r,
    setPresent: a,
    getNow: l,
    updateDay: o,
    updateTime: i
  };
}
const gr = R({
  start: {
    type: [String, Number, Date],
    validate: xl,
    default: () => fc(/* @__PURE__ */ new Date()).date
  },
  end: {
    type: [String, Number, Date],
    validate: xl
  },
  weekdays: {
    type: [Array, String],
    default: () => [0, 1, 2, 3, 4, 5, 6],
    validate: JC
  },
  firstDayOfWeek: [Number, String],
  firstDayOfYear: [Number, String],
  weekdayFormat: {
    type: Function,
    default: null
  },
  dayFormat: {
    type: Function,
    default: null
  },
  locale: String,
  now: {
    type: String,
    validator: xl
  },
  type: {
    type: String,
    default: "month"
  }
}, "VCalendar-base");
function mc(e) {
  const {
    times: t,
    updateTimes: n
  } = QC({
    now: e.now
  }), a = Hm(e), l = el(), o = V(() => e.type === "month" ? xh(Un(e.start, !0)) : Un(e.start, !0)), i = V(() => {
    const b = o.value, S = e.end && Un(e.end) || b, g = pa(S) < pa(b) ? b : S;
    return e.type === "month" ? Ch(g) : g;
  }), r = V(() => xl(e.modelValue) ? Un(e.modelValue, !0) : o.value || t.today), s = V(() => {
    const b = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), S = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...b.toSorted().filter((g) => g >= S), ...b.toSorted().filter((g) => g < S)];
  }), u = V(() => {
    const b = r.value, S = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [b.weekday];
      case "4day":
        return [b.weekday, (b.weekday + 1) % 7, (b.weekday + 2) % 7, (b.weekday + 3) % 7];
      case "category":
        return Array.from({
          length: S
        }, (g, I) => (b.weekday + I) % 7);
      default:
        return s.value;
    }
  }), c = V(() => XC(s.value)), d = V(() => Oi(o.value, i.value, t.today, c.value)), f = V(() => e.dayFormat ? e.dayFormat : ro(a.current.value, () => ({
    timeZone: "UTC",
    day: "numeric"
  }))), v = V(() => e.weekdayFormat ? e.weekdayFormat : ro(a.current.value, (b, S) => ({
    timeZone: "UTC",
    weekday: S ? "short" : "long"
  })));
  function k(b) {
    return ig(b);
  }
  function m(b) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      "v-present": b.present,
      "v-past": b.past,
      "v-future": b.future,
      "v-outside": S
    };
  }
  function y(b) {
    return l.getWeek(l.date(b.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(b) {
    return jC(b, s.value, t.today);
  }
  function x(b) {
    return YC(b, s.value, t.today);
  }
  function w(b) {
    return ro(a.current.value, () => b);
  }
  return {
    times: t,
    locale: a,
    parsedValue: r,
    parsedWeekdays: s,
    effectiveWeekdays: u,
    weekdaySkips: c,
    parsedStart: o,
    parsedEnd: i,
    days: d,
    dayFormatter: f,
    weekdayFormatter: v,
    getColorProps: k,
    getRelativeClasses: m,
    getWeekNumber: y,
    getStartOfWeek: h,
    getEndOfWeek: x,
    getFormatter: w,
    updateTimes: n
  };
}
const Th = R({
  maxDays: {
    type: Number,
    default: 7
  },
  intervalHeight: {
    type: [Number, String],
    default: 48,
    validate: hl
  },
  intervalWidth: {
    type: [Number, String],
    default: 60,
    validate: hl
  },
  intervalMinutes: {
    type: [Number, String],
    default: 60,
    validate: hl
  },
  firstInterval: {
    type: [Number, String],
    default: 0,
    validate: hl
  },
  firstTime: {
    type: [Number, String, Object],
    validate: UC
  },
  intervalCount: {
    type: [Number, String],
    default: 24,
    validate: hl
  },
  intervalFormat: {
    type: Function,
    default: null
  },
  intervalStyle: {
    type: Function,
    default: null
  },
  showIntervalLabel: {
    type: Function,
    default: null
  }
}, "VCalendar-intervals");
function Ah(e) {
  const t = mc(e), n = /* @__PURE__ */ se(), a = V(() => parseInt(String(e.firstInterval || 0))), l = V(() => parseInt(String(e.intervalMinutes || 60))), o = V(() => parseInt(String(e.intervalCount || 24))), i = V(() => parseFloat(String(e.intervalHeight || 48))), r = V(() => kf(e.firstTime)), s = V(() => {
    const S = r.value;
    return S !== !1 && S >= 0 && S <= LC ? S : a.value * l.value;
  }), u = V(() => o.value * i.value), c = V(() => Oi(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = V(() => {
    const S = c.value, g = s.value, I = l.value, C = o.value, T = t.times.now;
    return S.map((P) => ZC(P, g, I, C, T));
  }), f = V(() => e.intervalFormat ? e.intervalFormat : ro(t.locale.current.value, (S, g) => g ? S.minute === 0 ? {
    timeZone: "UTC",
    hour: "numeric"
  } : {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit"
  } : {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit"
  }));
  function v(S) {
    const g = d.value[0][0];
    return !(g.hour === S.hour && g.minute === S.minute);
  }
  function k(S) {
  }
  function m(S, g) {
    const I = Gt(g), C = S.currentTarget.getBoundingClientRect(), T = s.value, P = S, F = S, A = P.changedTouches || P.touches, D = ((A && A[0] ? A[0].clientY : F.clientY) - C.top) / i.value, L = Math.floor(D * l.value), W = T + L;
    return _h(I, W, t.times.now);
  }
  function y(S) {
    const g = Gt(S);
    return g.timeToY = w, g.timeDelta = b, g.minutesToPixels = x, g.week = c.value, g.intervalRange = [s.value, s.value + o.value * l.value], g;
  }
  function h(S) {
    const g = w(S), I = n.value;
    return g === !1 || !I ? !1 : (I.scrollTop = g, !0);
  }
  function x(S) {
    return S / l.value * i.value;
  }
  function w(S) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const I = g !== !1;
    let T = b(S, typeof g != "boolean" ? g : void 0);
    return T === !1 || (T *= u.value, I ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function b(S, g) {
    let I = kf(S);
    if (I === !1)
      return !1;
    const C = o.value * l.value;
    if (g && typeof S == "object" && "day" in S) {
      const P = ht(S), F = ht(g);
      I += (P - F) * C;
    }
    const T = s.value;
    return (I - T) / C;
  }
  return {
    ...t,
    scrollAreaRef: n,
    parsedFirstInterval: a,
    parsedIntervalMinutes: l,
    parsedIntervalCount: o,
    parsedIntervalHeight: i,
    parsedFirstTime: r,
    firstMinute: s,
    bodyHeight: u,
    days: c,
    intervals: d,
    intervalFormatter: f,
    showIntervalLabelDefault: v,
    intervalStyleDefault: k,
    getTimestampAtEvent: m,
    getSlotScope: y,
    scrollToTime: h,
    minutesToPixels: x,
    timeToY: w,
    timeDelta: b
  };
}
function e_(e, t) {
  const n = t.value, a = {
    passive: !t.modifiers?.active
  };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = {
    handler: n,
    options: a
  }, t.modifiers?.quiet || n();
}
function t_(e, t) {
  if (!e._onResize?.[t.instance.$.uid]) return;
  const {
    handler: n,
    options: a
  } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Po = {
  mounted: e_,
  unmounted: t_
}, Zl = $t({
  name: "VCalendarDaily",
  directives: {
    vResize: Po
  },
  props: {
    color: String,
    shortWeekdays: {
      type: Boolean,
      default: !0
    },
    shortIntervals: {
      type: Boolean,
      default: !0
    },
    hideHeader: Boolean,
    ...gr(),
    ...Th()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = /* @__PURE__ */ ae(0), o = /* @__PURE__ */ ae(), i = Ah(e);
    function r() {
      Te(s);
    }
    function s() {
      l.value = u();
    }
    function u() {
      return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
    }
    function c() {
      return _("div", {
        class: "v-calendar-daily__head",
        style: {
          marginRight: l.value + "px"
        }
      }, [d(), f()]);
    }
    function d() {
      const B = de(e.intervalWidth);
      return _("div", {
        class: "v-calendar-daily__intervals-head",
        style: {
          width: B
        }
      }, [n["interval-header"]?.()]);
    }
    function f() {
      return i.days.value.map(v);
    }
    function v(B, D) {
      const L = tn(a, ":day", (W) => ({
        nativeEvent: W,
        ...i.getSlotScope(B)
      }));
      return _("div", U({
        key: B.date,
        class: ["v-calendar-daily_head-day", i.getRelativeClasses(B)]
      }, L), [m(B), y(B), k(B, D)]);
    }
    function k(B, D) {
      return n["day-header"]?.({
        week: i.days.value,
        ...B,
        index: D
      }) ?? [];
    }
    function m(B) {
      const D = B.present ? e.color : void 0;
      return _("div", U(i.getColorProps({
        text: D
      }), {
        class: "v-calendar-daily_head-weekday"
      }), [i.weekdayFormatter.value(B, e.shortWeekdays)]);
    }
    function y(B) {
      return _("div", {
        class: "v-calendar-daily_head-day-label"
      }, [n["day-label-header"]?.(B) ?? h(B)]);
    }
    function h(B) {
      const D = tn(a, ":date", (L) => ({
        nativeEvent: L,
        ...B
      }));
      return p(Sh, U({
        active: B.present,
        activeColor: e.color,
        variant: "outlined",
        baseVariant: "text",
        "onUpdate:active": Qi
      }, D), {
        default: () => [i.dayFormatter.value(B, !1)]
      });
    }
    function x() {
      return _("div", {
        class: "v-calendar-daily__body"
      }, [w()]);
    }
    function w() {
      return _("div", {
        ref: i.scrollAreaRef,
        class: "v-calendar-daily__scroll-area"
      }, [b()]);
    }
    function b() {
      return _("div", {
        ref: o,
        class: "v-calendar-daily__pane",
        style: {
          height: de(i.bodyHeight.value)
        }
      }, [S()]);
    }
    function S() {
      return _("div", {
        class: "v-calendar-daily__day-container"
      }, [P(), n.days?.() ?? g()]);
    }
    function g() {
      return i.days.value.map((B, D) => {
        const L = tn(a, ":time", (W) => ({
          nativeEvent: W,
          ...i.getSlotScope(i.getTimestampAtEvent(W, B))
        }));
        return _("div", U({
          key: B.date,
          class: ["v-calendar-daily__day", i.getRelativeClasses(B)]
        }, L), [C(D), I(B)]);
      });
    }
    function I(B) {
      return n["day-body"]?.(i.getSlotScope(B)) ?? [];
    }
    function C(B) {
      return i.intervals.value[B].map(T);
    }
    function T(B) {
      const D = de(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
      return _("div", {
        class: "v-calendar-daily__day-interval",
        key: B.time,
        style: ve([{
          height: D
        }, L(B)])
      }, [n.interval?.(i.getSlotScope(B))]);
    }
    function P() {
      const B = de(e.intervalWidth), D = tn(a, ":interval", (L) => ({
        nativeEvent: L,
        ...i.getTimestampAtEvent(L, i.parsedStart.value)
      }));
      return _("div", U({
        class: "v-calendar-daily__intervals-body",
        style: {
          width: B
        }
      }, D), [F()]);
    }
    function F() {
      return i.intervals.value.length ? i.intervals.value[0].map(A) : null;
    }
    function A(B) {
      const D = de(e.intervalHeight), L = e.shortIntervals, J = (e.showIntervalLabel || i.showIntervalLabelDefault)(B) ? i.intervalFormatter.value(B, L) : void 0;
      return _("div", {
        key: B.time,
        class: "v-calendar-daily__interval",
        style: {
          height: D
        }
      }, [_("div", {
        class: "v-calendar-daily__interval-text"
      }, [J])]);
    }
    return yt(r), te(() => qe(_("div", {
      class: ee(["v-calendar-daily", a.class]),
      onDragstart: (B) => B.preventDefault()
    }, [e.hideHeader ? void 0 : c(), x()]), [[Po, s, void 0, {
      quiet: !0
    }]])), {
      ...i,
      scrollPush: l,
      pane: o,
      init: r,
      onResize: s,
      getScrollPush: u
    };
  }
});
function n_(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function Dh(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : n_(n, t);
    return {
      ...n,
      categoryName: a
    };
  }) : [];
}
const a_ = $t({
  name: "VCalendarCategory",
  props: {
    categories: {
      type: [Array, String],
      default: ""
    },
    categoryText: [String, Function],
    categoryForInvalid: {
      type: String,
      default: ""
    },
    ...gr(),
    ...Th()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = Ah(e), o = V(() => Dh(e.categories, e.categoryText));
    function i(y, h) {
      const x = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
      return {
        ...y,
        category: x
      };
    }
    function r(y) {
      return _("div", {
        class: "v-calendar-category__columns"
      }, [o.value.map((h) => s(y, i(y, h)))]);
    }
    function s(y, h) {
      const x = typeof h.category == "object" ? h.category.categoryName : h.category, w = tn(a, ":dayCategory", () => i(l.getSlotScope(y) || y, h.category));
      return _("div", U({
        class: "v-calendar-category__column-header"
      }, w), [n.category?.(h) ?? u(x), n["day-header"]?.(h)]);
    }
    function u(y) {
      return _("div", {
        class: "v-calendar-category__category"
      }, [y === null ? e.categoryForInvalid : y]);
    }
    function c() {
      const y = [];
      return l.days.value.forEach((h, x) => {
        const w = new Array(o.value.length || 1);
        w.fill(h), y.push(...w.map((b, S) => d(b, x, S)));
      }), y;
    }
    function d(y, h, x) {
      const w = o.value[x], b = tn(a, ":time", (S) => l.getSlotScope(l.getTimestampAtEvent(S, y)));
      return _("div", U({
        key: y.date + "-" + x,
        class: ["v-calendar-daily__day", l.getRelativeClasses(y)]
      }, b), [f(h, w), k(y, w)]);
    }
    function f(y, h) {
      return l.intervals.value[y].map((x) => v(x, h));
    }
    function v(y, h) {
      const x = de(e.intervalHeight), w = e.intervalStyle || l.intervalStyleDefault;
      return _("div", {
        key: y.time,
        class: "v-calendar-daily__day-interval",
        style: ve([{
          height: x
        }, w({
          ...y,
          category: h
        })])
      }, [n.interval?.(i(l.getSlotScope(y), h))]);
    }
    function k(y, h) {
      return _("div", {
        class: "v-calendar-category__columns"
      }, [m(y, h)]);
    }
    function m(y, h) {
      const x = tn(a, ":timeCategory", (w) => i(l.getSlotScope(l.getTimestampAtEvent(w, y)), h));
      return _("div", U({
        class: "v-calendar-category__column"
      }, x), [n["day-body"]?.(i(l.getSlotScope(y), h))]);
    }
    return te(() => p(Zl, U({
      class: ["v-calendar-daily", "v-calendar-category"]
    }, e), {
      ...n,
      days: c,
      "day-header": r
    })), {
      ...l,
      parsedCategories: o
    };
  }
}), xf = $t({
  name: "VCalendarWeekly",
  props: {
    minWeeks: {
      validate: hl,
      default: 1
    },
    monthFormat: Function,
    showWeek: Boolean,
    color: String,
    shortWeekdays: {
      type: Boolean,
      default: !0
    },
    showMonthOnFirst: {
      type: Boolean,
      default: !0
    },
    shortMonths: {
      type: Boolean,
      default: !0
    },
    hideHeader: Boolean,
    ...gr()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = mc(e), o = lr(), i = V(() => parseInt(String(e.minWeeks))), r = V(() => {
      const S = i.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), I = l.getEndOfWeek(l.parsedEnd.value);
      return Oi(g, I, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, S);
    }), s = V(() => {
      const S = l.times.today, g = l.getStartOfWeek(S), I = l.getEndOfWeek(S);
      return Oi(g, I, S, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
    }), u = V(() => e.monthFormat ? e.monthFormat : ro(l.locale.current.value, (S, g) => ({
      timeZone: "UTC",
      month: g ? "short" : "long"
    })));
    function c(S) {
      const g = ht(S);
      return g < ht(l.parsedStart.value) || g > ht(l.parsedEnd.value);
    }
    function d() {
      return _("div", {
        class: "v-calendar-weekly__head",
        role: "row"
      }, [f()]);
    }
    function f() {
      const S = s.value.map(v);
      return e.showWeek && S.unshift(_("div", {
        class: "v-calendar-weekly__head-weeknumber"
      }, null)), S;
    }
    function v(S, g) {
      const I = c(r.value[g]), C = S.present ? e.color : void 0;
      return _("div", U(l.getColorProps({
        text: C
      }), {
        key: S.date,
        class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(S, I)],
        role: "columnheader"
      }), [l.weekdayFormatter.value(S, e.shortWeekdays)]);
    }
    function k() {
      const S = r.value, g = l.parsedWeekdays.value.length, I = [];
      for (let C = 0; C < S.length; C += g)
        I.push(m(S.slice(C, C + g), y(S[C])));
      return I;
    }
    function m(S, g) {
      const I = S.map((C, T) => x(C, T, S));
      return e.showWeek && I.unshift(h(g)), _("div", {
        key: S[0].date,
        class: "v-calendar-weekly__week",
        role: "row"
      }, [I]);
    }
    function y(S) {
      return l.getWeekNumber(S);
    }
    function h(S) {
      return _("div", {
        class: "v-calendar-weekly__weeknumber"
      }, [_("small", null, [String(S)])]);
    }
    function x(S, g, I) {
      const C = c(S), T = tn(a, ":day", (P) => ({
        nativeEvent: P,
        ...S
      }));
      return _("div", U({
        key: S.date,
        class: ["v-calendar-weekly__day", l.getRelativeClasses(S, C)],
        role: "cell"
      }, T), [w(S), n.day?.({
        outside: C,
        index: g,
        week: I,
        ...S
      })]);
    }
    function w(S) {
      return _("div", {
        class: "v-calendar-weekly__day-label"
      }, [n["day-label"]?.(S) ?? b(S)]);
    }
    function b(S) {
      const g = S.day === 1 && e.showMonthOnFirst, I = tn(a, ":date", (C) => ({
        nativeEvent: C,
        ...S
      }));
      return p(Sh, U({
        active: S.present,
        activeColor: e.color,
        variant: "outlined",
        baseVariant: "text",
        "onUpdate:active": Qi
      }, I), {
        default: () => [g ? u.value(S, e.shortMonths) + " " + l.dayFormatter.value(S, !1) : l.dayFormatter.value(S, !1)]
      });
    }
    return te(() => _("div", {
      class: ee(["v-calendar-weekly", o.themeClasses.value]),
      onDragstart: (S) => S.preventDefault()
    }, [e.hideHeader ? void 0 : d(), k()])), {
      ...l,
      days: r,
      todayWeek: s,
      monthFormatter: u,
      isOutside: c
    };
  }
}), l_ = 864e5;
function Eh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({
    event: a,
    columnCount: 0,
    column: 0,
    left: 0,
    width: 100
  }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function bn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function Cf(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Mh(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Bh(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Fh(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + l_, e.endTimestampIdentifier)];
}
function o_(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = !1;
    if (bn(t, n, o.start, o.end, a))
      for (let r = 0; r < o.visuals.length; r++) {
        const s = o.visuals[r], [u, c] = a ? Mh(s.event) : Bh(s.event);
        if (bn(t, n, u, c, a)) {
          i = !0;
          break;
        }
      }
    if (!i)
      return l;
  }
  return -1;
}
function Lh(e) {
  const t = {
    groups: [],
    min: -1,
    max: -1,
    reset: () => {
      t.groups = [], t.min = t.max = -1;
    },
    getVisuals: function(n, a, l) {
      let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      (n.weekday === e || o) && t.reset();
      const i = pa(n), r = Eh(a, i);
      return r.forEach((s) => {
        const [u, c] = l ? Mh(s.event) : Bh(s.event);
        t.groups.length > 0 && !bn(u, c, t.min, t.max, l) && (Cf(t.groups), t.reset());
        let d = o_(t.groups, u, c, l);
        d === -1 && (d = t.groups.length, t.groups.push({
          start: u,
          end: c,
          visuals: []
        }));
        const f = t.groups[d];
        f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
      }), Cf(t.groups), l && t.reset(), r;
    }
  };
  return t;
}
const _f = 100, i_ = (e, t, n) => {
  const a = Lh(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * _f / u.columnCount, u.width = _f / u.columnCount;
    }), s;
  };
}, si = 100, r_ = 5, s_ = 1.7, u_ = (e, t, n) => {
  const a = Lh(t);
  return (l, o, i, r) => {
    if (!i)
      return a.getVisuals(l, o, i, r);
    const s = pa(l), u = Eh(o, s), c = h_(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const k = y_(v, s), m = v_(k, f);
        if (m === !1) {
          const y = m_(k, f);
          y && (k.parent = y, k.sibling = bn(k.start, k.end, y.start, hi(y.start, n)), k.index = y.index + 1, y.children.push(k));
        } else {
          const [y] = Vf(k, f, m - 1, m - 1), h = Vf(k, f, m + 1, m + f.length, !0);
          k.children = h, k.index = m, y && (k.parent = y, k.sibling = bn(k.start, k.end, y.start, hi(y.start, n)), y.children.push(k));
          for (const x of h)
            x.parent === y && (x.parent = k), x.index - k.index <= 1 && k.sibling && bn(k.start, hi(k.start, n), x.start, x.end) && (x.sibling = !0);
        }
        f.push(k);
      }
      c_(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function c_(e, t) {
  for (const n of e) {
    const {
      visual: a,
      parent: l
    } = n, o = Oh(n) + 1, i = l ? l.visual.left : 0, r = si - i, s = Math.min(r_, si / o), u = d_(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = g_(n, e, t) ? si - a.left : Math.min(si - a.left, d * s_);
  }
}
function d_(e, t) {
  if (!e.children.length)
    return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function f_(e, t) {
  const n = [];
  for (const a of t)
    bn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function v_(e, t) {
  const n = f_(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++)
    if (a < n[a])
      return a;
  return !1;
}
function Vf(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  const o = [];
  for (const i of t)
    i.index >= n && i.index <= a && bn(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function m_(e, t) {
  let n = null;
  for (const a of t)
    bn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function g_(e, t, n) {
  for (const a of t)
    if (a !== e && a.index > e.index && bn(e.start, hi(e.start, n), a.start, a.end))
      return !1;
  return !0;
}
function h_(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = Fh(a.event, t);
    let i = !1;
    for (const r of n)
      if (bn(l, o, r.start, r.end)) {
        r.visuals.push(a), r.end = Math.max(r.end, o), i = !0;
        break;
      }
    i || n.push({
      start: l,
      end: o,
      visuals: [a]
    });
  }
  return n;
}
function y_(e, t) {
  const [n, a] = Fh(e.event, t);
  return {
    parent: null,
    sibling: !0,
    index: 0,
    visual: e,
    start: n,
    end: a,
    children: []
  };
}
function Oh(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Oh(n);
    a > t && (t = a);
  }
  return t;
}
function hi(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const $h = {
  stack: u_,
  column: i_
};
function b_(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
  const i = e[n], r = e[a], s = Un(i, !0), u = r ? Un(r, !0) : s, c = wf(i) ? pf(s, l) : s, d = wf(r) ? pf(u, l) : u, f = ht(c), v = pa(c), k = ht(d), m = c.hasTime ? 0 : 2359, y = pa(d) + m, h = !c.hasTime;
  return {
    input: e,
    start: c,
    startIdentifier: f,
    startTimestampIdentifier: v,
    end: d,
    endIdentifier: k,
    endTimestampIdentifier: y,
    allDay: h,
    index: t,
    category: o
  };
}
function gc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function S_(e, t, n) {
  if (n) {
    const a = $s(Gt(t), n[0]), l = $s(Gt(t), n[1]), o = e.startTimestampIdentifier < pa(l), i = e.endTimestampIdentifier > pa(a);
    return o && i;
  }
  return gc(e, ht(t));
}
function k_(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function If(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && gc(e, n);
}
function w_(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const p_ = 100, x_ = 95, C_ = R({
  events: {
    type: Array,
    default: () => []
  },
  eventStart: {
    type: String,
    default: "start"
  },
  eventEnd: {
    type: String,
    default: "end"
  },
  eventTimed: {
    type: [String, Function],
    default: "timed"
  },
  eventCategory: {
    type: [String, Function],
    default: "category"
  },
  eventHeight: {
    type: Number,
    default: 20
  },
  eventColor: {
    type: [String, Function],
    default: "primary"
  },
  eventTextColor: {
    type: [String, Function]
  },
  eventName: {
    type: [String, Function],
    default: "name"
  },
  eventOverlapThreshold: {
    type: [String, Number],
    default: 60
  },
  eventOverlapMode: {
    type: [String, Function],
    default: "stack",
    validate: (e) => e in $h || typeof e == "function"
  },
  eventMore: {
    type: Boolean,
    default: !0
  },
  eventMoreText: {
    type: String,
    default: "$vuetify.calendar.moreEvents"
  },
  eventRipple: {
    type: [Boolean, Object],
    default: null
  },
  eventMarginBottom: {
    type: Number,
    default: 1
  }
}, "VCalendar-events");
function __(e, t, n) {
  const a = mc(e), l = V(() => !Array.isArray(e.events) || e.events.length === 0), o = V(() => e.type === "category"), i = V(() => typeof e.eventTimed == "function" ? e.eventTimed : (D) => !!D[e.eventTimed]), r = V(() => typeof e.eventCategory == "function" ? e.eventCategory : (D) => D[e.eventCategory]), s = V(() => e.events ? e.events.map((D, L) => b_(D, L, e.eventStart || "", e.eventEnd || "", i.value(D), o.value ? r.value(D) : !1)) : []), u = V(() => parseInt(String(e.eventOverlapThreshold || 0))), c = V(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = V(() => typeof e.eventName == "function" ? e.eventName : (D, L) => D.input[e.eventName] || ""), f = V(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : $h[e.eventOverlapMode]), v = V(() => a.effectiveWeekdays.value);
  function k(D) {
    return typeof e.eventColor == "function" ? e.eventColor(D) : D.color || e.eventColor;
  }
  const m = /* @__PURE__ */ ae([]);
  function y() {
    if (l.value || !e.eventMore)
      return;
    const D = e.eventHeight || 0, L = h();
    for (const W in L) {
      const {
        parent: N,
        events: J,
        more: q
      } = L[W];
      if (!q)
        break;
      const $ = N.getBoundingClientRect(), ne = J.length - 1, K = J.map((G) => ({
        event: G,
        bottom: G.getBoundingClientRect().bottom
      })).sort((G, X) => G.bottom - X.bottom);
      let H = 0;
      for (let G = 0; G <= ne; G++) {
        const X = K[G].bottom;
        (G === ne ? X > $.bottom : X + D > $.bottom) && (K[G].event.style.display = "none", H++);
      }
      H ? (q.style.display = "", q.innerHTML = a.locale.t(e.eventMoreText, H)) : q.style.display = "none";
    }
  }
  function h() {
    const D = {}, L = m.value;
    return !L || !L.length || L.forEach((W) => {
      const N = W.getAttribute("data-date");
      W.parentElement && N && (N in D || (D[N] = {
        parent: W.parentElement,
        more: null,
        events: []
      }), W.getAttribute("data-more") ? D[N].more = W : (D[N].events.push(W), W.style.display = ""));
    }), D;
  }
  function x(D, L) {
    let {
      event: W
    } = D;
    const N = e.eventHeight || 0, J = e.eventMarginBottom || 0, q = ht(L), $ = L.week, ne = q === W.startIdentifier;
    let K = q === W.endIdentifier, H = x_;
    if (!o.value)
      for (let X = L.index + 1; X < $.length; X++) {
        const fe = ht($[X]);
        if (W.endIdentifier >= fe)
          H += p_, K = K || fe === W.endIdentifier;
        else {
          K = !0;
          break;
        }
      }
    return b(W, {
      eventParsed: W,
      day: L,
      start: ne,
      end: K,
      timed: !1
    }, !1, {
      class: ["v-event", {
        "v-event-start": ne,
        "v-event-end": K
      }],
      style: {
        height: `${N}px`,
        width: `${H}%`,
        marginBottom: `${J}px`
      },
      "data-date": L.date
    });
  }
  function w(D, L) {
    let {
      event: W,
      left: N,
      width: J
    } = D;
    const q = L.timeDelta(W.start, L), $ = L.timeDelta(W.end, L);
    if ($ === !1 || q === !1 || $ < 0 || q >= 1 || k_(W, L))
      return !1;
    const ne = ht(L), K = W.startIdentifier >= ne, H = W.endIdentifier > ne, G = L.timeToY(W.start, L), X = L.timeToY(W.end, L), fe = Math.max(e.eventHeight || 0, X - G);
    return b(W, {
      eventParsed: W,
      day: L,
      start: K,
      end: H,
      timed: !0
    }, !0, {
      class: "v-event-timed",
      style: {
        top: `${G}px`,
        height: `${fe}px`,
        left: `${N}%`,
        width: `${J}%`
      }
    });
  }
  function b(D, L, W, N) {
    const J = t.event, q = c.value(D.input), $ = k(D.input), ne = D.start.hour < 12 && D.end.hour >= 12, K = qC(D.start, D.end) <= u.value, H = (ce, Ce) => a.getFormatter({
      timeZone: "UTC",
      hour: "numeric",
      minute: ce.minute > 0 ? "numeric" : void 0
    })(ce, !0), G = () => H(D.start) + " - " + H(D.end), X = () => {
      const ce = d.value(D, W);
      if (D.start.hasTime)
        if (W) {
          const Ce = G(), Ve = K ? ", " : _("br", null, null);
          return _("span", {
            class: "v-event-summary"
          }, [_("strong", null, [ce]), Ve, Ce]);
        } else {
          const Ce = H(D.start);
          return _("span", {
            class: "v-event-summary"
          }, [_("strong", null, [Ce]), qt(" "), ce]);
        }
      return _("span", {
        class: "v-event-summary"
      }, [ce]);
    }, fe = {
      ...L,
      event: D.input,
      outside: L.day.outside,
      singline: K,
      overlapsNoon: ne,
      formatTime: H,
      timeSummary: G,
      eventSummary: X
    }, Z = tn(n, ":event", (ce) => ({
      ...fe,
      nativeEvent: ce
    }));
    return qe(_("div", U(a.getColorProps({
      text: q,
      background: $
    }), Z, N, {
      ref_for: !0,
      ref: m
    }), [J?.(fe) ?? S(X)]), [[Vt, e.eventRipple ?? !0]]);
  }
  function S(D) {
    return _("div", {
      class: "pl-1"
    }, [D()]);
  }
  function g(D) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return _("div", {
      style: {
        height: `${L}px`
      },
      "data-date": D.date,
      ref_for: !0,
      ref: m
    }, null);
  }
  function I(D) {
    const L = e.eventHeight || 0, W = e.eventMarginBottom || 0, N = tn(n, ":more", (J) => ({
      nativeEvent: J,
      ...D
    }));
    return qe(_("div", U({
      class: ["v-event-more pl-1", {
        "v-outside": D.outside
      }],
      "data-date": D.date,
      "data-more": "1",
      style: {
        display: "none",
        height: `${L}px`,
        marginBottom: `${W}px`
      },
      ref_for: !0,
      ref: m
    }, N), null), [[Vt, e.eventRipple ?? !0]]);
  }
  function C() {
    const D = a.days.value, L = ht(D[0]), W = ht(D[D.length - 1]);
    return s.value.filter((N) => w_(N, L, W));
  }
  function T(D, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === D.category || typeof D.category == "string" && L === D.category || typeof D.category != "string" && L === null;
  }
  function P(D) {
    const L = ht(D), W = v.value[0];
    return s.value.filter((N) => If(N, D, L, W));
  }
  function F(D) {
    const L = ht(D), W = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? gc(N, L) : If(N, D, L, W)) && T(N, D.category));
  }
  function A(D) {
    return s.value.filter((L) => !L.allDay && S_(L, D, D.intervalRange) && T(L, D.category));
  }
  function B() {
    if (l.value)
      return {
        ...t
      };
    const D = f.value(s.value, v.value[0], u.value), L = (N) => !!N, W = (N, J, q, $) => {
      const ne = J(N), K = D(N, ne, $, o.value);
      if ($)
        return K.map((G) => q(G, N)).filter(L);
      const H = [];
      return K.forEach((G, X) => {
        for (; H.length < G.column; )
          H.push(g(N));
        const fe = q(G, N);
        fe && H.push(fe);
      }), H;
    };
    return {
      ...t,
      day: (N) => {
        let J = W(N, P, x, !1);
        if (J && J.length > 0 && e.eventMore && J.push(I(N)), t.day) {
          const q = t.day(N);
          q && (J = J ? J.concat(q) : q);
        }
        return J;
      },
      "day-header": (N) => {
        let J = W(N, F, x, !1);
        if (t["day-header"]) {
          const q = t["day-header"](N);
          q && (J = J ? J.concat(q) : q);
        }
        return J;
      },
      "day-body": (N) => {
        const J = W(N, A, w, !0);
        let q = [_("div", {
          class: "v-event-timed-container"
        }, [J])];
        if (t["day-body"]) {
          const $ = t["day-body"](N);
          $ && (q = q.concat($));
        }
        return q;
      }
    };
  }
  return {
    ...a,
    noEvents: l,
    parsedEvents: s,
    parsedEventOverlapThreshold: u,
    eventTimedFunction: i,
    eventCategoryFunction: r,
    eventTextColorFunction: c,
    eventNameFunction: d,
    eventModeFunction: f,
    eventWeekdays: v,
    categoryMode: o,
    eventColorFunction: k,
    eventsRef: m,
    updateEventVisibility: y,
    getEventsMap: h,
    genDayEvent: x,
    genTimedEvent: w,
    genEvent: b,
    genName: S,
    genPlaceholder: g,
    genMore: I,
    getVisibleEvents: C,
    isEventForCategory: T,
    getEventsForDay: P,
    getEventsForDayAll: F,
    getEventsForDayTimed: A,
    getScopedSlots: B
  };
}
const V_ = Q()({
  name: "VCalendar",
  directives: {
    vResize: Po
  },
  props: {
    modelValue: {
      type: [String, Number, Date],
      validate: xl
    },
    categoryDays: {
      type: [Number, String],
      default: 1,
      validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0
    },
    categories: {
      type: [Array, String],
      default: ""
    },
    categoryText: {
      type: [String, Function]
    },
    maxDays: {
      type: Number,
      default: 7
    },
    categoryHideDynamic: {
      type: Boolean
    },
    categoryShowAll: {
      type: Boolean
    },
    categoryForInvalid: {
      type: String,
      default: ""
    },
    ...gr(),
    ...C_()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const o = /* @__PURE__ */ ae(), i = __(e, n, a), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = V(() => parseInt(String(e.categoryDays)) || 1), c = V(() => Dh(e.categories, e.categoryText)), d = V(() => {
      const g = i.parsedValue.value;
      let I = null, C = e.maxDays, T = c.value, P = g, F = g;
      switch (e.type) {
        case "month":
          I = xf, P = xh(g), F = Ch(g);
          break;
        case "week":
          I = Zl, P = i.getStartOfWeek(g), F = i.getEndOfWeek(g), C = 7;
          break;
        case "day":
          I = Zl, C = 1;
          break;
        case "4day":
          I = Zl, F = Ea(Gt(F), ma, 3), yn(F), C = 4;
          break;
        case "custom-weekly":
          I = xf, P = i.parsedStart.value || g, F = i.parsedEnd.value;
          break;
        case "custom-daily":
          I = Zl, P = i.parsedStart.value || g, F = i.parsedEnd.value;
          break;
        case "category":
          const A = u.value;
          I = a_, F = Ea(Gt(F), ma, A), yn(F), C = A, T = S(T);
          break;
        default:
          const B = e.type;
          throw new Error(`${B} is not a valid Calendar type`);
      }
      return {
        component: I,
        start: P,
        end: F,
        maxDays: C,
        categories: T
      };
    }), f = V(() => i.effectiveWeekdays.value), v = V(() => e.type === "category"), k = V(() => i.getFormatter({
      timeZone: "UTC",
      month: "long"
    })), m = V(() => i.getFormatter({
      timeZone: "UTC",
      month: "short"
    })), y = V(() => {
      const {
        start: g,
        end: I
      } = d.value, C = g.year !== I.year, T = C || g.month !== I.month;
      return C ? m.value(g, !0) + " " + g.year + " - " + m.value(I, !0) + " " + I.year : T ? m.value(g, !0) + " - " + m.value(I, !0) + " " + I.year : k.value(g, !1) + " " + g.year;
    });
    function h() {
      const {
        start: g,
        end: I
      } = d.value;
      (!r.value || !s.value || g.date !== r.value.date || I.date !== s.value.date) && (r.value = g, s.value = I, l("change", {
        start: g,
        end: I
      }));
    }
    function x() {
      let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      const I = Gt(i.parsedValue.value), C = g > 0, T = C ? ma : Ih, P = C ? BC : vr;
      let F = C ? g : -g;
      for (; --F >= 0; )
        switch (e.type) {
          case "month":
            I.day = P, T(I);
            break;
          case "week":
            Ea(I, T, va);
            break;
          case "day":
            Ea(I, T, 1);
            break;
          case "4day":
            Ea(I, T, 4);
            break;
          case "category":
            Ea(I, T, u.value);
            break;
        }
      mr(I), yn(I), Ka(I, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", Ns(I)) : typeof e.modelValue == "number" ? l("update:modelValue", Ns(I).getTime()) : l("update:modelValue", I.date), l("moved", I);
    }
    function w() {
      let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      x(g);
    }
    function b() {
      let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      x(-g);
    }
    function S(g) {
      if (!i.noEvents.value) {
        const I = g.reduce((C, T, P) => (typeof T == "object" && T.categoryName ? C[T.categoryName] = {
          index: P,
          count: 0
        } : typeof T == "string" && (C[T] = {
          index: P,
          count: 0
        }), C), {});
        if (!e.categoryHideDynamic || !e.categoryShowAll) {
          let C = g.length;
          i.parsedEvents.value.forEach((T) => {
            let P = T.category;
            typeof P != "string" && (P = e.categoryForInvalid), P && (P in I ? I[P].count++ : e.categoryHideDynamic || (I[P] = {
              index: C++,
              count: 1
            }));
          });
        }
        if (!e.categoryShowAll)
          for (const C in I)
            I[C].count === 0 && delete I[C];
        g = g.filter((C) => typeof C == "object" && C.categoryName ? I.hasOwnProperty(C.categoryName) : typeof C == "string" ? I.hasOwnProperty(C) : !1);
      }
      return g;
    }
    return ue(d, h), yt(() => {
      i.updateEventVisibility(), h();
    }), qi(() => {
      window.requestAnimationFrame(i.updateEventVisibility);
    }), te(() => {
      const {
        start: g,
        end: I,
        maxDays: C,
        component: T,
        categories: P
      } = d.value;
      return qe(p(T, U({
        ref: o,
        class: ["v-calendar", {
          "v-calendar-events": !i.noEvents.value
        }],
        role: "grid"
      }, T.filterProps(e), {
        start: g.date,
        end: I.date,
        maxDays: C,
        weekdays: i.effectiveWeekdays.value,
        categories: P,
        "onClick:date": (F, A) => {
          a["onUpdate:modelValue"] && l("update:modelValue", A.date);
        }
      }), i.getScopedSlots()), [[Po, i.updateEventVisibility, void 0, {
        quiet: !0
      }]]);
    }), St({
      ...i,
      lastStart: r,
      lastEnd: s,
      parsedCategoryDays: u,
      renderProps: d,
      eventWeekdays: f,
      categoryMode: v,
      title: y,
      monthLongFormatter: k,
      monthShortFormatter: m,
      parsedCategories: c,
      checkChange: h,
      move: x,
      next: w,
      prev: b,
      getCategoryList: S
    }, o);
  }
}), I_ = R({
  ...Se(),
  ...Ae()
}, "VCardActions"), Nh = Q()({
  name: "VCardActions",
  props: I_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lt({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), te(() => p(e.tag, {
      class: ee(["v-card-actions", e.class]),
      style: ve(e.style)
    }, n)), {};
  }
}), P_ = R({
  opacity: [Number, String],
  ...Se(),
  ...Ae()
}, "VCardSubtitle"), Rh = Q()({
  name: "VCardSubtitle",
  props: P_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-card-subtitle", e.class]),
      style: ve([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Hh = ea("v-card-title"), T_ = R({
  appendAvatar: String,
  appendIcon: xe,
  prependAvatar: String,
  prependIcon: xe,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Se(),
  ...it(),
  ...Ae()
}, "VCardItem"), Wh = Q()({
  name: "VCardItem",
  props: T_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return p(e.tag, {
        class: ee(["v-card-item", e.class]),
        style: ve(e.style)
      }, {
        default: () => [l && _("div", {
          key: "prepend",
          class: "v-card-item__prepend"
        }, [n.prepend ? p(Ee, {
          key: "prepend-defaults",
          disabled: !a,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            }
          }
        }, n.prepend) : _(ye, null, [e.prependAvatar && p(an, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(He, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)])]), _("div", {
          class: "v-card-item__content"
        }, [r && p(Hh, {
          key: "title"
        }, {
          default: () => [n.title?.() ?? Tn(e.title)]
        }), s && p(Rh, {
          key: "subtitle"
        }, {
          default: () => [n.subtitle?.() ?? Tn(e.subtitle)]
        }), n.default?.()]), i && _("div", {
          key: "append",
          class: "v-card-item__append"
        }, [n.append ? p(Ee, {
          key: "append-defaults",
          disabled: !o,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            }
          }
        }, n.append) : _(ye, null, [e.appendIcon && p(He, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(an, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)])])]
      });
    }), {};
  }
}), A_ = R({
  opacity: [Number, String],
  ...Se(),
  ...Ae()
}, "VCardText"), zh = Q()({
  name: "VCardText",
  props: A_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-card-text", e.class]),
      style: ve([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), D_ = R({
  appendAvatar: String,
  appendIcon: xe,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: xe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Et(),
  ...Se(),
  ...it(),
  ...dt(),
  ...vt(),
  ...sr(),
  ...la(),
  ...Ol(),
  ...Je(),
  ...Yo(),
  ...Ae(),
  ...Ne(),
  ...rn({
    variant: "elevated"
  })
}, "VCard"), E_ = Q()({
  name: "VCard",
  directives: {
    vRipple: Vt
  },
  props: D_(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      borderClasses: o
    } = Nt(e), {
      colorClasses: i,
      colorStyles: r,
      variantClasses: s
    } = aa(e), {
      densityClasses: u
    } = Mt(e), {
      dimensionStyles: c
    } = ft(e), {
      elevationClasses: d
    } = bt(e), {
      loaderClasses: f
    } = Wo(e), {
      locationStyles: v
    } = rl(e), {
      positionClasses: k
    } = $l(e), {
      roundedClasses: m
    } = et(e), y = jo(e, n), h = /* @__PURE__ */ se(void 0);
    return ue(() => e.loading, (x, w) => {
      h.value = !x && typeof w == "string" ? w : typeof x == "boolean" ? void 0 : x;
    }, {
      immediate: !0
    }), te(() => {
      const x = e.link !== !1 && y.isLink.value, w = !e.disabled && e.link !== !1 && (e.link || y.isClickable.value), b = x ? "a" : e.tag, S = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), I = S || g, C = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), F = I || T || C, A = !!(a.text || e.text != null);
      return qe(p(b, U(y.linkProps, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": w
        }, l.value, o.value, i.value, u.value, d.value, f.value, k.value, m.value, s.value, e.class],
        style: [r.value, c.value, v.value, e.style],
        onClick: w && y.navigate,
        tabindex: e.disabled ? -1 : void 0
      }), {
        default: () => [P && _("div", {
          key: "image",
          class: "v-card__image"
        }, [a.image ? p(Ee, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, a.image) : p(Zn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), p(zo, {
          name: "v-card",
          active: !!e.loading,
          color: h.value
        }, {
          default: a.loader
        }), F && p(Wh, {
          key: "item",
          prependAvatar: e.prependAvatar,
          prependIcon: e.prependIcon,
          title: e.title,
          subtitle: e.subtitle,
          appendAvatar: e.appendAvatar,
          appendIcon: e.appendIcon
        }, {
          default: a.item,
          prepend: a.prepend,
          title: a.title,
          subtitle: a.subtitle,
          append: a.append
        }), A && p(zh, {
          key: "text"
        }, {
          default: () => [a.text?.() ?? e.text]
        }), a.default?.(), a.actions && p(Nh, null, {
          default: a.actions
        }), na(w, "v-card")]
      }), [[Vt, w && e.ripple]]);
    }), {};
  }
}), M_ = (e) => {
  const {
    touchstartX: t,
    touchendX: n,
    touchstartY: a,
    touchendY: l
  } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function B_(e, t) {
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, t.start?.({
    originalEvent: e,
    ...t
  });
}
function F_(e, t) {
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, t.end?.({
    originalEvent: e,
    ...t
  }), M_(t);
}
function L_(e, t) {
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, t.move?.({
    originalEvent: e,
    ...t
  });
}
function O_() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (n) => B_(n, t),
    touchend: (n) => F_(n, t),
    touchmove: (n) => L_(n, t)
  };
}
function $_(e, t) {
  const n = t.value, a = n?.parent ? e.parentElement : e, l = n?.options ?? {
    passive: !0
  }, o = t.instance?.$.uid;
  if (!a || o === void 0) return;
  const i = O_(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Sm(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function N_(e, t) {
  const n = t.value?.parent ? e.parentElement : e, a = t.instance?.$.uid;
  if (!n?._touchHandlers || a === void 0) return;
  const l = n._touchHandlers[a];
  Sm(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const $i = {
  mounted: $_,
  unmounted: N_
}, jh = /* @__PURE__ */ Symbol.for("vuetify:v-window"), Yh = /* @__PURE__ */ Symbol.for("vuetify:v-window-group"), hr = R({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  verticalArrows: [Boolean, String],
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  crossfade: Boolean,
  transitionDuration: Number,
  ...Se(),
  ...Ae(),
  ...Ne()
}, "VWindow"), Ga = Q()({
  name: "VWindow",
  directives: {
    vTouch: $i
  },
  props: hr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      isRtl: l
    } = gt(), {
      t: o
    } = Ue(), i = Ca(e, Yh), r = /* @__PURE__ */ ae(), s = V(() => l.value ? !e.reverse : e.reverse), u = /* @__PURE__ */ se(!1), c = V(() => {
      if (e.crossfade)
        return "v-window-crossfade-transition";
      const b = e.direction === "vertical" ? "y" : "x", g = (s.value ? !u.value : u.value) ? "-reverse" : "";
      return `v-window-${b}${g}-transition`;
    }), d = /* @__PURE__ */ se(0), f = /* @__PURE__ */ ae(void 0), v = V(() => i.items.value.findIndex((b) => i.selected.value.includes(b.id)));
    ue(v, (b, S) => {
      let g;
      const I = {
        left: 0,
        top: 0
      };
      Ye && S >= 0 && (g = tr(r.value), I.left = g?.scrollLeft, I.top = g?.scrollTop);
      const C = i.items.value.length, T = C - 1;
      C <= 2 ? u.value = b < S : b === T && S === 0 ? u.value = !1 : b === 0 && S === T ? u.value = !0 : u.value = b < S, Te(() => {
        if (!Ye || !g) return;
        g.scrollTop !== I.top && g.scrollTo({
          ...I,
          behavior: "instant"
        }), requestAnimationFrame(() => {
          if (!g) return;
          g.scrollTop !== I.top && g.scrollTo({
            ...I,
            behavior: "instant"
          });
        });
      });
    }, {
      flush: "sync"
    }), Ze(jh, {
      transition: c,
      isReversed: u,
      transitionCount: d,
      transitionHeight: f,
      rootRef: r
    });
    const k = /* @__PURE__ */ E(() => e.continuous || v.value !== 0), m = /* @__PURE__ */ E(() => e.continuous || v.value !== i.items.value.length - 1);
    function y() {
      k.value && i.prev();
    }
    function h() {
      m.value && i.next();
    }
    const x = V(() => {
      const b = [], S = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: i.prev,
        "aria-label": o("$vuetify.carousel.prev")
      };
      b.push(k.value ? n.prev ? n.prev({
        props: S
      }) : p(Oe, S, null) : _("div", null, null));
      const g = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: i.next,
        "aria-label": o("$vuetify.carousel.next")
      };
      return b.push(m.value ? n.next ? n.next({
        props: g
      }) : p(Oe, g, null) : _("div", null, null)), b;
    }), w = V(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? y() : h();
        },
        right: () => {
          s.value ? h() : y();
        },
        start: (S) => {
          let {
            originalEvent: g
          } = S;
          g.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return te(() => qe(p(e.tag, {
      ref: r,
      class: ee(["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover",
        "v-window--vertical-arrows": !!e.verticalArrows,
        "v-window--crossfade": !!e.crossfade
      }, a.value, e.class]),
      style: ve([e.style, {
        "--v-window-transition-duration": An() ? null : de(e.transitionDuration, "ms")
      }])
    }, {
      default: () => [_("div", {
        class: "v-window__container",
        style: {
          height: f.value
        }
      }, [n.default?.({
        group: i
      }), e.showArrows !== !1 && _("div", {
        class: ee(["v-window__controls", {
          "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === !0
        }, {
          "v-window__controls--right": e.verticalArrows === "right"
        }])
      }, [x.value])]), n.additional?.({
        group: i
      })]
    }), [[$i, w.value]])), {
      group: i
    };
  }
}), R_ = R({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: xe,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...hr({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), H_ = Q()({
  name: "VCarousel",
  props: R_(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), {
      t: l
    } = Ue(), o = /* @__PURE__ */ ae();
    let i = -1;
    ue(a, s), ue(() => e.interval, s), ue(() => e.cycle, (u) => {
      u ? s() : window.clearTimeout(i);
    }), yt(r);
    function r() {
      !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
    }
    function s() {
      window.clearTimeout(i), window.requestAnimationFrame(r);
    }
    return te(() => {
      const u = Ga.filterProps(e);
      return p(Ga, U({
        ref: o
      }, u, {
        modelValue: a.value,
        "onUpdate:modelValue": (c) => a.value = c,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: de(e.height)
        }, e.style]
      }), {
        default: n.default,
        additional: (c) => {
          let {
            group: d
          } = c;
          return _(ye, null, [!e.hideDelimiters && _("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [d.items.value.length > 0 && p(Ee, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [d.items.value.map((f, v) => {
              const k = {
                id: `carousel-item-${f.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", v + 1, d.items.value.length),
                class: ["v-carousel__controls__item", d.isSelected(f.id) && "v-btn--active"],
                onClick: () => d.select(f.id, !0)
              };
              return n.item ? n.item({
                props: k,
                item: f
              }) : p(Oe, U(f, k), null);
            })]
          })]), e.progress && p(rr, {
            absolute: !0,
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (d.getItemIndex(a.value) + 1) / d.items.value.length * 100
          }, null)]);
        },
        prev: n.prev,
        next: n.next
      });
    }), {};
  }
}), yr = R({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...Se(),
  ...il(),
  ...lc()
}, "VWindowItem"), qa = Q()({
  name: "VWindowItem",
  directives: {
    vTouch: $i
  },
  props: yr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(jh), l = ba(e, Yh), {
      isBooted: o
    } = ll();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const i = /* @__PURE__ */ se(!1), r = V(() => o.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !i.value || !a || (i.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function u() {
      i.value || !a || (i.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = de(a.rootRef.value?.clientHeight)), a.transitionCount.value += 1);
    }
    function c() {
      s();
    }
    function d(k) {
      i.value && Te(() => {
        !r.value || !i.value || !a || (a.transitionHeight.value = de(k.clientHeight));
      });
    }
    const f = V(() => {
      const k = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof k != "string" ? a.transition.value : k,
        onBeforeEnter: u,
        onAfterEnter: s,
        onEnterCancelled: c,
        onBeforeLeave: u,
        onAfterLeave: s,
        onLeaveCancelled: c,
        onEnter: d
      } : !1;
    }), {
      hasContent: v
    } = oc(e, l.isSelected);
    return te(() => p(Ot, {
      transition: f.value,
      disabled: !o.value
    }, {
      default: () => [qe(_("div", {
        class: ee(["v-window-item", l.selectedClass.value, e.class]),
        style: ve(e.style)
      }, [v.value && n.default?.()]), [[xn, l.isSelected.value]])]
    })), {
      groupItem: l
    };
  }
}), W_ = R({
  ...sg(),
  ...yr()
}, "VCarouselItem"), z_ = Q()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: W_(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    te(() => {
      const l = Zn.filterProps(e), o = qa.filterProps(e);
      return p(qa, U({
        class: ["v-carousel-item", e.class]
      }, o), {
        default: () => [p(Zn, U(a, l), n)]
      });
    });
  }
}), j_ = ea("v-code", "code"), Y_ = R({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...Se()
}, "VColorPickerCanvas"), U_ = $t({
  name: "VColorPickerCanvas",
  props: Y_(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = /* @__PURE__ */ se(!1), l = /* @__PURE__ */ ae(), o = /* @__PURE__ */ se(parseFloat(e.width)), i = /* @__PURE__ */ se(parseFloat(e.height)), r = /* @__PURE__ */ ae({
      x: 0,
      y: 0
    }), s = V({
      get: () => r.value,
      set(y) {
        if (!l.value) return;
        const {
          x: h,
          y: x
        } = y;
        r.value = y, n("update:color", {
          h: e.color?.h ?? 0,
          s: je(h, 0, o.value) / o.value,
          v: 1 - je(x, 0, i.value) / i.value,
          a: e.color?.a ?? 1
        });
      }
    }), u = V(() => {
      const {
        x: y,
        y: h
      } = s.value, x = parseInt(e.dotSize, 10) / 2;
      return {
        width: de(e.dotSize),
        height: de(e.dotSize),
        transform: `translate(${de(y - x)}, ${de(h - x)})`
      };
    }), {
      resizeRef: c
    } = vn((y) => {
      if (!c.el?.offsetParent) return;
      const {
        width: h,
        height: x
      } = y[0].contentRect;
      o.value = h, i.value = x;
    });
    function d(y, h, x) {
      const {
        left: w,
        top: b,
        width: S,
        height: g
      } = x;
      s.value = {
        x: je(y - w, 0, S),
        y: je(h - b, 0, g)
      };
    }
    function f(y) {
      y.type === "mousedown" && y.preventDefault(), !e.disabled && (v(y), window.addEventListener("mousemove", v), window.addEventListener("mouseup", k), window.addEventListener("touchmove", v), window.addEventListener("touchend", k));
    }
    function v(y) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const h = Zk(y);
      d(h.clientX, h.clientY, l.value.getBoundingClientRect());
    }
    function k() {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", k), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", k);
    }
    function m() {
      if (!l.value) return;
      const y = l.value, h = y.getContext("2d");
      if (!h) return;
      const x = h.createLinearGradient(0, 0, y.width, 0);
      x.addColorStop(0, "hsla(0, 0%, 100%, 1)"), x.addColorStop(1, `hsla(${e.color?.h ?? 0}, 100%, 50%, 1)`), h.fillStyle = x, h.fillRect(0, 0, y.width, y.height);
      const w = h.createLinearGradient(0, 0, 0, y.height);
      w.addColorStop(0, "hsla(0, 0%, 0%, 0)"), w.addColorStop(1, "hsla(0, 0%, 0%, 1)"), h.fillStyle = w, h.fillRect(0, 0, y.width, y.height);
    }
    return ue(() => e.color?.h, m, {
      immediate: !0
    }), ue(() => [o.value, i.value], (y, h) => {
      m(), r.value = {
        x: s.value.x * y[0] / h[0],
        y: s.value.y * y[1] / h[1]
      };
    }, {
      flush: "post"
    }), ue(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * o.value,
        y: (1 - e.color.v) * i.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), yt(() => m()), te(() => _("div", {
      ref: c,
      class: ee(["v-color-picker-canvas", e.class]),
      style: ve(e.style),
      onMousedown: f,
      onTouchstartPassive: f
    }, [_("canvas", {
      ref: l,
      width: o.value,
      height: i.value
    }, null), e.color && _("div", {
      class: ee(["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }]),
      style: ve(u.value)
    }, null)])), {};
  }
});
function K_(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function G_(e, t) {
  if (t == null || typeof t == "string") {
    const n = e.a !== 1;
    if (t?.startsWith("rgb(")) {
      const {
        r: l,
        g: o,
        b: i,
        a: r
      } = Dn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t?.startsWith("hsl(")) {
      const {
        h: l,
        s: o,
        l: i,
        a: r
      } = ws(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Fm(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Ba(t, ["r", "g", "b"]) ? n = Dn(e) : Ba(t, ["h", "s", "l"]) ? n = ws(e) : Ba(t, ["h", "s", "v"]) && (n = e), K_(n, !Ba(t, ["a"]) && e.a === 1);
  }
  return e;
}
const bl = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Rs = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, t) => ({
      ...e,
      r: Number(t)
    }),
    localeKey: "redInput"
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, t) => ({
      ...e,
      g: Number(t)
    }),
    localeKey: "greenInput"
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, t) => ({
      ...e,
      b: Number(t)
    }),
    localeKey: "blueInput"
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    }),
    localeKey: "alphaInput"
  }],
  to: Dn,
  from: No
}, q_ = {
  ...Rs,
  inputs: Rs.inputs?.slice(0, 3)
}, Hs = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, t) => ({
      ...e,
      h: Number(t)
    }),
    localeKey: "hueInput"
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      s: Number(t)
    }),
    localeKey: "saturationInput"
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      l: Number(t)
    }),
    localeKey: "lightnessInput"
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    }),
    localeKey: "alphaInput"
  }],
  to: ws,
  from: Bu
}, X_ = {
  ...Hs,
  inputs: Hs.inputs.slice(0, 3)
}, Uh = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t,
    localeKey: "hexaInput"
  }],
  to: Fm,
  from: p0
}, Z_ = {
  ...Uh,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t,
    localeKey: "hexInput"
  }]
}, Wa = {
  rgb: q_,
  rgba: Rs,
  hsl: X_,
  hsla: Hs,
  hex: Z_,
  hexa: Uh
}, J_ = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return _("div", {
    class: "v-color-picker-edit__input"
  }, [_("input", Pb(am(n)), null), _("span", null, [t])]);
}, Q_ = R({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Wa).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Wa),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Wa).includes(t))
  },
  ...Se()
}, "VColorPickerEdit"), eV = $t({
  name: "VColorPickerEdit",
  props: Q_(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const {
      t: a
    } = Ue(), l = V(() => e.modes.map((i) => ({
      ...Wa[i],
      name: i
    }))), o = V(() => {
      const i = l.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const r = e.color ? i.to(e.color) : null;
      return i.inputs?.map((s) => {
        let {
          getValue: u,
          getColor: c,
          localeKey: d,
          ...f
        } = s;
        return {
          ...i.inputProps,
          ...f,
          ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`),
          disabled: e.disabled,
          value: r && u(r),
          onChange: (v) => {
            const k = v.target;
            k && n("update:color", i.from(c(r ?? i.to(bl), k.value)));
          }
        };
      });
    });
    return te(() => _("div", {
      class: ee(["v-color-picker-edit", e.class]),
      style: ve(e.style)
    }, [o.value?.map((i) => p(J_, i, null)), l.value.length > 1 && p(Oe, {
      icon: "$unfold",
      size: "x-small",
      variant: "plain",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"),
      onClick: () => {
        const i = l.value.findIndex((r) => r.name === e.mode);
        n("update:mode", l.value[(i + 1) % l.value.length].name);
      }
    }, null)])), {};
  }
}), hc = /* @__PURE__ */ Symbol.for("vuetify:v-slider");
function Ws(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function tV(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Kh = R({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  noKeyboard: Boolean,
  ...Je(),
  ...vt({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Gh = (e) => {
  const t = V(() => parseFloat(e.min)), n = V(() => parseFloat(e.max)), a = V(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = V(() => Math.max(_d(a.value), _d(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = je(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: o
  };
}, qh = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: o,
    getActiveThumb: i
  } = e;
  const r = Rl(t), {
    isRtl: s
  } = gt(), u = /* @__PURE__ */ E(() => t.reverse), c = V(() => t.direction === "vertical"), d = V(() => c.value !== u.value), {
    min: f,
    max: v,
    step: k,
    decimals: m,
    roundValue: y
  } = n, h = V(() => parseInt(t.thumbSize, 10)), x = V(() => parseInt(t.tickSize, 10)), w = V(() => parseInt(t.trackSize, 10)), b = V(() => (v.value - f.value) / k.value), S = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), I = V(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), C = V(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = /* @__PURE__ */ se(!1), P = /* @__PURE__ */ se(0), F = /* @__PURE__ */ ae(), A = /* @__PURE__ */ ae();
  function B(Z) {
    const ce = F.value?.$el;
    if (!ce) return;
    const Ce = t.direction === "vertical", Ve = Ce ? "top" : "left", Pe = Ce ? "height" : "width", M = Ce ? "clientY" : "clientX", {
      [Ve]: O,
      [Pe]: j
    } = ce.getBoundingClientRect(), re = tV(Z, M);
    let z = je((re - O - P.value) / j) || 0;
    return (Ce ? d.value : d.value !== s.value) && (z = 1 - z), y(f.value + z * (v.value - f.value));
  }
  const D = (Z) => {
    const ce = B(Z);
    ce != null && o({
      value: ce
    }), T.value = !1, P.value = 0;
  }, L = (Z) => {
    const ce = B(Z);
    A.value = i(Z), A.value && (T.value = !0, A.value.contains(Z.target) ? P.value = Ws(Z, A.value, t.direction) : (P.value = 0, ce != null && l({
      value: ce
    })), ce != null && a({
      value: ce
    }), Te(() => A.value?.focus()));
  }, W = {
    passive: !0,
    capture: !0
  };
  function N(Z) {
    const ce = B(Z);
    ce != null && l({
      value: ce
    });
  }
  function J(Z) {
    Z.stopPropagation(), Z.preventDefault(), D(Z), window.removeEventListener("mousemove", N, W), window.removeEventListener("mouseup", J);
  }
  function q(Z) {
    D(Z), window.removeEventListener("touchmove", N, W), Z.target?.removeEventListener("touchend", q);
  }
  function $(Z) {
    L(Z), window.addEventListener("touchmove", N, W), Z.target?.addEventListener("touchend", q, {
      passive: !1
    });
  }
  function ne(Z) {
    Z.button === 0 && (Z.preventDefault(), L(Z), window.addEventListener("mousemove", N, W), window.addEventListener("mouseup", J, {
      passive: !1
    }));
  }
  ot(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", J);
  });
  const K = (Z) => {
    const ce = (Z - f.value) / (v.value - f.value) * 100;
    return je(isNaN(ce) ? 0 : ce, 0, 100);
  }, H = /* @__PURE__ */ E(() => t.showTicks), G = V(() => H.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((Z) => ({
    value: Z,
    position: K(Z),
    label: Z.toString()
  })) : Object.keys(t.ticks).map((Z) => ({
    value: parseFloat(Z),
    position: K(parseFloat(Z)),
    label: t.ticks[Z]
  })) : b.value !== 1 / 0 ? Qt(b.value + 1).map((Z) => {
    const ce = f.value + Z * k.value;
    return {
      value: ce,
      position: K(ce)
    };
  }) : [] : []), X = V(() => G.value.some((Z) => {
    let {
      label: ce
    } = Z;
    return !!ce;
  })), fe = {
    activeThumbRef: A,
    color: /* @__PURE__ */ E(() => t.color),
    decimals: m,
    disabled: r.isDisabled,
    direction: /* @__PURE__ */ E(() => t.direction),
    elevation: /* @__PURE__ */ E(() => t.elevation),
    hasLabels: X,
    isReversed: u,
    indexFromEnd: d,
    min: f,
    max: v,
    mousePressed: T,
    noKeyboard: /* @__PURE__ */ E(() => t.noKeyboard),
    numTicks: b,
    onSliderMousedown: ne,
    onSliderTouchstart: $,
    parsedTicks: G,
    parseMouseMove: B,
    position: K,
    readonly: r.isReadonly,
    rounded: /* @__PURE__ */ E(() => t.rounded),
    roundValue: y,
    showTicks: H,
    startOffset: P,
    step: k,
    thumbSize: h,
    thumbColor: S,
    thumbLabelColor: g,
    thumbLabel: /* @__PURE__ */ E(() => t.thumbLabel),
    ticks: /* @__PURE__ */ E(() => t.ticks),
    tickSize: x,
    trackColor: I,
    trackContainerRef: F,
    trackFillColor: C,
    trackSize: w,
    vertical: c
  };
  return Ze(hc, fe), fe;
}, nV = R({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  noKeyboard: Boolean,
  ...Se()
}, "VSliderThumb"), zs = Q()({
  name: "VSliderThumb",
  directives: {
    vRipple: Vt
  },
  props: nV(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = $e(hc), {
      isRtl: o,
      rtlClasses: i
    } = gt();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      min: r,
      max: s,
      thumbColor: u,
      thumbLabelColor: c,
      step: d,
      disabled: f,
      thumbSize: v,
      thumbLabel: k,
      direction: m,
      isReversed: y,
      vertical: h,
      readonly: x,
      elevation: w,
      mousePressed: b,
      decimals: S,
      indexFromEnd: g
    } = l, I = V(() => f.value ? void 0 : w.value), {
      elevationClasses: C
    } = bt(I), {
      textColorClasses: T,
      textColorStyles: P
    } = Ct(u), {
      backgroundColorClasses: F,
      backgroundColorStyles: A
    } = ze(c), {
      pageup: B,
      pagedown: D,
      end: L,
      home: W,
      left: N,
      right: J,
      down: q,
      up: $
    } = hs, ne = [B, D, L, W, N, J, q, $], K = V(() => d.value ? [1, 2, 3] : [1, 5, 10]);
    function H(X, fe) {
      if (e.noKeyboard || f.value || !ne.includes(X.key)) return;
      X.preventDefault();
      const Z = d.value || 0.1, ce = (s.value - r.value) / Z;
      if ([N, J, q, $].includes(X.key)) {
        const Ve = (h.value ? [o.value ? N : J, y.value ? q : $] : g.value !== o.value ? [N, $] : [J, $]).includes(X.key) ? 1 : -1, Pe = X.shiftKey ? 2 : X.ctrlKey ? 1 : 0;
        Ve === -1 && fe === s.value && !Pe && !Number.isInteger(ce) ? fe = fe - ce % 1 * Z : fe = fe + Ve * Z * K.value[Pe];
      } else if (X.key === W)
        fe = r.value;
      else if (X.key === L)
        fe = s.value;
      else {
        const Ce = X.key === D ? 1 : -1;
        fe = fe - Ce * Z * (ce > 100 ? ce / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, fe));
    }
    function G(X) {
      const fe = H(X, e.modelValue);
      fe != null && a("update:modelValue", fe);
    }
    return te(() => {
      const X = de(g.value ? 100 - e.position : e.position, "%");
      return _("div", {
        class: ee(["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && b.value
        }, e.class, i.value]),
        style: ve([{
          "--v-slider-thumb-position": X,
          "--v-slider-thumb-size": de(v.value)
        }, e.style]),
        role: "slider",
        tabindex: f.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": r.value,
        "aria-valuemax": s.value,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!x.value,
        "aria-orientation": m.value,
        onKeydown: x.value ? void 0 : G
      }, [_("div", {
        class: ee(["v-slider-thumb__surface", T.value, C.value]),
        style: ve(P.value)
      }, null), qe(_("div", {
        class: ee(["v-slider-thumb__ripple", T.value]),
        style: ve(P.value)
      }, null), [[Vt, e.ripple, null, {
        circle: !0,
        center: !0
      }]]), p(zu, {
        origin: "bottom center"
      }, {
        default: () => [qe(_("div", {
          class: "v-slider-thumb__label-container"
        }, [_("div", {
          class: ee(["v-slider-thumb__label", F.value]),
          style: ve(A.value)
        }, [_("div", null, [n["thumb-label"]?.({
          modelValue: e.modelValue
        }) ?? e.modelValue.toFixed(d.value ? S.value : 1)]), _("div", {
          class: "v-slider-thumb__label-wedge"
        }, null)])]), [[xn, k.value && e.focused || k.value === "always"]])]
      })]);
    }), {};
  }
}), aV = R({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...Se()
}, "VSliderTrack"), Xh = Q()({
  name: "VSliderTrack",
  props: aV(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(hc);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: o,
      rounded: i,
      showTicks: r,
      tickSize: s,
      trackColor: u,
      trackFillColor: c,
      trackSize: d,
      vertical: f,
      min: v,
      max: k,
      indexFromEnd: m
    } = a, {
      roundedClasses: y
    } = et(i), {
      backgroundColorClasses: h,
      backgroundColorStyles: x
    } = ze(c), {
      backgroundColorClasses: w,
      backgroundColorStyles: b
    } = ze(u), S = V(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = V(() => f.value ? "height" : "width"), I = V(() => ({
      [S.value]: "0%",
      [g.value]: "100%"
    })), C = V(() => e.stop - e.start), T = V(() => ({
      [S.value]: de(e.start, "%"),
      [g.value]: de(C.value, "%")
    })), P = V(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((A, B) => {
      const D = A.value !== v.value && A.value !== k.value ? de(A.position, "%") : void 0;
      return _("div", {
        key: A.value,
        class: ee(["v-slider-track__tick", {
          "v-slider-track__tick--filled": A.position >= e.start && A.position <= e.stop,
          "v-slider-track__tick--first": A.value === v.value,
          "v-slider-track__tick--last": A.value === k.value
        }]),
        style: {
          [S.value]: D
        }
      }, [(A.label || n["tick-label"]) && _("div", {
        class: "v-slider-track__tick-label"
      }, [n["tick-label"]?.({
        tick: A,
        index: B
      }) ?? A.label])]);
    }) : []);
    return te(() => _("div", {
      class: ee(["v-slider-track", y.value, e.class]),
      style: ve([{
        "--v-slider-track-size": de(d.value),
        "--v-slider-tick-size": de(s.value)
      }, e.style])
    }, [_("div", {
      class: ee(["v-slider-track__background", w.value, {
        "v-slider-track__background--opacity": !!l.value || !c.value
      }]),
      style: {
        ...I.value,
        ...b.value
      }
    }, null), _("div", {
      class: ee(["v-slider-track__fill", h.value]),
      style: {
        ...T.value,
        ...x.value
      }
    }, null), r.value && _("div", {
      class: ee(["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }])
    }, [P.value])])), {};
  }
}), lV = R({
  ...Ko(),
  ...Kh(),
  ...ia(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), js = Q()({
  name: "VSlider",
  inheritAttrs: !1,
  props: lV(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a,
      attrs: l
    } = t;
    const o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae(), {
      rtlClasses: r
    } = gt(), s = Gh(e), u = pe(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), {
      min: c,
      max: d,
      mousePressed: f,
      roundValue: v,
      onSliderMousedown: k,
      onSliderTouchstart: m,
      trackContainerRef: y,
      position: h,
      hasLabels: x,
      disabled: w,
      readonly: b,
      noKeyboard: S
    } = qh({
      props: e,
      steps: s,
      onSliderStart: () => {
        !w.value && !b.value && a("start", u.value);
      },
      onSliderEnd: (P) => {
        let {
          value: F
        } = P;
        const A = v(F);
        !w.value && !b.value && (u.value = A), a("end", A);
      },
      onSliderMove: (P) => {
        let {
          value: F
        } = P;
        !w.value && !b.value && (u.value = v(F));
      },
      getActiveThumb: () => o.value?.$el
    }), {
      isFocused: g,
      focus: I,
      blur: C
    } = oa(e), T = V(() => h(u.value));
    return te(() => {
      const P = Tt.filterProps(e), [F, A] = Fn(l), B = !!(e.label || n.label || n.prepend);
      return p(Tt, U({
        ref: i,
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || x.value,
          "v-slider--focused": g.value,
          "v-slider--pressed": f.value,
          "v-slider--disabled": w.value
        }, r.value, e.class],
        style: e.style
      }, P, F, {
        focused: g.value
      }), {
        ...n,
        prepend: B ? (D) => _(ye, null, [n.label?.(D) ?? (e.label ? p(Nl, {
          id: D.id.value,
          class: "v-slider__label",
          text: e.label
        }, null) : void 0), n.prepend?.(D)]) : void 0,
        default: (D) => {
          let {
            id: L,
            messagesId: W
          } = D;
          return _("div", {
            class: "v-slider__container",
            onMousedown: b.value ? void 0 : k,
            onTouchstartPassive: b.value ? void 0 : m
          }, [_("input", {
            id: L.value,
            name: e.name || L.value,
            disabled: w.value,
            readonly: b.value,
            tabindex: "-1",
            value: u.value
          }, null), p(Xh, {
            ref: y,
            start: 0,
            stop: T.value
          }, {
            "tick-label": n["tick-label"]
          }), p(zs, U({
            ref: o,
            "aria-describedby": W.value,
            focused: g.value,
            noKeyboard: S.value,
            min: c.value,
            max: d.value,
            modelValue: u.value,
            "onUpdate:modelValue": (N) => u.value = N,
            position: T.value,
            elevation: e.elevation,
            onFocus: I,
            onBlur: C,
            ripple: e.ripple,
            name: e.name
          }, A), {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), St({
      focus: () => o.value?.$el.focus()
    }, i);
  }
}), Zh = R({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  hideEyeDropper: Boolean,
  eyeDropperIcon: {
    type: xe,
    default: "$eyeDropper"
  },
  ...Se()
}, "VColorPickerPreview"), oV = $t({
  name: "VColorPickerPreview",
  props: Zh(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const {
      t: a
    } = Ue(), l = new AbortController();
    Xi(() => l.abort());
    async function o() {
      if (!pd || e.disabled) return;
      const i = new window.EyeDropper();
      try {
        const r = await i.open({
          signal: l.signal
        }), s = No(en(r.sRGBHex));
        n("update:color", {
          ...e.color ?? bl,
          ...s
        });
      } catch {
      }
    }
    return te(() => _("div", {
      class: ee(["v-color-picker-preview", {
        "v-color-picker-preview--hide-alpha": e.hideAlpha
      }, e.class]),
      style: ve(e.style)
    }, [pd && !e.hideEyeDropper && _("div", {
      class: "v-color-picker-preview__eye-dropper",
      key: "eyeDropper"
    }, [p(Oe, {
      "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"),
      density: "comfortable",
      disabled: e.disabled,
      icon: e.eyeDropperIcon,
      variant: "plain",
      onClick: o
    }, null)]), _("div", {
      class: "v-color-picker-preview__dot"
    }, [_("div", {
      style: {
        background: Em(e.color ?? bl)
      }
    }, null)]), _("div", {
      class: "v-color-picker-preview__sliders"
    }, [p(js, {
      class: "v-color-picker-preview__track v-color-picker-preview__hue",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"),
      modelValue: e.color?.h,
      "onUpdate:modelValue": (i) => n("update:color", {
        ...e.color ?? bl,
        h: i
      }),
      step: 1,
      min: 0,
      max: 360,
      disabled: e.disabled,
      thumbSize: 14,
      trackSize: 8,
      trackFillColor: "white",
      hideDetails: !0
    }, null), !e.hideAlpha && p(js, {
      class: "v-color-picker-preview__track v-color-picker-preview__alpha",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"),
      modelValue: e.color?.a ?? 1,
      "onUpdate:modelValue": (i) => n("update:color", {
        ...e.color ?? bl,
        a: i
      }),
      step: 0.01,
      min: 0,
      max: 1,
      disabled: e.disabled,
      thumbSize: 14,
      trackSize: 8,
      trackFillColor: "white",
      hideDetails: !0
    }, null)])])), {};
  }
}), iV = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, rV = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, sV = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, uV = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, cV = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, dV = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, fV = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, vV = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, mV = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, gV = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, hV = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, yV = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, bV = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, SV = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, kV = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, wV = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, pV = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, xV = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, CV = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, _V = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, VV = {
  red: iV,
  pink: rV,
  purple: sV,
  deepPurple: uV,
  indigo: cV,
  blue: dV,
  lightBlue: fV,
  cyan: vV,
  teal: mV,
  green: gV,
  lightGreen: hV,
  lime: yV,
  yellow: bV,
  amber: SV,
  orange: kV,
  deepOrange: wV,
  brown: pV,
  blueGrey: xV,
  grey: CV,
  shades: _V
}, IV = R({
  swatches: {
    type: Array,
    default: () => PV(VV)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...Se()
}, "VColorPickerSwatches");
function PV(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const TV = $t({
  name: "VColorPickerSwatches",
  props: IV(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    function a(l) {
      e.disabled || !l || n("update:color", l);
    }
    return te(() => _("div", {
      class: ee(["v-color-picker-swatches", e.class]),
      style: ve([{
        maxHeight: de(e.maxHeight)
      }, e.style])
    }, [_("div", null, [e.swatches.map((l) => _("div", {
      class: "v-color-picker-swatches__swatch"
    }, [l.map((o) => {
      const i = en(o), r = No(i), s = Dm(i);
      return _("div", {
        class: ee(["v-color-picker-swatches__color", {
          "v-color-picker-swatches__color--disabled": e.disabled
        }]),
        onClick: () => a(r)
      }, [_("div", {
        style: {
          background: s
        }
      }, [e.color && xt(e.color, r) ? p(He, {
        size: "x-small",
        icon: "$success",
        color: V0(o, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), AV = ea("v-picker-title"), yc = R({
  color: String,
  ...Et(),
  ...Se(),
  ...dt(),
  ...vt(),
  ...la(),
  ...Ol(),
  ...Je(),
  ...Ae(),
  ...Ne()
}, "VSheet"), To = Q()({
  name: "VSheet",
  props: yc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color), {
      borderClasses: i
    } = Nt(e), {
      dimensionStyles: r
    } = ft(e), {
      elevationClasses: s
    } = bt(e), {
      locationStyles: u
    } = rl(e), {
      positionClasses: c
    } = $l(e), {
      roundedClasses: d
    } = et(e);
    return te(() => p(e.tag, {
      class: ee(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]),
      style: ve([o.value, r.value, u.value, e.style])
    }, n)), {};
  }
}), br = R({
  bgColor: String,
  divided: Boolean,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  hideTitle: Boolean,
  ...yc()
}, "VPicker"), Ml = Q()({
  name: "VPicker",
  props: br(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = ze(() => e.color);
    return te(() => {
      const o = To.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
      return p(To, U(o, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--divided": e.divided,
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => [!e.hideHeader && _("div", {
          key: "header",
          class: ee(["v-picker__header-wrapper", a.value]),
          style: ve([l.value])
        }, [i && p(AV, {
          key: "picker-title"
        }, {
          default: () => [n.title?.() ?? e.title]
        }), n.header && _("div", {
          class: "v-picker__header"
        }, [n.header()])]), _("div", {
          class: "v-picker__body"
        }, [n.default?.()]), n.actions && p(Ee, {
          defaults: {
            VBtn: {
              slim: !0,
              variant: "text"
            }
          }
        }, {
          default: () => [_("div", {
            class: "v-picker__actions"
          }, [n.actions()])]
        })]
      });
    }), {};
  }
}), DV = R({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Wa).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Wa),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Wa).includes(t))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...br({
    hideHeader: !0
  }),
  ...jt(Zh(), ["hideEyeDropper", "eyeDropperIcon"])
}, "VColorPicker"), EV = $t({
  name: "VColorPicker",
  props: DV(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "mode"), l = /* @__PURE__ */ ae(null), o = pe(e, "modelValue", void 0, (c) => {
      if (c == null || c === "") return null;
      let d;
      try {
        d = No(en(c));
      } catch {
        return null;
      }
      return d;
    }, (c) => c ? G_(c, e.modelValue) : null), i = V(() => o.value ? {
      ...o.value,
      h: l.value ?? o.value.h
    } : null), {
      rtlClasses: r
    } = gt();
    let s = !0;
    ue(o, (c) => {
      if (!s) {
        s = !0;
        return;
      }
      c && (l.value = c.h);
    }, {
      immediate: !0
    });
    const u = (c) => {
      s = !1, l.value = c.h, o.value = c;
    };
    return Fl(() => {
      e.modes.includes(a.value) || (a.value = e.modes[0]);
    }), lt({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), te(() => {
      const c = Ml.filterProps(e);
      return p(Ml, U(c, {
        class: ["v-color-picker", r.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Em({
            ...i.value ?? bl,
            a: 1
          })
        }, e.style]
      }), {
        ...n,
        default: () => _(ye, null, [!e.hideCanvas && p(U_, {
          key: "canvas",
          color: i.value,
          "onUpdate:color": u,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && _("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && p(oV, {
          key: "preview",
          color: i.value,
          "onUpdate:color": u,
          hideAlpha: !a.value.endsWith("a"),
          disabled: e.disabled,
          hideEyeDropper: e.hideEyeDropper,
          eyeDropperIcon: e.eyeDropperIcon
        }, null), !e.hideInputs && p(eV, {
          key: "edit",
          modes: e.modes,
          mode: a.value,
          "onUpdate:mode": (d) => a.value = d,
          color: i.value,
          "onUpdate:color": u,
          disabled: e.disabled
        }, null)]), e.showSwatches && p(TV, {
          key: "swatches",
          color: i.value,
          "onUpdate:color": u,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)])
      });
    }), {};
  }
}), MV = R({
  alwaysFilter: Boolean,
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...Wl({
    filterKeys: ["title"]
  }),
  ...uc({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Be(Xo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"])
}, "VCombobox"), BV = Q()({
  name: "VCombobox",
  props: MV(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ se(!1), r = /* @__PURE__ */ se(!0), s = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), d = /* @__PURE__ */ se(-1);
    let f = !1;
    const {
      items: v,
      transformIn: k,
      transformOut: m
    } = Qu(e), {
      textColorClasses: y,
      textColorStyles: h
    } = Ct(() => o.value?.color), {
      InputIcon: x
    } = Uo(e), w = pe(e, "modelValue", [], (Y) => k(Xe(Y)), (Y) => {
      const le = m(Y);
      return e.multiple ? le : le[0] ?? null;
    }), b = Rl(e), S = /* @__PURE__ */ E(() => e.closableChips && !b.isReadonly.value && !b.isDisabled.value), g = V(() => !!(e.chips || a.chip)), I = V(() => g.value || !!a.selection), C = /* @__PURE__ */ se(!e.multiple && !I.value ? w.value[0]?.title ?? "" : ""), T = /* @__PURE__ */ se(null), P = V({
      get: () => C.value,
      set: async (Y) => {
        if (C.value = Y ?? "", Y === null || Y === "" && !e.multiple && !I.value ? w.value = [] : !e.multiple && !I.value && (w.value = [gn(e, Y)], Te(() => c.value?.scrollToIndex(0))), Y && e.multiple && e.delimiters?.length) {
          const le = re(Y);
          le.length > 1 && (z(le), C.value = "");
        }
        Y || (d.value = -1), r.value = !Y;
      }
    }), F = V(() => typeof e.counterValue == "function" ? e.counterValue(w.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? w.value.length : P.value.length), {
      filteredItems: A,
      getMatches: B
    } = zl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), D = V(() => e.hideSelected && T.value === null ? A.value.filter((Y) => !w.value.some((le) => le.value === Y.value)) : A.value), L = V(() => e.hideNoData && !D.value.length || b.isReadonly.value || b.isDisabled.value), W = pe(e, "menu"), N = V({
      get: () => W.value,
      set: (Y) => {
        W.value && !Y && u.value?.ΨopenChildren.size || Y && L.value || (W.value = Y);
      }
    }), {
      menuId: J,
      ariaExpanded: q,
      ariaControls: $
    } = sc(e, N);
    ue(C, (Y) => {
      f ? Te(() => f = !1) : i.value && !N.value && (N.value = !0), n("update:search", Y);
    }), ue(w, (Y) => {
      !e.multiple && !I.value && (C.value = Y[0]?.title ?? "");
    });
    const ne = V(() => w.value.map((Y) => Y.value)), K = V(() => D.value.find((Y) => Y.type === "item" && !Y.props.disabled)), H = V(() => (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && P.value === K.value?.title) && D.value.length > 0 && !r.value && !s.value), G = /* @__PURE__ */ ae(), X = rc(G, o);
    function fe(Y) {
      f = !0, Te(() => f = !1), e.openOnClear && (N.value = !0);
    }
    function Z() {
      L.value || (N.value = !0);
    }
    function ce(Y) {
      L.value || (i.value && (Y.preventDefault(), Y.stopPropagation()), N.value = !N.value);
    }
    function Ce(Y) {
      (Il(Y) || Y.key === "Backspace") && o.value?.focus();
    }
    function Ve(Y) {
      if (qk(Y) || b.isReadonly.value) return;
      const le = o.value?.selectionStart, oe = w.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(Y.key) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (N.value = !0), ["Escape"].includes(Y.key) && (N.value = !1), H.value && ["Enter", "Tab"].includes(Y.key) && K.value && !w.value.some((ge) => {
        let {
          value: he
        } = ge;
        return he === K.value.value;
      }) && j(K.value), Y.key === "ArrowDown" && H.value && G.value?.focus("next"), Y.key === "Enter" && P.value && (j(gn(e, P.value), !0, !0), I.value && (C.value = "")), ["Backspace", "Delete"].includes(Y.key)) {
        if (!e.multiple && I.value && w.value.length > 0 && !P.value) return j(w.value[0], !1);
        if (~d.value) {
          Y.preventDefault();
          const ge = d.value;
          j(w.value[d.value], !1), d.value = ge >= oe - 1 ? oe - 2 : ge;
        } else Y.key === "Backspace" && !P.value && (d.value = oe - 1);
        return;
      }
      if (e.multiple)
        if (Y.key === "ArrowLeft") {
          if (d.value < 0 && le && le > 0) return;
          const ge = d.value > -1 ? d.value - 1 : oe - 1;
          w.value[ge] ? d.value = ge : (d.value = -1, o.value?.setSelectionRange(P.value.length, P.value.length));
        } else if (Y.key === "ArrowRight") {
          if (d.value < 0) return;
          const ge = d.value + 1;
          w.value[ge] ? d.value = ge : (d.value = -1, o.value?.setSelectionRange(0, 0));
        } else ~d.value && Il(Y) && (d.value = -1);
    }
    function Pe(Y) {
      const le = Y?.clipboardData?.getData("Text") ?? "", oe = re(le);
      oe.length > 1 && e.multiple && (Y.preventDefault(), z(oe));
    }
    function M() {
      e.eager && c.value?.calculateVisibleItems();
    }
    function O() {
      i.value && o.value?.focus(), r.value = !0, T.value = null;
    }
    function j(Y) {
      let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!(!Y || Y.props.disabled))
        if (e.multiple) {
          const ge = w.value.findIndex((ke) => (e.valueComparator || xt)(ke.value, Y.value)), he = le ?? !~ge;
          if (~ge) {
            const ke = he ? [...w.value, Y] : [...w.value];
            ke.splice(ge, 1), w.value = ke;
          } else he && (w.value = [...w.value, Y]);
          e.clearOnSelect && (P.value = "");
        } else {
          const ge = le !== !1;
          w.value = ge ? [Y] : [], (!r.value || e.alwaysFilter) && C.value && (T.value = C.value), C.value = ge && !I.value ? Y.title : "", Te(() => {
            N.value = oe, r.value = !0;
          });
        }
    }
    function re(Y) {
      const oe = [`
`, ...e.delimiters ?? []].map(Ti).join("|");
      return Y.split(new RegExp(`(?:${oe})+`));
    }
    async function z(Y) {
      for (let le of Y)
        le = le.trim(), le && (j(gn(e, le)), await Te());
    }
    function ie(Y) {
      i.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function me(Y) {
      s.value = !1;
    }
    return ue(i, (Y, le) => {
      if (!(Y || Y === le) && (d.value = -1, N.value = !1, P.value)) {
        if (e.multiple) {
          j(gn(e, P.value));
          return;
        }
        if (!I.value) return;
        w.value.some((oe) => {
          let {
            title: ge
          } = oe;
          return ge === P.value;
        }) ? C.value = "" : j(gn(e, P.value));
      }
    }), ue(N, (Y) => {
      if (!e.hideSelected && Y && w.value.length && r.value) {
        const le = D.value.findIndex((oe) => w.value.some((ge) => (e.valueComparator || xt)(ge.value, oe.value)));
        Ye && window.requestAnimationFrame(() => {
          le >= 0 && c.value?.scrollToIndex(le);
        });
      }
      Y && (T.value = null);
    }), ue(v, (Y, le) => {
      N.value || i.value && !le.length && Y.length && (N.value = !0);
    }), te(() => {
      const Y = !!(!e.hideNoData || D.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), le = w.value.length > 0, oe = Mn.filterProps(e);
      return p(Mn, U({
        ref: o
      }, oe, {
        modelValue: P.value,
        "onUpdate:modelValue": (ge) => P.value = ge,
        focused: i.value,
        "onUpdate:focused": (ge) => i.value = ge,
        validationValue: w.externalValue,
        counterValue: F.value,
        dirty: le,
        class: ["v-combobox", {
          "v-combobox--active-menu": N.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!I.value,
          "v-combobox--selecting-index": d.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: b.isReadonly.value,
        placeholder: le ? void 0 : e.placeholder,
        "onClick:clear": fe,
        "onMousedown:control": Z,
        onKeydown: Ve,
        onPaste: Pe,
        "aria-expanded": q.value,
        "aria-controls": $.value
      }), {
        ...a,
        default: (ge) => {
          let {
            id: he
          } = ge;
          return _(ye, null, [p(El, U({
            id: J.value,
            ref: u,
            modelValue: N.value,
            "onUpdate:modelValue": (ke) => N.value = ke,
            activator: "parent",
            contentClass: "v-combobox__content",
            disabled: L.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            onAfterEnter: M,
            onAfterLeave: O
          }, e.menuProps), {
            default: () => [Y && p(Dl, U({
              ref: G,
              filterable: !0,
              selected: ne.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (ke) => ke.preventDefault(),
              selectable: !!D.value.length,
              onKeydown: Ce,
              onFocusin: ie,
              onFocusout: me,
              tabindex: "-1",
              "aria-live": "polite",
              "aria-labelledby": `${he.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, X, e.listProps), {
              default: () => [a["prepend-item"]?.(), !D.value.length && !e.hideNoData && (a["no-data"]?.() ?? p(mn, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), p(fr, {
                ref: c,
                renderless: !0,
                items: D.value,
                itemKey: "value"
              }, {
                default: (ke) => {
                  let {
                    item: we,
                    index: De,
                    itemRef: Fe
                  } = ke;
                  const Re = U(we.props, {
                    ref: Fe,
                    key: we.value,
                    active: H.value && we === K.value ? !0 : void 0,
                    onClick: () => j(we, null),
                    "aria-posinset": De + 1,
                    "aria-setsize": D.value.length
                  });
                  return we.type === "divider" ? a.divider?.({
                    props: we.raw,
                    index: De
                  }) ?? p(nn, U(we.props, {
                    key: `divider-${De}`
                  }), null) : we.type === "subheader" ? a.subheader?.({
                    props: we.raw,
                    index: De
                  }) ?? p(Hl, U(we.props, {
                    key: `subheader-${De}`
                  }), null) : a.item?.({
                    item: we,
                    index: De,
                    props: Re
                  }) ?? p(mn, U(Re, {
                    role: "option"
                  }), {
                    prepend: (mt) => {
                      let {
                        isSelected: Ke
                      } = mt;
                      return _(ye, null, [e.multiple && !e.hideSelected ? p(pn, {
                        key: we.value,
                        modelValue: Ke,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (Yt) => Yt.preventDefault()
                      }, null) : void 0, we.props.prependAvatar && p(an, {
                        image: we.props.prependAvatar
                      }, null), we.props.prependIcon && p(He, {
                        icon: we.props.prependIcon
                      }, null)]);
                    },
                    title: () => r.value ? we.title : fh("v-combobox", we.title, B(we)?.title)
                  });
                }
              }), a["append-item"]?.()]
            })]
          }), w.value.map((ke, we) => {
            function De(Ke) {
              Ke.stopPropagation(), Ke.preventDefault(), j(ke, !1);
            }
            const Fe = U(Jn.filterProps(ke.props), {
              "onClick:close": De,
              onKeydown(Ke) {
                Ke.key !== "Enter" && Ke.key !== " " || (Ke.preventDefault(), Ke.stopPropagation(), De(Ke));
              },
              onMousedown(Ke) {
                Ke.preventDefault(), Ke.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), Re = g.value ? !!a.chip : !!a.selection, mt = Re ? er(g.value ? a.chip({
              item: ke,
              index: we,
              props: Fe
            }) : a.selection({
              item: ke,
              index: we
            })) : void 0;
            if (!(Re && !mt))
              return _("div", {
                key: ke.value,
                class: ee(["v-combobox__selection", we === d.value && ["v-combobox__selection--selected", y.value]]),
                style: ve(we === d.value ? h.value : {})
              }, [g.value ? a.chip ? p(Ee, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: S.value,
                    size: "small",
                    text: ke.title
                  }
                }
              }, {
                default: () => [mt]
              }) : p(Jn, U({
                key: "chip",
                closable: S.value,
                size: "small",
                text: ke.title,
                disabled: ke.props.disabled
              }, Fe), null) : mt ?? _("span", {
                class: "v-combobox__selection-text"
              }, [ke.title, e.multiple && we < w.value.length - 1 && _("span", {
                class: "v-combobox__selection-comma"
              }, [qt(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var ge = arguments.length, he = new Array(ge), ke = 0; ke < ge; ke++)
            he[ke] = arguments[ke];
          return _(ye, null, [a["append-inner"]?.(...he), (!e.hideNoData || e.items.length) && e.menuIcon ? p(He, {
            class: "v-combobox__menu-icon",
            color: o.value?.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: ce,
            onClick: Qi,
            "aria-hidden": !0,
            tabindex: "-1"
          }, null) : void 0, e.appendInnerIcon && p(x, {
            key: "append-icon",
            name: "appendInner",
            color: he[0].iconColor.value
          }, null)]);
        }
      });
    }), St({
      isFocused: i,
      isPristine: r,
      menu: N,
      search: P,
      selectionIndex: d,
      filteredItems: A,
      select: j
    }, o);
  }
}), FV = R({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  },
  disabled: {
    type: [Boolean, Array],
    default: void 0
  },
  hideActions: Boolean
}, "VConfirmEdit"), LV = Q()({
  name: "VConfirmEdit",
  props: FV(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = pe(e, "modelValue"), o = /* @__PURE__ */ ae();
    at(() => {
      o.value = structuredClone(Ad(l.value));
    });
    const {
      t: i
    } = Ue(), r = V(() => xt(l.value, o.value));
    function s(m) {
      return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
    }
    const u = V(() => s("save")), c = V(() => s("cancel"));
    function d() {
      l.value = o.value, n("save", o.value);
    }
    function f() {
      o.value = structuredClone(Ad(l.value)), n("cancel");
    }
    function v(m) {
      return _(ye, null, [p(Oe, U({
        disabled: c.value,
        variant: "text",
        color: e.color,
        onClick: f,
        text: i(e.cancelText)
      }, m), null), p(Oe, U({
        disabled: u.value,
        variant: "text",
        color: e.color,
        onClick: d,
        text: i(e.okText)
      }, m), null)]);
    }
    let k = !1;
    return te(() => _(ye, null, [a.default?.({
      model: o,
      save: d,
      cancel: f,
      isPristine: r.value,
      get actions() {
        return k = !0, v;
      }
    }), !e.hideActions && !k && v()])), {
      save: d,
      cancel: f,
      isPristine: r
    };
  }
}), Jh = R({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Qh = /* @__PURE__ */ Symbol.for("vuetify:datatable:expanded");
function Sr(e) {
  const t = /* @__PURE__ */ E(() => e.expandOnClick), n = pe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = /* @__PURE__ */ Ie(r.value);
    if (s)
      u.add(c);
    else {
      const d = [...n.value].find((f) => /* @__PURE__ */ Ie(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = /* @__PURE__ */ Ie(r.value);
    return [...n.value].some((u) => /* @__PURE__ */ Ie(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = {
    expand: a,
    expanded: n,
    expandOnClick: t,
    isExpanded: l,
    toggleExpand: o
  };
  return Ze(Qh, i), i;
}
function ey() {
  const e = $e(Qh);
  if (!e) throw new Error("foo");
  return e;
}
const bc = R({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), ty = /* @__PURE__ */ Symbol.for("vuetify:data-table-group");
function Sc(e) {
  return {
    groupBy: pe(e, "groupBy")
  };
}
function kr(e) {
  const {
    disableSort: t,
    groupBy: n,
    sortBy: a
  } = e, l = /* @__PURE__ */ ae(/* @__PURE__ */ new Set()), o = V(() => n.value.map((c) => ({
    ...c,
    order: c.order ?? !1
  })).concat(t?.value ? [] : a.value));
  function i(c) {
    return l.value.has(c.id);
  }
  function r(c) {
    const d = new Set(l.value);
    i(c) ? d.delete(c.id) : d.add(c.id), l.value = d;
  }
  function s(c) {
    function d(f) {
      const v = [];
      for (const k of f.items)
        "type" in k && k.type === "group" ? v.push(...d(k)) : v.push(k);
      return [...new Set(v)];
    }
    return d({
      items: c
    });
  }
  const u = {
    sortByWithGroups: o,
    toggleGroup: r,
    opened: l,
    groupBy: n,
    extractRows: s,
    isGroupOpen: i
  };
  return Ze(ty, u), u;
}
function ny() {
  const e = $e(ty);
  if (!e) throw new Error("Missing group!");
  return e;
}
function OV(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Ya(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function ay(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = OV(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({
      depth: n,
      id: c,
      key: u,
      value: s,
      items: i.length ? ay(r, i, n + 1, c) : r,
      type: "group"
    });
  }), o;
}
function ly(e, t, n) {
  const a = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...ly(l.items, t, n)), n && a.push({
      ...l,
      type: "group-summary"
    }))) : a.push(l);
  return a;
}
function wr(e, t, n, a) {
  return {
    flatItems: V(() => {
      if (!t.value.length) return e.value;
      const o = ay(e.value, t.value.map((i) => i.key));
      return ly(o, n.value, kt(a));
    })
  };
}
function pr(e) {
  let {
    page: t,
    itemsPerPage: n,
    sortBy: a,
    groupBy: l,
    search: o
  } = e;
  const i = ct("VDataTable"), r = () => ({
    page: t.value,
    itemsPerPage: n.value,
    sortBy: a.value,
    groupBy: l.value,
    search: o.value
  });
  let s = null;
  ue(r, (u) => {
    xt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, {
    deep: !0,
    immediate: !0
  });
}
const kc = R({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), oy = /* @__PURE__ */ Symbol.for("vuetify:data-table-pagination");
function wc(e) {
  const t = pe(e, "page", void 0, (a) => Number(a ?? 1)), n = pe(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return {
    page: t,
    itemsPerPage: n
  };
}
function pc(e) {
  const {
    page: t,
    itemsPerPage: n,
    itemsLength: a
  } = e, l = V(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = V(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = V(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ue([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = je(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = je(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = je(f, 1, i.value);
  }
  const d = {
    page: t,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: o,
    pageCount: i,
    itemsLength: a,
    nextPage: s,
    prevPage: u,
    setPage: c,
    setItemsPerPage: r
  };
  return Ze(oy, d), d;
}
function $V() {
  const e = $e(oy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function iy(e) {
  const t = ct("usePaginatedItems"), {
    items: n,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: o
  } = e, i = V(() => o.value <= 0 ? n.value : n.value.slice(a.value, l.value));
  return ue(i, (r) => {
    t.emit("update:currentItems", r);
  }, {
    immediate: !0
  }), {
    paginatedItems: i
  };
}
const NV = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    let {
      items: t,
      value: n
    } = e;
    return new Set(n ? [t[0]?.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: t
    } = e;
    return t;
  }
}, ry = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      currentPage: n,
      selected: a
    } = e;
    return ry.select({
      items: n,
      value: t,
      selected: a
    });
  }
}, RV = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      allItems: n
    } = e;
    return new Set(t ? n.map((a) => a.value) : []);
  }
}, sy = R({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: Function
}, "DataTable-select"), uy = /* @__PURE__ */ Symbol.for("vuetify:data-table-selection");
function xr(e, t) {
  let {
    allItems: n,
    currentPage: a
  } = t;
  const l = pe(e, "modelValue", e.modelValue, (x) => {
    const w = e.valueComparator;
    return w ? new Set(Xe(x).map((b) => n.value.find((S) => w(b, S.value))?.value ?? b)) : new Set(Xe(x).map((b) => ya(b) ? n.value.find((S) => b === S.value)?.value ?? b : n.value.find((S) => xt(b, S.value))?.value ?? b));
  }, (x) => [...x.values()]), o = V(() => n.value.filter((x) => x.selectable)), i = V(() => a.value.filter((x) => x.selectable)), r = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return NV;
      case "all":
        return RV;
      default:
        return ry;
    }
  }), s = /* @__PURE__ */ se(null);
  function u(x) {
    return Xe(x).every((w) => l.value.has(w.value));
  }
  function c(x) {
    return Xe(x).some((w) => l.value.has(w.value));
  }
  function d(x, w) {
    const b = r.value.select({
      items: x,
      value: w,
      selected: new Set(l.value)
    });
    l.value = b;
  }
  function f(x, w, b) {
    const S = [];
    if (w = w ?? a.value.findIndex((g) => g.value === x.value), e.selectStrategy !== "single" && b?.shiftKey && s.value !== null) {
      const [g, I] = [s.value, w].sort((C, T) => C - T);
      S.push(...a.value.slice(g, I + 1).filter((C) => C.selectable));
    } else
      S.push(x), s.value = w;
    d(S, !u([x]));
  }
  function v(x) {
    const w = r.value.selectAll({
      value: x,
      allItems: o.value,
      currentPage: i.value,
      selected: new Set(l.value)
    });
    l.value = w;
  }
  const k = V(() => l.value.size > 0), m = V(() => {
    const x = r.value.allSelected({
      allItems: o.value,
      currentPage: i.value
    });
    return !!x.length && u(x);
  }), h = {
    toggleSelect: f,
    select: d,
    selectAll: v,
    isSelected: u,
    isSomeSelected: c,
    someSelected: k,
    allSelected: m,
    showSelectAll: /* @__PURE__ */ E(() => r.value.showSelectAll),
    lastSelectedIndex: s,
    selectStrategy: r
  };
  return Ze(uy, h), h;
}
function Cr() {
  const e = $e(uy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const cy = R({
  initialSortOrder: {
    type: String,
    default: "asc",
    validator: (e) => !e || ["asc", "desc"].includes(e)
  },
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: {
    type: [Boolean, Object],
    default: !1
  },
  mustSort: Boolean
}, "DataTable-sort"), dy = /* @__PURE__ */ Symbol.for("vuetify:data-table-sort");
function _r(e) {
  const t = /* @__PURE__ */ E(() => e.initialSortOrder), n = pe(e, "sortBy");
  return {
    initialSortOrder: t,
    sortBy: n,
    multiSort: /* @__PURE__ */ E(() => e.multiSort),
    mustSort: /* @__PURE__ */ E(() => e.mustSort)
  };
}
function HV(e, t) {
  if (!Ua(e))
    return {
      active: !!e
    };
  const {
    key: n,
    mode: a,
    modifier: l
  } = e, o = l === "alt" && t?.altKey || l === "shift" && t?.shiftKey;
  return {
    active: !n || t?.ctrlKey || t?.metaKey || !1,
    mode: o ? a === "append" ? "prepend" : "append" : a
  };
}
function Vr(e) {
  const {
    initialSortOrder: t,
    sortBy: n,
    mustSort: a,
    multiSort: l,
    page: o
  } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({
      ...m
    })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, k = t.value === "desc" ? "asc" : "desc";
    if (f)
      f.order === k ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = k;
    else {
      const {
        active: m,
        mode: y
      } = HV(l.value, c);
      m ? y === "prepend" ? d.unshift({
        key: u.key,
        order: v
      }) : d.push({
        key: u.key,
        order: v
      }) : d = [{
        key: u.key,
        order: v
      }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = {
    sortBy: n,
    toggleSort: i,
    isSorted: r
  };
  return Ze(dy, s), s;
}
function fy() {
  const e = $e(dy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function xc(e, t, n, a) {
  const l = Ue();
  return {
    sortedItems: V(() => n.value.length ? WV(t.value, n.value, l.current.value, {
      transform: a?.transform,
      sortFunctions: {
        ...e.customKeySort,
        ...a?.sortFunctions?.value
      },
      sortRawFunctions: a?.sortRawFunctions?.value
    }) : t.value)
  };
}
function WV(e, t, n, a) {
  const l = new Intl.Collator(n, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((i) => [i, a?.transform ? a.transform(i) : i]).sort((i, r) => {
    for (let s = 0; s < t.length; s++) {
      let u = !1;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === !1) continue;
      let f = Ya(i[1], c), v = Ya(r[1], c), k = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [k, m] = [m, k]), a?.sortRawFunctions?.[c]) {
        const y = a.sortRawFunctions[c](k, m);
        if (y == null) continue;
        if (u = !0, y) return y;
      }
      if (a?.sortFunctions?.[c]) {
        const y = a.sortFunctions[c](f, v);
        if (y == null) continue;
        if (u = !0, y) return y;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((y) => y != null ? y.toString().toLocaleLowerCase() : y), f !== v))
        return ai(f) && ai(v) ? 0 : ai(f) ? -1 : ai(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const zV = R({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function jV(e, t) {
  const n = e.returnObject ? t : rt(t, e.itemValue), a = rt(t, e.itemSelectable, !0);
  return {
    type: "item",
    value: n,
    selectable: a,
    raw: t
  };
}
function YV(e, t) {
  const n = [];
  for (const a of t)
    n.push(jV(e, a));
  return n;
}
function UV(e) {
  return {
    items: V(() => YV(e, e.items))
  };
}
const KV = R({
  search: String,
  loading: Boolean,
  ...Se(),
  ...zV(),
  ...sy(),
  ...cy(),
  ...kc({
    itemsPerPage: 5
  }),
  ...Jh(),
  ...bc(),
  ...Wl(),
  ...Ae(),
  ...ta({
    transition: {
      component: po,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), GV = Q()({
  name: "VDataIterator",
  props: KV(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "groupBy"), l = /* @__PURE__ */ E(() => e.search), {
      items: o
    } = UV(e), {
      filteredItems: i
    } = zl(e, o, l, {
      transform: (K) => K.raw
    }), {
      initialSortOrder: r,
      sortBy: s,
      multiSort: u,
      mustSort: c
    } = _r(e), {
      page: d,
      itemsPerPage: f
    } = wc(e), {
      toggleSort: v
    } = Vr({
      initialSortOrder: r,
      sortBy: s,
      multiSort: u,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: k,
      opened: m,
      extractRows: y,
      isGroupOpen: h,
      toggleGroup: x
    } = kr({
      groupBy: a,
      sortBy: s
    }), {
      sortedItems: w
    } = xc(e, i, k, {
      transform: (K) => K.raw
    }), {
      flatItems: b
    } = wr(w, a, m, !1), S = /* @__PURE__ */ E(() => b.value.length), {
      startIndex: g,
      stopIndex: I,
      pageCount: C,
      prevPage: T,
      nextPage: P,
      setItemsPerPage: F,
      setPage: A
    } = pc({
      page: d,
      itemsPerPage: f,
      itemsLength: S
    }), {
      paginatedItems: B
    } = iy({
      items: b,
      startIndex: g,
      stopIndex: I,
      itemsPerPage: f
    }), D = V(() => y(B.value)), {
      isSelected: L,
      select: W,
      selectAll: N,
      toggleSelect: J
    } = xr(e, {
      allItems: o,
      currentPage: D
    }), {
      isExpanded: q,
      toggleExpand: $
    } = Sr(e);
    pr({
      page: d,
      itemsPerPage: f,
      sortBy: s,
      groupBy: a,
      search: l
    });
    const ne = V(() => ({
      page: d.value,
      itemsPerPage: f.value,
      sortBy: s.value,
      pageCount: C.value,
      toggleSort: v,
      prevPage: T,
      nextPage: P,
      setPage: A,
      setItemsPerPage: F,
      isSelected: L,
      select: W,
      selectAll: N,
      toggleSelect: J,
      isExpanded: q,
      toggleExpand: $,
      isGroupOpen: h,
      toggleGroup: x,
      items: D.value,
      itemsCount: i.value.length,
      groupedItems: B.value
    }));
    return te(() => p(e.tag, {
      class: ee(["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.header?.(ne.value), p(Ot, {
        transition: e.transition
      }, {
        default: () => [e.loading ? p(zo, {
          key: "loader",
          name: "v-data-iterator",
          active: !0
        }, {
          default: (K) => n.loader?.(K)
        }) : _("div", {
          key: "items"
        }, [B.value.length ? n.default?.(ne.value) : n["no-data"]?.()])]
      }), n.footer?.(ne.value)]
    })), {};
  }
});
function qV() {
  const e = /* @__PURE__ */ ae([]);
  Ov(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return {
    refs: e,
    updateRef: t
  };
}
const XV = R({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: xe,
    default: "$first"
  },
  prevIcon: {
    type: xe,
    default: "$prev"
  },
  nextIcon: {
    type: xe,
    default: "$next"
  },
  lastIcon: {
    type: xe,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...Et(),
  ...Se(),
  ...it(),
  ...vt(),
  ...Je(),
  ...On(),
  ...Ae({
    tag: "nav"
  }),
  ...Ne(),
  ...rn({
    variant: "text"
  })
}, "VPagination"), Ys = Q()({
  name: "VPagination",
  props: XV(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = pe(e, "modelValue"), {
      t: o,
      n: i
    } = Ue(), {
      isRtl: r
    } = gt(), {
      themeClasses: s
    } = We(e), {
      width: u
    } = ln(), c = /* @__PURE__ */ se(-1);
    lt(void 0, {
      scoped: !0
    });
    const {
      resizeRef: d
    } = vn((C) => {
      if (!C.length) return;
      const {
        target: T,
        contentRect: P
      } = C[0], F = T.querySelector(".v-pagination__list > *");
      if (!F) return;
      const A = P.width, B = F.offsetWidth + parseFloat(getComputedStyle(F).marginRight) * 2;
      c.value = m(A, B);
    }), f = V(() => parseInt(e.length, 10)), v = V(() => parseInt(e.start, 10)), k = V(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
    function m(C, T) {
      const P = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((C - T * P) / T).toFixed(2))
      ));
    }
    const y = V(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
      if (k.value <= 0) return [];
      if (k.value === 1) return [l.value];
      if (f.value <= k.value)
        return Qt(f.value, v.value);
      const C = k.value % 2 === 0, T = C ? k.value / 2 : Math.floor(k.value / 2), P = C ? T : T + 1, F = f.value - T;
      if (P - l.value >= 0)
        return [...Qt(Math.max(1, k.value - 1), v.value), e.ellipsis, f.value];
      if (l.value - F >= (C ? 1 : 0)) {
        const A = k.value - 1, B = f.value - A + v.value;
        return [v.value, e.ellipsis, ...Qt(A, B)];
      } else {
        const A = Math.max(1, k.value - 2), B = A === 1 ? l.value : l.value - Math.ceil(A / 2) + v.value;
        return [v.value, e.ellipsis, ...Qt(A, B), e.ellipsis, f.value];
      }
    });
    function h(C, T, P) {
      C.preventDefault(), l.value = T, P && a(P, T);
    }
    const {
      refs: x,
      updateRef: w
    } = qV();
    lt({
      VPaginationBtn: {
        color: /* @__PURE__ */ E(() => e.color),
        border: /* @__PURE__ */ E(() => e.border),
        density: /* @__PURE__ */ E(() => e.density),
        size: /* @__PURE__ */ E(() => e.size),
        variant: /* @__PURE__ */ E(() => e.variant),
        rounded: /* @__PURE__ */ E(() => e.rounded),
        elevation: /* @__PURE__ */ E(() => e.elevation)
      }
    });
    const b = V(() => y.value.map((C, T) => {
      const P = (F) => w(F, T);
      if (typeof C == "string")
        return {
          isActive: !1,
          key: `ellipsis-${T}`,
          page: C,
          props: {
            ref: P,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const F = C === l.value;
        return {
          isActive: F,
          key: C,
          page: i(C),
          props: {
            ref: P,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || Number(e.length) < 2,
            color: F ? e.activeColor : e.color,
            "aria-current": F,
            "aria-label": o(F ? e.currentPageAriaLabel : e.pageAriaLabel, C),
            onClick: (A) => h(A, C)
          }
        };
      }
    })), S = V(() => {
      const C = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (P) => h(P, v.value, "first"),
          disabled: C,
          "aria-label": o(e.firstAriaLabel),
          "aria-disabled": C
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (P) => h(P, l.value - 1, "prev"),
          disabled: C,
          "aria-label": o(e.previousAriaLabel),
          "aria-disabled": C
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (P) => h(P, l.value + 1, "next"),
          disabled: T,
          "aria-label": o(e.nextAriaLabel),
          "aria-disabled": T
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (P) => h(P, v.value + f.value - 1, "last"),
          disabled: T,
          "aria-label": o(e.lastAriaLabel),
          "aria-disabled": T
        } : void 0
      };
    });
    function g() {
      const C = l.value - v.value;
      x.value[C]?.$el.focus();
    }
    function I(C) {
      C.key === hs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Te(g)) : C.key === hs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Te(g));
    }
    return te(() => p(e.tag, {
      ref: d,
      class: ee(["v-pagination", s.value, e.class]),
      style: ve(e.style),
      role: "navigation",
      "aria-label": o(e.ariaLabel),
      onKeydown: I,
      "data-test": "v-pagination-root"
    }, {
      default: () => [_("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && _("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(S.value.first) : p(Oe, U({
        _as: "VPaginationBtn"
      }, S.value.first), null)]), _("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(S.value.prev) : p(Oe, U({
        _as: "VPaginationBtn"
      }, S.value.prev), null)]), b.value.map((C, T) => _("li", {
        key: C.key,
        class: ee(["v-pagination__item", {
          "v-pagination__item--is-active": C.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(C) : p(Oe, U({
        _as: "VPaginationBtn"
      }, C.props), {
        default: () => [C.page]
      })])), _("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(S.value.next) : p(Oe, U({
        _as: "VPaginationBtn"
      }, S.value.next), null)]), e.showFirstLastPage && _("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(S.value.last) : p(Oe, U({
        _as: "VPaginationBtn"
      }, S.value.last), null)])])]
    })), {};
  }
}), Cc = R({
  color: String,
  prevIcon: {
    type: xe,
    default: "$prev"
  },
  nextIcon: {
    type: xe,
    default: "$next"
  },
  firstIcon: {
    type: xe,
    default: "$first"
  },
  lastIcon: {
    type: xe,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), Ao = Q()({
  name: "VDataTableFooter",
  props: Cc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ue(), {
      page: l,
      pageCount: o,
      startIndex: i,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: u,
      setItemsPerPage: c
    } = $V(), d = V(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: isNaN(Number(f.title)) ? a(f.title) : f.title
    }));
    return te(() => {
      const f = Ys.filterProps(e);
      return _("div", {
        class: "v-data-table-footer"
      }, [n.prepend?.(), _("div", {
        class: "v-data-table-footer__items-per-page"
      }, [_("span", null, [a(e.itemsPerPageText)]), p(cc, {
        items: d.value,
        itemColor: e.color,
        modelValue: u.value,
        "onUpdate:modelValue": (v) => c(Number(v)),
        density: "compact",
        variant: "outlined",
        "aria-label": a(e.itemsPerPageText),
        hideDetails: !0
      }, null)]), _("div", {
        class: "v-data-table-footer__info"
      }, [_("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), _("div", {
        class: "v-data-table-footer__pagination"
      }, [p(Ys, U({
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        density: "comfortable",
        firstAriaLabel: e.firstPageLabel,
        lastAriaLabel: e.lastPageLabel,
        length: o.value,
        nextAriaLabel: e.nextPageLabel,
        previousAriaLabel: e.prevPageLabel,
        rounded: !0,
        showFirstLastPage: !0,
        totalVisible: e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, Be(f, ["color"])), null)])]);
    }), {};
  }
}), Do = D0({
  align: {
    type: String,
    default: "start"
  },
  fixed: {
    type: [Boolean, String],
    default: !1
  },
  fixedOffset: [Number, String],
  fixedEndOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  firstFixedEnd: Boolean,
  noPadding: Boolean,
  indent: [Number, String],
  empty: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, t) => {
  let {
    slots: n
  } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return p(a, {
    class: ee(["v-data-table__td", {
      "v-data-table-column--fixed": l === "start",
      "v-data-table-column--fixed-end": l === "end",
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--first-fixed-end": e.firstFixedEnd,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap,
      "v-data-table-column--empty": e.empty
    }, `v-data-table-column--align-${e.align}`]),
    style: {
      height: de(e.height),
      width: de(e.width),
      maxWidth: de(e.maxWidth),
      left: l === "start" ? de(e.fixedOffset || null) : void 0,
      right: l === "end" ? de(e.fixedEndOffset || null) : void 0,
      paddingInlineStart: e.indent ? de(e.indent) : void 0
    }
  }, {
    default: () => [n.default?.()]
  });
}), ZV = R({
  headers: Array
}, "DataTable-header"), vy = /* @__PURE__ */ Symbol.for("vuetify:data-table-headers"), my = {
  title: "",
  sortable: !1
}, JV = {
  ...my,
  width: 48
};
function QV() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }));
  return {
    enqueue: (n, a) => {
      let l = !1;
      for (let o = 0; o < t.length; o++)
        if (t[o].priority > a) {
          t.splice(o, 0, {
            element: n,
            priority: a
          }), l = !0;
          break;
        }
      l || t.push({
        element: n,
        priority: a
      });
    },
    size: () => t.length,
    count: () => {
      let n = 0;
      if (!t.length) return 0;
      const a = Math.floor(t[0].priority);
      for (let l = 0; l < t.length; l++)
        Math.floor(t[l].priority) === a && (n += 1);
      return n;
    },
    dequeue: () => t.shift()
  };
}
function Us(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    t.push(e);
  else
    for (const n of e.children)
      Us(n, t);
  return t;
}
function gy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e)
    n.key && t.add(n.key), n.children && gy(n.children, t);
  return t;
}
function e1(e) {
  if (e.key) {
    if (e.key === "data-table-group") return my;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return JV;
  }
}
function _c(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => _c(n, t + 1))) : t;
}
function t1(e) {
  let t = !1;
  function n(o, i) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (o)
      if (r !== "none" && (o.fixed = r), o.fixed === !0 && (o.fixed = "start"), o.fixed === i)
        if (o.children)
          if (i === "start")
            for (let s = o.children.length - 1; s >= 0; s--)
              n(o.children[s], i, i);
          else
            for (let s = 0; s < o.children.length; s++)
              n(o.children[s], i, i);
        else
          !t && i === "start" ? o.lastFixed = !0 : !t && i === "end" ? o.firstFixedEnd = !0 : isNaN(Number(o.width)) ? (`${o.key}`, void 0) : o.minWidth = Math.max(Number(o.width) || 0, Number(o.minWidth) || 0), t = !0;
      else if (o.children)
        if (i === "start")
          for (let s = o.children.length - 1; s >= 0; s--)
            n(o.children[s], i);
        else
          for (let s = 0; s < o.children.length; s++)
            n(o.children[s], i);
      else
        t = !1;
  }
  for (let o = e.length - 1; o >= 0; o--)
    n(e[o], "start");
  for (let o = 0; o < e.length; o++)
    n(e[o], "end");
  let a = 0;
  for (let o = 0; o < e.length; o++)
    a = hy(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--)
    l = yy(e[o], l);
}
function hy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children)
      t = hy(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function yy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children)
      t = yy(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function n1(e, t) {
  const n = [];
  let a = 0;
  const l = QV(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const {
        element: u,
        priority: c
      } = l.dequeue(), d = t - a - _c(u);
      if (r.push({
        ...u,
        rowspan: d ?? 1,
        colspan: u.children ? Us(u).length : 1
      }), u.children)
        for (const f of u.children) {
          const v = c % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + d + v);
        }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return {
    columns: e.map((i) => Us(i)).flat(),
    headers: n
  };
}
function by(e) {
  const t = [];
  for (const n of e) {
    const a = {
      ...e1(n),
      ...n
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = {
      ...a,
      key: l,
      value: o,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? by(a.children) : void 0
    };
    t.push(i);
  }
  return t;
}
function Vc(e, t) {
  const n = /* @__PURE__ */ ae([]), a = /* @__PURE__ */ ae([]), l = /* @__PURE__ */ ae({}), o = /* @__PURE__ */ ae({}), i = /* @__PURE__ */ ae({});
  at(() => {
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({
      key: m,
      title: Bn(m)
    }))).slice(), c = gy(u);
    t?.groupBy?.value.length && !c.has("data-table-group") && u.unshift({
      key: "data-table-group",
      title: "Group"
    }), t?.showSelect?.value && !c.has("data-table-select") && u.unshift({
      key: "data-table-select"
    }), t?.showExpand?.value && !c.has("data-table-expand") && u.push({
      key: "data-table-expand"
    });
    const d = by(u);
    t1(d);
    const f = Math.max(...d.map((m) => _c(m))) + 1, v = n1(d, f);
    n.value = v.headers, a.value = v.columns;
    const k = v.headers.flat(1);
    for (const m of k)
      m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = {
    headers: n,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: o,
    filterFunctions: i
  };
  return Ze(vy, r), r;
}
function Ir() {
  const e = $e(vy);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Sy = R({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  initialSortOrder: String,
  sortAscIcon: {
    type: xe,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: xe,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...it(),
  ...tl(),
  ...sr()
}, "VDataTableHeaders"), Xa = Q()({
  name: "VDataTableHeaders",
  props: Sy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ue(), {
      toggleSort: l,
      sortBy: o,
      isSorted: i
    } = fy(), {
      someSelected: r,
      allSelected: s,
      selectAll: u,
      showSelectAll: c
    } = Cr(), {
      columns: d,
      headers: f
    } = Ir(), {
      loaderClasses: v
    } = Wo(e);
    function k(T, P) {
      if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
      const F = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
      return {
        position: "sticky",
        left: F === "start" ? de(T.fixedOffset) : void 0,
        right: F === "end" ? de(T.fixedEndOffset) : void 0,
        top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0
      };
    }
    function m(T, P) {
      T.key === "Enter" && !e.disableSort && l(P, T);
    }
    function y(T) {
      const P = o.value.find((F) => F.key === T.key);
      return !P && e.initialSortOrder === "asc" || P?.order === "asc" ? e.sortAscIcon : e.sortDescIcon;
    }
    const {
      backgroundColorClasses: h,
      backgroundColorStyles: x
    } = ze(() => e.color), {
      displayClasses: w,
      mobile: b
    } = ln(e), S = V(() => ({
      headers: f.value,
      columns: d.value,
      toggleSort: l,
      isSorted: i,
      sortBy: o.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: u,
      getSortIcon: y
    })), g = V(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, w.value, v.value]), I = (T) => {
      let {
        column: P,
        x: F,
        y: A
      } = T;
      const B = P.key === "data-table-select" || P.key === "data-table-expand", D = P.key === "data-table-group" && P.width === 0 && !P.title, L = U(e.headerProps ?? {}, P.headerProps ?? {});
      return p(Do, U({
        tag: "th",
        align: P.align,
        class: [{
          "v-data-table__th--sortable": P.sortable && !e.disableSort,
          "v-data-table__th--sorted": i(P),
          "v-data-table__th--fixed": P.fixed
        }, ...g.value],
        style: {
          width: de(P.width),
          minWidth: de(P.minWidth),
          maxWidth: de(P.maxWidth),
          ...k(P, A)
        },
        colspan: P.colspan,
        rowspan: P.rowspan,
        fixed: P.fixed,
        nowrap: P.nowrap,
        lastFixed: P.lastFixed,
        firstFixedEnd: P.firstFixedEnd,
        noPadding: B,
        empty: D,
        tabindex: P.sortable ? 0 : void 0,
        onClick: P.sortable ? (W) => l(P, W) : void 0,
        onKeydown: P.sortable ? (W) => m(W, P) : void 0
      }, L), {
        default: () => {
          const W = `header.${P.key}`, N = {
            column: P,
            selectAll: u,
            isSorted: i,
            toggleSort: l,
            sortBy: o.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: y
          };
          return n[W] ? n[W](N) : D ? "" : P.key === "data-table-select" ? n["header.data-table-select"]?.(N) ?? (c.value && p(pn, {
            color: e.color,
            density: e.density,
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": u
          }, null)) : _("div", {
            class: "v-data-table-header__content"
          }, [_("span", null, [P.title]), P.sortable && !e.disableSort && p(He, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: y(P)
          }, null), e.multiSort && i(P) && _("div", {
            key: "badge",
            class: ee(["v-data-table-header__sort-badge", ...h.value]),
            style: ve(x.value)
          }, [o.value.findIndex((J) => J.key === P.key) + 1])]);
        }
      });
    }, C = () => {
      const T = V(() => d.value.filter((F) => F?.sortable && !e.disableSort)), P = d.value.find((F) => F.key === "data-table-select");
      return p(Do, U({
        tag: "th",
        class: [...g.value],
        colspan: f.value.length + 1
      }, e.headerProps), {
        default: () => [_("div", {
          class: "v-data-table-header__content"
        }, [p(cc, {
          chips: !0,
          color: e.color,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: T.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => o.value = []
        }, {
          append: P ? () => p(pn, {
            color: e.color,
            density: "compact",
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": () => u(!s.value)
          }, null) : void 0,
          chip: (F) => p(Jn, {
            onClick: F.item.raw?.sortable ? () => l(F.item.raw) : void 0,
            onMousedown: (A) => {
              A.preventDefault(), A.stopPropagation();
            }
          }, {
            default: () => [F.item.title, p(He, {
              class: ee(["v-data-table__td-sort-icon", i(F.item.raw) && "v-data-table__td-sort-icon-active"]),
              icon: y(F.item.raw),
              size: "small"
            }, null)]
          })
        })])]
      });
    };
    te(() => b.value ? _("tr", null, [p(C, null, null)]) : _(ye, null, [n.headers ? n.headers(S.value) : f.value.map((T, P) => _("tr", null, [T.map((F, A) => p(I, {
      column: F,
      x: A,
      y: P
    }, null))])), e.loading && _("tr", {
      class: "v-data-table-progress"
    }, [_("th", {
      colspan: d.value.length
    }, [p(zo, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading,
      indeterminate: !0
    }, {
      default: n.loader
    })])])]));
  }
}), ky = R({
  item: {
    type: Object,
    required: !0
  },
  groupCollapseIcon: {
    type: xe,
    default: "$tableGroupCollapse"
  },
  groupExpandIcon: {
    type: xe,
    default: "$tableGroupExpand"
  },
  ...it()
}, "VDataTableGroupHeaderRow"), a1 = Q()({
  name: "VDataTableGroupHeaderRow",
  props: ky(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: o
    } = ny(), {
      isSelected: i,
      isSomeSelected: r,
      select: s
    } = Cr(), {
      columns: u
    } = Ir(), c = V(() => o([e.item])), d = /* @__PURE__ */ E(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
    return () => _("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [u.value.map((f) => {
      if (f.key === "data-table-group") {
        const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, k = () => l(e.item);
        return n["data-table-group"]?.({
          item: e.item,
          count: c.value.length,
          props: {
            icon: v,
            onClick: k
          }
        }) ?? p(Do, {
          class: "v-data-table-group-header-row__column",
          colspan: d.value
        }, {
          default: () => [p(Oe, {
            size: "small",
            variant: "text",
            icon: v,
            onClick: k
          }, null), _("span", null, [e.item.value]), _("span", null, [qt("("), c.value.length, qt(")")])]
        });
      } else if (f.key === "data-table-select") {
        const v = c.value.filter((h) => h.selectable), k = v.length > 0 && i(v), m = r(v) && !k, y = (h) => s(v, h);
        return n["data-table-select"]?.({
          props: {
            modelValue: k,
            indeterminate: m,
            "onUpdate:modelValue": y
          }
        }) ?? p(Do, {
          class: "v-data-table__td--select-row",
          noPadding: !0
        }, {
          default: () => [p(pn, {
            density: e.density,
            disabled: v.length === 0,
            modelValue: k,
            indeterminate: m,
            "onUpdate:modelValue": y
          }, null)]
        });
      }
      return "";
    })]);
  }
}), wy = R({
  color: String,
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  collapseIcon: {
    type: xe,
    default: "$collapse"
  },
  expandIcon: {
    type: xe,
    default: "$expand"
  },
  onClick: _t(),
  onContextmenu: _t(),
  onDblclick: _t(),
  ...it(),
  ...tl()
}, "VDataTableRow"), Ic = Q()({
  name: "VDataTableRow",
  props: wy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      displayClasses: a,
      mobile: l
    } = ln(e, "v-data-table__tr"), {
      isSelected: o,
      toggleSelect: i,
      someSelected: r,
      allSelected: s,
      selectAll: u
    } = Cr(), {
      isExpanded: c,
      toggleExpand: d
    } = ey(), {
      toggleSort: f,
      sortBy: v,
      isSorted: k
    } = fy(), {
      columns: m
    } = Ir();
    te(() => _("tr", {
      class: ee(["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value]),
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && m.value.map((y, h) => {
      const x = e.item, w = `item.${y.key}`, b = `header.${y.key}`, S = {
        index: e.index,
        item: x.raw,
        internalItem: x,
        value: Ya(x.columns, y.key),
        column: y,
        isSelected: o,
        toggleSelect: i,
        isExpanded: c,
        toggleExpand: d
      }, g = {
        column: y,
        selectAll: u,
        isSorted: k,
        toggleSort: f,
        sortBy: v.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, I = typeof e.cellProps == "function" ? e.cellProps({
        index: S.index,
        item: S.item,
        internalItem: S.internalItem,
        value: S.value,
        column: y
      }) : e.cellProps, C = typeof y.cellProps == "function" ? y.cellProps({
        index: S.index,
        item: S.item,
        internalItem: S.internalItem,
        value: S.value
      }) : y.cellProps, T = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
      return p(Do, U({
        align: y.align,
        indent: y.indent,
        class: {
          "v-data-table__td--expanded-row": y.key === "data-table-expand",
          "v-data-table__td--select-row": y.key === "data-table-select"
        },
        fixed: y.fixed,
        fixedOffset: y.fixedOffset,
        fixedEndOffset: y.fixedEndOffset,
        lastFixed: y.lastFixed,
        firstFixedEnd: y.firstFixedEnd,
        maxWidth: l.value ? void 0 : y.maxWidth,
        noPadding: T,
        empty: P,
        nowrap: y.nowrap,
        width: l.value ? void 0 : y.width
      }, I, C), {
        default: () => {
          if (y.key === "data-table-select")
            return n["item.data-table-select"]?.({
              ...S,
              props: {
                color: e.color,
                disabled: !x.selectable,
                modelValue: o([x]),
                onClick: ni(() => i(x), ["stop"])
              }
            }) ?? p(pn, {
              color: e.color,
              disabled: !x.selectable,
              density: e.density,
              modelValue: o([x]),
              onClick: ni((A) => i(x, e.index, A), ["stop"])
            }, null);
          if (y.key === "data-table-expand")
            return n["item.data-table-expand"]?.({
              ...S,
              props: {
                icon: c(x) ? e.collapseIcon : e.expandIcon,
                size: "small",
                variant: "text",
                onClick: ni(() => d(x), ["stop"])
              }
            }) ?? p(Oe, {
              icon: c(x) ? e.collapseIcon : e.expandIcon,
              size: "small",
              variant: "text",
              onClick: ni(() => d(x), ["stop"])
            }, null);
          if (n[w] && !l.value) return n[w](S);
          const F = Tn(S.value);
          return l.value ? _(ye, null, [_("div", {
            class: "v-data-table__td-title"
          }, [n[b]?.(g) ?? y.title]), _("div", {
            class: "v-data-table__td-value"
          }, [n[w]?.(S) ?? F])]) : F;
        }
      });
    })]));
  }
}), py = R({
  color: String,
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...jt(wy(), ["collapseIcon", "expandIcon", "density"]),
  ...jt(ky(), ["groupCollapseIcon", "groupExpandIcon", "density"]),
  ...tl()
}, "VDataTableRows"), Za = Q()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: py(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      columns: l
    } = Ir(), {
      expandOnClick: o,
      toggleExpand: i,
      isExpanded: r
    } = ey(), {
      isSelected: s,
      toggleSelect: u
    } = Cr(), {
      toggleGroup: c,
      isGroupOpen: d
    } = ny(), {
      t: f
    } = Ue(), {
      mobile: v
    } = ln(e);
    return te(() => {
      const k = jt(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
      return e.loading && (!e.items.length || a.loading) ? _("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [_("td", {
        colspan: l.value.length
      }, [a.loading?.() ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? _("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [_("td", {
        colspan: l.value.length
      }, [a["no-data"]?.() ?? f(e.noDataText)])]) : _(ye, null, [e.items.map((m, y) => {
        if (m.type === "group") {
          const w = {
            index: y,
            item: m,
            columns: l.value,
            isExpanded: r,
            toggleExpand: i,
            isSelected: s,
            toggleSelect: u,
            toggleGroup: c,
            isGroupOpen: d
          };
          return a["group-header"] ? a["group-header"](w) : p(a1, U({
            key: `group-header_${m.id}`,
            item: m
          }, tn(n, ":groupHeader", () => w), k), a);
        }
        if (m.type === "group-summary") {
          const w = {
            index: y,
            item: m,
            columns: l.value,
            toggleGroup: c
          };
          return a["group-summary"]?.(w) ?? "";
        }
        const h = {
          index: m.virtualIndex ?? y,
          item: m.raw,
          internalItem: m,
          columns: l.value,
          isExpanded: r,
          toggleExpand: i,
          isSelected: s,
          toggleSelect: u
        }, x = {
          ...h,
          props: U({
            key: `item_${m.key ?? m.index}`,
            onClick: o.value ? () => {
              i(m);
            } : void 0,
            index: y,
            item: m,
            color: e.color,
            cellProps: e.cellProps,
            collapseIcon: e.collapseIcon,
            expandIcon: e.expandIcon,
            density: e.density,
            mobile: v.value
          }, tn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({
            item: h.item,
            index: h.index,
            internalItem: h.internalItem
          }) : e.rowProps)
        };
        return _(ye, {
          key: x.props.key
        }, [a.item ? a.item(x) : p(Ic, x.props, a), r(m) && a["expanded-row"]?.(h)]);
      })]);
    }), {};
  }
}), xy = R({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (e) => ["even", "odd"].includes(e)
  },
  ...Se(),
  ...it(),
  ...Ae(),
  ...Ne()
}, "VTable"), Ja = Q()({
  name: "VTable",
  props: xy(),
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      densityClasses: o
    } = Mt(e);
    return te(() => p(e.tag, {
      class: ee(["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!n.top,
        "v-table--has-bottom": !!n.bottom,
        "v-table--hover": e.hover,
        "v-table--striped-even": e.striped === "even",
        "v-table--striped-odd": e.striped === "odd"
      }, l.value, o.value, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.top?.(), n.default ? _("div", {
        class: "v-table__wrapper",
        style: {
          height: de(e.height)
        }
      }, [_("table", null, [n.default()])]) : n.wrapper?.(), n.bottom?.()]
    })), {};
  }
}), l1 = R({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function o1(e, t, n, a) {
  const l = e.returnObject ? t : rt(t, e.itemValue), o = rt(t, e.itemSelectable, !0), i = a.reduce((r, s) => (s.key != null && (r[s.key] = rt(t, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? rt(t, e.itemValue) : l,
    index: n,
    value: l,
    selectable: o,
    columns: i,
    raw: t
  };
}
function i1(e, t, n) {
  return t.map((a, l) => o1(e, a, l, n));
}
function Pc(e, t) {
  return {
    items: V(() => i1(e, e.items, t.value))
  };
}
const Tc = R({
  ...py(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Jh(),
  ...bc(),
  ...ZV(),
  ...l1(),
  ...sy(),
  ...cy(),
  ...Be(Sy(), ["multiSort", "initialSortOrder"]),
  ...xy()
}, "DataTable"), r1 = R({
  ...kc(),
  ...Tc(),
  ...Wl(),
  ...Cc()
}, "VDataTable"), s1 = Q()({
  name: "VDataTable",
  props: r1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Sc(e), {
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s
    } = _r(e), {
      page: u,
      itemsPerPage: c
    } = wc(e), {
      disableSort: d
    } = /* @__PURE__ */ Bl(e), {
      columns: f,
      headers: v,
      sortFunctions: k,
      sortRawFunctions: m,
      filterFunctions: y
    } = Vc(e, {
      groupBy: l,
      showSelect: /* @__PURE__ */ E(() => e.showSelect),
      showExpand: /* @__PURE__ */ E(() => e.showExpand)
    }), {
      items: h
    } = Pc(e, f), x = /* @__PURE__ */ E(() => e.search), {
      filteredItems: w
    } = zl(e, h, x, {
      transform: (ce) => ce.columns,
      customKeyFilter: y
    }), {
      toggleSort: b
    } = Vr({
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s,
      page: u
    }), {
      sortByWithGroups: S,
      opened: g,
      extractRows: I,
      isGroupOpen: C,
      toggleGroup: T
    } = kr({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: P
    } = xc(e, w, S, {
      transform: (ce) => ({
        ...ce.raw,
        ...ce.columns
      }),
      sortFunctions: k,
      sortRawFunctions: m
    }), {
      flatItems: F
    } = wr(P, l, g, () => !!a["group-summary"]), A = V(() => F.value.length), {
      startIndex: B,
      stopIndex: D,
      pageCount: L,
      setItemsPerPage: W
    } = pc({
      page: u,
      itemsPerPage: c,
      itemsLength: A
    }), {
      paginatedItems: N
    } = iy({
      items: F,
      startIndex: B,
      stopIndex: D,
      itemsPerPage: c
    }), J = V(() => I(N.value)), {
      isSelected: q,
      select: $,
      selectAll: ne,
      toggleSelect: K,
      someSelected: H,
      allSelected: G
    } = xr(e, {
      allItems: h,
      currentPage: J
    }), {
      isExpanded: X,
      toggleExpand: fe
    } = Sr(e);
    pr({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: x
    }), lt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const Z = V(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: L.value,
      toggleSort: b,
      setItemsPerPage: W,
      someSelected: H.value,
      allSelected: G.value,
      isSelected: q,
      select: $,
      selectAll: ne,
      toggleSelect: K,
      isExpanded: X,
      toggleExpand: fe,
      isGroupOpen: C,
      toggleGroup: T,
      items: J.value.map((ce) => ce.raw),
      internalItems: J.value,
      groupedItems: N.value,
      columns: f.value,
      headers: v.value
    }));
    return te(() => {
      const ce = Ao.filterProps(e), Ce = Xa.filterProps(Be(e, ["multiSort"])), Ve = Za.filterProps(e), Pe = Ja.filterProps(e);
      return p(Ja, U({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Pe, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(Z.value),
        default: () => a.default ? a.default(Z.value) : _(ye, null, [a.colgroup?.(Z.value), !e.hideDefaultHeader && _("thead", {
          key: "thead"
        }, [p(Xa, U(Ce, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(Z.value), !e.hideDefaultBody && _("tbody", null, [a["body.prepend"]?.(Z.value), a.body ? a.body(Z.value) : p(Za, U(n, Ve, {
          items: N.value
        }), a), a["body.append"]?.(Z.value)]), a.tbody?.(Z.value), a.tfoot?.(Z.value)]),
        bottom: () => a.bottom ? a.bottom(Z.value) : !e.hideDefaultFooter && _(ye, null, [p(nn, null, null), p(Ao, ce, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), u1 = R({
  ...Be(Tc(), ["hideDefaultFooter"]),
  ...bc(),
  ...ch(),
  ...Wl()
}, "VDataTableVirtual"), c1 = Q()({
  name: "VDataTableVirtual",
  props: u1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Sc(e), {
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s
    } = _r(e), {
      disableSort: u
    } = /* @__PURE__ */ Bl(e), {
      columns: c,
      headers: d,
      filterFunctions: f,
      sortFunctions: v,
      sortRawFunctions: k
    } = Vc(e, {
      groupBy: l,
      showSelect: /* @__PURE__ */ E(() => e.showSelect),
      showExpand: /* @__PURE__ */ E(() => e.showExpand)
    }), {
      items: m
    } = Pc(e, c), y = /* @__PURE__ */ E(() => e.search), {
      filteredItems: h
    } = zl(e, m, y, {
      transform: (Pe) => Pe.columns,
      customKeyFilter: f
    }), {
      toggleSort: x
    } = Vr({
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s
    }), {
      sortByWithGroups: w,
      opened: b,
      extractRows: S,
      isGroupOpen: g,
      toggleGroup: I
    } = kr({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      sortedItems: C
    } = xc(e, h, w, {
      transform: (Pe) => ({
        ...Pe.raw,
        ...Pe.columns
      }),
      sortFunctions: v,
      sortRawFunctions: k
    }), {
      flatItems: T
    } = wr(C, l, b, () => !!a["group-summary"]), P = V(() => S(T.value)), {
      isSelected: F,
      select: A,
      selectAll: B,
      toggleSelect: D,
      someSelected: L,
      allSelected: W
    } = xr(e, {
      allItems: P,
      currentPage: P
    }), {
      isExpanded: N,
      toggleExpand: J
    } = Sr(e), {
      containerRef: q,
      markerRef: $,
      paddingTop: ne,
      paddingBottom: K,
      computedItems: H,
      handleItemResize: G,
      handleScroll: X,
      handleScrollend: fe,
      calculateVisibleItems: Z,
      scrollToIndex: ce
    } = dh(e, T), Ce = V(() => H.value.map((Pe) => ({
      ...Pe.raw,
      virtualIndex: Pe.index
    })));
    pr({
      sortBy: i,
      page: /* @__PURE__ */ se(1),
      itemsPerPage: /* @__PURE__ */ se(-1),
      groupBy: l,
      search: y
    }), lt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const Ve = V(() => ({
      sortBy: i.value,
      toggleSort: x,
      someSelected: L.value,
      allSelected: W.value,
      isSelected: F,
      select: A,
      selectAll: B,
      toggleSelect: D,
      isExpanded: N,
      toggleExpand: J,
      isGroupOpen: g,
      toggleGroup: I,
      items: P.value.map((Pe) => Pe.raw),
      internalItems: P.value,
      groupedItems: T.value,
      columns: c.value,
      headers: d.value
    }));
    return te(() => {
      const Pe = Xa.filterProps(Be(e, ["multiSort"])), M = Za.filterProps(e), O = Ja.filterProps(e);
      return p(Ja, U({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, O, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(Ve.value),
        wrapper: () => _("div", {
          ref: q,
          onScrollPassive: X,
          onScrollend: fe,
          class: "v-table__wrapper",
          style: {
            height: de(e.height)
          }
        }, [_("table", null, [a.colgroup?.(Ve.value), !e.hideDefaultHeader && _("thead", {
          key: "thead"
        }, [p(Xa, U(Pe, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(Ve.value), !e.hideDefaultBody && _("tbody", {
          key: "tbody"
        }, [_("tr", {
          ref: $,
          style: {
            height: de(ne.value),
            border: 0
          }
        }, [_("td", {
          colspan: c.value.length,
          style: {
            height: 0,
            border: 0
          }
        }, null)]), a["body.prepend"]?.(Ve.value), p(Za, U(n, M, {
          items: Ce.value
        }), {
          ...a,
          item: (j) => p(uh, {
            key: j.internalItem.index,
            renderless: !0,
            "onUpdate:height": (re) => G(j.internalItem.index, re)
          }, {
            default: (re) => {
              let {
                itemRef: z
              } = re;
              return a.item?.({
                ...j,
                itemRef: z
              }) ?? p(Ic, U(j.props, {
                ref: z,
                key: j.internalItem.index,
                index: j.index
              }), a);
            }
          })
        }), a["body.append"]?.(Ve.value), _("tr", {
          style: {
            height: de(K.value),
            border: 0
          }
        }, [_("td", {
          colspan: c.value.length,
          style: {
            height: 0,
            border: 0
          }
        }, null)])]), a.tbody?.(Ve.value), a.tfoot?.(Ve.value)])]),
        bottom: () => a.bottom?.(Ve.value)
      });
    }), {
      calculateVisibleItems: Z,
      scrollToIndex: ce
    };
  }
}), d1 = R({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...kc(),
  ...Tc(),
  ...Cc()
}, "VDataTableServer"), f1 = Q()({
  name: "VDataTableServer",
  props: d1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Sc(e), {
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s
    } = _r(e), {
      page: u,
      itemsPerPage: c
    } = wc(e), {
      disableSort: d
    } = /* @__PURE__ */ Bl(e), f = V(() => parseInt(e.itemsLength, 10)), {
      columns: v,
      headers: k
    } = Vc(e, {
      groupBy: l,
      showSelect: /* @__PURE__ */ E(() => e.showSelect),
      showExpand: /* @__PURE__ */ E(() => e.showExpand)
    }), {
      items: m
    } = Pc(e, v), {
      toggleSort: y
    } = Vr({
      initialSortOrder: o,
      sortBy: i,
      multiSort: r,
      mustSort: s,
      page: u
    }), {
      opened: h,
      isGroupOpen: x,
      toggleGroup: w,
      extractRows: b
    } = kr({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: S,
      setItemsPerPage: g
    } = pc({
      page: u,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: I
    } = wr(m, l, h, () => !!a["group-summary"]), {
      isSelected: C,
      select: T,
      selectAll: P,
      toggleSelect: F,
      someSelected: A,
      allSelected: B
    } = xr(e, {
      allItems: m,
      currentPage: m
    }), {
      isExpanded: D,
      toggleExpand: L
    } = Sr(e), W = V(() => b(m.value));
    pr({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: /* @__PURE__ */ E(() => e.search)
    }), Ze("v-data-table", {
      toggleSort: y,
      sortBy: i
    }), lt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const N = V(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: S.value,
      toggleSort: y,
      setItemsPerPage: g,
      someSelected: A.value,
      allSelected: B.value,
      isSelected: C,
      select: T,
      selectAll: P,
      toggleSelect: F,
      isExpanded: D,
      toggleExpand: L,
      isGroupOpen: x,
      toggleGroup: w,
      items: W.value.map((J) => J.raw),
      internalItems: W.value,
      groupedItems: I.value,
      columns: v.value,
      headers: k.value
    }));
    te(() => {
      const J = Ao.filterProps(e), q = Xa.filterProps(Be(e, ["multiSort"])), $ = Za.filterProps(e), ne = Ja.filterProps(e);
      return p(Ja, U({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ne, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(N.value),
        default: () => a.default ? a.default(N.value) : _(ye, null, [a.colgroup?.(N.value), !e.hideDefaultHeader && _("thead", {
          key: "thead",
          class: "v-data-table__thead",
          role: "rowgroup"
        }, [p(Xa, U(q, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(N.value), !e.hideDefaultBody && _("tbody", {
          class: "v-data-table__tbody",
          role: "rowgroup"
        }, [a["body.prepend"]?.(N.value), a.body ? a.body(N.value) : p(Za, U(n, $, {
          items: I.value
        }), a), a["body.append"]?.(N.value)]), a.tbody?.(N.value), a.tfoot?.(N.value)]),
        bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && _(ye, null, [p(nn, null, null), p(Ao, J, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), v1 = R({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Se(),
  ...dt(),
  ...Ae()
}, "VContainer"), m1 = Q()({
  name: "VContainer",
  props: v1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = gt(), {
      dimensionStyles: l
    } = ft(e);
    return te(() => p(e.tag, {
      class: ee(["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class]),
      style: ve([l.value, e.style])
    }, n)), {};
  }
}), Cy = ar.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), _y = ar.reduce((e, t) => {
  const n = "offset" + Bn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Vy = ar.reduce((e, t) => {
  const n = "order" + Bn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Pf = {
  col: Object.keys(Cy),
  offset: Object.keys(_y),
  order: Object.keys(Vy)
};
function g1(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const h1 = ["auto", "start", "end", "center", "baseline", "stretch"], y1 = R({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Cy,
  offset: {
    type: [String, Number],
    default: null
  },
  ..._y,
  order: {
    type: [String, Number],
    default: null
  },
  ...Vy,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => h1.includes(e)
  },
  ...Se(),
  ...Ae()
}, "VCol"), b1 = Q()({
  name: "VCol",
  props: y1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = V(() => {
      const l = [];
      let o;
      for (o in Pf)
        Pf[o].forEach((r) => {
          const s = e[r], u = g1(o, r, s);
          u && l.push(u);
        });
      const i = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !i || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => kn(e.tag, {
      class: [a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Ac = ["start", "end", "center"], Iy = ["space-between", "space-around", "space-evenly"];
function Dc(e, t) {
  return ar.reduce((n, a) => {
    const l = e + Bn(a);
    return n[l] = t(), n;
  }, {});
}
const S1 = [...Ac, "baseline", "stretch"], Py = (e) => S1.includes(e), Ty = Dc("align", () => ({
  type: String,
  default: null,
  validator: Py
})), k1 = [...Ac, ...Iy], Ay = (e) => k1.includes(e), Dy = Dc("justify", () => ({
  type: String,
  default: null,
  validator: Ay
})), w1 = [...Ac, ...Iy, "stretch"], Ey = (e) => w1.includes(e), My = Dc("alignContent", () => ({
  type: String,
  default: null,
  validator: Ey
})), Tf = {
  align: Object.keys(Ty),
  justify: Object.keys(Dy),
  alignContent: Object.keys(My)
}, p1 = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function x1(e, t, n) {
  let a = p1[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const C1 = R({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Py
  },
  ...Ty,
  justify: {
    type: String,
    default: null,
    validator: Ay
  },
  ...Dy,
  alignContent: {
    type: String,
    default: null,
    validator: Ey
  },
  ...My,
  ...Se(),
  ...Ae()
}, "VRow"), _1 = Q()({
  name: "VRow",
  props: C1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = V(() => {
      const l = [];
      let o;
      for (o in Tf)
        Tf[o].forEach((i) => {
          const r = e[i], s = x1(o, i, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => kn(e.tag, {
      class: ["v-row", a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Ks = ea("v-spacer", "div", "VSpacer"), By = R({
  active: {
    type: [String, Array],
    default: void 0
  },
  controlHeight: [Number, String],
  controlVariant: {
    type: String,
    default: "docked"
  },
  noMonthPicker: Boolean,
  disabled: {
    type: [Boolean, String, Array],
    default: null
  },
  nextIcon: {
    type: xe,
    default: "$next"
  },
  prevIcon: {
    type: xe,
    default: "$prev"
  },
  modeIcon: {
    type: xe,
    default: "$subgroup"
  },
  text: String,
  monthText: String,
  yearText: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Gs = Q()({
  name: "VDatePickerControls",
  props: By(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:prev-year": () => !0,
    "click:next-year": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue(), o = V(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = V(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = V(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = V(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = V(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = V(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
    function d() {
      n("click:prev");
    }
    function f() {
      n("click:next");
    }
    function v() {
      n("click:prev-year");
    }
    function k() {
      n("click:next-year");
    }
    function m() {
      n("click:year");
    }
    function y() {
      n("click:month");
    }
    return te(() => {
      const h = {
        VBtn: {
          density: "comfortable",
          variant: "text"
        }
      }, x = p(Oe, {
        "data-testid": "prev-month",
        disabled: r.value,
        icon: e.prevIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"),
        onClick: d
      }, null), w = p(Oe, {
        "data-testid": "next-month",
        disabled: s.value,
        icon: e.nextIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"),
        onClick: f
      }, null), b = p(Oe, {
        "data-testid": "prev-year",
        disabled: u.value,
        icon: e.prevIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"),
        onClick: v
      }, null), S = p(Oe, {
        "data-testid": "next-year",
        disabled: c.value,
        icon: e.nextIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"),
        onClick: k
      }, null), g = p(Oe, {
        class: "v-date-picker-controls__only-month-btn",
        "data-testid": "month-btn",
        density: "default",
        disabled: o.value,
        text: e.monthText,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"),
        onClick: y
      }, null), I = p(Oe, {
        class: "v-date-picker-controls__only-year-btn",
        "data-testid": "year-btn",
        density: "default",
        disabled: i.value,
        text: e.yearText,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"),
        onClick: m
      }, null), C = p(Oe, {
        class: "v-date-picker-controls__year-btn",
        "data-testid": "year-btn",
        density: "default",
        disabled: i.value,
        text: e.text,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"),
        onClick: m
      }, null), T = _(ye, null, [p(Oe, {
        class: "v-date-picker-controls__month-btn",
        "data-testid": "month-btn",
        height: "36",
        disabled: o.value,
        text: e.text,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"),
        onClick: y
      }, null), p(Oe, {
        class: "v-date-picker-controls__mode-btn",
        "data-testid": "year-btn",
        disabled: i.value,
        icon: e.modeIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"),
        onClick: m
      }, null)]), P = {
        viewMode: e.viewMode,
        disabled: Array.isArray(e.disabled) ? e.disabled : [],
        monthYearText: e.text ?? "",
        monthText: e.monthText ?? "",
        yearText: e.yearText ?? "",
        openMonths: y,
        openYears: m,
        prevMonth: d,
        nextMonth: f,
        prevYear: v,
        nextYear: k
      }, F = _(ye, null, [e.noMonthPicker ? C : T, p(Ks, null, null), _("div", {
        class: "v-date-picker-controls__month"
      }, [x, w])]), A = _(ye, null, [_("div", {
        class: "v-date-picker-controls__month"
      }, [x, g, w]), p(Ks, null, null), _("div", {
        class: "v-date-picker-controls__year"
      }, [b, I, S])]);
      return p(Ee, {
        defaults: h
      }, {
        default: () => [_("div", {
          class: ee(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]),
          style: {
            "--v-date-picker-controls-height": de(e.controlHeight)
          }
        }, [a.default?.(P) ?? _(ye, null, [e.controlVariant === "modal" && F, e.controlVariant === "docked" && A])])]
      });
    }), {};
  }
}), V1 = R({
  appendIcon: xe,
  color: String,
  header: String,
  transition: String,
  onClick: _t()
}, "VDatePickerHeader"), qs = Q()({
  name: "VDatePickerHeader",
  props: V1(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color);
    function i() {
      n("click");
    }
    function r() {
      n("click:append");
    }
    return te(() => {
      const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
      return _("div", {
        class: ee(["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value]),
        style: ve(o.value),
        onClick: i
      }, [a.prepend && _("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && p(Ot, {
        key: "content",
        name: e.transition
      }, {
        default: () => [_("div", {
          key: e.header,
          class: "v-date-picker-header__content"
        }, [a.default?.() ?? e.header])]
      }), u && _("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? p(Ee, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => [a.append?.()]
      }) : p(Oe, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), I1 = R({
  allowedDates: [Array, Function],
  disabled: {
    type: Boolean,
    default: null
  },
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: {
    type: [Number, String],
    default: void 0
  },
  firstDayOfYear: {
    type: [Number, String],
    default: void 0
  },
  weekdayFormat: String
}, "calendar");
function P1(e) {
  const t = el(), n = pe(e, "modelValue", [], (m) => Xe(m).map((y) => t.date(y))), a = V(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = pe(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (m) => t.getYear(m)), o = pe(e, "month", void 0, (m) => {
    const y = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, y);
  }, (m) => t.getMonth(m)), i = V(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((y, h) => e.weekdays.includes((h + m) % 7));
  }), r = V(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), y = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && y.length < h) {
      const x = y[y.length - 1];
      let w = [];
      for (let b = 1; b <= h - y.length; b++)
        w.push(t.addDays(x, b)), b % 7 === 0 && (m.push(w), w = []);
    }
    return m;
  });
  function s(m, y) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, x) => {
      const w = t.toISO(h), b = !t.isSameMonth(h, o.value), S = t.isSameDay(h, t.startOfMonth(o.value)), g = t.isSameDay(h, t.endOfMonth(o.value)), I = t.isSameDay(h, o.value), C = e.weekdays.length;
      return {
        date: h,
        formatted: t.format(h, "keyboardDate"),
        isAdjacent: b,
        isDisabled: k(h),
        isEnd: g,
        isHidden: b && !e.showAdjacentMonths,
        isSame: I,
        isSelected: n.value.some((T) => t.isSameDay(h, T)),
        isStart: S,
        isToday: t.isSameDay(h, y),
        isWeekEnd: x % C === C - 1,
        isWeekStart: x % C === 0,
        isoDate: w,
        localized: t.format(h, "dayOfMonth"),
        month: t.getMonth(h),
        year: t.getYear(h)
      };
    });
  }
  const u = V(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let x = 0; x <= 6; x++)
      y.push(t.addDays(m, x));
    const h = t.date();
    return s(y, h);
  }), c = V(() => {
    const m = r.value.flat(), y = t.date();
    return s(m, y);
  }), d = V(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), {
    minDate: f,
    maxDate: v
  } = Fy(e);
  function k(m) {
    if (e.disabled) return !0;
    const y = t.date(m);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || v.value && t.isAfter(y, v.value) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: c,
    daysInWeek: u,
    genDays: s,
    model: n,
    weeksInMonth: r,
    weekdayLabels: i,
    weekNumbers: d
  };
}
function Fy(e) {
  const t = el(), n = V(() => {
    if (!e.min) return null;
    const i = t.date(e.min);
    return t.isValid(i) ? i : null;
  }), a = V(() => {
    if (!e.max) return null;
    const i = t.date(e.max);
    return t.isValid(i) ? i : null;
  });
  function l(i) {
    return n.value && t.isBefore(i, n.value) ? n.value : a.value && t.isAfter(i, a.value) ? a.value : i;
  }
  function o(i) {
    return (!n.value || t.isAfter(i, n.value)) && (!a.value || t.isBefore(i, a.value));
  }
  return {
    minDate: n,
    maxDate: a,
    clampDate: l,
    isInAllowedRange: o
  };
}
const Ly = R({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  events: {
    type: [Array, Function, Object],
    default: () => null
  },
  eventColor: {
    type: [Array, Function, Object, String],
    default: () => null
  },
  ...Be(I1(), ["displayValue"])
}, "VDatePickerMonth"), Xs = Q()({
  name: "VDatePickerMonth",
  props: Ly(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = /* @__PURE__ */ ae(), {
      t: o
    } = Ue(), {
      daysInMonth: i,
      model: r,
      weekNumbers: s,
      weekdayLabels: u
    } = P1(e), c = el(), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), v = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ E(() => v.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
    const m = V(() => {
      const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return r.value.length >= g;
    });
    ue(i, (g, I) => {
      I && (v.value = c.isBefore(g[0].date, I[0].date));
    });
    function y(g) {
      const I = c.startOfDay(g);
      if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value)
        d.value = I, r.value = [d.value];
      else if (f.value)
        d.value = g, f.value = void 0, r.value = [d.value];
      else {
        if (c.isSameDay(I, d.value)) {
          d.value = void 0, r.value = [];
          return;
        } else c.isBefore(I, d.value) ? (f.value = c.endOfDay(d.value), d.value = I) : f.value = c.endOfDay(I);
        r.value = Fw(c, d.value, f.value);
      }
    }
    function h(g) {
      const I = c.format(g.date, "fullDateWithWeekday"), C = g.isToday ? "currentDate" : "selectDate";
      return o(`$vuetify.datePicker.ariaLabel.${C}`, I);
    }
    function x(g) {
      const I = r.value.findIndex((C) => c.isSameDay(C, g));
      if (I === -1)
        r.value = [...r.value, g];
      else {
        const C = [...r.value];
        C.splice(I, 1), r.value = C;
      }
    }
    function w(g) {
      e.multiple === "range" ? y(g) : e.multiple ? x(g) : r.value = [g];
    }
    function b(g) {
      const {
        events: I,
        eventColor: C
      } = e;
      let T, P = [];
      if (Array.isArray(I) ? T = I.includes(g) : I instanceof Function ? T = I(g) || !1 : I ? T = I[g] || !1 : T = !1, T)
        T !== !0 ? P = Xe(T) : typeof C == "string" ? P = [C] : typeof C == "function" ? P = Xe(C(g)) : Array.isArray(C) ? P = C : typeof C == "object" && C !== null && (P = Xe(C[g]));
      else return [];
      return P.length ? P.filter(Boolean).map((F) => typeof F == "string" ? F : "surface-variant") : ["surface-variant"];
    }
    function S(g) {
      const I = b(g);
      return I.length ? _("div", {
        class: "v-date-picker-month__events"
      }, [I.map((C) => p(vh, {
        dot: !0,
        color: C
      }, null))]) : null;
    }
    te(() => _("div", {
      class: "v-date-picker-month",
      style: {
        "--v-date-picker-days-in-week": e.weekdays.length
      }
    }, [e.showWeek && _("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && _("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [qt(" ")]), s.value.map((g) => _("div", {
      class: ee(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"])
    }, [g]))]), p(Ot, {
      name: k.value
    }, {
      default: () => [_("div", {
        ref: l,
        key: i.value[0].date?.toString(),
        class: "v-date-picker-month__days"
      }, [!e.hideWeekdays && u.value.map((g) => _("div", {
        class: ee(["v-date-picker-month__day", "v-date-picker-month__weekday"])
      }, [g])), i.value.map((g, I) => {
        const C = {
          props: {
            class: "v-date-picker-month__day-btn",
            color: g.isSelected || g.isToday ? e.color : void 0,
            disabled: g.isDisabled,
            icon: !0,
            ripple: !1,
            variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text",
            "aria-label": h(g),
            "aria-current": g.isToday ? "date" : void 0,
            onClick: () => w(g.date)
          },
          item: g,
          i: I
        };
        return m.value && !g.isSelected && (g.isDisabled = !0), _("div", {
          class: ee(["v-date-picker-month__day", {
            "v-date-picker-month__day--adjacent": g.isAdjacent,
            "v-date-picker-month__day--hide-adjacent": g.isHidden,
            "v-date-picker-month__day--selected": g.isSelected,
            "v-date-picker-month__day--week-end": g.isWeekEnd,
            "v-date-picker-month__day--week-start": g.isWeekStart
          }]),
          "data-v-date": g.isDisabled ? void 0 : g.isoDate
        }, [(e.showAdjacentMonths || !g.isAdjacent) && (a.day?.(C) ?? p(Oe, C.props, {
          default: () => [g.localized, S(g.isoDate)]
        }))]);
      })])]
    })]));
  }
}), Oy = R({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number,
  allowedMonths: [Array, Function]
}, "VDatePickerMonths"), Zs = Q()({
  name: "VDatePickerMonths",
  props: Oy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = el(), o = pe(e, "modelValue"), i = V(() => {
      let s = l.startOfYear(l.date());
      return e.year && (s = l.setYear(s, e.year)), Qt(12).map((u) => {
        const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
        return s = l.getNextMonth(s), {
          isDisabled: f,
          text: c,
          label: d,
          value: u
        };
      });
    });
    at(() => {
      o.value = o.value ?? l.getMonth(l.date());
    });
    function r(s) {
      return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : !0;
    }
    return te(() => _("div", {
      class: "v-date-picker-months",
      style: {
        height: de(e.height)
      }
    }, [_("div", {
      class: "v-date-picker-months__content"
    }, [i.value.map((s, u) => {
      const c = {
        active: o.value === u,
        ariaLabel: s.label,
        color: o.value === u ? e.color : void 0,
        disabled: s.isDisabled,
        rounded: !0,
        text: s.text,
        variant: o.value === s.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(f) {
        if (o.value === f) {
          n("update:modelValue", o.value);
          return;
        }
        o.value = f;
      }
      return a.month?.({
        month: s,
        i: u,
        props: c
      }) ?? p(Oe, U({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), $y = R({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  allowedYears: [Array, Function]
}, "VDatePickerYears"), Js = Q()({
  name: "VDatePickerYears",
  props: $y(),
  directives: {
    vIntersect: wn
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = el(), o = pe(e, "modelValue"), i = /* @__PURE__ */ se(!1), r = V(() => {
      const d = l.getYear(l.date());
      let f = d - 100, v = d + 52;
      e.min && (f = l.getYear(l.date(e.min))), e.max && (v = l.getYear(l.date(e.max)));
      let k = l.startOfYear(l.date());
      return k = l.setYear(k, f), Qt(v - f + 1, f).map((m) => {
        const y = l.format(k, "year");
        return k = l.setYear(k, l.getYear(k) + 1), {
          text: y,
          value: m,
          isDisabled: !c(m)
        };
      });
    });
    at(() => {
      o.value = o.value ?? l.getYear(l.date());
    });
    const s = Pi();
    function u() {
      s.el?.scrollIntoView({
        block: "center"
      });
    }
    function c(d) {
      return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(d) : typeof e.allowedYears == "function" ? e.allowedYears(d) : !0;
    }
    return te(() => qe(_("div", {
      class: "v-date-picker-years",
      style: {
        height: de(e.height)
      }
    }, [_("div", {
      class: "v-date-picker-years__content",
      onFocus: () => s.el?.focus(),
      onFocusin: () => i.value = !0,
      onFocusout: () => i.value = !1,
      tabindex: i.value ? -1 : 0
    }, [r.value.map((d, f) => {
      const v = {
        ref: o.value === d.value ? s : void 0,
        active: o.value === d.value,
        color: o.value === d.value ? e.color : void 0,
        rounded: !0,
        text: d.text,
        disabled: d.isDisabled,
        variant: o.value === d.value ? "flat" : "text",
        onClick: () => {
          if (o.value === d.value) {
            n("update:modelValue", o.value);
            return;
          }
          o.value = d.value;
        }
      };
      return a.year?.({
        year: d,
        i: f,
        props: v
      }) ?? p(Oe, U({
        key: "month"
      }, v), null);
    })])]), [[wn, {
      handler: u
    }, null, {
      once: !0
    }]])), {};
  }
}), T1 = R({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  headerColor: String,
  headerDateFormat: {
    type: String,
    default: "normalDateWithWeekday"
  },
  landscapeHeaderWidth: [Number, String],
  ...Be(By(), ["active", "monthText", "yearText"]),
  ...Ly({
    weeksInMonth: "static"
  }),
  ...Be(Oy(), ["modelValue"]),
  ...Be($y(), ["modelValue"]),
  ...br({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), A1 = Q()({
  name: "VDatePicker",
  props: T1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = el(), {
      t: o
    } = Ue(), {
      rtlClasses: i
    } = gt(), r = pe(e, "modelValue", void 0, (G) => Xe(G).map((X) => l.date(X)), (G) => e.multiple ? G : G[0]), s = pe(e, "viewMode"), {
      minDate: u,
      maxDate: c,
      clampDate: d
    } = Fy(e), f = V(() => {
      const G = l.date(), X = r.value?.[0] ? l.date(r.value[0]) : d(G);
      return X && l.isValid(X) ? X : G;
    }), v = /* @__PURE__ */ E(() => e.headerColor ?? e.color), k = pe(e, "month"), m = V({
      get: () => Number(k.value ?? l.getMonth(l.startOfMonth(f.value))),
      set: (G) => k.value = G
    }), y = pe(e, "year"), h = V({
      get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))),
      set: (G) => y.value = G
    }), x = /* @__PURE__ */ se(!1), w = V(() => {
      if (e.multiple && r.value.length > 1)
        return o("$vuetify.datePicker.itemsSelected", r.value.length);
      const G = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
      return e.landscape && G.split(" ").length === 3 ? G.replace(" ", `
`) : G;
    }), b = /* @__PURE__ */ E(() => {
      let G = l.date();
      return G = l.setDate(G, 1), G = l.setMonth(G, m.value), G = l.setYear(G, h.value), G;
    }), S = /* @__PURE__ */ E(() => l.format(b.value, "monthAndYear")), g = /* @__PURE__ */ E(() => l.format(b.value, "monthShort")), I = /* @__PURE__ */ E(() => l.format(b.value, "year")), C = /* @__PURE__ */ E(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), T = V(() => {
      if (e.disabled) return !0;
      const G = [];
      if (s.value !== "month")
        G.push("prev-month", "next-month", "prev-year", "next-year");
      else {
        let X = l.date();
        if (X = l.startOfMonth(X), X = l.setMonth(X, m.value), X = l.setYear(X, h.value), u.value) {
          const fe = l.addDays(l.startOfMonth(X), -1), Z = l.addDays(l.startOfYear(X), -1);
          l.isAfter(u.value, fe) && G.push("prev-month"), l.isAfter(u.value, Z) && G.push("prev-year");
        }
        if (c.value) {
          const fe = l.addDays(l.endOfMonth(X), 1), Z = l.addDays(l.endOfYear(X), 1);
          l.isAfter(fe, c.value) && G.push("next-month"), l.isAfter(Z, c.value) && G.push("next-year");
        }
      }
      return G;
    }), P = V(() => e.allowedYears || B), F = V(() => e.allowedMonths || D);
    function A(G, X) {
      const fe = e.allowedDates;
      if (typeof fe != "function") return !0;
      const Z = 1 + Um(l, G, X);
      for (let ce = 0; ce < Z; ce++)
        if (fe(l.addDays(G, ce))) return !0;
      return !1;
    }
    function B(G) {
      if (typeof e.allowedDates == "function") {
        const X = l.parseISO(`${G}-01-01`);
        return A(X, l.endOfYear(X));
      }
      if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
        for (const X of e.allowedDates)
          if (l.getYear(l.date(X)) === G) return !0;
        return !1;
      }
      return !0;
    }
    function D(G) {
      if (typeof e.allowedDates == "function") {
        const X = String(G + 1).padStart(2, "0"), fe = l.parseISO(`${h.value}-${X}-01`);
        return A(fe, l.endOfMonth(fe));
      }
      if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
        for (const X of e.allowedDates)
          if (l.getYear(l.date(X)) === h.value && l.getMonth(l.date(X)) === G) return !0;
        return !1;
      }
      return !0;
    }
    function L() {
      m.value < 11 ? m.value++ : (h.value++, m.value = 0, H()), K();
    }
    function W() {
      m.value > 0 ? m.value-- : (h.value--, m.value = 11, H()), K();
    }
    function N() {
      if (h.value++, c.value) {
        const G = String(m.value + 1).padStart(2, "0"), X = l.parseISO(`${h.value}-${G}-01`);
        l.isAfter(X, c.value) && (m.value = l.getMonth(c.value));
      }
      H();
    }
    function J() {
      if (h.value--, u.value) {
        const G = String(m.value + 1).padStart(2, "0"), X = l.endOfMonth(l.parseISO(`${h.value}-${G}-01`));
        l.isAfter(u.value, X) && (m.value = l.getMonth(u.value));
      }
      H();
    }
    function q() {
      s.value = "month";
    }
    function $() {
      s.value = s.value === "months" ? "month" : "months";
    }
    function ne() {
      s.value = s.value === "year" ? "month" : "year";
    }
    function K() {
      s.value === "months" && $();
    }
    function H() {
      s.value === "year" && ne();
    }
    return ue(r, (G, X) => {
      const fe = Xe(X), Z = Xe(G);
      if (!Z.length) return;
      const ce = l.date(fe[fe.length - 1]), Ce = l.date(Z[Z.length - 1]);
      if (l.isSameDay(ce, Ce)) return;
      const Ve = l.getMonth(Ce), Pe = l.getYear(Ce);
      Ve !== m.value && (m.value = Ve, K()), Pe !== h.value && (h.value = Pe, H()), x.value = l.isBefore(ce, Ce);
    }), te(() => {
      const G = Ml.filterProps(e), X = Be(Gs.filterProps(e), ["viewMode"]), fe = qs.filterProps(e), Z = Xs.filterProps(e), ce = Be(Zs.filterProps(e), ["modelValue"]), Ce = Be(Js.filterProps(e), ["modelValue"]), Ve = {
        color: v.value,
        header: w.value,
        transition: C.value
      };
      return p(Ml, U(G, {
        color: v.value,
        class: ["v-date-picker", `v-date-picker--${s.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, i.value, e.class],
        style: [{
          "--v-date-picker-landscape-header-width": de(e.landscapeHeaderWidth)
        }, e.style]
      }), {
        title: () => a.title?.() ?? _("div", {
          class: "v-date-picker__title"
        }, [o(e.title)]),
        header: () => a.header ? p(Ee, {
          defaults: {
            VDatePickerHeader: {
              ...Ve
            }
          }
        }, {
          default: () => [a.header?.(Ve)]
        }) : p(qs, U({
          key: "header"
        }, fe, Ve, {
          onClick: s.value !== "month" ? q : void 0
        }), {
          prepend: a.prepend,
          append: a.append
        }),
        default: () => _(ye, null, [p(Gs, U(X, {
          disabled: T.value,
          viewMode: s.value,
          text: S.value,
          monthText: g.value,
          yearText: I.value,
          "onClick:next": L,
          "onClick:prev": W,
          "onClick:nextYear": N,
          "onClick:prevYear": J,
          "onClick:month": $,
          "onClick:year": ne
        }), {
          default: a.controls
        }), p(po, {
          hideOnLeave: !0
        }, {
          default: () => [s.value === "months" ? p(Zs, U({
            key: "date-picker-months"
          }, ce, {
            modelValue: m.value,
            "onUpdate:modelValue": [(Pe) => m.value = Pe, K],
            min: u.value,
            max: c.value,
            year: h.value,
            allowedMonths: F.value
          }), {
            month: a.month
          }) : s.value === "year" ? p(Js, U({
            key: "date-picker-years"
          }, Ce, {
            modelValue: h.value,
            "onUpdate:modelValue": [(Pe) => h.value = Pe, H],
            min: u.value,
            max: c.value,
            allowedYears: P.value
          }), {
            year: a.year
          }) : p(Xs, U({
            key: "date-picker-month"
          }, Z, {
            modelValue: r.value,
            "onUpdate:modelValue": (Pe) => r.value = Pe,
            month: m.value,
            "onUpdate:month": [(Pe) => m.value = Pe, K],
            year: h.value,
            "onUpdate:year": [(Pe) => h.value = Pe, H],
            min: u.value,
            max: c.value
          }), {
            day: a.day
          })]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), D1 = R({
  actionText: String,
  bgColor: String,
  color: String,
  icon: xe,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...Se(),
  ...dt(),
  ...On({
    size: void 0
  }),
  ...Ne()
}, "VEmptyState"), E1 = Q()({
  name: "VEmptyState",
  props: D1(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = ze(() => e.bgColor), {
      dimensionStyles: r
    } = ft(e), {
      displayClasses: s
    } = ln();
    function u(c) {
      n("click:action", c);
    }
    return te(() => {
      const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), k = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
      return _("div", {
        class: ee(["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, o.value, s.value, e.class]),
        style: ve([i.value, r.value, e.style])
      }, [k && _("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? p(Ee, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: m
          },
          VIcon: {
            size: m,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : _(ye, null, [e.image ? p(Zn, {
        key: "image",
        src: e.image,
        height: m
      }, null) : e.icon ? p(He, {
        key: "icon",
        color: e.color,
        size: m,
        icon: e.icon
      }, null) : void 0])]), d && _("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [a.headline?.() ?? e.headline]), f && _("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [a.title?.() ?? e.title]), v && _("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: de(e.textWidth)
        }
      }, [a.text?.() ?? e.text]), a.default && _("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), c && _("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [p(Ee, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            href: e.href,
            text: e.actionText,
            to: e.to
          }
        }
      }, {
        default: () => [a.actions?.({
          props: {
            onClick: u
          }
        }) ?? p(Oe, {
          onClick: u
        }, null)]
      })])]);
    }), {};
  }
}), Eo = /* @__PURE__ */ Symbol.for("vuetify:v-expansion-panel"), Ny = R({
  ...Se(),
  ...lc()
}, "VExpansionPanelText"), Qs = Q()({
  name: "VExpansionPanelText",
  props: Ny(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(Eo);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: o
    } = oc(e, a.isSelected);
    return te(() => p(ir, {
      onAfterLeave: o
    }, {
      default: () => [qe(_("div", {
        class: ee(["v-expansion-panel-text", e.class]),
        style: ve(e.style)
      }, [n.default && l.value && _("div", {
        class: "v-expansion-panel-text__wrapper"
      }, [n.default?.()])]), [[xn, a.isSelected.value]])]
    })), {};
  }
}), Ry = R({
  color: String,
  expandIcon: {
    type: xe,
    default: "$expand"
  },
  collapseIcon: {
    type: xe,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...Se(),
  ...dt()
}, "VExpansionPanelTitle"), eu = Q()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: Vt
  },
  props: Ry(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(Eo);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color), {
      dimensionStyles: i
    } = ft(e), r = V(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = /* @__PURE__ */ E(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return te(() => qe(_("button", {
      class: ee(["v-expansion-panel-title", {
        "v-expansion-panel-title--active": a.isSelected.value,
        "v-expansion-panel-title--focusable": e.focusable,
        "v-expansion-panel-title--static": e.static
      }, l.value, e.class]),
      style: ve([o.value, i.value, e.style]),
      type: "button",
      tabindex: a.disabled.value ? -1 : void 0,
      disabled: a.disabled.value,
      "aria-expanded": a.isSelected.value,
      onClick: e.readonly ? void 0 : a.toggle
    }, [_("span", {
      class: "v-expansion-panel-title__overlay"
    }, null), n.default?.(r.value), !e.hideActions && p(Ee, {
      defaults: {
        VIcon: {
          icon: s.value
        }
      }
    }, {
      default: () => [_("span", {
        class: "v-expansion-panel-title__icon"
      }, [n.actions?.(r.value) ?? p(He, null, null)])]
    })]), [[Vt, e.ripple]])), {};
  }
}), Hy = R({
  title: String,
  text: String,
  bgColor: String,
  ...vt(),
  ...il(),
  ...Je(),
  ...Ae(),
  ...Ry(),
  ...Ny()
}, "VExpansionPanel"), M1 = Q()({
  name: "VExpansionPanel",
  props: Hy(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ba(e, Eo), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.bgColor), {
      elevationClasses: i
    } = bt(e), {
      roundedClasses: r
    } = et(e), s = /* @__PURE__ */ E(() => a?.disabled.value || e.disabled), u = V(() => a.group.items.value.reduce((f, v, k) => (a.group.selected.value.includes(v.id) && f.push(k), f), [])), c = V(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === 1);
    }), d = V(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === -1);
    });
    return Ze(Eo, a), te(() => {
      const f = !!(n.text || e.text), v = !!(n.title || e.title), k = eu.filterProps(e), m = Qs.filterProps(e);
      return p(e.tag, {
        class: ee(["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": c.value,
          "v-expansion-panel--after-active": d.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class]),
        style: ve([o.value, e.style])
      }, {
        default: () => [_("div", {
          class: ee(["v-expansion-panel__shadow", ...i.value])
        }, null), p(Ee, {
          defaults: {
            VExpansionPanelTitle: {
              ...k
            },
            VExpansionPanelText: {
              ...m
            }
          }
        }, {
          default: () => [v && p(eu, {
            key: "title"
          }, {
            default: () => [n.title ? n.title() : e.title]
          }), f && p(Qs, {
            key: "text"
          }, {
            default: () => [n.text ? n.text() : e.text]
          }), n.default?.()]
        })]
      });
    }), {
      groupItem: a
    };
  }
}), B1 = ["default", "accordion", "inset", "popout"], F1 = R({
  flat: Boolean,
  ...ol(),
  ...jt(Hy(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...Ne(),
  ...Se(),
  ...Ae(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => B1.includes(e)
  }
}, "VExpansionPanels"), L1 = Q()({
  name: "VExpansionPanels",
  props: F1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      next: a,
      prev: l
    } = Ca(e, Eo), {
      themeClasses: o
    } = We(e), i = /* @__PURE__ */ E(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return lt({
      VExpansionPanel: {
        bgColor: /* @__PURE__ */ E(() => e.bgColor),
        collapseIcon: /* @__PURE__ */ E(() => e.collapseIcon),
        color: /* @__PURE__ */ E(() => e.color),
        eager: /* @__PURE__ */ E(() => e.eager),
        elevation: /* @__PURE__ */ E(() => e.elevation),
        expandIcon: /* @__PURE__ */ E(() => e.expandIcon),
        focusable: /* @__PURE__ */ E(() => e.focusable),
        hideActions: /* @__PURE__ */ E(() => e.hideActions),
        readonly: /* @__PURE__ */ E(() => e.readonly),
        ripple: /* @__PURE__ */ E(() => e.ripple),
        rounded: /* @__PURE__ */ E(() => e.rounded),
        static: /* @__PURE__ */ E(() => e.static)
      }
    }), te(() => p(e.tag, {
      class: ee(["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, o.value, i.value, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.default?.({
        prev: l,
        next: a
      })]
    })), {
      next: a,
      prev: l
    };
  }
}), O1 = R({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Be(ur({
    active: !0
  }), ["location", "spaced"]),
  ...nl(),
  ...la(),
  ...ta({
    transition: "fab-transition"
  })
}, "VFab"), $1 = Q()({
  name: "VFab",
  props: O1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), l = /* @__PURE__ */ se(56), o = /* @__PURE__ */ ae(), {
      resizeRef: i
    } = vn((d) => {
      d.length && (l.value = d[0].target.clientHeight);
    }), r = /* @__PURE__ */ E(() => e.app || e.absolute), s = V(() => r.value ? e.location?.split(" ").shift() ?? "bottom" : !1), u = V(() => r.value ? e.location?.split(" ")[1] ?? "end" : !1);
    Pt(() => e.app, () => {
      const d = al({
        id: e.name,
        order: V(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: V(() => e.layout ? l.value + 24 : 0),
        elementSize: V(() => l.value + 24),
        active: V(() => e.app && a.value),
        absolute: /* @__PURE__ */ E(() => e.absolute)
      });
      at(() => {
        o.value = d.layoutItemStyles.value;
      });
    });
    const c = /* @__PURE__ */ ae();
    return te(() => {
      const d = Oe.filterProps(e);
      return _("div", {
        ref: c,
        class: ee(["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${u.value}`]: r.value
        }, e.class]),
        style: ve([e.app ? {
          ...o.value
        } : {
          height: e.absolute ? "100%" : "inherit"
        }, e.style])
      }, [_("div", {
        class: "v-fab__container"
      }, [p(Ot, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [qe(p(Oe, U({
          ref: i
        }, d, {
          active: void 0,
          location: void 0
        }), n), [[xn, e.active]])]
      })])]);
    }), {};
  }
});
function N1() {
  function e(n) {
    return [...n.dataTransfer?.items ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...n.dataTransfer?.files ?? []].length > 0;
  }
  async function t(n) {
    const a = [], l = [...n.dataTransfer?.items ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length)
      for (const o of l) {
        const i = await Wy(o, zy(".", o));
        a.push(...i.map((r) => r.file));
      }
    else
      a.push(...n.dataTransfer?.files ?? []);
    return a;
  }
  return {
    handleDrop: t,
    hasFilesOrFolders: e
  };
}
function Wy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{
      file: o,
      path: t
    }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o)
        i.push(...await Wy(r, zy(t, r)));
      n(i);
    });
  });
}
function zy(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const R1 = R({
  filterByType: String
}, "file-accept");
function H1(e) {
  const t = V(() => e.filterByType ? W1(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return {
        accepted: l,
        rejected: a.filter((o) => !l.includes(o))
      };
    }
    return {
      accepted: a,
      rejected: []
    };
  }
  return {
    filterAccepted: n
  };
}
function W1(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    const i = o.name.split(".").at(-1)?.toLowerCase() ?? "", r = o.type.split("/").at(0)?.toLowerCase() ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const z1 = R({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  truncateLength: {
    type: [Number, String],
    default: 22
  },
  ...Be(ia({
    prependIcon: "$file"
  }), ["direction"]),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Xe(e).every((t) => t != null && typeof t == "object")
  },
  ...R1(),
  ...qo({
    clearable: !0
  })
}, "VFileInput"), j1 = Q()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: z1(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    rejected: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: o
    } = Ue(), {
      filterAccepted: i
    } = H1(e), r = pe(e, "modelValue", e.modelValue, (q) => Xe(q), (q) => !e.multiple && Array.isArray(q) ? q[0] : q), {
      isFocused: s,
      focus: u,
      blur: c
    } = oa(e), d = V(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = V(() => (r.value ?? []).reduce((q, $) => {
      let {
        size: ne = 0
      } = $;
      return q + ne;
    }, 0)), v = V(() => Pd(f.value, d.value)), k = V(() => (r.value ?? []).map((q) => {
      const {
        name: $ = "",
        size: ne = 0
      } = q, K = B($);
      return e.showSize ? `${K} (${Pd(ne, d.value)})` : K;
    })), m = V(() => {
      const q = r.value?.length ?? 0;
      return e.showSize ? o(e.counterSizeString, q, v.value) : o(e.counterString, q);
    }), y = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), w = /* @__PURE__ */ E(() => s.value || e.active), b = V(() => ["plain", "underlined"].includes(e.variant)), S = /* @__PURE__ */ se(!1), {
      handleDrop: g,
      hasFilesOrFolders: I
    } = N1();
    function C() {
      x.value !== document.activeElement && x.value?.focus(), s.value || u();
    }
    function T(q) {
      x.value?.click();
    }
    function P(q) {
      a("mousedown:control", q);
    }
    function F(q) {
      x.value?.click(), a("click:control", q);
    }
    function A(q) {
      q.stopPropagation(), C(), Te(() => {
        r.value = [], $o(e["onClick:clear"], q);
      });
    }
    function B(q) {
      if (q.length < Number(e.truncateLength)) return q;
      const $ = Math.floor((Number(e.truncateLength) - 1) / 2);
      return `${q.slice(0, $)}…${q.slice(q.length - $)}`;
    }
    function D(q) {
      q.preventDefault(), q.stopImmediatePropagation(), S.value = !0;
    }
    function L(q) {
      q.preventDefault(), S.value = !1;
    }
    async function W(q) {
      if (q.preventDefault(), q.stopImmediatePropagation(), S.value = !1, !x.value || !I(q)) return;
      const $ = await g(q);
      J($);
    }
    function N(q) {
      if (!(!q.target || q.repack))
        if (e.filterByType)
          J([...q.target.files]);
        else {
          const $ = q.target;
          r.value = [...$.files ?? []];
        }
    }
    function J(q) {
      const $ = new DataTransfer(), {
        accepted: ne,
        rejected: K
      } = i(q);
      K.length && a("rejected", K);
      for (const G of ne)
        $.items.add(G);
      x.value.files = $.files, r.value = [...$.files];
      const H = new Event("change", {
        bubbles: !0
      });
      H.repack = !0, x.value.dispatchEvent(H);
    }
    return ue(r, (q) => {
      (!Array.isArray(q) || !q.length) && x.value && (x.value.value = "");
    }), te(() => {
      const q = !!(l.counter || e.counter), $ = !!(q || l.details), [ne, K] = Fn(n), {
        modelValue: H,
        ...G
      } = Tt.filterProps(e), X = {
        ...wa.filterProps(e),
        "onClick:clear": A
      }, fe = n.webkitdirectory !== void 0 && n.webkitdirectory !== !1, Z = n.accept ? String(n.accept) : void 0, ce = fe ? void 0 : e.filterByType ?? Z;
      return p(Tt, U({
        ref: y,
        modelValue: e.multiple ? r.value : r.value[0],
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--dragging": S.value,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": b.value
        }, e.class],
        style: e.style,
        "onClick:prepend": T
      }, ne, G, {
        centerAffix: !b.value,
        focused: s.value
      }), {
        ...l,
        default: (Ce) => {
          let {
            id: Ve,
            isDisabled: Pe,
            isDirty: M,
            isReadonly: O,
            isValid: j,
            hasDetails: re
          } = Ce;
          return p(wa, U({
            ref: h,
            prependIcon: e.prependIcon,
            onMousedown: P,
            onClick: F,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, X, {
            id: Ve.value,
            active: w.value || M.value,
            dirty: M.value || e.dirty,
            disabled: Pe.value,
            focused: s.value,
            details: re.value,
            error: j.value === !1,
            onDragover: D,
            onDrop: W
          }), {
            ...l,
            default: (z) => {
              let {
                props: {
                  class: ie,
                  ...me
                },
                controlRef: Y
              } = z;
              return _(ye, null, [_("input", U({
                ref: (le) => x.value = Y.value = le,
                type: "file",
                accept: ce,
                readonly: O.value,
                disabled: Pe.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (le) => {
                  le.stopPropagation(), O.value && le.preventDefault(), C();
                },
                onChange: N,
                onDragleave: L,
                onFocus: C,
                onBlur: c
              }, me, K), null), _("div", {
                class: ee(ie)
              }, [!!r.value?.length && !e.hideInput && (l.selection ? l.selection({
                fileNames: k.value,
                totalBytes: f.value,
                totalBytesReadable: v.value
              }) : e.chips ? k.value.map((le) => p(Jn, {
                key: le,
                size: "small",
                text: le
              }, null)) : k.value.join(", "))])]);
            }
          });
        },
        details: $ ? (Ce) => _(ye, null, [l.details?.(Ce), q && _(ye, null, [_("span", null, null), p(dr, {
          active: !!r.value?.length,
          value: m.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), St({}, y, h, x);
  }
}), Y1 = R({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Et(),
  ...Se(),
  ...vt(),
  ...nl(),
  ...Je(),
  ...Ae({
    tag: "footer"
  }),
  ...Ne()
}, "VFooter"), U1 = Q()({
  name: "VFooter",
  props: Y1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), {
      themeClasses: l
    } = We(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = ze(() => e.color), {
      borderClasses: r
    } = Nt(e), {
      elevationClasses: s
    } = bt(e), {
      roundedClasses: u
    } = et(e), c = /* @__PURE__ */ se(32), {
      resizeRef: d
    } = vn((v) => {
      v.length && (c.value = v[0].target.clientHeight);
    }), f = V(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
    return Pt(() => e.app, () => {
      const v = al({
        id: e.name,
        order: V(() => parseInt(e.order, 10)),
        position: /* @__PURE__ */ E(() => "bottom"),
        layoutSize: f,
        elementSize: V(() => e.height === "auto" ? void 0 : f.value),
        active: /* @__PURE__ */ E(() => e.app),
        absolute: /* @__PURE__ */ E(() => e.absolute)
      });
      at(() => {
        a.value = v.layoutItemStyles.value;
      });
    }), te(() => p(e.tag, {
      ref: d,
      class: ee(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]),
      style: ve([i.value, e.app ? a.value : {
        height: de(e.height)
      }, e.style])
    }, n)), {};
  }
}), K1 = R({
  ...Se(),
  ...tx()
}, "VForm"), G1 = Q()({
  name: "VForm",
  props: K1(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = nx(e), o = /* @__PURE__ */ ae();
    function i(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const u = s, c = l.validate();
      u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
        let {
          valid: f
        } = d;
        f && o.value?.submit();
      }), u.preventDefault();
    }
    return te(() => _("form", {
      ref: o,
      class: ee(["v-form", e.class]),
      style: ve(e.style),
      novalidate: !0,
      onReset: i,
      onSubmit: r
    }, [n.default?.(l)])), St(l, o);
  }
}), q1 = R({
  color: String,
  ...Et(),
  ...Se(),
  ...Je(),
  ...Ae({
    tag: "kbd"
  }),
  ...Ne(),
  ...vt()
}, "VKbd"), tu = Q()({
  name: "VKbd",
  props: q1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      borderClasses: l
    } = Nt(e), {
      roundedClasses: o
    } = et(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = ze(() => e.color), {
      elevationClasses: s
    } = bt(e);
    return te(() => p(e.tag, {
      class: ee(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]),
      style: ve([r.value, e.style])
    }, n)), {};
  }
});
function jy(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Yy = {
  ctrl: {
    mac: {
      symbol: "⌃",
      icon: "$ctrl",
      text: "$vuetify.hotkey.ctrl"
    },
    default: {
      text: "Ctrl"
    }
  },
  meta: {
    mac: {
      symbol: "⌘",
      icon: "$command",
      text: "$vuetify.hotkey.command"
    },
    default: {
      text: "Ctrl"
    }
  },
  cmd: {
    mac: {
      symbol: "⌘",
      icon: "$command",
      text: "$vuetify.hotkey.command"
    },
    default: {
      text: "Ctrl"
    }
  },
  shift: {
    mac: {
      symbol: "⇧",
      icon: "$shift",
      text: "$vuetify.hotkey.shift"
    },
    default: {
      text: "Shift"
    }
  },
  alt: {
    mac: {
      symbol: "⌥",
      icon: "$alt",
      text: "$vuetify.hotkey.option"
    },
    default: {
      text: "Alt"
    }
  },
  enter: {
    default: {
      symbol: "↵",
      icon: "$enter",
      text: "$vuetify.hotkey.enter"
    }
  },
  arrowup: {
    default: {
      symbol: "↑",
      icon: "$arrowup",
      text: "$vuetify.hotkey.upArrow"
    }
  },
  arrowdown: {
    default: {
      symbol: "↓",
      icon: "$arrowdown",
      text: "$vuetify.hotkey.downArrow"
    }
  },
  arrowleft: {
    default: {
      symbol: "←",
      icon: "$arrowleft",
      text: "$vuetify.hotkey.leftArrow"
    }
  },
  arrowright: {
    default: {
      symbol: "→",
      icon: "$arrowright",
      text: "$vuetify.hotkey.rightArrow"
    }
  },
  backspace: {
    default: {
      symbol: "⌫",
      icon: "$backspace",
      text: "$vuetify.hotkey.backspace"
    }
  },
  escape: {
    default: {
      text: "$vuetify.hotkey.escape"
    }
  },
  " ": {
    mac: {
      symbol: "␣",
      icon: "$space",
      text: "$vuetify.hotkey.space"
    },
    default: {
      text: "$vuetify.hotkey.space"
    }
  },
  "-": {
    default: {
      text: "-"
    }
  }
}, X1 = R({
  // String representing keyboard shortcuts (e.g., "ctrl+k", "meta+shift+p")
  keys: String,
  // How to display keys: 'symbol' uses special characters (⌘, ⌃), 'icon' uses SVG icons, 'text' uses words
  displayMode: {
    type: String,
    default: "icon"
  },
  // Custom key mapping configuration. Users can import and modify the exported hotkeyMap as needed
  keyMap: {
    type: Object,
    default: () => Yy
  },
  platform: {
    type: String,
    default: "auto"
  },
  inline: Boolean,
  disabled: Boolean,
  prefix: String,
  suffix: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e)
  },
  ...Se(),
  ...Ne(),
  ...Et(),
  ...Je(),
  ...vt(),
  color: String
}, "VHotkey"), ts = /* @__PURE__ */ Symbol("VHotkey:AND_DELINEATOR"), ns = /* @__PURE__ */ Symbol("VHotkey:SLASH_DELINEATOR"), Af = /* @__PURE__ */ Symbol("VHotkey:THEN_DELINEATOR");
function Z1(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = jy(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Df(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = jy(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const J1 = Q()({
  name: "VHotkey",
  props: X1(),
  setup(e) {
    const {
      t
    } = Ue(), {
      themeClasses: n
    } = We(e), {
      rtlClasses: a
    } = gt(), {
      borderClasses: l
    } = Nt(e), {
      roundedClasses: o
    } = et(e), {
      elevationClasses: i
    } = bt(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: u
    } = aa(() => ({
      color: e.color,
      variant: e.variant === "contained" ? "elevated" : e.variant
    })), c = V(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = V(() => e.keys ? e.keys.split(" ").map((h) => {
      const x = [], w = Jw(h);
      for (let b = 0; b < w.length; b++) {
        const S = w[b];
        b > 0 && x.push(Af);
        const {
          keys: g,
          separators: I
        } = eg(S);
        for (let C = 0; C < g.length; C++) {
          const T = g[C];
          C > 0 && x.push(I[C - 1] === "/" ? ns : ts), x.push(Df(e.keyMap, e.displayMode, T, c.value));
        }
      }
      return x;
    }) : []), f = V(() => {
      if (!e.keys) return "";
      const x = d.value.map((w) => {
        const b = [];
        for (const S of w)
          if (Array.isArray(S)) {
            const g = S[0] === "icon" || S[0] === "symbol" ? Df(It(Yy, e.keyMap), "text", String(S[1]), c.value)[1] : S[1];
            b.push(v(g));
          } else
            S === ts ? b.push(t("$vuetify.hotkey.plus")) : S === ns ? b.push(t("$vuetify.hotkey.or")) : S === Af && b.push(t("$vuetify.hotkey.then"));
        return b.join(" ");
      }).join(", ");
      return t("$vuetify.hotkey.shortcut", x);
    });
    function v(h) {
      return h.startsWith("$vuetify.") ? t(h) : h;
    }
    function k(h) {
      if (e.displayMode === "text") return;
      const x = Z1(e.keyMap, String(h[2]), c.value);
      return v(x);
    }
    function m(h, x) {
      const w = e.variant === "contained", b = w ? "kbd" : tu, S = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...w ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
      return p(b, {
        key: x,
        class: ee(S),
        style: ve(w ? void 0 : s.value),
        "aria-hidden": "true",
        title: k(h)
      }, {
        default: () => [h[0] === "icon" ? p(He, {
          icon: h[1],
          "aria-hidden": "true"
        }, null) : v(h[1])]
      });
    }
    function y(h, x) {
      return _("span", {
        key: x,
        class: "v-hotkey__divider",
        "aria-hidden": "true"
      }, [h === ts ? "+" : h === ns ? "/" : t("$vuetify.hotkey.then")]);
    }
    te(() => {
      const h = _(ye, null, [e.prefix && _("span", {
        key: "prefix",
        class: "v-hotkey__prefix"
      }, [e.prefix]), d.value.map((x, w) => _("span", {
        class: "v-hotkey__combination",
        key: w
      }, [x.map((b, S) => Array.isArray(b) ? m(b, S) : y(b, S)), w < d.value.length - 1 && _("span", {
        "aria-hidden": "true"
      }, [qt(" ")])])), e.suffix && _("span", {
        key: "suffix",
        class: "v-hotkey__suffix"
      }, [e.suffix])]);
      return _("div", {
        class: ee(["v-hotkey", {
          "v-hotkey--disabled": e.disabled,
          "v-hotkey--inline": e.inline,
          "v-hotkey--contained": e.variant === "contained"
        }, n.value, a.value, u.value, e.class]),
        style: ve(e.style),
        role: "img",
        "aria-label": f.value
      }, [e.variant !== "contained" ? h : p(tu, {
        key: "contained",
        class: ee(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]),
        style: ve(s.value),
        "aria-hidden": "true"
      }, {
        default: () => [h]
      })]);
    });
  }
}), Q1 = R({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...nc()
}, "VHover"), eI = Q()({
  name: "VHover",
  props: Q1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: o
    } = ac(e, (i) => !e.disabled && (a.value = i));
    return () => n.default?.({
      isHovering: a.value,
      props: {
        onMouseenter: l,
        onMouseleave: o
      }
    });
  }
}), tI = R({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...dt(),
  ...Ae()
}, "VInfiniteScroll"), Ef = $t({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, t) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ho();
    return ue(l, async (o) => {
      n("intersect", e.side, o);
    }), te(() => _("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [qt(" ")])), {};
  }
}), nI = Q()({
  name: "VInfiniteScroll",
  props: tI(),
  emits: {
    load: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = /* @__PURE__ */ ae(), o = /* @__PURE__ */ se("ok"), i = /* @__PURE__ */ se("ok"), r = V(() => de(e.margin)), s = /* @__PURE__ */ se(!1);
    function u(g) {
      if (!l.value) return;
      const I = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[I] = g;
    }
    function c() {
      if (!l.value) return 0;
      const g = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[g];
    }
    function d() {
      if (!l.value) return 0;
      const g = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[g];
    }
    function f() {
      if (!l.value) return 0;
      const g = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[g];
    }
    yt(() => {
      l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
    });
    function v(g, I) {
      g === "start" ? o.value = I : g === "end" ? i.value = I : g === "both" && (o.value = I, i.value = I);
    }
    function k(g) {
      return g === "start" ? o.value : i.value;
    }
    let m = 0;
    function y(g, I) {
      s.value = I, s.value && h(g);
    }
    function h(g) {
      if (e.mode !== "manual" && !s.value) return;
      const I = k(g);
      if (!l.value || ["empty", "loading"].includes(I)) return;
      m = d(), v(g, "loading");
      function C(T) {
        v(g, T), Te(() => {
          T === "empty" || T === "error" || (T === "ok" && g === "start" && u(d() - m + c()), e.mode !== "manual" && Te(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  h(g);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: g,
        done: C
      });
    }
    const {
      t: x
    } = Ue();
    function w(g, I) {
      if (e.side !== g && e.side !== "both") return;
      const C = () => h(g), T = {
        side: g,
        props: {
          onClick: C,
          color: e.color
        }
      };
      return I === "error" ? n.error?.(T) : I === "empty" ? n.empty?.(T) ?? _("div", null, [x(e.emptyText)]) : e.mode === "manual" ? I === "loading" ? n.loading?.(T) ?? p(Sa, {
        indeterminate: !0,
        color: e.color
      }, null) : n["load-more"]?.(T) ?? p(Oe, {
        variant: "outlined",
        color: e.color,
        onClick: C
      }, {
        default: () => [x(e.loadMoreText)]
      }) : n.loading?.(T) ?? p(Sa, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: b
    } = ft(e);
    te(() => {
      const g = e.tag, I = e.side === "start" || e.side === "both", C = e.side === "end" || e.side === "both", T = e.mode === "intersect";
      return p(g, {
        ref: l,
        class: ee(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": I,
          "v-infinite-scroll--end": C
        }]),
        style: ve(b.value)
      }, {
        default: () => [_("div", {
          class: "v-infinite-scroll__side"
        }, [w("start", o.value)]), I && T && p(Ef, {
          key: "start",
          side: "start",
          onIntersect: y,
          rootMargin: r.value
        }, null), n.default?.(), C && T && p(Ef, {
          key: "end",
          side: "end",
          onIntersect: y,
          rootMargin: r.value
        }, null), _("div", {
          class: "v-infinite-scroll__side"
        }, [w("end", i.value)])]
      });
    });
    function S(g) {
      const I = g ?? e.side;
      v(I, "ok"), Te(() => {
        I !== "end" && u(d() - m + c()), e.mode !== "manual" && Te(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                I === "both" ? (h("start"), h("end")) : h(I);
              });
            });
          });
        });
      });
    }
    return {
      reset: S
    };
  }
}), Uy = /* @__PURE__ */ Symbol.for("vuetify:v-item-group"), aI = R({
  ...Se(),
  ...ol({
    selectedClass: "v-item--selected"
  }),
  ...Ae(),
  ...Ne()
}, "VItemGroup"), lI = Q()({
  name: "VItemGroup",
  props: aI(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      isSelected: l,
      select: o,
      next: i,
      prev: r,
      selected: s
    } = Ca(e, Uy);
    return () => p(e.tag, {
      class: ee(["v-item-group", a.value, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.default?.({
        isSelected: l,
        select: o,
        next: i,
        prev: r,
        selected: s.value
      })]
    });
  }
}), oI = Q()({
  name: "VItem",
  props: il(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      select: l,
      toggle: o,
      selectedClass: i,
      value: r,
      disabled: s
    } = ba(e, Uy);
    return () => n.default?.({
      isSelected: a.value,
      selectedClass: i.value,
      select: l,
      toggle: o,
      value: r.value,
      disabled: s.value
    });
  }
}), iI = R({
  ...Se(),
  ...dt(),
  ...Zm()
}, "VLayout"), rI = Q()({
  name: "VLayout",
  props: iI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: o,
      items: i,
      layoutRef: r
    } = Qm(e), {
      dimensionStyles: s
    } = ft(e);
    return te(() => _("div", {
      ref: r,
      class: ee([a.value, e.class]),
      style: ve([s.value, l.value, e.style])
    }, [n.default?.()])), {
      getLayoutItem: o,
      items: i
    };
  }
}), sI = R({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...Se(),
  ...nl()
}, "VLayoutItem"), uI = Q()({
  name: "VLayoutItem",
  props: sI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutItemStyles: a
    } = al({
      id: e.name,
      order: V(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => e.position),
      elementSize: /* @__PURE__ */ E(() => e.size),
      layoutSize: /* @__PURE__ */ E(() => e.size),
      active: /* @__PURE__ */ E(() => e.modelValue),
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return () => _("div", {
      class: ee(["v-layout-item", e.class]),
      style: ve([a.value, e.style])
    }, [n.default?.()]);
  }
}), cI = R({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...Se(),
  ...dt(),
  ...Ae(),
  ...ta({
    transition: "fade-transition"
  })
}, "VLazy"), dI = Q()({
  name: "VLazy",
  directives: {
    vIntersect: wn
  },
  props: cI(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ft(e), l = pe(e, "modelValue");
    function o(i) {
      l.value || (l.value = i);
    }
    return te(() => qe(p(e.tag, {
      class: ee(["v-lazy", e.class]),
      style: ve([a.value, e.style])
    }, {
      default: () => [l.value && p(Ot, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [n.default?.()]
      })]
    }), [[wn, {
      handler: o,
      options: e.options
    }, null]])), {};
  }
}), fI = R({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...Se()
}, "VLocaleProvider"), vI = Q()({
  name: "VLocaleProvider",
  props: fI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = Hm(e);
    return te(() => _("div", {
      class: ee(["v-locale-provider", a.value, e.class]),
      style: ve(e.style)
    }, [n.default?.()])), {};
  }
}), mI = R({
  scrollable: Boolean,
  ...Se(),
  ...dt(),
  ...Ae({
    tag: "main"
  })
}, "VMain"), gI = Q()({
  name: "VMain",
  props: mI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ft(e), {
      mainStyles: l
    } = Jm(), {
      ssrBootStyles: o
    } = ll();
    return te(() => p(e.tag, {
      class: ee(["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class]),
      style: ve([l.value, o.value, a.value, e.style])
    }, {
      default: () => [e.scrollable ? _("div", {
        class: "v-main__scroller"
      }, [n.default?.()]) : n.default?.()]
    })), {};
  }
});
function hI(e) {
  let {
    rootEl: t,
    isSticky: n,
    layoutItemStyles: a
  } = e;
  const l = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se(0), i = V(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [u]: de(o.value)
    } : {
      top: a.value.top
    }];
  });
  yt(() => {
    ue(n, (u) => {
      u ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), Dt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, k = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - k, l.value = !0) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (k ? l.value !== "top" && (o.value = -f + k + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: i
  };
}
const yI = 100, bI = 20;
function Mf(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Bf(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const a = Mf(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Mf(t) * 1e3;
}
function SI() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new xm(bI))).push([l.timeStamp, o]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function a(l) {
    const o = e[l]?.values().reverse();
    if (!o)
      throw new Error(`No samples for touch id ${l}`);
    const i = o[0], r = [], s = [];
    for (const u of o) {
      if (i[0] - u[0] > yI) break;
      r.push({
        t: u[0],
        d: u[1].clientX
      }), s.push({
        t: u[0],
        d: u[1].clientY
      });
    }
    return {
      x: Bf(r),
      y: Bf(s),
      get direction() {
        const {
          x: u,
          y: c
        } = this, [d, f] = [Math.abs(u), Math.abs(c)];
        return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : kI();
      }
    };
  }
  return {
    addMovement: t,
    endTouch: n,
    getVelocity: a
  };
}
function kI() {
  throw new Error();
}
function wI(e) {
  let {
    el: t,
    isActive: n,
    isTemporary: a,
    width: l,
    touchless: o,
    position: i
  } = e;
  yt(() => {
    window.addEventListener("touchstart", x, {
      passive: !0
    }), window.addEventListener("touchmove", w, {
      passive: !1
    }), window.addEventListener("touchend", b, {
      passive: !0
    });
  }), Dt(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", w), window.removeEventListener("touchend", b);
  });
  const r = V(() => ["left", "right"].includes(i.value)), {
    addMovement: s,
    endTouch: u,
    getVelocity: c
  } = SI();
  let d = !1;
  const f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(0), k = /* @__PURE__ */ se(0);
  let m;
  function y(g, I) {
    return (i.value === "left" ? g : i.value === "right" ? document.documentElement.clientWidth - g : i.value === "top" ? g : i.value === "bottom" ? document.documentElement.clientHeight - g : vl()) - (I ? l.value : 0);
  }
  function h(g) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const C = i.value === "left" ? (g - k.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - g - k.value) / l.value : i.value === "top" ? (g - k.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - g - k.value) / l.value : vl();
    return I ? je(C) : C;
  }
  function x(g) {
    if (o.value) return;
    const I = g.changedTouches[0].clientX, C = g.changedTouches[0].clientY, T = 25, P = i.value === "left" ? I < T : i.value === "right" ? I > document.documentElement.clientWidth - T : i.value === "top" ? C < T : i.value === "bottom" ? C > document.documentElement.clientHeight - T : vl(), F = n.value && (i.value === "left" ? I < l.value : i.value === "right" ? I > document.documentElement.clientWidth - l.value : i.value === "top" ? C < l.value : i.value === "bottom" ? C > document.documentElement.clientHeight - l.value : vl());
    (P || F || n.value && a.value) && (m = [I, C], k.value = y(r.value ? I : C, n.value), v.value = h(r.value ? I : C), d = k.value > -20 && k.value < 80, u(g), s(g));
  }
  function w(g) {
    const I = g.changedTouches[0].clientX, C = g.changedTouches[0].clientY;
    if (d) {
      if (!g.cancelable) {
        d = !1;
        return;
      }
      const P = Math.abs(I - m[0]), F = Math.abs(C - m[1]);
      (r.value ? P > F && P > 3 : F > P && F > 3) ? (f.value = !0, d = !1) : (r.value ? F : P) > 3 && (d = !1);
    }
    if (!f.value) return;
    g.preventDefault(), s(g);
    const T = h(r.value ? I : C, !1);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? k.value = y(r.value ? I : C, !0) : T < 0 && (k.value = y(r.value ? I : C, !1));
  }
  function b(g) {
    if (d = !1, !f.value) return;
    s(g), f.value = !1;
    const I = c(g.changedTouches[0].identifier), C = Math.abs(I.x), T = Math.abs(I.y);
    (r.value ? C > T && C > 400 : T > C && T > 3) ? n.value = I.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[i.value] || vl()) : n.value = v.value > 0.5;
  }
  const S = V(() => f.value ? {
    transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : vl(),
    transition: "none"
  } : void 0);
  return Pt(f, () => {
    const g = t.value?.style.transform ?? null, I = t.value?.style.transition ?? null;
    at(() => {
      t.value?.style.setProperty("transform", S.value?.transform || "none"), t.value?.style.setProperty("transition", S.value?.transition || null);
    }), ot(() => {
      t.value?.style.setProperty("transform", g), t.value?.style.setProperty("transition", I);
    });
  }), {
    isDragging: f,
    dragProgress: v,
    dragStyles: S
  };
}
function vl() {
  throw new Error();
}
const pI = ["start", "end", "left", "right", "top", "bottom"], xI = R({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => pI.includes(e)
  },
  sticky: Boolean,
  ...Et(),
  ...Se(),
  ...nc(),
  ...tl({
    mobile: null
  }),
  ...vt(),
  ...nl(),
  ...Je(),
  ...Be(th(), ["disableInitialFocus"]),
  ...Ae({
    tag: "nav"
  }),
  ...Ne()
}, "VNavigationDrawer"), CI = Q()({
  name: "VNavigationDrawer",
  props: xI(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      isRtl: o
    } = gt(), {
      themeClasses: i
    } = We(e), {
      borderClasses: r
    } = Nt(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: u
    } = ze(() => e.color), {
      elevationClasses: c
    } = bt(e), {
      displayClasses: d,
      mobile: f
    } = ln(e), {
      roundedClasses: v
    } = et(e), k = fg(), m = pe(e, "modelValue", null, ($) => !!$), {
      ssrBootStyles: y
    } = ll(), {
      scopeId: h
    } = sl(), x = /* @__PURE__ */ ae(), w = /* @__PURE__ */ se(!1), {
      runOpenDelay: b,
      runCloseDelay: S
    } = ac(e, ($) => {
      w.value = $;
    }), g = V(() => e.rail && e.expandOnHover && w.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), I = V(() => Ss(e.location, o.value)), C = /* @__PURE__ */ E(() => e.persistent), T = V(() => !e.permanent && (f.value || e.temporary)), P = V(() => e.sticky && !T.value && I.value !== "bottom");
    nh(e, {
      isActive: m,
      localTop: T,
      contentEl: x
    }), Pt(() => e.expandOnHover && e.rail != null, () => {
      ue(w, ($) => a("update:rail", !$));
    }), Pt(() => !e.disableResizeWatcher, () => {
      ue(T, ($) => !e.permanent && Te(() => m.value = !$));
    }), Pt(() => !e.disableRouteWatcher && !!k, () => {
      ue(k.currentRoute, () => T.value && (m.value = !1));
    }), ue(() => e.permanent, ($) => {
      $ && (m.value = !0);
    }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
    const {
      isDragging: F,
      dragProgress: A
    } = wI({
      el: x,
      isActive: m,
      isTemporary: T,
      width: g,
      touchless: /* @__PURE__ */ E(() => e.touchless),
      position: I
    }), B = V(() => {
      const $ = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
      return F.value ? $ * A.value : $;
    }), {
      layoutItemStyles: D,
      layoutItemScrimStyles: L
    } = al({
      id: e.name,
      order: V(() => parseInt(e.order, 10)),
      position: I,
      layoutSize: B,
      elementSize: g,
      active: /* @__PURE__ */ za(m),
      disableTransitions: /* @__PURE__ */ E(() => F.value),
      absolute: V(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || P.value && typeof W.value != "string"
      ))
    }), {
      isStuck: W,
      stickyStyles: N
    } = hI({
      rootEl: x,
      isSticky: P,
      layoutItemStyles: D
    }), J = ze(() => typeof e.scrim == "string" ? e.scrim : null), q = V(() => ({
      ...F.value ? {
        opacity: A.value * 0.2,
        transition: "none"
      } : void 0,
      ...L.value
    }));
    return lt({
      VList: {
        bgColor: "transparent"
      }
    }), te(() => {
      const $ = l.image || e.image;
      return _(ye, null, [p(e.tag, U({
        ref: x,
        onMouseenter: b,
        onMouseleave: S,
        class: ["v-navigation-drawer", `v-navigation-drawer--${I.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": w.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": T.value,
          "v-navigation-drawer--persistent": C.value,
          "v-navigation-drawer--active": m.value,
          "v-navigation-drawer--sticky": P.value
        }, i.value, s.value, r.value, d.value, c.value, v.value, e.class],
        style: [u.value, D.value, y.value, N.value, e.style],
        inert: !m.value
      }, h, n), {
        default: () => [$ && _("div", {
          key: "image",
          class: "v-navigation-drawer__img"
        }, [l.image ? p(Ee, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              alt: "",
              cover: !0,
              height: "inherit",
              src: e.image
            }
          }
        }, l.image) : p(Zn, {
          key: "image-img",
          alt: "",
          cover: !0,
          height: "inherit",
          src: e.image
        }, null)]), l.prepend && _("div", {
          class: "v-navigation-drawer__prepend"
        }, [l.prepend?.()]), _("div", {
          class: "v-navigation-drawer__content"
        }, [l.default?.()]), l.append && _("div", {
          class: "v-navigation-drawer__append"
        }, [l.append?.()])]
      }), p(ha, {
        name: "fade-transition"
      }, {
        default: () => [T.value && (F.value || m.value) && !!e.scrim && _("div", U({
          class: ["v-navigation-drawer__scrim", J.backgroundColorClasses.value],
          style: [q.value, J.backgroundColorStyles.value],
          onClick: () => {
            C.value || (m.value = !1);
          }
        }, h), null)]
      })]);
    }), {
      isStuck: W
    };
  }
}), _I = $t({
  name: "VNoSsr",
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ah();
    return () => a.value && n.default?.();
  }
}), VI = 50, II = 500;
function PI(e) {
  let {
    toggleUpDown: t
  } = e, n = -1, a = -1;
  ot(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), VI);
    }, II);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  ot(o);
  function i(r) {
    t(r === "up");
  }
  return {
    holdStart: l,
    holdStop: o
  };
}
const TI = R({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  step: {
    type: Number,
    default: 1
  },
  precision: {
    type: Number,
    default: 0
  },
  minFractionDigits: {
    type: Number,
    default: null
  },
  decimalSeparator: {
    type: String,
    validator: (e) => !e || e.length === 1
  },
  ...Be(Xo(), ["modelValue", "validationValue"])
}, "VNumberInput"), AI = Q()({
  name: "VNumberInput",
  props: {
    ...TI()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), {
      holdStart: l,
      holdStop: o
    } = PI({
      toggleUpDown: F
    }), i = Rl(e), r = V(() => i.isDisabled.value || i.isReadonly.value), s = /* @__PURE__ */ se(e.focused), {
      decimalSeparator: u
    } = Ue(), c = V(() => e.decimalSeparator?.[0] || u.value);
    function d(H) {
      let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      const fe = G == null ? String(H) : H.toFixed(G);
      if (s.value && X)
        return Number(fe).toString().replace(".", c.value);
      if (e.minFractionDigits === null || G !== null && G < e.minFractionDigits)
        return fe.replace(".", c.value);
      let [Z, ce] = fe.split(".");
      return ce = (ce ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [Z, ce].filter(Boolean).join(c.value);
    }
    const f = pe(e, "modelValue", null, (H) => H ?? null, (H) => H == null ? H ?? null : je(Number(H), e.min, e.max)), v = /* @__PURE__ */ se(null), k = /* @__PURE__ */ se(null);
    ue(f, (H) => {
      s.value && !r.value && Number(v.value?.replace(c.value, ".")) === H || (H == null ? (v.value = null, k.value = null) : isNaN(H) || (v.value = d(H), k.value = Number(v.value.replace(c.value, "."))));
    }, {
      immediate: !0
    });
    const m = V({
      get: () => v.value,
      set(H) {
        if (H === null || H === "") {
          f.value = null, v.value = null, k.value = null;
          return;
        }
        const G = Number(H.replace(c.value, "."));
        isNaN(G) || (v.value = H, k.value = G, G <= e.max && G >= e.min && (f.value = G));
      }
    }), y = V(() => {
      if (k.value === null) return !1;
      const H = Number(v.value?.replace(c.value, "."));
      return H !== je(H, e.min, e.max);
    }), h = V(() => r.value ? !1 : (f.value ?? 0) + e.step <= e.max), x = V(() => r.value ? !1 : (f.value ?? 0) - e.step >= e.min), w = V(() => e.hideInput ? "stacked" : e.controlVariant), b = /* @__PURE__ */ E(() => w.value === "split" ? "$plus" : "$collapse"), S = /* @__PURE__ */ E(() => w.value === "split" ? "$minus" : "$expand"), g = /* @__PURE__ */ E(() => w.value === "split" ? "default" : "small"), I = /* @__PURE__ */ E(() => w.value === "stacked" ? "auto" : "100%"), C = {
      props: {
        onClick: D,
        onPointerup: L,
        onPointerdown: W,
        onPointercancel: L
      }
    }, T = {
      props: {
        onClick: D,
        onPointerup: L,
        onPointerdown: N,
        onPointercancel: L
      }
    };
    ue(() => e.precision, () => q()), ue(() => e.minFractionDigits, () => q()), yt(() => {
      J();
    });
    function P(H) {
      if (H == null) return 0;
      const G = H.toString(), X = G.indexOf(".");
      return ~X ? G.length - X : 0;
    }
    function F() {
      let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (r.value) return;
      if (f.value == null) {
        m.value = d(je(0, e.min, e.max));
        return;
      }
      let G = Math.max(P(f.value), P(e.step));
      e.precision != null && (G = Math.max(G, e.precision)), H ? h.value && (m.value = d(f.value + e.step, G)) : x.value && (m.value = d(f.value - e.step, G));
    }
    function A(H) {
      if (!H.data) return;
      const G = H.target, {
        value: X,
        selectionStart: fe,
        selectionEnd: Z
      } = G ?? {}, ce = X ? X.slice(0, fe) + H.data + X.slice(Z) : H.data, Ce = e0(ce, e.precision, c.value);
      if (new RegExp(`^-?\\d*${Ti(c.value)}?\\d*$`).test(ce) || (H.preventDefault(), G.value = Ce, Te(() => m.value = Ce)), e.precision != null) {
        if (ce.split(c.value)[1]?.length > e.precision) {
          H.preventDefault(), G.value = Ce, Te(() => m.value = Ce);
          const Ve = (fe ?? 0) + H.data.length;
          G.setSelectionRange(Ve, Ve);
        }
        e.precision === 0 && ce.endsWith(c.value) && (H.preventDefault(), G.value = Ce, Te(() => m.value = Ce));
      }
    }
    async function B(H) {
      ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(H.key) || H.ctrlKey || ["ArrowDown", "ArrowUp"].includes(H.key) && (H.preventDefault(), H.stopPropagation(), J(), await Te(), H.key === "ArrowDown" ? F(!1) : F());
    }
    function D(H) {
      H.stopPropagation();
    }
    function L(H) {
      H.currentTarget?.releasePointerCapture(H.pointerId), H.preventDefault(), o();
    }
    function W(H) {
      H.currentTarget?.setPointerCapture(H.pointerId), H.preventDefault(), H.stopPropagation(), l("up");
    }
    function N(H) {
      H.currentTarget?.setPointerCapture(H.pointerId), H.preventDefault(), H.stopPropagation(), l("down");
    }
    function J() {
      if (r.value || !a.value) return;
      const H = a.value.value, G = Number(H.replace(c.value, "."));
      H && !isNaN(G) ? m.value = d(je(G, e.min, e.max)) : m.value = null;
    }
    function q() {
      r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, !1) : null);
    }
    function $() {
      if (!r.value) {
        if (f.value === null || isNaN(f.value)) {
          m.value = null;
          return;
        }
        m.value = f.value.toString().replace(".", c.value);
      }
    }
    function ne() {
      $();
    }
    function K() {
      J();
    }
    return te(() => {
      const {
        modelValue: H,
        type: G,
        ...X
      } = Mn.filterProps(e);
      function fe() {
        return n.increment ? p(Ee, {
          key: "increment-defaults",
          defaults: {
            VBtn: {
              disabled: !h.value,
              height: I.value,
              size: g.value,
              icon: b.value,
              variant: "text"
            }
          }
        }, {
          default: () => [n.increment(C)]
        }) : p(Oe, {
          "aria-hidden": "true",
          "data-testid": "increment",
          disabled: !h.value,
          height: I.value,
          icon: b.value,
          key: "increment-btn",
          onClick: D,
          onPointerdown: W,
          onPointerup: L,
          onPointercancel: L,
          size: g.value,
          variant: "text",
          tabindex: "-1"
        }, null);
      }
      function Z() {
        return n.decrement ? p(Ee, {
          key: "decrement-defaults",
          defaults: {
            VBtn: {
              disabled: !x.value,
              height: I.value,
              size: g.value,
              icon: S.value,
              variant: "text"
            }
          }
        }, {
          default: () => [n.decrement(T)]
        }) : p(Oe, {
          "aria-hidden": "true",
          "data-testid": "decrement",
          disabled: !x.value,
          height: I.value,
          icon: S.value,
          key: "decrement-btn",
          onClick: D,
          onPointerdown: N,
          onPointerup: L,
          onPointercancel: L,
          size: g.value,
          variant: "text",
          tabindex: "-1"
        }, null);
      }
      function ce() {
        return _("div", {
          class: "v-number-input__control"
        }, [Z(), p(nn, {
          vertical: w.value !== "stacked"
        }, null), fe()]);
      }
      function Ce() {
        return !e.hideInput && !e.inset ? p(nn, {
          vertical: !0
        }, null) : void 0;
      }
      const Ve = w.value === "split" ? _("div", {
        class: "v-number-input__control"
      }, [p(nn, {
        vertical: !0
      }, null), fe()]) : e.reverse || w.value === "hidden" ? void 0 : _(ye, null, [Ce(), ce()]), Pe = n["append-inner"] || Ve, M = w.value === "split" ? _("div", {
        class: "v-number-input__control"
      }, [Z(), p(nn, {
        vertical: !0
      }, null)]) : e.reverse && w.value !== "hidden" ? _(ye, null, [ce(), Ce()]) : void 0, O = n["prepend-inner"] || M;
      return p(Mn, U({
        ref: a
      }, X, {
        modelValue: m.value,
        "onUpdate:modelValue": (j) => m.value = j,
        focused: s.value,
        "onUpdate:focused": (j) => s.value = j,
        validationValue: f.value,
        error: e.error || y.value || void 0,
        onBeforeinput: A,
        onFocus: ne,
        onBlur: K,
        onKeydown: B,
        class: ["v-number-input", {
          "v-number-input--default": w.value === "default",
          "v-number-input--hide-input": e.hideInput,
          "v-number-input--inset": e.inset,
          "v-number-input--reverse": e.reverse,
          "v-number-input--split": w.value === "split",
          "v-number-input--stacked": w.value === "stacked"
        }, e.class],
        style: e.style,
        inputmode: "decimal"
      }), {
        ...n,
        "append-inner": Pe ? function() {
          for (var j = arguments.length, re = new Array(j), z = 0; z < j; z++)
            re[z] = arguments[z];
          return _(ye, null, [n["append-inner"]?.(...re), Ve]);
        } : void 0,
        "prepend-inner": O ? function() {
          for (var j = arguments.length, re = new Array(j), z = 0; z < j; z++)
            re[z] = arguments[z];
          return _(ye, null, [M, n["prepend-inner"]?.(...re)]);
        } : void 0
      });
    }), St({}, a);
  }
}), DI = R({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...dt(),
  ...Ko(),
  ...jt(qo({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), EI = Q()({
  name: "VOtpInput",
  props: DI(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      dimensionStyles: o
    } = ft(e), {
      isFocused: i,
      focus: r,
      blur: s
    } = oa(e), u = pe(e, "modelValue", "", (P) => P == null ? [] : String(P).split(""), (P) => P.join("")), {
      t: c
    } = Ue(), d = V(() => Number(e.length)), f = V(() => Array(d.value).fill(0)), v = /* @__PURE__ */ ae(-1), k = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae([]), y = V(() => m.value[v.value]);
    let h = !1;
    Pt(() => e.autofocus, () => {
      const P = Cl();
      P.run(() => {
        const {
          intersectionRef: F,
          isIntersecting: A
        } = Ho();
        at(() => {
          F.value = m.value[0];
        }), ue(A, (B) => {
          B && (F.value?.focus(), P.stop());
        });
      });
    });
    function x() {
      if (T(y.value.value)) {
        y.value.value = "";
        return;
      }
      if (h) return;
      const P = u.value.slice(), F = y.value.value;
      P[v.value] = F;
      let A = null;
      v.value > u.value.length ? A = u.value.length + 1 : v.value + 1 !== d.value && (A = "next"), u.value = P, A && Na(k.value, A);
    }
    function w() {
      h = !1, x();
    }
    function b(P) {
      const F = u.value.slice(), A = v.value;
      let B = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(P.key) && (P.preventDefault(), P.key === "ArrowLeft" ? B = "prev" : P.key === "ArrowRight" ? B = "next" : ["Backspace", "Delete"].includes(P.key) && (F[v.value] = "", u.value = F, v.value > 0 && P.key === "Backspace" ? B = "prev" : requestAnimationFrame(() => {
        m.value[A]?.select();
      })), requestAnimationFrame(() => {
        B != null && Na(k.value, B);
      }));
    }
    function S(P, F) {
      F.preventDefault(), F.stopPropagation();
      const A = F?.clipboardData?.getData("Text").trim().slice(0, d.value) ?? "", B = A.length - 1 === -1 ? P : A.length - 1;
      T(A) || (u.value = A.split(""), v.value = B);
    }
    function g() {
      u.value = [];
    }
    function I(P, F) {
      r(), v.value = F;
    }
    function C() {
      s(), v.value = -1;
    }
    function T(P) {
      return e.type === "number" && /[^0-9]/g.test(P);
    }
    return lt({
      VField: {
        color: /* @__PURE__ */ E(() => e.color),
        bgColor: /* @__PURE__ */ E(() => e.color),
        baseColor: /* @__PURE__ */ E(() => e.baseColor),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        error: /* @__PURE__ */ E(() => e.error),
        variant: /* @__PURE__ */ E(() => e.variant),
        rounded: /* @__PURE__ */ E(() => e.rounded)
      }
    }, {
      scoped: !0
    }), ue(u, (P) => {
      P.length === d.value && a("finish", P.join(""));
    }, {
      deep: !0
    }), ue(v, (P) => {
      P < 0 || Te(() => {
        m.value[P]?.select();
      });
    }), te(() => {
      const [P, F] = Fn(n);
      return _("div", U({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, P), [_("div", {
        ref: k,
        class: "v-otp-input__content",
        style: ve([o.value])
      }, [f.value.map((A, B) => _(ye, null, [e.divider && B !== 0 && _("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), p(wa, {
        focused: i.value && e.focusAll || v.value === B,
        key: B
      }, {
        ...l,
        loader: void 0,
        default: () => _("input", {
          ref: (D) => m.value[B] = D,
          "aria-label": c(e.label, B + 1),
          autofocus: B === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ee(["v-otp-input__field"]),
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: B === 0 ? d.value : "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: u.value[B],
          onInput: x,
          onFocus: (D) => I(D, B),
          onBlur: C,
          onKeydown: b,
          onCompositionstart: () => h = !0,
          onCompositionend: w,
          onPaste: (D) => S(B, D)
        }, null)
      })])), _("input", U({
        class: "v-otp-input-input",
        type: "hidden"
      }, F, {
        value: u.value.join("")
      }), null), p(En, {
        contained: !0,
        contentClass: "v-otp-input__loader",
        modelValue: !!e.loading,
        persistent: !0
      }, {
        default: () => [l.loader?.() ?? p(Sa, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: !0,
          size: "24",
          width: "2"
        }, null)]
      }), l.default?.()])]);
    }), {
      blur: () => {
        m.value?.some((P) => P.blur());
      },
      focus: () => {
        m.value?.[0].focus();
      },
      reset: g,
      isFocused: i
    };
  }
});
function MI(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const BI = R({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...Se()
}, "VParallax"), FI = Q()({
  name: "VParallax",
  props: BI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ho(), {
      resizeRef: o,
      contentRect: i
    } = vn(), {
      height: r
    } = ln(), s = /* @__PURE__ */ ae();
    at(() => {
      a.value = o.value = s.value?.$el;
    });
    let u;
    ue(l, (v) => {
      v ? (u = tr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, {
        passive: !0
      }), f()) : u.removeEventListener("scroll", f);
    }), Dt(() => {
      u?.removeEventListener("scroll", f);
    }), ue(r, f), ue(() => i.value?.height, f);
    const c = V(() => 1 - je(Number(e.scale)));
    let d = -1;
    function f() {
      !l.value || An() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
        const v = (s.value?.$el).querySelector(".v-img__img");
        if (!v) return;
        const k = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + m, h = i.value.height, x = y + (h - k) / 2, w = MI((m - x) * c.value), b = Math.max(1, (c.value * (k - h) + h) / h);
        v.style.setProperty("transform", `translateY(${w}px) scale(${b})`);
      }));
    }
    return te(() => p(Zn, {
      class: ee(["v-parallax", {
        "v-parallax--active": l.value
      }, e.class]),
      style: ve(e.style),
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, n)), {};
  }
}), LI = R({
  ...cr({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), OI = Q()({
  name: "VRadio",
  props: LI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = ka.filterProps(e);
      return p(ka, U(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), n);
    }), {};
  }
}), $I = R({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Be(ia(), ["direction"]),
  ...Be(Gu(), ["multiple"]),
  trueIcon: {
    type: xe,
    default: "$radioOn"
  },
  falseIcon: {
    type: xe,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), NI = Q()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: $I(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = At(), o = V(() => e.id || `radio-group-${l}`), i = pe(e, "modelValue"), r = /* @__PURE__ */ ae();
    return te(() => {
      const [s, u] = Fn(n), c = Tt.filterProps(e), d = ka.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: o.value
        }
      }) : e.label;
      return p(Tt, U({
        ref: r,
        class: ["v-radio-group", e.class],
        style: e.style
      }, s, c, {
        modelValue: i.value,
        "onUpdate:modelValue": (v) => i.value = v,
        id: o.value
      }), {
        ...a,
        default: (v) => {
          let {
            id: k,
            messagesId: m,
            isDisabled: y,
            isReadonly: h
          } = v;
          return _(ye, null, [f && p(Nl, {
            id: k.value
          }, {
            default: () => [f]
          }), p(Cg, U(d, {
            id: k.value,
            "aria-describedby": m.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: y.value,
            readonly: h.value,
            "aria-labelledby": f ? k.value : void 0,
            multiple: !1
          }, u, {
            modelValue: i.value,
            "onUpdate:modelValue": (x) => i.value = x
          }), a)]);
        }
      });
    }), St({}, r);
  }
}), RI = R({
  ...Ko(),
  ...ia(),
  ...Kh(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), HI = Q()({
  name: "VRangeSlider",
  inheritAttrs: !1,
  props: RI(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a,
      attrs: l
    } = t;
    const o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), {
      rtlClasses: s
    } = gt();
    function u(A) {
      if (!o.value || !i.value) return;
      const B = Ws(A, o.value.$el, e.direction), D = Ws(A, i.value.$el, e.direction), L = Math.abs(B), W = Math.abs(D);
      return L < W || L === W && B < 0 ? o.value.$el : i.value.$el;
    }
    const c = Gh(e), d = pe(e, "modelValue", void 0, (A) => A?.length ? A.map((B) => c.roundValue(B)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: v,
      max: k,
      min: m,
      mousePressed: y,
      onSliderMousedown: h,
      onSliderTouchstart: x,
      position: w,
      trackContainerRef: b,
      disabled: S,
      readonly: g
    } = qh({
      props: e,
      steps: c,
      onSliderStart: () => {
        if (S.value || g.value) {
          f.value?.blur();
          return;
        }
        a("start", d.value);
      },
      onSliderEnd: (A) => {
        let {
          value: B
        } = A;
        if (S.value || g.value)
          f.value?.blur();
        else {
          const D = f.value === o.value?.$el ? [B, d.value[1]] : [d.value[0], B];
          !e.strict && D[0] < D[1] && (d.value = D);
        }
        a("end", d.value);
      },
      onSliderMove: (A) => {
        let {
          value: B
        } = A;
        const [D, L] = d.value;
        if (S.value || g.value) {
          f.value?.blur();
          return;
        }
        !e.strict && D === L && D !== m.value && (f.value = B > D ? i.value?.$el : o.value?.$el, f.value?.focus()), f.value === o.value?.$el ? d.value = [Math.min(B, L), L] : d.value = [D, Math.max(D, B)];
      },
      getActiveThumb: u
    }), {
      isFocused: I,
      focus: C,
      blur: T
    } = oa(e), P = V(() => w(d.value[0])), F = V(() => w(d.value[1]));
    return te(() => {
      const A = Tt.filterProps(e), [B, D] = Fn(l), L = !!(e.label || n.label || n.prepend);
      return p(Tt, U({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!n["tick-label"] || v.value,
          "v-slider--focused": I.value,
          "v-slider--pressed": y.value,
          "v-slider--disabled": S.value
        }, s.value, e.class],
        style: e.style,
        ref: r
      }, A, B, {
        focused: I.value
      }), {
        ...n,
        prepend: L ? (W) => _(ye, null, [n.label?.(W) ?? (e.label ? p(Nl, {
          class: "v-slider__label",
          text: e.label
        }, null) : void 0), n.prepend?.(W)]) : void 0,
        default: (W) => {
          let {
            id: N,
            messagesId: J
          } = W;
          return _("div", {
            class: "v-slider__container",
            onMousedown: g.value ? void 0 : h,
            onTouchstartPassive: g.value ? void 0 : x
          }, [_("input", {
            id: `${N.value}_start`,
            name: e.name || N.value,
            disabled: S.value,
            readonly: g.value,
            tabindex: "-1",
            value: d.value[0]
          }, null), _("input", {
            id: `${N.value}_stop`,
            name: e.name || N.value,
            disabled: S.value,
            readonly: g.value,
            tabindex: "-1",
            value: d.value[1]
          }, null), p(Xh, {
            ref: b,
            start: P.value,
            stop: F.value
          }, {
            "tick-label": n["tick-label"]
          }), p(zs, U({
            ref: o,
            "aria-describedby": J.value,
            focused: I && f.value === o.value?.$el,
            modelValue: d.value[0],
            "onUpdate:modelValue": (q) => d.value = [q, d.value[1]],
            onFocus: (q) => {
              C(), f.value = o.value?.$el, k.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && q.relatedTarget !== i.value?.$el && (o.value?.$el.blur(), i.value?.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: m.value,
            max: d.value[1],
            position: P.value,
            ripple: e.ripple
          }, D), {
            "thumb-label": n["thumb-label"]
          }), p(zs, U({
            ref: i,
            "aria-describedby": J.value,
            focused: I && f.value === i.value?.$el,
            modelValue: d.value[1],
            "onUpdate:modelValue": (q) => d.value = [d.value[0], q],
            onFocus: (q) => {
              C(), f.value = i.value?.$el, k.value !== m.value && d.value[0] === d.value[1] && d.value[0] === k.value && q.relatedTarget !== o.value?.$el && (i.value?.$el.blur(), o.value?.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: d.value[0],
            max: k.value,
            position: F.value,
            ripple: e.ripple
          }, D), {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), St({
      focus: () => o.value?.$el.focus()
    }, r);
  }
}), WI = R({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: xe,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: xe,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...Se(),
  ...it(),
  ...On(),
  ...Ae(),
  ...Ne()
}, "VRating"), zI = Q()({
  name: "VRating",
  props: WI(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ue(), {
      themeClasses: l
    } = We(e), o = /* @__PURE__ */ ae(), i = pe(e, "modelValue"), r = V(() => je(parseFloat(i.value), 0, Number(e.length))), s = V(() => Qt(Number(e.length), 1)), u = V(() => s.value.flatMap((b) => e.halfIncrements ? [b - 0.5, b] : [b])), c = /* @__PURE__ */ se(-1), d = V(() => u.value.map((b) => {
      const S = e.hover && c.value > -1, g = r.value >= b, I = c.value >= b, T = (S ? I : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, F = g || I ? P : e.color;
      return {
        isFilled: g,
        isHovered: I,
        icon: T,
        color: F
      };
    })), f = V(() => [0, ...u.value].map((b) => {
      function S() {
        c.value = b;
      }
      function g() {
        c.value = -1;
      }
      function I() {
        e.disabled || e.readonly || (i.value = r.value === b && e.clearable ? 0 : b);
      }
      return {
        onMouseenter: e.hover ? S : void 0,
        onMouseleave: e.hover ? g : void 0,
        onClick: I
      };
    })), v = V(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
    function k() {
      o.value?.querySelector('[tabindex="0"]')?.focus();
    }
    function m(b) {
      if (e.disabled || e.readonly || b.ctrlKey || b.altKey) return;
      const S = e.halfIncrements ? 0.5 : 1;
      if (b.key === "ArrowRight") {
        const g = Math.min(Number(e.length), Number(i.value ?? 0) + S);
        i.value = g, Te(() => k());
      }
      if (b.key === "ArrowLeft") {
        const g = Math.max(0, Number(i.value ?? 0) - S);
        i.value = g, Te(() => k());
      }
    }
    const y = At(), h = V(() => e.name ?? `v-rating-${y}`);
    function x(b) {
      let {
        value: S,
        index: g,
        showStar: I = !0
      } = b;
      const {
        onMouseenter: C,
        onMouseleave: T,
        onClick: P
      } = f.value[g + 1], F = `${h.value}-${String(S).replace(".", "-")}`, A = g === v.value, B = {
        color: d.value[g]?.color,
        density: e.density,
        disabled: e.disabled,
        icon: d.value[g]?.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain",
        tabindex: A ? 0 : -1,
        onKeydown: m
      };
      return _(ye, null, [_("label", {
        for: F,
        class: ee({
          "v-rating__item--half": e.halfIncrements && S % 1 > 0,
          "v-rating__item--full": e.halfIncrements && S % 1 === 0
        }),
        onMouseenter: C,
        onMouseleave: T,
        onClick: P
      }, [_("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, S, e.length)]), I ? n.item ? n.item({
        ...d.value[g],
        props: B,
        value: S,
        index: g,
        rating: r.value
      }) : p(Oe, U({
        "aria-label": a(e.itemAriaLabel, S, e.length)
      }, B), null) : void 0]), _("input", {
        class: "v-rating__hidden",
        name: h.value,
        id: F,
        type: "radio",
        value: S,
        checked: r.value === S,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function w(b) {
      return n["item-label"] ? n["item-label"](b) : b.label ? _("span", null, [b.label]) : _("span", null, [qt(" ")]);
    }
    return te(() => {
      const b = !!e.itemLabels?.length || n["item-label"];
      return p(e.tag, {
        class: ee(["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class]),
        style: ve(e.style),
        ref: o
      }, {
        default: () => [p(x, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), s.value.map((S, g) => _("div", {
          class: "v-rating__wrapper"
        }, [b && e.itemLabelPosition === "top" ? w({
          value: S,
          index: g,
          label: e.itemLabels?.[g]
        }) : void 0, _("div", {
          class: "v-rating__item"
        }, [e.halfIncrements ? _(ye, null, [p(x, {
          value: S - 0.5,
          index: g * 2
        }, null), p(x, {
          value: S,
          index: g * 2 + 1
        }, null)]) : p(x, {
          value: S,
          index: g
        }, null)]), b && e.itemLabelPosition === "bottom" ? w({
          value: S,
          index: g,
          label: e.itemLabels?.[g]
        }) : void 0]))]
      });
    }), {};
  }
}), jI = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function YI(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return _("div", {
    class: ee(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`])
  }, [t]);
}
function Ff(e) {
  const [t, n] = e.split("@");
  return Array.from({
    length: n
  }).map(() => Pr(t));
}
function Pr(e) {
  let t = [];
  if (!e) return t;
  const n = jI[e];
  if (e !== n) {
    if (e.includes(",")) return Lf(e);
    if (e.includes("@")) return Ff(e);
    n.includes(",") ? t = Lf(n) : n.includes("@") ? t = Ff(n) : n && t.push(Pr(n));
  }
  return [YI(e, t)];
}
function Lf(e) {
  return e.replace(/\s/g, "").split(",").map(Pr);
}
const UI = R({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...dt(),
  ...vt(),
  ...Ne()
}, "VSkeletonLoader"), KI = Q()({
  name: "VSkeletonLoader",
  inheritAttrs: !1,
  props: UI(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color), {
      dimensionStyles: i
    } = ft(e), {
      elevationClasses: r
    } = bt(e), {
      themeClasses: s
    } = We(e), {
      t: u
    } = Ue(), c = V(() => Pr(Xe(e.type).join(",")));
    return te(() => {
      const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: u(e.loadingText),
        role: "alert"
      };
      return d ? _("div", U({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, s.value, l.value, r.value],
        style: [o.value, i.value]
      }, f, n), [c.value]) : _(ye, null, [a.default?.()]);
    }), {};
  }
}), GI = Q()({
  name: "VSlideGroupItem",
  props: il(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ba(e, qu);
    return () => n.default?.({
      isSelected: a.isSelected.value,
      select: a.select,
      toggle: a.toggle,
      selectedClass: a.selectedClass.value
    });
  }
});
function qI(e) {
  const t = /* @__PURE__ */ se(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Te(() => t.value = e());
  }
  function o(i) {
    const r = i ? getComputedStyle(i) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && a();
    }, s);
  }
  return ot(a), {
    clear: a,
    time: t,
    start: o,
    reset: l
  };
}
const Ky = R({
  /* @deprecated */
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...la({
    location: "bottom"
  }),
  ...Ol(),
  ...Je(),
  ...rn(),
  ...Ne(),
  ...Be(Go({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"])
}, "VSnackbar"), nu = Q()({
  name: "VSnackbar",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), {
      positionClasses: l
    } = $l(e), {
      scopeId: o
    } = sl(), {
      themeClasses: i
    } = We(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: u
    } = aa(e), {
      roundedClasses: c
    } = et(e), d = qI(() => Number(e.timeout)), f = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se(0), y = /* @__PURE__ */ ae(), h = $e(wo, void 0);
    Pt(() => !!h, () => {
      const F = Jm();
      at(() => {
        y.value = F.mainStyles.value;
      });
    }), ue(a, w), ue(() => e.timeout, w), yt(() => {
      a.value && w();
    });
    let x = -1;
    function w() {
      d.reset(), window.clearTimeout(x);
      const F = Number(e.timeout);
      if (!a.value || F === -1) return;
      const A = Tu(v.value);
      d.start(A), x = window.setTimeout(() => {
        a.value = !1;
      }, F);
    }
    function b() {
      d.reset(), window.clearTimeout(x);
    }
    function S() {
      k.value = !0, b();
    }
    function g() {
      k.value = !1, w();
    }
    function I(F) {
      m.value = F.touches[0].clientY;
    }
    function C(F) {
      Math.abs(m.value - F.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function T() {
      k.value && g();
    }
    const P = V(() => e.location.split(" ").reduce((F, A) => (F[`v-snackbar--${A}`] = !0, F), {}));
    return te(() => {
      const F = En.filterProps(e), A = !!(n.default || n.text || e.text);
      return p(En, U({
        ref: f,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, P.value, l.value, e.class],
        style: [y.value, e.style]
      }, F, {
        modelValue: a.value,
        "onUpdate:modelValue": (B) => a.value = B,
        contentProps: U({
          class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value],
          style: [s.value],
          onPointerenter: S,
          onPointerleave: g
        }, F.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: I,
        onTouchend: C,
        onAfterLeave: T
      }, o), {
        default: () => [na(!1, "v-snackbar"), e.timer && !k.value && _("div", {
          key: "timer",
          class: "v-snackbar__timer"
        }, [p(rr, {
          ref: v,
          color: typeof e.timer == "string" ? e.timer : "info",
          max: e.timeout,
          modelValue: d.time.value
        }, null)]), A && _("div", {
          key: "content",
          class: "v-snackbar__content",
          role: "status",
          "aria-live": "polite"
        }, [n.text?.() ?? e.text, n.default?.()]), n.actions && p(Ee, {
          defaults: {
            VBtn: {
              variant: "text",
              ripple: !1,
              slim: !0
            }
          }
        }, {
          default: () => [_("div", {
            class: "v-snackbar__actions"
          }, [n.actions({
            isActive: a
          })])]
        })],
        activator: n.activator
      });
    }), St({}, f);
  }
}), XI = R({
  // TODO: Port this to Snackbar on dev
  closable: [Boolean, String],
  closeText: {
    type: String,
    default: "$vuetify.dismiss"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  ...Be(Ky(), ["modelValue"])
}, "VSnackbarQueue"), ZI = Q()({
  name: "VSnackbarQueue",
  props: XI(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue(), o = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(!1), r = /* @__PURE__ */ se();
    ue(() => e.modelValue.length, (f, v) => {
      !i.value && f > v && u();
    }), ue(o, (f) => {
      f && (i.value = !0);
    });
    function s() {
      e.modelValue.length ? u() : (r.value = void 0, i.value = !1);
    }
    function u() {
      const [f, ...v] = e.modelValue;
      n("update:modelValue", v), r.value = typeof f == "string" ? {
        text: f
      } : f, Te(() => {
        o.value = !0;
      });
    }
    function c() {
      o.value = !1;
    }
    const d = V(() => ({
      color: typeof e.closable == "string" ? e.closable : void 0,
      text: l(e.closeText)
    }));
    te(() => {
      const f = !!(e.closable || a.actions), {
        modelValue: v,
        ...k
      } = nu.filterProps(e);
      return _(ye, null, [i.value && !!r.value && (a.default ? p(Ee, {
        defaults: {
          VSnackbar: r.value
        }
      }, {
        default: () => [a.default({
          item: r.value
        })]
      }) : p(nu, U(k, r.value, {
        modelValue: o.value,
        "onUpdate:modelValue": (m) => o.value = m,
        onAfterLeave: s
      }), {
        text: a.text ? () => a.text?.({
          item: r.value
        }) : void 0,
        actions: f ? () => _(ye, null, [a.actions ? p(Ee, {
          defaults: {
            VBtn: d.value
          }
        }, {
          default: () => [a.actions({
            item: r.value,
            props: {
              onClick: c
            }
          })]
        }) : p(Oe, U(d.value, {
          onClick: c
        }), null)]) : void 0
      }))]);
    });
  }
}), Gy = R({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: [Boolean, String, Number],
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), qy = R({
  autoLineWidth: Boolean,
  ...Gy()
}, "VBarline"), Of = Q()({
  name: "VBarline",
  props: qy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = At(), l = V(() => e.id || `barline-${a}`), o = V(() => Number(e.autoDrawDuration) || 500), i = V(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), r = V(() => parseFloat(e.lineWidth) || 4), s = V(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = V(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), c = V(() => e.modelValue.map((y) => rt(y, e.itemValue, y)));
    function d(y, h) {
      const {
        minX: x,
        maxX: w,
        minY: b,
        maxY: S
      } = h, g = y.length;
      let I = e.max != null ? Number(e.max) : Math.max(...y), C = e.min != null ? Number(e.min) : Math.min(...y);
      C > 0 && e.min == null && (C = 0), I < 0 && e.max == null && (I = 0);
      const T = w / (g === 1 ? 2 : g), P = (S - b) / (I - C || 1), F = S - Math.abs(C * P);
      return y.map((A, B) => {
        const D = Math.abs(P * A);
        return {
          x: x + B * T,
          y: F - D + +(A < 0) * D,
          height: D,
          value: A
        };
      });
    }
    const f = V(() => {
      const y = [], h = d(c.value, u.value), x = h.length;
      for (let w = 0; y.length < x; w++) {
        const b = h[w];
        let S = e.labels[w];
        S || (S = typeof b == "object" ? b.value : b), y.push({
          x: b.x,
          value: String(S)
        });
      }
      return y;
    }), v = V(() => d(c.value, u.value)), k = V(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = V(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
    te(() => {
      const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return _("svg", {
        display: "block"
      }, [_("defs", null, [_("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [y.map((h, x) => _("stop", {
        offset: x / Math.max(y.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), _("clipPath", {
        id: `${l.value}-clip`
      }, [v.value.map((h) => _("rect", {
        x: h.x + k.value,
        y: h.y,
        width: r.value,
        height: h.height,
        rx: m.value,
        ry: m.value
      }, [e.autoDraw && !An() && _(ye, null, [_("animate", {
        attributeName: "y",
        from: h.y + h.height,
        to: h.y,
        dur: `${o.value}ms`,
        fill: "freeze"
      }, null), _("animate", {
        attributeName: "height",
        from: "0",
        to: h.height,
        dur: `${o.value}ms`,
        fill: "freeze"
      }, null)])]))]), i.value && _("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [f.value.map((h, x) => _("text", {
        x: h.x + k.value + r.value / 2,
        y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
        "font-size": Number(e.labelSize) || 7
      }, [n.label?.({
        index: x,
        value: h.value
      }) ?? h.value]))]), _("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [_("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function JI(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && QI(s, i, u);
    if (!s || c)
      return `L${i.x} ${i.y}`;
    const d = Math.min($f(u, i), $f(s, i)), v = d / 2 < t ? d / 2 : t, k = Nf(u, i, v), m = Nf(s, i, v);
    return `L${k.x} ${k.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function ui(e) {
  return parseInt(e, 10);
}
function QI(e, t, n) {
  return ui(e.x + n.x) === ui(2 * t.x) && ui(e.y + n.y) === ui(2 * t.y);
}
function $f(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Nf(e, t, n) {
  const a = {
    x: e.x - t.x,
    y: e.y - t.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: t.x + o.x * n,
    y: t.y + o.y * n
  };
}
const Xy = R({
  fill: Boolean,
  ...Gy()
}, "VTrendline"), Rf = Q()({
  name: "VTrendline",
  props: Xy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = At(), l = V(() => e.id || `trendline-${a}`), o = V(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = /* @__PURE__ */ ae(0), r = /* @__PURE__ */ ae(null);
    function s(y, h) {
      const {
        minX: x,
        maxX: w,
        minY: b,
        maxY: S
      } = h;
      y.length === 1 && (y = [y[0], y[0]]);
      const g = y.length, I = e.max != null ? Number(e.max) : Math.max(...y), C = e.min != null ? Number(e.min) : Math.min(...y), T = (w - x) / (g - 1), P = (S - b) / (I - C || 1);
      return y.map((F, A) => ({
        x: x + A * T,
        y: S - (F - C) * P,
        value: F
      }));
    }
    const u = V(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), c = V(() => parseFloat(e.lineWidth) || 4), d = V(() => Number(e.width)), f = V(() => {
      const y = Number(e.padding);
      return {
        minX: y,
        maxX: d.value - y,
        minY: y,
        maxY: parseInt(e.height, 10) - y
      };
    }), v = V(() => e.modelValue.map((y) => rt(y, e.itemValue, y))), k = V(() => {
      const y = [], h = s(v.value, f.value), x = h.length;
      for (let w = 0; y.length < x; w++) {
        const b = h[w];
        let S = e.labels[w];
        S || (S = typeof b == "object" ? b.value : b), y.push({
          x: b.x,
          value: String(S)
        });
      }
      return y;
    });
    ue(() => e.modelValue, async () => {
      if (await Te(), !e.autoDraw || !r.value || An()) return;
      const y = r.value, h = y.getTotalLength();
      e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = h;
    }, {
      immediate: !0
    });
    function m(y) {
      const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
      return JI(s(v.value, f.value), h, y, parseInt(e.height, 10));
    }
    te(() => {
      const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return _("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [_("defs", null, [_("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [y.map((h, x) => _("stop", {
        offset: x / Math.max(y.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), u.value && _("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [k.value.map((h, x) => _("text", {
        x: h.x + c.value / 2 + c.value / 2,
        y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
        "font-size": Number(e.labelSize) || 7
      }, [n.label?.({
        index: x,
        value: h.value
      }) ?? h.value]))]), _("path", {
        ref: r,
        d: m(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && _("path", {
        d: m(!1),
        fill: "none",
        stroke: e.color ?? e.gradient?.[0]
      }, null)]);
    });
  }
}), eP = R({
  type: {
    type: String,
    default: "trend"
  },
  ...qy(),
  ...Xy()
}, "VSparkline"), tP = Q()({
  name: "VSparkline",
  props: eP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ct(() => e.color), o = V(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), i = V(() => {
      let r = parseInt(e.height, 10);
      return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    te(() => {
      const r = e.type === "trend" ? Rf : Of, s = e.type === "trend" ? Rf.filterProps(e) : Of.filterProps(e);
      return p(r, U({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}`
      }, s), n);
    });
  }
}), nP = R({
  ...Se(),
  ...ih({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), aP = Q()({
  name: "VSpeedDial",
  props: nP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), l = /* @__PURE__ */ ae(), o = V(() => {
      const [r, s = "center"] = e.location?.split(" ") ?? [];
      return `${r} ${s}`;
    }), i = V(() => ({
      [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: !0
    }));
    return te(() => {
      const r = El.filterProps(e);
      return p(El, U(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", i.value, e.contentClass],
        location: o.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...n,
        default: (s) => p(Ee, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [p(Ot, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => [n.default?.(s)]
          })]
        })
      });
    }), {};
  }
}), Ec = /* @__PURE__ */ Symbol.for("vuetify:v-stepper"), Zy = R({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), Jy = Q()({
  name: "VStepperActions",
  props: Zy(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue();
    function o() {
      n("click:prev");
    }
    function i() {
      n("click:next");
    }
    return te(() => {
      const r = {
        onClick: o
      }, s = {
        onClick: i
      };
      return _("div", {
        class: "v-stepper-actions"
      }, [p(Ee, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => [a.prev?.({
          props: r
        }) ?? p(Oe, r, null)]
      }), p(Ee, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => [a.next?.({
          props: s
        }) ?? p(Oe, s, null)]
      })]);
    }), {};
  }
}), Qy = ea("v-stepper-header"), lP = R({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: xe,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: xe,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: xe,
    default: "$error"
  },
  icon: xe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), oP = R({
  ...lP(),
  ...il()
}, "VStepperItem"), eb = Q()({
  name: "VStepperItem",
  directives: {
    vRipple: Vt
  },
  props: oP(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ba(e, Ec, !0), l = V(() => a?.value.value ?? e.value), o = V(() => e.rules.every((f) => f() === !0)), i = V(() => !e.disabled && e.editable), r = V(() => !e.disabled && e.editable), s = V(() => e.error || !o.value), u = V(() => e.complete || e.rules.length > 0 && o.value), c = V(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = V(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: u.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return te(() => {
      const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), k = !!(e.subtitle != null || n.subtitle);
      function m() {
        a?.toggle();
      }
      return qe(_("button", {
        class: ee(["v-stepper-item", {
          "v-stepper-item--complete": u.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a?.selectedClass.value]),
        disabled: !e.editable,
        type: "button",
        onClick: m
      }, [i.value && na(!0, "v-stepper-item"), p(an, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: f ? e.color : void 0,
        size: 24
      }, {
        default: () => [n.icon?.(d.value) ?? (c.value ? p(He, {
          icon: c.value
        }, null) : l.value)]
      }), _("div", {
        class: "v-stepper-item__content"
      }, [v && _("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [n.title?.(d.value) ?? e.title]), k && _("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [n.subtitle?.(d.value) ?? e.subtitle]), n.default?.(d.value)])]), [[Vt, e.editable && e.ripple, null]]);
    }), {};
  }
}), iP = R({
  ...Be(hr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), tb = Q()({
  name: "VStepperWindow",
  props: iP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(Ec, null), l = pe(e, "modelValue"), o = V({
      get() {
        return l.value != null || !a ? l.value : a.items.value.find((i) => a.selected.value.includes(i.id))?.value;
      },
      set(i) {
        l.value = i;
      }
    });
    return te(() => {
      const i = Ga.filterProps(e);
      return p(Ga, U({
        _as: "VStepperWindow"
      }, i, {
        modelValue: o.value,
        "onUpdate:modelValue": (r) => o.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), rP = R({
  ...yr()
}, "VStepperWindowItem"), nb = Q()({
  name: "VStepperWindowItem",
  props: rP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = qa.filterProps(e);
      return p(qa, U({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
}), sP = R({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: xe,
  editIcon: xe,
  editable: Boolean,
  errorIcon: xe,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...tl()
}, "Stepper"), uP = R({
  ...sP(),
  ...ol({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...yc(),
  ...jt(Zy(), ["prevText", "nextText"])
}, "VStepper"), cP = Q()({
  name: "VStepper",
  props: uP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a,
      next: l,
      prev: o,
      selected: i
    } = Ca(e, Ec), {
      displayClasses: r,
      mobile: s
    } = ln(e), {
      completeIcon: u,
      editIcon: c,
      errorIcon: d,
      color: f,
      editable: v,
      prevText: k,
      nextText: m
    } = /* @__PURE__ */ Bl(e), y = V(() => e.items.map((w, b) => {
      const S = rt(w, e.itemTitle, w), g = rt(w, e.itemValue, b + 1), I = e.itemProps === !0 ? w : rt(w, e.itemProps), C = {
        title: S,
        value: g,
        ...I
      };
      return {
        title: C.title,
        value: C.value,
        props: C,
        raw: w
      };
    })), h = V(() => a.value.findIndex((w) => i.value.includes(w.id))), x = V(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : !1);
    return lt({
      VStepperItem: {
        editable: v,
        errorIcon: d,
        completeIcon: u,
        editIcon: c,
        prevText: k,
        nextText: m
      },
      VStepperActions: {
        color: f,
        disabled: x,
        prevText: k,
        nextText: m
      }
    }), te(() => {
      const w = To.filterProps(e), b = !!(n.header || e.items.length), S = e.items.length > 0, g = !e.hideActions && !!(S || n.actions);
      return p(To, U(w, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => [b && p(Qy, {
          key: "stepper-header"
        }, {
          default: () => [y.value.map((I, C) => {
            let {
              raw: T,
              ...P
            } = I;
            return _(ye, null, [!!C && p(nn, null, null), p(eb, P.props, {
              default: n[`header-item.${P.value}`] ?? n.header,
              icon: n.icon,
              title: n.title,
              subtitle: n.subtitle
            })]);
          })]
        }), S && p(tb, {
          key: "stepper-window"
        }, {
          default: () => [y.value.map((I) => p(nb, {
            value: I.value
          }, {
            default: () => n[`item.${I.value}`]?.(I) ?? n.item?.(I)
          }))]
        }), n.default?.({
          prev: o,
          next: l
        }), g && (n.actions?.({
          next: l,
          prev: o
        }) ?? p(Jy, {
          key: "stepper-actions",
          "onClick:prev": o,
          "onClick:next": l
        }, n))]
      });
    }), {
      prev: o,
      next: l
    };
  }
}), dP = R({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ia(),
  ...cr()
}, "VSwitch"), fP = Q()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: dP(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = pe(e, "indeterminate"), o = pe(e, "modelValue"), {
      loaderClasses: i
    } = Wo(e), {
      isFocused: r,
      focus: s,
      blur: u
    } = oa(e), c = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), f = Pu && window.matchMedia("(forced-colors: active)").matches, v = /* @__PURE__ */ E(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), k = At(), m = /* @__PURE__ */ E(() => e.id || `switch-${k}`);
    function y() {
      l.value && (l.value = !1);
    }
    function h(x) {
      x.stopPropagation(), x.preventDefault(), c.value?.input?.click();
    }
    return te(() => {
      const [x, w] = Fn(n), b = Tt.filterProps(e), S = ka.filterProps(e);
      return p(Tt, U({
        ref: d,
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, i.value, e.class]
      }, x, b, {
        modelValue: o.value,
        "onUpdate:modelValue": (g) => o.value = g,
        id: m.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (g) => {
          let {
            id: I,
            messagesId: C,
            isDisabled: T,
            isReadonly: P,
            isValid: F
          } = g;
          const A = {
            model: o,
            isValid: F
          };
          return p(ka, U({
            ref: c
          }, S, {
            modelValue: o.value,
            "onUpdate:modelValue": [(B) => o.value = B, y],
            id: I.value,
            "aria-describedby": C.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: T.value,
            readonly: P.value,
            onFocus: s,
            onBlur: u
          }, w), {
            ...a,
            default: (B) => {
              let {
                backgroundColorClasses: D,
                backgroundColorStyles: L
              } = B;
              return _("div", {
                class: ee(["v-switch__track", f ? void 0 : D.value]),
                style: ve(L.value),
                onClick: h
              }, [a["track-true"] && _("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](A)]), a["track-false"] && _("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](A)])]);
            },
            input: (B) => {
              let {
                inputNode: D,
                icon: L,
                backgroundColorClasses: W,
                backgroundColorStyles: N
              } = B;
              return _(ye, null, [D, _("div", {
                class: ee(["v-switch__thumb", {
                  "v-switch__thumb--filled": L || e.loading
                }, e.inset || f ? void 0 : W.value]),
                style: ve(e.inset ? void 0 : N.value)
              }, [a.thumb ? p(Ee, {
                defaults: {
                  VIcon: {
                    icon: L,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...A,
                  icon: L
                })]
              }) : p(zu, null, {
                default: () => [e.loading ? p(zo, {
                  name: "v-switch",
                  active: !0,
                  color: F.value === !1 ? void 0 : v.value
                }, {
                  default: (J) => a.loader ? a.loader(J) : p(Sa, {
                    active: J.isActive,
                    color: J.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : L && p(He, {
                  key: String(L),
                  icon: L,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), St({}, d);
  }
}), vP = R({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...Se(),
  ...vt(),
  ...nl(),
  ...Je(),
  ...Ae(),
  ...Ne()
}, "VSystemBar"), mP = Q()({
  name: "VSystemBar",
  props: vP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = ze(() => e.color), {
      elevationClasses: i
    } = bt(e), {
      roundedClasses: r
    } = et(e), {
      ssrBootStyles: s
    } = ll(), u = V(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: c
    } = al({
      id: e.name,
      order: V(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ se("top"),
      layoutSize: u,
      elementSize: u,
      active: V(() => !0),
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return te(() => p(e.tag, {
      class: ee(["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, i.value, r.value, e.class]),
      style: ve([o.value, c.value, s.value, e.style])
    }, n)), {};
  }
}), Mc = /* @__PURE__ */ Symbol.for("vuetify:v-tabs"), ab = R({
  fixed: Boolean,
  sliderColor: String,
  sliderTransition: String,
  sliderTransitionDuration: [String, Number],
  hideSlider: Boolean,
  inset: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Be(ur({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), lb = Q()({
  name: "VTab",
  props: ab(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: o
    } = Ct(() => e.sliderColor), {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = ze(() => e.sliderColor), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = V(() => e.direction === "horizontal"), d = V(() => s.value?.group?.isSelected.value ?? !1);
    function f(y, h) {
      return {
        opacity: [0, 1]
      };
    }
    function v(y, h) {
      return e.direction === "vertical" ? {
        transform: ["scaleY(0)", "scaleY(1)"]
      } : {
        transform: ["scaleX(0)", "scaleX(1)"]
      };
    }
    function k(y, h) {
      const x = h.getBoundingClientRect(), w = y.getBoundingClientRect(), b = c.value ? "x" : "y", S = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", I = c.value ? "width" : "height", C = x[b], T = w[b], P = C > T ? x[g] - w[g] : x[b] - w[b], F = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", B = (Math.abs(P) + (Math.sign(P) < 0 ? x[I] : w[I])) / Math.max(x[I], w[I]) || 0, D = x[I] / w[I] || 0, L = 1.5;
      return {
        transform: [`translate${S}(${P}px) scale${S}(${D})`, `translate${S}(${P / L}px) scale${S}(${(B - 1) / L + 1})`, "none"],
        transformOrigin: Array(3).fill(F)
      };
    }
    function m(y) {
      let {
        value: h
      } = y;
      if (h) {
        const x = s.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"), w = u.value;
        if (!x || !w) return;
        const b = getComputedStyle(x).color, S = {
          fade: f,
          grow: v,
          shift: k
        }[e.sliderTransition ?? "shift"] ?? k, g = Number(e.sliderTransitionDuration) || ({
          fade: 400,
          grow: 350,
          shift: 225
        }[e.sliderTransition ?? "shift"] ?? 225);
        Wn(w, {
          backgroundColor: [b, "currentcolor"],
          ...S(w, x)
        }, {
          duration: g,
          easing: yo
        });
      }
    }
    return te(() => {
      const y = Oe.filterProps(e);
      return p(Oe, U({
        symbol: Mc,
        ref: s,
        class: ["v-tab", e.class, d.value && e.inset ? i.value : []],
        style: [e.style, d.value && e.inset ? r.value : []],
        tabindex: d.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(d.value),
        active: !1
      }, y, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": m
      }), {
        ...n,
        default: () => _(ye, null, [n.default?.() ?? e.text, !e.hideSlider && _("div", {
          ref: u,
          class: ee(["v-tab__slider", l.value]),
          style: ve(o.value)
        }, null)])
      });
    }), St({}, s);
  }
}), gP = R({
  ...Be(hr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), ob = Q()({
  name: "VTabsWindow",
  props: gP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = $e(Mc, null), l = pe(e, "modelValue"), o = V({
      get() {
        return l.value != null || !a ? l.value : a.items.value.find((i) => a.selected.value.includes(i.id))?.value;
      },
      set(i) {
        l.value = i;
      }
    });
    return te(() => {
      const i = Ga.filterProps(e);
      return p(Ga, U({
        _as: "VTabsWindow"
      }, i, {
        modelValue: o.value,
        "onUpdate:modelValue": (r) => o.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), hP = R({
  ...yr()
}, "VTabsWindowItem"), ib = Q()({
  name: "VTabsWindowItem",
  props: hP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = qa.filterProps(e);
      return p(qa, U({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
});
function yP(e) {
  return e ? e.map((t) => Ua(t) ? t : {
    text: t,
    value: t
  }) : [];
}
const bP = R({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  inset: Boolean,
  insetPadding: [String, Number],
  insetRadius: [String, Number],
  sliderColor: String,
  ...jt(ab(), ["spaced", "sliderTransition", "sliderTransitionDuration"]),
  ...Xu({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...it(),
  ...Ae()
}, "VTabs"), SP = Q()({
  name: "VTabs",
  props: bP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = pe(e, "modelValue"), o = V(() => yP(e.items)), {
      densityClasses: i
    } = Mt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = ze(() => e.bgColor), {
      scopeId: u
    } = sl();
    return lt({
      VTab: {
        color: /* @__PURE__ */ E(e, "color"),
        direction: /* @__PURE__ */ E(e, "direction"),
        stacked: /* @__PURE__ */ E(e, "stacked"),
        fixed: /* @__PURE__ */ E(e, "fixedTabs"),
        inset: /* @__PURE__ */ E(e, "inset"),
        sliderColor: /* @__PURE__ */ E(e, "sliderColor"),
        sliderTransition: /* @__PURE__ */ E(e, "sliderTransition"),
        sliderTransitionDuration: /* @__PURE__ */ E(e, "sliderTransitionDuration"),
        hideSlider: /* @__PURE__ */ E(e, "hideSlider")
      }
    }), te(() => {
      const c = Vo.filterProps(e), d = !!(a.window || e.items.length > 0);
      return _(ye, null, [p(Vo, U(c, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--inset": e.inset,
          "v-tabs--stacked": e.stacked
        }, i.value, r.value, e.class],
        style: [{
          "--v-tabs-height": de(e.height),
          "--v-tabs-inset-padding": e.inset ? de(e.insetPadding) : void 0,
          "--v-tabs-inset-radius": e.inset ? de(e.insetRadius) : void 0
        }, s.value, e.style],
        role: "tablist",
        symbol: Mc
      }, u, n), {
        default: a.default ?? (() => o.value.map((f) => a.tab?.({
          item: f
        }) ?? p(lb, U(f, {
          key: f.text,
          value: f.value,
          spaced: e.spaced
        }), {
          default: a[`tab.${f.value}`] ? () => a[`tab.${f.value}`]?.({
            item: f
          }) : void 0
        }))),
        prev: a.prev,
        next: a.next
      }), d && p(ob, U({
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        key: "tabs-window"
      }, u), {
        default: () => [o.value.map((f) => a.item?.({
          item: f
        }) ?? p(ib, {
          value: f.value
        }, {
          default: () => a[`item.${f.value}`]?.({
            item: f
          })
        })), a.window?.()]
      })]);
    }), {};
  }
}), kP = R({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxHeight: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...rh(),
  ...Be(ia(), ["direction"]),
  ...qo()
}, "VTextarea"), wP = Q()({
  name: "VTextarea",
  directives: {
    vIntersect: wn
  },
  inheritAttrs: !1,
  props: kP(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:rows": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const o = pe(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: s
    } = oa(e), {
      onIntersect: u
    } = sh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = V(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ se(""), m = /* @__PURE__ */ ae(), y = /* @__PURE__ */ ae(0), {
      platform: h
    } = ln(), x = ic(e), w = V(() => e.persistentPlaceholder || i.value || e.active);
    function b() {
      x.isSuppressing.value && x.update(), m.value !== document.activeElement && m.value?.focus(), i.value || r();
    }
    function S(D) {
      b(), a("click:control", D);
    }
    function g(D) {
      a("mousedown:control", D);
    }
    function I(D) {
      D.stopPropagation(), b(), Te(() => {
        o.value = "", $o(e["onClick:clear"], D);
      });
    }
    function C(D) {
      const L = D.target;
      if (!e.modelModifiers?.trim) {
        o.value = L.value;
        return;
      }
      const W = L.value, N = L.selectionStart, J = L.selectionEnd;
      o.value = W, Te(() => {
        let q = 0;
        W.trimStart().length === L.value.length && (q = W.length - L.value.length), N != null && (L.selectionStart = N - q), J != null && (L.selectionEnd = J - q);
      });
    }
    const T = /* @__PURE__ */ ae(), P = /* @__PURE__ */ ae(Number(e.rows)), F = V(() => ["plain", "underlined"].includes(e.variant));
    at(() => {
      e.autoGrow || (P.value = Number(e.rows));
    });
    function A() {
      Te(() => {
        if (!m.value) return;
        if (h.value.firefox) {
          y.value = 12;
          return;
        }
        const {
          offsetWidth: D,
          clientWidth: L
        } = m.value;
        y.value = Math.max(0, D - L);
      }), e.autoGrow && Te(() => {
        if (!T.value || !v.value) return;
        const D = getComputedStyle(T.value), L = getComputedStyle(v.value.$el), W = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), N = T.value.scrollHeight, J = parseFloat(D.lineHeight), q = Math.max(parseFloat(e.rows) * J + W, parseFloat(L.getPropertyValue("--v-input-control-height"))), $ = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * J + W || 1 / 0, ne = je(N ?? 0, q, $);
        P.value = Math.floor((ne - W) / J), k.value = de(ne);
      });
    }
    yt(A), ue(o, A), ue(() => e.rows, A), ue(() => e.maxHeight, A), ue(() => e.maxRows, A), ue(() => e.density, A), ue(P, (D) => {
      a("update:rows", D);
    });
    let B;
    return ue(T, (D) => {
      D ? (B = new ResizeObserver(A), B.observe(T.value)) : B?.disconnect();
    }), Dt(() => {
      B?.disconnect();
    }), te(() => {
      const D = !!(l.counter || e.counter || e.counterValue), L = !!(D || l.details), [W, N] = Fn(n), {
        modelValue: J,
        ...q
      } = Tt.filterProps(e), $ = {
        ...wa.filterProps(e),
        "onClick:clear": I
      };
      return p(Tt, U({
        ref: f,
        modelValue: o.value,
        "onUpdate:modelValue": (ne) => o.value = ne,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": F.value
        }, e.class],
        style: [{
          "--v-textarea-max-height": e.maxHeight ? de(e.maxHeight) : void 0,
          "--v-textarea-scroll-bar-width": de(y.value)
        }, e.style]
      }, W, q, {
        centerAffix: P.value === 1 && !F.value,
        focused: i.value
      }), {
        ...l,
        default: (ne) => {
          let {
            id: K,
            isDisabled: H,
            isDirty: G,
            isReadonly: X,
            isValid: fe,
            hasDetails: Z
          } = ne;
          return p(wa, U({
            ref: v,
            style: {
              "--v-textarea-control-height": k.value
            },
            onClick: S,
            onMousedown: g,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, $, {
            id: K.value,
            active: w.value || G.value,
            labelId: `${K.value}-label`,
            centerAffix: P.value === 1 && !F.value,
            dirty: G.value || e.dirty,
            disabled: H.value,
            focused: i.value,
            details: Z.value,
            error: fe.value === !1
          }), {
            ...l,
            default: (ce) => {
              let {
                props: {
                  class: Ce,
                  ...Ve
                },
                controlRef: Pe
              } = ce;
              return _(ye, null, [e.prefix && _("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), qe(_("textarea", U({
                ref: (M) => m.value = Pe.value = M,
                class: Ce,
                value: o.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: X.value,
                disabled: H.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: x.fieldName.value,
                autocomplete: x.fieldAutocomplete.value,
                onFocus: b,
                onBlur: s,
                "aria-labelledby": `${K.value}-label`
              }, Ve, N), null), [[wn, {
                handler: u
              }, null, {
                once: !0
              }]]), e.autoGrow && qe(_("textarea", {
                class: ee([Ce, "v-textarea__sizer"]),
                id: `${Ve.id}-sizer`,
                "onUpdate:modelValue": (M) => o.value = M,
                ref: T,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[$k, o.value]]), e.suffix && _("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: L ? (ne) => _(ye, null, [l.details?.(ne), D && _(ye, null, [_("span", null, null), p(dr, {
          active: e.persistentCounter || i.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), St({}, f, v, m);
  }
}), pP = R({
  withBackground: Boolean,
  ...Se(),
  ...Ne(),
  ...Ae()
}, "VThemeProvider"), xP = Q()({
  name: "VThemeProvider",
  props: pP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e);
    return () => e.withBackground ? p(e.tag, {
      class: ee(["v-theme-provider", a.value, e.class]),
      style: ve(e.style)
    }, {
      default: () => [n.default?.()]
    }) : n.default?.();
  }
}), CP = R({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: xe,
  iconColor: String,
  lineColor: String,
  ...Se(),
  ...Je(),
  ...On(),
  ...vt()
}, "VTimelineDivider"), _P = Q()({
  name: "VTimelineDivider",
  props: CP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Ll(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: o,
      backgroundColorClasses: i
    } = ze(() => e.dotColor), {
      roundedClasses: r
    } = et(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = bt(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: c
    } = ze(() => e.lineColor);
    return te(() => _("div", {
      class: ee(["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class]),
      style: ve(e.style)
    }, [_("div", {
      class: ee(["v-timeline-divider__before", u.value]),
      style: ve(c.value)
    }, null), !e.hideDot && _("div", {
      key: "dot",
      class: ee(["v-timeline-divider__dot", s.value, r.value, a.value]),
      style: ve(l.value)
    }, [_("div", {
      class: ee(["v-timeline-divider__inner-dot", i.value, r.value]),
      style: ve(o.value)
    }, [n.default ? p(Ee, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, n.default) : p(He, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), _("div", {
      class: ee(["v-timeline-divider__after", u.value]),
      style: ve(c.value)
    }, null)])), {};
  }
}), rb = R({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: xe,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  ...Se(),
  ...dt(),
  ...vt(),
  ...Je(),
  ...On(),
  ...Ae()
}, "VTimelineItem"), VP = Q()({
  name: "VTimelineItem",
  props: rb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ft(e), l = /* @__PURE__ */ se(0), o = /* @__PURE__ */ ae();
    return ue(o, (i) => {
      i && (l.value = i.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width ?? 0);
    }, {
      flush: "post"
    }), te(() => _("div", {
      class: ee(["v-timeline-item", {
        "v-timeline-item--fill-dot": e.fillDot,
        "v-timeline-item--side-start": e.side === "start",
        "v-timeline-item--side-end": e.side === "end"
      }, e.class]),
      style: ve([{
        "--v-timeline-dot-size": de(l.value),
        "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${de(e.lineInset)})` : de(0)
      }, e.style])
    }, [_("div", {
      class: "v-timeline-item__body",
      style: ve(a.value)
    }, [n.default?.()]), p(_P, {
      ref: o,
      hideDot: e.hideDot,
      icon: e.icon,
      iconColor: e.iconColor,
      size: e.size,
      elevation: e.elevation,
      dotColor: e.dotColor,
      fillDot: e.fillDot,
      rounded: e.rounded
    }, {
      default: n.icon
    }), e.density !== "compact" && _("div", {
      class: "v-timeline-item__opposite"
    }, [!e.hideOpposite && n.opposite?.()])])), {};
  }
}), IP = R({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...jt(rb({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...Se(),
  ...it(),
  ...Ae(),
  ...Ne()
}, "VTimeline"), PP = Q()({
  name: "VTimeline",
  props: IP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      densityClasses: l
    } = Mt(e), {
      rtlClasses: o
    } = gt();
    lt({
      VTimelineDivider: {
        lineColor: /* @__PURE__ */ E(() => e.lineColor)
      },
      VTimelineItem: {
        density: /* @__PURE__ */ E(() => e.density),
        dotColor: /* @__PURE__ */ E(() => e.dotColor),
        fillDot: /* @__PURE__ */ E(() => e.fillDot),
        hideOpposite: /* @__PURE__ */ E(() => e.hideOpposite),
        iconColor: /* @__PURE__ */ E(() => e.iconColor),
        lineColor: /* @__PURE__ */ E(() => e.lineColor),
        lineInset: /* @__PURE__ */ E(() => e.lineInset),
        size: /* @__PURE__ */ E(() => e.size)
      }
    });
    const i = V(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = V(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return te(() => p(e.tag, {
      class: ee(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, i.value, o.value, e.class]),
      style: ve([{
        "--v-timeline-line-thickness": de(e.lineThickness)
      }, e.style])
    }, n)), {};
  }
}), TP = R({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (e) => e
  },
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock"), au = Q()({
  name: "VTimePickerClock",
  props: TP(),
  emits: {
    change: (e) => !0,
    input: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = /* @__PURE__ */ ae(null), l = /* @__PURE__ */ ae(null), o = /* @__PURE__ */ ae(void 0), i = /* @__PURE__ */ ae(!1), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = wm(($) => n("change", $), 750), {
      textColorClasses: c,
      textColorStyles: d
    } = Ct(() => e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: v
    } = ze(() => e.color), k = V(() => e.max - e.min + 1), m = V(() => e.double ? k.value / 2 : k.value), y = V(() => 360 / m.value), h = V(() => y.value * Math.PI / 180), x = V(() => e.modelValue == null ? e.min : e.modelValue), w = V(() => 0.62), b = V(() => {
      const $ = [];
      for (let ne = e.min; ne <= e.max; ne = ne + e.step)
        $.push(ne);
      return $;
    });
    ue(() => e.modelValue, ($) => {
      o.value = $;
    });
    function S($) {
      o.value !== $ && (o.value = $), n("input", $);
    }
    function g($) {
      return !e.allowedValues || e.allowedValues($);
    }
    function I($) {
      if (!e.scrollable || e.disabled) return;
      $.preventDefault();
      const ne = Math.sign(-$.deltaY || 1);
      let K = x.value;
      do
        K = K + ne, K = (K - e.min + k.value) % k.value + e.min;
      while (!g(K) && K !== x.value);
      K !== e.displayedValue && S(K), u(K);
    }
    function C($) {
      return e.double && $ - e.min >= m.value;
    }
    function T($) {
      return C($) ? w.value : 1;
    }
    function P($) {
      const ne = e.rotate * Math.PI / 180;
      return {
        x: Math.sin(($ - e.min) * h.value + ne) * T($),
        y: -Math.cos(($ - e.min) * h.value + ne) * T($)
      };
    }
    function F($, ne) {
      const K = (Math.round($ / y.value) + (ne ? m.value : 0)) % k.value + e.min;
      return $ < 360 - y.value / 2 ? K : ne ? e.max - m.value + 1 : e.min;
    }
    function A($) {
      const {
        x: ne,
        y: K
      } = P($);
      return {
        left: `${Math.round(50 + ne * 50)}%`,
        top: `${Math.round(50 + K * 50)}%`
      };
    }
    function B($, ne) {
      const K = ne.x - $.x, H = ne.y - $.y;
      return Math.sqrt(K * K + H * H);
    }
    function D($, ne) {
      const K = 2 * Math.atan2(ne.y - $.y - B($, ne), ne.x - $.x);
      return Math.abs(K * 180 / Math.PI);
    }
    function L($) {
      r.value === null && (r.value = $), s.value = $, S($);
    }
    function W($) {
      if ($.preventDefault(), !i.value && $.type !== "click" || !a.value) return;
      const {
        width: ne,
        top: K,
        left: H
      } = a.value?.getBoundingClientRect(), {
        width: G
      } = l.value?.getBoundingClientRect() ?? {
        width: 0
      }, {
        clientX: X,
        clientY: fe
      } = "touches" in $ ? $.touches[0] : $, Z = {
        x: ne / 2,
        y: -ne / 2
      }, ce = {
        x: X - H,
        y: K - fe
      }, Ce = Math.round(D(Z, ce) - e.rotate + 360) % 360, Ve = e.double && B(Z, ce) < (G + G * w.value) / 4, Pe = Math.ceil(15 / y.value);
      let M;
      for (let O = 0; O < Pe; O++)
        if (M = F(Ce + O * y.value, Ve), g(M) || (M = F(Ce - O * y.value, Ve), g(M))) return L(M);
    }
    function N($) {
      e.disabled || ($.preventDefault(), window.addEventListener("mousemove", W), window.addEventListener("touchmove", W), window.addEventListener("mouseup", J), window.addEventListener("touchend", J), r.value = null, s.value = null, i.value = !0, W($));
    }
    function J($) {
      $.stopPropagation(), q(), i.value = !1, s.value !== null && g(s.value) && n("change", s.value);
    }
    function q() {
      window.removeEventListener("mousemove", W), window.removeEventListener("touchmove", W), window.removeEventListener("mouseup", J), window.removeEventListener("touchend", J);
    }
    ot(q), te(() => _("div", {
      class: ee([{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }]),
      onMousedown: N,
      onTouchstart: N,
      onWheel: I,
      ref: a
    }, [_("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [_("div", {
      class: ee([{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": C(e.modelValue)
      }, c.value]),
      style: ve([{
        transform: `rotate(${e.rotate + y.value * (x.value - e.min)}deg) scaleY(${T(x.value)})`
      }, d.value])
    }, null), b.value.map(($) => {
      const ne = $ === x.value;
      return _("div", {
        class: ee([{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": ne,
          "v-time-picker-clock__item--disabled": e.disabled || !g($)
        }, ne && f.value]),
        style: ve([A($), ne && v.value])
      }, [_("span", null, [e.format($)])]);
    })])]));
  }
}), AP = R({
  active: Boolean,
  color: String,
  disabled: Boolean,
  label: String,
  modelValue: String,
  readonly: Boolean
}, "VTimePickerField"), as = Q()({
  name: "VTimePickerField",
  inheritAttrs: !1,
  props: AP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      attrs: a
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: o
    } = Ct(() => e.color), i = /* @__PURE__ */ ae(), r = /* @__PURE__ */ se(!1);
    function s(u) {
      if (["Backspace", "Delete"].includes(u.key)) {
        u.preventDefault();
        const c = u.target;
        c.value = "", n("update:modelValue", null);
      }
    }
    return te(() => _("div", null, [p(Mn, U({
      ref: i,
      _as: "VTimePickerField",
      autocomplete: "off",
      class: ["v-time-picker-controls__time__field", {
        "v-time-picker-controls__time__field--active": e.active
      }, e.active ? l.value : []],
      style: e.active ? o.value : [],
      disabled: e.disabled,
      variant: "solo-filled",
      inputmode: "numeric",
      hideDetails: !0,
      flat: !0,
      modelValue: e.modelValue ?? (r.value ? "" : "--"),
      "onUpdate:modelValue": (u) => n("update:modelValue", u),
      onKeydown: s,
      onFocus: () => r.value = !0,
      onBlur: () => r.value = !1
    }, a), null), _("div", {
      class: "v-time-picker-controls__field-label"
    }, [e.label])])), St({}, i);
  }
});
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function sb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function lu(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function Gl(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function DP(e, t, n) {
  if (n) {
    if (e === 12 && t)
      return {
        value: 1
      };
    if (e === 11 && t)
      return {
        value: 12,
        togglePeriod: !0
      };
    if (e === 12 && !t)
      return {
        value: 11,
        togglePeriod: !0
      };
    if (e === 1 && !t)
      return {
        value: 12
      };
  } else {
    if (e === 23 && t)
      return {
        value: 0
      };
    if (e === 0 && !t)
      return {
        value: 23
      };
  }
  return {
    value: e + (t ? 1 : -1)
  };
}
function Hf(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const EP = R({
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  hour: [Number, String],
  minute: [Number, String],
  second: [Number, String],
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String
}, "VTimePickerControls"), ou = Q()({
  name: "VTimePickerControls",
  props: EP(),
  emits: {
    "update:period": (e) => !0,
    "update:viewMode": (e) => !0,
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:second": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue(), o = {
      in: (b) => {
        if (b == null || isNaN(Number(b))) return null;
        const S = Number(b);
        return e.ampm ? Yn(sb(S)) : Yn(S);
      },
      out: (b) => {
        if (isNaN(Number(b)) || b == null || b === "") return null;
        const S = typeof b == "string" ? Gl(b) : Number(b);
        return S === null ? null : e.ampm ? lu(S, e.period ?? "am") : je(S, 0, 23);
      }
    }, i = pe(e, "hour", void 0, o.in, o.out), r = {
      in: (b) => b != null && !isNaN(Number(b)) ? Yn(`${b}`) : null,
      out: (b) => {
        if (isNaN(Number(b)) || b == null || b === "") return null;
        const S = typeof b == "string" ? Gl(b) : Number(b);
        return S !== null ? je(S, 0, 59) : null;
      }
    }, s = pe(e, "minute", void 0, r.in, r.out), u = pe(e, "second", void 0, r.in, r.out);
    function c(b) {
      if (!["ArrowUp", "ArrowDown"].includes(b.key)) return;
      b.preventDefault(), b.stopPropagation();
      const S = Number(i.value ?? 0), g = e.ampm ? e.period ?? "am" : null, {
        value: I,
        togglePeriod: C
      } = DP(S, b.key === "ArrowUp", g);
      i.value = Yn(I), C && n("update:period", e.period === "am" ? "pm" : "am");
    }
    function d(b) {
      ["ArrowUp", "ArrowDown"].includes(b.key) && (b.preventDefault(), b.stopPropagation(), s.value = Hf(Number(s.value), b.key === "ArrowUp"));
    }
    function f(b) {
      ["ArrowUp", "ArrowDown"].includes(b.key) && (b.preventDefault(), b.stopPropagation(), u.value = Hf(Number(u.value), b.key === "ArrowUp"));
    }
    function v(b, S, g) {
      return (I) => {
        if (!I.data) return;
        const C = I.target, {
          value: T,
          selectionStart: P,
          selectionEnd: F
        } = C ?? {};
        if (Gl(I.data) === null) {
          I.preventDefault();
          return;
        }
        const A = T ? T.slice(0, P) + I.data + T.slice(F) : I.data;
        if (A.length > 2) {
          if (P === F && F === 0 && I.data.trim().startsWith("0")) {
            I.preventDefault(), C.value = A.trim().substring(0, 2), g(C.value), I.data.trim().length === 1 && C.setSelectionRange(1, 1);
            return;
          }
          if (P === F && F === 1 && T.startsWith("0")) {
            I.preventDefault(), C.value = A.trim().substring(0, 2), g(C.value);
            return;
          }
          const D = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
          if (Gl(A) > D) {
            I.preventDefault(), C.value = Yn(String(Gl(I.data)).substring(0, 2)), g(C.value);
            return;
          }
        }
        const B = b(A);
        S(B) && I.preventDefault();
      };
    }
    const k = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), y = /* @__PURE__ */ ae();
    ue(() => e.viewMode, (b, S) => {
      switch (S) {
        case "hour":
          k.value.blur();
          break;
        case "minute":
          m.value.blur();
          break;
        case "second":
          y.value.blur();
          break;
      }
    });
    const h = v(o.out, (b) => o.in(b) === i.value, (b) => i.value = b), x = v(r.out, (b) => r.in(b) === s.value, (b) => s.value = b), w = v(r.out, (b) => r.in(b) === u.value, (b) => u.value = b);
    return te(() => _("div", {
      class: "v-time-picker-controls"
    }, [_("div", {
      class: ee({
        "v-time-picker-controls__time": !0,
        "v-time-picker-controls__time--with-ampm": e.ampm,
        "v-time-picker-controls__time--with-seconds": e.useSeconds
      })
    }, [p(as, {
      ref: k,
      active: e.viewMode === "hour",
      color: e.color,
      disabled: e.disabled,
      label: l("$vuetify.timePicker.hour"),
      modelValue: i.value,
      "onUpdate:modelValue": (b) => i.value = b,
      onKeydown: c,
      onBeforeinput: h,
      onFocus: () => n("update:viewMode", "hour")
    }, null), _("span", {
      class: "v-time-picker-controls__time__separator"
    }, [qt(":")]), p(as, {
      ref: m,
      active: e.viewMode === "minute",
      color: e.color,
      disabled: e.disabled,
      label: l("$vuetify.timePicker.minute"),
      modelValue: s.value,
      "onUpdate:modelValue": (b) => s.value = b,
      onKeydown: d,
      onBeforeinput: x,
      onFocus: () => n("update:viewMode", "minute")
    }, null), e.useSeconds && _("span", {
      key: "secondsDivider",
      class: "v-time-picker-controls__time__separator"
    }, [qt(":")]), e.useSeconds && p(as, {
      key: "secondsVal",
      ref: y,
      active: e.viewMode === "second",
      color: e.color,
      disabled: e.disabled,
      label: l("$vuetify.timePicker.second"),
      modelValue: u.value,
      "onUpdate:modelValue": (b) => u.value = b,
      onKeydown: f,
      onBeforeinput: w,
      onFocus: () => n("update:viewMode", "second")
    }, null), e.ampm && _("div", {
      class: "v-time-picker-controls__ampm"
    }, [p(Oe, {
      active: e.period === "am",
      color: e.period === "am" ? e.color : void 0,
      class: ee({
        "v-time-picker-controls__ampm__am": !0,
        "v-time-picker-controls__ampm__btn": !0,
        "v-time-picker-controls__ampm__btn__active": e.period === "am"
      }),
      disabled: e.disabled,
      text: l("$vuetify.timePicker.am"),
      variant: e.disabled && e.period === "am" ? "elevated" : "tonal",
      onClick: () => e.period !== "am" ? n("update:period", "am") : null
    }, null), p(Oe, {
      active: e.period === "pm",
      color: e.period === "pm" ? e.color : void 0,
      class: ee({
        "v-time-picker-controls__ampm__pm": !0,
        "v-time-picker-controls__ampm__btn": !0,
        "v-time-picker-controls__ampm__btn__active": e.period === "pm"
      }),
      disabled: e.disabled,
      text: l("$vuetify.timePicker.pm"),
      variant: e.disabled && e.period === "pm" ? "elevated" : "tonal",
      onClick: () => e.period !== "pm" ? n("update:period", "pm") : null
    }, null)])])])), {};
  }
}), MP = Qt(24), ub = Qt(12), BP = ub.map((e) => e + 12);
Qt(60);
const FP = R({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  viewMode: {
    type: String,
    default: "hour"
  },
  period: {
    type: String,
    default: "am",
    validator: (e) => ["am", "pm"].includes(e)
  },
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  variant: {
    type: String,
    default: "dial"
  },
  ...Be(br({
    title: "$vuetify.timePicker.title"
  }), ["landscape"]),
  ...it()
}, "VTimePicker"), LP = Q()({
  name: "VTimePicker",
  props: FP(),
  emits: {
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:period": (e) => !0,
    "update:second": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = Ue(), {
      densityClasses: o
    } = Mt(e), i = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = /* @__PURE__ */ ae(null), c = /* @__PURE__ */ ae(null), d = /* @__PURE__ */ ae(null), f = pe(e, "period", "am"), v = pe(e, "viewMode", "hour"), k = /* @__PURE__ */ ae(null), m = /* @__PURE__ */ ae(null), y = V(() => {
      let A;
      if (e.allowedHours instanceof Array ? A = (L) => e.allowedHours.includes(L) : A = e.allowedHours, !e.min && !e.max) return A;
      const B = e.min ? Number(e.min.split(":")[0]) : 0, D = e.max ? Number(e.max.split(":")[0]) : 23;
      return (L) => L >= Number(B) && L <= Number(D) && (!A || A(L));
    }), h = V(() => {
      let A;
      const B = !y.value || i.value === null || y.value(i.value);
      if (e.allowedMinutes instanceof Array ? A = ($) => e.allowedMinutes.includes($) : A = e.allowedMinutes, !e.min && !e.max)
        return B ? A : () => !1;
      const [D, L] = e.min ? e.min.split(":").map(Number) : [0, 0], [W, N] = e.max ? e.max.split(":").map(Number) : [23, 59], J = D * 60 + Number(L), q = W * 60 + Number(N);
      return ($) => {
        const ne = 60 * i.value + $;
        return ne >= J && ne <= q && B && (!A || A($));
      };
    }), x = V(() => {
      let A;
      const D = (!y.value || i.value === null || y.value(i.value)) && (!h.value || r.value === null || h.value(r.value));
      if (e.allowedSeconds instanceof Array ? A = (H) => e.allowedSeconds.includes(H) : A = e.allowedSeconds, !e.min && !e.max)
        return D ? A : () => !1;
      const [L, W, N] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [J, q, $] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], ne = L * 3600 + W * 60 + Number(N || 0), K = J * 3600 + q * 60 + Number($ || 0);
      return (H) => {
        const G = 3600 * i.value + 60 * r.value + H;
        return G >= ne && G <= K && D && (!A || A(H));
      };
    }), w = V(() => e.format === "ampm"), b = /* @__PURE__ */ E(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
    function S() {
      const A = g();
      A !== null && A !== e.modelValue && n("update:modelValue", A), b.value && n("update:modelValue", null);
    }
    ue(i, S), ue(r, S), ue(s, S), ue(() => e.period, (A) => T(A)), ue(() => e.modelValue, (A) => I(A)), ue(() => e.useSeconds, (A, B) => {
      B && !A && v.value === "second" && (v.value = "minute"), !A && s.value !== null && (s.value = null);
    }), yt(() => {
      I(e.modelValue);
    });
    function g() {
      return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${Yn(i.value)}:${Yn(r.value)}` + (e.useSeconds ? `:${Yn(s.value)}` : "") : null;
    }
    function I(A) {
      if (A == null || A === "")
        i.value = null, r.value = null, s.value = null;
      else if (A instanceof Date)
        i.value = A.getHours(), r.value = A.getMinutes(), s.value = A.getSeconds();
      else {
        const [B, , D, , L, W] = A.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        i.value = W ? lu(parseInt(B, 10), W) : parseInt(B, 10), r.value = parseInt(D, 10), s.value = parseInt(L || 0, 10);
      }
      f.value = i.value == null || i.value < 12 ? "am" : "pm";
    }
    function C(A, B) {
      const D = y.value;
      if (!D) return B;
      const L = w.value ? B < 12 ? ub : BP : MP;
      return ((L.find((N) => D((N + B) % L.length + L[0])) || 0) + B) % L.length + L[0];
    }
    function T(A) {
      if (f.value = A, i.value != null) {
        const B = i.value + (f.value === "am" ? -12 : 12);
        i.value = C("hour", B);
      }
      return n("update:period", A), S(), !0;
    }
    function P(A) {
      v.value === "hour" ? i.value = w.value ? lu(A, f.value) : A : v.value === "minute" ? r.value = A : s.value = A;
    }
    function F(A) {
      switch (v.value || "hour") {
        case "hour":
          n("update:hour", A);
          break;
        case "minute":
          n("update:minute", A);
          break;
        case "second":
          n("update:second", A);
          break;
      }
      const B = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : !0);
      v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), B && S());
    }
    te(() => {
      const A = Be(Ml.filterProps(e), ["hideHeader"]), B = ou.filterProps(e), D = au.filterProps(Be(e, ["format", "modelValue", "min", "max"]));
      return p(Ml, U(A, {
        color: void 0,
        class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value],
        hideHeader: e.hideHeader && e.variant !== "input",
        style: e.style
      }), {
        title: () => a.title?.() ?? _("div", {
          class: "v-time-picker__title"
        }, [l(e.title)]),
        header: () => p(ou, U(B, {
          ampm: w.value,
          hour: i.value,
          minute: r.value,
          period: f.value,
          second: s.value,
          viewMode: v.value,
          "onUpdate:hour": (L) => i.value = L,
          "onUpdate:minute": (L) => r.value = L,
          "onUpdate:period": (L) => T(L),
          "onUpdate:second": (L) => s.value = L,
          "onUpdate:viewMode": (L) => v.value = L,
          ref: k
        }), null),
        default: () => p(au, U(D, {
          allowedValues: v.value === "hour" ? y.value : v.value === "minute" ? h.value : x.value,
          double: v.value === "hour" && !w.value,
          format: v.value === "hour" ? w.value ? sb : (L) => L : (L) => Yn(L, 2),
          max: v.value === "hour" ? w.value && f.value === "am" ? 11 : 23 : 59,
          min: v.value === "hour" && w.value && f.value === "pm" ? 12 : 0,
          size: 20,
          step: v.value === "hour" ? 1 : 5,
          modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value,
          onChange: F,
          onInput: P,
          ref: m
        }), null),
        actions: a.actions
      });
    });
  }
}), OP = R({
  ...Se(),
  ...rn({
    variant: "text"
  })
}, "VToolbarItems"), $P = Q()({
  name: "VToolbarItems",
  props: OP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lt({
      VBtn: {
        color: /* @__PURE__ */ E(() => e.color),
        height: "inherit",
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => _("div", {
      class: ee(["v-toolbar-items", e.class]),
      style: ve(e.style)
    }, [n.default?.()])), {};
  }
}), NP = R({
  id: String,
  interactive: Boolean,
  text: String,
  ...Be(Go({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"])
}, "VTooltip"), cb = Q()({
  name: "VTooltip",
  props: NP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pe(e, "modelValue"), {
      scopeId: l
    } = sl(), o = At(), i = /* @__PURE__ */ E(() => e.id || `v-tooltip-${o}`), r = /* @__PURE__ */ ae(), s = V(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = V(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = /* @__PURE__ */ E(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = V(() => U({
      "aria-describedby": i.value
    }, e.activatorProps));
    return te(() => {
      const f = En.filterProps(e);
      return p(En, U({
        ref: r,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: i.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        transition: c.value,
        absolute: !0,
        location: s.value,
        origin: u.value,
        role: "tooltip",
        activatorProps: d.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          for (var v = arguments.length, k = new Array(v), m = 0; m < v; m++)
            k[m] = arguments[m];
          return n.default?.(...k) ?? e.text;
        }
      });
    }), St({}, r);
  }
}), RP = R({
  ...Be(Hg({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup"), iu = Q()({
  name: "VTreeviewGroup",
  props: RP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = V(() => a.value?.isOpen ? e.collapseIcon : e.expandIcon), o = V(() => ({
      VTreeviewItem: {
        prependIcon: void 0,
        appendIcon: void 0,
        toggleIcon: l.value
      }
    }));
    return te(() => {
      const i = Io.filterProps(e);
      return p(Io, U(i, {
        ref: a,
        class: ["v-treeview-group", e.class],
        subgroup: !0
      }), {
        ...n,
        activator: n.activator ? (r) => _(ye, null, [p(Ee, {
          defaults: o.value
        }, {
          default: () => [n.activator?.(r)]
        })]) : void 0
      });
    }), {};
  }
}), db = /* @__PURE__ */ Symbol.for("vuetify:v-treeview"), fb = R({
  loading: Boolean,
  hideActions: Boolean,
  hasCustomPrepend: Boolean,
  indentLines: Array,
  toggleIcon: xe,
  ...jg({
    slim: !0
  })
}, "VTreeviewItem"), ru = Q()({
  name: "VTreeviewItem",
  props: fb(),
  emits: {
    toggleExpand: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = $e(db, {
      visibleIds: /* @__PURE__ */ ae()
    }).visibleIds, o = /* @__PURE__ */ ae(), i = V(() => o.value?.root.activatable.value && o.value?.isGroupActivator), r = V(() => o.value?.link.isClickable.value || e.value != null && !!o.value?.list), s = V(() => !e.disabled && e.link !== !1 && (e.link || r.value || i.value)), u = V(() => l.value && !l.value.has(/* @__PURE__ */ Ie(o.value?.id)));
    function c(f) {
      s.value && i.value && o.value?.activate(!o.value?.isActivated, f);
    }
    function d(f) {
      f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
    }
    return te(() => {
      const f = mn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
      return p(mn, U({
        ref: o
      }, f, {
        active: o.value?.isActivated || void 0,
        class: ["v-treeview-item", {
          "v-treeview-item--activatable-group-activator": i.value,
          "v-treeview-item--filtered": u.value
        }, e.class],
        ripple: !1,
        onClick: c
      }), {
        ...n,
        prepend: v ? (k) => _(ye, null, [e.indentLines && e.indentLines.length > 0 ? _("div", {
          key: "indent-lines",
          class: "v-treeview-indent-lines",
          style: {
            "--v-indent-parts": e.indentLines.length
          }
        }, [e.indentLines.map((m) => _("div", {
          class: ee(`v-treeview-indent-line v-treeview-indent-line--${m}`)
        }, null))]) : "", !e.hideActions && p(ec, {
          start: !0
        }, {
          default: () => [e.toggleIcon ? _(ye, null, [n.toggle ? p(Ee, {
            key: "prepend-defaults",
            defaults: {
              VBtn: {
                density: "compact",
                icon: e.toggleIcon,
                variant: "text",
                loading: e.loading
              },
              VProgressCircular: {
                indeterminate: "disable-shrink",
                size: 20,
                width: 2
              }
            }
          }, {
            default: () => [n.toggle({
              ...k,
              loading: e.loading,
              props: {
                onClick: d
              }
            })]
          }) : p(Oe, {
            key: "prepend-toggle",
            density: "compact",
            icon: e.toggleIcon,
            loading: e.loading,
            variant: "text",
            onClick: d
          }, {
            loader: () => p(Sa, {
              indeterminate: "disable-shrink",
              size: "20",
              width: "2"
            }, null)
          })]) : _("div", {
            class: "v-treeview-item__level"
          }, null)]
        }), e.hasCustomPrepend ? p(Ee, {
          key: "prepend-defaults",
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            },
            VListItemAction: {
              start: !0
            }
          }
        }, {
          default: () => [n.prepend?.(k)]
        }) : _(ye, null, [n.prepend?.(k), e.prependAvatar && p(an, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(He, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)])]) : void 0
      });
    }), St({}, o);
  }
}), vb = R({
  fluid: Boolean,
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  indeterminateIcon: {
    type: xe,
    default: "$checkboxIndeterminate"
  },
  falseIcon: xe,
  trueIcon: xe,
  returnObject: Boolean,
  activatable: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  index: Number,
  isLastGroup: Boolean,
  separateRoots: Boolean,
  parentIndentLines: Array,
  indentLinesVariant: String,
  path: {
    type: Array,
    default: () => []
  },
  ...jt(fb(), ["hideActions"]),
  ...it()
}, "VTreeviewChildren"), Ni = Q()({
  name: "VTreeviewChildren",
  props: vb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ pt(/* @__PURE__ */ new Set()), l = /* @__PURE__ */ ae([]), o = V(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
    async function i(s) {
      try {
        if (!e.items?.length || !e.loadChildren) return;
        s?.children?.length === 0 && (a.add(s.value), await e.loadChildren(s.raw));
      } finally {
        a.delete(s.value);
      }
    }
    function r(s, u) {
      e.selectable && s(u);
    }
    return () => n.default?.() ?? e.items?.map((s, u, c) => {
      const {
        children: d,
        props: f
      } = s, v = a.has(s.value), k = !!c.at(u + 1)?.children, m = e.path?.length ?? 0, y = c.length - 1 === u, h = {
        index: u,
        depth: m,
        isFirst: u === 0,
        isLast: y,
        path: [...e.path, u],
        hideAction: e.hideActions
      }, x = L0({
        depth: m,
        isLast: y,
        isLastGroup: e.isLastGroup,
        leafLinks: !e.hideActions && !e.fluid,
        separateRoots: e.separateRoots,
        parentIndentLines: e.parentIndentLines,
        variant: e.indentLinesVariant
      }), w = {
        toggle: n.toggle ? (I) => n.toggle?.({
          ...I,
          ...h,
          item: s.raw,
          internalItem: s,
          loading: v
        }) : void 0,
        prepend: (I) => _(ye, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && p(ec, {
          start: !0
        }, {
          default: () => [p(pn, {
            key: s.value,
            modelValue: I.isSelected,
            disabled: e.disabled || f.disabled,
            loading: v,
            color: e.selectedColor,
            density: e.density,
            indeterminate: I.isIndeterminate,
            indeterminateIcon: e.indeterminateIcon,
            falseIcon: e.falseIcon,
            trueIcon: e.trueIcon,
            "onUpdate:modelValue": (C) => r(I.select, C),
            onClick: (C) => C.stopPropagation(),
            onKeydown: (C) => {
              ["Enter", "Space"].includes(C.key) && (C.stopPropagation(), r(I.select, I.isSelected));
            }
          }, null)]
        }), n.prepend?.({
          ...I,
          ...h,
          item: s.raw,
          internalItem: s
        })]),
        append: n.append ? (I) => n.append?.({
          ...I,
          ...h,
          item: s.raw,
          internalItem: s
        }) : void 0,
        title: n.title ? (I) => n.title?.({
          ...I,
          item: s.raw,
          internalItem: s
        }) : void 0,
        subtitle: n.subtitle ? (I) => n.subtitle?.({
          ...I,
          item: s.raw,
          internalItem: s
        }) : void 0
      }, b = iu.filterProps(f), S = Ni.filterProps({
        ...e,
        ...h
      }), g = {
        hideActions: e.hideActions,
        indentLines: x.footer
      };
      return d ? p(iu, U(b, {
        value: e.returnObject ? s.raw : b?.value,
        rawId: b?.value
      }), {
        activator: (I) => {
          let {
            props: C
          } = I;
          const T = {
            ...f,
            ...C,
            value: f?.value,
            hideActions: e.hideActions,
            indentLines: x.node,
            onToggleExpand: [() => i(s), C.onClick],
            onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), C.onClick] : () => r(l.value[u]?.select, !l.value[u]?.isSelected)
          };
          return li(n.header, {
            props: T,
            item: s.raw,
            internalItem: s,
            loading: v
          }, () => p(ru, U({
            ref: (P) => l.value[u] = P
          }, T, {
            hasCustomPrepend: !!n.prepend,
            value: e.returnObject ? s.raw : f.value,
            loading: v
          }), w));
        },
        default: () => _(ye, null, [p(Ni, U(S, {
          items: d,
          indentLinesVariant: e.indentLinesVariant,
          parentIndentLines: x.children,
          isLastGroup: k,
          returnObject: e.returnObject
        }), n), n.footer?.({
          props: g,
          item: s.raw,
          internalItem: s,
          loading: v
        })])
      }) : li(n.item, {
        props: f,
        item: s.raw,
        internalItem: s
      }, () => s.type === "divider" ? li(n.divider, {
        props: s.raw
      }, () => p(nn, s.props, null)) : s.type === "subheader" ? li(n.subheader, {
        props: s.raw
      }, () => p(Hl, s.props, null)) : p(ru, U(f, {
        hasCustomPrepend: !!n.prepend,
        hideActions: e.hideActions,
        indentLines: x.leaf,
        value: e.returnObject ? /* @__PURE__ */ Ie(s.raw) : f.value
      }), w));
    });
  }
});
function mb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e)
    t.push(n), n.children && mb(n.children, t);
  return t;
}
const HP = R({
  openAll: Boolean,
  indentLines: [Boolean, String],
  search: String,
  hideNoData: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  ...Wl({
    filterKeys: ["title"]
  }),
  ...Be(vb(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]),
  ...Be(Xg({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: !0
  }), ["nav", "openStrategy"]),
  modelValue: Array
}, "VTreeview"), WP = Q()({
  name: "VTreeview",
  props: HP(),
  emits: {
    "update:opened": (e) => !0,
    "update:activated": (e) => !0,
    "update:selected": (e) => !0,
    "update:modelValue": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const {
      t: l
    } = Ue(), {
      items: o
    } = qg(e), i = /* @__PURE__ */ E(() => e.activeColor), r = /* @__PURE__ */ E(() => e.baseColor), s = /* @__PURE__ */ E(() => e.color), u = pe(e, "activated"), c = pe(e, "selected"), d = V({
      get: () => e.modelValue ?? c.value,
      set(b) {
        c.value = b, a("update:modelValue", b);
      }
    }), f = /* @__PURE__ */ ae(), v = V(() => e.openAll ? w(o.value) : e.opened), k = V(() => mb(o.value)), m = /* @__PURE__ */ E(() => e.search), {
      filteredItems: y
    } = zl(e, k, m), h = V(() => {
      if (!m.value) return null;
      const b = f.value?.getPath;
      return b ? new Set(y.value.flatMap((S) => {
        const g = e.returnObject ? S.raw : S.props.value;
        return [...b(g), ...x(g)].map(Ie);
      })) : null;
    });
    function x(b) {
      const S = [], g = (f.value?.children.get(b) ?? []).slice();
      for (; g.length; ) {
        const I = g.shift();
        I && (S.push(I), g.push(...(f.value?.children.get(I) ?? []).slice()));
      }
      return S;
    }
    function w(b) {
      let S = [];
      for (const g of b)
        g.children && (S.push(e.returnObject ? /* @__PURE__ */ Ie(g.raw) : g.value), g.children && (S = S.concat(w(g.children))));
      return S;
    }
    return Ze(db, {
      visibleIds: h
    }), lt({
      VTreeviewGroup: {
        activeColor: i,
        baseColor: r,
        color: s,
        collapseIcon: /* @__PURE__ */ E(() => e.collapseIcon),
        expandIcon: /* @__PURE__ */ E(() => e.expandIcon)
      },
      VTreeviewItem: {
        activeClass: /* @__PURE__ */ E(() => e.activeClass),
        activeColor: i,
        baseColor: r,
        color: s,
        density: /* @__PURE__ */ E(() => e.density),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        lines: /* @__PURE__ */ E(() => e.lines),
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => {
      const b = Dl.filterProps(e), S = Ni.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
      return p(Dl, U({
        ref: f
      }, b, {
        class: ["v-treeview", {
          "v-treeview--fluid": e.fluid
        }, e.class],
        openStrategy: "multiple",
        style: e.style,
        opened: v.value,
        activated: u.value,
        "onUpdate:activated": (I) => u.value = I,
        selected: d.value,
        "onUpdate:selected": (I) => d.value = I
      }), {
        default: () => [h.value?.size === 0 && !e.hideNoData && (n["no-data"]?.() ?? p(mn, {
          key: "no-data",
          title: l(e.noDataText)
        }, null)), p(Ni, U(S, {
          density: e.density,
          returnObject: e.returnObject,
          items: o.value,
          parentIndentLines: e.indentLines ? [] : void 0,
          indentLinesVariant: g
        }), n)]
      });
    }), {};
  }
}), zP = Q()({
  name: "VValidation",
  props: Pg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Tg(e, "validation");
    return () => n.default?.(a);
  }
}), jP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: qp,
  VAlertTitle: kg,
  VApp: tp,
  VAppBar: wp,
  VAppBarNavIcon: Yp,
  VAppBarTitle: Up,
  VAutocomplete: hC,
  VAvatar: an,
  VBadge: vh,
  VBanner: kC,
  VBannerActions: mh,
  VBannerText: gh,
  VBottomNavigation: pC,
  VBottomSheet: CC,
  VBreadcrumbs: PC,
  VBreadcrumbsDivider: yh,
  VBreadcrumbsItem: bh,
  VBtn: Oe,
  VBtnGroup: Ps,
  VBtnToggle: Ip,
  VCalendar: V_,
  VCard: E_,
  VCardActions: Nh,
  VCardItem: Wh,
  VCardSubtitle: Rh,
  VCardText: zh,
  VCardTitle: Hh,
  VCarousel: H_,
  VCarouselItem: z_,
  VCheckbox: ix,
  VCheckboxBtn: pn,
  VChip: Jn,
  VChipGroup: dx,
  VClassIcon: $u,
  VCode: j_,
  VCol: b1,
  VColorPicker: EV,
  VCombobox: BV,
  VComponentIcon: Cs,
  VConfirmEdit: LV,
  VContainer: m1,
  VCounter: dr,
  VDataIterator: GV,
  VDataTable: s1,
  VDataTableFooter: Ao,
  VDataTableHeaders: Xa,
  VDataTableRow: Ic,
  VDataTableRows: Za,
  VDataTableServer: f1,
  VDataTableVirtual: c1,
  VDatePicker: A1,
  VDatePickerControls: Gs,
  VDatePickerHeader: qs,
  VDatePickerMonth: Xs,
  VDatePickerMonths: Zs,
  VDatePickerYears: Js,
  VDefaultsProvider: Ee,
  VDialog: Ls,
  VDialogBottomTransition: op,
  VDialogTopTransition: ip,
  VDialogTransition: or,
  VDivider: nn,
  VEmptyState: E1,
  VExpandTransition: ir,
  VExpandXTransition: Yu,
  VExpansionPanel: M1,
  VExpansionPanelText: Qs,
  VExpansionPanelTitle: eu,
  VExpansionPanels: L1,
  VFab: $1,
  VFabTransition: lp,
  VFadeTransition: po,
  VField: wa,
  VFieldLabel: Xl,
  VFileInput: j1,
  VFooter: U1,
  VForm: G1,
  VHotkey: J1,
  VHover: eI,
  VIcon: He,
  VImg: Zn,
  VInfiniteScroll: nI,
  VInput: Tt,
  VItem: oI,
  VItemGroup: lI,
  VKbd: tu,
  VLabel: Nl,
  VLayout: rI,
  VLayoutItem: uI,
  VLazy: dI,
  VLigatureIcon: N0,
  VList: Dl,
  VListGroup: Io,
  VListImg: Ex,
  VListItem: mn,
  VListItemAction: ec,
  VListItemMedia: Fx,
  VListItemSubtitle: Wg,
  VListItemTitle: zg,
  VListSubheader: Hl,
  VLocaleProvider: vI,
  VMain: gI,
  VMenu: El,
  VMessages: Vg,
  VNavigationDrawer: CI,
  VNoSsr: _I,
  VNumberInput: AI,
  VOtpInput: EI,
  VOverlay: En,
  VPagination: Ys,
  VParallax: FI,
  VProgressCircular: Sa,
  VProgressLinear: rr,
  VRadio: OI,
  VRadioGroup: NI,
  VRangeSlider: HI,
  VRating: zI,
  VResponsive: Vs,
  VRow: _1,
  VScaleTransition: zu,
  VScrollXReverseTransition: sp,
  VScrollXTransition: rp,
  VScrollYReverseTransition: cp,
  VScrollYTransition: up,
  VSelect: cc,
  VSelectionControl: ka,
  VSelectionControlGroup: Cg,
  VSheet: To,
  VSkeletonLoader: KI,
  VSlideGroup: Vo,
  VSlideGroupItem: GI,
  VSlideXReverseTransition: fp,
  VSlideXTransition: dp,
  VSlideYReverseTransition: vp,
  VSlideYTransition: ju,
  VSlider: js,
  VSnackbar: nu,
  VSnackbarQueue: ZI,
  VSpacer: Ks,
  VSparkline: tP,
  VSpeedDial: aP,
  VStepper: cP,
  VStepperActions: Jy,
  VStepperHeader: Qy,
  VStepperItem: eb,
  VStepperWindow: tb,
  VStepperWindowItem: nb,
  VSvgIcon: Ou,
  VSwitch: fP,
  VSystemBar: mP,
  VTab: lb,
  VTable: Ja,
  VTabs: SP,
  VTabsWindow: ob,
  VTabsWindowItem: ib,
  VTextField: Mn,
  VTextarea: wP,
  VThemeProvider: xP,
  VTimePicker: LP,
  VTimePickerClock: au,
  VTimePickerControls: ou,
  VTimeline: PP,
  VTimelineItem: VP,
  VToolbar: Is,
  VToolbarItems: $P,
  VToolbarTitle: Wu,
  VTooltip: cb,
  VTreeview: WP,
  VTreeviewGroup: iu,
  VTreeviewItem: ru,
  VValidation: zP,
  VVirtualScroll: fr,
  VWindow: Ga,
  VWindowItem: qa
}, Symbol.toStringTag, { value: "Module" }));
function YP(e, t) {
  const n = t.modifiers || {}, a = t.value, {
    once: l,
    immediate: o,
    ...i
  } = n, r = !Object.keys(i).length, {
    handler: s,
    options: u
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: i?.attr ?? r,
      characterData: i?.char ?? r,
      childList: i?.child ?? r,
      subtree: i?.sub ?? r
    }
  }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s?.(d, f), l && gb(e, t);
  });
  o && s?.([], c), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = {
    observer: c
  }, c.observe(e, u);
}
function gb(e, t) {
  e._mutate?.[t.instance.$.uid] && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const UP = {
  mounted: YP,
  unmounted: gb
};
function hb(e, t) {
  const {
    self: n = !1
  } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = {
    handler: o,
    options: l,
    // Don't reference self
    target: n ? void 0 : i
  });
}
function yb(e, t) {
  if (!e._onScroll?.[t.instance.$.uid]) return;
  const {
    handler: n,
    options: a,
    target: l = e
  } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function KP(e, t) {
  t.value !== t.oldValue && (yb(e, t), hb(e, t));
}
const GP = {
  mounted: hb,
  unmounted: yb,
  updated: KP
};
function qP(e, t) {
  const n = typeof e == "string" ? Nv(e) : e, a = XP(n, t);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      gm(null, l);
    }
  };
}
function XP(e, t) {
  return function(n, a, l) {
    const o = typeof t == "function" ? t(a) : t, i = a.value?.text ?? a.value ?? o?.text, r = Ua(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? ZP(l, a.instance.$)?.provides : l.ctx?.provides) ?? a.instance.$.provides, c = kn(e, U(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: u
    }), gm(c, n);
  };
}
function ZP(e, t) {
  const n = /* @__PURE__ */ new Set(), a = (o) => {
    for (const i of o) {
      if (!i) continue;
      if (i === e || i.el && e.el && i.el === e.el)
        return !0;
      n.add(i);
      let r;
      if (i.suspense ? r = a([i.ssContent]) : Array.isArray(i.children) ? r = a(i.children) : i.component?.vnode && (r = a([i.component?.subTree])), r)
        return r;
      n.delete(i);
    }
    return !1;
  };
  if (!a([t.subTree]))
    return t;
  const l = Array.from(n).reverse();
  for (const o of l)
    if (o.component)
      return o.component;
  return t;
}
const JP = qP(cb, (e) => ({
  activator: (Ua(e.value) ? !e.value.text : ["", !1, null].includes(e.value)) ? null : "parent",
  location: e.arg?.replace("-", " "),
  text: typeof e.value == "boolean" ? void 0 : e.value
})), QP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Fs,
  Intersect: wn,
  Mutate: UP,
  Resize: Po,
  Ripple: Vt,
  Scroll: GP,
  Tooltip: JP,
  Touch: $i
}, Symbol.toStringTag, { value: "Module" })), bb = /* @__PURE__ */ Symbol("anywidget.RenderContext");
function eT() {
  let e = $e(bb);
  if (!e) throw new Error("anywidget.RenderContext is not provided.");
  return e;
}
function tT() {
  return eT().model;
}
function _e(e) {
  const t = tT();
  let n;
  const a = eS((o, i) => (n = i, {
    get() {
      return o(), t.get(be(e));
    },
    set(r) {
      t.set(be(e), kt(r)), t.save_changes();
    }
  })), l = () => {
    a.value = t.get(be(e)), n();
  };
  return yt(() => {
    t.on(`change:${e}`, l);
  }), Xi(() => {
    t.off(`change:${e}`, l);
  }), a;
}
const nT = /* @__PURE__ */ Mv(
  ({ model: e, experimental: t }, n) => (Ze(bb, { model: e, experimental: t }), () => n.slots?.default?.()),
  {
    props: ["model", "experimental"],
    name: "WidgetWrapper"
  }
);
function aT(e) {
  return ({ el: t, model: n, experimental: a }) => {
    const l = tg({ components: jP, directives: QP }), o = Wk(kn(nT, { model: n, experimental: a }, kn(e)));
    return o.use(l).mount(t), () => o.unmount();
  };
}
const lT = {
  __name: "VDataTable",
  setup(e) {
    const t = _e("children"), n = _e("search"), a = _e("tag"), l = _e("height"), o = _e("width"), i = _e("model_value"), r = _e("color"), s = _e("density"), u = _e("theme"), c = _e("sticky"), d = _e("mobile"), f = _e("mobile_breakpoint"), v = _e("items"), k = _e("loading"), m = _e("hover"), y = _e("next_icon"), h = _e("prev_icon"), x = _e("value_comparator"), w = _e("item_value"), b = _e("item_selectable"), S = _e("return_object"), g = _e("show_select"), I = _e("select_strategy"), C = _e("page"), T = _e("initial_sort_order"), P = _e("sort_by"), F = _e("multi_sort"), A = _e("must_sort"), B = _e("custom_key_sort"), D = _e("items_per_page"), L = _e("expand_on_click"), W = _e("show_expand"), N = _e("expanded"), J = _e("group_by"), q = _e("filter_mode"), $ = _e("no_filter"), ne = _e("custom_filter"), K = _e("custom_key_filter"), H = _e("filter_keys"), G = _e("header_props"), X = _e("cell_props"), fe = _e("disable_sort"), Z = _e("headers"), ce = _e("loading_text"), Ce = _e("hide_no_data"), Ve = _e("no_data_text"), Pe = _e("collapse_icon"), M = _e("expand_icon"), O = _e("group_collapse_icon"), j = _e("group_expand_icon"), re = _e("row_props"), z = _e("hide_default_body"), ie = _e("hide_default_footer"), me = _e("hide_default_header"), Y = _e("fixed_header"), le = _e("sort_asc_icon"), oe = _e("sort_desc_icon"), ge = _e("fixed_footer"), he = _e("striped"), ke = _e("first_icon"), we = _e("last_icon"), De = _e("items_per_page_text"), Fe = _e("page_text"), Re = _e("first_page_label"), mt = _e("prev_page_label"), Ke = _e("next_page_label"), Yt = _e("last_page_label"), sn = _e("items_per_page_options"), _a = _e("show_current_page");
    return (Tr, Ut) => {
      const un = Nv("v-data-table", !0);
      return XS(), QS(un, {
        search: be(n),
        tag: be(a),
        height: be(l),
        width: be(o),
        modelValue: be(i),
        color: be(r),
        density: be(s),
        theme: be(u),
        sticky: be(c),
        mobile: be(d),
        mobileBreakpoint: be(f),
        items: be(v),
        loading: be(k),
        hover: be(m),
        nextIcon: be(y),
        prevIcon: be(h),
        valueComparator: be(x),
        itemValue: be(w),
        itemSelectable: be(b),
        returnObject: be(S),
        showSelect: be(g),
        selectStrategy: be(I),
        page: be(C),
        initialSortOrder: be(T),
        sortBy: be(P),
        multiSort: be(F),
        mustSort: be(A),
        customKeySort: be(B),
        itemsPerPage: be(D),
        expandOnClick: be(L),
        showExpand: be(W),
        expanded: be(N),
        groupBy: be(J),
        filterMode: be(q),
        noFilter: be($),
        customFilter: be(ne),
        customKeyFilter: be(K),
        filterKeys: be(H),
        headerProps: be(G),
        cellProps: be(X),
        disableSort: be(fe),
        headers: be(Z),
        loadingText: be(ce),
        hideNoData: be(Ce),
        noDataText: be(Ve),
        collapseIcon: be(Pe),
        expandIcon: be(M),
        groupCollapseIcon: be(O),
        groupExpandIcon: be(j),
        rowProps: be(re),
        hideDefaultBody: be(z),
        hideDefaultFooter: be(ie),
        hideDefaultHeader: be(me),
        fixedHeader: be(Y),
        sortAscIcon: be(le),
        sortDescIcon: be(oe),
        fixedFooter: be(ge),
        striped: be(he),
        firstIcon: be(ke),
        lastIcon: be(we),
        itemsPerPageText: be(De),
        pageText: be(Fe),
        firstPageLabel: be(Re),
        prevPageLabel: be(mt),
        nextPageLabel: be(Ke),
        lastPageLabel: be(Yt),
        itemsPerPageOptions: be(sn),
        showCurrentPage: be(_a)
      }, {
        default: pv(() => [
          qt(
            Tn(be(t)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["search", "tag", "height", "width", "modelValue", "color", "density", "theme", "sticky", "mobile", "mobileBreakpoint", "items", "loading", "hover", "nextIcon", "prevIcon", "valueComparator", "itemValue", "itemSelectable", "returnObject", "showSelect", "selectStrategy", "page", "initialSortOrder", "sortBy", "multiSort", "mustSort", "customKeySort", "itemsPerPage", "expandOnClick", "showExpand", "expanded", "groupBy", "filterMode", "noFilter", "customFilter", "customKeyFilter", "filterKeys", "headerProps", "cellProps", "disableSort", "headers", "loadingText", "hideNoData", "noDataText", "collapseIcon", "expandIcon", "groupCollapseIcon", "groupExpandIcon", "rowProps", "hideDefaultBody", "hideDefaultFooter", "hideDefaultHeader", "fixedHeader", "sortAscIcon", "sortDescIcon", "fixedFooter", "striped", "firstIcon", "lastIcon", "itemsPerPageText", "pageText", "firstPageLabel", "prevPageLabel", "nextPageLabel", "lastPageLabel", "itemsPerPageOptions", "showCurrentPage"]);
    };
  }
}, oT = aT(lT), iT = { render: oT };
export {
  iT as default
};
