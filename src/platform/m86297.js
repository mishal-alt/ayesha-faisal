import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
;('use strict')
var t = __m43476,
  n = __m71645
function s({ paused: e, onToggle: n }) {
  return (0, t.jsx)('button', {
    onClick: n,
    'aria-label': e ? 'Play music' : 'Pause music',
    title: e ? 'Play music' : 'Pause music',
    style: {
      position: 'fixed',
      bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
      right: 24,
      zIndex: 9998,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'rgba(15,15,15,.65)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,.18)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 18px rgba(0,0,0,.30)',
      transition: 'opacity .2s, transform .15s',
    },
    children: e
      ? (0, t.jsxs)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: [
            (0, t.jsx)('path', {
              d: 'M9 18V5l12-2v13',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            (0, t.jsx)('circle', { cx: '6', cy: '18', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('circle', { cx: '18', cy: '16', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('line', {
              x1: '3',
              y1: '3',
              x2: '21',
              y2: '21',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
            }),
          ],
        })
      : (0, t.jsxs)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: [
            (0, t.jsx)('path', {
              d: 'M9 18V5l12-2v13',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            (0, t.jsx)('circle', { cx: '6', cy: '18', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('circle', { cx: '18', cy: '16', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
          ],
        }),
  })
}
export default function ({ src: e, startTime: a = 0, endTime: r, eagerStart: i = !1, children: l }) {
  let o = (0, n.useRef)(null),
    [c, u] = (0, n.useState)(!1),
    [d, m] = (0, n.useState)(!1)
  return (
    (0, n.useEffect)(() => {
      let t = o.current
      if (!t || !e) return
      let n = 'number' == typeof r && r > a
      function s() {
        t.currentTime >= r && (t.currentTime = a)
      }
      ;(n || (t.loop = !0), n && t.addEventListener('timeupdate', s))
      let l = !1
      function c() {
        ;(u(!0), m(!1))
        let e = 0,
          n = setInterval(() => {
            ;((t.volume = e = Math.min(e + 0.04, 0.38)), e >= 0.38 && clearInterval(n))
          }, 80)
      }
      function d() {
        l ||
          ((l = !0),
          document.removeEventListener('app:ready', h),
          window.removeEventListener('click', p),
          (t.currentTime = a),
          (t.volume = 0),
          (t.muted = !1),
          t.paused
            ? i
              ? t
                  .play()
                  .then(c)
                  .catch(() => {
                    ;((t.muted = !0),
                      t
                        .play()
                        .then(() => {
                          ;((t.muted = !1), c())
                        })
                        .catch(() => {
                          ;((l = !1),
                            document.addEventListener('app:ready', h, { once: !0 }),
                            window.addEventListener('click', p, { once: !0 }))
                        }))
                  })
              : t
                  .play()
                  .then(c)
                  .catch(() => {
                    ;((l = !1),
                      (t.muted = !0),
                      document.addEventListener('app:ready', h, { once: !0 }),
                      window.addEventListener('click', p, { once: !0 }))
                  })
            : c())
      }
      function h() {
        d()
      }
      function p() {
        d()
      }
      return (
        document.addEventListener('app:ready', h, { once: !0 }),
        window.addEventListener('click', p, { once: !0 }),
        () => {
          ;(document.removeEventListener('app:ready', h),
            window.removeEventListener('click', p),
            n && t.removeEventListener('timeupdate', s),
            t.pause())
        }
      )
    }, [e, a, r]),
    (0, t.jsxs)(t.Fragment, {
      children: [
        e &&
          (0, t.jsx)('audio', {
            ref: o,
            src: e,
            preload: 'metadata',
            autoPlay: !0,
            muted: !0,
            style: { display: 'none' },
          }),
        l,
        c &&
          (0, t.jsx)(s, {
            paused: d,
            onToggle: function () {
              let e = o.current
              e && (e.paused ? (e.play().catch(() => {}), m(!1)) : (e.pause(), m(!0)))
            },
          }),
      ],
    })
  )
}
