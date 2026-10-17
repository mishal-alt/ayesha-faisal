import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import { RSVP_WHATSAPP } from '../data.js'
;('use strict')
var t = __m43476,
  n = __m71645
export default function ({ weddingId: e, bare: s = !1, wishesMode: a = !1, hideContact: r = !1 }) {
  let [i, l] = (0, n.useState)({
      guest_name: '',
      guest_email: '',
      guest_phone: '',
      attending: 'yes',
      guests_count: 1,
      message: '',
    }),
    [o, c] = (0, n.useState)(!1),
    [u, d] = (0, n.useState)(!1),
    [m, h] = (0, n.useState)(null)
  async function p(t) {
    ;(t.preventDefault(), c(!0), h(null))
    let msg = `Hello! This is ${i.guest_name}. ${'yes' === i.attending ? `I will be attending (${Number(i.guests_count) || 1} guest${(Number(i.guests_count) || 1) === 1 ? '' : 's'}).` : 'Sorry, I will not be able to attend.'}${i.message ? ` ${i.message}` : ''}`
    ;(window.open(`https://wa.me/${RSVP_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener'), c(!1), d(!0))
  }
  return u
    ? (0, t.jsxs)('div', {
        className: s ? 'text-center py-4' : 'card text-center',
        children: [
          (0, t.jsx)('p', {
            className: 'font-headline text-3xl italic text-primary',
            children: 'Thank you!',
          }),
          (0, t.jsx)('p', {
            className: 'mt-2 opacity-80',
            children: a ? 'Your wishes have been sent!' : 'Your response has been recorded.',
          }),
        ],
      })
    : (0, t.jsxs)('form', {
        onSubmit: p,
        className: s ? 'space-y-5' : 'card space-y-4',
        children: [
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsx)('label', { className: 'label', children: 'Your name' }),
              (0, t.jsx)('input', {
                className: 'input',
                required: !0,
                value: i.guest_name,
                onChange: (e) => l((t) => ({ ...t, guest_name: e.target.value })),
              }),
            ],
          }),
          !r &&
            (0, t.jsxs)('div', {
              className: 'grid md:grid-cols-2 gap-3',
              children: [
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Email (optional)' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      type: 'email',
                      value: i.guest_email,
                      onChange: (e) => l((t) => ({ ...t, guest_email: e.target.value })),
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Phone (optional)' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      value: i.guest_phone,
                      onChange: (e) => l((t) => ({ ...t, guest_phone: e.target.value })),
                    }),
                  ],
                }),
              ],
            }),
          !a &&
            (0, t.jsxs)('div', {
              className: 'grid md:grid-cols-2 gap-3',
              children: [
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Attending?' }),
                    (0, t.jsxs)('select', {
                      className: 'input',
                      value: i.attending,
                      onChange: (e) => l((t) => ({ ...t, attending: e.target.value })),
                      children: [
                        (0, t.jsx)('option', { value: 'yes', children: 'Yes, joyfully accepting' }),
                        (0, t.jsx)('option', { value: 'no', children: 'Regretfully declining' }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'How many guests?' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      type: 'number',
                      min: 0,
                      max: 20,
                      value: i.guests_count,
                      onChange: (e) => l((t) => ({ ...t, guests_count: Number(e.target.value) })),
                    }),
                  ],
                }),
              ],
            }),
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsx)('label', {
                className: 'label',
                children: a ? 'Your congratulatory message' : 'Message to the couple (optional)',
              }),
              (0, t.jsx)('textarea', {
                className: 'input min-h-[80px]',
                required: a,
                value: i.message,
                onChange: (e) => l((t) => ({ ...t, message: e.target.value })),
              }),
            ],
          }),
          m && (0, t.jsx)('p', { className: 'text-red-600 text-sm', children: m }),
          (0, t.jsx)('button', {
            className: 'btn-primary w-full',
            disabled: o,
            children: o ? 'Submitting…' : a ? 'Send Wishes 🎉' : 'Submit RSVP',
          }),
        ],
      })
}
