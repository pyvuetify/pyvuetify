// @__NO_SIDE_EFFECTS__
function ru(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ze = {}, yl = [], In = () => {
}, Wf = () => !1, No = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), su = (e) => e.startsWith("onUpdate:"), kt = Object.assign, uu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sb = Object.prototype.hasOwnProperty, Ye = (e, t) => Sb.call(e, t), De = Array.isArray, bl = (e) => Ro(e) === "[object Map]", zf = (e) => Ro(e) === "[object Set]", Me = (e) => typeof e == "function", rt = (e) => typeof e == "string", pa = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", jf = (e) => (et(e) || Me(e)) && Me(e.then) && Me(e.catch), Yf = Object.prototype.toString, Ro = (e) => Yf.call(e), kb = (e) => Ro(e).slice(8, -1), Uf = (e) => Ro(e) === "[object Object]", Ho = (e) => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zl = /* @__PURE__ */ ru(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, wb = /-\w/g, Wt = Wo(
  (e) => e.replace(wb, (t) => t.slice(1).toUpperCase())
), pb = /\B([A-Z])/g, Za = Wo(
  (e) => e.replace(pb, "-$1").toLowerCase()
), Mn = Wo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pr = Wo(
  (e) => e ? `on${Mn(e)}` : ""
), da = (e, t) => !Object.is(e, t), so = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Kf = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, cu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xb = (e) => {
  const t = rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lc;
const zo = () => Lc || (Lc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fe(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = rt(a) ? Ib(a) : fe(a);
      if (l)
        for (const i in l)
          t[i] = l[i];
    }
    return t;
  } else if (rt(e) || et(e))
    return e;
}
const Cb = /;(?![^(]*\))/g, Vb = /:([^]+)/, _b = /\/\*[^]*?\*\//g;
function Ib(e) {
  const t = {};
  return e.replace(_b, "").split(Cb).forEach((n) => {
    if (n) {
      const a = n.split(Vb);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (rt(e))
    t = e;
  else if (De(e))
    for (let n = 0; n < e.length; n++) {
      const a = ee(e[n]);
      a && (t += a + " ");
    }
  else if (et(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Pb(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !rt(t) && (e.class = ee(t)), n && (e.style = fe(n)), e;
}
const Tb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ab = /* @__PURE__ */ ru(Tb);
function Gf(e) {
  return !!e || e === "";
}
const qf = (e) => !!(e && e.__v_isRef === !0), Pn = (e) => rt(e) ? e : e == null ? "" : De(e) || et(e) && (e.toString === Yf || !Me(e.toString)) ? qf(e) ? Pn(e.value) : JSON.stringify(e, Xf, 2) : String(e), Xf = (e, t) => qf(t) ? Xf(e, t.value) : bl(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], i) => (n[Tr(a, i) + " =>"] = l, n),
    {}
  )
} : zf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Tr(n))
} : pa(t) ? Tr(t) : et(t) && !De(t) && !Uf(t) ? String(t) : t, Tr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pa(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Mt;
class Zf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Mt, !t && Mt && (this.index = (Mt.scopes || (Mt.scopes = [])).push(
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
      const n = Mt;
      try {
        return Mt = this, t();
      } finally {
        Mt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mt, Mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mt = this.prevScope, this.prevScope = void 0);
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
function pl(e) {
  return new Zf(e);
}
function Jf() {
  return Mt;
}
function at(e, t = !1) {
  Mt && Mt.cleanups.push(e);
}
let Qe;
const Ar = /* @__PURE__ */ new WeakSet();
class Qf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && Mt.active && Mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ar.has(this) && (Ar.delete(this), this.trigger()));
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
    this.flags |= 2, $c(this), nv(this);
    const t = Qe, n = vn;
    Qe = this, vn = !0;
    try {
      return this.fn();
    } finally {
      av(this), Qe = t, vn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vu(t);
      this.deps = this.depsTail = void 0, $c(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ar.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    as(this) && this.run();
  }
  get dirty() {
    return as(this);
  }
}
let ev = 0, Jl, Ql;
function tv(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ql, Ql = e;
    return;
  }
  e.next = Jl, Jl = e;
}
function du() {
  ev++;
}
function fu() {
  if (--ev > 0)
    return;
  if (Ql) {
    let t = Ql;
    for (Ql = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Jl; ) {
    let t = Jl;
    for (Jl = void 0; t; ) {
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
    a.version === -1 ? (a === n && (n = l), vu(a), Db(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function as(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lv(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ri) || (e.globalVersion = ri, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !as(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Qe, a = vn;
  Qe = e, vn = !0;
  try {
    nv(e);
    const l = e.fn(e._value);
    (t.version === 0 || da(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Qe = n, vn = a, av(e), e.flags &= -3;
  }
}
function vu(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      vu(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Db(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vn = !0;
const iv = [];
function Un() {
  iv.push(vn), vn = !1;
}
function Kn() {
  const e = iv.pop();
  vn = e === void 0 ? !0 : e;
}
function $c(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Qe;
    Qe = void 0;
    try {
      t();
    } finally {
      Qe = n;
    }
  }
}
let ri = 0;
class Eb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class jo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Qe || !vn || Qe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Qe)
      n = this.activeLink = new Eb(Qe, this), Qe.deps ? (n.prevDep = Qe.depsTail, Qe.depsTail.nextDep = n, Qe.depsTail = n) : Qe.deps = Qe.depsTail = n, ov(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = Qe.depsTail, n.nextDep = void 0, Qe.depsTail.nextDep = n, Qe.depsTail = n, Qe.deps === n && (Qe.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, ri++, this.notify(t);
  }
  notify(t) {
    du();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fu();
    }
  }
}
function ov(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        ov(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ho = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ Symbol(
  ""
), ls = /* @__PURE__ */ Symbol(
  ""
), si = /* @__PURE__ */ Symbol(
  ""
);
function Bt(e, t, n) {
  if (vn && Qe) {
    let a = ho.get(e);
    a || ho.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new jo()), l.map = a, l.key = n), l.track();
  }
}
function Wn(e, t, n, a, l, i) {
  const o = ho.get(e);
  if (!o) {
    ri++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (du(), t === "clear")
    o.forEach(r);
  else {
    const s = De(e), u = s && Ho(n);
    if (s && n === "length") {
      const c = Number(a);
      o.forEach((d, f) => {
        (f === "length" || f === si || !pa(f) && f >= c) && r(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && r(o.get(n)), u && r(o.get(si)), t) {
        case "add":
          s ? u && r(o.get("length")) : (r(o.get(Ma)), bl(e) && r(o.get(ls)));
          break;
        case "delete":
          s || (r(o.get(Ma)), bl(e) && r(o.get(ls)));
          break;
        case "set":
          bl(e) && r(o.get(Ma));
          break;
      }
  }
  fu();
}
function Mb(e, t) {
  const n = ho.get(e);
  return n && n.get(t);
}
function rl(e) {
  const t = /* @__PURE__ */ Ve(e);
  return t === e ? t : (Bt(t, "iterate", si), /* @__PURE__ */ un(e) ? t : t.map(Gn));
}
function mu(e) {
  return Bt(e = /* @__PURE__ */ Ve(e), "iterate", si), e;
}
function sa(e, t) {
  return /* @__PURE__ */ ma(e) ? ui(/* @__PURE__ */ Ba(e) ? Gn(t) : t) : Gn(t);
}
const Bb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Dr(this, Symbol.iterator, (e) => sa(this, e));
  },
  concat(...e) {
    return rl(this).concat(
      ...e.map((t) => De(t) ? rl(t) : t)
    );
  },
  entries() {
    return Dr(this, "entries", (e) => (e[1] = sa(this, e[1]), e));
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
      (n) => n.map((a) => sa(this, a)),
      arguments
    );
  },
  find(e, t) {
    return $n(
      this,
      "find",
      e,
      t,
      (n) => sa(this, n),
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
      (n) => sa(this, n),
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
    return Er(this, "includes", e);
  },
  indexOf(...e) {
    return Er(this, "indexOf", e);
  },
  join(e) {
    return rl(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Er(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $n(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zl(this, "pop");
  },
  push(...e) {
    return zl(this, "push", e);
  },
  reduce(e, ...t) {
    return Oc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oc(this, "reduceRight", e, t);
  },
  shift() {
    return zl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $n(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zl(this, "splice", e);
  },
  toReversed() {
    return rl(this).toReversed();
  },
  toSorted(e) {
    return rl(this).toSorted(e);
  },
  toSpliced(...e) {
    return rl(this).toSpliced(...e);
  },
  unshift(...e) {
    return zl(this, "unshift", e);
  },
  values() {
    return Dr(this, "values", (e) => sa(this, e));
  }
};
function Dr(e, t, n) {
  const a = mu(e), l = a[t]();
  return a !== e && !/* @__PURE__ */ un(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = n(i.value)), i;
  }), l;
}
const Fb = Array.prototype;
function $n(e, t, n, a, l, i) {
  const o = mu(e), r = o !== e && !/* @__PURE__ */ un(e), s = o[t];
  if (s !== Fb[t]) {
    const d = s.apply(e, i);
    return r ? Gn(d) : d;
  }
  let u = n;
  o !== e && (r ? u = function(d, f) {
    return n.call(this, sa(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(o, u, a);
  return r && l ? l(c) : c;
}
function Oc(e, t, n, a) {
  const l = mu(e);
  let i = n;
  return l !== e && (/* @__PURE__ */ un(e) ? n.length > 3 && (i = function(o, r, s) {
    return n.call(this, o, r, s, e);
  }) : i = function(o, r, s) {
    return n.call(this, o, sa(e, r), s, e);
  }), l[t](i, ...a);
}
function Er(e, t, n) {
  const a = /* @__PURE__ */ Ve(e);
  Bt(a, "iterate", si);
  const l = a[t](...n);
  return (l === -1 || l === !1) && /* @__PURE__ */ Di(n[0]) ? (n[0] = /* @__PURE__ */ Ve(n[0]), a[t](...n)) : l;
}
function zl(e, t, n = []) {
  Un(), du();
  const a = (/* @__PURE__ */ Ve(e))[t].apply(e, n);
  return fu(), Kn(), a;
}
const Lb = /* @__PURE__ */ ru("__proto__,__v_isRef,__isVue"), rv = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pa)
);
function $b(e) {
  pa(e) || (e = String(e));
  const t = /* @__PURE__ */ Ve(this);
  return Bt(t, "has", e), t.hasOwnProperty(e);
}
class sv {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return a === (l ? i ? Kb : fv : i ? dv : cv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const o = De(t);
    if (!l) {
      let s;
      if (o && (s = Bb[n]))
        return s;
      if (n === "hasOwnProperty")
        return $b;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ot(t) ? t : a
    );
    if ((pa(n) ? rv.has(n) : Lb(n)) || (l || Bt(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ ot(r)) {
      const s = o && Ho(n) ? r : r.value;
      return l && et(s) ? /* @__PURE__ */ Ha(s) : s;
    }
    return et(r) ? l ? /* @__PURE__ */ Ha(r) : /* @__PURE__ */ wt(r) : r;
  }
}
class uv extends sv {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let i = t[n];
    const o = De(t) && Ho(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ma(i);
      if (!/* @__PURE__ */ un(a) && !/* @__PURE__ */ ma(a) && (i = /* @__PURE__ */ Ve(i), a = /* @__PURE__ */ Ve(a)), !o && /* @__PURE__ */ ot(i) && !/* @__PURE__ */ ot(a))
        return u || (i.value = a), !0;
    }
    const r = o ? Number(n) < t.length : Ye(t, n), s = Reflect.set(
      t,
      n,
      a,
      /* @__PURE__ */ ot(t) ? t : l
    );
    return t === /* @__PURE__ */ Ve(l) && (r ? da(a, i) && Wn(t, "set", n, a) : Wn(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = Ye(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && Wn(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!pa(n) || !rv.has(n)) && Bt(t, "has", n), a;
  }
  ownKeys(t) {
    return Bt(
      t,
      "iterate",
      De(t) ? "length" : Ma
    ), Reflect.ownKeys(t);
  }
}
class Ob extends sv {
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
const Nb = /* @__PURE__ */ new uv(), Rb = /* @__PURE__ */ new Ob(), Hb = /* @__PURE__ */ new uv(!0);
const is = (e) => e, qi = (e) => Reflect.getPrototypeOf(e);
function Wb(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, i = /* @__PURE__ */ Ve(l), o = bl(i), r = e === "entries" || e === Symbol.iterator && o, s = e === "keys" && o, u = l[e](...a), c = n ? is : t ? ui : Gn;
    return !t && Bt(
      i,
      "iterate",
      s ? ls : Ma
    ), kt(
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
function Xi(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zb(e, t) {
  const n = {
    get(l) {
      const i = this.__v_raw, o = /* @__PURE__ */ Ve(i), r = /* @__PURE__ */ Ve(l);
      e || (da(l, r) && Bt(o, "get", l), Bt(o, "get", r));
      const { has: s } = qi(o), u = t ? is : e ? ui : Gn;
      if (s.call(o, l))
        return u(i.get(l));
      if (s.call(o, r))
        return u(i.get(r));
      i !== o && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Bt(/* @__PURE__ */ Ve(l), "iterate", Ma), l.size;
    },
    has(l) {
      const i = this.__v_raw, o = /* @__PURE__ */ Ve(i), r = /* @__PURE__ */ Ve(l);
      return e || (da(l, r) && Bt(o, "has", l), Bt(o, "has", r)), l === r ? i.has(l) : i.has(l) || i.has(r);
    },
    forEach(l, i) {
      const o = this, r = o.__v_raw, s = /* @__PURE__ */ Ve(r), u = t ? is : e ? ui : Gn;
      return !e && Bt(s, "iterate", Ma), r.forEach((c, d) => l.call(i, u(c), u(d), o));
    }
  };
  return kt(
    n,
    e ? {
      add: Xi("add"),
      set: Xi("set"),
      delete: Xi("delete"),
      clear: Xi("clear")
    } : {
      add(l) {
        !t && !/* @__PURE__ */ un(l) && !/* @__PURE__ */ ma(l) && (l = /* @__PURE__ */ Ve(l));
        const i = /* @__PURE__ */ Ve(this);
        return qi(i).has.call(i, l) || (i.add(l), Wn(i, "add", l, l)), this;
      },
      set(l, i) {
        !t && !/* @__PURE__ */ un(i) && !/* @__PURE__ */ ma(i) && (i = /* @__PURE__ */ Ve(i));
        const o = /* @__PURE__ */ Ve(this), { has: r, get: s } = qi(o);
        let u = r.call(o, l);
        u || (l = /* @__PURE__ */ Ve(l), u = r.call(o, l));
        const c = s.call(o, l);
        return o.set(l, i), u ? da(i, c) && Wn(o, "set", l, i) : Wn(o, "add", l, i), this;
      },
      delete(l) {
        const i = /* @__PURE__ */ Ve(this), { has: o, get: r } = qi(i);
        let s = o.call(i, l);
        s || (l = /* @__PURE__ */ Ve(l), s = o.call(i, l)), r && r.call(i, l);
        const u = i.delete(l);
        return s && Wn(i, "delete", l, void 0), u;
      },
      clear() {
        const l = /* @__PURE__ */ Ve(this), i = l.size !== 0, o = l.clear();
        return i && Wn(
          l,
          "clear",
          void 0,
          void 0
        ), o;
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
function gu(e, t) {
  const n = zb(e, t);
  return (a, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    Ye(n, l) && l in a ? n : a,
    l,
    i
  );
}
const jb = {
  get: /* @__PURE__ */ gu(!1, !1)
}, Yb = {
  get: /* @__PURE__ */ gu(!1, !0)
}, Ub = {
  get: /* @__PURE__ */ gu(!0, !1)
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
function wt(e) {
  return /* @__PURE__ */ ma(e) ? e : hu(
    e,
    !1,
    Nb,
    jb,
    cv
  );
}
// @__NO_SIDE_EFFECTS__
function Xb(e) {
  return hu(
    e,
    !1,
    Hb,
    Yb,
    dv
  );
}
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  return hu(
    e,
    !0,
    Rb,
    Ub,
    fv
  );
}
function hu(e, t, n, a, l) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = qb(e);
  if (i === 0)
    return e;
  const o = l.get(e);
  if (o)
    return o;
  const r = new Proxy(
    e,
    i === 2 ? a : n
  );
  return l.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Ba(e) {
  return /* @__PURE__ */ ma(e) ? /* @__PURE__ */ Ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ma(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ve(t) : e;
}
function vv(e) {
  return !Ye(e, "__v_skip") && Object.isExtensible(e) && Kf(e, "__v_skip", !0), e;
}
const Gn = (e) => et(e) ? /* @__PURE__ */ wt(e) : e, ui = (e) => et(e) ? /* @__PURE__ */ Ha(e) : e;
// @__NO_SIDE_EFFECTS__
function ot(e) {
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
  return /* @__PURE__ */ ot(e) ? e : new Zb(e, t);
}
class Zb {
  constructor(t, n) {
    this.dep = new jo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ve(t), this._value = n ? t : Gn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ un(t) || /* @__PURE__ */ ma(t);
    t = a ? t : /* @__PURE__ */ Ve(t), da(t, n) && (this._rawValue = t, this._value = a ? t : Gn(t), this.dep.trigger());
  }
}
function mt(e) {
  return /* @__PURE__ */ ot(e) ? e.value : e;
}
function St(e) {
  return Me(e) ? e() : mt(e);
}
const Jb = {
  get: (e, t, n) => t === "__v_raw" ? e : mt(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return /* @__PURE__ */ ot(l) && !/* @__PURE__ */ ot(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function gv(e) {
  return /* @__PURE__ */ Ba(e) ? e : new Proxy(e, Jb);
}
class Qb {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new jo(), { get: a, set: l } = t(n.track.bind(n), n.trigger.bind(n));
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
function El(e) {
  const t = De(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = hv(e, n);
  return t;
}
class tS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ Ve(t);
    let l = !0, i = t;
    if (!De(t) || !Ho(String(n)))
      do
        l = !/* @__PURE__ */ Di(i) || /* @__PURE__ */ un(i);
      while (l && (i = i.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = mt(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ot(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ot(n)) {
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
  return /* @__PURE__ */ ot(e) ? e : Me(e) ? new nS(e) : et(e) && arguments.length > 1 ? hv(e, t, n) : /* @__PURE__ */ ae(e);
}
function hv(e, t, n) {
  return new tS(e, t, n);
}
class aS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new jo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ri - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Qe !== this)
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
  return Me(e) ? a = e : (a = e.get, l = e.set), new aS(a, l, n);
}
const Zi = {}, yo = /* @__PURE__ */ new WeakMap();
let Ta;
function iS(e, t = !1, n = Ta) {
  if (n) {
    let a = yo.get(n);
    a || yo.set(n, a = []), a.push(e);
  }
}
function oS(e, t, n = Ze) {
  const { immediate: a, deep: l, once: i, scheduler: o, augmentJob: r, call: s } = n, u = (b) => l ? b : /* @__PURE__ */ un(b) || l === !1 || l === 0 ? zn(b, 1) : zn(b);
  let c, d, f, v, k = !1, m = !1;
  if (/* @__PURE__ */ ot(e) ? (d = () => e.value, k = /* @__PURE__ */ un(e)) : /* @__PURE__ */ Ba(e) ? (d = () => u(e), k = !0) : De(e) ? (m = !0, k = e.some((b) => /* @__PURE__ */ Ba(b) || /* @__PURE__ */ un(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ ot(b))
      return b.value;
    if (/* @__PURE__ */ Ba(b))
      return u(b);
    if (Me(b))
      return s ? s(b, 2) : b();
  })) : Me(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      Un();
      try {
        f();
      } finally {
        Kn();
      }
    }
    const b = Ta;
    Ta = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ta = b;
    }
  } : d = In, t && l) {
    const b = d, S = l === !0 ? 1 / 0 : l;
    d = () => zn(b(), S);
  }
  const y = Jf(), h = () => {
    c.stop(), y && y.active && uu(y.effects, c);
  };
  if (i && t) {
    const b = t;
    t = (...S) => {
      b(...S), h();
    };
  }
  let x = m ? new Array(e.length).fill(Zi) : Zi;
  const w = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const S = c.run();
        if (l || k || (m ? S.some((g, I) => da(g, x[I])) : da(S, x))) {
          f && f();
          const g = Ta;
          Ta = c;
          try {
            const I = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === Zi ? void 0 : m && x[0] === Zi ? [] : x,
              v
            ];
            x = S, s ? s(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Ta = g;
          }
        }
      } else
        c.run();
  };
  return r && r(w), c = new Qf(d), c.scheduler = o ? () => o(w, !1) : w, v = (b) => iS(b, !1, c), f = c.onStop = () => {
    const b = yo.get(c);
    if (b) {
      if (s)
        s(b, 4);
      else
        for (const S of b) S();
      yo.delete(c);
    }
  }, t ? a ? w(!0) : x = c.run() : o ? o(w.bind(null, !0), !0) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function zn(e, t = 1 / 0, n) {
  if (t <= 0 || !et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ot(e))
    zn(e.value, t, n);
  else if (De(e))
    for (let a = 0; a < e.length; a++)
      zn(e[a], t, n);
  else if (zf(e) || bl(e))
    e.forEach((a) => {
      zn(a, t, n);
    });
  else if (Uf(e)) {
    for (const a in e)
      zn(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && zn(e[a], t, n);
  }
  return e;
}
function Ei(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Yo(l, t, n);
  }
}
function hn(e, t, n, a) {
  if (Me(e)) {
    const l = Ei(e, t, n, a);
    return l && jf(l) && l.catch((i) => {
      Yo(i, t, n);
    }), l;
  }
  if (De(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(hn(e[i], t, n, a));
    return l;
  }
}
function Yo(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ze;
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
    if (i) {
      Un(), Ei(i, null, 10, [
        e,
        s,
        u
      ]), Kn();
      return;
    }
  }
  rS(e, n, l, a, o);
}
function rS(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Ht = [];
let Vn = -1;
const Sl = [];
let ua = null, fl = 0;
const yv = /* @__PURE__ */ Promise.resolve();
let bo = null;
function Ie(e) {
  const t = bo || yv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sS(e) {
  let t = Vn + 1, n = Ht.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Ht[a], i = ci(l);
    i < e || i === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function yu(e) {
  if (!(e.flags & 1)) {
    const t = ci(e), n = Ht[Ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ci(n) ? Ht.push(e) : Ht.splice(sS(t), 0, e), e.flags |= 1, bv();
  }
}
function bv() {
  bo || (bo = yv.then(kv));
}
function uS(e) {
  De(e) ? Sl.push(...e) : ua && e.id === -1 ? ua.splice(fl + 1, 0, e) : e.flags & 1 || (Sl.push(e), e.flags |= 1), bv();
}
function Nc(e, t, n = Vn + 1) {
  for (; n < Ht.length; n++) {
    const a = Ht[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Ht.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Sv(e) {
  if (Sl.length) {
    const t = [...new Set(Sl)].sort(
      (n, a) => ci(n) - ci(a)
    );
    if (Sl.length = 0, ua) {
      ua.push(...t);
      return;
    }
    for (ua = t, fl = 0; fl < ua.length; fl++) {
      const n = ua[fl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ua = null, fl = 0;
  }
}
const ci = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kv(e) {
  try {
    for (Vn = 0; Vn < Ht.length; Vn++) {
      const t = Ht[Vn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ei(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vn < Ht.length; Vn++) {
      const t = Ht[Vn];
      t && (t.flags &= -2);
    }
    Vn = -1, Ht.length = 0, Sv(), bo = null, (Ht.length || Sl.length) && kv();
  }
}
let qt = null, wv = null;
function So(e) {
  const t = qt;
  return qt = e, wv = e && e.type.__scopeId || null, t;
}
function pv(e, t = qt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && po(-1);
    const i = So(t);
    let o;
    try {
      o = e(...l);
    } finally {
      So(i), a._d && po(1);
    }
    return o;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Ue(e, t) {
  if (qt === null)
    return e;
  const n = Zo(qt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [i, o, r, s = Ze] = t[l];
    i && (Me(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && zn(o), a.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: s
    }));
  }
  return e;
}
function Ca(e, t, n, a) {
  const l = e.dirs, i = t && t.dirs;
  for (let o = 0; o < l.length; o++) {
    const r = l[o];
    i && (r.oldValue = i[o].value);
    let s = r.dir[a];
    s && (Un(), hn(s, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Kn());
  }
}
function Ge(e, t) {
  if (Ft) {
    let n = Ft.provides;
    const a = Ft.parent && Ft.parent.provides;
    a === n && (n = Ft.provides = Object.create(a)), n[e] = t;
  }
}
function Le(e, t, n = !1) {
  const a = Bi();
  if (a || kl) {
    let l = kl ? kl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && Me(t) ? t.call(a && a.proxy) : t;
  }
}
const cS = /* @__PURE__ */ Symbol.for("v-scx"), dS = () => Le(cS);
function tt(e, t) {
  return bu(e, null, t);
}
function ue(e, t, n) {
  return bu(e, t, n);
}
function bu(e, t, n = Ze) {
  const { immediate: a, deep: l, flush: i, once: o } = n, r = kt({}, n), s = t && a || !t && i !== "post";
  let u;
  if (mi) {
    if (i === "sync") {
      const v = dS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = In, v.resume = In, v.pause = In, v;
    }
  }
  const c = Ft;
  r.call = (v, k, m) => hn(v, c, k, m);
  let d = !1;
  i === "post" ? r.scheduler = (v) => {
    Rt(v, c && c.suspense);
  } : i !== "sync" && (d = !0, r.scheduler = (v, k) => {
    k ? v() : yu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = oS(e, t, r);
  return mi && (u ? u.push(f) : s && f()), f;
}
function fS(e, t, n) {
  const a = this.proxy, l = rt(e) ? e.includes(".") ? xv(a, e) : () => a[e] : e.bind(a, a);
  let i;
  Me(t) ? i = t : (i = t.handler, n = t);
  const o = Fi(this), r = bu(l, i.bind(a), n);
  return o(), r;
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
const Cv = /* @__PURE__ */ Symbol("_vte"), Vv = (e) => e.__isTeleport, ei = (e) => e && (e.disabled || e.disabled === ""), Rc = (e) => e && (e.defer || e.defer === ""), Hc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, os = (e, t) => {
  const n = e && e.to;
  return rt(n) ? t ? t(n) : null : n;
}, _v = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, i, o, r, s, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: v, querySelector: k, createText: m, createComment: y }
    } = u, h = ei(t.props);
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
          i,
          o,
          r,
          s
        );
      }, C = () => {
        const T = t.target = os(t.props, k), P = Iv(T, t, m, v);
        T && (o !== "svg" && Hc(T) ? o = "svg" : o !== "mathml" && Wc(T) && (o = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), h || (I(T, P), uo(t, !1)));
      };
      h && (I(n, g), uo(t, !0)), Rc(t.props) ? (t.el.__isMounted = !1, Rt(() => {
        C(), delete t.el.__isMounted;
      }, i)) : C();
    } else {
      if (Rc(t.props) && e.el.__isMounted === !1) {
        Rt(() => {
          _v.process(
            e,
            t,
            n,
            a,
            l,
            i,
            o,
            r,
            s,
            u
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, g = t.target = e.target, I = t.targetAnchor = e.targetAnchor, C = ei(e.props), T = C ? n : g, P = C ? S : I;
      if (o === "svg" || Hc(g) ? o = "svg" : (o === "mathml" || Wc(g)) && (o = "mathml"), b ? (f(
        e.dynamicChildren,
        b,
        T,
        l,
        i,
        o,
        r
      ), xu(e, t, !0)) : s || d(
        e,
        t,
        T,
        P,
        l,
        i,
        o,
        r,
        !1
      ), h)
        C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ji(
          t,
          n,
          S,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = os(
          t.props,
          k
        );
        F && Ji(
          t,
          F,
          null,
          u,
          0
        );
      } else C && Ji(
        t,
        g,
        I,
        u,
        1
      );
      uo(t, h);
    }
  },
  remove(e, t, n, { um: a, o: { remove: l } }, i) {
    const {
      shapeFlag: o,
      children: r,
      anchor: s,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e;
    if (d && (l(u), l(c)), i && l(s), o & 16) {
      const v = i || !ei(f);
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
  move: Ji,
  hydrate: vS
};
function Ji(e, t, n, { o: { insert: a }, m: l }, i = 2) {
  i === 0 && a(e.targetAnchor, t, n);
  const { el: o, anchor: r, shapeFlag: s, children: u, props: c } = e, d = i === 2;
  if (d && a(o, t, n), (!d || ei(c)) && s & 16)
    for (let f = 0; f < u.length; f++)
      l(
        u[f],
        t,
        n,
        2
      );
  d && a(r, t, n);
}
function vS(e, t, n, a, l, i, {
  o: { nextSibling: o, parentNode: r, querySelector: s, insert: u, createText: c }
}, d) {
  function f(m, y, h, x) {
    y.anchor = d(
      o(m),
      y,
      r(m),
      n,
      a,
      l,
      i
    ), y.targetStart = h, y.targetAnchor = x;
  }
  const v = t.target = os(
    t.props,
    s
  ), k = ei(t.props);
  if (v) {
    const m = v._lpa || v.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        f(
          e,
          t,
          m,
          m && o(m)
        );
      else {
        t.anchor = o(e);
        let y = m;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, v._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          y = o(y);
        }
        t.targetAnchor || Iv(v, t, c, u), d(
          m && o(m),
          t,
          v,
          n,
          a,
          l,
          i
        );
      }
    uo(t, k);
  } else k && t.shapeFlag & 16 && f(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const mS = _v;
function uo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Iv(e, t, n, a) {
  const l = t.targetStart = n(""), i = t.targetAnchor = n("");
  return l[Cv] = i, e && (a(l, e), a(i, e)), i;
}
const Rn = /* @__PURE__ */ Symbol("_leaveCb"), Qi = /* @__PURE__ */ Symbol("_enterCb");
function Pv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return gt(() => {
    e.isMounted = !0;
  }), At(() => {
    e.isUnmounting = !0;
  }), e;
}
const rn = [Function, Array], Tv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rn,
  onEnter: rn,
  onAfterEnter: rn,
  onEnterCancelled: rn,
  // leave
  onBeforeLeave: rn,
  onLeave: rn,
  onAfterLeave: rn,
  onLeaveCancelled: rn,
  // appear
  onBeforeAppear: rn,
  onAppear: rn,
  onAfterAppear: rn,
  onAppearCancelled: rn
}, Av = (e) => {
  const t = e.subTree;
  return t.component ? Av(t.component) : t;
}, gS = {
  name: "BaseTransition",
  props: Tv,
  setup(e, { slots: t }) {
    const n = Bi(), a = Pv();
    return () => {
      const l = t.default && Su(t.default(), !0);
      if (!l || !l.length)
        return;
      const i = Dv(l), o = /* @__PURE__ */ Ve(e), { mode: r } = o;
      if (a.isLeaving)
        return Mr(i);
      const s = zc(i);
      if (!s)
        return Mr(i);
      let u = di(
        s,
        o,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      s.type !== jt && Wa(s, u);
      let c = n.subTree && zc(n.subTree);
      if (c && c.type !== jt && !Da(c, s) && Av(n).type !== jt) {
        let d = di(
          c,
          o,
          a,
          n
        );
        if (Wa(c, d), r === "out-in" && s.type !== jt)
          return a.isLeaving = !0, d.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Mr(i);
        r === "in-out" && s.type !== jt ? d.delayLeave = (f, v, k) => {
          const m = Ev(
            a,
            c
          );
          m[String(c.key)] = c, f[Rn] = () => {
            v(), f[Rn] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            k(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Dv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== jt) {
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
function di(e, t, n, a, l) {
  const {
    appear: i,
    mode: o,
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
    T && hn(
      T,
      a,
      9,
      P
    );
  }, I = (T, P) => {
    const F = P[1];
    g(T, P), De(T) ? T.every((A) => A.length <= 1) && F() : T.length <= 1 && F();
  }, C = {
    mode: o,
    persisted: r,
    beforeEnter(T) {
      let P = s;
      if (!n.isMounted)
        if (i)
          P = y || s;
        else
          return;
      T[Rn] && T[Rn](
        !0
        /* cancelled */
      );
      const F = S[b];
      F && Da(e, F) && F.el[Rn] && F.el[Rn](), g(P, [T]);
    },
    enter(T) {
      let P = u, F = c, A = d;
      if (!n.isMounted)
        if (i)
          P = h || u, F = x || c, A = w || d;
        else
          return;
      let B = !1;
      const D = T[Qi] = (L) => {
        B || (B = !0, L ? g(A, [T]) : g(F, [T]), C.delayedLeave && C.delayedLeave(), T[Qi] = void 0);
      };
      P ? I(P, [T, D]) : D();
    },
    leave(T, P) {
      const F = String(e.key);
      if (T[Qi] && T[Qi](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      g(f, [T]);
      let A = !1;
      const B = T[Rn] = (D) => {
        A || (A = !0, P(), D ? g(m, [T]) : g(k, [T]), T[Rn] = void 0, S[F] === e && delete S[F]);
      };
      S[F] = e, v ? I(v, [T, B]) : B();
    },
    clone(T) {
      const P = di(
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
function Mr(e) {
  if (Uo(e))
    return e = qn(e), e.children = null, e;
}
function zc(e) {
  if (!Uo(e))
    return Vv(e.type) && e.children ? Dv(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Me(n.default))
      return n.default();
  }
}
function Wa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Su(e, t = !1, n) {
  let a = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const r = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === he ? (o.patchFlag & 128 && l++, a = a.concat(
      Su(o.children, t, r)
    )) : (t || o.type !== jt) && a.push(r != null ? qn(o, { key: r }) : o);
  }
  if (l > 1)
    for (let i = 0; i < a.length; i++)
      a[i].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Mv(e, t) {
  return Me(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    kt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Tt() {
  const e = Bi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Bv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ko = /* @__PURE__ */ new WeakMap();
function ti(e, t, n, a, l = !1) {
  if (De(e)) {
    e.forEach(
      (k, m) => ti(
        k,
        t && (De(t) ? t[m] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (ni(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && ti(e, t, n, a.component.subTree);
    return;
  }
  const i = a.shapeFlag & 4 ? Zo(a.component) : a.el, o = l ? null : i, { i: r, r: s } = e, u = t && t.r, c = r.refs === Ze ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ Ve(d), v = d === Ze ? Wf : (k) => Ye(f, k);
  if (u != null && u !== s) {
    if (jc(t), rt(u))
      c[u] = null, v(u) && (d[u] = null);
    else if (/* @__PURE__ */ ot(u)) {
      u.value = null;
      const k = t;
      k.k && (c[k.k] = null);
    }
  }
  if (Me(s))
    Ei(s, r, 12, [o, c]);
  else {
    const k = rt(s), m = /* @__PURE__ */ ot(s);
    if (k || m) {
      const y = () => {
        if (e.f) {
          const h = k ? v(s) ? d[s] : c[s] : s.value;
          if (l)
            De(h) && uu(h, i);
          else if (De(h))
            h.includes(i) || h.push(i);
          else if (k)
            c[s] = [i], v(s) && (d[s] = c[s]);
          else {
            const x = [i];
            s.value = x, e.k && (c[e.k] = x);
          }
        } else k ? (c[s] = o, v(s) && (d[s] = o)) : m && (s.value = o, e.k && (c[e.k] = o));
      };
      if (o) {
        const h = () => {
          y(), ko.delete(e);
        };
        h.id = -1, ko.set(e, h), Rt(h, n);
      } else
        jc(e), y();
    }
  }
}
function jc(e) {
  const t = ko.get(e);
  t && (t.flags |= 8, ko.delete(e));
}
zo().requestIdleCallback;
zo().cancelIdleCallback;
const ni = (e) => !!e.type.__asyncLoader, Uo = (e) => e.type.__isKeepAlive;
function Fv(e, t) {
  Lv(e, "a", t);
}
function ku(e, t) {
  Lv(e, "da", t);
}
function Lv(e, t, n = Ft) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Ko(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      Uo(l.parent.vnode) && yS(a, t, n, l), l = l.parent;
  }
}
function yS(e, t, n, a) {
  const l = Ko(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  qo(() => {
    uu(a[t], l);
  }, n);
}
function Ko(e, t, n = Ft, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Un();
      const r = Fi(n), s = hn(t, n, e, o);
      return r(), Kn(), s;
    });
    return a ? l.unshift(i) : l.push(i), i;
  }
}
const Jn = (e) => (t, n = Ft) => {
  (!mi || e === "sp") && Ko(e, (...a) => t(...a), n);
}, Ml = Jn("bm"), gt = Jn("m"), $v = Jn(
  "bu"
), Go = Jn("u"), At = Jn(
  "bum"
), qo = Jn("um"), bS = Jn(
  "sp"
), SS = Jn("rtg"), kS = Jn("rtc");
function wS(e, t = Ft) {
  Ko("ec", e, t);
}
const Ov = "components";
function Nv(e, t) {
  return Rv(Ov, e, !0, t) || e;
}
const pS = /* @__PURE__ */ Symbol.for("v-ndc");
function xS(e) {
  return rt(e) && Rv(Ov, e, !1) || e;
}
function Rv(e, t, n = !0, a = !1) {
  const l = qt || Ft;
  if (l) {
    const i = l.type;
    {
      const r = sk(
        i,
        !1
      );
      if (r && (r === t || r === Wt(t) || r === Mn(Wt(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yc(l[e] || i[e], t) || // global registration
      Yc(l.appContext[e], t)
    );
    return !o && a ? i : o;
  }
}
function Yc(e, t) {
  return e && (e[t] || e[Wt(t)] || e[Mn(Wt(t))]);
}
const rs = (e) => e ? lm(e) ? Zo(e) : rs(e.parent) : null, ai = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ kt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wv(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ie.bind(e.proxy)),
    $watch: (e) => fS.bind(e)
  })
), Br = (e, t) => e !== Ze && !e.__isScriptSetup && Ye(e, t), CS = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: a, data: l, props: i, accessCache: o, type: r, appContext: s } = e;
    if (t[0] !== "$") {
      const f = o[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Br(a, t))
          return o[t] = 1, a[t];
        if (l !== Ze && Ye(l, t))
          return o[t] = 2, l[t];
        if (Ye(i, t))
          return o[t] = 3, i[t];
        if (n !== Ze && Ye(n, t))
          return o[t] = 4, n[t];
        ss && (o[t] = 0);
      }
    }
    const u = ai[t];
    let c, d;
    if (u)
      return t === "$attrs" && Bt(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = r.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ze && Ye(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = s.config.globalProperties, Ye(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: i } = e;
    return Br(l, t) ? (l[t] = n, !0) : a !== Ze && Ye(a, t) ? (a[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: i, type: o }
  }, r) {
    let s;
    return !!(n[r] || e !== Ze && r[0] !== "$" && Ye(e, r) || Br(t, r) || Ye(i, r) || Ye(a, r) || Ye(ai, r) || Ye(l.config.globalProperties, r) || (s = o.__cssModules) && s[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Uc(e) {
  return De(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ss = !0;
function VS(e) {
  const t = Wv(e), n = e.proxy, a = e.ctx;
  ss = !1, t.beforeCreate && Kc(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: o,
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
  if (u && _S(u, a, null), o)
    for (const R in o) {
      const Q = o[R];
      Me(Q) && (a[R] = Q.bind(n));
    }
  if (l) {
    const R = l.call(n, n);
    et(R) && (e.data = /* @__PURE__ */ wt(R));
  }
  if (ss = !0, i)
    for (const R in i) {
      const Q = i[R], q = Me(Q) ? Q.bind(n, n) : Me(Q.get) ? Q.get.bind(n, n) : In, O = !Me(Q) && Me(Q.set) ? Q.set.bind(n) : In, ne = _({
        get: q,
        set: O
      });
      Object.defineProperty(a, R, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (K) => ne.value = K
      });
    }
  if (r)
    for (const R in r)
      Hv(r[R], a, n, R);
  if (s) {
    const R = Me(s) ? s.call(n) : s;
    Reflect.ownKeys(R).forEach((Q) => {
      Ge(Q, R[Q]);
    });
  }
  c && Kc(c, e, "c");
  function W(R, Q) {
    De(Q) ? Q.forEach((q) => R(q.bind(n))) : Q && R(Q.bind(n));
  }
  if (W(Ml, d), W(gt, f), W($v, v), W(Go, k), W(Fv, m), W(ku, y), W(wS, C), W(kS, g), W(SS, I), W(At, x), W(qo, b), W(bS, T), De(P))
    if (P.length) {
      const R = e.exposed || (e.exposed = {});
      P.forEach((Q) => {
        Object.defineProperty(R, Q, {
          get: () => n[Q],
          set: (q) => n[Q] = q,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === In && (e.render = S), F != null && (e.inheritAttrs = F), A && (e.components = A), B && (e.directives = B), T && Bv(e);
}
function _S(e, t, n = In) {
  De(e) && (e = us(e));
  for (const a in e) {
    const l = e[a];
    let i;
    et(l) ? "default" in l ? i = Le(
      l.from || a,
      l.default,
      !0
    ) : i = Le(l.from || a) : i = Le(l), /* @__PURE__ */ ot(i) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[a] = i;
  }
}
function Kc(e, t, n) {
  hn(
    De(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hv(e, t, n, a) {
  let l = a.includes(".") ? xv(n, a) : () => n[a];
  if (rt(e)) {
    const i = t[e];
    Me(i) && ue(l, i);
  } else if (Me(e))
    ue(l, e.bind(n));
  else if (et(e))
    if (De(e))
      e.forEach((i) => Hv(i, t, n, a));
    else {
      const i = Me(e.handler) ? e.handler.bind(n) : t[e.handler];
      Me(i) && ue(l, i, e);
    }
}
function Wv(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, r = i.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach(
    (u) => wo(s, u, o, !0)
  ), wo(s, t, o)), et(t) && i.set(t, s), s;
}
function wo(e, t, n, a = !1) {
  const { mixins: l, extends: i } = t;
  i && wo(e, i, n, !0), l && l.forEach(
    (o) => wo(e, o, n, !0)
  );
  for (const o in t)
    if (!(a && o === "expose")) {
      const r = IS[o] || n && n[o];
      e[o] = r ? r(e[o], t[o]) : t[o];
    }
  return e;
}
const IS = {
  data: Gc,
  props: qc,
  emits: qc,
  // objects
  methods: Gl,
  computed: Gl,
  // lifecycle
  beforeCreate: Nt,
  created: Nt,
  beforeMount: Nt,
  mounted: Nt,
  beforeUpdate: Nt,
  updated: Nt,
  beforeDestroy: Nt,
  beforeUnmount: Nt,
  destroyed: Nt,
  unmounted: Nt,
  activated: Nt,
  deactivated: Nt,
  errorCaptured: Nt,
  serverPrefetch: Nt,
  // assets
  components: Gl,
  directives: Gl,
  // watch
  watch: TS,
  // provide / inject
  provide: Gc,
  inject: PS
};
function Gc(e, t) {
  return t ? e ? function() {
    return kt(
      Me(e) ? e.call(this, this) : e,
      Me(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function PS(e, t) {
  return Gl(us(e), us(t));
}
function us(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gl(e, t) {
  return e ? kt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qc(e, t) {
  return e ? De(e) && De(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : kt(
    /* @__PURE__ */ Object.create(null),
    Uc(e),
    Uc(t ?? {})
  ) : t;
}
function TS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = kt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = Nt(e[a], t[a]);
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
    Me(a) || (a = kt({}, a)), l != null && !et(l) && (l = null);
    const i = zv(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let s = !1;
    const u = i.app = {
      _uid: AS++,
      _component: a,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: ck,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return o.has(c) || (c && Me(c.install) ? (o.add(c), c.install(u, ...d)) : Me(c) && (o.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return d ? (i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, f) {
        if (!s) {
          const v = u._ceVNode || p(a, l);
          return v.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(v, c, f), s = !0, u._container = c, c.__vue_app__ = u, Zo(v.component);
        }
      },
      onUnmount(c) {
        r.push(c);
      },
      unmount() {
        s && (hn(
          r,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = kl;
        kl = u;
        try {
          return c();
        } finally {
          kl = d;
        }
      }
    };
    return u;
  };
}
let kl = null;
const ES = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Wt(t)}Modifiers`] || e[`${Za(t)}Modifiers`];
function MS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Ze;
  let l = n;
  const i = t.startsWith("update:"), o = i && ES(a, t.slice(7));
  o && (o.trim && (l = n.map((c) => rt(c) ? c.trim() : c)), o.number && (l = n.map(cu)));
  let r, s = a[r = Pr(t)] || // also try camelCase event handler (#2249)
  a[r = Pr(Wt(t))];
  !s && i && (s = a[r = Pr(Za(t))]), s && hn(
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
    e.emitted[r] = !0, hn(
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
  const i = e.emits;
  let o = {}, r = !1;
  if (!Me(e)) {
    const s = (u) => {
      const c = jv(u, t, !0);
      c && (r = !0, kt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !r ? (et(e) && a.set(e, null), null) : (De(i) ? i.forEach((s) => o[s] = null) : kt(o, i), et(e) && a.set(e, o), o);
}
function Xo(e, t) {
  return !e || !No(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Za(t)) || Ye(e, t));
}
function Xc(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    propsOptions: [i],
    slots: o,
    attrs: r,
    emit: s,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: v,
    ctx: k,
    inheritAttrs: m
  } = e, y = So(e);
  let h, x;
  try {
    if (n.shapeFlag & 4) {
      const b = l || a, S = b;
      h = _n(
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
      h = _n(
        b.length > 1 ? b(
          d,
          { attrs: r, slots: o, emit: s }
        ) : b(
          d,
          null
        )
      ), x = t.props ? r : FS(r);
    }
  } catch (b) {
    li.length = 0, Yo(b, e, 1), h = p(jt);
  }
  let w = h;
  if (x && m !== !1) {
    const b = Object.keys(x), { shapeFlag: S } = w;
    b.length && S & 7 && (i && b.some(su) && (x = LS(
      x,
      i
    )), w = qn(w, x, !1, !0));
  }
  return n.dirs && (w = qn(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && Wa(w, n.transition), h = w, So(y), h;
}
const FS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || No(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, LS = (e, t) => {
  const n = {};
  for (const a in e)
    (!su(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function $S(e, t, n) {
  const { props: a, children: l, component: i } = e, { props: o, children: r, patchFlag: s } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return a ? Zc(a, o, u) : !!o;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (o[f] !== a[f] && !Xo(u, f))
          return !0;
      }
    }
  } else
    return (l || r) && (!r || !r.$stable) ? !0 : a === o ? !1 : a ? o ? Zc(a, o, u) : !0 : !!o;
  return !1;
}
function Zc(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const i = a[l];
    if (t[i] !== e[i] && !Xo(n, i))
      return !0;
  }
  return !1;
}
function OS({ vnode: e, parent: t }, n) {
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
  const l = {}, i = Uv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gv(e, t, l, i);
  for (const o in e.propsOptions[0])
    o in l || (l[o] = void 0);
  n ? e.props = a ? l : /* @__PURE__ */ Xb(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function RS(e, t, n, a) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ Ve(l), [s] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Xo(e.emitsOptions, f))
          continue;
        const v = t[f];
        if (s)
          if (Ye(i, f))
            v !== i[f] && (i[f] = v, u = !0);
          else {
            const k = Wt(f);
            l[k] = cs(
              s,
              r,
              k,
              v,
              e,
              !1
            );
          }
        else
          v !== i[f] && (i[f] = v, u = !0);
      }
    }
  } else {
    Gv(e, t, l, i) && (u = !0);
    let c;
    for (const d in r)
      (!t || // for camelCase
      !Ye(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Za(d)) === d || !Ye(t, c))) && (s ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (l[d] = cs(
        s,
        r,
        d,
        void 0,
        e,
        !0
      )) : delete l[d]);
    if (i !== r)
      for (const d in i)
        (!t || !Ye(t, d)) && (delete i[d], u = !0);
  }
  u && Wn(e.attrs, "set", "");
}
function Gv(e, t, n, a) {
  const [l, i] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let s in t) {
      if (Zl(s))
        continue;
      const u = t[s];
      let c;
      l && Ye(l, c = Wt(s)) ? !i || !i.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Xo(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, o = !0);
    }
  if (i) {
    const s = /* @__PURE__ */ Ve(n), u = r || Ze;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = cs(
        l,
        s,
        d,
        u[d],
        e,
        !Ye(u, d)
      );
    }
  }
  return o;
}
function cs(e, t, n, a, l, i) {
  const o = e[n];
  if (o != null) {
    const r = Ye(o, "default");
    if (r && a === void 0) {
      const s = o.default;
      if (o.type !== Function && !o.skipFactory && Me(s)) {
        const { propsDefaults: u } = l;
        if (n in u)
          a = u[n];
        else {
          const c = Fi(l);
          a = u[n] = s.call(
            null,
            t
          ), c();
        }
      } else
        a = s;
      l.ce && l.ce._setProp(n, a);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !r ? a = !1 : o[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Za(n)) && (a = !0));
  }
  return a;
}
const HS = /* @__PURE__ */ new WeakMap();
function qv(e, t, n = !1) {
  const a = n ? HS : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const i = e.props, o = {}, r = [];
  let s = !1;
  if (!Me(e)) {
    const c = (d) => {
      s = !0;
      const [f, v] = qv(d, t, !0);
      kt(o, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s)
    return et(e) && a.set(e, yl), yl;
  if (De(i))
    for (let c = 0; c < i.length; c++) {
      const d = Wt(i[c]);
      Jc(d) && (o[d] = Ze);
    }
  else if (i)
    for (const c in i) {
      const d = Wt(c);
      if (Jc(d)) {
        const f = i[c], v = o[d] = De(f) || Me(f) ? { type: f } : kt({}, f), k = v.type;
        let m = !1, y = !0;
        if (De(k))
          for (let h = 0; h < k.length; ++h) {
            const x = k[h], w = Me(x) && x.name;
            if (w === "Boolean") {
              m = !0;
              break;
            } else w === "String" && (y = !1);
          }
        else
          m = Me(k) && k.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = m, v[
          1
          /* shouldCastTrue */
        ] = y, (m || Ye(v, "default")) && r.push(d);
      }
    }
  const u = [o, r];
  return et(e) && a.set(e, u), u;
}
function Jc(e) {
  return e[0] !== "$" && !Zl(e);
}
const wu = (e) => e === "_" || e === "_ctx" || e === "$stable", pu = (e) => De(e) ? e.map(_n) : [_n(e)], WS = (e, t, n) => {
  if (t._n)
    return t;
  const a = pv((...l) => pu(t(...l)), n);
  return a._c = !1, a;
}, Xv = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (wu(l)) continue;
    const i = e[l];
    if (Me(i))
      t[l] = WS(l, i, a);
    else if (i != null) {
      const o = pu(i);
      t[l] = () => o;
    }
  }
}, Zv = (e, t) => {
  const n = pu(t);
  e.slots.default = () => n;
}, Jv = (e, t, n) => {
  for (const a in t)
    (n || !wu(a)) && (e[a] = t[a]);
}, zS = (e, t, n) => {
  const a = e.slots = Uv();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Jv(a, t, n), n && Kf(a, "_", l, !0)) : Xv(t, a);
  } else t && Zv(e, t);
}, jS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let i = !0, o = Ze;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : Jv(l, t, n) : (i = !t.$stable, Xv(t, l)), o = t;
  } else t && (Zv(e, t), o = { default: 1 });
  if (i)
    for (const r in l)
      !wu(r) && o[r] == null && delete l[r];
}, Rt = qS;
function YS(e) {
  return US(e);
}
function US(e, t) {
  const n = zo();
  n.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: i,
    createElement: o,
    createText: r,
    createComment: s,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: v = In,
    insertStaticContent: k
  } = e, m = (M, $, j, re = null, z = null, oe = null, me = void 0, Y = null, le = !!$.dynamicChildren) => {
    if (M === $)
      return;
    M && !Da(M, $) && (re = Z(M), K(M, z, oe, !0), M = null), $.patchFlag === -2 && (le = !1, $.dynamicChildren = null);
    const { type: ie, ref: ge, shapeFlag: ye } = $;
    switch (ie) {
      case Mi:
        y(M, $, j, re);
        break;
      case jt:
        h(M, $, j, re);
        break;
      case Lr:
        M == null && x($, j, re, me);
        break;
      case he:
        A(
          M,
          $,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le
        );
        break;
      default:
        ye & 1 ? S(
          M,
          $,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le
        ) : ye & 6 ? B(
          M,
          $,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le
        ) : (ye & 64 || ye & 128) && ie.process(
          M,
          $,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le,
          Ce
        );
    }
    ge != null && z ? ti(ge, M && M.ref, oe, $ || M, !$) : ge == null && M && M.ref != null && ti(M.ref, null, oe, M, !0);
  }, y = (M, $, j, re) => {
    if (M == null)
      a(
        $.el = r($.children),
        j,
        re
      );
    else {
      const z = $.el = M.el;
      $.children !== M.children && u(z, $.children);
    }
  }, h = (M, $, j, re) => {
    M == null ? a(
      $.el = s($.children || ""),
      j,
      re
    ) : $.el = M.el;
  }, x = (M, $, j, re) => {
    [M.el, M.anchor] = k(
      M.children,
      $,
      j,
      re,
      M.el,
      M.anchor
    );
  }, w = ({ el: M, anchor: $ }, j, re) => {
    let z;
    for (; M && M !== $; )
      z = f(M), a(M, j, re), M = z;
    a($, j, re);
  }, b = ({ el: M, anchor: $ }) => {
    let j;
    for (; M && M !== $; )
      j = f(M), l(M), M = j;
    l($);
  }, S = (M, $, j, re, z, oe, me, Y, le) => {
    if ($.type === "svg" ? me = "svg" : $.type === "math" && (me = "mathml"), M == null)
      g(
        $,
        j,
        re,
        z,
        oe,
        me,
        Y,
        le
      );
    else {
      const ie = M.el && M.el._isVueCE ? M.el : null;
      try {
        ie && ie._beginPatch(), T(
          M,
          $,
          z,
          oe,
          me,
          Y,
          le
        );
      } finally {
        ie && ie._endPatch();
      }
    }
  }, g = (M, $, j, re, z, oe, me, Y) => {
    let le, ie;
    const { props: ge, shapeFlag: ye, transition: Se, dirs: we } = M;
    if (le = M.el = o(
      M.type,
      oe,
      ge && ge.is,
      ge
    ), ye & 8 ? c(le, M.children) : ye & 16 && C(
      M.children,
      le,
      null,
      re,
      z,
      Fr(M, oe),
      me,
      Y
    ), we && Ca(M, null, re, "created"), I(le, M, M.scopeId, me, re), ge) {
      for (const Be in ge)
        Be !== "value" && !Zl(Be) && i(le, Be, null, ge[Be], oe, re);
      "value" in ge && i(le, "value", null, ge.value, oe), (ie = ge.onVnodeBeforeMount) && xn(ie, re, M);
    }
    we && Ca(M, null, re, "beforeMount");
    const Ae = KS(z, Se);
    Ae && Se.beforeEnter(le), a(le, $, j), ((ie = ge && ge.onVnodeMounted) || Ae || we) && Rt(() => {
      ie && xn(ie, re, M), Ae && Se.enter(le), we && Ca(M, null, re, "mounted");
    }, z);
  }, I = (M, $, j, re, z) => {
    if (j && v(M, j), re)
      for (let oe = 0; oe < re.length; oe++)
        v(M, re[oe]);
    if (z) {
      let oe = z.subTree;
      if ($ === oe || tm(oe.type) && (oe.ssContent === $ || oe.ssFallback === $)) {
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
  }, C = (M, $, j, re, z, oe, me, Y, le = 0) => {
    for (let ie = le; ie < M.length; ie++) {
      const ge = M[ie] = Y ? ca(M[ie]) : _n(M[ie]);
      m(
        null,
        ge,
        $,
        j,
        re,
        z,
        oe,
        me,
        Y
      );
    }
  }, T = (M, $, j, re, z, oe, me) => {
    const Y = $.el = M.el;
    let { patchFlag: le, dynamicChildren: ie, dirs: ge } = $;
    le |= M.patchFlag & 16;
    const ye = M.props || Ze, Se = $.props || Ze;
    let we;
    if (j && Va(j, !1), (we = Se.onVnodeBeforeUpdate) && xn(we, j, $, M), ge && Ca($, M, j, "beforeUpdate"), j && Va(j, !0), (ye.innerHTML && Se.innerHTML == null || ye.textContent && Se.textContent == null) && c(Y, ""), ie ? P(
      M.dynamicChildren,
      ie,
      Y,
      j,
      re,
      Fr($, z),
      oe
    ) : me || Q(
      M,
      $,
      Y,
      null,
      j,
      re,
      Fr($, z),
      oe,
      !1
    ), le > 0) {
      if (le & 16)
        F(Y, ye, Se, j, z);
      else if (le & 2 && ye.class !== Se.class && i(Y, "class", null, Se.class, z), le & 4 && i(Y, "style", ye.style, Se.style, z), le & 8) {
        const Ae = $.dynamicProps;
        for (let Be = 0; Be < Ae.length; Be++) {
          const Oe = Ae[Be], bt = ye[Oe], Xe = Se[Oe];
          (Xe !== bt || Oe === "value") && i(Y, Oe, bt, Xe, z, j);
        }
      }
      le & 1 && M.children !== $.children && c(Y, $.children);
    } else !me && ie == null && F(Y, ye, Se, j, z);
    ((we = Se.onVnodeUpdated) || ge) && Rt(() => {
      we && xn(we, j, $, M), ge && Ca($, M, j, "updated");
    }, re);
  }, P = (M, $, j, re, z, oe, me) => {
    for (let Y = 0; Y < $.length; Y++) {
      const le = M[Y], ie = $[Y], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Da(le, ie) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? d(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      m(
        le,
        ie,
        ge,
        null,
        re,
        z,
        oe,
        me,
        !0
      );
    }
  }, F = (M, $, j, re, z) => {
    if ($ !== j) {
      if ($ !== Ze)
        for (const oe in $)
          !Zl(oe) && !(oe in j) && i(
            M,
            oe,
            $[oe],
            null,
            z,
            re
          );
      for (const oe in j) {
        if (Zl(oe)) continue;
        const me = j[oe], Y = $[oe];
        me !== Y && oe !== "value" && i(M, oe, Y, me, z, re);
      }
      "value" in j && i(M, "value", $.value, j.value, z);
    }
  }, A = (M, $, j, re, z, oe, me, Y, le) => {
    const ie = $.el = M ? M.el : r(""), ge = $.anchor = M ? M.anchor : r("");
    let { patchFlag: ye, dynamicChildren: Se, slotScopeIds: we } = $;
    we && (Y = Y ? Y.concat(we) : we), M == null ? (a(ie, j, re), a(ge, j, re), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      $.children || [],
      j,
      ge,
      z,
      oe,
      me,
      Y,
      le
    )) : ye > 0 && ye & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    M.dynamicChildren && M.dynamicChildren.length === Se.length ? (P(
      M.dynamicChildren,
      Se,
      j,
      z,
      oe,
      me,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    ($.key != null || z && $ === z.subTree) && xu(
      M,
      $,
      !0
      /* shallow */
    )) : Q(
      M,
      $,
      j,
      ge,
      z,
      oe,
      me,
      Y,
      le
    );
  }, B = (M, $, j, re, z, oe, me, Y, le) => {
    $.slotScopeIds = Y, M == null ? $.shapeFlag & 512 ? z.ctx.activate(
      $,
      j,
      re,
      me,
      le
    ) : D(
      $,
      j,
      re,
      z,
      oe,
      me,
      le
    ) : L(M, $, le);
  }, D = (M, $, j, re, z, oe, me) => {
    const Y = M.component = ak(
      M,
      re,
      z
    );
    if (Uo(M) && (Y.ctx.renderer = Ce), lk(Y, !1, me), Y.asyncDep) {
      if (z && z.registerDep(Y, W, me), !M.el) {
        const le = Y.subTree = p(jt);
        h(null, le, $, j), M.placeholder = le.el;
      }
    } else
      W(
        Y,
        M,
        $,
        j,
        z,
        oe,
        me
      );
  }, L = (M, $, j) => {
    const re = $.component = M.component;
    if ($S(M, $, j))
      if (re.asyncDep && !re.asyncResolved) {
        R(re, $, j);
        return;
      } else
        re.next = $, re.update();
    else
      $.el = M.el, re.vnode = $;
  }, W = (M, $, j, re, z, oe, me) => {
    const Y = () => {
      if (M.isMounted) {
        let { next: ye, bu: Se, u: we, parent: Ae, vnode: Be } = M;
        {
          const wn = Qv(M);
          if (wn) {
            ye && (ye.el = Be.el, R(M, ye, me)), wn.asyncDep.then(() => {
              M.isUnmounted || Y();
            });
            return;
          }
        }
        let Oe = ye, bt;
        Va(M, !1), ye ? (ye.el = Be.el, R(M, ye, me)) : ye = Be, Se && so(Se), (bt = ye.props && ye.props.onVnodeBeforeUpdate) && xn(bt, Ae, ye, Be), Va(M, !0);
        const Xe = Xc(M), on = M.subTree;
        M.subTree = Xe, m(
          on,
          Xe,
          // parent may have changed if it's in a teleport
          d(on.el),
          // anchor may have changed if it's in a fragment
          Z(on),
          M,
          z,
          oe
        ), ye.el = Xe.el, Oe === null && OS(M, Xe.el), we && Rt(we, z), (bt = ye.props && ye.props.onVnodeUpdated) && Rt(
          () => xn(bt, Ae, ye, Be),
          z
        );
      } else {
        let ye;
        const { el: Se, props: we } = $, { bm: Ae, m: Be, parent: Oe, root: bt, type: Xe } = M, on = ni($);
        Va(M, !1), Ae && so(Ae), !on && (ye = we && we.onVnodeBeforeMount) && xn(ye, Oe, $), Va(M, !0);
        {
          bt.ce && // @ts-expect-error _def is private
          bt.ce._def.shadowRoot !== !1 && bt.ce._injectChildStyle(Xe);
          const wn = M.subTree = Xc(M);
          m(
            null,
            wn,
            j,
            re,
            M,
            z,
            oe
          ), $.el = wn.el;
        }
        if (Be && Rt(Be, z), !on && (ye = we && we.onVnodeMounted)) {
          const wn = $;
          Rt(
            () => xn(ye, Oe, wn),
            z
          );
        }
        ($.shapeFlag & 256 || Oe && ni(Oe.vnode) && Oe.vnode.shapeFlag & 256) && M.a && Rt(M.a, z), M.isMounted = !0, $ = j = re = null;
      }
    };
    M.scope.on();
    const le = M.effect = new Qf(Y);
    M.scope.off();
    const ie = M.update = le.run.bind(le), ge = M.job = le.runIfDirty.bind(le);
    ge.i = M, ge.id = M.uid, le.scheduler = () => yu(ge), Va(M, !0), ie();
  }, R = (M, $, j) => {
    $.component = M;
    const re = M.vnode.props;
    M.vnode = $, M.next = null, RS(M, $.props, re, j), jS(M, $.children, j), Un(), Nc(M), Kn();
  }, Q = (M, $, j, re, z, oe, me, Y, le = !1) => {
    const ie = M && M.children, ge = M ? M.shapeFlag : 0, ye = $.children, { patchFlag: Se, shapeFlag: we } = $;
    if (Se > 0) {
      if (Se & 128) {
        O(
          ie,
          ye,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le
        );
        return;
      } else if (Se & 256) {
        q(
          ie,
          ye,
          j,
          re,
          z,
          oe,
          me,
          Y,
          le
        );
        return;
      }
    }
    we & 8 ? (ge & 16 && ve(ie, z, oe), ye !== ie && c(j, ye)) : ge & 16 ? we & 16 ? O(
      ie,
      ye,
      j,
      re,
      z,
      oe,
      me,
      Y,
      le
    ) : ve(ie, z, oe, !0) : (ge & 8 && c(j, ""), we & 16 && C(
      ye,
      j,
      re,
      z,
      oe,
      me,
      Y,
      le
    ));
  }, q = (M, $, j, re, z, oe, me, Y, le) => {
    M = M || yl, $ = $ || yl;
    const ie = M.length, ge = $.length, ye = Math.min(ie, ge);
    let Se;
    for (Se = 0; Se < ye; Se++) {
      const we = $[Se] = le ? ca($[Se]) : _n($[Se]);
      m(
        M[Se],
        we,
        j,
        null,
        z,
        oe,
        me,
        Y,
        le
      );
    }
    ie > ge ? ve(
      M,
      z,
      oe,
      !0,
      !1,
      ye
    ) : C(
      $,
      j,
      re,
      z,
      oe,
      me,
      Y,
      le,
      ye
    );
  }, O = (M, $, j, re, z, oe, me, Y, le) => {
    let ie = 0;
    const ge = $.length;
    let ye = M.length - 1, Se = ge - 1;
    for (; ie <= ye && ie <= Se; ) {
      const we = M[ie], Ae = $[ie] = le ? ca($[ie]) : _n($[ie]);
      if (Da(we, Ae))
        m(
          we,
          Ae,
          j,
          null,
          z,
          oe,
          me,
          Y,
          le
        );
      else
        break;
      ie++;
    }
    for (; ie <= ye && ie <= Se; ) {
      const we = M[ye], Ae = $[Se] = le ? ca($[Se]) : _n($[Se]);
      if (Da(we, Ae))
        m(
          we,
          Ae,
          j,
          null,
          z,
          oe,
          me,
          Y,
          le
        );
      else
        break;
      ye--, Se--;
    }
    if (ie > ye) {
      if (ie <= Se) {
        const we = Se + 1, Ae = we < ge ? $[we].el : re;
        for (; ie <= Se; )
          m(
            null,
            $[ie] = le ? ca($[ie]) : _n($[ie]),
            j,
            Ae,
            z,
            oe,
            me,
            Y,
            le
          ), ie++;
      }
    } else if (ie > Se)
      for (; ie <= ye; )
        K(M[ie], z, oe, !0), ie++;
    else {
      const we = ie, Ae = ie, Be = /* @__PURE__ */ new Map();
      for (ie = Ae; ie <= Se; ie++) {
        const Kt = $[ie] = le ? ca($[ie]) : _n($[ie]);
        Kt.key != null && Be.set(Kt.key, ie);
      }
      let Oe, bt = 0;
      const Xe = Se - Ae + 1;
      let on = !1, wn = 0;
      const Wl = new Array(Xe);
      for (ie = 0; ie < Xe; ie++) Wl[ie] = 0;
      for (ie = we; ie <= ye; ie++) {
        const Kt = M[ie];
        if (bt >= Xe) {
          K(Kt, z, oe, !0);
          continue;
        }
        let pn;
        if (Kt.key != null)
          pn = Be.get(Kt.key);
        else
          for (Oe = Ae; Oe <= Se; Oe++)
            if (Wl[Oe - Ae] === 0 && Da(Kt, $[Oe])) {
              pn = Oe;
              break;
            }
        pn === void 0 ? K(Kt, z, oe, !0) : (Wl[pn - Ae] = ie + 1, pn >= wn ? wn = pn : on = !0, m(
          Kt,
          $[pn],
          j,
          null,
          z,
          oe,
          me,
          Y,
          le
        ), bt++);
      }
      const Mc = on ? GS(Wl) : yl;
      for (Oe = Mc.length - 1, ie = Xe - 1; ie >= 0; ie--) {
        const Kt = Ae + ie, pn = $[Kt], Bc = $[Kt + 1], Fc = Kt + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bc.el || em(Bc)
        ) : re;
        Wl[ie] === 0 ? m(
          null,
          pn,
          j,
          Fc,
          z,
          oe,
          me,
          Y,
          le
        ) : on && (Oe < 0 || ie !== Mc[Oe] ? ne(pn, j, Fc, 2) : Oe--);
      }
    }
  }, ne = (M, $, j, re, z = null) => {
    const { el: oe, type: me, transition: Y, children: le, shapeFlag: ie } = M;
    if (ie & 6) {
      ne(M.component.subTree, $, j, re);
      return;
    }
    if (ie & 128) {
      M.suspense.move($, j, re);
      return;
    }
    if (ie & 64) {
      me.move(M, $, j, Ce);
      return;
    }
    if (me === he) {
      a(oe, $, j);
      for (let ye = 0; ye < le.length; ye++)
        ne(le[ye], $, j, re);
      a(M.anchor, $, j);
      return;
    }
    if (me === Lr) {
      w(M, $, j);
      return;
    }
    if (re !== 2 && ie & 1 && Y)
      if (re === 0)
        Y.beforeEnter(oe), a(oe, $, j), Rt(() => Y.enter(oe), z);
      else {
        const { leave: ye, delayLeave: Se, afterLeave: we } = Y, Ae = () => {
          M.ctx.isUnmounted ? l(oe) : a(oe, $, j);
        }, Be = () => {
          oe._isLeaving && oe[Rn](
            !0
            /* cancelled */
          ), ye(oe, () => {
            Ae(), we && we();
          });
        };
        Se ? Se(oe, Ae, Be) : Be();
      }
    else
      a(oe, $, j);
  }, K = (M, $, j, re = !1, z = !1) => {
    const {
      type: oe,
      props: me,
      ref: Y,
      children: le,
      dynamicChildren: ie,
      shapeFlag: ge,
      patchFlag: ye,
      dirs: Se,
      cacheIndex: we
    } = M;
    if (ye === -2 && (z = !1), Y != null && (Un(), ti(Y, null, j, M, !0), Kn()), we != null && ($.renderCache[we] = void 0), ge & 256) {
      $.ctx.deactivate(M);
      return;
    }
    const Ae = ge & 1 && Se, Be = !ni(M);
    let Oe;
    if (Be && (Oe = me && me.onVnodeBeforeUnmount) && xn(Oe, $, M), ge & 6)
      X(M.component, j, re);
    else {
      if (ge & 128) {
        M.suspense.unmount(j, re);
        return;
      }
      Ae && Ca(M, null, $, "beforeUnmount"), ge & 64 ? M.type.remove(
        M,
        $,
        j,
        Ce,
        re
      ) : ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (oe !== he || ye > 0 && ye & 64) ? ve(
        ie,
        $,
        j,
        !1,
        !0
      ) : (oe === he && ye & 384 || !z && ge & 16) && ve(le, $, j), re && H(M);
    }
    (Be && (Oe = me && me.onVnodeUnmounted) || Ae) && Rt(() => {
      Oe && xn(Oe, $, M), Ae && Ca(M, null, $, "unmounted");
    }, j);
  }, H = (M) => {
    const { type: $, el: j, anchor: re, transition: z } = M;
    if ($ === he) {
      G(j, re);
      return;
    }
    if ($ === Lr) {
      b(M);
      return;
    }
    const oe = () => {
      l(j), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (M.shapeFlag & 1 && z && !z.persisted) {
      const { leave: me, delayLeave: Y } = z, le = () => me(j, oe);
      Y ? Y(M.el, oe, le) : le();
    } else
      oe();
  }, G = (M, $) => {
    let j;
    for (; M !== $; )
      j = f(M), l(M), M = j;
    l($);
  }, X = (M, $, j) => {
    const { bum: re, scope: z, job: oe, subTree: me, um: Y, m: le, a: ie } = M;
    Qc(le), Qc(ie), re && so(re), z.stop(), oe && (oe.flags |= 8, K(me, M, $, j)), Y && Rt(Y, $), Rt(() => {
      M.isUnmounted = !0;
    }, $);
  }, ve = (M, $, j, re = !1, z = !1, oe = 0) => {
    for (let me = oe; me < M.length; me++)
      K(M[me], $, j, re, z);
  }, Z = (M) => {
    if (M.shapeFlag & 6)
      return Z(M.component.subTree);
    if (M.shapeFlag & 128)
      return M.suspense.next();
    const $ = f(M.anchor || M.el), j = $ && $[Cv];
    return j ? f(j) : $;
  };
  let de = !1;
  const xe = (M, $, j) => {
    let re;
    M == null ? $._vnode && (K($._vnode, null, null, !0), re = $._vnode.component) : m(
      $._vnode || null,
      M,
      $,
      null,
      null,
      null,
      j
    ), $._vnode = M, de || (de = !0, Nc(re), Sv(), de = !1);
  }, Ce = {
    p: m,
    um: K,
    m: ne,
    r: H,
    mt: D,
    mc: C,
    pc: Q,
    pbc: P,
    n: Z,
    o: e
  };
  return {
    render: xe,
    hydrate: void 0,
    createApp: DS(xe)
  };
}
function Fr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Va({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function KS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xu(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (De(a) && De(l))
    for (let i = 0; i < a.length; i++) {
      const o = a[i];
      let r = l[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[i] = ca(l[i]), r.el = o.el), !n && r.patchFlag !== -2 && xu(o, r)), r.type === Mi && (r.patchFlag !== -1 ? r.el = o.el : r.__elIndex = i + // take fragment start anchor into account
      (e.type === he ? 1 : 0)), r.type === jt && !r.el && (r.el = o.el);
    }
}
function GS(e) {
  const t = e.slice(), n = [0];
  let a, l, i, o, r;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (l = n[n.length - 1], e[l] < u) {
        t[a] = l, n.push(a);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        r = i + o >> 1, e[n[r]] < u ? i = r + 1 : o = r;
      u < e[n[i]] && (i > 0 && (t[a] = n[i - 1]), n[i] = a);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
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
  t && t.pendingBranch ? De(e) ? t.effects.push(...e) : t.effects.push(e) : uS(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), Mi = /* @__PURE__ */ Symbol.for("v-txt"), jt = /* @__PURE__ */ Symbol.for("v-cmt"), Lr = /* @__PURE__ */ Symbol.for("v-stc"), li = [];
let Xt = null;
function XS(e = !1) {
  li.push(Xt = e ? null : []);
}
function ZS() {
  li.pop(), Xt = li[li.length - 1] || null;
}
let fi = 1;
function po(e, t = !1) {
  fi += e, e < 0 && Xt && t && (Xt.hasOnce = !0);
}
function JS(e) {
  return e.dynamicChildren = fi > 0 ? Xt || yl : null, ZS(), fi > 0 && Xt && Xt.push(e), e;
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
function vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Da(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nm = ({ key: e }) => e ?? null, co = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || /* @__PURE__ */ ot(e) || Me(e) ? { i: qt, r: e, k: t, f: !!n } : e : null);
function V(e, t = null, n = null, a = 0, l = null, i = e === he ? 0 : 1, o = !1, r = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nm(t),
    ref: t && co(t),
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
    shapeFlag: i,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: qt
  };
  return r ? (Cu(s, n), i & 128 && e.normalize(s)) : n && (s.shapeFlag |= rt(n) ? 8 : 16), fi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Xt.push(s), s;
}
const p = ek;
function ek(e, t = null, n = null, a = 0, l = null, i = !1) {
  if ((!e || e === pS) && (e = jt), vi(e)) {
    const r = qn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cu(r, n), fi > 0 && !i && Xt && (r.shapeFlag & 6 ? Xt[Xt.indexOf(e)] = r : Xt.push(r)), r.patchFlag = -2, r;
  }
  if (uk(e) && (e = e.__vccOpts), t) {
    t = am(t);
    let { class: r, style: s } = t;
    r && !rt(r) && (t.class = ee(r)), et(s) && (/* @__PURE__ */ Di(s) && !De(s) && (s = kt({}, s)), t.style = fe(s));
  }
  const o = rt(e) ? 1 : tm(e) ? 128 : Vv(e) ? 64 : et(e) ? 4 : Me(e) ? 2 : 0;
  return V(
    e,
    t,
    n,
    a,
    l,
    o,
    i,
    !0
  );
}
function am(e) {
  return e ? /* @__PURE__ */ Di(e) || Kv(e) ? kt({}, e) : e : null;
}
function qn(e, t, n = !1, a = !1) {
  const { props: l, ref: i, patchFlag: o, children: r, transition: s } = e, u = t ? U(l || {}, t) : l, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && nm(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? De(i) ? i.concat(co(t)) : [i, co(t)] : co(t)
    ) : i,
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
    patchFlag: t && e.type !== he ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && qn(e.ssContent),
    ssFallback: e.ssFallback && qn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && a && Wa(
    c,
    s.clone(c)
  ), c;
}
function Ut(e = " ", t = 0) {
  return p(Mi, null, e, t);
}
function _n(e) {
  return e == null || typeof e == "boolean" ? p(jt) : De(e) ? p(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vi(e) ? ca(e) : p(Mi, null, String(e));
}
function ca(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qn(e);
}
function Cu(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (De(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Cu(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Kv(t) ? t._ctx = qt : l === 3 && qt && (qt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Me(t) ? (t = { default: t, _ctx: qt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Ut(t)]) : n = 8);
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
        t.style = fe([t.style, a.style]);
      else if (No(l)) {
        const i = t[l], o = a[l];
        o && i !== o && !(De(i) && i.includes(o)) && (t[l] = i ? [].concat(i, o) : o);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function xn(e, t, n, a = null) {
  hn(e, t, 7, [
    n,
    a
  ]);
}
const tk = zv();
let nk = 0;
function ak(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || tk, i = {
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
    propsDefaults: Ze,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Ze,
    data: Ze,
    props: Ze,
    attrs: Ze,
    slots: Ze,
    refs: Ze,
    setupState: Ze,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = MS.bind(null, i), e.ce && e.ce(i), i;
}
let Ft = null;
const Bi = () => Ft || qt;
let xo, ds;
{
  const e = zo(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (i) => {
      l.length > 1 ? l.forEach((o) => o(i)) : l[0](i);
    };
  };
  xo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ft = n
  ), ds = t(
    "__VUE_SSR_SETTERS__",
    (n) => mi = n
  );
}
const Fi = (e) => {
  const t = Ft;
  return xo(e), e.scope.on(), () => {
    e.scope.off(), xo(t);
  };
}, ed = () => {
  Ft && Ft.scope.off(), xo(null);
};
function lm(e) {
  return e.vnode.shapeFlag & 4;
}
let mi = !1;
function lk(e, t = !1, n = !1) {
  t && ds(t);
  const { props: a, children: l } = e.vnode, i = lm(e);
  NS(e, a, i, t), zS(e, l, n || t);
  const o = i ? ik(e, t) : void 0;
  return t && ds(!1), o;
}
function ik(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, CS);
  const { setup: a } = n;
  if (a) {
    Un();
    const l = e.setupContext = a.length > 1 ? rk(e) : null, i = Fi(e), o = Ei(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), r = jf(o);
    if (Kn(), i(), (r || e.sp) && !ni(e) && Bv(e), r) {
      if (o.then(ed, ed), t)
        return o.then((s) => {
          td(e, s);
        }).catch((s) => {
          Yo(s, e, 0);
        });
      e.asyncDep = o;
    } else
      td(e, o);
  } else
    im(e);
}
function td(e, t, n) {
  Me(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = gv(t)), im(e);
}
function im(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || In);
  {
    const l = Fi(e);
    Un();
    try {
      VS(e);
    } finally {
      Kn(), l();
    }
  }
}
const ok = {
  get(e, t) {
    return Bt(e, "get", ""), e[t];
  }
};
function rk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ok),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gv(vv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ai)
        return ai[n](e);
    },
    has(t, n) {
      return n in t || n in ai;
    }
  })) : e.proxy;
}
function sk(e, t = !0) {
  return Me(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uk(e) {
  return Me(e) && "__vccOpts" in e;
}
const _ = (e, t) => /* @__PURE__ */ lS(e, t, mi);
function yn(e, t, n) {
  try {
    po(-1);
    const a = arguments.length;
    return a === 2 ? et(t) && !De(t) ? vi(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && vi(n) && (n = [n]), p(e, t, n));
  } finally {
    po(1);
  }
}
const ck = "3.5.27";
let fs;
const nd = typeof window < "u" && window.trustedTypes;
if (nd)
  try {
    fs = /* @__PURE__ */ nd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const om = fs ? (e) => fs.createHTML(e) : (e) => e, dk = "http://www.w3.org/2000/svg", fk = "http://www.w3.org/1998/Math/MathML", Nn = typeof document < "u" ? document : null, ad = Nn && /* @__PURE__ */ Nn.createElement("template"), vk = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Nn.createElementNS(dk, e) : t === "mathml" ? Nn.createElementNS(fk, e) : n ? Nn.createElement(e, { is: n }) : Nn.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Nn.createTextNode(e),
  createComment: (e) => Nn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, l, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), n), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      ad.innerHTML = om(
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
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, oa = "transition", jl = "animation", xl = /* @__PURE__ */ Symbol("_vtc"), rm = {
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
}, sm = /* @__PURE__ */ kt(
  {},
  Tv,
  rm
), mk = (e) => (e.displayName = "Transition", e.props = sm, e), ga = /* @__PURE__ */ mk(
  (e, { slots: t }) => yn(hS, um(e), t)
), _a = (e, t = []) => {
  De(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ld = (e) => e ? De(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: s = i,
    appearActiveClass: u = o,
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
    A._enterCancelled = L, ra(A, B ? c : r), ra(A, B ? u : o), D && D();
  }, P = (A, B) => {
    A._isLeaving = !1, ra(A, d), ra(A, v), ra(A, f), B && B();
  }, F = (A) => (B, D) => {
    const L = A ? I : x, W = () => T(B, A, D);
    _a(L, [B, W]), id(() => {
      ra(B, A ? s : i), Cn(B, A ? c : r), ld(L) || od(B, a, m, W);
    });
  };
  return kt(t, {
    onBeforeEnter(A) {
      _a(h, [A]), Cn(A, i), Cn(A, o);
    },
    onBeforeAppear(A) {
      _a(g, [A]), Cn(A, s), Cn(A, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(A, B) {
      A._isLeaving = !0;
      const D = () => P(A, B);
      Cn(A, d), A._enterCancelled ? (Cn(A, f), vs(A)) : (vs(A), Cn(A, f)), id(() => {
        A._isLeaving && (ra(A, d), Cn(A, v), ld(b) || od(A, a, y, D));
      }), _a(b, [A, D]);
    },
    onEnterCancelled(A) {
      T(A, !1, void 0, !0), _a(w, [A]);
    },
    onAppearCancelled(A) {
      T(A, !0, void 0, !0), _a(C, [A]);
    },
    onLeaveCancelled(A) {
      P(A), _a(S, [A]);
    }
  });
}
function gk(e) {
  if (e == null)
    return null;
  if (et(e))
    return [$r(e.enter), $r(e.leave)];
  {
    const t = $r(e);
    return [t, t];
  }
}
function $r(e) {
  return xb(e);
}
function Cn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xl] || (e[xl] = /* @__PURE__ */ new Set())).add(t);
}
function ra(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[xl];
  n && (n.delete(t), n.size || (e[xl] = void 0));
}
function id(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hk = 0;
function od(e, t, n, a) {
  const l = e._endId = ++hk, i = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: r, propCount: s } = cm(e, t);
  if (!o)
    return a();
  const u = o + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), i();
  }, f = (v) => {
    v.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, r + 1), e.addEventListener(u, f);
}
function cm(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${oa}Delay`), i = a(`${oa}Duration`), o = rd(l, i), r = a(`${jl}Delay`), s = a(`${jl}Duration`), u = rd(r, s);
  let c = null, d = 0, f = 0;
  t === oa ? o > 0 && (c = oa, d = o, f = i.length) : t === jl ? u > 0 && (c = jl, d = u, f = s.length) : (d = Math.max(o, u), c = d > 0 ? o > u ? oa : jl : null, f = c ? c === oa ? i.length : s.length : 0);
  const v = c === oa && /\b(?:transform|all)(?:,|$)/.test(
    a(`${oa}Property`).toString()
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
function vs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function yk(e, t, n) {
  const a = e[xl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Co = /* @__PURE__ */ Symbol("_vod"), dm = /* @__PURE__ */ Symbol("_vsh"), kn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Co] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yl(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), Yl(e, !0), a.enter(e)) : a.leave(e, () => {
      Yl(e, !1);
    }) : Yl(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yl(e, t);
  }
};
function Yl(e, t) {
  e.style.display = t ? e[Co] : "none", e[dm] = !t;
}
const bk = /* @__PURE__ */ Symbol(""), Sk = /(?:^|;)\s*display\s*:/;
function kk(e, t, n) {
  const a = e.style, l = rt(n);
  let i = !1;
  if (n && !l) {
    if (t)
      if (rt(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          n[r] == null && fo(a, r, "");
        }
      else
        for (const o in t)
          n[o] == null && fo(a, o, "");
    for (const o in n)
      o === "display" && (i = !0), fo(a, o, n[o]);
  } else if (l) {
    if (t !== n) {
      const o = a[bk];
      o && (n += ";" + o), a.cssText = n, i = Sk.test(n);
    }
  } else t && e.removeAttribute("style");
  Co in e && (e[Co] = i ? a.display : "", e[dm] && (a.display = "none"));
}
const ud = /\s*!important$/;
function fo(e, t, n) {
  if (De(n))
    n.forEach((a) => fo(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = wk(e, t);
    ud.test(n) ? e.setProperty(
      Za(a),
      n.replace(ud, ""),
      "important"
    ) : e[a] = n;
  }
}
const cd = ["Webkit", "Moz", "ms"], Or = {};
function wk(e, t) {
  const n = Or[t];
  if (n)
    return n;
  let a = Wt(t);
  if (a !== "filter" && a in e)
    return Or[t] = a;
  a = Mn(a);
  for (let l = 0; l < cd.length; l++) {
    const i = cd[l] + a;
    if (i in e)
      return Or[t] = i;
  }
  return t;
}
const dd = "http://www.w3.org/1999/xlink";
function fd(e, t, n, a, l, i = Ab(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dd, t.slice(6, t.length)) : e.setAttributeNS(dd, t, n) : n == null || i && !Gf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : pa(n) ? String(n) : n
  );
}
function vd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? om(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Gf(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(l || t);
}
function vl(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function pk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const md = /* @__PURE__ */ Symbol("_vei");
function xk(e, t, n, a, l = null) {
  const i = e[md] || (e[md] = {}), o = i[t];
  if (a && o)
    o.value = a;
  else {
    const [r, s] = Ck(t);
    if (a) {
      const u = i[t] = Ik(
        a,
        l
      );
      vl(e, r, u, s);
    } else o && (pk(e, r, o, s), i[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : Za(e.slice(2)), t];
}
let Nr = 0;
const Vk = /* @__PURE__ */ Promise.resolve(), _k = () => Nr || (Vk.then(() => Nr = 0), Nr = Date.now());
function Ik(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    hn(
      Pk(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = _k(), n;
}
function Pk(e, t) {
  if (De(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tk = (e, t, n, a, l, i) => {
  const o = l === "svg";
  t === "class" ? yk(e, a, o) : t === "style" ? kk(e, n, a) : No(t) ? su(t) || xk(e, t, n, a, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ak(e, t, a, o)) ? (vd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fd(e, t, a, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !rt(a)) ? vd(e, Wt(t), a, i, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), fd(e, t, a, o));
};
function Ak(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hd(t) && Me(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hd(t) && rt(n) ? !1 : t in e;
}
const fm = /* @__PURE__ */ new WeakMap(), vm = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ Symbol("_moveCb"), yd = /* @__PURE__ */ Symbol("_enterCb"), Dk = (e) => (delete e.props.mode, e), Ek = /* @__PURE__ */ Dk({
  name: "TransitionGroup",
  props: /* @__PURE__ */ kt({}, sm, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Bi(), a = Pv();
    let l, i;
    return Go(() => {
      if (!l.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Lk(
        l[0].el,
        n.vnode.el,
        o
      )) {
        l = [];
        return;
      }
      l.forEach(Mk), l.forEach(Bk);
      const r = l.filter(Fk);
      vs(n.vnode.el), r.forEach((s) => {
        const u = s.el, c = u.style;
        Cn(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const d = u[Vo] = (f) => {
          f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Vo] = null, ra(u, o));
        };
        u.addEventListener("transitionend", d);
      }), l = [];
    }), () => {
      const o = /* @__PURE__ */ Ve(e), r = um(o);
      let s = o.tag || he;
      if (l = [], i)
        for (let u = 0; u < i.length; u++) {
          const c = i[u];
          c.el && c.el instanceof Element && (l.push(c), Wa(
            c,
            di(
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
      i = t.default ? Su(t.default()) : [];
      for (let u = 0; u < i.length; u++) {
        const c = i[u];
        c.key != null && Wa(
          c,
          di(c, r, a, n)
        );
      }
      return p(s, null, i);
    };
  }
}), Vu = Ek;
function Mk(e) {
  const t = e.el;
  t[Vo] && t[Vo](), t[yd] && t[yd]();
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
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${a}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function Lk(e, t, n) {
  const a = e.cloneNode(), l = e[xl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(a);
  const { hasTransform: o } = cm(a);
  return i.removeChild(a), o;
}
const bd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return De(t) ? (n) => so(t, n) : t;
};
function $k(e) {
  e.target.composing = !0;
}
function Sd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Rr = /* @__PURE__ */ Symbol("_assign");
function kd(e, t, n) {
  return t && (e = e.trim()), n && (e = cu(e)), e;
}
const Ok = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[Rr] = bd(l);
    const i = a || l.props && l.props.type === "number";
    vl(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Rr](kd(e.value, n, i));
    }), (n || i) && vl(e, "change", () => {
      e.value = kd(e.value, n, i);
    }), t || (vl(e, "compositionstart", $k), vl(e, "compositionend", Sd), vl(e, "change", Sd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: i } }, o) {
    if (e[Rr] = bd(o), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? cu(e.value) : e.value, s = t ?? "";
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
}, eo = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const r = Rk[t[o]];
      if (r && r(l, t)) return;
    }
    return e(l, ...i);
  }));
}, Hk = /* @__PURE__ */ kt({ patchProp: Tk }, vk);
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
    const i = t._component;
    !Me(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const o = n(l, !1, zk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), o;
  }, t;
});
function zk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function jk(e) {
  return rt(e) ? document.querySelector(e) : e;
}
function hm(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const ze = typeof window < "u", _u = ze && "IntersectionObserver" in window, Yk = ze && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), pd = ze && "EyeDropper" in window, Iu = ze && "matchMedia" in window && typeof window.matchMedia == "function", Tn = () => Iu && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function xd(e, t, n) {
  Uk(e, t), t.set(e, n);
}
function Uk(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Cd(e, t, n) {
  return e.set(ym(e, t), n), n;
}
function On(e, t) {
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
function za(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), bm(e, t.split("."), n));
}
function it(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return za(e, t, n);
  if (Array.isArray(t)) return bm(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Zt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function ce(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function ja(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ms(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Pu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const gs = Object.freeze({
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
function Ea(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function zt(e, t) {
  const n = {};
  for (const a of t)
    Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function hs(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Ee(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const km = /^on[^a-z]/, Tu = (e) => km.test(e), Kk = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Gk = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function qk(e) {
  return e.isComposing && Gk.includes(e.key);
}
function Bn(e) {
  const [t, n] = hs(e, [km]), a = Ee(t, Kk), [l, i] = hs(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Ke(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function wm(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(n), n = setTimeout(() => e(...i), mt(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function We(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Vd(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function _d(e, t) {
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
function _t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], o = t[l];
    if (ms(i) && ms(o)) {
      a[l] = _t(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      a[l] = n(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function pm(e) {
  return e.map((t) => t.type === he ? pm(t.children) : t).flat();
}
function Fa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Fa.cache.has(e)) return Fa.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Fa.cache.set(e, t), t;
}
Fa.cache = /* @__PURE__ */ new Map();
function gl(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => gl(e, n)).flat(1);
  if (t.suspense)
    return gl(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => gl(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e))
      return [t.component];
    if (t.component.subTree)
      return gl(e, t.component.subTree).flat(1);
  }
  return [];
}
var sl = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap();
class xm {
  constructor(t) {
    xd(this, sl, []), xd(this, Ia, 0), this.size = t;
  }
  get isFull() {
    return On(sl, this).length === this.size;
  }
  push(t) {
    On(sl, this)[On(Ia, this)] = t, Cd(Ia, this, (On(Ia, this) + 1) % this.size);
  }
  values() {
    return On(sl, this).slice(On(Ia, this)).concat(On(sl, this).slice(0, On(Ia, this)));
  }
  clear() {
    On(sl, this).length = 0, Cd(Ia, this, 0);
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
function Au(e) {
  const t = /* @__PURE__ */ wt({});
  tt(() => {
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
function _o(e, t) {
  return e.includes(t);
}
function Cm(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ct = () => [Function, Array];
function Td(e, t) {
  return t = "on" + Mn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Li(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function La(e) {
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
function Vm(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !(n?.(a) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function $a(e, t) {
  const n = La(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && n[0]?.focus();
  else if (t === "first")
    n[0]?.focus();
  else if (t === "last")
    n.at(-1)?.focus();
  else if (typeof t == "number")
    n[t]?.focus();
  else {
    const a = Vm(n, t);
    a ? a.focus() : $a(e, t === "next" ? "first" : "last");
  }
}
function to(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Jo() {
}
function Cl(e, t) {
  if (!(ze && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Qo(e) {
  return e.some((t) => vi(t) ? t.type === jt ? !1 : t.type !== he || Qo(t.children) : !0) ? e : null;
}
function no(e, t, n) {
  return e?.(t) ?? n?.(t);
}
function Jk(e, t) {
  if (!ze || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Qk(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return n >= i && n <= r && a >= o && a <= s;
}
function Io() {
  const e = /* @__PURE__ */ se(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Pu(e.value)
  }), t;
}
function Vl(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function ha(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Po(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function e0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Po(n)}]`), l = e.split("").filter((o) => a.test(o)).filter((o, r, s) => r === 0 && /[-]/.test(o) || // sign allowed at the start
  o === n && r === s.indexOf(o) || // decimal separator allowed only once
  /\d/.test(o)).join("");
  if (t === 0)
    return l.split(n)[0];
  const i = new RegExp(`${Po(n)}\\d`);
  if (t !== null && i.test(l)) {
    const o = l.split(n);
    return [o[0], o[1].substring(0, t)].join(n);
  }
  return l;
}
function t0(e) {
  const t = {};
  for (const n in e)
    t[Wt(n)] = e[n];
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
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : /* @__PURE__ */ ot(n) || /* @__PURE__ */ Ba(n) || /* @__PURE__ */ Di(n) ? t(/* @__PURE__ */ Ve(n)) : ms(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const _m = ["top", "bottom"], a0 = ["start", "end", "left", "right"];
function ys(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = _o(_m, n) ? "start" : _o(a0, n) ? "top" : "center"), {
    side: bs(n, t),
    align: bs(a, t)
  };
}
function bs(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Hr(e) {
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
function Wr(e) {
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
  return _o(_m, e.side) ? "y" : "x";
}
class sn {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, a = t instanceof Element, l = a ? 1 + (1 - n) / n : 1, {
      x: i,
      y: o,
      width: r,
      height: s
    } = a ? t.getBoundingClientRect() : t;
    this.x = i * l, this.y = o * l, this.width = r * l, this.height = s * l;
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
    return new sn({
      x: e[0] * n,
      y: e[1] * n,
      width: 0 * n,
      height: 0 * n
    });
  } else
    return new sn(e);
}
function l0(e) {
  if (e === document.documentElement)
    if (visualViewport) {
      const t = document.body.currentCSSZoom ?? 1;
      return new sn({
        x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
        y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
        width: visualViewport.width * visualViewport.scale / t,
        height: visualViewport.height * visualViewport.scale / t
      });
    } else
      return new sn({
        x: 0,
        y: 0,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
  else
    return new sn(e);
}
function Du(e) {
  const t = new sn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = Number(l[0]), o = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = Number(l[0]), o = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else
      return new sn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - i) * parseFloat(u), d = t.y - s - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, v = o ? t.height / o : e.offsetHeight + 1;
    return new sn({
      x: c,
      y: d,
      width: f,
      height: v
    });
  } else
    return new sn(t);
}
function Hn(e, t, n) {
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
const vo = /* @__PURE__ */ new WeakMap();
function i0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Tu(n)) {
      const a = Cm(n), l = vo.get(e);
      if (t[n] == null)
        l?.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), vo.has(e) || vo.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function o0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Tu(n)) {
      const a = Cm(n), l = vo.get(e);
      l?.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const ul = 2.4, Bd = 0.2126729, Fd = 0.7151522, Ld = 0.072175, r0 = 0.55, s0 = 0.58, u0 = 0.57, c0 = 0.62, ao = 0.03, $d = 1.45, d0 = 5e-4, f0 = 1.25, v0 = 1.25, Od = 0.078, Nd = 12.82051282051282, lo = 0.06, Rd = 1e-3;
function Hd(e, t) {
  const n = (e.r / 255) ** ul, a = (e.g / 255) ** ul, l = (e.b / 255) ** ul, i = (t.r / 255) ** ul, o = (t.g / 255) ** ul, r = (t.b / 255) ** ul;
  let s = n * Bd + a * Fd + l * Ld, u = i * Bd + o * Fd + r * Ld;
  if (s <= ao && (s += (ao - s) ** $d), u <= ao && (u += (ao - u) ** $d), Math.abs(u - s) < d0) return 0;
  let c;
  if (u > s) {
    const d = (u ** r0 - s ** s0) * f0;
    c = d < Rd ? 0 : d < Od ? d - d * Nd * lo : d - lo;
  } else {
    const d = (u ** c0 - s ** u0) * v0;
    c = d > -Rd ? 0 : d > -Od ? d - d * Nd * lo : d + lo;
  }
  return c * 100;
}
const To = 0.20689655172413793, m0 = (e) => e > To ** 3 ? Math.cbrt(e) : e / (3 * To ** 2) + 4 / 29, g0 = (e) => e > To ? e ** 3 : 3 * To ** 2 * (e - 4 / 29);
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
    t[l] = Math.round(We(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function Eu(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = S0, o = b0;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * t + o[r][1] * n + o[r][2] * a;
  return l;
}
function Ss(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function k0(e) {
  return Ss(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
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
  hsv: (e, t, n, a) => An({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => An({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Jt(e) {
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
    } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return w0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Bm(t);
  } else if (typeof e == "object") {
    if (Ea(e, ["r", "g", "b"]))
      return e;
    if (Ea(e, ["h", "s", "l"]))
      return An(Mu(e));
    if (Ea(e, ["h", "s", "v"]))
      return An(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function An(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function zd(e) {
  return An(Mu(e));
}
function $i(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), i = Math.min(t, n, a);
  let o = 0;
  l !== i && (l === t ? o = 60 * (0 + (n - a) / (l - i)) : l === n ? o = 60 * (2 + (a - t) / (l - i)) : l === a && (o = 60 * (4 + (t - n) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function ks(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = a - a * n / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: t,
    s: o,
    l: i,
    a: l
  };
}
function Mu(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s: o,
    v: i,
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
  return Dm(An(e));
}
function io(e) {
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
  return `#${[io(t), io(n), io(a), l !== void 0 ? io(Math.round(l * 255)) : ""].join("")}`;
}
function Bm(e) {
  e = x0(e);
  let [t, n, a, l] = Xk(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function p0(e) {
  const t = Bm(e);
  return $i(t);
}
function Fm(e) {
  return Mm(An(e));
}
function x0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = _d(_d(e, 6), 8, "F")), e;
}
function C0(e, t) {
  const n = Pm(Eu(e));
  return n[0] = n[0] + t * 10, Am(Tm(n));
}
function V0(e, t) {
  const n = Pm(Eu(e));
  return n[0] = n[0] - t * 10, Am(Tm(n));
}
function ws(e) {
  const t = Jt(e);
  return Eu(t)[1];
}
function _0(e, t) {
  const n = ws(e), a = ws(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Lm(e) {
  const t = Math.abs(Hd(Jt(0), Jt(e)));
  return Math.abs(Hd(Jt(16777215), Jt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function N(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...o,
      default: n[l]
    } : a[l] = o, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const be = N({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function st(e, t) {
  const n = Bi();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Fn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = st(e).type;
  return Fa(t?.aliasName || t?.name);
}
function I0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const _l = /* @__PURE__ */ Symbol.for("vuetify:defaults");
function P0(e) {
  return /* @__PURE__ */ ae(e);
}
function Bu() {
  const e = Le(_l);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function nt(e, t) {
  const n = Bu(), a = /* @__PURE__ */ ae(e), l = _(() => {
    if (mt(t?.disabled)) return n.value;
    const o = mt(t?.scoped), r = mt(t?.reset), s = mt(t?.root);
    if (a.value == null && !(o || r || s)) return n.value;
    let u = _t(a.value, {
      prev: n.value
    });
    if (o) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = _t(_t(u, {
        prev: u
      }), u[s])), u;
    }
    return u.prev ? _t(u.prev, u) : u;
  });
  return Ge(_l, l), l;
}
function T0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Fa(t)] < "u");
}
function A0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bu();
  const a = st("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => n.value?.[e._as ?? t]), i = new Proxy(e, {
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
  }), o = /* @__PURE__ */ se();
  tt(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = I0(_l, a);
    Ge(_l, _(() => o.value ? _t(s?.value ?? {}, o.value) : s?.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function $t(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return zt(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = Bu();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = A0(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function J() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? $t : Mv)(t);
}
function D0(e, t) {
  return t.props = e, t;
}
function Qn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return J()({
    name: n ?? Mn(Wt(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...be()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => yn(a.tag, {
        class: [e, a.class],
        style: a.style
      }, i.default?.());
    }
  });
}
function E0(e, t, n, a) {
  if (!n || ha(e) || ha(t)) return;
  const l = n.get(e);
  if (l)
    l.set(t, a);
  else {
    const i = /* @__PURE__ */ new WeakMap();
    i.set(t, a), n.set(e, i);
  }
}
function M0(e, t, n) {
  if (!n || ha(e) || ha(t)) return null;
  const a = n.get(e)?.get(t);
  if (typeof a == "boolean") return a;
  const l = n.get(t)?.get(e);
  return typeof l == "boolean" ? l : null;
}
function pt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length)
    return !1;
  const l = M0(e, t, n);
  return l || (E0(e, t, n, !0), a.every((i) => pt(e[i], t[i], n)));
}
function $m(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const gi = "cubic-bezier(0.4, 0, 0.2, 1)", jd = "cubic-bezier(0.0, 0, 0.2, 1)", Yd = "cubic-bezier(0.4, 0, 1, 1)", B0 = {
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
function Qt(e, t, n) {
  return Object.keys(e).filter((a) => Tu(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (i) => Li(e[l], i, n(i)), a), {});
}
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? F0(e) : Fu(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ao(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Fu(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Fu(e) {
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
    separateRoots: i,
    parentIndentLines: o,
    variant: r
  } = e;
  const s = n && (!a || i || t > 1);
  return !o || !t ? {
    leaf: void 0,
    node: void 0,
    children: o,
    footer: o && (!s || r === "simple") ? [...o, i ? "none" : "line"] : ["none"]
  } : r === "simple" ? {
    leaf: [...o, "line"],
    node: [...o, "line"],
    children: [...o, "line"],
    footer: [...o, "line", "line"]
  } : {
    leaf: [...o, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []],
    node: [...o, s ? "last-leaf" : "leaf"],
    children: [...o, s ? "none" : "line"],
    footer: [...o, s ? "none" : "line"]
  };
}
function $0(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function te(e) {
  const t = st("useRender");
  t.render = e;
}
function O0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    leading: !0,
    trailing: !0
  }, a = 0, l = 0, i = !1, o = 0;
  function r() {
    clearTimeout(a), i = !1, o = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    o || (o = f);
    const v = f - Math.max(o, l);
    function k() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    i ? v >= t ? k() : n.trailing && (a = setTimeout(k, t - v)) : (i = !0, n.leading && k());
  };
  return s.clear = r, s.immediate = e, s;
}
const pe = [String, Function, Object, Array], ps = /* @__PURE__ */ Symbol.for("vuetify:icons"), tr = N({
  icon: {
    type: pe
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), xs = J()({
  name: "VComponentIcon",
  props: tr(),
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
}), Lu = $t({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: tr(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => p(e.tag, U(n, {
      style: null
    }), {
      default: () => [V("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? V("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : V("path", {
        d: a
      }, null)) : V("path", {
        d: e.icon
      }, null)])]
    });
  }
}), N0 = $t({
  name: "VLigatureIcon",
  props: tr(),
  setup(e) {
    return () => p(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), $u = $t({
  name: "VClassIcon",
  props: tr(),
  setup(e) {
    return () => p(e.tag, {
      class: ee(e.icon)
    }, null);
  }
}), R0 = (e) => {
  const t = Le(ps);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: _(() => {
      const a = St(e);
      if (!a) return {
        component: xs
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = t.aliases?.[l.slice(1)])), Array.isArray(l))
        return {
          component: Lu,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: xs,
          icon: l
        };
      const i = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: o
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
  component: (e) => yn($u, {
    ...e,
    class: "mdi"
  })
};
function z0() {
  return {
    svg: {
      component: Lu
    },
    class: {
      component: $u
    }
  };
}
function j0(e) {
  const t = z0(), n = e?.defaultSet ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = W0), _t({
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
function It(e, t) {
  let n;
  function a() {
    n = pl(), n.run(() => t.length ? t(() => {
      n?.stop(), a();
    }) : t());
  }
  ue(e, (l) => {
    l && !n ? a() : l || (n?.stop(), n = void 0);
  }, {
    immediate: !0
  }), at(() => {
    n?.stop();
  });
}
function ke(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const i = st("useProxiedModel"), o = /* @__PURE__ */ ae(e[t] !== void 0 ? e[t] : n), r = Fa(t), u = _(r !== t ? () => (e[t], !!((i.vnode.props?.hasOwnProperty(t) || i.vnode.props?.hasOwnProperty(r)) && (i.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || i.vnode.props?.hasOwnProperty(`onUpdate:${r}`)))) : () => (e[t], !!(i.vnode.props?.hasOwnProperty(t) && i.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  It(() => !u.value, () => {
    ue(() => e[t], (d) => {
      o.value = d;
    });
  });
  const c = _({
    get() {
      const d = e[t];
      return a(u.value ? d : o.value);
    },
    set(d) {
      const f = l(d), v = /* @__PURE__ */ Ve(u.value ? e[t] : o.value);
      v === f || a(v) === d || (o.value = f, i?.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : o.value
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
}, Ud = "$vuetify.", Kd = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Om = (e, t, n) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(Ud))
    return Kd(a, i);
  const r = a.replace(Ud, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = za(s, r, null);
  return c || (`${a}${e.value}`, c = za(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Kd(c, i);
};
function Ou(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Nm(e, t) {
  return Ou(e, t)(0.1).includes(",") ? "," : ".";
}
function zr(e, t, n) {
  const a = ke(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ue(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Rm(e) {
  return (t) => {
    const n = zr(t, "locale", e.current), a = zr(t, "fallback", e.fallback), l = zr(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      decimalSeparator: /* @__PURE__ */ E(() => Nm(n, a)),
      t: Om(n, a, l),
      n: Ou(n, a),
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
    t: Om(t, n, a),
    n: Ou(t, n),
    provide: Rm({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const Il = /* @__PURE__ */ Symbol.for("vuetify:locale");
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
function je() {
  const e = Le(Il);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Hm(e) {
  const t = Le(Il);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = Z0(n, t.rtl, e), l = {
    ...n,
    ...a
  };
  return Ge(Il, l), l;
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
  const n = /* @__PURE__ */ ae(t?.rtl ?? q0()), a = _(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: /* @__PURE__ */ E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Z0(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: /* @__PURE__ */ E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function ft() {
  const e = Le(Il);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function Oi(e) {
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
  const i = Wm(e), o = zm(e), r = n ?? Oi(t)?.firstDay ?? 0, s = (i.getDay() - r + 7) % 7, u = (o.getDay() - r + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(i);
    d.setDate(d.getDate() - (s - c)), l.push(d);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    l.push(d), l.length === 7 && (a.push(l), l = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() + c), l.push(d);
  }
  return l.length > 0 && a.push(l), a;
}
function ii(e, t, n) {
  let a = (n ?? Oi(t)?.firstDay ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Q0(e, t) {
  const n = new Date(e), a = ((Oi(t)?.firstDay ?? 0) + 6) % 7;
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
  const a = t ?? Oi(e)?.firstDay ?? 0;
  return Zt(7).map((l) => {
    const i = new Date(Gd);
    return i.setDate(Gd.getDate() + a + l), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(i);
  });
}
function aw(e, t, n, a) {
  const l = jm(e) ?? /* @__PURE__ */ new Date(), i = a?.[t];
  if (typeof i == "function")
    return i(l, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
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
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, o).format(l);
}
function lw(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Id(String(n.getMonth() + 1), 2, "0"), i = Id(String(n.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function iw(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function ow(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function rw(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Oa(e, t) {
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
function hi(e) {
  return e.getFullYear();
}
function cw(e) {
  return e.getMonth();
}
function dw(e, t, n, a) {
  const l = Oi(t), i = n ?? l?.firstDay ?? 0, o = l?.firstWeekSize ?? 1;
  return a !== void 0 ? fw(e, t, i, a) : vw(e, t, i, o);
}
function fw(e, t, n, a) {
  const l = (7 + a - n) % 7, i = ii(e, t, n), o = Oa(i, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = hi(i);
  s < hi(o) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? Oa(u, -c) : Oa(u, 7 - c);
  return 1 + Eo(Nu(i), yi(d), "weeks");
}
function vw(e, t, n, a) {
  const l = ii(e, t, n), i = Oa(ii(e, t, n), 6);
  function o(d) {
    const f = new Date(d, 0, 1);
    return 7 - Eo(f, ii(f, t, n), "days");
  }
  let r = hi(l);
  r < hi(i) && o(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = o(r), c = u >= a ? Oa(s, u - 7) : Oa(s, u);
  return 1 + Eo(Nu(l), yi(c), "weeks");
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
  return Do(e, t[0]) && Cw(e, t[1]);
}
function pw(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Do(e, t) {
  return e.getTime() > t.getTime();
}
function xw(e, t) {
  return Do(yi(e), yi(t));
}
function Cw(e, t) {
  return e.getTime() < t.getTime();
}
function qd(e, t) {
  return e.getTime() === t.getTime();
}
function Vw(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function _w(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Iw(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Eo(e, t, n) {
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
function yi(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Nu(e) {
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
    return iw(t);
  }
  addMinutes(t, n) {
    return ow(t, n);
  }
  addHours(t, n) {
    return rw(t, n);
  }
  addDays(t, n) {
    return Oa(t, n);
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
    return ii(t, this.locale, a);
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
    return Do(t, n);
  }
  isAfterDay(t, n) {
    return xw(t, n);
  }
  isBefore(t, n) {
    return !Do(t, n) && !qd(t, n);
  }
  isSameDay(t, n) {
    return Vw(t, n);
  }
  isSameMonth(t, n) {
    return _w(t, n);
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
    return Eo(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return nw(this.locale, a, n);
  }
  getYear(t) {
    return hi(t);
  }
  getMonth(t) {
    return cw(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, i = a !== void 0 ? Number(a) : void 0;
    return dw(t, this.locale, l, i);
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
    return yi(t);
  }
  endOfDay(t) {
    return Nu(t);
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
  const n = _t({
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
  for (let i = 1; i < a; i++) {
    const o = e.addDays(t, i);
    l.push(o);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Um(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Km(e, t) {
  const n = /* @__PURE__ */ wt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return ue(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Ja() {
  const e = Le(Ym);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = je();
  return Km(e, t);
}
const nr = ["sm", "md", "lg", "xl", "xxl"], Cs = /* @__PURE__ */ Symbol.for("vuetify:display"), Zd = {
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
  return _t(Zd, e);
};
function Jd(e) {
  return ze && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Qd(e) {
  return ze && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function ef(e) {
  const t = ze && !e ? window.navigator.userAgent : "ssr";
  function n(k) {
    return !!t.match(k);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), o = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
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
function $w(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = Lw(e), l = /* @__PURE__ */ se(Qd(t)), i = /* @__PURE__ */ se(ef(t)), o = /* @__PURE__ */ wt({}), r = /* @__PURE__ */ se(Jd(t));
  function s() {
    l.value = Qd(), r.value = Jd();
  }
  function u() {
    s(), i.value = ef();
  }
  return tt(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), k = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, y = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : k ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], x = r.value < h;
    o.xs = c, o.sm = d, o.md = f, o.lg = v, o.xl = k, o.xxl = m, o.smAndUp = !c, o.mdAndUp = !(c || d), o.lgAndUp = !(c || d || f), o.xlAndUp = !(c || d || f || v), o.smAndDown = !(f || v || k || m), o.mdAndDown = !(v || k || m), o.lgAndDown = !(k || m), o.xlAndDown = !m, o.name = y, o.height = l.value, o.width = r.value, o.mobile = x, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = n;
  }), ze && (window.addEventListener("resize", s, {
    passive: !0
  }), at(() => {
    window.removeEventListener("resize", s);
  }, !0)), {
    .../* @__PURE__ */ El(o),
    update: u,
    ssr: !!t
  };
}
const Qa = N({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function nn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  const n = Le(Cs);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1);
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
function Ow(e) {
  return Ru(e) ?? (document.scrollingElement || document.body);
}
function Ru(e) {
  return typeof e == "string" ? document.querySelector(e) : Pu(e);
}
function jr(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Ru(e), l = 0;
  for (; a; )
    l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Nw(e, t) {
  return {
    rtl: t.isRtl,
    options: _t(qm(), e)
  };
}
async function tf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", i = _t(a?.options ?? qm(), t), o = a?.rtl.value, r = (typeof e == "number" ? e : Ru(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Ow(i.container), u = Tn() ? i.patterns.instant : typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!u) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let c;
  if (typeof r == "number")
    c = jr(r, n, o);
  else if (c = jr(r, n, o) - jr(s, n, o), i.layout) {
    const k = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    k && (c -= parseInt(k, 10));
  }
  c += i.offset, c = Hw(s, c, !!o, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function k(m) {
    const h = (m - f) / i.duration, x = Math.floor(d + (c - d) * u(We(h, 0, 1)));
    if (s[l] = x, h >= 1 && Math.abs(x - s[l]) < 10)
      return v(c);
    if (h > 2)
      return v(s[l]);
    requestAnimationFrame(k);
  }));
}
function Rw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Le(Gm), {
    isRtl: n
  } = ft();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...t,
    // can be set via VLocaleProvider
    rtl: /* @__PURE__ */ E(() => t.rtl.value || n.value)
  };
  async function l(i, o) {
    return tf(i, _t(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => tf(i, _t(e, o), !0, a), l;
}
function Hw(e, t, n, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - o), u = 0) : (s = 0, u = l - o) : (s = 0, u = i + -r), We(t, s, u);
}
const bi = /* @__PURE__ */ Symbol.for("vuetify:theme"), $e = N({
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
    const i = l.dark || a === "dark" ? t.themes?.dark : t.themes?.light;
    n[a] = _t(i, l);
  }
  return _t(t, {
    ...e,
    themes: n
  });
}
function Pa(e, t, n, a) {
  e.push(`${Uw(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function af(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [i, o] of Object.entries(e.colors)) {
    const r = Jt(o);
    l.push(`--${t}theme-${i}: ${r.r},${r.g},${r.b}`), i.startsWith("on-") || l.push(`--${t}theme-${i}-overlay-multiplier: ${ws(o) > 0.18 ? n : a}`);
  }
  for (const [i, o] of Object.entries(e.variables)) {
    const r = typeof o == "string" && o.startsWith("#") ? Jt(o) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${i}: ${s ?? o}`);
  }
  return l;
}
function zw(e, t, n) {
  const a = {};
  if (n)
    for (const l of ["lighten", "darken"]) {
      const i = l === "lighten" ? C0 : V0;
      for (const o of Zt(n[l], 1))
        a[`${e}-${l}-${o}`] = Mm(i(Jt(t), o));
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
    const a = `on-${n}`, l = Jt(e[n]);
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
  if (!ze) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function qw(e) {
  const t = Ww(e), n = /* @__PURE__ */ se(t.defaultTheme), a = /* @__PURE__ */ ae(t.themes), l = /* @__PURE__ */ se("light"), i = _({
    get() {
      return n.value === "system" ? l.value : n.value;
    },
    set(h) {
      n.value = h;
    }
  }), o = _(() => {
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
  }), r = /* @__PURE__ */ E(() => o.value[i.value]), s = /* @__PURE__ */ E(() => n.value === "system"), u = _(() => {
    const h = [], x = t.unimportant ? "" : " !important", w = t.scoped ? t.prefix : "";
    r.value?.dark && Pa(h, ":root", ["color-scheme: dark"], t.scope), Pa(h, ":root", af(r.value, t.prefix), t.scope);
    for (const [S, g] of Object.entries(o.value))
      Pa(h, `.${t.prefix}theme--${S}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...af(g, t.prefix)], t.scope);
    if (t.utilities) {
      const S = [], g = [], I = new Set(Object.values(o.value).flatMap((C) => Object.keys(C.colors)));
      for (const C of I)
        C.startsWith("on-") ? Pa(g, `.${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${x}`], t.scope) : (Pa(S, `.${w}bg-${C}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${C}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${C}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${C}))${x}`], t.scope), Pa(g, `.${w}text-${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${x}`], t.scope), Pa(g, `.${w}border-${C}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${C})`], t.scope));
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
  }), c = /* @__PURE__ */ E(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), d = /* @__PURE__ */ E(() => Object.keys(o.value));
  if (Iu) {
    let x = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    x(), h.addEventListener("change", x, {
      passive: !0
    }), Jf() && at(() => {
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
        ze && ue(u, () => {
          b.patch(w);
        });
      } else
        ze ? (x.addHeadObjs(/* @__PURE__ */ E(w)), tt(() => x.updateDOM())) : x.addHeadObjs(w());
    } else {
      let w = function() {
        Kw(t.stylesheetId, t.cspNonce, u.value);
      };
      ze ? ue(u, w, {
        immediate: !0
      }) : w();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (i.value = h);
  }
  function k() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = h.indexOf(i.value), w = x === -1 ? 0 : (x + 1) % h.length;
    v(h[w]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    k(h);
  }
  const y = new Proxy(i, {
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
    name: i,
    themes: a,
    current: r,
    computedThemes: o,
    prefix: t.prefix,
    themeClasses: c,
    styles: u,
    global: {
      name: y,
      current: r
    }
  };
}
function Re(e) {
  st("provideTheme");
  const t = Le(bi, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = /* @__PURE__ */ E(() => e.theme ?? t.name.value), i = {
    ...t,
    name: n,
    current: /* @__PURE__ */ E(() => t.themes.value[n.value]),
    themeClasses: /* @__PURE__ */ E(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`)
  };
  return Ge(bi, i), i;
}
function ar() {
  st("useTheme");
  const e = Le(bi, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Io(), a = /* @__PURE__ */ ae();
  if (ze) {
    const l = new ResizeObserver((i) => {
      e?.(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    At(() => {
      l.disconnect();
    }), ue(() => n.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: /* @__PURE__ */ Ha(a)
  };
}
const Si = /* @__PURE__ */ Symbol.for("vuetify:layout"), Xm = /* @__PURE__ */ Symbol.for("vuetify:layout-item"), lf = 1e3, Zm = N({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), el = N({
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
  const e = Le(Si);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function tl(e) {
  const t = Le(Si);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Tt()}`, a = st("useLayoutItem");
  Ge(Xm, {
    id: n
  });
  const l = /* @__PURE__ */ se(!1);
  ku(() => l.value = !0), Fv(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = t.register(a, {
    ...e,
    active: _(() => l.value ? !1 : e.active.value),
    id: n
  });
  return At(() => t.unregister(n)), {
    layoutItemStyles: i,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: o
  };
}
const Xw = (e, t, n, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = t.get(o), s = n.get(o), u = a.get(o);
    if (!r || !s || !u) continue;
    const c = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: c
    }), l = c;
  }
  return i;
};
function Qm(e) {
  const t = Le(Si, null), n = _(() => t ? t.rootZIndex.value - 100 : lf), a = /* @__PURE__ */ ae([]), l = /* @__PURE__ */ wt(/* @__PURE__ */ new Map()), i = /* @__PURE__ */ wt(/* @__PURE__ */ new Map()), o = /* @__PURE__ */ wt(/* @__PURE__ */ new Map()), r = /* @__PURE__ */ wt(/* @__PURE__ */ new Map()), s = /* @__PURE__ */ wt(/* @__PURE__ */ new Map()), {
    resizeRef: u,
    contentRect: c
  } = cn(), d = _(() => {
    const g = /* @__PURE__ */ new Map(), I = e.overlaps ?? [];
    for (const C of I.filter((T) => T.includes(":"))) {
      const [T, P] = C.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const F = l.get(T), A = l.get(P), B = i.get(T), D = i.get(P);
      !F || !A || !B || !D || (g.set(P, {
        position: F.value,
        amount: parseInt(B.value, 10)
      }), g.set(T, {
        position: A.value,
        amount: -parseInt(D.value, 10)
      }));
    }
    return g;
  }), f = _(() => {
    const g = [...new Set([...o.values()].map((C) => C.value))].sort((C, T) => C - T), I = [];
    for (const C of g) {
      const T = a.value.filter((P) => o.get(P)?.value === C);
      I.push(...T);
    }
    return Xw(I, l, i, r);
  }), v = _(() => !Array.from(s.values()).some((g) => g.value)), k = _(() => f.value[f.value.length - 1].layer), m = /* @__PURE__ */ E(() => ({
    "--v-layout-left": ce(k.value.left),
    "--v-layout-right": ce(k.value.right),
    "--v-layout-top": ce(k.value.top),
    "--v-layout-bottom": ce(k.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), y = _(() => f.value.slice(1).map((g, I) => {
    let {
      id: C
    } = g;
    const {
      layer: T
    } = f.value[I], P = i.get(C), F = l.get(C);
    return {
      id: C,
      ...T,
      size: Number(P.value),
      position: F.value
    };
  })), h = (g) => y.value.find((I) => I.id === g), x = st("createLayout"), w = /* @__PURE__ */ se(!1);
  return gt(() => {
    w.value = !0;
  }), Ge(Si, {
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
      o.set(C, T), l.set(C, P), i.set(C, F), r.set(C, B), D && s.set(C, D);
      const R = gl(Xm, x?.vnode).indexOf(g);
      R > -1 ? a.value.splice(R, 0, C) : a.value.push(C);
      const Q = _(() => y.value.findIndex((K) => K.id === C)), q = _(() => n.value + f.value.length * 2 - Q.value * 2), O = _(() => {
        const K = P.value === "left" || P.value === "right", H = P.value === "right", G = P.value === "bottom", X = A.value ?? F.value, ve = X === 0 ? "%" : "px", Z = {
          [P.value]: 0,
          zIndex: q.value,
          transform: `translate${K ? "X" : "Y"}(${(B.value ? 0 : -(X === 0 ? 100 : X)) * (H || G ? -1 : 1)}${ve})`,
          position: L.value || n.value !== lf ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!w.value) return Z;
        const de = y.value[Q.value], xe = d.value.get(C);
        return xe && (de[xe.position] += xe.amount), {
          ...Z,
          height: K ? `calc(100% - ${de.top}px - ${de.bottom}px)` : A.value ? `${A.value}px` : void 0,
          left: H ? void 0 : `${de.left}px`,
          right: H ? `${de.right}px` : void 0,
          top: P.value !== "bottom" ? `${de.top}px` : void 0,
          bottom: P.value !== "top" ? `${de.bottom}px` : void 0,
          width: K ? A.value ? `${A.value}px` : void 0 : `calc(100% - ${de.left}px - ${de.right}px)`
        };
      }), ne = _(() => ({
        zIndex: q.value - 1
      }));
      return {
        layoutItemStyles: O,
        layoutItemScrimStyles: ne,
        zIndex: q
      };
    },
    unregister: (g) => {
      o.delete(g), l.delete(g), i.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((I) => I !== g);
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
  const l = [], i = [];
  let o = "";
  const r = (u) => {
    o && (u && i.push(u), l.push(of(o)), o = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : o += c : o += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? {
    keys: [of(e)],
    separators: i
  } : {
    keys: l,
    separators: i
  };
}
function Jw(e) {
  if (!e)
    return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n)
    return [];
  const a = [];
  let l = "", i = 0;
  for (; i < e.length; ) {
    const u = e[i];
    if (u === "-") {
      const c = e[i - 1], d = i > 1 ? e[i - 2] : void 0;
      ["+", "_"].includes(c) && !["+", "/"].includes(d ?? "") ? (l += u, i++) : (l ? (a.push(l), l = "") : a.push("-"), i++);
    } else
      l += u, i++;
  }
  l && a.push(l);
  const o = [];
  let r = 0;
  for (const u of a)
    u === "-" ? (r % 2 === 0 && o.push("-"), r++) : (r = 0, o.push(u));
  return o.every((u) => eg(u).keys.length > 0) ? o : [];
}
function tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = _t(t, n), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = pl();
  return r.run(() => {
    const s = P0(a.defaults), u = $w(a.display, a.ssr), c = qw(a.theme), d = j0(a.icons), f = G0(a.locale), v = Bw(a.date, f), k = Nw(a.goTo, f);
    function m(h) {
      for (const w in o)
        h.directive(w, o[w]);
      for (const w in i)
        h.component(w, i[w]);
      for (const w in l)
        h.component(w, $t({
          ...l[w],
          name: w,
          aliasName: l[w].name
        }));
      const x = pl();
      if (x.run(() => {
        c.install(h);
      }), h.onUnmount(() => x.stop()), h.provide(_l, s), h.provide(Cs, u), h.provide(bi, c), h.provide(ps, d), h.provide(Il, f), h.provide(Ym, v.options), h.provide(Xd, v.instance), h.provide(Gm, k), ze && a.ssr)
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
            return Ie(() => u.update()), h.mount = w, b;
          };
        }
      h.mixin({
        computed: {
          $vuetify() {
            return /* @__PURE__ */ wt({
              defaults: cl.call(this, _l),
              display: cl.call(this, Cs),
              theme: cl.call(this, bi),
              icons: cl.call(this, ps),
              locale: cl.call(this, Il),
              date: cl.call(this, Xd)
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
function cl(e) {
  const t = this.$, n = t.parent?.provides ?? t.vnode.appContext?.provides;
  if (n && e in n)
    return n[e];
}
const ep = N({
  ...be(),
  ...Ee(Zm(), ["fullHeight"]),
  ...$e()
}, "VApp"), tp = J()({
  name: "VApp",
  props: ep(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Re(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Qm({
      ...e,
      fullHeight: !0
    }), {
      rtlClasses: s
    } = ft();
    return te(() => V("div", {
      ref: r,
      class: ee(["v-application", a.themeClasses.value, l.value, s.value, e.class]),
      style: fe([e.style])
    }, [V("div", {
      class: "v-application__wrap"
    }, [n.default?.()])])), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), Pe = N({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), ng = N({
  text: String,
  ...be(),
  ...Pe()
}, "VToolbarTitle"), Hu = J()({
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
        style: fe(e.style)
      }, {
        default: () => [a && V("div", {
          class: "v-toolbar-title__placeholder"
        }, [n.text ? n.text() : e.text, n.default?.()])]
      });
    }), {};
  }
}), np = N({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function an(e, t, n) {
  return J()({
    name: e,
    props: np({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
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
        const r = a.group ? Vu : ga;
        return yn(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function ag(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return J()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: {
        type: Boolean,
        default: Tn()
      },
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? Vu : ga;
      return () => yn(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function lg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Wt(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[n] = r), delete o._initialStyle;
  }
}
const ap = N({
  target: [Object, Array]
}, "v-dialog-transition"), Yr = /* @__PURE__ */ new WeakMap(), lr = J()({
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
      async onEnter(l, i) {
        await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
        const o = sf(e.target, l), {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = o;
        if (Yr.set(l, o), Tn())
          Hn(l, [{
            opacity: 0
          }, {}], {
            duration: 125 * d,
            easing: jd
          }).finished.then(() => i());
        else {
          const f = Hn(l, [{
            transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
            opacity: 0
          }, {}], {
            duration: 225 * d,
            easing: jd
          });
          rf(l)?.forEach((v) => {
            Hn(v, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 450 * d,
              easing: gi
            });
          }), f.finished.then(() => i());
        }
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        await new Promise((f) => requestAnimationFrame(f));
        let o;
        !Yr.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = sf(e.target, l) : o = Yr.get(l);
        const {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = o;
        Tn() ? Hn(l, [{}, {
          opacity: 0
        }], {
          duration: 85 * d,
          easing: Yd
        }).finished.then(() => i()) : (Hn(l, [{}, {
          transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Yd
        }).finished.then(() => i()), rf(l)?.forEach((v) => {
          Hn(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * d,
            easing: gi
          });
        }));
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? p(ga, U({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : p(ga, {
      name: "dialog-transition"
    }, n);
  }
});
function rf(e) {
  const t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return t && [...t];
}
function sf(e, t) {
  const n = Im(e), a = Du(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [o, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  o === "left" || r === "left" ? s -= n.width / 2 : (o === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || r === "top" ? u -= n.height / 2 : (o === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, k = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: u - (i + a.top),
    sx: v,
    sy: k,
    speed: y
  };
}
const lp = an("fab-transition", "center center", "out-in"), ip = an("dialog-bottom-transition"), op = an("dialog-top-transition"), ki = an("fade-transition"), Wu = an("scale-transition"), rp = an("scroll-x-transition"), sp = an("scroll-x-reverse-transition"), up = an("scroll-y-transition"), cp = an("scroll-y-reverse-transition"), dp = an("slide-x-transition"), fp = an("slide-x-reverse-transition"), zu = an("slide-y-transition"), vp = an("slide-y-reverse-transition"), ir = ag("expand-transition", lg()), ju = ag("expand-x-transition", lg("", !0)), mp = N({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Te = J(!1)({
  name: "VDefaultsProvider",
  props: mp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = /* @__PURE__ */ El(e);
    return nt(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => n.default?.();
  }
}), ut = N({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ct(e) {
  return {
    dimensionStyles: _(() => {
      const n = {}, a = ce(e.height), l = ce(e.maxHeight), i = ce(e.maxWidth), o = ce(e.minHeight), r = ce(e.minWidth), s = ce(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
function gp(e) {
  return {
    aspectStyles: _(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const ig = N({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...be(),
  ...ut()
}, "VResponsive"), Vs = J()({
  name: "VResponsive",
  props: ig(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = gp(e), {
      dimensionStyles: l
    } = ct(e);
    return te(() => V("div", {
      class: ee(["v-responsive", {
        "v-responsive--inline": e.inline
      }, e.class]),
      style: fe([l.value, e.style])
    }, [V("div", {
      class: "v-responsive__sizer",
      style: fe(a.value)
    }, null), n.additional?.(), n.default && V("div", {
      class: ee(["v-responsive__content", e.contentClass])
    }, [n.default()])])), {};
  }
});
function Yu(e) {
  return Au(() => {
    const {
      class: t,
      style: n
    } = og(e);
    return {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function xt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Yu(() => ({
    text: St(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function He(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Yu(() => ({
    background: St(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
function og(e) {
  const t = St(e), n = [], a = {};
  if (t.background)
    if (Ss(t.background)) {
      if (a.backgroundColor = t.background, !t.text && k0(t.background)) {
        const l = Jt(t.background);
        if (l.a == null || l.a === 1) {
          const i = Lm(l);
          a.color = i, a.caretColor = i;
        }
      }
    } else
      n.push(`bg-${t.background}`);
  return t.text && (Ss(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), {
    class: n,
    style: a
  };
}
const qe = N({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return {
    roundedClasses: _(() => {
      const a = /* @__PURE__ */ ot(e) ? e.value : e.rounded, l = /* @__PURE__ */ ot(e) ? !1 : e.tile, i = [];
      if (l || a === !1)
        i.push("rounded-0");
      else if (a === !0 || a === "")
        i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      return i;
    })
  };
}
const ea = N({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Lt = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? Vu : ga,
    ...s
  } = ja(a) ? a : {};
  let u;
  return ja(a) ? u = U(s, n0({
    disabled: l,
    group: i
  }), o) : u = U({
    name: l || !a ? "" : a
  }, o), yn(r, u, n);
};
function hp(e, t) {
  if (!_u) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = e._observe?.[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? rg(e, t) : u.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function rg(e, t) {
  const n = e._observe?.[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const bn = {
  mounted: hp,
  unmounted: rg
}, sg = N({
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
  ...ig(),
  ...be(),
  ...qe(),
  ...ea()
}, "VImg"), Xn = J()({
  name: "VImg",
  directives: {
    vIntersect: bn
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
      backgroundColorStyles: i
    } = He(() => e.color), {
      roundedClasses: o
    } = Je(e), r = st("VImg"), s = /* @__PURE__ */ se(""), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ se(e.eager ? "loading" : "idle"), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), v = _(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), k = _(() => v.value.aspect || d.value / f.value || 0);
    ue(() => e.src, () => {
      m(c.value !== "idle");
    }), ue(k, (A, B) => {
      !A && B && u.value && b(u.value);
    }), Ml(() => m());
    function m(A) {
      if (!(e.eager && A) && !(_u && !A && !e.eager)) {
        if (c.value = "loading", v.value.lazySrc) {
          const B = new Image();
          B.src = v.value.lazySrc, b(B, null);
        }
        v.value.src && Ie(() => {
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
    At(() => {
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
      const A = V("img", {
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
      return p(Lt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ue(B ? V("picture", {
          class: "v-img__picture"
        }, [B, A]) : A, [[kn, c.value === "loaded"]])]
      });
    }, I = () => p(Lt, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && c.value !== "loaded" && V("img", {
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
    }), C = () => a.placeholder ? p(Lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !a.error) && V("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, T = () => a.error ? p(Lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && V("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, P = () => e.gradient ? V("div", {
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
      return Ue(p(Vs, U({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !F.value
        }, l.value, o.value, e.class],
        style: [{
          width: ce(e.width === "auto" ? d.value : e.width)
        }, i.value, e.style]
      }, A, {
        aspectRatio: k.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => V(he, null, [p(g, null, null), p(I, null, null), p(P, null, null), p(C, null, null), p(T, null, null)]),
        default: a.default
      }), [[bn, {
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
}), Dt = N({
  border: [Boolean, Number, String]
}, "border");
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return {
    borderClasses: _(() => {
      const a = e.border;
      return a === !0 || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
    })
  };
}
const dt = N({
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
function ht(e) {
  return {
    elevationClasses: /* @__PURE__ */ E(() => {
      const n = /* @__PURE__ */ ot(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const yp = [null, "prominent", "default", "comfortable", "compact"], ug = N({
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
  ...Dt(),
  ...be(),
  ...dt(),
  ...qe(),
  ...Pe({
    tag: "header"
  }),
  ...$e()
}, "VToolbar"), _s = J()({
  name: "VToolbar",
  props: ug(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = He(() => e.color), {
      borderClasses: i
    } = Ot(e), {
      elevationClasses: o
    } = ht(e), {
      roundedClasses: r
    } = Je(e), {
      themeClasses: s
    } = Re(e), {
      rtlClasses: u
    } = ft(), c = /* @__PURE__ */ se(e.extended === null ? !!n.extension?.() : e.extended), d = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = _(() => c.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return nt({
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
        }, a.value, i.value, o.value, r.value, s.value, u.value, e.class]),
        style: fe([l.value, e.style])
      }, {
        default: () => [k && V("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? p(Te, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : p(Xn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), p(Te, {
          defaults: {
            VTabs: {
              height: ce(d.value)
            }
          }
        }, {
          default: () => [V("div", {
            class: "v-toolbar__content",
            style: {
              height: ce(d.value)
            }
          }, [n.prepend && V("div", {
            class: "v-toolbar__prepend"
          }, [n.prepend?.()]), v && p(Hu, {
            key: "title",
            text: e.title
          }, {
            text: n.title
          }), n.default?.(), n.append && V("div", {
            class: "v-toolbar__append"
          }, [n.append?.()])])]
        }), p(Te, {
          defaults: {
            VTabs: {
              height: ce(f.value)
            }
          }
        }, {
          default: () => [p(ir, null, {
            default: () => [c.value && V("div", {
              class: "v-toolbar__extension",
              style: {
                height: ce(f.value)
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
}), bp = N({
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
  let l = 0, i = 0;
  const o = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ se(0), s = /* @__PURE__ */ se(0), u = /* @__PURE__ */ se(0), c = /* @__PURE__ */ se(!1), d = /* @__PURE__ */ se(!1), f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ se(!0), m = _(() => Number(e.scrollThreshold)), y = _(() => We((m.value - r.value) / m.value || 0));
  function h(S) {
    const g = "window" in S ? window.innerHeight : S.clientHeight, I = "window" in S ? document.documentElement.scrollHeight : S.scrollHeight;
    return {
      clientHeight: g,
      scrollHeight: I
    };
  }
  function x() {
    const S = o.value;
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
    const S = o.value;
    if (!S || n && !n.value) return;
    l = r.value, r.value = "window" in S ? S.pageYOffset : S.scrollTop;
    const g = S instanceof Window ? document.documentElement.scrollHeight : S.scrollHeight;
    i !== g && (g > i && x(), i = g), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
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
  }), gt(() => {
    ue(() => e.scrollTarget, (S) => {
      const g = S ? document.querySelector(S) : window;
      g && g !== o.value && (o.value?.removeEventListener("scroll", b), o.value = g, o.value.addEventListener("scroll", b, {
        passive: !0
      }), Promise.resolve().then(() => {
        x();
      }));
    }, {
      immediate: !0
    }), window.addEventListener("resize", w, {
      passive: !0
    });
  }), At(() => {
    o.value?.removeEventListener("scroll", b), window.removeEventListener("resize", w);
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
function nl() {
  const e = /* @__PURE__ */ se(!1);
  return gt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: /* @__PURE__ */ E(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: /* @__PURE__ */ Ha(e)
  };
}
const kp = N({
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
  ...el(),
  ...bp(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), wp = J()({
  name: "VAppBar",
  props: kp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = ke(e, "modelValue"), i = _(() => {
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
    }), o = _(() => {
      const g = i.value;
      return g.hide || g.fullyHide || g.inverted || g.collapse || g.elevate || g.fadeImage || // behavior.shrink ||
      !l.value;
    }), r = _(() => {
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
      canScroll: o,
      layoutSize: r
    }), m = /* @__PURE__ */ E(() => i.value.hide || i.value.fullyHide), y = _(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), x = _(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), w = _(() => {
      if (i.value.hide && i.value.inverted) return 0;
      const g = a.value?.contentHeight ?? 0, I = a.value?.extensionHeight ?? 0;
      return m.value ? s.value < u.value || i.value.fullyHide ? g + I : g : g + I;
    });
    It(() => !!e.scrollBehavior, () => {
      tt(() => {
        if (!m.value) {
          l.value = !0;
          return;
        }
        if (i.value.inverted) {
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
    } = nl(), {
      layoutItemStyles: S
    } = tl({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => e.location),
      layoutSize: w,
      elementSize: /* @__PURE__ */ se(void 0),
      active: l,
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return te(() => {
      const g = _s.filterProps(e);
      return p(_s, U({
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
}), pp = [null, "default", "comfortable", "compact"], lt = N({
  density: {
    type: String,
    default: "default",
    validator: (e) => pp.includes(e)
  }
}, "density");
function Et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return {
    densityClasses: /* @__PURE__ */ E(() => `${t}--density-${e.density}`)
  };
}
const xp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ta(e, t) {
  return V(he, null, [e && V("span", {
    key: "overlay",
    class: ee(`${t}__overlay`)
  }, null), V("span", {
    key: "underlay",
    class: ee(`${t}__underlay`)
  }, null)]);
}
const ln = N({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => xp.includes(e)
  }
}, "variant");
function na(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  const n = /* @__PURE__ */ E(() => {
    const {
      variant: i
    } = St(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Yu(() => {
    const {
      variant: i,
      color: o
    } = St(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const cg = N({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Dt(),
  ...be(),
  ...lt(),
  ...dt(),
  ...qe(),
  ...Pe(),
  ...$e(),
  ...ln()
}, "VBtnGroup"), Is = J()({
  name: "VBtnGroup",
  props: cg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      densityClasses: l
    } = Et(e), {
      borderClasses: i
    } = Ot(e), {
      elevationClasses: o
    } = ht(e), {
      roundedClasses: r
    } = Je(e);
    nt({
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
      }, a.value, i.value, l.value, o.value, r.value, e.class]),
      style: fe(e.style)
    }, n));
  }
}), al = N({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), ll = N({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function ya(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = st("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Tt();
  Ge(/* @__PURE__ */ Symbol.for(`${t.description}:id`), l);
  const i = Le(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = /* @__PURE__ */ E(() => e.value), r = _(() => !!(i.disabled.value || e.disabled));
  function s() {
    i?.register({
      id: l,
      value: o,
      disabled: r
    }, a);
  }
  function u() {
    i?.unregister(l);
  }
  s(), At(() => u());
  const c = _(() => i.isSelected(l)), d = _(() => i.items.value[0].id === l), f = _(() => i.items.value[i.items.value.length - 1].id === l), v = _(() => c.value && [i.selectedClass.value, e.selectedClass]);
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
    toggle: () => i.select(l, !c.value),
    select: (k) => i.select(l, k),
    selectedClass: v,
    value: o,
    disabled: r,
    group: i,
    register: s,
    unregister: u
  };
}
function xa(e, t) {
  let n = !1;
  const a = /* @__PURE__ */ wt([]), l = ke(e, "modelValue", [], (f) => f === void 0 ? [] : dg(a, f === null ? [null] : Ke(f)), (f) => {
    const v = Vp(a, f);
    return e.multiple ? v : v[0];
  }), i = st("useGroup");
  function o(f, v) {
    const k = f, m = /* @__PURE__ */ Symbol.for(`${t.description}:id`), h = gl(m, i?.vnode).indexOf(v);
    mt(k.value) === void 0 && (k.value = h, k.useIndexAsValue = !0), h > -1 ? a.splice(h, 0, k) : a.push(k);
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
  gt(() => {
    s();
  }), At(() => {
    n = !0;
  }), Go(() => {
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
    register: o,
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
  return Ge(t, d), d;
}
function Cp(e, t) {
  const n = dg(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function dg(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((o) => pt(a, o.value)), i = e[a];
    l?.value !== void 0 ? n.push(l.id) : i?.useIndexAsValue && n.push(i.id);
  }), n;
}
function Vp(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value !== void 0 ? i.value : l);
    }
  }), n;
}
const Uu = /* @__PURE__ */ Symbol.for("vuetify:v-btn-toggle"), _p = N({
  ...cg(),
  ...al()
}, "VBtnToggle"), Ip = J()({
  name: "VBtnToggle",
  props: _p(),
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
      prev: i,
      select: o,
      selected: r
    } = xa(e, Uu);
    return te(() => {
      const s = Is.filterProps(e);
      return p(Is, U({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: a,
          next: l,
          prev: i,
          select: o,
          selected: r
        })]
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), Pp = ["x-small", "small", "default", "large", "x-large"], Ln = N({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return Au(() => {
    const n = e.size;
    let a, l;
    return _o(Pp, n) ? a = `${t}--size-${n}` : n && (l = {
      width: ce(n),
      height: ce(n)
    }), {
      sizeClasses: a,
      sizeStyles: l
    };
  });
}
const Tp = N({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: pe,
  opacity: [String, Number],
  ...be(),
  ...Ln(),
  ...Pe({
    tag: "i"
  }),
  ...$e()
}, "VIcon"), Ne = J()({
  name: "VIcon",
  props: Tp(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = /* @__PURE__ */ se(), {
      themeClasses: i
    } = ar(), {
      iconData: o
    } = R0(() => l.value || e.icon), {
      sizeClasses: r
    } = Bl(e), {
      textColorClasses: s,
      textColorStyles: u
    } = xt(() => e.color);
    return te(() => {
      const c = a.default?.();
      c && (l.value = pm(c).filter((f) => f.type === Mi && f.children && typeof f.children == "string")[0]?.children);
      const d = !!(n.onClick || n.onClickOnce);
      return p(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ee(["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: fe([{
          "--v-icon-opacity": e.opacity
        }, r.value ? void 0 : {
          fontSize: ce(e.size),
          height: ce(e.size),
          width: ce(e.size)
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
function Ni(e, t) {
  const n = /* @__PURE__ */ ae(), a = /* @__PURE__ */ se(!1);
  if (_u) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, t);
    at(() => {
      l.disconnect();
    }), ue(n, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const Ap = N({
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
  ...be(),
  ...Ln(),
  ...Pe({
    tag: "div"
  }),
  ...$e()
}, "VProgressCircular"), ba = J()({
  name: "VProgressCircular",
  props: Ap(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = /* @__PURE__ */ ae(), {
      themeClasses: o
    } = Re(e), {
      sizeClasses: r,
      sizeStyles: s
    } = Bl(e), {
      textColorClasses: u,
      textColorStyles: c
    } = xt(() => e.color), {
      textColorClasses: d,
      textColorStyles: f
    } = xt(() => e.bgColor), {
      intersectionRef: v,
      isIntersecting: k
    } = Ni(), {
      resizeRef: m,
      contentRect: y
    } = cn(), h = /* @__PURE__ */ E(() => We(parseFloat(e.modelValue), 0, 100)), x = /* @__PURE__ */ E(() => Number(e.width)), w = /* @__PURE__ */ E(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(x.value, 32)), b = /* @__PURE__ */ E(() => a / (1 - x.value / w.value) * 2), S = /* @__PURE__ */ E(() => x.value / w.value * b.value), g = /* @__PURE__ */ E(() => {
      const C = (100 - h.value) / 100 * l;
      return e.rounded && h.value > 0 && h.value < 100 ? ce(Math.min(l - 0.01, C + S.value)) : ce(C);
    }), I = _(() => {
      const C = Number(e.rotate);
      return e.rounded ? C + S.value / 2 / l * 360 : C;
    });
    return tt(() => {
      v.value = i.value, m.value = i.value;
    }), te(() => p(e.tag, {
      ref: i,
      class: ee(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": k.value,
        "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Tn())
      }, o.value, r.value, u.value, e.class]),
      style: fe([s.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : h.value
    }, {
      default: () => [V("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${I.value}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${b.value} ${b.value}`
      }, [V("circle", {
        class: ee(["v-progress-circular__underlay", d.value]),
        style: fe(f.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": S.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), V("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": S.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": g.value,
        "stroke-linecap": e.rounded ? "round" : void 0
      }, null)]), n.default && V("div", {
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
}, aa = N({
  location: String
}, "location");
function il(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = ft();
  return {
    locationStyles: _(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = ys(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[uf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? t ? s[uf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Dp = N({
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
  const n = /* @__PURE__ */ E(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = St(t);
    if (!r)
      return 0;
    if (!e.chunkCount)
      return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = /* @__PURE__ */ E(() => Number(e.chunkGap)), i = _(() => {
    if (!n.value)
      return {};
    const r = ce(l.value), s = ce(a.value);
    return {
      maskRepeat: "repeat-x",
      maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`,
      maskSize: `calc(${s} + ${r}) 100%`
    };
  });
  function o(r) {
    const s = St(t);
    if (!s)
      return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return We(0, d * c - u / 2, 100);
  }
  return {
    hasChunks: n,
    chunksMaskStyles: i,
    snapValueToChunk: o
  };
}
const Mp = N({
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
  ...be(),
  ...aa({
    location: "top"
  }),
  ...qe(),
  ...Pe(),
  ...$e()
}, "VProgressLinear"), or = J()({
  name: "VProgressLinear",
  props: Mp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = ke(e, "modelValue"), {
      isRtl: i,
      rtlClasses: o
    } = ft(), {
      themeClasses: r
    } = Re(e), {
      locationStyles: s
    } = il(e), {
      textColorClasses: u,
      textColorStyles: c
    } = xt(() => e.color), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = He(() => e.bgColor || e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: k
    } = He(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: m,
      backgroundColorStyles: y
    } = He(() => e.color), {
      roundedClasses: h
    } = Je(e), {
      intersectionRef: x,
      isIntersecting: w
    } = Ni(), b = _(() => parseFloat(e.max)), S = _(() => parseFloat(e.height)), g = _(() => We(parseFloat(e.bufferValue) / b.value * 100, 0, 100)), I = _(() => We(parseFloat(l.value) / b.value * 100, 0, 100)), C = _(() => i.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = /* @__PURE__ */ se(0), {
      hasChunks: F,
      chunksMaskStyles: A,
      snapValueToChunk: B
    } = Ep(e, P);
    It(F, () => {
      const {
        resizeRef: R
      } = cn((Q) => P.value = Q[0].contentRect.width);
      tt(() => R.value = a.value);
    });
    const D = _(() => F.value ? B(g.value) : g.value), L = _(() => F.value ? B(I.value) : I.value);
    function W(R) {
      if (!x.value) return;
      const {
        left: Q,
        right: q,
        width: O
      } = x.value.getBoundingClientRect(), ne = C.value ? O - R.clientX + (q - O) : R.clientX - Q;
      l.value = Math.round(ne / O * b.value);
    }
    return tt(() => {
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
      }, h.value, r.value, o.value, e.class]),
      style: fe([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? ce(S.value) : 0,
        "--v-progress-linear-height": ce(S.value),
        ...e.absolute ? s.value : {}
      }, A.value, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), b.value),
      onClick: e.clickable && W
    }, {
      default: () => [e.stream && V("div", {
        key: "stream",
        class: ee(["v-progress-linear__stream", u.value]),
        style: {
          ...c.value,
          [C.value ? "left" : "right"]: ce(-S.value),
          borderTop: `${ce(S.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${ce(S.value / 4)})`,
          width: ce(100 - g.value, "%"),
          "--v-progress-linear-stream-to": ce(S.value * (C.value ? 1 : -1))
        }
      }, null), V("div", {
        class: ee(["v-progress-linear__background", d.value]),
        style: fe([f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), V("div", {
        class: ee(["v-progress-linear__buffer", v.value]),
        style: fe([k.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: ce(D.value, "%")
        }])
      }, null), p(ga, {
        name: T.value
      }, {
        default: () => [e.indeterminate ? V("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((R) => V("div", {
          key: R,
          class: ee(["v-progress-linear__indeterminate", R, m.value]),
          style: fe(y.value)
        }, null))]) : V("div", {
          class: ee(["v-progress-linear__determinate", m.value]),
          style: fe([y.value, {
            width: ce(L.value, "%")
          }])
        }, null)]
      }), n.default && V("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: I.value,
        buffer: g.value
      })])]
    })), {};
  }
}), rr = N({
  loading: [Boolean, String]
}, "loader");
function Ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return {
    loaderClasses: /* @__PURE__ */ E(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Hi(e, t) {
  let {
    slots: n
  } = t;
  return V("div", {
    class: ee(`${e.name}__loader`)
  }, [n.default?.({
    color: e.color,
    isActive: e.active
  }) || p(or, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Bp = ["static", "relative", "fixed", "absolute", "sticky"], Fl = N({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Bp.includes(e)
    )
  }
}, "position");
function Ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  return {
    positionClasses: /* @__PURE__ */ E(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Fp() {
  const e = st("useRoute");
  return _(() => e?.proxy?.$route);
}
function fg() {
  return st("useRouter")?.proxy?.$router;
}
function Wi(e, t) {
  const n = xS("RouterLink"), a = /* @__PURE__ */ E(() => !!(e.href || e.to)), l = _(() => a?.value || Td(t, "click") || Td(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = /* @__PURE__ */ E(() => e.href);
    return {
      isLink: a,
      isRouterLink: /* @__PURE__ */ E(() => !1),
      isClickable: l,
      href: d,
      linkProps: /* @__PURE__ */ wt({
        href: d
      })
    };
  }
  const i = n.useLink({
    to: /* @__PURE__ */ E(() => e.to || ""),
    replace: /* @__PURE__ */ E(() => e.replace)
  }), o = _(() => e.to ? i : void 0), r = Fp(), s = _(() => o.value ? e.exact ? r.value ? o.value.isExactActive?.value && pt(o.value.route.value.query, r.value.query) : o.value.isExactActive?.value ?? !1 : o.value.isActive?.value ?? !1 : !1), u = _(() => e.to ? o.value?.route.value.href : e.href);
  return {
    isLink: a,
    isRouterLink: /* @__PURE__ */ E(() => !!e.to),
    isClickable: l,
    isActive: s,
    route: o.value?.route,
    navigate: o.value?.navigate,
    href: u,
    linkProps: /* @__PURE__ */ wt({
      href: u,
      "aria-current": /* @__PURE__ */ E(() => s.value ? "page" : void 0),
      "aria-disabled": /* @__PURE__ */ E(() => e.disabled && a.value ? "true" : void 0),
      tabindex: /* @__PURE__ */ E(() => e.disabled && a.value ? "-1" : void 0)
    })
  };
}
const zi = N({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Ur = !1;
function Lp(e, t) {
  let n = !1, a, l;
  ze && e?.beforeEach && (Ie(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      Ur ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Ur = !0;
    }), l = e?.afterEach(() => {
      Ur = !1;
    });
  }), at(() => {
    window.removeEventListener("popstate", i), a?.(), l?.();
  }));
  function i(o) {
    o.state?.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function $p(e, t) {
  ue(() => e.isActive?.value, (n) => {
    e.isLink.value && n != null && t && Ie(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const Ps = /* @__PURE__ */ Symbol("rippleStop"), Op = 80;
function cf(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Ts(e) {
  return e.constructor.name === "TouchEvent";
}
function vg(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Np = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!vg(e)) {
    const d = t.getBoundingClientRect(), f = Ts(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let i = 0, o = 0.3;
  t._ripple?.circle ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? r : `${a - i}px`, c = n.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: u,
    y: c,
    centerX: r,
    centerY: s
  };
}, Mo = {
  /* eslint-disable max-statements */
  show(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: u,
      centerY: c
    } = Np(e, t, n), d = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), cf(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), cf(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((i) => !i.dataset.isHiding);
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
function wi(e) {
  const t = {}, n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[Ps])) {
    if (e[Ps] = !0, Ts(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || vg(e), n._ripple.class && (t.class = n._ripple.class), Ts(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Mo.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Op);
    } else
      Mo.show(e, n, t);
  }
}
function Bo(e) {
  e[Ps] = !0;
}
function Gt(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Gt(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Mo.hide(t);
  }
}
function gg(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let pi = !1;
function Rp(e, t) {
  !pi && t.includes(e.key) && (pi = !0, wi(e));
}
function hg(e) {
  pi = !1, Gt(e);
}
function yg(e) {
  pi && (pi = !1, Gt(e));
}
function bg(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = mg(a);
  i || Mo.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const o = ja(a) ? a : {};
  o.class && (e._ripple.class = o.class);
  const r = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => Rp(s, r), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Bo, {
        passive: !0
      }), e.addEventListener("mousedown", Bo);
      return;
    }
    e.addEventListener("touchstart", wi, {
      passive: !0
    }), e.addEventListener("touchend", Gt, {
      passive: !0
    }), e.addEventListener("touchmove", gg, {
      passive: !0
    }), e.addEventListener("touchcancel", Gt), e.addEventListener("mousedown", wi), e.addEventListener("mouseup", Gt), e.addEventListener("mouseleave", Gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", hg), e.addEventListener("blur", yg), e.addEventListener("dragstart", Gt, {
      passive: !0
    });
  } else !i && n && Sg(e);
}
function Sg(e) {
  e.removeEventListener("touchstart", Bo), e.removeEventListener("mousedown", Bo), e.removeEventListener("touchstart", wi), e.removeEventListener("touchend", Gt), e.removeEventListener("touchmove", gg), e.removeEventListener("touchcancel", Gt), e.removeEventListener("mousedown", wi), e.removeEventListener("mouseup", Gt), e.removeEventListener("mouseleave", Gt), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", hg), e.removeEventListener("blur", yg), e.removeEventListener("dragstart", Gt);
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
}, sr = N({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Uu
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: pe,
  appendIcon: pe,
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
  ...Dt(),
  ...be(),
  ...lt(),
  ...ut(),
  ...dt(),
  ...ll(),
  ...rr(),
  ...aa(),
  ...Fl(),
  ...qe(),
  ...zi(),
  ...Ln(),
  ...Pe({
    tag: "button"
  }),
  ...$e(),
  ...ln({
    variant: "elevated"
  })
}, "VBtn"), Fe = J()({
  name: "VBtn",
  props: sr(),
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
    } = Re(e), {
      borderClasses: i
    } = Ot(e), {
      densityClasses: o
    } = Et(e), {
      dimensionStyles: r
    } = ct(e), {
      elevationClasses: s
    } = ht(e), {
      loaderClasses: u
    } = Ri(e), {
      locationStyles: c
    } = il(e), {
      positionClasses: d
    } = Ll(e), {
      roundedClasses: f
    } = Je(e), {
      sizeClasses: v,
      sizeStyles: k
    } = Bl(e), m = ya(e, e.symbol, !1), y = Wi(e, n), h = _(() => e.active !== void 0 ? e.active : y.isRouterLink.value ? y.isActive?.value : m?.isSelected.value), x = /* @__PURE__ */ E(() => h.value ? e.activeColor ?? e.color : e.color), w = _(() => ({
      color: m?.isSelected.value && (!y.isLink.value || y.isActive?.value) || !m || y.isActive?.value ? x.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    })), {
      colorClasses: b,
      colorStyles: S,
      variantClasses: g
    } = na(w), I = _(() => m?.disabled.value || e.disabled), C = /* @__PURE__ */ E(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function P(F) {
      I.value || y.isLink.value && (F.metaKey || F.ctrlKey || F.shiftKey || F.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? y.navigate?.(F) : m?.toggle());
    }
    return $p(y, m?.select), te(() => {
      const F = y.isLink.value ? "a" : e.tag, A = !!(e.prependIcon || a.prepend), B = !!(e.appendIcon || a.append), D = !!(e.icon && e.icon !== !0);
      return Ue(p(F, U(y.linkProps, {
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
        }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, i.value, b.value, o.value, s.value, u.value, d.value, f.value, v.value, g.value, e.class],
        style: [S.value, r.value, c.value, k.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: I.value && F !== "a" || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: P,
        value: T.value
      }), {
        default: () => [ta(!0, "v-btn"), !e.icon && A && V("span", {
          key: "prepend",
          class: "v-btn__prepend"
        }, [a.prepend ? p(Te, {
          key: "prepend-defaults",
          disabled: !e.prependIcon,
          defaults: {
            VIcon: {
              icon: e.prependIcon
            }
          }
        }, a.prepend) : p(Ne, {
          key: "prepend-icon",
          icon: e.prependIcon
        }, null)]), V("span", {
          class: "v-btn__content",
          "data-no-activator": ""
        }, [!a.default && D ? p(Ne, {
          key: "content-icon",
          icon: e.icon
        }, null) : p(Te, {
          key: "content-defaults",
          disabled: !D,
          defaults: {
            VIcon: {
              icon: e.icon
            }
          }
        }, {
          default: () => [a.default?.() ?? Pn(e.text)]
        })]), !e.icon && B && V("span", {
          key: "append",
          class: "v-btn__append"
        }, [a.append ? p(Te, {
          key: "append-defaults",
          disabled: !e.appendIcon,
          defaults: {
            VIcon: {
              icon: e.appendIcon
            }
          }
        }, a.append) : p(Ne, {
          key: "append-icon",
          icon: e.appendIcon
        }, null)]), !!e.loading && V("span", {
          key: "loader",
          class: "v-btn__loader"
        }, [a.loader?.() ?? p(ba, {
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
}), jp = N({
  ...Ee(sr({
    icon: "$menu",
    variant: "text"
  }), ["spaced"])
}, "VAppBarNavIcon"), Yp = J()({
  name: "VAppBarNavIcon",
  props: jp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(Fe, U(e, {
      class: ["v-app-bar-nav-icon"]
    }), n)), {};
  }
}), Up = J()({
  name: "VAppBarTitle",
  props: ng(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(Hu, U(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
}), kg = Qn("v-alert-title"), wg = N({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  }
}, "iconSize");
function pg(e, t) {
  return {
    iconSize: _(() => {
      const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
      return a.has(l) ? a.get(l) : l;
    })
  };
}
const Kp = ["success", "info", "warning", "error"], Gp = N({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: pe,
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
  ...be(),
  ...lt(),
  ...ut(),
  ...dt(),
  ...wg(),
  ...aa(),
  ...Fl(),
  ...qe(),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "flat"
  })
}, "VAlert"), qp = J()({
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
    const l = ke(e, "modelValue"), i = /* @__PURE__ */ E(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), {
      iconSize: o
    } = pg(e, () => e.prominent ? 44 : void 0), {
      themeClasses: r
    } = Re(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: c
    } = na(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      densityClasses: d
    } = Et(e), {
      dimensionStyles: f
    } = ct(e), {
      elevationClasses: v
    } = ht(e), {
      locationStyles: k
    } = il(e), {
      positionClasses: m
    } = Ll(e), {
      roundedClasses: y
    } = Je(e), {
      textColorClasses: h,
      textColorStyles: x
    } = xt(() => e.borderColor), {
      t: w
    } = je(), b = /* @__PURE__ */ E(() => ({
      "aria-label": w(e.closeLabel),
      onClick(S) {
        l.value = !1, n("click:close", S);
      }
    }));
    return () => {
      const S = !!(a.prepend || i.value), g = !!(a.title || e.title), I = !!(a.close || e.closable), C = {
        density: e.density,
        icon: i.value,
        size: e.iconSize || e.prominent ? o.value : void 0
      };
      return l.value && p(e.tag, {
        class: ee(["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, d.value, v.value, m.value, y.value, c.value, e.class]),
        style: fe([u.value, f.value, k.value, e.style]),
        role: "alert"
      }, {
        default: () => [ta(!1, "v-alert"), e.border && V("div", {
          key: "border",
          class: ee(["v-alert__border", h.value]),
          style: fe(x.value)
        }, null), S && V("div", {
          key: "prepend",
          class: "v-alert__prepend"
        }, [a.prepend ? p(Te, {
          key: "prepend-defaults",
          disabled: !i.value,
          defaults: {
            VIcon: {
              ...C
            }
          }
        }, a.prepend) : p(Ne, U({
          key: "prepend-icon"
        }, C), null)]), V("div", {
          class: "v-alert__content"
        }, [g && p(kg, {
          key: "title"
        }, {
          default: () => [a.title?.() ?? e.title]
        }), a.text?.() ?? e.text, a.default?.()]), a.append && V("div", {
          key: "append",
          class: "v-alert__append"
        }, [a.append()]), I && V("div", {
          key: "close",
          class: "v-alert__close"
        }, [a.close ? p(Te, {
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
        }) : p(Fe, U({
          key: "close-btn",
          icon: e.closeIcon,
          size: "x-small",
          variant: "text"
        }, b.value), null)])]
      });
    };
  }
}), Xp = N({
  start: Boolean,
  end: Boolean,
  icon: pe,
  image: String,
  text: String,
  ...Dt(),
  ...be(),
  ...lt(),
  ...qe(),
  ...Ln(),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "flat"
  })
}, "VAvatar"), tn = J()({
  name: "VAvatar",
  props: Xp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      borderClasses: l
    } = Ot(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = na(e), {
      densityClasses: s
    } = Et(e), {
      roundedClasses: u
    } = Je(e), {
      sizeClasses: c,
      sizeStyles: d
    } = Bl(e);
    return te(() => p(e.tag, {
      class: ee(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, u.value, c.value, r.value, e.class]),
      style: fe([o.value, d.value, e.style])
    }, {
      default: () => [n.default ? p(Te, {
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
      }) : e.image ? p(Xn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? p(Ne, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, ta(!1, "v-avatar")]
    })), {};
  }
}), Zp = N({
  text: String,
  onClick: Ct(),
  ...be(),
  ...$e()
}, "VLabel"), $l = J()({
  name: "VLabel",
  props: Zp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => V("label", {
      class: ee(["v-label", {
        "v-label--clickable": !!e.onClick
      }, e.class]),
      style: fe(e.style),
      onClick: e.onClick
    }, [e.text, n.default?.()])), {};
  }
}), xg = /* @__PURE__ */ Symbol.for("vuetify:selection-control-group"), Ku = N({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: pe,
  trueIcon: pe,
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
    default: pt
  },
  ...be(),
  ...lt(),
  ...$e()
}, "SelectionControlGroup"), Jp = N({
  ...Ku({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Cg = J()({
  name: "VSelectionControlGroup",
  props: Jp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), l = Tt(), i = /* @__PURE__ */ E(() => e.id || `v-selection-control-group-${l}`), o = /* @__PURE__ */ E(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Ge(xg, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), at(() => {
          r.delete(s);
        });
      }
    }), nt({
      [e.defaultsTarget]: {
        color: /* @__PURE__ */ E(() => e.color),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        density: /* @__PURE__ */ E(() => e.density),
        error: /* @__PURE__ */ E(() => e.error),
        inline: /* @__PURE__ */ E(() => e.inline),
        modelValue: a,
        multiple: /* @__PURE__ */ E(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: /* @__PURE__ */ E(() => e.falseIcon),
        trueIcon: /* @__PURE__ */ E(() => e.trueIcon),
        readonly: /* @__PURE__ */ E(() => e.readonly),
        ripple: /* @__PURE__ */ E(() => e.ripple),
        type: /* @__PURE__ */ E(() => e.type),
        valueComparator: /* @__PURE__ */ E(() => e.valueComparator)
      }
    }), te(() => V("div", {
      class: ee(["v-selection-control-group", {
        "v-selection-control-group--inline": e.inline
      }, e.class]),
      style: fe(e.style),
      role: e.type === "radio" ? "radiogroup" : void 0
    }, [n.default?.()])), {};
  }
}), ur = N({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...be(),
  ...Ku()
}, "VSelectionControl");
function Qp(e) {
  const t = Le(xg, void 0), {
    densityClasses: n
  } = Et(e), a = ke(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = _(() => e.falseValue !== void 0 ? e.falseValue : !1), o = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({
    get() {
      const v = t ? t.modelValue.value : a.value;
      return o.value ? Ke(v).some((k) => e.valueComparator(k, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const k = v ? l.value : i.value;
      let m = k;
      o.value && (m = v ? [...Ke(a.value), k] : Ke(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = m : a.value = m;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = xt(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: c,
    backgroundColorStyles: d
  } = He(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: d,
    icon: f
  };
}
const Sa = J()({
  name: "VSelectionControl",
  directives: {
    vRipple: Vt
  },
  inheritAttrs: !1,
  props: ur(),
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
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: u,
      backgroundColorClasses: c,
      backgroundColorStyles: d,
      trueValue: f
    } = Qp(e), v = Tt(), k = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ ae(), h = /* @__PURE__ */ E(() => e.id || `input-${v}`), x = /* @__PURE__ */ E(() => !e.disabled && !e.readonly);
    l?.onForceUpdate(() => {
      y.value && (y.value.checked = r.value);
    });
    function w(I) {
      x.value && (k.value = !0, Cl(I.target, ":focus-visible") !== !1 && (m.value = !0));
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
      e.readonly && l && Ie(() => l.forceUpdate()), r.value = I.target.checked;
    }
    return te(() => {
      const I = a.label ? a.label({
        label: e.label,
        props: {
          for: h.value
        }
      }) : e.label, [C, T] = Bn(n), P = V("input", U({
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
      return V("div", U({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": k.value,
          "v-selection-control--focus-visible": m.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, C, {
        style: e.style
      }), [V("div", {
        class: ee(["v-selection-control__wrapper", s.value]),
        style: fe(u.value)
      }, [a.default?.({
        backgroundColorClasses: c,
        backgroundColorStyles: d
      }), Ue(V("div", {
        class: ee(["v-selection-control__input"])
      }, [a.input?.({
        model: r,
        textColorClasses: s,
        textColorStyles: u,
        backgroundColorClasses: c,
        backgroundColorStyles: d,
        inputNode: P,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: b,
          id: h.value
        }
      }) ?? V(he, null, [o.value && p(Ne, {
        key: "icon",
        icon: o.value
      }, null), P])]), [[Vt, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), I && p($l, {
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
}), Vg = N({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: pe,
    default: "$checkboxIndeterminate"
  },
  ...ur({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Sn = J()({
  name: "VCheckboxBtn",
  props: Vg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "indeterminate"), l = ke(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = /* @__PURE__ */ E(() => a.value ? e.indeterminateIcon : e.falseIcon), r = /* @__PURE__ */ E(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return te(() => {
      const s = Ee(Sa.filterProps(e), ["modelValue"]);
      return p(Sa, U(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(u) => l.value = u, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function ji(e) {
  const {
    t
  } = je();
  function n(a) {
    let {
      name: l,
      color: i,
      ...o
    } = a;
    const r = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), Li(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return p(Ne, U({
      icon: e[`${l}Icon`],
      "aria-label": c,
      onClick: s,
      onKeydown: u,
      color: i
    }, o), null);
  }
  return {
    InputIcon: n
  };
}
const ex = N({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...be(),
  ...ea({
    transition: {
      component: zu,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), _g = J()({
  name: "VMessages",
  props: ex(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => Ke(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = xt(() => e.color);
    return te(() => p(Lt, {
      transition: e.transition,
      tag: "div",
      class: ee(["v-messages", l.value, e.class]),
      style: fe([i.value, e.style])
    }, {
      default: () => [e.active && a.value.map((o, r) => V("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Yi = N({
  focused: Boolean,
  "onUpdate:focused": Ct()
}, "focus");
function la(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn();
  const n = ke(e, "focused"), a = /* @__PURE__ */ E(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const Ig = /* @__PURE__ */ Symbol.for("vuetify:form"), tx = N({
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
  const t = ke(e, "modelValue"), n = /* @__PURE__ */ E(() => e.disabled), a = /* @__PURE__ */ E(() => e.readonly), l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ ae([]), o = /* @__PURE__ */ ae([]);
  async function r() {
    const c = [];
    let d = !0;
    o.value = [], l.value = !0;
    for (const f of i.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = !1, c.push({
        id: f.id,
        errorMessages: v
      })), !d && e.fastFail) break;
    }
    return o.value = c, l.value = !1, {
      valid: d,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((c) => c.reset());
  }
  function u() {
    i.value.forEach((c) => c.resetValidation());
  }
  return ue(i, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of i.value)
      v.isValid === !1 ? (d++, f.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && c++;
    o.value = f, t.value = d > 0 ? !1 : c === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Ge(Ig, {
    register: (c) => {
      let {
        id: d,
        vm: f,
        validate: v,
        reset: k,
        resetValidation: m
      } = c;
      i.value.some((y) => y.id === d), i.value.push({
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
      i.value = i.value.filter((d) => d.id !== c);
    },
    update: (c, d, f) => {
      const v = i.value.find((k) => k.id === c);
      v && (v.isValid = d, v.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: /* @__PURE__ */ E(() => e.validateOn)
  }), {
    errors: o,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validate: r,
    reset: s,
    resetValidation: u
  };
}
function Ol(e) {
  const t = Le(Ig, null);
  return {
    ...t,
    isReadonly: _(() => !!(e?.readonly ?? t?.isReadonly.value)),
    isDisabled: _(() => !!(e?.disabled ?? t?.isDisabled.value))
  };
}
const ax = /* @__PURE__ */ Symbol.for("vuetify:rules");
function lx(e) {
  const t = Le(ax, null);
  if (!e) {
    if (!t)
      throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return t?.resolve(e) ?? /* @__PURE__ */ E(e);
}
const Pg = N({
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
  ...Yi()
}, "validation");
function Tg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tt();
  const a = ke(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Ol(e), o = lx(() => e.rules), r = /* @__PURE__ */ ae([]), s = /* @__PURE__ */ se(!0), u = _(() => !!(Ke(a.value === "" ? null : a.value).length || Ke(l.value === "" ? null : l.value).length)), c = _(() => e.errorMessages?.length ? Ke(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value), d = _(() => {
    let b = (e.validateOn ?? i.validateOn?.value) || "input";
    b === "lazy" && (b = "input lazy"), b === "eager" && (b = "input eager");
    const S = new Set(b?.split(" ") ?? []);
    return {
      input: S.has("input"),
      blur: S.has("blur") || S.has("input") || S.has("invalid-input"),
      invalidInput: S.has("invalid-input"),
      lazy: S.has("lazy"),
      eager: S.has("eager")
    };
  }), f = _(() => e.error || e.errorMessages?.length ? !1 : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : !0 : !r.value.length : !0), v = /* @__PURE__ */ se(!1), k = _(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: i.isDisabled.value,
    [`${t}--readonly`]: i.isReadonly.value
  })), m = st("validation"), y = _(() => e.name ?? mt(n));
  Ml(() => {
    i.register?.({
      id: y.value,
      vm: m,
      validate: w,
      reset: h,
      resetValidation: x
    });
  }), At(() => {
    i.unregister?.(y.value);
  }), gt(async () => {
    d.value.lazy || await w(!d.value.eager), i.update?.(y.value, f.value, c.value);
  }), It(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    ue(l, () => {
      if (l.value != null)
        w();
      else if (e.focused) {
        const b = ue(() => e.focused, (S) => {
          S || w(), b();
        });
      }
    });
  }), It(() => d.value.blur, () => {
    ue(() => e.focused, (b) => {
      b || w();
    });
  }), ue([f, c], () => {
    i.update?.(y.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Ie(), await x();
  }
  async function x() {
    s.value = !0, d.value.lazy ? r.value = [] : await w(!d.value.eager);
  }
  async function w() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const S = [];
    v.value = !0;
    for (const g of o.value) {
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
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: s,
    isValid: f,
    isValidating: v,
    reset: h,
    resetValidation: x,
    validate: w,
    validationClasses: k
  };
}
const ia = N({
  id: String,
  appendIcon: pe,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: pe,
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
  "onClick:prepend": Ct(),
  "onClick:append": Ct(),
  ...be(),
  ...lt(),
  ...zt(ut(), ["maxWidth", "minWidth", "width"]),
  ...$e(),
  ...Pg()
}, "VInput"), Pt = J()({
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
      densityClasses: i
    } = Et(e), {
      dimensionStyles: o
    } = ct(e), {
      themeClasses: r
    } = Re(e), {
      rtlClasses: s
    } = ft(), {
      InputIcon: u
    } = ji(e), c = Tt(), d = _(() => e.id || `input-${c}`), {
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
    } = Tg(e, "v-input", d), I = _(() => e.errorMessages?.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages), C = /* @__PURE__ */ E(() => I.value.length > 0), T = /* @__PURE__ */ E(() => !e.hideDetails || e.hideDetails === "auto" && (C.value || !!a.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), F = _(() => ({
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
      return V("div", {
        class: ee(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, g.value, e.class]),
        style: fe([o.value, e.style])
      }, [D && V("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [a.prepend ? a.prepend(F.value) : e.prependIcon && p(u, {
        key: "prepend-icon",
        name: "prepend",
        color: B.value
      }, null)]), a.default && V("div", {
        class: "v-input__control"
      }, [a.default?.(F.value)]), L && V("div", {
        key: "append",
        class: "v-input__append"
      }, [a.append ? a.append(F.value) : e.appendIcon && p(u, {
        key: "append-icon",
        name: "append",
        color: B.value
      }, null)]), T.value && V("div", {
        id: P.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [p(_g, {
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
}), Kr = /* @__PURE__ */ Symbol("Forwarded refs");
function Gr(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function yt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[Kr] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const r of n) {
          if (!r.value) continue;
          const s = Gr(r.value, i) ?? ("_" in r.value ? Gr(r.value._?.setupState, i) : void 0);
          if (s) return s;
        }
        for (const r of n) {
          const s = r.value && r.value[Kr];
          if (!s) continue;
          const u = s.slice();
          for (; u.length; ) {
            const c = u.shift(), d = Gr(c.value, i);
            if (d) return d;
            const f = c.value && c.value[Kr];
            f && u.push(...f);
          }
        }
      }
    }
  });
}
const ix = N({
  ...Ee(ia(), ["direction"]),
  ...Ee(Vg(), ["inline"])
}, "VCheckbox"), ox = J()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: ix(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = ke(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = la(e), s = /* @__PURE__ */ ae(), u = Tt();
    return te(() => {
      const [c, d] = Bn(n), f = Pt.filterProps(e), v = Sn.filterProps(e);
      return p(Pt, U({
        ref: s,
        class: ["v-checkbox", e.class]
      }, c, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (k) => l.value = k,
        id: e.id || `checkbox-${u}`,
        focused: i.value,
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
          return p(Sn, U(v, {
            id: m.value,
            "aria-describedby": y.value,
            disabled: h.value,
            readonly: x.value
          }, d, {
            error: w.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (b) => l.value = b,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), yt({}, s);
  }
});
function rx(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = xi(l, n), o = Ag(l, a, n), r = xi(l, t), s = Dg(l, t), u = r * 0.4;
  return o > s ? s - u : o + i < s + r ? s - i + r + u : o;
}
function sx(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: a
  } = e;
  const l = xi(a, n), i = Dg(a, t), o = xi(a, t);
  return i - l / 2 + o / 2;
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
    scrollWidth: i
  } = n;
  return e ? t ? i - l + a : a : n.scrollTop;
}
function xi(e, t) {
  return t?.[e ? "offsetWidth" : "offsetHeight"] || 0;
}
function Dg(e, t) {
  return t?.[e ? "offsetLeft" : "offsetTop"] || 0;
}
const Gu = /* @__PURE__ */ Symbol.for("vuetify:v-slide-group"), qu = N({
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
    default: Gu
  },
  nextIcon: {
    type: pe,
    default: "$next"
  },
  prevIcon: {
    type: pe,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e)
  },
  ...be(),
  ...Qa({
    mobile: null
  }),
  ...Pe(),
  ...al({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Ci = J()({
  name: "VSlideGroup",
  props: qu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = ft(), {
      displayClasses: l,
      mobile: i
    } = nn(e), o = xa(e, e.symbol), r = /* @__PURE__ */ se(!1), s = /* @__PURE__ */ se(0), u = /* @__PURE__ */ se(0), c = /* @__PURE__ */ se(0), d = _(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: v
    } = cn(), {
      resizeRef: k,
      contentRect: m
    } = cn(), y = Rw(), h = _(() => ({
      container: f.el,
      duration: 200,
      easing: "easeOutQuart"
    })), x = _(() => o.selected.value.length ? o.items.value.findIndex((K) => K.id === o.selected.value[0]) : -1), w = _(() => o.selected.value.length ? o.items.value.findIndex((K) => K.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ze) {
      let K = -1;
      ue(() => [o.selected.value, v.value, m.value, d.value], () => {
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
      if (!ze || !f.el) return;
      const H = xi(d.value, f.el), G = Ag(d.value, a.value, f.el);
      if (!(df(d.value, f.el) <= H || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(K - G) < 16)) {
        if (d.value && a.value && f.el) {
          const {
            scrollWidth: ve,
            offsetWidth: Z
          } = f.el;
          K = ve - Z - K;
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
        H = La(k.el)[0];
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
          scrollWidth: ve,
          offsetWidth: Z
        } = f.el;
        X += ve - Z;
      }
      g(X);
    }
    const R = _(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Q = _(() => r.value || Math.abs(s.value) > 0), q = _(() => {
      switch (e.showArrows) {
        case "never":
          return !1;
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return Q.value;
        // Always show on mobile
        case "mobile":
          return i.value || Q.value;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && Q.value;
      }
    }), O = _(() => Math.abs(s.value) > 1), ne = _(() => {
      if (!f.value || !Q.value) return !1;
      const K = df(d.value, f.el), H = ux(d.value, f.el);
      return K - H - Math.abs(s.value) > 1;
    });
    return te(() => p(e.tag, {
      class: ee(["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": q.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class]),
      style: fe(e.style),
      tabindex: b.value || o.selected.value.length ? -1 : 0,
      onFocus: F
    }, {
      default: () => [q.value && V("div", {
        key: "prev",
        class: ee(["v-slide-group__prev", {
          "v-slide-group__prev--disabled": !O.value
        }]),
        onMousedown: A,
        onClick: () => O.value && W("prev")
      }, [n.prev?.(R.value) ?? p(ki, null, {
        default: () => [p(Ne, {
          icon: a.value ? e.nextIcon : e.prevIcon
        }, null)]
      })]), V("div", {
        key: "container",
        ref: f,
        class: ee(["v-slide-group__container", e.contentClass]),
        onScroll: I
      }, [V("div", {
        ref: k,
        class: "v-slide-group__content",
        onFocusin: C,
        onFocusout: T,
        onKeydown: B
      }, [n.default?.(R.value)])]), q.value && V("div", {
        key: "next",
        class: ee(["v-slide-group__next", {
          "v-slide-group__next--disabled": !ne.value
        }]),
        onMousedown: A,
        onClick: () => ne.value && W("next")
      }, [n.next?.(R.value) ?? p(ki, null, {
        default: () => [p(Ne, {
          icon: a.value ? e.prevIcon : e.nextIcon
        }, null)]
      })])]
    })), {
      selected: o.selected,
      scrollTo: W,
      scrollOffset: s,
      focus: L,
      hasPrev: O,
      hasNext: ne
    };
  }
}), Eg = /* @__PURE__ */ Symbol.for("vuetify:v-chip-group"), cx = N({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: pt
  },
  ...qu({
    scrollToActive: !1
  }),
  ...be(),
  ...al({
    selectedClass: "v-chip--selected"
  }),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "tonal"
  })
}, "VChipGroup"), dx = J()({
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
    } = Re(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = xa(e, Eg);
    return nt({
      VChip: {
        baseColor: /* @__PURE__ */ E(() => e.baseColor),
        color: /* @__PURE__ */ E(() => e.color),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        filter: /* @__PURE__ */ E(() => e.filter),
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => {
      const u = Ci.filterProps(e);
      return p(Ci, U(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: s.value
        })]
      });
    }), {};
  }
}), fx = N({
  activeClass: String,
  appendAvatar: String,
  appendIcon: pe,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: pe,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: pe,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: pe,
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
  onClick: Ct(),
  onClickOnce: Ct(),
  ...Dt(),
  ...be(),
  ...lt(),
  ...dt(),
  ...ll(),
  ...qe(),
  ...zi(),
  ...Ln(),
  ...Pe({
    tag: "span"
  }),
  ...$e(),
  ...ln({
    variant: "tonal"
  })
}, "VChip"), Zn = J()({
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
      t: i
    } = je(), {
      borderClasses: o
    } = Ot(e), {
      densityClasses: r
    } = Et(e), {
      elevationClasses: s
    } = ht(e), {
      roundedClasses: u
    } = Je(e), {
      sizeClasses: c
    } = Bl(e), {
      themeClasses: d
    } = Re(e), f = ke(e, "modelValue"), v = ya(e, Eg, !1), k = ya(e, Gu, !1), m = Wi(e, n), y = /* @__PURE__ */ E(() => e.link !== !1 && m.isLink.value), h = _(() => !e.disabled && e.link !== !1 && (!!v || e.link || m.isClickable.value)), x = /* @__PURE__ */ E(() => ({
      "aria-label": i(e.closeLabel),
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
    } = na(() => ({
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
      return f.value && Ue(p(C, U(m.linkProps, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": h.value,
          "v-chip--filter": A,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && m.isActive?.value
        }, d.value, o.value, w.value, r.value, s.value, u.value, c.value, S.value, v?.selectedClass.value, e.class],
        style: [b.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: h.value ? 0 : void 0,
        onClick: g,
        onKeydown: h.value && !y.value && I
      }), {
        default: () => [ta(h.value, "v-chip"), A && p(ju, {
          key: "filter"
        }, {
          default: () => [Ue(V("div", {
            class: "v-chip__filter"
          }, [l.filter ? p(Te, {
            key: "filter-defaults",
            disabled: !e.filterIcon,
            defaults: {
              VIcon: {
                icon: e.filterIcon
              }
            }
          }, l.filter) : p(Ne, {
            key: "filter-icon",
            icon: e.filterIcon
          }, null)]), [[kn, v.isSelected.value]])]
        }), D && V("div", {
          key: "prepend",
          class: "v-chip__prepend"
        }, [l.prepend ? p(Te, {
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
        }, l.prepend) : V(he, null, [e.prependIcon && p(Ne, {
          key: "prepend-icon",
          icon: e.prependIcon,
          start: !0
        }, null), e.prependAvatar && p(tn, {
          key: "prepend-avatar",
          image: e.prependAvatar,
          start: !0
        }, null)])]), V("div", {
          class: "v-chip__content",
          "data-no-activator": ""
        }, [l.default?.({
          isSelected: v?.isSelected.value,
          selectedClass: v?.selectedClass.value,
          select: v?.select,
          toggle: v?.toggle,
          value: v?.value.value,
          disabled: e.disabled
        }) ?? Pn(e.text)]), P && V("div", {
          key: "append",
          class: "v-chip__append"
        }, [l.append ? p(Te, {
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
        }, l.append) : V(he, null, [e.appendIcon && p(Ne, {
          key: "append-icon",
          end: !0,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(tn, {
          key: "append-avatar",
          end: !0,
          image: e.appendAvatar
        }, null)])]), F && V("button", U({
          key: "close",
          class: "v-chip__close",
          type: "button",
          "data-testid": "close-chip"
        }, x.value), [l.close ? p(Te, {
          key: "close-defaults",
          defaults: {
            VIcon: {
              icon: e.closeIcon,
              size: "x-small"
            }
          }
        }, l.close) : p(Ne, {
          key: "close-icon",
          icon: e.closeIcon,
          size: "x-small"
        }, null)])]
      }), [[Vt, h.value && e.ripple, null]]);
    };
  }
}), vx = ["dotted", "dashed", "solid", "double"], mx = N({
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
  ...be(),
  ...$e()
}, "VDivider"), en = J()({
  name: "VDivider",
  props: mx(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Re(e), {
      textColorClasses: i,
      textColorStyles: o
    } = xt(() => e.color), r = _(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = ce(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ce(e.thickness)), u;
    }), s = /* @__PURE__ */ E(() => {
      const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
      return {
        marginBlock: e.vertical && u ? ce(u) : void 0,
        marginInline: !e.vertical && u ? ce(u) : void 0,
        transform: c ? `translate${e.vertical ? "X" : "Y"}(${ce(c)})` : void 0
      };
    });
    return te(() => {
      const u = V("hr", {
        class: ee([{
          "v-divider": !0,
          "v-divider--gradient": e.gradient && !a.default,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class]),
        style: fe([r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, {
          "border-style": e.variant
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? V("div", {
        class: ee(["v-divider__wrapper", {
          "v-divider__wrapper--gradient": e.gradient,
          "v-divider__wrapper--inset": e.inset,
          "v-divider__wrapper--vertical": e.vertical
        }])
      }, [u, V("div", {
        class: "v-divider__content",
        style: fe(s.value)
      }, [a.default()]), u]) : u;
    }), {};
  }
}), As = /* @__PURE__ */ Symbol.for("vuetify:list");
function Mg() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const t = Le(As, {
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
  return Ge(As, n), t;
}
function Bg() {
  return Le(As, null);
}
const Xu = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: l,
        activated: i
      } = n;
      return a = /* @__PURE__ */ Ve(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of Ke(n))
          i = t.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, Fg = (e) => {
  const t = Xu(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = /* @__PURE__ */ Ve(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Ke(a);
        r.length && (o = t.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => t.out(a, l, i)
  };
}, gx = (e) => {
  const t = Xu(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ve(l), o.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: o,
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
        activated: i,
        children: o,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ve(l), o.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: o,
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
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let o = l.get(t);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
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
      let i = l.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = l.get(i);
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
    const i = [];
    let o = l.get(t);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Zu = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i
      } = n;
      if (a = /* @__PURE__ */ Ve(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [u, c] = s;
          return c === "on" && r.push(u), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (n, a, l, i) => {
      const o = /* @__PURE__ */ new Map();
      for (const r of n || [])
        t.select({
          id: r,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: i
        });
      return o;
    },
    out: (n) => {
      const a = [];
      for (const [l, i] of n.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, $g = (e) => {
  const t = Zu(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = /* @__PURE__ */ Ve(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i, o) => a?.length ? t.in(a.slice(0, 1), l, i, o) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => t.out(a, l, i)
  };
}, Sx = (e) => {
  const t = Zu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ve(l), o.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, kx = (e) => {
  const t = $g(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = /* @__PURE__ */ Ve(l), o.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Og = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r,
        disabled: s
      } = n;
      a = /* @__PURE__ */ Ve(a);
      const u = new Map(i), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        s.has(f) || i.set(/* @__PURE__ */ Ve(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
      }
      let d = /* @__PURE__ */ Ve(r.get(a));
      for (; d; ) {
        let f = !0, v = !0;
        for (const k of o.get(d)) {
          const m = /* @__PURE__ */ Ve(k);
          if (!s.has(m) && (i.get(m) !== "on" && (f = !1), i.has(m) && i.get(m) !== "off" && (v = !1), !f && !v))
            break;
        }
        i.set(d, f ? "on" : v ? "off" : "indeterminate"), d = /* @__PURE__ */ Ve(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((v, k) => {
        let [m, y] = k;
        return y === "on" && v.push(m), v;
      }, []).length === 0 ? u : i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of n || [])
        i = t.select({
          id: o,
          value: !0,
          selected: i,
          children: a,
          parents: l,
          disabled: /* @__PURE__ */ new Set()
        });
      return i;
    },
    out: (n, a) => {
      const l = [];
      for (const [i, o] of n.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return t;
}, wx = (e) => {
  const t = Og(e);
  return {
    select: t.select,
    in: t.in,
    out: (a, l, i) => {
      const o = [];
      for (const [r, s] of a.entries())
        if (s === "on") {
          if (i.has(r)) {
            const u = i.get(r);
            if (a.get(u) === "on") continue;
          }
          o.push(r);
        }
      return o;
    }
  };
}, Pl = /* @__PURE__ */ Symbol.for("vuetify:nested"), Ng = {
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
}, px = N({
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
  const l = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), i = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), o = /* @__PURE__ */ se(/* @__PURE__ */ new Set()), r = ke(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((b) => /* @__PURE__ */ Ve(b)) : w), (w) => [...w.values()]), s = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return gx(e.mandatory);
      case "single-leaf":
        return hx(e.mandatory);
      case "independent":
        return Xu(e.mandatory);
      default:
        return Fg(e.mandatory);
    }
  }), u = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return kx(e.mandatory);
      case "leaf":
        return Sx(e.mandatory);
      case "independent":
        return Zu(e.mandatory);
      case "single-independent":
        return $g(e.mandatory);
      case "trunk":
        return wx(e.mandatory);
      default:
        return Og(e.mandatory);
    }
  }), c = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return bx;
      case "single":
        return yx;
      default:
        return Lg;
    }
  }), d = ke(e, "activated", e.activated, (w) => s.value.in(w, l.value, i.value), (w) => s.value.out(w, l.value, i.value)), f = ke(e, "selected", e.selected, (w) => u.value.in(w, l.value, i.value, o.value), (w) => u.value.out(w, l.value, i.value));
  At(() => {
    a = !0;
  });
  function v(w) {
    const b = [];
    let S = /* @__PURE__ */ Ve(w);
    for (; S !== void 0; )
      b.unshift(S), S = i.value.get(S);
    return b;
  }
  const k = st("nested"), m = /* @__PURE__ */ new Set(), y = O0(() => {
    Ie(() => {
      l.value = new Map(l.value), i.value = new Map(i.value);
    });
  }, 100);
  ue(() => [t.value, St(n)], () => {
    e.itemsRegistration === "props" && h();
  }, {
    immediate: !0
  });
  function h() {
    const w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set(), g = St(n) ? (T) => /* @__PURE__ */ Ve(T.raw) : (T) => T.value, I = [...t.value];
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
    l.value = b, i.value = w, o.value = S;
  }
  const x = {
    id: /* @__PURE__ */ se(),
    root: {
      opened: r,
      activatable: /* @__PURE__ */ E(() => e.activatable),
      selectable: /* @__PURE__ */ E(() => e.selectable),
      activated: d,
      selected: f,
      selectedValues: _(() => {
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
        b && w !== b && i.value.set(w, b), S && o.value.add(w), g && l.value.set(w, []), b != null && l.value.set(b, [...l.value.get(b) || [], w]), y();
      },
      unregister: (w) => {
        if (a) return;
        m.delete(w), l.value.delete(w), o.value.delete(w);
        const b = i.value.get(w);
        if (b) {
          const S = l.value.get(b) ?? [];
          l.value.set(b, S.filter((g) => g !== w));
        }
        i.value.delete(w), y();
      },
      updateDisabled: (w, b) => {
        b ? o.value.add(w) : o.value.delete(w);
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
          parents: i.value,
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
          parents: i.value,
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
          parents: i.value,
          disabled: o.value,
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
          parents: i.value,
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
      parents: i,
      disabled: o,
      getPath: v
    }
  };
  return Ge(Pl, x), x.root;
}, Rg = (e, t, n) => {
  const a = Le(Pl, Ng), l = /* @__PURE__ */ Symbol("nested item"), i = _(() => {
    const r = /* @__PURE__ */ Ve(St(e));
    return r !== void 0 ? r : l;
  }), o = {
    ...a,
    id: i,
    open: (r, s) => a.root.open(i.value, r, s),
    openOnSelect: (r, s) => a.root.openOnSelect(i.value, r, s),
    isOpen: _(() => a.root.opened.value.has(i.value)),
    parent: _(() => a.root.parents.value.get(i.value)),
    activate: (r, s) => a.root.activate(i.value, r, s),
    isActivated: _(() => a.root.activated.value.has(i.value)),
    select: (r, s) => a.root.select(i.value, r, s),
    isSelected: _(() => a.root.selected.value.get(i.value) === "on"),
    isIndeterminate: _(() => a.root.selected.value.get(i.value) === "indeterminate"),
    isLeaf: _(() => !a.root.children.value.get(i.value)),
    isGroupActivator: a.isGroupActivator
  };
  return Ml(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ie(() => {
      a.root.register(i.value, a.id.value, St(t), n);
    });
  }), At(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(i.value);
  }), ue(i, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ie(() => {
      a.root.register(r, a.id.value, St(t), n);
    }));
  }), ue(() => St(t), (r) => {
    a.root.updateDisabled(i.value, r);
  }), n && Ge(Pl, o), o;
}, Cx = () => {
  const e = Le(Pl, Ng);
  Ge(Pl, {
    ...e,
    isGroupActivator: !0
  });
}, Vx = $t({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Cx(), () => n.default?.();
  }
}), Hg = N({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: pe,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: pe,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: pe,
  appendIcon: pe,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...be(),
  ...Pe()
}, "VListGroup"), Vi = J()({
  name: "VListGroup",
  props: Hg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Rg(() => e.value, () => e.disabled, !0), o = _(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), r = Bg(), {
      isBooted: s
    } = nl(), u = Le(Pl), c = /* @__PURE__ */ E(() => u?.root?.itemsRegistration.value === "render");
    function d(m) {
      ["INPUT", "TEXTAREA"].includes(m.target?.tagName) || l(!a.value, m);
    }
    const f = _(() => ({
      onClick: d,
      class: "v-list-group__header",
      id: o.value
    })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), k = _(() => ({
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
      style: fe(e.style)
    }, {
      default: () => [n.activator && p(Te, {
        defaults: k.value
      }, {
        default: () => [p(Vx, null, {
          default: () => [n.activator({
            props: f.value,
            isOpen: a.value
          })]
        })]
      }), p(Lt, {
        transition: {
          component: ir
        },
        disabled: !s.value
      }, {
        default: () => [c.value ? Ue(V("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": o.value
        }, [n.default?.()]), [[kn, a.value]]) : a.value && V("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": o.value
        }, [n.default?.()])]
      })]
    })), {
      isOpen: a
    };
  }
}), _x = N({
  opacity: [Number, String],
  ...be(),
  ...Pe()
}, "VListItemSubtitle"), Wg = J()({
  name: "VListItemSubtitle",
  props: _x(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-list-item-subtitle", e.class]),
      style: fe([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), zg = Qn("v-list-item-title"), jg = N({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: pe,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: pe,
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
  onClick: Ct(),
  onClickOnce: Ct(),
  ...Dt(),
  ...be(),
  ...lt(),
  ...ut(),
  ...dt(),
  ...qe(),
  ...zi(),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "text"
  })
}, "VListItem"), dn = J()({
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
    const i = Wi(e, n), o = _(() => e.value === void 0 ? i.href.value : e.value), {
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
    } = Rg(o, () => e.disabled, !1), x = Bg(), w = _(() => e.active !== !1 && (e.active || i.isActive?.value || (k.activatable.value ? s.value : d.value))), b = /* @__PURE__ */ E(() => e.link !== !1 && i.isLink.value), S = _(() => !!x && (k.selectable.value || k.activatable.value || e.value != null)), g = _(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || S.value)), I = _(() => x ? b.value ? "link" : S.value ? "option" : "listitem" : void 0), C = _(() => {
      if (S.value)
        return k.activatable.value ? s.value : k.selectable.value ? d.value : w.value;
    }), T = /* @__PURE__ */ E(() => e.rounded || e.nav), P = /* @__PURE__ */ E(() => e.color ?? e.activeColor), F = /* @__PURE__ */ E(() => ({
      color: w.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    ue(() => i.isActive?.value, (Z) => {
      Z && A();
    }), Ml(() => {
      i.isActive?.value && Ie(() => A());
    });
    function A() {
      m.value != null && k.open(m.value, !0), y(!0);
    }
    const {
      themeClasses: B
    } = Re(e), {
      borderClasses: D
    } = Ot(e), {
      colorClasses: L,
      colorStyles: W,
      variantClasses: R
    } = na(F), {
      densityClasses: Q
    } = Et(e), {
      dimensionStyles: q
    } = ct(e), {
      elevationClasses: O
    } = ht(e), {
      roundedClasses: ne
    } = Je(T), K = /* @__PURE__ */ E(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), H = /* @__PURE__ */ E(() => e.ripple !== void 0 && e.ripple && x?.filterable ? {
      keys: ["Enter"]
    } : e.ripple), G = _(() => ({
      isActive: w.value,
      select: u,
      isOpen: c.value,
      isSelected: d.value,
      isIndeterminate: f.value
    }));
    function X(Z) {
      l("click", Z), !["INPUT", "TEXTAREA"].includes(Z.target?.tagName) && g.value && (i.navigate?.(Z), !v && (k.activatable.value ? r(!s.value, Z) : (k.selectable.value || e.value != null && !b.value) && u(!d.value, Z)));
    }
    function ve(Z) {
      const de = Z.target;
      ["INPUT", "TEXTAREA"].includes(de.tagName) || (Z.key === "Enter" || Z.key === " " && !x?.filterable) && (Z.preventDefault(), Z.stopPropagation(), Z.target.dispatchEvent(new MouseEvent("click", Z)));
    }
    return te(() => {
      const Z = b.value ? "a" : e.tag, de = a.title || e.title != null, xe = a.subtitle || e.subtitle != null, Ce = !!(e.appendAvatar || e.appendIcon), _e = !!(Ce || a.append), M = !!(e.prependAvatar || e.prependIcon), $ = !!(M || a.prepend);
      return x?.updateHasPrepend($), e.activeColor && hm("active-color", ["color", "base-color"]), Ue(p(Z, U(i.linkProps, {
        class: ["v-list-item", {
          "v-list-item--active": w.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": g.value,
          "v-list-item--nav": e.nav,
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && w.value
        }, B.value, D.value, L.value, Q.value, O.value, K.value, ne.value, R.value, e.class],
        style: [{
          "--v-list-prepend-gap": ce(e.prependGap)
        }, W.value, q.value, e.style],
        tabindex: g.value ? x ? -2 : 0 : void 0,
        "aria-selected": C.value,
        role: I.value,
        onClick: X,
        onKeydown: g.value && !b.value && ve
      }), {
        default: () => [ta(g.value || w.value, "v-list-item"), $ && V("div", {
          key: "prepend",
          class: "v-list-item__prepend"
        }, [a.prepend ? p(Te, {
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
        }) : V(he, null, [e.prependAvatar && p(tn, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(Ne, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)]), V("div", {
          class: "v-list-item__spacer"
        }, null)]), V("div", {
          class: "v-list-item__content",
          "data-no-activator": ""
        }, [de && p(zg, {
          key: "title"
        }, {
          default: () => [a.title?.({
            title: e.title
          }) ?? Pn(e.title)]
        }), xe && p(Wg, {
          key: "subtitle"
        }, {
          default: () => [a.subtitle?.({
            subtitle: e.subtitle
          }) ?? Pn(e.subtitle)]
        }), a.default?.(G.value)]), _e && V("div", {
          key: "append",
          class: "v-list-item__append"
        }, [a.append ? p(Te, {
          key: "append-defaults",
          disabled: !Ce,
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
        }) : V(he, null, [e.appendIcon && p(Ne, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(tn, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)]), V("div", {
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
      link: i
    };
  }
}), Ix = N({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...be(),
  ...Pe()
}, "VListSubheader"), Nl = J()({
  name: "VListSubheader",
  props: Ix(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = xt(() => e.color);
    return te(() => {
      const i = !!(n.default || e.title);
      return p(e.tag, {
        class: ee(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class]),
        style: fe([{
          textColorStyles: l
        }, e.style])
      }, {
        default: () => [i && V("div", {
          class: "v-list-subheader__text"
        }, [n.default?.() ?? e.title])]
      });
    }), {};
  }
}), Px = N({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Yg = J()({
  name: "VListChildren",
  props: Px(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Mg(), () => n.default?.() ?? e.items?.map((a) => {
      let {
        children: l,
        props: i,
        type: o,
        raw: r
      } = a;
      if (o === "divider")
        return n.divider?.({
          props: i
        }) ?? p(en, i, null);
      if (o === "subheader")
        return n.subheader?.({
          props: i
        }) ?? p(Nl, i, null);
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
      }, u = Vi.filterProps(i);
      return l ? p(Vi, U(u, {
        value: e.returnObject ? r : i?.value,
        rawId: i?.value
      }), {
        activator: (c) => {
          let {
            props: d
          } = c;
          const f = U(i, d, {
            value: e.returnObject ? r : i.value
          });
          return n.header ? n.header({
            props: f
          }) : p(dn, f, s);
        },
        default: () => p(Yg, {
          items: l,
          returnObject: e.returnObject
        }, n)
      }) : n.item ? n.item({
        props: i
      }) : p(dn, U(i, {
        value: e.returnObject ? r : i.value
      }), s);
    });
  }
}), Ug = N({
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
function fn(e, t) {
  const n = it(t, e.itemTitle, t), a = it(t, e.itemValue, n), l = it(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Ee(t, ["children"]) : t : void 0 : it(t, e.itemProps);
  let o = it(t, e.itemType, "item");
  Tx.has(o) || (o = "item");
  const r = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: o,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: o === "item" && Array.isArray(l) ? Kg(e, l) : void 0,
    raw: t
  };
}
fn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Kg(e, t) {
  const n = zt(e, fn.neededProps), a = [];
  for (const l of t)
    a.push(fn(n, l));
  return a;
}
function Ju(e) {
  const t = _(() => Kg(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), l = /* @__PURE__ */ se([]);
  tt(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (ha(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else
        u.push(d);
    }
    a.value = s, l.value = u;
  });
  function i(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, k = e.valueComparator || pt, m = zt(e, fn.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(fn(m, h));
        continue;
      }
      const x = s.get(h);
      if (v || !x) {
        for (const w of v ? u : c)
          if (k(h, w.value)) {
            y.push(w);
            continue e;
          }
        y.push(fn(m, h));
        continue;
      }
      y.push(...x);
    }
    return y;
  }
  function o(r) {
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
    transformIn: i,
    transformOut: o
  };
}
const Ax = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Dx(e, t) {
  const n = ha(t) ? t : it(t, e.itemTitle), a = ha(t) ? t : it(t, e.itemValue, void 0), l = it(t, e.itemChildren), i = e.itemProps === !0 ? Ee(t, ["children"]) : it(t, e.itemProps);
  let o = it(t, e.itemType, "item");
  Ax.has(o) || (o = "item");
  const r = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: o,
    title: r.title,
    value: r.value,
    props: r,
    children: o === "item" && l ? Gg(e, l) : void 0,
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
    items: _(() => Gg(e, e.items))
  };
}
const Xg = N({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: pe,
  collapseIcon: pe,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  prependGap: [Number, String],
  indent: [Number, String],
  nav: Boolean,
  "onClick:open": Ct(),
  "onClick:select": Ct(),
  "onUpdate:opened": Ct(),
  ...px({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Dt(),
  ...be(),
  ...lt(),
  ...ut(),
  ...dt(),
  ...Ug(),
  ...qe(),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "text"
  })
}, "VList"), Tl = J()({
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
    } = Re(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = He(() => e.bgColor), {
      borderClasses: r
    } = Ot(e), {
      densityClasses: s
    } = Et(e), {
      dimensionStyles: u
    } = ct(e), {
      elevationClasses: c
    } = ht(e), {
      roundedClasses: d
    } = Je(e), {
      children: f,
      open: v,
      parents: k,
      select: m,
      getPath: y
    } = xx(e, a, () => e.returnObject), h = /* @__PURE__ */ E(() => e.lines ? `v-list--${e.lines}-line` : void 0), x = /* @__PURE__ */ E(() => e.activeColor), w = /* @__PURE__ */ E(() => e.baseColor), b = /* @__PURE__ */ E(() => e.color), S = /* @__PURE__ */ E(() => e.selectable || e.activatable);
    Mg({
      filterable: e.filterable
    }), nt({
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
        return $a(I.value, D);
    }
    return te(() => {
      const D = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0);
      return p(e.tag, {
        ref: I,
        class: ee(["v-list", {
          "v-list--disabled": e.disabled,
          "v-list--nav": e.nav,
          "v-list--slim": e.slim
        }, l.value, i.value, r.value, s.value, c.value, h.value, d.value, e.class]),
        style: fe([{
          "--v-list-indent": ce(D),
          "--v-list-group-prepend": D ? "0px" : void 0,
          "--v-list-prepend-gap": ce(e.prependGap)
        }, o.value, u.value, e.style]),
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
}), Ex = Qn("v-list-img"), Mx = N({
  start: Boolean,
  end: Boolean,
  ...be(),
  ...Pe()
}, "VListItemAction"), Qu = J()({
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
      style: fe(e.style)
    }, n)), {};
  }
}), Bx = N({
  start: Boolean,
  end: Boolean,
  ...be(),
  ...Pe()
}, "VListItemMedia"), Fx = J()({
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
      style: fe(e.style)
    }, n)), {};
  }
});
function qr(e, t) {
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
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return qr({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return qr({
      x: l,
      y: i
    }, t);
  }
  return qr({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Zg = {
  static: Nx,
  // specific viewport position, usually centered
  connected: Hx
  // connected to a certain element
}, $x = N({
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
function Ox(e, t) {
  const n = /* @__PURE__ */ ae({}), a = /* @__PURE__ */ ae();
  ze && It(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    ue(() => e.locationStrategy, r), at(() => {
      window.removeEventListener("resize", l), visualViewport?.removeEventListener("resize", i), visualViewport?.removeEventListener("scroll", o), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), visualViewport?.addEventListener("resize", i, {
      passive: !0
    }), visualViewport?.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = e.locationStrategy(t, e, n)?.updateLocation : a.value = Zg[e.locationStrategy](t, e, n)?.updateLocation;
  });
  function l(r) {
    a.value?.(r);
  }
  function i(r) {
    a.value?.(r);
  }
  function o(r) {
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
  const n = Du(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Hx(e, t, n) {
  (Array.isArray(e.target.value) || $0(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = Au(() => {
    const h = ys(t.location, e.isRtl.value), x = t.origin === "overlap" ? h : t.origin === "auto" ? Hr(h) : ys(t.origin, e.isRtl.value);
    return h.side === x.side && h.align === Wr(x).align ? {
      preferredAnchor: Dd(h),
      preferredOrigin: Dd(x)
    } : {
      preferredAnchor: h,
      preferredOrigin: x
    };
  }), [o, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => _(() => {
    const x = parseFloat(t[h]);
    return isNaN(x) ? 1 / 0 : x;
  })), c = _(() => {
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
      if (pt(x.at(-1), x.at(-3)) && !pt(x.at(-1), x.at(-2)))
        return;
    }
    const h = y();
    h && v.push(h.flipped);
  });
  let m = new sn({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  ue(e.target, (h, x) => {
    x && !Array.isArray(x) && k.unobserve(x), Array.isArray(h) ? pt(h, x) || y() : h && k.observe(h);
  }, {
    immediate: !0
  }), ue(e.contentEl, (h, x) => {
    x && k.unobserve(x), h && k.observe(h);
  }, {
    immediate: !0
  }), at(() => {
    k.disconnect();
  });
  function y() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = Im(e.target.value));
    const h = Rx(e.contentEl.value, e.isRtl.value), x = Ao(e.contentEl.value), w = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = x.reduce((B, D) => {
      const L = l0(D);
      return B ? new sn({
        x: Math.max(B.left, L.left),
        y: Math.max(B.top, L.top),
        width: Math.min(B.right, L.right) - Math.max(B.left, L.left),
        height: Math.min(B.bottom, L.bottom) - Math.max(B.top, L.top)
      }) : L;
    }, void 0);
    t.stickToTarget ? (b.x += Math.min(w, m.x), b.y += Math.min(w, m.y), b.width = Math.max(b.width - w * 2, m.x + m.width - w), b.height = Math.max(b.height - w * 2, m.y + m.height - w)) : (b.x += w, b.y += w, b.width -= w * 2, b.height -= w * 2);
    let S = {
      anchor: l.value,
      origin: i.value
    };
    function g(B) {
      const D = new sn(h), L = ff(B.anchor, m), W = ff(B.origin, D);
      let {
        x: R,
        y: Q
      } = Lx(L, W);
      switch (B.anchor.side) {
        case "top":
          Q -= c.value[0];
          break;
        case "bottom":
          Q += c.value[0];
          break;
        case "left":
          R -= c.value[0];
          break;
        case "right":
          R += c.value[0];
          break;
      }
      switch (B.anchor.align) {
        case "top":
          Q -= c.value[1];
          break;
        case "bottom":
          Q += c.value[1];
          break;
        case "left":
          R -= c.value[1];
          break;
        case "right":
          R += c.value[1];
          break;
      }
      return D.x += R, D.y += Q, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, u.value), {
        overflows: Md(D, b),
        x: R,
        y: Q
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
        const W = Ed(S.anchor), R = L.x.before || L.x.after, Q = L.y.before || L.y.after;
        let q = !1;
        if (["x", "y"].forEach((O) => {
          if (O === "x" && R && !P.x || O === "y" && Q && !P.y) {
            const ne = {
              anchor: {
                ...S.anchor
              },
              origin: {
                ...S.origin
              }
            }, K = O === "x" ? W === "y" ? Wr : Hr : W === "y" ? Hr : Wr;
            ne.anchor = K(ne.anchor), ne.origin = K(ne.origin);
            const {
              overflows: H
            } = g(ne);
            (H[O].before <= L[O].before && H[O].after <= L[O].after || H[O].before + H[O].after < (L[O].before + L[O].after) / 2) && (S = ne, q = P[O] = !0);
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
      top: ce(Xr(C)),
      left: e.isRtl.value ? void 0 : ce(Xr(I)),
      right: e.isRtl.value ? ce(Xr(-I)) : void 0,
      minWidth: ce(A === "y" ? Math.min(o.value, m.width) : o.value),
      maxWidth: ce(vf(We(T.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: ce(vf(We(T.y, r.value === 1 / 0 ? 0 : r.value, u.value)))
    }), {
      available: T,
      contentBox: h,
      flipped: P
    };
  }
  return ue(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ie(() => {
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
function Xr(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function vf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ds = !0;
const Fo = [];
function Wx(e) {
  !Ds || Fo.length ? (Fo.push(e), Es()) : (Ds = !1, e(), Es());
}
let mf = -1;
function Es() {
  cancelAnimationFrame(mf), mf = requestAnimationFrame(() => {
    const e = Fo.shift();
    e && e(), Fo.length ? Es() : Ds = !0;
  });
}
const Jg = {
  none: null,
  close: Yx,
  block: Ux,
  reposition: Kx
}, zx = N({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Jg
  }
}, "VOverlay-scroll-strategies");
function jx(e, t) {
  if (!ze) return;
  let n;
  tt(async () => {
    n?.stop(), t.isActive.value && e.scrollStrategy && (n = pl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : Jg[e.scrollStrategy]?.(t, e, n);
    }));
  }), at(() => {
    n?.stop();
  });
}
function Yx(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Qg(ec(e.target.value, e.contentEl.value), t);
}
function Ux(e, t) {
  const n = e.root.value?.offsetParent, a = ec(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Ao(a, t.contained ? n : void 0), ...Ao(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((r) => Fu(r) && r)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ce(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ce(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ce(i)), r.classList.add("v-overlay-scroll-blocked");
  }), at(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Kx(e, t, n) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    Wx(() => {
      const s = performance.now();
      e.updateLocation.value?.(r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Qg(ec(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), at(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function ec(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !t?.contains(n)) : e ?? t;
}
function Qg(e, t) {
  const n = [document, ...Ao(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), at(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Ms = /* @__PURE__ */ Symbol.for("vuetify:v-menu"), tc = N({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function nc(e, t) {
  let n = () => {
  };
  function a(o, r) {
    n?.();
    const s = o ? e.openDelay : e.closeDelay, u = Math.max(r?.minDelay ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Jk(u, () => {
        t?.(o), c(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i(o) {
    return a(!1, o);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Gx = N({
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
  ...tc()
}, "VOverlay-activator");
function qx(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const i = st("useActivator"), o = /* @__PURE__ */ ae();
  let r = !1, s = !1, u = !0;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: v
  } = nc(e, (C) => {
    C === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== C && (u = !0), n.value = C);
  }), k = /* @__PURE__ */ ae(), m = {
    onClick: (C) => {
      C.stopPropagation(), o.value = C.currentTarget || C.target, n.value || (k.value = [C.clientX, C.clientY]), n.value = !n.value;
    },
    onMouseenter: (C) => {
      r = !0, o.value = C.currentTarget || C.target, f();
    },
    onMouseleave: (C) => {
      r = !1, v();
    },
    onFocus: (C) => {
      Cl(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), o.value = C.currentTarget || C.target, f());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), v({
        minDelay: 1
      });
    }
  }, y = _(() => {
    const C = {};
    return d.value && (C.onClick = m.onClick), e.openOnHover && (C.onMouseenter = m.onMouseenter, C.onMouseleave = m.onMouseleave), c.value && (C.onFocus = m.onFocus, C.onBlur = m.onBlur), C;
  }), h = _(() => {
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
      const T = Le(Ms, null);
      C.onClick = () => {
        n.value = !1, T?.closeParents();
      };
    }
    return C;
  }), x = _(() => {
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
  const w = Io();
  tt(() => {
    w.value && Ie(() => {
      o.value = w.el;
    });
  });
  const b = Io(), S = _(() => e.target === "cursor" && k.value ? k.value : b.value ? b.el : eh(e.target, i) || o.value), g = _(() => Array.isArray(S.value) ? void 0 : S.value);
  let I;
  return ue(() => !!e.activator, (C) => {
    C && ze ? (I = pl(), I.run(() => {
      Xx(e, i, {
        activatorEl: o,
        activatorEvents: y
      });
    })) : I && I.stop();
  }, {
    flush: "post",
    immediate: !0
  }), at(() => {
    I?.stop();
  }), {
    activatorEl: o,
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
      c && o(c);
    }
    s && Ie(() => i());
  }, {
    immediate: !0
  }), ue(() => e.activatorProps, () => {
    i();
  }), at(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && i0(s, U(l.value, u));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && o0(s, U(l.value, u));
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
const th = N({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, "focusTrap"), mo = /* @__PURE__ */ new Map();
let gf = 0;
function hf(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(mo.values()).filter((u) => {
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
  const i = La(a).filter((u) => u.tabIndex >= 0);
  if (!i.length) return;
  const o = document.activeElement;
  if (i.length === 1 && i[0].classList.contains("v-list") && i[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const r = i[0], s = i[i.length - 1];
  e.shiftKey && (o === r || r.classList.contains("v-list") && r.contains(o)) && (e.preventDefault(), s.focus()), !e.shiftKey && (o === s || s.classList.contains("v-list") && s.contains(o)) && (e.preventDefault(), r.focus());
}
function nh(e, t) {
  let {
    isActive: n,
    localTop: a,
    activatorEl: l,
    contentEl: i
  } = t;
  const o = /* @__PURE__ */ Symbol("trap");
  let r = !1, s = -1;
  async function u() {
    r = !0, s = window.setTimeout(() => {
      r = !1;
    }, 100);
  }
  async function c(v) {
    const k = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Ie(), n.value && !r && k !== m && i.value && // We're the menu without open submenus or overlays
    St(a) && // It isn't the document or the container body
    ![document, i.value].includes(m) && // It isn't inside the container body
    !i.value.contains(m) && La(i.value)[0]?.focus();
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && i.value && v.target && !i.value.contains(v.target))) {
      const k = La(document.documentElement);
      if (v.shiftKey && v.target === k.at(0) || !v.shiftKey && v.target === k.at(-1)) {
        const m = La(i.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = /* @__PURE__ */ E(() => n.value && e.captureFocus && !e.disableInitialFocus);
  ze && (ue(() => e.retainFocus, (v) => {
    v ? mo.set(o, {
      isActive: n,
      contentEl: i
    }) : mo.delete(o);
  }, {
    immediate: !0
  }), ue(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, {
      once: !0
    }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, {
    immediate: !0
  }), gf++ < 1 && document.addEventListener("keydown", hf)), at(() => {
    mo.delete(o), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --gf < 1 && document.removeEventListener("keydown", hf);
  });
}
function ah() {
  if (!ze) return /* @__PURE__ */ se(!1);
  const {
    ssr: e
  } = nn();
  if (e) {
    const t = /* @__PURE__ */ se(!1);
    return gt(() => {
      t.value = !0;
    }), t;
  } else
    return /* @__PURE__ */ se(!0);
}
const ac = N({
  eager: Boolean
}, "lazy");
function lc(e, t) {
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
function ol() {
  const t = st("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const yf = /* @__PURE__ */ Symbol.for("vuetify:stack"), Ul = /* @__PURE__ */ wt([]);
function Zx(e, t, n) {
  const a = st("useStack"), l = !n, i = Le(yf, void 0), o = /* @__PURE__ */ wt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ge(yf, o);
  const r = /* @__PURE__ */ se(Number(St(t)));
  It(e, () => {
    const c = Ul.at(-1)?.[1];
    r.value = c ? c + 10 : Number(St(t)), l && Ul.push([a.uid, r.value]), i?.activeChildren.add(a.uid), at(() => {
      if (l) {
        const d = (/* @__PURE__ */ Ve(Ul)).findIndex((f) => f[0] === a.uid);
        Ul.splice(d, 1);
      }
      i?.activeChildren.delete(a.uid);
    });
  });
  const s = /* @__PURE__ */ se(!0);
  return l && tt(() => {
    const c = Ul.at(-1)?.[0] === a.uid;
    setTimeout(() => s.value = c);
  }), {
    globalTop: /* @__PURE__ */ Ha(s),
    localTop: /* @__PURE__ */ E(() => !o.activeChildren.size),
    stackStyles: /* @__PURE__ */ E(() => ({
      zIndex: r.value
    }))
  };
}
function Jx(e) {
  return {
    teleportTarget: _(() => {
      const n = e();
      if (n === !0 || !ze) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null)
        return;
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Qx() {
  return !0;
}
function lh(e, t, n) {
  if (!e || ih(e, n) === !1) return !1;
  const a = $m(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i?.contains(e.target));
}
function ih(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Qx)(e);
}
function eC(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && lh(e, t, n) && setTimeout(() => {
    ih(e, n) && a && a(e);
  }, 0);
}
function bf(e, t) {
  const n = $m(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Bs = {
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
  return p(ga, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && V("div", U({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Ui = N({
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
  ...be(),
  ...ut(),
  ...ac(),
  ...$x(),
  ...zx(),
  ...th(),
  ...$e(),
  ...ea()
}, "VOverlay"), Dn = J()({
  name: "VOverlay",
  directives: {
    vClickOutside: Bs
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Ee(Ui(), ["disableInitialFocus"])
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
    const i = st("VOverlay"), o = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), s = /* @__PURE__ */ ae(), u = ke(e, "modelValue"), c = _({
      get: () => u.value,
      set: (Z) => {
        Z && e.disabled || (u.value = Z);
      }
    }), {
      themeClasses: d
    } = Re(e), {
      rtlClasses: f,
      isRtl: v
    } = ft(), {
      hasContent: k,
      onAfterLeave: m
    } = lc(e, c), y = He(() => typeof e.scrim == "string" ? e.scrim : null), {
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
      const de = b?.value?.getRootNode() || i.proxy?.$el?.getRootNode();
      return de instanceof ShadowRoot ? de : !1;
    }), {
      dimensionStyles: B
    } = ct(e), D = ah(), {
      scopeId: L
    } = ol();
    ue(() => e.disabled, (Z) => {
      Z && (c.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: R
    } = Ox(e, {
      isRtl: v,
      contentEl: s,
      target: g,
      isActive: c
    });
    jx(e, {
      root: o,
      contentEl: s,
      targetEl: I,
      target: g,
      isActive: c,
      updateLocation: R
    });
    function Q(Z) {
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
    }), ze && ue(c, (Z) => {
      Z ? window.addEventListener("keydown", O) : window.removeEventListener("keydown", O);
    }, {
      immediate: !0
    }), At(() => {
      ze && window.removeEventListener("keydown", O);
    });
    function O(Z) {
      Z.key === "Escape" && h.value && (s.value?.contains(document.activeElement) || l("keydown", Z), e.persistent ? G() : (c.value = !1, s.value?.contains(document.activeElement) && b.value?.focus()));
    }
    function ne(Z) {
      Z.key === "Escape" && !h.value || l("keydown", Z);
    }
    const K = fg();
    It(() => e.closeOnBack, () => {
      Lp(K, (Z) => {
        h.value && c.value ? (Z(!1), e.persistent ? G() : c.value = !1) : Z();
      });
    });
    const H = /* @__PURE__ */ ae();
    ue(() => c.value && (e.absolute || e.contained) && A.value == null, (Z) => {
      if (Z) {
        const de = er(o.value);
        de && de !== document.scrollingElement && (H.value = de.scrollTop);
      }
    });
    function G() {
      e.noClickAnimation || s.value && Hn(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: gi
      });
    }
    function X() {
      l("afterEnter");
    }
    function ve() {
      m(), l("afterLeave");
    }
    return te(() => V(he, null, [n.activator?.({
      isActive: c.value,
      targetRef: C,
      props: U({
        ref: S
      }, T.value, e.activatorProps)
    }), D.value && k.value && p(mS, {
      disabled: !A.value,
      to: A.value
    }, {
      default: () => [V("div", U({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": c.value,
          "v-overlay--contained": e.contained
        }, d.value, f.value, e.class],
        style: [w.value, {
          "--v-overlay-opacity": e.opacity,
          top: ce(H.value)
        }, e.style],
        ref: o,
        onKeydown: ne
      }, L, a), [p(tC, U({
        color: y,
        modelValue: c.value && !!e.scrim,
        ref: r
      }, F.value), null), p(Lt, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: g.value,
        onAfterEnter: X,
        onAfterLeave: ve
      }, {
        default: () => [Ue(V("div", U({
          ref: s,
          class: ["v-overlay__content", e.contentClass],
          style: [B.value, W.value]
        }, P.value, e.contentProps), [n.default?.({
          isActive: c
        })]), [[kn, c.value], [Bs, {
          handler: Q,
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
      rootEl: o,
      globalTop: h,
      localTop: x,
      updateLocation: R
    };
  }
}), oh = N({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Ee(Ui({
    captureFocus: !0,
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: lr
    }
  }), ["absolute"])
}, "VMenu"), Al = J()({
  name: "VMenu",
  props: oh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), {
      scopeId: l
    } = ol(), {
      isRtl: i
    } = ft(), o = Tt(), r = /* @__PURE__ */ E(() => e.id || `v-menu-${o}`), s = /* @__PURE__ */ ae(), u = Le(Ms, null), c = /* @__PURE__ */ se(/* @__PURE__ */ new Set());
    Ge(Ms, {
      register() {
        c.value.add(o);
      },
      unregister() {
        c.value.delete(o);
      },
      closeParents(m) {
        setTimeout(() => {
          !c.value.size && !e.persistent && (m == null || s.value?.contentEl && !Qk(m, s.value.contentEl)) && (a.value = !1, u?.closeParents());
        }, 40);
      }
    }), At(() => u?.unregister()), ku(() => a.value = !1), ue(a, (m) => {
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
          m.key === "Enter" && m.preventDefault(), !Vm(La(s.value?.contentEl, !1), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = !1, s.value?.activatorEl?.focus());
        } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, s.value?.activatorEl?.focus());
    }
    function v(m) {
      if (e.disabled) return;
      const y = s.value?.contentEl;
      y && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), $a(y, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), $a(y, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), $a(y, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
    }
    const k = _(() => U({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      "aria-owns": r.value,
      onKeydown: v
    }, e.activatorProps));
    return te(() => {
      const m = Dn.filterProps(e);
      return p(Dn, U({
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
          return p(Te, {
            root: "VMenu"
          }, {
            default: () => [n.default?.(...h)]
          });
        }
      });
    }), yt({
      id: r,
      ΨopenChildren: c
    }, s);
  }
}), nC = N({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...be(),
  ...ea({
    transition: {
      component: zu
    }
  })
}, "VCounter"), cr = J()({
  name: "VCounter",
  functional: !0,
  props: nC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ E(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return te(() => p(Lt, {
      transition: e.transition
    }, {
      default: () => [Ue(V("div", {
        class: ee(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: fe(e.style)
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[kn, e.active]])]
    })), {};
  }
}), aC = N({
  floating: Boolean,
  ...be()
}, "VFieldLabel"), ql = J()({
  name: "VFieldLabel",
  props: aC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p($l, {
      class: ee(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: fe(e.style)
    }, n)), {};
  }
}), lC = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ki = N({
  appendInnerIcon: pe,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: pe,
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
  prependInnerIcon: pe,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => lC.includes(e)
  },
  "onClick:clear": Ct(),
  "onClick:appendInner": Ct(),
  "onClick:prependInner": Ct(),
  ...be(),
  ...rr(),
  ...qe(),
  ...$e()
}, "VField"), ka = J()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    details: Boolean,
    labelId: String,
    ...Yi(),
    ...Ki()
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
      themeClasses: i
    } = Re(e), {
      loaderClasses: o
    } = Ri(e), {
      focusClasses: r,
      isFocused: s,
      focus: u,
      blur: c
    } = la(e), {
      InputIcon: d
    } = ji(e), {
      roundedClasses: f
    } = Je(e), {
      rtlClasses: v
    } = ft(), k = /* @__PURE__ */ E(() => e.dirty || e.active), m = /* @__PURE__ */ E(() => !!(e.label || l.label)), y = /* @__PURE__ */ E(() => !e.singleLine && m.value), h = Tt(), x = _(() => e.id || `input-${h}`), w = /* @__PURE__ */ E(() => e.details ? `${x.value}-messages` : void 0), b = /* @__PURE__ */ ae(), S = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae(), I = _(() => ["plain", "underlined"].includes(e.variant)), C = _(() => e.error || e.disabled ? void 0 : k.value && s.value ? e.color : e.baseColor), T = _(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? C.value : e.iconColor;
    }), {
      backgroundColorClasses: P,
      backgroundColorStyles: F
    } = He(() => e.bgColor), {
      textColorClasses: A,
      textColorStyles: B
    } = xt(C);
    ue(k, (W) => {
      if (y.value && !Tn()) {
        const R = b.value.$el, Q = S.value.$el;
        requestAnimationFrame(() => {
          const q = Du(R), O = Q.getBoundingClientRect(), ne = O.x - q.x, K = O.y - q.y - (q.height / 2 - O.height / 2), H = O.width / 0.75, G = Math.abs(H - q.width) > 1 ? {
            maxWidth: ce(H)
          } : void 0, X = getComputedStyle(R), ve = getComputedStyle(Q), Z = parseFloat(X.transitionDuration) * 1e3 || 150, de = parseFloat(ve.getPropertyValue("--v-field-label-scale")), xe = ve.getPropertyValue("color");
          R.style.visibility = "visible", Q.style.visibility = "hidden", Hn(R, {
            transform: `translate(${ne}px, ${K}px) scale(${de})`,
            color: xe,
            ...G
          }, {
            duration: Z,
            easing: gi,
            direction: W ? "normal" : "reverse"
          }).finished.then(() => {
            R.style.removeProperty("visibility"), Q.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const D = _(() => ({
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
      const W = e.variant === "outlined", R = !!(l["prepend-inner"] || e.prependInnerIcon), Q = !!(e.clearable || l.clear) && !e.disabled, q = !!(l["append-inner"] || e.appendInnerIcon || Q), O = () => l.label ? l.label({
        ...D.value,
        label: e.label,
        props: {
          for: x.value
        }
      }) : e.label;
      return V("div", U({
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
          "v-field--prepended": R,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !O(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, P.value, r.value, o.value, f.value, v.value, e.class],
        style: [F.value, e.style],
        onClick: L
      }, n), [V("div", {
        class: "v-field__overlay"
      }, null), p(Hi, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), R && V("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [l["prepend-inner"] ? l["prepend-inner"](D.value) : e.prependInnerIcon && p(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: T.value
      }, null)]), V("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && p(ql, {
        key: "floating-label",
        ref: S,
        class: ee([A.value]),
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value,
        style: fe(B.value)
      }, {
        default: () => [O()]
      }), m.value && p(ql, {
        key: "label",
        ref: b,
        id: e.labelId,
        for: x.value,
        "aria-hidden": y.value && k.value
      }, {
        default: () => [O()]
      }), l.default?.({
        ...D.value,
        props: {
          id: x.value,
          class: "v-field__input",
          "aria-describedby": w.value
        },
        focus: u,
        blur: c
      }) ?? V("div", {
        id: x.value,
        class: "v-field__input",
        "aria-describedby": w.value
      }, null)]), Q && p(ju, {
        key: "clear"
      }, {
        default: () => [Ue(V("div", {
          class: "v-field__clearable",
          onMousedown: (ne) => {
            ne.preventDefault(), ne.stopPropagation();
          }
        }, [p(Te, {
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
        })]), [[kn, e.dirty]])]
      }), q && V("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [l["append-inner"] ? l["append-inner"](D.value) : e.appendInnerIcon && p(d, {
        key: "append-icon",
        name: "appendInner",
        color: T.value
      }, null)]), V("div", {
        class: ee(["v-field__outline", A.value]),
        style: fe(B.value)
      }, [W && V(he, null, [V("div", {
        class: "v-field__outline__start"
      }, null), y.value && V("div", {
        class: "v-field__outline__notch"
      }, [p(ql, {
        ref: S,
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value
      }, {
        default: () => [O()]
      })]), V("div", {
        class: "v-field__outline__end"
      }, null)]), I.value && y.value && p(ql, {
        ref: S,
        floating: !0,
        for: x.value,
        "aria-hidden": !k.value
      }, {
        default: () => [O()]
      })])]);
    }), {
      controlRef: g,
      fieldIconColor: T
    };
  }
}), rh = N({
  autocomplete: String
}, "autocomplete");
function ic(e) {
  const t = Tt(), n = /* @__PURE__ */ se(0), a = /* @__PURE__ */ E(() => e.autocomplete === "suppress");
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
const iC = ["color", "file", "time", "date", "datetime-local", "week", "month"], Gi = N({
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
  ...Ee(ia(), ["direction"]),
  ...Ki()
}, "VTextField"), En = J()({
  name: "VTextField",
  directives: {
    vIntersect: bn
  },
  inheritAttrs: !1,
  props: Gi(),
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
    const i = ke(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = la(e), {
      onIntersect: u
    } = sh(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = _(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), y = ic(e), h = _(() => iC.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function x() {
      y.isSuppressing.value && y.update(), o.value || r(), Ie(() => {
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
      I.stopPropagation(), x(), Ie(() => {
        C(), Li(e["onClick:clear"], I);
      });
    }
    function g(I) {
      const C = I.target;
      if (!(e.modelModifiers?.trim && ["text", "search", "password", "tel", "url"].includes(e.type))) {
        i.value = C.value;
        return;
      }
      const T = C.value, P = C.selectionStart, F = C.selectionEnd;
      i.value = T, Ie(() => {
        let A = 0;
        T.trimStart().length === C.value.length && (A = T.length - C.value.length), P != null && (C.selectionStart = P - A), F != null && (C.selectionEnd = F - A);
      });
    }
    return te(() => {
      const I = !!(l.counter || e.counter !== !1 && e.counter != null), C = !!(I || l.details), [T, P] = Bn(n), {
        modelValue: F,
        ...A
      } = Pt.filterProps(e), B = ka.filterProps(e);
      return p(Pt, U({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (D) => i.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, T, A, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: (D) => {
          let {
            id: L,
            isDisabled: W,
            isDirty: R,
            isReadonly: Q,
            isValid: q,
            hasDetails: O,
            reset: ne
          } = D;
          return p(ka, U({
            ref: k,
            onMousedown: w,
            onClick: b,
            "onClick:clear": (K) => S(K, ne),
            role: e.role
          }, Ee(B, ["onClick:clear"]), {
            id: L.value,
            labelId: `${L.value}-label`,
            active: h.value || R.value,
            dirty: R.value || e.dirty,
            disabled: W.value,
            focused: o.value,
            details: O.value,
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
              const ve = V("input", U({
                ref: (Z) => m.value = X.value = Z,
                value: i.value,
                onInput: g,
                autofocus: e.autofocus,
                readonly: Q.value,
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
              return V(he, null, [e.prefix && V("span", {
                class: "v-text-field__prefix"
              }, [V("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), Ue(l.default ? V("div", {
                class: ee(H),
                "data-no-activator": ""
              }, [l.default({
                id: L
              }), ve]) : qn(ve, {
                class: H
              }), [[bn, u, null, {
                once: !0
              }]]), e.suffix && V("span", {
                class: "v-text-field__suffix"
              }, [V("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: C ? (D) => V(he, null, [l.details?.(D), I && V(he, null, [V("span", null, null), p(cr, {
          active: e.persistentCounter || o.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), yt({}, v, k, m);
  }
}), oC = N({
  renderless: Boolean,
  ...be()
}, "VVirtualScrollItem"), uh = J()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: oC(),
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
      resizeRef: i,
      contentRect: o
    } = cn(void 0, "border");
    ue(() => o.value?.height, (r) => {
      r != null && a("update:height", r);
    }), te(() => e.renderless ? V(he, null, [l.default?.({
      itemRef: i
    })]) : V("div", U({
      ref: i,
      class: ["v-virtual-scroll__item", e.class],
      style: e.style
    }, n), [l.default?.()]));
  }
}), rC = -1, sC = 1, Zr = 100, ch = N({
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
  const n = nn(), a = /* @__PURE__ */ se(0);
  tt(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = /* @__PURE__ */ se(0), i = /* @__PURE__ */ se(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), o = /* @__PURE__ */ se(0), r = /* @__PURE__ */ se(0), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let c = 0;
  const {
    resizeRef: d,
    contentRect: f
  } = cn();
  tt(() => {
    d.value = s.value;
  });
  const v = _(() => s.value === document.documentElement ? n.height.value : f.value?.height || parseInt(e.height) || 0), k = _(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({
    length: t.value.length
  }), y = Array.from({
    length: t.value.length
  });
  const h = /* @__PURE__ */ se(0);
  let x = -1;
  function w(O) {
    return m[O] || a.value;
  }
  const b = wm(() => {
    const O = performance.now();
    y[0] = 0;
    const ne = t.value.length;
    for (let K = 1; K <= ne; K++)
      y[K] = (y[K - 1] || 0) + w(K - 1);
    h.value = Math.max(h.value, performance.now() - O);
  }, h), S = ue(k, (O) => {
    O && (S(), c = u.value.offsetTop, b.immediate(), W(), ~x && Ie(() => {
      ze && window.requestAnimationFrame(() => {
        Q(x), x = -1;
      });
    }));
  });
  at(() => {
    b.clear();
  });
  function g(O, ne) {
    const K = m[O], H = a.value;
    a.value = H ? Math.min(a.value, ne) : ne, (K !== ne || H !== a.value) && (m[O] = ne, b());
  }
  function I(O) {
    O = We(O, 0, t.value.length);
    const ne = Math.floor(O), K = O % 1, H = ne + 1, G = y[ne] || 0, X = y[H] || G;
    return G + (X - G) * K;
  }
  function C(O) {
    return uC(y, O);
  }
  let T = 0, P = 0, F = 0;
  ue(v, (O, ne) => {
    W(), O < ne && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let A = -1;
  function B() {
    if (!s.value || !u.value) return;
    const O = s.value.scrollTop, ne = performance.now();
    ne - F > 500 ? (P = Math.sign(O - T), c = u.value.offsetTop) : P = O - T, T = O, F = ne, window.clearTimeout(A), A = window.setTimeout(D, 500), W();
  }
  function D() {
    !s.value || !u.value || (P = 0, F = 0, window.clearTimeout(A), W());
  }
  let L = -1;
  function W() {
    cancelAnimationFrame(L), L = requestAnimationFrame(R);
  }
  function R() {
    if (!s.value || !v.value || !a.value) return;
    const O = T - c, ne = Math.sign(P), K = Math.max(0, O - Zr), H = We(C(K), 0, t.value.length), G = O + v.value + Zr, X = We(C(G) + 1, H + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (ne !== rC || H < l.value) && (ne !== sC || X > i.value)
    ) {
      const ve = I(l.value) - I(H), Z = I(X) - I(i.value);
      Math.max(ve, Z) > Zr ? (l.value = H, i.value = X) : (H <= 0 && (l.value = H), X >= t.value.length && (i.value = X));
    }
    o.value = I(l.value), r.value = I(t.value.length) - I(i.value);
  }
  function Q(O) {
    const ne = I(O);
    !s.value || O && !ne ? x = O : s.value.scrollTop = ne;
  }
  const q = _(() => t.value.slice(l.value, i.value).map((O, ne) => {
    const K = ne + l.value;
    return {
      raw: O,
      index: K,
      key: it(O, e.itemKey, K)
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
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: Q,
    handleScroll: B,
    handleScrollend: D,
    handleItemResize: g
  };
}
function uC(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, i = e[l], i > t)
      n = l - 1;
    else if (i < t)
      o = l, a = l + 1;
    else return i === t ? l : a;
  return o;
}
const cC = N({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...ch(),
  ...be(),
  ...ut()
}, "VVirtualScroll"), dr = J()({
  name: "VVirtualScroll",
  props: cC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = st("VVirtualScroll"), {
      dimensionStyles: l
    } = ct(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: u,
      handleItemResize: c,
      scrollToIndex: d,
      paddingTop: f,
      paddingBottom: v,
      computedItems: k
    } = dh(e, /* @__PURE__ */ E(() => e.items));
    return It(() => e.renderless, () => {
      function m() {
        const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[h]("scroll", s, {
          passive: !0
        }), document[h]("scrollend", u)) : (o.value?.[h]("scroll", s, {
          passive: !0
        }), o.value?.[h]("scrollend", u));
      }
      gt(() => {
        o.value = er(a.vnode.el, !0), m(!0);
      }), at(m);
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
      return e.renderless ? V(he, null, [V("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: ce(f.value)
        }
      }, null), m, V("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: ce(v.value)
        }
      }, null)]) : V("div", {
        ref: o,
        class: ee(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: u,
        style: fe([l.value, e.style])
      }, [V("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: ce(f.value),
          paddingBottom: ce(v.value)
        }
      }, [m])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: d
    };
  }
});
function oc(e, t) {
  const n = /* @__PURE__ */ se(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = ue(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    if (r.key === "Tab" && t.value?.focus(), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = e.value?.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
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
    onKeydown: o
  };
}
const dC = N({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function rc(e, t) {
  const n = Tt(), a = _(() => `menu-${n}`);
  return {
    menuId: a,
    ariaExpanded: /* @__PURE__ */ E(() => St(t)),
    ariaControls: /* @__PURE__ */ E(() => a.value)
  };
}
const sc = N({
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
    type: pe,
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
}, "Select"), fC = N({
  ...sc(),
  ...Ee(Gi({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"]),
  ...ea({
    transition: {
      component: lr
    }
  })
}, "VSelect"), uc = J()({
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
    } = je(), l = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), {
      items: r,
      transformIn: s,
      transformOut: u
    } = Ju(e), c = ke(e, "modelValue", [], (X) => s(X === null ? [null] : Ke(X)), (X) => {
      const ve = u(X);
      return e.multiple ? ve : ve[0] ?? null;
    }), d = _(() => typeof e.counterValue == "function" ? e.counterValue(c.value) : typeof e.counterValue == "number" ? e.counterValue : c.value.length), f = Ol(e), v = ic(e), k = _(() => c.value.map((X) => X.value)), m = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ E(() => e.closableChips && !f.isReadonly.value && !f.isDisabled.value), {
      InputIcon: h
    } = ji(e);
    let x = "", w = 0, b;
    const S = _(() => e.hideSelected ? r.value.filter((X) => !c.value.some((ve) => (e.valueComparator || pt)(ve, X))) : r.value), g = _(() => e.hideNoData && !S.value.length || f.isReadonly.value || f.isDisabled.value), I = ke(e, "menu"), C = _({
      get: () => I.value,
      set: (X) => {
        I.value && !X && i.value?.ΨopenChildren.size || X && g.value || (I.value = X);
      }
    }), {
      menuId: T,
      ariaExpanded: P,
      ariaControls: F
    } = rc(e, C), A = _(() => ({
      ...e.menuProps,
      activatorProps: {
        ...e.menuProps?.activatorProps || {},
        "aria-haspopup": "listbox"
        // Set aria-haspopup to 'listbox'
      }
    })), B = /* @__PURE__ */ ae(), D = oc(B, l);
    function L(X) {
      e.openOnClear && (C.value = !0);
    }
    function W() {
      g.value || (C.value = !C.value);
    }
    function R(X) {
      Vl(X) && Q(X);
    }
    function Q(X) {
      if (!X.key || f.isReadonly.value) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown", " "].includes(X.key) && (C.value = !0), ["Escape", "Tab"].includes(X.key) && (C.value = !1), e.clearable && X.key === "Backspace") {
        X.preventDefault(), c.value = [], L();
        return;
      }
      X.key === "Home" ? B.value?.focus("first") : X.key === "End" && B.value?.focus("last");
      const ve = 1e3;
      if (!Vl(X)) return;
      const Z = performance.now();
      Z - b > ve && (x = "", w = 0), x += X.key.toLowerCase(), b = Z;
      const de = S.value;
      function xe() {
        let j = Ce();
        return j || x.at(-1) === x.at(-2) && (x = x.slice(0, -1), w++, j = Ce(), j) || (w = 0, j = Ce(), j) ? j : (x = X.key.toLowerCase(), Ce());
      }
      function Ce() {
        for (let j = w; j < de.length; j++) {
          const re = de[j];
          if (re.title.toLowerCase().startsWith(x))
            return [re, j];
        }
      }
      const _e = xe();
      if (!_e) return;
      const [M, $] = _e;
      w = $, B.value?.focus($), e.multiple || (c.value = [M]);
    }
    function q(X) {
      let ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!X.props.disabled)
        if (e.multiple) {
          const Z = c.value.findIndex((xe) => (e.valueComparator || pt)(xe.value, X.value)), de = ve ?? !~Z;
          if (~Z) {
            const xe = de ? [...c.value, X] : [...c.value];
            xe.splice(Z, 1), c.value = xe;
          } else de && (c.value = [...c.value, X]);
        } else {
          const Z = ve !== !1;
          c.value = Z ? [X] : [], Ie(() => {
            C.value = !1;
          });
        }
    }
    function O(X) {
      B.value?.$el.contains(X.relatedTarget) || (C.value = !1);
    }
    function ne() {
      e.eager && o.value?.calculateVisibleItems();
    }
    function K() {
      m.value && l.value?.focus();
    }
    function H(X) {
      m.value = !0;
    }
    function G(X) {
      if (X == null) c.value = [];
      else if (Cl(l.value, ":autofill") || Cl(l.value, ":-webkit-autofill")) {
        const ve = r.value.find((Z) => Z.title === X);
        ve && q(ve);
      } else l.value && (l.value.value = "");
    }
    return ue(C, () => {
      if (!e.hideSelected && C.value && c.value.length) {
        const X = S.value.findIndex((ve) => c.value.some((Z) => (e.valueComparator || pt)(Z.value, ve.value)));
        ze && !e.noAutoScroll && window.requestAnimationFrame(() => {
          X >= 0 && o.value?.scrollToIndex(X);
        });
      }
    }), ue(r, (X, ve) => {
      C.value || m.value && e.hideNoData && !ve.length && X.length && (C.value = !0);
    }), te(() => {
      const X = !!(e.chips || n.chip), ve = !!(!e.hideNoData || S.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), Z = c.value.length > 0, de = En.filterProps(e), xe = Z || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return p(En, U({
        ref: l
      }, de, {
        modelValue: c.value.map((Ce) => Ce.props.title).join(", "),
        name: void 0,
        "onUpdate:modelValue": G,
        focused: m.value,
        "onUpdate:focused": (Ce) => m.value = Ce,
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
        placeholder: xe,
        "onClick:clear": L,
        "onMousedown:control": W,
        onBlur: O,
        onKeydown: Q,
        "aria-expanded": P.value,
        "aria-controls": F.value
      }), {
        ...n,
        default: (Ce) => {
          let {
            id: _e
          } = Ce;
          return V(he, null, [V("select", {
            hidden: !0,
            multiple: e.multiple,
            name: v.fieldName.value
          }, [r.value.map((M) => V("option", {
            key: M.value,
            value: M.value,
            selected: k.value.includes(M.value)
          }, null))]), p(Al, U({
            id: T.value,
            ref: i,
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
            default: () => [ve && p(Tl, U({
              ref: B,
              selected: k.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (M) => M.preventDefault(),
              onKeydown: R,
              onFocusin: H,
              tabindex: "-1",
              selectable: !!S.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${_e.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, D, e.listProps), {
              default: () => [n["prepend-item"]?.(), !S.value.length && !e.hideNoData && (n["no-data"]?.() ?? p(dn, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), p(dr, {
                ref: o,
                renderless: !0,
                items: S.value,
                itemKey: "value"
              }, {
                default: (M) => {
                  let {
                    item: $,
                    index: j,
                    itemRef: re
                  } = M;
                  const z = t0($.props), oe = U($.props, {
                    ref: re,
                    key: $.value,
                    onClick: () => q($, null),
                    "aria-posinset": j + 1,
                    "aria-setsize": S.value.length
                  });
                  return $.type === "divider" ? n.divider?.({
                    props: $.raw,
                    index: j
                  }) ?? p(en, U($.props, {
                    key: `divider-${j}`
                  }), null) : $.type === "subheader" ? n.subheader?.({
                    props: $.raw,
                    index: j
                  }) ?? p(Nl, U($.props, {
                    key: `subheader-${j}`
                  }), null) : n.item?.({
                    item: $,
                    index: j,
                    props: oe
                  }) ?? p(dn, U(oe, {
                    role: "option"
                  }), {
                    prepend: (me) => {
                      let {
                        isSelected: Y
                      } = me;
                      return V(he, null, [e.multiple && !e.hideSelected ? p(Sn, {
                        key: $.value,
                        modelValue: Y,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (le) => le.preventDefault()
                      }, null) : void 0, z.prependAvatar && p(tn, {
                        image: z.prependAvatar
                      }, null), z.prependIcon && p(Ne, {
                        icon: z.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), n["append-item"]?.()]
            })]
          }), c.value.map((M, $) => {
            function j(me) {
              me.stopPropagation(), me.preventDefault(), q(M, !1);
            }
            const re = U(Zn.filterProps(M.props), {
              "onClick:close": j,
              onKeydown(me) {
                me.key !== "Enter" && me.key !== " " || (me.preventDefault(), me.stopPropagation(), j(me));
              },
              onMousedown(me) {
                me.preventDefault(), me.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), z = X ? !!n.chip : !!n.selection, oe = z ? Qo(X ? n.chip({
              item: M,
              index: $,
              props: re
            }) : n.selection({
              item: M,
              index: $
            })) : void 0;
            if (!(z && !oe))
              return V("div", {
                key: M.value,
                class: "v-select__selection"
              }, [X ? n.chip ? p(Te, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: y.value,
                    size: "small",
                    text: M.title
                  }
                }
              }, {
                default: () => [oe]
              }) : p(Zn, U({
                key: "chip",
                closable: y.value,
                size: "small",
                text: M.title,
                disabled: M.props.disabled
              }, re), null) : oe ?? V("span", {
                class: "v-select__selection-text"
              }, [M.title, e.multiple && $ < c.value.length - 1 && V("span", {
                class: "v-select__selection-comma"
              }, [Ut(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var Ce = arguments.length, _e = new Array(Ce), M = 0; M < Ce; M++)
            _e[M] = arguments[M];
          return V(he, null, [n["append-inner"]?.(..._e), e.menuIcon ? p(Ne, {
            class: "v-select__menu-icon",
            color: l.value?.fieldIconColor,
            icon: e.menuIcon,
            "aria-hidden": !0
          }, null) : void 0, e.appendInnerIcon && p(h, {
            key: "append-icon",
            name: "appendInner",
            color: _e[0].iconColor.value
          }, null)]);
        }
      });
    }), yt({
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
function Jr(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1))
    return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Rl = N({
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
  const a = [], l = n?.default ?? vC, i = n?.filterKeys ? Ke(n.filterKeys) : !1, o = Object.keys(n?.customKeyFilter ?? {}).length;
  if (!e?.length) return a;
  let r = null;
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = Ke(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || o > 0) && !n?.noFilter) {
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
        const h = i || Object.keys(c);
        k = h.length === o;
        for (const x of h) {
          const w = it(c, x), b = n?.customKeyFilter?.[x];
          if (v = b ? b(w, t, u) : l(w, t, u), v !== -1 && v !== !1)
            b ? d[x] = Jr(v, t) : f[x] = Jr(v, t);
          else if (n?.filterMode === "every")
            continue e;
        }
      } else
        v = l(u, t, u), v !== -1 && v !== !1 && (f.title = Jr(v, t));
      const m = Object.keys(f).length, y = Object.keys(d).length;
      if (!m && !y || n?.filterMode === "union" && y !== o && !m || n?.filterMode === "intersection" && (y !== o || !m && o > 0 && !k)) continue;
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
function Hl(e, t, n, a) {
  const l = /* @__PURE__ */ se([]), i = /* @__PURE__ */ se(/* @__PURE__ */ new Map()), o = _(() => a?.transform ? mt(t).map((s) => [s, a.transform(s)]) : mt(t));
  tt(() => {
    const s = typeof n == "function" ? n() : mt(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = mC(o.value, u, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...mt(a?.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), d = mt(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((k) => {
      let {
        index: m,
        matches: y
      } = k;
      const h = d[m];
      f.push(h), v.set(h.value, y);
    }), l.value = f, i.value = v;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function fh(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const i = l === 0 ? 0 : n[l - 1][1], o = [V("span", {
      class: ee(`${e}__unmask`)
    }, [t.slice(i, a[0])]), V("span", {
      class: ee(`${e}__mask`)
    }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && o.push(V("span", {
      class: ee(`${e}__unmask`)
    }, [t.slice(a[1])])), V(he, null, [o]);
  });
}
const gC = N({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...Rl({
    filterKeys: ["title"]
  }),
  ...sc(),
  ...Ee(Gi({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"])
}, "VAutocomplete"), hC = J()({
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
    } = je(), l = /* @__PURE__ */ ae(), i = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se(!0), r = /* @__PURE__ */ se(!1), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ se(-1), d = /* @__PURE__ */ se(null), {
      items: f,
      transformIn: v,
      transformOut: k
    } = Ju(e), {
      textColorClasses: m,
      textColorStyles: y
    } = xt(() => l.value?.color), {
      InputIcon: h
    } = ji(e), x = ke(e, "search", ""), w = ke(e, "modelValue", [], (z) => v(z === null ? [null] : Ke(z)), (z) => {
      const oe = k(z);
      return e.multiple ? oe : oe[0] ?? null;
    }), b = _(() => typeof e.counterValue == "function" ? e.counterValue(w.value) : typeof e.counterValue == "number" ? e.counterValue : w.value.length), S = Ol(e), {
      filteredItems: g,
      getMatches: I
    } = Hl(e, f, () => d.value ?? (o.value ? "" : x.value)), C = _(() => e.hideSelected && d.value === null ? g.value.filter((z) => !w.value.some((oe) => oe.value === z.value)) : g.value), T = /* @__PURE__ */ E(() => e.closableChips && !S.isReadonly.value && !S.isDisabled.value), P = _(() => !!(e.chips || n.chip)), F = _(() => P.value || !!n.selection), A = _(() => w.value.map((z) => z.props.value)), B = _(() => C.value.find((z) => z.type === "item" && !z.props.disabled)), D = _(() => (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && x.value === B.value?.title) && C.value.length > 0 && !o.value && !r.value), L = _(() => e.hideNoData && !C.value.length || S.isReadonly.value || S.isDisabled.value), W = ke(e, "menu"), R = _({
      get: () => W.value,
      set: (z) => {
        W.value && !z && s.value?.ΨopenChildren.size || z && L.value || (W.value = z);
      }
    }), {
      menuId: Q,
      ariaExpanded: q,
      ariaControls: O
    } = rc(e, R), ne = /* @__PURE__ */ ae(), K = oc(ne, l);
    function H(z) {
      e.openOnClear && (R.value = !0), x.value = "";
    }
    function G() {
      L.value || (R.value = !0);
    }
    function X(z) {
      L.value || (i.value && (z.preventDefault(), z.stopPropagation()), R.value = !R.value);
    }
    function ve(z) {
      (Vl(z) || z.key === "Backspace") && l.value?.focus();
    }
    function Z(z) {
      if (S.isReadonly.value) return;
      const oe = l.value?.selectionStart, me = w.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(z.key) && z.preventDefault(), ["Enter", "ArrowDown"].includes(z.key) && (R.value = !0), ["Escape"].includes(z.key) && (R.value = !1), D.value && ["Enter", "Tab"].includes(z.key) && B.value && !w.value.some((Y) => {
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
          if (c.value < 0 && oe && oe > 0) return;
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
        } else ~c.value && Vl(z) && (c.value = -1);
    }
    function de(z) {
      if (Cl(l.value, ":autofill") || Cl(l.value, ":-webkit-autofill")) {
        const oe = f.value.find((me) => me.title === z.target.value);
        oe && re(oe);
      }
    }
    function xe() {
      e.eager && u.value?.calculateVisibleItems();
    }
    function Ce() {
      i.value && (o.value = !0, l.value?.focus()), d.value = null;
    }
    function _e(z) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function M(z) {
      r.value = !1;
    }
    function $(z) {
      (z == null || z === "" && !e.multiple && !F.value) && (w.value = []);
    }
    const j = /* @__PURE__ */ se(!1);
    function re(z) {
      let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!z || z.props.disabled))
        if (e.multiple) {
          const me = w.value.findIndex((le) => (e.valueComparator || pt)(le.value, z.value)), Y = oe ?? !~me;
          if (~me) {
            const le = Y ? [...w.value, z] : [...w.value];
            le.splice(me, 1), w.value = le;
          } else Y && (w.value = [...w.value, z]);
          e.clearOnSelect && (x.value = "");
        } else {
          const me = oe !== !1;
          w.value = me ? [z] : [], d.value = o.value ? "" : x.value ?? "", x.value = me && !F.value ? z.title : "", Ie(() => {
            R.value = !1, o.value = !0;
          });
        }
    }
    return ue(i, (z, oe) => {
      z !== oe && (z ? (j.value = !0, x.value = e.multiple || F.value ? "" : String(w.value.at(-1)?.props.title ?? ""), o.value = !0, Ie(() => j.value = !1)) : (!e.multiple && x.value == null && (w.value = []), R.value = !1, !o.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
    }), ue(x, (z) => {
      !i.value || j.value || (z && (R.value = !0), o.value = !z);
    }), ue(R, (z) => {
      if (!e.hideSelected && z && w.value.length && o.value) {
        const oe = C.value.findIndex((me) => w.value.some((Y) => me.value === Y.value));
        ze && window.requestAnimationFrame(() => {
          oe >= 0 && u.value?.scrollToIndex(oe);
        });
      }
      z && (d.value = null);
    }), ue(f, (z, oe) => {
      R.value || i.value && !oe.length && z.length && (R.value = !0);
    }), te(() => {
      const z = !!(!e.hideNoData || C.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), oe = w.value.length > 0, me = En.filterProps(e);
      return p(En, U({
        ref: l
      }, me, {
        modelValue: x.value,
        "onUpdate:modelValue": [(Y) => x.value = Y, $],
        focused: i.value,
        "onUpdate:focused": (Y) => i.value = Y,
        validationValue: w.externalValue,
        counterValue: b.value,
        dirty: oe,
        onChange: de,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": R.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!F.value,
          "v-autocomplete--selecting-index": c.value > -1
        }, e.class],
        style: e.style,
        readonly: S.isReadonly.value,
        placeholder: oe ? void 0 : e.placeholder,
        "onClick:clear": H,
        "onMousedown:control": G,
        onKeydown: Z,
        "aria-expanded": q.value,
        "aria-controls": O.value
      }), {
        ...n,
        default: (Y) => {
          let {
            id: le
          } = Y;
          return V(he, null, [p(Al, U({
            id: Q.value,
            ref: s,
            modelValue: R.value,
            "onUpdate:modelValue": (ie) => R.value = ie,
            activator: "parent",
            contentClass: "v-autocomplete__content",
            disabled: L.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            onAfterEnter: xe,
            onAfterLeave: Ce
          }, e.menuProps), {
            default: () => [z && p(Tl, U({
              ref: ne,
              filterable: !0,
              selected: A.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (ie) => ie.preventDefault(),
              onKeydown: ve,
              onFocusin: _e,
              onFocusout: M,
              tabindex: "-1",
              selectable: !!C.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${le.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, K, e.listProps), {
              default: () => [n["prepend-item"]?.(), !C.value.length && !e.hideNoData && (n["no-data"]?.() ?? p(dn, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), p(dr, {
                ref: u,
                renderless: !0,
                items: C.value,
                itemKey: "value"
              }, {
                default: (ie) => {
                  let {
                    item: ge,
                    index: ye,
                    itemRef: Se
                  } = ie;
                  const we = U(ge.props, {
                    ref: Se,
                    key: ge.value,
                    active: D.value && ge === B.value ? !0 : void 0,
                    onClick: () => re(ge, null),
                    "aria-posinset": ye + 1,
                    "aria-setsize": C.value.length
                  });
                  return ge.type === "divider" ? n.divider?.({
                    props: ge.raw,
                    index: ye
                  }) ?? p(en, U(ge.props, {
                    key: `divider-${ye}`
                  }), null) : ge.type === "subheader" ? n.subheader?.({
                    props: ge.raw,
                    index: ye
                  }) ?? p(Nl, U(ge.props, {
                    key: `subheader-${ye}`
                  }), null) : n.item?.({
                    item: ge,
                    index: ye,
                    props: we
                  }) ?? p(dn, U(we, {
                    role: "option"
                  }), {
                    prepend: (Ae) => {
                      let {
                        isSelected: Be
                      } = Ae;
                      return V(he, null, [e.multiple && !e.hideSelected ? p(Sn, {
                        key: ge.value,
                        modelValue: Be,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (Oe) => Oe.preventDefault()
                      }, null) : void 0, ge.props.prependAvatar && p(tn, {
                        image: ge.props.prependAvatar
                      }, null), ge.props.prependIcon && p(Ne, {
                        icon: ge.props.prependIcon
                      }, null)]);
                    },
                    title: () => o.value ? ge.title : fh("v-autocomplete", ge.title, I(ge)?.title)
                  });
                }
              }), n["append-item"]?.()]
            })]
          }), w.value.map((ie, ge) => {
            function ye(Be) {
              Be.stopPropagation(), Be.preventDefault(), re(ie, !1);
            }
            const Se = U(Zn.filterProps(ie.props), {
              "onClick:close": ye,
              onKeydown(Be) {
                Be.key !== "Enter" && Be.key !== " " || (Be.preventDefault(), Be.stopPropagation(), ye(Be));
              },
              onMousedown(Be) {
                Be.preventDefault(), Be.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), we = P.value ? !!n.chip : !!n.selection, Ae = we ? Qo(P.value ? n.chip({
              item: ie,
              index: ge,
              props: Se
            }) : n.selection({
              item: ie,
              index: ge
            })) : void 0;
            if (!(we && !Ae))
              return V("div", {
                key: ie.value,
                class: ee(["v-autocomplete__selection", ge === c.value && ["v-autocomplete__selection--selected", m.value]]),
                style: fe(ge === c.value ? y.value : {})
              }, [P.value ? n.chip ? p(Te, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: T.value,
                    size: "small",
                    text: ie.title
                  }
                }
              }, {
                default: () => [Ae]
              }) : p(Zn, U({
                key: "chip",
                closable: T.value,
                size: "small",
                text: ie.title,
                disabled: ie.props.disabled
              }, Se), null) : Ae ?? V("span", {
                class: "v-autocomplete__selection-text"
              }, [ie.title, e.multiple && ge < w.value.length - 1 && V("span", {
                class: "v-autocomplete__selection-comma"
              }, [Ut(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var Y = arguments.length, le = new Array(Y), ie = 0; ie < Y; ie++)
            le[ie] = arguments[ie];
          return V(he, null, [n["append-inner"]?.(...le), e.menuIcon ? p(Ne, {
            class: "v-autocomplete__menu-icon",
            color: l.value?.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: X,
            onClick: Jo,
            "aria-hidden": !0,
            tabindex: "-1"
          }, null) : void 0, e.appendInnerIcon && p(h, {
            key: "append-icon",
            name: "appendInner",
            color: le[0].iconColor.value
          }, null)]);
        }
      });
    }), yt({
      isFocused: i,
      isPristine: o,
      menu: R,
      search: x,
      filteredItems: g,
      select: re
    }, l);
  }
}), yC = N({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: pe,
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
  ...be(),
  ...aa({
    location: "top end"
  }),
  ...qe(),
  ...Pe(),
  ...$e(),
  ...ea({
    transition: "scale-rotate-transition"
  }),
  ...ut()
}, "VBadge"), vh = J()({
  name: "VBadge",
  inheritAttrs: !1,
  props: yC(),
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: a
    } = He(() => e.color), {
      roundedClasses: l
    } = Je(e), {
      t: i
    } = je(), {
      textColorClasses: o,
      textColorStyles: r
    } = xt(() => e.textColor), {
      themeClasses: s
    } = ar(), {
      locationStyles: u
    } = il(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), {
      dimensionStyles: c
    } = ct(e);
    return te(() => {
      const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, k] = hs(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
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
        default: () => [V("div", {
          class: "v-badge__wrapper"
        }, [t.slots.default?.(), p(Lt, {
          transition: e.transition
        }, {
          default: () => [Ue(V("span", U({
            class: ["v-badge__badge", s.value, n.value, l.value, o.value],
            style: [a.value, r.value, c.value, e.inline ? {} : u.value],
            "aria-atomic": "true",
            "aria-label": i(e.label, d),
            "aria-live": "polite",
            role: "status"
          }, v), [e.dot ? void 0 : t.slots.badge ? t.slots.badge?.() : e.icon ? p(Ne, {
            icon: e.icon
          }, null) : f]), [[kn, e.modelValue]])]
        })])]
      });
    }), {};
  }
}), bC = N({
  color: String,
  density: String,
  ...be()
}, "VBannerActions"), mh = J()({
  name: "VBannerActions",
  props: bC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return nt({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), te(() => V("div", {
      class: ee(["v-banner-actions", e.class]),
      style: fe(e.style)
    }, [n.default?.()])), {};
  }
}), gh = Qn("v-banner-text"), SC = N({
  avatar: String,
  bgColor: String,
  color: String,
  icon: pe,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...Dt(),
  ...be(),
  ...lt(),
  ...ut(),
  ...Qa({
    mobile: null
  }),
  ...dt(),
  ...aa(),
  ...Fl(),
  ...qe(),
  ...Pe(),
  ...$e()
}, "VBanner"), kC = J()({
  name: "VBanner",
  props: SC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = He(() => e.bgColor), {
      borderClasses: i
    } = Ot(e), {
      densityClasses: o
    } = Et(e), {
      displayClasses: r,
      mobile: s
    } = nn(e), {
      dimensionStyles: u
    } = ct(e), {
      elevationClasses: c
    } = ht(e), {
      locationStyles: d
    } = il(e), {
      positionClasses: f
    } = Ll(e), {
      roundedClasses: v
    } = Je(e), {
      themeClasses: k
    } = Re(e), m = /* @__PURE__ */ E(() => e.color), y = /* @__PURE__ */ E(() => e.density);
    nt({
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
        }, k.value, a.value, i.value, o.value, r.value, c.value, f.value, v.value, e.class]),
        style: fe([l.value, u.value, d.value, e.style]),
        role: "banner"
      }, {
        default: () => [w && V("div", {
          key: "prepend",
          class: "v-banner__prepend"
        }, [n.prepend ? p(Te, {
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
        }, n.prepend) : p(tn, {
          key: "prepend-avatar",
          color: m.value,
          density: y.value,
          icon: e.icon,
          image: e.avatar
        }, null)]), V("div", {
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
}), wC = N({
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
  ...Dt(),
  ...be(),
  ...lt(),
  ...dt(),
  ...qe(),
  ...el({
    name: "bottom-navigation"
  }),
  ...Pe({
    tag: "header"
  }),
  ...al({
    selectedClass: "v-btn--selected"
  }),
  ...$e()
}, "VBottomNavigation"), pC = J()({
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
    } = ar(), {
      borderClasses: l
    } = Ot(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = He(() => e.bgColor), {
      densityClasses: r
    } = Et(e), {
      elevationClasses: s
    } = ht(e), {
      roundedClasses: u
    } = Je(e), {
      ssrBootStyles: c
    } = nl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = ke(e, "active", e.active), {
      layoutItemStyles: v
    } = tl({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => "bottom"),
      layoutSize: /* @__PURE__ */ E(() => f.value ? d.value : 0),
      elementSize: d,
      active: f,
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return xa(e, Uu), nt({
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
      }, a.value, i.value, l.value, r.value, s.value, u.value, e.class]),
      style: fe([o.value, v.value, {
        height: ce(d.value)
      }, c.value, e.style])
    }, {
      default: () => [n.default && V("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
}), hh = N({
  fullscreen: Boolean,
  scrollable: Boolean,
  ...Ee(Ui({
    captureFocus: !0,
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: lr
    },
    zIndex: 2400,
    retainFocus: !0
  }), ["disableInitialFocus"])
}, "VDialog"), Fs = J()({
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
    const l = ke(e, "modelValue"), {
      scopeId: i
    } = ol(), o = /* @__PURE__ */ ae();
    function r() {
      n("afterEnter"), (e.scrim || e.retainFocus) && o.value?.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function s() {
      n("afterLeave");
    }
    return ue(l, async (u) => {
      u || (await Ie(), o.value.activatorEl?.focus({
        preventScroll: !0
      }));
    }), te(() => {
      const u = Dn.filterProps(e), c = U({
        "aria-haspopup": "dialog"
      }, e.activatorProps), d = U({
        tabindex: -1
      }, e.contentProps);
      return p(Dn, U({
        ref: o,
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
      }, i), {
        activator: a.activator,
        default: function() {
          for (var f = arguments.length, v = new Array(f), k = 0; k < f; k++)
            v[k] = arguments[k];
          return p(Te, {
            root: "VDialog"
          }, {
            default: () => [a.default?.(...v)]
          });
        }
      });
    }), yt({}, o);
  }
}), xC = N({
  inset: Boolean,
  ...hh({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), CC = J()({
  name: "VBottomSheet",
  props: xC(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue");
    return te(() => {
      const l = Fs.filterProps(e);
      return p(Fs, U(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), n);
    }), {};
  }
}), VC = N({
  divider: [Number, String],
  ...be()
}, "VBreadcrumbsDivider"), yh = J()({
  name: "VBreadcrumbsDivider",
  props: VC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => V("li", {
      "aria-hidden": "true",
      class: ee(["v-breadcrumbs-divider", e.class]),
      style: fe(e.style)
    }, [n?.default?.() ?? e.divider])), {};
  }
}), _C = N({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...be(),
  ...zt(ut(), ["width", "maxWidth"]),
  ...zi(),
  ...Pe({
    tag: "li"
  })
}, "VBreadcrumbsItem"), bh = J()({
  name: "VBreadcrumbsItem",
  props: _C(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = Wi(e, a), i = _(() => e.active || l.isActive?.value), {
      dimensionStyles: o
    } = ct(e), {
      textColorClasses: r,
      textColorStyles: s
    } = xt(() => i.value ? e.activeColor : e.color);
    return te(() => p(e.tag, {
      class: ee(["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class]),
      style: fe([s.value, o.value, e.style]),
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => [l.isLink.value ? V("a", U({
        class: "v-breadcrumbs-item--link",
        onClick: l.navigate
      }, l.linkProps), [n.default?.() ?? e.title]) : n.default?.() ?? e.title]
    })), {};
  }
}), IC = N({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: pe,
  items: {
    type: Array,
    default: () => []
  },
  ...be(),
  ...lt(),
  ...qe(),
  ...Pe({
    tag: "ul"
  })
}, "VBreadcrumbs"), PC = J()({
  name: "VBreadcrumbs",
  props: IC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = He(() => e.bgColor), {
      densityClasses: i
    } = Et(e), {
      roundedClasses: o
    } = Je(e);
    nt({
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
    const r = _(() => e.items.map((s) => typeof s == "string" ? {
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
        class: ee(["v-breadcrumbs", a.value, i.value, o.value, e.class]),
        style: fe([l.value, e.style])
      }, {
        default: () => [s && V("li", {
          key: "prepend",
          class: "v-breadcrumbs__prepend"
        }, [n.prepend ? p(Te, {
          key: "prepend-defaults",
          disabled: !e.icon,
          defaults: {
            VIcon: {
              icon: e.icon,
              start: !0
            }
          }
        }, n.prepend) : p(Ne, {
          key: "prepend-icon",
          start: !0,
          icon: e.icon
        }, null)]), r.value.map((u, c, d) => {
          let {
            item: f,
            raw: v
          } = u;
          return V(he, null, [n.item?.({
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
}), TC = N({
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
  ...Dt(),
  ...be(),
  ...dt(),
  ...wg(),
  ...qe(),
  ...Pe({
    tag: "button"
  }),
  ...$e(),
  ...ln({
    variant: "flat"
  })
}, "VIconBtn"), Sh = J()({
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
    const l = ke(e, "active"), {
      themeClasses: i
    } = Re(e), {
      borderClasses: o
    } = Ot(e), {
      elevationClasses: r
    } = ht(e), {
      roundedClasses: s
    } = Je(e), {
      colorClasses: u,
      colorStyles: c,
      variantClasses: d
    } = na(() => ({
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
        }, i.value, u.value, o.value, r.value, s.value, d.value, e.class]),
        style: fe([{
          "--v-icon-btn-rotate": ce(e.rotate, "deg"),
          "--v-icon-btn-height": ce(x),
          "--v-icon-btn-width": ce(w)
        }, c.value, e.style]),
        tabindex: e.disabled || e.readonly ? -1 : 0,
        onClick: v
      }, {
        default: () => [ta(!e.hideOverlay, "v-icon-btn"), V("div", {
          class: "v-icon-btn__content",
          "data-no-activator": ""
        }, [!a.default && k ? p(Ne, U({
          key: "content-icon"
        }, S), null) : p(Te, {
          key: "content-defaults",
          disabled: !k,
          defaults: {
            VIcon: {
              ...S
            }
          }
        }, {
          default: () => a.default?.() ?? Pn(e.text)
        })]), !!e.loading && V("span", {
          key: "loader",
          class: "v-icon-btn__loader"
        }, [a.loader?.() ?? p(ba, {
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
const kh = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, wh = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, DC = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], EC = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], MC = 28, BC = 31, cc = 12, ph = 1, fr = 1, fa = 7, Sf = 60, FC = 59, LC = 1440, $C = 24, OC = 23, NC = 0, RC = 1e4, HC = 100, WC = 100, zC = 1e4;
function jC(e, t, n) {
  const a = Yt(e);
  return Ph(a, t[0], Ih), mn(a), n && Ya(a, n, a.hasTime), a;
}
function YC(e, t, n) {
  const a = Yt(e);
  return Ph(a, t[t.length - 1]), mn(a), n && Ya(a, n, a.hasTime), a;
}
function xh(e) {
  const t = Yt(e);
  return t.day = fr, vr(t), mn(t), t;
}
function Ch(e) {
  const t = Yt(e);
  return t.day = fc(t.year, t.month), vr(t), mn(t), t;
}
function ml(e) {
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
function wl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!kh.exec(e) || e instanceof Date;
}
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const i = dc(e);
    return n && Ya(i, n, i.hasTime), i;
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
  return vr(l), mn(l), n && Ya(l, n, l.hasTime), l;
}
function dc(e) {
  return mn({
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
function vt(e) {
  return e.year * RC + e.month * HC + e.day;
}
function Ls(e) {
  return e.hour * WC + e.minute;
}
function wa(e) {
  return vt(e) * zC + Ls(e);
}
function Ya(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = vt(t), l = vt(e), i = a === l;
  return e.hasTime && n && i && (a = Ls(t), l = Ls(e), i = a === l), e.past = l < a, e.present = i, e.future = l > a, e;
}
function wf(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function pf(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = OC, e.minute = FC, e.time = _h(e))), e;
}
function Vh(e, t, n) {
  return e.hasTime = !0, e.hour = 0, e.minute = 0, $s(e, t), mn(e), n && Ya(e, n, !0), e;
}
function vr(e) {
  return e.weekday = KC(e), e;
}
function mn(e) {
  return e.time = _h(e), e.date = GC(e), e;
}
function KC(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % cc + 1, l = t(e.year / 100), i = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + i + t(i / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function fc(e, t) {
  return AC(e) ? EC[t] : DC[t];
}
function Yt(e) {
  if (e == null) return null;
  const {
    date: t,
    time: n,
    year: a,
    month: l,
    day: i,
    weekday: o,
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
    day: i,
    weekday: o,
    hour: r,
    minute: s,
    hasDay: u,
    hasTime: c,
    past: d,
    present: f,
    future: v
  };
}
function Na(e, t) {
  let n = String(e);
  for (; n.length < t; )
    n = "0" + n;
  return n;
}
function GC(e) {
  let t = `${Na(e.year, 4)}-${Na(e.month, 2)}`;
  return e.hasDay && (t += `-${Na(e.day, 2)}`), t;
}
function _h(e) {
  return e.hasTime ? `${Na(e.hour, 2)}:${Na(e.minute, 2)}` : "";
}
function $s(e, t) {
  for (e.minute += t; e.minute >= Sf; )
    e.minute -= Sf, e.hour++, e.hour >= $C && (va(e), e.hour = NC);
  return e;
}
function va(e) {
  return e.day++, e.weekday = (e.weekday + 1) % fa, e.day > MC && e.day > fc(e.year, e.month) && (e.day = fr, e.month++, e.month > cc && (e.month = ph, e.year++)), e;
}
function Ih(e) {
  return e.day--, e.weekday = (e.weekday + 6) % fa, e.day < fr && (e.month--, e.month < ph && (e.year--, e.month = cc), e.day = fc(e.year, e.month)), e;
}
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : va, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function qC(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, i = (t.hour - e.hour) * 60, o = t.minute - e.minute;
  return n + a + l + i + o;
}
function Ph(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function XC(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++)
    n[e[a]] = 1;
  for (let a = 0; a < fa; a++) {
    let l = 1;
    for (let i = 1; i < fa; i++) {
      const o = (a + i) % fa;
      if (n[o])
        break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function Os(e) {
  const t = `${Na(e.hour, 2)}:${Na(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Lo(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const o = vt(t), r = [];
  let s = Yt(e), u = 0, c = u === o;
  if (o < vt(e))
    throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < i) && r.length < l; ) {
    if (u = vt(s), c = c || u === o, a[s.weekday] === 0) {
      s = va(s);
      continue;
    }
    const d = Yt(s);
    mn(d), Ya(d, n), r.push(d), s = Aa(s, va, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function ZC(e, t, n, a, l) {
  const i = [];
  for (let o = 0; o < a; o++) {
    const r = t + o * n, s = Yt(e);
    i.push(Vh(s, r, l));
  }
  return i;
}
function oi(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(Os(a));
    } catch {
      return "";
    }
  };
}
function JC(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > fa || t.length === 0)
      return !1;
    const n = {};
    let a = !1;
    for (let l = 0; l < t.length; l++) {
      const i = t[l];
      if (!isFinite(i) || i < 0 || i >= fa)
        return !1;
      if (l > 0) {
        const o = i - t[l - 1];
        if (o < 0) {
          if (a)
            return !1;
          a = !0;
        } else if (o === 0)
          return !1;
      }
      if (n[i])
        return !1;
      n[i] = !0;
    }
    return !0;
  }
  return !1;
}
function QC(e) {
  const t = /* @__PURE__ */ wt({
    now: Yn("0000-00-00 00:00", !0),
    today: Yn("0000-00-00", !0)
  }), n = _(() => e.now && wl(e.now) ? Yn(e.now, !0) : null);
  function a() {
    t.now.present = t.today.present = !0, t.now.past = t.today.past = !1, t.now.future = t.today.future = !1;
  }
  function l() {
    return dc(/* @__PURE__ */ new Date());
  }
  function i(s, u) {
    s.date !== u.date && (u.year = s.year, u.month = s.month, u.day = s.day, u.weekday = s.weekday, u.date = s.date);
  }
  function o(s, u) {
    s.time !== u.time && (u.hour = s.hour, u.minute = s.minute, u.time = s.time);
  }
  function r() {
    const s = n.value || l();
    i(s, t.now), o(s, t.now), i(s, t.today);
  }
  return ue(n, r), r(), a(), {
    times: t,
    parsedNow: n,
    updateTimes: r,
    setPresent: a,
    getNow: l,
    updateDay: i,
    updateTime: o
  };
}
const mr = N({
  start: {
    type: [String, Number, Date],
    validate: wl,
    default: () => dc(/* @__PURE__ */ new Date()).date
  },
  end: {
    type: [String, Number, Date],
    validate: wl
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
    validator: wl
  },
  type: {
    type: String,
    default: "month"
  }
}, "VCalendar-base");
function vc(e) {
  const {
    times: t,
    updateTimes: n
  } = QC({
    now: e.now
  }), a = Hm(e), l = Ja(), i = _(() => e.type === "month" ? xh(Yn(e.start, !0)) : Yn(e.start, !0)), o = _(() => {
    const b = i.value, S = e.end && Yn(e.end) || b, g = wa(S) < wa(b) ? b : S;
    return e.type === "month" ? Ch(g) : g;
  }), r = _(() => wl(e.modelValue) ? Yn(e.modelValue, !0) : i.value || t.today), s = _(() => {
    const b = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), S = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...b.toSorted().filter((g) => g >= S), ...b.toSorted().filter((g) => g < S)];
  }), u = _(() => {
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
  }), c = _(() => XC(s.value)), d = _(() => Lo(i.value, o.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : oi(a.current.value, () => ({
    timeZone: "UTC",
    day: "numeric"
  }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : oi(a.current.value, (b, S) => ({
    timeZone: "UTC",
    weekday: S ? "short" : "long"
  })));
  function k(b) {
    return og(b);
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
    return oi(a.current.value, () => b);
  }
  return {
    times: t,
    locale: a,
    parsedValue: r,
    parsedWeekdays: s,
    effectiveWeekdays: u,
    weekdaySkips: c,
    parsedStart: i,
    parsedEnd: o,
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
const Th = N({
  maxDays: {
    type: Number,
    default: 7
  },
  intervalHeight: {
    type: [Number, String],
    default: 48,
    validate: ml
  },
  intervalWidth: {
    type: [Number, String],
    default: 60,
    validate: ml
  },
  intervalMinutes: {
    type: [Number, String],
    default: 60,
    validate: ml
  },
  firstInterval: {
    type: [Number, String],
    default: 0,
    validate: ml
  },
  firstTime: {
    type: [Number, String, Object],
    validate: UC
  },
  intervalCount: {
    type: [Number, String],
    default: 24,
    validate: ml
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
  const t = vc(e), n = /* @__PURE__ */ se(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), i = _(() => parseInt(String(e.intervalCount || 24))), o = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => kf(e.firstTime)), s = _(() => {
    const S = r.value;
    return S !== !1 && S >= 0 && S <= LC ? S : a.value * l.value;
  }), u = _(() => i.value * o.value), c = _(() => Lo(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const S = c.value, g = s.value, I = l.value, C = i.value, T = t.times.now;
    return S.map((P) => ZC(P, g, I, C, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : oi(t.locale.current.value, (S, g) => g ? S.minute === 0 ? {
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
    const I = Yt(g), C = S.currentTarget.getBoundingClientRect(), T = s.value, P = S, F = S, A = P.changedTouches || P.touches, D = ((A && A[0] ? A[0].clientY : F.clientY) - C.top) / o.value, L = Math.floor(D * l.value), W = T + L;
    return Vh(I, W, t.times.now);
  }
  function y(S) {
    const g = Yt(S);
    return g.timeToY = w, g.timeDelta = b, g.minutesToPixels = x, g.week = c.value, g.intervalRange = [s.value, s.value + i.value * l.value], g;
  }
  function h(S) {
    const g = w(S), I = n.value;
    return g === !1 || !I ? !1 : (I.scrollTop = g, !0);
  }
  function x(S) {
    return S / l.value * o.value;
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
    const C = i.value * l.value;
    if (g && typeof S == "object" && "day" in S) {
      const P = vt(S), F = vt(g);
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
    parsedIntervalCount: i,
    parsedIntervalHeight: o,
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
function eV(e, t) {
  const n = t.value, a = {
    passive: !t.modifiers?.active
  };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = {
    handler: n,
    options: a
  }, t.modifiers?.quiet || n();
}
function tV(e, t) {
  if (!e._onResize?.[t.instance.$.uid]) return;
  const {
    handler: n,
    options: a
  } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const _i = {
  mounted: eV,
  unmounted: tV
}, Xl = $t({
  name: "VCalendarDaily",
  directives: {
    vResize: _i
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
    ...mr(),
    ...Th()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = /* @__PURE__ */ ae(0), i = /* @__PURE__ */ ae(), o = Ah(e);
    function r() {
      Ie(s);
    }
    function s() {
      l.value = u();
    }
    function u() {
      return o.scrollAreaRef.value && i.value ? o.scrollAreaRef.value.offsetWidth - i.value.offsetWidth : 0;
    }
    function c() {
      return V("div", {
        class: "v-calendar-daily__head",
        style: {
          marginRight: l.value + "px"
        }
      }, [d(), f()]);
    }
    function d() {
      const B = ce(e.intervalWidth);
      return V("div", {
        class: "v-calendar-daily__intervals-head",
        style: {
          width: B
        }
      }, [n["interval-header"]?.()]);
    }
    function f() {
      return o.days.value.map(v);
    }
    function v(B, D) {
      const L = Qt(a, ":day", (W) => ({
        nativeEvent: W,
        ...o.getSlotScope(B)
      }));
      return V("div", U({
        key: B.date,
        class: ["v-calendar-daily_head-day", o.getRelativeClasses(B)]
      }, L), [m(B), y(B), k(B, D)]);
    }
    function k(B, D) {
      return n["day-header"]?.({
        week: o.days.value,
        ...B,
        index: D
      }) ?? [];
    }
    function m(B) {
      const D = B.present ? e.color : void 0;
      return V("div", U(o.getColorProps({
        text: D
      }), {
        class: "v-calendar-daily_head-weekday"
      }), [o.weekdayFormatter.value(B, e.shortWeekdays)]);
    }
    function y(B) {
      return V("div", {
        class: "v-calendar-daily_head-day-label"
      }, [n["day-label-header"]?.(B) ?? h(B)]);
    }
    function h(B) {
      const D = Qt(a, ":date", (L) => ({
        nativeEvent: L,
        ...B
      }));
      return p(Sh, U({
        active: B.present,
        activeColor: e.color,
        variant: "outlined",
        baseVariant: "text",
        "onUpdate:active": Jo
      }, D), {
        default: () => [o.dayFormatter.value(B, !1)]
      });
    }
    function x() {
      return V("div", {
        class: "v-calendar-daily__body"
      }, [w()]);
    }
    function w() {
      return V("div", {
        ref: o.scrollAreaRef,
        class: "v-calendar-daily__scroll-area"
      }, [b()]);
    }
    function b() {
      return V("div", {
        ref: i,
        class: "v-calendar-daily__pane",
        style: {
          height: ce(o.bodyHeight.value)
        }
      }, [S()]);
    }
    function S() {
      return V("div", {
        class: "v-calendar-daily__day-container"
      }, [P(), n.days?.() ?? g()]);
    }
    function g() {
      return o.days.value.map((B, D) => {
        const L = Qt(a, ":time", (W) => ({
          nativeEvent: W,
          ...o.getSlotScope(o.getTimestampAtEvent(W, B))
        }));
        return V("div", U({
          key: B.date,
          class: ["v-calendar-daily__day", o.getRelativeClasses(B)]
        }, L), [C(D), I(B)]);
      });
    }
    function I(B) {
      return n["day-body"]?.(o.getSlotScope(B)) ?? [];
    }
    function C(B) {
      return o.intervals.value[B].map(T);
    }
    function T(B) {
      const D = ce(e.intervalHeight), L = e.intervalStyle || o.intervalStyleDefault;
      return V("div", {
        class: "v-calendar-daily__day-interval",
        key: B.time,
        style: fe([{
          height: D
        }, L(B)])
      }, [n.interval?.(o.getSlotScope(B))]);
    }
    function P() {
      const B = ce(e.intervalWidth), D = Qt(a, ":interval", (L) => ({
        nativeEvent: L,
        ...o.getTimestampAtEvent(L, o.parsedStart.value)
      }));
      return V("div", U({
        class: "v-calendar-daily__intervals-body",
        style: {
          width: B
        }
      }, D), [F()]);
    }
    function F() {
      return o.intervals.value.length ? o.intervals.value[0].map(A) : null;
    }
    function A(B) {
      const D = ce(e.intervalHeight), L = e.shortIntervals, Q = (e.showIntervalLabel || o.showIntervalLabelDefault)(B) ? o.intervalFormatter.value(B, L) : void 0;
      return V("div", {
        key: B.time,
        class: "v-calendar-daily__interval",
        style: {
          height: D
        }
      }, [V("div", {
        class: "v-calendar-daily__interval-text"
      }, [Q])]);
    }
    return gt(r), te(() => Ue(V("div", {
      class: ee(["v-calendar-daily", a.class]),
      onDragstart: (B) => B.preventDefault()
    }, [e.hideHeader ? void 0 : c(), x()]), [[_i, s, void 0, {
      quiet: !0
    }]])), {
      ...o,
      scrollPush: l,
      pane: i,
      init: r,
      onResize: s,
      getScrollPush: u
    };
  }
});
function nV(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function Dh(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : nV(n, t);
    return {
      ...n,
      categoryName: a
    };
  }) : [];
}
const aV = $t({
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
    ...mr(),
    ...Th()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = Ah(e), i = _(() => Dh(e.categories, e.categoryText));
    function o(y, h) {
      const x = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
      return {
        ...y,
        category: x
      };
    }
    function r(y) {
      return V("div", {
        class: "v-calendar-category__columns"
      }, [i.value.map((h) => s(y, o(y, h)))]);
    }
    function s(y, h) {
      const x = typeof h.category == "object" ? h.category.categoryName : h.category, w = Qt(a, ":dayCategory", () => o(l.getSlotScope(y) || y, h.category));
      return V("div", U({
        class: "v-calendar-category__column-header"
      }, w), [n.category?.(h) ?? u(x), n["day-header"]?.(h)]);
    }
    function u(y) {
      return V("div", {
        class: "v-calendar-category__category"
      }, [y === null ? e.categoryForInvalid : y]);
    }
    function c() {
      const y = [];
      return l.days.value.forEach((h, x) => {
        const w = new Array(i.value.length || 1);
        w.fill(h), y.push(...w.map((b, S) => d(b, x, S)));
      }), y;
    }
    function d(y, h, x) {
      const w = i.value[x], b = Qt(a, ":time", (S) => l.getSlotScope(l.getTimestampAtEvent(S, y)));
      return V("div", U({
        key: y.date + "-" + x,
        class: ["v-calendar-daily__day", l.getRelativeClasses(y)]
      }, b), [f(h, w), k(y, w)]);
    }
    function f(y, h) {
      return l.intervals.value[y].map((x) => v(x, h));
    }
    function v(y, h) {
      const x = ce(e.intervalHeight), w = e.intervalStyle || l.intervalStyleDefault;
      return V("div", {
        key: y.time,
        class: "v-calendar-daily__day-interval",
        style: fe([{
          height: x
        }, w({
          ...y,
          category: h
        })])
      }, [n.interval?.(o(l.getSlotScope(y), h))]);
    }
    function k(y, h) {
      return V("div", {
        class: "v-calendar-category__columns"
      }, [m(y, h)]);
    }
    function m(y, h) {
      const x = Qt(a, ":timeCategory", (w) => o(l.getSlotScope(l.getTimestampAtEvent(w, y)), h));
      return V("div", U({
        class: "v-calendar-category__column"
      }, x), [n["day-body"]?.(o(l.getSlotScope(y), h))]);
    }
    return te(() => p(Xl, U({
      class: ["v-calendar-daily", "v-calendar-category"]
    }, e), {
      ...n,
      days: c,
      "day-header": r
    })), {
      ...l,
      parsedCategories: i
    };
  }
}), xf = $t({
  name: "VCalendarWeekly",
  props: {
    minWeeks: {
      validate: ml,
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
    ...mr()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = vc(e), i = ar(), o = _(() => parseInt(String(e.minWeeks))), r = _(() => {
      const S = o.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), I = l.getEndOfWeek(l.parsedEnd.value);
      return Lo(g, I, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, S);
    }), s = _(() => {
      const S = l.times.today, g = l.getStartOfWeek(S), I = l.getEndOfWeek(S);
      return Lo(g, I, S, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
    }), u = _(() => e.monthFormat ? e.monthFormat : oi(l.locale.current.value, (S, g) => ({
      timeZone: "UTC",
      month: g ? "short" : "long"
    })));
    function c(S) {
      const g = vt(S);
      return g < vt(l.parsedStart.value) || g > vt(l.parsedEnd.value);
    }
    function d() {
      return V("div", {
        class: "v-calendar-weekly__head",
        role: "row"
      }, [f()]);
    }
    function f() {
      const S = s.value.map(v);
      return e.showWeek && S.unshift(V("div", {
        class: "v-calendar-weekly__head-weeknumber"
      }, null)), S;
    }
    function v(S, g) {
      const I = c(r.value[g]), C = S.present ? e.color : void 0;
      return V("div", U(l.getColorProps({
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
      return e.showWeek && I.unshift(h(g)), V("div", {
        key: S[0].date,
        class: "v-calendar-weekly__week",
        role: "row"
      }, [I]);
    }
    function y(S) {
      return l.getWeekNumber(S);
    }
    function h(S) {
      return V("div", {
        class: "v-calendar-weekly__weeknumber"
      }, [V("small", null, [String(S)])]);
    }
    function x(S, g, I) {
      const C = c(S), T = Qt(a, ":day", (P) => ({
        nativeEvent: P,
        ...S
      }));
      return V("div", U({
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
      return V("div", {
        class: "v-calendar-weekly__day-label"
      }, [n["day-label"]?.(S) ?? b(S)]);
    }
    function b(S) {
      const g = S.day === 1 && e.showMonthOnFirst, I = Qt(a, ":date", (C) => ({
        nativeEvent: C,
        ...S
      }));
      return p(Sh, U({
        active: S.present,
        activeColor: e.color,
        variant: "outlined",
        baseVariant: "text",
        "onUpdate:active": Jo
      }, I), {
        default: () => [g ? u.value(S, e.shortMonths) + " " + l.dayFormatter.value(S, !1) : l.dayFormatter.value(S, !1)]
      });
    }
    return te(() => V("div", {
      class: ee(["v-calendar-weekly", i.themeClasses.value]),
      onDragstart: (S) => S.preventDefault()
    }, [e.hideHeader ? void 0 : d(), k()])), {
      ...l,
      days: r,
      todayWeek: s,
      monthFormatter: u,
      isOutside: c
    };
  }
}), lV = 864e5;
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
function gn(e, t, n, a) {
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
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + lV, e.endTimestampIdentifier)];
}
function iV(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    let o = !1;
    if (gn(t, n, i.start, i.end, a))
      for (let r = 0; r < i.visuals.length; r++) {
        const s = i.visuals[r], [u, c] = a ? Mh(s.event) : Bh(s.event);
        if (gn(t, n, u, c, a)) {
          o = !0;
          break;
        }
      }
    if (!o)
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
      let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      (n.weekday === e || i) && t.reset();
      const o = wa(n), r = Eh(a, o);
      return r.forEach((s) => {
        const [u, c] = l ? Mh(s.event) : Bh(s.event);
        t.groups.length > 0 && !gn(u, c, t.min, t.max, l) && (Cf(t.groups), t.reset());
        let d = iV(t.groups, u, c, l);
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
const Vf = 100, oV = (e, t, n) => {
  const a = Lh(t);
  return (l, i, o, r) => {
    const s = a.getVisuals(l, i, o, r);
    return o && s.forEach((u) => {
      u.left = u.column * Vf / u.columnCount, u.width = Vf / u.columnCount;
    }), s;
  };
}, oo = 100, rV = 5, sV = 1.7, uV = (e, t, n) => {
  const a = Lh(t);
  return (l, i, o, r) => {
    if (!o)
      return a.getVisuals(l, i, o, r);
    const s = wa(l), u = Eh(i, s), c = hV(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const k = yV(v, s), m = vV(k, f);
        if (m === !1) {
          const y = mV(k, f);
          y && (k.parent = y, k.sibling = gn(k.start, k.end, y.start, go(y.start, n)), k.index = y.index + 1, y.children.push(k));
        } else {
          const [y] = _f(k, f, m - 1, m - 1), h = _f(k, f, m + 1, m + f.length, !0);
          k.children = h, k.index = m, y && (k.parent = y, k.sibling = gn(k.start, k.end, y.start, go(y.start, n)), y.children.push(k));
          for (const x of h)
            x.parent === y && (x.parent = k), x.index - k.index <= 1 && k.sibling && gn(k.start, go(k.start, n), x.start, x.end) && (x.sibling = !0);
        }
        f.push(k);
      }
      cV(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function cV(e, t) {
  for (const n of e) {
    const {
      visual: a,
      parent: l
    } = n, i = $h(n) + 1, o = l ? l.visual.left : 0, r = oo - o, s = Math.min(rV, oo / i), u = dV(n, e), c = r / (i - n.index + 1), d = r / (i - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? o + c : o + s), a.width = gV(n, e, t) ? oo - a.left : Math.min(oo - a.left, d * sV);
  }
}
function dV(e, t) {
  if (!e.children.length)
    return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, i) => Math.min(l, i.index), n) - e.index;
}
function fV(e, t) {
  const n = [];
  for (const a of t)
    gn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function vV(e, t) {
  const n = fV(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++)
    if (a < n[a])
      return a;
  return !1;
}
function _f(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  const i = [];
  for (const o of t)
    o.index >= n && o.index <= a && gn(e.start, e.end, o.start, o.end) && i.push(o);
  if (l && i.length > 0) {
    const o = i.reduce((r, s) => Math.min(r, s.index), i[0].index);
    return i.filter((r) => r.index === o);
  }
  return i;
}
function mV(e, t) {
  let n = null;
  for (const a of t)
    gn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function gV(e, t, n) {
  for (const a of t)
    if (a !== e && a.index > e.index && gn(e.start, go(e.start, n), a.start, a.end))
      return !1;
  return !0;
}
function hV(e, t) {
  const n = [];
  for (const a of e) {
    const [l, i] = Fh(a.event, t);
    let o = !1;
    for (const r of n)
      if (gn(l, i, r.start, r.end)) {
        r.visuals.push(a), r.end = Math.max(r.end, i), o = !0;
        break;
      }
    o || n.push({
      start: l,
      end: i,
      visuals: [a]
    });
  }
  return n;
}
function yV(e, t) {
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
function $h(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = $h(n);
    a > t && (t = a);
  }
  return t;
}
function go(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), i = a % 60;
  return e - n + l * 100 + i;
}
const Oh = {
  stack: uV,
  column: oV
};
function bV(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
  const o = e[n], r = e[a], s = Yn(o, !0), u = r ? Yn(r, !0) : s, c = wf(o) ? pf(s, l) : s, d = wf(r) ? pf(u, l) : u, f = vt(c), v = wa(c), k = vt(d), m = c.hasTime ? 0 : 2359, y = wa(d) + m, h = !c.hasTime;
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
    category: i
  };
}
function mc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function SV(e, t, n) {
  if (n) {
    const a = $s(Yt(t), n[0]), l = $s(Yt(t), n[1]), i = e.startTimestampIdentifier < wa(l), o = e.endTimestampIdentifier > wa(a);
    return i && o;
  }
  return mc(e, vt(t));
}
function kV(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function If(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && mc(e, n);
}
function wV(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const pV = 100, xV = 95, CV = N({
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
    validate: (e) => e in Oh || typeof e == "function"
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
function VV(e, t, n) {
  const a = vc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), i = _(() => e.type === "category"), o = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (D) => !!D[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (D) => D[e.eventCategory]), s = _(() => e.events ? e.events.map((D, L) => bV(D, L, e.eventStart || "", e.eventEnd || "", o.value(D), i.value ? r.value(D) : !1)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (D, L) => D.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Oh[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
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
        parent: R,
        events: Q,
        more: q
      } = L[W];
      if (!q)
        break;
      const O = R.getBoundingClientRect(), ne = Q.length - 1, K = Q.map((G) => ({
        event: G,
        bottom: G.getBoundingClientRect().bottom
      })).sort((G, X) => G.bottom - X.bottom);
      let H = 0;
      for (let G = 0; G <= ne; G++) {
        const X = K[G].bottom;
        (G === ne ? X > O.bottom : X + D > O.bottom) && (K[G].event.style.display = "none", H++);
      }
      H ? (q.style.display = "", q.innerHTML = a.locale.t(e.eventMoreText, H)) : q.style.display = "none";
    }
  }
  function h() {
    const D = {}, L = m.value;
    return !L || !L.length || L.forEach((W) => {
      const R = W.getAttribute("data-date");
      W.parentElement && R && (R in D || (D[R] = {
        parent: W.parentElement,
        more: null,
        events: []
      }), W.getAttribute("data-more") ? D[R].more = W : (D[R].events.push(W), W.style.display = ""));
    }), D;
  }
  function x(D, L) {
    let {
      event: W
    } = D;
    const R = e.eventHeight || 0, Q = e.eventMarginBottom || 0, q = vt(L), O = L.week, ne = q === W.startIdentifier;
    let K = q === W.endIdentifier, H = xV;
    if (!i.value)
      for (let X = L.index + 1; X < O.length; X++) {
        const ve = vt(O[X]);
        if (W.endIdentifier >= ve)
          H += pV, K = K || ve === W.endIdentifier;
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
        height: `${R}px`,
        width: `${H}%`,
        marginBottom: `${Q}px`
      },
      "data-date": L.date
    });
  }
  function w(D, L) {
    let {
      event: W,
      left: R,
      width: Q
    } = D;
    const q = L.timeDelta(W.start, L), O = L.timeDelta(W.end, L);
    if (O === !1 || q === !1 || O < 0 || q >= 1 || kV(W, L))
      return !1;
    const ne = vt(L), K = W.startIdentifier >= ne, H = W.endIdentifier > ne, G = L.timeToY(W.start, L), X = L.timeToY(W.end, L), ve = Math.max(e.eventHeight || 0, X - G);
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
        height: `${ve}px`,
        left: `${R}%`,
        width: `${Q}%`
      }
    });
  }
  function b(D, L, W, R) {
    const Q = t.event, q = c.value(D.input), O = k(D.input), ne = D.start.hour < 12 && D.end.hour >= 12, K = qC(D.start, D.end) <= u.value, H = (de, xe) => a.getFormatter({
      timeZone: "UTC",
      hour: "numeric",
      minute: de.minute > 0 ? "numeric" : void 0
    })(de, !0), G = () => H(D.start) + " - " + H(D.end), X = () => {
      const de = d.value(D, W);
      if (D.start.hasTime)
        if (W) {
          const xe = G(), Ce = K ? ", " : V("br", null, null);
          return V("span", {
            class: "v-event-summary"
          }, [V("strong", null, [de]), Ce, xe]);
        } else {
          const xe = H(D.start);
          return V("span", {
            class: "v-event-summary"
          }, [V("strong", null, [xe]), Ut(" "), de]);
        }
      return V("span", {
        class: "v-event-summary"
      }, [de]);
    }, ve = {
      ...L,
      event: D.input,
      outside: L.day.outside,
      singline: K,
      overlapsNoon: ne,
      formatTime: H,
      timeSummary: G,
      eventSummary: X
    }, Z = Qt(n, ":event", (de) => ({
      ...ve,
      nativeEvent: de
    }));
    return Ue(V("div", U(a.getColorProps({
      text: q,
      background: O
    }), Z, R, {
      ref_for: !0,
      ref: m
    }), [Q?.(ve) ?? S(X)]), [[Vt, e.eventRipple ?? !0]]);
  }
  function S(D) {
    return V("div", {
      class: "pl-1"
    }, [D()]);
  }
  function g(D) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return V("div", {
      style: {
        height: `${L}px`
      },
      "data-date": D.date,
      ref_for: !0,
      ref: m
    }, null);
  }
  function I(D) {
    const L = e.eventHeight || 0, W = e.eventMarginBottom || 0, R = Qt(n, ":more", (Q) => ({
      nativeEvent: Q,
      ...D
    }));
    return Ue(V("div", U({
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
    }, R), null), [[Vt, e.eventRipple ?? !0]]);
  }
  function C() {
    const D = a.days.value, L = vt(D[0]), W = vt(D[D.length - 1]);
    return s.value.filter((R) => wV(R, L, W));
  }
  function T(D, L) {
    return !i.value || typeof L == "object" && L.categoryName && L.categoryName === D.category || typeof D.category == "string" && L === D.category || typeof D.category != "string" && L === null;
  }
  function P(D) {
    const L = vt(D), W = v.value[0];
    return s.value.filter((R) => If(R, D, L, W));
  }
  function F(D) {
    const L = vt(D), W = v.value[0];
    return s.value.filter((R) => R.allDay && (i.value ? mc(R, L) : If(R, D, L, W)) && T(R, D.category));
  }
  function A(D) {
    return s.value.filter((L) => !L.allDay && SV(L, D, D.intervalRange) && T(L, D.category));
  }
  function B() {
    if (l.value)
      return {
        ...t
      };
    const D = f.value(s.value, v.value[0], u.value), L = (R) => !!R, W = (R, Q, q, O) => {
      const ne = Q(R), K = D(R, ne, O, i.value);
      if (O)
        return K.map((G) => q(G, R)).filter(L);
      const H = [];
      return K.forEach((G, X) => {
        for (; H.length < G.column; )
          H.push(g(R));
        const ve = q(G, R);
        ve && H.push(ve);
      }), H;
    };
    return {
      ...t,
      day: (R) => {
        let Q = W(R, P, x, !1);
        if (Q && Q.length > 0 && e.eventMore && Q.push(I(R)), t.day) {
          const q = t.day(R);
          q && (Q = Q ? Q.concat(q) : q);
        }
        return Q;
      },
      "day-header": (R) => {
        let Q = W(R, F, x, !1);
        if (t["day-header"]) {
          const q = t["day-header"](R);
          q && (Q = Q ? Q.concat(q) : q);
        }
        return Q;
      },
      "day-body": (R) => {
        const Q = W(R, A, w, !0);
        let q = [V("div", {
          class: "v-event-timed-container"
        }, [Q])];
        if (t["day-body"]) {
          const O = t["day-body"](R);
          O && (q = q.concat(O));
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
    eventTimedFunction: o,
    eventCategoryFunction: r,
    eventTextColorFunction: c,
    eventNameFunction: d,
    eventModeFunction: f,
    eventWeekdays: v,
    categoryMode: i,
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
const _V = J()({
  name: "VCalendar",
  directives: {
    vResize: _i
  },
  props: {
    modelValue: {
      type: [String, Number, Date],
      validate: wl
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
    ...mr(),
    ...CV()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = /* @__PURE__ */ ae(), o = VV(e, n, a), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => Dh(e.categories, e.categoryText)), d = _(() => {
      const g = o.parsedValue.value;
      let I = null, C = e.maxDays, T = c.value, P = g, F = g;
      switch (e.type) {
        case "month":
          I = xf, P = xh(g), F = Ch(g);
          break;
        case "week":
          I = Xl, P = o.getStartOfWeek(g), F = o.getEndOfWeek(g), C = 7;
          break;
        case "day":
          I = Xl, C = 1;
          break;
        case "4day":
          I = Xl, F = Aa(Yt(F), va, 3), mn(F), C = 4;
          break;
        case "custom-weekly":
          I = xf, P = o.parsedStart.value || g, F = o.parsedEnd.value;
          break;
        case "custom-daily":
          I = Xl, P = o.parsedStart.value || g, F = o.parsedEnd.value;
          break;
        case "category":
          const A = u.value;
          I = aV, F = Aa(Yt(F), va, A), mn(F), C = A, T = S(T);
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
    }), f = _(() => o.effectiveWeekdays.value), v = _(() => e.type === "category"), k = _(() => o.getFormatter({
      timeZone: "UTC",
      month: "long"
    })), m = _(() => o.getFormatter({
      timeZone: "UTC",
      month: "short"
    })), y = _(() => {
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
      const I = Yt(o.parsedValue.value), C = g > 0, T = C ? va : Ih, P = C ? BC : fr;
      let F = C ? g : -g;
      for (; --F >= 0; )
        switch (e.type) {
          case "month":
            I.day = P, T(I);
            break;
          case "week":
            Aa(I, T, fa);
            break;
          case "day":
            Aa(I, T, 1);
            break;
          case "4day":
            Aa(I, T, 4);
            break;
          case "category":
            Aa(I, T, u.value);
            break;
        }
      vr(I), mn(I), Ya(I, o.times.now), e.modelValue instanceof Date ? l("update:modelValue", Os(I)) : typeof e.modelValue == "number" ? l("update:modelValue", Os(I).getTime()) : l("update:modelValue", I.date), l("moved", I);
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
      if (!o.noEvents.value) {
        const I = g.reduce((C, T, P) => (typeof T == "object" && T.categoryName ? C[T.categoryName] = {
          index: P,
          count: 0
        } : typeof T == "string" && (C[T] = {
          index: P,
          count: 0
        }), C), {});
        if (!e.categoryHideDynamic || !e.categoryShowAll) {
          let C = g.length;
          o.parsedEvents.value.forEach((T) => {
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
    return ue(d, h), gt(() => {
      o.updateEventVisibility(), h();
    }), Go(() => {
      window.requestAnimationFrame(o.updateEventVisibility);
    }), te(() => {
      const {
        start: g,
        end: I,
        maxDays: C,
        component: T,
        categories: P
      } = d.value;
      return Ue(p(T, U({
        ref: i,
        class: ["v-calendar", {
          "v-calendar-events": !o.noEvents.value
        }],
        role: "grid"
      }, T.filterProps(e), {
        start: g.date,
        end: I.date,
        maxDays: C,
        weekdays: o.effectiveWeekdays.value,
        categories: P,
        "onClick:date": (F, A) => {
          a["onUpdate:modelValue"] && l("update:modelValue", A.date);
        }
      }), o.getScopedSlots()), [[_i, o.updateEventVisibility, void 0, {
        quiet: !0
      }]]);
    }), yt({
      ...o,
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
    }, i);
  }
}), IV = N({
  ...be(),
  ...Pe()
}, "VCardActions"), Nh = J()({
  name: "VCardActions",
  props: IV(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return nt({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), te(() => p(e.tag, {
      class: ee(["v-card-actions", e.class]),
      style: fe(e.style)
    }, n)), {};
  }
}), PV = N({
  opacity: [Number, String],
  ...be(),
  ...Pe()
}, "VCardSubtitle"), Rh = J()({
  name: "VCardSubtitle",
  props: PV(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-card-subtitle", e.class]),
      style: fe([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Hh = Qn("v-card-title"), TV = N({
  appendAvatar: String,
  appendIcon: pe,
  prependAvatar: String,
  prependIcon: pe,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...be(),
  ...lt(),
  ...Pe()
}, "VCardItem"), Wh = J()({
  name: "VCardItem",
  props: TV(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return p(e.tag, {
        class: ee(["v-card-item", e.class]),
        style: fe(e.style)
      }, {
        default: () => [l && V("div", {
          key: "prepend",
          class: "v-card-item__prepend"
        }, [n.prepend ? p(Te, {
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
        }, n.prepend) : V(he, null, [e.prependAvatar && p(tn, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(Ne, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)])]), V("div", {
          class: "v-card-item__content"
        }, [r && p(Hh, {
          key: "title"
        }, {
          default: () => [n.title?.() ?? Pn(e.title)]
        }), s && p(Rh, {
          key: "subtitle"
        }, {
          default: () => [n.subtitle?.() ?? Pn(e.subtitle)]
        }), n.default?.()]), o && V("div", {
          key: "append",
          class: "v-card-item__append"
        }, [n.append ? p(Te, {
          key: "append-defaults",
          disabled: !i,
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
        }, n.append) : V(he, null, [e.appendIcon && p(Ne, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && p(tn, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)])])]
      });
    }), {};
  }
}), AV = N({
  opacity: [Number, String],
  ...be(),
  ...Pe()
}, "VCardText"), zh = J()({
  name: "VCardText",
  props: AV(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => p(e.tag, {
      class: ee(["v-card-text", e.class]),
      style: fe([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), DV = N({
  appendAvatar: String,
  appendIcon: pe,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: pe,
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
  ...Dt(),
  ...be(),
  ...lt(),
  ...ut(),
  ...dt(),
  ...rr(),
  ...aa(),
  ...Fl(),
  ...qe(),
  ...zi(),
  ...Pe(),
  ...$e(),
  ...ln({
    variant: "elevated"
  })
}, "VCard"), EV = J()({
  name: "VCard",
  directives: {
    vRipple: Vt
  },
  props: DV(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Re(e), {
      borderClasses: i
    } = Ot(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = na(e), {
      densityClasses: u
    } = Et(e), {
      dimensionStyles: c
    } = ct(e), {
      elevationClasses: d
    } = ht(e), {
      loaderClasses: f
    } = Ri(e), {
      locationStyles: v
    } = il(e), {
      positionClasses: k
    } = Ll(e), {
      roundedClasses: m
    } = Je(e), y = Wi(e, n), h = /* @__PURE__ */ se(void 0);
    return ue(() => e.loading, (x, w) => {
      h.value = !x && typeof w == "string" ? w : typeof x == "boolean" ? void 0 : x;
    }, {
      immediate: !0
    }), te(() => {
      const x = e.link !== !1 && y.isLink.value, w = !e.disabled && e.link !== !1 && (e.link || y.isClickable.value), b = x ? "a" : e.tag, S = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), I = S || g, C = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), F = I || T || C, A = !!(a.text || e.text != null);
      return Ue(p(b, U(y.linkProps, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": w
        }, l.value, i.value, o.value, u.value, d.value, f.value, k.value, m.value, s.value, e.class],
        style: [r.value, c.value, v.value, e.style],
        onClick: w && y.navigate,
        tabindex: e.disabled ? -1 : void 0
      }), {
        default: () => [P && V("div", {
          key: "image",
          class: "v-card__image"
        }, [a.image ? p(Te, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, a.image) : p(Xn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), p(Hi, {
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
        }), ta(w, "v-card")]
      }), [[Vt, w && e.ripple]]);
    }), {};
  }
}), MV = (e) => {
  const {
    touchstartX: t,
    touchendX: n,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && n < t - o && e.left(e), e.right && n > t + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function BV(e, t) {
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, t.start?.({
    originalEvent: e,
    ...t
  });
}
function FV(e, t) {
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, t.end?.({
    originalEvent: e,
    ...t
  }), MV(t);
}
function LV(e, t) {
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, t.move?.({
    originalEvent: e,
    ...t
  });
}
function $V() {
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
    touchstart: (n) => BV(n, t),
    touchend: (n) => FV(n, t),
    touchmove: (n) => LV(n, t)
  };
}
function OV(e, t) {
  const n = t.value, a = n?.parent ? e.parentElement : e, l = n?.options ?? {
    passive: !0
  }, i = t.instance?.$.uid;
  if (!a || i === void 0) return;
  const o = $V(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Sm(o).forEach((r) => {
    a.addEventListener(r, o[r], l);
  });
}
function NV(e, t) {
  const n = t.value?.parent ? e.parentElement : e, a = t.instance?.$.uid;
  if (!n?._touchHandlers || a === void 0) return;
  const l = n._touchHandlers[a];
  Sm(l).forEach((i) => {
    n.removeEventListener(i, l[i]);
  }), delete n._touchHandlers[a];
}
const $o = {
  mounted: OV,
  unmounted: NV
}, jh = /* @__PURE__ */ Symbol.for("vuetify:v-window"), Yh = /* @__PURE__ */ Symbol.for("vuetify:v-window-group"), gr = N({
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
  ...be(),
  ...Pe(),
  ...$e()
}, "VWindow"), Ua = J()({
  name: "VWindow",
  directives: {
    vTouch: $o
  },
  props: gr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      isRtl: l
    } = ft(), {
      t: i
    } = je(), o = xa(e, Yh), r = /* @__PURE__ */ ae(), s = _(() => l.value ? !e.reverse : e.reverse), u = /* @__PURE__ */ se(!1), c = _(() => {
      if (e.crossfade)
        return "v-window-crossfade-transition";
      const b = e.direction === "vertical" ? "y" : "x", g = (s.value ? !u.value : u.value) ? "-reverse" : "";
      return `v-window-${b}${g}-transition`;
    }), d = /* @__PURE__ */ se(0), f = /* @__PURE__ */ ae(void 0), v = _(() => o.items.value.findIndex((b) => o.selected.value.includes(b.id)));
    ue(v, (b, S) => {
      let g;
      const I = {
        left: 0,
        top: 0
      };
      ze && S >= 0 && (g = er(r.value), I.left = g?.scrollLeft, I.top = g?.scrollTop);
      const C = o.items.value.length, T = C - 1;
      C <= 2 ? u.value = b < S : b === T && S === 0 ? u.value = !1 : b === 0 && S === T ? u.value = !0 : u.value = b < S, Ie(() => {
        if (!ze || !g) return;
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
    }), Ge(jh, {
      transition: c,
      isReversed: u,
      transitionCount: d,
      transitionHeight: f,
      rootRef: r
    });
    const k = /* @__PURE__ */ E(() => e.continuous || v.value !== 0), m = /* @__PURE__ */ E(() => e.continuous || v.value !== o.items.value.length - 1);
    function y() {
      k.value && o.prev();
    }
    function h() {
      m.value && o.next();
    }
    const x = _(() => {
      const b = [], S = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      b.push(k.value ? n.prev ? n.prev({
        props: S
      }) : p(Fe, S, null) : V("div", null, null));
      const g = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return b.push(m.value ? n.next ? n.next({
        props: g
      }) : p(Fe, g, null) : V("div", null, null)), b;
    }), w = _(() => e.touch === !1 ? e.touch : {
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
    return te(() => Ue(p(e.tag, {
      ref: r,
      class: ee(["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover",
        "v-window--vertical-arrows": !!e.verticalArrows,
        "v-window--crossfade": !!e.crossfade
      }, a.value, e.class]),
      style: fe([e.style, {
        "--v-window-transition-duration": Tn() ? null : ce(e.transitionDuration, "ms")
      }])
    }, {
      default: () => [V("div", {
        class: "v-window__container",
        style: {
          height: f.value
        }
      }, [n.default?.({
        group: o
      }), e.showArrows !== !1 && V("div", {
        class: ee(["v-window__controls", {
          "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === !0
        }, {
          "v-window__controls--right": e.verticalArrows === "right"
        }])
      }, [x.value])]), n.additional?.({
        group: o
      })]
    }), [[$o, w.value]])), {
      group: o
    };
  }
}), RV = N({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: pe,
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
  ...gr({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), HV = J()({
  name: "VCarousel",
  props: RV(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), {
      t: l
    } = je(), i = /* @__PURE__ */ ae();
    let o = -1;
    ue(a, s), ue(() => e.interval, s), ue(() => e.cycle, (u) => {
      u ? s() : window.clearTimeout(o);
    }), gt(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return te(() => {
      const u = Ua.filterProps(e);
      return p(Ua, U({
        ref: i
      }, u, {
        modelValue: a.value,
        "onUpdate:modelValue": (c) => a.value = c,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: ce(e.height)
        }, e.style]
      }), {
        default: n.default,
        additional: (c) => {
          let {
            group: d
          } = c;
          return V(he, null, [!e.hideDelimiters && V("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [d.items.value.length > 0 && p(Te, {
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
              }) : p(Fe, U(f, k), null);
            })]
          })]), e.progress && p(or, {
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
}), hr = N({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...be(),
  ...ll(),
  ...ac()
}, "VWindowItem"), Ka = J()({
  name: "VWindowItem",
  directives: {
    vTouch: $o
  },
  props: hr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(jh), l = ya(e, Yh), {
      isBooted: i
    } = nl();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = /* @__PURE__ */ se(!1), r = _(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function u() {
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = ce(a.rootRef.value?.clientHeight)), a.transitionCount.value += 1);
    }
    function c() {
      s();
    }
    function d(k) {
      o.value && Ie(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = ce(k.clientHeight));
      });
    }
    const f = _(() => {
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
    } = lc(e, l.isSelected);
    return te(() => p(Lt, {
      transition: f.value,
      disabled: !i.value
    }, {
      default: () => [Ue(V("div", {
        class: ee(["v-window-item", l.selectedClass.value, e.class]),
        style: fe(e.style)
      }, [v.value && n.default?.()]), [[kn, l.isSelected.value]])]
    })), {
      groupItem: l
    };
  }
}), WV = N({
  ...sg(),
  ...hr()
}, "VCarouselItem"), zV = J()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: WV(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    te(() => {
      const l = Xn.filterProps(e), i = Ka.filterProps(e);
      return p(Ka, U({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [p(Xn, U(a, l), n)]
      });
    });
  }
}), jV = Qn("v-code", "code"), YV = N({
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
  ...be()
}, "VColorPickerCanvas"), UV = $t({
  name: "VColorPickerCanvas",
  props: YV(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = /* @__PURE__ */ se(!1), l = /* @__PURE__ */ ae(), i = /* @__PURE__ */ se(parseFloat(e.width)), o = /* @__PURE__ */ se(parseFloat(e.height)), r = /* @__PURE__ */ ae({
      x: 0,
      y: 0
    }), s = _({
      get: () => r.value,
      set(y) {
        if (!l.value) return;
        const {
          x: h,
          y: x
        } = y;
        r.value = y, n("update:color", {
          h: e.color?.h ?? 0,
          s: We(h, 0, i.value) / i.value,
          v: 1 - We(x, 0, o.value) / o.value,
          a: e.color?.a ?? 1
        });
      }
    }), u = _(() => {
      const {
        x: y,
        y: h
      } = s.value, x = parseInt(e.dotSize, 10) / 2;
      return {
        width: ce(e.dotSize),
        height: ce(e.dotSize),
        transform: `translate(${ce(y - x)}, ${ce(h - x)})`
      };
    }), {
      resizeRef: c
    } = cn((y) => {
      if (!c.el?.offsetParent) return;
      const {
        width: h,
        height: x
      } = y[0].contentRect;
      i.value = h, o.value = x;
    });
    function d(y, h, x) {
      const {
        left: w,
        top: b,
        width: S,
        height: g
      } = x;
      s.value = {
        x: We(y - w, 0, S),
        y: We(h - b, 0, g)
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
    }), ue(() => [i.value, o.value], (y, h) => {
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
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), gt(() => m()), te(() => V("div", {
      ref: c,
      class: ee(["v-color-picker-canvas", e.class]),
      style: fe(e.style),
      onMousedown: f,
      onTouchstartPassive: f
    }, [V("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && V("div", {
      class: ee(["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }]),
      style: fe(u.value)
    }, null)])), {};
  }
});
function KV(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function GV(e, t) {
  if (t == null || typeof t == "string") {
    const n = e.a !== 1;
    if (t?.startsWith("rgb(")) {
      const {
        r: l,
        g: i,
        b: o,
        a: r
      } = An(e);
      return `rgb(${l} ${i} ${o}` + (n ? ` / ${r})` : ")");
    } else if (t?.startsWith("hsl(")) {
      const {
        h: l,
        s: i,
        l: o,
        a: r
      } = ks(e);
      return `hsl(${l} ${Math.round(i * 100)} ${Math.round(o * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Fm(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Ea(t, ["r", "g", "b"]) ? n = An(e) : Ea(t, ["h", "s", "l"]) ? n = ks(e) : Ea(t, ["h", "s", "v"]) && (n = e), KV(n, !Ea(t, ["a"]) && e.a === 1);
  }
  return e;
}
const hl = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Ns = {
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
  to: An,
  from: $i
}, qV = {
  ...Ns,
  inputs: Ns.inputs?.slice(0, 3)
}, Rs = {
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
  to: ks,
  from: Mu
}, XV = {
  ...Rs,
  inputs: Rs.inputs.slice(0, 3)
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
}, ZV = {
  ...Uh,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t,
    localeKey: "hexInput"
  }]
}, Ra = {
  rgb: qV,
  rgba: Ns,
  hsl: XV,
  hsla: Rs,
  hex: ZV,
  hexa: Uh
}, JV = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return V("div", {
    class: "v-color-picker-edit__input"
  }, [V("input", Pb(am(n)), null), V("span", null, [t])]);
}, QV = N({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Ra).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Ra),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Ra).includes(t))
  },
  ...be()
}, "VColorPickerEdit"), e1 = $t({
  name: "VColorPickerEdit",
  props: QV(),
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
    } = je(), l = _(() => e.modes.map((o) => ({
      ...Ra[o],
      name: o
    }))), i = _(() => {
      const o = l.value.find((s) => s.name === e.mode);
      if (!o) return [];
      const r = e.color ? o.to(e.color) : null;
      return o.inputs?.map((s) => {
        let {
          getValue: u,
          getColor: c,
          localeKey: d,
          ...f
        } = s;
        return {
          ...o.inputProps,
          ...f,
          ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`),
          disabled: e.disabled,
          value: r && u(r),
          onChange: (v) => {
            const k = v.target;
            k && n("update:color", o.from(c(r ?? o.to(hl), k.value)));
          }
        };
      });
    });
    return te(() => V("div", {
      class: ee(["v-color-picker-edit", e.class]),
      style: fe(e.style)
    }, [i.value?.map((o) => p(JV, o, null)), l.value.length > 1 && p(Fe, {
      icon: "$unfold",
      size: "x-small",
      variant: "plain",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"),
      onClick: () => {
        const o = l.value.findIndex((r) => r.name === e.mode);
        n("update:mode", l.value[(o + 1) % l.value.length].name);
      }
    }, null)])), {};
  }
}), gc = /* @__PURE__ */ Symbol.for("vuetify:v-slider");
function Hs(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function t1(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Kh = N({
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
  ...qe(),
  ...dt({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Gh = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(Vd(a.value), Vd(t.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = We(o, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: i
  };
}, qh = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const r = Ol(t), {
    isRtl: s
  } = ft(), u = /* @__PURE__ */ E(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), {
    min: f,
    max: v,
    step: k,
    decimals: m,
    roundValue: y
  } = n, h = _(() => parseInt(t.thumbSize, 10)), x = _(() => parseInt(t.tickSize, 10)), w = _(() => parseInt(t.trackSize, 10)), b = _(() => (v.value - f.value) / k.value), S = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), I = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = /* @__PURE__ */ se(!1), P = /* @__PURE__ */ se(0), F = /* @__PURE__ */ ae(), A = /* @__PURE__ */ ae();
  function B(Z) {
    const de = F.value?.$el;
    if (!de) return;
    const xe = t.direction === "vertical", Ce = xe ? "top" : "left", _e = xe ? "height" : "width", M = xe ? "clientY" : "clientX", {
      [Ce]: $,
      [_e]: j
    } = de.getBoundingClientRect(), re = t1(Z, M);
    let z = We((re - $ - P.value) / j) || 0;
    return (xe ? d.value : d.value !== s.value) && (z = 1 - z), y(f.value + z * (v.value - f.value));
  }
  const D = (Z) => {
    const de = B(Z);
    de != null && i({
      value: de
    }), T.value = !1, P.value = 0;
  }, L = (Z) => {
    const de = B(Z);
    A.value = o(Z), A.value && (T.value = !0, A.value.contains(Z.target) ? P.value = Hs(Z, A.value, t.direction) : (P.value = 0, de != null && l({
      value: de
    })), de != null && a({
      value: de
    }), Ie(() => A.value?.focus()));
  }, W = {
    passive: !0,
    capture: !0
  };
  function R(Z) {
    const de = B(Z);
    de != null && l({
      value: de
    });
  }
  function Q(Z) {
    Z.stopPropagation(), Z.preventDefault(), D(Z), window.removeEventListener("mousemove", R, W), window.removeEventListener("mouseup", Q);
  }
  function q(Z) {
    D(Z), window.removeEventListener("touchmove", R, W), Z.target?.removeEventListener("touchend", q);
  }
  function O(Z) {
    L(Z), window.addEventListener("touchmove", R, W), Z.target?.addEventListener("touchend", q, {
      passive: !1
    });
  }
  function ne(Z) {
    Z.button === 0 && (Z.preventDefault(), L(Z), window.addEventListener("mousemove", R, W), window.addEventListener("mouseup", Q, {
      passive: !1
    }));
  }
  at(() => {
    window.removeEventListener("touchmove", R), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", Q);
  });
  const K = (Z) => {
    const de = (Z - f.value) / (v.value - f.value) * 100;
    return We(isNaN(de) ? 0 : de, 0, 100);
  }, H = /* @__PURE__ */ E(() => t.showTicks), G = _(() => H.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((Z) => ({
    value: Z,
    position: K(Z),
    label: Z.toString()
  })) : Object.keys(t.ticks).map((Z) => ({
    value: parseFloat(Z),
    position: K(parseFloat(Z)),
    label: t.ticks[Z]
  })) : b.value !== 1 / 0 ? Zt(b.value + 1).map((Z) => {
    const de = f.value + Z * k.value;
    return {
      value: de,
      position: K(de)
    };
  }) : [] : []), X = _(() => G.value.some((Z) => {
    let {
      label: de
    } = Z;
    return !!de;
  })), ve = {
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
    onSliderTouchstart: O,
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
  return Ge(gc, ve), ve;
}, n1 = N({
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
  ...be()
}, "VSliderThumb"), Ws = J()({
  name: "VSliderThumb",
  directives: {
    vRipple: Vt
  },
  props: n1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Le(gc), {
      isRtl: i,
      rtlClasses: o
    } = ft();
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
    } = l, I = _(() => f.value ? void 0 : w.value), {
      elevationClasses: C
    } = ht(I), {
      textColorClasses: T,
      textColorStyles: P
    } = xt(u), {
      backgroundColorClasses: F,
      backgroundColorStyles: A
    } = He(c), {
      pageup: B,
      pagedown: D,
      end: L,
      home: W,
      left: R,
      right: Q,
      down: q,
      up: O
    } = gs, ne = [B, D, L, W, R, Q, q, O], K = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
    function H(X, ve) {
      if (e.noKeyboard || f.value || !ne.includes(X.key)) return;
      X.preventDefault();
      const Z = d.value || 0.1, de = (s.value - r.value) / Z;
      if ([R, Q, q, O].includes(X.key)) {
        const Ce = (h.value ? [i.value ? R : Q, y.value ? q : O] : g.value !== i.value ? [R, O] : [Q, O]).includes(X.key) ? 1 : -1, _e = X.shiftKey ? 2 : X.ctrlKey ? 1 : 0;
        Ce === -1 && ve === s.value && !_e && !Number.isInteger(de) ? ve = ve - de % 1 * Z : ve = ve + Ce * Z * K.value[_e];
      } else if (X.key === W)
        ve = r.value;
      else if (X.key === L)
        ve = s.value;
      else {
        const xe = X.key === D ? 1 : -1;
        ve = ve - xe * Z * (de > 100 ? de / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, ve));
    }
    function G(X) {
      const ve = H(X, e.modelValue);
      ve != null && a("update:modelValue", ve);
    }
    return te(() => {
      const X = ce(g.value ? 100 - e.position : e.position, "%");
      return V("div", {
        class: ee(["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && b.value
        }, e.class, o.value]),
        style: fe([{
          "--v-slider-thumb-position": X,
          "--v-slider-thumb-size": ce(v.value)
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
      }, [V("div", {
        class: ee(["v-slider-thumb__surface", T.value, C.value]),
        style: fe(P.value)
      }, null), Ue(V("div", {
        class: ee(["v-slider-thumb__ripple", T.value]),
        style: fe(P.value)
      }, null), [[Vt, e.ripple, null, {
        circle: !0,
        center: !0
      }]]), p(Wu, {
        origin: "bottom center"
      }, {
        default: () => [Ue(V("div", {
          class: "v-slider-thumb__label-container"
        }, [V("div", {
          class: ee(["v-slider-thumb__label", F.value]),
          style: fe(A.value)
        }, [V("div", null, [n["thumb-label"]?.({
          modelValue: e.modelValue
        }) ?? e.modelValue.toFixed(d.value ? S.value : 1)]), V("div", {
          class: "v-slider-thumb__label-wedge"
        }, null)])]), [[kn, k.value && e.focused || k.value === "always"]])]
      })]);
    }), {};
  }
}), a1 = N({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...be()
}, "VSliderTrack"), Xh = J()({
  name: "VSliderTrack",
  props: a1(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(gc);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
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
    } = Je(o), {
      backgroundColorClasses: h,
      backgroundColorStyles: x
    } = He(c), {
      backgroundColorClasses: w,
      backgroundColorStyles: b
    } = He(u), S = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), I = _(() => ({
      [S.value]: "0%",
      [g.value]: "100%"
    })), C = _(() => e.stop - e.start), T = _(() => ({
      [S.value]: ce(e.start, "%"),
      [g.value]: ce(C.value, "%")
    })), P = _(() => r.value ? (f.value ? i.value.slice().reverse() : i.value).map((A, B) => {
      const D = A.value !== v.value && A.value !== k.value ? ce(A.position, "%") : void 0;
      return V("div", {
        key: A.value,
        class: ee(["v-slider-track__tick", {
          "v-slider-track__tick--filled": A.position >= e.start && A.position <= e.stop,
          "v-slider-track__tick--first": A.value === v.value,
          "v-slider-track__tick--last": A.value === k.value
        }]),
        style: {
          [S.value]: D
        }
      }, [(A.label || n["tick-label"]) && V("div", {
        class: "v-slider-track__tick-label"
      }, [n["tick-label"]?.({
        tick: A,
        index: B
      }) ?? A.label])]);
    }) : []);
    return te(() => V("div", {
      class: ee(["v-slider-track", y.value, e.class]),
      style: fe([{
        "--v-slider-track-size": ce(d.value),
        "--v-slider-tick-size": ce(s.value)
      }, e.style])
    }, [V("div", {
      class: ee(["v-slider-track__background", w.value, {
        "v-slider-track__background--opacity": !!l.value || !c.value
      }]),
      style: {
        ...I.value,
        ...b.value
      }
    }, null), V("div", {
      class: ee(["v-slider-track__fill", h.value]),
      style: {
        ...T.value,
        ...x.value
      }
    }, null), r.value && V("div", {
      class: ee(["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }])
    }, [P.value])])), {};
  }
}), l1 = N({
  ...Yi(),
  ...Kh(),
  ...ia(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), zs = J()({
  name: "VSlider",
  inheritAttrs: !1,
  props: l1(),
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
    const i = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), {
      rtlClasses: r
    } = ft(), s = Gh(e), u = ke(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), {
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
      getActiveThumb: () => i.value?.$el
    }), {
      isFocused: g,
      focus: I,
      blur: C
    } = la(e), T = _(() => h(u.value));
    return te(() => {
      const P = Pt.filterProps(e), [F, A] = Bn(l), B = !!(e.label || n.label || n.prepend);
      return p(Pt, U({
        ref: o,
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
        prepend: B ? (D) => V(he, null, [n.label?.(D) ?? (e.label ? p($l, {
          id: D.id.value,
          class: "v-slider__label",
          text: e.label
        }, null) : void 0), n.prepend?.(D)]) : void 0,
        default: (D) => {
          let {
            id: L,
            messagesId: W
          } = D;
          return V("div", {
            class: "v-slider__container",
            onMousedown: b.value ? void 0 : k,
            onTouchstartPassive: b.value ? void 0 : m
          }, [V("input", {
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
          }), p(Ws, U({
            ref: i,
            "aria-describedby": W.value,
            focused: g.value,
            noKeyboard: S.value,
            min: c.value,
            max: d.value,
            modelValue: u.value,
            "onUpdate:modelValue": (R) => u.value = R,
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
    }), yt({
      focus: () => i.value?.$el.focus()
    }, o);
  }
}), Zh = N({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  hideEyeDropper: Boolean,
  eyeDropperIcon: {
    type: pe,
    default: "$eyeDropper"
  },
  ...be()
}, "VColorPickerPreview"), i1 = $t({
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
    } = je(), l = new AbortController();
    qo(() => l.abort());
    async function i() {
      if (!pd || e.disabled) return;
      const o = new window.EyeDropper();
      try {
        const r = await o.open({
          signal: l.signal
        }), s = $i(Jt(r.sRGBHex));
        n("update:color", {
          ...e.color ?? hl,
          ...s
        });
      } catch {
      }
    }
    return te(() => V("div", {
      class: ee(["v-color-picker-preview", {
        "v-color-picker-preview--hide-alpha": e.hideAlpha
      }, e.class]),
      style: fe(e.style)
    }, [pd && !e.hideEyeDropper && V("div", {
      class: "v-color-picker-preview__eye-dropper",
      key: "eyeDropper"
    }, [p(Fe, {
      "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"),
      density: "comfortable",
      disabled: e.disabled,
      icon: e.eyeDropperIcon,
      variant: "plain",
      onClick: i
    }, null)]), V("div", {
      class: "v-color-picker-preview__dot"
    }, [V("div", {
      style: {
        background: Em(e.color ?? hl)
      }
    }, null)]), V("div", {
      class: "v-color-picker-preview__sliders"
    }, [p(zs, {
      class: "v-color-picker-preview__track v-color-picker-preview__hue",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"),
      modelValue: e.color?.h,
      "onUpdate:modelValue": (o) => n("update:color", {
        ...e.color ?? hl,
        h: o
      }),
      step: 1,
      min: 0,
      max: 360,
      disabled: e.disabled,
      thumbSize: 14,
      trackSize: 8,
      trackFillColor: "white",
      hideDetails: !0
    }, null), !e.hideAlpha && p(zs, {
      class: "v-color-picker-preview__track v-color-picker-preview__alpha",
      "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"),
      modelValue: e.color?.a ?? 1,
      "onUpdate:modelValue": (o) => n("update:color", {
        ...e.color ?? hl,
        a: o
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
}), o1 = {
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
}, r1 = {
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
}, s1 = {
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
}, u1 = {
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
}, c1 = {
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
}, d1 = {
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
}, f1 = {
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
}, v1 = {
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
}, m1 = {
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
}, g1 = {
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
}, h1 = {
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
}, y1 = {
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
}, b1 = {
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
}, S1 = {
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
}, k1 = {
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
}, w1 = {
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
}, p1 = {
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
}, x1 = {
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
}, C1 = {
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
}, V1 = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, _1 = {
  red: o1,
  pink: r1,
  purple: s1,
  deepPurple: u1,
  indigo: c1,
  blue: d1,
  lightBlue: f1,
  cyan: v1,
  teal: m1,
  green: g1,
  lightGreen: h1,
  lime: y1,
  yellow: b1,
  amber: S1,
  orange: k1,
  deepOrange: w1,
  brown: p1,
  blueGrey: x1,
  grey: C1,
  shades: V1
}, I1 = N({
  swatches: {
    type: Array,
    default: () => P1(_1)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...be()
}, "VColorPickerSwatches");
function P1(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const T1 = $t({
  name: "VColorPickerSwatches",
  props: I1(),
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
    return te(() => V("div", {
      class: ee(["v-color-picker-swatches", e.class]),
      style: fe([{
        maxHeight: ce(e.maxHeight)
      }, e.style])
    }, [V("div", null, [e.swatches.map((l) => V("div", {
      class: "v-color-picker-swatches__swatch"
    }, [l.map((i) => {
      const o = Jt(i), r = $i(o), s = Dm(o);
      return V("div", {
        class: ee(["v-color-picker-swatches__color", {
          "v-color-picker-swatches__color--disabled": e.disabled
        }]),
        onClick: () => a(r)
      }, [V("div", {
        style: {
          background: s
        }
      }, [e.color && pt(e.color, r) ? p(Ne, {
        size: "x-small",
        icon: "$success",
        color: _0(i, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), A1 = Qn("v-picker-title"), hc = N({
  color: String,
  ...Dt(),
  ...be(),
  ...ut(),
  ...dt(),
  ...aa(),
  ...Fl(),
  ...qe(),
  ...Pe(),
  ...$e()
}, "VSheet"), Ii = J()({
  name: "VSheet",
  props: hc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = He(() => e.color), {
      borderClasses: o
    } = Ot(e), {
      dimensionStyles: r
    } = ct(e), {
      elevationClasses: s
    } = ht(e), {
      locationStyles: u
    } = il(e), {
      positionClasses: c
    } = Ll(e), {
      roundedClasses: d
    } = Je(e);
    return te(() => p(e.tag, {
      class: ee(["v-sheet", a.value, l.value, o.value, s.value, c.value, d.value, e.class]),
      style: fe([i.value, r.value, u.value, e.style])
    }, n)), {};
  }
}), yr = N({
  bgColor: String,
  divided: Boolean,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  hideTitle: Boolean,
  ...hc()
}, "VPicker"), Dl = J()({
  name: "VPicker",
  props: yr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = He(() => e.color);
    return te(() => {
      const i = Ii.filterProps(e), o = !e.hideTitle && !!(e.title || n.title);
      return p(Ii, U(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--divided": e.divided,
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => [!e.hideHeader && V("div", {
          key: "header",
          class: ee(["v-picker__header-wrapper", a.value]),
          style: fe([l.value])
        }, [o && p(A1, {
          key: "picker-title"
        }, {
          default: () => [n.title?.() ?? e.title]
        }), n.header && V("div", {
          class: "v-picker__header"
        }, [n.header()])]), V("div", {
          class: "v-picker__body"
        }, [n.default?.()]), n.actions && p(Te, {
          defaults: {
            VBtn: {
              slim: !0,
              variant: "text"
            }
          }
        }, {
          default: () => [V("div", {
            class: "v-picker__actions"
          }, [n.actions()])]
        })]
      });
    }), {};
  }
}), D1 = N({
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
    validator: (e) => Object.keys(Ra).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Ra),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Ra).includes(t))
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
  ...yr({
    hideHeader: !0
  }),
  ...zt(Zh(), ["hideEyeDropper", "eyeDropperIcon"])
}, "VColorPicker"), E1 = $t({
  name: "VColorPicker",
  props: D1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "mode"), l = /* @__PURE__ */ ae(null), i = ke(e, "modelValue", void 0, (c) => {
      if (c == null || c === "") return null;
      let d;
      try {
        d = $i(Jt(c));
      } catch {
        return null;
      }
      return d;
    }, (c) => c ? GV(c, e.modelValue) : null), o = _(() => i.value ? {
      ...i.value,
      h: l.value ?? i.value.h
    } : null), {
      rtlClasses: r
    } = ft();
    let s = !0;
    ue(i, (c) => {
      if (!s) {
        s = !0;
        return;
      }
      c && (l.value = c.h);
    }, {
      immediate: !0
    });
    const u = (c) => {
      s = !1, l.value = c.h, i.value = c;
    };
    return Ml(() => {
      e.modes.includes(a.value) || (a.value = e.modes[0]);
    }), nt({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), te(() => {
      const c = Dl.filterProps(e);
      return p(Dl, U(c, {
        class: ["v-color-picker", r.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Em({
            ...o.value ?? hl,
            a: 1
          })
        }, e.style]
      }), {
        ...n,
        default: () => V(he, null, [!e.hideCanvas && p(UV, {
          key: "canvas",
          color: o.value,
          "onUpdate:color": u,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && V("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && p(i1, {
          key: "preview",
          color: o.value,
          "onUpdate:color": u,
          hideAlpha: !a.value.endsWith("a"),
          disabled: e.disabled,
          hideEyeDropper: e.hideEyeDropper,
          eyeDropperIcon: e.eyeDropperIcon
        }, null), !e.hideInputs && p(e1, {
          key: "edit",
          modes: e.modes,
          mode: a.value,
          "onUpdate:mode": (d) => a.value = d,
          color: o.value,
          "onUpdate:color": u,
          disabled: e.disabled
        }, null)]), e.showSwatches && p(T1, {
          key: "swatches",
          color: o.value,
          "onUpdate:color": u,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)])
      });
    }), {};
  }
}), M1 = N({
  alwaysFilter: Boolean,
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...Rl({
    filterKeys: ["title"]
  }),
  ...sc({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Ee(Gi({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"])
}, "VCombobox"), B1 = J()({
  name: "VCombobox",
  props: M1(),
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
    } = je(), i = /* @__PURE__ */ ae(), o = /* @__PURE__ */ se(!1), r = /* @__PURE__ */ se(!0), s = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), d = /* @__PURE__ */ se(-1);
    let f = !1;
    const {
      items: v,
      transformIn: k,
      transformOut: m
    } = Ju(e), {
      textColorClasses: y,
      textColorStyles: h
    } = xt(() => i.value?.color), {
      InputIcon: x
    } = ji(e), w = ke(e, "modelValue", [], (Y) => k(Ke(Y)), (Y) => {
      const le = m(Y);
      return e.multiple ? le : le[0] ?? null;
    }), b = Ol(e), S = /* @__PURE__ */ E(() => e.closableChips && !b.isReadonly.value && !b.isDisabled.value), g = _(() => !!(e.chips || a.chip)), I = _(() => g.value || !!a.selection), C = /* @__PURE__ */ se(!e.multiple && !I.value ? w.value[0]?.title ?? "" : ""), T = /* @__PURE__ */ se(null), P = _({
      get: () => C.value,
      set: async (Y) => {
        if (C.value = Y ?? "", Y === null || Y === "" && !e.multiple && !I.value ? w.value = [] : !e.multiple && !I.value && (w.value = [fn(e, Y)], Ie(() => c.value?.scrollToIndex(0))), Y && e.multiple && e.delimiters?.length) {
          const le = re(Y);
          le.length > 1 && (z(le), C.value = "");
        }
        Y || (d.value = -1), r.value = !Y;
      }
    }), F = _(() => typeof e.counterValue == "function" ? e.counterValue(w.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? w.value.length : P.value.length), {
      filteredItems: A,
      getMatches: B
    } = Hl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), D = _(() => e.hideSelected && T.value === null ? A.value.filter((Y) => !w.value.some((le) => le.value === Y.value)) : A.value), L = _(() => e.hideNoData && !D.value.length || b.isReadonly.value || b.isDisabled.value), W = ke(e, "menu"), R = _({
      get: () => W.value,
      set: (Y) => {
        W.value && !Y && u.value?.ΨopenChildren.size || Y && L.value || (W.value = Y);
      }
    }), {
      menuId: Q,
      ariaExpanded: q,
      ariaControls: O
    } = rc(e, R);
    ue(C, (Y) => {
      f ? Ie(() => f = !1) : o.value && !R.value && (R.value = !0), n("update:search", Y);
    }), ue(w, (Y) => {
      !e.multiple && !I.value && (C.value = Y[0]?.title ?? "");
    });
    const ne = _(() => w.value.map((Y) => Y.value)), K = _(() => D.value.find((Y) => Y.type === "item" && !Y.props.disabled)), H = _(() => (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && P.value === K.value?.title) && D.value.length > 0 && !r.value && !s.value), G = /* @__PURE__ */ ae(), X = oc(G, i);
    function ve(Y) {
      f = !0, Ie(() => f = !1), e.openOnClear && (R.value = !0);
    }
    function Z() {
      L.value || (R.value = !0);
    }
    function de(Y) {
      L.value || (o.value && (Y.preventDefault(), Y.stopPropagation()), R.value = !R.value);
    }
    function xe(Y) {
      (Vl(Y) || Y.key === "Backspace") && i.value?.focus();
    }
    function Ce(Y) {
      if (qk(Y) || b.isReadonly.value) return;
      const le = i.value?.selectionStart, ie = w.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(Y.key) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (R.value = !0), ["Escape"].includes(Y.key) && (R.value = !1), H.value && ["Enter", "Tab"].includes(Y.key) && K.value && !w.value.some((ge) => {
        let {
          value: ye
        } = ge;
        return ye === K.value.value;
      }) && j(K.value), Y.key === "ArrowDown" && H.value && G.value?.focus("next"), Y.key === "Enter" && P.value && (j(fn(e, P.value), !0, !0), I.value && (C.value = "")), ["Backspace", "Delete"].includes(Y.key)) {
        if (!e.multiple && I.value && w.value.length > 0 && !P.value) return j(w.value[0], !1);
        if (~d.value) {
          Y.preventDefault();
          const ge = d.value;
          j(w.value[d.value], !1), d.value = ge >= ie - 1 ? ie - 2 : ge;
        } else Y.key === "Backspace" && !P.value && (d.value = ie - 1);
        return;
      }
      if (e.multiple)
        if (Y.key === "ArrowLeft") {
          if (d.value < 0 && le && le > 0) return;
          const ge = d.value > -1 ? d.value - 1 : ie - 1;
          w.value[ge] ? d.value = ge : (d.value = -1, i.value?.setSelectionRange(P.value.length, P.value.length));
        } else if (Y.key === "ArrowRight") {
          if (d.value < 0) return;
          const ge = d.value + 1;
          w.value[ge] ? d.value = ge : (d.value = -1, i.value?.setSelectionRange(0, 0));
        } else ~d.value && Vl(Y) && (d.value = -1);
    }
    function _e(Y) {
      const le = Y?.clipboardData?.getData("Text") ?? "", ie = re(le);
      ie.length > 1 && e.multiple && (Y.preventDefault(), z(ie));
    }
    function M() {
      e.eager && c.value?.calculateVisibleItems();
    }
    function $() {
      o.value && i.value?.focus(), r.value = !0, T.value = null;
    }
    function j(Y) {
      let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!(!Y || Y.props.disabled))
        if (e.multiple) {
          const ge = w.value.findIndex((Se) => (e.valueComparator || pt)(Se.value, Y.value)), ye = le ?? !~ge;
          if (~ge) {
            const Se = ye ? [...w.value, Y] : [...w.value];
            Se.splice(ge, 1), w.value = Se;
          } else ye && (w.value = [...w.value, Y]);
          e.clearOnSelect && (P.value = "");
        } else {
          const ge = le !== !1;
          w.value = ge ? [Y] : [], (!r.value || e.alwaysFilter) && C.value && (T.value = C.value), C.value = ge && !I.value ? Y.title : "", Ie(() => {
            R.value = ie, r.value = !0;
          });
        }
    }
    function re(Y) {
      const ie = [`
`, ...e.delimiters ?? []].map(Po).join("|");
      return Y.split(new RegExp(`(?:${ie})+`));
    }
    async function z(Y) {
      for (let le of Y)
        le = le.trim(), le && (j(fn(e, le)), await Ie());
    }
    function oe(Y) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function me(Y) {
      s.value = !1;
    }
    return ue(o, (Y, le) => {
      if (!(Y || Y === le) && (d.value = -1, R.value = !1, P.value)) {
        if (e.multiple) {
          j(fn(e, P.value));
          return;
        }
        if (!I.value) return;
        w.value.some((ie) => {
          let {
            title: ge
          } = ie;
          return ge === P.value;
        }) ? C.value = "" : j(fn(e, P.value));
      }
    }), ue(R, (Y) => {
      if (!e.hideSelected && Y && w.value.length && r.value) {
        const le = D.value.findIndex((ie) => w.value.some((ge) => (e.valueComparator || pt)(ge.value, ie.value)));
        ze && window.requestAnimationFrame(() => {
          le >= 0 && c.value?.scrollToIndex(le);
        });
      }
      Y && (T.value = null);
    }), ue(v, (Y, le) => {
      R.value || o.value && !le.length && Y.length && (R.value = !0);
    }), te(() => {
      const Y = !!(!e.hideNoData || D.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), le = w.value.length > 0, ie = En.filterProps(e);
      return p(En, U({
        ref: i
      }, ie, {
        modelValue: P.value,
        "onUpdate:modelValue": (ge) => P.value = ge,
        focused: o.value,
        "onUpdate:focused": (ge) => o.value = ge,
        validationValue: w.externalValue,
        counterValue: F.value,
        dirty: le,
        class: ["v-combobox", {
          "v-combobox--active-menu": R.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!I.value,
          "v-combobox--selecting-index": d.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: b.isReadonly.value,
        placeholder: le ? void 0 : e.placeholder,
        "onClick:clear": ve,
        "onMousedown:control": Z,
        onKeydown: Ce,
        onPaste: _e,
        "aria-expanded": q.value,
        "aria-controls": O.value
      }), {
        ...a,
        default: (ge) => {
          let {
            id: ye
          } = ge;
          return V(he, null, [p(Al, U({
            id: Q.value,
            ref: u,
            modelValue: R.value,
            "onUpdate:modelValue": (Se) => R.value = Se,
            activator: "parent",
            contentClass: "v-combobox__content",
            disabled: L.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            onAfterEnter: M,
            onAfterLeave: $
          }, e.menuProps), {
            default: () => [Y && p(Tl, U({
              ref: G,
              filterable: !0,
              selected: ne.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (Se) => Se.preventDefault(),
              selectable: !!D.value.length,
              onKeydown: xe,
              onFocusin: oe,
              onFocusout: me,
              tabindex: "-1",
              "aria-live": "polite",
              "aria-labelledby": `${ye.value}-label`,
              "aria-multiselectable": e.multiple,
              color: e.itemColor ?? e.color
            }, X, e.listProps), {
              default: () => [a["prepend-item"]?.(), !D.value.length && !e.hideNoData && (a["no-data"]?.() ?? p(dn, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), p(dr, {
                ref: c,
                renderless: !0,
                items: D.value,
                itemKey: "value"
              }, {
                default: (Se) => {
                  let {
                    item: we,
                    index: Ae,
                    itemRef: Be
                  } = Se;
                  const Oe = U(we.props, {
                    ref: Be,
                    key: we.value,
                    active: H.value && we === K.value ? !0 : void 0,
                    onClick: () => j(we, null),
                    "aria-posinset": Ae + 1,
                    "aria-setsize": D.value.length
                  });
                  return we.type === "divider" ? a.divider?.({
                    props: we.raw,
                    index: Ae
                  }) ?? p(en, U(we.props, {
                    key: `divider-${Ae}`
                  }), null) : we.type === "subheader" ? a.subheader?.({
                    props: we.raw,
                    index: Ae
                  }) ?? p(Nl, U(we.props, {
                    key: `subheader-${Ae}`
                  }), null) : a.item?.({
                    item: we,
                    index: Ae,
                    props: Oe
                  }) ?? p(dn, U(Oe, {
                    role: "option"
                  }), {
                    prepend: (bt) => {
                      let {
                        isSelected: Xe
                      } = bt;
                      return V(he, null, [e.multiple && !e.hideSelected ? p(Sn, {
                        key: we.value,
                        modelValue: Xe,
                        ripple: !1,
                        tabindex: "-1",
                        "aria-hidden": !0,
                        onClick: (on) => on.preventDefault()
                      }, null) : void 0, we.props.prependAvatar && p(tn, {
                        image: we.props.prependAvatar
                      }, null), we.props.prependIcon && p(Ne, {
                        icon: we.props.prependIcon
                      }, null)]);
                    },
                    title: () => r.value ? we.title : fh("v-combobox", we.title, B(we)?.title)
                  });
                }
              }), a["append-item"]?.()]
            })]
          }), w.value.map((Se, we) => {
            function Ae(Xe) {
              Xe.stopPropagation(), Xe.preventDefault(), j(Se, !1);
            }
            const Be = U(Zn.filterProps(Se.props), {
              "onClick:close": Ae,
              onKeydown(Xe) {
                Xe.key !== "Enter" && Xe.key !== " " || (Xe.preventDefault(), Xe.stopPropagation(), Ae(Xe));
              },
              onMousedown(Xe) {
                Xe.preventDefault(), Xe.stopPropagation();
              },
              modelValue: !0,
              "onUpdate:modelValue": void 0
            }), Oe = g.value ? !!a.chip : !!a.selection, bt = Oe ? Qo(g.value ? a.chip({
              item: Se,
              index: we,
              props: Be
            }) : a.selection({
              item: Se,
              index: we
            })) : void 0;
            if (!(Oe && !bt))
              return V("div", {
                key: Se.value,
                class: ee(["v-combobox__selection", we === d.value && ["v-combobox__selection--selected", y.value]]),
                style: fe(we === d.value ? h.value : {})
              }, [g.value ? a.chip ? p(Te, {
                key: "chip-defaults",
                defaults: {
                  VChip: {
                    closable: S.value,
                    size: "small",
                    text: Se.title
                  }
                }
              }, {
                default: () => [bt]
              }) : p(Zn, U({
                key: "chip",
                closable: S.value,
                size: "small",
                text: Se.title,
                disabled: Se.props.disabled
              }, Be), null) : bt ?? V("span", {
                class: "v-combobox__selection-text"
              }, [Se.title, e.multiple && we < w.value.length - 1 && V("span", {
                class: "v-combobox__selection-comma"
              }, [Ut(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var ge = arguments.length, ye = new Array(ge), Se = 0; Se < ge; Se++)
            ye[Se] = arguments[Se];
          return V(he, null, [a["append-inner"]?.(...ye), (!e.hideNoData || e.items.length) && e.menuIcon ? p(Ne, {
            class: "v-combobox__menu-icon",
            color: i.value?.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: de,
            onClick: Jo,
            "aria-hidden": !0,
            tabindex: "-1"
          }, null) : void 0, e.appendInnerIcon && p(x, {
            key: "append-icon",
            name: "appendInner",
            color: ye[0].iconColor.value
          }, null)]);
        }
      });
    }), yt({
      isFocused: o,
      isPristine: r,
      menu: R,
      search: P,
      selectionIndex: d,
      filteredItems: A,
      select: j
    }, i);
  }
}), F1 = N({
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
}, "VConfirmEdit"), L1 = J()({
  name: "VConfirmEdit",
  props: F1(),
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
    const l = ke(e, "modelValue"), i = /* @__PURE__ */ ae();
    tt(() => {
      i.value = structuredClone(Ad(l.value));
    });
    const {
      t: o
    } = je(), r = _(() => pt(l.value, i.value));
    function s(m) {
      return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
    }
    const u = _(() => s("save")), c = _(() => s("cancel"));
    function d() {
      l.value = i.value, n("save", i.value);
    }
    function f() {
      i.value = structuredClone(Ad(l.value)), n("cancel");
    }
    function v(m) {
      return V(he, null, [p(Fe, U({
        disabled: c.value,
        variant: "text",
        color: e.color,
        onClick: f,
        text: o(e.cancelText)
      }, m), null), p(Fe, U({
        disabled: u.value,
        variant: "text",
        color: e.color,
        onClick: d,
        text: o(e.okText)
      }, m), null)]);
    }
    let k = !1;
    return te(() => V(he, null, [a.default?.({
      model: i,
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
}), Jh = N({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Qh = /* @__PURE__ */ Symbol.for("vuetify:datatable:expanded");
function br(e) {
  const t = /* @__PURE__ */ E(() => e.expandOnClick), n = ke(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = /* @__PURE__ */ Ve(r.value);
    if (s)
      u.add(c);
    else {
      const d = [...n.value].find((f) => /* @__PURE__ */ Ve(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = /* @__PURE__ */ Ve(r.value);
    return [...n.value].some((u) => /* @__PURE__ */ Ve(u) === s);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: n,
    expandOnClick: t,
    isExpanded: l,
    toggleExpand: i
  };
  return Ge(Qh, o), o;
}
function ey() {
  const e = Le(Qh);
  if (!e) throw new Error("foo");
  return e;
}
const yc = N({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), ty = /* @__PURE__ */ Symbol.for("vuetify:data-table-group");
function bc(e) {
  return {
    groupBy: ke(e, "groupBy")
  };
}
function Sr(e) {
  const {
    disableSort: t,
    groupBy: n,
    sortBy: a
  } = e, l = /* @__PURE__ */ ae(/* @__PURE__ */ new Set()), i = _(() => n.value.map((c) => ({
    ...c,
    order: c.order ?? !1
  })).concat(t?.value ? [] : a.value));
  function o(c) {
    return l.value.has(c.id);
  }
  function r(c) {
    const d = new Set(l.value);
    o(c) ? d.delete(c.id) : d.add(c.id), l.value = d;
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
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: n,
    extractRows: s,
    isGroupOpen: o
  };
  return Ge(ty, u), u;
}
function ny() {
  const e = Le(ty);
  if (!e) throw new Error("Missing group!");
  return e;
}
function $1(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = za(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function ay(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = $1(e, t[0]), i = [], o = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    i.push({
      depth: n,
      id: c,
      key: u,
      value: s,
      items: o.length ? ay(r, o, n + 1, c) : r,
      type: "group"
    });
  }), i;
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
function kr(e, t, n, a) {
  return {
    flatItems: _(() => {
      if (!t.value.length) return e.value;
      const i = ay(e.value, t.value.map((o) => o.key));
      return ly(i, n.value, St(a));
    })
  };
}
function wr(e) {
  let {
    page: t,
    itemsPerPage: n,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = st("VDataTable"), r = () => ({
    page: t.value,
    itemsPerPage: n.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  });
  let s = null;
  ue(r, (u) => {
    pt(s, u) || (s && s.search !== u.search && (t.value = 1), o.emit("update:options", u), s = u);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Sc = N({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), iy = /* @__PURE__ */ Symbol.for("vuetify:data-table-pagination");
function kc(e) {
  const t = ke(e, "page", void 0, (a) => Number(a ?? 1)), n = ke(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return {
    page: t,
    itemsPerPage: n
  };
}
function wc(e) {
  const {
    page: t,
    itemsPerPage: n,
    itemsLength: a
  } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), i = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), o = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ue([t, o], () => {
    t.value > o.value && (t.value = o.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = We(t.value + 1, 1, o.value);
  }
  function u() {
    t.value = We(t.value - 1, 1, o.value);
  }
  function c(f) {
    t.value = We(f, 1, o.value);
  }
  const d = {
    page: t,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: u,
    setPage: c,
    setItemsPerPage: r
  };
  return Ge(iy, d), d;
}
function O1() {
  const e = Le(iy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function oy(e) {
  const t = st("usePaginatedItems"), {
    items: n,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = _(() => i.value <= 0 ? n.value : n.value.slice(a.value, l.value));
  return ue(o, (r) => {
    t.emit("update:currentItems", r);
  }, {
    immediate: !0
  }), {
    paginatedItems: o
  };
}
const N1 = {
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
}, R1 = {
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
}, sy = N({
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
function pr(e, t) {
  let {
    allItems: n,
    currentPage: a
  } = t;
  const l = ke(e, "modelValue", e.modelValue, (x) => {
    const w = e.valueComparator;
    return w ? new Set(Ke(x).map((b) => n.value.find((S) => w(b, S.value))?.value ?? b)) : new Set(Ke(x).map((b) => ha(b) ? n.value.find((S) => b === S.value)?.value ?? b : n.value.find((S) => pt(b, S.value))?.value ?? b));
  }, (x) => [...x.values()]), i = _(() => n.value.filter((x) => x.selectable)), o = _(() => a.value.filter((x) => x.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return N1;
      case "all":
        return R1;
      default:
        return ry;
    }
  }), s = /* @__PURE__ */ se(null);
  function u(x) {
    return Ke(x).every((w) => l.value.has(w.value));
  }
  function c(x) {
    return Ke(x).some((w) => l.value.has(w.value));
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
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = w;
  }
  const k = _(() => l.value.size > 0), m = _(() => {
    const x = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
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
  return Ge(uy, h), h;
}
function xr() {
  const e = Le(uy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const cy = N({
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
function Cr(e) {
  const t = /* @__PURE__ */ E(() => e.initialSortOrder), n = ke(e, "sortBy");
  return {
    initialSortOrder: t,
    sortBy: n,
    multiSort: /* @__PURE__ */ E(() => e.multiSort),
    mustSort: /* @__PURE__ */ E(() => e.mustSort)
  };
}
function H1(e, t) {
  if (!ja(e))
    return {
      active: !!e
    };
  const {
    key: n,
    mode: a,
    modifier: l
  } = e, i = l === "alt" && t?.altKey || l === "shift" && t?.shiftKey;
  return {
    active: !n || t?.ctrlKey || t?.metaKey || !1,
    mode: i ? a === "append" ? "prepend" : "append" : a
  };
}
function Vr(e) {
  const {
    initialSortOrder: t,
    sortBy: n,
    mustSort: a,
    multiSort: l,
    page: i
  } = e, o = (u, c) => {
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
      } = H1(l.value, c);
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
    n.value = d, i && (i.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = {
    sortBy: n,
    toggleSort: o,
    isSorted: r
  };
  return Ge(dy, s), s;
}
function fy() {
  const e = Le(dy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function pc(e, t, n, a) {
  const l = je();
  return {
    sortedItems: _(() => n.value.length ? W1(t.value, n.value, l.current.value, {
      transform: a?.transform,
      sortFunctions: {
        ...e.customKeySort,
        ...a?.sortFunctions?.value
      },
      sortRawFunctions: a?.sortRawFunctions?.value
    }) : t.value)
  };
}
function W1(e, t, n, a) {
  const l = new Intl.Collator(n, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a?.transform ? a.transform(o) : o]).sort((o, r) => {
    for (let s = 0; s < t.length; s++) {
      let u = !1;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === !1) continue;
      let f = za(o[1], c), v = za(r[1], c), k = o[0].raw, m = r[0].raw;
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
        return to(f) && to(v) ? 0 : to(f) ? -1 : to(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const z1 = N({
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
function j1(e, t) {
  const n = e.returnObject ? t : it(t, e.itemValue), a = it(t, e.itemSelectable, !0);
  return {
    type: "item",
    value: n,
    selectable: a,
    raw: t
  };
}
function Y1(e, t) {
  const n = [];
  for (const a of t)
    n.push(j1(e, a));
  return n;
}
function U1(e) {
  return {
    items: _(() => Y1(e, e.items))
  };
}
const K1 = N({
  search: String,
  loading: Boolean,
  ...be(),
  ...z1(),
  ...sy(),
  ...cy(),
  ...Sc({
    itemsPerPage: 5
  }),
  ...Jh(),
  ...yc(),
  ...Rl(),
  ...Pe(),
  ...ea({
    transition: {
      component: ki,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), G1 = J()({
  name: "VDataIterator",
  props: K1(),
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
    const a = ke(e, "groupBy"), l = /* @__PURE__ */ E(() => e.search), {
      items: i
    } = U1(e), {
      filteredItems: o
    } = Hl(e, i, l, {
      transform: (K) => K.raw
    }), {
      initialSortOrder: r,
      sortBy: s,
      multiSort: u,
      mustSort: c
    } = Cr(e), {
      page: d,
      itemsPerPage: f
    } = kc(e), {
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
    } = Sr({
      groupBy: a,
      sortBy: s
    }), {
      sortedItems: w
    } = pc(e, o, k, {
      transform: (K) => K.raw
    }), {
      flatItems: b
    } = kr(w, a, m, !1), S = /* @__PURE__ */ E(() => b.value.length), {
      startIndex: g,
      stopIndex: I,
      pageCount: C,
      prevPage: T,
      nextPage: P,
      setItemsPerPage: F,
      setPage: A
    } = wc({
      page: d,
      itemsPerPage: f,
      itemsLength: S
    }), {
      paginatedItems: B
    } = oy({
      items: b,
      startIndex: g,
      stopIndex: I,
      itemsPerPage: f
    }), D = _(() => y(B.value)), {
      isSelected: L,
      select: W,
      selectAll: R,
      toggleSelect: Q
    } = pr(e, {
      allItems: i,
      currentPage: D
    }), {
      isExpanded: q,
      toggleExpand: O
    } = br(e);
    wr({
      page: d,
      itemsPerPage: f,
      sortBy: s,
      groupBy: a,
      search: l
    });
    const ne = _(() => ({
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
      selectAll: R,
      toggleSelect: Q,
      isExpanded: q,
      toggleExpand: O,
      isGroupOpen: h,
      toggleGroup: x,
      items: D.value,
      itemsCount: o.value.length,
      groupedItems: B.value
    }));
    return te(() => p(e.tag, {
      class: ee(["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class]),
      style: fe(e.style)
    }, {
      default: () => [n.header?.(ne.value), p(Lt, {
        transition: e.transition
      }, {
        default: () => [e.loading ? p(Hi, {
          key: "loader",
          name: "v-data-iterator",
          active: !0
        }, {
          default: (K) => n.loader?.(K)
        }) : V("div", {
          key: "items"
        }, [B.value.length ? n.default?.(ne.value) : n["no-data"]?.()])]
      }), n.footer?.(ne.value)]
    })), {};
  }
});
function q1() {
  const e = /* @__PURE__ */ ae([]);
  $v(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return {
    refs: e,
    updateRef: t
  };
}
const X1 = N({
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
    type: pe,
    default: "$first"
  },
  prevIcon: {
    type: pe,
    default: "$prev"
  },
  nextIcon: {
    type: pe,
    default: "$next"
  },
  lastIcon: {
    type: pe,
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
  ...Dt(),
  ...be(),
  ...lt(),
  ...dt(),
  ...qe(),
  ...Ln(),
  ...Pe({
    tag: "nav"
  }),
  ...$e(),
  ...ln({
    variant: "text"
  })
}, "VPagination"), js = J()({
  name: "VPagination",
  props: X1(),
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
    const l = ke(e, "modelValue"), {
      t: i,
      n: o
    } = je(), {
      isRtl: r
    } = ft(), {
      themeClasses: s
    } = Re(e), {
      width: u
    } = nn(), c = /* @__PURE__ */ se(-1);
    nt(void 0, {
      scoped: !0
    });
    const {
      resizeRef: d
    } = cn((C) => {
      if (!C.length) return;
      const {
        target: T,
        contentRect: P
      } = C[0], F = T.querySelector(".v-pagination__list > *");
      if (!F) return;
      const A = P.width, B = F.offsetWidth + parseFloat(getComputedStyle(F).marginRight) * 2;
      c.value = m(A, B);
    }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), k = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
    function m(C, T) {
      const P = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((C - T * P) / T).toFixed(2))
      ));
    }
    const y = _(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
      if (k.value <= 0) return [];
      if (k.value === 1) return [l.value];
      if (f.value <= k.value)
        return Zt(f.value, v.value);
      const C = k.value % 2 === 0, T = C ? k.value / 2 : Math.floor(k.value / 2), P = C ? T : T + 1, F = f.value - T;
      if (P - l.value >= 0)
        return [...Zt(Math.max(1, k.value - 1), v.value), e.ellipsis, f.value];
      if (l.value - F >= (C ? 1 : 0)) {
        const A = k.value - 1, B = f.value - A + v.value;
        return [v.value, e.ellipsis, ...Zt(A, B)];
      } else {
        const A = Math.max(1, k.value - 2), B = A === 1 ? l.value : l.value - Math.ceil(A / 2) + v.value;
        return [v.value, e.ellipsis, ...Zt(A, B), e.ellipsis, f.value];
      }
    });
    function h(C, T, P) {
      C.preventDefault(), l.value = T, P && a(P, T);
    }
    const {
      refs: x,
      updateRef: w
    } = q1();
    nt({
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
    const b = _(() => y.value.map((C, T) => {
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
          page: o(C),
          props: {
            ref: P,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || Number(e.length) < 2,
            color: F ? e.activeColor : e.color,
            "aria-current": F,
            "aria-label": i(F ? e.currentPageAriaLabel : e.pageAriaLabel, C),
            onClick: (A) => h(A, C)
          }
        };
      }
    })), S = _(() => {
      const C = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (P) => h(P, v.value, "first"),
          disabled: C,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": C
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (P) => h(P, l.value - 1, "prev"),
          disabled: C,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": C
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (P) => h(P, l.value + 1, "next"),
          disabled: T,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": T
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (P) => h(P, v.value + f.value - 1, "last"),
          disabled: T,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": T
        } : void 0
      };
    });
    function g() {
      const C = l.value - v.value;
      x.value[C]?.$el.focus();
    }
    function I(C) {
      C.key === gs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ie(g)) : C.key === gs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ie(g));
    }
    return te(() => p(e.tag, {
      ref: d,
      class: ee(["v-pagination", s.value, e.class]),
      style: fe(e.style),
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: I,
      "data-test": "v-pagination-root"
    }, {
      default: () => [V("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && V("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(S.value.first) : p(Fe, U({
        _as: "VPaginationBtn"
      }, S.value.first), null)]), V("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(S.value.prev) : p(Fe, U({
        _as: "VPaginationBtn"
      }, S.value.prev), null)]), b.value.map((C, T) => V("li", {
        key: C.key,
        class: ee(["v-pagination__item", {
          "v-pagination__item--is-active": C.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(C) : p(Fe, U({
        _as: "VPaginationBtn"
      }, C.props), {
        default: () => [C.page]
      })])), V("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(S.value.next) : p(Fe, U({
        _as: "VPaginationBtn"
      }, S.value.next), null)]), e.showFirstLastPage && V("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(S.value.last) : p(Fe, U({
        _as: "VPaginationBtn"
      }, S.value.last), null)])])]
    })), {};
  }
}), xc = N({
  color: String,
  prevIcon: {
    type: pe,
    default: "$prev"
  },
  nextIcon: {
    type: pe,
    default: "$next"
  },
  firstIcon: {
    type: pe,
    default: "$first"
  },
  lastIcon: {
    type: pe,
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
}, "VDataTableFooter"), Pi = J()({
  name: "VDataTableFooter",
  props: xc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = je(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: u,
      setItemsPerPage: c
    } = O1(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: isNaN(Number(f.title)) ? a(f.title) : f.title
    }));
    return te(() => {
      const f = js.filterProps(e);
      return V("div", {
        class: "v-data-table-footer"
      }, [n.prepend?.(), V("div", {
        class: "v-data-table-footer__items-per-page"
      }, [V("span", null, [a(e.itemsPerPageText)]), p(uc, {
        items: d.value,
        itemColor: e.color,
        modelValue: u.value,
        "onUpdate:modelValue": (v) => c(Number(v)),
        density: "compact",
        variant: "outlined",
        "aria-label": a(e.itemsPerPageText),
        hideDetails: !0
      }, null)]), V("div", {
        class: "v-data-table-footer__info"
      }, [V("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), V("div", {
        class: "v-data-table-footer__pagination"
      }, [p(js, U({
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        density: "comfortable",
        firstAriaLabel: e.firstPageLabel,
        lastAriaLabel: e.lastPageLabel,
        length: i.value,
        nextAriaLabel: e.nextPageLabel,
        previousAriaLabel: e.prevPageLabel,
        rounded: !0,
        showFirstLastPage: !0,
        totalVisible: e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, Ee(f, ["color"])), null)])]);
    }), {};
  }
}), Ti = D0({
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
      height: ce(e.height),
      width: ce(e.width),
      maxWidth: ce(e.maxWidth),
      left: l === "start" ? ce(e.fixedOffset || null) : void 0,
      right: l === "end" ? ce(e.fixedEndOffset || null) : void 0,
      paddingInlineStart: e.indent ? ce(e.indent) : void 0
    }
  }, {
    default: () => [n.default?.()]
  });
}), Z1 = N({
  headers: Array
}, "DataTable-header"), vy = /* @__PURE__ */ Symbol.for("vuetify:data-table-headers"), my = {
  title: "",
  sortable: !1
}, J1 = {
  ...my,
  width: 48
};
function Q1() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }));
  return {
    enqueue: (n, a) => {
      let l = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i].priority > a) {
          t.splice(i, 0, {
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
function Ys(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    t.push(e);
  else
    for (const n of e.children)
      Ys(n, t);
  return t;
}
function gy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e)
    n.key && t.add(n.key), n.children && gy(n.children, t);
  return t;
}
function e_(e) {
  if (e.key) {
    if (e.key === "data-table-group") return my;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return J1;
  }
}
function Cc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Cc(n, t + 1))) : t;
}
function t_(e) {
  let t = !1;
  function n(i, o) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (i)
      if (r !== "none" && (i.fixed = r), i.fixed === !0 && (i.fixed = "start"), i.fixed === o)
        if (i.children)
          if (o === "start")
            for (let s = i.children.length - 1; s >= 0; s--)
              n(i.children[s], o, o);
          else
            for (let s = 0; s < i.children.length; s++)
              n(i.children[s], o, o);
        else
          !t && o === "start" ? i.lastFixed = !0 : !t && o === "end" ? i.firstFixedEnd = !0 : isNaN(Number(i.width)) ? (`${i.key}`, void 0) : i.minWidth = Math.max(Number(i.width) || 0, Number(i.minWidth) || 0), t = !0;
      else if (i.children)
        if (o === "start")
          for (let s = i.children.length - 1; s >= 0; s--)
            n(i.children[s], o);
        else
          for (let s = 0; s < i.children.length; s++)
            n(i.children[s], o);
      else
        t = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    n(e[i], "start");
  for (let i = 0; i < e.length; i++)
    n(e[i], "end");
  let a = 0;
  for (let i = 0; i < e.length; i++)
    a = hy(e[i], a);
  let l = 0;
  for (let i = e.length - 1; i >= 0; i--)
    l = yy(e[i], l);
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
function n_(e, t) {
  const n = [];
  let a = 0;
  const l = Q1(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: u,
        priority: c
      } = l.dequeue(), d = t - a - Cc(u);
      if (r.push({
        ...u,
        rowspan: d ?? 1,
        colspan: u.children ? Ys(u).length : 1
      }), u.children)
        for (const f of u.children) {
          const v = c % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + d + v);
        }
      s += 1, o -= 1;
    }
    a += 1, n.push(r);
  }
  return {
    columns: e.map((o) => Ys(o)).flat(),
    headers: n
  };
}
function by(e) {
  const t = [];
  for (const n of e) {
    const a = {
      ...e_(n),
      ...n
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? by(a.children) : void 0
    };
    t.push(o);
  }
  return t;
}
function Vc(e, t) {
  const n = /* @__PURE__ */ ae([]), a = /* @__PURE__ */ ae([]), l = /* @__PURE__ */ ae({}), i = /* @__PURE__ */ ae({}), o = /* @__PURE__ */ ae({});
  tt(() => {
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({
      key: m,
      title: Mn(m)
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
    t_(d);
    const f = Math.max(...d.map((m) => Cc(m))) + 1, v = n_(d, f);
    n.value = v.headers, a.value = v.columns;
    const k = v.headers.flat(1);
    for (const m of k)
      m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (i.value[m.key] = m.sortRaw)), m.filter && (o.value[m.key] = m.filter));
  });
  const r = {
    headers: n,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Ge(vy, r), r;
}
function _r() {
  const e = Le(vy);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Sy = N({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  initialSortOrder: String,
  sortAscIcon: {
    type: pe,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: pe,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...lt(),
  ...Qa(),
  ...rr()
}, "VDataTableHeaders"), Ga = J()({
  name: "VDataTableHeaders",
  props: Sy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = je(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = fy(), {
      someSelected: r,
      allSelected: s,
      selectAll: u,
      showSelectAll: c
    } = xr(), {
      columns: d,
      headers: f
    } = _r(), {
      loaderClasses: v
    } = Ri(e);
    function k(T, P) {
      if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
      const F = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
      return {
        position: "sticky",
        left: F === "start" ? ce(T.fixedOffset) : void 0,
        right: F === "end" ? ce(T.fixedEndOffset) : void 0,
        top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0
      };
    }
    function m(T, P) {
      T.key === "Enter" && !e.disableSort && l(P, T);
    }
    function y(T) {
      const P = i.value.find((F) => F.key === T.key);
      return !P && e.initialSortOrder === "asc" || P?.order === "asc" ? e.sortAscIcon : e.sortDescIcon;
    }
    const {
      backgroundColorClasses: h,
      backgroundColorStyles: x
    } = He(() => e.color), {
      displayClasses: w,
      mobile: b
    } = nn(e), S = _(() => ({
      headers: f.value,
      columns: d.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: u,
      getSortIcon: y
    })), g = _(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, w.value, v.value]), I = (T) => {
      let {
        column: P,
        x: F,
        y: A
      } = T;
      const B = P.key === "data-table-select" || P.key === "data-table-expand", D = P.key === "data-table-group" && P.width === 0 && !P.title, L = U(e.headerProps ?? {}, P.headerProps ?? {});
      return p(Ti, U({
        tag: "th",
        align: P.align,
        class: [{
          "v-data-table__th--sortable": P.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(P),
          "v-data-table__th--fixed": P.fixed
        }, ...g.value],
        style: {
          width: ce(P.width),
          minWidth: ce(P.minWidth),
          maxWidth: ce(P.maxWidth),
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
          const W = `header.${P.key}`, R = {
            column: P,
            selectAll: u,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: y
          };
          return n[W] ? n[W](R) : D ? "" : P.key === "data-table-select" ? n["header.data-table-select"]?.(R) ?? (c.value && p(Sn, {
            color: e.color,
            density: e.density,
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": u
          }, null)) : V("div", {
            class: "v-data-table-header__content"
          }, [V("span", null, [P.title]), P.sortable && !e.disableSort && p(Ne, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: y(P)
          }, null), e.multiSort && o(P) && V("div", {
            key: "badge",
            class: ee(["v-data-table-header__sort-badge", ...h.value]),
            style: fe(x.value)
          }, [i.value.findIndex((Q) => Q.key === P.key) + 1])]);
        }
      });
    }, C = () => {
      const T = _(() => d.value.filter((F) => F?.sortable && !e.disableSort)), P = d.value.find((F) => F.key === "data-table-select");
      return p(Ti, U({
        tag: "th",
        class: [...g.value],
        colspan: f.value.length + 1
      }, e.headerProps), {
        default: () => [V("div", {
          class: "v-data-table-header__content"
        }, [p(uc, {
          chips: !0,
          color: e.color,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: T.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = []
        }, {
          append: P ? () => p(Sn, {
            color: e.color,
            density: "compact",
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": () => u(!s.value)
          }, null) : void 0,
          chip: (F) => p(Zn, {
            onClick: F.item.raw?.sortable ? () => l(F.item.raw) : void 0,
            onMousedown: (A) => {
              A.preventDefault(), A.stopPropagation();
            }
          }, {
            default: () => [F.item.title, p(Ne, {
              class: ee(["v-data-table__td-sort-icon", o(F.item.raw) && "v-data-table__td-sort-icon-active"]),
              icon: y(F.item.raw),
              size: "small"
            }, null)]
          })
        })])]
      });
    };
    te(() => b.value ? V("tr", null, [p(C, null, null)]) : V(he, null, [n.headers ? n.headers(S.value) : f.value.map((T, P) => V("tr", null, [T.map((F, A) => p(I, {
      column: F,
      x: A,
      y: P
    }, null))])), e.loading && V("tr", {
      class: "v-data-table-progress"
    }, [V("th", {
      colspan: d.value.length
    }, [p(Hi, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading,
      indeterminate: !0
    }, {
      default: n.loader
    })])])]));
  }
}), ky = N({
  item: {
    type: Object,
    required: !0
  },
  groupCollapseIcon: {
    type: pe,
    default: "$tableGroupCollapse"
  },
  groupExpandIcon: {
    type: pe,
    default: "$tableGroupExpand"
  },
  ...lt()
}, "VDataTableGroupHeaderRow"), a_ = J()({
  name: "VDataTableGroupHeaderRow",
  props: ky(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = ny(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = xr(), {
      columns: u
    } = _r(), c = _(() => i([e.item])), d = /* @__PURE__ */ E(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
    return () => V("tr", {
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
        }) ?? p(Ti, {
          class: "v-data-table-group-header-row__column",
          colspan: d.value
        }, {
          default: () => [p(Fe, {
            size: "small",
            variant: "text",
            icon: v,
            onClick: k
          }, null), V("span", null, [e.item.value]), V("span", null, [Ut("("), c.value.length, Ut(")")])]
        });
      } else if (f.key === "data-table-select") {
        const v = c.value.filter((h) => h.selectable), k = v.length > 0 && o(v), m = r(v) && !k, y = (h) => s(v, h);
        return n["data-table-select"]?.({
          props: {
            modelValue: k,
            indeterminate: m,
            "onUpdate:modelValue": y
          }
        }) ?? p(Ti, {
          class: "v-data-table__td--select-row",
          noPadding: !0
        }, {
          default: () => [p(Sn, {
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
}), wy = N({
  color: String,
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  collapseIcon: {
    type: pe,
    default: "$collapse"
  },
  expandIcon: {
    type: pe,
    default: "$expand"
  },
  onClick: Ct(),
  onContextmenu: Ct(),
  onDblclick: Ct(),
  ...lt(),
  ...Qa()
}, "VDataTableRow"), _c = J()({
  name: "VDataTableRow",
  props: wy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      displayClasses: a,
      mobile: l
    } = nn(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: u
    } = xr(), {
      isExpanded: c,
      toggleExpand: d
    } = ey(), {
      toggleSort: f,
      sortBy: v,
      isSorted: k
    } = fy(), {
      columns: m
    } = _r();
    te(() => V("tr", {
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
        value: za(x.columns, y.key),
        column: y,
        isSelected: i,
        toggleSelect: o,
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
      return p(Ti, U({
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
                modelValue: i([x]),
                onClick: eo(() => o(x), ["stop"])
              }
            }) ?? p(Sn, {
              color: e.color,
              disabled: !x.selectable,
              density: e.density,
              modelValue: i([x]),
              onClick: eo((A) => o(x, e.index, A), ["stop"])
            }, null);
          if (y.key === "data-table-expand")
            return n["item.data-table-expand"]?.({
              ...S,
              props: {
                icon: c(x) ? e.collapseIcon : e.expandIcon,
                size: "small",
                variant: "text",
                onClick: eo(() => d(x), ["stop"])
              }
            }) ?? p(Fe, {
              icon: c(x) ? e.collapseIcon : e.expandIcon,
              size: "small",
              variant: "text",
              onClick: eo(() => d(x), ["stop"])
            }, null);
          if (n[w] && !l.value) return n[w](S);
          const F = Pn(S.value);
          return l.value ? V(he, null, [V("div", {
            class: "v-data-table__td-title"
          }, [n[b]?.(g) ?? y.title]), V("div", {
            class: "v-data-table__td-value"
          }, [n[w]?.(S) ?? F])]) : F;
        }
      });
    })]));
  }
}), py = N({
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
  ...zt(wy(), ["collapseIcon", "expandIcon", "density"]),
  ...zt(ky(), ["groupCollapseIcon", "groupExpandIcon", "density"]),
  ...Qa()
}, "VDataTableRows"), qa = J()({
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
    } = _r(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = ey(), {
      isSelected: s,
      toggleSelect: u
    } = xr(), {
      toggleGroup: c,
      isGroupOpen: d
    } = ny(), {
      t: f
    } = je(), {
      mobile: v
    } = nn(e);
    return te(() => {
      const k = zt(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
      return e.loading && (!e.items.length || a.loading) ? V("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [V("td", {
        colspan: l.value.length
      }, [a.loading?.() ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? V("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [V("td", {
        colspan: l.value.length
      }, [a["no-data"]?.() ?? f(e.noDataText)])]) : V(he, null, [e.items.map((m, y) => {
        if (m.type === "group") {
          const w = {
            index: y,
            item: m,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: u,
            toggleGroup: c,
            isGroupOpen: d
          };
          return a["group-header"] ? a["group-header"](w) : p(a_, U({
            key: `group-header_${m.id}`,
            item: m
          }, Qt(n, ":groupHeader", () => w), k), a);
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
          toggleExpand: o,
          isSelected: s,
          toggleSelect: u
        }, x = {
          ...h,
          props: U({
            key: `item_${m.key ?? m.index}`,
            onClick: i.value ? () => {
              o(m);
            } : void 0,
            index: y,
            item: m,
            color: e.color,
            cellProps: e.cellProps,
            collapseIcon: e.collapseIcon,
            expandIcon: e.expandIcon,
            density: e.density,
            mobile: v.value
          }, Qt(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({
            item: h.item,
            index: h.index,
            internalItem: h.internalItem
          }) : e.rowProps)
        };
        return V(he, {
          key: x.props.key
        }, [a.item ? a.item(x) : p(_c, x.props, a), r(m) && a["expanded-row"]?.(h)]);
      })]);
    }), {};
  }
}), xy = N({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (e) => ["even", "odd"].includes(e)
  },
  ...be(),
  ...lt(),
  ...Pe(),
  ...$e()
}, "VTable"), Xa = J()({
  name: "VTable",
  props: xy(),
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const {
      themeClasses: l
    } = Re(e), {
      densityClasses: i
    } = Et(e);
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
      }, l.value, i.value, e.class]),
      style: fe(e.style)
    }, {
      default: () => [n.top?.(), n.default ? V("div", {
        class: "v-table__wrapper",
        style: {
          height: ce(e.height)
        }
      }, [V("table", null, [n.default()])]) : n.wrapper?.(), n.bottom?.()]
    })), {};
  }
}), l_ = N({
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
function i_(e, t, n, a) {
  const l = e.returnObject ? t : it(t, e.itemValue), i = it(t, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = it(t, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? it(t, e.itemValue) : l,
    index: n,
    value: l,
    selectable: i,
    columns: o,
    raw: t
  };
}
function o_(e, t, n) {
  return t.map((a, l) => i_(e, a, l, n));
}
function Ic(e, t) {
  return {
    items: _(() => o_(e, e.items, t.value))
  };
}
const Pc = N({
  ...py(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Jh(),
  ...yc(),
  ...Z1(),
  ...l_(),
  ...sy(),
  ...cy(),
  ...Ee(Sy(), ["multiSort", "initialSortOrder"]),
  ...xy()
}, "DataTable"), r_ = N({
  ...Sc(),
  ...Pc(),
  ...Rl(),
  ...xc()
}, "VDataTable"), s_ = J()({
  name: "VDataTable",
  props: r_(),
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
    } = bc(e), {
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s
    } = Cr(e), {
      page: u,
      itemsPerPage: c
    } = kc(e), {
      disableSort: d
    } = /* @__PURE__ */ El(e), {
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
    } = Ic(e, f), x = /* @__PURE__ */ E(() => e.search), {
      filteredItems: w
    } = Hl(e, h, x, {
      transform: (de) => de.columns,
      customKeyFilter: y
    }), {
      toggleSort: b
    } = Vr({
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s,
      page: u
    }), {
      sortByWithGroups: S,
      opened: g,
      extractRows: I,
      isGroupOpen: C,
      toggleGroup: T
    } = Sr({
      groupBy: l,
      sortBy: o,
      disableSort: d
    }), {
      sortedItems: P
    } = pc(e, w, S, {
      transform: (de) => ({
        ...de.raw,
        ...de.columns
      }),
      sortFunctions: k,
      sortRawFunctions: m
    }), {
      flatItems: F
    } = kr(P, l, g, () => !!a["group-summary"]), A = _(() => F.value.length), {
      startIndex: B,
      stopIndex: D,
      pageCount: L,
      setItemsPerPage: W
    } = wc({
      page: u,
      itemsPerPage: c,
      itemsLength: A
    }), {
      paginatedItems: R
    } = oy({
      items: F,
      startIndex: B,
      stopIndex: D,
      itemsPerPage: c
    }), Q = _(() => I(R.value)), {
      isSelected: q,
      select: O,
      selectAll: ne,
      toggleSelect: K,
      someSelected: H,
      allSelected: G
    } = pr(e, {
      allItems: h,
      currentPage: Q
    }), {
      isExpanded: X,
      toggleExpand: ve
    } = br(e);
    wr({
      page: u,
      itemsPerPage: c,
      sortBy: o,
      groupBy: l,
      search: x
    }), nt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const Z = _(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: o.value,
      pageCount: L.value,
      toggleSort: b,
      setItemsPerPage: W,
      someSelected: H.value,
      allSelected: G.value,
      isSelected: q,
      select: O,
      selectAll: ne,
      toggleSelect: K,
      isExpanded: X,
      toggleExpand: ve,
      isGroupOpen: C,
      toggleGroup: T,
      items: Q.value.map((de) => de.raw),
      internalItems: Q.value,
      groupedItems: R.value,
      columns: f.value,
      headers: v.value
    }));
    return te(() => {
      const de = Pi.filterProps(e), xe = Ga.filterProps(Ee(e, ["multiSort"])), Ce = qa.filterProps(e), _e = Xa.filterProps(e);
      return p(Xa, U({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, _e, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(Z.value),
        default: () => a.default ? a.default(Z.value) : V(he, null, [a.colgroup?.(Z.value), !e.hideDefaultHeader && V("thead", {
          key: "thead"
        }, [p(Ga, U(xe, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(Z.value), !e.hideDefaultBody && V("tbody", null, [a["body.prepend"]?.(Z.value), a.body ? a.body(Z.value) : p(qa, U(n, Ce, {
          items: R.value
        }), a), a["body.append"]?.(Z.value)]), a.tbody?.(Z.value), a.tfoot?.(Z.value)]),
        bottom: () => a.bottom ? a.bottom(Z.value) : !e.hideDefaultFooter && V(he, null, [p(en, null, null), p(Pi, de, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), u_ = N({
  ...Ee(Pc(), ["hideDefaultFooter"]),
  ...yc(),
  ...ch(),
  ...Rl()
}, "VDataTableVirtual"), c_ = J()({
  name: "VDataTableVirtual",
  props: u_(),
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
    } = bc(e), {
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s
    } = Cr(e), {
      disableSort: u
    } = /* @__PURE__ */ El(e), {
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
    } = Ic(e, c), y = /* @__PURE__ */ E(() => e.search), {
      filteredItems: h
    } = Hl(e, m, y, {
      transform: (_e) => _e.columns,
      customKeyFilter: f
    }), {
      toggleSort: x
    } = Vr({
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s
    }), {
      sortByWithGroups: w,
      opened: b,
      extractRows: S,
      isGroupOpen: g,
      toggleGroup: I
    } = Sr({
      groupBy: l,
      sortBy: o,
      disableSort: u
    }), {
      sortedItems: C
    } = pc(e, h, w, {
      transform: (_e) => ({
        ..._e.raw,
        ..._e.columns
      }),
      sortFunctions: v,
      sortRawFunctions: k
    }), {
      flatItems: T
    } = kr(C, l, b, () => !!a["group-summary"]), P = _(() => S(T.value)), {
      isSelected: F,
      select: A,
      selectAll: B,
      toggleSelect: D,
      someSelected: L,
      allSelected: W
    } = pr(e, {
      allItems: P,
      currentPage: P
    }), {
      isExpanded: R,
      toggleExpand: Q
    } = br(e), {
      containerRef: q,
      markerRef: O,
      paddingTop: ne,
      paddingBottom: K,
      computedItems: H,
      handleItemResize: G,
      handleScroll: X,
      handleScrollend: ve,
      calculateVisibleItems: Z,
      scrollToIndex: de
    } = dh(e, T), xe = _(() => H.value.map((_e) => ({
      ..._e.raw,
      virtualIndex: _e.index
    })));
    wr({
      sortBy: o,
      page: /* @__PURE__ */ se(1),
      itemsPerPage: /* @__PURE__ */ se(-1),
      groupBy: l,
      search: y
    }), nt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const Ce = _(() => ({
      sortBy: o.value,
      toggleSort: x,
      someSelected: L.value,
      allSelected: W.value,
      isSelected: F,
      select: A,
      selectAll: B,
      toggleSelect: D,
      isExpanded: R,
      toggleExpand: Q,
      isGroupOpen: g,
      toggleGroup: I,
      items: P.value.map((_e) => _e.raw),
      internalItems: P.value,
      groupedItems: T.value,
      columns: c.value,
      headers: d.value
    }));
    return te(() => {
      const _e = Ga.filterProps(Ee(e, ["multiSort"])), M = qa.filterProps(e), $ = Xa.filterProps(e);
      return p(Xa, U({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, $, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(Ce.value),
        wrapper: () => V("div", {
          ref: q,
          onScrollPassive: X,
          onScrollend: ve,
          class: "v-table__wrapper",
          style: {
            height: ce(e.height)
          }
        }, [V("table", null, [a.colgroup?.(Ce.value), !e.hideDefaultHeader && V("thead", {
          key: "thead"
        }, [p(Ga, U(_e, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(Ce.value), !e.hideDefaultBody && V("tbody", {
          key: "tbody"
        }, [V("tr", {
          ref: O,
          style: {
            height: ce(ne.value),
            border: 0
          }
        }, [V("td", {
          colspan: c.value.length,
          style: {
            height: 0,
            border: 0
          }
        }, null)]), a["body.prepend"]?.(Ce.value), p(qa, U(n, M, {
          items: xe.value
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
              }) ?? p(_c, U(j.props, {
                ref: z,
                key: j.internalItem.index,
                index: j.index
              }), a);
            }
          })
        }), a["body.append"]?.(Ce.value), V("tr", {
          style: {
            height: ce(K.value),
            border: 0
          }
        }, [V("td", {
          colspan: c.value.length,
          style: {
            height: 0,
            border: 0
          }
        }, null)])]), a.tbody?.(Ce.value), a.tfoot?.(Ce.value)])]),
        bottom: () => a.bottom?.(Ce.value)
      });
    }), {
      calculateVisibleItems: Z,
      scrollToIndex: de
    };
  }
}), d_ = N({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Sc(),
  ...Pc(),
  ...xc()
}, "VDataTableServer"), f_ = J()({
  name: "VDataTableServer",
  props: d_(),
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
    } = bc(e), {
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s
    } = Cr(e), {
      page: u,
      itemsPerPage: c
    } = kc(e), {
      disableSort: d
    } = /* @__PURE__ */ El(e), f = _(() => parseInt(e.itemsLength, 10)), {
      columns: v,
      headers: k
    } = Vc(e, {
      groupBy: l,
      showSelect: /* @__PURE__ */ E(() => e.showSelect),
      showExpand: /* @__PURE__ */ E(() => e.showExpand)
    }), {
      items: m
    } = Ic(e, v), {
      toggleSort: y
    } = Vr({
      initialSortOrder: i,
      sortBy: o,
      multiSort: r,
      mustSort: s,
      page: u
    }), {
      opened: h,
      isGroupOpen: x,
      toggleGroup: w,
      extractRows: b
    } = Sr({
      groupBy: l,
      sortBy: o,
      disableSort: d
    }), {
      pageCount: S,
      setItemsPerPage: g
    } = wc({
      page: u,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: I
    } = kr(m, l, h, () => !!a["group-summary"]), {
      isSelected: C,
      select: T,
      selectAll: P,
      toggleSelect: F,
      someSelected: A,
      allSelected: B
    } = pr(e, {
      allItems: m,
      currentPage: m
    }), {
      isExpanded: D,
      toggleExpand: L
    } = br(e), W = _(() => b(m.value));
    wr({
      page: u,
      itemsPerPage: c,
      sortBy: o,
      groupBy: l,
      search: /* @__PURE__ */ E(() => e.search)
    }), Ge("v-data-table", {
      toggleSort: y,
      sortBy: o
    }), nt({
      VDataTableRows: {
        hideNoData: /* @__PURE__ */ E(() => e.hideNoData),
        noDataText: /* @__PURE__ */ E(() => e.noDataText),
        loading: /* @__PURE__ */ E(() => e.loading),
        loadingText: /* @__PURE__ */ E(() => e.loadingText)
      }
    });
    const R = _(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: o.value,
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
      items: W.value.map((Q) => Q.raw),
      internalItems: W.value,
      groupedItems: I.value,
      columns: v.value,
      headers: k.value
    }));
    te(() => {
      const Q = Pi.filterProps(e), q = Ga.filterProps(Ee(e, ["multiSort"])), O = qa.filterProps(e), ne = Xa.filterProps(e);
      return p(Xa, U({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ne, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => a.top?.(R.value),
        default: () => a.default ? a.default(R.value) : V(he, null, [a.colgroup?.(R.value), !e.hideDefaultHeader && V("thead", {
          key: "thead",
          class: "v-data-table__thead",
          role: "rowgroup"
        }, [p(Ga, U(q, {
          multiSort: !!e.multiSort
        }), a)]), a.thead?.(R.value), !e.hideDefaultBody && V("tbody", {
          class: "v-data-table__tbody",
          role: "rowgroup"
        }, [a["body.prepend"]?.(R.value), a.body ? a.body(R.value) : p(qa, U(n, O, {
          items: I.value
        }), a), a["body.append"]?.(R.value)]), a.tbody?.(R.value), a.tfoot?.(R.value)]),
        bottom: () => a.bottom ? a.bottom(R.value) : !e.hideDefaultFooter && V(he, null, [p(en, null, null), p(Pi, Q, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), v_ = N({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...be(),
  ...ut(),
  ...Pe()
}, "VContainer"), m_ = J()({
  name: "VContainer",
  props: v_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = ft(), {
      dimensionStyles: l
    } = ct(e);
    return te(() => p(e.tag, {
      class: ee(["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class]),
      style: fe([l.value, e.style])
    }, n)), {};
  }
}), Cy = nr.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Vy = nr.reduce((e, t) => {
  const n = "offset" + Mn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), _y = nr.reduce((e, t) => {
  const n = "order" + Mn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Pf = {
  col: Object.keys(Cy),
  offset: Object.keys(Vy),
  order: Object.keys(_y)
};
function g_(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const h_ = ["auto", "start", "end", "center", "baseline", "stretch"], y_ = N({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Cy,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Vy,
  order: {
    type: [String, Number],
    default: null
  },
  ..._y,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => h_.includes(e)
  },
  ...be(),
  ...Pe()
}, "VCol"), b_ = J()({
  name: "VCol",
  props: y_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => {
      const l = [];
      let i;
      for (i in Pf)
        Pf[i].forEach((r) => {
          const s = e[r], u = g_(i, r, s);
          u && l.push(u);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => yn(e.tag, {
      class: [a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Tc = ["start", "end", "center"], Iy = ["space-between", "space-around", "space-evenly"];
function Ac(e, t) {
  return nr.reduce((n, a) => {
    const l = e + Mn(a);
    return n[l] = t(), n;
  }, {});
}
const S_ = [...Tc, "baseline", "stretch"], Py = (e) => S_.includes(e), Ty = Ac("align", () => ({
  type: String,
  default: null,
  validator: Py
})), k_ = [...Tc, ...Iy], Ay = (e) => k_.includes(e), Dy = Ac("justify", () => ({
  type: String,
  default: null,
  validator: Ay
})), w_ = [...Tc, ...Iy, "stretch"], Ey = (e) => w_.includes(e), My = Ac("alignContent", () => ({
  type: String,
  default: null,
  validator: Ey
})), Tf = {
  align: Object.keys(Ty),
  justify: Object.keys(Dy),
  alignContent: Object.keys(My)
}, p_ = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function x_(e, t, n) {
  let a = p_[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const C_ = N({
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
  ...be(),
  ...Pe()
}, "VRow"), V_ = J()({
  name: "VRow",
  props: C_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => {
      const l = [];
      let i;
      for (i in Tf)
        Tf[i].forEach((o) => {
          const r = e[o], s = x_(i, o, r);
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
    return () => yn(e.tag, {
      class: ["v-row", a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Us = Qn("v-spacer", "div", "VSpacer"), By = N({
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
    type: pe,
    default: "$next"
  },
  prevIcon: {
    type: pe,
    default: "$prev"
  },
  modeIcon: {
    type: pe,
    default: "$subgroup"
  },
  text: String,
  monthText: String,
  yearText: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Ks = J()({
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
    } = je(), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
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
      }, x = p(Fe, {
        "data-testid": "prev-month",
        disabled: r.value,
        icon: e.prevIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"),
        onClick: d
      }, null), w = p(Fe, {
        "data-testid": "next-month",
        disabled: s.value,
        icon: e.nextIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"),
        onClick: f
      }, null), b = p(Fe, {
        "data-testid": "prev-year",
        disabled: u.value,
        icon: e.prevIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"),
        onClick: v
      }, null), S = p(Fe, {
        "data-testid": "next-year",
        disabled: c.value,
        icon: e.nextIcon,
        "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"),
        onClick: k
      }, null), g = p(Fe, {
        class: "v-date-picker-controls__only-month-btn",
        "data-testid": "month-btn",
        density: "default",
        disabled: i.value,
        text: e.monthText,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"),
        onClick: y
      }, null), I = p(Fe, {
        class: "v-date-picker-controls__only-year-btn",
        "data-testid": "year-btn",
        density: "default",
        disabled: o.value,
        text: e.yearText,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"),
        onClick: m
      }, null), C = p(Fe, {
        class: "v-date-picker-controls__year-btn",
        "data-testid": "year-btn",
        density: "default",
        disabled: o.value,
        text: e.text,
        appendIcon: e.modeIcon,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"),
        onClick: m
      }, null), T = V(he, null, [p(Fe, {
        class: "v-date-picker-controls__month-btn",
        "data-testid": "month-btn",
        height: "36",
        disabled: i.value,
        text: e.text,
        rounded: !0,
        "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"),
        onClick: y
      }, null), p(Fe, {
        class: "v-date-picker-controls__mode-btn",
        "data-testid": "year-btn",
        disabled: o.value,
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
      }, F = V(he, null, [e.noMonthPicker ? C : T, p(Us, null, null), V("div", {
        class: "v-date-picker-controls__month"
      }, [x, w])]), A = V(he, null, [V("div", {
        class: "v-date-picker-controls__month"
      }, [x, g, w]), p(Us, null, null), V("div", {
        class: "v-date-picker-controls__year"
      }, [b, I, S])]);
      return p(Te, {
        defaults: h
      }, {
        default: () => [V("div", {
          class: ee(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]),
          style: {
            "--v-date-picker-controls-height": ce(e.controlHeight)
          }
        }, [a.default?.(P) ?? V(he, null, [e.controlVariant === "modal" && F, e.controlVariant === "docked" && A])])]
      });
    }), {};
  }
}), __ = N({
  appendIcon: pe,
  color: String,
  header: String,
  transition: String,
  onClick: Ct()
}, "VDatePickerHeader"), Gs = J()({
  name: "VDatePickerHeader",
  props: __(),
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
      backgroundColorStyles: i
    } = He(() => e.color);
    function o() {
      n("click");
    }
    function r() {
      n("click:append");
    }
    return te(() => {
      const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
      return V("div", {
        class: ee(["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value]),
        style: fe(i.value),
        onClick: o
      }, [a.prepend && V("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && p(Lt, {
        key: "content",
        name: e.transition
      }, {
        default: () => [V("div", {
          key: e.header,
          class: "v-date-picker-header__content"
        }, [a.default?.() ?? e.header])]
      }), u && V("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? p(Te, {
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
      }) : p(Fe, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), I_ = N({
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
function P_(e) {
  const t = Ja(), n = ke(e, "modelValue", [], (m) => Ke(m).map((y) => t.date(y))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = ke(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (m) => t.getYear(m)), i = ke(e, "month", void 0, (m) => {
    const y = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, y);
  }, (m) => t.getMonth(m)), o = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((y, h) => e.weekdays.includes((h + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(i.value, e.firstDayOfWeek), y = m.flat(), h = 42;
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
      const w = t.toISO(h), b = !t.isSameMonth(h, i.value), S = t.isSameDay(h, t.startOfMonth(i.value)), g = t.isSameDay(h, t.endOfMonth(i.value)), I = t.isSameDay(h, i.value), C = e.weekdays.length;
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
  const u = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let x = 0; x <= 6; x++)
      y.push(t.addDays(m, x));
    const h = t.date();
    return s(y, h);
  }), c = _(() => {
    const m = r.value.flat(), y = t.date();
    return s(m, y);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), {
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
    weekdayLabels: o,
    weekNumbers: d
  };
}
function Fy(e) {
  const t = Ja(), n = _(() => {
    if (!e.min) return null;
    const o = t.date(e.min);
    return t.isValid(o) ? o : null;
  }), a = _(() => {
    if (!e.max) return null;
    const o = t.date(e.max);
    return t.isValid(o) ? o : null;
  });
  function l(o) {
    return n.value && t.isBefore(o, n.value) ? n.value : a.value && t.isAfter(o, a.value) ? a.value : o;
  }
  function i(o) {
    return (!n.value || t.isAfter(o, n.value)) && (!a.value || t.isBefore(o, a.value));
  }
  return {
    minDate: n,
    maxDate: a,
    clampDate: l,
    isInAllowedRange: i
  };
}
const Ly = N({
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
  ...Ee(I_(), ["displayValue"])
}, "VDatePickerMonth"), qs = J()({
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
      t: i
    } = je(), {
      daysInMonth: o,
      model: r,
      weekNumbers: s,
      weekdayLabels: u
    } = P_(e), c = Ja(), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), v = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ E(() => v.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
    const m = _(() => {
      const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return r.value.length >= g;
    });
    ue(o, (g, I) => {
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
      return i(`$vuetify.datePicker.ariaLabel.${C}`, I);
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
        T !== !0 ? P = Ke(T) : typeof C == "string" ? P = [C] : typeof C == "function" ? P = Ke(C(g)) : Array.isArray(C) ? P = C : typeof C == "object" && C !== null && (P = Ke(C[g]));
      else return [];
      return P.length ? P.filter(Boolean).map((F) => typeof F == "string" ? F : "surface-variant") : ["surface-variant"];
    }
    function S(g) {
      const I = b(g);
      return I.length ? V("div", {
        class: "v-date-picker-month__events"
      }, [I.map((C) => p(vh, {
        dot: !0,
        color: C
      }, null))]) : null;
    }
    te(() => V("div", {
      class: "v-date-picker-month",
      style: {
        "--v-date-picker-days-in-week": e.weekdays.length
      }
    }, [e.showWeek && V("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && V("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [Ut(" ")]), s.value.map((g) => V("div", {
      class: ee(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"])
    }, [g]))]), p(Lt, {
      name: k.value
    }, {
      default: () => [V("div", {
        ref: l,
        key: o.value[0].date?.toString(),
        class: "v-date-picker-month__days"
      }, [!e.hideWeekdays && u.value.map((g) => V("div", {
        class: ee(["v-date-picker-month__day", "v-date-picker-month__weekday"])
      }, [g])), o.value.map((g, I) => {
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
        return m.value && !g.isSelected && (g.isDisabled = !0), V("div", {
          class: ee(["v-date-picker-month__day", {
            "v-date-picker-month__day--adjacent": g.isAdjacent,
            "v-date-picker-month__day--hide-adjacent": g.isHidden,
            "v-date-picker-month__day--selected": g.isSelected,
            "v-date-picker-month__day--week-end": g.isWeekEnd,
            "v-date-picker-month__day--week-start": g.isWeekStart
          }]),
          "data-v-date": g.isDisabled ? void 0 : g.isoDate
        }, [(e.showAdjacentMonths || !g.isAdjacent) && (a.day?.(C) ?? p(Fe, C.props, {
          default: () => [g.localized, S(g.isoDate)]
        }))]);
      })])]
    })]));
  }
}), $y = N({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number,
  allowedMonths: [Array, Function]
}, "VDatePickerMonths"), Xs = J()({
  name: "VDatePickerMonths",
  props: $y(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = Ja(), i = ke(e, "modelValue"), o = _(() => {
      let s = l.startOfYear(l.date());
      return e.year && (s = l.setYear(s, e.year)), Zt(12).map((u) => {
        const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
        return s = l.getNextMonth(s), {
          isDisabled: f,
          text: c,
          label: d,
          value: u
        };
      });
    });
    tt(() => {
      i.value = i.value ?? l.getMonth(l.date());
    });
    function r(s) {
      return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : !0;
    }
    return te(() => V("div", {
      class: "v-date-picker-months",
      style: {
        height: ce(e.height)
      }
    }, [V("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((s, u) => {
      const c = {
        active: i.value === u,
        ariaLabel: s.label,
        color: i.value === u ? e.color : void 0,
        disabled: s.isDisabled,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(f) {
        if (i.value === f) {
          n("update:modelValue", i.value);
          return;
        }
        i.value = f;
      }
      return a.month?.({
        month: s,
        i: u,
        props: c
      }) ?? p(Fe, U({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), Oy = N({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  allowedYears: [Array, Function]
}, "VDatePickerYears"), Zs = J()({
  name: "VDatePickerYears",
  props: Oy(),
  directives: {
    vIntersect: bn
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = Ja(), i = ke(e, "modelValue"), o = /* @__PURE__ */ se(!1), r = _(() => {
      const d = l.getYear(l.date());
      let f = d - 100, v = d + 52;
      e.min && (f = l.getYear(l.date(e.min))), e.max && (v = l.getYear(l.date(e.max)));
      let k = l.startOfYear(l.date());
      return k = l.setYear(k, f), Zt(v - f + 1, f).map((m) => {
        const y = l.format(k, "year");
        return k = l.setYear(k, l.getYear(k) + 1), {
          text: y,
          value: m,
          isDisabled: !c(m)
        };
      });
    });
    tt(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const s = Io();
    function u() {
      s.el?.scrollIntoView({
        block: "center"
      });
    }
    function c(d) {
      return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(d) : typeof e.allowedYears == "function" ? e.allowedYears(d) : !0;
    }
    return te(() => Ue(V("div", {
      class: "v-date-picker-years",
      style: {
        height: ce(e.height)
      }
    }, [V("div", {
      class: "v-date-picker-years__content",
      onFocus: () => s.el?.focus(),
      onFocusin: () => o.value = !0,
      onFocusout: () => o.value = !1,
      tabindex: o.value ? -1 : 0
    }, [r.value.map((d, f) => {
      const v = {
        ref: i.value === d.value ? s : void 0,
        active: i.value === d.value,
        color: i.value === d.value ? e.color : void 0,
        rounded: !0,
        text: d.text,
        disabled: d.isDisabled,
        variant: i.value === d.value ? "flat" : "text",
        onClick: () => {
          if (i.value === d.value) {
            n("update:modelValue", i.value);
            return;
          }
          i.value = d.value;
        }
      };
      return a.year?.({
        year: d,
        i: f,
        props: v
      }) ?? p(Fe, U({
        key: "month"
      }, v), null);
    })])]), [[bn, {
      handler: u
    }, null, {
      once: !0
    }]])), {};
  }
}), T_ = N({
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
  ...Ee(By(), ["active", "monthText", "yearText"]),
  ...Ly({
    weeksInMonth: "static"
  }),
  ...Ee($y(), ["modelValue"]),
  ...Ee(Oy(), ["modelValue"]),
  ...yr({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), A_ = J()({
  name: "VDatePicker",
  props: T_(),
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
    const l = Ja(), {
      t: i
    } = je(), {
      rtlClasses: o
    } = ft(), r = ke(e, "modelValue", void 0, (G) => Ke(G).map((X) => l.date(X)), (G) => e.multiple ? G : G[0]), s = ke(e, "viewMode"), {
      minDate: u,
      maxDate: c,
      clampDate: d
    } = Fy(e), f = _(() => {
      const G = l.date(), X = r.value?.[0] ? l.date(r.value[0]) : d(G);
      return X && l.isValid(X) ? X : G;
    }), v = /* @__PURE__ */ E(() => e.headerColor ?? e.color), k = ke(e, "month"), m = _({
      get: () => Number(k.value ?? l.getMonth(l.startOfMonth(f.value))),
      set: (G) => k.value = G
    }), y = ke(e, "year"), h = _({
      get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))),
      set: (G) => y.value = G
    }), x = /* @__PURE__ */ se(!1), w = _(() => {
      if (e.multiple && r.value.length > 1)
        return i("$vuetify.datePicker.itemsSelected", r.value.length);
      const G = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : i(e.header);
      return e.landscape && G.split(" ").length === 3 ? G.replace(" ", `
`) : G;
    }), b = /* @__PURE__ */ E(() => {
      let G = l.date();
      return G = l.setDate(G, 1), G = l.setMonth(G, m.value), G = l.setYear(G, h.value), G;
    }), S = /* @__PURE__ */ E(() => l.format(b.value, "monthAndYear")), g = /* @__PURE__ */ E(() => l.format(b.value, "monthShort")), I = /* @__PURE__ */ E(() => l.format(b.value, "year")), C = /* @__PURE__ */ E(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), T = _(() => {
      if (e.disabled) return !0;
      const G = [];
      if (s.value !== "month")
        G.push("prev-month", "next-month", "prev-year", "next-year");
      else {
        let X = l.date();
        if (X = l.startOfMonth(X), X = l.setMonth(X, m.value), X = l.setYear(X, h.value), u.value) {
          const ve = l.addDays(l.startOfMonth(X), -1), Z = l.addDays(l.startOfYear(X), -1);
          l.isAfter(u.value, ve) && G.push("prev-month"), l.isAfter(u.value, Z) && G.push("prev-year");
        }
        if (c.value) {
          const ve = l.addDays(l.endOfMonth(X), 1), Z = l.addDays(l.endOfYear(X), 1);
          l.isAfter(ve, c.value) && G.push("next-month"), l.isAfter(Z, c.value) && G.push("next-year");
        }
      }
      return G;
    }), P = _(() => e.allowedYears || B), F = _(() => e.allowedMonths || D);
    function A(G, X) {
      const ve = e.allowedDates;
      if (typeof ve != "function") return !0;
      const Z = 1 + Um(l, G, X);
      for (let de = 0; de < Z; de++)
        if (ve(l.addDays(G, de))) return !0;
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
        const X = String(G + 1).padStart(2, "0"), ve = l.parseISO(`${h.value}-${X}-01`);
        return A(ve, l.endOfMonth(ve));
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
    function R() {
      if (h.value++, c.value) {
        const G = String(m.value + 1).padStart(2, "0"), X = l.parseISO(`${h.value}-${G}-01`);
        l.isAfter(X, c.value) && (m.value = l.getMonth(c.value));
      }
      H();
    }
    function Q() {
      if (h.value--, u.value) {
        const G = String(m.value + 1).padStart(2, "0"), X = l.endOfMonth(l.parseISO(`${h.value}-${G}-01`));
        l.isAfter(u.value, X) && (m.value = l.getMonth(u.value));
      }
      H();
    }
    function q() {
      s.value = "month";
    }
    function O() {
      s.value = s.value === "months" ? "month" : "months";
    }
    function ne() {
      s.value = s.value === "year" ? "month" : "year";
    }
    function K() {
      s.value === "months" && O();
    }
    function H() {
      s.value === "year" && ne();
    }
    return ue(r, (G, X) => {
      const ve = Ke(X), Z = Ke(G);
      if (!Z.length) return;
      const de = l.date(ve[ve.length - 1]), xe = l.date(Z[Z.length - 1]);
      if (l.isSameDay(de, xe)) return;
      const Ce = l.getMonth(xe), _e = l.getYear(xe);
      Ce !== m.value && (m.value = Ce, K()), _e !== h.value && (h.value = _e, H()), x.value = l.isBefore(de, xe);
    }), te(() => {
      const G = Dl.filterProps(e), X = Ee(Ks.filterProps(e), ["viewMode"]), ve = Gs.filterProps(e), Z = qs.filterProps(e), de = Ee(Xs.filterProps(e), ["modelValue"]), xe = Ee(Zs.filterProps(e), ["modelValue"]), Ce = {
        color: v.value,
        header: w.value,
        transition: C.value
      };
      return p(Dl, U(G, {
        color: v.value,
        class: ["v-date-picker", `v-date-picker--${s.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, o.value, e.class],
        style: [{
          "--v-date-picker-landscape-header-width": ce(e.landscapeHeaderWidth)
        }, e.style]
      }), {
        title: () => a.title?.() ?? V("div", {
          class: "v-date-picker__title"
        }, [i(e.title)]),
        header: () => a.header ? p(Te, {
          defaults: {
            VDatePickerHeader: {
              ...Ce
            }
          }
        }, {
          default: () => [a.header?.(Ce)]
        }) : p(Gs, U({
          key: "header"
        }, ve, Ce, {
          onClick: s.value !== "month" ? q : void 0
        }), {
          prepend: a.prepend,
          append: a.append
        }),
        default: () => V(he, null, [p(Ks, U(X, {
          disabled: T.value,
          viewMode: s.value,
          text: S.value,
          monthText: g.value,
          yearText: I.value,
          "onClick:next": L,
          "onClick:prev": W,
          "onClick:nextYear": R,
          "onClick:prevYear": Q,
          "onClick:month": O,
          "onClick:year": ne
        }), {
          default: a.controls
        }), p(ki, {
          hideOnLeave: !0
        }, {
          default: () => [s.value === "months" ? p(Xs, U({
            key: "date-picker-months"
          }, de, {
            modelValue: m.value,
            "onUpdate:modelValue": [(_e) => m.value = _e, K],
            min: u.value,
            max: c.value,
            year: h.value,
            allowedMonths: F.value
          }), {
            month: a.month
          }) : s.value === "year" ? p(Zs, U({
            key: "date-picker-years"
          }, xe, {
            modelValue: h.value,
            "onUpdate:modelValue": [(_e) => h.value = _e, H],
            min: u.value,
            max: c.value,
            allowedYears: P.value
          }), {
            year: a.year
          }) : p(qs, U({
            key: "date-picker-month"
          }, Z, {
            modelValue: r.value,
            "onUpdate:modelValue": (_e) => r.value = _e,
            month: m.value,
            "onUpdate:month": [(_e) => m.value = _e, K],
            year: h.value,
            "onUpdate:year": [(_e) => h.value = _e, H],
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
}), D_ = N({
  actionText: String,
  bgColor: String,
  color: String,
  icon: pe,
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
  ...be(),
  ...ut(),
  ...Ln({
    size: void 0
  }),
  ...$e()
}, "VEmptyState"), E_ = J()({
  name: "VEmptyState",
  props: D_(),
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
    } = Re(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = He(() => e.bgColor), {
      dimensionStyles: r
    } = ct(e), {
      displayClasses: s
    } = nn();
    function u(c) {
      n("click:action", c);
    }
    return te(() => {
      const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), k = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
      return V("div", {
        class: ee(["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class]),
        style: fe([o.value, r.value, e.style])
      }, [k && V("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? p(Te, {
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
      }) : V(he, null, [e.image ? p(Xn, {
        key: "image",
        src: e.image,
        height: m
      }, null) : e.icon ? p(Ne, {
        key: "icon",
        color: e.color,
        size: m,
        icon: e.icon
      }, null) : void 0])]), d && V("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [a.headline?.() ?? e.headline]), f && V("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [a.title?.() ?? e.title]), v && V("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: ce(e.textWidth)
        }
      }, [a.text?.() ?? e.text]), a.default && V("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), c && V("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [p(Te, {
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
        }) ?? p(Fe, {
          onClick: u
        }, null)]
      })])]);
    }), {};
  }
}), Ai = /* @__PURE__ */ Symbol.for("vuetify:v-expansion-panel"), Ny = N({
  ...be(),
  ...ac()
}, "VExpansionPanelText"), Js = J()({
  name: "VExpansionPanelText",
  props: Ny(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(Ai);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = lc(e, a.isSelected);
    return te(() => p(ir, {
      onAfterLeave: i
    }, {
      default: () => [Ue(V("div", {
        class: ee(["v-expansion-panel-text", e.class]),
        style: fe(e.style)
      }, [n.default && l.value && V("div", {
        class: "v-expansion-panel-text__wrapper"
      }, [n.default?.()])]), [[kn, a.isSelected.value]])]
    })), {};
  }
}), Ry = N({
  color: String,
  expandIcon: {
    type: pe,
    default: "$expand"
  },
  collapseIcon: {
    type: pe,
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
  ...be(),
  ...ut()
}, "VExpansionPanelTitle"), Qs = J()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: Vt
  },
  props: Ry(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(Ai);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = He(() => e.color), {
      dimensionStyles: o
    } = ct(e), r = _(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = /* @__PURE__ */ E(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return te(() => Ue(V("button", {
      class: ee(["v-expansion-panel-title", {
        "v-expansion-panel-title--active": a.isSelected.value,
        "v-expansion-panel-title--focusable": e.focusable,
        "v-expansion-panel-title--static": e.static
      }, l.value, e.class]),
      style: fe([i.value, o.value, e.style]),
      type: "button",
      tabindex: a.disabled.value ? -1 : void 0,
      disabled: a.disabled.value,
      "aria-expanded": a.isSelected.value,
      onClick: e.readonly ? void 0 : a.toggle
    }, [V("span", {
      class: "v-expansion-panel-title__overlay"
    }, null), n.default?.(r.value), !e.hideActions && p(Te, {
      defaults: {
        VIcon: {
          icon: s.value
        }
      }
    }, {
      default: () => [V("span", {
        class: "v-expansion-panel-title__icon"
      }, [n.actions?.(r.value) ?? p(Ne, null, null)])]
    })]), [[Vt, e.ripple]])), {};
  }
}), Hy = N({
  title: String,
  text: String,
  bgColor: String,
  ...dt(),
  ...ll(),
  ...qe(),
  ...Pe(),
  ...Ry(),
  ...Ny()
}, "VExpansionPanel"), M_ = J()({
  name: "VExpansionPanel",
  props: Hy(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ya(e, Ai), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = He(() => e.bgColor), {
      elevationClasses: o
    } = ht(e), {
      roundedClasses: r
    } = Je(e), s = /* @__PURE__ */ E(() => a?.disabled.value || e.disabled), u = _(() => a.group.items.value.reduce((f, v, k) => (a.group.selected.value.includes(v.id) && f.push(k), f), [])), c = _(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === 1);
    }), d = _(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === -1);
    });
    return Ge(Ai, a), te(() => {
      const f = !!(n.text || e.text), v = !!(n.title || e.title), k = Qs.filterProps(e), m = Js.filterProps(e);
      return p(e.tag, {
        class: ee(["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": c.value,
          "v-expansion-panel--after-active": d.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class]),
        style: fe([i.value, e.style])
      }, {
        default: () => [V("div", {
          class: ee(["v-expansion-panel__shadow", ...o.value])
        }, null), p(Te, {
          defaults: {
            VExpansionPanelTitle: {
              ...k
            },
            VExpansionPanelText: {
              ...m
            }
          }
        }, {
          default: () => [v && p(Qs, {
            key: "title"
          }, {
            default: () => [n.title ? n.title() : e.title]
          }), f && p(Js, {
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
}), B_ = ["default", "accordion", "inset", "popout"], F_ = N({
  flat: Boolean,
  ...al(),
  ...zt(Hy(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...$e(),
  ...be(),
  ...Pe(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => B_.includes(e)
  }
}, "VExpansionPanels"), L_ = J()({
  name: "VExpansionPanels",
  props: F_(),
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
    } = xa(e, Ai), {
      themeClasses: i
    } = Re(e), o = /* @__PURE__ */ E(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return nt({
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
      }, i.value, o.value, e.class]),
      style: fe(e.style)
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
}), $_ = N({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Ee(sr({
    active: !0
  }), ["location", "spaced"]),
  ...el(),
  ...aa(),
  ...ea({
    transition: "fab-transition"
  })
}, "VFab"), O_ = J()({
  name: "VFab",
  props: $_(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), l = /* @__PURE__ */ se(56), i = /* @__PURE__ */ ae(), {
      resizeRef: o
    } = cn((d) => {
      d.length && (l.value = d[0].target.clientHeight);
    }), r = /* @__PURE__ */ E(() => e.app || e.absolute), s = _(() => r.value ? e.location?.split(" ").shift() ?? "bottom" : !1), u = _(() => r.value ? e.location?.split(" ")[1] ?? "end" : !1);
    It(() => e.app, () => {
      const d = tl({
        id: e.name,
        order: _(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: _(() => e.layout ? l.value + 24 : 0),
        elementSize: _(() => l.value + 24),
        active: _(() => e.app && a.value),
        absolute: /* @__PURE__ */ E(() => e.absolute)
      });
      tt(() => {
        i.value = d.layoutItemStyles.value;
      });
    });
    const c = /* @__PURE__ */ ae();
    return te(() => {
      const d = Fe.filterProps(e);
      return V("div", {
        ref: c,
        class: ee(["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${u.value}`]: r.value
        }, e.class]),
        style: fe([e.app ? {
          ...i.value
        } : {
          height: e.absolute ? "100%" : "inherit"
        }, e.style])
      }, [V("div", {
        class: "v-fab__container"
      }, [p(Lt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [Ue(p(Fe, U({
          ref: o
        }, d, {
          active: void 0,
          location: void 0
        }), n), [[kn, e.active]])]
      })])]);
    }), {};
  }
});
function N_() {
  function e(n) {
    return [...n.dataTransfer?.items ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...n.dataTransfer?.files ?? []].length > 0;
  }
  async function t(n) {
    const a = [], l = [...n.dataTransfer?.items ?? []].filter((i) => i.kind === "file").map((i) => i.webkitGetAsEntry()).filter(Boolean);
    if (l.length)
      for (const i of l) {
        const o = await Wy(i, zy(".", i));
        a.push(...o.map((r) => r.file));
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
    e.isFile ? e.file((i) => n([{
      file: i,
      path: t
    }]), a) : e.isDirectory && e.createReader().readEntries(async (i) => {
      const o = [];
      for (const r of i)
        o.push(...await Wy(r, zy(t, r)));
      n(o);
    });
  });
}
function zy(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const R_ = N({
  filterByType: String
}, "file-accept");
function H_(e) {
  const t = _(() => e.filterByType ? W_(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return {
        accepted: l,
        rejected: a.filter((i) => !l.includes(i))
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
function W_(e) {
  const t = e.split(",").map((i) => i.trim().toLowerCase()), n = t.filter((i) => i.startsWith(".")), a = t.filter((i) => i.endsWith("/*")), l = t.filter((i) => !n.includes(i) && !a.includes(i));
  return (i) => {
    const o = i.name.split(".").at(-1)?.toLowerCase() ?? "", r = i.type.split("/").at(0)?.toLowerCase() ?? "";
    return l.includes(i.type) || n.includes(`.${o}`) || a.includes(`${r}/*`);
  };
}
const z_ = N({
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
  ...Ee(ia({
    prependIcon: "$file"
  }), ["direction"]),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Ke(e).every((t) => t != null && typeof t == "object")
  },
  ...R_(),
  ...Ki({
    clearable: !0
  })
}, "VFileInput"), j_ = J()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: z_(),
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
      t: i
    } = je(), {
      filterAccepted: o
    } = H_(e), r = ke(e, "modelValue", e.modelValue, (q) => Ke(q), (q) => !e.multiple && Array.isArray(q) ? q[0] : q), {
      isFocused: s,
      focus: u,
      blur: c
    } = la(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((q, O) => {
      let {
        size: ne = 0
      } = O;
      return q + ne;
    }, 0)), v = _(() => Pd(f.value, d.value)), k = _(() => (r.value ?? []).map((q) => {
      const {
        name: O = "",
        size: ne = 0
      } = q, K = B(O);
      return e.showSize ? `${K} (${Pd(ne, d.value)})` : K;
    })), m = _(() => {
      const q = r.value?.length ?? 0;
      return e.showSize ? i(e.counterSizeString, q, v.value) : i(e.counterString, q);
    }), y = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), w = /* @__PURE__ */ E(() => s.value || e.active), b = _(() => ["plain", "underlined"].includes(e.variant)), S = /* @__PURE__ */ se(!1), {
      handleDrop: g,
      hasFilesOrFolders: I
    } = N_();
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
      q.stopPropagation(), C(), Ie(() => {
        r.value = [], Li(e["onClick:clear"], q);
      });
    }
    function B(q) {
      if (q.length < Number(e.truncateLength)) return q;
      const O = Math.floor((Number(e.truncateLength) - 1) / 2);
      return `${q.slice(0, O)}…${q.slice(q.length - O)}`;
    }
    function D(q) {
      q.preventDefault(), q.stopImmediatePropagation(), S.value = !0;
    }
    function L(q) {
      q.preventDefault(), S.value = !1;
    }
    async function W(q) {
      if (q.preventDefault(), q.stopImmediatePropagation(), S.value = !1, !x.value || !I(q)) return;
      const O = await g(q);
      Q(O);
    }
    function R(q) {
      if (!(!q.target || q.repack))
        if (e.filterByType)
          Q([...q.target.files]);
        else {
          const O = q.target;
          r.value = [...O.files ?? []];
        }
    }
    function Q(q) {
      const O = new DataTransfer(), {
        accepted: ne,
        rejected: K
      } = o(q);
      K.length && a("rejected", K);
      for (const G of ne)
        O.items.add(G);
      x.value.files = O.files, r.value = [...O.files];
      const H = new Event("change", {
        bubbles: !0
      });
      H.repack = !0, x.value.dispatchEvent(H);
    }
    return ue(r, (q) => {
      (!Array.isArray(q) || !q.length) && x.value && (x.value.value = "");
    }), te(() => {
      const q = !!(l.counter || e.counter), O = !!(q || l.details), [ne, K] = Bn(n), {
        modelValue: H,
        ...G
      } = Pt.filterProps(e), X = {
        ...ka.filterProps(e),
        "onClick:clear": A
      }, ve = n.webkitdirectory !== void 0 && n.webkitdirectory !== !1, Z = n.accept ? String(n.accept) : void 0, de = ve ? void 0 : e.filterByType ?? Z;
      return p(Pt, U({
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
        default: (xe) => {
          let {
            id: Ce,
            isDisabled: _e,
            isDirty: M,
            isReadonly: $,
            isValid: j,
            hasDetails: re
          } = xe;
          return p(ka, U({
            ref: h,
            prependIcon: e.prependIcon,
            onMousedown: P,
            onClick: F,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, X, {
            id: Ce.value,
            active: w.value || M.value,
            dirty: M.value || e.dirty,
            disabled: _e.value,
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
                  class: oe,
                  ...me
                },
                controlRef: Y
              } = z;
              return V(he, null, [V("input", U({
                ref: (le) => x.value = Y.value = le,
                type: "file",
                accept: de,
                readonly: $.value,
                disabled: _e.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (le) => {
                  le.stopPropagation(), $.value && le.preventDefault(), C();
                },
                onChange: R,
                onDragleave: L,
                onFocus: C,
                onBlur: c
              }, me, K), null), V("div", {
                class: ee(oe)
              }, [!!r.value?.length && !e.hideInput && (l.selection ? l.selection({
                fileNames: k.value,
                totalBytes: f.value,
                totalBytesReadable: v.value
              }) : e.chips ? k.value.map((le) => p(Zn, {
                key: le,
                size: "small",
                text: le
              }, null)) : k.value.join(", "))])]);
            }
          });
        },
        details: O ? (xe) => V(he, null, [l.details?.(xe), q && V(he, null, [V("span", null, null), p(cr, {
          active: !!r.value?.length,
          value: m.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), yt({}, y, h, x);
  }
}), Y_ = N({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Dt(),
  ...be(),
  ...dt(),
  ...el(),
  ...qe(),
  ...Pe({
    tag: "footer"
  }),
  ...$e()
}, "VFooter"), U_ = J()({
  name: "VFooter",
  props: Y_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), {
      themeClasses: l
    } = Re(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = He(() => e.color), {
      borderClasses: r
    } = Ot(e), {
      elevationClasses: s
    } = ht(e), {
      roundedClasses: u
    } = Je(e), c = /* @__PURE__ */ se(32), {
      resizeRef: d
    } = cn((v) => {
      v.length && (c.value = v[0].target.clientHeight);
    }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
    return It(() => e.app, () => {
      const v = tl({
        id: e.name,
        order: _(() => parseInt(e.order, 10)),
        position: /* @__PURE__ */ E(() => "bottom"),
        layoutSize: f,
        elementSize: _(() => e.height === "auto" ? void 0 : f.value),
        active: /* @__PURE__ */ E(() => e.app),
        absolute: /* @__PURE__ */ E(() => e.absolute)
      });
      tt(() => {
        a.value = v.layoutItemStyles.value;
      });
    }), te(() => p(e.tag, {
      ref: d,
      class: ee(["v-footer", l.value, i.value, r.value, s.value, u.value, e.class]),
      style: fe([o.value, e.app ? a.value : {
        height: ce(e.height)
      }, e.style])
    }, n)), {};
  }
}), K_ = N({
  ...be(),
  ...tx()
}, "VForm"), G_ = J()({
  name: "VForm",
  props: K_(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = nx(e), i = /* @__PURE__ */ ae();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const u = s, c = l.validate();
      u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
        let {
          valid: f
        } = d;
        f && i.value?.submit();
      }), u.preventDefault();
    }
    return te(() => V("form", {
      ref: i,
      class: ee(["v-form", e.class]),
      style: fe(e.style),
      novalidate: !0,
      onReset: o,
      onSubmit: r
    }, [n.default?.(l)])), yt(l, i);
  }
}), q_ = N({
  color: String,
  ...Dt(),
  ...be(),
  ...qe(),
  ...Pe({
    tag: "kbd"
  }),
  ...$e(),
  ...dt()
}, "VKbd"), eu = J()({
  name: "VKbd",
  props: q_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      borderClasses: l
    } = Ot(e), {
      roundedClasses: i
    } = Je(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: r
    } = He(() => e.color), {
      elevationClasses: s
    } = ht(e);
    return te(() => p(e.tag, {
      class: ee(["v-kbd", a.value, o.value, l.value, s.value, i.value, e.class]),
      style: fe([r.value, e.style])
    }, n)), {};
  }
});
function jy(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let i = a[l] ?? a.text;
  return l === "text" && typeof i == "string" && i.startsWith("$") && !i.startsWith("$vuetify.") && (i = i.slice(1).toUpperCase()), l === "icon" ? ["icon", i] : [l, i];
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
}, X_ = N({
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
  ...be(),
  ...$e(),
  ...Dt(),
  ...qe(),
  ...dt(),
  color: String
}, "VHotkey"), Qr = /* @__PURE__ */ Symbol("VHotkey:AND_DELINEATOR"), es = /* @__PURE__ */ Symbol("VHotkey:SLASH_DELINEATOR"), Af = /* @__PURE__ */ Symbol("VHotkey:THEN_DELINEATOR");
function Z_(e, t, n) {
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
    const i = jy(e[l], t, a);
    return i[0] === "text" && typeof i[1] == "string" && i[1].startsWith("$") && !i[1].startsWith("$vuetify.") ? ["text", i[1].replace("$", "").toUpperCase(), n] : [...i, n];
  }
  return ["text", n.toUpperCase(), n];
}
const J_ = J()({
  name: "VHotkey",
  props: X_(),
  setup(e) {
    const {
      t
    } = je(), {
      themeClasses: n
    } = Re(e), {
      rtlClasses: a
    } = ft(), {
      borderClasses: l
    } = Ot(e), {
      roundedClasses: i
    } = Je(e), {
      elevationClasses: o
    } = ht(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: u
    } = na(() => ({
      color: e.color,
      variant: e.variant === "contained" ? "elevated" : e.variant
    })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
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
          C > 0 && x.push(I[C - 1] === "/" ? es : Qr), x.push(Df(e.keyMap, e.displayMode, T, c.value));
        }
      }
      return x;
    }) : []), f = _(() => {
      if (!e.keys) return "";
      const x = d.value.map((w) => {
        const b = [];
        for (const S of w)
          if (Array.isArray(S)) {
            const g = S[0] === "icon" || S[0] === "symbol" ? Df(_t(Yy, e.keyMap), "text", String(S[1]), c.value)[1] : S[1];
            b.push(v(g));
          } else
            S === Qr ? b.push(t("$vuetify.hotkey.plus")) : S === es ? b.push(t("$vuetify.hotkey.or")) : S === Af && b.push(t("$vuetify.hotkey.then"));
        return b.join(" ");
      }).join(", ");
      return t("$vuetify.hotkey.shortcut", x);
    });
    function v(h) {
      return h.startsWith("$vuetify.") ? t(h) : h;
    }
    function k(h) {
      if (e.displayMode === "text") return;
      const x = Z_(e.keyMap, String(h[2]), c.value);
      return v(x);
    }
    function m(h, x) {
      const w = e.variant === "contained", b = w ? "kbd" : eu, S = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...w ? ["v-hotkey__key--nested"] : [l.value, i.value, o.value, r.value]];
      return p(b, {
        key: x,
        class: ee(S),
        style: fe(w ? void 0 : s.value),
        "aria-hidden": "true",
        title: k(h)
      }, {
        default: () => [h[0] === "icon" ? p(Ne, {
          icon: h[1],
          "aria-hidden": "true"
        }, null) : v(h[1])]
      });
    }
    function y(h, x) {
      return V("span", {
        key: x,
        class: "v-hotkey__divider",
        "aria-hidden": "true"
      }, [h === Qr ? "+" : h === es ? "/" : t("$vuetify.hotkey.then")]);
    }
    te(() => {
      const h = V(he, null, [e.prefix && V("span", {
        key: "prefix",
        class: "v-hotkey__prefix"
      }, [e.prefix]), d.value.map((x, w) => V("span", {
        class: "v-hotkey__combination",
        key: w
      }, [x.map((b, S) => Array.isArray(b) ? m(b, S) : y(b, S)), w < d.value.length - 1 && V("span", {
        "aria-hidden": "true"
      }, [Ut(" ")])])), e.suffix && V("span", {
        key: "suffix",
        class: "v-hotkey__suffix"
      }, [e.suffix])]);
      return V("div", {
        class: ee(["v-hotkey", {
          "v-hotkey--disabled": e.disabled,
          "v-hotkey--inline": e.inline,
          "v-hotkey--contained": e.variant === "contained"
        }, n.value, a.value, u.value, e.class]),
        style: fe(e.style),
        role: "img",
        "aria-label": f.value
      }, [e.variant !== "contained" ? h : p(eu, {
        key: "contained",
        class: ee(["v-hotkey__contained-wrapper", l.value, i.value, o.value, r.value]),
        style: fe(s.value),
        "aria-hidden": "true"
      }, {
        default: () => [h]
      })]);
    });
  }
}), Q_ = N({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...tc()
}, "VHover"), eI = J()({
  name: "VHover",
  props: Q_(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = nc(e, (o) => !e.disabled && (a.value = o));
    return () => n.default?.({
      isHovering: a.value,
      props: {
        onMouseenter: l,
        onMouseleave: i
      }
    });
  }
}), tI = N({
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
  ...ut(),
  ...Pe()
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
    } = Ni();
    return ue(l, async (i) => {
      n("intersect", e.side, i);
    }), te(() => V("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [Ut(" ")])), {};
  }
}), nI = J()({
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
    const l = /* @__PURE__ */ ae(), i = /* @__PURE__ */ se("ok"), o = /* @__PURE__ */ se("ok"), r = _(() => ce(e.margin)), s = /* @__PURE__ */ se(!1);
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
    gt(() => {
      l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
    });
    function v(g, I) {
      g === "start" ? i.value = I : g === "end" ? o.value = I : g === "both" && (i.value = I, o.value = I);
    }
    function k(g) {
      return g === "start" ? i.value : o.value;
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
        v(g, T), Ie(() => {
          T === "empty" || T === "error" || (T === "ok" && g === "start" && u(d() - m + c()), e.mode !== "manual" && Ie(() => {
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
    } = je();
    function w(g, I) {
      if (e.side !== g && e.side !== "both") return;
      const C = () => h(g), T = {
        side: g,
        props: {
          onClick: C,
          color: e.color
        }
      };
      return I === "error" ? n.error?.(T) : I === "empty" ? n.empty?.(T) ?? V("div", null, [x(e.emptyText)]) : e.mode === "manual" ? I === "loading" ? n.loading?.(T) ?? p(ba, {
        indeterminate: !0,
        color: e.color
      }, null) : n["load-more"]?.(T) ?? p(Fe, {
        variant: "outlined",
        color: e.color,
        onClick: C
      }, {
        default: () => [x(e.loadMoreText)]
      }) : n.loading?.(T) ?? p(ba, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: b
    } = ct(e);
    te(() => {
      const g = e.tag, I = e.side === "start" || e.side === "both", C = e.side === "end" || e.side === "both", T = e.mode === "intersect";
      return p(g, {
        ref: l,
        class: ee(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": I,
          "v-infinite-scroll--end": C
        }]),
        style: fe(b.value)
      }, {
        default: () => [V("div", {
          class: "v-infinite-scroll__side"
        }, [w("start", i.value)]), I && T && p(Ef, {
          key: "start",
          side: "start",
          onIntersect: y,
          rootMargin: r.value
        }, null), n.default?.(), C && T && p(Ef, {
          key: "end",
          side: "end",
          onIntersect: y,
          rootMargin: r.value
        }, null), V("div", {
          class: "v-infinite-scroll__side"
        }, [w("end", o.value)])]
      });
    });
    function S(g) {
      const I = g ?? e.side;
      v(I, "ok"), Ie(() => {
        I !== "end" && u(d() - m + c()), e.mode !== "manual" && Ie(() => {
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
}), Uy = /* @__PURE__ */ Symbol.for("vuetify:v-item-group"), aI = N({
  ...be(),
  ...al({
    selectedClass: "v-item--selected"
  }),
  ...Pe(),
  ...$e()
}, "VItemGroup"), lI = J()({
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
    } = Re(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = xa(e, Uy);
    return () => p(e.tag, {
      class: ee(["v-item-group", a.value, e.class]),
      style: fe(e.style)
    }, {
      default: () => [n.default?.({
        isSelected: l,
        select: i,
        next: o,
        prev: r,
        selected: s.value
      })]
    });
  }
}), iI = J()({
  name: "VItem",
  props: ll(),
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
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: s
    } = ya(e, Uy);
    return () => n.default?.({
      isSelected: a.value,
      selectedClass: o.value,
      select: l,
      toggle: i,
      value: r.value,
      disabled: s.value
    });
  }
}), oI = N({
  ...be(),
  ...ut(),
  ...Zm()
}, "VLayout"), rI = J()({
  name: "VLayout",
  props: oI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Qm(e), {
      dimensionStyles: s
    } = ct(e);
    return te(() => V("div", {
      ref: r,
      class: ee([a.value, e.class]),
      style: fe([s.value, l.value, e.style])
    }, [n.default?.()])), {
      getLayoutItem: i,
      items: o
    };
  }
}), sI = N({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...be(),
  ...el()
}, "VLayoutItem"), uI = J()({
  name: "VLayoutItem",
  props: sI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutItemStyles: a
    } = tl({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ E(() => e.position),
      elementSize: /* @__PURE__ */ E(() => e.size),
      layoutSize: /* @__PURE__ */ E(() => e.size),
      active: /* @__PURE__ */ E(() => e.modelValue),
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return () => V("div", {
      class: ee(["v-layout-item", e.class]),
      style: fe([a.value, e.style])
    }, [n.default?.()]);
  }
}), cI = N({
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
  ...be(),
  ...ut(),
  ...Pe(),
  ...ea({
    transition: "fade-transition"
  })
}, "VLazy"), dI = J()({
  name: "VLazy",
  directives: {
    vIntersect: bn
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
    } = ct(e), l = ke(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return te(() => Ue(p(e.tag, {
      class: ee(["v-lazy", e.class]),
      style: fe([a.value, e.style])
    }, {
      default: () => [l.value && p(Lt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [n.default?.()]
      })]
    }), [[bn, {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), fI = N({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...be()
}, "VLocaleProvider"), vI = J()({
  name: "VLocaleProvider",
  props: fI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = Hm(e);
    return te(() => V("div", {
      class: ee(["v-locale-provider", a.value, e.class]),
      style: fe(e.style)
    }, [n.default?.()])), {};
  }
}), mI = N({
  scrollable: Boolean,
  ...be(),
  ...ut(),
  ...Pe({
    tag: "main"
  })
}, "VMain"), gI = J()({
  name: "VMain",
  props: mI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ct(e), {
      mainStyles: l
    } = Jm(), {
      ssrBootStyles: i
    } = nl();
    return te(() => p(e.tag, {
      class: ee(["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class]),
      style: fe([l.value, i.value, a.value, e.style])
    }, {
      default: () => [e.scrollable ? V("div", {
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
  const l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(0), o = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [u]: ce(i.value)
    } : {
      top: a.value.top
    }];
  });
  gt(() => {
    ue(n, (u) => {
      u ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), At(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - d), v = c.height + Math.max(i.value, d) - window.scrollY - window.innerHeight, k = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", i.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (i.value = window.scrollY + c.top - k, l.value = !0) : u === "down" && v <= 0 ? (i.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (k ? l.value !== "top" && (i.value = -f + k + d, l.value = "top") : (i.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
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
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new xm(bI))).push([l.timeStamp, i]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    const i = e[l]?.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const u of i) {
      if (o[0] - u[0] > yI) break;
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
    touchless: i,
    position: o
  } = e;
  gt(() => {
    window.addEventListener("touchstart", x, {
      passive: !0
    }), window.addEventListener("touchmove", w, {
      passive: !1
    }), window.addEventListener("touchend", b, {
      passive: !0
    });
  }), At(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", w), window.removeEventListener("touchend", b);
  });
  const r = _(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: u,
    getVelocity: c
  } = SI();
  let d = !1;
  const f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(0), k = /* @__PURE__ */ se(0);
  let m;
  function y(g, I) {
    return (o.value === "left" ? g : o.value === "right" ? document.documentElement.clientWidth - g : o.value === "top" ? g : o.value === "bottom" ? document.documentElement.clientHeight - g : dl()) - (I ? l.value : 0);
  }
  function h(g) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const C = o.value === "left" ? (g - k.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - g - k.value) / l.value : o.value === "top" ? (g - k.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - g - k.value) / l.value : dl();
    return I ? We(C) : C;
  }
  function x(g) {
    if (i.value) return;
    const I = g.changedTouches[0].clientX, C = g.changedTouches[0].clientY, T = 25, P = o.value === "left" ? I < T : o.value === "right" ? I > document.documentElement.clientWidth - T : o.value === "top" ? C < T : o.value === "bottom" ? C > document.documentElement.clientHeight - T : dl(), F = n.value && (o.value === "left" ? I < l.value : o.value === "right" ? I > document.documentElement.clientWidth - l.value : o.value === "top" ? C < l.value : o.value === "bottom" ? C > document.documentElement.clientHeight - l.value : dl());
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
    }[o.value] || dl()) : n.value = v.value > 0.5;
  }
  const S = _(() => f.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : dl(),
    transition: "none"
  } : void 0);
  return It(f, () => {
    const g = t.value?.style.transform ?? null, I = t.value?.style.transition ?? null;
    tt(() => {
      t.value?.style.setProperty("transform", S.value?.transform || "none"), t.value?.style.setProperty("transition", S.value?.transition || null);
    }), at(() => {
      t.value?.style.setProperty("transform", g), t.value?.style.setProperty("transition", I);
    });
  }), {
    isDragging: f,
    dragProgress: v,
    dragStyles: S
  };
}
function dl() {
  throw new Error();
}
const pI = ["start", "end", "left", "right", "top", "bottom"], xI = N({
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
  ...Dt(),
  ...be(),
  ...tc(),
  ...Qa({
    mobile: null
  }),
  ...dt(),
  ...el(),
  ...qe(),
  ...Ee(th(), ["disableInitialFocus"]),
  ...Pe({
    tag: "nav"
  }),
  ...$e()
}, "VNavigationDrawer"), CI = J()({
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
      isRtl: i
    } = ft(), {
      themeClasses: o
    } = Re(e), {
      borderClasses: r
    } = Ot(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: u
    } = He(() => e.color), {
      elevationClasses: c
    } = ht(e), {
      displayClasses: d,
      mobile: f
    } = nn(e), {
      roundedClasses: v
    } = Je(e), k = fg(), m = ke(e, "modelValue", null, (O) => !!O), {
      ssrBootStyles: y
    } = nl(), {
      scopeId: h
    } = ol(), x = /* @__PURE__ */ ae(), w = /* @__PURE__ */ se(!1), {
      runOpenDelay: b,
      runCloseDelay: S
    } = nc(e, (O) => {
      w.value = O;
    }), g = _(() => e.rail && e.expandOnHover && w.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), I = _(() => bs(e.location, i.value)), C = /* @__PURE__ */ E(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && I.value !== "bottom");
    nh(e, {
      isActive: m,
      localTop: T,
      contentEl: x
    }), It(() => e.expandOnHover && e.rail != null, () => {
      ue(w, (O) => a("update:rail", !O));
    }), It(() => !e.disableResizeWatcher, () => {
      ue(T, (O) => !e.permanent && Ie(() => m.value = !O));
    }), It(() => !e.disableRouteWatcher && !!k, () => {
      ue(k.currentRoute, () => T.value && (m.value = !1));
    }), ue(() => e.permanent, (O) => {
      O && (m.value = !0);
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
    }), B = _(() => {
      const O = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
      return F.value ? O * A.value : O;
    }), {
      layoutItemStyles: D,
      layoutItemScrimStyles: L
    } = tl({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: I,
      layoutSize: B,
      elementSize: g,
      active: /* @__PURE__ */ Ha(m),
      disableTransitions: /* @__PURE__ */ E(() => F.value),
      absolute: _(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || P.value && typeof W.value != "string"
      ))
    }), {
      isStuck: W,
      stickyStyles: R
    } = hI({
      rootEl: x,
      isSticky: P,
      layoutItemStyles: D
    }), Q = He(() => typeof e.scrim == "string" ? e.scrim : null), q = _(() => ({
      ...F.value ? {
        opacity: A.value * 0.2,
        transition: "none"
      } : void 0,
      ...L.value
    }));
    return nt({
      VList: {
        bgColor: "transparent"
      }
    }), te(() => {
      const O = l.image || e.image;
      return V(he, null, [p(e.tag, U({
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
        }, o.value, s.value, r.value, d.value, c.value, v.value, e.class],
        style: [u.value, D.value, y.value, R.value, e.style],
        inert: !m.value
      }, h, n), {
        default: () => [O && V("div", {
          key: "image",
          class: "v-navigation-drawer__img"
        }, [l.image ? p(Te, {
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
        }, l.image) : p(Xn, {
          key: "image-img",
          alt: "",
          cover: !0,
          height: "inherit",
          src: e.image
        }, null)]), l.prepend && V("div", {
          class: "v-navigation-drawer__prepend"
        }, [l.prepend?.()]), V("div", {
          class: "v-navigation-drawer__content"
        }, [l.default?.()]), l.append && V("div", {
          class: "v-navigation-drawer__append"
        }, [l.append?.()])]
      }), p(ga, {
        name: "fade-transition"
      }, {
        default: () => [T.value && (F.value || m.value) && !!e.scrim && V("div", U({
          class: ["v-navigation-drawer__scrim", Q.backgroundColorClasses.value],
          style: [q.value, Q.backgroundColorStyles.value],
          onClick: () => {
            C.value || (m.value = !1);
          }
        }, h), null)]
      })]);
    }), {
      isStuck: W
    };
  }
}), VI = $t({
  name: "VNoSsr",
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ah();
    return () => a.value && n.default?.();
  }
}), _I = 50, II = 500;
function PI(e) {
  let {
    toggleUpDown: t
  } = e, n = -1, a = -1;
  at(i);
  function l(r) {
    i(), o(r), window.addEventListener("pointerup", i), document.addEventListener("blur", i), n = window.setTimeout(() => {
      a = window.setInterval(() => o(r), _I);
    }, II);
  }
  function i() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", i), document.removeEventListener("blur", i);
  }
  at(i);
  function o(r) {
    t(r === "up");
  }
  return {
    holdStart: l,
    holdStop: i
  };
}
const TI = N({
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
  ...Ee(Gi(), ["modelValue", "validationValue"])
}, "VNumberInput"), AI = J()({
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
      holdStop: i
    } = PI({
      toggleUpDown: F
    }), o = Ol(e), r = _(() => o.isDisabled.value || o.isReadonly.value), s = /* @__PURE__ */ se(e.focused), {
      decimalSeparator: u
    } = je(), c = _(() => e.decimalSeparator?.[0] || u.value);
    function d(H) {
      let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      const ve = G == null ? String(H) : H.toFixed(G);
      if (s.value && X)
        return Number(ve).toString().replace(".", c.value);
      if (e.minFractionDigits === null || G !== null && G < e.minFractionDigits)
        return ve.replace(".", c.value);
      let [Z, de] = ve.split(".");
      return de = (de ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [Z, de].filter(Boolean).join(c.value);
    }
    const f = ke(e, "modelValue", null, (H) => H ?? null, (H) => H == null ? H ?? null : We(Number(H), e.min, e.max)), v = /* @__PURE__ */ se(null), k = /* @__PURE__ */ se(null);
    ue(f, (H) => {
      s.value && !r.value && Number(v.value?.replace(c.value, ".")) === H || (H == null ? (v.value = null, k.value = null) : isNaN(H) || (v.value = d(H), k.value = Number(v.value.replace(c.value, "."))));
    }, {
      immediate: !0
    });
    const m = _({
      get: () => v.value,
      set(H) {
        if (H === null || H === "") {
          f.value = null, v.value = null, k.value = null;
          return;
        }
        const G = Number(H.replace(c.value, "."));
        isNaN(G) || (v.value = H, k.value = G, G <= e.max && G >= e.min && (f.value = G));
      }
    }), y = _(() => {
      if (k.value === null) return !1;
      const H = Number(v.value?.replace(c.value, "."));
      return H !== We(H, e.min, e.max);
    }), h = _(() => r.value ? !1 : (f.value ?? 0) + e.step <= e.max), x = _(() => r.value ? !1 : (f.value ?? 0) - e.step >= e.min), w = _(() => e.hideInput ? "stacked" : e.controlVariant), b = /* @__PURE__ */ E(() => w.value === "split" ? "$plus" : "$collapse"), S = /* @__PURE__ */ E(() => w.value === "split" ? "$minus" : "$expand"), g = /* @__PURE__ */ E(() => w.value === "split" ? "default" : "small"), I = /* @__PURE__ */ E(() => w.value === "stacked" ? "auto" : "100%"), C = {
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
        onPointerdown: R,
        onPointercancel: L
      }
    };
    ue(() => e.precision, () => q()), ue(() => e.minFractionDigits, () => q()), gt(() => {
      Q();
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
        m.value = d(We(0, e.min, e.max));
        return;
      }
      let G = Math.max(P(f.value), P(e.step));
      e.precision != null && (G = Math.max(G, e.precision)), H ? h.value && (m.value = d(f.value + e.step, G)) : x.value && (m.value = d(f.value - e.step, G));
    }
    function A(H) {
      if (!H.data) return;
      const G = H.target, {
        value: X,
        selectionStart: ve,
        selectionEnd: Z
      } = G ?? {}, de = X ? X.slice(0, ve) + H.data + X.slice(Z) : H.data, xe = e0(de, e.precision, c.value);
      if (new RegExp(`^-?\\d*${Po(c.value)}?\\d*$`).test(de) || (H.preventDefault(), G.value = xe, Ie(() => m.value = xe)), e.precision != null) {
        if (de.split(c.value)[1]?.length > e.precision) {
          H.preventDefault(), G.value = xe, Ie(() => m.value = xe);
          const Ce = (ve ?? 0) + H.data.length;
          G.setSelectionRange(Ce, Ce);
        }
        e.precision === 0 && de.endsWith(c.value) && (H.preventDefault(), G.value = xe, Ie(() => m.value = xe));
      }
    }
    async function B(H) {
      ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(H.key) || H.ctrlKey || ["ArrowDown", "ArrowUp"].includes(H.key) && (H.preventDefault(), H.stopPropagation(), Q(), await Ie(), H.key === "ArrowDown" ? F(!1) : F());
    }
    function D(H) {
      H.stopPropagation();
    }
    function L(H) {
      H.currentTarget?.releasePointerCapture(H.pointerId), H.preventDefault(), i();
    }
    function W(H) {
      H.currentTarget?.setPointerCapture(H.pointerId), H.preventDefault(), H.stopPropagation(), l("up");
    }
    function R(H) {
      H.currentTarget?.setPointerCapture(H.pointerId), H.preventDefault(), H.stopPropagation(), l("down");
    }
    function Q() {
      if (r.value || !a.value) return;
      const H = a.value.value, G = Number(H.replace(c.value, "."));
      H && !isNaN(G) ? m.value = d(We(G, e.min, e.max)) : m.value = null;
    }
    function q() {
      r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, !1) : null);
    }
    function O() {
      if (!r.value) {
        if (f.value === null || isNaN(f.value)) {
          m.value = null;
          return;
        }
        m.value = f.value.toString().replace(".", c.value);
      }
    }
    function ne() {
      O();
    }
    function K() {
      Q();
    }
    return te(() => {
      const {
        modelValue: H,
        type: G,
        ...X
      } = En.filterProps(e);
      function ve() {
        return n.increment ? p(Te, {
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
        }) : p(Fe, {
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
        return n.decrement ? p(Te, {
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
        }) : p(Fe, {
          "aria-hidden": "true",
          "data-testid": "decrement",
          disabled: !x.value,
          height: I.value,
          icon: S.value,
          key: "decrement-btn",
          onClick: D,
          onPointerdown: R,
          onPointerup: L,
          onPointercancel: L,
          size: g.value,
          variant: "text",
          tabindex: "-1"
        }, null);
      }
      function de() {
        return V("div", {
          class: "v-number-input__control"
        }, [Z(), p(en, {
          vertical: w.value !== "stacked"
        }, null), ve()]);
      }
      function xe() {
        return !e.hideInput && !e.inset ? p(en, {
          vertical: !0
        }, null) : void 0;
      }
      const Ce = w.value === "split" ? V("div", {
        class: "v-number-input__control"
      }, [p(en, {
        vertical: !0
      }, null), ve()]) : e.reverse || w.value === "hidden" ? void 0 : V(he, null, [xe(), de()]), _e = n["append-inner"] || Ce, M = w.value === "split" ? V("div", {
        class: "v-number-input__control"
      }, [Z(), p(en, {
        vertical: !0
      }, null)]) : e.reverse && w.value !== "hidden" ? V(he, null, [de(), xe()]) : void 0, $ = n["prepend-inner"] || M;
      return p(En, U({
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
        "append-inner": _e ? function() {
          for (var j = arguments.length, re = new Array(j), z = 0; z < j; z++)
            re[z] = arguments[z];
          return V(he, null, [n["append-inner"]?.(...re), Ce]);
        } : void 0,
        "prepend-inner": $ ? function() {
          for (var j = arguments.length, re = new Array(j), z = 0; z < j; z++)
            re[z] = arguments[z];
          return V(he, null, [M, n["prepend-inner"]?.(...re)]);
        } : void 0
      });
    }), yt({}, a);
  }
}), DI = N({
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
  ...ut(),
  ...Yi(),
  ...zt(Ki({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), EI = J()({
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
      dimensionStyles: i
    } = ct(e), {
      isFocused: o,
      focus: r,
      blur: s
    } = la(e), u = ke(e, "modelValue", "", (P) => P == null ? [] : String(P).split(""), (P) => P.join("")), {
      t: c
    } = je(), d = _(() => Number(e.length)), f = _(() => Array(d.value).fill(0)), v = /* @__PURE__ */ ae(-1), k = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae([]), y = _(() => m.value[v.value]);
    let h = !1;
    It(() => e.autofocus, () => {
      const P = pl();
      P.run(() => {
        const {
          intersectionRef: F,
          isIntersecting: A
        } = Ni();
        tt(() => {
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
      v.value > u.value.length ? A = u.value.length + 1 : v.value + 1 !== d.value && (A = "next"), u.value = P, A && $a(k.value, A);
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
        B != null && $a(k.value, B);
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
    return nt({
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
      P < 0 || Ie(() => {
        m.value[P]?.select();
      });
    }), te(() => {
      const [P, F] = Bn(n);
      return V("div", U({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, P), [V("div", {
        ref: k,
        class: "v-otp-input__content",
        style: fe([i.value])
      }, [f.value.map((A, B) => V(he, null, [e.divider && B !== 0 && V("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), p(ka, {
        focused: o.value && e.focusAll || v.value === B,
        key: B
      }, {
        ...l,
        loader: void 0,
        default: () => V("input", {
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
      })])), V("input", U({
        class: "v-otp-input-input",
        type: "hidden"
      }, F, {
        value: u.value.join("")
      }), null), p(Dn, {
        contained: !0,
        contentClass: "v-otp-input__loader",
        modelValue: !!e.loading,
        persistent: !0
      }, {
        default: () => [l.loader?.() ?? p(ba, {
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
      isFocused: o
    };
  }
});
function MI(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const BI = N({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...be()
}, "VParallax"), FI = J()({
  name: "VParallax",
  props: BI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ni(), {
      resizeRef: i,
      contentRect: o
    } = cn(), {
      height: r
    } = nn(), s = /* @__PURE__ */ ae();
    tt(() => {
      a.value = i.value = s.value?.$el;
    });
    let u;
    ue(l, (v) => {
      v ? (u = er(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, {
        passive: !0
      }), f()) : u.removeEventListener("scroll", f);
    }), At(() => {
      u?.removeEventListener("scroll", f);
    }), ue(r, f), ue(() => o.value?.height, f);
    const c = _(() => 1 - We(Number(e.scale)));
    let d = -1;
    function f() {
      !l.value || Tn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
        const v = (s.value?.$el).querySelector(".v-img__img");
        if (!v) return;
        const k = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + m, h = o.value.height, x = y + (h - k) / 2, w = MI((m - x) * c.value), b = Math.max(1, (c.value * (k - h) + h) / h);
        v.style.setProperty("transform", `translateY(${w}px) scale(${b})`);
      }));
    }
    return te(() => p(Xn, {
      class: ee(["v-parallax", {
        "v-parallax--active": l.value
      }, e.class]),
      style: fe(e.style),
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, n)), {};
  }
}), LI = N({
  ...ur({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), $I = J()({
  name: "VRadio",
  props: LI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = Sa.filterProps(e);
      return p(Sa, U(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), n);
    }), {};
  }
}), OI = N({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Ee(ia(), ["direction"]),
  ...Ee(Ku(), ["multiple"]),
  trueIcon: {
    type: pe,
    default: "$radioOn"
  },
  falseIcon: {
    type: pe,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), NI = J()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: OI(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = Tt(), i = _(() => e.id || `radio-group-${l}`), o = ke(e, "modelValue"), r = /* @__PURE__ */ ae();
    return te(() => {
      const [s, u] = Bn(n), c = Pt.filterProps(e), d = Sa.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return p(Pt, U({
        ref: r,
        class: ["v-radio-group", e.class],
        style: e.style
      }, s, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (v) => o.value = v,
        id: i.value
      }), {
        ...a,
        default: (v) => {
          let {
            id: k,
            messagesId: m,
            isDisabled: y,
            isReadonly: h
          } = v;
          return V(he, null, [f && p($l, {
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
            modelValue: o.value,
            "onUpdate:modelValue": (x) => o.value = x
          }), a)]);
        }
      });
    }), yt({}, r);
  }
}), RI = N({
  ...Yi(),
  ...ia(),
  ...Kh(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), HI = J()({
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
    const i = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), {
      rtlClasses: s
    } = ft();
    function u(A) {
      if (!i.value || !o.value) return;
      const B = Hs(A, i.value.$el, e.direction), D = Hs(A, o.value.$el, e.direction), L = Math.abs(B), W = Math.abs(D);
      return L < W || L === W && B < 0 ? i.value.$el : o.value.$el;
    }
    const c = Gh(e), d = ke(e, "modelValue", void 0, (A) => A?.length ? A.map((B) => c.roundValue(B)) : [0, 0]), {
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
          const D = f.value === i.value?.$el ? [B, d.value[1]] : [d.value[0], B];
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
        !e.strict && D === L && D !== m.value && (f.value = B > D ? o.value?.$el : i.value?.$el, f.value?.focus()), f.value === i.value?.$el ? d.value = [Math.min(B, L), L] : d.value = [D, Math.max(D, B)];
      },
      getActiveThumb: u
    }), {
      isFocused: I,
      focus: C,
      blur: T
    } = la(e), P = _(() => w(d.value[0])), F = _(() => w(d.value[1]));
    return te(() => {
      const A = Pt.filterProps(e), [B, D] = Bn(l), L = !!(e.label || n.label || n.prepend);
      return p(Pt, U({
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
        prepend: L ? (W) => V(he, null, [n.label?.(W) ?? (e.label ? p($l, {
          class: "v-slider__label",
          text: e.label
        }, null) : void 0), n.prepend?.(W)]) : void 0,
        default: (W) => {
          let {
            id: R,
            messagesId: Q
          } = W;
          return V("div", {
            class: "v-slider__container",
            onMousedown: g.value ? void 0 : h,
            onTouchstartPassive: g.value ? void 0 : x
          }, [V("input", {
            id: `${R.value}_start`,
            name: e.name || R.value,
            disabled: S.value,
            readonly: g.value,
            tabindex: "-1",
            value: d.value[0]
          }, null), V("input", {
            id: `${R.value}_stop`,
            name: e.name || R.value,
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
          }), p(Ws, U({
            ref: i,
            "aria-describedby": Q.value,
            focused: I && f.value === i.value?.$el,
            modelValue: d.value[0],
            "onUpdate:modelValue": (q) => d.value = [q, d.value[1]],
            onFocus: (q) => {
              C(), f.value = i.value?.$el, k.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && q.relatedTarget !== o.value?.$el && (i.value?.$el.blur(), o.value?.$el.focus());
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
          }), p(Ws, U({
            ref: o,
            "aria-describedby": Q.value,
            focused: I && f.value === o.value?.$el,
            modelValue: d.value[1],
            "onUpdate:modelValue": (q) => d.value = [d.value[0], q],
            onFocus: (q) => {
              C(), f.value = o.value?.$el, k.value !== m.value && d.value[0] === d.value[1] && d.value[0] === k.value && q.relatedTarget !== i.value?.$el && (o.value?.$el.blur(), i.value?.$el.focus());
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
    }), yt({
      focus: () => i.value?.$el.focus()
    }, r);
  }
}), WI = N({
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
    type: pe,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: pe,
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
  ...be(),
  ...lt(),
  ...Ln(),
  ...Pe(),
  ...$e()
}, "VRating"), zI = J()({
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
    } = je(), {
      themeClasses: l
    } = Re(e), i = /* @__PURE__ */ ae(), o = ke(e, "modelValue"), r = _(() => We(parseFloat(o.value), 0, Number(e.length))), s = _(() => Zt(Number(e.length), 1)), u = _(() => s.value.flatMap((b) => e.halfIncrements ? [b - 0.5, b] : [b])), c = /* @__PURE__ */ se(-1), d = _(() => u.value.map((b) => {
      const S = e.hover && c.value > -1, g = r.value >= b, I = c.value >= b, T = (S ? I : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, F = g || I ? P : e.color;
      return {
        isFilled: g,
        isHovered: I,
        icon: T,
        color: F
      };
    })), f = _(() => [0, ...u.value].map((b) => {
      function S() {
        c.value = b;
      }
      function g() {
        c.value = -1;
      }
      function I() {
        e.disabled || e.readonly || (o.value = r.value === b && e.clearable ? 0 : b);
      }
      return {
        onMouseenter: e.hover ? S : void 0,
        onMouseleave: e.hover ? g : void 0,
        onClick: I
      };
    })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(o.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(o.value ?? 0) - 1)));
    function k() {
      i.value?.querySelector('[tabindex="0"]')?.focus();
    }
    function m(b) {
      if (e.disabled || e.readonly || b.ctrlKey || b.altKey) return;
      const S = e.halfIncrements ? 0.5 : 1;
      if (b.key === "ArrowRight") {
        const g = Math.min(Number(e.length), Number(o.value ?? 0) + S);
        o.value = g, Ie(() => k());
      }
      if (b.key === "ArrowLeft") {
        const g = Math.max(0, Number(o.value ?? 0) - S);
        o.value = g, Ie(() => k());
      }
    }
    const y = Tt(), h = _(() => e.name ?? `v-rating-${y}`);
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
      return V(he, null, [V("label", {
        for: F,
        class: ee({
          "v-rating__item--half": e.halfIncrements && S % 1 > 0,
          "v-rating__item--full": e.halfIncrements && S % 1 === 0
        }),
        onMouseenter: C,
        onMouseleave: T,
        onClick: P
      }, [V("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, S, e.length)]), I ? n.item ? n.item({
        ...d.value[g],
        props: B,
        value: S,
        index: g,
        rating: r.value
      }) : p(Fe, U({
        "aria-label": a(e.itemAriaLabel, S, e.length)
      }, B), null) : void 0]), V("input", {
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
      return n["item-label"] ? n["item-label"](b) : b.label ? V("span", null, [b.label]) : V("span", null, [Ut(" ")]);
    }
    return te(() => {
      const b = !!e.itemLabels?.length || n["item-label"];
      return p(e.tag, {
        class: ee(["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class]),
        style: fe(e.style),
        ref: i
      }, {
        default: () => [p(x, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), s.value.map((S, g) => V("div", {
          class: "v-rating__wrapper"
        }, [b && e.itemLabelPosition === "top" ? w({
          value: S,
          index: g,
          label: e.itemLabels?.[g]
        }) : void 0, V("div", {
          class: "v-rating__item"
        }, [e.halfIncrements ? V(he, null, [p(x, {
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
  return V("div", {
    class: ee(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`])
  }, [t]);
}
function Ff(e) {
  const [t, n] = e.split("@");
  return Array.from({
    length: n
  }).map(() => Ir(t));
}
function Ir(e) {
  let t = [];
  if (!e) return t;
  const n = jI[e];
  if (e !== n) {
    if (e.includes(",")) return Lf(e);
    if (e.includes("@")) return Ff(e);
    n.includes(",") ? t = Lf(n) : n.includes("@") ? t = Ff(n) : n && t.push(Ir(n));
  }
  return [YI(e, t)];
}
function Lf(e) {
  return e.replace(/\s/g, "").split(",").map(Ir);
}
const UI = N({
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
  ...ut(),
  ...dt(),
  ...$e()
}, "VSkeletonLoader"), KI = J()({
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
      backgroundColorStyles: i
    } = He(() => e.color), {
      dimensionStyles: o
    } = ct(e), {
      elevationClasses: r
    } = ht(e), {
      themeClasses: s
    } = Re(e), {
      t: u
    } = je(), c = _(() => Ir(Ke(e.type).join(",")));
    return te(() => {
      const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: u(e.loadingText),
        role: "alert"
      };
      return d ? V("div", U({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, s.value, l.value, r.value],
        style: [i.value, o.value]
      }, f, n), [c.value]) : V(he, null, [a.default?.()]);
    }), {};
  }
}), GI = J()({
  name: "VSlideGroupItem",
  props: ll(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ya(e, Gu);
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
    a(), Ie(() => t.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && a();
    }, s);
  }
  return at(a), {
    clear: a,
    time: t,
    start: i,
    reset: l
  };
}
const Ky = N({
  /* @deprecated */
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...aa({
    location: "bottom"
  }),
  ...Fl(),
  ...qe(),
  ...ln(),
  ...$e(),
  ...Ee(Ui({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"])
}, "VSnackbar"), tu = J()({
  name: "VSnackbar",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), {
      positionClasses: l
    } = Ll(e), {
      scopeId: i
    } = ol(), {
      themeClasses: o
    } = Re(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: u
    } = na(e), {
      roundedClasses: c
    } = Je(e), d = qI(() => Number(e.timeout)), f = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se(0), y = /* @__PURE__ */ ae(), h = Le(Si, void 0);
    It(() => !!h, () => {
      const F = Jm();
      tt(() => {
        y.value = F.mainStyles.value;
      });
    }), ue(a, w), ue(() => e.timeout, w), gt(() => {
      a.value && w();
    });
    let x = -1;
    function w() {
      d.reset(), window.clearTimeout(x);
      const F = Number(e.timeout);
      if (!a.value || F === -1) return;
      const A = Pu(v.value);
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
    const P = _(() => e.location.split(" ").reduce((F, A) => (F[`v-snackbar--${A}`] = !0, F), {}));
    return te(() => {
      const F = Dn.filterProps(e), A = !!(n.default || n.text || e.text);
      return p(Dn, U({
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
          class: ["v-snackbar__wrapper", o.value, r.value, c.value, u.value],
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
      }, i), {
        default: () => [ta(!1, "v-snackbar"), e.timer && !k.value && V("div", {
          key: "timer",
          class: "v-snackbar__timer"
        }, [p(or, {
          ref: v,
          color: typeof e.timer == "string" ? e.timer : "info",
          max: e.timeout,
          modelValue: d.time.value
        }, null)]), A && V("div", {
          key: "content",
          class: "v-snackbar__content",
          role: "status",
          "aria-live": "polite"
        }, [n.text?.() ?? e.text, n.default?.()]), n.actions && p(Te, {
          defaults: {
            VBtn: {
              variant: "text",
              ripple: !1,
              slim: !0
            }
          }
        }, {
          default: () => [V("div", {
            class: "v-snackbar__actions"
          }, [n.actions({
            isActive: a
          })])]
        })],
        activator: n.activator
      });
    }), yt({}, f);
  }
}), XI = N({
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
  ...Ee(Ky(), ["modelValue"])
}, "VSnackbarQueue"), ZI = J()({
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
    } = je(), i = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se(!1), r = /* @__PURE__ */ se();
    ue(() => e.modelValue.length, (f, v) => {
      !o.value && f > v && u();
    }), ue(i, (f) => {
      f && (o.value = !0);
    });
    function s() {
      e.modelValue.length ? u() : (r.value = void 0, o.value = !1);
    }
    function u() {
      const [f, ...v] = e.modelValue;
      n("update:modelValue", v), r.value = typeof f == "string" ? {
        text: f
      } : f, Ie(() => {
        i.value = !0;
      });
    }
    function c() {
      i.value = !1;
    }
    const d = _(() => ({
      color: typeof e.closable == "string" ? e.closable : void 0,
      text: l(e.closeText)
    }));
    te(() => {
      const f = !!(e.closable || a.actions), {
        modelValue: v,
        ...k
      } = tu.filterProps(e);
      return V(he, null, [o.value && !!r.value && (a.default ? p(Te, {
        defaults: {
          VSnackbar: r.value
        }
      }, {
        default: () => [a.default({
          item: r.value
        })]
      }) : p(tu, U(k, r.value, {
        modelValue: i.value,
        "onUpdate:modelValue": (m) => i.value = m,
        onAfterLeave: s
      }), {
        text: a.text ? () => a.text?.({
          item: r.value
        }) : void 0,
        actions: f ? () => V(he, null, [a.actions ? p(Te, {
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
        }) : p(Fe, U(d.value, {
          onClick: c
        }), null)]) : void 0
      }))]);
    });
  }
}), Gy = N({
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
}, "Line"), qy = N({
  autoLineWidth: Boolean,
  ...Gy()
}, "VBarline"), $f = J()({
  name: "VBarline",
  props: qy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Tt(), l = _(() => e.id || `barline-${a}`), i = _(() => Number(e.autoDrawDuration) || 500), o = _(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), c = _(() => e.modelValue.map((y) => it(y, e.itemValue, y)));
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
    const f = _(() => {
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
    }), v = _(() => d(c.value, u.value)), k = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
    te(() => {
      const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return V("svg", {
        display: "block"
      }, [V("defs", null, [V("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [y.map((h, x) => V("stop", {
        offset: x / Math.max(y.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), V("clipPath", {
        id: `${l.value}-clip`
      }, [v.value.map((h) => V("rect", {
        x: h.x + k.value,
        y: h.y,
        width: r.value,
        height: h.height,
        rx: m.value,
        ry: m.value
      }, [e.autoDraw && !Tn() && V(he, null, [V("animate", {
        attributeName: "y",
        from: h.y + h.height,
        to: h.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), V("animate", {
        attributeName: "height",
        from: "0",
        to: h.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && V("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [f.value.map((h, x) => V("text", {
        x: h.x + k.value + r.value / 2,
        y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
        "font-size": Number(e.labelSize) || 7
      }, [n.label?.({
        index: x,
        value: h.value
      }) ?? h.value]))]), V("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [V("rect", {
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
  const l = e.shift(), i = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && QI(s, o, u);
    if (!s || c)
      return `L${o.x} ${o.y}`;
    const d = Math.min(Of(u, o), Of(s, o)), v = d / 2 < t ? d / 2 : t, k = Nf(u, o, v), m = Nf(s, o, v);
    return `L${k.x} ${k.y}S${o.x} ${o.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function ro(e) {
  return parseInt(e, 10);
}
function QI(e, t, n) {
  return ro(e.x + n.x) === ro(2 * t.x) && ro(e.y + n.y) === ro(2 * t.y);
}
function Of(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Nf(e, t, n) {
  const a = {
    x: e.x - t.x,
    y: e.y - t.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: t.x + i.x * n,
    y: t.y + i.y * n
  };
}
const Xy = N({
  fill: Boolean,
  ...Gy()
}, "VTrendline"), Rf = J()({
  name: "VTrendline",
  props: Xy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Tt(), l = _(() => e.id || `trendline-${a}`), i = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = /* @__PURE__ */ ae(0), r = /* @__PURE__ */ ae(null);
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
    const u = _(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
      const y = Number(e.padding);
      return {
        minX: y,
        maxX: d.value - y,
        minY: y,
        maxY: parseInt(e.height, 10) - y
      };
    }), v = _(() => e.modelValue.map((y) => it(y, e.itemValue, y))), k = _(() => {
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
      if (await Ie(), !e.autoDraw || !r.value || Tn()) return;
      const y = r.value, h = y.getTotalLength();
      e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), o.value = h;
    }, {
      immediate: !0
    });
    function m(y) {
      const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
      return JI(s(v.value, f.value), h, y, parseInt(e.height, 10));
    }
    te(() => {
      const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return V("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [V("defs", null, [V("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [y.map((h, x) => V("stop", {
        offset: x / Math.max(y.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), u.value && V("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [k.value.map((h, x) => V("text", {
        x: h.x + c.value / 2 + c.value / 2,
        y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
        "font-size": Number(e.labelSize) || 7
      }, [n.label?.({
        index: x,
        value: h.value
      }) ?? h.value]))]), V("path", {
        ref: r,
        d: m(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && V("path", {
        d: m(!1),
        fill: "none",
        stroke: e.color ?? e.gradient?.[0]
      }, null)]);
    });
  }
}), eP = N({
  type: {
    type: String,
    default: "trend"
  },
  ...qy(),
  ...Xy()
}, "VSparkline"), tP = J()({
  name: "VSparkline",
  props: eP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = xt(() => e.color), i = _(() => !!(e.showLabels || e.labels.length > 0 || n?.label)), o = _(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    te(() => {
      const r = e.type === "trend" ? Rf : $f, s = e.type === "trend" ? Rf.filterProps(e) : $f.filterProps(e);
      return p(r, U({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), n);
    });
  }
}), nP = N({
  ...be(),
  ...oh({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), aP = J()({
  name: "VSpeedDial",
  props: nP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), l = /* @__PURE__ */ ae(), i = _(() => {
      const [r, s = "center"] = e.location?.split(" ") ?? [];
      return `${r} ${s}`;
    }), o = _(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return te(() => {
      const r = Al.filterProps(e);
      return p(Al, U(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...n,
        default: (s) => p(Te, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [p(Lt, {
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
}), Dc = /* @__PURE__ */ Symbol.for("vuetify:v-stepper"), Zy = N({
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
}, "VStepperActions"), Jy = J()({
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
    } = je();
    function i() {
      n("click:prev");
    }
    function o() {
      n("click:next");
    }
    return te(() => {
      const r = {
        onClick: i
      }, s = {
        onClick: o
      };
      return V("div", {
        class: "v-stepper-actions"
      }, [p(Te, {
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
        }) ?? p(Fe, r, null)]
      }), p(Te, {
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
        }) ?? p(Fe, s, null)]
      })]);
    }), {};
  }
}), Qy = Qn("v-stepper-header"), lP = N({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: pe,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: pe,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: pe,
    default: "$error"
  },
  icon: pe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), iP = N({
  ...lP(),
  ...ll()
}, "VStepperItem"), eb = J()({
  name: "VStepperItem",
  directives: {
    vRipple: Vt
  },
  props: iP(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ya(e, Dc, !0), l = _(() => a?.value.value ?? e.value), i = _(() => e.rules.every((f) => f() === !0)), o = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !i.value), u = _(() => e.complete || e.rules.length > 0 && i.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({
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
      return Ue(V("button", {
        class: ee(["v-stepper-item", {
          "v-stepper-item--complete": u.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a?.selectedClass.value]),
        disabled: !e.editable,
        type: "button",
        onClick: m
      }, [o.value && ta(!0, "v-stepper-item"), p(tn, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: f ? e.color : void 0,
        size: 24
      }, {
        default: () => [n.icon?.(d.value) ?? (c.value ? p(Ne, {
          icon: c.value
        }, null) : l.value)]
      }), V("div", {
        class: "v-stepper-item__content"
      }, [v && V("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [n.title?.(d.value) ?? e.title]), k && V("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [n.subtitle?.(d.value) ?? e.subtitle]), n.default?.(d.value)])]), [[Vt, e.editable && e.ripple, null]]);
    }), {};
  }
}), oP = N({
  ...Ee(gr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), tb = J()({
  name: "VStepperWindow",
  props: oP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(Dc, null), l = ke(e, "modelValue"), i = _({
      get() {
        return l.value != null || !a ? l.value : a.items.value.find((o) => a.selected.value.includes(o.id))?.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return te(() => {
      const o = Ua.filterProps(e);
      return p(Ua, U({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), rP = N({
  ...hr()
}, "VStepperWindowItem"), nb = J()({
  name: "VStepperWindowItem",
  props: rP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = Ka.filterProps(e);
      return p(Ka, U({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
}), sP = N({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: pe,
  editIcon: pe,
  editable: Boolean,
  errorIcon: pe,
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
  ...Qa()
}, "Stepper"), uP = N({
  ...sP(),
  ...al({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...hc(),
  ...zt(Zy(), ["prevText", "nextText"])
}, "VStepper"), cP = J()({
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
      prev: i,
      selected: o
    } = xa(e, Dc), {
      displayClasses: r,
      mobile: s
    } = nn(e), {
      completeIcon: u,
      editIcon: c,
      errorIcon: d,
      color: f,
      editable: v,
      prevText: k,
      nextText: m
    } = /* @__PURE__ */ El(e), y = _(() => e.items.map((w, b) => {
      const S = it(w, e.itemTitle, w), g = it(w, e.itemValue, b + 1), I = e.itemProps === !0 ? w : it(w, e.itemProps), C = {
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
    })), h = _(() => a.value.findIndex((w) => o.value.includes(w.id))), x = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : !1);
    return nt({
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
      const w = Ii.filterProps(e), b = !!(n.header || e.items.length), S = e.items.length > 0, g = !e.hideActions && !!(S || n.actions);
      return p(Ii, U(w, {
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
            return V(he, null, [!!C && p(en, null, null), p(eb, P.props, {
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
          prev: i,
          next: l
        }), g && (n.actions?.({
          next: l,
          prev: i
        }) ?? p(Jy, {
          key: "stepper-actions",
          "onClick:prev": i,
          "onClick:next": l
        }, n))]
      });
    }), {
      prev: i,
      next: l
    };
  }
}), dP = N({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ia(),
  ...ur()
}, "VSwitch"), fP = J()({
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
    const l = ke(e, "indeterminate"), i = ke(e, "modelValue"), {
      loaderClasses: o
    } = Ri(e), {
      isFocused: r,
      focus: s,
      blur: u
    } = la(e), c = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), f = Iu && window.matchMedia("(forced-colors: active)").matches, v = /* @__PURE__ */ E(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), k = Tt(), m = /* @__PURE__ */ E(() => e.id || `switch-${k}`);
    function y() {
      l.value && (l.value = !1);
    }
    function h(x) {
      x.stopPropagation(), x.preventDefault(), c.value?.input?.click();
    }
    return te(() => {
      const [x, w] = Bn(n), b = Pt.filterProps(e), S = Sa.filterProps(e);
      return p(Pt, U({
        ref: d,
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, x, b, {
        modelValue: i.value,
        "onUpdate:modelValue": (g) => i.value = g,
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
            model: i,
            isValid: F
          };
          return p(Sa, U({
            ref: c
          }, S, {
            modelValue: i.value,
            "onUpdate:modelValue": [(B) => i.value = B, y],
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
              return V("div", {
                class: ee(["v-switch__track", f ? void 0 : D.value]),
                style: fe(L.value),
                onClick: h
              }, [a["track-true"] && V("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](A)]), a["track-false"] && V("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](A)])]);
            },
            input: (B) => {
              let {
                inputNode: D,
                icon: L,
                backgroundColorClasses: W,
                backgroundColorStyles: R
              } = B;
              return V(he, null, [D, V("div", {
                class: ee(["v-switch__thumb", {
                  "v-switch__thumb--filled": L || e.loading
                }, e.inset || f ? void 0 : W.value]),
                style: fe(e.inset ? void 0 : R.value)
              }, [a.thumb ? p(Te, {
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
              }) : p(Wu, null, {
                default: () => [e.loading ? p(Hi, {
                  name: "v-switch",
                  active: !0,
                  color: F.value === !1 ? void 0 : v.value
                }, {
                  default: (Q) => a.loader ? a.loader(Q) : p(ba, {
                    active: Q.isActive,
                    color: Q.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : L && p(Ne, {
                  key: String(L),
                  icon: L,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), yt({}, d);
  }
}), vP = N({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...be(),
  ...dt(),
  ...el(),
  ...qe(),
  ...Pe(),
  ...$e()
}, "VSystemBar"), mP = J()({
  name: "VSystemBar",
  props: vP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = He(() => e.color), {
      elevationClasses: o
    } = ht(e), {
      roundedClasses: r
    } = Je(e), {
      ssrBootStyles: s
    } = nl(), u = _(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: c
    } = tl({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: /* @__PURE__ */ se("top"),
      layoutSize: u,
      elementSize: u,
      active: _(() => !0),
      absolute: /* @__PURE__ */ E(() => e.absolute)
    });
    return te(() => p(e.tag, {
      class: ee(["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class]),
      style: fe([i.value, c.value, s.value, e.style])
    }, n)), {};
  }
}), Ec = /* @__PURE__ */ Symbol.for("vuetify:v-tabs"), ab = N({
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
  ...Ee(sr({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), lb = J()({
  name: "VTab",
  props: ab(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = xt(() => e.sliderColor), {
      backgroundColorClasses: o,
      backgroundColorStyles: r
    } = He(() => e.sliderColor), s = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae(), c = _(() => e.direction === "horizontal"), d = _(() => s.value?.group?.isSelected.value ?? !1);
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
        Hn(w, {
          backgroundColor: [b, "currentcolor"],
          ...S(w, x)
        }, {
          duration: g,
          easing: gi
        });
      }
    }
    return te(() => {
      const y = Fe.filterProps(e);
      return p(Fe, U({
        symbol: Ec,
        ref: s,
        class: ["v-tab", e.class, d.value && e.inset ? o.value : []],
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
        default: () => V(he, null, [n.default?.() ?? e.text, !e.hideSlider && V("div", {
          ref: u,
          class: ee(["v-tab__slider", l.value]),
          style: fe(i.value)
        }, null)])
      });
    }), yt({}, s);
  }
}), gP = N({
  ...Ee(gr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), ib = J()({
  name: "VTabsWindow",
  props: gP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(Ec, null), l = ke(e, "modelValue"), i = _({
      get() {
        return l.value != null || !a ? l.value : a.items.value.find((o) => a.selected.value.includes(o.id))?.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return te(() => {
      const o = Ua.filterProps(e);
      return p(Ua, U({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), hP = N({
  ...hr()
}, "VTabsWindowItem"), ob = J()({
  name: "VTabsWindowItem",
  props: hP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return te(() => {
      const a = Ka.filterProps(e);
      return p(Ka, U({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
});
function yP(e) {
  return e ? e.map((t) => ja(t) ? t : {
    text: t,
    value: t
  }) : [];
}
const bP = N({
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
  ...zt(ab(), ["spaced", "sliderTransition", "sliderTransitionDuration"]),
  ...qu({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...lt(),
  ...Pe()
}, "VTabs"), SP = J()({
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
    const l = ke(e, "modelValue"), i = _(() => yP(e.items)), {
      densityClasses: o
    } = Et(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = He(() => e.bgColor), {
      scopeId: u
    } = ol();
    return nt({
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
      const c = Ci.filterProps(e), d = !!(a.window || e.items.length > 0);
      return V(he, null, [p(Ci, U(c, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--inset": e.inset,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": ce(e.height),
          "--v-tabs-inset-padding": e.inset ? ce(e.insetPadding) : void 0,
          "--v-tabs-inset-radius": e.inset ? ce(e.insetRadius) : void 0
        }, s.value, e.style],
        role: "tablist",
        symbol: Ec
      }, u, n), {
        default: a.default ?? (() => i.value.map((f) => a.tab?.({
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
      }), d && p(ib, U({
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        key: "tabs-window"
      }, u), {
        default: () => [i.value.map((f) => a.item?.({
          item: f
        }) ?? p(ob, {
          value: f.value
        }, {
          default: () => a[`item.${f.value}`]?.({
            item: f
          })
        })), a.window?.()]
      })]);
    }), {};
  }
}), kP = N({
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
  ...Ee(ia(), ["direction"]),
  ...Ki()
}, "VTextarea"), wP = J()({
  name: "VTextarea",
  directives: {
    vIntersect: bn
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
    const i = ke(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = la(e), {
      onIntersect: u
    } = sh(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = _(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), k = /* @__PURE__ */ se(""), m = /* @__PURE__ */ ae(), y = /* @__PURE__ */ ae(0), {
      platform: h
    } = nn(), x = ic(e), w = _(() => e.persistentPlaceholder || o.value || e.active);
    function b() {
      x.isSuppressing.value && x.update(), m.value !== document.activeElement && m.value?.focus(), o.value || r();
    }
    function S(D) {
      b(), a("click:control", D);
    }
    function g(D) {
      a("mousedown:control", D);
    }
    function I(D) {
      D.stopPropagation(), b(), Ie(() => {
        i.value = "", Li(e["onClick:clear"], D);
      });
    }
    function C(D) {
      const L = D.target;
      if (!e.modelModifiers?.trim) {
        i.value = L.value;
        return;
      }
      const W = L.value, R = L.selectionStart, Q = L.selectionEnd;
      i.value = W, Ie(() => {
        let q = 0;
        W.trimStart().length === L.value.length && (q = W.length - L.value.length), R != null && (L.selectionStart = R - q), Q != null && (L.selectionEnd = Q - q);
      });
    }
    const T = /* @__PURE__ */ ae(), P = /* @__PURE__ */ ae(Number(e.rows)), F = _(() => ["plain", "underlined"].includes(e.variant));
    tt(() => {
      e.autoGrow || (P.value = Number(e.rows));
    });
    function A() {
      Ie(() => {
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
      }), e.autoGrow && Ie(() => {
        if (!T.value || !v.value) return;
        const D = getComputedStyle(T.value), L = getComputedStyle(v.value.$el), W = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), R = T.value.scrollHeight, Q = parseFloat(D.lineHeight), q = Math.max(parseFloat(e.rows) * Q + W, parseFloat(L.getPropertyValue("--v-input-control-height"))), O = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Q + W || 1 / 0, ne = We(R ?? 0, q, O);
        P.value = Math.floor((ne - W) / Q), k.value = ce(ne);
      });
    }
    gt(A), ue(i, A), ue(() => e.rows, A), ue(() => e.maxHeight, A), ue(() => e.maxRows, A), ue(() => e.density, A), ue(P, (D) => {
      a("update:rows", D);
    });
    let B;
    return ue(T, (D) => {
      D ? (B = new ResizeObserver(A), B.observe(T.value)) : B?.disconnect();
    }), At(() => {
      B?.disconnect();
    }), te(() => {
      const D = !!(l.counter || e.counter || e.counterValue), L = !!(D || l.details), [W, R] = Bn(n), {
        modelValue: Q,
        ...q
      } = Pt.filterProps(e), O = {
        ...ka.filterProps(e),
        "onClick:clear": I
      };
      return p(Pt, U({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (ne) => i.value = ne,
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
          "--v-textarea-max-height": e.maxHeight ? ce(e.maxHeight) : void 0,
          "--v-textarea-scroll-bar-width": ce(y.value)
        }, e.style]
      }, W, q, {
        centerAffix: P.value === 1 && !F.value,
        focused: o.value
      }), {
        ...l,
        default: (ne) => {
          let {
            id: K,
            isDisabled: H,
            isDirty: G,
            isReadonly: X,
            isValid: ve,
            hasDetails: Z
          } = ne;
          return p(ka, U({
            ref: v,
            style: {
              "--v-textarea-control-height": k.value
            },
            onClick: S,
            onMousedown: g,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, O, {
            id: K.value,
            active: w.value || G.value,
            labelId: `${K.value}-label`,
            centerAffix: P.value === 1 && !F.value,
            dirty: G.value || e.dirty,
            disabled: H.value,
            focused: o.value,
            details: Z.value,
            error: ve.value === !1
          }), {
            ...l,
            default: (de) => {
              let {
                props: {
                  class: xe,
                  ...Ce
                },
                controlRef: _e
              } = de;
              return V(he, null, [e.prefix && V("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Ue(V("textarea", U({
                ref: (M) => m.value = _e.value = M,
                class: xe,
                value: i.value,
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
              }, Ce, R), null), [[bn, {
                handler: u
              }, null, {
                once: !0
              }]]), e.autoGrow && Ue(V("textarea", {
                class: ee([xe, "v-textarea__sizer"]),
                id: `${Ce.id}-sizer`,
                "onUpdate:modelValue": (M) => i.value = M,
                ref: T,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Ok, i.value]]), e.suffix && V("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: L ? (ne) => V(he, null, [l.details?.(ne), D && V(he, null, [V("span", null, null), p(cr, {
          active: e.persistentCounter || o.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, l.counter)])]) : void 0
      });
    }), yt({}, f, v, m);
  }
}), pP = N({
  withBackground: Boolean,
  ...be(),
  ...$e(),
  ...Pe()
}, "VThemeProvider"), xP = J()({
  name: "VThemeProvider",
  props: pP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e);
    return () => e.withBackground ? p(e.tag, {
      class: ee(["v-theme-provider", a.value, e.class]),
      style: fe(e.style)
    }, {
      default: () => [n.default?.()]
    }) : n.default?.();
  }
}), CP = N({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: pe,
  iconColor: String,
  lineColor: String,
  ...be(),
  ...qe(),
  ...Ln(),
  ...dt()
}, "VTimelineDivider"), VP = J()({
  name: "VTimelineDivider",
  props: CP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Bl(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = He(() => e.dotColor), {
      roundedClasses: r
    } = Je(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = ht(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: c
    } = He(() => e.lineColor);
    return te(() => V("div", {
      class: ee(["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class]),
      style: fe(e.style)
    }, [V("div", {
      class: ee(["v-timeline-divider__before", u.value]),
      style: fe(c.value)
    }, null), !e.hideDot && V("div", {
      key: "dot",
      class: ee(["v-timeline-divider__dot", s.value, r.value, a.value]),
      style: fe(l.value)
    }, [V("div", {
      class: ee(["v-timeline-divider__inner-dot", o.value, r.value]),
      style: fe(i.value)
    }, [n.default ? p(Te, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, n.default) : p(Ne, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), V("div", {
      class: ee(["v-timeline-divider__after", u.value]),
      style: fe(c.value)
    }, null)])), {};
  }
}), rb = N({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: pe,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  ...be(),
  ...ut(),
  ...dt(),
  ...qe(),
  ...Ln(),
  ...Pe()
}, "VTimelineItem"), _P = J()({
  name: "VTimelineItem",
  props: rb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ct(e), l = /* @__PURE__ */ se(0), i = /* @__PURE__ */ ae();
    return ue(i, (o) => {
      o && (l.value = o.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width ?? 0);
    }, {
      flush: "post"
    }), te(() => V("div", {
      class: ee(["v-timeline-item", {
        "v-timeline-item--fill-dot": e.fillDot,
        "v-timeline-item--side-start": e.side === "start",
        "v-timeline-item--side-end": e.side === "end"
      }, e.class]),
      style: fe([{
        "--v-timeline-dot-size": ce(l.value),
        "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ce(e.lineInset)})` : ce(0)
      }, e.style])
    }, [V("div", {
      class: "v-timeline-item__body",
      style: fe(a.value)
    }, [n.default?.()]), p(VP, {
      ref: i,
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
    }), e.density !== "compact" && V("div", {
      class: "v-timeline-item__opposite"
    }, [!e.hideOpposite && n.opposite?.()])])), {};
  }
}), IP = N({
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
  ...zt(rb({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...be(),
  ...lt(),
  ...Pe(),
  ...$e()
}, "VTimeline"), PP = J()({
  name: "VTimeline",
  props: IP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      densityClasses: l
    } = Et(e), {
      rtlClasses: i
    } = ft();
    nt({
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
    const o = _(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = _(() => {
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
      }, a.value, l.value, o.value, i.value, e.class]),
      style: fe([{
        "--v-timeline-line-thickness": ce(e.lineThickness)
      }, e.style])
    }, n)), {};
  }
}), TP = N({
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
}, "VTimePickerClock"), nu = J()({
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
    const a = /* @__PURE__ */ ae(null), l = /* @__PURE__ */ ae(null), i = /* @__PURE__ */ ae(void 0), o = /* @__PURE__ */ ae(!1), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = wm((O) => n("change", O), 750), {
      textColorClasses: c,
      textColorStyles: d
    } = xt(() => e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: v
    } = He(() => e.color), k = _(() => e.max - e.min + 1), m = _(() => e.double ? k.value / 2 : k.value), y = _(() => 360 / m.value), h = _(() => y.value * Math.PI / 180), x = _(() => e.modelValue == null ? e.min : e.modelValue), w = _(() => 0.62), b = _(() => {
      const O = [];
      for (let ne = e.min; ne <= e.max; ne = ne + e.step)
        O.push(ne);
      return O;
    });
    ue(() => e.modelValue, (O) => {
      i.value = O;
    });
    function S(O) {
      i.value !== O && (i.value = O), n("input", O);
    }
    function g(O) {
      return !e.allowedValues || e.allowedValues(O);
    }
    function I(O) {
      if (!e.scrollable || e.disabled) return;
      O.preventDefault();
      const ne = Math.sign(-O.deltaY || 1);
      let K = x.value;
      do
        K = K + ne, K = (K - e.min + k.value) % k.value + e.min;
      while (!g(K) && K !== x.value);
      K !== e.displayedValue && S(K), u(K);
    }
    function C(O) {
      return e.double && O - e.min >= m.value;
    }
    function T(O) {
      return C(O) ? w.value : 1;
    }
    function P(O) {
      const ne = e.rotate * Math.PI / 180;
      return {
        x: Math.sin((O - e.min) * h.value + ne) * T(O),
        y: -Math.cos((O - e.min) * h.value + ne) * T(O)
      };
    }
    function F(O, ne) {
      const K = (Math.round(O / y.value) + (ne ? m.value : 0)) % k.value + e.min;
      return O < 360 - y.value / 2 ? K : ne ? e.max - m.value + 1 : e.min;
    }
    function A(O) {
      const {
        x: ne,
        y: K
      } = P(O);
      return {
        left: `${Math.round(50 + ne * 50)}%`,
        top: `${Math.round(50 + K * 50)}%`
      };
    }
    function B(O, ne) {
      const K = ne.x - O.x, H = ne.y - O.y;
      return Math.sqrt(K * K + H * H);
    }
    function D(O, ne) {
      const K = 2 * Math.atan2(ne.y - O.y - B(O, ne), ne.x - O.x);
      return Math.abs(K * 180 / Math.PI);
    }
    function L(O) {
      r.value === null && (r.value = O), s.value = O, S(O);
    }
    function W(O) {
      if (O.preventDefault(), !o.value && O.type !== "click" || !a.value) return;
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
        clientY: ve
      } = "touches" in O ? O.touches[0] : O, Z = {
        x: ne / 2,
        y: -ne / 2
      }, de = {
        x: X - H,
        y: K - ve
      }, xe = Math.round(D(Z, de) - e.rotate + 360) % 360, Ce = e.double && B(Z, de) < (G + G * w.value) / 4, _e = Math.ceil(15 / y.value);
      let M;
      for (let $ = 0; $ < _e; $++)
        if (M = F(xe + $ * y.value, Ce), g(M) || (M = F(xe - $ * y.value, Ce), g(M))) return L(M);
    }
    function R(O) {
      e.disabled || (O.preventDefault(), window.addEventListener("mousemove", W), window.addEventListener("touchmove", W), window.addEventListener("mouseup", Q), window.addEventListener("touchend", Q), r.value = null, s.value = null, o.value = !0, W(O));
    }
    function Q(O) {
      O.stopPropagation(), q(), o.value = !1, s.value !== null && g(s.value) && n("change", s.value);
    }
    function q() {
      window.removeEventListener("mousemove", W), window.removeEventListener("touchmove", W), window.removeEventListener("mouseup", Q), window.removeEventListener("touchend", Q);
    }
    at(q), te(() => V("div", {
      class: ee([{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }]),
      onMousedown: R,
      onTouchstart: R,
      onWheel: I,
      ref: a
    }, [V("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [V("div", {
      class: ee([{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": C(e.modelValue)
      }, c.value]),
      style: fe([{
        transform: `rotate(${e.rotate + y.value * (x.value - e.min)}deg) scaleY(${T(x.value)})`
      }, d.value])
    }, null), b.value.map((O) => {
      const ne = O === x.value;
      return V("div", {
        class: ee([{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": ne,
          "v-time-picker-clock__item--disabled": e.disabled || !g(O)
        }, ne && f.value]),
        style: fe([A(O), ne && v.value])
      }, [V("span", null, [e.format(O)])]);
    })])]));
  }
}), AP = N({
  active: Boolean,
  color: String,
  disabled: Boolean,
  label: String,
  modelValue: String,
  readonly: Boolean
}, "VTimePickerField"), ts = J()({
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
      textColorStyles: i
    } = xt(() => e.color), o = /* @__PURE__ */ ae(), r = /* @__PURE__ */ se(!1);
    function s(u) {
      if (["Backspace", "Delete"].includes(u.key)) {
        u.preventDefault();
        const c = u.target;
        c.value = "", n("update:modelValue", null);
      }
    }
    return te(() => V("div", null, [p(En, U({
      ref: o,
      _as: "VTimePickerField",
      autocomplete: "off",
      class: ["v-time-picker-controls__time__field", {
        "v-time-picker-controls__time__field--active": e.active
      }, e.active ? l.value : []],
      style: e.active ? i.value : [],
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
    }, a), null), V("div", {
      class: "v-time-picker-controls__field-label"
    }, [e.label])])), yt({}, o);
  }
});
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function sb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function au(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function Kl(e) {
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
const EP = N({
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
}, "VTimePickerControls"), lu = J()({
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
    } = je(), i = {
      in: (b) => {
        if (b == null || isNaN(Number(b))) return null;
        const S = Number(b);
        return e.ampm ? jn(sb(S)) : jn(S);
      },
      out: (b) => {
        if (isNaN(Number(b)) || b == null || b === "") return null;
        const S = typeof b == "string" ? Kl(b) : Number(b);
        return S === null ? null : e.ampm ? au(S, e.period ?? "am") : We(S, 0, 23);
      }
    }, o = ke(e, "hour", void 0, i.in, i.out), r = {
      in: (b) => b != null && !isNaN(Number(b)) ? jn(`${b}`) : null,
      out: (b) => {
        if (isNaN(Number(b)) || b == null || b === "") return null;
        const S = typeof b == "string" ? Kl(b) : Number(b);
        return S !== null ? We(S, 0, 59) : null;
      }
    }, s = ke(e, "minute", void 0, r.in, r.out), u = ke(e, "second", void 0, r.in, r.out);
    function c(b) {
      if (!["ArrowUp", "ArrowDown"].includes(b.key)) return;
      b.preventDefault(), b.stopPropagation();
      const S = Number(o.value ?? 0), g = e.ampm ? e.period ?? "am" : null, {
        value: I,
        togglePeriod: C
      } = DP(S, b.key === "ArrowUp", g);
      o.value = jn(I), C && n("update:period", e.period === "am" ? "pm" : "am");
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
        if (Kl(I.data) === null) {
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
          if (Kl(A) > D) {
            I.preventDefault(), C.value = jn(String(Kl(I.data)).substring(0, 2)), g(C.value);
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
    const h = v(i.out, (b) => i.in(b) === o.value, (b) => o.value = b), x = v(r.out, (b) => r.in(b) === s.value, (b) => s.value = b), w = v(r.out, (b) => r.in(b) === u.value, (b) => u.value = b);
    return te(() => V("div", {
      class: "v-time-picker-controls"
    }, [V("div", {
      class: ee({
        "v-time-picker-controls__time": !0,
        "v-time-picker-controls__time--with-ampm": e.ampm,
        "v-time-picker-controls__time--with-seconds": e.useSeconds
      })
    }, [p(ts, {
      ref: k,
      active: e.viewMode === "hour",
      color: e.color,
      disabled: e.disabled,
      label: l("$vuetify.timePicker.hour"),
      modelValue: o.value,
      "onUpdate:modelValue": (b) => o.value = b,
      onKeydown: c,
      onBeforeinput: h,
      onFocus: () => n("update:viewMode", "hour")
    }, null), V("span", {
      class: "v-time-picker-controls__time__separator"
    }, [Ut(":")]), p(ts, {
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
    }, null), e.useSeconds && V("span", {
      key: "secondsDivider",
      class: "v-time-picker-controls__time__separator"
    }, [Ut(":")]), e.useSeconds && p(ts, {
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
    }, null), e.ampm && V("div", {
      class: "v-time-picker-controls__ampm"
    }, [p(Fe, {
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
    }, null), p(Fe, {
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
}), MP = Zt(24), ub = Zt(12), BP = ub.map((e) => e + 12);
Zt(60);
const FP = N({
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
  ...Ee(yr({
    title: "$vuetify.timePicker.title"
  }), ["landscape"]),
  ...lt()
}, "VTimePicker"), LP = J()({
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
    } = je(), {
      densityClasses: i
    } = Et(e), o = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ ae(null), s = /* @__PURE__ */ ae(null), u = /* @__PURE__ */ ae(null), c = /* @__PURE__ */ ae(null), d = /* @__PURE__ */ ae(null), f = ke(e, "period", "am"), v = ke(e, "viewMode", "hour"), k = /* @__PURE__ */ ae(null), m = /* @__PURE__ */ ae(null), y = _(() => {
      let A;
      if (e.allowedHours instanceof Array ? A = (L) => e.allowedHours.includes(L) : A = e.allowedHours, !e.min && !e.max) return A;
      const B = e.min ? Number(e.min.split(":")[0]) : 0, D = e.max ? Number(e.max.split(":")[0]) : 23;
      return (L) => L >= Number(B) && L <= Number(D) && (!A || A(L));
    }), h = _(() => {
      let A;
      const B = !y.value || o.value === null || y.value(o.value);
      if (e.allowedMinutes instanceof Array ? A = (O) => e.allowedMinutes.includes(O) : A = e.allowedMinutes, !e.min && !e.max)
        return B ? A : () => !1;
      const [D, L] = e.min ? e.min.split(":").map(Number) : [0, 0], [W, R] = e.max ? e.max.split(":").map(Number) : [23, 59], Q = D * 60 + Number(L), q = W * 60 + Number(R);
      return (O) => {
        const ne = 60 * o.value + O;
        return ne >= Q && ne <= q && B && (!A || A(O));
      };
    }), x = _(() => {
      let A;
      const D = (!y.value || o.value === null || y.value(o.value)) && (!h.value || r.value === null || h.value(r.value));
      if (e.allowedSeconds instanceof Array ? A = (H) => e.allowedSeconds.includes(H) : A = e.allowedSeconds, !e.min && !e.max)
        return D ? A : () => !1;
      const [L, W, R] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [Q, q, O] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], ne = L * 3600 + W * 60 + Number(R || 0), K = Q * 3600 + q * 60 + Number(O || 0);
      return (H) => {
        const G = 3600 * o.value + 60 * r.value + H;
        return G >= ne && G <= K && D && (!A || A(H));
      };
    }), w = _(() => e.format === "ampm"), b = /* @__PURE__ */ E(() => e.modelValue !== null && o.value === null && r.value === null && (!e.useSeconds || s.value === null));
    function S() {
      const A = g();
      A !== null && A !== e.modelValue && n("update:modelValue", A), b.value && n("update:modelValue", null);
    }
    ue(o, S), ue(r, S), ue(s, S), ue(() => e.period, (A) => T(A)), ue(() => e.modelValue, (A) => I(A)), ue(() => e.useSeconds, (A, B) => {
      B && !A && v.value === "second" && (v.value = "minute"), !A && s.value !== null && (s.value = null);
    }), gt(() => {
      I(e.modelValue);
    });
    function g() {
      return o.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${jn(o.value)}:${jn(r.value)}` + (e.useSeconds ? `:${jn(s.value)}` : "") : null;
    }
    function I(A) {
      if (A == null || A === "")
        o.value = null, r.value = null, s.value = null;
      else if (A instanceof Date)
        o.value = A.getHours(), r.value = A.getMinutes(), s.value = A.getSeconds();
      else {
        const [B, , D, , L, W] = A.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        o.value = W ? au(parseInt(B, 10), W) : parseInt(B, 10), r.value = parseInt(D, 10), s.value = parseInt(L || 0, 10);
      }
      f.value = o.value == null || o.value < 12 ? "am" : "pm";
    }
    function C(A, B) {
      const D = y.value;
      if (!D) return B;
      const L = w.value ? B < 12 ? ub : BP : MP;
      return ((L.find((R) => D((R + B) % L.length + L[0])) || 0) + B) % L.length + L[0];
    }
    function T(A) {
      if (f.value = A, o.value != null) {
        const B = o.value + (f.value === "am" ? -12 : 12);
        o.value = C("hour", B);
      }
      return n("update:period", A), S(), !0;
    }
    function P(A) {
      v.value === "hour" ? o.value = w.value ? au(A, f.value) : A : v.value === "minute" ? r.value = A : s.value = A;
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
      const B = o.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : !0);
      v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(o.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = o.value, c.value = r.value, e.useSeconds && (d.value = s.value), B && S());
    }
    te(() => {
      const A = Ee(Dl.filterProps(e), ["hideHeader"]), B = lu.filterProps(e), D = nu.filterProps(Ee(e, ["format", "modelValue", "min", "max"]));
      return p(Dl, U(A, {
        color: void 0,
        class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, i.value],
        hideHeader: e.hideHeader && e.variant !== "input",
        style: e.style
      }), {
        title: () => a.title?.() ?? V("div", {
          class: "v-time-picker__title"
        }, [l(e.title)]),
        header: () => p(lu, U(B, {
          ampm: w.value,
          hour: o.value,
          minute: r.value,
          period: f.value,
          second: s.value,
          viewMode: v.value,
          "onUpdate:hour": (L) => o.value = L,
          "onUpdate:minute": (L) => r.value = L,
          "onUpdate:period": (L) => T(L),
          "onUpdate:second": (L) => s.value = L,
          "onUpdate:viewMode": (L) => v.value = L,
          ref: k
        }), null),
        default: () => p(nu, U(D, {
          allowedValues: v.value === "hour" ? y.value : v.value === "minute" ? h.value : x.value,
          double: v.value === "hour" && !w.value,
          format: v.value === "hour" ? w.value ? sb : (L) => L : (L) => jn(L, 2),
          max: v.value === "hour" ? w.value && f.value === "am" ? 11 : 23 : 59,
          min: v.value === "hour" && w.value && f.value === "pm" ? 12 : 0,
          size: 20,
          step: v.value === "hour" ? 1 : 5,
          modelValue: v.value === "hour" ? o.value : v.value === "minute" ? r.value : s.value,
          onChange: F,
          onInput: P,
          ref: m
        }), null),
        actions: a.actions
      });
    });
  }
}), $P = N({
  ...be(),
  ...ln({
    variant: "text"
  })
}, "VToolbarItems"), OP = J()({
  name: "VToolbarItems",
  props: $P(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return nt({
      VBtn: {
        color: /* @__PURE__ */ E(() => e.color),
        height: "inherit",
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => V("div", {
      class: ee(["v-toolbar-items", e.class]),
      style: fe(e.style)
    }, [n.default?.()])), {};
  }
}), NP = N({
  id: String,
  interactive: Boolean,
  text: String,
  ...Ee(Ui({
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
}, "VTooltip"), cb = J()({
  name: "VTooltip",
  props: NP(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(e, "modelValue"), {
      scopeId: l
    } = ol(), i = Tt(), o = /* @__PURE__ */ E(() => e.id || `v-tooltip-${i}`), r = /* @__PURE__ */ ae(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = /* @__PURE__ */ E(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => U({
      "aria-describedby": o.value
    }, e.activatorProps));
    return te(() => {
      const f = Dn.filterProps(e);
      return p(Dn, U({
        ref: r,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: o.value
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
    }), yt({}, r);
  }
}), RP = N({
  ...Ee(Hg({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup"), iu = J()({
  name: "VTreeviewGroup",
  props: RP(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ ae(), l = _(() => a.value?.isOpen ? e.collapseIcon : e.expandIcon), i = _(() => ({
      VTreeviewItem: {
        prependIcon: void 0,
        appendIcon: void 0,
        toggleIcon: l.value
      }
    }));
    return te(() => {
      const o = Vi.filterProps(e);
      return p(Vi, U(o, {
        ref: a,
        class: ["v-treeview-group", e.class],
        subgroup: !0
      }), {
        ...n,
        activator: n.activator ? (r) => V(he, null, [p(Te, {
          defaults: i.value
        }, {
          default: () => [n.activator?.(r)]
        })]) : void 0
      });
    }), {};
  }
}), db = /* @__PURE__ */ Symbol.for("vuetify:v-treeview"), fb = N({
  loading: Boolean,
  hideActions: Boolean,
  hasCustomPrepend: Boolean,
  indentLines: Array,
  toggleIcon: pe,
  ...jg({
    slim: !0
  })
}, "VTreeviewItem"), ou = J()({
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
    const l = Le(db, {
      visibleIds: /* @__PURE__ */ ae()
    }).visibleIds, i = /* @__PURE__ */ ae(), o = _(() => i.value?.root.activatable.value && i.value?.isGroupActivator), r = _(() => i.value?.link.isClickable.value || e.value != null && !!i.value?.list), s = _(() => !e.disabled && e.link !== !1 && (e.link || r.value || o.value)), u = _(() => l.value && !l.value.has(/* @__PURE__ */ Ve(i.value?.id)));
    function c(f) {
      s.value && o.value && i.value?.activate(!i.value?.isActivated, f);
    }
    function d(f) {
      f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
    }
    return te(() => {
      const f = dn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
      return p(dn, U({
        ref: i
      }, f, {
        active: i.value?.isActivated || void 0,
        class: ["v-treeview-item", {
          "v-treeview-item--activatable-group-activator": o.value,
          "v-treeview-item--filtered": u.value
        }, e.class],
        ripple: !1,
        onClick: c
      }), {
        ...n,
        prepend: v ? (k) => V(he, null, [e.indentLines && e.indentLines.length > 0 ? V("div", {
          key: "indent-lines",
          class: "v-treeview-indent-lines",
          style: {
            "--v-indent-parts": e.indentLines.length
          }
        }, [e.indentLines.map((m) => V("div", {
          class: ee(`v-treeview-indent-line v-treeview-indent-line--${m}`)
        }, null))]) : "", !e.hideActions && p(Qu, {
          start: !0
        }, {
          default: () => [e.toggleIcon ? V(he, null, [n.toggle ? p(Te, {
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
          }) : p(Fe, {
            key: "prepend-toggle",
            density: "compact",
            icon: e.toggleIcon,
            loading: e.loading,
            variant: "text",
            onClick: d
          }, {
            loader: () => p(ba, {
              indeterminate: "disable-shrink",
              size: "20",
              width: "2"
            }, null)
          })]) : V("div", {
            class: "v-treeview-item__level"
          }, null)]
        }), e.hasCustomPrepend ? p(Te, {
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
        }) : V(he, null, [n.prepend?.(k), e.prependAvatar && p(tn, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && p(Ne, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)])]) : void 0
      });
    }), yt({}, i);
  }
}), vb = N({
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
    type: pe,
    default: "$checkboxIndeterminate"
  },
  falseIcon: pe,
  trueIcon: pe,
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
  ...zt(fb(), ["hideActions"]),
  ...lt()
}, "VTreeviewChildren"), Oo = J()({
  name: "VTreeviewChildren",
  props: vb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = /* @__PURE__ */ wt(/* @__PURE__ */ new Set()), l = /* @__PURE__ */ ae([]), i = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
    async function o(s) {
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
        prepend: (I) => V(he, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && p(Qu, {
          start: !0
        }, {
          default: () => [p(Sn, {
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
      }, b = iu.filterProps(f), S = Oo.filterProps({
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
            onToggleExpand: [() => o(s), C.onClick],
            onClick: e.disabled || f.disabled ? void 0 : i.value ? [() => o(s), C.onClick] : () => r(l.value[u]?.select, !l.value[u]?.isSelected)
          };
          return no(n.header, {
            props: T,
            item: s.raw,
            internalItem: s,
            loading: v
          }, () => p(ou, U({
            ref: (P) => l.value[u] = P
          }, T, {
            hasCustomPrepend: !!n.prepend,
            value: e.returnObject ? s.raw : f.value,
            loading: v
          }), w));
        },
        default: () => V(he, null, [p(Oo, U(S, {
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
      }) : no(n.item, {
        props: f,
        item: s.raw,
        internalItem: s
      }, () => s.type === "divider" ? no(n.divider, {
        props: s.raw
      }, () => p(en, s.props, null)) : s.type === "subheader" ? no(n.subheader, {
        props: s.raw
      }, () => p(Nl, s.props, null)) : p(ou, U(f, {
        hasCustomPrepend: !!n.prepend,
        hideActions: e.hideActions,
        indentLines: x.leaf,
        value: e.returnObject ? /* @__PURE__ */ Ve(s.raw) : f.value
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
const HP = N({
  openAll: Boolean,
  indentLines: [Boolean, String],
  search: String,
  hideNoData: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  ...Rl({
    filterKeys: ["title"]
  }),
  ...Ee(vb(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]),
  ...Ee(Xg({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: !0
  }), ["nav", "openStrategy"]),
  modelValue: Array
}, "VTreeview"), WP = J()({
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
    } = je(), {
      items: i
    } = qg(e), o = /* @__PURE__ */ E(() => e.activeColor), r = /* @__PURE__ */ E(() => e.baseColor), s = /* @__PURE__ */ E(() => e.color), u = ke(e, "activated"), c = ke(e, "selected"), d = _({
      get: () => e.modelValue ?? c.value,
      set(b) {
        c.value = b, a("update:modelValue", b);
      }
    }), f = /* @__PURE__ */ ae(), v = _(() => e.openAll ? w(i.value) : e.opened), k = _(() => mb(i.value)), m = /* @__PURE__ */ E(() => e.search), {
      filteredItems: y
    } = Hl(e, k, m), h = _(() => {
      if (!m.value) return null;
      const b = f.value?.getPath;
      return b ? new Set(y.value.flatMap((S) => {
        const g = e.returnObject ? S.raw : S.props.value;
        return [...b(g), ...x(g)].map(Ve);
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
        g.children && (S.push(e.returnObject ? /* @__PURE__ */ Ve(g.raw) : g.value), g.children && (S = S.concat(w(g.children))));
      return S;
    }
    return Ge(db, {
      visibleIds: h
    }), nt({
      VTreeviewGroup: {
        activeColor: o,
        baseColor: r,
        color: s,
        collapseIcon: /* @__PURE__ */ E(() => e.collapseIcon),
        expandIcon: /* @__PURE__ */ E(() => e.expandIcon)
      },
      VTreeviewItem: {
        activeClass: /* @__PURE__ */ E(() => e.activeClass),
        activeColor: o,
        baseColor: r,
        color: s,
        density: /* @__PURE__ */ E(() => e.density),
        disabled: /* @__PURE__ */ E(() => e.disabled),
        lines: /* @__PURE__ */ E(() => e.lines),
        variant: /* @__PURE__ */ E(() => e.variant)
      }
    }), te(() => {
      const b = Tl.filterProps(e), S = Oo.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
      return p(Tl, U({
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
        default: () => [h.value?.size === 0 && !e.hideNoData && (n["no-data"]?.() ?? p(dn, {
          key: "no-data",
          title: l(e.noDataText)
        }, null)), p(Oo, U(S, {
          density: e.density,
          returnObject: e.returnObject,
          items: i.value,
          parentIndentLines: e.indentLines ? [] : void 0,
          indentLinesVariant: g
        }), n)]
      });
    }), {};
  }
}), zP = J()({
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
  VAvatar: tn,
  VBadge: vh,
  VBanner: kC,
  VBannerActions: mh,
  VBannerText: gh,
  VBottomNavigation: pC,
  VBottomSheet: CC,
  VBreadcrumbs: PC,
  VBreadcrumbsDivider: yh,
  VBreadcrumbsItem: bh,
  VBtn: Fe,
  VBtnGroup: Is,
  VBtnToggle: Ip,
  VCalendar: _V,
  VCard: EV,
  VCardActions: Nh,
  VCardItem: Wh,
  VCardSubtitle: Rh,
  VCardText: zh,
  VCardTitle: Hh,
  VCarousel: HV,
  VCarouselItem: zV,
  VCheckbox: ox,
  VCheckboxBtn: Sn,
  VChip: Zn,
  VChipGroup: dx,
  VClassIcon: $u,
  VCode: jV,
  VCol: b_,
  VColorPicker: E1,
  VCombobox: B1,
  VComponentIcon: xs,
  VConfirmEdit: L1,
  VContainer: m_,
  VCounter: cr,
  VDataIterator: G1,
  VDataTable: s_,
  VDataTableFooter: Pi,
  VDataTableHeaders: Ga,
  VDataTableRow: _c,
  VDataTableRows: qa,
  VDataTableServer: f_,
  VDataTableVirtual: c_,
  VDatePicker: A_,
  VDatePickerControls: Ks,
  VDatePickerHeader: Gs,
  VDatePickerMonth: qs,
  VDatePickerMonths: Xs,
  VDatePickerYears: Zs,
  VDefaultsProvider: Te,
  VDialog: Fs,
  VDialogBottomTransition: ip,
  VDialogTopTransition: op,
  VDialogTransition: lr,
  VDivider: en,
  VEmptyState: E_,
  VExpandTransition: ir,
  VExpandXTransition: ju,
  VExpansionPanel: M_,
  VExpansionPanelText: Js,
  VExpansionPanelTitle: Qs,
  VExpansionPanels: L_,
  VFab: O_,
  VFabTransition: lp,
  VFadeTransition: ki,
  VField: ka,
  VFieldLabel: ql,
  VFileInput: j_,
  VFooter: U_,
  VForm: G_,
  VHotkey: J_,
  VHover: eI,
  VIcon: Ne,
  VImg: Xn,
  VInfiniteScroll: nI,
  VInput: Pt,
  VItem: iI,
  VItemGroup: lI,
  VKbd: eu,
  VLabel: $l,
  VLayout: rI,
  VLayoutItem: uI,
  VLazy: dI,
  VLigatureIcon: N0,
  VList: Tl,
  VListGroup: Vi,
  VListImg: Ex,
  VListItem: dn,
  VListItemAction: Qu,
  VListItemMedia: Fx,
  VListItemSubtitle: Wg,
  VListItemTitle: zg,
  VListSubheader: Nl,
  VLocaleProvider: vI,
  VMain: gI,
  VMenu: Al,
  VMessages: _g,
  VNavigationDrawer: CI,
  VNoSsr: VI,
  VNumberInput: AI,
  VOtpInput: EI,
  VOverlay: Dn,
  VPagination: js,
  VParallax: FI,
  VProgressCircular: ba,
  VProgressLinear: or,
  VRadio: $I,
  VRadioGroup: NI,
  VRangeSlider: HI,
  VRating: zI,
  VResponsive: Vs,
  VRow: V_,
  VScaleTransition: Wu,
  VScrollXReverseTransition: sp,
  VScrollXTransition: rp,
  VScrollYReverseTransition: cp,
  VScrollYTransition: up,
  VSelect: uc,
  VSelectionControl: Sa,
  VSelectionControlGroup: Cg,
  VSheet: Ii,
  VSkeletonLoader: KI,
  VSlideGroup: Ci,
  VSlideGroupItem: GI,
  VSlideXReverseTransition: fp,
  VSlideXTransition: dp,
  VSlideYReverseTransition: vp,
  VSlideYTransition: zu,
  VSlider: zs,
  VSnackbar: tu,
  VSnackbarQueue: ZI,
  VSpacer: Us,
  VSparkline: tP,
  VSpeedDial: aP,
  VStepper: cP,
  VStepperActions: Jy,
  VStepperHeader: Qy,
  VStepperItem: eb,
  VStepperWindow: tb,
  VStepperWindowItem: nb,
  VSvgIcon: Lu,
  VSwitch: fP,
  VSystemBar: mP,
  VTab: lb,
  VTable: Xa,
  VTabs: SP,
  VTabsWindow: ib,
  VTabsWindowItem: ob,
  VTextField: En,
  VTextarea: wP,
  VThemeProvider: xP,
  VTimePicker: LP,
  VTimePickerClock: nu,
  VTimePickerControls: lu,
  VTimeline: PP,
  VTimelineItem: _P,
  VToolbar: _s,
  VToolbarItems: OP,
  VToolbarTitle: Hu,
  VTooltip: cb,
  VTreeview: WP,
  VTreeviewGroup: iu,
  VTreeviewItem: ou,
  VValidation: zP,
  VVirtualScroll: dr,
  VWindow: Ua,
  VWindowItem: Ka
}, Symbol.toStringTag, { value: "Module" }));
function YP(e, t) {
  const n = t.modifiers || {}, a = t.value, {
    once: l,
    immediate: i,
    ...o
  } = n, r = !Object.keys(o).length, {
    handler: s,
    options: u
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: o?.attr ?? r,
      characterData: o?.char ?? r,
      childList: o?.child ?? r,
      subtree: o?.sub ?? r
    }
  }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s?.(d, f), l && gb(e, t);
  });
  i && s?.([], c), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = {
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
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = n ? e : t.arg ? document.querySelector(t.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: n ? void 0 : o
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
    const i = typeof t == "function" ? t(a) : t, o = a.value?.text ?? a.value ?? i?.text, r = ja(a.value) ? a.value : {}, s = () => o ?? n.textContent, u = (l.ctx === a.instance.$ ? ZP(l, a.instance.$)?.provides : l.ctx?.provides) ?? a.instance.$.provides, c = yn(e, U(i, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: u
    }), gm(c, n);
  };
}
function ZP(e, t) {
  const n = /* @__PURE__ */ new Set(), a = (i) => {
    for (const o of i) {
      if (!o) continue;
      if (o === e || o.el && e.el && o.el === e.el)
        return !0;
      n.add(o);
      let r;
      if (o.suspense ? r = a([o.ssContent]) : Array.isArray(o.children) ? r = a(o.children) : o.component?.vnode && (r = a([o.component?.subTree])), r)
        return r;
      n.delete(o);
    }
    return !1;
  };
  if (!a([t.subTree]))
    return t;
  const l = Array.from(n).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return t;
}
const JP = qP(cb, (e) => ({
  activator: (ja(e.value) ? !e.value.text : ["", !1, null].includes(e.value)) ? null : "parent",
  location: e.arg?.replace("-", " "),
  text: typeof e.value == "boolean" ? void 0 : e.value
})), QP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Bs,
  Intersect: bn,
  Mutate: UP,
  Resize: _i,
  Ripple: Vt,
  Scroll: GP,
  Tooltip: JP,
  Touch: $o
}, Symbol.toStringTag, { value: "Module" })), bb = /* @__PURE__ */ Symbol("anywidget.RenderContext");
function eT() {
  let e = Le(bb);
  if (!e) throw new Error("anywidget.RenderContext is not provided.");
  return e;
}
function tT() {
  return eT().model;
}
function ns(e) {
  const t = tT();
  let n;
  const a = eS((i, o) => (n = o, {
    get() {
      return i(), t.get(mt(e));
    },
    set(r) {
      t.set(mt(e), St(r)), t.save_changes();
    }
  })), l = () => {
    a.value = t.get(mt(e)), n();
  };
  return gt(() => {
    t.on(`change:${e}`, l);
  }), qo(() => {
    t.off(`change:${e}`, l);
  }), a;
}
const nT = /* @__PURE__ */ Mv(
  ({ model: e, experimental: t }, n) => (Ge(bb, { model: e, experimental: t }), () => n.slots?.default?.()),
  {
    props: ["model", "experimental"],
    name: "WidgetWrapper"
  }
);
function aT(e) {
  return ({ el: t, model: n, experimental: a }) => {
    const l = tg({ components: jP, directives: QP }), i = Wk(yn(nT, { model: n, experimental: a }, yn(e)));
    return i.use(l).mount(t), () => i.unmount();
  };
}
const lT = {
  __name: "VAppBarTitle",
  setup(e) {
    const t = ns("children"), n = ns("tag"), a = ns("text");
    return (l, i) => {
      const o = Nv("v-app-bar-title", !0);
      return XS(), QS(o, {
        tag: mt(n),
        text: mt(a)
      }, {
        default: pv(() => [
          Ut(
            Pn(mt(t)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["tag", "text"]);
    };
  }
}, iT = aT(lT), oT = { render: iT };
export {
  oT as default
};
