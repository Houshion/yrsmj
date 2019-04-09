 (function(root, factory) {
     if (typeof define === 'function' && define.amd) {
         // AMD
         define(['jquery'], factory);
     } else if (typeof exports === 'object') {
         // Node, CommonJS-like
         module.exports = factory(require('jquery'));
     } else {
         // Browser globals (root is window)
         root.mobiscroll = factory(root.jQuery);
     }
 }(this, function(jQuery) {
     function P6iiii() {}
     P6iiii.L2l = function() {
         return typeof P6iiii.z2l.P === 'function' ? P6iiii.z2l.P.apply(P6iiii.z2l, arguments) : P6iiii.z2l.P;
     };
     P6iiii.q2l = function() {
         return typeof P6iiii.z2l.P === 'function' ? P6iiii.z2l.P.apply(P6iiii.z2l, arguments) : P6iiii.z2l.P;
     };
     P6iiii.e2l = function() {
         return typeof P6iiii.z2l.P === 'function' ? P6iiii.z2l.P.apply(P6iiii.z2l, arguments) : P6iiii.z2l.P;
     };
     P6iiii.z2l = function(){};
     P6iiii.E2l = function() {
         return typeof P6iiii.z2l.P === 'function' ? P6iiii.z2l.P.apply(P6iiii.z2l, arguments) : P6iiii.z2l.P;
     };
     P6iiii.v2l = function() {
         return typeof P6iiii.z2l.P === 'function' ? P6iiii.z2l.P.apply(P6iiii.z2l, arguments) : P6iiii.z2l.P;
     };
     (typeof window === "object" ? window : global).P6iiii = P6iiii;
     P6iiii.a2l = function(a) {
         for (; P6iiii;) return P6iiii.E2l(a);
     };
     P6iiii.c2l = function(a) {
         if (P6iiii && a) return P6iiii.q2l(a);
     };
     P6iiii.f2l = function(a) {
         for (; P6iiii;) return P6iiii.v2l(a);
     };
     P6iiii.t2l = function(a) {
         while (a) return P6iiii.v2l(a);
     };
     var mobiscroll = function(R6) {
         function V4(p8, O8, S8) {
             var x8 = p8;
             if ((typeof O8 === 'undefined' ? 'undefined' : L6(O8)) === 'object') {
                 return p8.each(function() {
                     new P.classes[O8.component || 'Scroller'](this, O8);
                 });
             }
             if (typeof O8 === 'string') {
                 p8.each(function() {
                     var o8, i8 = P.instances[this.id];
                     if (i8 && i8[O8]) {
                         o8 = i8[O8].apply(this, Array.prototype.slice.call(S8, 1));
                         if (o8 !== undefined) {
                             x8 = o8;
                             return false;
                         }
                     }
                 });
             }
             return x8;
         }

         function s4() {
             C1++;
             setTimeout(function() {
                 C1--;
             }, 500);
         }

         function Y1(r8, Q8, k8) {
             var g8 = r8.originalEvent || r8,
                 y8 = (k8 ? 'page' : 'client') + Q8;
             if (g8.targetTouches && g8.targetTouches[0]) {
                 return g8.targetTouches[0][y8];
             }
             if (g8.changedTouches && g8.changedTouches[0]) {
                 return g8.changedTouches[0][y8];
             }
             return r8[y8];
         }

         function y7(B2, G2, h2, Z2, P2, j2) {
             function N2(D2) {
                 if (!m8) {
                     if (Z2) {
                         D2.preventDefault();
                     }
                     m8 = this;
                     A2 = Y1(D2, 'X');
                     H2 = Y1(D2, 'Y');
                     C2 = false;
                     M2 = new Date();
                 }
             }

             function V2(F2) {
                 if (m8 && !C2 && (Math.abs(Y1(F2, 'X') - A2) > P2 || Math.abs(Y1(F2, 'Y') - H2) > P2)) {
                     C2 = true;
                 }
             }

             function X2(R2) {
                 if (m8) {
                     if (j2 && new Date() - M2 < 100 || !C2) {
                         R2.preventDefault();
                         h2.call(m8, R2, B2);
                     }
                     m8 = false;
                     s4();
                 }
             }

             function K2() {
                 m8 = false;
             }
             var A2, H2, m8, C2, M2, U2 = P.$,
                 Y2 = U2(G2);
             P2 = P2 || 9;
             if (B2.settings.tap) {
                 Y2.on('touchstart.mbsc', N2).on('touchcancel.mbsc', K2).on('touchmove.mbsc', V2).on('touchend.mbsc', X2);
             }
             Y2.on('click.mbsc', function(b2) {
                 b2.preventDefault();
                 h2.call(this, b2, B2);
             });
         }

         function C8(z2) {
             if (C1 && !z2.tap && !(z2.target.nodeName == 'TEXTAREA' && z2.type == 'mousedown')) {
                 z2.stopPropagation();
                 z2.preventDefault();
                 return false;
             }
         }

         function m4(D0, F0, R0, X0, b0, z0, L0) {
             var u0 = new Date(D0, F0, R0, X0 || 0, b0 || 0, z0 || 0, L0 || 0);
             if (u0.getHours() == 23 && (X0 || 0) === 0) {
                 u0.setHours(u0.getHours() + 2);
             }
             return u0;
         }

         function L7(m67, C17) {
             var Q67 = {},
                 P17 = m67.parent(),
                 d17 = P17.find('.mbsc-err-msg'),
                 B17 = m67.attr('data-icon-align') || 'left',
                 k67 = m67.attr('data-icon');
             s6('<span class="mbsc-input-wrap"></span>').insertAfter(m67).append(m67);
             if (d17) {
                 P17.find('.mbsc-input-wrap').append(d17);
             }
             if (k67) {
                 if (k67.indexOf('{') !== -1) {
                     Q67 = JSON.parse(k67);
                 } else {
                     Q67[B17] = k67;
                 }
             }
             if (k67 || C17) {
                 s6.extend(Q67, C17);
                 P17.addClass((Q67.right ? 'mbsc-ic-right ' : '') + (Q67.left ? ' mbsc-ic-left' : '')).find('.mbsc-input-wrap').append(Q67.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + Q67.left + '"></span>' : '').append(Q67.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + Q67.right + '"></span>' : '');
             }
         }

         function M8(j17, Y17) {
             var w17 = {},
                 h17 = Y17[0],
                 U17 = Y17.parent(),
                 M17 = Y17.attr('data-password-toggle'),
                 A17 = Y17.attr('data-icon-show') || 'eye',
                 H17 = Y17.attr('data-icon-hide') || 'eye-blocked';
             if (M17) {
                 w17.right = h17.type == 'password' ? A17 : H17;
             }
             L7(Y17, w17);
             if (M17) {
                 y7(j17, U17.find('.mbsc-right-ic').addClass('mbsc-input-toggle'), function() {
                     if (h17.type == "text") {
                         h17.type = "password";
                         s6(this).addClass('mbsc-ic-' + A17).removeClass('mbsc-ic-' + H17);
                     } else {
                         h17.type = "text";
                         s6(this).removeClass('mbsc-ic-' + A17).addClass('mbsc-ic-' + H17);
                     }
                 });
             }
         }

         function W4(Z17, K17) {
             if (K17 != 'button' && K17 != 'submit' && K17 != 'segmented') {
                 Z17.addClass('mbsc-control-w').find('label').addClass('mbsc-label');
                 Z17.contents().filter(function() {
                     return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
                 }).each(function() {
                     s6('<span class="mbsc-label"></span>').insertAfter(this).append(this);
                 });
             }
         }

         function c1(z47) {
             var b47 = [Math.round(z47.r).toString(16), Math.round(z47.g).toString(16), Math.round(z47.b).toString(16)];
             G.each(b47, function(q47, L47) {
                 if (L47.length == 1) {
                     b47[q47] = '0' + L47;
                 }
             });
             return '#' + b47.join('');
         }

         function W1(E47) {
             E47 = parseInt(E47.indexOf('#') > -1 ? E47.substring(1) : E47, 16);
             return {
                 r: E47 >> 16,
                 g: (E47 & 0x00FF00) >> 8,
                 b: E47 & 0x0000FF,
                 toString: function e47() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }

         function Q4(x47) {
             var f47, c47, W47, l47 = x47.h,
                 p47 = x47.s * 255 / 100,
                 O47 = x47.v * 255 / 100;
             if (p47 === 0) {
                 f47 = c47 = W47 = O47;
             } else {
                 var t47 = O47,
                     v47 = (255 - p47) * O47 / 255,
                     a47 = (t47 - v47) * (l47 % 60) / 60;
                 if (l47 == 360) {
                     l47 = 0;
                 }
                 if (l47 < 60) {
                     f47 = t47;
                     W47 = v47;
                     c47 = v47 + a47;
                 } else if (l47 < 120) {
                     c47 = t47;
                     W47 = v47;
                     f47 = t47 - a47;
                 } else if (l47 < 180) {
                     c47 = t47;
                     f47 = v47;
                     W47 = v47 + a47;
                 } else if (l47 < 240) {
                     W47 = t47;
                     f47 = v47;
                     c47 = t47 - a47;
                 } else if (l47 < 300) {
                     W47 = t47;
                     c47 = v47;
                     f47 = v47 + a47;
                 } else if (l47 < 360) {
                     f47 = t47;
                     c47 = v47;
                     W47 = t47 - a47;
                 } else {
                     f47 = c47 = W47 = 0;
                 }
             }
             return {
                 r: f47,
                 g: c47,
                 b: W47,
                 toString: function S47() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }

         function f7(i47) {
             var o47 = 0,
                 T47, n47, I47 = Math.min(i47.r, i47.g, i47.b),
                 s47 = Math.max(i47.r, i47.g, i47.b),
                 J47 = s47 - I47;
             n47 = s47;
             T47 = s47 ? 255 * J47 / s47 : 0;
             if (T47) {
                 if (i47.r == s47) {
                     o47 = (i47.g - i47.b) / J47;
                 } else if (i47.g == s47) {
                     o47 = 2 + (i47.b - i47.r) / J47;
                 } else {
                     o47 = 4 + (i47.r - i47.g) / J47;
                 }
             } else {
                 o47 = -1;
             }
             o47 *= 60;
             if (o47 < 0) {
                 o47 += 360;
             }
             T47 *= 100 / 255;
             n47 *= 100 / 255;
             return {
                 h: o47,
                 s: T47,
                 v: n47,
                 toString: function g47() {
                     return 'hsv(' + Math.round(this.h) + ',' + Math.round(this.s) + '%,' + Math.round(this.v) + '%)';
                 }
             };
         }

         function c7(B87) {
             var m47 = B87.r / 255,
                 r47 = B87.g / 255,
                 Q47 = B87.b / 255,
                 y47 = Math.max(m47, r47, Q47),
                 d87 = Math.min(m47, r47, Q47),
                 C87 = (y47 + d87) / 2,
                 P87, Y87;
             if (y47 == d87) {
                 P87 = Y87 = 0;
             } else {
                 var k47 = y47 - d87;
                 Y87 = C87 > 0.5 ? k47 / (2 - y47 - d87) : k47 / (y47 + d87);
                 switch (y47) {
                     case m47:
                         P87 = (r47 - Q47) / k47 + (r47 < Q47 ? 6 : 0);
                         break;
                     case r47:
                         P87 = (Q47 - m47) / k47 + 2;
                         break;
                     case Q47:
                         P87 = (m47 - r47) / k47 + 4;
                         break;
                 }
                 P87 /= 6;
             }
             return {
                 h: Math.round(P87 * 360),
                 s: Math.round(Y87 * 100),
                 l: Math.round(C87 * 100),
                 toString: function h87() {
                     return 'hsl(' + this.h + ',' + this.s + '%,' + this.l + '%)';
                 }
             };
         }

         function j8(N87) {
             var M87, U87, j87, G87, H87, K87, A87 = N87.h,
                 Z87 = N87.s,
                 w87 = N87.l;
             if (!isFinite(A87)) {
                 A87 = 0;
             }
             if (!isFinite(Z87)) {
                 Z87 = 0;
             }
             if (!isFinite(w87)) {
                 w87 = 0;
             }
             A87 /= 60;
             if (A87 < 0) {
                 A87 = 6 - -A87 % 6;
             }
             A87 %= 6;
             Z87 = Math.max(0, Math.min(1, Z87 / 100));
             w87 = Math.max(0, Math.min(1, w87 / 100));
             H87 = (1 - Math.abs(2 * w87 - 1)) * Z87;
             K87 = H87 * (1 - Math.abs(A87 % 2 - 1));
             if (A87 < 1) {
                 M87 = H87;
                 U87 = K87;
                 j87 = 0;
             } else if (A87 < 2) {
                 M87 = K87;
                 U87 = H87;
                 j87 = 0;
             } else if (A87 < 3) {
                 M87 = 0;
                 U87 = H87;
                 j87 = K87;
             } else if (A87 < 4) {
                 M87 = 0;
                 U87 = K87;
                 j87 = H87;
             } else if (A87 < 5) {
                 M87 = K87;
                 U87 = 0;
                 j87 = H87;
             } else {
                 M87 = H87;
                 U87 = 0;
                 j87 = K87;
             }
             G87 = w87 - H87 / 2;
             return {
                 r: Math.round((M87 + G87) * 255),
                 g: Math.round((U87 + G87) * 255),
                 b: Math.round((j87 + G87) * 255),
                 toString: function V87() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }

         function k7(u87) {
             return c7(W1(u87));
         }

         function U8(X87) {
             return c1(j8(X87));
         }

         function G4(D87) {
             return c1(Q4(D87));
         }

         function u4(F87) {
             return f7(W1(F87));
         }

         function V3(e6H) {
             if (!M6.length) {
                 e6H.show();
             }
             M6.push(e6H);
         }

         function w8(v6H) {
             var t6H = a6.length;
             a6.push(v6H);
             if (!M6.length) {
                 if (t6H) {
                     a6[0].hide();
                 } else {
                     v6H.show();
                 }
             }
         }

         function x1(c6H, l6H, f6H, W6H) {
             return Y4({
                 display: l6H.display || 'center',
                 cssClass: 'mbsc-alert',
                 okText: l6H.okText,
                 cancelText: l6H.cancelText,
                 context: l6H.context,
                 theme: l6H.theme,
                 closeOnOverlayTap: false,
                 onBeforeClose: function a6H() {
                     c6H.shift();
                 },
                 onBeforeShow: function O6H() {
                     P.activeInstance = null;
                 },
                 onHide: function p6H(S6H, x6H) {
                     if (f6H) {
                         f6H(x6H._resolve);
                     }
                     if (l6H.callback) {
                         l6H.callback(x6H._resolve);
                     }
                     if (x6H) {
                         x6H.destroy();
                     }
                     if (M6.length) {
                         M6[0].show();
                     } else if (a6.length) {
                         a6[0].show();
                     }
                 }
             }, W6H);
         }

         function q3(i6H) {
             return (i6H.title ? '<h2>' + i6H.title + '</h2>' : '') + '<p>' + (i6H.message || '') + '</p>';
         }

         function H8(s6H, J6H, T6H) {
             var o6H = new q6(s6H, x1(M6, J6H, T6H));
             V3(o6H);
         }

         function P8(I6H, g6H, y6H) {
             var n6H = new q6(I6H, x1(M6, g6H, y6H, {
                 buttons: ['ok', 'cancel'],
                 onSet: function r6H() {
                     n6H._resolve = true;
                 }
             }));
             n6H._resolve = false;
             V3(n6H);
         }

         function h8(m6H, P1H, d1H) {
             var k6H = void 0;
             var Q6H = new q6(m6H, x1(M6, P1H, d1H, {
                 buttons: ['ok', 'cancel'],
                 onShow: function C1H() {
                     k6H = Q6H._markup.find('input')[0];
                     setTimeout(function() {
                         k6H.focus();
                     }, 300);
                 },
                 onSet: function B1H() {
                     Q6H._resolve = k6H.value;
                 }
             }));
             Q6H._resolve = '';
             V3(Q6H);
         }

         function O4(H1H, Y1H, w1H, M1H, U1H) {
             var h1H = void 0;
             var A1H = new q6(H1H, x1(a6, Y1H, w1H, {
                 display: 'bottom',
                 animate: U1H,
                 cssClass: M1H || 'mbsc-snackbar',
                 scrollLock: false,
                 buttons: [],
                 onShow: function j1H(Z1H, K1H) {
                     if (Y1H.duration !== false) {
                         h1H = setTimeout(function() {
                             if (K1H) {
                                 K1H.hide();
                             }
                         }, Y1H.duration || 3000);
                     }
                     if (Y1H.button) {
                         K1H.tap(N3('.mbsc-snackbar-btn', Z1H.target), function() {
                             K1H.hide();
                             if (Y1H.button.action) {
                                 Y1H.button.action.call(this);
                             }
                         });
                     }
                 },
                 onClose: function G1H() {
                     clearTimeout(h1H);
                 }
             }));
             w8(A1H);
         }

         function Y8(N1H, V1H, u1H) {
             O4(N1H, V1H, u1H, 'mbsc-toast', 'fade');
         }

         function h1(D1H, F1H, R1H) {
             var X1H = void 0;
             if (T7) {
                 X1H = new Promise(function(b1H) {
                     D1H(F1H, R1H, b1H);
                 });
             } else {
                 D1H(F1H, R1H);
             }
             return X1H;
         }

         function e7(W1H) {
             var p1H = W1H[0];
             var a1H = W1H.attr('data-role');
             var O1H = W1H.attr('type') || p1H.nodeName.toLowerCase();
             if (/(switch|range|segmented|stepper)/.test(a1H)) {
                 O1H = a1H;
             }
             return O1H;
         }

         function l7(S1H) {
             var x1H = P.themes.form[S1H];
             return x1H && x1H.addRipple ? x1H : null;
         }

         function I7() {
             clearTimeout(w3);
             w3 = setTimeout(function() {
                 t6('textarea.mbsc-control').each(function() {
                     M3(this);
                 });
             }, 100);
         }

         function M3(P7H) {
             var d7H = void 0,
                 C7H = void 0,
                 B7H = void 0,
                 Y7H = t6(P7H).attr('rows') || 6;
             if (P7H.offsetHeight) {
                 P7H.style.height = '';
                 B7H = P7H.scrollHeight - P7H.offsetHeight;
                 d7H = P7H.offsetHeight + (B7H > 0 ? B7H : 0);
                 C7H = Math.round(d7H / 24);
                 if (C7H > Y7H) {
                     P7H.scrollTop = d7H;
                     d7H = 24 * Y7H + (d7H - C7H * 24);
                     t6(P7H).addClass('mbsc-textarea-scroll');
                 } else {
                     t6(P7H).removeClass('mbsc-textarea-scroll');
                 }
                 if (d7H) {
                     P7H.style.height = d7H + 'px';
                 }
             }
         }

         function B8(h7H) {
             var A7H = t6(h7H);
             if (!A7H.hasClass('mbsc-textarea-scroll')) {
                 var H7H = h7H.scrollHeight - h7H.offsetHeight,
                     w7H = h7H.offsetHeight + H7H;
                 h7H.scrollTop = 0;
                 h7H.style.height = w7H + 'px';
             }
         }

         function Y7(c33) {
             var t33 = 0,
                 l33 = 1,
                 f33 = 0;
             while (c33.length) {
                 if (t33 > 3) {
                     l33 = 60 * 60;
                 } else if (t33 > 1) {
                     l33 = 60;
                 }
                 f33 = f33 + c33.pop() * l33 * (t33 % 2 ? 10 : 1);
                 t33++;
             }
             return f33;
         }

         function A8(p53, x53) {
             var a53 = document.createElement('script'),
                 O53 = 'mbscjsonp' + ++t4;
             window[O53] = function(S53) {
                 a53.parentNode.removeChild(a53);
                 delete window[O53];
                 if (!S53) {
                     return;
                 }
                 x53(S53);
             };
             a53.src = p53 + (p53.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + O53;
             document.body.appendChild(a53);
         }

         function d8(o53, s53) {
             var i53 = new XMLHttpRequest();
             i53.open('GET', o53, true);
             i53.onload = function() {
                 if (this.status >= 200 && this.status < 400) {
                     s53(JSON.parse(this.response));
                 }
             };
             i53.onerror = function() {};
             i53.send();
         }

         function U7(J53, T53, n53) {
             if (n53 == 'jsonp') {
                 A8(J53, T53);
             } else {
                 d8(J53, T53);
             }
         }

         function h3(z8l, v8l) {
             var L8l = c6(v8l, 'X', true),
                 q8l = c6(v8l, 'Y', true),
                 R8l = z8l.offset(),
                 E8l = L8l - R8l.left,
                 e8l = q8l - R8l.top,
                 t8l = Math.max(E8l, z8l[0].offsetWidth - E8l),
                 l8l = Math.max(e8l, z8l[0].offsetHeight - e8l),
                 b8l = 2 * Math.sqrt(Math.pow(t8l, 2) + Math.pow(l8l, 2));
             q1(e6);
             e6 = z('<span class="mbsc-ripple"></span>').css({
                 width: b8l,
                 height: b8l,
                 top: q8l - R8l.top - b8l / 2,
                 left: L8l - R8l.left - b8l / 2
             }).appendTo(z8l);
             setTimeout(function() {
                 e6.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
             }, 10);
         }

         function q1(f8l) {
             setTimeout(function() {
                 if (f8l) {
                     f8l.removeClass('mbsc-ripple-visible');
                     setTimeout(function() {
                         f8l.remove();
                     }, 2000);
                 }
             }, 100);
         }

         function f4(O8l, c8l, p8l, x8l) {
             var W8l, a8l;
             O8l.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', c8l, function(S8l) {
                 if (c4(S8l, this)) {
                     W8l = c6(S8l, 'X');
                     a8l = c6(S8l, 'Y');
                     H6 = z(this);
                     if (!H6.hasClass(p8l) && !H6.hasClass(x8l)) {
                         h3(H6, S8l);
                     } else {
                         H6 = null;
                     }
                 }
             }).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', c8l, function(i8l) {
                 if (H6 && Math.abs(c6(i8l, 'X') - W8l) > 9 || Math.abs(c6(i8l, 'Y') - a8l) > 9) {
                     q1(e6);
                     H6 = null;
                 }
             }).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', c8l, function() {
                 if (H6) {
                     setTimeout(function() {
                         q1(e6);
                     }, 100);
                     H6 = null;
                 }
             });
         }
         P6iiii.W2l = function(a) {
             for (; P6iiii;) return P6iiii.v2l(a);
         };
         P6iiii.l2l = function(a) {
             if (P6iiii && a) return P6iiii.E2l(a);
         };
         R6 = (P6iiii.t2l("d2f8") ? "" : 'default') in R6 ? R6[P6iiii.l2l("fd35") ? "" : 'default'] : R6;
         var P = P || {};
         var L6 = typeof Symbol === (P6iiii.f2l("1a27") ? "" : "function") && typeof Symbol.iterator === (P6iiii.c2l("3e8a") ? "symbol" : "") ? function(K8) {
             return typeof K8;
         } : function(Z8) {
             return Z8 && typeof Symbol === (P6iiii.W2l("5339") ? "" : "function") && Z8.constructor === Symbol && Z8 !== Symbol.prototype ? P6iiii.a2l("3c8d") ? "" : "symbol" : typeof Z8;
         };
         var w6 = function(G8, N8) {
             P6iiii.O2l = function(a) {
                 if (P6iiii && a) return P6iiii.L2l(a);
             };
             if (!(G8 instanceof N8)) {
                 throw new TypeError(P6iiii.O2l("e43d") ? "" : "Cannot call a class as a function");
             }
         };
         var m6 = function() {
             function V8(F8, D8) {
                 P6iiii.p2l = function(a) {
                     for (; P6iiii;) return P6iiii.e2l(a);
                 };
                 for (var X8 = 0; X8 < D8.length; X8++) {
                     var u8 = D8[X8];
                     u8.enumerable = u8.enumerable || false;
                     u8.configurable = true;
                     if ((P6iiii.p2l("5f39") ? "" : "value") in u8) u8.writable = true;
                     Object.defineProperty(F8, u8.key, u8);
                 }
             }
             return function(R8, b8, z8) {
                 if (b8) V8(R8.prototype, b8);
                 if (z8) V8(R8, z8);
                 return R8;
             };
         }();
         var S6 = function L8(E8, t8, l8) {
             P6iiii.S2l = function(a) {
                 if (P6iiii && a) return P6iiii.L2l(a);
             };
             P6iiii.x2l = function(a) {
                 for (; P6iiii;) return P6iiii.q2l(a);
             };
             if (E8 === (P6iiii.x2l("34fe") ? 1 : null)) E8 = Function.prototype;
             var q8 = Object.getOwnPropertyDescriptor(E8, t8);
             if (q8 === undefined) {
                 var e8 = Object.getPrototypeOf(E8);
                 if (e8 === (P6iiii.S2l("cdb6") ? 1 : null)) {
                     return undefined;
                 } else {
                     return L8(e8, t8, l8);
                 }
             } else if ("value" in q8) {
                 return q8.value;
             } else {
                 var v8 = q8.get;
                 if (v8 === undefined) {
                     return undefined;
                 }
                 return v8.call(l8);
             }
         };
         var F6 = function(c8, f8) {
             if (typeof f8 !== "function" && f8 !== null) {
                 throw new TypeError("Super expression must either be null or a function, not " + typeof f8);
             }
             c8.prototype = Object.create(f8 && f8.prototype, {
                 constructor: {
                     value: c8,
                     enumerable: false,
                     writable: true,
                     configurable: true
                 }
             });
             if (f8) Object.setPrototypeOf ? Object.setPrototypeOf(c8, f8) : c8.__proto__ = f8;
         };
         var Z6 = function(a8, W8) {
             if (!a8) {
                 throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
             }
             return W8 && (typeof W8 === "object" || typeof W8 === "function") ? W8 : a8;
         };
         var X7 = R6.extend;
         P.presetShort = function(s8, J8, T8) {
             P.components[s8] = function(n8) {
                 return V4(this, X7(n8, {
                     component: J8,
                     preset: T8 === false ? undefined : s8
                 }), arguments);
             };
         };
         P.$ = R6;
         R6.mobiscroll = P;
         R6.fn.mobiscroll = function(I8) {
             X7(this, P.components);
             return V4(this, I8, arguments);
         };
         var B1;
         var p6;
         var M1 = [];
         var l4 = navigator.userAgent;
         var Q6 = l4.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i);
         if (/Android/i.test(Q6)) {
             B1 = 'android';
             p6 = navigator.userAgent.match(/Android\s+([\d\.]+)/i);
             if (p6) {
                 M1 = p6[0].replace('Android ', '').split('.');
             }
         } else if (/iPhone|iPad|iPod/i.test(Q6)) {
             B1 = 'ios';
             p6 = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
             if (p6) {
                 M1 = p6[0].replace(/_/g, '.').replace('OS ', '').split('.');
             }
         } else if (/Windows Phone/i.test(Q6)) {
             B1 = 'wp';
         } else if (/Windows|MSIE/i.test(Q6)) {
             B1 = 'windows';
         }
         var K6 = {
             name: B1,
             majorVersion: M1[0],
             minorVersion: M1[1]
         };
         var C1 = 0;
         ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(function(L2) {
             document.addEventListener(L2, C8, true);
         });
         if (K6.name == 'android' && K6.majorVersion < 5) {
             document.addEventListener('change', function(q2) {
                 if (C1 && q2.target.type == 'checkbox' && !q2.target.mbscChange) {
                     q2.stopPropagation();
                     q2.preventDefault();
                 }
                 delete q2.target.mbscChange;
             }, true);
         }
		 
		 
(function() {
     
        function n2() {
            var y2 = ['Webkit', 'Moz', 'O', 'ms'],
                r2;
            for (r2 in y2) {
                if (T2([y2[r2] + 'Transform'])) {
                    return '-' + y2[r2].toLowerCase() + '-';
                }
            }
            return '';
        }

        function T2(I2) {
            var g2;
            for (g2 in I2) {
                if (x2[I2[g2]] !== undefined) {
                    return true;
                }
            }
            return false;
        }
        var E2, W2 = function Q2() {},
            e2 = P.$,
            O2 = +new Date(),
            c2 = {},
            l2 = e2.extend,
            x2 = document.createElement('modernizr').style,
            S2 = n2(),
            o2 = S2.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz'),
            s2 = x2.animation !== undefined ? 'animationend' : 'webkitAnimationEnd';
        E2 = l2(P, {
            $: e2,
            version: '3.2.0',
            util: {
                prefix: S2,
                jsPrefix: o2,
                animEnd: s2,
                preventClick: s4,
                testTouch: function k2(P5, m2) {
                    if (P5.type == 'touchstart') {
                        e2(m2).attr('data-touch', '1');
                    } else if (e2(m2).attr('data-touch')) {
                        e2(m2).removeAttr('data-touch');
                        return false;
                    }
                    return true;
                },
                objectToArray: function d5(B5) {
                    var C5 = [],
                        Y5;
                    for (Y5 in B5) {
                        C5.push(B5[Y5]);
                    }
                    return C5;
                },
                arrayToObject: function h5(H5) {
                    var w5 = {},
                        A5;
                    if (H5) {
                        for (A5 = 0; A5 < H5.length; A5++) {
                            w5[H5[A5]] = H5[A5];
                        }
                    }
                    return w5;
                },
                isNumeric: function M5(U5) {
                    return U5 - parseFloat(U5) >= 0;
                },
                isString: function j5(K5) {
                    return typeof K5 === 'string';
                },
                getCoord: Y1,
                getPosition: function Z5(u5, X5) {
                    var N5 = getComputedStyle(u5[0]),
                        G5, V5;
                    e2.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function(F5, D5) {
                        if (N5[D5 + 'ransform'] !== undefined) {
                            G5 = N5[D5 + 'ransform'];
                            return false;
                        }
                    });
                    G5 = G5.split(')')[0].split(', ');
                    V5 = X5 ? G5[13] || G5[5] : G5[12] || G5[4];
                    return V5;
                },
                constrain: function R5(b5, z5, L5) {
                    return Math.max(z5, Math.min(b5, L5));
                },
                vibrate: function q5(E5) {
                    if ('vibrate' in navigator) {
                        navigator.vibrate(E5 || 50);
                    }
                },
                throttle: function e5(l5, v5) {
                    var t5, f5;
                    v5 = v5 || 100;
                    return function() {
                        var W5 = this,
                            c5 = +new Date(),
                            a5 = arguments;
                        if (t5 && c5 < t5 + v5) {
                            clearTimeout(f5);
                            f5 = setTimeout(function() {
                                t5 = c5;
                                l5.apply(W5, a5);
                            }, v5);
                        } else {
                            t5 = c5;
                            l5.apply(W5, a5);
                        }
                    };
                }
            },
            autoTheme: 'mobiscroll',
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                page: {},
                frame: {},
                scroller: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: K6,
            i18n: {},
            instances: c2,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function O5(p5) {
                l2(this.settings, p5);
            },
            customTheme: function x5(J5, s5) {
                var S5, o5 = P.themes,
                    i5 = ['frame', 'scroller', 'listview', 'menustrip', 'form', 'progress'];
                for (S5 = 0; S5 < i5.length; S5++) {
                    o5[i5[S5]][J5] = P.$.extend({}, o5[i5[S5]][s5], {
                        baseTheme: s5
                    });
                }
            }
        });
        E2.presetShort = E2.presetShort || function() {};
        E2.classes.Base = function(g5, I5) {
            function d9() {
                e2(g5).addClass('mbsc-comp');
                if (!g5.id) {
                    g5.id = 'mobiscroll' + ++O2;
                } else if (c2[g5.id]) {
                    c2[g5.id].destroy();
                }
                c2[g5.id] = n5;
                n5.__ready = true;
            }
            var P9, r5, T5, m5, y5, Q5, k5, n5 = this;
            n5.settings = {};
            n5._init = W2;
            n5._destroy = W2;
            n5._processSettings = W2;
            n5.init = function(W9) {
                var p9;
                for (p9 in n5.settings) {
                    delete n5.settings[p9];
                }
                T5 = n5.settings;
                l2(I5, W9);
                if (n5._hasDef) {
                    k5 = E2.settings;
                }
                l2(T5, n5._defaults, k5, I5);
                if (n5._hasTheme) {
                    y5 = T5.theme;
                    if (y5 == 'auto' || !y5) {
                        y5 = E2.autoTheme;
                    }
                    if (y5 == 'default') {
                        y5 = 'mobiscroll';
                    }
                    I5.theme = y5;
                    m5 = E2.themes[n5._class] ? E2.themes[n5._class][y5] : {};
                }
                if (n5._hasLang) {
                    P9 = E2.i18n[T5.lang];
                }
                if (n5._hasTheme) {
                    Q5('onThemeLoad', {
                        lang: P9,
                        settings: I5
                    });
                }
                l2(T5, m5, P9, k5, I5);
                n5._processSettings();
                var O9 = {
                    form: true,
                    page: true,
                    scrollview: true,
                    progress: true,
                    progressbase: true,
                    switch: true,
                    slider: true,
                    sliderbase: true,
                    stepper: true
                };
                if (O9[n5._class]) {
                    n5._init(W9);
                    Q5('onInit');
                } else {
                    var f9 = {
                        className: n5._class,
                        buttons: n5.buttons,
                        platform: E2.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: e2(g5).find(T5.listSelector || 'ul,ol').length ? 'left' : 'right',
                        settings: {
                            activeClass: T5.activeClass,
                            ampmText: T5.ampmText,
                            amText: T5.amText,
                            animateIcons: T5.animateIcons,
                            backText: T5.backText,
                            baseTheme: T5.baseTheme,
                            buttons: T5.buttons,
                            btnClass: T5.btnClass,
                            btnWidth: T5.btnWidth,
                            closeIcon: T5.closeIcon,
                            context: T5.context == 'body' ? 'body' : '',
                            controls: T5.controls,
                            cssClass: T5.cssClass,
                            dateDisplay: T5.dateDisplay,
                            dateFormat: T5.dateFormat,
                            dateWheels: T5.dateWheels,
                            dayNames: T5.dayNames,
                            dayNamesShort: T5.dayNamesShort,
                            daySuffix: T5.daySuffix,
                            display: T5.display,
                            dayText: T5.dayText,
                            endYear: T5.endYear,
                            fixedHeader: T5.fixedHeader,
                            handleClass: T5.handleClass,
                            handleMarkup: T5.handleMarkup,
                            hideText: T5.hideText,
                            hourText: T5.hourText,
                            itemNode: T5.itemNode,
                            itemWidth: T5.itemWidth,
                            lang: T5.lang,
                            lapIcon: T5.lapIcon,
                            lapText: T5.lapText,
                            layout: T5.layout,
                            leftArrowClass: T5.leftArrowClass,
                            max: T5.max,
                            min: T5.min,
                            minuteText: T5.minuteText,
                            monthNames: T5.monthNames,
                            monthNamesShort: T5.monthNamesShort,
                            monthSuffix: T5.monthSuffix,
                            monthText: T5.monthText,
                            nowIcon: T5.nowIcon,
                            nowText: T5.nowText,
                            pmText: T5.pmText,
                            preset: T5.preset,
                            resetIcon: T5.resetIcon,
                            resetText: T5.resetText,
                            rightArrowClass: T5.rightArrowClass,
                            rtl: T5.rtl,
                            secText: T5.secText,
                            select: T5.select,
                            snap: T5.snap,
                            sort: T5.sort,
                            sortable: T5.sortable,
                            sortHandle: T5.sortHandle,
                            startIcon: T5.startIcon,
                            startText: T5.startText,
                            startYear: T5.startYear,
                            stepHour: T5.stepHour,
                            stepMinute: T5.stepMinute,
                            stepSecond: T5.stepSecond,
                            steps: T5.steps,
                            stopIcon: T5.stopIcon,
                            stopText: T5.stopText,
                            striped: T5.striped,
                            theme: T5.theme,
                            timeFormat: T5.timeFormat,
                            timeWheels: T5.timeWheels,
                            todayText: T5.todayText,
                            type: T5.type,
                            variant: T5.variant,
                            wrapperClass: T5.wrapperClass,
                            yearSuffix: T5.yearSuffix,
                            yearText: T5.yearText
                        }
                    };
                    var v9, e9, t9 = [],
                        l9 = {},
                        a9 = ['refresh', 'redraw', 'navigate', 'showMonthView', 'changeTab', 'addValue', 'removeValue', 'getDate', 'setDate', 'addEvent', 'removeEvent', 'getEvents', 'setEvents', 'setActiveDate', 'start', 'stop', 'reset', 'lap', 'resetlap', 'getTime', 'setTime', 'getEllapsedTime', 'setEllapsedTime'],
                        x9 = {
                            jsonp: 1,
                            getInst: 1,
                            init: 1,
                            destroy: 1
                        },
                        c9 = function S9(i9) {
                            n5[i9] = function() {
                                t9.push({
                                    func: i9,
                                    args: arguments
                                });
                            };
                        };
                    for (e9 in n5) {
                        if (typeof n5[e9] === 'function' && !x9[e9]) {
                            l9[e9] = n5[e9];
                            c9(e9);
                        }
                    }
                    for (v9 = 0; v9 < a9.length; v9++) {
                        c9(a9[v9]);
                    }
                    if (T5.preset == 'timer' && !I5.buttons) {
                        f9.settings.buttons = ['toggle', 'resetlap'];
                        if (T5.display !== 'inline') {
                            f9.settings.buttons.push('hide');
                        }
                    }
                    if (T5.preset == 'eventcalendar' && !I5.buttons && T5.display != 'inline') {
                        f9.settings.buttons = ['close'];
                    }
                  
                     
                        for (e9 in l9) {
                            n5[e9] = l9[e9];
                        }
                     
                        if (n5._hasPreset) {
                            r5 = E2.presets[n5._class][T5.preset];
                            if (r5) {
                                r5 = r5.call(g5, n5);
                                l2(T5, r5, I5);
                            }
                        }
                        n5._init(W9);
                        Q5('onInit');
                        for (v9 = 0; v9 < t9.length; v9++) {
                            n5[t9[v9].func].apply(n5, t9[v9].args);
                        }
                        t9 = null;
                        l9 = null;
                  
                }
            };
            n5.destroy = function() {
                if (n5) {
                    n5._destroy();
                    Q5('onDestroy');
                    delete c2[g5.id];
                    n5 = null;
                }
            };
            n5.tap = function(s9, J9, T9, n9, I9) {
                y7(n5, s9, J9, T9, n9, I9);
            };
            n5.trigger = function(r9, m9) {
                var Q9, g9, y9, k9 = [k5, m5, r5, I5];
                for (g9 = 0; g9 < 4; g9++) {
                    y9 = k9[g9];
                    if (y9 && y9[r9]) {
                        Q9 = y9[r9].call(g5, m9 || {}, n5);
                    }
                }
                return Q9;
            };
            n5.option = function(P0, C0) {
                var d0 = {};
                if ((typeof P0 === 'undefined' ? 'undefined' : L6(P0)) === 'object') {
                    d0 = P0;
                } else {
                    d0[P0] = C0;
                }
                n5.init(d0);
            };
            n5.getInst = function() {
                return n5;
            };
            I5 = I5 || {};
            Q5 = n5.trigger;
            if (!n5.__ready) {
                d9();
            }
        };
     
 }(window, document));

	 
         var M7 = P.$;
         var R = {
             defaults: {
                 shortYearCutoff: '+10',
                 monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                 monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                 dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                 dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                 dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                 amText: 'am',
                 pmText: 'pm',
                 getYear: function q0(E0) {
                     return E0.getFullYear();
                 },
                 getMonth: function e0(v0) {
                     return v0.getMonth();
                 },
                 getDay: function t0(l0) {
                     return l0.getDate();
                 },
                 getDate: m4,
                 getMaxDayOfMonth: function f0(c0, W0) {
                     return 32 - new Date(c0, W0, 32, 12).getDate();
                 },
                 getWeekNumber: function a0(O0) {
                     O0 = new Date(O0);
                     O0.setHours(0, 0, 0);
                     O0.setDate(O0.getDate() + 4 - (O0.getDay() || 7));
                     var p0 = new Date(O0.getFullYear(), 0, 1);
                     return Math.ceil(((O0 - p0) / 86400000 + 1) / 7);
                 }
             },
             adjustedDate: m4,
             formatDate: function x0(T0, i0, Q0) {
                 if (!i0) {
                     return null;
                 }
                 var o0 = M7.extend({}, R.defaults, Q0),
                     n0 = function k0(P6i) {
                         var m0 = 0;
                         while (s0 + 1 < T0.length && T0.charAt(s0 + 1) == P6i) {
                             m0++;
                             s0++;
                         }
                         return m0;
                     },
                     J0 = function d6i(B6i, Y6i, h6i) {
                         var C6i = '' + Y6i;
                         if (n0(B6i)) {
                             while (C6i.length < h6i) {
                                 C6i = '0' + C6i;
                             }
                         }
                         return C6i;
                     },
                     r0 = function A6i(w6i, H6i, M6i, U6i) {
                         return n0(w6i) ? U6i[H6i] : M6i[H6i];
                     },
                     s0, g0, S0 = '',
                     y0 = false;
                 for (s0 = 0; s0 < T0.length; s0++) {
                     if (y0) {
                         if (T0.charAt(s0) == "'" && !n0("'")) {
                             y0 = false;
                         } else {
                             S0 += T0.charAt(s0);
                         }
                     } else {
                         switch (T0.charAt(s0)) {
                             case 'd':
                                 S0 += J0('d', o0.getDay(i0), 2);
                                 break;
                             case 'D':
                                 S0 += r0('D', i0.getDay(), o0.dayNamesShort, o0.dayNames);
                                 break;
                             case 'o':
                                 S0 += J0('o', (i0.getTime() - new Date(i0.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                                 break;
                             case 'm':
                                 S0 += J0('m', o0.getMonth(i0) + 1, 2);
                                 break;
                             case 'M':
                                 S0 += r0('M', o0.getMonth(i0), o0.monthNamesShort, o0.monthNames);
                                 break;
                             case 'y':
                                 g0 = o0.getYear(i0);
                                 S0 += n0('y') ? g0 : (g0 % 100 < 10 ? '0' : '') + g0 % 100;
                                 break;
                             case 'h':
                                 var I0 = i0.getHours();
                                 S0 += J0('h', I0 > 12 ? I0 - 12 : I0 === 0 ? 12 : I0, 2);
                                 break;
                             case 'H':
                                 S0 += J0('H', i0.getHours(), 2);
                                 break;
                             case 'i':
                                 S0 += J0('i', i0.getMinutes(), 2);
                                 break;
                             case 's':
                                 S0 += J0('s', i0.getSeconds(), 2);
                                 break;
                             case 'a':
                                 S0 += i0.getHours() > 11 ? o0.pmText : o0.amText;
                                 break;
                             case 'A':
                                 S0 += i0.getHours() > 11 ? o0.pmText.toUpperCase() : o0.amText.toUpperCase();
                                 break;
                             case "'":
                                 if (n0("'")) {
                                     S0 += "'";
                                 } else {
                                     y0 = true;
                                 }
                                 break;
                             default:
                                 S0 += T0.charAt(s0);
                         }
                     }
                 }
                 return S0;
             },
             parseDate: function j6i(R6i, G6i, a6i) {
                 var K6i = M7.extend({}, R.defaults, a6i),
                     D6i = K6i.defaultValue && K6i.defaultValue.getTime ? K6i.defaultValue : new Date();
                 if (!R6i || !G6i) {
                     return D6i;
                 }
                 if (G6i.getTime) {
                     return G6i;
                 }
                 G6i = (typeof G6i === 'undefined' ? 'undefined' : L6(G6i)) == 'object' ? G6i.toString() : G6i + '';
                 var e6i = K6i.shortYearCutoff,
                     u6i = K6i.getYear(D6i),
                     X6i = K6i.getMonth(D6i) + 1,
                     F6i = K6i.getDay(D6i),
                     l6i = -1,
                     Z6i = D6i.getHours(),
                     W6i = D6i.getMinutes(),
                     f6i = 0,
                     b6i = -1,
                     t6i = false,
                     L6i = function O6i(x6i) {
                         var p6i = V6i + 1 < R6i.length && R6i.charAt(V6i + 1) == x6i;
                         if (p6i) {
                             V6i++;
                         }
                         return p6i;
                     },
                     N6i = function S6i(i6i) {
                         L6i(i6i);
                         var s6i = i6i == '@' ? 14 : i6i == '!' ? 20 : i6i == 'y' ? 4 : i6i == 'o' ? 3 : 2,
                             J6i = new RegExp('^\\d{1,' + s6i + '}'),
                             o6i = G6i.substr(z6i).match(J6i);
                         if (!o6i) {
                             return 0;
                         }
                         z6i += o6i[0].length;
                         return parseInt(o6i[0], 10);
                     },
                     E6i = function T6i(g6i, y6i, r6i) {
                         var I6i = L6i(g6i) ? r6i : y6i,
                             n6i;
                         for (n6i = 0; n6i < I6i.length; n6i++) {
                             if (G6i.substr(z6i, I6i[n6i].length).toLowerCase() == I6i[n6i].toLowerCase()) {
                                 z6i += I6i[n6i].length;
                                 return n6i + 1;
                             }
                         }
                         return 0;
                     },
                     v6i = function Q6i() {
                         z6i++;
                     },
                     z6i = 0,
                     V6i;
                 for (V6i = 0; V6i < R6i.length; V6i++) {
                     if (t6i) {
                         if (R6i.charAt(V6i) == "'" && !L6i("'")) {
                             t6i = false;
                         } else {
                             v6i();
                         }
                     } else {
                         switch (R6i.charAt(V6i)) {
                             case 'd':
                                 F6i = N6i('d');
                                 break;
                             case 'D':
                                 E6i('D', K6i.dayNamesShort, K6i.dayNames);
                                 break;
                             case 'o':
                                 l6i = N6i('o');
                                 break;
                             case 'm':
                                 X6i = N6i('m');
                                 break;
                             case 'M':
                                 X6i = E6i('M', K6i.monthNamesShort, K6i.monthNames);
                                 break;
                             case 'y':
                                 u6i = N6i('y');
                                 break;
                             case 'H':
                                 Z6i = N6i('H');
                                 break;
                             case 'h':
                                 Z6i = N6i('h');
                                 break;
                             case 'i':
                                 W6i = N6i('i');
                                 break;
                             case 's':
                                 f6i = N6i('s');
                                 break;
                             case 'a':
                                 b6i = E6i('a', [K6i.amText, K6i.pmText], [K6i.amText, K6i.pmText]) - 1;
                                 break;
                             case 'A':
                                 b6i = E6i('A', [K6i.amText, K6i.pmText], [K6i.amText, K6i.pmText]) - 1;
                                 break;
                             case "'":
                                 if (L6i("'")) {
                                     v6i();
                                 } else {
                                     t6i = true;
                                 }
                                 break;
                             default:
                                 v6i();
                         }
                     }
                 }
                 if (u6i < 100) {
                     u6i += new Date().getFullYear() - new Date().getFullYear() % 100 + (u6i <= (typeof e6i != 'string' ? e6i : new Date().getFullYear() % 100 + parseInt(e6i, 10)) ? 0 : -100);
                 }
                 if (l6i > -1) {
                     X6i = 1;
                     F6i = l6i;
                     do {
                         var c6i = 32 - new Date(u6i, X6i - 1, 32, 12).getDate();
                         if (F6i <= c6i) {
                             break;
                         }
                         X6i++;
                         F6i -= c6i;
                     } while (true);
                 }
                 Z6i = b6i == -1 ? Z6i : b6i && Z6i < 12 ? Z6i + 12 : !b6i && Z6i == 12 ? 0 : Z6i;
                 var q6i = K6i.getDate(u6i, X6i - 1, F6i, Z6i, W6i, f6i);
                 if (K6i.getYear(q6i) != u6i || K6i.getMonth(q6i) + 1 != X6i || K6i.getDay(q6i) != F6i) {
                     return D6i;
                 }
                 return q6i;
             }
         };
         P.util.datetime = R;
        
		 
 var B3;
         var C3;
         var A = P.$;
         var d3 = P.platform;
         var y6 = P.util;
         var u7 = P.classes;
         var P3 = P.themes;
         var N7 = y6.constrain;
         var m1 = y6.isString;
         var N1 = y6.getCoord;
         var z1 = y6.animEnd;
         var i4 = /(iphone|ipod)/i.test(navigator.userAgent) && d3.majorVersion >= 7;
         var x4 = d3.name == 'ios' && d3.majorVersion == 8;
         var D = function k6i() {};
         var K7 = function m6i(P1i) {
             P1i.preventDefault();
         };
         var U6 = function d1i(s1i, i1i, d3i) {
             function P3i(C3i) {
                 if (G1i) {
                     G1i.removeClass('mbsc-fr-btn-a');
                 }
                 G1i = A(this);
                 if (!G1i.hasClass('mbsc-fr-btn-d') && !G1i.hasClass('mbsc-fr-btn-nhl')) {
                     G1i.addClass('mbsc-fr-btn-a');
                 }
                 if (C3i.type === 'mousedown') {
                     A(document).on('mouseup', F1i);
                 } else if (C3i.type === 'pointerdown') {
                     A(document).on('pointerup', F1i);
                 }
             }

             function F1i(B3i) {
                 if (G1i) {
                     G1i.removeClass('mbsc-fr-btn-a');
                     G1i = null;
                 }
                 if (B3i.type === 'mouseup') {
                     A(document).off('mouseup', F1i);
                 } else if (B3i.type === 'pointerup') {
                     A(document).off('pointerup', F1i);
                 }
             }

             function g1i(Y3i) {
                 if (Y3i.keyCode == 13) {
                     C1i.select();
                 } else if (Y3i.keyCode == 27) {
                     C1i.cancel();
                 }
             }

             function y1i(h3i) {
                 if (!h3i) {
                     S1i.focus();
                 }
                 C1i.ariaMessage(B1i.ariaMessage);
             }

             function r1i(w3i) {
                 var H3i = B3,
                     A3i = B1i.focusOnClose;
                 C1i._markupRemove();
                 Y1i.remove();
                 if (H1i) {
                     w1i.mbscModals--;
                     if (B1i.scrollLock) {
                         w1i.mbscLock--;
                     }
                     if (!w1i.mbscLock) {
                         z1i.removeClass('mbsc-fr-lock');
                     }
                     if (!w1i.mbscModals) {
                         z1i.removeClass('mbsc-fr-lock-ios mbsc-fr-lock-ctx');
                         if (b1i) {
                             Z1i.css({
                                 top: '',
                                 left: ''
                             });
                             U1i.scrollLeft(t1i);
                             U1i.scrollTop(W1i);
                         }
                         if (!w3i) {
                             if (!H3i) {
                                 H3i = h1i;
                             }
                             setTimeout(function() {
                                 if (A3i === undefined || A3i === true) {
                                     C3 = true;
                                     H3i[0].focus();
                                 } else if (A3i) {
                                     A(A3i)[0].focus();
                                 }
                             }, 200);
                         }
                     }
                 }
                 B3 = null;
                 C1i._isVisible = false;
                 a1i = false;
                 M1i('onHide');
             }

             function Q1i(M3i) {
                 clearTimeout(p1i[M3i.type]);
                 p1i[M3i.type] = setTimeout(function() {
                     var j3i, U3i = M3i.type == 'scroll';
                     if (U3i && !e1i) {
                         return;
                     }
                     C1i.position(!U3i);
                     if (M3i.type == 'orientationchange') {
                         j1i.style.display = 'none';
                         j3i = j1i.offsetHeight;
                         j1i.style.display = '';
                     }
                 }, 200);
             }

             function k1i(K3i) {
                 if (K3i.target.nodeType && !j1i.contains(K3i.target)) {
                     j1i.focus();
                 }
             }

             function q1i(Z3i, G3i) {
                 if (Z3i) {
                     Z3i();
                 }
                 if (C1i.show() !== false) {
                     B3 = G3i;
                     setTimeout(function() {
                         C3 = false;
                     }, 300);
                 }
             }

             function n1i() {
                 C1i._fillValue();
                 M1i('onSet', {
                     valueText: C1i._value
                 });
             }

             function I1i() {
                 M1i('onCancel', {
                     valueText: C1i._value
                 });
             }

             function m1i() {
                 C1i.setVal(null, true);
             }
             var v1i, Z1i, J1i, z1i, Y1i, E1i, o1i, D1i, U1i, x1i, X1i, G1i, w1i, A1i, N1i, H1i, a1i, V1i, u1i, K1i, R1i, b1i, S1i, j1i, L1i, l1i, B1i, t1i, e1i, W1i, T1i, M1i, f1i, c1i, C1i = this,
                 h1i = A(s1i),
                 O1i = [],
                 p1i = {};
             u7.Base.call(this, s1i, i1i, true);
             C1i.position = function(p3i) {
                 var L3i, a3i, e3i, v3i, R3i, l3i, f3i, c3i, W3i, t3i, O3i, N3i, u3i, q3i, X3i, F3i, E3i = {},
                     D3i = 0,
                     V3i = 0,
                     b3i = 0,
                     z3i = 0;
                 if (l1i || !a1i) {
                     return;
                 }
                 C1i._position(Y1i);
                 N3i = V1i.offsetHeight;
                 u3i = V1i.offsetWidth;
                 if (f1i === u3i && c1i === N3i && p3i) {
                     return;
                 }
                 if (C1i._isFullScreen || /top|bottom/.test(B1i.display)) {
                     D1i.width(u3i);
                 } else {
                     x1i.width('');
                 }
                 if (M1i('onPosition', {
                         target: V1i,
                         windowWidth: u3i,
                         windowHeight: N3i
                     }) === false || !H1i) {
                     return;
                 }
                 A('.mbsc-comp', Y1i).each(function() {
                     var x3i = P.instances[this.id];
                     if (x3i && x3i !== C1i && x3i.position) {
                         x3i.position();
                     }
                 });
                 if (!C1i._isFullScreen && /center|bubble/.test(B1i.display)) {
                     A('.mbsc-w-p', Y1i).each(function() {
                         q3i = this.getBoundingClientRect().width;
                         z3i += q3i;
                         b3i = q3i > b3i ? q3i : b3i;
                     });
                     x1i.css({
                         'width': C1i._isLiquid ? Math.min(B1i.maxPopupWidth, u3i - 16) : Math.ceil(z3i > u3i ? b3i : z3i),
                         'white-space': z3i > u3i ? '' : 'nowrap'
                     });
                 }
                 u1i = j1i.offsetWidth;
                 K1i = j1i.offsetHeight;
                 e1i = K1i <= N3i && u1i <= u3i;
                 if (R1i) {
                     D3i = U1i.scrollLeft();
                     V3i = U1i.scrollTop();
                 }
                 if (B1i.display == 'center') {
                     F3i = Math.max(0, D3i + (u3i - u1i) / 2);
                     X3i = Math.max(0, V3i + (N3i - K1i) / 2);
                 } else if (B1i.display == 'bubble') {
                     L3i = B1i.anchor === undefined ? h1i : A(B1i.anchor);
                     f3i = A('.mbsc-fr-arr-i', Y1i)[0];
                     v3i = L3i.offset();
                     R3i = v3i.top + (N1i ? V3i - Z1i.offset().top : 0);
                     l3i = v3i.left + (N1i ? D3i - Z1i.offset().left : 0);
                     a3i = L3i[0].offsetWidth;
                     e3i = L3i[0].offsetHeight;
                     c3i = f3i.offsetWidth;
                     W3i = f3i.offsetHeight;
                     F3i = N7(l3i - (u1i - a3i) / 2, D3i + 8, D3i + u3i - u1i - 8);
                     X3i = R3i - K1i - W3i / 2;
                     if (X3i < V3i || R3i > V3i + N3i) {
                         D1i.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
                         X3i = R3i + e3i + W3i / 2;
                     } else {
                         D1i.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
                     }
                     A('.mbsc-fr-arr', Y1i).css({
                         left: N7(l3i + a3i / 2 - (F3i + (u1i - c3i) / 2), 0, c3i)
                     });
                     e1i = X3i > V3i && F3i > D3i && X3i + K1i <= V3i + N3i && F3i + u1i <= D3i + u3i;
                 } else {
                     F3i = D3i;
                     X3i = B1i.display == 'top' ? V3i : Math.max(0, V3i + N3i - K1i);
                 }
                 if (R1i) {
                     t3i = Math.max(X3i + K1i, N1i ? w1i.scrollHeight : A(document).height());
                     O3i = Math.max(F3i + u1i, N1i ? w1i.scrollWidth : A(document).width());
                     o1i.css({
                         width: O3i,
                         height: t3i
                     });
                     if (B1i.scroll && B1i.display == 'bubble' && (X3i + K1i + 8 > V3i + N3i || R3i > V3i + N3i || R3i + e3i < V3i)) {
                         l1i = true;
                         setTimeout(function() {
                             l1i = false;
                         }, 300);
                         U1i.scrollTop(Math.min(R3i, X3i + K1i - N3i + 8, t3i - N3i));
                     }
                 }
                 E3i.top = Math.floor(X3i);
                 E3i.left = Math.floor(F3i);
                 D1i.css(E3i);
                 f1i = u3i;
                 c1i = N3i;
             };
             C1i.attachShow = function(J3i, o3i) {
                 var i3i, S3i = A(J3i),
                     s3i = S3i.prop('readonly');
                 if (B1i.display !== 'inline') {
                     if ((B1i.showOnFocus || B1i.showOnTap) && S3i.is('input,select')) {
                         S3i.prop('readonly', true).on('mousedown.mbsc', function(T3i) {
                             T3i.preventDefault();
                         }).on('focus.mbsc', function() {
                             if (C1i._isVisible) {
                                 this.blur();
                             }
                         });
                         i3i = A('label[for="' + S3i.attr('id') + '"]');
                         if (!i3i.length) {
                             i3i = S3i.closest('label');
                         }
                     }
                     if (S3i.is('select')) {
                         return;
                     }
                     if (B1i.showOnFocus) {
                         S3i.on('focus.mbsc', function() {
                             if (!C3) {
                                 q1i(o3i, S3i);
                             }
                         });
                     }
                     if (B1i.showOnTap) {
                         S3i.on('keydown.mbsc', function(n3i) {
                             if (n3i.keyCode == 32 || n3i.keyCode == 13) {
                                 n3i.preventDefault();
                                 n3i.stopPropagation();
                                 q1i(o3i, S3i);
                             }
                         });
                         C1i.tap(S3i, function() {
                             q1i(o3i, S3i);
                         });
                         if (i3i && i3i.length) {
                             C1i.tap(i3i, function() {
                                 q1i(o3i, S3i);
                             });
                         }
                     }
                     O1i.push({
                         readOnly: s3i,
                         el: S3i,
                         lbl: i3i
                     });
                 }
             };
             C1i.select = function() {
                 if (H1i) {
                     C1i.hide(false, 'set', false, n1i);
                 } else {
                     n1i();
                 }
             };
             C1i.cancel = function() {
                 if (H1i) {
                     C1i.hide(false, 'cancel', false, I1i);
                 } else {
                     I1i();
                 }
             };
             C1i.clear = function() {
                 C1i._clearValue();
                 M1i('onClear');
                 if (H1i && C1i._isVisible && !C1i.live) {
                     C1i.hide(false, 'clear', false, m1i);
                 } else {
                     m1i();
                 }
             };
             C1i.enable = function() {
                 B1i.disabled = false;
                 if (C1i._isInput) {
                     h1i.prop('disabled', false);
                 }
             };
             C1i.disable = function() {
                 B1i.disabled = true;
                 if (C1i._isInput) {
                     h1i.prop('disabled', true);
                 }
             };
             C1i.show = function(P7i, r3i) {
                 function Q3i() {
                     Y1i.off(z1, Q3i).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + A1i).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + A1i);
                     y1i(r3i);
                 }
                 var d7i, g3i;
                 if (B1i.disabled || C1i._isVisible) {
                     return;
                 }
                 C1i._readValue();
                 if (M1i('onBeforeShow') === false) {
                     return false;
                 }
                 A1i = B1i.animate;
                 X1i = B1i.buttons || [];
                 R1i = N1i || B1i.display == 'bubble';
                 b1i = i4 && !R1i && B1i.scrollLock;
                 d7i = X1i.length > 0;
                 if (A1i !== false) {
                     if (B1i.display == 'top') {
                         A1i = A1i || 'slidedown';
                     } else if (B1i.display == 'bottom') {
                         A1i = A1i || 'slideup';
                     } else if (B1i.display == 'center' || B1i.display == 'bubble') {
                         A1i = A1i || 'pop';
                     }
                 }
                 if (H1i) {
                     W1i = Math.max(0, U1i.scrollTop());
                     t1i = Math.max(0, U1i.scrollLeft());
                     f1i = 0;
                     c1i = 0;
                     if (b1i && !z1i.hasClass('mbsc-fr-lock-ios')) {
                         Z1i.css({
                             top: -W1i + 'px',
                             left: -t1i + 'px'
                         });
                     }
                     z1i.addClass((B1i.scrollLock ? 'mbsc-fr-lock' : '') + (b1i ? ' mbsc-fr-lock-ios' : '') + (N1i ? ' mbsc-fr-lock-ctx' : ''));
                     if (A(document.activeElement).is('input,textarea')) {
                         document.activeElement.blur();
                     }
                     if (P.activeInstance) {
                         P.activeInstance.hide();
                     }
                     P.activeInstance = C1i;
                     w1i.mbscModals = w1i.mbscModals || 0;
                     w1i.mbscLock = w1i.mbscLock || 0;
                     w1i.mbscModals++;
                     if (B1i.scrollLock) {
                         w1i.mbscLock++;
                     }
                 }
                  g3i = '<div lang="' + B1i.lang + '" class="mbsc-fr mbsc-no-touch mbsc-' + B1i.theme + (B1i.baseTheme ? ' mbsc-' + B1i.baseTheme : '') + ' mbsc-fr-' + B1i.display + ' ' + (B1i.cssClass || '') + ' ' + (B1i.compClass || '') + (C1i._isLiquid ? ' mbsc-fr-liq' : '') +  (b1i ? ' mbsc-platform-ios' : '') + (d7i ? d7i.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (H1i ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + '<div class="mbsc-fr-popup' + (B1i.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (B1i.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + (B1i.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + '<div class="mbsc-fr-w"><div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (B1i.headerText ? '<div class="mbsc-fr-hdr">' + (m1(B1i.headerText) ? B1i.headerText : '') + '</div>' : '') + '<div class="mbsc-fr-c">';
                g3i += C1i._generateContent();
				g3i += '</div>';
				if (d7i) {
					g3i += '<div class="mbsc-fr-btn-cont">';
					A.each(X1i, function(b, a) {
						a = m1(a) ? C1i.buttons[a] : a;
						if (a.handler === 'set') {
							a.parentClass = 'mbsc-fr-btn-s';
						}
						if (a.handler === 'cancel') {
							a.parentClass = 'mbsc-fr-btn-c';
						}
						g3i += '<div' + (B1i.btnWidth ? ' style="width:' + 100 / d7i.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (a.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + b + ' mbsc-fr-btn-e ' + (a.cssClass === undefined ? B1i.btnClass : a.cssClass) + (a.icon ? ' mbsc-ic mbsc-ic-' + a.icon : '') + '">' + (a.text || '') + '</div></div>';
					});
					g3i += '</div>';
				}
                 g3i += '</div></div></div></div>' + (H1i ? '</div></div>' : '');
                 Y1i = A(g3i);
                 o1i = A('.mbsc-fr-persp', Y1i);
                 E1i = A('.mbsc-fr-scroll', Y1i);
                 x1i = A('.mbsc-fr-w', Y1i);
                 J1i = A('.mbsc-fr-hdr', Y1i);
                 D1i = A('.mbsc-fr-popup', Y1i);
                 v1i = A('.mbsc-fr-aria', Y1i);
                 V1i = Y1i[0];
                 S1i = E1i[0];
                 j1i = D1i[0];
                 C1i._markup = Y1i;
                 C1i._header = J1i;
                 C1i._isVisible = true;
                 L1i = 'orientationchange resize';
                 C1i._markupReady(Y1i);
                 M1i('onMarkupReady', {
                     target: V1i
                 });
                 if (H1i) {
                     A(window).on('keydown', g1i);
                     if (B1i.scrollLock) {
                         Y1i.on('touchmove mousewheel wheel', function(C7i) {
                             if (e1i) {
                                 C7i.preventDefault();
                             }
                         });
                     }
                     if (B1i.focusTrap) {
                         U1i.on('focusin', k1i);
                     }
                     if (B1i.closeOnOverlayTap) {
                         var y3i, I3i, k3i, m3i;
                         E1i.on('touchstart mousedown', function(B7i) {
                             if (!I3i && B7i.target == E1i[0]) {
                                 I3i = true;
                                 y3i = false;
                                 k3i = N1(B7i, 'X');
                                 m3i = N1(B7i, 'Y');
                             }
                         }).on('touchmove mousemove', function(Y7i) {
                             if (I3i && !y3i && (Math.abs(N1(Y7i, 'X') - k3i) > 9 || Math.abs(N1(Y7i, 'Y') - m3i) > 9)) {
                                 y3i = true;
                             }
                         }).on('touchcancel', function() {
                             I3i = false;
                         }).on('touchend touchcancel mouseup', function(h7i) {
                             if (I3i && !y3i) {
                                 C1i.cancel();
                                 if (h7i.type != 'mouseup') {
                                     y6.preventClick();
                                 }
                             }
                             I3i = false;
                         });
                     }
                     if (R1i) {
                         L1i += ' scroll';
                     }
                 }
                 setTimeout(function() {
                     if (H1i) {
                         Y1i.appendTo(Z1i);
                     } else if (h1i.is('div') && !C1i._hasContent) {
                         h1i.empty().append(Y1i);
                     } else {
                         if (h1i.hasClass('mbsc-control')) {
                             var A7i = h1i.closest('.mbsc-control-w');
                             Y1i.insertAfter(A7i);
                             if (A7i.hasClass('mbsc-select')) {
                                 A7i.addClass('mbsc-select-inline');
                             }
                         } else {
                             Y1i.insertAfter(h1i);
                         }
                     }
                     a1i = true;
                     C1i._markupInserted(Y1i);
                     M1i('onMarkupInserted', {
                         target: V1i
                     });
                     Y1i.on('selectstart mousedown', K7).on('click', '.mbsc-fr-btn-e', K7).on('keydown', '.mbsc-fr-btn-e', function(H7i) {
                         if (H7i.keyCode == 32) {
                             H7i.preventDefault();
                             H7i.stopPropagation();
                             this.click();
                         }
                     }).on('keydown', function(w7i) {
                         if (w7i.keyCode == 32) {
                             w7i.preventDefault();
                         } else if (w7i.keyCode == 9 && H1i && B1i.focusTrap) {
                             var M7i = Y1i.find('[tabindex="0"]').filter(function() {
                                     return this.offsetWidth > 0 || this.offsetHeight > 0;
                                 }),
                                 K7i = M7i.index(A(':focus', Y1i)),
                                 U7i = M7i.length - 1,
                                 j7i = 0;
                             if (w7i.shiftKey) {
                                 U7i = 0;
                                 j7i = -1;
                             }
                             if (K7i === U7i) {
                                 M7i.eq(j7i)[0].focus();
                                 w7i.preventDefault();
                             }
                         }
                     }).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', P3i).on('touchend', '.mbsc-fr-btn-e', F1i);
                     A('input,select,textarea', Y1i).on('selectstart mousedown', function(Z7i) {
                         Z7i.stopPropagation();
                     }).on('keydown', function(G7i) {
                         if (G7i.keyCode == 32) {
                             G7i.stopPropagation();
                         }
                     });
                     V1i.addEventListener('touchstart', function() {
                         if (!T1i) {
                             T1i = true;
                             Z1i.find('.mbsc-no-touch').removeClass('mbsc-no-touch');
                         }
                     }, true);
                     A.each(X1i, function(V7i, N7i) {
                         C1i.tap(A('.mbsc-fr-btn' + V7i, Y1i), function(u7i) {
                             N7i = m1(N7i) ? C1i.buttons[N7i] : N7i;
                             (m1(N7i.handler) ? C1i.handlers[N7i.handler] : N7i.handler).call(this, u7i, C1i);
                         }, true);
                     });
                     C1i._attachEvents(Y1i);
                     C1i.position();
                     U1i.on(L1i, Q1i);
                     if (H1i) {
                         if (A1i && !P7i) {
                             Y1i.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + A1i).on(z1, Q3i).find('.mbsc-fr-popup').addClass('mbsc-anim-' + A1i);
                         } else {
                             y1i(r3i);
                         }
                     }
                     M1i('onShow', {
                         target: V1i,
                         valueText: C1i._tempValue
                     });
                 }, b1i ? 100 : 0);
             };
             C1i.hide = function(X7i, D7i, F7i, R7i) {
                 function b7i() {
                     Y1i.off(z1, b7i);
                     r1i(X7i);
                 }
                 if (!C1i._isVisible || !F7i && !C1i._isValid && D7i == 'set' || !F7i && M1i('onBeforeClose', {
                         valueText: C1i._tempValue,
                         button: D7i
                     }) === false) {
                     return false;
                 }
                 if (H1i) {
                     if (A(document.activeElement).is('input,textarea') && j1i.contains(document.activeElement)) {
                         document.activeElement.blur();
                     }
                     A(window).off('keydown', g1i);
                     delete P.activeInstance;
                 }
                 if (Y1i) {
                     if (H1i && A1i && !X7i) {
                         Y1i.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + A1i).on(z1, b7i).find('.mbsc-fr-popup').addClass('mbsc-anim-' + A1i);
                     } else {
                         r1i(X7i);
                     }
                     C1i._detachEvents(Y1i);
                     U1i.off(L1i, Q1i).off('focusin', k1i);
                 }
                 if (R7i) {
                     R7i();
                 }
                 M1i('onClose', {
                     valueText: C1i._value
                 });
             };
             C1i.ariaMessage = function(z7i) {
                 v1i.html('');
                 setTimeout(function() {
                     v1i.html(z7i);
                 }, 100);
             };
             C1i.isVisible = function() {
                 return C1i._isVisible;
             };
             C1i.setVal = D;
             C1i.getVal = D;
             C1i._generateContent = D;
             C1i._attachEvents = D;
             C1i._detachEvents = D;
             C1i._readValue = D;
             C1i._clearValue = D;
             C1i._fillValue = D;
             C1i._markupReady = D;
             C1i._markupInserted = D;
             C1i._markupRemove = D;
             C1i._position = D;
             C1i.__processSettings = D;
             C1i.__init = D;
             C1i.__destroy = D;
             C1i._destroy = function() {
                 C1i.hide(true, false, true);
                 h1i.off('.mbsc');
                 A.each(O1i, function(q7i, L7i) {
                     L7i.el.off('.mbsc').prop('readonly', L7i.readOnly);
                     if (L7i.lbl) {
                         L7i.lbl.off('.mbsc');
                     }
                 });
                 C1i.__destroy();
             };
             C1i._processSettings = function() {
                 var E7i, e7i;
                 C1i.__processSettings();
                 B1i.buttons = B1i.buttons || (B1i.display !== 'inline' ? ['set', 'cancel'] : []);
                 B1i.headerText = B1i.headerText === undefined ? B1i.display !== 'inline' ? '{value}' : false : B1i.headerText;
                 X1i = B1i.buttons || [];
                 H1i = B1i.display !== 'inline';
                 N1i = B1i.context != 'body';
                 Z1i = A(B1i.context);
                 z1i = N1i ? Z1i : A('body,html');
                 w1i = Z1i[0];
                 C1i._window = U1i = A(N1i ? B1i.context : window);
                 C1i.live = true;
                 for (e7i = 0; e7i < X1i.length; e7i++) {
                     E7i = X1i[e7i];
                     if (E7i == 'ok' || E7i == 'set' || E7i.handler == 'set') {
                         C1i.live = false;
                     }
                 }
                 C1i.buttons.set = {
                     text: B1i.setText,
                     icon: B1i.setIcon,
                     handler: 'set'
                 };
                 C1i.buttons.cancel = {
                     text: B1i.cancelText,
                     icon: B1i.cancelIcon,
                     handler: 'cancel'
                 };
                 C1i.buttons.close = {
                     text: B1i.closeText,
                     icon: B1i.closeIcon,
                     handler: 'cancel'
                 };
                 C1i.buttons.clear = {
                     text: B1i.clearText,
                     icon: B1i.clearIcon,
                     handler: 'clear'
                 };
                 C1i._isInput = h1i.is('input');
             };
             C1i._init = function() {
                 if (C1i._isVisible) {
                     C1i.hide(true, false, true);
                 }
                 h1i.off('.mbsc');
                 C1i.__init();
                 C1i._isLiquid = B1i.layout == 'liquid';
                 if (H1i) {
                     C1i._readValue();
                     if (!C1i._hasContent) {
                         C1i.attachShow(h1i);
                     }
                 } else {
                     C1i.show();
                 }
                 h1i.on('change.mbsc', function() {
                     if (!C1i._preventChange) {
                         C1i.setVal(h1i.val(), true, false);
                     }
                     C1i._preventChange = false;
                 });
             };
             C1i.buttons = {};
             C1i.handlers = {
                 set: C1i.select,
                 cancel: C1i.cancel,
                 clear: C1i.clear
             };
             C1i._value = null;
             C1i._isValid = true;
             C1i._isVisible = false;
             B1i = C1i.settings;
             M1i = C1i.trigger;
             if (!d3i) {
                 C1i.init(i1i);
             }
         };
         U6.prototype._defaults = {
             lang: 'en',
             setText: 'Set',
             selectedText: '{count} selected',
             closeText: 'Close',
             cancelText: 'Cancel',
             clearText: 'Clear',
             context: 'body',
             maxPopupWidth: 600,
             disabled: false,
             closeOnOverlayTap: true,
             showOnFocus: false,
             showOnTap: true,
             display: 'center',
             scroll: true,
             scrollLock: true,
             tap: true,
             btnClass: 'mbsc-fr-btn',
             btnWidth: true,
             focusTrap: true,
             focusOnClose: !x4
         };
         u7.Frame = U6;
         P3.frame.mobiscroll = {
             headerText: false,
             btnWidth: false
         };
         P3.scroller.mobiscroll = A.extend({}, P3.frame.mobiscroll, {
             rows: 5,
             showLabel: false,
             selectedLineBorder: 1,
             weekDays: 'min',
             checkIcon: 'ion-ios7-checkmark-empty',
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
         });
         A(window).on('focus', function() {
             if (B3) {
                 C3 = true;
             }
         });
		
         var f6 = P.$;
         var j7 = P.classes;
         var h6 = P.util;
         var j6 = h6.constrain;
         var w7 = h6.jsPrefix;
         var z4 = h6.prefix;
         var G1 = h6.getCoord;
         var A7 = h6.getPosition;
         var j4 = h6.testTouch;
         var R1 = h6.isNumeric;
         var M4 = h6.isString;
         var w4 = /(iphone|ipod|ipad)/i.test(navigator.userAgent);
         var H4 = function v7i() {};
         var m3 = window.requestAnimationFrame || function(t7i) {
             t7i();
         };
         var O3 = window.cancelAnimationFrame || H4;
         var P1 = function l7i(k7i, V4i, f4i) {
             function E4i(c4i) {
                 o7i('onStart', {
                     domEvent: c4i
                 });
                 if (f7i.stopProp) {
                     c4i.stopPropagation();
                 }
                 if (f7i.prevDef || c4i.type == 'mousedown') {
                     c4i.preventDefault();
                 }
                 if (f7i.readonly || f7i.lock && r7i) {
                     return;
                 }
                 if (j4(c4i, this) && !h4i) {
                     if (s7i) {
                         s7i.removeClass('mbsc-btn-a');
                     }
                     d4i = false;
                     if (!r7i) {
                         s7i = f6(c4i.target).closest('.mbsc-btn-e', this);
                         if (s7i.length && !s7i.hasClass('mbsc-btn-d')) {
                             d4i = true;
                             F4i = setTimeout(function() {
                                 s7i.addClass('mbsc-btn-a');
                             }, 100);
                         }
                     }
                     h4i = true;
                     m7i = false;
                     P4i = false;
                     a7i.scrolled = r7i;
                     N4i = G1(c4i, 'X');
                     t4i = G1(c4i, 'Y');
                     u4i = l4i = N4i;
                     A4i = 0;
                     B4i = 0;
                     O7i = 0;
                     q4i = new Date();
                     S7i = +A7(I7i, c7i) || 0;
                     if (r7i) {
                         w4i(S7i, w4 ? 0 : 1);
                     }
                     if (c4i.type === 'mousedown') {
                         f6(document).on('mousemove', H4i).on('mouseup', K4i);
                     }
                 }
             }

             function H4i(W4i) {
                 if (h4i) {
                     if (f7i.stopProp) {
                         W4i.stopPropagation();
                     }
                     u4i = G1(W4i, 'X');
                     b4i = G1(W4i, 'Y');
                     A4i = u4i - N4i;
                     B4i = b4i - t4i;
                     O7i = c7i ? B4i : A4i;
                     if (d4i && (Math.abs(B4i) > f7i.thresholdY || Math.abs(A4i) > f7i.thresholdX)) {
                         clearTimeout(F4i);
                         s7i.removeClass('mbsc-btn-a');
                         d4i = false;
                     }
                     if (a7i.scrolled || !P4i && Math.abs(O7i) > L4i) {
                         if (!m7i) {
                             o7i('onGestureStart', W7i);
                         }
                         a7i.scrolled = m7i = true;
                         if (!Q7i) {
                             Q7i = true;
                             j4i = m3(v4i);
                         }
                     }
                     if (c7i || f7i.scrollLock) {
                         W4i.preventDefault();
                     } else {
                         if (a7i.scrolled) {
                             W4i.preventDefault();
                         } else if (Math.abs(B4i) > 7) {
                             P4i = true;
                             a7i.scrolled = true;
                             n7i.trigger('touchend');
                         }
                     }
                 }
             }

             function v4i() {
                 if (y7i) {
                     O7i = j6(O7i, -x7i * y7i, x7i * y7i);
                 }
                 w4i(j6(S7i + O7i, T7i - X4i, J7i + X4i));
                 Q7i = false;
             }

             function K4i(p4i) {
                 if (h4i) {
                     var a4i, O4i = new Date() - q4i;
                     if (f7i.stopProp) {
                         p4i.stopPropagation();
                     }
                     O3(j4i);
                     Q7i = false;
                     if (!P4i && a7i.scrolled) {
                         if (f7i.momentum && O4i < 300) {
                             a4i = O7i / O4i;
                             O7i = Math.max(Math.abs(O7i), a4i * a4i / f7i.speedUnit) * (O7i < 0 ? -1 : 1);
                         }
                         e4i(O7i);
                     }
                     if (d4i) {
                         clearTimeout(F4i);
                         s7i.addClass('mbsc-btn-a');
                         setTimeout(function() {
                             s7i.removeClass('mbsc-btn-a');
                         }, 100);
                         if (!P4i && !a7i.scrolled) {
                             o7i('onBtnTap', {
                                 target: s7i[0]
                             });
                         }
                     }
                     if (p4i.type == 'mouseup') {
                         f6(document).off('mousemove', H4i).off('mouseup', K4i);
                     }
                     h4i = false;
                 }
             }

             function R4i(x4i) {
                 x4i = x4i.originalEvent || x4i;
                 O7i = c7i ? x4i.deltaY || x4i.wheelDelta || x4i.detail : x4i.deltaX;
                 o7i('onStart', {
                     domEvent: x4i
                 });
                 if (f7i.stopProp) {
                     x4i.stopPropagation();
                 }
                 if (O7i) {
                     x4i.preventDefault();
                     if (x4i.deltaMode && x4i.deltaMode == 1) {
                         O7i *= 5;
                     }
                     O7i = j6(-O7i, -20, 20);
                     S7i = p7i;
                     if (f7i.readonly || S7i + O7i < T7i || S7i + O7i > J7i) {
                         return;
                     }
                     if (!m7i) {
                         W7i = {
                             posX: c7i ? 0 : p7i,
                             posY: c7i ? p7i : 0,
                             originX: c7i ? 0 : S7i,
                             originY: c7i ? S7i : 0,
                             direction: O7i > 0 ? c7i ? 270 : 360 : c7i ? 90 : 180
                         };
                         o7i('onGestureStart', W7i);
                     }
                     if (!Q7i) {
                         Q7i = true;
                         j4i = m3(v4i);
                     }
                     m7i = true;
                     clearTimeout(z4i);
                     z4i = setTimeout(function() {
                         O3(j4i);
                         Q7i = false;
                         m7i = false;
                         e4i(O7i);
                     }, 200);
                 }
             }

             function e4i(o4i) {
                 var S4i, s4i, i4i;
                 if (y7i) {
                     o4i = j6(o4i, -x7i * y7i, x7i * y7i);
                 }
                 i4i = j6(Math.round((S7i + o4i) / x7i) * x7i, T7i, J7i);
                 g7i = Math.round(i4i / x7i);
                 if (i7i) {
                     if (o4i < 0) {
                         for (S4i = i7i.length - 1; S4i >= 0; S4i--) {
                             if (Math.abs(i4i) + Y4i >= i7i[S4i].breakpoint) {
                                 g7i = S4i;
                                 U4i = 2;
                                 i4i = i7i[S4i].snap2;
                                 break;
                             }
                         }
                     } else if (o4i >= 0) {
                         for (S4i = 0; S4i < i7i.length; S4i++) {
                             if (Math.abs(i4i) <= i7i[S4i].breakpoint) {
                                 g7i = S4i;
                                 U4i = 1;
                                 i4i = i7i[S4i].snap1;
                                 break;
                             }
                         }
                     }
                     i4i = j6(i4i, T7i, J7i);
                 }
                 s4i = f7i.time || (p7i < T7i || p7i > J7i ? 1000 : Math.max(1000, Math.abs(i4i - p7i) * f7i.timeUnit));
                 W7i.destinationX = c7i ? 0 : i4i;
                 W7i.destinationY = c7i ? i4i : 0;
                 W7i.duration = s4i;
                 W7i.transitionTiming = C4i;
                 o7i('onGestureEnd', W7i);
                 w4i(i4i, s4i);
             }

             function w4i(J4i, T4i, r4i, y4i) {
                 var I4i = J4i != p7i,
                     g4i = T4i > 1,
                     n4i = function Q4i() {
                         clearInterval(M4i);
                         clearTimeout(Z4i);
                         r7i = false;
                         p7i = J4i;
                         W7i.posX = c7i ? 0 : J4i;
                         W7i.posY = c7i ? J4i : 0;
                         if (I4i) {
                             o7i('onMove', W7i);
                         }
                         if (g4i) {
                             o7i('onAnimationEnd', W7i);
                         }
                         if (y4i) {
                             y4i();
                         }
                     };
                 W7i = {
                     posX: c7i ? 0 : p7i,
                     posY: c7i ? p7i : 0,
                     originX: c7i ? 0 : S7i,
                     originY: c7i ? S7i : 0,
                     direction: J4i - p7i > 0 ? c7i ? 270 : 360 : c7i ? 90 : 180
                 };
                 p7i = J4i;
                 if (g4i) {
                     W7i.destinationX = c7i ? 0 : J4i;
                     W7i.destinationY = c7i ? J4i : 0;
                     W7i.duration = T4i;
                     W7i.transitionTiming = C4i;
                     o7i('onAnimationStart', W7i);
                 }
                 G4i[w7 + 'Transition'] = T4i ? z4 + 'transform ' + Math.round(T4i) + 'ms ' + C4i : '';
                 G4i[w7 + 'Transform'] = 'translate3d(' + (c7i ? '0,' + J4i + 'px,' : J4i + 'px,' + '0,') + '0)';
                 if (!I4i && !r7i || !T4i || T4i <= 1) {
                     n4i();
                 } else if (T4i) {
                     r7i = !r4i;
                     clearInterval(M4i);
                     M4i = setInterval(function() {
                         var k4i = +A7(I7i, c7i) || 0;
                         W7i.posX = c7i ? 0 : k4i;
                         W7i.posY = c7i ? k4i : 0;
                         o7i('onMove', W7i);
                         if (Math.abs(k4i - J4i) < 2) {
                             n4i();
                         }
                     }, 100);
                     clearTimeout(Z4i);
                     Z4i = setTimeout(function() {
                         n4i();
                     }, T4i);
                 }
                 if (f7i.sync) {
                     f7i.sync(J4i, T4i, C4i);
                 }
             }
             var s7i, F4i, Y4i, A4i, B4i, O7i, D4i, C4i, X4i, u4i, b4i, W7i, d4i, l4i, J7i, y7i, T7i, h4i, r7i, P4i, j4i, Q7i, m7i, z4i, M4i, x7i, i7i, S7i, q4i, N4i, t4i, G4i, I7i, Z4i, L4i, o7i, c7i, a7i = this,
                 p7i, g7i = 0,
                 U4i = 1,
                 f7i = V4i,
                 n7i = f6(k7i);
             j7.Base.call(this, k7i, V4i, true);
             a7i.scrolled = false;
             a7i.scroll = function(m4i, P8i, d8i, C8i) {
                 if (!R1(m4i)) {
                     m4i = Math.ceil((f6(m4i, k7i).length ? Math.round(I7i.offset()[D4i] - f6(m4i, k7i).offset()[D4i]) : p7i) / x7i) * x7i;
                 } else {
                     m4i = Math.round(m4i / x7i) * x7i;
                 }
                 m4i = j6(m4i, T7i, J7i);
                 g7i = Math.round(m4i / x7i);
                 S7i = p7i;
                 w4i(m4i, P8i, d8i, C8i);
             };
             a7i.refresh = function(Y8i) {
                 var B8i;
                 Y4i = f7i.contSize === undefined ? c7i ? n7i.height() : n7i.width() : f7i.contSize;
                 T7i = f7i.minScroll === undefined ? Math.min(0, c7i ? Y4i - I7i.height() : Y4i - I7i.width()) : f7i.minScroll;
                 J7i = f7i.maxScroll === undefined ? 0 : f7i.maxScroll;
                 i7i = null;
                 if (!c7i && f7i.rtl) {
                     B8i = J7i;
                     J7i = -T7i;
                     T7i = -B8i;
                 }
                 if (M4(f7i.snap)) {
                     i7i = [];
                     I7i.find(f7i.snap).each(function() {
                         var h8i = c7i ? this.offsetTop : this.offsetLeft,
                             A8i = c7i ? this.offsetHeight : this.offsetWidth;
                         i7i.push({
                             breakpoint: h8i + A8i / 2,
                             snap1: -h8i,
                             snap2: Y4i - h8i - A8i
                         });
                     });
                 }
                 x7i = R1(f7i.snap) ? f7i.snap : 1;
                 y7i = f7i.snap ? f7i.maxSnapScroll : 0;
                 C4i = f7i.easing;
                 X4i = f7i.elastic ? R1(f7i.snap) ? x7i : R1(f7i.elastic) ? f7i.elastic : 0 : 0;
                 if (p7i === undefined) {
                     p7i = f7i.initialPos;
                     g7i = Math.round(p7i / x7i);
                 }
                 if (!Y8i) {
                     a7i.scroll(f7i.snap ? i7i ? i7i[g7i]['snap' + U4i] : g7i * x7i : p7i);
                 }
             };
             a7i._processSettings = function() {
                 c7i = f7i.axis == 'Y';
                 D4i = c7i ? 'top' : 'left';
                 I7i = f7i.moveElement || n7i.children().eq(0);
                 G4i = I7i[0].style;
                 L4i = c7i ? f7i.thresholdY : f7i.thresholdX;
             };
             a7i._init = function() {
                 a7i.refresh();
                 n7i.on('touchstart mousedown', E4i).on('touchmove', H4i).on('touchend touchcancel', K4i);
                 if (f7i.mousewheel) {
                     n7i.on('wheel mousewheel', R4i);
                 }
                 if (k7i.addEventListener) {
                     k7i.addEventListener('click', function(H8i) {
                         if (a7i.scrolled) {
                             a7i.scrolled = false;
                             H8i.stopPropagation();
                             H8i.preventDefault();
                         }
                     }, true);
                 }
             };
             a7i._destroy = function() {
                 clearInterval(M4i);
                 n7i.off('touchstart mousedown', E4i).off('touchmove', H4i).off('touchend touchcancel', K4i).off('wheel mousewheel', R4i);
             };
             f7i = a7i.settings;
             o7i = a7i.trigger;
             if (!f4i) {
                 a7i.init(V4i);
             }
         };
         P1.prototype = {
             _class: 'scrollview',
             _defaults: {
                 speedUnit: 0.0022,
                 timeUnit: 3,
                 initialPos: 0,
                 axis: 'Y',
                 thresholdX: 10,
                 thresholdY: 5,
                 easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                 stopProp: true,
                 momentum: true,
                 mousewheel: true,
                 elastic: true
             }
         };
         j7.ScrollView = P1;
         P.presetShort('scrollview', 'ScrollView', false);
         var Y = P.$;
         var O6 = Y.extend;
         var c3 = P.platform;
         var D6 = P.util;
         var f3 = D6.jsPrefix;
         var Q1 = D6.prefix;
         var U1 = D6.getCoord;
         var k4 = D6.testTouch;
         var y1 = window.CSS;
         var n4 = y1 && y1.supports && y1.supports("(transform-style: preserve-3d)");
         var J4 = !n4 || c3.name == 'wp' || c3.name == 'android';
         P.presetShort('scroller', 'Scroller', false);
         var D3 = function w8i(F8i, g8i, A2i) {
             function d2i(w2i) {
                 var M2i = +Y(this).attr('data-index');
                 w2i.stopPropagation();
                 if (w2i.type === 'mousedown') {
                     w2i.preventDefault();
                 }
                 if (k4(w2i, this) && !n8i(M2i)) {
                     E8i = Y(this).addClass('mbsc-sc-btn-a');
                     r8i = U1(w2i, 'X');
                     k8i = U1(w2i, 'Y');
                     L8i = true;
                     c8i = false;
                     setTimeout(function() {
                         Q8i(M2i, E8i.attr('data-dir') == 'inc' ? 1 : -1);
                     }, 100);
                     if (w2i.type === 'mousedown') {
                         Y(document).on('mousemove', i8i).on('mouseup', o8i);
                     }
                 }
             }

             function i8i(U2i) {
                 if (Math.abs(r8i - U1(U2i, 'X')) > 7 || Math.abs(k8i - U1(U2i, 'Y')) > 7) {
                     S8i(true);
                 }
             }

             function o8i(j2i) {
                 S8i();
                 j2i.preventDefault();
                 if (j2i.type === 'mouseup') {
                     Y(document).off('mousemove', i8i).off('mouseup', o8i);
                 }
             }

             function C2i(K2i) {
                 var Z2i = Y(this).attr('data-index'),
                     G2i, N2i;
                 if (K2i.keyCode == 38) {
                     G2i = true;
                     N2i = -1;
                 } else if (K2i.keyCode == 40) {
                     G2i = true;
                     N2i = 1;
                 } else if (K2i.keyCode == 32) {
                     G2i = true;
                     I8i(Z2i, G8i[Z2i]._$markup.find('.mbsc-sc-itm[data-val="' + K8i[Z2i] + '"]'));
                 }
                 if (G2i) {
                     K2i.stopPropagation();
                     K2i.preventDefault();
                     if (N2i && !L8i) {
                         L8i = true;
                         c8i = false;
                         Q8i(Z2i, N2i);
                     }
                 }
             }

             function H2i() {
                 S8i();
             }

             function I8i(X2i, F2i) {
                 var V2i = G8i[X2i],
                     R2i = F2i.attr('data-index'),
                     u2i = q8i(V2i, R2i),
                     D2i = M8i._tempSelected[X2i],
                     b2i = D6.isNumeric(V2i.multiple) ? V2i.multiple : Infinity;
                 if (V8i('onItemTap', {
                         target: F2i[0],
                         index: X2i,
                         value: u2i,
                         selected: F2i.hasClass('mbsc-sc-itm-sel')
                     }) !== false) {
                     if (V2i.multiple && !V2i._disabled[u2i]) {
                         if (D2i[u2i] !== undefined) {
                             F2i.removeClass(X8i).removeAttr('aria-selected');
                             delete D2i[u2i];
                         } else {
                             if (b2i == 1) {
                                 M8i._tempSelected[X2i] = D2i = {};
                                 V2i._$markup.find('.mbsc-sc-itm-sel').removeClass(X8i).removeAttr('aria-selected');
                             }
                             if (D6.objectToArray(D2i).length < b2i) {
                                 F2i.addClass(X8i).attr('aria-selected', 'true');
                                 D2i[u2i] = u2i;
                             }
                         }
                     }
                     J8i(V2i, X2i, R2i, v8i, true, true, V2i.multiple);
                     if (M8i.live && !V2i.multiple && (U8i.setOnTap === true || U8i.setOnTap[X2i])) {
                         setTimeout(function() {
                             M8i.select();
                         }, 200);
                     }
                 }
             }

             function T8i(z2i, L2i) {
                 return (z2i._array ? z2i._map[L2i] : z2i.getIndex(L2i, M8i)) || 0;
             }

             function P2i(q2i, E2i) {
                 var e2i = q2i.data;
                 if (E2i >= q2i.min && E2i <= q2i.max) {
                     return q2i._array ? q2i.circular ? Y(e2i).get(E2i % q2i._length) : e2i[E2i] : Y.isFunction(e2i) ? e2i(E2i, M8i) : '';
                 }
             }

             function W8i(v2i) {
                 return Y.isPlainObject(v2i) ? v2i.value !== undefined ? v2i.value : v2i.display : v2i;
             }

             function h2i(t2i) {
                 var l2i = Y.isPlainObject(t2i) ? t2i.display : t2i;
                 return l2i === undefined ? '' : l2i;
             }

             function q8i(f2i, c2i) {
                 return W8i(P2i(f2i, c2i));
             }

             function Q8i(W2i, a2i) {
                 if (!c8i) {
                     m8i(W2i, a2i);
                 }
                 if (L8i) {
                     clearInterval(a8i);
                     a8i = setInterval(function() {
                         m8i(W2i, a2i);
                     }, U8i.delay);
                 }
             }

             function S8i(O2i) {
                 clearInterval(a8i);
                 c8i = O2i;
                 L8i = false;
                 if (E8i) {
                     E8i.removeClass('mbsc-sc-btn-a');
                 }
             }

             function m8i(x2i, S2i) {
                 var p2i = G8i[x2i];
                 J8i(p2i, x2i, p2i._current + S2i, v8i, S2i == 1 ? 1 : 2);
             }

             function n8i(i2i) {
                 return Y.isArray(U8i.readonly) ? U8i.readonly[i2i] : U8i.readonly;
             }

             function s8i(o2i, s2i, T2i) {
                 var J2i = o2i._index - o2i._batch;
                 o2i.data = o2i.data || [];
                 o2i.key = o2i.key !== undefined ? o2i.key : s2i;
                 o2i.label = o2i.label !== undefined ? o2i.label : s2i;
                 o2i._map = {};
                 o2i._array = Y.isArray(o2i.data);
                 if (o2i._array) {
                     o2i._length = o2i.data.length;
                     Y.each(o2i.data, function(n2i, I2i) {
                         o2i._map[W8i(I2i)] = n2i;
                     });
                 }
                 o2i.circular = U8i.circular === undefined ? o2i.circular === undefined ? o2i._array && o2i._length > U8i.rows : o2i.circular : Y.isArray(U8i.circular) ? U8i.circular[s2i] : U8i.circular;
                 o2i.min = o2i._array ? o2i.circular ? -Infinity : 0 : o2i.min === undefined ? -Infinity : o2i.min;
                 o2i.max = o2i._array ? o2i.circular ? Infinity : o2i._length - 1 : o2i.max === undefined ? Infinity : o2i.max;
                 o2i._nr = s2i;
                 o2i._index = T8i(o2i, K8i[s2i]);
                 o2i._disabled = {};
                 o2i._batch = 0;
                 o2i._current = o2i._index;
                 o2i._first = o2i._index - N8i;
                 o2i._last = o2i._index + N8i;
                 o2i._offset = o2i._first;
                 if (T2i) {
                     o2i._offset -= o2i._margin / j8i + (o2i._index - J2i);
                     o2i._margin += (o2i._index - J2i) * j8i;
                 } else {
                     o2i._margin = 0;
                 }
                 o2i._refresh = function(r2i) {
                     var g2i = -(o2i.min - o2i._offset + (o2i.multiple && !Z8i ? Math.floor(U8i.rows / 2) : 0)) * j8i,
                         y2i = Math.min(g2i, -(o2i.max - o2i._offset - (o2i.multiple && !Z8i ? Math.floor(U8i.rows / 2) : 0)) * j8i);
                     O6(o2i._scroller.settings, {
                         minScroll: y2i,
                         maxScroll: g2i
                     });
                     o2i._scroller.refresh(r2i);
                 };
                 p8i[o2i.key] = o2i;
                 return o2i;
             }

             function D8i(P5i, h5i, K5i, j5i, A5i) {
                 var m2i, U5i, Q2i, k2i, H5i, B5i, M5i, Y5i, C5i = '',
                     d5i = M8i._tempSelected[h5i],
                     w5i = P5i._disabled || {};
                 for (m2i = K5i; m2i <= j5i; m2i++) {
                     Q2i = P2i(P5i, m2i);
                     H5i = h2i(Q2i);
                     k2i = W8i(Q2i);
                     U5i = Q2i && Q2i.cssClass !== undefined ? Q2i.cssClass : '';
                     B5i = Q2i && Q2i.label !== undefined ? Q2i.label : '';
                     M5i = Q2i && Q2i.invalid;
                     Y5i = k2i !== undefined && k2i == K8i[h5i] && !P5i.multiple;
                     C5i += '<div role="option" aria-selected="' + (d5i[k2i] ? true : false) + '" class="mbsc-sc-itm ' + (A5i ? 'mbsc-sc-itm-3d ' : '') + U5i + ' ' + (Y5i ? 'mbsc-sc-itm-sel ' : '') + (d5i[k2i] ? X8i : '') + (k2i === undefined ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (M5i ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (w5i[k2i] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + m2i + '" data-val="' + k2i + '"' + (B5i ? ' aria-label="' + B5i + '"' : '') + (Y5i ? ' aria-selected="true"' : '') + ' style="height:' + j8i + 'px;line-height:' + j8i + 'px;' + (A5i ? Q1 + 'transform:rotateX(' + (P5i._offset - m2i) * O8i % 360 + 'deg) translateZ(' + j8i * U8i.rows / 2 + 'px);' : '') + '">' + (b8i > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(j8i / b8i) + 'px;font-size:' + Math.round(j8i / b8i * 0.8) + 'px;">' : '') + H5i + (b8i > 1 ? '</div>' : '') + '</div>';
                 }
                 return C5i;
             }

             function B2i(G5i) {
                 var Z5i = U8i.headerText;
                 return Z5i ? typeof Z5i === 'function' ? Z5i.call(F8i, G5i) : Z5i.replace(/\{value\}/i, G5i) : '';
             }

             function Y2i(N5i, R5i, z5i) {
                 var b5i = Math.round(-z5i / j8i) + N5i._offset,
                     V5i = b5i - N5i._current,
                     u5i = N5i._first,
                     X5i = N5i._last,
                     D5i = u5i + N8i - u8i + 1,
                     F5i = X5i - N8i + u8i;
                 if (V5i) {
                     N5i._first += V5i;
                     N5i._last += V5i;
                     N5i._current = b5i;
                     if (V5i > 0) {
                         N5i._$scroller.append(D8i(N5i, R5i, Math.max(X5i + 1, u5i + V5i), X5i + V5i));
                         Y('.mbsc-sc-itm', N5i._$scroller).slice(0, Math.min(V5i, X5i - u5i + 1)).remove();
                         if (Z8i) {
                             N5i._$3d.append(D8i(N5i, R5i, Math.max(F5i + 1, D5i + V5i), F5i + V5i, true));
                             Y('.mbsc-sc-itm', N5i._$3d).slice(0, Math.min(V5i, F5i - D5i + 1)).attr('class', 'mbsc-sc-itm-del');
                         }
                     } else if (V5i < 0) {
                         N5i._$scroller.prepend(D8i(N5i, R5i, u5i + V5i, Math.min(u5i - 1, X5i + V5i)));
                         Y('.mbsc-sc-itm', N5i._$scroller).slice(Math.max(V5i, u5i - X5i - 1)).remove();
                         if (Z8i) {
                             N5i._$3d.prepend(D8i(N5i, R5i, D5i + V5i, Math.min(D5i - 1, F5i + V5i), true));
                             Y('.mbsc-sc-itm', N5i._$3d).slice(Math.max(V5i, D5i - F5i - 1)).attr('class', 'mbsc-sc-itm-del');
                         }
                     }
                     N5i._margin += V5i * j8i;
                     N5i._$scroller.css('margin-top', N5i._margin + 'px');
                 }
             }

             function y8i(a5i, L5i, W5i, O5i) {
                 var t5i, q5i = G8i[a5i],
                     l5i = O5i || q5i._disabled,
                     e5i = T8i(q5i, L5i),
                     c5i = L5i,
                     f5i = L5i,
                     E5i = 0,
                     v5i = 0;
                 if (L5i === undefined) {
                     L5i = q8i(q5i, e5i);
                 }
                 if (l5i[L5i] === true) {
                     t5i = 0;
                     while (e5i - E5i >= q5i.min && l5i[c5i] && t5i < 100) {
                         t5i++;
                         E5i++;
                         c5i = q8i(q5i, e5i - E5i);
                     }
                     t5i = 0;
                     while (e5i + v5i < q5i.max && l5i[f5i] && t5i < 100) {
                         t5i++;
                         v5i++;
                         f5i = q8i(q5i, e5i + v5i);
                     }
                     if ((v5i < E5i && v5i && W5i !== 2 || !E5i || e5i - E5i < 0 || W5i == 1) && !l5i[f5i]) {
                         L5i = f5i;
                     } else {
                         L5i = c5i;
                     }
                 }
                 return L5i;
             }

             function e8i(I5i, S5i, T5i, i5i, n5i, g5i) {
                 var o5i, s5i, J5i, p5i, x5i = M8i._isVisible;
                 z8i = true;
                 p5i = U8i.validate.call(F8i, {
                     values: K8i.slice(0),
                     index: S5i,
                     direction: T5i
                 }, M8i) || {};
                 z8i = false;
                 if (p5i.valid) {
                     M8i._tempWheelArray = K8i = p5i.valid.slice(0);
                 }
                 if (!g5i) {
                     Y.each(G8i, function(r5i, y5i) {
                         if (x5i) {
                             y5i._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
                         }
                         y5i._disabled = {};
                         if (p5i.disabled && p5i.disabled[r5i]) {
                             Y.each(p5i.disabled[r5i], function(m5i, k5i) {
                                 y5i._disabled[k5i] = true;
                                 if (x5i) {
                                     y5i._$markup.find('.mbsc-sc-itm[data-val="' + k5i + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
                                 }
                             });
                         }
                         K8i[r5i] = y5i.multiple ? K8i[r5i] : y8i(r5i, K8i[r5i], T5i);
                         if (x5i) {
                             if (!y5i.multiple || S5i === undefined) {
                                 y5i._$markup.find('.mbsc-sc-itm-sel').removeClass(X8i).removeAttr('aria-selected');
                             }
                             if (y5i.multiple) {
                                 if (S5i === undefined) {
                                     for (var Q5i in M8i._tempSelected[r5i]) {
                                         y5i._$markup.find('.mbsc-sc-itm[data-val="' + Q5i + '"]').addClass(X8i).attr('aria-selected', 'true');
                                     }
                                 }
                             } else {
                                 y5i._$markup.find('.mbsc-sc-itm[data-val="' + K8i[r5i] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
                             }
                             s5i = T8i(y5i, K8i[r5i]);
                             o5i = s5i - y5i._index + y5i._batch;
                             if (Math.abs(o5i) > 2 * N8i + 1) {
                                 J5i = o5i + (2 * N8i + 1) * (o5i > 0 ? -1 : 1);
                                 y5i._offset += J5i;
                                 y5i._margin -= J5i * j8i;
                                 y5i._refresh();
                             }
                             y5i._index = s5i + y5i._batch;
                             y5i._scroller.scroll(-(s5i - y5i._offset + y5i._batch) * j8i, S5i === r5i || S5i === undefined ? I5i : v8i, n5i);
                         }
                     });
                 }
                 V8i('onValidated');
                 M8i._tempValue = U8i.formatValue(K8i, M8i);
                 if (x5i) {
                     M8i._header.html(B2i(M8i._tempValue));
                 }
                 if (M8i.live) {
                     M8i._hasValue = i5i || M8i._hasValue;
                     l8i(i5i, i5i, 0, true);
                     if (i5i) {
                         V8i('onSet', {
                             valueText: M8i._value
                         });
                     }
                 }
                 if (i5i) {
                     V8i('onChange', {
                         valueText: M8i._tempValue
                     });
                 }
             }

             function J8i(P9i, C9i, B9i, Y9i, h9i, A9i, H9i) {
                 var d9i = q8i(P9i, B9i);
                 if (d9i !== undefined) {
                     K8i[C9i] = d9i;
                     P9i._batch = P9i._array ? Math.floor(B9i / P9i._length) * P9i._length : 0;
                     setTimeout(function() {
                         e8i(Y9i, C9i, h9i, true, A9i, H9i);
                     }, 10);
                 }
             }

             function l8i(U9i, M9i, j9i, K9i, Z9i) {
                 if (!K9i) {
                     e8i(j9i);
                 } else {
                     M8i._tempValue = U8i.formatValue(M8i._tempWheelArray, M8i);
                 }
                 if (!Z9i) {
                     M8i._wheelArray = [];
                     for (var w9i = 0; w9i < K8i.length; w9i++) {
                         M8i._wheelArray[w9i] = G8i[w9i] && G8i[w9i].multiple ? Object.keys(M8i._tempSelected[w9i])[0] : K8i[w9i];
                     }
                     M8i._value = M8i._hasValue ? M8i._tempValue : null;
                     M8i._selected = O6(true, {}, M8i._tempSelected);
                 }
                 if (U9i) {
                     if (M8i._isInput) {
                         f8i.val(M8i._hasValue ? M8i._tempValue : '');
                     }
                     V8i('onFill', {
                         valueText: M8i._hasValue ? M8i._tempValue : '',
                         change: M9i
                     });
                     if (M9i) {
                         M8i._preventChange = true;
                         f8i.trigger('change');
                     }
                 }
             }
             var x8i, E8i, u8i, N8i = 40,
                 v8i = 1000,
                 O8i, Z8i, X8i, R8i, a8i, L8i, c8i, r8i, k8i, K8i, j8i, t8i, z8i, U8i, V8i, b8i, G8i, p8i, M8i = this,
                 f8i = Y(F8i);
             U6.call(this, F8i, g8i, true);
             M8i.setVal = M8i._setVal = function(G9i, N9i, V9i, u9i, X9i) {
                 M8i._hasValue = G9i !== null && G9i !== undefined;
                 M8i._tempWheelArray = K8i = Y.isArray(G9i) ? G9i.slice(0) : U8i.parseValue.call(F8i, G9i, M8i) || [];
                 l8i(N9i, V9i === undefined ? N9i : V9i, X9i, false, u9i);
             };
             M8i.getVal = M8i._getVal = function(F9i) {
                 var D9i = M8i._hasValue || F9i ? M8i[F9i ? '_tempValue' : '_value'] : null;
                 return D6.isNumeric(D9i) ? +D9i : D9i;
             };
             M8i.setArrayVal = M8i.setVal;
             M8i.getArrayVal = function(R9i) {
                 return R9i ? M8i._tempWheelArray : M8i._wheelArray;
             };
             M8i.changeWheel = function(L9i, q9i, E9i) {
                 var z9i, b9i;
                 Y.each(L9i, function(e9i, v9i) {
                     b9i = p8i[e9i];
                     z9i = b9i._nr;
                     if (b9i) {
                         O6(b9i, v9i);
                         s8i(b9i, z9i, true);
                         if (M8i._isVisible) {
                             if (Z8i) {
                                 b9i._$3d.html(D8i(b9i, z9i, b9i._first + N8i - u8i + 1, b9i._last - N8i + u8i, true));
                             }
                             b9i._$scroller.html(D8i(b9i, z9i, b9i._first, b9i._last)).css('margin-top', b9i._margin + 'px');
                             b9i._refresh(z8i);
                         }
                     }
                 });
                 if (M8i._isVisible && !M8i._isLiquid && !z8i) {
                     M8i.position();
                 }
                 if (!z8i) {
                     e8i(q9i, undefined, undefined, E9i);
                 }
             };
             M8i.getValidValue = y8i;
             M8i._generateContent = function() {
                 var W9i, f9i = 0,
                     l9i = '',
                     c9i = Z8i ? Q1 + 'transform: translateZ(' + (j8i * U8i.rows / 2 + 3) + 'px);' : '',
                     a9i = '<div class="mbsc-sc-whl-l" style="' + c9i + 'height:' + j8i + 'px;margin-top:-' + (j8i / 2 + (U8i.selectedLineBorder || 0)) + 'px;"></div>',
                     t9i = 0;
                 Y.each(U8i.wheels, function(p9i, O9i) {
                     l9i += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (U8i.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + a9i + '<div class="mbsc-sc-whl-gr' + (Z8i ? ' mbsc-sc-whl-gr-3d' : '') + (R8i ? ' mbsc-sc-cp' : '') + (U8i.width || U8i.maxWidth ? '"' : '" style="max-width:' + U8i.maxPopupWidth + 'px;"') + '>';
                     Y.each(O9i, function(S9i, x9i) {
                         M8i._tempSelected[t9i] = O6({}, M8i._selected[t9i]);
                         G8i[t9i] = s8i(x9i, t9i);
                         f9i += U8i.maxWidth ? U8i.maxWidth[t9i] || U8i.maxWidth : U8i.width ? U8i.width[t9i] || U8i.width : 0;
                         W9i = x9i.label !== undefined ? x9i.label : S9i;
                         l9i += '<div class="mbsc-sc-whl-w ' + (x9i.cssClass || '') + (x9i.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (U8i.width ? 'width:' + (U8i.width[t9i] || U8i.width) + 'px;' : (U8i.minWidth ? 'min-width:' + (U8i.minWidth[t9i] || U8i.minWidth) + 'px;' : '') + (U8i.maxWidth ? 'max-width:' + (U8i.maxWidth[t9i] || U8i.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + c9i + '"></div>' + a9i + '<div tabindex="0" aria-live="off" aria-label="' + W9i + '"' + (x9i.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + t9i + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + U8i.rows * j8i * (Z8i ? 1.1 : 1) + 'px;">' + (R8i ? '<div data-index="' + t9i + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (U8i.btnPlusClass || '') + '" style="height:' + j8i + 'px;line-height:' + j8i + 'px;"></div>' + '<div data-index="' + t9i + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (U8i.btnMinusClass || '') + '" style="height:' + j8i + 'px;line-height:' + j8i + 'px;"></div>' : '') + '<div class="mbsc-sc-lbl">' + W9i + '</div>' + '<div class="mbsc-sc-whl-c"' + ' style="height:' + t8i + 'px;margin-top:-' + (t8i / 2 + 1) + 'px;' + c9i + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (t8i - j8i) / 2 + 'px;">';
                         l9i += D8i(x9i, t9i, x9i._first, x9i._last) + '</div></div>';
                         if (Z8i) {
                             l9i += '<div class="mbsc-sc-whl-3d" style="height:' + j8i + 'px;margin-top:-' + j8i / 2 + 'px;">';
                             l9i += D8i(x9i, t9i, x9i._first + N8i - u8i + 1, x9i._last - N8i + u8i, true);
                             l9i += '</div>';
                         }
                         l9i += '</div></div>';
                         t9i++;
                     });
                     l9i += '</div></div>';
                 });
                 if (f9i) {
                     U8i.maxPopupWidth = f9i;
                 }
                 return l9i;
             };
             M8i._attachEvents = function(i9i) {
                 Y('.mbsc-sc-btn', i9i).on('touchstart mousedown', d2i).on('touchmove', i8i).on('touchend touchcancel', o8i);
                 Y('.mbsc-sc-whl', i9i).on('keydown', C2i).on('keyup', H2i);
             };
             M8i._detachEvents = function() {
                 for (var o9i = 0; o9i < G8i.length; o9i++) {
                     G8i[o9i]._scroller.destroy();
                 }
             };
             M8i._markupReady = function(s9i) {
                 x8i = s9i;
                 Y('.mbsc-sc-whl', x8i).each(function(T9i) {
                     var g9i, n9i = Y(this),
                         J9i = G8i[T9i],
                         I9i = -(J9i.min - J9i._offset + (J9i.multiple && !Z8i ? Math.floor(U8i.rows / 2) : 0)) * j8i,
                         y9i = Math.min(I9i, -(J9i.max - J9i._offset - (J9i.multiple && !Z8i ? Math.floor(U8i.rows / 2) : 0)) * j8i);
                     J9i._$markup = n9i;
                     J9i._$scroller = Y('.mbsc-sc-whl-sc', this);
                     J9i._$3d = Y('.mbsc-sc-whl-3d', this);
                     J9i._scroller = new P1(this, {
                         mousewheel: U8i.mousewheel,
                         moveElement: J9i._$scroller,
                         initialPos: (J9i._first - J9i._index) * j8i,
                         contSize: 0,
                         snap: j8i,
                         minScroll: y9i,
                         maxScroll: I9i,
                         maxSnapScroll: N8i,
                         prevDef: true,
                         stopProp: true,
                         timeUnit: 3,
                         easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                         sync: function r9i(k9i, Q9i, m9i) {
                             if (Z8i) {
                                 J9i._$3d[0].style[f3 + 'Transition'] = Q9i ? Q1 + 'transform ' + Math.round(Q9i) + 'ms ' + m9i : '';
                                 J9i._$3d[0].style[f3 + 'Transform'] = 'rotateX(' + -k9i / j8i * O8i + 'deg)';
                             }
                         },
                         onStart: function P0i(C0i, d0i) {
                             d0i.settings.readonly = n8i(T9i);
                         },
                         onGestureStart: function B0i() {
                             n9i.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                             V8i('onWheelGestureStart', {
                                 index: T9i
                             });
                         },
                         onGestureEnd: function Y0i(h0i) {
                             var A0i = h0i.direction == 90 ? 1 : 2,
                                 H0i = h0i.duration,
                                 w0i = h0i.destinationY;
                             g9i = Math.round(-w0i / j8i) + J9i._offset;
                             J8i(J9i, T9i, g9i, H0i, A0i);
                         },
                         onAnimationStart: function M0i() {
                             n9i.addClass('mbsc-sc-whl-anim');
                         },
                         onAnimationEnd: function U0i() {
                             n9i.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                             V8i('onWheelAnimationEnd', {
                                 index: T9i
                             });
                             J9i._$3d.find('.mbsc-sc-itm-del').remove();
                         },
                         onMove: function j0i(K0i) {
                             Y2i(J9i, T9i, K0i.posY);
                         },
                         onBtnTap: function Z0i(G0i) {
                             I8i(T9i, Y(G0i.target));
                         }
                     });
                 });
                 e8i();
             };
             M8i._fillValue = function() {
                 M8i._hasValue = true;
                 l8i(true, true, 0, true);
             };
             M8i._clearValue = function() {
                 Y('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', x8i).removeClass(X8i).removeAttr('aria-selected');
             };
             M8i._readValue = function() {
                 var V0i = f8i.val() || '',
                     N0i = 0;
                 if (V0i !== '') {
                     M8i._hasValue = true;
                 }
                 M8i._tempWheelArray = K8i = M8i._hasValue && M8i._wheelArray ? M8i._wheelArray.slice(0) : U8i.parseValue.call(F8i, V0i, M8i) || [];
                 M8i._tempSelected = O6(true, {}, M8i._selected);
                 Y.each(U8i.wheels, function(X0i, u0i) {
                     Y.each(u0i, function(F0i, D0i) {
                         G8i[N0i] = s8i(D0i, N0i);
                         N0i++;
                     });
                 });
                 l8i(false, false, 0, true);
                 V8i('onRead');
             };
             M8i.__processSettings = function() {
                 U8i = M8i.settings;
                 V8i = M8i.trigger;
                 b8i = U8i.multiline;
                 X8i = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + U8i.checkIcon;
                 G8i = [];
                 p8i = {};
             };
             M8i.__init = function() {
                 R8i = U8i.showScrollArrows;
                 Z8i = U8i.scroll3d && !J4 && !R8i;
                 j8i = U8i.height;
                 t8i = Z8i ? Math.round((j8i - (j8i * U8i.rows / 2 + 3) * 0.03) / 2) * 2 : j8i;
                 u8i = Math.round(U8i.rows * 1.8);
                 O8i = 360 / (u8i * 2);
                 if (R8i) {
                     U8i.rows = Math.max(3, U8i.rows);
                 }
                 U8i.cssClass = (U8i.cssClass || '') + ' mbsc-sc';
             };
             M8i._getItemValue = W8i;
             M8i._tempSelected = {};
             M8i._selected = {};
             if (!A2i) {
                 M8i.init(g8i);
             }
         };
         D3.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _hasPreset: true,
             _class: 'scroller',
             _defaults: O6({}, U6.prototype._defaults, {
                 minWidth: 80,
                 height: 40,
                 rows: 3,
                 multiline: 1,
                 delay: 300,
                 readonly: false,
                 showLabel: true,
                 setOnTap: false,
                 wheels: [],
                 preset: '',
                 speedUnit: 0.0012,
                 timeUnit: 0.08,
                 checkIcon: 'checkmark',
                 validate: function R0i() {},
                 formatValue: function b0i(z0i) {
                     return z0i.join(' ');
                 },
                 parseValue: function L0i(E0i, q0i) {
                     var e0i = [],
                         v0i = [],
                         t0i = 0,
                         l0i, f0i;
                     if (E0i !== null && E0i !== undefined) {
                         e0i = (E0i + '').split(' ');
                     }
                     Y.each(q0i.settings.wheels, function(W0i, c0i) {
                         Y.each(c0i, function(O0i, a0i) {
                             f0i = a0i.data;
                             l0i = q0i._getItemValue(f0i[0]);
                             Y.each(f0i, function(x0i, p0i) {
                                 if (e0i[t0i] == q0i._getItemValue(p0i)) {
                                     l0i = q0i._getItemValue(p0i);
                                     return false;
                                 }
                             });
                             v0i.push(l0i);
                             t0i++;
                         });
                     });
                     return v0i;
                 }
             })
         };
         P.classes.Scroller = D3;
        
		
		
		 (function(S3f) {
	 
        var W3f = P,
            D3f = W3f.$,
            R0f = R.adjustedDate,
            z0f = {
                separator: ' ',
                dateFormat: 'mm/dd/yy',
                dateDisplay: 'MMddyy',
                timeFormat: 'h:ii A',
                dayText: 'Day',
                monthText: 'Month',
                yearText: 'Year',
                hourText: 'Hours',
                minuteText: 'Minutes',
                ampmText: '&nbsp;',
                secText: 'Seconds',
                nowText: 'Now',
                todayText: 'Today'
            },
            N0f = function(f0f) {
                function j0f(T21, f21, r11, x21, F21, l21, C21, P21) {
                    var a21, q21, h11, K21, c21, H21, j11, b21, y21, I11, G11, e11, s11, D11, z21, w21, N21, S11, W11, R21, i21 = {},
                        g11 = T0f.getDate(x21, F21, l21),
                        n11 = ['a', 'h', 'i', 's'];
                    if (T21) {
                        for (j11 = 0; j11 < T21.length; j11++) {
                            G11 = T21[j11];
                            if (G11.start) {
                                G11.apply = false;
                                h11 = G11.d;
                                N21 = h11 + '';
                                S11 = N21.split('/');
                                if (h11 && (h11.getTime && x21 == T0f.getYear(h11) && F21 == T0f.getMonth(h11) && l21 == T0f.getDay(h11) || !N21.match(/w/i) && (S11[1] && l21 == S11[1] && F21 == S11[0] - 1 || !S11[1] && l21 == S11[0]) || N21.match(/w/i) && g11.getDay() == +N21.replace('w', ''))) {
                                    G11.apply = true;
                                    i21[g11] = true;
                                }
                            }
                        }
                        for (j11 = 0; j11 < T21.length; j11++) {
                            G11 = T21[j11];
                            a21 = 0;
                            w21 = 0;
                            b21 = w0f[r11];
                            y21 = q0f[r11];
                            D11 = true;
                            z21 = true;
                            q21 = false;
                            if (G11.start && (G11.apply || !G11.d && !i21[g11])) {
                                e11 = G11.start.split(':');
                                s11 = G11.end.split(':');
                                for (I11 = 0; I11 < 3; I11++) {
                                    if (e11[I11] === S3f) {
                                        e11[I11] = 0;
                                    }
                                    if (s11[I11] === S3f) {
                                        s11[I11] = 59;
                                    }
                                    e11[I11] = +e11[I11];
                                    s11[I11] = +s11[I11];
                                }
                                if (r11 == 'tt') {
                                    b21 = H0f(Math.round((new Date(g11).setHours(e11[0], e11[1], e11[2]) - new Date(g11).setHours(0, 0, 0, 0)) / 1000), Q0f, 0, 86400);
                                    y21 = H0f(Math.round((new Date(g11).setHours(s11[0], s11[1], s11[2]) - new Date(g11).setHours(0, 0, 0, 0)) / 1000), Q0f, 0, 86400);
                                } else {
                                    e11.unshift(e11[0] > 11 ? 1 : 0);
                                    s11.unshift(s11[0] > 11 ? 1 : 0);
                                    if (P0f) {
                                        if (e11[1] >= 12) {
                                            e11[1] = e11[1] - 12;
                                        }
                                        if (s11[1] >= 12) {
                                            s11[1] = s11[1] - 12;
                                        }
                                    }
                                    for (I11 = 0; I11 < f21; I11++) {
                                        if (F0f[I11] !== S3f) {
                                            W11 = H0f(e11[I11], c0f[n11[I11]], w0f[n11[I11]], q0f[n11[I11]]);
                                            R21 = H0f(s11[I11], c0f[n11[I11]], w0f[n11[I11]], q0f[n11[I11]]);
                                            K21 = 0;
                                            c21 = 0;
                                            H21 = 0;
                                            if (P0f && I11 == 1) {
                                                K21 = e11[0] ? 12 : 0;
                                                c21 = s11[0] ? 12 : 0;
                                                H21 = F0f[0] ? 12 : 0;
                                            }
                                            if (!D11) {
                                                W11 = 0;
                                            }
                                            if (!z21) {
                                                R21 = q0f[n11[I11]];
                                            }
                                            if ((D11 || z21) && (W11 + K21 < F0f[I11] + H21 && F0f[I11] + H21 < R21 + c21)) {
                                                q21 = true;
                                            }
                                            if (F0f[I11] != W11) {
                                                D11 = false;
                                            }
                                            if (F0f[I11] != R21) {
                                                z21 = false;
                                            }
                                        }
                                    }
                                    if (!P21) {
                                        for (I11 = f21 + 1; I11 < 4; I11++) {
                                            if (e11[I11] > 0) {
                                                a21 = c0f[r11];
                                            }
                                            if (s11[I11] < q0f[n11[I11]]) {
                                                w21 = c0f[r11];
                                            }
                                        }
                                    }
                                    if (!q21) {
                                        W11 = H0f(e11[f21], c0f[r11], w0f[r11], q0f[r11]) + a21;
                                        R21 = H0f(s11[f21], c0f[r11], w0f[r11], q0f[r11]) - w21;
                                        if (D11) {
                                            b21 = W11;
                                        }
                                        if (z21) {
                                            y21 = R21;
                                        }
                                    }
                                }
                                if (D11 || z21 || q21) {
                                    for (I11 = b21; I11 <= y21; I11 += c0f[r11]) {
                                        C21[I11] = !P21;
                                    }
                                }
                            }
                        }
                    }
                }

                function g0f(J11, O11, k11, V11, B11, u11, o11) {
                    var X11, v11, L11, Y11;
                    if (J11) {
                        for (v11 = 0; v11 < J11.length; v11++) {
                            X11 = J11[v11];
                            Y11 = X11 + '';
                            if (!X11.start) {
                                if (X11.getTime) {
                                    if (T0f.getYear(X11) == O11 && T0f.getMonth(X11) == k11) {
                                        u11[T0f.getDay(X11)] = o11;
                                    }
                                } else if (!Y11.match(/w/i)) {
                                    Y11 = Y11.split('/');
                                    if (Y11[1]) {
                                        if (Y11[0] - 1 == k11) {
                                            u11[Y11[1]] = o11;
                                        }
                                    } else {
                                        u11[Y11[0]] = o11;
                                    }
                                } else {
                                    Y11 = +Y11.replace('w', '');
                                    for (L11 = Y11 - V11; L11 < B11; L11 += 7) {
                                        if (L11 >= 0) {
                                            u11[L11 + 1] = o11;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                function s0f(M11, p11) {
                    var Q11, m11, Z11;
                    if (p11) {
                        for (m11 = 0; m11 < p11.length; m11++) {
                            Q11 = p11[m11];
                            Z11 = Q11 + '';
                            if (!Q11.start) {
                                if (Q11.getTime) {
                                    if (M11.getFullYear() == Q11.getFullYear() && M11.getMonth() == Q11.getMonth() && M11.getDate() == Q11.getDate()) {
                                        return true;
                                    }
                                } else if (!Z11.match(/w/i)) {
                                    Z11 = Z11.split('/');
                                    if (Z11[1]) {
                                        if (Z11[0] - 1 == M11.getMonth() && Z11[1] == M11.getDate()) {
                                            return true;
                                        }
                                    } else if (Z11[0] == M11.getDate()) {
                                        return true;
                                    }
                                } else {
                                    Z11 = +Z11.replace('w', '');
                                    if (Z11 == M11.getDay()) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                }

                function x0f(t11, U11) {
                    if (!U11 && t11 < b0f) {
                        return false;
                    }
                    if (!U11 && t11 > a0f) {
                        return false;
                    }
                    if (s0f(t11, L0f)) {
                        return true;
                    }
                    if (s0f(t11, X0f)) {
                        return false;
                    }
                    return true;
                }

                function F51(F11, C11) {
                    var w11, a11, P11 = false,
                        i11 = false,
                        A11 = 0,
                        E11 = 0,
                        d11 = b0f ? C0f(E0f(b0f)) : -Infinity,
                        x11 = a0f ? C0f(E0f(a0f)) : Infinity;
                    if (x0f(F11)) {
                        return F11;
                    }
                    if (F11 < d11) {
                        F11 = d11;
                    }
                    if (F11 > x11) {
                        F11 = x11;
                    }
                    w11 = F11;
                    a11 = F11;
                    if (C11 !== 2) {
                        P11 = x0f(w11);
                        while (!P11 && w11 < x11) {
                            w11 = new Date(w11.getTime() + 1000 * 60 * 60 * 24);
                            P11 = x0f(w11);
                            A11++;
                        }
                    }
                    if (C11 !== 1) {
                        i11 = x0f(a11);
                        while (!i11 && a11 > d11) {
                            a11 = new Date(a11.getTime() - 1000 * 60 * 60 * 24);
                            i11 = x0f(a11);
                            E11++;
                        }
                    }
                    if (C11 === 1 && P11) {
                        return w11;
                    }
                    if (C11 === 2 && i11) {
                        return a11;
                    }
					
                    return E11 <= A11 && i11 ? a11 : w11;
                }

                function w51(q11) {
                    var l11, c11, K11, H11 = {};
                    if (q11.is('input')) {
                        switch (q11.attr('type')) {
                            case 'date':
                                l11 = 'yy-mm-dd';
                                break;
                            case 'datetime':
                                l11 = 'yy-mm-ddTHH:ii:ssZ';
                                break;
                            case 'datetime-local':
                                l11 = 'yy-mm-ddTHH:ii:ss';
                                break;
                            case 'month':
                                l11 = 'yy-mm';
                                H11.dateOrder = 'mmyy';
                                break;
                            case 'time':
                                l11 = 'HH:ii:ss';
                                break;
                        }
                        H11.format = l11;
                        c11 = q11.attr('min');
                        K11 = q11.attr('max');
                        if (c11) {
                            H11.min = R.parseDate(l11, c11);
                        }
                        if (K11) {
                            H11.max = R.parseDate(l11, K11);
                        }
                    }
                    return H11;
                }

                function a51(y11, b11) {
                    return b11 ? Math.floor(new Date(y11) / 86400000) : y11.getMonth() + 12 * (y11.getFullYear() - 1970);
                }

                function E0f(R11, f11) {
                    var z11, W51, N11 = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                        T11 = [];
                    if (R11 === null || R11 === S3f) {
                        return R11;
                    }
                    for (z11 = 0; z11 < N11.length; z11++) {
                        W51 = N11[z11];
                        if (y0f[W51] !== S3f) {
                            T11[y0f[W51]] = l0f[W51](R11);
                        }
                        if (f11) {
                            A0f[W51] = l0f[W51](R11);
                        }
                    }
                    return T11;
                }

                function C0f(n51) {
                    var G51, j51 = new Date(new Date().setHours(0, 0, 0, 0));
                    if (n51 === null) {
                        return n51;
                    }
                    if (y0f.dd !== S3f) {
                        G51 = n51[y0f.dd].split('-');
                        G51 = new Date(G51[0], G51[1] - 1, G51[2]);
                    }
                    if (y0f.tt !== S3f) {
                        G51 = G51 || j51;
                        G51 = new Date(G51.getTime() + n51[y0f.tt] % 86400 * 1000);
                    }
                    var g51 = K0f(n51, 'y', G51, j51),
                        h51 = K0f(n51, 'm', G51, j51),
                        D51 = Math.min(K0f(n51, 'd', G51, j51), T0f.getMaxDayOfMonth(g51, h51)),
                        S51 = K0f(n51, 'h', G51, j51);
                    return T0f.getDate(g51, h51, D51, P0f && K0f(n51, 'a', G51, j51) ? S51 + 12 : S51, K0f(n51, 'i', G51, j51), K0f(n51, 's', G51, j51), K0f(n51, 'u', G51, j51));
                }

                function K0f(e51, O51, s51, r51) {
                    var I51;
                    if (y0f[O51] !== S3f) {
                        I51 = +e51[y0f[O51]];
                        if (!isNaN(I51)) {
                            return I51;
                        }
                    }
                    if (s51) {
                        return l0f[O51](s51);
                    }
                    if (A0f[O51] !== S3f) {
                        return A0f[O51];
                    }
                    return l0f[O51](r51);
                }

                function T51(V51) {
                    return H0f(Math.round((V51.getTime() - new Date(V51).setHours(0, 0, 0, 0)) / 1000), Q0f, 0, 86400);
                }

                function W0f(B51) {
                    return B51.getFullYear() + '-' + z51(B51.getMonth() + 1) + '-' + z51(B51.getDate());
                }

                function f51(k51) {
                    return k51.getHours() > 11 ? 1 : 0;
                }

                function y51(J51) {
                    return J51.getMilliseconds();
                }

                function b51(o51) {
                    return H0f(o51.getSeconds(), Z0f, u0f, B0f);
                }

                function l51(u51) {
                    return H0f(u51.getMinutes(), i0f, U0f, V0f);
                }

                function H51(v51) {
                    var L51 = v51.getHours();
                    L51 = P0f && L51 >= 12 ? L51 - 12 : L51;
                    return H0f(L51, t0f, m0f, I0f);
                }

                function q51(X51) {
                    return T0f.getDay(X51);
                }

                function c51(Y51) {
                    return T0f.getMonth(Y51);
                }

                function K51(p51) {
                    return T0f.getYear(p51);
                }

                function J0f(M51, Q51, m51) {
                    return Math.floor((m51 - Q51) / M51) * M51 + Q51;
                }

                function H0f(t51, A51, U51, Z51) {
                    return Math.min(Z51, Math.floor(t51 / A51) * A51 + U51);
                }

                function R51(C51) {
                    var d51, x51, P51, E51 = [];
                    if (C51) {
                        for (d51 = 0; d51 < C51.length; d51++) {
                            x51 = C51[d51];
                            if (x51.start && x51.start.getTime) {
                                P51 = new Date(x51.start);
                                while (P51 <= x51.end) {
                                    E51.push(R0f(P51.getFullYear(), P51.getMonth(), P51.getDate()));
                                    P51.setDate(P51.getDate() + 1);
                                }
                            } else {
                                E51.push(x51);
                            }
                        }
                        return E51;
                    }
                    return C51;
                }
				
				function ai(a) {
					return {
						value: a,
						display: (/yy/i.test(Y0f) ? a : (a + '').substr(2, 2)) + (T0f.yearSuffix || '')
					};
				}
				 
				function ad(a) {
					return a;
				}
				
				function ak(b) {
					var a = /d/i.test(b);
					
					return {
						label: '',
						cssClass: 'mbsc-dt-whl-date',
						min: (b0f) ? a51(W0f(b0f), a) : -Infinity,
						max: (a0f) ? a51(W0f(a0f), a) : Infinity,
						data: function(e) {
							var g = new Date(new Date().setHours(0, 0, 0, 0)),
								d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
							if (a) {
								d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
							}
							return {
								invalid: a && !x0f(d, true),
								value: W0f(d),
								display: g.getTime() == d.getTime() ? T0f.todayText : R.formatDate(b, d, T0f)
							};
						},
						getIndex: function(b) {
							return a51(b, a);
						}
					};
				}
				
				function ab(d) {
					var a, b, g, e = [];
					if (/s/i.test(d)) {
						b = z;
					} else if (/i/i.test(d)) {
						b = i0f * 60;
					} else if (/h/i.test(d)) {
						b = t0f * 3600;
					}
					Q0f = c0f.tt = b;
					for (a = 0; a < 86400; a += b) {
						g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
						e.push({
							value: a,
							display: R.formatDate(d, g, T0f)
						});
					}
					return {
						label: '',
						cssClass: 'mbsc-dt-whl-time',
						data: e
					};
				}
				

				 function a6() {
						var p, s, c, l, b, g, e, n, d = 0,
							o = [],
							m = [],
							i = [];
						if (M0f.match(/date/i)) {
							p = SS0f.split(/\|/.test(SS0f) ? '|' : '');
							for (l = 0; l < p.length; l++) {
								c = p[l];
								g = 0;
								if (c.length) {
									if (/y/i.test(c)) {
										g++;
									}
									if (/m/i.test(c)) {
										g++;
									}
									if (/d/i.test(c)) {
										g++;
									}
									

									if (g > 1 && y0f.dd === S3f) {
										y0f.dd = d;
										d++;		
										m.push(ak(c));
										i = m;
										a2 = true;
									} else if (/y/i.test(c) && y0f.y === S3f) {
										y0f.y = d;
										d++;
										
										m.push({
											cssClass: 'mbsc-dt-whl-y',
											label: T0f.yearText,
											min: (b0f) ? T0f.getYear(b0f) : -Infinity,
											max: (a0f) ? T0f.getYear(a0f) : Infinity,
											data: ai,
											getIndex: ad
										});
										
									} else if (/m/i.test(c) && y0f.m === S3f) {
										y0f.m = d;
										e = [];
										d++;
										for (b = 0; b < 12; b++) {
											n = Y0f.replace(/[dy]/gi, '').replace(/mm/, z51(b + 1) + (T0f.monthSuffix || '')).replace(/m/, b + 1 + (T0f.monthSuffix || ''));
											e.push({
												value: b,
												display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + T0f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + T0f.monthNamesShort[b] + '</span>')
											});
										}
										m.push({
											cssClass: 'mbsc-dt-whl-m',
											label: T0f.monthText,
											data: e
										});
									} else if (/d/i.test(c) && y0f.d === S3f) {
										y0f.d = d;
										e = [];
										d++;
										for (b = 1; b < 32; b++) {
											e.push({
												value: b,
												display: (/dd/i.test(Y0f) ? z51(b) : b) + (T0f.daySuffix || '')
											});
										}
										m.push({
											cssClass: 'mbsc-dt-whl-d',
											label: T0f.dayText,
											data: e
										});
									}
								}
							}
							o.push(m);
						}
						if (M0f.match(/time/i)) {
							s = h0f.split(/\|/.test(h0f) ? '|' : '');
							for (l = 0; l < s.length; l++) {
								c = s[l];
								g = 0;
								if (c.length) {
									if (/h/i.test(c)) {
										g++;
									}
									if (/i/i.test(c)) {
										g++;
									}
									if (/s/i.test(c)) {
										g++;
									}
									if (/a/i.test(c)) {
										g++;
									}
								}
								if (g > 1 && y0f.tt === S3f) {
									y0f.tt = d;
									d++;
									i.push(ab(c));
								} else if (/h/i.test(c) && y0f.h === S3f) {
									e = [];
									y0f.h = d;
									d++;
									for (b = m0f; b < (P0f ? 12 : 24); b += t0f) {
										e.push({
											value: b,
											display: P0f && b === 0 ? 12 : /hh/i.test(G0f) ? z51(b) : b
										});
									}
									i.push({
										cssClass: 'mbsc-dt-whl-h',
										label: T0f.hourText,
										data: e
									});
								} else if (/i/i.test(c) && y0f.i === S3f) {
									e = [];
									y0f.i = d;
									d++;
									for (b = U0f; b < 60; b += i0f) {
										e.push({
											value: b,
											display: /ii/i.test(G0f) ? z51(b) : b
										});
									}
									i.push({
										cssClass: 'mbsc-dt-whl-i',
										label: T0f.minuteText,
										data: e
									});
								} else if (/s/i.test(c) && y0f.s === S3f) {
									e = [];
									y0f.s = d;
									d++;
									for (b = O; b < 60; b += z) {
										e.push({
											value: b,
											display: /ss/i.test(G0f) ? z51(b) : b
										});
									}
									i.push({
										cssClass: 'mbsc-dt-whl-s',
										label: T0f.secText,
										data: e
									});
								} else if (/a/i.test(c) && y0f.a === S3f) {
									y0f.a = d;
									d++;
									i.push({
										cssClass: 'mbsc-dt-whl-a',
										label: T0f.ampmText,
										data: /A/.test(c) ? [{
											value: 0,
											display: T0f.amText.toUpperCase()
										}, {
											value: 1,
											display: T0f.pmText.toUpperCase()
										}] : [{
											value: 0,
											display: T0f.amText
										}, {
											value: 1,
											display: T0f.pmText
										}]
									});
								}
							}
							if (i != m) {
								o.push(i);
							}
						}
						return o;
					}
				

                function z51(i51) {
                    return i51 < 10 ? '0' + i51 : i51;
                }

                var Q0f, r0f, D0f, y0f = {},
                    A0f = {},
                    F0f = [],
                    k0f = w51(D3f(this)),
                    e0f = D3f.extend({}, f0f.settings),
                    T0f = D3f.extend(f0f.settings, W3f.util.datetime.defaults, z0f, k0f, e0f),
                    X0f = R51(T0f.invalid),
                    L0f = R51(T0f.valid),
                    M0f = T0f.preset,
                    p0f = M0f == 'datetime' ? T0f.dateFormat + T0f.separator + T0f.timeFormat : M0f == 'time' ? T0f.timeFormat : T0f.dateFormat,
                    O0f = k0f.format || p0f,
					SS0f = T0f.dateWheels || T0f.dateFormat,
                    h0f = T0f.timeWheels || T0f.timeFormat,
                    Y0f = T0f.dateWheels || T0f.dateDisplay,
                    G0f = h0f,
                    n0f = T0f.baseTheme || T0f.theme,
                    b0f = T0f.min,
                    a0f = T0f.max,
                    o0f = /time/i.test(M0f),
                    P0f = /h/.test(G0f),
                    S0f = /D/.test(Y0f),
                    d0f = T0f.steps || {},
                    t0f = d0f.hour || T0f.stepHour || 1,
                    i0f = d0f.minute || T0f.stepMinute || 1,
                    Z0f = d0f.second || T0f.stepSecond || 1,
                    v0f = d0f.zeroBased,
                    m0f = v0f || !b0f ? 0 : b0f.getHours() % t0f,
                    U0f = v0f || !b0f ? 0 : b0f.getMinutes() % i0f,
                    u0f = v0f || !b0f ? 0 : b0f.getSeconds() % Z0f,
                    I0f = J0f(t0f, m0f, P0f ? 11 : 23),
                    V0f = J0f(i0f, U0f, 59),
                    B0f = J0f(i0f, U0f, 59),
                    w0f = {
                        y: b0f ? b0f.getFullYear() : -Infinity,
                        m: 0,
                        d: 1,
                        h: m0f,
                        i: U0f,
                        s: u0f,
                        a: 0,
                        tt: 0
                    },
                    q0f = {
                        y: a0f ? a0f.getFullYear() : Infinity,
                        m: 11,
                        d: 31,
                        h: I0f,
                        i: V0f,
                        s: B0f,
                        a: 1,
                        tt: 86400
                    },
                    c0f = {
                        y: 1,
                        m: 1,
                        d: 1,
                        h: t0f,
                        i: i0f,
                        s: Z0f,
                        a: 1,
                        tt: 1
                    },
                    N51 = {
                        'android-holo': 40,
                        bootstrap: 46,
                        ios: 50,
                        jqm: 46,
                        material: 46,
                        mobiscroll: 46,
                        wp: 50
                    },
                    l0f = {
                        y: K51,
                        m: c51,
                        d: q51,
                        h: H51,
                        i: l51,
                        s: b51,
                        u: y51,
                        a: f51,
                        dd: W0f,
                        tt: T51
                    };
                f0f.getDate = f0f.getVal = function(d21) {
                    return f0f._hasValue || d21 ? C0f(f0f.getArrayVal(d21)) : null;
                };
                f0f.setDate = function(E21, A21, t21, U21, Z21) {
                    f0f.setArrayVal(E0f(E21), A21, Z21, U21, t21);
                };

				D0f = a6();
                f0f.format = p0f;
                f0f.order = y0f;
				
                f0f.handlers.now = function() {
                    f0f.setDate(new Date(), f0f.live, 1000, true, true);
                };
                f0f.buttons.now = {
                    text: T0f.nowText,
                    icon: T0f.nowIcon,
                    handler: 'now'
                };
                return {
                    minWidth: r0f && o0f ? N51[n0f] : S3f,
                    compClass: 'mbsc-dt',
                    wheels: D0f,
                    headerText: T0f.headerText ? function() {
                        return R.formatDate(p0f, C0f(f0f.getArrayVal(true)), T0f);
                    } : false,
                    formatValue: function(M21) {
                        return R.formatDate(O0f, C0f(M21), T0f);
                    },
                    parseValue: function(Q21) {
                        if (!Q21) {
                            A0f = {};
                        }
                        return E0f(Q21 ? R.parseDate(O0f, Q21, T0f) : T0f.defaultValue && T0f.defaultValue.getTime ? T0f.defaultValue : new Date(), !!Q21 && !!Q21.getTime);
                    },
                    validate: function(s21) {
                        var m21, v21, J21, r21, G21 = s21.values,
                            V21 = s21.index,
                            e21 = s21.direction,
                            L21 = f0f.settings.wheels[0][y0f.d],
                            X21 = F51(C0f(G21), e21),
                            O21 = E0f(X21),
                            u21 = [],
                            I21 = {},
                            Y21 = l0f.y(X21),
                            p21 = l0f.m(X21),
                            o21 = T0f.getMaxDayOfMonth(Y21, p21),
                            k21 = true,
                            B21 = true;
                        D3f.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(W21, n21) {
                            if (y0f[n21] !== S3f) {
                                var g21 = w0f[n21],
                                    h21 = q0f[n21],
                                    j21 = l0f[n21](X21);
                                u21[y0f[n21]] = [];
                                if (k21 && b0f) {
                                    g21 = l0f[n21](b0f);
                                }
                                if (B21 && a0f) {
                                    h21 = l0f[n21](a0f);
                                }
                                if (n21 != 'y' && n21 != 'dd') {
                                    for (v21 = w0f[n21]; v21 <= q0f[n21]; v21 += c0f[n21]) {
                                        if (v21 < g21 || v21 > h21) {
                                            u21[y0f[n21]].push(v21);
                                        }
                                    }
                                }
                                if (j21 < g21) {
                                    j21 = g21;
                                }
                                if (j21 > h21) {
                                    j21 = h21;
                                }
                                if (k21) {
                                    k21 = j21 == g21;
                                }
                                if (B21) {
                                    B21 = j21 == h21;
                                }
                                if (n21 == 'd') {
                                    var D21 = T0f.getDate(Y21, p21, 1).getDay(),
                                        S21 = {};
                                    g0f(X0f, Y21, p21, D21, o21, S21, 1);
                                    g0f(L0f, Y21, p21, D21, o21, S21, 0);
                                    D3f.each(S21, function(R61, z61) {
                                        if (z61) {
                                            u21[y0f[n21]].push(R61);
                                        }
                                    });
                                }
                            }
                        });
                        if (o0f) {
                            D3f.each(['a', 'h', 'i', 's', 'tt'], function(f61, N61) {
                                var b61 = l0f[N61](X21),
                                    y61 = l0f.d(X21),
                                    T61 = {};
                                if (y0f[N61] !== S3f) {
                                    j0f(X0f, f61, N61, Y21, p21, y61, T61, 0);
                                    j0f(L0f, f61, N61, Y21, p21, y61, T61, 1);
                                    D3f.each(T61, function(l61, H61) {
                                        if (H61) {
                                            u21[y0f[N61]].push(l61);
                                        }
                                    });
                                    F0f[f61] = f0f.getValidValue(y0f[N61], b61, e21, T61);
                                }
                            });
                        }
                        if (L21 && (L21._length !== o21 || S0f && (V21 === S3f || V21 === y0f.y || V21 === y0f.m))) {
                            I21[y0f.d] = L21;
                            L21.data = [];
                            for (m21 = 1; m21 <= o21; m21++) {
                                r21 = T0f.getDate(Y21, p21, m21).getDay();
                                J21 = Y0f.replace(/[my]/gi, '').replace(/dd/, (m21 < 10 ? '0' + m21 : m21) + (T0f.daySuffix || '')).replace(/d/, m21 + (T0f.daySuffix || ''));
                                L21.data.push({
                                    value: m21,
                                    display: J21.match(/DD/) ? J21.replace(/DD/, '<span class="mbsc-dt-day">' + T0f.dayNames[r21] + '</span>') : J21.replace(/D/, '<span class="mbsc-dt-day">' + T0f.dayNamesShort[r21] + '</span>')
                                });
                            }
                            f0f._tempWheelArray[y0f.d] = O21[y0f.d];
                            f0f.changeWheel(I21);
                        }
                        return {
                            disabled: u21,
                            valid: O21
                        };
                    }
                };
            };
        D3f.each(['date', 'time', 'datetime'], function(c61, q61) {
            W3f.presets.scroller[q61] = N0f;
        });
}());

		
		
		
         var C = P.$;
         var X3 = P.presets.scroller;
         var g1 = P.classes;
         var E6 = P.util;
         var u6 = E6.datetime.adjustedDate;
         var A4 = E6.jsPrefix;
         var j3 = E6.testTouch;
         var k6 = E6.getCoord;
         var J1 = E6.animEnd;
         var Y3 = new Date();
         var E7 = {
             min: new Date(Y3.getFullYear() - 100, 0, 1),
             max: new Date(Y3.getFullYear() + 1, 11, 31, 23, 59, 59),
             controls: ['calendar'],
             firstDay: 0,
             weekDays: 'short',
             maxMonthWidth: 170,
             months: 1,
             preMonths: 1,
             highlight: true,
             outerMonthChange: true,
             quickNav: true,
             yearChange: true,
             todayClass: 'mbsc-cal-today',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left6',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right6',
             dateText: 'Date',
             timeText: 'Time',
             calendarText: 'Calendar',
             todayText: 'Today',
             prevMonthText: 'Previous Month',
             nextMonthText: 'Next Month',
             prevYearText: 'Previous Year',
             nextYearText: 'Next Year'
         };
         X3.calbase = function(h4F) {
             function X2F(D2F) {
                 var F2F;
                 v4F = C(this);
                 q8F = false;
                 if (D2F.type != 'keydown') {
                     w2F = k6(D2F, 'X');
                     M2F = k6(D2F, 'Y');
                     F2F = j3(D2F, this);
                 } else {
                     F2F = D2F.keyCode === 32;
                 }
                 if (!R4F && F2F && !v4F.hasClass('mbsc-fr-btn-d')) {
                     R4F = true;
                     setTimeout(d2F, 100);
                     if (D2F.type == 'mousedown') {
                         C(document).on('mousemove', g8F).on('mouseup', I8F);
                     }
                 }
             }

             function g8F(R2F) {
                 if (Math.abs(w2F - k6(R2F, 'X')) > 7 || Math.abs(M2F - k6(R2F, 'Y')) > 7) {
                     R4F = false;
                     v4F.removeClass('mbsc-fr-btn-a');
                 }
             }

             function I8F(b2F) {
                 if (b2F.type == 'touchend') {
                     b2F.preventDefault();
                 }
                 if (v4F && !q8F) {
                     d2F();
                 }
                 R4F = false;
                 if (b2F.type == 'mouseup') {
                     C(document).off('mousemove', g8F).off('mouseup', I8F);
                 }
             }

             function d2F() {
                 q8F = true;
                 if (v4F.hasClass('mbsc-cal-prev-m')) {
                     O8F();
                 } else if (v4F.hasClass('mbsc-cal-next-m')) {
                     x8F();
                 } else if (v4F.hasClass('mbsc-cal-prev-y')) {
                     m8F(v4F);
                 } else if (v4F.hasClass('mbsc-cal-next-y')) {
                     Q8F(v4F);
                 }
             }

             function u2F(z2F) {
                 if (z2F < u6(B8F.getFullYear(), B8F.getMonth(), B8F.getDate())) {
                     return false;
                 }
                 if (z2F > Z2F) {
                     return false;
                 }
                 return Y2F[z2F] === undefined || B2F[z2F] !== undefined;
             }

             function T8F(c2F, v2F, l2F) {
                 var t2F, E2F, L2F, e2F, q2F = {},
                     f2F = M4F + u8F;
                 if (c2F) {
                     C.each(c2F, function(x2F, W2F) {
                         t2F = W2F.d || W2F.start || W2F;
                         E2F = t2F + '';
                         if (W2F.start && W2F.end) {
                             e2F = new Date(W2F.start);
                             while (e2F <= W2F.end) {
                                 L2F = u6(e2F.getFullYear(), e2F.getMonth(), e2F.getDate());
                                 q2F[L2F] = q2F[L2F] || [];
                                 q2F[L2F].push(W2F);
                                 e2F.setDate(e2F.getDate() + 1);
                             }
                         } else if (t2F.getTime) {
                             L2F = u6(t2F.getFullYear(), t2F.getMonth(), t2F.getDate());
                             q2F[L2F] = q2F[L2F] || [];
                             q2F[L2F].push(W2F);
                         } else if (!E2F.match(/w/i)) {
                             E2F = E2F.split('/');
                             if (E2F[1]) {
                                 if (l2F + f2F >= 11) {
                                     L2F = B4F.getDate(v2F + 1, E2F[0] - 1, E2F[1]);
                                     q2F[L2F] = q2F[L2F] || [];
                                     q2F[L2F].push(W2F);
                                 }
                                 if (l2F - f2F <= 1) {
                                     L2F = B4F.getDate(v2F - 1, E2F[0] - 1, E2F[1]);
                                     q2F[L2F] = q2F[L2F] || [];
                                     q2F[L2F].push(W2F);
                                 }
                                 L2F = B4F.getDate(v2F, E2F[0] - 1, E2F[1]);
                                 q2F[L2F] = q2F[L2F] || [];
                                 q2F[L2F].push(W2F);
                             } else {
                                 for (E4F = 0; E4F < z4F; E4F++) {
                                     L2F = B4F.getDate(v2F, l2F - M4F - j4F + E4F, E2F[0]);
                                     if (B4F.getDay(L2F) == E2F[0]) {
                                         q2F[L2F] = q2F[L2F] || [];
                                         q2F[L2F].push(W2F);
                                     }
                                 }
                             }
                         } else {
                             var p2F = +E2F.replace('w', ''),
                                 a2F = 0,
                                 O2F = B4F.getDate(v2F, l2F - M4F - j4F, 1).getDay();
                             if (B4F.firstDay - O2F + 1 > 1) {
                                 a2F = 7;
                             }
                             for (E4F = 0; E4F < z4F * 5; E4F++) {
                                 L2F = B4F.getDate(v2F, l2F - M4F - j4F, E4F * 7 - a2F - O2F + 1 + p2F);
                                 q2F[L2F] = q2F[L2F] || [];
                                 q2F[L2F].push(W2F);
                             }
                         }
                     });
                 }
                 return q2F;
             }

             function h2F(S2F, i2F) {
                 Y2F = T8F(B4F.invalid, S2F, i2F);
                 B2F = T8F(B4F.valid, S2F, i2F);
                 h4F.onGenMonth(S2F, i2F);
             }

             function j2F(s2F, J2F, g2F, T2F, y2F, n2F, I2F) {
                 var o2F = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + s2F + '-c ' + (B4F.calendarClass || '') + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                 for (Y4F = 1; Y4F <= J2F; Y4F++) {
                     if (Y4F <= 12 || Y4F > g2F) {
                         o2F += '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>';
                     } else {
                         o2F += '<div tabindex="0" role="button"' + (n2F ? ' aria-label="' + n2F[Y4F - 13] + '"' : '') + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + s2F + '-s" data-val=' + (T2F + Y4F - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (I2F ? I2F[Y4F - 13] : T2F + Y4F - 13 + y2F) + '</div></div></div>';
                     }
                     if (Y4F < J2F) {
                         if (Y4F % 12 === 0) {
                             o2F += '</div></div></div><div class="mbsc-cal-sc-p" style="' + (u4F ? 'top' : f4F ? 'right' : 'left') + ':' + Math.round(Y4F / 12) * 100 + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                         } else if (Y4F % 3 === 0) {
                             o2F += '</div><div class="mbsc-cal-sc-row">';
                         }
                     }
                 }
                 o2F += '</div></div></div></div></div>';
                 return o2F;
             }

             function w8F(R5F, b5F) {
                 var r2F, j5F, B5F, A5F, H5F, D5F, d5F, K5F, k2F, N5F, Y5F, M5F, h5F, F5F, Z5F, m2F, P5F = 1,
                     V5F = 0,
                     u5F = B4F.getDate(R5F, b5F, 1),
                     X5F = B4F.getYear(u5F),
                     w5F = B4F.getMonth(u5F),
                     Q2F = B4F.defaultValue === null && !h4F._hasValue ? null : h4F.getDate(true),
                     U5F = B4F.getDate(X5F, w5F, 1).getDay(),
                     C5F = '<div class="mbsc-cal-table">',
                     G5F = '<div class="mbsc-cal-week-nr-c">';
                 if (B4F.firstDay - U5F + 1 > 1) {
                     V5F = 7;
                 }
                 for (m2F = 0; m2F < 42; m2F++) {
                     Z5F = m2F + B4F.firstDay - V5F;
                     r2F = B4F.getDate(X5F, w5F, Z5F - U5F + 1);
                     B5F = r2F.getFullYear();
                     A5F = r2F.getMonth();
                     H5F = r2F.getDate();
                     D5F = B4F.getMonth(r2F);
                     d5F = B4F.getDay(r2F);
                     F5F = B4F.getMaxDayOfMonth(B5F, A5F);
                     K5F = B5F + '-' + A5F + '-' + H5F;
                     k2F = C.extend({
                         valid: u2F(r2F),
                         selected: Q2F && Q2F.getFullYear() === B5F && Q2F.getMonth() === A5F && Q2F.getDate() === H5F
                     }, h4F.getDayProps(r2F, Q2F));
                     N5F = k2F.valid;
                     Y5F = k2F.selected;
                     j5F = k2F.cssClass;
                     M5F = new Date(r2F).setHours(12, 0, 0, 0) === new Date().setHours(12, 0, 0, 0);
                     h5F = D5F !== w5F;
                     l8F[K5F] = k2F;
                     if (m2F % 7 === 0) {
                         C5F += (m2F ? '</div>' : '') + '<div class="mbsc-cal-row' + (B4F.highlight && Q2F && Q2F - r2F >= 0 && Q2F - r2F < 1000 * 60 * 60 * 24 * 7 ? ' mbsc-cal-week-hl' : '') + '">';
                     }
                     if (r4F && r2F.getDay() == 1) {
                         if (r4F == 'month' && h5F && P5F > 1) {
                             P5F = H5F == 1 ? 1 : 2;
                         } else if (r4F == 'year') {
                             P5F = B4F.getWeekNumber(r2F);
                         }
                         G5F += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + P5F + '</div></div>';
                         P5F++;
                     }
                     C5F += '<div role="button" tabindex="-1"' + ' aria-label="' + (M5F ? B4F.todayText + ', ' : '') + B4F.dayNames[r2F.getDay()] + ', ' + B4F.monthNames[D5F] + ' ' + d5F + ' ' + (k2F.ariaLabel ? ', ' + k2F.ariaLabel : '') + '"' + (h5F && !F8F ? ' aria-hidden="true"' : '') + (Y5F ? ' aria-selected="true"' : '') + (N5F ? '' : ' aria-disabled="true"') + ' data-day="' + Z5F % 7 + '"' + ' data-full="' + K5F + '"' + 'class="mbsc-cal-day ' + (B4F.dayClass || '') + (Y5F ? ' mbsc-cal-day-sel' : '') + (M5F ? ' ' + B4F.todayClass : '') + (j5F ? ' ' + j5F : '') + (d5F == 1 ? ' mbsc-cal-day-first' : '') + (d5F == F5F ? ' mbsc-cal-day-last' : '') + (h5F ? ' mbsc-cal-day-diff' : '') + (N5F ? ' mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl' : ' mbsc-cal-day-inv') + '"><div class="mbsc-cal-day-i ' + (Y5F ? O4F : '') + ' ' + (B4F.innerDayClass || '') + '">' + '<div class="mbsc-cal-day-fg">' + d5F  + '</div>' + (k2F.markup || '') + '<div class="mbsc-cal-day-frame"></div></div></div>';
                 }
                 C5F += '</div></div>' + G5F + '</div>';
                 return C5F;
             }

             function J8F(L5F, q5F, t5F) {
                 var E5F = B4F.getDate(L5F, q5F, 1),
                     z5F = B4F.getYear(E5F),
                     v5F = B4F.getMonth(E5F),
                     e5F = z5F + K8F;
                 if (W4F) {
                     if (p4F) {
                         p4F.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(O4F);
                     }
                     if (Z8F) {
                         Z8F.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(O4F);
                     }
                     p4F = C('.mbsc-cal-year-s[data-val="' + z5F + '"]', A4F).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                     Z8F = C('.mbsc-cal-month-s[data-val="' + v5F + '"]', A4F).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                     p4F.find('.mbsc-cal-sc-cell-i').addClass(O4F);
                     Z8F.find('.mbsc-cal-sc-cell-i').addClass(O4F);
                     if (b4F) {
                         b4F.scroll(p4F, t5F);
                     }
                     C('.mbsc-cal-month-s', A4F).removeClass('mbsc-fr-btn-d');
                     if (z5F === k4F) {
                         for (Y4F = 0; Y4F < A2F; Y4F++) {
                             C('.mbsc-cal-month-s[data-val="' + Y4F + '"]', A4F).addClass('mbsc-fr-btn-d');
                         }
                     }
                     if (z5F === L8F) {
                         for (Y4F = P2F + 1; Y4F <= 12; Y4F++) {
                             C('.mbsc-cal-month-s[data-val="' + Y4F + '"]', A4F).addClass('mbsc-fr-btn-d');
                         }
                     }
                 }
                 if (m4F.length == 1) {
                     m4F.attr('aria-label', z5F).html(e5F);
                 }
                 for (Y4F = 0; Y4F < H4F; ++Y4F) {
                     E5F = B4F.getDate(L5F, q5F - j4F + Y4F, 1);
                     z5F = B4F.getYear(E5F);
                     v5F = B4F.getMonth(E5F);
                     e5F = z5F + K8F;
                     C(v8F[Y4F]).attr('aria-label', B4F.monthNames[v5F] + (o4F ? '' : ' ' + z5F)).html((!o4F && V8F < G8F ? e5F + ' ' : '') + M8F[v5F] + (!o4F && V8F > G8F ? ' ' + e5F : ''));
                     if (m4F.length > 1) {
                         C(m4F[Y4F]).html(e5F);
                     }
                 }
                 if (B4F.getDate(L5F, q5F - j4F - 1, 1) < F4F) {
                     R8F(C('.mbsc-cal-prev-m', A4F));
                 } else {
                     X8F(C('.mbsc-cal-prev-m', A4F));
                 }
                 if (B4F.getDate(L5F, q5F + H4F - j4F, 1) > X4F) {
                     R8F(C('.mbsc-cal-next-m', A4F));
                 } else {
                     X8F(C('.mbsc-cal-next-m', A4F));
                 }
                 if (B4F.getDate(L5F, q5F, 1).getFullYear() <= F4F.getFullYear()) {
                     R8F(C('.mbsc-cal-prev-y', A4F));
                 } else {
                     X8F(C('.mbsc-cal-prev-y', A4F));
                 }
                 if (B4F.getDate(L5F, q5F, 1).getFullYear() >= X4F.getFullYear()) {
                     R8F(C('.mbsc-cal-next-y', A4F));
                 } else {
                     X8F(C('.mbsc-cal-next-y', A4F));
                 }
             }

             function X8F(l5F) {
                 l5F.removeClass(n8F).find('.mbsc-cal-btn-txt').removeAttr('aria-disabled');
             }

             function R8F(f5F) {
                 f5F.addClass(n8F).find('.mbsc-cal-btn-txt').attr('aria-disabled', 'true');
             }

             function V2F(c5F) {
                 h4F.trigger('onDayHighlight', {
                     date: c5F
                 });
                 if (B4F.highlight) {
                     C('.mbsc-cal-day-sel .mbsc-cal-day-i', V4F).removeClass(O4F);
                     C('.mbsc-cal-day-sel', V4F).removeClass('mbsc-cal-day-sel').removeAttr('aria-selected');
                     C('.mbsc-cal-week-hl', V4F).removeClass('mbsc-cal-week-hl');
                     if (B4F.defaultValue !== null || h4F._hasValue) {
                         C('.mbsc-cal-day[data-full="' + c5F.getFullYear() + '-' + c5F.getMonth() + '-' + c5F.getDate() + '"]', V4F).addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(O4F).closest('.mbsc-cal-row').addClass('mbsc-cal-week-hl');
                     }
                 }
             }

             function s8F(W5F, S5F) {
                 if (D4F && (L4F === 'calendar' || S5F)) {
                     var x5F, O5F, p5F = B4F.getDate(U4F, w4F, 1),
                         a5F = Math.abs((B4F.getYear(W5F) - B4F.getYear(p5F)) * 12 + B4F.getMonth(W5F) - B4F.getMonth(p5F));
                     if (h4F.needsSlide && a5F) {
                         U4F = B4F.getYear(W5F);
                         w4F = B4F.getMonth(W5F);
                         if (W5F > p5F) {
                             O5F = a5F > M4F - j4F + H4F - 1;
                             w4F -= O5F ? 0 : a5F - M4F;
                             x5F = 'next';
                         } else if (W5F < p5F) {
                             O5F = a5F > M4F + j4F;
                             w4F += O5F ? 0 : a5F - M4F;
                             x5F = 'prev';
                         }
                         c4F(U4F, w4F, x5F, Math.min(a5F, M4F), O5F, true);
                     }
                     if (!S5F) {
                         S4F = W5F;
                         V2F(W5F);
                     }
                     h4F.needsSlide = true;
                 }
             }

             function h8F(i5F, o5F, s5F) {
                 if (!s5F) {
                     h4F.trigger('onMonthLoading', {
                         year: i5F,
                         month: o5F
                     });
                 }
                 h2F(i5F, o5F);
                 for (Y4F = 0; Y4F < z4F; Y4F++) {
                     K4F[Y4F].html(w8F(i5F, o5F - j4F - M4F + Y4F));
                 }
                 K2F();
                 D8F = undefined;
                 h4F.trigger('onMonthLoaded', {
                     year: i5F,
                     month: o5F
                 });
             }

             function o8F(n5F, I5F) {
                 var J5F = M4F,
                     T5F = M4F;
                 while (T5F && B4F.getDate(n5F, I5F + T5F + H4F - j4F - 1, 1) > X4F) {
                     T5F--;
                 }
                 while (J5F && B4F.getDate(n5F, I5F - J5F - j4F, 1) < F4F) {
                     J5F--;
                 }
                 C.extend(x4F.settings, {
                     contSize: H4F * Z4F,
                     snap: Z4F,
                     minScroll: e4F - (f4F ? J5F : T5F) * Z4F,
                     maxScroll: e4F + (f4F ? T5F : J5F) * Z4F
                 });
                 x4F.refresh();
             }

             function K2F() {
                 if (r4F) {
                     C2F.html(C('.mbsc-cal-week-nr-c', K4F[M4F]).html());
                 }
                 C('.mbsc-cal-slide-a .mbsc-cal-day', I4F).attr('tabindex', 0);
             }

             function c4F(g5F, y5F, Q5F, r5F, m5F, P9F, d9F) {
                 if (g5F) {
                     P8F.push({
                         y: g5F,
                         m: y5F,
                         dir: Q5F,
                         slideNr: r5F,
                         load: m5F,
                         active: P9F,
                         callback: d9F
                     });
                 }
                 if (y4F) {
                     return;
                 }
                 var k5F = P8F.shift(),
                     C9F;
                 g5F = k5F.y;
                 y5F = k5F.m;
                 Q5F = k5F.dir === 'next';
                 r5F = k5F.slideNr;
                 m5F = k5F.load;
                 P9F = k5F.active;
                 d9F = k5F.callback || N8F;
                 C9F = B4F.getDate(g5F, y5F, 1);
                 g5F = B4F.getYear(C9F);
                 y5F = B4F.getMonth(C9F);
                 y4F = true;
                 h4F.changing = true;
                 h4F.trigger('onMonthChange', {
                     year: g5F,
                     month: y5F
                 });
                 h4F.trigger('onMonthLoading', {
                     year: g5F,
                     month: y5F
                 });
                 h2F(g5F, y5F);
                 if (m5F) {
                     for (Y4F = 0; Y4F < H4F; Y4F++) {
                         K4F[Q5F ? z4F - H4F + Y4F : Y4F].html(w8F(g5F, y5F - j4F + Y4F));
                     }
                 }
                 if (P9F) {
                     Q4F.addClass('mbsc-cal-slide-a');
                 }
                 setTimeout(function() {
                     h4F.ariaMessage(B4F.monthNames[y5F] + ' ' + g5F);
                     J8F(g5F, y5F, 200);
                     e4F = Q5F ? e4F - Z4F * r5F * J4F : e4F + Z4F * r5F * J4F;
                     x4F.scroll(e4F, P9F ? 200 : 0, false, function() {
                         var B9F;
                         if (K4F.length) {
                             Q4F.removeClass('mbsc-cal-slide-a').attr('aria-hidden', 'true');
                             if (Q5F) {
                                 B9F = K4F.splice(0, r5F);
                                 for (Y4F = 0; Y4F < r5F; Y4F++) {
                                     K4F.push(B9F[Y4F]);
                                     S8F(K4F[K4F.length - 1], +K4F[K4F.length - 2].attr('data-curr') + 100 * J4F);
                                 }
                             } else {
                                 B9F = K4F.splice(z4F - r5F, r5F);
                                 for (Y4F = r5F - 1; Y4F >= 0; Y4F--) {
                                     K4F.unshift(B9F[Y4F]);
                                     S8F(K4F[0], +K4F[1].attr('data-curr') - 100 * J4F);
                                 }
                             }
                             for (Y4F = 0; Y4F < r5F; Y4F++) {
                                 K4F[Q5F ? z4F - r5F + Y4F : Y4F].html(w8F(g5F, y5F - j4F - M4F + Y4F + (Q5F ? z4F - r5F : 0)));
                                 if (m5F) {
                                     K4F[Q5F ? Y4F : z4F - r5F + Y4F].html(w8F(g5F, y5F - j4F - M4F + Y4F + (Q5F ? 0 : z4F - r5F)));
                                 }
                             }
                             for (Y4F = 0; Y4F < H4F; Y4F++) {
                                 K4F[M4F + Y4F].addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                             }
                             o8F(g5F, y5F);
                             y4F = false;
                         }
                         if (P8F.length) {
                             setTimeout(function() {
                                 c4F();
                             }, 10);
                         } else {
                             U4F = g5F;
                             w4F = y5F;
                             h4F.changing = false;
                             C('.mbsc-cal-day', I4F).attr('tabindex', -1);
                             K2F();
                             if (D8F !== undefined) {
                                 h8F(g5F, y5F, D8F);
                             } else {
                                 h4F.trigger('onMonthLoaded', {
                                     year: g5F,
                                     month: y5F
                                 });
                             }
                             d9F();
                         }
                     });
                 }, 10);
             }

             function N2F() {
                 var h9F = C(this),
                     w9F = h4F.live,
                     A9F = h4F.getDate(true),
                     M9F = h9F.attr('data-full'),
                     H9F = M9F.split('-'),
                     Y9F = u6(H9F[0], H9F[1], H9F[2]),
                     U9F = u6(Y9F.getFullYear(), Y9F.getMonth(), Y9F.getDate(), A9F.getHours(), A9F.getMinutes(), A9F.getSeconds()),
                     j9F = h9F.hasClass('mbsc-cal-day-sel');
                 if (!F8F && h9F.hasClass('mbsc-cal-day-diff')) {
                     return;
                 }
                 if (h4F.trigger('onDayChange', C.extend(l8F[M9F], {
                         date: U9F,
                         target: this,
                         selected: j9F
                     })) !== false) {
                     h4F.needsSlide = false;
                     t8F = true;
                     h4F.setDate(U9F, w9F, 0.2, !w9F, true);
                     if (B4F.outerMonthChange) {
                         R4F = true;
                         if (Y9F < B4F.getDate(U4F, w4F - j4F, 1)) {
                             O8F();
                         } else if (Y9F > B4F.getDate(U4F, w4F - j4F + H4F, 0)) {
                             x8F();
                         }
                         R4F = false;
                     }
                     if (h4F.live) {
                         h4F.trigger('onSet', {
                             valueText: h4F._value
                         });
                     }
                 }
             }

             function S8F(Z9F, K9F) {
                 Z9F.attr('data-curr', K9F);
                 Z9F[0].style[A4 + 'Transform'] = 'translate3d(' + (u4F ? '0,' + K9F + '%,' : K9F + '%,' + '0,') + '0)';
             }

             function H2F(G9F) {
                 if (h4F.isVisible() && D4F) {
                     if (!h4F.changing) {
                         h8F(U4F, w4F, G9F);
                     } else {
                         D8F = G9F;
                     }
                 }
             }

             function x8F() {
                 if (R4F && B4F.getDate(U4F, w4F + H4F - j4F, 1) <= X4F) {
                     c4F(U4F, ++w4F, 'next', 1, false, true, x8F);
                 }
             }

             function O8F() {
                 if (R4F && B4F.getDate(U4F, w4F - j4F - 1, 1) >= F4F) {
                     c4F(U4F, --w4F, 'prev', 1, false, true, O8F);
                 }
             }

             function Q8F(N9F) {
                 if (R4F && B4F.getDate(U4F, w4F, 1) <= B4F.getDate(B4F.getYear(X4F) - 1, B4F.getMonth(X4F) - u8F, 1)) {
                     c4F(++U4F, w4F, 'next', M4F, true, true, function() {
                         Q8F(N9F);
                     });
                 } else if (R4F && !N9F.hasClass('mbsc-fr-btn-d')) {
                     c4F(B4F.getYear(X4F), B4F.getMonth(X4F) - u8F, 'next', M4F, true, true);
                 }
             }

             function m8F(V9F) {
                 if (R4F && B4F.getDate(U4F, w4F, 1) >= B4F.getDate(B4F.getYear(F4F) + 1, B4F.getMonth(F4F) + j4F, 1)) {
                     c4F(--U4F, w4F, 'prev', M4F, true, true, function() {
                         m8F(V9F);
                     });
                 } else if (R4F && !V9F.hasClass('mbsc-fr-btn-d')) {
                     c4F(B4F.getYear(F4F), B4F.getMonth(F4F) + j4F, 'prev', M4F, true, true);
                 }
             }

             function b8F(u9F, X9F) {
                 if (!u9F.hasClass('mbsc-cal-v')) {
                     u9F.addClass('mbsc-cal-v' + (X9F ? '' : ' mbsc-cal-p-in')).removeClass('mbsc-cal-p-out mbsc-cal-h');
                     h4F.trigger('onSelectShow');
                 }
             }

             function s4F(D9F, F9F) {
                 if (D9F.hasClass('mbsc-cal-v')) {
                     D9F.removeClass('mbsc-cal-v mbsc-cal-p-in').addClass('mbsc-cal-h' + (F9F ? '' : ' mbsc-cal-p-out'));
                 }
             }

             function C8F(R9F, b9F) {
                 if ((b9F || R9F).hasClass('mbsc-cal-v')) {
                     s4F(R9F);
                 } else {
                     b8F(R9F);
                 }
             }

             function W8F() {
                 C(this).removeClass('mbsc-cal-p-out mbsc-cal-p-in');
             }

             function U2F(z9F) {
                 return z9F[0].innerWidth || z9F.innerWidth();
             }
             var n4F, Y4F, E4F, c8F, j8F, A4F, f8F, V4F, I4F, Z4F, e4F, t8F, D4F, a4F, A8F, C2F, l4F, g4F, M8F, x4F, i4F, v8F, G8F, m4F, V8F, k4F, L8F, A2F, P2F, F4F, X4F, B8F, Z2F, S4F, U4F, w4F, e8F, E8F, B2F, Y2F, T4F, L4F, y4F, w2F, M2F, v4F, q8F, R4F, H4F, z4F, u8F, j4F, D8F, F8F, G2F, b4F, p4F, Z8F, p8F = this,
                 Q4F = [],
                 K4F = [],
                 P8F = [],
                 G4F = {},
                 l8F = {},
                 N8F = function L9F() {},
                 r8F = C.extend({}, h4F.settings),
                 B4F = C.extend(h4F.settings, E7, r8F),
                 k8F = B4F.weekDays == 'full' ? '' : B4F.weekDays == 'min' ? 'Min' : 'Short',
                 r4F = B4F.weekCounter,
                 a8F = B4F.layout || (/top|bottom|inline/.test(B4F.display) ? 'liquid' : ''),
                 t4F = a8F == 'liquid' && B4F.display !== 'bubble',
                 y8F = B4F.display == 'center',
                 f4F = B4F.rtl,
                 J4F = f4F ? -1 : 1,
                 i8F = t4F ? null : B4F.calendarWidth,
                 u4F = B4F.calendarScroll == 'vertical',
                 W4F = B4F.quickNav,
                 M4F = B4F.preMonths,
                 o4F = B4F.yearChange,
                 Y8F = B4F.controls.join(','),
                 d8F = (B4F.tabs === true || B4F.tabs !== false && t4F) && B4F.controls.length > 1,
                 H8F = !d8F && B4F.tabs === undefined && !t4F && B4F.controls.length > 1,
                 K8F = B4F.yearSuffix || '',
                 O4F = B4F.activeClass || '',
                 U8F = 'mbsc-cal-tab-sel ' + (B4F.activeTabClass || ''),
                 z8F = B4F.activeTabInnerClass || '',
                 n8F = 'mbsc-fr-btn-d ' + (B4F.disabledClass || ''),
                 q4F = '',
                 N4F = '';
             if (Y8F.match(/calendar/)) {
                 D4F = true;
             } else {
                 W4F = false;
             }
             if (Y8F.match(/date/)) {
                 G4F.date = 1;
             }
             if (Y8F.match(/time/)) {
                 G4F.time = 1;
             }
             if (D4F && G4F.date) {
                 d8F = true;
                 H8F = false;
             }
             B4F.layout = a8F;
             B4F.preset = (G4F.date || D4F ? 'date' : '') + (G4F.time ? 'time' : '');
             if (B4F.display == 'inline') {
                 C(this).closest('[data-role="page"]').on('pageshow', function() {
                     h4F.position();
                 });
             }
             h4F.changing = false;
             h4F.needsSlide = true;
             h4F.getDayProps = N8F;
             h4F.onGenMonth = N8F;
             h4F.prepareObj = T8F;
             h4F.refresh = function() {
                 H2F(false);
             };
             h4F.redraw = function() {
                 H2F(true);
             };
             h4F.navigate = function(e9F, t9F) {
                 var q9F, E9F, v9F = h4F.isVisible();
                 if (t9F && v9F) {
                     s8F(e9F, true);
                 } else {
                     q9F = B4F.getYear(e9F);
                     E9F = B4F.getMonth(e9F);
                     if (v9F && (q9F != U4F || E9F != w4F)) {
                         h4F.trigger('onMonthChange', {
                             year: q9F,
                             month: E9F
                         });
                         J8F(q9F, E9F);
                         h8F(q9F, E9F);
                         o8F(e9F.getFullYear(), e9F.getMonth());
                     }
                     U4F = q9F;
                     w4F = E9F;
                 }
             };
             h4F.showMonthView = function() {
                 if (W4F && !g4F) {
                     s4F(N4F, true);
                     s4F(q4F, true);
                     b8F(l4F, true);
                     g4F = true;
                 }
             };
             h4F.changeTab = function(l9F) {
                 if (!h4F._isVisible || !G4F[l9F] || L4F == l9F) {
                     return;
                 }
                 L4F = l9F;
                 C('.mbsc-cal-pnl', A4F).removeClass('mbsc-cal-p-in').addClass('mbsc-cal-pnl-h');
                 C('.mbsc-cal-tab', A4F).removeClass(U8F).removeAttr('aria-selected').find('.mbsc-cal-tab-i').removeClass(z8F);
                 C('.mbsc-cal-tab[data-control="' + l9F + '"]', A4F).addClass(U8F).attr('aria-selected', 'true').find('.mbsc-cal-tab-i').addClass(z8F);
                 G4F[L4F].removeClass('mbsc-cal-pnl-h').addClass('mbsc-cal-p-in');
                 if (L4F == 'calendar') {
                     n4F = h4F.getDate(true);
                     if (n4F.getFullYear() !== S4F.getFullYear() || n4F.getMonth() !== S4F.getMonth() || n4F.getDate() !== S4F.getDate()) {
                         s8F(n4F);
                     }
                 }
                 h4F.showMonthView();
                 h4F.trigger('onTabChange', {
                     tab: L4F
                 });
             };
             c8F = X3.datetime.call(this, h4F);
             G8F = (B4F.dateWheels || B4F.dateFormat).search(/m/i);
             V8F = (B4F.dateWheels || B4F.dateFormat).search(/y/i);
             C.extend(c8F, {
                 ariaMessage: B4F.calendarText,
                 onMarkupReady: function f9F(O9F) {
                     var W9F, c9F, a9F = '';
                     A4F = C(O9F.target);
                     f8F = B4F.display == 'inline' ? C(this).is('div') ? C(this) : C(this).parent() : h4F._window;
                     S4F = h4F.getDate(true);
                     if (!U4F) {
                         U4F = B4F.getYear(S4F);
                         w4F = B4F.getMonth(S4F);
                     }
                     e4F = 0;
                     A8F = true;
                     y4F = false;
                     M8F = B4F.monthNames;
                     L4F = 'calendar';
                     if (B4F.min) {
                         F4F = u6(B4F.min.getFullYear(), B4F.min.getMonth(), 1);
                         B8F = B4F.min;
                     }
                     if (B4F.max) {
                         X4F = u6(B4F.max.getFullYear(), B4F.max.getMonth(), 1);
                         Z2F = B4F.max;
                     }
                     A4F.addClass('mbsc-calendar');
                     j8F = C('.mbsc-fr-popup', A4F);
                     T4F = C('.mbsc-fr-c', A4F);
                     if (G4F.date) {
                         G4F.date = C('.mbsc-sc-whl-gr-c', A4F).eq(0);
                     } else if (D4F) {
                         C('.mbsc-sc-whl-gr-c', A4F).eq(0).addClass('mbsc-cal-hdn');
                     }
                     if (G4F.time) {
                         G4F.time = C('.mbsc-sc-whl-gr-c', A4F).eq(1);
                     }
                     if (D4F) {
                         H4F = B4F.months == 'auto' ? Math.max(1, Math.min(3, Math.floor((i8F || U2F(f8F)) / 280))) : B4F.months;
                         z4F = H4F + 2 * M4F;
                         u8F = Math.floor(H4F / 2);
                         j4F = Math.round(H4F / 2) - 1;
                         F8F = B4F.showOuterDays === undefined ? H4F < 2 : B4F.showOuterDays;
                         u4F = u4F && H4F < 2;
                         c9F = '<div class="mbsc-cal-btnw"><div class="' + (f4F ? 'mbsc-cal-next-m' : 'mbsc-cal-prev-m') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (B4F.btnCalPrevClass || '') + '"' + ' aria-label="' + B4F.prevMonthText + '"></div></div>';
                         for (Y4F = 0; Y4F < H4F; ++Y4F) {
                             c9F += '<div class="mbsc-cal-btnw-m" style="width: ' + 100 / H4F + '%"><span role="button" class="mbsc-cal-month"></span></div>';
                         }
                         c9F += '<div class="' + (f4F ? 'mbsc-cal-prev-m' : 'mbsc-cal-next-m') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (B4F.btnCalNextClass || '') + '"' + ' aria-label="' + B4F.nextMonthText + '"></div></div></div>';
                         if (o4F) {
                             a9F = '<div class="mbsc-cal-btnw"><div class="' + (f4F ? 'mbsc-cal-next-y' : 'mbsc-cal-prev-y') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (B4F.btnCalPrevClass || '') + '"' + ' aria-label="' + B4F.prevYearText + '"></div></div>' + '<span role="button" class="mbsc-cal-year"></span>' + '<div class="' + (f4F ? 'mbsc-cal-prev-y' : 'mbsc-cal-next-y') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (B4F.btnCalNextClass || '') + '"' + ' aria-label="' + B4F.nextYearText + '"></div></div></div>';
                         }
                         if (W4F) {
                             k4F = B4F.getYear(F4F);
                             L8F = B4F.getYear(X4F);
                             A2F = B4F.getMonth(F4F);
                             P2F = B4F.getMonth(X4F);
                             E8F = Math.ceil((L8F - k4F + 1) / 12) + 2;
                             q4F = j2F('month', 36, 24, 0, '', B4F.monthNames, B4F.monthNamesShort);
                             N4F = j2F('year', E8F * 12, L8F - k4F + 13, k4F, K8F);
                         }
                         a4F = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now ' + (H4F > 1 ? ' mbsc-cal-multi ' : '') + (r4F ? ' mbsc-cal-weeks ' : '') + (u4F ? ' mbsc-cal-vertical' : '') + (F8F ? '' : ' mbsc-cal-hide-diff ') + (B4F.calendarClass || '') + '">' + '<div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (o4F ? 'mbsc-cal-btnc-ym' : 'mbsc-cal-btnc-m') + '">' + (V8F < G8F || H4F > 1 ? a9F + c9F : c9F + a9F) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                         for (E4F = 0; E4F < H4F; ++E4F) {
                             a4F += '<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / H4F + '%"><table cellpadding="0" cellspacing="0"><tr>';
                             for (Y4F = 0; Y4F < 7; Y4F++) {
                                 a4F += '<th>' + B4F['dayNames' + k8F][(Y4F + B4F.firstDay) % 7] + '</th>';
                             }
                             a4F += '</tr></table></div>';
                         }
                         a4F += '</div>' + '<div class="mbsc-cal-week-nrs-c ' + (B4F.weekNrClass || '') + '">' + '<div class="mbsc-cal-week-nrs"></div>' + '</div>' + '<div class="mbsc-cal-anim-c ' + (B4F.calendarClass || '') + '">' + '<div class="mbsc-cal-anim">';
                         for (Y4F = 0; Y4F < H4F + 2 * M4F; Y4F++) {
                             a4F += '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                         }
                         a4F += '</div></div></div>' + q4F + N4F + '</div></div></div>';
                         G4F.calendar = C(a4F);
                     }
                     C.each(B4F.controls, function(x9F, p9F) {
                         G4F[p9F] = C('<div class="mbsc-cal-pnl" id="' + (p8F.id + '_dw_pnl_' + x9F) + '"></div>').append(C('<div class="mbsc-cal-pnl-i"></div>').append(G4F[p9F])).appendTo(T4F);
                     });
                     W9F = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                     C.each(B4F.controls, function(S9F, i9F) {
                         if (G4F[i9F]) {
                             W9F += '<li role="tab" aria-controls="' + (p8F.id + '_dw_pnl_' + S9F) + '" class="mbsc-cal-tab ' + (S9F ? '' : U8F) + '" data-control="' + i9F + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' + (!S9F ? z8F : '') + '">' + B4F[i9F + 'Text'] + '</a></li>';
                         }
                     });
                     W9F += '</ul></div>';
                     T4F.before(W9F);
                     V4F = C('.mbsc-cal-anim-c', A4F);
                     I4F = C('.mbsc-cal-anim', V4F);
                     C2F = C('.mbsc-cal-week-nrs', A4F);
                     if (D4F) {
                         g4F = true;
                         Q4F = C('.mbsc-cal-slide', I4F).each(function(s9F, o9F) {
                             K4F.push(C(o9F));
                         });
                         Q4F.slice(M4F, M4F + H4F).addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                         for (Y4F = 0; Y4F < z4F; Y4F++) {
                             S8F(K4F[Y4F], 100 * (Y4F - M4F) * J4F);
                         }
                         h8F(U4F, w4F);
                         x4F = new g1.ScrollView(V4F[0], {
                             axis: u4F ? 'Y' : 'X',
                             easing: '',
                             contSize: 0,
                             snap: 1,
                             maxSnapScroll: M4F,
                             moveElement: I4F,
                             mousewheel: B4F.mousewheel,
                             time: 200,
                             lock: true,
                             stopProp: false,
                             minScroll: -Infinity,
                             maxScroll: Infinity,
                             onAnimationEnd: function J9F(n9F) {
                                 var T9F = Math.round(((u4F ? n9F.posY : n9F.posX) - e4F) / Z4F) * J4F;
                                 if (T9F) {
                                     c4F(U4F, w4F - T9F, T9F > 0 ? 'prev' : 'next', T9F > 0 ? T9F : -T9F);
                                 }
                             }
                         });
                     }
                     v8F = C('.mbsc-cal-month', A4F);
                     m4F = C('.mbsc-cal-year', A4F);
                     l4F = C('.mbsc-cal-m-c', A4F);
                     if (W4F) {
                         l4F.on(J1, W8F);
                         q4F = C('.mbsc-cal-month-c', A4F).on(J1, W8F);
                         N4F = C('.mbsc-cal-year-c', A4F).on(J1, W8F);
                         G2F = C('.mbsc-cal-sc-p', A4F);
                         e8F = {
                             axis: u4F ? 'Y' : 'X',
                             contSize: 0,
                             snap: 1,
                             maxSnapScroll: 1,
                             rtl: B4F.rtl,
                             mousewheel: B4F.mousewheel,
                             time: 200,
                             stopProp: false,
                             minScroll: -Infinity,
                             maxScroll: Infinity
                         };
                         b4F = new g1.ScrollView(N4F[0], e8F);
                         i4F = new g1.ScrollView(q4F[0], e8F);
                     }
                     if (t4F) {
                         A4F.addClass('mbsc-cal-liq');
                     } else {
                         C('.mbsc-cal', A4F).width(i8F || 280 * H4F);
                     }
                     if (B4F.calendarHeight) {
                         C('.mbsc-cal-anim-c', A4F).height(B4F.calendarHeight);
                     }
                     h4F.tap(V4F, function(g9F) {
                         var I9F = C(g9F.target);
                         if (!y4F && !x4F.scrolled && B4F.readonly !== true) {
                             I9F = I9F.closest('.mbsc-cal-day', this);
                             if (I9F.hasClass('mbsc-cal-day-v')) {
                                 N2F.call(I9F[0]);
                             }
                         }
                     });
                     C('.mbsc-cal-btn', A4F).on('touchstart mousedown keydown', X2F).on('touchmove', g8F).on('touchend touchcancel keyup', I8F);
                     C('.mbsc-cal-tab', A4F).on('touchstart click', function(y9F) {
                         if (j3(y9F, this)) {
                             h4F.changeTab(C(this).attr('data-control'));
                         }
                     });
                     if (W4F) {
                         h4F.tap(C('.mbsc-cal-month', A4F), function() {
                             if (!N4F.hasClass('mbsc-cal-v')) {
                                 C8F(l4F);
                                 g4F = l4F.hasClass('mbsc-cal-v');
                             }
                             C8F(q4F);
                             s4F(N4F);
                         });
                         h4F.tap(C('.mbsc-cal-year', A4F), function() {
                             if (!N4F.hasClass('mbsc-cal-v')) {
                                 b4F.scroll(p4F);
                             }
                             if (!q4F.hasClass('mbsc-cal-v')) {
                                 C8F(l4F);
                                 g4F = l4F.hasClass('mbsc-cal-v');
                             }
                             C8F(N4F);
                             s4F(q4F);
                         });
                         h4F.tap(C('.mbsc-cal-month-s', A4F), function() {
                             if (!i4F.scrolled && !C(this).hasClass('mbsc-fr-btn-d')) {
                                 h4F.navigate(B4F.getDate(U4F, C(this).attr('data-val'), 1));
                             }
                         });
                         h4F.tap(C('.mbsc-cal-year-s', A4F), function() {
                             if (!b4F.scrolled) {
                                 n4F = B4F.getDate(C(this).attr('data-val'), w4F, 1);
                                 h4F.navigate(new Date(E6.constrain(n4F, F4F, X4F)));
                             }
                         });
                         h4F.tap(N4F, function() {
                             if (!b4F.scrolled) {
                                 s4F(N4F);
                                 b8F(l4F);
                                 g4F = true;
                             }
                         });
                         h4F.tap(q4F, function() {
                             if (!i4F.scrolled) {
                                 s4F(q4F);
                                 b8F(l4F);
                                 g4F = true;
                             }
                         });
                     }
                 },
                 onShow: function r9F() {
                     if (D4F) {
                         J8F(U4F, w4F);
                     }
                 },
                 onPosition: function Q9F(w0F) {
                     var Y0F, C0F, H0F, B0F, P0F, k9F, d0F = 0,
                         m9F = 0,
                         A0F = 0,
                         h0F = w0F.windowHeight;
                     if (t4F) {
                         if (y8F) {
                             V4F.height('');
                         }
                         T4F.height('');
                         I4F.width('');
                     }
                     if (Z4F) {
                         P0F = Z4F;
                     }
                     if (D4F) {
                         Z4F = Math.round(Math.round(V4F[0][u4F ? 'offsetHeight' : 'offsetWidth']) / H4F);
                     }
                     if (Z4F) {
                         A4F.removeClass('mbsc-cal-m mbsc-cal-l');
                         if (Z4F > 1024) {
                             A4F.addClass('mbsc-cal-l');
                         } else if (Z4F > 640) {
                             A4F.addClass('mbsc-cal-m');
                         }
                     }
                     if (d8F && (A8F || t4F) || H8F) {
                         C('.mbsc-cal-pnl', A4F).removeClass('mbsc-cal-pnl-h');
                         C.each(G4F, function(U0F, M0F) {
                             Y0F = M0F[0].offsetWidth;
                             d0F = Math.max(d0F, Y0F);
                             m9F = Math.max(m9F, M0F[0].offsetHeight);
                             A0F += Y0F;
                         });
                         if (d8F || H8F && A0F > U2F(f8F)) {
                             C0F = true;
                             L4F = C('.mbsc-cal-tabs .mbsc-cal-tab-sel', A4F).attr('data-control');
                             j8F.addClass('mbsc-cal-tabbed');
                         } else {
                             L4F = 'calendar';
                             d0F = '';
                             m9F = '';
                             j8F.removeClass('mbsc-cal-tabbed');
                             T4F.css({
                                 width: '',
                                 height: ''
                             });
                         }
                     }
                     if (t4F && y8F && D4F) {
                         h4F._isFullScreen = true;
                         if (C0F) {
                             T4F.height(G4F.calendar[0].offsetHeight);
                         }
                         B0F = j8F[0].offsetHeight;
                         if (h0F >= B0F) {
                             V4F.height(h0F - B0F + V4F[0].offsetHeight);
                         }
                         m9F = Math.max(m9F, G4F.calendar[0].offsetHeight);
                     }
                     if (C0F) {
                         T4F.css({
                             width: t4F ? '' : d0F,
                             height: m9F
                         });
                         if (D4F) {
                             Z4F = Math.round(Math.round(V4F[0][u4F ? 'offsetHeight' : 'offsetWidth']) / H4F);
                         }
                     }
                     if (Z4F) {
                         I4F[u4F ? 'height' : 'width'](Z4F);
                         if (Z4F !== P0F) {
                             if (o4F) {
                                 M8F = B4F.maxMonthWidth > C('.mbsc-cal-btnw-m', A4F).width() ? B4F.monthNamesShort : B4F.monthNames;
                                 for (Y4F = 0; Y4F < H4F; ++Y4F) {
                                     C(v8F[Y4F]).text(M8F[B4F.getMonth(B4F.getDate(U4F, w4F - j4F + Y4F, 1))]);
                                 }
                             }
                             if (W4F) {
                                 k9F = N4F[0][u4F ? 'offsetHeight' : 'offsetWidth'];
                                 C.extend(b4F.settings, {
                                     contSize: k9F,
                                     snap: k9F,
                                     minScroll: (2 - E8F) * k9F,
                                     maxScroll: -k9F
                                 });
                                 C.extend(i4F.settings, {
                                     contSize: k9F,
                                     snap: k9F,
                                     minScroll: -k9F,
                                     maxScroll: -k9F
                                 });
                                 b4F.refresh();
                                 i4F.refresh();
                                 if (N4F.hasClass('mbsc-cal-v')) {
                                     b4F.scroll(p4F);
                                 }
                             }
                             if (t4F && !A8F && P0F) {
                                 H0F = e4F / P0F;
                                 e4F = H0F * Z4F;
                             }
                             o8F(U4F, w4F);
                         }
                     } else {
                         Z4F = P0F;
                     }
                     if (C0F) {
                         C('.mbsc-cal-pnl', A4F).addClass('mbsc-cal-pnl-h');
                         G4F[L4F].removeClass('mbsc-cal-pnl-h');
                     }
                     h4F.trigger('onCalResize');
                     A8F = false;
                 },
                 onHide: function j0F() {
                     P8F = [];
                     K4F = [];
                     L4F = null;
                     U4F = null;
                     w4F = null;
                     y4F = true;
                     Z4F = 0;
                     if (x4F) {
                         x4F.destroy();
                     }
                     if (W4F && b4F && i4F) {
                         b4F.destroy();
                         i4F.destroy();
                     }
                 },
                 onValidated: function K0F(V0F) {
                     var G0F, N0F, Z0F;
                     N0F = h4F.getDate(true);
                     if (t8F) {
                         G0F = 'calendar';
                     } else {
                         for (Z0F in h4F.order) {
                             if (Z0F && h4F.order[Z0F] === V0F) {
                                 G0F = /[mdy]/.test(Z0F) ? 'date' : 'time';
                             }
                         }
                     }
                     h4F.trigger('onSetDate', {
                         date: N0F,
                         control: G0F
                     });
                     s8F(N0F);
                     t8F = false;
                 }
             });
             return c8F;
         };
         var d6 = P.$;
         var W6 = d6.extend;
         var x6 = P.util;
         var o1 = x6.datetime;
         var Z7 = o1.adjustedDate;
         var Z3 = P.presets.scroller;
         var g7 = {};
         P.presetShort('calendar');
         Z3.calendar = function(D0F) {
             function p0F(x0F) {
                 if (x0F) {
                     if (v0F[x0F]) {
                         return v0F[x0F];
                     }
                     var S0F = d6('<div style="background-color:' + x0F + ';"></div>').appendTo('body'),
                         s0F = window.getComputedStyle ? getComputedStyle(S0F[0]) : S0F[0].style,
                         i0F = s0F.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                         J0F = i0F[0] * 0.299 + i0F[1] * 0.587 + i0F[2] * 0.114,
                         o0F = J0F > 130 ? '#000' : '#fff';
                     S0F.remove();
                     v0F[x0F] = o0F;
                     return o0F;
                 }
             }

             function b0F(T0F) {
                 return Z7(T0F.getFullYear(), T0F.getMonth(), T0F.getDate());
             }

             function O0F(n0F) {
                 X0F = {};
                 if (n0F && n0F.length) {
                     for (R0F = 0; R0F < n0F.length; R0F++) {
                         X0F[b0F(n0F[R0F])] = n0F[R0F];
                     }
                 }
             }

             function L0F() {
                 D0F.refresh();
             }
             var q0F, E0F, a0F, R0F, t0F, W0F, e0F, v0F = {},
                 c0F = W6({}, D0F.settings),
                 u0F = W6(D0F.settings, g7, c0F),
                 f0F = u0F.activeClass || '',
                 F0F = u0F.select == 'multiple' || u0F.select > 1 || u0F.selectType == 'week',
                 l0F = x6.isNumeric(u0F.select) ? u0F.select : Infinity,
                 z0F = !!u0F.events,
                 X0F = {};
             e0F = Z3.calbase.call(this, D0F);
             q0F = W6({}, e0F);
             a0F = u0F.firstSelectDay === undefined ? u0F.firstDay : u0F.firstSelectDay;
             if (F0F && u0F.defaultValue && u0F.defaultValue.length) {
                 for (R0F = 0; R0F < u0F.defaultValue.length; R0F++) {
                     X0F[b0F(u0F.defaultValue[R0F])] = u0F.defaultValue[R0F];
                 }
             }
             D0F.onGenMonth = function(I0F, g0F) {
                 t0F = D0F.prepareObj(u0F.events || u0F.marked, I0F, g0F);
             };
             D0F.getDayProps = function(d67) {
                 var r0F, C67 = F0F ? X0F[d67] !== undefined : undefined,
                     y0F = t0F[d67] ? t0F[d67] : false,
                     Q0F = y0F && y0F[0] && y0F[0].text,
                     P67 = y0F && y0F[0] && y0F[0].color,
                     B67 = z0F && Q0F ? p0F(P67) : '',
                     k0F = '',
                     m0F = '';
                 if (y0F) {
                     for (r0F = 0; r0F < y0F.length; r0F++) {
                         if (y0F[r0F].icon) {
                             k0F += '<span class="mbsc-ic mbsc-ic-' + y0F[r0F].icon + '"' + (y0F[r0F].text ? '' : y0F[r0F].color ? ' style="color:' + y0F[r0F].color + ';"' : '') + '></span>\n';
                         }
                     }
                     m0F = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                     for (r0F = 0; r0F < y0F.length; r0F++) {
                         m0F += '<div class="mbsc-cal-day-m-c"' + (y0F[r0F].color ? ' style="background:' + y0F[r0F].color + ';"' : '') + '></div>';
                     }
                     m0F += '</div></div>';
                 }
                 return {
                     marked: y0F,
                     selected: C67,
                     cssClass: y0F ? 'mbsc-cal-day-marked' : '',
                     ariaLabel: z0F ? Q0F : '',
                     markup: z0F && Q0F ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + d6('<div>' + Q0F + '</div>').text() + '"' + (P67 ? ' style="background:' + P67 + ';color:' + B67 + ';text-shadow:none;"' : '') + '>' + k0F + Q0F + '</div></div>' : z0F && k0F ? '<div class="mbsc-cal-day-ic-c">' + k0F + '</div>' : y0F ? m0F : ''
                 };
             };
             D0F.addValue = function(Y67) {
                 X0F[b0F(Y67)] = Y67;
                 L0F();
             };
             D0F.removeValue = function(h67) {
                 delete X0F[b0F(h67)];
                 L0F();
             };
             D0F.setVal = function(A67, H67, w67, M67, U67) {
                 if (F0F) {
                     O0F(A67);
                     A67 = A67 ? A67[0] : null;
                 }
                 D0F._setVal(A67, H67, w67, M67, U67);
                 L0F();
             };
             D0F.getVal = function(j67) {
                 if (F0F) {
                     return x6.objectToArray(X0F);
                 }
                 return D0F.getDate(j67);
             };
             W6(e0F, {
                 highlight: !F0F,
                 outerMonthChange: !F0F,
                 parseValue: function K67(Z67) {
                     var G67, N67;
                     if (F0F && Z67 && typeof Z67 === 'string') {
                         X0F = {};
                         Z67 = Z67.split(',');
                         for (G67 = 0; G67 < Z67.length; G67++) {
                             N67 = o1.parseDate(D0F.format, Z67[G67].replace(/^\s+|\s+$/g, ''), u0F);
                             X0F[b0F(N67)] = N67;
                         }
                         Z67 = Z67[0];
                     }
                     if (F0F && u0F.defaultValue && u0F.defaultValue.length) {
                         u0F.defaultValue = u0F.defaultValue[0];
                     }
                     return q0F.parseValue.call(this, Z67);
                 },
                 formatValue: function V67(D67) {
                     var X67, u67 = [];
                     if (F0F) {
                         for (X67 in X0F) {
                             u67.push(o1.formatDate(D0F.format, X0F[X67], u0F));
                         }
                         return u67.join(', ');
                     }
                     return q0F.formatValue.call(this, D67);
                 },
                 onClear: function F67() {
                     if (F0F) {
                         X0F = {};
                         D0F.refresh();
                     }
                 },
                 onBeforeShow: function R67() {
                     if (u0F.setOnDayTap === undefined && (!u0F.buttons || !u0F.buttons.length)) {
                         u0F.setOnDayTap = true;
                     }
                     if (u0F.setOnDayTap && u0F.display != 'inline') {
                         u0F.outerMonthChange = false;
                     }
                     if (u0F.counter && F0F) {
                         u0F.headerText = function() {
                             var b67 = 0,
                                 z67 = u0F.selectType == 'week' ? 7 : 1;
                             d6.each(X0F, function() {
                                 b67++;
                             });
                             b67 = Math.round(b67 / z67);
                             return (b67 > 1 ? u0F.selectedPluralText || u0F.selectedText : u0F.selectedText).replace(/{count}/, b67);
                         };
                     }
                 },
                 onMarkupReady: function L67(q67) {
                     q0F.onMarkupReady.call(this, q67);
                     E0F = d6(q67.target);
                     if (F0F) {
                         d6('.mbsc-fr-hdr', E0F).attr('aria-live', 'off');
                         W0F = W6({}, X0F);
                     }
                     if (z0F) {
                         d6('.mbsc-cal', E0F).addClass('mbsc-cal-ev');
                     }
                 },
                 onDayChange: function E67(f67) {
                     var c67 = f67.date,
                         e67 = b0F(c67),
                         O67 = d6(f67.target),
                         W67 = f67.selected;
                     if (F0F) {
                         if (u0F.selectType == 'week') {
                             var t67, l67, v67 = e67.getDay() - a0F;
                             v67 = v67 < 0 ? 7 + v67 : v67;
                             if (u0F.select != 'multiple') {
                                 X0F = {};
                             }
                             for (t67 = 0; t67 < 7; t67++) {
                                 l67 = Z7(e67.getFullYear(), e67.getMonth(), e67.getDate() - v67 + t67);
                                 if (W67) {
                                     delete X0F[l67];
                                 } else if (x6.objectToArray(X0F).length / 7 < l0F) {
                                     X0F[l67] = l67;
                                 }
                             }
                             L0F();
                         } else {
                             var a67 = d6('.mbsc-cal .mbsc-cal-day[data-full="' + O67.attr('data-full') + '"]', E0F);
                             if (W67) {
                                 a67.removeClass('mbsc-cal-day-sel').removeAttr('aria-selected').find('.mbsc-cal-day-i').removeClass(f0F);
                                 delete X0F[e67];
                             } else if (x6.objectToArray(X0F).length < l0F) {
                                 a67.addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(f0F);
                                 X0F[e67] = e67;
                             }
                         }
                     }
                     if (u0F.setOnDayTap && u0F.select != 'multiple' && u0F.display != 'inline') {
                         D0F.needsSlide = false;
                         D0F.setDate(c67);
                         D0F.select();
                         return false;
                     }
                 },
                 onCancel: function p67() {
                     if (!D0F.live && F0F) {
                         X0F = W6({}, W0F);
                     }
                 }
             });
             return e0F;
         };
         var U3 = function x67() {};
         var s7 = P.$;
         var O1 = function S67(n67, I67, g67) {
             var T67, o67, s67, J67, i67 = this;
             P.classes.Base.call(this, n67, I67, true);
             i67.__init = U3;
             i67.__destroy = U3;
             i67._init = function(r67) {
                 var y67;
                 J67 = i67.settings;
                 T67 = s7(n67);
                 y67 = !!o67;
                 o67 = i67._$parent = y67 ? o67 : T67.parent();
                 if (s67) {
                     o67.removeClass(s67);
                 }
                 s67 = i67._css + ' mbsc-progress-w mbsc-control-w mbsc-' + J67.theme + (J67.baseTheme ? ' mbsc-' + J67.baseTheme : '') + (J67.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
                 o67.addClass(s67);
                 T67.addClass('mbsc-control');
                 i67.__init(r67);
                 if (!y67) {
                     i67._attachChange();
                 }
                 i67.refresh();
             };
             i67._destroy = function() {
                 i67.__destroy();
                 o67.removeClass(s67);
                 T67.removeClass('mbsc-control');
             };
             if (!g67) {
                 i67.init(I67);
             }
         };
         O1.prototype = {
             _class: 'progressbase'
         };
         var s6 = P.$;
         var D1 = P.$;
         var F1 = function G17(t17, c17, W17) {
             function f17() {
                 var a17 = b17('value', u17);
                 if (a17 !== F17) {
                     q17(a17);
                 }
             }

             function b17(p17, x17) {
                 var O17 = V17.attr(p17);
                 return O17 === undefined || O17 === '' ? x17 : +O17;
             }

             function q17(S17, s17, i17, o17) {
                 S17 = Math.min(R17, Math.max(S17, u17));
                 l17.css('width', (S17 - u17) * 100 / (R17 - u17) + '%');
                 if (i17 === undefined) {
                     i17 = true;
                 }
                 if (o17 === undefined) {
                     o17 = i17;
                 }
                 if (S17 !== F17 || s17) {
                     N17._display(S17);
                 }
                 if (S17 !== F17) {
                     F17 = S17;
                     if (i17) {
                         V17.attr('value', F17);
                     }
                     if (o17) {
                         V17.trigger('change');
                     }
                 }
             }
             var z17, V17, X17, l17, e17, L17, u17, R17, D17, v17, F17, E17, N17 = this;
             O1.call(this, t17, c17, true);
             N17._display = function(J17) {
                 E17 = v17 && D17.returnAffix ? v17.replace(/\{value\}/, J17).replace(/\{max\}/, R17) : J17;
                 if (e17) {
                     e17.html(E17);
                 }
                 if (z17) {
                     z17.html(E17);
                 }
             };
             N17._attachChange = function() {
                 V17.on('change', f17);
             };
             N17.__init = function(g17) {
                 var n17, I17, T17, y17;
                 D17 = N17.settings;
                 V17 = D1(t17);
                 y17 = !!X17;
                 X17 = N17._$parent;
                 u17 = N17._min = g17.min === undefined ? b17('min', D17.min) : g17.min;
                 R17 = N17._max = g17.max === undefined ? b17('max', D17.max) : g17.max;
                 F17 = b17('value', u17);
                 n17 = V17.attr('data-val') || D17.val;
                 T17 = V17.attr('data-step-labels');
                 T17 = T17 ? JSON.parse(T17) : D17.stepLabels;
                 v17 = V17.attr('data-template') || (R17 == 100 && !D17.template ? '{value}%' : D17.template);
                 if (!y17) {
                     W4(X17);
                     L7(V17);
                     X17.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
                     l17 = N17._$progress = X17.find('.mbsc-progress-bar');
                     L17 = N17._$track = X17.find('.mbsc-progress-track');
                 } else {
                     if (n17) {
                         z17.remove();
                         X17.removeClass('mbsc-progress-value-' + (n17 == 'right' ? 'right' : 'left'));
                     }
                     if (T17) {
                         D1('.mbsc-progress-step-label', L17).remove();
                     }
                 }
                 V17.attr('min', u17).attr('max', R17);
                 if (n17) {
                     z17 = D1('<span class="mbsc-progress-value"></span>');
                     X17.addClass('mbsc-progress-value-' + (n17 == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append(z17);
                 }
                 if (T17) {
                     for (I17 = 0; I17 < T17.length; ++I17) {
                         L17.append('<span class="mbsc-progress-step-label" style="' + (D17.rtl ? 'right' : 'left') + ': ' + (T17[I17] - u17) * 100 / (R17 - u17) + '%" >' + T17[I17] + '</span>');
                     }
                 }
                 e17 = D1(V17.attr('data-target') || D17.target);
             };
             N17.__destroy = function() {
                 X17.find('.mbsc-progress-cont').remove();
                 X17.find('.mbsc-input-wrap').before(V17).remove();
                 V17.off('change', f17);
             };
             N17.refresh = function() {
                 q17(b17('value', u17), true, false);
             };
             N17.getVal = function() {
                 return F17;
             };
             N17.setVal = function(r17, Q17, k17) {
                 q17(r17, true, Q17, k17);
             };
             if (!W17) {
                 N17.init(c17);
             }
         };
         F1.prototype = {
             _class: 'progress',
             _css: 'mbsc-progress',
             _hasTheme: true,
             _hasLang: true,
             _defaults: {
                 min: 0,
                 max: 100,
                 returnAffix: true
             }
         };
         P.classes.Progress = F1;
         P.presetShort('progress', 'Progress');
         var a1 = function m17() {};
         var J = P.$;
         var l1 = P.util;
         var L1 = l1.getCoord;
         var b4 = l1.testTouch;
         var e1 = function P37(q37, a37, r37) {
             function p37(Q37) {
                 if (b4(Q37, this) && !K37 && !q37.disabled) {
                     if (j37.stopProp) {
                         Q37.stopPropagation();
                     }
                     K37 = true;
                     V37 = false;
                     L37 = false;
                     t37 = L1(Q37, 'X');
                     x37 = L1(Q37, 'Y');
                     G37 = t37;
                     Z37.removeClass('mbsc-progress-anim');
                     e37 = w37 ? J('.mbsc-slider-handle', this) : H37;
                     if (R37) {
                         R37.removeClass('mbsc-handle-curr');
                     }
                     R37 = e37.parent().addClass('mbsc-active mbsc-handle-curr');
                     Y37 = +e37.attr('data-index');
                     W37 = Z37[0].offsetWidth;
                     l37 = Z37[0].getBoundingClientRect().left;
                     if (Q37.type === 'mousedown') {
                         Q37.preventDefault();
                         J(document).on('mousemove', b37).on('mouseup', u37);
                     }
                 }
             }

             function b37(k37) {
                 if (K37) {
                     G37 = L1(k37, 'X');
                     n37 = L1(k37, 'Y');
                     s37 = G37 - t37;
                     I37 = n37 - x37;
                     if (Math.abs(s37) > 5 || V37) {
                         V37 = true;
                         if (Math.abs(f37 - new Date()) > 50) {
                             f37 = new Date();
                             g37(G37, j37.round, S37);
                         }
                     }
                     if (V37) {
                         k37.preventDefault();
                     } else if (Math.abs(I37) > 7) {
                         E37(k37);
                     }
                 }
             }

             function u37(m37) {
                 if (K37) {
                     m37.preventDefault();
                     if (!w37) {
                         Z37.addClass('mbsc-progress-anim');
                     }
                     g37(G37, true, true);
                     if (!V37 && !L37) {
                         if (m37.type == 'touchend') {
                             l1.preventClick();
                         }
                         d37._onTap(C37[Y37]);
                     }
                     E37();
                 }
             }

             function i37() {
                 if (K37) {
                     E37();
                 }
             }

             function o37() {
                 var P77 = d37._readValue(J(this)),
                     d77 = +J(this).attr('data-index');
                 if (P77 !== C37[d77]) {
                     C37[d77] = P77;
                     M37(P77, d77);
                 }
             }

             function O37(C77) {
                 C77.stopPropagation();
             }

             function J37(B77) {
                 B77.preventDefault();
             }

             function T37(h77) {
                 var Y77;
                 if (!q37.disabled) {
                     switch (h77.keyCode) {
                         case 38:
                         case 39:
                             Y77 = 1;
                             break;
                         case 40:
                         case 37:
                             Y77 = -1;
                             break;
                     }
                     if (Y77) {
                         h77.preventDefault();
                         if (!D37) {
                             Y37 = +J(this).attr('data-index');
                             M37(C37[Y37] + A37 * Y77, Y37, true);
                             D37 = setInterval(function() {
                                 M37(C37[Y37] + A37 * Y77, Y37, true);
                             }, 200);
                         }
                     }
                 }
             }

             function X37(A77) {
                 A77.preventDefault();
                 clearInterval(D37);
                 D37 = null;
             }

             function E37() {
                 K37 = false;
                 R37.removeClass('mbsc-active');
                 J(document).off('mousemove', b37).off('mouseup', u37);
             }

             function g37(w77, M77, U77) {
                 var H77 = M77 ? Math.min(Math.round(Math.max((w77 - l37) * 100 / W37, 0) / v37 / A37) * A37 * 100 / (N37 - B37), 100) : Math.max(0, Math.min((w77 - l37) * 100 / W37, 100));
                 if (F37) {
                     H77 = 100 - H77;
                 }
                 M37(Math.round((B37 + H77 / v37) * z37) / z37, Y37, U77, H77);
             }

             function y37(j77) {
                 return (j77 - B37) * 100 / (N37 - B37);
             }

             function M37(K77, Z77, X77, N77, D77, V77) {
                 var u77 = H37.eq(Z77),
                     G77 = u77.parent();
                 K77 = Math.min(N37, Math.max(K77, B37));
                 if (V77 === undefined) {
                     V77 = X77;
                 }
                 if (d37._update) {
                     d37._update(K77, C37, Z77, N77, w37, D77, G77);
                 } else {
                     G77.css({
                         left: F37 ? 'auto' : (N77 || y37(K77)) + '%',
                         right: F37 ? (N77 || y37(K77)) + '%' : 'auto'
                     });
                 }
                 if (K77 > B37) {
                     G77.removeClass('mbsc-slider-start');
                 } else if (C37[Z77] > B37 || D77) {
                     G77.addClass('mbsc-slider-start');
                 }
                 if (X77 && C37[Z77] != K77) {
                     L37 = true;
                     C37[Z77] = K77;
                     d37._fillValue(K77, Z77, V77);
                 }
                 u77.attr('aria-valuenow', K77);
             }
             var h37, e37, R37, H37, c37, U37, Z37, K37, L37, s37, I37, l37, G37, n37, Y37, F37, S37, N37, B37, V37, w37, A37, j37, v37, t37, x37, z37, D37, W37, C37, d37 = this,
                 f37 = new Date();
             O1.call(this, q37, a37, true);
             d37._onTap = a1;
             d37.___init = a1;
             d37.___destroy = a1;
             d37._attachChange = function() {
                 h37.on(j37.changeEvent, o37);
             };
             d37.__init = function(R77) {
                 var F77;
                 if (H37) {
                     F77 = true;
                     H37.parent().remove();
                 }
                 d37.___init(R77);
                 U37 = d37._$parent;
                 Z37 = d37._$track;
                 h37 = U37.find('input');
                 j37 = d37.settings;
                 B37 = d37._min;
                 N37 = d37._max;
                 A37 = d37._step;
                 S37 = d37._live;
                 z37 = A37 % 1 !== 0 ? 100 / (+(A37 % 1).toFixed(2) * 100) : 1;
                 v37 = 100 / (N37 - B37) || 100;
                 w37 = h37.length > 1;
                 F37 = j37.rtl;
                 C37 = [];
                 h37.each(function(b77) {
                     C37[b77] = d37._readValue(J(this));
                     J(this).attr('data-index', b77);
                 });
                 H37 = U37.find('.mbsc-slider-handle');
                 c37 = U37.find(w37 ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');
                 H37.on('keydown', T37).on('keyup', X37).on('blur', X37);
                 c37.on('touchstart mousedown', p37).on('touchmove', b37).on('touchend touchcancel', u37).on('pointercancel', i37);
                 if (!F77) {
                     h37.on('click', O37);
                     U37.on('click', J37);
                 }
             };
             d37.__destroy = function() {
                 U37.off('click', J37);
                 h37.off(j37.changeEvent, o37).off('click', O37);
                 H37.off('keydown', T37).off('keyup', X37).off('blur', X37);
                 c37.off('touchstart mousedown', p37).off('touchmove', b37).off('touchend touchcancel', u37).off('pointercancel', i37);
                 d37.___destroy();
             };
             d37.refresh = function() {
                 h37.each(function(z77) {
                     M37(d37._readValue(J(this)), z77, true, false, true, false);
                 });
             };
             d37.getVal = function() {
                 return w37 ? C37.slice(0) : C37[0];
             };
             d37.setVal = d37._setVal = function(L77, E77, q77) {
                 if (!J.isArray(L77)) {
                     L77 = [L77];
                 }
                 J.each(L77, function(e77, v77) {
                     M37(v77, e77, true, false, true, q77);
                 });
             };
             if (!r37) {
                 d37.init(a37);
             }
         };
         e1.prototype = {
             _class: 'sliderbase'
         };
         var e3 = P.$;
         var r1 = function t77(g77, n77, P47) {
             function f77(d47) {
                 return (d47 - O77) * 100 / (x77 - O77);
             }

             function T77(B47, Y47) {
                 var C47 = c77.attr(B47);
                 return C47 === undefined || C47 === '' ? Y47 : C47 === 'true';
             }
             var c77, p77, i77, r77, s77, o77, J77, I77, W77, x77, O77, S77, a77, l77 = this;
             F1.call(this, g77, n77, true);
             var k77 = l77.__init,
                 m77 = l77.__destroy;
             e1.call(this, g77, n77, true);
             var Q77 = l77.__init,
                 y77 = l77.__destroy;
             l77.__init = function(h47) {
                 k77(h47);
                 Q77(h47);
             };
             l77.__destroy = function() {
                 m77();
                 y77();
             };
             l77._update = function(A47, H47, w47, M47, U47, j47, K47) {
                 if (I77) {
                     if (w47 === 0) {
                         A47 = Math.min(A47, H47[1]);
                         i77.css({
                             width: f77(H47[1]) - f77(A47) + '%',
                             left: W77 ? 'auto' : f77(A47) + '%',
                             right: W77 ? f77(A47) + '%' : 'auto'
                         });
                     } else {
                         A47 = Math.max(A47, H47[0]);
                         i77.css({
                             width: f77(A47) - f77(H47[0]) + '%'
                         });
                     }
                 } else if (U47 || !o77) {
                     K47.css({
                         left: W77 ? 'auto' : (M47 || f77(A47)) + '%',
                         right: W77 ? (M47 || f77(A47)) + '%' : 'auto'
                     });
                 } else {
                     i77.css('width', (M47 || f77(A47)) + '%');
                 }
                 if (J77) {
                     r77.eq(w47).html(A47);
                 }
                 if (!U47 && (H47[w47] != A47 || j47)) {
                     l77._display(A47);
                 }
             };
             l77._readValue = function(Z47) {
                 return +Z47.val();
             };
             l77._fillValue = function(N47, G47, V47) {
                 c77.eq(G47).val(N47);
                 if (V47) {
                     c77.eq(G47).trigger('change');
                 }
             };
             l77.___init = function(D47) {
                 var u47, X47;
                 if (p77) {
                     p77.removeClass('mbsc-slider-has-tooltip');
                     if (S77 != 1) {
                         e3('.mbsc-slider-step', s77).remove();
                     }
                 }
                 p77 = l77._$parent;
                 s77 = l77._$track;
                 i77 = l77._$progress;
                 c77 = p77.find('input');
                 a77 = l77.settings;
                 O77 = l77._min;
                 x77 = l77._max;
                 l77._step = S77 = D47.step === undefined ? +c77.attr('step') || a77.step : D47.step;
                 l77._live = T77('data-live', a77.live);
                 J77 = T77('data-tooltip', a77.tooltip);
                 o77 = T77('data-highlight', a77.highlight) && c77.length < 3;
                 I77 = o77 && c77.length == 2;
                 W77 = a77.rtl;
                 if (J77) {
                     p77.addClass('mbsc-slider-has-tooltip');
                 }
                 if (S77 != 1) {
                     X47 = (x77 - O77) / S77;
                     for (u47 = 0; u47 <= X47; ++u47) {
                         s77.append('<span class="mbsc-slider-step" style="' + (W77 ? 'right' : 'left') + ':' + 100 / X47 * u47 + '%"></span>');
                     }
                 }
                 c77.each(function(F47) {
                     if (this.type == 'range') {
                         e3(this).attr('min', O77).attr('max', x77).attr('step', S77);
                     }(o77 ? i77 : s77).append('<span class="mbsc-slider-handle-cont' + (I77 && !F47 ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + O77 + '" aria-valuemax="' + x77 + '" data-index="' + F47 + '"></span>' + (J77 ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
                 });
                 r77 = p77.find('.mbsc-slider-tooltip');
             };
             if (!P47) {
                 l77.init(n77);
             }
         };
         r1.prototype = {
             _class: 'progress',
             _css: 'mbsc-progress mbsc-slider',
             _hasTheme: true,
             _hasLang: true,
             _defaults: {
                 changeEvent: 'change',
                 stopProp: true,
                 min: 0,
                 max: 100,
                 step: 1,
                 live: true,
                 highlight: true,
                 round: true,
                 returnAffix: true
             }
         };
         P.classes.Slider = r1;
         P.presetShort('slider', 'Slider');
         var G = P.$;
         var T1 = P.util;
         var L3 = function R47() {};
         var X6 = P.classes;
         X6.Color = function(I87, B27, X27) {
             function k87(R27, F27, z27, L27, b27) {
                 if (!b27) {
                     R87._value = R87._hasValue ? R87._tempValue.slice(0) : null;
                     for (var D27 = 0; D27 < b87.length; ++D27) {
                         if (b87[D27].tempChangedColor && R87._value && R87._value.indexOf(b87[D27].tempChangedColor) != -1) {
                             b87[D27].changedColor = b87[D27].tempChangedColor;
                         }
                         delete b87[D27].tempChangedColor;
                     }
                 }
                 if (R27) {
                     if (R87._isInput) {
                         W87.val(R87._hasValue ? R87._tempValue : '');
                     }
                     J87('onFill', {
                         valueText: R87._hasValue ? R87._tempValue : '',
                         change: F27
                     });
                     if (F27) {
                         t87 = G.extend(true, {}, q87);
                         R87._preventChange = true;
                         W87.trigger('change');
                         M27(R87._value);
                     }
                 }
             }

             function A27(E27, q27) {
                 q27 = q27 !== undefined ? q27 : m87(E27);
                 return '<div class="mbsc-color-input-item" data-color="' + (q27 !== undefined ? q27 : E27) + '" style="background: ' + E27 + ';">' + (e87 ? '' : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + '</div>';
             }

             function H27(e27) {
                 w27[0].style.background = e27 ? T1.prefix + 'linear-gradient(left, ' + (z87.rtl ? '#000000' : '#FFFFFF') + ' 0%, ' + e27 + ' 50%, ' + (z87.rtl ? '#FFFFFF' : '#000000') + ' 100%)' : '';
             }

             function m87(v27) {
                 if (Object.keys(q87).length && !isNaN(v27)) {
                     return v27;
                 }
                 for (var t27 in b87) {
                     if (v27 == b87[t27].color || v27 == b87[t27].changedColor) {
                         return t27;
                     }
                 }
             }

             function G27() {
                 if (n87) {
                     var l27, f27 = '';
                     a87.empty();
                     if (R87._value) {
                         if (e87) {
                             f27 += A27(R87._value, L87);
                         } else {
                             for (l27 = 0; l27 < R87._value.length; ++l27) {
                                 f27 += A27(R87._value[l27], Object.keys(q87).length && q87[l27].colorIndex ? q87[l27].colorIndex : m87(R87._value[l27]));
                             }
                         }
                         a87.append(f27);
                         R87.tap(G('.mbsc-color-input-item', a87), function(c27) {
                             if (G(c27.target).hasClass('mbsc-color-input-item-close')) {
                                 var W27 = G(this).index();
                                 c27.stopPropagation();
                                 c27.preventDefault();
                                 if (L87 === undefined) {
                                     L87 = G(c27.target).parent().attr('data-color');
                                 }
                                 if (v87) {
                                     E87 = b87[L87].previewInd;
                                     f87.eq(E87).parent().removeClass('mbsc-color-active');
                                     t87[W27] = {};
                                     q87[W27] = {};
                                 }
                                 R87._value.splice(W27, 1);
                                 R87.setVal(R87._value, true, true);
                             } else if (p87 && z87.display !== 'inline') {
                                 N27 = true;
                                 L87 = G(c27.target).attr('data-color');
                                 if (isNaN(L87)) {
                                     L87 = m87(L87);
                                 }
                                 if (L87) {
                                     b87[L87].selected = true;
                                     E87 = b87[L87].previewInd;
                                     setTimeout(function() {
                                         i87.scroll(O87.eq(L87), 400);
                                         if (v87) {
                                             S87.scroll(f87.eq(E87), 400);
                                         }
                                     }, 200);
                                 }
                             }
                         });
                     }
                 }
             }

             function g87(O27, x27) {
                 var p27, a27 = O27.match(/\d+/gmi);
                 switch (true) {
                     case O27.indexOf('rgb') > -1:
                         p27 = c1({
                             r: a27[0],
                             g: a27[1],
                             b: a27[2]
                         });
                         break;
                     case O27.indexOf('hsl') > -1:
                         p27 = U8({
                             h: a27[0],
                             s: a27[1],
                             l: a27[2]
                         });
                         break;
                     case O27.indexOf('hsv') > -1:
                         p27 = G4({
                             h: a27[0],
                             s: a27[1],
                             v: a27[2]
                         });
                         break;
                     case O27.indexOf('#') > -1:
                         p27 = O27;
                         break;
                 }
                 return Z27(p27, x27 || z87.format);
             }

             function Z27(S27, i27) {
                 switch (i27) {
                     case 'rgb':
                         return W1(S27);
                     case 'hsl':
                         return k7(S27);
                     case 'hsv':
                         return u4(S27);
                     default:
                         return S27;
                 }
             }

             function K27() {
                 var o27;
                 for (o27 = 0; o27 < z87.select; ++o27) {
                     if (q87[o27].colorIndex === undefined) {
                         return o27;
                     }
                 }
             }

             function Q87(s27, J27) {
                 G('.mbsc-color-active', J27).removeClass('mbsc-color-active');
                 if (p87) {
                     s27.parent().addClass('mbsc-color-active');
                     if (v87 && s27) {
                         if (E87 !== undefined) {
                             f87.eq(E87).parent().addClass('mbsc-color-active');
                         }
                     }
                 }
             }

             function M27(I27, m27) {
                 var T27, g27, n27 = [],
                     Q27 = 0,
                     y27 = G.map(b87, function(P57) {
                         return P57.changedColor || P57.color;
                     });
                 if (e87) {
                     I27 = G.isArray(I27) ? I27[0] : I27;
                     g27 = y27.indexOf(I27);
                     if (g27 > -1) {
                         n27.push(g27);
                     }
                     if (I27 && !n27.length) {
                         var r27 = +G('.mbsc-color-input-item', a87).attr('data-color');
                         if (!isNaN(r27)) {
                             n27.push(r27);
                         }
                         L87 = r27;
                     }
                 } else if (I27) {
                     if (v87 && p87) {
                         for (var k27 in t87) {
                             if (t87[k27].colorIndex !== undefined) {
                                 n27.push(+t87[k27].colorIndex);
                             }
                         }
                     } else {
                         for (T27 = 0; T27 < I27.length; ++T27) {
                             g27 = y27.indexOf(I27[T27]);
                             if (g27 > -1) {
                                 n27.push(g27);
                                 y27[g27] = 'temp' + T27;
                             }
                         }
                     }
                 }
                 for (T27 = 0; T27 < n27.length; ++T27) {
                     y87(true, n27[T27], Q27++, b87[n27[T27]].changedColor || b87[n27[T27]].color, true);
                 }
                 for (T27 = 0; T27 < b87.length; ++T27) {
                     if (n27.indexOf(T27) == -1) {
                         y87(false, T27, undefined, b87[T27].changedColor || b87[T27].color, false);
                     }
                 }
                 if (v87) {
                     for (T27 = Q27; T27 < z87.select; ++T27) {
                         q87[T27] = {};
                         if (f87) {
                             f87.eq(T27).addClass('mbsc-color-preview-item-empty').css({
                                 background: 'transparent'
                             });
                         }
                     }
                 }
                 t87 = G.extend(true, {}, q87);
                 if (m27 !== false) {
                     G27();
                 }
             }

             function y87(d57, C57, B57, Y57, A57, H57) {
                 if (v87 && A57) {
                     q87[B57].colorIndex = d57 ? C57 : undefined;
                     q87[B57].color = d57 ? Y57 : undefined;
                     if (f87) {
                         var h57 = f87.eq(B57);
                         h57.removeClass('mbsc-color-preview-item-empty').css({
                             background: d57 ? Y57 : 'transparent'
                         });
                         if (!d57) {
                             h57.addClass('mbsc-color-preview-item-empty').parent().removeClass('mbsc-color-active');
                         }
                     }
                 }
                 if (H57) {
                     if (d57) {
                         R87._tempValue.splice(B57, 0, Y57);
                     } else {
                         R87._tempValue.splice(R87._tempValue.indexOf(Y57), 1);
                     }
                 }
                 if (O87) {
                     if (d57) {
                         O87.eq(C57).addClass('mbsc-color-selected');
                     } else {
                         O87.eq(C57).removeClass('mbsc-color-selected').parent().removeClass('mbsc-color-active');
                     }
                 }
                 b87[C57].previewInd = d57 ? B57 : undefined;
                 b87[C57].selected = d57;
             }

             function P27(w57, M57) {
                 if (w57 !== undefined && (e87 || b87[w57].selected)) {
                     L87 = w57;
                     c87 = b87[w57].changedColor || b87[w57].color;
                     l87 = O87.eq(w57);
                     if (p87) {
                         Q87(O87.eq(w57), M57 || '');
                         s87 = g87(b87[w57].color, 'hsl');
                         s87.l = g87(c87, 'hsl').l;
                         H27(b87[w57].color);
                         T87.setVal(100 - s87.l, false, false);
                     }
                 } else if (p87) {
                     H27();
                 }
             }

             function u27() {
                 var U57, j57 = [];
                 for (U57 = 0; U57 < b87.length; ++U57) {
                     if (b87[U57].selected) {
                         j57.push(b87[U57]);
                     }
                 }
                 return j57;
             }

             function Y27(Z57, G57) {
                 var K57 = G(Z57.target).index();
                 L87 = q87[K57].colorIndex;
                 l87 = O87.eq(L87);
                 E87 = K57;
                 P27(L87, G57);
                 i87.scroll(l87, 250);
                 J87('onPreviewItemTap', {
                     target: Z57.target,
                     value: q87[K57].color,
                     index: K57
                 });
             }

             function h27(X57, N57) {
                 var V57 = false,
                     u57 = G('.mbsc-color-selected', N57);
                 l87 = G(X57.target);
                 if (l87.hasClass('mbsc-color-clear-item')) {
                     c87 = '';
                     R87.clear();
                     return;
                 }
                 if ((e87 || U27 > +u57.length || l87.hasClass('mbsc-color-selected'))) {
                     L87 = l87.attr('data-index');
                     if (v87) {
                         E87 = b87[L87].previewInd !== undefined ? b87[L87].previewInd : K27();
                         V57 = p87 && l87.hasClass('mbsc-color-selected') && !l87.parent().hasClass('mbsc-color-active');
                         if (f87.length > 6) {
                             S87.scroll(f87.eq(E87));
                         }
                     }
                     c87 = b87[L87].changedColor || b87[L87].color;
                     if (e87) {
                         u57.removeClass('mbsc-color-selected');
                         R87._tempValue = c87;
                         if (c87) {
                             l87.toggleClass('mbsc-color-selected');
                         }
                         Q87(l87, N57);
                     } else {
                         Q87(l87, N57);
                         if (!V57) {
                             y87(!b87[L87].selected, L87, E87, c87, true, true);
                         }
                     }
                     P27(L87, N57);
                     if (R87.live) {
                         R87._fillValue();
                         J87('onSet', {
                             value: R87._value
                         });
                     }
                     J87('onItemTap', {
                         target: X57.target,
                         value: c87,
                         selected: b87[L87].selected,
                         index: L87
                     });
                 }
             }
             var z87, j27, b87, V27, J87, i87, S87, o87, c87, s87, N27, x87, v87, w27, p87, C27, T87, L87, n87, e87, U27, d27, a87, O87, f87, l87, r87, R87 = this,
                 W87 = G(I87),
                 E87 = 0,
                 t87 = {},
                 q87 = {};
             X6.Frame.call(this, I87, B27, true);
             R87.setVal = R87._setVal = function(D57, F57, R57, b57) {
                 R87._hasValue = D57 !== null && D57 !== undefined;
                 R87._tempValue = e87 ? G.isArray(D57) ? D57[0] : D57 : G.isArray(D57) ? D57 : [D57];
                 k87(F57, true, R57 === undefined ? F57 : R57, b57);
             };
             R87.getVal = R87._getVal = function(z57) {
                 return R87._hasValue || z57 ? d27 ? u27() : R87[z57 ? '_tempValue' : '_value'] : null;
             };
             R87._readValue = function() {
                 var L57 = W87.val() || '';
                 R87._hasValue = false;
                 if (L57.length !== 0 && L57 !== '') {
                     R87._hasValue = true;
                 }
                 if (R87._hasValue) {
                     R87._tempValue = e87 ? L57 : z87.format == 'hex' ? L57.split(',') : L57.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gmi);
                     k87(true);
                 } else {
                     R87._tempValue = [];
                 }
                 M27(R87._tempValue, R87._hasValue);
             };
             R87._fillValue = function() {
                 R87._hasValue = true;
                 k87(true, true, 0, true);
             };
             R87._generateContent = function() {
                 var q57, E57, t57, e57 = o87 ? 1 : 0;
                 C27 = x87 ? Math.ceil((b87.length + e57) / z87.rows) : z87.rows;
                 E57 = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (x87 ? '' : 'mbsc-color-vertical') + '"><div class="mbsc-color-cont">' + (x87 ? '<div class="mbsc-color-row">' : '');
                 for (q57 = 0; q57 < b87.length; ++q57) {
                     t57 = b87[q57].changedColor || b87[q57].color;
                     if (o87 && q57 === 0) {
                         E57 += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>';
                     }
                     if (q57 !== 0 && (q57 + e57) % C27 === 0) {
                         E57 += x87 ? '</div><div class="mbsc-color-row">' : '';
                     }
                     E57 += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + q57 + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (b87[q57].selected ? 'mbsc-color-selected' : '') + '"  style="background:' + t57 + '"></div></div>';
                 }
                 E57 += '</div></div>' + (x87 ? '</div>' : '');
                 if (p87) {
                     E57 += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>';
                 }
                 if (v87) {
                     E57 += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
                     for (var v57 in t87) {
                         E57 += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (t87[v57].color ? '' : 'mbsc-color-preview-item-empty') + '" style="background: ' + (t87[v57].color || 'initial') + ';"></div></div>';
                     }
                     E57 += '</div></div>';
                 }
                 return E57;
             };
             R87._position = function(c57) {
                 var l57, f57;
                 if (!x87) {
                     l57 = c57.find('.mbsc-color-cont');
                     f57 = Math.ceil(l57.find('.mbsc-color-item-c')[0].offsetWidth);
                     l57.width(Math.min(Math.floor(c57.find('.mbsc-fr-c').width() / f57), Math.round(b87.length / z87.rows)) * f57 + 1);
                 }
                 if (i87) {
                     i87.refresh();
                 }
                 if (S87) {
                     S87.refresh();
                 }
             };
             R87._markupInserted = function(W57) {
                 if (!x87) {
                     W57.find('.mbsc-color-scroll-cont').css('max-height', W57.find('.mbsc-color-item-c')[0].offsetHeight * z87.rows);
                 }
                 i87 = new X6.ScrollView(W57.find('.mbsc-color-scroll-cont')[0], {
                     axis: x87 ? 'X' : 'Y',
                     rtl: z87.rtl,
                     elastic: 60,
                     stopProp: false,
                     mousewheel: z87.mousewheel,
                     onBtnTap: function a57(O57) {
                         h27(O57, W57);
                     }
                 });
             };
             R87._attachEvents = function(p57) {
                 var x57;
                 O87 = G('.mbsc-color-item', p57);
                 p57.on('keydown', '.mbsc-color-btn-e', function(S57) {
                     S57.stopPropagation();
                     if (S57.keyCode == 32) {
                         if (S57.target.classList.contains('mbsc-color-item')) {
                             h27(S57, p57);
                         } else {
                             Y27(S57, p57);
                         }
                     }
                 });
                 if (v87) {
                     f87 = G('.mbsc-color-preview-item', p57);
                 }
                 if (p87) {
                     p57.addClass('mbsc-color-refine');
                     r87 = G('.mbsc-color-slider', p57);
                     T87 = new X6.Slider(r87[0], {
                         theme: z87.theme,
                         rtl: z87.rtl
                     });
                     w27 = p57.find('.mbsc-progress-track');
                     if (L87 && R87._value) {
                         P27(L87, p57);
                     }
                     r87.on('change', function() {
                         if (L87 !== undefined && (e87 || b87[L87].selected)) {
                             s87.l = 100 - this.value;
                             x57 = g87(s87.toString()).toString();
                             if (e87) {
                                 R87._tempValue = x57;
                             } else {
                                 R87._tempValue[E87 !== undefined ? E87 : R87._tempValue.length] = x57;
                             }
                             b87[L87].tempChangedColor = x57;
                             O87.eq(L87).css('background', x57);
                             if (v87) {
                                 q87[E87].color = x57;
                                 f87.eq(E87).removeClass('mbsc-color-preview-item-empty').css({
                                     'background': x57
                                 });
                             }
                             if (R87.live) {
                                 T1.throttle(R87._fillValue());
                             }
                         }
                     });
                 }
                 if (v87) {
                     S87 = new X6.ScrollView(p57.find('.mbsc-color-preview-cont')[0], {
                         axis: 'X',
                         rtl: z87.rtl,
                         mousewheel: z87.mousewheel,
                         onBtnTap: function i57(o57) {
                             Y27(o57, p57);
                         }
                     });
                 }
             };
             R87._detachEvents = function() {
                 i87.destroy();
                 if (T87) {
                     T87.destroy();
                 }
                 if (S87) {
                     S87.destroy();
                 }
             };
             R87.__processSettings = function() {
                 var s57, J57;
                 z87 = R87.settings;
                 V27 = z87.format;
                 J87 = R87.trigger;
                 x87 = z87.navigation == 'horizontal';
                 R87._value = [];
                 R87._tempValue = [];
                 e87 = z87.select == 'single';
                 o87 = z87.clear !== undefined ? z87.clear : e87;
                 J57 = z87.data || [];
                 if (!J57.length) {
                     switch (z87.format) {
                         case 'rgb':
                             J57 = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"];
                             if (o87) {
                                 J57.splice(10, 0, 'rgb(83, 71, 65)');
                             }
                             break;
                         case 'hsl':
                             J57 = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"];
                             if (o87) {
                                 J57.splice(10, 0, 'hsl(20, 12%, 29%)');
                             }
                             break;
                         default:
                             J57 = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#683ab7', '#3f51b5', '#2196f3', '#009788', '#4baf4f', '#7e5d4e', '#9e9e9e'];
                             if (o87) {
                                 J57.splice(10, 0, '#534741');
                             }
                     }
                 }
                 p87 = z87.mode == 'refine';
                 v87 = !isNaN(z87.select);
                 U27 = isNaN(z87.select) ? e87 ? 2 : J57.length : z87.select;
                 d27 = G.isPlainObject(J57[0]);
                 if (v87 && !Object.keys(t87).length) {
                     for (s57 = 0; s57 < z87.select; ++s57) {
                         t87[s57] = {};
                         q87[s57] = {};
                     }
                 }
                 if (!b87) {
                     b87 = J57.slice(0);
                     for (s57 = 0; s57 < b87.length; ++s57) {
                         if (!G.isPlainObject(J57[s57])) {
                             J57[s57] = J57[s57].toLowerCase();
                             b87[s57] = {
                                 key: s57,
                                 name: J57[s57],
                                 color: J57[s57]
                             };
                         } else {
                             b87[s57].color = J57[s57].color;
                         }
                     }
                 }
                 j27 = z87.defaultValue || b87[0].color;
                 c87 = j27;
                 s87 = g87(c87, 'hsl');
                 n87 = z87.enhance && W87.is('input');
                 if (n87) {
                     if (W87.hasClass('mbsc-color-input-hdn')) {
                         a87 = W87.prev();
                     } else {
                         a87 = G('<div ' + (I87.placeholder ? 'data-placeholder="' + I87.placeholder + '"' : '') + ' class="mbsc-control mbsc-color-input ' + (z87.inputClass || '') + '" readonly ></div>');
                         a87.insertBefore(W87);
                         W87.addClass('mbsc-color-input-hdn').attr('tabindex', -1);
                     }
                     z87.anchor = a87;
                     R87.attachShow(a87);
                 }
             };
             R87.__init = function() {
                 z87.cssClass = (z87.cssClass || '') + ' mbsc-color';
             };
             R87.__destroy = function() {
                 if (n87) {
                     W87.removeClass('mbsc-color-input-hdn');
                     a87.remove();
                 }
             };
             if (!X27) {
                 R87.init(B27);
             }
         };
         X6.Color.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _class: 'color',
             _defaults: G.extend({}, X6.Frame.prototype._defaults, {
                 headerText: false,
                 validate: L3,
                 parseValue: L3,
                 enhance: true,
                 rows: 2,
                 select: 'single',
                 format: 'hex',
                 navigation: 'horizontal'
             })
         };
         P.themes.color = P.themes.frame;
         P.presetShort('color', 'Color', false);
         T1.color = {
             hsv2hex: G4,
             hsv2rgb: Q4,
             rgb2hsv: f7,
             rgb2hex: c1,
             rgb2hsl: c7,
             hex2rgb: W1,
             hex2hsv: u4,
             hex2hsl: k7
         };
         P.$.each(['date', 'time', 'datetime'], function(n57, T57) {
             P.presetShort(T57);
         });
         var V = P.$;
         var Y6 = V.extend;
         var I4 = P.util;
         var V1 = I4.datetime;
         var r4 = V1.adjustedDate;
         var D7 = P.presets.scroller;
         var b7 = {
             labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs'],
             eventText: 'event',
             eventsText: 'events'
         };
         P.presetShort('eventcalendar');
         D7.eventcalendar = function(I57) {
             function D97(z97) {
                 if (z97) {
                     if (Y97[z97]) {
                         return Y97[z97];
                     }
                     var L97 = V('<div style="background-color:' + z97 + ';"></div>').appendTo('body'),
                         e97 = window.getComputedStyle ? getComputedStyle(L97[0]) : L97[0].style,
                         q97 = e97.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                         v97 = q97[0] * 0.299 + q97[1] * 0.587 + q97[2] * 0.114,
                         E97 = v97 > 130 ? '#000' : '#fff';
                     L97.remove();
                     Y97[z97] = E97;
                     return E97;
                 }
             }

             function F97(O97) {
                 var t97 = g57.labelsShort,
                     f97 = Math.abs(O97) / 1000,
                     c97 = f97 / 60,
                     W97 = c97 / 60,
                     l97 = W97 / 24,
                     a97 = l97 / 365;
                 return f97 < 45 && Math.round(f97) + ' ' + t97[5].toLowerCase() || c97 < 45 && Math.round(c97) + ' ' + t97[4].toLowerCase() || W97 < 24 && Math.round(W97) + ' ' + t97[3].toLowerCase() || l97 < 30 && Math.round(l97) + ' ' + t97[2].toLowerCase() || l97 < 365 && Math.round(l97 / 30) + ' ' + t97[1].toLowerCase() || Math.round(a97) + ' ' + t97[0].toLowerCase();
             }

             function u97(p97) {
                 return p97.sort(function(x97, S97) {
                     var i97 = x97.d || x97.start,
                         o97 = S97.d || S97.start,
                         s97 = !i97.getTime ? 0 : x97.start && x97.end && x97.start.toDateString() !== x97.end.toDateString() ? 1 : i97.getTime(),
                         J97 = !o97.getTime ? 0 : S97.start && S97.end && S97.start.toDateString() !== S97.end.toDateString() ? 1 : o97.getTime();
                     return s97 - J97;
                 });
             }

             function V97(T97) {
                 var g97, y97 = V('.mbsc-cal-c', m57)[0].offsetHeight,
                     r97 = T97[0].offsetHeight,
                     Q97 = T97[0].offsetWidth,
                     I97 = T97.offset().top - V('.mbsc-cal-c', m57).offset().top,
                     n97 = T97.closest('.mbsc-cal-row').index() < 2;
                 g97 = y57.addClass('mbsc-cal-events-t').css({
                     top: n97 ? I97 + r97 : '0',
                     bottom: n97 ? '0' : y97 - I97
                 }).addClass('mbsc-cal-events-v').height();
                 y57.css(n97 ? 'bottom' : 'top', 'auto').removeClass('mbsc-cal-events-t');
                 A97.css('max-height', g97);
                 k57.refresh();
                 k57.scroll(0);
                 if (n97) {
                     y57.addClass('mbsc-cal-events-b');
                 } else {
                     y57.removeClass('mbsc-cal-events-b');
                 }
                 V('.mbsc-cal-events-arr', y57).css('left', T97.offset().left - y57.offset().left + Q97 / 2);
             }

             function X97(A07, h07) {
                 var k97 = d97[A07];
                 if (k97) {
                     var C07, P07, Y07, m97, B07, H07, d07 = '<ul class="mbsc-cal-event-list">';
                     b97 = 0;
                     Q57 = h07;
                     h07.addClass(Z97).find('.mbsc-cal-day-i').addClass(K97);
                     if (h07.hasClass(H97)) {
                         h07.attr('data-hl', 'true').removeClass(H97);
                     }
                     u97(k97);
                     V.each(k97, function(M07, w07) {
                         m97 = w07.d || w07.start;
                         B07 = w07.start && w07.end && w07.start.toDateString() !== w07.end.toDateString();
                         Y07 = w07.color;
                         H07 = D97(Y07);
                         C07 = '';
                         P07 = '';
                         if (m97.getTime) {
                             C07 = V1.formatDate((B07 ? 'MM d yy ' : '') + g57.timeFormat, m97);
                         }
                         if (w07.end) {
                             P07 = V1.formatDate((B07 ? 'MM d yy ' : '') + g57.timeFormat, w07.end);
                         }
                         d07 += '<li role="button" aria-label="' + w07.text + (C07 ? ', ' + g57.fromText + ' ' + C07 : '') + (P07 ? ', ' + g57.toText + ' ' + P07 : '') + '" class="mbsc-cal-event">' + '<div class="mbsc-cal-event-color" style="' + (Y07 ? 'background:' + Y07 + ';' : '') + '"></div>' + '<div class="mbsc-cal-event-text">' + (m97.getTime && !B07 ? '<div class="mbsc-cal-event-time">' + V1.formatDate(g57.timeFormat, m97) + '</div>' : '') + w07.text + '</div>' + (w07.start && w07.end ? '<div class="mbsc-cal-event-dur">' + F97(w07.end - w07.start) + '</div>' : '') + '</li>';
                     });
                     d07 += '</ul>';
                     j97.html(d07);
                     I57.trigger('onEventBubbleShow', {
                         target: Q57[0],
                         eventList: y57[0]
                     });
                     V97(Q57);
                     I57.tap(V('.mbsc-cal-event', j97), function(U07) {
                         if (!k57.scrolled) {
                             I57.trigger('onEventSelect', {
                                 domEvent: U07,
                                 event: k97[V(this).index()],
                                 date: A07
                             });
                         }
                     });
                     w97 = true;
                 }
             }

             function C97() {
                 if (y57) {
                     y57.removeClass('mbsc-cal-events-v');
                 }
                 if (Q57) {
                     Q57.removeClass(Z97).find('.mbsc-cal-day-i').removeClass(K97);
                     if (Q57.attr('data-hl')) {
                         Q57.removeAttr('data-hl').addClass(H97);
                     }
                 }
                 w97 = false;
             }

             function U97() {
                 C97();
                 I57.redraw();
             }

             function R97(j07) {
                 return r4(j07.getFullYear(), j07.getMonth(), j07.getDate());
             }
             var G97, m57, y57, Q57, d97, k57, A97, j97, w97, b97, M97, B97, Y97 = {},
                 N97 = Y6({}, I57.settings),
                 g57 = Y6(I57.settings, b7, N97),
                 Z97 = 'mbsc-cal-day-sel mbsc-cal-day-ev',
                 H97 = 'mbsc-cal-day-hl',
                 K97 = g57.activeClass || '',
                 P97 = g57.showEventCount,
                 h97 = 0,
                 r57 = Y6(true, [], g57.data);
             M97 = D7.calbase.call(this, I57);
             G97 = Y6({}, M97);
             V.each(r57, function(Z07, K07) {
                 if (K07._id === undefined) {
                     K07._id = h97++;
                 }
             });
             I57.onGenMonth = function(G07, N07) {
                 d97 = I57.prepareObj(r57, G07, N07);
             };
             I57.getDayProps = function(R07) {
                 var u07, V07 = d97[R07] ? d97[R07] : false,
                     X07 = V07 ? d97[R07].length + ' ' + (d97[R07].length > 1 ? g57.eventsText : g57.eventText) : 0,
                     b07 = V07 && V07[0] && V07[0].color,
                     z07 = P97 && X07 ? D97(b07) : '',
                     D07 = '',
                     F07 = '';
                 if (V07) {
                     for (u07 = 0; u07 < V07.length; u07++) {
                         if (V07[u07].icon) {
                             D07 += '<span class="mbsc-ic mbsc-ic-' + V07[u07].icon + '"' + (V07[u07].text ? '' : V07[u07].color ? ' style="color:' + V07[u07].color + ';"' : '') + '></span>\n';
                         }
                     }
                     F07 = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                     for (u07 = 0; u07 < V07.length; u07++) {
                         F07 += '<div class="mbsc-cal-day-m-c"' + (V07[u07].color ? ' style="background:' + V07[u07].color + ';"' : '') + '></div>';
                     }
                     F07 += '</div></div>';
                 }
                 return {
                     marked: V07,
                     selected: false,
                     cssClass: V07 ? 'mbsc-cal-day-marked' : '',
                     ariaLabel: P97 ? X07 : '',
                     markup: P97 && X07 ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + V('<div>' + X07 + '</div>').text() + '"' + (b07 ? ' style="background:' + b07 + ';color:' + z07 + ';text-shadow:none;"' : '') + '>' + D07 + X07 + '</div></div>' : P97 && D07 ? '<div class="mbsc-cal-day-ic-c">' + D07 + '</div>' : V07 ? F07 : ''
                 };
             };
             I57.addEvent = function(L07) {
                 var q07 = [];
                 L07 = Y6(true, [], V.isArray(L07) ? L07 : [L07]);
                 V.each(L07, function(e07, E07) {
                     if (E07._id === undefined) {
                         E07._id = h97++;
                     }
                     r57.push(E07);
                     q07.push(E07._id);
                 });
                 U97();
                 return q07;
             };
             I57.removeEvent = function(v07) {
                 v07 = V.isArray(v07) ? v07 : [v07];
                 V.each(v07, function(l07, t07) {
                     V.each(r57, function(f07, c07) {
                         if (c07._id === t07) {
                             r57.splice(f07, 1);
                             return false;
                         }
                     });
                 });
                 U97();
             };
             I57.getEvents = function(W07) {
                 var a07;
                 if (W07) {
                     W07.setHours(0, 0, 0, 0);
                     a07 = I57.prepareObj(r57, W07.getFullYear(), W07.getMonth());
                     return a07[W07] ? u97(a07[W07]) : [];
                 }
                 return Y6(true, [], r57);
             };
             I57.setEvents = function(p07) {
                 var O07 = [];
                 r57 = Y6(true, [], p07);
                 V.each(r57, function(S07, x07) {
                     if (x07._id === undefined) {
                         x07._id = h97++;
                     }
                     O07.push(x07._id);
                 });
                 U97();
                 return O07;
             };
             Y6(M97, {
                 highlight: false,
                 outerMonthChange: false,
                 headerText: false,
                 buttons: g57.display !== 'inline' ? ['close'] : g57.buttons,
                 onMarkupReady: function i07(o07) {
                     G97.onMarkupReady.call(this, o07);
                     m57 = V(o07.target);
                     if (P97) {
                         V('.mbsc-cal', m57).addClass('mbsc-cal-ev');
                     }
                     m57.addClass('mbsc-cal-em');
                     y57 = V('<div class="mbsc-cal-events ' + (g57.eventBubbleClass || '') + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(V('.mbsc-cal-c', m57));
                     A97 = V('.mbsc-cal-events-i', y57);
                     j97 = V('.mbsc-cal-events-sc', y57);
                     k57 = new P.classes.ScrollView(A97[0]);
                     w97 = false;
                     I57.tap(A97, function() {
                         if (!k57.scrolled) {
                             C97();
                         }
                     });
                 },
                 onMonthChange: function s07() {
                     C97();
                 },
                 onSelectShow: function J07() {
                     C97();
                 },
                 onMonthLoaded: function T07() {
                     if (B97) {
                         X97(B97.d, V('.mbsc-cal-day-v[data-full="' + B97.full + '"]:not(.mbsc-cal-day-diff)', m57));
                         B97 = false;
                     }
                 },
                 onDayChange: function n07(y07) {
                     var r07 = y07.date,
                         g07 = R97(r07),
                         I07 = V(y07.target);
                     C97();
                     if (!I07.hasClass('mbsc-cal-day-ev')) {
                         setTimeout(function() {
                             if (I57.changing) {
                                 B97 = {
                                     d: g07,
                                     full: I07.attr('data-full')
                                 };
                             } else {
                                 X97(g07, I07);
                             }
                         }, 10);
                     }
                     return false;
                 },
                 onCalResize: function Q07() {
                     if (w97) {
                         V97(Q57);
                     }
                 },
                 onHide: function k07() {
                     G97.onHide.call(I57);
                     if (k57) {
                         k57.destroy();
                     }
                 }
             });
             return M97;
         };
         var A6 = P.$;
         var o6 = P.classes;
         var A3 = function m07(Y6H, h6H) {
             var d6H = '',
                 B6H = A6(Y6H),
                 C6H = this,
                 P6H = C6H.settings;
             o6.Base.call(this, Y6H, h6H, true);
             C6H._init = function() {
                 var w6H = P6H.context,
                     A6H = A6(w6H),
                     M6H = A6H.find('.mbsc-ms-top .mbsc-ms'),
                     U6H = A6H.find('.mbsc-ms-bottom .mbsc-ms'),
                     H6H = {};
                 if (w6H == 'body') {
                     A6('body,html').addClass('mbsc-page-ctx');
                 } else {
                     A6H.addClass('mbsc-page-ctx');
                 }
                 if (d6H) {
                     B6H.removeClass(d6H);
                 }
                 if (M6H.length) {
                     H6H.paddingTop = M6H[0].offsetHeight;
                 }
                 if (U6H.length) {
                     H6H.paddingBottom = U6H[0].offsetHeight;
                 }
                 d6H = 'mbsc-page mbsc-' + P6H.theme + (P6H.baseTheme ? ' mbsc-' + P6H.baseTheme : '') + (P6H.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
                 B6H.addClass(d6H).css(H6H);
             };
             C6H._destroy = function() {
                 B6H.removeClass(d6H);
             };
             P6H = C6H.settings;
             C6H.init(h6H);
         };
         A3.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _class: 'page',
             _defaults: {
                 context: 'body'
             }
         };
         o6.Page = A3;
         P.themes.page.mobiscroll = {};
         P.presetShort('page', 'Page');
         A6(function() {
             var j6H = '[mbsc-page]';
             A6(j6H).each(function() {
                 new o6.Page(this);
             });
             A6(document).on('mbsc-enhance', function(K6H, Z6H) {
                 if (A6(K6H.target).is(j6H)) {
                     new o6.Page(K6H.target, Z6H);
                 } else {
                     A6(j6H, K6H.target).each(function() {
                         new o6.Page(this, Z6H);
                     });
                 }
             });
         });
         var V6 = P.$;
         var q6 = function G6H(F6H, R6H, z6H) {
             function b6H(L6H) {
                 if (!V6('.mbsc-fr-c', L6H).hasClass('mbsc-wdg-c')) {
                     V6('.mbsc-fr-c', L6H).addClass('mbsc-wdg-c').append(u6H.show());
                     if (!V6('.mbsc-w-p', L6H).length) {
                         V6('.mbsc-fr-c', L6H).addClass('mbsc-w-p');
                     }
                 }
             }
             var N6H, X6H, D6H, u6H = V6(F6H),
                 V6H = this;
             U6.call(this, F6H, R6H, true);
             V6H._generateContent = function() {
                 return '';
             };
             V6H._markupReady = function(q6H) {
                 if (N6H.display != 'inline') {
                     b6H(q6H);
                 }
             };
             V6H._markupInserted = function(E6H) {
                 if (N6H.display == 'inline') {
                     b6H(E6H);
                 }
                 E6H.trigger('mbsc-enhance', [{
                     theme: N6H.theme,
                     lang: N6H.lang
                 }]);
             };
             V6H._markupRemove = function() {
                 u6H.hide();
                 if (X6H) {
                     X6H.prepend(u6H);
                 } else {
                     D6H.after(u6H);
                 }
             };
             V6H.__processSettings = function() {
                 N6H = V6H.settings;
                 V6H.buttons.ok = {
                     text: N6H.okText,
                     icon: N6H.okIcon,
                     handler: 'set'
                 };
                 N6H.buttons = N6H.buttons || (N6H.display == 'inline' ? [] : ['ok']);
                 if (!X6H && !D6H) {
                     D6H = u6H.prev();
                     if (!D6H.length) {
                         X6H = u6H.parent();
                     }
                 }
                 u6H.hide();
             };
             V6H.__init = function() {
                 N6H.cssClass = (N6H.cssClass || '') + ' mbsc-wdg';
             };
             if (!z6H) {
                 V6H.init(R6H);
             }
         };
         q6.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasContent: true,
             _class: 'widget',
             _defaults: V6.extend({}, U6.prototype._defaults, {
                 okText: 'OK',
                 headerText: false
             })
         };
         P.classes.Widget = q6;
         P.themes.widget = P.themes.frame;
         P.presetShort('widget', 'Widget', false);
         var T7 = !!window.Promise;
         var M6 = [];
         var a6 = [];
         var N3 = P.$;
         var Y4 = N3.extend;
         P.alert = function(L1H) {
             var z1H = document.createElement('div');
             z1H.innerHTML = q3(L1H);
             return h1(H8, z1H, L1H);
         };
         P.confirm = function(E1H) {
             var q1H = document.createElement('div');
             q1H.innerHTML = q3(E1H);
             return h1(P8, q1H, E1H);
         };
         P.prompt = function(e1H) {
             var v1H = document.createElement('div');
             v1H.innerHTML = q3(e1H) + '<label class="mbsc-input">' + (e1H.label ? '<span class="mbsc-label">' + e1H.label + '</span>' : '') + '<input type="' + (e1H.inputType || 'text') + '" placeholder="' + (e1H.placeholder || '') + '" value="' + (e1H.value || '') + '">' + '</label>';
             return h1(h8, v1H, e1H);
         };
         P.snackbar = function(t1H) {
             var l1H = document.createElement('div');
             l1H.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (t1H.message || '') + '</div>' + (t1H.button ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (t1H.button.text || '') + '</button>' : '') + '</div>';
             return h1(O4, l1H, t1H);
         };
         P.toast = function(c1H) {
             var f1H = document.createElement('div');
             f1H.innerHTML = '<div class="mbsc-toast-msg">' + (c1H.message || '') + '</div>';
             return h1(Y8, f1H, c1H);
         };
         var G7 = P.$;
         var V7 = G7.extend;
         var S1 = P.util;
         var A1 = S1.getCoord;
         var z7 = S1.testTouch;
         var F7 = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown', 'mousemove', 'mouseup', 'mouseleave'];
         var q7 = {
             tap: true
         };
         var J6 = void 0;
         var l6 = function() {
             function i1H(T1H, y1H) {
                 var g1H = this;
                 w6(this, i1H);
                 var n1H = V7({}, q7, y1H);
                 var o1H = G7(T1H);
                 var s1H = o1H.parent();
                 var J1H = o1H.next().hasClass('mbsc-fr') ? o1H.next() : null;
                 var I1H = e7(o1H);
                 if (J1H) {
                     J1H.insertAfter(s1H);
                 }
                 W4(s1H, I1H);
                 o1H.addClass('mbsc-control');
                 F7.forEach(function(r1H) {
                     T1H.addEventListener(r1H, g1H);
                 });
                 this.settings = n1H;
                 this._type = I1H;
                 this._elm = T1H;
                 this._$elm = o1H;
                 this._$parent = s1H;
                 this._$frame = J1H;
                 this._ripple = l7(n1H.theme);
             }
             m6(i1H, [{
                 key: 'destroy',
                 value: function Q1H() {
                     var k1H = this;
                     this._$elm.removeClass('mbsc-control');
                     F7.forEach(function(m1H) {
                         k1H._elm.removeEventListener(m1H, k1H);
                     });
                 }
             }, {
                 key: 'option',
                 value: function P3H(d3H) {
                     V7(this.settings, d3H);
                     this._ripple = l7(this.settings.theme);
                 }
             }, {
                 key: 'handleEvent',
                 value: function C3H(B3H) {
                     switch (B3H.type) {
                         case 'touchstart':
                         case 'mousedown':
                             this._onStart(B3H);
                             break;
                         case 'touchmove':
                         case 'mousemove':
                             this._onMove(B3H);
                             break;
                         case 'touchend':
                         case 'touchcancel':
                         case 'mouseup':
                         case 'mouseleave':
                             this._onEnd(B3H);
                     }
                 }
             }, {
                 key: '_addRipple',
                 value: function Y3H(h3H) {
                     if (this._ripple && this._$rippleElm) {
                         this._ripple.addRipple(this._$rippleElm, h3H);
                     }
                 }
             }, {
                 key: '_removeRipple',
                 value: function A3H() {
                     if (this._ripple && this._$rippleElm) {
                         this._ripple.removeRipple();
                     }
                 }
             }, {
                 key: '_onStart',
                 value: function H3H(w3H) {
                     var M3H = this._elm;
                     if (z7(w3H, M3H)) {
                         this._startX = A1(w3H, 'X');
                         this._startY = A1(w3H, 'Y');
                         if (J6) {
                             J6.removeClass('mbsc-active');
                         }
                         if (!M3H.disabled) {
                             this._isActive = true;
                             J6 = this._$elm;
                             J6.addClass('mbsc-active');
                             this._addRipple(w3H);
                         }
                     }
                 }
             }, {
                 key: '_onMove',
                 value: function U3H(j3H) {
                     if (this._isActive && Math.abs(A1(j3H, 'X') - this._startX) > 9 || Math.abs(A1(j3H, 'Y') - this._startY) > 9) {
                         this._$elm.removeClass('mbsc-active');
                         this._removeRipple();
                         this._isActive = false;
                     }
                 }
             }, {
                 key: '_onEnd',
                 value: function K3H(N3H) {
                     var u3H = this;
                     var Z3H = this._elm;
                     var X3H = this._type;
                     if (this._isActive && this.settings.tap && N3H.type == 'touchend' && !Z3H.readOnly) {
                         Z3H.focus();
                         if (/(button|submit|checkbox|switch|radio)/.test(X3H)) {
                             N3H.preventDefault();
                         }
                         if (!/select/.test(X3H)) {
                             var G3H = (N3H.originalEvent || N3H).changedTouches[0],
                                 V3H = document.createEvent('MouseEvents');
                             V3H.initMouseEvent('click', true, true, window, 1, G3H.screenX, G3H.screenY, G3H.clientX, G3H.clientY, false, false, false, false, 0, null);
                             V3H.tap = true;
                             Z3H.mbscChange = true;
                             Z3H.dispatchEvent(V3H);
                             S1.preventClick();
                         }
                     }
                     if (this._isActive) {
                         setTimeout(function() {
                             u3H._$elm.removeClass('mbsc-active');
                             u3H._removeRipple();
                         }, 100);
                     }
                     this._isActive = false;
                     J6 = null;
                 }
             }]);
             return i1H;
         }();
         var s1 = function(F3H) {
             function D3H(b3H) {
                 w6(this, D3H);
                 var R3H = Z6(this, (D3H.__proto__ || Object.getPrototypeOf(D3H)).call(this, b3H));
                 M8(R3H, R3H._$elm);
                 R3H._$parent.addClass('mbsc-input');
                 return R3H;
             }
             F6(D3H, F3H);
             m6(D3H, [{
                 key: 'destroy',
                 value: function z3H() {
                     S6(D3H.prototype.__proto__ || Object.getPrototypeOf(D3H.prototype), 'destroy', this).call(this);
                     this._$parent.find('.mbsc-input-wrap').before(this._$elm).remove();
                 }
             }]);
             return D3H;
         }(l6);
         var a7 = function(q3H) {
             function L3H(t3H, l3H) {
                 w6(this, L3H);
                 var e3H = Z6(this, (L3H.__proto__ || Object.getPrototypeOf(L3H)).call(this, t3H, l3H));
                 var E3H = e3H._$elm;
                 var v3H = E3H.attr('data-icon');
                 E3H.addClass('mbsc-btn').find('.mbsc-btn-ic').remove();
                 if (v3H) {
                     E3H.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + v3H + '"></span>');
                     if (E3H.text() === "") {
                         E3H.addClass('mbsc-btn-icon-only');
                     }
                 }
                 e3H._$rippleElm = E3H;
                 return e3H;
             }
             F6(L3H, q3H);
             return L3H;
         }(l6);
         var O7 = function(c3H) {
             function f3H(a3H) {
                 w6(this, f3H);
                 var W3H = Z6(this, (f3H.__proto__ || Object.getPrototypeOf(f3H)).call(this, a3H));
                 W3H._$parent.prepend(W3H._$elm).addClass('mbsc-checkbox mbsc-control-w').find('.mbsc-checkbox-box').remove();
                 W3H._$elm.after('<span class="mbsc-checkbox-box"></span>');
                 return W3H;
             }
             F6(f3H, c3H);
             return f3H;
         }(l6);
         var x7 = function(p3H) {
             function O3H(S3H) {
                 w6(this, O3H);
                 var x3H = Z6(this, (O3H.__proto__ || Object.getPrototypeOf(O3H)).call(this, S3H));
                 x3H._$parent.addClass('mbsc-radio mbsc-control-w').find('.mbsc-radio-box').remove();
                 x3H._$elm.after('<span class="mbsc-radio-box"><span></span></span>');
                 return x3H;
             }
             F6(O3H, p3H);
             return O3H;
         }(l6);
         var S7 = P.$;
         var i7 = function(o3H) {
             function i3H(I3H) {
                 w6(this, i3H);
                 var s3H = Z6(this, (i3H.__proto__ || Object.getPrototypeOf(i3H)).call(this, I3H));
                 var g3H = s3H._$elm;
                 var T3H = s3H._$parent;
                 var n3H = T3H.find('input.mbsc-control');
                 var J3H = n3H.length ? n3H : S7('<input tabindex="-1" class="mbsc-control" readonly>');
                 s3H._$input = J3H;
                 T3H.addClass('mbsc-select' + (s3H._$frame ? ' mbsc-select-inline' : ''));
                 g3H.after(J3H);
                 J3H.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                 if (!J3H.hasClass('mbsc-comp')) {
                     I3H.addEventListener('change', s3H);
                     s3H._setText();
                 }
                 return s3H;
             }
             F6(i3H, o3H);
             m6(i3H, [{
                 key: 'destroy',
                 value: function y3H() {
                     S6(i3H.prototype.__proto__ || Object.getPrototypeOf(i3H.prototype), 'destroy', this).call(this);
                     this._$elm.after(this._$input);
                     this._elm.removeEventListener('change', this);
                 }
             }, {
                 key: 'handleEvent',
                 value: function r3H(Q3H) {
                     S6(i3H.prototype.__proto__ || Object.getPrototypeOf(i3H.prototype), 'handleEvent', this).call(this, Q3H);
                     if (Q3H.type == 'change') {
                         this._setText();
                     }
                 }
             }, {
                 key: '_setText',
                 value: function k3H() {
                     var m3H = this._elm;
                     this._$input.val(m3H.selectedIndex != -1 ? m3H.options[m3H.selectedIndex].text : '');
                 }
             }]);
             return i3H;
         }(s1);
         var t6 = P.$;
         var H3 = ['keydown', 'input', 'scroll'];
         var w3 = void 0;
         t6(window).on('resize orientationchange', I7);
         var Q7 = function(U7H) {
             function M7H(K7H) {
                 w6(this, M7H);
                 var j7H = Z6(this, (M7H.__proto__ || Object.getPrototypeOf(M7H)).call(this, K7H));
                 j7H._$parent.addClass('mbsc-textarea');
                 H3.forEach(function(Z7H) {
                     j7H._elm.addEventListener(Z7H, j7H);
                 });
                 M3(K7H);
                 return j7H;
             }
             F6(M7H, U7H);
             m6(M7H, [{
                 key: 'destroy',
                 value: function G7H() {
                     var N7H = this;
                     S6(M7H.prototype.__proto__ || Object.getPrototypeOf(M7H.prototype), 'destroy', this).call(this);
                     H3.forEach(function(V7H) {
                         N7H._elm.removeEventListener(V7H, N7H);
                     });
                 }
             }, {
                 key: 'handleEvent',
                 value: function u7H(X7H) {
                     S6(M7H.prototype.__proto__ || Object.getPrototypeOf(M7H.prototype), 'handleEvent', this).call(this, X7H);
                     switch (X7H.type) {
                         case 'keydown':
                         case 'input':
                             this._onInput(X7H);
                             break;
                         case 'scroll':
                             B8(this._elm);
                     }
                 }
             }, {
                 key: '_onInput',
                 value: function D7H() {
                     var F7H = this;
                     clearTimeout(this._debounce);
                     this._debounce = setTimeout(function() {
                         M3(F7H._elm);
                     }, 100);
                 }
             }]);
             return M7H;
         }(s1);
         var E1 = P.$;
         var m7 = function(b7H) {
             function R7H(v7H, t7H) {
                 w6(this, R7H);
                 var L7H = Z6(this, (R7H.__proto__ || Object.getPrototypeOf(R7H)).call(this, v7H, t7H));
                 var q7H = void 0;
                 var z7H = void 0;
                 var e7H = L7H._$elm;
                 var E7H = L7H._$parent;
                 if (!E7H.hasClass('mbsc-segmented-item')) {
                     q7H = E1('<div class="mbsc-segmented"></div>');
                     E7H.after(q7H);
                     E7H.parent().find('input[name="' + e7H.attr('name') + '"]').each(function() {
                         var l7H = E1(this);
                         z7H = l7H.parent().addClass('mbsc-segmented-item');
                         E1('<span class="mbsc-segmented-content">' + (l7H.attr('data-icon') ? ' <span class="mbsc-ic mbsc-ic-' + l7H.attr('data-icon') + '"></span> ' : '') + '</span>').append(z7H.contents()).appendTo(z7H);
                         z7H.prepend(l7H);
                         q7H.append(z7H);
                     });
                 }
                 L7H._$rippleElm = e7H.next();
                 return L7H;
             }
             F6(R7H, b7H);
             return R7H;
         }(l6);
         var B6 = P.$;
         var K3 = P.util;
         var r6 = K3.getCoord;
         var Z4 = K3.testTouch;
         var n1 = function f7H(s7H, C4H) {
             function M4H(X4H) {
                 if (X4H.keyCode == 32) {
                     X4H.preventDefault();
                     if (!x7H && !s7H.disabled) {
                         o7H = B6(this).addClass('mbsc-active');
                         V4H(X4H);
                     }
                 }
             }

             function U4H(D4H) {
                 if (x7H) {
                     D4H.preventDefault();
                     Y4H(true);
                 }
             }

             function j4H(F4H) {
                 if (Z4(F4H, this) && !s7H.disabled) {
                     o7H = B6(this).addClass('mbsc-active').trigger('focus');
                     if (I7H && !o7H.hasClass('mbsc-step-disabled')) {
                         I7H.addRipple(o7H.find('.mbsc-segmented-content'), F4H);
                     }
                     V4H(F4H);
                     if (F4H.type === 'mousedown') {
                         B6(document).on('mousemove', r7H).on('mouseup', y7H);
                     }
                 }
             }

             function y7H(R4H) {
                 if (x7H) {
                     R4H.preventDefault();
                     Y4H(true, R4H);
                     if (R4H.type === 'mouseup') {
                         B6(document).off('mousemove', r7H).off('mouseup', y7H);
                     }
                 }
             }

             function r7H(b4H) {
                 if (x7H) {
                     H4H = r6(b4H, 'X');
                     K4H = r6(b4H, 'Y');
                     u4H = H4H - Z4H;
                     N4H = K4H - w4H;
                     if (Math.abs(u4H) > 7 || Math.abs(N4H) > 7) {
                         Y4H();
                     }
                 }
             }

             function G4H() {
                 var z4H;
                 if (!s7H.disabled) {
                     z4H = parseFloat(B6(this).val());
                     T7H(isNaN(z4H) ? c7H : z4H);
                 }
             }

             function T7H(E4H, L4H, q4H) {
                 P4H = c7H;
                 if (L4H === undefined) {
                     L4H = true;
                 }
                 if (q4H === undefined) {
                     q4H = L4H;
                 }
                 if (E4H !== undefined) {
                     c7H = Math.min(p7H, Math.max(Math.round(E4H / a7H) * a7H, O7H));
                 } else {
                     c7H = Math.min(p7H, Math.max(c7H + (o7H.hasClass('mbsc-stepper-minus') ? -a7H : a7H), O7H));
                 }
                 Q7H = true;
                 d4H.removeClass('mbsc-step-disabled');
                 if (L4H) {
                     W7H.val(c7H);
                 }
                 if (c7H == O7H) {
                     m7H.addClass('mbsc-step-disabled');
                 } else if (c7H == p7H) {
                     h4H.addClass('mbsc-step-disabled');
                 }
                 if (c7H !== P4H && q4H) {
                     W7H.trigger('change');
                 }
             }

             function V4H(e4H) {
                 if (!x7H) {
                     x7H = true;
                     Q7H = false;
                     Z4H = r6(e4H, 'X');
                     w4H = r6(e4H, 'Y');
                     clearInterval(J7H);
                     clearTimeout(J7H);
                     J7H = setTimeout(function() {
                         T7H();
                         J7H = setInterval(function() {
                             T7H();
                         }, 150);
                     }, 300);
                 }
             }

             function Y4H(v4H) {
                 clearInterval(J7H);
                 clearTimeout(J7H);
                 if (!Q7H && v4H) {
                     T7H();
                 }
                 x7H = false;
                 Q7H = false;
                 o7H.removeClass('mbsc-active');
                 if (I7H) {
                     setTimeout(function() {
                         I7H.removeRipple();
                     }, 100);
                 }
             }

             function B4H(l4H, f4H) {
                 var t4H = W7H.attr(l4H);
                 return t4H === undefined || t4H === '' ? f4H : +t4H;
             }
             var o7H, h4H, m7H, d4H, x7H, Q7H, u4H, N4H, A4H, H4H, K4H, J7H, p7H, O7H, I7H, a7H, n7H, Z4H, w4H, g7H, c7H, S7H = this,
                 W7H = B6(s7H),
                 k7H, i7H, P4H = c7H;
             P.classes.Base.call(this, s7H, C4H, true);
             S7H.getVal = function() {
                 var c4H = parseFloat(W7H.val());
                 c4H = isNaN(c4H) ? c7H : c4H;
                 return Math.min(p7H, Math.max(Math.round(c4H / a7H) * a7H, O7H));
             };
             S7H.setVal = function(W4H, a4H, O4H) {
                 W4H = parseFloat(W4H);
                 T7H(isNaN(W4H) ? c7H : W4H, a4H, O4H);
             };
             S7H._init = function(p4H) {
                 k7H = W7H.parent().hasClass('mbsc-stepper');
                 i7H = k7H ? W7H.closest('.mbsc-stepper-cont') : W7H.parent();
                 n7H = S7H.settings;
                 O7H = p4H.min === undefined ? B4H('min', n7H.min) : p4H.min;
                 p7H = p4H.max === undefined ? B4H('max', n7H.max) : p4H.max;
                 a7H = p4H.step === undefined ? B4H('step', n7H.step) : p4H.step;
                 A4H = W7H.attr('data-val') || n7H.val;
                 c7H = Math.min(p7H, Math.max(Math.round(+s7H.value / a7H) * a7H || 0, O7H));
                 g7H = P.themes.form[C4H.theme];
                 I7H = g7H && g7H.addRipple ? g7H : null;
                 if (!k7H) {
                     i7H.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (c7H == O7H ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (c7H == p7H ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(W7H);
                 }
                 m7H = B6('.mbsc-stepper-minus', i7H);
                 h4H = B6('.mbsc-stepper-plus', i7H);
                 if (!k7H) {
                     if (A4H == 'left') {
                         i7H.addClass('mbsc-stepper-val-left');
                         W7H.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                     } else if (A4H == 'right') {
                         i7H.addClass('mbsc-stepper-val-right');
                         h4H.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                     } else {
                         m7H.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
                     }
                 }
                 W7H.val(c7H).attr('data-role', 'stepper').attr('min', O7H).attr('max', p7H).attr('step', a7H).on('change', G4H);
                 d4H = B6('.mbsc-stepper-control', i7H).on('keydown', M4H).on('keyup', U4H).on('mousedown touchstart', j4H).on('touchmove', r7H).on('touchend touchcancel', y7H);
                 W7H.addClass('mbsc-stepper-ready mbsc-control');
             };
             S7H._destroy = function() {
                 W7H.removeClass('mbsc-control').off('change', G4H);
                 d4H.off('keydown', M4H).off('keyup', U4H).off('mousedown touchstart', j4H).off('touchmove', r7H).off('touchend touchcancel', y7H);
             };
             S7H.init(C4H);
         };
         n1.prototype = {
             _class: 'stepper',
             _defaults: {
                 min: 0,
                 max: 100,
                 step: 1
             }
         };
         P.classes.Stepper = n1;
         P.presetShort('stepper', 'Stepper');
         var G3 = P.$;
         var I1 = function x4H(o4H, s4H) {
             var i4H, J4H, T4H, n4H, S4H = this;
             s4H = s4H || {};
             G3.extend(s4H, {
                 changeEvent: 'click',
                 round: false
             });
             e1.call(this, o4H, s4H, true);
             S4H._readValue = function() {
                 return o4H.checked ? 1 : 0;
             };
             S4H._fillValue = function(I4H, y4H, g4H) {
                 i4H.prop('checked', !!I4H);
                 if (g4H) {
                     i4H.trigger('change');
                 }
             };
             S4H._onTap = function(r4H) {
                 S4H._setVal(r4H ? 0 : 1);
             };
             S4H.___init = function() {
                 T4H = S4H.settings;
                 i4H = G3(o4H);
                 J4H = i4H.parent();
                 J4H.find('.mbsc-switch-track').remove();
                 J4H.prepend(i4H);
                 i4H.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + T4H.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + T4H.onText + '</span>' + '</span></span></span></span>');
                 n4H = new l6(o4H);
                 S4H._$track = J4H.find('.mbsc-progress-track');
                 S4H._min = 0;
                 S4H._max = 1;
                 S4H._step = 1;
             };
             S4H.___destroy = function() {
                 n4H.destroy();
             };
             S4H.getVal = function() {
                 return o4H.checked;
             };
             S4H.setVal = function(Q4H, k4H, m4H) {
                 S4H._setVal(Q4H ? 1 : 0, k4H, m4H);
             };
             S4H.init(s4H);
         };
         I1.prototype = {
             _class: 'switch',
             _css: 'mbsc-switch',
             _hasTheme: true,
             _hasLang: true,
             _defaults: {
                 stopProp: true,
                 offText: 'Off',
                 onText: 'On'
             }
         };
         P.classes.Switch = I1;
         P.presetShort('switch', 'Switch');
         var R4 = 0;
         var O = P.$;
         var e4 = P.classes;
         var u3 = P.instances;
         var i6 = function P8H(A8H, H8H) {
             function w8H() {
                 Y8H.removeClass('mbsc-no-touch');
             }
             var d8H, M8H, h8H = '',
                 Y8H = O(A8H),
                 C8H = {},
                 B8H = this;
             e4.Base.call(this, A8H, H8H, true);
             B8H.refresh = function(U8H) {
                 O('input,select,textarea,progress,button', Y8H).each(function() {
                     var j8H = this,
                         K8H = O(j8H),
                         Z8H = e7(K8H);
                     if (K8H.attr('data-enhance') != 'false') {
                         if (K8H.hasClass('mbsc-control')) {
                             if (C8H[j8H.id]) {
                                 C8H[j8H.id].option({
                                     theme: d8H.theme,
                                     lang: d8H.lang,
                                     rtl: d8H.rtl,
                                     onText: d8H.onText,
                                     offText: d8H.offText,
                                     stopProp: d8H.stopProp
                                 });
                             }
                         } else {
                             if (!j8H.id) {
                                 j8H.id = 'mbsc-form-control-' + ++R4;
                             }
                             switch (Z8H) {
                                 case 'button':
                                 case 'submit':
                                     C8H[j8H.id] = new a7(j8H, {
                                         theme: d8H.theme,
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'switch':
                                     C8H[j8H.id] = new I1(j8H, {
                                         theme: d8H.theme,
                                         lang: d8H.lang,
                                         rtl: d8H.rtl,
                                         onText: d8H.onText,
                                         offText: d8H.offText,
                                         stopProp: d8H.stopProp
                                     });
                                     break;
                                 case 'checkbox':
                                     C8H[j8H.id] = new O7(j8H, {
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'range':
                                     if (!O(j8H).parent().hasClass('mbsc-slider')) {
                                         C8H[j8H.id] = new r1(j8H, {
                                             theme: d8H.theme,
                                             lang: d8H.lang,
                                             rtl: d8H.rtl,
                                             stopProp: d8H.stopProp
                                         });
                                     }
                                     break;
                                 case 'progress':
                                     C8H[j8H.id] = new F1(j8H, {
                                         theme: d8H.theme,
                                         lang: d8H.lang,
                                         rtl: d8H.rtl
                                     });
                                     break;
                                 case 'radio':
                                     C8H[j8H.id] = new x7(j8H, {
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'select':
                                 case 'select-one':
                                 case 'select-multiple':
                                     C8H[j8H.id] = new i7(j8H, {
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'textarea':
                                     C8H[j8H.id] = new Q7(j8H, {
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'segmented':
                                     C8H[j8H.id] = new m7(j8H, {
                                         theme: d8H.theme,
                                         tap: d8H.tap
                                     });
                                     break;
                                 case 'stepper':
                                     C8H[j8H.id] = new n1(j8H, {
                                         theme: d8H.theme
                                     });
                                     break;
                                 case 'hidden':
                                     return;
                                 default:
                                     C8H[j8H.id] = new s1(j8H, {
                                         tap: d8H.tap
                                     });
                                     break;
                             }
                         }
                     }
                 });
                 if (!U8H) {
                     I7();
                 }
             };
             B8H._init = function() {
                 if (!P.themes.form[d8H.theme]) {
                     d8H.theme = 'mobiscroll';
                 }
                 if (!Y8H.hasClass('mbsc-form')) {
                     Y8H.on('touchstart', w8H).show();
                 }
                 if (h8H) {
                     Y8H.removeClass(h8H);
                 }
                 h8H = 'mbsc-form mbsc-no-touch mbsc-' + d8H.theme + (d8H.baseTheme ? ' mbsc-' + d8H.baseTheme : '') + (d8H.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
                 Y8H.addClass(h8H);
                 B8H.refresh();
             };
             B8H._destroy = function() {
                 Y8H.removeClass(h8H).off('touchstart', w8H);
                 for (var G8H in C8H) {
                     C8H[G8H].destroy();
                 }
             };
             d8H = B8H.settings;
             M8H = B8H.trigger;
             B8H.init(H8H);
         };
         i6.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _class: 'form',
             _defaults: {
                 tap: true,
                 stopProp: true,
                 lang: 'en'
             }
         };
         P.themes.form.mobiscroll = {};
         P.classes.Form = i6;
         P.presetShort('form', 'Form');
         O(function() {
             var N8H = '[mbsc-enhance],[mbsc-form]';
             O(N8H).each(function() {
                 new i6(this);
             });
             O(document).on('mbsc-enhance', function(V8H, u8H) {
                 if (O(V8H.target).is(N8H)) {
                     new i6(V8H.target, u8H);
                 } else {
                     O(N8H, V8H.target).each(function() {
                         new i6(this, u8H);
                     });
                 }
             });
             O(document).on('mbsc-refresh', function(D8H) {
                 var X8H;
                 if (O(D8H.target).is(N8H)) {
                     X8H = u3[D8H.target.id];
                     if (X8H) {
                         X8H.refresh();
                     }
                 } else {
                     O(N8H, D8H.target).each(function() {
                         X8H = u3[this.id];
                         if (X8H) {
                             X8H.refresh();
                         }
                     });
                 }
             });
         });
         var N6 = P.$;
         var a4 = {
             invalid: [],
             showInput: true,
             inputClass: ''
         };
         P.presets.scroller.list = function(R8H) {
             function Q8H(P2H, d2H, C2H) {
                 var k8H = 0,
                     m8H = [];
                 while (k8H < P2H) {
                     m8H[k8H] = r8H(C2H, k8H, d2H);
                     k8H++;
                 }
                 return m8H;
             }

             function r8H(w2H, M2H, U2H) {
                 var B2H = 0,
                     h2H, Y2H = U2H,
                     A2H = [];
                 while (B2H < M2H) {
                     var H2H = w2H[B2H];
                     for (h2H in Y2H) {
                         if (Y2H[h2H].key == H2H) {
                             Y2H = Y2H[h2H].children;
                             break;
                         }
                     }
                     B2H++;
                 }
                 B2H = 0;
                 while (B2H < Y2H.length) {
                     if (Y2H[B2H].invalid) {
                         A2H.push(Y2H[B2H].key);
                     }
                     B2H++;
                 }
                 return A2H;
             }

             function g8H(K2H, Z2H) {
                 var j2H = [];
                 while (K2H) {
                     j2H[--K2H] = true;
                 }
                 j2H[Z2H] = false;
                 return j2H;
             }

             function I8H(V2H) {
                 var N2H = [],
                     G2H;
                 for (G2H = 0; G2H < V2H; G2H++) {
                     N2H[G2H] = F8H.labels && F8H.labels[G2H] ? F8H.labels[G2H] : G2H;
                 }
                 return N2H;
             }

             function x8H(L2H, q2H, b2H) {
                 var u2H = 0,
                     X2H, z2H, R2H, F2H = [
                         []
                     ],
                     D2H = q8H;
                 if (q2H) {
                     for (X2H = 0; X2H < q2H; X2H++) {
                         if (t8H) {
                             F2H[0][X2H] = {};
                         } else {
                             F2H[X2H] = [{}];
                         }
                     }
                 }
                 while (u2H < L2H.length) {
                     if (t8H) {
                         F2H[0][u2H] = J8H(D2H, a8H[u2H]);
                     } else {
                         F2H[u2H] = [J8H(D2H, a8H[u2H])];
                     }
                     X2H = 0;
                     R2H = undefined;
                     while (X2H < D2H.length && R2H === undefined) {
                         if (D2H[X2H].key == L2H[u2H] && (b2H !== undefined && u2H <= b2H || b2H === undefined)) {
                             R2H = X2H;
                         }
                         X2H++;
                     }
                     if (R2H !== undefined && D2H[R2H].children) {
                         u2H++;
                         D2H = D2H[R2H].children;
                     } else if ((z2H = e8H(D2H)) && z2H.children) {
                         u2H++;
                         D2H = z2H.children;
                     } else {
                         return F2H;
                     }
                 }
                 return F2H;
             }

             function e8H(e2H, t2H) {
                 if (!e2H) {
                     return false;
                 }
                 var E2H = 0,
                     v2H;
                 while (E2H < e2H.length) {
                     if (!(v2H = e2H[E2H++]).invalid) {
                         return t2H ? E2H - 1 : v2H;
                     }
                 }
                 return false;
             }

             function J8H(f2H, W2H) {
                 var c2H = {
                         data: [],
                         label: W2H
                     },
                     l2H = 0;
                 while (l2H < f2H.length) {
                     c2H.data.push({
                         value: f2H[l2H].key,
                         display: f2H[l2H].value
                     });
                     l2H++;
                 }
                 return c2H;
             }

             function s8H(a2H) {
                 if (R8H._isVisible) {
                     N6('.mbsc-sc-whl-w', R8H._markup).css('display', '').slice(a2H).hide();
                 }
             }

             function y8H(o2H) {
                 var p2H = [],
                     x2H = o2H,
                     S2H, O2H = true,
                     i2H = 0;
                 while (O2H) {
                     S2H = e8H(x2H);
                     p2H[i2H++] = S2H.key;
                     O2H = S2H.children;
                     if (O2H) {
                         x2H = O2H;
                     }
                 }
                 return p2H;
             }

             function p8H(I2H, Q2H) {
                 var r2H = [],
                     J2H = q8H,
                     T2H = 0,
                     y2H = false,
                     n2H, g2H, s2H;
                 if (I2H[T2H] !== undefined && T2H <= Q2H) {
                     n2H = 0;
                     g2H = I2H[T2H];
                     s2H = undefined;
                     while (n2H < J2H.length && s2H === undefined) {
                         if (J2H[n2H].key == I2H[T2H] && !J2H[n2H].invalid) {
                             s2H = n2H;
                         }
                         n2H++;
                     }
                 } else {
                     s2H = e8H(J2H, true);
                     g2H = J2H[s2H].key;
                 }
                 y2H = s2H !== undefined ? J2H[s2H].children : false;
                 r2H[T2H] = g2H;
                 while (y2H) {
                     J2H = J2H[s2H].children;
                     T2H++;
                     y2H = false;
                     s2H = undefined;
                     if (I2H[T2H] !== undefined && T2H <= Q2H) {
                         n2H = 0;
                         g2H = I2H[T2H];
                         s2H = undefined;
                         while (n2H < J2H.length && s2H === undefined) {
                             if (J2H[n2H].key == I2H[T2H] && !J2H[n2H].invalid) {
                                 s2H = n2H;
                             }
                             n2H++;
                         }
                     } else {
                         s2H = e8H(J2H, true);
                         s2H = s2H === false ? undefined : s2H;
                         g2H = J2H[s2H].key;
                     }
                     y2H = s2H !== undefined && e8H(J2H[s2H].children) ? J2H[s2H].children : false;
                     r2H[T2H] = g2H;
                 }
                 return {
                     lvl: T2H + 1,
                     nVector: r2H
                 };
             }

             function i8H(m2H) {
                 var k2H = [];
                 b8H = b8H > f8H++ ? b8H : f8H;
                 m2H.children('li').each(function(A5H) {
                     var P5H = N6(this),
                         d5H = P5H.clone();
                     d5H.children('ul,ol').remove();
                     var Y5H = R8H._processMarkup ? R8H._processMarkup(d5H) : d5H.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
                         h5H = P5H.attr('data-invalid') ? true : false,
                         C5H = {
                             key: P5H.attr('data-val') === undefined || P5H.attr('data-val') === null ? A5H : P5H.attr('data-val'),
                             value: Y5H,
                             invalid: h5H,
                             children: null
                         },
                         B5H = P5H.children('ul,ol');
                     if (B5H.length) {
                         C5H.children = i8H(B5H);
                     }
                     k2H.push(C5H);
                 });
                 f8H--;
                 return k2H;
             }

             function n8H(M5H, G5H, j5H) {
                 var H5H, w5H = (G5H || 0) + 1,
                     K5H = [],
                     U5H = {},
                     Z5H = {};
                 U5H = x8H(M5H, null, G5H);
                 for (H5H = 0; H5H < M5H.length; H5H++) {
                     R8H._tempWheelArray[H5H] = M5H[H5H] = j5H.nVector[H5H] || 0;
                 }
                 while (w5H < j5H.lvl) {
                     Z5H[w5H] = t8H ? U5H[0][w5H] : U5H[w5H][0];
                     K5H.push(w5H++);
                 }
                 s8H(j5H.lvl);
                 l8H = M5H.slice(0);
                 if (K5H.length) {
                     v8H = true;
                     R8H.changeWheel(Z5H);
                 }
             }
             var T8H = N6.extend({}, R8H.settings),
                 F8H = N6.extend(R8H.settings, a4, T8H),
                 W8H = F8H.layout || (/top|bottom/.test(F8H.display) ? 'liquid' : ''),
                 t8H = W8H == 'liquid',
                 o8H = F8H.readonly,
                 E8H = N6(this),
                 L8H, v8H, c8H = this.id + '_dummy',
                 b8H = 0,
                 f8H = 0,
                 z8H, l8H = [],
                 q8H = F8H.wheelArray || i8H(E8H),
                 a8H = I8H(b8H),
                 O8H = y8H(q8H),
                 S8H = x8H(O8H, b8H);
             N6('#' + c8H).remove();
             if (F8H.showInput) {
                 L8H = N6('<input type="text" id="' + c8H + '" value="" class="' + F8H.inputClass + '" placeholder="' + (F8H.placeholder || '') + '" readonly />').insertBefore(E8H);
                 F8H.anchor = L8H;
                 R8H.attachShow(L8H);
             }
             if (!F8H.wheelArray) {
                 E8H.hide();
             }
             return {
                 wheels: S8H,
                 layout: W8H,
                 headerText: false,
                 setOnTap: b8H == 1,
                 formatValue: function N5H(V5H) {
                     if (z8H === undefined) {
                         z8H = p8H(V5H, V5H.length).lvl;
                     }
                     return V5H.slice(0, z8H).join(' ');
                 },
                 parseValue: function u5H(X5H) {
                     return X5H ? (X5H + '').split(' ') : (F8H.defaultValue || O8H).slice(0);
                 },
                 onBeforeShow: function D5H() {
                     var F5H = R8H.getArrayVal(true);
                     l8H = F5H.slice(0);
                     F8H.wheels = x8H(F5H, b8H, b8H);
                     v8H = true;
                 },
                 onWheelGestureStart: function R5H(b5H) {
                     F8H.readonly = g8H(b8H, b5H.index);
                 },
                 onWheelAnimationEnd: function z5H(e5H) {
                     var L5H = e5H.index,
                         q5H = R8H.getArrayVal(true),
                         E5H = p8H(q5H, L5H);
                     z8H = E5H.lvl;
                     F8H.readonly = o8H;
                     if (q5H[L5H] != l8H[L5H]) {
                         n8H(q5H, L5H, E5H);
                     }
                 },
                 onFill: function v5H(t5H) {
                     z8H = undefined;
                     if (L8H) {
                         L8H.val(t5H.valueText);
                     }
                 },
                 validate: function l5H(a5H) {
                     var f5H = a5H.values,
                         W5H = a5H.index,
                         c5H = p8H(f5H, f5H.length);
                     z8H = c5H.lvl;
                     if (W5H === undefined) {
                         s8H(c5H.lvl);
                         if (!v8H) {
                             n8H(f5H, W5H, c5H);
                         }
                     }
                     v8H = false;
                     return {
                         disabled: Q8H(z8H, q8H, f5H)
                     };
                 },
                 onDestroy: function O5H() {
                     if (L8H) {
                         L8H.remove();
                     }
                     E8H.show();
                 }
             };
         };
         var F3 = P.$;
         var R3 = P.presets.scroller;
         P.presetShort('image');
         R3.image = function(p5H) {
             if (p5H.settings.enhance) {
                 p5H._processMarkup = function(x5H) {
                     var S5H = x5H.attr('data-icon');
                     x5H.children().each(function(o5H, i5H) {
                         i5H = F3(i5H);
                         if (i5H.is('img')) {
                             F3('<div class="mbsc-img-c"></div>').insertAfter(i5H).append(i5H.addClass('mbsc-img'));
                         } else if (i5H.is('p')) {
                             i5H.addClass('mbsc-img-txt');
                         }
                     });
                     if (S5H) {
                         x5H.prepend('<div class="mbsc-ic mbsc-ic-' + S5H + '"></div');
                     }
                     x5H.html('<div class="mbsc-img-w">' + x5H.html() + '</div>');
                     return x5H.html();
                 };
             }
             return R3.list.call(this, p5H);
         };
        
		
		 (function(t49, P49, F49) {
            var a49, i49 = P,
                q49 = i49.$,
                A49 = q49.extend,
                d49 = i49.classes,
                c49 = i49.util,
                E49 = c49.prefix,
                w49 = c49.jsPrefix,
                K49 = c49.getCoord,
                Q49 = c49.testTouch,
                U49 = c49.vibrate,
                Z49 = c49.animEnd,
                C49 = 1,
                x49 = function() {},
                m49 = t49.requestAnimationFrame || function(Y49) {
                    Y49();
                },
                p49 = t49.cancelAnimationFrame || x49,
                M49 = 'transparent';
            d49.ListView = function(R99, s89) {
                function i89(I09, e09, r09) {
                    var s09, O09;
                    if (I09 && I09.length) {
                        s09 = 100 / (I09.length + 2);
                        q49.each(I09, function(n09, G09) {
                            if (G09.key === F49) {
                                G09.key = M89++;
                            }
                            if (G09.percent === F49) {
                                G09.percent = e09 * s09 * (n09 + 1);
                                if (r09) {
                                    O09 = A49({}, G09);
                                    O09.key = M89++;
                                    O09.percent = -s09 * (n09 + 1);
                                    I09.push(O09);
                                    V79[O09.key] = O09;
                                }
                            }
                            V79[G09.key] = G09;
                        });
                    }
                }

                function E89(J09, k09) {
                    var B09, V09 = J09.attr('data-ref');
                    B09 = K89[V09] = K89[V09] || [];
                    if (k09) {
                        B09.push(k09);
                    }
                    if (J09.attr('data-action')) {
                        return;
                    }
                    k09 = B09.shift();
                    J09.attr('data-action', 1);
                    k09(function() {
                        J09.removeAttr('data-action');
                        if (B09.length) {
                            E89(J09);
                        } else {
                            delete K89[V09];
                        }
                    });
                }

                function E99(X09, v09, L09) {
                    function u09() {
                        clearTimeout(o09);
                        l79--;
                        X09.off(Z49, u09).removeClass(v09);
                        L09.call(G49, X09);
                    }
                    var o09;
                    L09 = L09 || x49;
                    if (v49.animation && v09 !== 'mbsc-lv-item-none') {
                        l79++;
                        X09.on(Z49, u09).addClass(v09);
                        o09 = setTimeout(u09, 500);
                    } else {
                        L09.call(G49, X09);
                    }
                }

                function U89(p09, Y09) {
                    if (!l79) {
                        if (p09.hasClass('mbsc-lv-parent')) {
                            C79++;
                            m89('r', W49[p09.attr('data-ref')].child, null, Y09);
                        } else if (p09.hasClass('mbsc-lv-back')) {
                            C79--;
                            m89('l', W49[p09.attr('data-back')].parent, W49[p09.attr('data-back')].item, Y09);
                        }
                    }
                }

                function m89(M09, A09, t09, U09, Q09) {
                    var m09 = A09.parent(),
                        Z09 = A09.prev();
                    U09 = U09 || x49;
                    if (Z09[0] === S49[0]) {
                        Z09 = S49.prev();
                    }
                    if (j49[0] !== A09[0]) {
                        I49('onNavStart', {
                            level: C79,
                            direction: M09,
                            list: A09[0]
                        });
                        d89.prepend(A09.addClass('mbsc-lv-v mbsc-lv-sl-new'));
                        k79(o49);
                        E99(d89, 'mbsc-lv-sl-' + M09, function() {
                            j49.removeClass('mbsc-lv-sl-curr');
                            A09.removeClass('mbsc-lv-sl-new').addClass('mbsc-lv-sl-curr');
                            if (s79 && s79.length) {
                                j49.removeClass('mbsc-lv-v').insertAfter(s79);
                            } else {
                                j79.append(j49.removeClass('mbsc-lv-v'));
                            }
                            s79 = Z09;
                            j79 = m09;
                            j49 = A09;
                            k79(t09, Q09);
                            U09.call(G49, t09);
                            I49('onNavEnd', {
                                level: C79,
                                direction: M09,
                                list: A09[0]
                            });
                        });
                    } else {
                        k79(t09, Q09);
                        U09.call(G49, t09);
                    }
                }

                function k79(C09, E09) {
                    if (C09) {
                        var x09 = k49.scrollTop(),
                            d09 = C09.is('.mbsc-lv-item') ? C09[0].offsetHeight : 0,
                            P09 = C09.offset().top + (y79 ? x09 - Z89 : 0);
                        if (E09) {
                            if (P09 < x09 || P09 + d09 > x09 + X79) {
                                k49.scrollTop(P09);
                            }
                        } else {
                            if (P09 < x09) {
                                k49.scrollTop(P09);
                            } else if (P09 + d09 > x09 + X79) {
                                k49.scrollTop(P09 + d09 - X79 / 2);
                            }
                        }
                    }
                }

                function P99(F09, i09) {
                    return +(i09 < 0 ? w79((F09.actionsWidth || 0).right) || w79(F09.actionsWidth) || w79(v49.actionsWidth.right) || w79(v49.actionsWidth) : w79((F09.actionsWidth || 0).left) || w79(F09.actionsWidth) || w79(v49.actionsWidth.left) || w79(v49.actionsWidth));
                }

                function w79(a09) {
                    return c49.isNumeric(a09) ? a09 + '' : 0;
                }

                function F99(w09) {
                    return (w09 > 0 ? J49.right : J49.left).color || M49;
                }

                function n79(c09, K09) {
                    c09 = c09[K09]();
                    while (c09.length && (!c09.hasClass('mbsc-lv-item') || c09.hasClass('mbsc-lv-ph') || c09.hasClass('mbsc-lv-item-dragging'))) {
                        if (!X49.sortable.group && c09.hasClass('mbsc-lv-gr-title')) {
                            return false;
                        }
                        c09 = c09[K09]();
                    }
                    return c09;
                }

                function U99(q09) {
                    var H09 = 0,
                        l09 = W49[q09.attr('data-ref')];
                    while (l09 && l09.ref) {
                        H09++;
                        l09 = W49[l09.ref];
                    }
                    return H09;
                }

                function Z79(b09) {
                    if (typeof b09 !== 'object') {
                        b09 = q49('li[data-id="' + b09 + '"]', o49);
                    }
                    return q49(b09);
                }

                function o79(y09) {
                    return y09.children('li').not('.mbsc-lv-back').not('.mbsc-lv-removed').not('.mbsc-lv-ph');
                }

                function q99(f09) {
                    q49('li', f09).not('.mbsc-lv-item').each(function() {
                        H99(q49(this));
                    });
                    q49('li[data-role="list-divider"]', f09).removeClass('mbsc-lv-item').addClass('mbsc-lv-gr-title');
                    q49('ul,ol', f09).not('.mbsc-lv').addClass('mbsc-lv').prepend(P89).parent().addClass('mbsc-lv-parent').prepend(x89);
                    q49('.mbsc-lv-back', f09).each(function() {
                        q49(this).attr('data-back', q49(this).parent().parent().attr('data-ref'));
                    });
                }

                function H99(D39) {
                    var W39;
                    if (!D39.attr('data-ref')) {
                        W39 = C49++;
                        D39.attr('data-ref', W39);
                        W49[W39] = {
                            item: D39,
                            child: D39.children('ul,ol'),
                            parent: D39.parent(),
                            ref: D39.parent()[0] === G49 ? null : D39.parent().parent().attr('data-ref')
                        };
                    }
                    D39.addClass('mbsc-lv-item');
                    if (X49.sortable.handle && D39.attr('data-role') != 'list-divider' && !D39.children('.mbsc-lv-handle-c').length) {
                        D39.append(K99);
                    }
                    if (v49.enhance && !D39.hasClass('mbsc-lv-item-enhanced')) {
                        var R09 = D39.attr('data-icon'),
                            z09 = D39.find('img').eq(0).addClass('mbsc-lv-img');
                        if (z09.is(':first-child')) {
                            D39.addClass('mbsc-lv-img-' + (v49.rtl ? 'right' : 'left'));
                        } else if (z09.length) {
                            D39.addClass('mbsc-lv-img-' + (v49.rtl ? 'left' : 'right'));
                        }
                        D39.addClass('mbsc-lv-item-enhanced').children().each(function(T09, N09) {
                            N09 = q49(N09);
                            if (N09.is('p, h1, h2, h3, h4, h5, h6')) {
                                N09.addClass('mbsc-lv-txt');
                            }
                        });
                        if (R09) {
                            D39.addClass('mbsc-lv-item-ic-' + (D39.attr('data-icon-align') || (v49.rtl ? 'right' : 'left'))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + R09 + '"></div>');
                        }
                    }
                }

                function m79(h39, S39) {
                    return q49.isFunction(h39) ? h39.call(this, S39, X49) : h39;
                }

                function Y79(g39) {
                    N79 = g39[0].style;
                    N79[w49 + 'Transform'] = '';
                    N79[w49 + 'Transition'] = '';
                    N79.top = '';
                    g39.removeClass('mbsc-lv-item-swiping');
                }

                function y99(j39) {
                    j39.css('top', '').removeClass('mbsc-lv-item-undo');
                    if (R89) {
                        X49.animate(z79, 'collapse', function() {
                            z79.remove();
                        });
                    } else {
                        z79.remove();
                    }
                    v89();
                    W79 = null;
                    R89 = null;
                }

                function v89(G39, n39) {
                    if (!T79) {
                        u79.attr('class', 'mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none');
                        B49.attr('style', '').removeClass('mbsc-lv-stage-c-v');
                        g79.html('');
                    }
                    B49.removeClass('mbsc-lv-left mbsc-lv-right');
                    if (G39) {
                        I49('onSlideEnd', {
                            target: G39[0],
                            index: u49
                        });
                        if (n39) {
                            n39();
                        }
                    }
                }

                function N89(s39, r39) {
                    var e39 = m79(s39.text, {
                        target: L49[0],
                        index: u49
                    }) || '';
                    if (m79(s39.disabled, {
                            target: L49[0],
                            index: u49
                        })) {
                        B49.addClass('mbsc-lv-ic-disabled');
                    } else {
                        B49.removeClass('mbsc-lv-ic-disabled');
                    }
                    B49.css('background-color', s39.color || (s39.percent === 0 ? F99(s49) : M49));
                    S49.attr('class', 'mbsc-lv-ic-c mbsc-lv-ic-' + (r39 ? 'move-' : '') + (s49 < 0 ? 'right' : 'left'));
                    u79.attr('class', ' mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-' + (s39.icon || 'none'));
                    g79.attr('class', 'mbsc-lv-ic-text' + (s39.icon ? '' : ' mbsc-lv-ic-text-only') + (e39 ? '' : ' mbsc-lv-ic-only')).html(e39 || '&nbsp;');
                    if (v49.animateIcons) {
                        if (l89) {
                            u79.addClass('mbsc-lv-ic-v');
                        } else {
                            setTimeout(function() {
                                u79.addClass('mbsc-lv-ic-a');
                            }, 10);
                        }
                    }
                }

                function C89() {
                    clearTimeout(h79);
                    if (!y89 && X49.sortable) {
                        y89 = true;
                        J79.remove();
                    }
                }

                function z99(I39, B39, V39, O39) {
                    B39 = Math.max(F89, Math.min(B39, c89));
                    N79 = I39[0].style;
                    N79[w49 + 'Transform'] = 'translate3d(0,' + B39 + 'px,0)';
                    N79[w49 + 'Transition'] = E49 + 'transform ' + (V39 || 0) + 'ms ease-out';
                    if (O39) {
                        l79++;
                        setTimeout(function() {
                            O39();
                            l79--;
                        }, V39);
                    }
                }

                function U79(u39, v39, o39, k39, J39) {
                    v39 = Math.max(H79 == 'right' ? 0 : -100, Math.min(v39, H79 == 'left' ? 0 : 100));
                    N79 = u39[0].style;
                    u39.attr('data-pos', v39);
                    N79[w49 + 'Transform'] = 'translate3d(' + (k39 ? E79 * v39 / 100 + 'px' : v39 + '%') + ',0,0)';
                    N79[w49 + 'Transition'] = E49 + 'transform ' + (o39 || 0) + 'ms';
                    if (J39) {
                        l79++;
                        setTimeout(function() {
                            J39();
                            l79--;
                        }, o39);
                    }
                    s49 = v39;
                }

                function e79(Y39, L39, X39) {
                    q49(P49).off('.mbsc-lv-conf');
                    S49.off('.mbsc-lv-conf');
                    if (L39 !== false) {
                        U79(Y39, 0, Y39.attr('data-pos') !== '0' ? 200 : 0, false, function() {
                            v89(Y39, X39);
                            Y79(Y39);
                        });
                    } else {
                        v89(Y39, X39);
                    }
                    a49 = false;
                }

                function D89() {
                    U79(L49, W89 + g49 * 100 / E79);
                    H89 = false;
                }

                function S89(Z39, d39, M39, E39, A39) {
                    var t39, U39;
                    a49 = true;
                    q49(P49).off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(Q39) {
                        Q39.preventDefault();
                        if (E39) {
                            y99(d39);
                        }
                        e79(d39, true, A39);
                    });
                    if (!B79) {
                        S49.off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(m39) {
                            m39.stopPropagation();
                            t39 = K49(m39, 'X');
                            U39 = K49(m39, 'Y');
                        }).on('touchend.mbsc-lv-conf mouseup.mbsc-lv-conf', function(p39) {
                            p39.preventDefault();
                            if (p39.type === 'touchend') {
                                c49.preventClick();
                            }
                            if (Math.abs(K49(p39, 'X') - t39) < 10 && Math.abs(K49(p39, 'Y') - U39) < 10) {
                                p89(Z39, d39, M39, A39);
                                if (E39) {
                                    R89 = null;
                                    y99(d39);
                                }
                            }
                        });
                    }
                }

                function p89(F39, a39, i39, C39) {
                    var P39, x39 = {
                        icon: 'undo2',
                        text: v49.undoText,
                        color: '#b1b1b1',
                        action: function() {
                            X49.undo();
                        }
                    };
                    if (F39.undo) {
                        X49.startActionTrack();
                        if (q49.isFunction(F39.undo)) {
                            X49.addUndoAction(function() {
                                F39.undo.call(G49, {
                                    target: a39[0],
                                    index: i39
                                }, X49);
                            });
                        }
                        W79 = a39.attr('data-ref');
                    }
                    P39 = F39.action.call(G49, {
                        target: a39[0],
                        index: i39
                    }, X49);
                    if (F39.undo) {
                        X49.endActionTrack();
                        if (P39 !== false) {
                            U79(a39, +a39.attr('data-pos') < 0 ? -100 : 100, 200);
                        }
                        z79.height(O49).insertAfter(a39);
                        a39.css('top', r49).addClass('mbsc-lv-item-undo');
                        a89.hide();
                        S49.show();
                        B49.append(S49);
                        N89(x39);
                        S89(x39, a39, i39, true, C39);
                    } else {
                        e79(a39, P39, C39);
                    }
                }

                function g89(w39, K39) {
                    if (m79(K39.disabled, {
                            target: L49[0],
                            index: u49
                        })) {
                        q49('.mbsc-ic-' + K39.icon, B49).addClass('mbsc-lv-ic-disabled');
                    }
                }

                function M99() {
                    if (x79 || !T79) {
                        var b39, l39 = k49.scrollTop(),
                            y39 = V49.offset().top,
                            H39 = V49[0].offsetHeight,
                            f39 = y79 ? k49.offset().top : l39;
                        q49('.mbsc-lv-gr-title', V49).each(function(c39, q39) {
                            if (q49(q39).offset().top < f39) {
                                b39 = q39;
                            }
                        });
                        if (y39 < f39 && y39 + H39 > f39) {
                            b79.show().empty().append(q49(b39).clone());
                        } else {
                            b79.hide();
                        }
                    }
                }

                function n89(T39) {
                    if (D79) {
                        T39.stopPropagation();
                        T39.preventDefault();
                        D79 = false;
                    }
                }

                function o89() {
                    clearTimeout(a99);
                    a99 = setTimeout(function() {
                        X79 = k49[0].innerHeight || k49.innerHeight();
                        Z89 = y79 ? k49.offset().top : 0;
                        if (T79) {
                            r49 = L49[0].offsetTop;
                            O49 = L49[0].offsetHeight;
                            B49.css({
                                top: r49,
                                height: O49
                            });
                        }
                    }, 200);
                }

                function r89() {
                    if (!z89) {
                        clearTimeout(b99);
                        if (a49) {
                            q49(P49).trigger('touchstart');
                        }
                        if (Q89) {
                            X49.close(q79, b89);
                            Q89 = false;
                            q79 = null;
                        }
                    }
                }

                function I79(D99, W99, R39, z39) {
                    D99.removeClass('mbsc-lv-item-dragging');
                    z79.remove();
                    I49('onSortEnd', {
                        target: D99[0],
                        index: D49
                    });
                    if (v49.vibrate) {
                        U49();
                    }
                    if (z39) {
                        X49.addUndoAction(function(N39) {
                            X49.move(D99, W99, null, N39, R39, true);
                        }, true);
                        I49('onSortUpdate', {
                            target: D99[0],
                            index: D49
                        });
                    }
                }

                function J89() {
                    x79 = true;
                    R79 = false;
                    f79 = false;
                    L79 = 0;
                    D49 = u49;
                    if (v49.vibrate) {
                        U49();
                    }
                    h49 = n79(L49, 'next');
                    c79 = h49.length && h49[0].offsetTop;
                    e49 = n79(L49, 'prev');
                    K79 = e49.length && e49[0].offsetTop + e49[0].offsetHeight;
                    z79.height(O49).insertAfter(L49);
                    L49.css({
                        top: r49
                    }).addClass('mbsc-lv-item-dragging').removeClass('mbsc-lv-item-active').appendTo(d99);
                    I49('onSortStart', {
                        target: L49[0],
                        index: D49
                    });
                }

                function l99(r99) {
                    var j99, g99, n99, G99 = false,
                        h99 = true;
                    p49(N99);
                    H89 = false;
                    if (!t79) {
                        D89();
                    }
                    if (J49.actions) {
                        if (Math.abs(s49) > 10 && O79) {
                            U79(L49, s49 < 0 ? -O79 : O79, 200);
                            G99 = true;
                            a49 = true;
                            j89 = L49;
                            f99 = u49;
                            q49(P49).on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(S99) {
                                S99.preventDefault();
                                e79(L49, true, r99);
                            });
                        }
                    } else if (s49) {
                        if (v49.quickSwipe && !t79) {
                            n99 = new Date() - h89;
                            j99 = n99 < 300 && g49 < -50;
                            g99 = n99 < 300 && g49 > 50;
                            if (j99) {
                                l89 = true;
                                n49 = J49.left;
                                N89(n49, v49.iconSlide);
                            } else if (g99) {
                                l89 = true;
                                n49 = J49.right;
                                N89(n49, v49.iconSlide);
                            }
                        }
                        if (n49 && n49.action) {
                            A99 = m79(n49.disabled, {
                                target: L49[0],
                                index: u49
                            });
                            if (!A99) {
                                G99 = true;
                                a49 = t79 || m79(n49.confirm, {
                                    target: L49[0],
                                    index: u49
                                });
                                if (a49) {
                                    U79(L49, (s49 < 0 ? -1 : 1) * S49[0].offsetWidth * 100 / E79, 200, true);
                                    S89(n49, L49, u49, false, r99);
                                } else {
                                    p89(n49, L49, u49, r99);
                                }
                            }
                        }
                    }
                    if (!G99) {
                        e79(L49, h99, r99);
                    }
                    H79 = false;
                }

                function V89() {
                    var e99 = false;
                    if (!H89) {
                        if (J49.actions) {
                            B49.attr('class', 'mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-' + (s49 < 0 ? 'right' : 'left'));
                        } else {
                            if (F79 && s49 <= F79.percent) {
                                a79--;
                                i79 = F79;
                                F79 = v79[a79];
                                e99 = true;
                            } else if (i79 && s49 >= i79.percent) {
                                a79++;
                                F79 = i79;
                                i79 = v79[a79];
                                e99 = true;
                            }
                            if (e99) {
                                n49 = s49 > 0 ? F79 : i79;
                                if (n49) {
                                    N89(n49, v49.iconSlide);
                                    I49('onStageChange', {
                                        target: L49[0],
                                        index: u49,
                                        stage: n49
                                    });
                                }
                            }
                        }
                        if (!t79) {
                            H89 = true;
                            N99 = m49(D89);
                        }
                    }
                }

                function I89() {
                    H79 = m79(J49.swipe, {
                        target: L49[0],
                        index: u49,
                        direction: g49 > 0 ? 'right' : 'left'
                    });
                    if (H79) {
                        C89();
                        clearTimeout(M79);
                        if (J49.actions) {
                            O79 = P99(J49, g49);
                            a89.html(J49.icons).show().children().css('width', O79 + '%');
                            S49.hide();
                            q49('.mbsc-lv-ic-m', B49).removeClass('mbsc-lv-ic-disabled');
                            q49(J49.leftMenu).each(g89);
                            q49(J49.rightMenu).each(g89);
                        } else {
                            S49.show();
                            a89.hide();
                            a79 = J49.start + (g49 > 0 ? 0 : 1);
                            F79 = v79[a79 - 1];
                            i79 = v79[a79];
                        }
                        L49.addClass('mbsc-lv-item-swiping').removeClass('mbsc-lv-item-active');
                        g79.css('line-height', O49 + 'px');
                        B49.css({
                            top: r49,
                            height: O49,
                            backgroundColor: F99(g49)
                        }).addClass('mbsc-lv-stage-c-v').appendTo(j49.parent());
                        if (v49.iconSlide) {
                            L49.append(S49);
                        }
                        I49('onSlideStart', {
                            target: L49[0],
                            index: u49
                        });
                    }
                }

                function f89(V99) {
                    var O99, k99, B99, I99, s99 = L49;
                    if (T79) {
                        T79 = false;
                        C89();
                        if (V99.type == 'mouseup') {
                            q49(P49).off('mousemove', k89).off('mouseup', f89);
                        }
                        if (!A79) {
                            T99 = setTimeout(function() {
                                z89 = false;
                            }, 300);
                        }
                        if (H79 || A79 || x79) {
                            D79 = true;
                        }
                        if (H79) {
                            l99();
                        } else if (x79) {
                            B99 = j49;
                            if (R79) {
                                Y79(L49.detach());
                                k99 = W49[R79.attr('data-ref')];
                                D49 = o79(k99.child).length;
                                R79.removeClass('mbsc-lv-item-hl');
                                if (v49.navigateOnDrop) {
                                    U89(R79, function() {
                                        X49.add(null, L49, null, null, R79, true);
                                        k79(L49);
                                        I79(L49, u49, B99, true);
                                    });
                                } else {
                                    X49.add(null, L49, null, null, R79, true);
                                    I79(L49, u49, B99, true);
                                }
                            } else if (f79) {
                                Y79(L49.detach());
                                k99 = W49[f79.attr('data-back')];
                                D49 = o79(k99.parent).index(k99.item) + 1;
                                f79.removeClass('mbsc-lv-item-hl');
                                if (v49.navigateOnDrop) {
                                    U89(f79, function() {
                                        X49.add(null, L49, D49, null, j49, true);
                                        k79(L49);
                                        I79(L49, u49, B99, true);
                                    });
                                } else {
                                    X49.add(null, L49, D49, null, k99.parent, true);
                                    I79(L49, u49, B99, true);
                                }
                            } else {
                                O99 = z79[0].offsetTop - r49;
                                z99(L49, O99, Math.abs(O99 - Math.max(F89, Math.min(d79 + L79, c89))) * 6, function() {
                                    Y79(L49);
                                    L49.insertBefore(z79);
                                    I79(L49, u49, B99, D49 !== u49);
                                });
                            }
                            x79 = false;
                        } else if (!A79 && Math.abs(g49) < 5 && Math.abs(d79) < 5) {
                            if (J49.tap) {
                                I99 = J49.tap.call(G49, {
                                    target: L49,
                                    index: u49,
                                    domEvent: V99
                                }, X49);
                            }
                            if (B89) {
                                if (V99.type === 'touchend') {
                                    c49.preventClick();
                                }
                                L49.addClass('mbsc-lv-item-active');
                                I49('onItemActivate', {
                                    target: L49[0],
                                    domEvent: V99
                                });
                            }
                            I99 = I49('onItemTap', {
                                target: L49[0],
                                index: u49,
                                domEvent: V99
                            });
                            if (I99 !== false) {
                                U89(L49);
                            }
                        }
                        clearTimeout(M79);
                        setTimeout(function() {
                            s99.removeClass('mbsc-lv-item-active');
                            I49('onItemDeactivate', {
                                target: s99[0]
                            });
                        }, 100);
                        A79 = false;
                        n49 = null;
                    }
                }

                function k89(L99) {
                    var X99 = false,
                        v99 = true;
                    if (T79) {
                        x99 = K49(L99, 'X');
                        i99 = K49(L99, 'Y');
                        g49 = x99 - r79;
                        d79 = i99 - G79;
                        clearTimeout(C99);
                        if (!x79 && !H79 && !A79 && !L49.hasClass('mbsc-lv-back')) {
                            if (Math.abs(d79) > 10) {
                                A79 = true;
                                f89(A49({}, L99, {
                                    type: L99.type == 'mousemove' ? 'mouseup' : 'touchend'
                                }));
                                clearTimeout(M79);
                            } else if (Math.abs(g49) > 7) {
                                I89();
                            }
                        }
                        if (H79) {
                            L99.preventDefault();
                            s49 = g49 / E79 * 100;
                            V89();
                        } else if (x79) {
                            L99.preventDefault();
                            var J99, u99 = k49.scrollTop(),
                                Y99 = Math.max(F89, Math.min(d79 + L79, c89)),
                                o99 = y79 ? L89 - Z89 + u99 - L79 : L89;
                            if (X79 + u99 < o99 + Y99 + O49) {
                                k49.scrollTop(o99 + Y99 - X79 + O49);
                                J99 = true;
                            } else if (o99 + Y99 < u99) {
                                k49.scrollTop(o99 + Y99);
                                J99 = true;
                            }
                            if (J99) {
                                L79 += k49.scrollTop() - u99;
                            }
                            if (c79) {
                                if (X49.sortable.multiLevel && h49.hasClass('mbsc-lv-parent')) {
                                    if (r49 + O49 / 4 + Y99 > c79) {
                                        X99 = true;
                                    } else if (r49 + O49 - O49 / 4 + Y99 > c79) {
                                        R79 = h49.addClass('mbsc-lv-item-hl');
                                        v99 = false;
                                    }
                                } else if (r49 + O49 / 2 + Y99 > c79) {
                                    if (h49.hasClass('mbsc-lv-back')) {
                                        if (X49.sortable.multiLevel) {
                                            f79 = h49.addClass('mbsc-lv-item-hl');
                                            v99 = false;
                                        }
                                    } else {
                                        X99 = true;
                                    }
                                }
                                if (X99) {
                                    z79.insertAfter(h49);
                                    e49 = h49;
                                    h49 = n79(h49, 'next');
                                    K79 = c79;
                                    c79 = h49.length && h49[0].offsetTop;
                                    D49++;
                                }
                            }
                            if (!X99 && K79) {
                                if (X49.sortable.multiLevel && e49.hasClass('mbsc-lv-parent')) {
                                    if (r49 + O49 - O49 / 4 + Y99 < K79) {
                                        X99 = true;
                                    } else if (r49 + O49 / 4 + Y99 < K79) {
                                        R79 = e49.addClass('mbsc-lv-item-hl');
                                        v99 = false;
                                    }
                                } else if (r49 + O49 / 2 + Y99 < K79) {
                                    if (e49.hasClass('mbsc-lv-back')) {
                                        if (X49.sortable.multiLevel) {
                                            f79 = e49.addClass('mbsc-lv-item-hl');
                                            v99 = false;
                                        }
                                    } else {
                                        X99 = true;
                                    }
                                }
                                if (X99) {
                                    z79.insertBefore(e49);
                                    h49 = e49;
                                    e49 = n79(e49, 'prev');
                                    c79 = K79;
                                    K79 = e49.length && e49[0].offsetTop + e49[0].offsetHeight;
                                    D49--;
                                }
                            }
                            if (v99) {
                                if (R79) {
                                    R79.removeClass('mbsc-lv-item-hl');
                                    R79 = false;
                                }
                                if (f79) {
                                    f79.removeClass('mbsc-lv-item-hl');
                                    f79 = false;
                                }
                            }
                            if (X99) {
                                I49('onSortChange', [L49, D49]);
                            }
                            z99(L49, Y99);
                            I49('onSort', [L49, D49]);
                        } else if (Math.abs(g49) > 5 || Math.abs(d79) > 5) {
                            C89();
                        }
                    }
                }

                function Q99(m99) {
                    var p99;
                    if (m99.type === 'touchstart') {
                        z89 = true;
                        clearTimeout(T99);
                    }
                    if (Q49(m99, this) && !T79 && !l79 && !a49 && !T89) {
                        T79 = true;
                        y89 = true;
                        r79 = K49(m99, 'X');
                        G79 = K49(m99, 'Y');
                        g49 = 0;
                        d79 = 0;
                        L49 = q49(this);
                        p99 = L49;
                        e89();
                        B89 = v49.onItemTap || J49.tap || L49.hasClass('mbsc-lv-parent') || L49.hasClass('mbsc-lv-back');
                        Z99 = V49.offset().top;
                        L89 = L49.offset().top;
                        if (B89) {
                            M79 = setTimeout(function() {
                                p99.addClass('mbsc-lv-item-active');
                                I49('onItemActivate', {
                                    target: p99[0],
                                    domEvent: m99
                                });
                            }, 120);
                        }
                        if (X49.sortable && !L49.hasClass('mbsc-lv-back')) {
                            if (!X49.sortable.group) {
                                t89 = L49.nextUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                                X89 = L49.prevUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                            }
                            F89 = (!X49.sortable.group ? X89.length ? X89.eq(-1) : L49 : j49.children('li').eq(0))[0].offsetTop - r49;
                            c89 = (!X49.sortable.group ? t89.length ? t89.eq(-1) : L49 : j49.children('li').eq(-1))[0].offsetTop - r49;
                            if (X49.sortable.handle) {
                                if (q49(m99.target).hasClass('mbsc-lv-handle')) {
                                    clearTimeout(M79);
                                    if (w49 === 'Moz') {
                                        m99.preventDefault();
                                        J89();
                                    } else {
                                        h79 = setTimeout(function() {
                                            J89();
                                        }, 100);
                                    }
                                }
                            } else {
                                h79 = setTimeout(function() {
                                    J79.appendTo(L49);
                                    J79[0].style[w49 + 'Animation'] = 'mbsc-lv-fill ' + (v49.sortDelay - 100) + 'ms linear';
                                    clearTimeout(C99);
                                    clearTimeout(M79);
                                    y89 = false;
                                    h79 = setTimeout(function() {
                                        J79[0].style[w49 + 'Animation'] = '';
                                        J89();
                                    }, v49.sortDelay - 80);
                                }, 80);
                            }
                        }
                        if (m99.type == 'mousedown') {
                            q49(P49).on('mousemove', k89).on('mouseup', f89);
                        }
                    }
                }

                function e89() {
                    l89 = false;
                    D79 = false;
                    s49 = 0;
                    W89 = 0;
                    h89 = new Date();
                    E79 = j49.width();
                    w99 = o79(j49);
                    u49 = w99.index(L49);
                    O49 = L49[0].offsetHeight;
                    r49 = L49[0].offsetTop;
                    J49 = p79[L49.attr('data-type') || 'defaults'];
                    v79 = J49.stages;
                }
                var T79, O79, M79, s49, y89, j89, f99, o49, D49, j49, s79, j79, w99, n49, a79, a99, B79, A99, g49, d79, R79, f79, x79, d99, C99, x99, i99, I49, J79, q89, b79, Y89, t99, y79, K99, c99, q79, Q89, b89, O89, b99, P89, x89, u79, S49, B49, E79, L49, O49, u49, L89, Z99, c89, F89, a89, h49, c79, i79, t89, S79, D79, z89, T99, X89, z79, e49, K79, F79, l89, N99, H89, v49, A79, t79, d89, M89, v79, W89, h89, r79, G79, N79, H79, u89, G89, B89, g79, h79, J49, p79, W79, R89, k49, X79, L79, Z89, X49 = this,
                    G49 = R99,
                    V49 = q49(G49),
                    l79 = 0,
                    C79 = 0,
                    r49 = 0,
                    V79 = {},
                    K89 = {},
                    W49 = {};
                d49.Base.call(this, R99, s89, true);
                X49.animate = function(j09, g09, h09) {
                    E99(j09, 'mbsc-lv-item-' + g09, h09);
                };
                X49.add = function(F5z, c5z, z5z, l5z, a5z, T5z) {
                    var q5z, f5z, H5z, w5z, N5z, b5z, y5z = '',
                        D09 = a5z === F49 ? V49 : Z79(a5z),
                        W09 = D09,
                        S09 = typeof c5z !== 'object' ? q49('<li data-ref="' + C49++ + '" data-id="' + F5z + '">' + c5z + '</li>') : c5z,
                        K5z = S09.attr('data-pos') < 0 ? 'left' : 'right',
                        R5z = S09.attr('data-ref');
                    l5z = l5z || x49;
                    if (!R5z) {
                        R5z = C49++;
                        S09.addClass('mbsc-lv-item').attr('data-ref', R5z);
                    }
                    H99(S09);
                    if (!T5z) {
                        X49.addUndoAction(function(i5z) {
                            if (w5z) {
                                X49.navigate(D09, function() {
                                    W09.remove();
                                    D09.removeClass('mbsc-lv-parent').children('.mbsc-lv-arr').remove();
                                    N5z.child = D09.children('ul,ol');
                                    X49.remove(S09, null, i5z, true);
                                });
                            } else {
                                X49.remove(S09, null, i5z, true);
                            }
                        }, true);
                    }
                    E89(S09, function(P5z) {
                        Y79(S09.css('top', '').removeClass('mbsc-lv-item-undo'));
                        if (D09.is('li')) {
                            b5z = D09.attr('data-ref');
                            if (!D09.children('ul,ol').length) {
                                w5z = true;
                                D09.append('<ul></ul>');
                            }
                        } else {
                            b5z = D09.children('.mbsc-lv-back').attr('data-back');
                        }
                        N5z = W49[b5z];
                        if (N5z) {
                            if (!N5z.child.length) {
                                D09.addClass('mbsc-lv-parent').prepend(x89);
                                W09 = D09.children('ul,ol').prepend(P89).addClass('mbsc-lv');
                                N5z.child = W09;
                                q49('.mbsc-lv-back', D09).attr('data-back', b5z);
                            } else {
                                W09 = N5z.child;
                            }
                        }
                        W49[R5z] = {
                            item: S09,
                            child: S09.children('ul,ol'),
                            parent: W09,
                            ref: b5z
                        };
                        H5z = o79(W09);
                        f5z = H5z.length;
                        if (z5z === F49 || z5z === null) {
                            z5z = f5z;
                        }
                        if (T5z) {
                            y5z = 'mbsc-lv-item-new-' + (T5z ? K5z : '');
                        }
                        q99(S09.addClass(y5z));
                        if (z5z !== false) {
                            if (!f5z) {
                                q5z = q49('.mbsc-lv-back', W09);
                                if (q5z.length) {
                                    S09.insertAfter(q5z);
                                } else {
                                    W09.append(S09);
                                }
                            } else if (z5z < f5z) {
                                S09.insertBefore(H5z.eq(z5z));
                            } else {
                                S09.insertAfter(H5z.eq(f5z - 1));
                            }
                        }
                        if (W09.hasClass('mbsc-lv-v')) {
                            X49.animate(S09.height(S09[0].offsetHeight), T5z && W79 === R5z ? 'none' : 'expand', function(x5z) {
                                X49.animate(x5z.height(''), T5z ? 'add-' + K5z : 'pop-in', function(C5z) {
                                    l5z.call(G49, C5z.removeClass(y5z));
                                    P5z();
                                });
                            });
                        } else {
                            l5z.call(G49, S09.removeClass(y5z));
                            P5z();
                        }
                        o49.trigger('mbsc-enhance', [{
                            theme: v49.theme,
                            lang: v49.lang
                        }]);
                        I49('onItemAdd', {
                            target: S09[0]
                        });
                    });
                };
                X49.swipe = function(d5z, A5z, E5z, t5z, U5z) {
                    d5z = Z79(d5z);
                    L49 = d5z;
                    B79 = t5z;
                    t79 = true;
                    T79 = true;
                    E5z = E5z === F49 ? 300 : E5z;
                    g49 = A5z > 0 ? 1 : -1;
                    e89();
                    I89();
                    U79(d5z, A5z, E5z);
                    clearTimeout(G89);
                    clearInterval(u89);
                    u89 = setInterval(function() {
                        s49 = c49.getPosition(d5z) / E79 * 100;
                        V89();
                    }, 10);
                    G89 = setTimeout(function() {
                        clearInterval(u89);
                        s49 = A5z;
                        V89();
                        l99(U5z);
                        B79 = false;
                        t79 = false;
                        T79 = false;
                    }, E5z);
                };
                X49.openStage = function(M5z, Z5z, Q5z, m5z) {
                    if (V79[Z5z]) {
                        X49.swipe(M5z, V79[Z5z].percent, Q5z, m5z);
                    }
                };
                X49.openActions = function(p5z, X5z, L5z, v5z) {
                    p5z = Z79(p5z);
                    var Y5z = P99(p79[p5z.attr('data-type') || 'defaults'], X5z == 'left' ? -1 : 1);
                    X49.swipe(p5z, X5z == 'left' ? -Y5z : Y5z, L5z, v5z);
                };
                X49.close = function(u5z, o5z) {
                    X49.swipe(u5z, 0, o5z);
                };
                X49.remove = function(J5z, V5z, k5z, I5z) {
                    var s5z, B5z, O5z;
                    k5z = k5z || x49;
                    J5z = Z79(J5z);
                    if (J5z.length) {
                        B5z = J5z.parent();
                        s5z = o79(B5z).index(J5z);
                        O5z = J5z[0].style;
                        if (!I5z) {
                            if (J5z.attr('data-ref') === W79) {
                                R89 = true;
                            }
                            X49.addUndoAction(function(e5z) {
                                X49.add(null, J5z, s5z, e5z, B5z, true);
                            }, true);
                        }
                        E89(J5z, function(r5z) {
                            V5z = V5z || (J5z.attr('data-pos') < 0 ? 'left' : 'right');
                            if (B5z.hasClass('mbsc-lv-v')) {
                                X49.animate(J5z.addClass('mbsc-lv-removed'), I5z ? 'pop-out' : 'remove-' + V5z, function(G5z) {
                                    O5z.height = G5z[0].offsetHeight + 'px';
                                    X49.animate(G5z, 'collapse', function(n5z) {
                                        O5z.height = '';
                                        Y79(n5z.removeClass('mbsc-lv-removed'));
                                        if (k5z.call(G49, n5z) !== false) {
                                            n5z.remove();
                                        }
                                        r5z();
                                    });
                                });
                            } else {
                                if (k5z.call(G49, J5z) !== false) {
                                    J5z.remove();
                                }
                                r5z();
                            }
                            I49('onItemRemove', {
                                target: J5z[0]
                            });
                        });
                    }
                };
                X49.move = function(j5z, h5z, S5z, D5z, W5z, g5z) {
                    j5z = Z79(j5z);
                    if (!g5z) {
                        X49.startActionTrack();
                    }
                    B49.append(S49);
                    X49.remove(j5z, S5z, null, g5z);
                    X49.add(null, j5z, h5z, D5z, W5z, g5z);
                    if (!g5z) {
                        X49.endActionTrack();
                    }
                };
                X49.navigate = function(R1z, T1z) {
                    var z1z, N1z;
                    R1z = Z79(R1z);
                    z1z = W49[R1z.attr('data-ref')];
                    N1z = U99(R1z);
                    if (z1z) {
                        m89(N1z >= C79 ? 'r' : 'l', z1z.parent, R1z, T1z, true);
                        C79 = N1z;
                    }
                };
                X49._processSettings = function() {
                    if (V49.is('[mbsc-enhance]')) {
                        Y89 = true;
                        V49.removeAttr('mbsc-enhance');
                    }
                };
                X49._init = function() {
                    var H1z, q1z, c1z, f1z = 0,
                        y1z = '',
                        b1z = '',
						p = V49.find("ul,ol").length ? "left" : "right",
                        l1z = '';
  
					c1z = v49.sort || v49.sortable;;
					
					H1z = 'mbsc-lv-cont mbsc-lv-' + v49.theme + (v49.rtl ? ' mbsc-lv-rtl' : '') + (v49.baseTheme ? ' mbsc-lv-' + v49.baseTheme : '') + (v49.animateIcons ? ' mbsc-lv-ic-anim' : '') + (v49.striped ? ' mbsc-lv-alt-row ' : '') + (v49.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
					
                    X49.sortable = c1z || false;
                    if (!o49) {
                        y1z += '<div class="mbsc-lv-multi-c"></div>';
                        y1z += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
                        V49.addClass('mbsc-lv mbsc-lv-v mbsc-lv-root').show();
                        B49 = q49('<div class="mbsc-lv-stage-c">' + y1z + '</div>');
                        S49 = q49('.mbsc-lv-ic-c', B49);
                        a89 = q49('.mbsc-lv-multi-c', B49);
                        u79 = q49('.mbsc-lv-ic-s', B49);
                        g79 = q49('.mbsc-lv-ic-text', B49);
                        z79 = q49('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
                        J79 = q49('<div class="mbsc-lv-fill-item"></div>');
                        o49 = q49('<div class="' + H1z + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
                        y79 = v49.context !== 'body';
                        k49 = q49(y79 ? v49.context : t49);
                        d99 = q49('.mbsc-lv-dummy', o49);
                        o49.insertAfter(V49);
                        k49.on('orientationchange resize', o89);
                        o89();
                        o49.on('touchstart mousedown', '.mbsc-lv-item', Q99).on('touchmove', '.mbsc-lv-item', k89).on('touchend touchcancel', '.mbsc-lv-item', f89);
                        G49.addEventListener('click', n89, true);
                        o49.on('touchstart mousedown', '.mbsc-lv-ic-m', function(K1z) {
                            if (!B79) {
                                K1z.stopPropagation();
                                K1z.preventDefault();
                            }
                            r79 = K49(K1z, 'X');
                            G79 = K49(K1z, 'Y');
                        }).on('touchend mouseup', '.mbsc-lv-ic-m', function(w1z) {
                            if (!B79) {
                                if (w1z.type === 'touchend') {
                                    c49.preventClick();
                                }
                                if (a49 && !q49(this).hasClass('mbsc-lv-ic-disabled') && Math.abs(K49(w1z, 'X') - r79) < 10 && Math.abs(K49(w1z, 'Y') - G79) < 10) {
                                    p89((s49 < 0 ? J49.rightMenu : J49.leftMenu)[q49(this).index()], j89, f99);
                                }
                            }
                        });
                        d89 = q49('.mbsc-lv-sl-c', o49).append(V49.addClass('mbsc-lv-sl-curr')).attr('data-ref', C49++);
                        j49 = V49;
                        j79 = o49;
                    } else {
                        o49.attr('class', H1z);
                        if (c1z.handle) {
                            q49('.mbsc-lv-handle-c', V49).remove();
                        }
                        q49('li:not(.mbsc-lv-back)', V49).removeClass('mbsc-lv-item');
                    }
					
					P89 = '<li class="mbsc-lv-item mbsc-lv-back">' + v49.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + v49.leftArrowClass + '"></div></li>';
					x89 = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + v49.rightArrowClass + '"></div>';
					if (X49.sortable.handle) {
						var t59 = X49.sortable.handle === true ? p : X49.sortable.handle;
						K99 = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + t59 + ' mbsc-lv-handle"><div class="' + v49.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + v49.handleMarkup + '</div></div>';
					}
					
                    q99(V49);
                    M89 = 0;
                    p79 = v49.itemGroups || {};
                    p79.defaults = {
                        swipeleft: v49.swipeleft,
                        swiperight: v49.swiperight,
                        stages: v49.stages,
                        actions: v49.actions,
                        actionsWidth: v49.actionsWidth
                    };
                    q49.each(p79, function(F1z, a1z) {
                        a1z.swipe = a1z.swipe !== F49 ? a1z.swipe : v49.swipe;
                        a1z.stages = a1z.stages || [];
                        i89(a1z.stages, 1, true);
                        i89(a1z.stages.left, 1);
                        i89(a1z.stages.right, -1);
                        if (a1z.stages.left || a1z.stages.right) {
                            a1z.stages = [].concat(a1z.stages.left || [], a1z.stages.right || []);
                        }
                        q89 = false;
                        if (!a1z.stages.length) {
                            if (a1z.swipeleft) {
                                a1z.stages.push({
                                    percent: -30,
                                    action: a1z.swipeleft
                                });
                            }
                            if (a1z.swiperight) {
                                a1z.stages.push({
                                    percent: 30,
                                    action: a1z.swiperight
                                });
                            }
                        }
                        q49.each(a1z.stages, function(P1z, i1z) {
                            if (i1z.percent === 0) {
                                q89 = true;
                                return false;
                            }
                        });
                        if (!q89) {
                            a1z.stages.push({
                                percent: 0
                            });
                        }
                        a1z.stages.sort(function(x1z, C1z) {
                            return x1z.percent - C1z.percent;
                        });
                        q49.each(a1z.stages, function(d1z, E1z) {
                            if (E1z.percent === 0) {
                                a1z.start = d1z;
                                return false;
                            }
                        });
                        if (q89) {
                            a1z.left = a1z.right = a1z.stages[a1z.start];
                        } else {
                            a1z.left = a1z.stages[a1z.start - 1] || {};
                            a1z.right = a1z.stages[a1z.start + 1] || {};
                        }
                        if (a1z.actions) {
                            a1z.leftMenu = a1z.actions.left || a1z.actions;
                            a1z.rightMenu = a1z.actions.right || a1z.leftMenu;
                            b1z = '';
                            l1z = '';
                            for (f1z = 0; f1z < a1z.leftMenu.length; f1z++) {
                                b1z += '<div ' + (a1z.leftMenu[f1z].color ? 'style="background-color: ' + a1z.leftMenu[f1z].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + a1z.leftMenu[f1z].icon + '">' + (a1z.leftMenu[f1z].text || '') + '</div>';
                            }
                            for (f1z = 0; f1z < a1z.rightMenu.length; ++f1z) {
                                l1z += '<div ' + (a1z.rightMenu[f1z].color ? 'style="background-color: ' + a1z.rightMenu[f1z].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + a1z.rightMenu[f1z].icon + '">' + (a1z.rightMenu[f1z].text || '') + '</div>';
                            }
                            if (a1z.actions.left) {
                                a1z.swipe = a1z.actions.right ? a1z.swipe : 'right';
                            }
                            if (a1z.actions.right) {
                                a1z.swipe = a1z.actions.left ? a1z.swipe : 'left';
                            }
                            a1z.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + b1z + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + l1z + '</div>';
                        }
                    });
                    if (v49.fixedHeader) {
                        q1z = 'mbsc-lv-fixed-header' + (y79 ? ' mbsc-lv-fixed-header-ctx mbsc-lv-' + v49.theme + (v49.baseTheme ? ' mbsc-lv-' + v49.baseTheme : '') : '');
                        if (!b79) {
                            b79 = q49('<div class="' + q1z + '"></div>');
                            if (y79) {
                                k49.before(b79);
                            } else {
                                o49.prepend(b79);
                            }
                            S79 = c49.throttle(M99, 200);
                            k49.on('scroll touchmove', S79);
                        } else {
                            b79.attr('class', q1z);
                        }
                    }
                    if (v49.hover) {
                        if (!b89) {
                            o49.on('mouseover.mbsc-lv', '.mbsc-lv-item', function() {
                                if (!q79 || q79[0] != this) {
                                    r89();
                                    q79 = q49(this);
                                    if (p79[q79.attr('data-type') || 'defaults'].actions) {
                                        b99 = setTimeout(function() {
                                            if (!z89) {
                                                Q89 = true;
                                                X49.openActions(q79, c99, b89, false);
                                            } else {
                                                q79 = null;
                                            }
                                        }, O89);
                                    }
                                }
                            }).on('mouseleave.mbsc-lv', r89);
                        }
                        b89 = v49.hover.time || 200;
                        O89 = v49.hover.timeout || 200;
                        c99 = v49.hover.direction || v49.hover || 'right';
                    }
                    if (Y89) {
                        o49.attr('mbsc-enhance', '');
                    }
                    o49.trigger('mbsc-enhance', [{
                        theme: v49.theme,
                        lang: v49.lang
                    }]);
                };
                X49._destroy = function() {
                    j79.append(j49);
                    if (y79 && b79) {
                        b79.remove();
                    }
                    if (Y89) {
                        V49.attr('mbsc-enhance', '');
                    }
                    G49.removeEventListener('click', n89, true);
                    o49.find('.mbsc-lv-txt,.mbsc-lv-img').removeClass('mbsc-lv-txt mbsc-lv-img');
                    o49.find('ul,ol').removeClass('mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr').find('li').removeClass('mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right').removeAttr('data-ref');
                    q49('.mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic', o49).remove();
                    V49.insertAfter(o49);
                    o49.remove();
                    B49.remove();
                    k49.off('orientationchange resize', o89);
                    if (S79) {
                        k49.off('scroll touchmove', S79);
                    }
                };
                var T89, A89 = [],
                    P79 = [],
                    w89 = [],
                    Q79 = 0;
                X49.startActionTrack = function() {
                    if (!Q79) {
                        w89 = [];
                    }
                    Q79++;
                };
                X49.endActionTrack = function() {
                    Q79--;
                    if (!Q79) {
                        P79.push(w89);
                    }
                };
                X49.addUndoAction = function(t1z, U1z) {
                    var A1z = {
                        action: t1z,
                        async: U1z
                    };
                    if (Q79) {
                        w89.push(A1z);
                    } else {
                        P79.push([A1z]);
                        if (P79.length > v49.undoLimit) {
                            P79.shift();
                        }
                    }
                };
                X49.undo = function() {
                    function p1z() {
                        Q1z = A89.shift();
                        if (Q1z) {
                            T89 = true;
                            M1z = Q1z.length - 1;
                            m1z();
                        }
                    }

                    function m1z() {
                        if (M1z < 0) {
                            T89 = false;
                            p1z();
                        } else {
                            Z1z = Q1z[M1z];
                            M1z--;
                            if (Z1z.async) {
                                Z1z.action(m1z);
                            } else {
                                Z1z.action();
                                m1z();
                            }
                        }
                    }
                    var Z1z, M1z, Q1z;
                    if (P79.length) {
                        A89.push(P79.pop());
                    }
                    if (!T89) {
                        p1z();
                    }
                };
                v49 = X49.settings;
                I49 = X49.trigger;
                X49.init(s89);
            };
            d49.ListView.prototype = {
                _class: 'listview',
                _hasDef: true,
                _hasTheme: true,
                _hasLang: true,
                _defaults: {
                    context: 'body',
                    actionsWidth: 90,
                    sortDelay: 250,
                    undoLimit: 10,
                    swipe: true,
                    quickSwipe: true,
                    animateIcons: true,
                    animation: true,
                    revert: true,
                    vibrate: true,
                    handleClass: '',
                    handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
                    leftArrowClass: 'mbsc-ic-arrow-left4',
                    rightArrowClass: 'mbsc-ic-arrow-right4',
                    backText: 'Back',
                    undoText: 'Undo',
                    stages: []
                }
            };
            i49.themes.listview.mobiscroll = {
                leftArrowClass: 'mbsc-ic-arrow-left5',
                rightArrowClass: 'mbsc-ic-arrow-right5'
            };
            i49.presetShort('listview', 'ListView');
        }(window, document));
   
   
		
		
		
         var I = P.$;
         var W7 = {
             batch: 50,
             min: 0,
             max: 100,
             defaultUnit: '',
             units: null,
             unitNames: null,
             invalid: [],
             sign: false,
             step: 0.05,
             scale: 2,
             convert: function r4j(Q4j) {
                 return Q4j;
             },
             signText: '&nbsp;',
             wholeText: 'Whole',
             fractionText: 'Fraction',
             unitText: 'Unit'
         };
         P.presets.scroller.measurement = function(N8j) {
             function s8j(n8j) {
                 return Math.max(h8j, Math.min(K8j, d8j ? n8j < 0 ? Math.ceil(n8j) : Math.floor(n8j) : W8j(Math.round(n8j - E8j), U8j) + E8j));
             }

             function f8j(I8j) {
                 return d8j ? W8j((Math.abs(I8j) - Math.abs(s8j(I8j))) * D8j - e8j, U8j) + e8j : 0;
             }

             function q8j(g8j) {
                 var y8j = s8j(g8j),
                     r8j = f8j(g8j),
                     Q8j = g8j < 0 ? '-' : '+';
                 if (r8j >= D8j) {
                     if (g8j < 0) {
                         y8j--;
                     } else {
                         y8j++;
                     }
                     r8j = 0;
                 }
                 return [Q8j, y8j, r8j];
             }

             function S8j(k8j) {
                 var m8j = +k8j[B8j],
                     P2j = d8j ? k8j[Z8j] / D8j * (m8j < 0 ? -1 : 1) : 0;
                 return (P8j && k8j[0] == '-' ? -1 : 1) * (m8j + P2j);
             }

             function W8j(C2j, d2j) {
                 return Math.round(C2j / d2j) * d2j;
             }

             function T8j(B2j, Y2j) {
                 B2j = B2j + '';
                 while (B2j.length < Y2j) {
                     B2j = '0' + B2j;
                 }
                 return B2j;
             }

             function X8j(h2j, A2j, H2j) {
                 if (A2j === H2j || !k4j.convert) {
                     return h2j;
                 }
                 return k4j.convert.call(this, h2j, A2j, H2j);
             }

             function p8j(w2j, M2j, U2j) {
                 w2j = w2j > U2j ? U2j : w2j;
                 w2j = w2j < M2j ? M2j : w2j;
                 return w2j;
             }

             function a8j(Z2j) {
                 var j2j, K2j;
                 M8j = X8j(k4j.min, G8j, Z2j);
                 w8j = X8j(k4j.max, G8j, Z2j);
                 if (d8j) {
                     h8j = M8j < 0 ? Math.ceil(M8j) : Math.floor(M8j);
                     K8j = w8j < 0 ? Math.ceil(w8j) : Math.floor(w8j);
                     O8j = f8j(M8j);
                     c8j = f8j(w8j);
                 } else {
                     h8j = Math.round(M8j);
                     K8j = Math.round(w8j);
                     K8j = h8j + Math.floor((K8j - h8j) / U8j) * U8j;
                     E8j = h8j % U8j;
                 }
                 j2j = h8j;
                 K2j = K8j;
                 if (P8j) {
                     K2j = Math.abs(j2j) > Math.abs(K2j) ? Math.abs(j2j) : Math.abs(K2j);
                     j2j = j2j < 0 ? 0 : j2j;
                 }
                 u8j.min = j2j < 0 ? Math.ceil(j2j / Y8j) : Math.floor(j2j / Y8j);
                 u8j.max = K2j < 0 ? Math.ceil(K2j / Y8j) : Math.floor(K2j / Y8j);
             }

             function o8j(G2j) {
                 return S8j(G2j).toFixed(d8j ? t8j : 0) + (H8j ? ' ' + b8j[G2j[R8j]] : '');
             }
             var J8j = I.extend({}, N8j.settings),
                 k4j = I.extend(N8j.settings, W7, J8j),
                 L8j = {},
                 F8j = [
                     []
                 ],
                 j8j = {},
                 u8j = {},
                 z8j = {},
                 l8j = [],
                 P8j = k4j.sign,
                 H8j = k4j.units && k4j.units.length,
                 G8j = H8j ? k4j.defaultUnit || k4j.units[0] : '',
                 b8j = [],
                 d8j = k4j.step < 1,
                 Y8j = k4j.step > 1 ? k4j.step : 1,
                 t8j = d8j ? Math.max(k4j.scale, (k4j.step + '').split('.')[1].length) : 1,
                 D8j = Math.pow(10, t8j),
                 U8j = Math.round(d8j ? k4j.step * D8j : k4j.step),
                 i8j, C8j, V8j, x8j = -1,
                 Z8j, B8j, R8j, M8j, w8j, h8j, K8j, O8j, c8j, E8j = 0,
                 e8j = 0,
                 v8j, m4j, A8j = 0;
             N8j.setVal = function(N2j, V2j, u2j, X2j, D2j) {
                 N8j._setVal(I.isArray(N2j) ? o8j(N2j) : N2j, V2j, u2j, X2j, D2j);
             };
             if (k4j.units) {
                 for (m4j = 0; m4j < k4j.units.length; ++m4j) {
                     v8j = k4j.units[m4j];
                     b8j.push(k4j.unitNames ? k4j.unitNames[v8j] || v8j : v8j);
                 }
             }
             if (P8j) {
                 P8j = false;
                 if (H8j) {
                     for (m4j = 0; m4j < k4j.units.length; m4j++) {
                         if (X8j(k4j.min, G8j, k4j.units[m4j]) < 0) {
                             P8j = true;
                         }
                     }
                 } else {
                     P8j = k4j.min < 0;
                 }
             }
             if (P8j) {
                 F8j[0].push({
                     data: ['-', '+'],
                     label: k4j.signText
                 });
                 x8j = A8j++;
             }
             u8j = {
                 label: k4j.wholeText,
                 data: function F2j(R2j) {
                     return h8j % Y8j + R2j * Y8j;
                 },
                 getIndex: function b2j(z2j) {
                     return Math.round((z2j - h8j % Y8j) / Y8j);
                 }
             };
             F8j[0].push(u8j);
             B8j = A8j++;
             a8j(G8j);
             if (d8j) {
                 F8j[0].push(z8j);
                 z8j.data = [];
                 z8j.label = k4j.fractionText;
                 for (m4j = e8j; m4j < D8j; m4j += U8j) {
                     l8j.push(m4j);
                     z8j.data.push({
                         value: m4j,
                         display: '.' + T8j(m4j, t8j)
                     });
                 }
                 Z8j = A8j++;
                 i8j = Math.ceil(100 / U8j);
                 if (k4j.invalid && k4j.invalid.length) {
                     I.each(k4j.invalid, function(E2j, q2j) {
                         var L2j = q2j > 0 ? Math.floor(q2j) : Math.ceil(q2j);
                         if (L2j === 0) {
                             L2j = q2j <= 0 ? -0.001 : 0.001;
                         }
                         j8j[L2j] = (j8j[L2j] || 0) + 1;
                         if (q2j === 0) {
                             L2j = 0.001;
                             j8j[L2j] = (j8j[L2j] || 0) + 1;
                         }
                     });
                     I.each(j8j, function(e2j, v2j) {
                         if (v2j < i8j) {
                             delete j8j[e2j];
                         } else {
                             j8j[e2j] = e2j;
                         }
                     });
                 }
             }
             if (H8j) {
                 L8j = {
                     data: [],
                     label: k4j.unitText,
                     cssClass: 'mbsc-msr-whl-unit',
                     circular: false
                 };
                 for (m4j = 0; m4j < k4j.units.length; m4j++) {
                     L8j.data.push({
                         value: m4j,
                         display: b8j[m4j]
                     });
                 }
                 F8j[0].push(L8j);
             }
             R8j = A8j;
             return {
                 wheels: F8j,
                 minWidth: P8j && d8j ? 70 : 80,
                 showLabel: false,
                 formatValue: o8j,
                 compClass: 'mbsc-msr',
                 parseValue: function t2j(a2j) {
                     var p2j = (typeof a2j === 'number' ? a2j + '' : a2j) || k4j.defaultValue,
                         O2j = (p2j + '').split(' '),
                         f2j = +O2j[0],
                         W2j = [],
                         c2j, l2j = '';
                     if (H8j) {
                         l2j = I.inArray(O2j[1], b8j);
                         l2j = l2j == -1 ? I.inArray(G8j, k4j.units) : l2j;
                         l2j = l2j == -1 ? 0 : l2j;
                     }
                     V8j = H8j ? k4j.units[l2j] : '';
                     a8j(V8j);
                     f2j = isNaN(f2j) ? 0 : f2j;
                     f2j = p8j(f2j, M8j, w8j);
                     c2j = q8j(f2j);
                     c2j[1] = p8j(c2j[1], h8j, K8j);
                     C8j = f2j;
                     if (P8j) {
                         W2j[0] = c2j[0];
                         c2j[1] = Math.abs(c2j[1]);
                     }
                     W2j[B8j] = c2j[1];
                     if (d8j) {
                         W2j[Z8j] = c2j[2];
                     }
                     if (H8j) {
                         W2j[R8j] = l2j;
                     }
                     return W2j;
                 },
                 onCancel: function x2j() {
                     C8j = undefined;
                 },
                 validate: function S2j(r2j) {
                     var n2j, o2j, k2j, I2j, y2j, i2j = r2j.values,
                         T2j = r2j.index,
                         P5j = r2j.direction,
                         g2j = {},
                         s2j = [],
                         Q2j = {},
                         J2j = H8j ? k4j.units[i2j[R8j]] : '';
                     if (P8j && T2j === 0) {
                         C8j = Math.abs(C8j) * (i2j[0] == '-' ? -1 : 1);
                     }
                     if (T2j === B8j || T2j === Z8j && d8j || C8j === undefined || T2j === undefined) {
                         C8j = S8j(i2j);
                         V8j = J2j;
                     }
                     if (H8j && T2j === R8j && V8j !== J2j || T2j === undefined) {
                         a8j(J2j);
                         C8j = X8j(C8j, V8j, J2j);
                         V8j = J2j;
                         o2j = q8j(C8j);
                         if (T2j !== undefined) {
                             Q2j[B8j] = u8j;
                             N8j.changeWheel(Q2j);
                         }
                         if (P8j) {
                             i2j[0] = o2j[0];
                         }
                     }
                     s2j[B8j] = [];
                     if (P8j) {
                         s2j[0] = [];
                         if (M8j > 0) {
                             s2j[0].push('-');
                             i2j[0] = '+';
                         }
                         if (w8j < 0) {
                             s2j[0].push('+');
                             i2j[0] = '-';
                         }
                         y2j = Math.abs(i2j[0] == '-' ? h8j : K8j);
                         for (A8j = y2j + Y8j; A8j < y2j + 20 * Y8j; A8j += Y8j) {
                             s2j[B8j].push(A8j);
                             g2j[A8j] = true;
                         }
                     }
                     C8j = p8j(C8j, M8j, w8j);
                     o2j = q8j(C8j);
                     k2j = P8j ? Math.abs(o2j[1]) : o2j[1];
                     n2j = P8j ? i2j[0] == '-' : C8j < 0;
                     i2j[B8j] = k2j;
                     if (n2j) {
                         o2j[0] = '-';
                     }
                     if (d8j) {
                         i2j[Z8j] = o2j[2];
                     }
                     I.each(d8j ? j8j : k4j.invalid, function(Y5j, B5j) {
                         if (P8j && n2j) {
                             if (B5j <= 0) {
                                 B5j = Math.abs(B5j);
                             } else {
                                 return;
                             }
                         }
                         B5j = W8j(X8j(B5j, G8j, J2j), d8j ? 1 : U8j);
                         g2j[B5j] = true;
                         s2j[B8j].push(B5j);
                     });
                     i2j[B8j] = N8j.getValidValue(B8j, k2j, P5j, g2j);
                     o2j[1] = i2j[B8j] * (P8j && n2j ? -1 : 1);
                     if (d8j) {
                         s2j[Z8j] = [];
                         var m2j = P8j ? i2j[0] + i2j[1] : (C8j < 0 ? '-' : '+') + Math.abs(o2j[1]),
                             C5j = (M8j < 0 ? '-' : '+') + Math.abs(h8j),
                             d5j = (w8j < 0 ? '-' : '+') + Math.abs(K8j);
                         if (m2j === C5j) {
                             I(l8j).each(function(A5j, h5j) {
                                 if (n2j ? h5j > O8j : h5j < O8j) {
                                     s2j[Z8j].push(h5j);
                                 }
                             });
                         }
                         if (m2j === d5j) {
                             I(l8j).each(function(w5j, H5j) {
                                 if (n2j ? H5j < c8j : H5j > c8j) {
                                     s2j[Z8j].push(H5j);
                                 }
                             });
                         }
                         I.each(k4j.invalid, function(U5j, M5j) {
                             I2j = q8j(X8j(M5j, G8j, J2j));
                             if ((o2j[0] === I2j[0] || o2j[1] === 0 && I2j[1] === 0 && I2j[2] === 0) && o2j[1] === I2j[1]) {
                                 s2j[Z8j].push(I2j[2]);
                             }
                         });
                     }
                     return {
                         disabled: s2j,
                         valid: i2j
                     };
                 }
             };
         };
         P.presetShort('measurement');
         var x3 = P.$;
         var S3 = P.presets.scroller;
         var p7 = {
             min: 0,
             max: 100,
             defaultUnit: 'km',
             units: ['m', 'km', 'in', 'ft', 'yd', 'mi']
         };
         var i3 = {
             mm: 0.001,
             cm: 0.01,
             dm: 0.1,
             m: 1,
             dam: 10,
             hm: 100,
             km: 1000,
             'in': 0.0254,
             ft: 0.3048,
             yd: 0.9144,
             ch: 20.1168,
             fur: 201.168,
             mi: 1609.344,
             lea: 4828.032
         };
         P.presetShort('distance');
         S3.distance = function(j5j) {
             var K5j = x3.extend({}, p7, j5j.settings);
             x3.extend(j5j.settings, K5j, {
                 sign: false,
                 convert: function Z5j(G5j, N5j, V5j) {
                     return G5j * i3[N5j] / i3[V5j];
                 }
             });
             return S3.measurement.call(this, j5j);
         };
         var o3 = P.$;
         var s3 = P.presets.scroller;
         var o7 = {
             min: 0,
             max: 100,
             defaultUnit: 'N',
             units: ['N', 'kp', 'lbf', 'pdl']
         };
         var J3 = {
             N: 1,
             kp: 9.80665,
             lbf: 4.448222,
             pdl: 0.138255
         };
         P.presetShort('force');
         s3.force = function(u5j) {
             var X5j = o3.extend({}, o7, u5j.settings);
             o3.extend(u5j.settings, X5j, {
                 sign: false,
                 convert: function D5j(F5j, R5j, b5j) {
                     return F5j * J3[R5j] / J3[b5j];
                 }
             });
             return s3.measurement.call(this, u5j);
         };
         var T3 = P.$;
         var n3 = P.presets.scroller;
         var n7 = {
             min: 0,
             max: 1000,
             defaultUnit: 'kg',
             units: ['g', 'kg', 'oz', 'lb'],
             unitNames: {
                 tlong: 't (long)',
                 tshort: 't (short)'
             }
         };
         var I3 = {
             mg: 0.001,
             cg: 0.01,
             dg: 0.1,
             g: 1,
             dag: 10,
             hg: 100,
             kg: 1000,
             t: 1000000,
             drc: 1.7718452,
             oz: 28.3495,
             lb: 453.59237,
             st: 6350.29318,
             qtr: 12700.58636,
             cwt: 50802.34544,
             tlong: 1016046.9088,
             tshort: 907184.74
         };
         P.presetShort('mass');
         n3.mass = function(z5j) {
             var L5j = T3.extend({}, n7, z5j.settings);
             T3.extend(z5j.settings, L5j, {
                 sign: false,
                 convert: function q5j(E5j, e5j, v5j) {
                     return E5j * I3[e5j] / I3[v5j];
                 }
             });
             return n3.measurement.call(this, z5j);
         };
         var g3 = P.$;
         var y3 = P.presets.scroller;
         var r7 = {
             min: 0,
             max: 100,
             defaultUnit: 'kph',
             units: ['kph', 'mph', 'mps', 'fps', 'knot'],
             unitNames: {
                 kph: 'km/h',
                 mph: 'mi/h',
                 mps: 'm/s',
                 fps: 'ft/s',
                 knot: 'knot'
             }
         };
         var r3 = {
             kph: 1,
             mph: 1.60934,
             mps: 3.6,
             fps: 1.09728,
             knot: 1.852
         };
         P.presetShort('speed');
         y3.speed = function(t5j) {
             var l5j = g3.extend({}, r7, t5j.settings);
             g3.extend(t5j.settings, l5j, {
                 sign: false,
                 convert: function f5j(c5j, W5j, a5j) {
                     return c5j * r3[W5j] / r3[a5j];
                 }
             });
             return y3.measurement.call(this, t5j);
         };
         var Q3 = P.$;
         var k3 = P.presets.scroller;
         var P4 = {
             min: -20,
             max: 40,
             defaultUnit: 'c',
             units: ['c', 'k', 'f', 'r'],
             unitNames: {
                 c: '°C',
                 k: 'K',
                 f: '°F',
                 r: '°R'
             }
         };
         var d4 = {
             c2k: function O5j(p5j) {
                 return p5j + 273.15;
             },
             c2f: function x5j(S5j) {
                 return S5j * 9 / 5 + 32;
             },
             c2r: function i5j(o5j) {
                 return (o5j + 273.15) * 9 / 5;
             },
             k2c: function s5j(J5j) {
                 return J5j - 273.15;
             },
             k2f: function T5j(n5j) {
                 return n5j * 9 / 5 - 459.67;
             },
             k2r: function I5j(g5j) {
                 return g5j * 9 / 5;
             },
             f2c: function y5j(r5j) {
                 return (r5j - 32) * 5 / 9;
             },
             f2k: function Q5j(k5j) {
                 return (k5j + 459.67) * 5 / 9;
             },
             f2r: function m5j(P9j) {
                 return P9j + 459.67;
             },
             r2c: function d9j(C9j) {
                 return (C9j - 491.67) * 5 / 9;
             },
             r2k: function B9j(Y9j) {
                 return Y9j * 5 / 9;
             },
             r2f: function h9j(A9j) {
                 return A9j - 459.67;
             }
         };
         P.presetShort('temperature');
         k3.temperature = function(H9j) {
             var w9j = Q3.extend({}, P4, H9j.settings);
             Q3.extend(H9j.settings, w9j, {
                 sign: true,
                 convert: function M9j(U9j, j9j, K9j) {
                     return d4[j9j + '2' + K9j](U9j);
                 }
             });
             return k3.measurement.call(this, H9j);
         };
     
	 
	 (function(y7z, l7z, b7z) {
            var z7z = P,
                R7z = z7z.$,
                T7z = R7z.extend,
                N7z = z7z.classes,
                f7z = 1;
            N7z.MenuStrip = function(Q7z, s7z) {
                function o7z(c8z, K8z) {
                    var H8z = q7z.itemWidth,
                        q8z = q7z.layout;
                    H7z.contWidth = c7z = K7z.width();
                    if (c8z && V7z === c7z || !c7z) {
                        return;
                    }
                    V7z = c7z;
                    if (z7z.util.isNumeric(q8z)) {
                        i7z = c7z ? c7z / q8z : H8z;
                        if (i7z < H8z) {
                            q8z = 'liquid';
                        }
                    }
                    if (H8z) {
                        if (q8z == 'liquid') {
                            i7z = c7z ? c7z / Math.min(Math.floor(c7z / H8z), w7z.children().length) : H8z;
                        } else if (q8z == 'fixed') {
                            i7z = H8z;
                        }
                    }
                    if (i7z) {
                        w7z.children().css('width', i7z + 'px');
                    }
                    if (q7z.display != 'inline') {
                        A7z.find('.mbsc-page').css('padding-' + q7z.display, Q7z.offsetHeight + 'px');
                    }
                    H7z.totalWidth = C7z = Q7z.offsetWidth;
                    T7z(P7z.settings, {
                        contSize: c7z,
                        maxSnapScroll: q7z.paging ? 1 : false,
                        maxScroll: 0,
                        minScroll: C7z > c7z ? c7z - C7z : 0,
                        snap: q7z.paging ? c7z : q7z.snap ? i7z || '.mbsc-ms-item' : false,
                        elastic: C7z > c7z ? i7z || c7z : false
                    });
                    P7z.refresh(K8z);
                }

                function e7z() {
                    w7z.find('.mbsc-ripple').remove();
                    w7z.children().each(function(l8z) {
                        var y8z, z8z = R7z(this),
                            T8z = M7z && z8z.attr('data-selected') == 'true',
                            b8z = z8z.attr('data-disabled') == 'true',
                            f8z = z8z.attr('data-icon'),
                            N8z = z8z.attr('data-ref');
                        if (!N8z) {
                            N8z = f7z++;
                        }
                        if (l8z === 0) {
                            X7z = z8z;
                        }
                        if (M7z && !x7z && T8z) {
                            a7z = z8z;
                        }
                        if (f8z) {
                            I7z = true;
                        }
                        if (z8z.text()) {
                            O7z = true;
                        }
                        y8z = 'mbsc-ms-item mbsc-btn-e ' + (q7z.itemClass || '') + (T8z ? t7z : '') + (b8z ? ' mbsc-btn-d ' + (q7z.disabledClass || '') : '') + (f8z ? ' mbsc-ms-ic mbsc-ic mbsc-ic-' + f8z : '');
                        z8z.attr('data-ref', N8z).attr('data-role', 'button').attr('aria-selected', T8z ? 'true' : 'false').attr('aria-disabled', b8z ? 'true' : 'false').removeClass(m7z[N8z]).addClass(y8z);
                        m7z[N8z] = y8z;
                    });
                    if (I7z) {
                        K7z.addClass('mbsc-ms-icons');
                    }
                    if (O7z) {
                        K7z.addClass('mbsc-ms-txt');
                    }
                }

                function E7z(R8z) {
                    if (typeof R8z !== 'object') {
                        R8z = w7z.children('[data-id="' + R8z + '"]');
                    }
                    return R7z(R8z);
                }

                function Z7z(W7z) {
                    W7z.removeClass(t7z).removeAttr('data-selected').removeAttr('aria-selected');
                }

                function L7z(D7z) {
                    D7z.addClass(t7z).attr('data-selected', 'true').attr('aria-selected', 'true');
                }

                function U7z(G7z, g7z) {
                    if (!G7z.length) {
                        return;
                    }
                    var h7z = G7z.offset().left,
                        n7z = G7z[0].offsetLeft,
                        j7z = G7z[0].offsetWidth,
                        S7z = K7z.offset().left;
                    a7z = G7z;
                    if (g7z === b7z) {
                        g7z = !x7z;
                    }
                    if (M7z && g7z) {
                        if (x7z) {
                            if (G7z.attr('data-selected')) {
                                Z7z(G7z);
                            } else {
                                L7z(G7z);
                            }
                        } else {
                            Z7z(R7z('.mbsc-ms-item-sel', w7z));
                            L7z(G7z);
                        }
                    }
                    if (d7z) {
                        n7z = C7z - n7z - j7z;
                    }
                    if (k7z == 'a') {
                        if (h7z < S7z) {
                            P7z.scroll(d7z ? n7z + j7z - c7z : -n7z, p7z, true);
                        } else if (h7z + j7z > S7z + c7z) {
                            P7z.scroll(d7z ? n7z : c7z - n7z - j7z, p7z, true);
                        }
                    } else {
                        P7z.scroll(c7z / 2 - n7z - j7z / 2, p7z, true);
                    }
                    if (g7z) {
                        F7z('onItemTap', {
                            target: G7z[0]
                        });
                    }
                }

                function Y7z(r7z) {
                    clearTimeout(B7z);
                    B7z = setTimeout(function() {
                        o7z(r7z.type !== 'load');
                    }, 200);
                }
                var a7z, K7z, A7z, X7z, v7z, u7z, c7z, I7z, O7z, i7z, x7z, V7z, B7z, d7z, M7z, t7z, P7z, k7z, q7z, C7z, J7z, F7z, m7z = {},
                    p7z = 1000,
                    H7z = this,
                    w7z = R7z(Q7z);
                N7z.Base.call(this, Q7z, s7z, true);
                H7z.navigate = function(w8z, a8z) {
                    U7z(E7z(w8z), a8z);
                };
                H7z.next = function(i8z) {
                    var F8z = a7z ? a7z.next() : X7z;
                    if (F8z.length) {
                        a7z = F8z;
                        U7z(a7z, i8z);
                    }
                };
                H7z.prev = function(x8z) {
                    var P8z = a7z ? a7z.prev() : X7z;
                    if (P8z.length) {
                        a7z = P8z;
                        U7z(a7z, x8z);
                    }
                };
                H7z.select = function(C8z) {
                    if (!x7z) {
                        Z7z(R7z('.mbsc-ms-item-sel', w7z));
                    }
                    L7z(E7z(C8z));
                };
                H7z.deselect = function(d8z) {
                    Z7z(E7z(d8z));
                };
                H7z.enable = function(E8z) {
                    E7z(E8z).removeClass('mbsc-btn-d').removeAttr('data-disabled').removeAttr('aria-disabled');
                };
                H7z.disable = function(A8z) {
                    E7z(A8z).addClass('mbsc-btn-d').attr('data-disabled', 'true').attr('aria-disabled', 'true');
                };
                H7z.refresh = H7z.position = function(t8z) {
                    e7z();
                    o7z(false, t8z);
                };
                H7z._init = function() {
                    A7z = R7z(q7z.context);
                    v7z = R7z(q7z.context == 'body' ? y7z : q7z.context);
					
					if (q7z.type == 'tabs') {
						q7z.select = q7z.select || 'single';
						q7z.variant = q7z.variant || 'b';
					} else if (g.type == 'options') {
						q7z.select = q7z.select || 'multiple';
						q7z.variant = q7z.variant || 'a';
					} else if (g.type == 'menu') {
						q7z.select = q7z.select || 'off';
						q7z.variant = q7z.variant || 'a';
					}
					if (q7z.itemWidth && q7z.snap === b7z) {
						q7z.snap = true;
					}
                    k7z = q7z.variant;
                    M7z = q7z.select != 'off';
                    x7z = q7z.select == 'multiple';
                    t7z = ' mbsc-ms-item-sel ' + (q7z.activeClass || '');
                    d7z = q7z.rtl;
				    u7z = 'mbsc-ms-c' + ' mbsc-ms-' + k7z + ' mbsc-ms-' + q7z.display + ' mbsc-' + q7z.theme + ' ' + (q7z.baseTheme ? ' mbsc-' + q7z.baseTheme : '') + ' ' + (q7z.cssClass || '') + ' ' + (q7z.wrapperClass || '') + (d7z ? ' mbsc-ms-rtl' : ' mbsc-ms-ltr') + (q7z.itemWidth ? ' mbsc-ms-hasw' : '') + (q7z.context == 'body' ? '' : ' mbsc-ms-ctx') + (M7z ? '' : ' mbsc-ms-nosel');                 
                    if (!K7z) {
                        K7z = R7z('<div class="' + u7z + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(w7z);
                        K7z.find('.mbsc-ms-sc').append(w7z);
                        P7z = new z7z.classes.ScrollView(K7z[0], {
                            axis: 'X',
                            contSize: 0,
                            maxScroll: 0,
                            maxSnapScroll: 1,
                            minScroll: 0,
                            snap: 1,
                            elastic: 1,
                            rtl: d7z,
                            mousewheel: q7z.mousewheel,
                            onStart: function(U8z) {
                                if (!J7z && U8z.domEvent.type == 'touchstart') {
                                    J7z = true;
                                    A7z.find('.mbsc-no-touch').removeClass('mbsc-no-touch');
                                }
                            },
                            onBtnTap: function(Z8z) {
                                U7z(R7z(Z8z.target), true);
                            },
                            onGestureStart: function(M8z) {
                                F7z('onGestureStart', M8z);
                            },
                            onGestureEnd: function(Q8z) {
                                F7z('onGestureEnd', Q8z);
                            },
                            onMove: function(m8z) {
                                F7z('onMove', m8z);
                            },
                            onAnimationStart: function(p8z) {
                                F7z('onAnimationStart', p8z);
                            },
                            onAnimationEnd: function(Y8z) {
                                F7z('onAnimationEnd', Y8z);
                            }
                        });
                    } else {
                        K7z.attr('class', u7z);
                    }
                    w7z.css('display', '').addClass('mbsc-ms ' + (q7z.groupClass || ''));
                    e7z();
                    F7z('onMarkupReady', {
                        target: K7z[0]
                    });
                    o7z();
                    K7z.find('img').on('load', Y7z);
                    v7z.on('orientationchange resize', Y7z);
                };
                H7z._destroy = function() {
                    if (q7z.display != 'inline') {
                        A7z.find('.mbsc-page').css('padding-' + q7z.display, '');
                    }
                    v7z.off('orientationchange resize', Y7z);
                    w7z.removeClass('mbsc-ms mbsc-ms-a mbsc-ms-b').insertAfter(K7z).find('.mbsc-ms-item').each(function() {
                        var X8z = R7z(this);
                        X8z.width('').removeClass(m7z[X8z.attr('data-ref')]);
                    });
                    K7z.remove();
                    P7z.destroy();
                };
                q7z = H7z.settings;
                F7z = H7z.trigger;
                H7z.init(s7z);
            };
            N7z.MenuStrip.prototype = {
                _class: 'menustrip',
                _hasDef: true,
                _hasTheme: true,
                _hasLang: true,
                _defaults: {
                    context: 'body',
                    type: 'options',
                    display: 'inline',
                    layout: 'liquid'
                }
            };
            z7z.presetShort('menustrip', 'MenuStrip');
        }(window, document));
		 
		 
         P.presets.scroller.number = P.presets.scroller.measurement;
         P.presetShort('number');
         var H = P.$;
         var n6 = P.util;
         var b1 = P.presets.numpad;
         var U4 = n6.testTouch;
         var X1 = n6.getCoord;
         var K4 = n6.isNumeric;
         var C7 = function g0j() {};
         var B7 = function y0j(Y63, c63, p63) {
             function A63(i63) {
                 var x63, S63 = Q0j.validate.call(Y63, {
                         values: k0j.slice(0),
                         variables: P63
                     }, r0j) || [],
                     o63 = S63 && S63.disabled || [];
                 r0j._isValid = S63.invalid ? false : true;
                 r0j._tempValue = Q0j.formatValue.call(Y63, k0j.slice(0), P63, r0j);
                 d63 = k0j.length;
                 N63 = S63.length || C63;
                 if (r0j._isVisible) {
                     H('.mbsc-np-ph', B63).each(function(s63) {
                         H(this).html(Q0j.fill == 'ltr' ? s63 >= d63 ? j63 : H63 || k0j[s63] : s63 >= C63 - N63 ? s63 + d63 < C63 ? j63 : H63 || k0j[s63 + d63 - C63] : '');
                     });
                     H('.mbsc-np-cph', B63).each(function() {
                         H(this).html(P63[H(this).attr('data-var')] || H(this).attr('data-ph'));
                     });
                     if (d63 === C63) {
                         for (x63 = 0; x63 <= 9; x63++) {
                             o63.push(x63);
                         }
                     }
                     H('.mbsc-np-btn', B63).removeClass(w63);
                     for (x63 = 0; x63 < o63.length; x63++) {
                         H('.mbsc-np-btn[data-val="' + o63[x63] + '"]', B63).addClass(w63);
                     }
                     if (r0j._isValid) {
                         H('.mbsc-fr-btn-s .mbsc-fr-btn', B63).removeClass(w63);
                     } else {
                         H('.mbsc-fr-btn-s .mbsc-fr-btn', B63).addClass(w63);
                     }
                     if (r0j.live) {
                         r0j._hasValue = i63 || r0j._hasValue;
                         M63(i63, false, i63);
                         if (i63) {
                             V63('onSet', {
                                 valueText: r0j._value
                             });
                         }
                     }
                 }
             }

             function M63(T63, n63, J63, I63) {
                 if (n63) {
                     A63();
                 }
                 if (!I63) {
                     K63 = k0j.slice(0);
                     D63 = H.extend({}, P63);
                     R63 = m0j.slice(0);
                     r0j._value = r0j._hasValue ? r0j._tempValue : null;
                 }
                 if (T63) {
                     if (r0j._isInput) {
                         h63.val(r0j._hasValue && r0j._isValid ? r0j._value : '');
                     }
                     V63('onFill', {
                         valueText: r0j._hasValue ? r0j._tempValue : '',
                         change: J63
                     });
                     if (J63) {
                         r0j._preventChange = true;
                         h63.trigger('change');
                     }
                 }
             }

             function t63(k63) {
                 var g63, r63, y63 = k63 || [],
                     Q63 = [];
                 m0j = [];
                 P63 = {};
                 for (g63 = 0; g63 < y63.length; g63++) {
                     if (/:/.test(y63[g63])) {
                         r63 = y63[g63].split(':');
                         P63[r63[0]] = r63[1];
                         m0j.push(r63[0]);
                     } else {
                         Q63.push(y63[g63]);
                         m0j.push('digit');
                     }
                 }
                 return Q63;
             }

             function b63(m63, P13) {
                 if (!d63 && !P13 && !Q0j.allowLeadingZero || m63.hasClass('mbsc-fr-btn-d') || m63.hasClass('mbsc-np-btn-empty')) {
                     return;
                 }
                 if (d63 < C63) {
                     m0j.push('digit');
                     k0j.push(P13);
                     A63(true);
                 }
             }

             function f63(Y13) {
                 var C13, d13, B13 = Y13.attr('data-val'),
                     A13 = Y13.attr('data-track') !== 'false',
                     h13 = Y13.attr('data-var');
                 if (!Y13.hasClass('mbsc-fr-btn-d')) {
                     if (h13) {
                         d13 = h13.split(':');
                         if (A13) {
                             m0j.push(d13[0]);
                         }
                         P63[d13[0]] = d13[2] === undefined ? d13[1] : P63[d13[0]] == d13[1] ? d13[2] : d13[1];
                     }
                     if (B13.length + d63 <= N63) {
                         for (C13 = 0; C13 < B13.length; ++C13) {
                             d13 = K4(B13[C13]) ? +B13[C13] : B13[C13];
                             if (Q0j.allowLeadingZero || d63 || d13) {
                                 m0j.push('digit');
                                 k0j.push(d13);
                                 d63 = k0j.length;
                             }
                         }
                     }
                     A63(true);
                 }
             }

             function X63() {
                 var w13, M13, H13 = m0j.pop();
                 if (d63 || H13 !== 'digit') {
                     if (H13 !== 'digit' && P63[H13]) {
                         delete P63[H13];
                         M13 = m0j.slice(0);
                         m0j = [];
                         for (w13 = 0; w13 < M13.length; w13++) {
                             if (M13[w13] !== H13) {
                                 m0j.push(M13[w13]);
                             }
                         }
                     } else {
                         k0j.pop();
                     }
                     A63(true);
                 }
             }

             function a63(U13) {
                 Z63 = true;
                 v63 = X1(U13, 'X');
                 e63 = X1(U13, 'Y');
                 clearInterval(G63);
                 clearTimeout(G63);
                 X63();
                 G63 = setInterval(function() {
                     X63();
                 }, 150);
             }

             function W63() {
                 clearInterval(G63);
                 Z63 = false;
             }

             function O63(j13) {
                 if (U4(j13, this)) {
                     a63(j13);
                     if (j13.type === 'mousedown') {
                         H(document).on('mousemove', u63).on('mouseup', F63);
                     }
                 }
             }

             function u63(K13) {
                 if (Z63) {
                     E63 = X1(K13, 'X');
                     L63 = X1(K13, 'Y');
                     l63 = E63 - v63;
                     z63 = L63 - e63;
                     if (Math.abs(l63) > 7 || Math.abs(z63) > 7) {
                         W63();
                     }
                 }
             }

             function F63(Z13) {
                 if (Z63) {
                     Z13.preventDefault();
                     W63();
                     if (Z13.type === 'mouseup') {
                         H(document).off('mousemove', u63).off('mouseup', F63);
                     }
                 }
             }
             var B63, w63, j63, d63, Q0j, H63, v63, e63, E63, L63, l63, z63, Z63, G63, k0j, N63, V63, C63, K63, h63 = H(Y63),
                 r0j = this,
                 R63 = [],
                 m0j = [],
                 P63 = {},
                 D63 = {},
                 q63 = {
                     107: '+',
                     109: '-'
                 },
                 U63 = {
                     48: 0,
                     49: 1,
                     50: 2,
                     51: 3,
                     52: 4,
                     53: 5,
                     54: 6,
                     55: 7,
                     56: 8,
                     57: 9,
                     96: 0,
                     97: 1,
                     98: 2,
                     99: 3,
                     100: 4,
                     101: 5,
                     102: 6,
                     103: 7,
                     104: 8,
                     105: 9
                 };
             U6.call(this, Y63, c63, true);
             r0j.setVal = r0j._setVal = function(G13, N13, V13, u13) {
                 r0j._hasValue = G13 !== null && G13 !== undefined;
                 k0j = t63(H.isArray(G13) ? G13.slice(0) : Q0j.parseValue.call(Y63, G13, r0j));
                 M63(N13, true, V13 === undefined ? N13 : V13, u13);
             };
             r0j.getVal = r0j._getVal = function(X13) {
                 return r0j._hasValue || X13 ? r0j[X13 ? '_tempValue' : '_value'] : null;
             };
             r0j.setArrayVal = r0j.setVal;
             r0j.getArrayVal = function(D13) {
                 return D13 ? k0j.slice(0) : r0j._hasValue ? K63.slice(0) : null;
             };
             r0j._readValue = function() {
                 var F13 = h63.val() || '';
                 if (F13 !== '') {
                     r0j._hasValue = true;
                 }
                 if (H63) {
                     P63 = {};
                     m0j = [];
                     k0j = [];
                 } else {
                     P63 = r0j._hasValue ? D63 : {};
                     m0j = r0j._hasValue ? R63 : [];
                     k0j = r0j._hasValue && K63 ? K63.slice(0) : t63(Q0j.parseValue.call(Y63, F13, r0j));
                     M63(false, true);
                 }
             };
             r0j._fillValue = function() {
                 r0j._hasValue = true;
                 M63(true, false, true);
             };
             r0j._generateContent = function() {
                 var q13, E13, z13, b13 = 1,
                     L13 = '',
                     R13 = '';
                 R13 += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + Q0j.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + Q0j.deleteIcon + '"></div><div class="mbsc-np-dsp">';
                 L13 = Q0j.template.replace(/d/g, '<span class="mbsc-np-ph">' + j63 + '</span>').replace(/&#100;/g, 'd');
                 L13 = L13.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
                 R13 += L13;
                 R13 += '</div></div>';
                 R13 += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
                 for (q13 = 0; q13 < 4; q13++) {
                     R13 += '<div class="mbsc-np-row">';
                     for (E13 = 0; E13 < 3; E13++) {
                         z13 = b13;
                         if (b13 == 10 || b13 == 12) {
                             z13 = '';
                         } else if (b13 == 11) {
                             z13 = 0;
                         }
                         if (z13 === '') {
                             if (b13 == 10 && Q0j.leftKey) {
                                 R13 += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (Q0j.leftKey.variable ? 'data-var="' + Q0j.leftKey.variable + '"' : '') + ' data-val="' + (Q0j.leftKey.value || '') + '" ' + (Q0j.leftKey.track !== undefined ? ' data-track="' + Q0j.leftKey.track + '"' : '') + '>' + Q0j.leftKey.text + '</div>';
                             } else if (b13 == 12 && Q0j.rightKey) {
                                 R13 += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (Q0j.rightKey.variable ? 'data-var="' + Q0j.rightKey.variable + '"' : '') + ' data-val="' + (Q0j.rightKey.value || '') + '" ' + (Q0j.rightKey.track !== undefined ? ' data-track="' + Q0j.rightKey.track + '"' : '') + ' >' + Q0j.rightKey.text + '</div>';
                             } else {
                                 R13 += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>';
                             }
                         } else {
                             R13 += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + z13 + '">' + z13 + '</div>';
                         }
                         b13++;
                     }
                     R13 += '</div>';
                 }
                 R13 += '</div></div>';
                 return R13;
             };
             r0j._markupReady = function() {
                 B63 = r0j._markup;
                 A63();
             };
             r0j._attachEvents = function(e13) {
                 e13.on('keydown', function(v13) {
                     var t13;
                     if (q63[v13.keyCode] !== undefined) {
                         t13 = H('.mbsc-np-btn[data-var="sign:-:"]', e13);
                         if (t13.length) {
                             P63.sign = v13.keyCode == 107 ? '-' : '';
                             f63(t13);
                         }
                     } else if (U63[v13.keyCode] !== undefined) {
                         b63(H('.mbsc-np-btn[data-val="' + U63[v13.keyCode] + '"]', e13), U63[v13.keyCode]);
                     } else if (v13.keyCode == 8) {
                         v13.preventDefault();
                         X63();
                     }
                 });
                 r0j.tap(H('.mbsc-np-btn', e13), function() {
                     var l13 = H(this);
                     if (l13.hasClass('mbsc-np-btn-custom')) {
                         f63(l13);
                     } else {
                         b63(l13, +l13.attr('data-val'));
                     }
                 }, false, 30, true);
                 H('.mbsc-np-del', e13).on('touchstart mousedown keydown', O63).on('touchmove mousemove', u63).on('keyup mouseup touchend', F63);
             };
             r0j.__init = function() {
                 Q0j = r0j.settings;
                 Q0j.cssClass = (Q0j.cssClass || '') + ' mbsc-np';
                 Q0j.template = Q0j.template.replace(/\\d/, '&#100;');
                 j63 = Q0j.placeholder;
                 C63 = (Q0j.template.match(/d/g) || []).length;
                 w63 = 'mbsc-fr-btn-d ' + (Q0j.disabledClass || '');
                 H63 = Q0j.mask;
                 V63 = r0j.trigger;
                 if (H63 && h63.is('input')) {
                     h63.attr('type', 'password');
                 }
             };
             r0j._indexOf = function(c13, W13) {
                 var f13;
                 for (f13 = 0; f13 < c13.length; ++f13) {
                     if (c13[f13].toString() === W13.toString()) {
                         return f13;
                     }
                 }
                 return -1;
             };
             if (!p63) {
                 r0j.init(c63);
             }
         };
         B7.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _hasPreset: true,
             _class: 'numpad',
             _defaults: H.extend({}, U6.prototype._defaults, {
                 template: 'dd.dd',
                 placeholder: '0',
                 deleteIcon: 'backspace',
                 allowLeadingZero: false,
                 headerText: false,
                 fill: 'rtl',
                 deleteText: 'Delete',
                 decimalSeparator: '.',
                 thousandsSeparator: ',',
                 validate: C7,
                 parseValue: C7,
                 formatValue: function a13(T13, I13, n13) {
                     var p13, S13 = 1,
                         s13 = n13.settings,
                         J13 = s13.placeholder,
                         i13 = s13.template,
                         o13 = T13.length,
                         x13 = i13.length,
                         O13 = '';
                     for (p13 = 0; p13 < x13; p13++) {
                         if (i13[x13 - p13 - 1] == 'd') {
                             if (S13 <= o13) {
                                 O13 = T13[o13 - S13] + O13;
                             } else {
                                 O13 = J13 + O13;
                             }
                             S13++;
                         } else {
                             O13 = i13[x13 - p13 - 1] + O13;
                         }
                     }
                     H.each(I13, function(g13, y13) {
                         O13 = O13.replace('{' + g13 + '}', y13);
                     });
                     return H('<div>' + O13 + '</div>').text();
                 }
             })
         };
         P.classes.Numpad = B7;
         P.themes.numpad = P.themes.frame;
         P.presetShort('numpad', 'Numpad', false);
         var N4 = {
             min: 0,
             max: 99.99,
             scale: 2,
             prefix: '',
             suffix: '',
             returnAffix: false
         };
         b1.decimal = function(Q13) {
             function k13(h33, A33) {
                 var B33, Y33 = h33.slice(0),
                     C33 = 0;
                 while (Y33.length) {
                     C33 = C33 * 10 + Y33.shift();
                 }
                 for (B33 = 0; B33 < r13.scale; B33++) {
                     C33 /= 10;
                 }
                 return A33 ? C33 * -1 : C33;
             }

             function P33(w33) {
                 var H33 = k13(w33).toFixed(r13.scale).replace('.', r13.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, r13.thousandsSeparator);
                 return H33;
             }
             var d33 = H.extend({}, Q13.settings),
                 r13 = H.extend(Q13.settings, N4, d33),
                 m13 = r13.min < 0;
             Q13.getVal = function(j33) {
                 var M33 = Q13._getVal(j33),
                     U33 = (M33 + '').replace(r13.decimalSeparator, '.').replace(r13.thousandsSeparator, '');
                 return n6.isNumeric(U33) ? +U33 : M33;
             };
             return {
                 template: (m13 ? '{sign}' : '') + r13.prefix.replace(/d/g, '\\d') + Array((Math.floor(Math.max(r13.max, Math.abs(r13.min))) + '').length + 1).join('d') + (r13.scale ? '.' + Array(r13.scale + 1).join('d') : '') + r13.suffix.replace(/d/g, '\\d'),
                 leftKey: m13 ? {
                     text: '-/+',
                     variable: 'sign:-:',
                     track: false
                 } : undefined,
                 parseValue: function K33(u33) {
                     var G33, Z33, V33 = u33 || r13.defaultValue,
                         N33 = [];
                     if (V33) {
                         V33 = (V33 + '').replace(r13.decimalSeparator, '.').replace(r13.thousandsSeparator, '');
                         Z33 = V33.match(/\d+\.?\d*/g);
                         if (Z33) {
                             Z33 = (+Z33[0]).toFixed(r13.scale);
                             for (G33 = 0; G33 < Z33.length; G33++) {
                                 if (Z33[G33] != '.') {
                                     if (+Z33[G33]) {
                                         N33.push(+Z33[G33]);
                                     } else if (N33.length) {
                                         N33.push(0);
                                     }
                                 }
                             }
                         }
                     }
                     if (u33 < 0) {
                         N33.push('sign:' + '-');
                     }
                     return N33;
                 },
                 formatValue: function X33(F33, R33) {
                     var D33 = P33(F33),
                         b33 = k13(F33, R33 && R33.sign == '-');
                     return (b33 < 0 ? '-' : '') + (r13.returnAffix ? r13.prefix + D33 + r13.suffix : D33);

                 },
                 validate: function z33(L33) {
                     var q33 = L33.values,
                         v33 = P33(q33),
                         E33 = k13(q33, L33.variables && L33.variables.sign == '-'),
                         e33 = [];
                     if (!q33.length && !r13.allowLeadingZero) {
                         e33.push(0);
                     }
                     if (Q13.isVisible()) {
                         H('.mbsc-np-dsp', Q13._markup).html((L33.variables.sign || '') + r13.prefix + v33 + r13.suffix);
                     }
                     return {
                         disabled: e33,
                         invalid: E33 > r13.max || E33 < r13.min || (r13.invalid ? Q13._indexOf(r13.invalid, E33) != -1 : false)
                     };
                 }
             };
         };
         var h7 = ['h', 'm', 's'];
         var X4 = {
             min: 0,
             max: 362439,
             defaultValue: 0,
             hourTextShort: 'h',
             minuteTextShort: 'm',
             secTextShort: 's'
         };
         b1.timespan = function(a33) {
             function x33(J33) {
                 var o33, i33 = '',
                     s33 = 60 * 60;
                 H(h7).each(function(n33, T33) {
                     o33 = Math.floor(J33 / s33);
                     J33 -= o33 * s33;
                     s33 /= 60;
                     if (o33 > 0 || T33 == 's' && !i33) {
                         i33 = i33 + (i33 ? ' ' : '') + o33 + p33[T33];
                     }
                 });
                 return i33;
             }
             var S33 = H.extend({}, a33.settings),
                 W33 = H.extend(a33.settings, X4, S33),
                 p33 = {
                     h: W33.hourTextShort.replace(/d/g, '\\d'),
                     m: W33.minuteTextShort.replace(/d/g, '\\d'),
                     s: W33.secTextShort.replace(/d/g, '\\d')
                 },
                 O33 = 'd<span class="mbsc-np-sup mbsc-np-time">' + p33.s + '</span>';
             if (W33.max > 9) {
                 O33 = 'd' + O33;
             }
             if (W33.max > 99) {
                 O33 = '<span class="mbsc-np-ts-m">' + (W33.max > 639 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + p33.m + '</span>' + O33;
             }
             if (W33.max > 6039) {
                 O33 = '<span class="mbsc-np-ts-h">' + (W33.max > 38439 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + p33.h + '</span>' + O33;
             }
             a33.setVal = function(I33, g33, y33, r33) {
                 if (n6.isNumeric(I33)) {
                     I33 = x33(I33);
                 }
                 return a33._setVal(I33, g33, y33, r33);
             };
             a33.getVal = function(Q33) {
                 return a33._hasValue || Q33 ? Y7(a33.getArrayVal(Q33)) : null;
             };
             return {
                 template: O33,
                 parseValue: function k33(C73) {
                     var P73, d73 = C73 || x33(W33.defaultValue),
                         m33 = [];
                     if (d73) {
                         H(h7).each(function(Y73, B73) {
                             P73 = new RegExp('(\\d+)' + p33[B73], 'gi').exec(d73);
                             if (P73) {
                                 P73 = +P73[1];
                                 if (P73 > 9) {
                                     m33.push(Math.floor(P73 / 10));
                                     m33.push(P73 % 10);
                                 } else {
                                     if (m33.length) {
                                         m33.push(0);
                                     }
                                     if (P73 || m33.length) {
                                         m33.push(P73);
                                     }
                                 }
                             } else if (m33.length) {

                                 m33.push(0);
                                 m33.push(0);
                             }
                         });
                     }
                     return m33;
                 },
                 formatValue: function h73(A73) {
                     return x33(Y7(A73));
                 },
                 validate: function H73(j73) {
                     var M73 = j73.values,
                         w73 = Y7(M73.slice(0)),
                         U73 = [];
                     if (!M73.length) {
                         U73.push(0);
                     }
                     return {
                         disabled: U73,
                         invalid: w73 > W33.max || w73 < W33.min || (W33.invalid ? a33._indexOf(W33.invalid, +w73) != -1 : false)
                     };
                 }
             };
         };
         var D4 = {
             timeFormat: 'hh:ii A',
             amText: 'am',
             pmText: 'pm'
         };
         b1.time = function(L73) {
             function E73(t73, f73) {
                 var v73, l73 = '';
                 for (v73 = 0; v73 < t73.length; ++v73) {
                     l73 += t73[v73] + (v73 % 2 == (t73.length % 2 == 1 ? 0 : 1) && v73 != t73.length - 1 ? ':' : '');
                 }
                 H.each(f73, function(W73, c73) {
                     l73 += ' ' + c73;
                 });
                 return l73;
             }

             function e73(O73) {
                 var a73, S73, x73, J73, T73, g73, i73, o73, n73, I73, p73 = [],
                     s73 = 2 * D73.length;
                 z73 = s73;
                 if (!O73.length) {
                     if (Z73) {
                         p73.push(0);
                         p73.push(K73.leftKey.value);
                     }
                     p73.push(K73.rightKey.value);
                 }
                 if (!Z73 && (s73 - O73.length < 2 || O73[0] != 1 && (O73[0] > 2 || O73[1] > 3) && s73 - O73.length <= 2)) {
                     p73.push('30');
                     p73.push('00');
                 }
                 if ((Z73 ? O73[0] > 1 || O73[1] > 2 : O73[0] != 1 && (O73[0] > 2 || O73[1] > 3)) && O73[0]) {
                     O73.unshift(0);
                     z73 = s73 - 1;
                 }
                 if (O73.length == s73) {
                     for (a73 = 0; a73 <= 9; ++a73) {
                         p73.push(a73);
                     }
                 } else if (O73.length == 1 && Z73 && O73[0] == 1 || O73.length && O73.length % 2 === 0 || !Z73 && O73[0] == 2 && O73[1] > 3 && O73.length % 2 == 1) {
                     for (a73 = 6; a73 <= 9; ++a73) {
                         p73.push(a73);
                     }
                 }
                 n73 = O73[1] !== undefined ? '' + O73[0] + O73[1] : '';
                 I73 = +V73 == +(O73[3] !== undefined ? '' + O73[2] + O73[3] : '');
                 if (K73.invalid) {
                     for (a73 = 0; a73 < K73.invalid.length; ++a73) {
                         g73 = K73.invalid[a73].getHours();
                         i73 = K73.invalid[a73].getMinutes();
                         o73 = K73.invalid[a73].getSeconds();
                         if (g73 == +n73) {
                             if (D73.length == 2 && (i73 < 10 ? 0 : +('' + i73)[0]) == +O73[2]) {
                                 p73.push(i73 < 10 ? i73 : +('' + i73)[1]);
                                 break;
                             } else if ((o73 < 10 ? 0 : +('' + o73)[0]) == +O73[4]) {
                                 p73.push(o73 < 10 ? o73 : +('' + o73)[1]);
                                 break;
                             }
                         }
                     }
                 }
                 if (K73.min || K73.max) {
                     S73 = +G73 == +n73;
                     x73 = +N73 == +n73;
                     T73 = x73 && I73;
                     J73 = S73 && I73;
                     if (O73.length === 0) {
                         for (a73 = Z73 ? 2 : G73 > 19 ? G73[0] : 3; a73 <= (G73[0] == 1 ? 9 : G73[0] - 1); ++a73) {
                             p73.push(a73);
                         }
                         if (G73 >= 10) {
                             p73.push(0);
                             if (G73[0] == 2) {
                                 for (a73 = 3; a73 <= 9; ++a73) {
                                     p73.push(a73);
                                 }
                             }
                         }
                         if (N73 && N73 < 10 || G73 && G73 >= 10) {
                             for (a73 = N73 && N73 < 10 ? +N73[0] + 1 : 0; a73 < (G73 && G73 >= 10 ? G73[0] : 10); ++a73) {
                                 p73.push(a73);
                             }
                         }
                     }
                     if (O73.length == 1) {
                         if (O73[0] === 0) {
                             for (a73 = 0; a73 < G73[0]; ++a73) {
                                 p73.push(a73);
                             }
                         }
                         if (G73 && O73[0] !== 0 && (Z73 ? O73[0] == 1 : O73[0] == 2)) {
                             for (a73 = Z73 ? 3 : 4; a73 <= 9; ++a73) {
                                 p73.push(a73);
                             }
                         }
                         if (O73[0] == G73[0]) {
                             for (a73 = 0; a73 < G73[1]; ++a73) {
                                 p73.push(a73);
                             }
                         }
                         if (O73[0] == N73[0] && !Z73) {
                             for (a73 = +N73[1] + 1; a73 <= 9; ++a73) {
                                 p73.push(a73);
                             }
                         }
                     }
                     if (O73.length == 2 && (S73 || x73)) {
                         for (a73 = x73 ? +V73[0] + 1 : 0; a73 < (S73 ? +F73[0] : 10); ++a73) {
                             p73.push(a73);
                         }
                     }
                     if (O73.length == 3 && (x73 && O73[2] == V73[0] || S73 && O73[2] == F73[0])) {
                         for (a73 = x73 && O73[2] == V73[0] ? +V73[1] + 1 : 0; a73 < (S73 && O73[2] == F73[0] ? +F73[1] : 10); ++a73) {
                             p73.push(a73);
                         }
                     }
                     if (O73.length == 4 && (J73 || T73)) {
                         for (a73 = T73 ? +u73[0] + 1 : 0; a73 < (J73 ? +X73[0] : 10); ++a73) {
                             p73.push(a73);
                         }
                     }
                     if (O73.length == 5 && (J73 && O73[4] == X73[0] || T73 && O73[4] == u73[0])) {
                         for (a73 = T73 && O73[4] == u73[0] ? +u73[1] + 1 : 0; a73 < (J73 && O73[4] == X73[0] ? +X73[1] : 10); ++a73) {
                             p73.push(a73);
                         }
                     }
                 }
                 return p73;
             }
             var q73 = H.extend({}, L73.settings),
                 K73 = H.extend(L73.settings, D4, q73),
                 D73 = K73.timeFormat.split(':'),
                 Z73 = K73.timeFormat.match(/a/i),
                 b73 = Z73 ? Z73[0] == 'a' ? K73.amText : K73.amText.toUpperCase() : '',
                 R73 = Z73 ? Z73[0] == 'a' ? K73.pmText : K73.pmText.toUpperCase() : '',
                 z73 = 0,
                 G73 = K73.min ? '' + K73.min.getHours() : '',
                 N73 = K73.max ? '' + K73.max.getHours() : '',
                 F73 = K73.min ? '' + (K73.min.getMinutes() < 10 ? '0' + K73.min.getMinutes() : K73.min.getMinutes()) : '',
                 V73 = K73.max ? '' + (K73.max.getMinutes() < 10 ? '0' + K73.max.getMinutes() : K73.max.getMinutes()) : '',
                 X73 = K73.min ? '' + (K73.min.getSeconds() < 10 ? '0' + K73.min.getSeconds() : K73.min.getSeconds()) : '',
                 u73 = K73.max ? '' + (K73.max.getSeconds() < 10 ? '0' + K73.max.getSeconds() : K73.max.getSeconds()) : '';
             K73.min ? K73.min.setFullYear(2014, 7, 20) : '';
             K73.max ? K73.max.setFullYear(2014, 7, 20) : '';
             return {
                 placeholder: '-',
                 allowLeadingZero: true,
                 template: (D73.length == 3 ? 'dd:dd:dd' : D73.length == 2 ? 'dd:dd' : 'dd') + (Z73 ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ''),
                 leftKey: Z73 ? {
                     text: b73,
                     variable: 'ampm:' + b73,
                     value: '00'
                 } : {
                     text: ':00',
                     value: '00'
                 },
                 rightKey: Z73 ? {
                     text: R73,
                     variable: 'ampm:' + R73,
                     value: '00'
                 } : {
                     text: ':30',
                     value: '30'
                 },
                 parseValue: function y73(P43) {
                     var Q73, k73, r73 = P43 || K73.defaultValue,
                         m73 = [];
                     if (r73) {
                         r73 = r73 + '';
                         k73 = r73.match(/\d/g);
                         if (k73) {
                             for (Q73 = 0; Q73 < k73.length; Q73++) {
                                 m73.push(+k73[Q73]);
                             }
                         }
                         if (Z73) {
                             m73.push('ampm:' + (r73.match(new RegExp(K73.pmText, 'gi')) ? R73 : b73));
                         }
                     }
                     return m73;
                 },
                 formatValue: function d43(C43, B43) {
                     return E73(C43, B43);
                 },
                 validate: function Y43(w43) {
                     var h43 = w43.values,
                         M43 = w43.variables,
                         H43 = E73(h43, M43),
                         A43 = h43.length >= 3 ? new Date(2014, 7, 20, '' + h43[0] + (h43.length % 2 === 0 ? h43[1] : ''), '' + h43[h43.length % 2 === 0 ? 2 : 1] + h43[h43.length % 2 === 0 ? 3 : 2]) : '';
                     return {
                         disabled: e73(h43),
                         length: z73,
                         invalid: (Z73 ? !new RegExp('^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9])' + ' (?:' + K73.amText + '|' + K73.pmText + ')$', 'i').test(H43) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(H43)) || (K73.invalid ? L73._indexOf(K73.invalid, A43) != -1 : false) || !((K73.min ? K73.min <= A43 : true) && (K73.max ? A43 <= K73.max : true))
                     };
                 }
             };
         };
         var F4 = {
             dateOrder: 'mdy',
             dateFormat: 'mm/dd/yy',
             delimiter: '/'
         };
         b1.date = function(z43) {
             function E43(c43) {
                 return c43 % 4 === 0 && c43 % 100 !== 0 || c43 % 400 === 0;
             }

             function e43(a43) {
                 var W43, p43, T43, i43, o43, O43 = [],
                     x43 = a43[j43 + 3] !== undefined ? '' + a43[j43] + a43[j43 + 1] + a43[j43 + 2] + a43[j43 + 3] : '',
                     S43 = a43[K43 + 1] !== undefined ? '' + a43[K43] + a43[K43 + 1] : '',
                     s43 = a43[G43 + 1] !== undefined ? '' + a43[G43] + a43[G43 + 1] : '',
                     I43 = '' + U43.getMaxDayOfMonth(x43 || 2012, S43 - 1 || 0),
                     n43 = V43 === x43 && +X43 === +S43,
                     J43 = N43 === x43 && +D43 === +S43;
                 if (U43.invalid) {
                     for (W43 = 0; W43 < U43.invalid.length; ++W43) {
                         T43 = U43.getYear(U43.invalid[W43]);
                         i43 = U43.getMonth(U43.invalid[W43]);
                         o43 = U43.getDay(U43.invalid[W43]);
                         if (T43 == +x43 && i43 + 1 == +S43) {
                             if ((o43 < 10 ? 0 : +('' + o43)[0]) == +a43[G43]) {
                                 O43.push(o43 < 10 ? o43 : +('' + o43)[1]);
                                 break;
                             }
                         }
                         if (i43 + 1 == +S43 && o43 == +s43) {
                             if (('' + T43).substring(0, 3) == '' + a43[j43] + a43[j43 + 1] + a43[j43 + 2]) {
                                 O43.push(('' + T43)[3]);
                                 break;
                             }
                         }
                         if (T43 == +x43 && o43 == +s43) {
                             if ((i43 < 10 ? 0 : +('' + (i43 + 1))[0]) == +a43[K43]) {
                                 O43.push(i43 < 10 ? i43 : +('' + (i43 + 1))[1]);
                                 break;
                             }
                         }
                     }
                 }
                 if (s43 == '31' && (a43.length == K43 || a43.length == K43 + 1)) {
                     if (a43[K43] != 1) {
                         O43.push(2, 4, 6, 9, 11);
                     } else {
                         O43.push(1);
                     }
                 }
                 if (s43 == '30' && a43[K43] === 0 && a43.length <= K43 + 1) {
                     O43.push(2);
                 }
                 if (a43.length == K43) {
                     for (W43 = N43 === x43 && +D43 < 10 ? 1 : 2; W43 <= 9; ++W43) {
                         O43.push(W43);
                     }
                     if (V43 === x43 && +X43 >= 10) {
                         O43.push(0);
                     }
                 }
                 if (a43.length == K43 + 1) {
                     if (a43[K43] == 1) {
                         for (W43 = N43 === x43 ? +D43[1] + 1 : 3; W43 <= 9; ++W43) {
                             O43.push(W43);
                         }
                         if (V43 == x43) {
                             for (W43 = 0; W43 < +X43[1]; ++W43) {
                                 O43.push(W43);
                             }
                         }
                     }
                     if (a43[K43] === 0) {
                         O43.push(0);
                         if (N43 === x43 || V43 === x43) {
                             for (W43 = N43 === x43 ? +s43 > +R43 ? +D43 : +D43 + 1 : 0; W43 <= (V43 === x43 ? +s43 < +F43 ? +X43 - 1 : +X43 - 1 : 9); ++W43) {
                                 O43.push(W43);
                             }
                         }
                     }
                 }
                 if (a43.length == G43) {
                     for (W43 = J43 ? (+R43 > 10 ? +R43[0] : 0) + 1 : +I43[0] + 1; W43 <= 9; ++W43) {
                         O43.push(W43);
                     }
                     if (n43) {
                         for (W43 = 0; W43 < (+F43 < 10 ? 0 : F43[0]); ++W43) {
                             O43.push(W43);
                         }
                     }
                 }
                 if (a43.length == G43 + 1) {
                     if (a43[G43] >= 3 || S43 == '02') {
                         for (W43 = +I43[1] + 1; W43 <= 9; ++W43) {
                             O43.push(W43);
                         }
                     }
                     if (J43 && +R43[0] == a43[G43]) {
                         for (W43 = +R43[1] + 1; W43 <= 9; ++W43) {
                             O43.push(W43);
                         }
                     }
                     if (n43 && F43[0] == a43[G43]) {
                         for (W43 = 0; W43 < +F43[1]; ++W43) {
                             O43.push(W43);
                         }
                     }
                     if (a43[G43] === 0) {
                         O43.push(0);
                         if (J43 || n43) {
                             for (W43 = J43 ? +R43 + 1 : 1; W43 <= (n43 ? +F43 - 1 : 9); ++W43) {
                                 O43.push(W43);
                             }
                         }
                     }
                 }
                 if (a43[j43 + 2] !== undefined && S43 == '02' && s43 == '29') {
                     for (p43 = +('' + a43[j43] + a43[j43 + 1] + a43[j43 + 2] + 0); p43 <= +('' + a43[j43] + a43[j43 + 1] + a43[j43 + 2] + 9); ++p43) {
                         O43.push(!E43(p43) ? p43 % 10 : '');
                     }
                 }
                 if (a43.length == j43) {
                     if (U43.min) {
                         for (W43 = 0; W43 < +V43[0]; ++W43) {
                             O43.push(W43);
                         }
                     }
                     if (U43.max) {
                         for (W43 = +N43[0] + 1; W43 <= 9; ++W43) {
                             O43.push(W43);
                         }
                     }
                     O43.push(0);
                 }
                 if (U43.min || U43.max) {
                     for (p43 = 1; p43 < 4; ++p43) {
                         if (a43.length == j43 + p43) {
                             if (a43[j43 + p43 - 1] == +V43[p43 - 1] && (p43 == 3 ? a43[j43 + p43 - 2] == +V43[p43 - 2] : true)) {
                                 for (W43 = 0; W43 < +V43[p43] + (p43 == 3 && a43[K43 + 1] && +X43 > +S43 ? 1 : 0); ++W43) {
                                     O43.push(W43);
                                 }
                             }
                             if (a43[j43 + p43 - 1] == +N43[p43 - 1] && (p43 == 3 ? a43[j43 + p43 - 2] == +N43[p43 - 2] : true)) {
                                 for (W43 = +N43[p43] + (p43 == 3 && +D43 < +S43 ? 0 : 1); W43 <= 9; ++W43) {
                                     O43.push(W43);
                                 }
                             }
                         }
                     }
                 }
                 return O43;
             }

             function L43(g43) {
                 return new Date(+('' + g43[j43] + g43[j43 + 1] + g43[j43 + 2] + g43[j43 + 3]), +('' + g43[K43] + g43[K43 + 1]) - 1, +('' + g43[G43] + g43[G43 + 1]));
             }
             var j43, K43, G43, b43, u43 = [],
                 q43 = H.extend({}, z43.settings),
                 U43 = H.extend(z43.settings, R.defaults, F4, q43),
                 Z43 = U43.dateOrder,
                 X43 = U43.min ? '' + (U43.getMonth(U43.min) + 1) : 0,
                 D43 = U43.max ? '' + (U43.getMonth(U43.max) + 1) : 0,
                 F43 = U43.min ? '' + U43.getDay(U43.min) : 0,
                 R43 = U43.max ? '' + U43.getDay(U43.max) : 0,
                 V43 = U43.min ? '' + U43.getYear(U43.min) : 0,
                 N43 = U43.max ? '' + U43.getYear(U43.max) : 0;
             Z43 = Z43.replace(/y+/gi, 'yyyy');
             Z43 = Z43.replace(/m+/gi, 'mm');
             Z43 = Z43.replace(/d+/gi, 'dd');
             j43 = Z43.toUpperCase().indexOf('Y');
             K43 = Z43.toUpperCase().indexOf('M');
             G43 = Z43.toUpperCase().indexOf('D');
             Z43 = '';
             u43.push({
                 val: j43,
                 n: 'yyyy'
             }, {
                 val: K43,
                 n: 'mm'
             }, {
                 val: G43,
                 n: 'dd'
             });
             u43.sort(function(v43, t43) {
                 return v43.val - t43.val;
             });
             H.each(u43, function(f43, l43) {
                 Z43 += l43.n;
             });
             j43 = Z43.indexOf('y');
             K43 = Z43.indexOf('m');
             G43 = Z43.indexOf('d');
             Z43 = '';
             for (b43 = 0; b43 < 8; ++b43) {
                 Z43 += 'd';
                 if (b43 + 1 == j43 || b43 + 1 == K43 || b43 + 1 == G43) {
                     Z43 += U43.delimiter;
                 }
             }
             z43.getVal = function(y43) {
                 return z43._hasValue || y43 ? L43(z43.getArrayVal(y43)) : null;
             };
             return {
                 placeholder: '-',
                 fill: 'ltr',
                 allowLeadingZero: true,
                 template: Z43,
                 parseValue: function r43(d83) {
                     var m43, Q43 = [],
                         P83 = d83 || U43.defaultValue,
                         k43 = R.parseDate(U43.dateFormat, P83, U43);
                     if (P83) {
                         for (m43 = 0; m43 < u43.length; ++m43) {
                             if (/m/i.test(u43[m43].n)) {
                                 Q43 = Q43.concat(((U43.getMonth(k43) < 9 ? '0' : '') + (U43.getMonth(k43) + 1)).split(''));
                             } else if (/d/i.test(u43[m43].n)) {
                                 Q43 = Q43.concat(((U43.getDay(k43) < 10 ? '0' : '') + U43.getDay(k43)).split(''));
                             } else {
                                 Q43 = Q43.concat((U43.getYear(k43) + '').split(''));
                             }
                         }
                     }
                     return Q43;
                 },
                 formatValue: function C83(B83) {
                     return R.formatDate(U43.dateFormat, L43(B83), U43);
                 },
                 validate: function Y83(H83) {
                     var A83 = H83.values,
                         h83 = L43(A83);
                     return {
                         disabled: e43(A83),
                         invalid: !(h83 != 'Invalid Date' && (U43.min ? U43.min <= h83 : true) && (U43.max ? h83 <= U43.max : true)) || (U43.invalid ? z43._indexOf(U43.invalid, h83) != -1 : false)
                     };
                 }
             };
         };
         var M = P.$;
         var H7 = P.presets.scroller;
         var Q = P.util.datetime;
         var L4 = P.util;
         var q4 = L4.testTouch;
         var E4 = {
             autoCorrect: true,
             showSelector: true,
             minRange: 1,
             rangeTap: true,
             fromText: 'Start',
             toText: 'End'
         };
         P.presetShort('range');
         H7.range = function(M83) {
             function i83(g83, y83) {
                 if (g83) {
                     g83.setFullYear(y83.getFullYear());
                     g83.setMonth(y83.getMonth());
                     g83.setDate(y83.getDate());
                 }
             }

             function I83(r83) {
                 M83._startDate = V83 = K83;
                 M83._endDate = u83 = U83;
                 if (w83.startInput) {
                     M(w83.startInput).val(D83);
                     if (r83) {
                         M(w83.startInput).trigger('change');
                     }
                 }
                 if (w83.endInput) {
                     M(w83.endInput).val(X83);
                     if (r83) {
                         M(w83.endInput).trigger('change');
                     }
                 }
             }

             function p83(k83, m83) {
                 var Q83 = true;
                 if (k83 && K83 && U83) {
                     if (U83 - K83 > w83.maxRange - 1) {
                         if (j83) {
                             K83 = new Date(U83 - w83.maxRange + 1);
                         } else {
                             U83 = new Date(+K83 + w83.maxRange - 1);
                         }
                     }
                     if (U83 - K83 < w83.minRange - 1) {
                         if (j83) {
                             K83 = new Date(U83 - w83.minRange + 1);
                         } else {
                             U83 = new Date(+K83 + w83.minRange - 1);
                         }
                     }
                 }
                 if (!K83 || !U83) {
                     Q83 = false;
                 }
                 if (m83) {
                     J83();
                 }
                 return Q83;
             }

             function T83() {
                 return K83 && U83 ? Math.max(1, Math.round((new Date(U83).setHours(0, 0, 0, 0) - new Date(K83).setHours(0, 0, 0, 0)) / 86400000) + 1) : 0;
             }

             function n83(P23) {
                 P23.addClass('mbsc-range-btn-sel').attr('aria-checked', 'true').find('.mbsc-range-btn').addClass(t83);
             }

             function O83() {
                 if (W83 && Z83) {
                     M('.mbsc-range-btn-c', Z83).removeClass('mbsc-range-btn-sel').removeAttr('aria-checked').find('.mbsc-range-btn', Z83).removeClass(t83);
                     n83(M('.mbsc-range-btn-c', Z83).eq(j83));
                 }
             }

             function J83() {
                 var d23, h23, C23, A23, B23, Y23 = 0,
                     H23 = G83 || !j83 ? ' mbsc-cal-day-hl mbsc-cal-sel-start' : ' mbsc-cal-sel-start',
                     w23 = G83 || j83 ? ' mbsc-cal-day-hl mbsc-cal-sel-end' : ' mbsc-cal-sel-end';
                 D83 = K83 ? Q.formatDate(N83, K83, w83) : '';
                 X83 = U83 ? Q.formatDate(N83, U83, w83) : '';
                 if (Z83) {
                     M('.mbsc-range-btn-v-start', Z83).html(D83 || '&nbsp;');
                     M('.mbsc-range-btn-v-end', Z83).html(X83 || '&nbsp;');
                     d23 = K83 ? new Date(K83) : null;
                     C23 = U83 ? new Date(U83) : null;
                     if (!d23 && C23) {
                         d23 = new Date(C23);
                     }
                     if (!C23 && d23) {
                         C23 = new Date(d23);
                     }
                     B23 = j83 ? C23 : d23;
                     M('.mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i', Z83).removeClass(t83);
                     M('.mbsc-cal-table .mbsc-cal-day-hl', Z83).removeClass(E83);
                     M('.mbsc-cal-table .mbsc-cal-day-sel', Z83).removeClass('mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end').removeAttr('aria-selected');
                     if (d23 && C23) {
                         h23 = d23.setHours(0, 0, 0, 0);
                         A23 = C23.setHours(0, 0, 0, 0);
                         while (C23 >= d23 && Y23 < 84) {
                             M('.mbsc-cal-day[data-full="' + B23.getFullYear() + '-' + B23.getMonth() + '-' + B23.getDate() + '"]', Z83).addClass('mbsc-cal-day-sel' + (B23.getTime() === h23 ? H23 : '') + (B23.getTime() === A23 ? w23 : '')).attr('aria-selected', 'true').find('.mbsc-cal-day-i ').addClass(t83);
                             B23.setDate(B23.getDate() + (j83 ? -1 : 1));
                             Y23++;
                         }
                     }
                 }
             }

             function f83(M23, U23) {
                 return {
                     h: M23 ? M23.getHours() : U23 ? 23 : 0,
                     i: M23 ? M23.getMinutes() : U23 ? 59 : 0,
                     s: M23 ? M23.getSeconds() : U23 ? 59 : 0
                 };
             }
             var z83, Z83, b83, N83, c83, F83, L83, D83, X83, K83, q83, U83, v83, s83, o83, S83, W83, V83 = M83._startDate,
                 u83 = M83._endDate,
                 j83 = 0,
                 e83 = new Date(),
                 x83 = M.extend({}, M83.settings),
                 w83 = M.extend(M83.settings, E4, x83),
                 l83 = w83.anchor,
                 G83 = w83.rangeTap,
                 t83 = w83.activeClass || '',
                 a83 = 'mbsc-fr-btn-d ' + (w83.disabledClass || ''),
                 E83 = 'mbsc-cal-day-hl',
                 R83 = w83.defaultValue === null ? [] : w83.defaultValue || [new Date(e83.setHours(0, 0, 0, 0)), new Date(e83.getFullYear(), e83.getMonth(), e83.getDate() + 6, 23, 59, 59, 999)];
             if (G83) {
                 w83.tabs = true;
             }
             c83 = H7.calbase.call(this, M83);
             z83 = M.extend({}, c83);
             N83 = M83.format;
             s83 = w83.controls.join('') === 'time';
             W83 = w83.controls.length == 1 && w83.controls[0] == 'calendar' ? w83.showSelector : true;
             if (w83.startInput) {
                 o83 = M(w83.startInput).prop('readonly');
                 M83.attachShow(M(w83.startInput).prop('readonly', true), function() {
                     j83 = 0;
                     w83.anchor = l83 || M(w83.startInput);
                 });
             }
             if (w83.endInput) {
                 S83 = M(w83.endInput).prop('readonly');
                 M83.attachShow(M(w83.endInput).prop('readonly', true), function() {
                     j83 = 1;
                     w83.anchor = l83 || M(w83.endInput);
                 });
             }
             M83.setVal = function(Z23, N23, V23, G23, u23) {
                 var j23 = Z23 || [],
                     K23 = Z23;
                 if (j23[0] === undefined || j23[0] === null || j23[0].getTime) {
                     L83 = true;
                     K83 = j23[0] || null;
                     D83 = K83 ? Q.formatDate(N83, K83, w83) : '';
                     if (!j83) {
                         K23 = z83.parseValue(D83, M83);
                     }
                 }
                 if (j23[1] === undefined || j23[1] === null || j23[1].getTime) {
                     L83 = true;
                     U83 = j23[1] || null;
                     X83 = U83 ? Q.formatDate(N83, U83, w83) : '';
                     if (j83) {
                         K23 = z83.parseValue(X83, M83);
                     }
                 }
                 if (!G23) {
                     M83._startDate = V83 = K83;
                     M83._endDate = u83 = U83;
                 }
                 M83._setVal(K23, N23, V23, G23, u23);
             };
             M83.getVal = function(X23) {
                 return X23 ? [K83, U83] : M83._hasValue ? [V83, u83] : null;
             };
             M83.getDayProps = function(F23) {
                 var D23 = K83 ? new Date(K83.getFullYear(), K83.getMonth(), K83.getDate()) : null,
                     R23 = U83 ? new Date(U83.getFullYear(), U83.getMonth(), U83.getDate()) : null;
                 return {
                     selected: D23 && R23 && F23 >= D23 && F23 <= U83,
                     cssClass: ((G83 || !j83) && D23 && D23.getTime() === F23.getTime() || (G83 || j83) && R23 && R23.getTime() === F23.getTime() ? E83 : '') + (D23 && D23.getTime() === F23.getTime() ? ' mbsc-cal-sel-start' : '') + (R23 && R23.getTime() === F23.getTime() ? ' mbsc-cal-sel-end' : '')
                 };
             };
             M83.setActiveDate = function(z23) {
                 var b23;
                 j83 = z23 == 'start' ? 0 : 1;
                 b23 = z23 == 'start' ? K83 : U83;
                 if (M83.isVisible()) {
                     O83();
                     if (!G83) {
                         M('.mbsc-cal-table .mbsc-cal-day-hl', Z83).removeClass(E83);
                         if (b23) {
                             M('.mbsc-cal-day[data-full="' + b23.getFullYear() + '-' + b23.getMonth() + '-' + b23.getDate() + '"]', Z83).addClass(E83);
                         }
                     }
                     if (b23) {
                         F83 = true;
                         M83.setDate(b23, false, 1000, true);
                     }
                 }
             };
             M83.getValue = M83.getVal;
             M.extend(c83, {
                 highlight: false,
                 outerMonthChange: false,
                 formatValue: function L23() {
                     return D83 + (w83.endInput ? '' : X83 ? ' - ' + X83 : '');
                 },
                 parseValue: function q23(e23) {
                     var E23 = e23 ? e23.split(' - ') : [];
                     w83.defaultValue = R83[1];
                     if (w83.endInput) {
                         u83 = M(w83.endInput).val() ? Q.parseDate(N83, M(w83.endInput).val(), w83) : R83[1];
                     } else {
                         u83 = E23[1] ? Q.parseDate(N83, E23[1], w83) : R83[1];
                     }
                     w83.defaultValue = R83[0];
                     if (w83.startInput) {
                         V83 = M(w83.startInput).val() ? Q.parseDate(N83, M(w83.startInput).val(), w83) : R83[0];
                     } else {
                         V83 = E23[0] ? Q.parseDate(N83, E23[0], w83) : R83[0];
                     }
                     w83.defaultValue = R83[j83];
                     D83 = V83 ? Q.formatDate(N83, V83, w83) : '';
                     X83 = u83 ? Q.formatDate(N83, u83, w83) : '';
                     M83._startDate = V83;
                     M83._endDate = u83;
                     return z83.parseValue(j83 ? X83 : D83, M83);
                 },
                 onFill: function v23(t23) {
                     I83(t23.change);
                 },
                 onBeforeClose: function l23(f23) {
                     if (f23.button === 'set' && !p83(true, true)) {
                         M83.setActiveDate(j83 ? 'start' : 'end');
                         return false;
                     }
                 },
                 onHide: function c23() {
                     z83.onHide.call(M83);
                     j83 = 0;
                     Z83 = null;
                     w83.anchor = l83;
                 },
                 onClear: function W23() {
                     if (G83) {
                         j83 = 0;
                     }
                 },
                 onBeforeShow: function a23() {
                     w83.headerText = false;
                     K83 = V83;
                     U83 = u83;
                     q83 = f83(K83, 0);
                     v83 = f83(U83, 1);
                     if (w83.counter) {
                         w83.headerText = function() {
                             var O23 = T83();
                             return (O23 > 1 ? w83.selectedPluralText || w83.selectedText : w83.selectedText).replace(/{count}/, O23);
                         };
                     }
                     L83 = true;
                 },
                 onMarkupReady: function p23(x23) {
                     var S23;
                     if (K83) {
                         F83 = true;
                         M83.setDate(K83, false, 0, true);
                         K83 = M83.getDate(true);
                     }
                     if (U83) {
                         F83 = true;
                         M83.setDate(U83, false, 0, true);
                         U83 = M83.getDate(true);
                     }
                     if (j83 && U83 || !j83 && K83) {
                         F83 = true;
                         M83.setDate(j83 ? U83 : K83, false, 0, true);
                     }
                     J83();
                     z83.onMarkupReady.call(this, x23);
                     Z83 = M(x23.target);
                     Z83.addClass('mbsc-range');
                     if (W83) {
                         S23 = '<div class="mbsc-range-btn-t" role="radiogroup">' + '<div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + w83.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (D83 || '&nbsp;') + '</div></div></div>' + '<div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + w83.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (X83 || '&nbsp;') + '</div></div></div>' + '</div>';
                         M('.mbsc-cal-tabs', Z83).before(S23);
                         O83();
                     }
                     M('.mbsc-range-btn-c', Z83).on('touchstart click', function(i23) {
                         if (q4(i23, this)) {
                             M83.showMonthView();
                             M83.setActiveDate(M(this).index() ? 'end' : 'start');
                         }
                     });
                 },
                 onDayChange: function o23(s23) {
                     s23.active = j83 ? 'end' : 'start';
                     b83 = true;
                 },
                 onSetDate: function J23(I23) {
                     var T23 = I23.date,
                         n23 = M83.order;
                     if (!F83) {
                         if (n23.h === undefined) {
                             T23.setHours(j83 ? 23 : 0);
                         }
                         if (n23.i === undefined) {
                             T23.setMinutes(j83 ? 59 : 0);
                         }
                         if (n23.s === undefined) {
                             T23.setSeconds(j83 ? 59 : 0);
                         }
                         T23.setMilliseconds(j83 ? 999 : 0);
                         if (!L83 || b83) {
                             if (G83 && b83) {
                                 if (j83 == 1 && T23 < K83) {
                                     j83 = 0;
                                 }
                                 if (j83) {
                                     T23.setHours(v83.h, v83.i, v83.s, 999);
                                 } else {
                                     T23.setHours(q83.h, q83.i, q83.s, 0);
                                 }
                             }
                             if (j83) {
                                 U83 = new Date(T23);
                                 v83 = f83(U83);
                             } else {
                                 K83 = new Date(T23);
                                 q83 = f83(K83);
                             }
                             if (s83) {
                                 i83(K83, T23);
                                 i83(U83, T23);
                             }
                             if (G83 && b83 && !j83) {
                                 U83 = null;
                             }
                         }
                     }
                     M83._isValid = p83(L83 || b83 || w83.autoCorrect, !F83);
                     I23.active = j83 ? 'end' : 'start';
                     if (!F83 && G83) {
                         if (b83) {
                             j83 = j83 ? 0 : 1;
                         }
                         O83();
                     }
                     if (M83.isVisible()) {
                         if (M83._isValid) {
                             M('.mbsc-fr-btn-s .mbsc-fr-btn', M83._markup).removeClass(a83);
                         } else {
                             M('.mbsc-fr-btn-s .mbsc-fr-btn', M83._markup).addClass(a83);
                         }
                     }
                     b83 = false;
                     L83 = false;
                     F83 = false;
                 },
                 onTabChange: function g23(y23) {
                     if (y23.tab != 'calendar') {
                         M83.setDate(j83 ? U83 : K83, false, 1000, true);
                     }
                     p83(true, true);
                 },
                 onDestroy: function r23() {
                     M(w83.startInput).prop('readonly', o83);
                     M(w83.endInput).prop('readonly', S83);
                 }
             });
             return c83;
         };
         var S = P.$;
         var v4 = {
             inputClass: '',
             values: 5,
             order: 'desc',
             style: 'icon',
             invalid: [],
             icon: {
                 filled: 'star3',
                 empty: 'star3'
             }
         };
         P.presetShort('rating');
         P.presets.scroller.rating = function(Y53) {
             var X53 = S.extend({}, Y53.settings),
                 Q23 = S.extend(Y53.settings, v4, X53),
                 P53 = S(this),
                 j53 = this.id + '_dummy',
                 N53 = S('label[for="' + this.id + '"]').attr('for', j53),
                 D53 = Q23.label !== undefined ? Q23.label : N53.length ? N53.text() : P53.attr('name'),
                 w53 = Q23.defaultValue,
                 G53 = [
                     []
                 ],
                 V53 = {
                     data: [],
                     label: D53,
                     circular: false
                 },
                 A53 = {},
                 m23 = [],
                 d53, U53 = false,
                 k23, B53, H53, K53, Z53, u53, C53, M53, F53, h53 = Q23.style === 'grade' ? 'circle' : 'icon';
             if (P53.is('select')) {
                 Q23.values = {};
                 S('option', P53).each(function() {
                     Q23.values[S(this).val()] = S(this).text();
                 });
                 S('#' + j53).remove();
             }
             if (S.isArray(Q23.values)) {
                 for (k23 = 0; k23 < Q23.values.length; k23++) {
                     C53 = +Q23.values[k23];
                     if (isNaN(C53)) {
                         C53 = k23 + 1;
                         U53 = true;
                     }
                     m23.push({
                         order: C53,
                         key: Q23.values[k23],
                         value: Q23.values[k23]
                     });
                 }
             } else if (S.isPlainObject(Q23.values)) {
                 k23 = 1;
                 U53 = true;
                 for (M53 in Q23.values) {
                     C53 = +M53;
                     if (isNaN(C53)) {
                         C53 = k23;
                     }
                     m23.push({
                         order: C53,
                         key: M53,
                         value: Q23.values[M53]
                     });
                     k23++;
                 }
             } else {
                 for (k23 = 1; k23 <= Q23.values; k23++) {
                     m23.push({
                         order: k23,
                         key: k23,
                         value: k23
                     });
                 }
             }
             if (Q23.showText === undefined && U53) {
                 Q23.showText = true;
             }
             if (Q23.icon.empty === undefined) {
                 Q23.icon.empty = Q23.icon.filled;
             }
             m23.sort(function(R53, b53) {
                 return Q23.order == 'desc' ? b53.order - R53.order : R53.order - b53.order;
             });
             F53 = Q23.order == 'desc' ? m23[0].order : m23[m23.length - 1].order;
             for (k23 = 0; k23 < m23.length; k23++) {
                 u53 = m23[k23].order;
                 K53 = m23[k23].key;
                 Z53 = m23[k23].value;
                 H53 = '';
                 for (B53 = 1; B53 < u53 + 1; B53++) {
                     H53 += '<span class="mbsc-rating-' + h53 + (h53 === 'circle' ? '' : ' mbsc-ic mbsc-ic-' + Q23.icon.filled) + ' ">' + (h53 == 'circle' ? B53 : ' ') + '</span>';
                 }
                 for (B53 = u53 + 1; B53 <= F53; B53++) {
                     H53 += '<span class="mbsc-rating-' + h53 + (h53 === 'circle' ? ' mbsc-rating-circle-unf' : ' mbsc-ic mbsc-ic-' + (Q23.icon.empty ? Q23.icon.empty + ' mbsc-rating-icon-unf' : '') + (Q23.icon.empty === Q23.icon.filled ? ' mbsc-rating-icon-same' : '')) + '"></span>';
                 }
                 if (w53 === undefined) {
                     w53 = K53;
                 }
                 H53 += Q23.showText ? '<span class="mbsc-rating-txt">' + Z53 + '</span>' : '';
                 V53.data.push({
                     value: K53,
                     display: H53,
                     label: Z53
                 });
                 A53[K53] = Z53;
             }
             if (P53.is('select')) {
                 d53 = S('<input type="text" id="' + j53 + '" value="' + A53[P53.val()] + '" class="' + Q23.inputClass + '" placeholder="' + (Q23.placeholder || '') + '" readonly />').insertBefore(P53);
             }
             G53[0].push(V53);
             if (d53) {
                 Y53.attachShow(d53);
             }
             if (P53.is('select')) {
                 P53.hide().closest('.ui-field-contain').trigger('create');
             }
             Y53.getVal = function(L53) {
                 var z53 = Y53._hasValue ? Y53[L53 ? '_tempWheelArray' : '_wheelArray'][0] : null;
                 return P.util.isNumeric(z53) ? +z53 : z53;
             };
             return {
                 anchor: d53,
                 wheels: G53,
                 headerText: false,
                 compClass: 'mbsc-rating',
                 setOnTap: true,
                 formatValue: function q53(E53) {
                     return A53[E53[0]];
                 },
                 parseValue: function e53(t53) {
                     var v53;
                     for (v53 in A53) {
                         if (d53 && v53 == t53 || !d53 && A53[v53] == t53) {
                             return [v53];
                         }
                     }
                     return [w53];
                 },
                 validate: function l53() {
                     return {
                         disabled: [Q23.invalid]
                     };
                 },
                 onFill: function f53(c53) {
                     if (d53) {
                         d53.val(c53.valueText);
                         P53.val(Y53._tempWheelArray[0]);
                     }
                 },
                 onDestroy: function W53() {
                     if (d53) {
                         d53.remove();
                     }
                     P53.show();
                 }
             };
         };
         var t4 = 0;
         P.util.getJson = U7;
         var X = P.$;
         var z6 = P.util;
         var k1 = z6.isString;
         var p4 = {
             inputClass: '',
             invalid: [],
             rtl: false,
             showInput: true,
             groupLabel: 'Groups',
             dataHtml: 'html',
             dataText: 'text',
             dataValue: 'value',
             dataGroup: 'group',
             dataDisabled: 'disabled',
             filterPlaceholderText: 'Type to filter',
             filterEmptyText: 'No results',
             filterClearIcon: 'material-close'
         };
         P.presetShort('select');
         P.presets.scroller.select = function(g53) {
             function q93(r93) {
                 var g93, C03, y93, n93, d03, I93, m93 = 0,
                     Q93 = 0,
                     k93 = {};
                 r53 = {};
                 h93 = {};
                 m53 = [];
                 X93 = [];
                 w93.length = 0;
                 if (u93) {
                     X.each(G93, function(Y03, B03) {
                         d03 = B03[I53.dataText];
                         C03 = B03[I53.dataHtml];
                         I93 = B03[I53.dataValue];
                         y93 = B03[I53.dataGroup];
                         n93 = {
                             value: I93,
                             html: C03,
                             text: d03,
                             index: Y03
                         };
                         r53[I93] = n93;
                         if (!r93 || v93(d03, r93)) {
                             m53.push(n93);
                             if (j93) {
                                 if (k93[y93] === undefined) {
                                     g93 = {
                                         text: y93,
                                         value: Q93,
                                         options: [],
                                         index: Q93
                                     };
                                     h93[Q93] = g93;
                                     k93[y93] = Q93;
                                     X93.push(g93);
                                     Q93++;
                                 } else {
                                     g93 = h93[k93[y93]];
                                 }
                                 if (M93) {
                                     n93.index = g93.options.length;
                                 }
                                 n93.group = k93[y93];
                                 g93.options.push(n93);
                             }
                             if (B03[I53.dataDisabled]) {
                                 w93.push(I93);
                             }
                         }
                     });
                 } else {
                     if (j93) {
                         var P03 = true;
                         X('optgroup', Q53).each(function(h03) {
                             h93[h03] = {
                                 text: this.label,
                                 value: h03,
                                 options: [],
                                 index: h03
                             };
                             P03 = true;
                             X('option', this).each(function(A03) {
                                 n93 = {
                                     value: this.value,
                                     text: this.text,
                                     index: M93 ? A03 : m93++,
                                     group: h03
                                 };
                                 r53[this.value] = n93;
                                 if (!r93 || v93(this.text, r93)) {
                                     if (P03) {
                                         X93.push(h93[h03]);
                                         P03 = false;
                                     }
                                     m53.push(n93);
                                     h93[h03].options.push(n93);
                                     if (this.disabled) {
                                         w93.push(this.value);
                                     }
                                 }
                             });
                         });
                     } else {
                         X('option', Q53).each(function(H03) {
                             n93 = {
                                 value: this.value,
                                 text: this.text,
                                 index: H03
                             };
                             r53[this.value] = n93;
                             if (!r93 || v93(this.text, r93)) {
                                 m53.push(n93);
                                 if (this.disabled) {
                                     w93.push(this.value);
                                 }
                             }
                         });
                     }
                 }
                 if (m53.length) {
                     f93 = m53[0].value;
                 }
                 if (t93) {
                     m53 = [];
                     m93 = 0;
                     X.each(h93, function(M03, w03) {
                         if (w03.options.length) {
                             I93 = '__group' + M03;
                             n93 = {
                                 text: w03.text,
                                 value: I93,
                                 group: M03,
                                 index: m93++,
                                 cssClass: 'mbsc-sel-gr'
                             };
                             r53[I93] = n93;
                             m53.push(n93);
                             w93.push(n93.value);
                             X.each(w03.options, function(j03, U03) {
                                 U03.index = m93++;
                                 m53.push(U03);
                             });
                         }
                     });
                 }
                 if (V93) {
                     if (m53.length) {
                         V93.removeClass('mbsc-sel-empty-v');
                     } else {
                         V93.addClass('mbsc-sel-empty-v');
                     }
                 }
             }

             function W93(Z03, N03, V03) {
                 var K03, G03 = [];
                 for (K03 = 0; K03 < Z03.length; K03++) {
                     G03.push({
                         value: Z03[K03].value,
                         display: Z03[K03].html || Z03[K03].text,
                         cssClass: Z03[K03].cssClass
                     });
                 }
                 return {
                     circular: false,
                     multiple: N03,
                     data: G03,
                     label: V03
                 };
             }

             function a93() {
                 return W93(X93, false, I53.groupLabel);
             }

             function E93() {
                 return W93(M93 ? h93[B93].options : m53, H93, l93);
             }

             function p93() {
                 var X03, D03, u03 = [
                     []
                 ];
                 if (d93) {
                     X03 = a93();
                     if (L93) {
                         u03[0][P93] = X03;
                     } else {
                         u03[P93] = [X03];
                     }
                 }
                 D03 = E93();
                 if (L93) {
                     u03[0][y53] = D03;
                 } else {
                     u03[y53] = [D03];
                 }
                 return u03;
             }

             function D93(F03) {
                 if (Y93) {
                     if (F03 && k1(F03)) {
                         F03 = F03.split(',');
                     }
                     if (X.isArray(F03)) {
                         F03 = F03[0];
                     }
                 }
                 k53 = F03 === undefined || F03 === null || F03 === '' || !r53[F03] ? f93 : F03;
                 if (d93) {
                     B93 = r53[k53] ? r53[k53].group : null;
                 }
             }

             function T93(b03, z03) {
                 var R03 = b03 ? g53._tempWheelArray : g53._hasValue ? g53._wheelArray : null;
                 return R03 ? I53.group && z03 ? R03 : R03[y53] : null;
             }

             function J93(e03) {
                 var L03, q03, E03 = [];
                 if (H93) {
                     for (L03 in g53._tempSelected[y53]) {
                         E03.push(b93[L03] || (r53[L03] ? r53[L03].text : ''));
                     }
                     return E03.join(', ');
                 }
                 q03 = e03[y53];
                 return r53[q03] ? r53[q03].text : '';
             }

             function o93() {
                 var v03 = g53.getVal(),
                     t03 = g53._tempValue;
                 if (!(I53.filter && I53.display == 'inline')) {
                     C93.val(t03);
                 }
                 Q53.val(v03);
             }

             function s93() {
                 var l03 = {};
                 l03[y53] = E93();
                 F93 = true;
                 g53.changeWheel(l03);
             }

             function v93(c03, f03) {
                 f03 = f03.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                 return c03.match(new RegExp(f03, 'ig'));
             }

             function S93(W03) {
                 return I53.data.dataField ? W03[I53.data.dataField] : I53.data.processResponse ? I53.data.processResponse(W03) : W03;
             }

             function x93(O03) {
                 var a03 = {};
                 q93(O03);
                 I53.wheels = p93();
                 D93(k53);
                 a03[y53] = E93();
                 g53._tempWheelArray[y53] = k53;
                 if (d93) {
                     a03[P93] = a93();
                     g53._tempWheelArray[P93] = B93;
                 }
                 if (g53._isVisible) {
                     g53.changeWheel(a03, 0, true);
                 }
             }
             var C93, G93, f93, c93, A93, B93, X93, h93, P93, Z93, k53, m53, y53, F93, b93 = {},
                 e93 = 1000,
                 Q53 = X(this),
                 i93 = X.extend({}, g53.settings),
                 I53 = X.extend(g53.settings, p4, i93),
                 V93 = X('<div class="mbsc-sel-empty">' + I53.filterEmptyText + '</div>'),
                 O93 = I53.readonly,
                 r53 = {},
                 z93 = I53.layout || (/top|bottom|inline/.test(I53.display) || I53.filter ? 'liquid' : ''),
                 L93 = z93 == 'liquid',
                 Y93 = z6.isNumeric(I53.select) ? I53.select : I53.select == 'multiple' || Q53.prop('multiple'),
                 H93 = Y93 || (I53.filter ? 1 : false),
                 N93 = this.id + '_dummy',
                 R93 = X('label[for="' + this.id + '"]').attr('for', N93),
                 l93 = I53.label !== undefined ? I53.label : R93.length ? R93.text() : Q53.attr('name'),
                 u93 = !!I53.data,
                 j93 = u93 ? !!I53.group : X('optgroup', Q53).length,
                 U93 = I53.group,
                 d93 = j93 && U93 && U93.groupWheel !== false,
                 M93 = j93 && U93 && d93 && U93.clustered === true,
                 t93 = j93 && (!U93 || U93.header !== false && !M93),
                 K93 = Q53.val() || (Y93 ? [] : ['']),
                 w93 = [];
             g53.setVal = function(p03, S03, i03, x03, o03) {
                 if (H93) {
                     if (p03 && !Y93) {
                         p03 = [p03];
                     }
                     if (p03 && k1(p03)) {
                         p03 = p03.split(',');
                     }
                     g53._tempSelected[y53] = z6.arrayToObject(p03);
                     if (!x03) {
                         g53._selected[y53] = z6.arrayToObject(p03);
                     }
                     p03 = p03 ? p03[0] : null;
                 }
                 g53._setVal(p03, S03, i03, x03, o03);
             };
             g53.getVal = function(J03, T03) {
                 if (H93) {
                     var s03 = z6.objectToArray(J03 ? g53._tempSelected[y53] : g53._selected[y53]);
                     return Y93 ? s03 : s03.length ? s03[0] : null;
                 }
                 return T93(J03, T03);
             };
             g53.refresh = function(n03, I03) {
                 if (n03) {
                     G93 = n03;
                 } else if (X.isArray(I53.data)) {
                     G93 = I53.data;
                 }
                 if (!n03 && Z93 && I03 === undefined) {
                     U7(I53.data.url, function(g03) {
                         G93 = S93(g03);
                         x93();
                     }, I53.data.dataType);
                 } else {
                     x93(I03);
                 }
             };
             if (!I53.invalid.length) {
                 I53.invalid = w93;
             }
             if (d93) {
                 P93 = 0;
                 y53 = 1;
             } else {
                 P93 = -1;
                 y53 = 0;
             }
             if (H93) {
                 if (Y93) {
                     Q53.prop('multiple', true);
                 }
                 if (K93 && k1(K93)) {
                     K93 = K93.split(',');
                 }
                 g53._selected[y53] = z6.arrayToObject(K93);
             }
             if (g53._dummyInput) {
                 g53._dummyInput.remove();
             }
             if (Q53.next().is('input.mbsc-control')) {
                 C93 = Q53.off('.mbsc-form').next().removeAttr('tabindex');
             } else {
                 if (I53.filter && I53.display == 'inline') {
                     g53._dummyInput = X('<div class="mbsc-sel-input-wrap"><input type="text" id="' + N93 + '" class="mbsc-control ' + I53.inputClass + '" readonly /></div>');
                 } else {
                     C93 = X('<input type="text" id="' + N93 + '" class="mbsc-control ' + I53.inputClass + '" readonly />');
                     g53._dummyInput = C93;
                 }
                 if (I53.showInput) {
                     g53._dummyInput.insertBefore(Q53);
                     if (!C93) {
                         C93 = g53._dummyInput.find('#' + N93);
                     }
                 }
             }
             g53.attachShow(C93.attr('placeholder', I53.placeholder || ''));
             Q53.addClass('mbsc-sel-hdn').attr('tabindex', -1);
             if (I53.filter) {
                 c93 = I53.filter.minLength || 0;
             }
             Z93 = I53.data && I53.data.url;
             if (Z93) {
                 g53.refresh();
             } else {
                 if (u93) {
                     G93 = I53.data;
                 }
                 q93();
                 D93(Q53.val());
             }
             return {
                 layout: z93,
                 headerText: false,
                 anchor: C93,
                 compClass: 'mbsc-sel' + (d93 ? ' mbsc-sel-gr-whl' : '') + (H93 ? ' mbsc-sel-multi' : ''),
                 setOnTap: d93 ? [false, true] : true,
                 formatValue: J93,
                 parseValue: function y03(r03) {
                     D93(r03 === undefined ? Q53.val() : r03);
                     return d93 ? [B93, k53] : [k53];
                 },
                 validate: function Q03(P6l) {
                     var m03 = P6l.index,
                         k03 = [];
                     k03[y53] = I53.invalid;
                     if (M93 && !F93 && m03 === undefined) {
                         s93();
                     }
                     F93 = false;
                     return {
                         disabled: k03
                     };
                 },
                 onRead: o93,
                 onFill: o93,
                 onMarkupReady: function d6l(w6l, Y6l) {
                     if (I53.filter) {
                         var h6l, H6l, C6l, A6l = X('.mbsc-fr-w', w6l.target),
                             B6l = X('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + I53.filterClearIcon + '"></span>');
                         if (I53.display == 'inline') {
                             h6l = C93;
                             C93.parent().find('.mbsc-sel-filter-clear').remove();
                         } else {
                             A6l.prepend('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>');
                             h6l = A6l.find('.mbsc-sel-filter-input');
                         }
                         A93 = '';
                         C6l = h6l[0];
                         h6l.prop('readonly', false).attr('placeholder', I53.filterPlaceholderText).parent().append(B6l);
                         A6l.find('.mbsc-fr-c').prepend(V93);
                         Y6l.tap(B6l, function() {
                             C6l.value = '';
                             Y6l.refresh();
                             B6l.removeClass('mbsc-sel-filter-show-clear');
                         });
                         h6l.on('keydown', function(M6l) {
                             if (M6l.keyCode == 13 || M6l.keyCode == 27) {
                                 M6l.stopPropagation();
                                 C6l.blur();
                             }
                         }).on('keyup', function() {
                             clearTimeout(H6l);
                             if (C6l.value.length) {
                                 B6l.addClass('mbsc-sel-filter-show-clear');
                             } else {
                                 B6l.removeClass('mbsc-sel-filter-show-clear');
                             }
                             H6l = setTimeout(function() {
                                 if (A93 === C6l.value || Y6l.trigger('onFilter', {
                                         filterText: C6l.value
                                     }) === false) {
                                     return;
                                 }
                                 A93 = C6l.value;
                                 if (A93.length >= c93 || !A93.length) {
                                     if (Z93 && I53.data.remoteFilter) {
                                         U7(I53.data.url + encodeURIComponent(A93), function(U6l) {
                                             Y6l.refresh(S93(U6l));
                                         }, I53.data.dataType);
                                     } else {
                                         Y6l.refresh(undefined, A93);
                                     }
                                 }
                             }, 500);
                         });
                     }
                 },
                 onBeforeShow: function j6l() {
                     if (Y93 && I53.counter) {
                         I53.headerText = function() {
                             var K6l = 0;
                             X.each(g53._tempSelected[y53], function() {
                                 K6l++;
                             });
                             return (K6l > 1 ? I53.selectedPluralText || I53.selectedText : I53.selectedText).replace(/{count}/, K6l);
                         };
                     }
                     D93(Q53.val());
                     if (I53.filter) {
                         q93(undefined);
                     }
                     g53.settings.wheels = p93();
                     F93 = true;
                 },
                 onWheelGestureStart: function Z6l(G6l) {
                     if (G6l.index == P93) {
                         I53.readonly = [false, true];
                     }
                 },
                 onWheelAnimationEnd: function N6l(u6l) {
                     var V6l = g53.getArrayVal(true);
                     if (u6l.index == P93) {
                         I53.readonly = O93;
                         if (V6l[P93] != B93) {
                             B93 = V6l[P93];
                             k53 = h93[B93].options[0].value;
                             V6l[y53] = k53;
                             if (M93) {
                                 s93();
                             } else {
                                 g53.setArrayVal(V6l, false, false, true, e93);
                             }
                         }
                     } else if (u6l.index == y53 && V6l[y53] != k53) {
                         k53 = V6l[y53];
                         if (d93 && r53[k53] && r53[k53].group != B93) {
                             B93 = r53[k53].group;
                             V6l[P93] = B93;
                             g53.setArrayVal(V6l, false, false, true, e93);
                         }
                     }
                 },
                 onItemTap: function X6l(D6l) {
                     if (D6l.index == y53) {
                         b93[D6l.value] = r53[D6l.value].text;
                         if (H93 && !Y93 && D6l.selected) {
                             return false;
                         }
                     }
                 },
                 onClose: function F6l() {
                     if (Z93 && I53.data.remoteFilter && A93) {
                         g53.refresh();
                     }
                 },
                 onDestroy: function R6l() {
                     if (g53._dummyInput) {
                         g53._dummyInput.remove();
                     }
                     Q53.removeClass('mbsc-sel-hdn').removeAttr('tabindex');
                 }
             };
         };
         var U = P.$;
         var S4 = {
             autostart: false,
             step: 1,
             useShortLabels: false,
             labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds', ''],
             labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs', ''],
             startText: 'Start',
             stopText: 'Stop',
             resetText: 'Reset',
             lapText: 'Lap',
             hideText: 'Hide'
         };
         P.presetShort('timer');
         P.presets.scroller.timer = function(b6l) {
             function d1l(H1l) {
                 return new Date(H1l.getUTCFullYear(), H1l.getUTCMonth(), H1l.getUTCDate(), H1l.getUTCHours(), H1l.getUTCMinutes(), H1l.getUTCSeconds(), H1l.getUTCMilliseconds());
             }

             function A1l(N1l) {
                 var w1l = {};
                 if (y6l && e6l[f6l].index > e6l.days.index) {
                     var K1l, j1l, V1l, Z1l, G1l = new Date(),
                         M1l = t6l ? G1l : l6l,
                         U1l = t6l ? l6l : G1l;
                     U1l = d1l(U1l);
                     M1l = d1l(M1l);
                     w1l.years = M1l.getFullYear() - U1l.getFullYear();
                     w1l.months = M1l.getMonth() - U1l.getMonth();
                     w1l.days = M1l.getDate() - U1l.getDate();
                     w1l.hours = M1l.getHours() - U1l.getHours();
                     w1l.minutes = M1l.getMinutes() - U1l.getMinutes();
                     w1l.seconds = M1l.getSeconds() - U1l.getSeconds();
                     w1l.fract = (M1l.getMilliseconds() - U1l.getMilliseconds()) / 10;
                     for (K1l = v6l.length; K1l > 0; K1l--) {
                         j1l = v6l[K1l - 1];
                         V1l = e6l[j1l];
                         Z1l = v6l[U.inArray(j1l, v6l) - 1];
                         if (e6l[Z1l] && w1l[j1l] < 0) {
                             w1l[Z1l]--;
                             w1l[j1l] += Z1l == 'months' ? 32 - new Date(M1l.getFullYear(), M1l.getMonth(), 32).getDate() : V1l.until + 1;
                         }
                     }
                     if (f6l == 'months') {
                         w1l.months += w1l.years * 12;
                         delete w1l.years;
                     }
                 } else {
                     U(v6l).each(function(X1l, u1l) {
                         if (e6l[u1l].index <= e6l[f6l].index) {
                             w1l[u1l] = Math.floor(N1l / e6l[u1l].limit);
                             N1l -= w1l[u1l] * e6l[u1l].limit;
                         }
                     });
                 }
                 return w1l;
             }

             function h1l(R1l) {
                 var b1l = 1,
                     D1l = e6l[R1l],
                     F1l = D1l.wheel,
                     z1l = D1l.prefix,
                     q1l = 0,
                     E1l = D1l.until,
                     L1l = e6l[v6l[U.inArray(R1l, v6l) - 1]];
                 if (D1l.index <= e6l[f6l].index && (!L1l || L1l.limit > J6l)) {
                     if (!a6l[R1l]) {
                         P1l[0].push(F1l);
                     }
                     a6l[R1l] = 1;
                     F1l.data = [];
                     F1l.label = D1l.label || '';
                     F1l.cssClass = 'mbsc-timer-whl-' + R1l;
                     if (J6l >= D1l.limit) {
                         b1l = Math.max(Math.round(J6l / D1l.limit), 1);
                         o6l = b1l * D1l.limit;
                     }
                     if (R1l == f6l) {
                         F1l.min = 0;
                         F1l.data = function(e1l) {
                             return {
                                 value: e1l,
                                 display: B1l(e1l, z1l, D1l.label)
                             };
                         };
                         F1l.getIndex = function(v1l) {
                             return v1l;
                         };
                     } else {
                         for (T6l = q1l; T6l <= E1l; T6l += b1l) {
                             F1l.data.push({
                                 value: T6l,
                                 display: B1l(T6l, z1l, D1l.label)
                             });
                         }
                     }
                 }
             }

             function B1l(t1l, l1l, f1l) {
                 return (l1l || '') + (t1l < 10 ? '0' : '') + t1l + '<span class="mbsc-timer-lbl">' + f1l + '</span>';
             }

             function p6l(O1l) {
                 var c1l = [],
                     W1l, a1l = A1l(O1l);
                 U(v6l).each(function(x1l, p1l) {
                     if (a6l[p1l]) {
                         W1l = Math.max(Math.round(J6l / e6l[p1l].limit), 1);
                         c1l.push(Math.round(a1l[p1l] / W1l) * W1l);
                     }
                 });
                 return c1l;
             }

             function m6l(S1l) {
                 if (y6l) {
                     q6l = l6l - new Date();
                     if (q6l < 0) {
                         q6l *= -1;
                         t6l = true;
                     } else {
                         t6l = false;
                     }
                     L6l = 0;
                     S6l = true;
                 } else if (l6l !== undefined) {
                     S6l = false;
                     q6l = l6l * 1000;
                     t6l = z6l.mode != 'countdown';
                     if (S1l) {
                         L6l = 0;
                     }
                 } else {
                     q6l = 0;
                     t6l = z6l.mode != 'countdown';
                     S6l = t6l;
                     if (S1l) {
                         L6l = 0;
                     }
                 }
             }

             function k6l() {
                 if (c6l) {
                     U('.mbsc-fr-w', E6l).addClass('mbsc-timer-running mbsc-timer-locked');
                     U('.mbsc-timer-btn-toggle-c > div', E6l).text(z6l.stopText);
                     if (b6l.buttons.start.icon) {
                         U('.mbsc-timer-btn-toggle-c > div', E6l).removeClass('mbsc-ic-' + b6l.buttons.start.icon);
                     }
                     if (b6l.buttons.stop.icon) {
                         U('.mbsc-timer-btn-toggle-c > div', E6l).addClass('mbsc-ic-' + b6l.buttons.stop.icon);
                     }
                     if (z6l.mode == 'stopwatch') {
                         U('.mbsc-timer-btn-resetlap-c > div', E6l).text(z6l.lapText);
                         if (b6l.buttons.reset.icon) {
                             U('.mbsc-timer-btn-resetlap-c > div', E6l).removeClass('mbsc-ic-' + b6l.buttons.reset.icon);
                         }
                         if (b6l.buttons.lap.icon) {
                             U('.mbsc-timer-btn-resetlap-c > div', E6l).addClass('mbsc-ic-' + b6l.buttons.lap.icon);
                         }
                     }
                 } else {
                     U('.mbsc-fr-w', E6l).removeClass('mbsc-timer-running');
                     U('.mbsc-timer-btn-toggle-c > div', E6l).text(z6l.startText);
                     if (b6l.buttons.start.icon) {
                         U('.mbsc-timer-btn-toggle-c > div', E6l).addClass('mbsc-ic-' + b6l.buttons.start.icon);
                     }
                     if (b6l.buttons.stop.icon) {
                         U('.mbsc-timer-btn-toggle-c > div', E6l).removeClass('mbsc-ic-' + b6l.buttons.stop.icon);
                     }
                     if (z6l.mode == 'stopwatch') {
                         U('.mbsc-timer-btn-resetlap-c > div', E6l).text(z6l.resetText);
                         if (b6l.buttons.reset.icon) {
                             U('.mbsc-timer-btn-resetlap-c > div', E6l).addClass('mbsc-ic-' + b6l.buttons.reset.icon);
                         }
                         if (b6l.buttons.lap.icon) {
                             U('.mbsc-timer-btn-resetlap-c > div', E6l).removeClass('mbsc-ic-' + b6l.buttons.lap.icon);
                         }
                     }
                 }
             }
             var T6l, r6l, o6l, x6l, i6l, s6l, q6l, L6l, t6l, E6l, Y1l, C1l = U.extend({}, b6l.settings),
                 z6l = U.extend(b6l.settings, S4, C1l),
                 W6l = z6l.useShortLabels ? z6l.labelsShort : z6l.labels,
                 Q6l = ['toggle', 'resetlap'],
                 v6l = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'fract'],
                 e6l = {
                     'years': {
                         index: 6,
                         until: 10,
                         limit: 1000 * 60 * 60 * 24 * 365,
                         label: W6l[0],
                         wheel: {}
                     },
                     'months': {
                         index: 5,
                         until: 11,
                         limit: 1000 * 60 * 60 * 24 * 30,
                         label: W6l[1],
                         wheel: {}
                     },
                     'days': {
                         index: 4,
                         until: 31,
                         limit: 1000 * 60 * 60 * 24,
                         label: W6l[2],
                         wheel: {}
                     },
                     'hours': {
                         index: 3,
                         until: 23,
                         limit: 1000 * 60 * 60,
                         label: W6l[3],
                         wheel: {}
                     },
                     'minutes': {
                         index: 2,
                         until: 59,
                         limit: 1000 * 60,
                         label: W6l[4],
                         wheel: {}
                     },
                     'seconds': {
                         index: 1,
                         until: 59,
                         limit: 1000,
                         label: W6l[5],
                         wheel: {}
                     },
                     'fract': {
                         index: 0,
                         until: 99,
                         limit: 10,
                         label: W6l[6],
                         prefix: '.',
                         wheel: {}
                     }
                 },
                 a6l = {},
                 I6l = [],
                 g6l = 0,
                 c6l = false,
                 O6l = true,
                 S6l = false,
                 J6l = Math.max(10, z6l.step * 1000),
                 f6l = z6l.maxWheel,
                 n6l = z6l.mode == 'stopwatch' || y6l,
                 l6l = z6l.targetTime,
                 y6l = l6l && l6l.getTime !== undefined,
                 P1l = [
                     []
                 ];
             b6l.start = function() {
                 if (O6l) {
                     b6l.reset();
                 }
                 if (!c6l) {
                     m6l();
                     if (!S6l && L6l >= q6l) {
                         return;
                     }
                     c6l = true;
                     O6l = false;
                     i6l = new Date();
                     x6l = L6l;
                     z6l.readonly = true;
                     b6l.setVal(p6l(t6l ? L6l : q6l - L6l), true, true, false, 100);
                     r6l = setInterval(function() {
                         L6l = new Date() - i6l + x6l;
                         b6l.setVal(p6l(t6l ? L6l : q6l - L6l), true, true, false, Math.min(100, o6l - 10));
                         if (!S6l && L6l + o6l >= q6l) {
                             clearInterval(r6l);
                             setTimeout(function() {
                                 b6l.stop();
                                 L6l = q6l;
                                 b6l.setVal(p6l(t6l ? L6l : 0), true, true, false, 100);
                                 b6l.trigger('onFinish', {
                                     time: q6l
                                 });
                                 O6l = true;
                             }, q6l - L6l);
                         }
                     }, o6l);
                     k6l();
                     b6l.trigger('onStart');
                 }
             };
             b6l.stop = function() {
                 if (c6l) {
                     c6l = false;
                     clearInterval(r6l);
                     L6l = new Date() - i6l + x6l;
                     k6l();
                     b6l.trigger('onStop', {
                         ellapsed: L6l
                     });
                 }
             };
             b6l.toggle = function() {
                 if (c6l) {
                     b6l.stop();
                 } else {
                     b6l.start();
                 }
             };
             b6l.reset = function() {
                 b6l.stop();
                 L6l = 0;
                 I6l = [];
                 g6l = 0;
                 b6l.setVal(p6l(t6l ? 0 : q6l), true, true, false, 100);
                 b6l.settings.readonly = n6l;
                 O6l = true;
                 if (!n6l) {
                     U('.mbsc-fr-w', E6l).removeClass('mbsc-timer-locked');
                 }
                 b6l.trigger('onReset');
             };
             b6l.lap = function() {
                 if (c6l) {
                     s6l = new Date() - i6l + x6l;
                     Y1l = s6l - g6l;
                     g6l = s6l;
                     I6l.push(s6l);
                     b6l.trigger('onLap', {
                         ellapsed: s6l,
                         lap: Y1l,
                         laps: I6l
                     });
                 }
             };
             b6l.resetlap = function() {
                 if (c6l && z6l.mode == 'stopwatch') {
                     b6l.lap();
                 } else {
                     b6l.reset();
                 }
             };
             b6l.getTime = function() {
                 return q6l;
             };
             b6l.setTime = function(i1l) {
                 l6l = i1l / 1000;
                 q6l = i1l;
             };
             b6l.getEllapsedTime = function() {
                 return c6l ? new Date() - i6l + x6l : 0;
             };
             b6l.setEllapsedTime = function(o1l, s1l) {
                 if (!O6l) {
                     x6l = L6l = o1l;
                     i6l = new Date();
                     b6l.setVal(p6l(t6l ? L6l : q6l - L6l), true, s1l, false, 100);
                 }
             };
             m6l(true);
             if (!f6l && !q6l) {
                 f6l = 'minutes';
             }
             if (z6l.display !== 'inline') {
                 Q6l.push('hide');
             }
             if (!f6l) {
                 U(v6l).each(function(T1l, J1l) {
                     if (!f6l && q6l >= e6l[J1l].limit) {
                         f6l = J1l;
                         return false;
                     }
                 });
             }
             U(v6l).each(function(I1l, n1l) {
                 h1l(n1l);
             });
             o6l = Math.max(87, o6l);
             if (z6l.autostart) {
                 setTimeout(function() {
                     b6l.start();
                 }, 0);
             }
             b6l.handlers.toggle = b6l.toggle;
             b6l.handlers.start = b6l.start;
             b6l.handlers.stop = b6l.stop;
             b6l.handlers.resetlap = b6l.resetlap;
             b6l.handlers.reset = b6l.reset;
             b6l.handlers.lap = b6l.lap;
             b6l.buttons.toggle = {
                 parentClass: 'mbsc-timer-btn-toggle-c',
                 text: z6l.startText,
                 icon: z6l.startIcon,
                 handler: 'toggle'
             };
             b6l.buttons.start = {
                 text: z6l.startText,
                 icon: z6l.startIcon,
                 handler: 'start'
             };
             b6l.buttons.stop = {
                 text: z6l.stopText,
                 icon: z6l.stopIcon,
                 handler: 'stop'
             };
             b6l.buttons.reset = {
                 text: z6l.resetText,
                 icon: z6l.resetIcon,
                 handler: 'reset'
             };
             b6l.buttons.lap = {
                 text: z6l.lapText,
                 icon: z6l.lapIcon,
                 handler: 'lap'
             };
             b6l.buttons.resetlap = {
                 parentClass: 'mbsc-timer-btn-resetlap-c',
                 text: z6l.resetText,
                 icon: z6l.resetIcon,
                 handler: 'resetlap'
             };
             b6l.buttons.hide = {
                 parentClass: 'mbsc-timer-btn-hide-c',
                 text: z6l.hideText,
                 icon: z6l.closeIcon,
                 handler: 'cancel'
             };
             return {
                 wheels: P1l,
                 headerText: false,
                 readonly: n6l,
                 buttons: Q6l,
                 mode: 'countdown',
                 compClass: 'mbsc-timer',
                 parseValue: function g1l() {
                     return p6l(t6l ? 0 : q6l);
                 },
                 formatValue: function y1l(k1l) {
                     var Q1l = '',
                         r1l = 0;
                     U(v6l).each(function(P3l, m1l) {
                         if (m1l == 'fract') {
                             return;
                         }
                         if (a6l[m1l]) {
                             Q1l += k1l[r1l] + (m1l == 'seconds' && a6l.fract ? '.' + k1l[r1l + 1] : '') + ' ' + W6l[P3l] + ' ';
                             r1l++;
                         }
                     });
                     return Q1l;
                 },
                 validate: function d3l(B3l) {
                     var Y3l = B3l.values,
                         h3l = B3l.index,
                         C3l = 0;
                     if (O6l && h3l !== undefined) {
                         l6l = 0;
                         U(v6l).each(function(H3l, A3l) {
                             if (a6l[A3l]) {
                                 l6l += e6l[A3l].limit * Y3l[C3l];
                                 C3l++;
                             }
                         });
                         l6l /= 1000;
                         m6l(true);
                     }
                 },
                 onBeforeShow: function w3l() {
                     z6l.showLabel = true;
                 },
                 onMarkupReady: function M3l(U3l) {
                     E6l = U(U3l.target);
                     k6l();
                     if (n6l) {
                         U('.mbsc-fr-w', E6l).addClass('mbsc-timer-locked');
                     }
                 },
                 onPosition: function j3l(K3l) {
                     U('.mbsc-fr-w', K3l.target).css('min-width', 0).css('min-width', U('.mbsc-fr-btn-cont', K3l.target)[0].offsetWidth);
                 },
                 onDestroy: function Z3l() {
                     clearInterval(r6l);
                 }
             };
         };
         var L = P.$;
         var o4 = {
             wheelOrder: 'hhiiss',
             useShortLabels: false,
             min: 0,
             max: Infinity,
             labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'],
             labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs']
         };
         P.presetShort('timespan');
         P.presets.scroller.timespan = function(X3l) {
             function L3l(S3l) {
                 var x3l = {};
                 L(q3l).each(function(o3l, i3l) {
                     x3l[i3l] = D3l[i3l] ? Math.floor(S3l / N3l[i3l].limit) : 0;
                     S3l -= x3l[i3l] * N3l[i3l].limit;
                 });
                 return x3l;
             }

             function p3l(T3l) {
                 var I3l = false,
                     n3l = v3l[D3l[T3l] - 1] || 1,
                     J3l = N3l[T3l],
                     g3l = J3l.label,
                     s3l = J3l.wheel;
                 s3l.data = [];
                 s3l.label = J3l.label;
                 if (E3l.match(new RegExp(J3l.re + J3l.re, 'i'))) {
                     I3l = true;
                 }
                 if (T3l == R3l) {
                     s3l.min = z3l[T3l];
                     s3l.max = b3l[T3l];
                     s3l.data = function(y3l) {
                         return {
                             value: y3l * n3l,
                             display: c3l(y3l * n3l, I3l, g3l)
                         };
                     };
                     s3l.getIndex = function(r3l) {
                         return Math.round(r3l / n3l);
                     };
                 } else {
                     for (F3l = 0; F3l <= J3l.until; F3l += n3l) {
                         s3l.data.push({
                             value: F3l,
                             display: c3l(F3l, I3l, g3l)
                         });
                     }
                 }
             }

             function c3l(Q3l, k3l, m3l) {
                 return (Q3l < 10 && k3l ? '0' : '') + Q3l + '<span class="mbsc-ts-lbl">' + m3l + '</span>';
             }

             function a3l(d7l) {
                 var C7l = 0,
                     P7l = 0;
                 L.each(V3l, function(B7l, Y7l) {
                     if (!isNaN(+d7l[C7l])) {
                         P7l += N3l[Y7l.v].limit * d7l[B7l];
                     }
                 });
                 return P7l;
             }

             function O3l(A7l, h7l) {
                 return Math.floor(A7l / h7l) * h7l;
             }
             var F3l, e3l, W3l, z3l, b3l, l3l = L.extend({}, X3l.settings),
                 G3l = L.extend(X3l.settings, o4, l3l),
                 E3l = G3l.wheelOrder,
                 u3l = G3l.useShortLabels ? G3l.labelsShort : G3l.labels,
                 q3l = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
                 N3l = {
                     'years': {
                         ord: 0,
                         index: 6,
                         until: 10,
                         limit: 1000 * 60 * 60 * 24 * 365,
                         label: u3l[0],
                         re: 'y',
                         wheel: {}
                     },
                     'months': {
                         ord: 1,
                         index: 5,
                         until: 11,
                         limit: 1000 * 60 * 60 * 24 * 30,
                         label: u3l[1],
                         re: 'm',
                         wheel: {}
                     },
                     'days': {
                         ord: 2,
                         index: 4,
                         until: 31,
                         limit: 1000 * 60 * 60 * 24,
                         label: u3l[2],
                         re: 'd',
                         wheel: {}
                     },
                     'hours': {
                         ord: 3,
                         index: 3,
                         until: 23,
                         limit: 1000 * 60 * 60,
                         label: u3l[3],
                         re: 'h',
                         wheel: {}
                     },
                     'minutes': {
                         ord: 4,
                         index: 2,
                         until: 59,
                         limit: 1000 * 60,
                         label: u3l[4],
                         re: 'i',
                         wheel: {}
                     },
                     'seconds': {
                         ord: 5,
                         index: 1,
                         until: 59,
                         limit: 1000,
                         label: u3l[5],
                         re: 's',
                         wheel: {}
                     }
                 },
                 V3l = [],
                 v3l = G3l.steps || [],
                 D3l = {},
                 R3l = 'seconds',
                 f3l = G3l.defaultValue || Math.max(G3l.min, Math.min(0, G3l.max)),
                 t3l = [
                     []
                 ];
             L(q3l).each(function(w7l, H7l) {
                 e3l = E3l.search(new RegExp(N3l[H7l].re, 'i'));
                 if (e3l > -1) {
                     V3l.push({
                         o: e3l,
                         v: H7l
                     });
                     if (N3l[H7l].index > N3l[R3l].index) {
                         R3l = H7l;
                     }
                 }
             });
             V3l.sort(function(M7l, U7l) {
                 return M7l.o > U7l.o ? 1 : -1;
             });
             L.each(V3l, function(K7l, j7l) {
                 D3l[j7l.v] = K7l + 1;
                 t3l[0].push(N3l[j7l.v].wheel);
             });
             z3l = L3l(G3l.min);
             b3l = L3l(G3l.max);
             L.each(V3l, function(G7l, Z7l) {
                 p3l(Z7l.v);
             });
             X3l.getVal = function(N7l, V7l) {
                 return V7l ? X3l._getVal(N7l) : X3l._hasValue || N7l ? a3l(X3l.getArrayVal(N7l)) : null;
             };
             return {
                 showLabel: true,
                 wheels: t3l,
                 compClass: 'mbsc-ts',
                 parseValue: function u7l(D7l) {
                     var X7l = [],
                         F7l;
                     if (P.util.isNumeric(D7l) || !D7l) {
                         W3l = L3l(D7l || f3l);
                         L.each(V3l, function(b7l, R7l) {
                             X7l.push(W3l[R7l.v]);
                         });
                     } else {
                         L.each(V3l, function(L7l, z7l) {
                             F7l = new RegExp('(\\d+)\\s?(' + G3l.labels[N3l[z7l.v].ord] + '|' + G3l.labelsShort[N3l[z7l.v].ord] + ')', 'gi').exec(D7l);
                             X7l.push(F7l ? F7l[1] : 0);
                         });
                     }
                     L(X7l).each(function(q7l, E7l) {
                         X7l[q7l] = O3l(E7l, v3l[q7l] || 1);
                     });
                     return X7l;
                 },
                 formatValue: function e7l(t7l) {
                     var v7l = '';
                     L.each(V3l, function(l7l, f7l) {
                         v7l += +t7l[l7l] ? t7l[l7l] + ' ' + N3l[f7l.v].label + ' ' : '';
                     });
                     return v7l ? v7l.replace(/\s+$/g, '') : 0;
                 },
                 validate: function c7l(J7l) {
                     var o7l, W7l, a7l, O7l, i7l = J7l.values,
                         s7l = J7l.direction,
                         S7l = [],
                         x7l = true,
                         p7l = true;
                     L(q3l).each(function(n7l, T7l) {
                         if (D3l[T7l] !== undefined) {
                             a7l = D3l[T7l] - 1;
                             S7l[a7l] = [];
                             O7l = {};
                             if (T7l != R3l) {
                                 if (x7l) {
                                     for (W7l = b3l[T7l] + 1; W7l <= N3l[T7l].until; W7l++) {
                                         O7l[W7l] = true;
                                     }
                                 }
                                 if (p7l) {
                                     for (W7l = 0; W7l < z3l[T7l]; W7l++) {
                                         O7l[W7l] = true;
                                     }
                                 }
                             }
                             i7l[a7l] = X3l.getValidValue(a7l, i7l[a7l], s7l, O7l);
                             o7l = L3l(a3l(i7l));
                             x7l = x7l && o7l[T7l] == b3l[T7l];
                             p7l = p7l && o7l[T7l] == z3l[T7l];
                             L.each(O7l, function(I7l) {
                                 S7l[a7l].push(I7l);
                             });
                         }
                     });
                     return {
                         disabled: S7l
                     };
                 }
             };
         };
         P.presets.scroller.treelist = P.presets.scroller.list;
         P.presetShort('list');
         P.presetShort('treelist');
         P.i18n.ca = {
             setText: 'Acceptar',
             cancelText: 'Cancel·lar',
             clearText: 'Esborrar',
             selectedText: '{count} seleccionat',
             selectedPluralText: '{count} seleccionats',
             dateFormat: 'dd/mm/yy',
             dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
             dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
             dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
             dayText: 'Dia',
             hourText: 'Hores',
             minuteText: 'Minuts',
             monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
             monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
             monthText: 'Mes',
             secText: 'Segons',
             timeFormat: 'HH:ii',
             yearText: 'Any',
             nowText: 'Ara',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Avui',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Temps',
             calendarText: 'Calendari',
             closeText: 'Tancar',
             fromText: 'Iniciar',
             toText: 'Final',
             wholeText: 'Sencer',
             fractionText: 'Fracció',
             unitText: 'Unitat',
             labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
             labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
             startText: 'Iniciar',
             stopText: 'Aturar',
             resetText: 'Reiniciar',
             lapText: 'Volta',
             hideText: 'Amagar',
             backText: 'Enrere',
             undoText: 'Desfés',
             offText: 'No',
             onText: 'Si'
         };
         P.i18n.cs = {
             setText: 'Zadej',
             cancelText: 'Storno',
             clearText: 'Vymazat',
             selectedText: 'Označený: {count}',
             dateFormat: 'dd.mm.yy',
             dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
             dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
             dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
             dayText: 'Den',
             hourText: 'Hodiny',
             minuteText: 'Minuty',
             monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
             monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
             monthText: 'Měsíc',
             secText: 'Sekundy',
             timeFormat: 'HH:ii',
             yearText: 'Rok',
             nowText: 'Teď',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Dnes',
             firstDay: 1,
             dateText: 'Datum',
             timeText: 'Čas',
             calendarText: 'Kalendář',
             closeText: 'Zavřít',
             fromText: 'Začátek',
             toText: 'Konec',
             wholeText: 'Celý',
             fractionText: 'Část',
             unitText: 'Jednotka',
             labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
             labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
             startText: 'Start',

             stopText: 'Stop',
             resetText: 'Resetovat',
             lapText: 'Etapa',
             hideText: 'Schovat',
             backText: 'Zpět',
             undoText: 'Zpět',
             offText: 'O',
             onText: 'I',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.da = {
             setText: 'Sæt',
             cancelText: 'Annuller',
             clearText: 'Ryd',
             selectedText: '{count} valgt',
             selectedPluralText: '{count} valgt',
             dateFormat: 'dd/mm/yy',
             dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
             dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
             dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
             dayText: 'Dag',
             hourText: 'Timer',
             minuteText: 'Minutter',
             monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
             monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
             monthText: 'Måned',
             secText: 'Sekunder',
             amText: 'am',
             pmText: 'pm',
             timeFormat: 'HH.ii',
             yearText: 'År',
             nowText: 'Nu',
             todayText: 'I dag',
             firstDay: 1,
             dateText: 'Dato',
             timeText: 'Tid',
             calendarText: 'Kalender',
             closeText: 'Luk',
             fromText: 'Start',
             toText: 'Slut',
             wholeText: 'Hele',
             fractionText: 'Dele',
             unitText: 'Enhed',
             labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
             labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
             startText: 'Start',
             stopText: 'Stop',
             resetText: 'Nulstil',
             lapText: 'Omgang',
             hideText: 'Skjul',
             offText: 'Fra',
             onText: 'Til',
             backText: 'Tilbage',
             undoText: 'Fortryd'
         };
         P.i18n['en-GB'] = P.i18n['en-UK'] = {
             dateFormat: 'dd/mm/yy',
             timeFormat: 'HH:ii'
         };
         P.i18n.es = {
             setText: 'Aceptar',
             cancelText: 'Cancelar',
             clearText: 'Borrar',
             selectedText: '{count} seleccionado',
             selectedPluralText: '{count} seleccionados',
             dateFormat: 'dd/mm/yy',
             dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
             dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
             dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
             dayText: 'D&#237;a',
             hourText: 'Horas',
             minuteText: 'Minutos',
             monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
             monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
             monthText: 'Mes',
             secText: 'Segundos',
             timeFormat: 'HH:ii',
             yearText: 'A&ntilde;o',
             nowText: 'Ahora',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Hoy',
             firstDay: 1,
             dateText: 'Fecha',
             timeText: 'Tiempo',
             calendarText: 'Calendario',
             closeText: 'Cerrar',
             fromText: 'Iniciar',
             toText: 'Final',
             wholeText: 'Entero',
             fractionText: 'Fracción',
             unitText: 'Unidad',
             labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
             labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
             startText: 'Iniciar',
             stopText: 'Deténgase',
             resetText: 'Reinicializar',
             lapText: 'Lap',
             hideText: 'Esconder',
             backText: 'Atrás',
             undoText: 'Deshacer',
             offText: 'No',
             onText: 'Sí',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         var F = {
             gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
             jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
         };
         F.jalaliToGregorian = function(C4l, P4l, d4l) {
             C4l = parseInt(C4l);
             P4l = parseInt(P4l);
             d4l = parseInt(d4l);
             var y7l;
             var k7l = C4l - 979;
             var Y4l = P4l - 1;
             var B4l = d4l - 1;
             var m7l = 365 * k7l + parseInt(k7l / 33) * 8 + parseInt((k7l % 33 + 3) / 4);
             for (y7l = 0; y7l < Y4l; ++y7l) {
                 m7l += F.jDaysInMonth[y7l];
             }
             m7l += B4l;
             var g7l = m7l + 79;
             var r7l = 1600 + 400 * parseInt(g7l / 146097);
             g7l = g7l % 146097;
             var Q7l = true;
             if (g7l >= 36525) {
                 g7l--;
                 r7l += 100 * parseInt(g7l / 36524);
                 g7l = g7l % 36524;
                 if (g7l >= 365) {
                     g7l++;
                 } else {
                     Q7l = false;
                 }
             }
             r7l += 4 * parseInt(g7l / 1461);
             g7l %= 1461;
             if (g7l >= 366) {
                 Q7l = false;
                 g7l--;
                 r7l += parseInt(g7l / 365);
                 g7l = g7l % 365;
             }
             for (y7l = 0; g7l >= F.gDaysInMonth[y7l] + (y7l == 1 && Q7l); y7l++) {
                 g7l -= F.gDaysInMonth[y7l] + (y7l == 1 && Q7l);
             }
             var A4l = y7l + 1;
             var h4l = g7l + 1;
             return [r7l, A4l, h4l];
         };
         F.checkDate = function(w4l, H4l, M4l) {
             return !(w4l < 0 || w4l > 32767 || H4l < 1 || H4l > 12 || M4l < 1 || M4l > F.jDaysInMonth[H4l - 1] + (H4l == 12 && (w4l - 979) % 33 % 4 === 0));
         };
         F.gregorianToJalali = function(u4l, G4l, N4l) {
             u4l = parseInt(u4l);
             G4l = parseInt(G4l);
             N4l = parseInt(N4l);
             var j4l;
             var K4l = u4l - 1600;
             var V4l = G4l - 1;
             var D4l = N4l - 1;
             var Z4l = 365 * K4l + parseInt((K4l + 3) / 4) - parseInt((K4l + 99) / 100) + parseInt((K4l + 399) / 400);
             for (j4l = 0; j4l < V4l; ++j4l) {
                 Z4l += F.gDaysInMonth[j4l];
             }
             if (V4l > 1 && (K4l % 4 === 0 && K4l % 100 !== 0 || K4l % 400 === 0)) {
                 ++Z4l;
             }
             Z4l += D4l;
             var U4l = Z4l - 79;
             var F4l = parseInt(U4l / 12053);
             U4l %= 12053;
             var X4l = 979 + 33 * F4l + 4 * parseInt(U4l / 1461);
             U4l %= 1461;
             if (U4l >= 366) {
                 X4l += parseInt((U4l - 1) / 365);
                 U4l = (U4l - 1) % 365;
             }
             for (j4l = 0; j4l < 11 && U4l >= F.jDaysInMonth[j4l]; ++j4l) {
                 U4l -= F.jDaysInMonth[j4l];
             }
             var b4l = j4l + 1;
             var R4l = U4l + 1;
             return [X4l, b4l, R4l];
         };
         P.i18n.fa = {
             setText: 'تاييد',
             cancelText: 'انصراف',
             clearText: 'واضح ',
             selectedText: '{count} منتخب',
             dateFormat: 'yy/mm/dd',
             dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
             dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
             dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
             dayText: 'روز',
             hourText: 'ساعت',
             minuteText: 'دقيقه',
             monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
             monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
             monthText: 'ماه',
             secText: 'ثانيه',
             timeFormat: 'HH:ii',
             timeWheels: 'iiHH',
             yearText: 'سال',
             nowText: 'اکنون',
             amText: 'ب',
             pmText: 'ص',
             todayText: 'امروز',
             getYear: function z4l(L4l) {
                 return F.gregorianToJalali(L4l.getFullYear(), L4l.getMonth() + 1, L4l.getDate())[0];
             },
             getMonth: function q4l(E4l) {
                 return --F.gregorianToJalali(E4l.getFullYear(), E4l.getMonth() + 1, E4l.getDate())[1];
             },
             getDay: function e4l(v4l) {
                 return F.gregorianToJalali(v4l.getFullYear(), v4l.getMonth() + 1, v4l.getDate())[2];
             },
             getDate: function t4l(c4l, l4l, W4l, a4l, O4l, p4l, x4l) {
                 if (l4l < 0) {
                     c4l += Math.floor(l4l / 12);
                     l4l = 12 + l4l % 12;
                 }
                 if (l4l > 11) {
                     c4l += Math.floor(l4l / 12);
                     l4l = l4l % 12;
                 }
                 var f4l = F.jalaliToGregorian(c4l, +l4l + 1, W4l);
                 return new Date(f4l[0], f4l[1] - 1, f4l[2], a4l || 0, O4l || 0, p4l || 0, x4l || 0);
             },
             getMaxDayOfMonth: function S4l(o4l, s4l) {
                 var i4l = 31;
                 while (F.checkDate(o4l, s4l + 1, i4l) === false) {
                     i4l--;
                 }
                 return i4l;
             },
             firstDay: 6,
             rtl: true,
             dateText: 'تاریخ ',
             timeText: 'زمان ',
             calendarText: 'تقویم',
             closeText: 'نزدیک',
             fromText: 'شروع ',
             toText: 'پایان',
             wholeText: 'تمام',
             fractionText: 'کسر',
             unitText: 'واحد',
             labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
             labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
             startText: 'شروع',
             stopText: 'پايان',
             resetText: 'تنظیم مجدد',
             lapText: 'Lap',
             hideText: 'پنهان کردن',
             backText: 'پشت',
             undoText: 'واچیدن'
         };
         P.i18n.fr = {
             setText: 'Terminer',
             cancelText: 'Annuler',
             clearText: 'Effacer',
             selectedText: '{count} sélectionné',
             selectedPluralText: '{count} sélectionnés',
             dateFormat: 'dd/mm/yy',
             dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
             dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
             dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
             dayText: 'Jour',
             monthText: 'Mois',
             monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
             monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
             hourText: 'Heures',
             minuteText: 'Minutes',
             secText: 'Secondes',
             timeFormat: 'HH:ii',
             yearText: 'Année',
             nowText: 'Maintenant',
             pmText: 'pm',
             amText: 'am',
             todayText: "Aujourd'hui",
             firstDay: 1,
             dateText: 'Date',
             timeText: 'Heure',
             calendarText: 'Calendrier',
             closeText: 'Fermer',
             fromText: 'Démarrer',
             toText: 'Fin',
             wholeText: 'Entier',
             fractionText: 'Fraction',
             unitText: 'Unité',
             labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
             labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
             startText: 'Démarrer',
             stopText: 'Arrêter',
             resetText: 'Réinitialiser',
             lapText: 'Lap',
             hideText: 'Cachez',
             backText: 'Retour',
             undoText: 'Annuler',
             offText: 'Non',
             onText: 'Oui',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.he = {
             rtl: true,
             setText: 'שמירה',
             cancelText: 'ביטול',
             clearText: 'נקה',
             selectedText: '{count} נבחר',
             selectedPluralText: '{count} נבחרו',
             dateFormat: 'dd/mm/yy',
             dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
             dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
             dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
             dayText: 'יום',
             hourText: 'שעות',
             minuteText: 'דקות',
             monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
             monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
             monthText: 'חודש',
             secText: 'שניות',
             amText: 'am',
             pmText: 'pm',
             timeFormat: 'HH:ii',
             timeWheels: 'iiHH',
             yearText: 'שנה',
             nowText: 'עכשיו',
             firstDay: 0,
             dateText: 'תאריך',
             timeText: 'זמן',
             calendarText: 'תאריכון',
             closeText: 'סגירה',
             todayText: 'היום',
             eventText: 'מִקרֶה',
             eventsText: 'מִקרֶה',
             fromText: 'התחלה',
             toText: 'סיום',
             wholeText: 'כֹּל',
             fractionText: 'שבריר',
             unitText: 'יחידה',
             labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
             labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
             startText: 'התחל',
             stopText: 'עצור',
             resetText: 'אתחול',
             lapText: 'הקפה',
             hideText: 'הסתר',
             offText: 'כיבוי',
             onText: 'הפעלה',
             backText: 'חזור',
             undoText: 'ביטול פעולה'
         };
         P.i18n.hu = {
             setText: 'OK',
             cancelText: 'Mégse',
             clearText: 'Törlés',
             selectedText: '{count} kiválasztva',
             dateFormat: 'yy.mm.dd.',
             dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
             dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
             dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
             dayText: 'Nap',
             delimiter: '.',
             hourText: 'Óra',
             minuteText: 'Perc',
             monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
             monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
             monthText: 'Hónap',
             secText: 'Másodperc',
             timeFormat: 'H:ii',
             yearText: 'Év',
             nowText: 'Most',
             pmText: 'pm',
             amText: 'am',
             firstDay: 1,
             dateText: 'Dátum',
             timeText: 'Idő',
             calendarText: 'Naptár',
             todayText: 'Ma',
             prevMonthText: 'Előző hónap',
             nextMonthText: 'Következő hónap',
             prevYearText: 'Előző év',
             nextYearText: 'Következő év',
             closeText: 'Bezár',
             eventText: 'esemény',
             eventsText: 'esemény',
             fromText: 'Eleje',
             toText: 'Vége',
             wholeText: 'Egész',
             fractionText: 'Tört',
             unitText: 'Egység',
             labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
             labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
             startText: 'Indít',
             stopText: 'Megállít',
             resetText: 'Visszaállít',
             lapText: 'Lap',
             hideText: 'Elrejt',
             backText: 'Vissza',
             undoText: 'Visszavon',
             offText: 'Ki',
             onText: 'Be',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.it = {
             setText: 'OK',
             cancelText: 'Annulla',
             clearText: 'Chiarire',
             selectedText: '{count} selezionato',
             selectedPluralText: '{count} selezionati',
             dateFormat: 'dd/mm/yy',
             dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
             dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
             dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
             dayText: 'Giorno',
             hourText: 'Ore',
             minuteText: 'Minuti',
             monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
             monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
             monthText: 'Mese',
             secText: 'Secondi',
             timeFormat: 'HH:ii',
             yearText: 'Anno',
             nowText: 'Ora',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Oggi',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Volta',
             calendarText: 'Calendario',
             closeText: 'Chiudere',
             fromText: 'Inizio',
             toText: 'Fine',
             wholeText: 'Intero',
             fractionText: 'Frazione',
             unitText: 'Unità',
             labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
             labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
             startText: 'Inizio',
             stopText: 'Arresto',
             resetText: 'Ripristina',
             lapText: 'Lap',
             hideText: 'Nascondi',
             backText: 'Indietro',
             undoText: 'Annulla',
             offText: 'Via',
             onText: 'Su',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.ja = {
             setText: 'セット',
             cancelText: 'キャンセル',
             clearText: 'クリア',
             selectedText: '{count} 選択',
             dateFormat: 'yy年mm月dd日',
             dayNames: ['日', '月', '火', '水', '木', '金', '土'],
             dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
             dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
             dayText: '日',
             hourText: '時',
             minuteText: '分',
             monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             monthText: '月',
             secText: '秒',
             timeFormat: 'HH:ii',
             yearText: '年',
             nowText: '今',
             pmText: '午後',
             amText: '午前',
             yearSuffix: '年',
             monthSuffix: '月',
             daySuffix: '日',
             todayText: '今日',
             dateText: '日付',
             timeText: '時間',
             calendarText: 'カレンダー',
             closeText: 'クローズ',
             fromText: '開始',
             toText: '終わり',
             wholeText: '全数',
             fractionText: '分数',
             unitText: '単位',
             labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
             labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
             startText: '開始',
             stopText: '停止',
             resetText: 'リセット',
             lapText: 'ラップ',
             hideText: '隠す',
             backText: 'バック',
             undoText: 'アンドゥ'
         };
         P.i18n.lt = {
             setText: 'OK',
             cancelText: 'Atšaukti',
             clearText: 'Išvalyti',
             selectedText: 'Pasirinktas {count}',
             selectedPluralText: 'Pasirinkti {count}',
             dateFormat: 'yy-mm-dd',
             dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
             dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
             dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
             dayText: 'Diena',
             hourText: 'Valanda',
             minuteText: 'Minutes',
             monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
             monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
             monthText: 'Mėnuo',
             secText: 'Sekundes',
             amText: 'am',
             pmText: 'pm',
             timeFormat: 'HH:ii',
             yearText: 'Metai',
             nowText: 'Dabar',
             todayText: 'Šiandien',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Laikas',
             calendarText: 'Kalendorius',
             closeText: 'Uždaryti',
             fromText: 'Nuo',
             toText: 'Iki',
             wholeText: 'Visas',
             fractionText: 'Frakcija',
             unitText: 'Vienetas',
             labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
             labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
             startText: 'Pradėti',
             stopText: 'Sustabdyti',
             resetText: 'Išnaujo',
             lapText: 'Ratas',
             hideText: 'Slėpti',
             backText: 'Atgal',
             undoText: 'Anuliuoti',
             offText: 'Išj.',
             onText: 'Įj.',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.nl = {
             setText: 'Instellen',
             cancelText: 'Annuleren',
             clearText: 'Duidelijk',
             selectedText: '{count} gekozen',
             dateFormat: 'dd-mm-yy',
             dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
             dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
             dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
             dayText: 'Dag',
             hourText: 'Uur',
             minuteText: 'Minuten',
             monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
             monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
             monthText: 'Maand',
             secText: 'Seconden',
             timeFormat: 'HH:ii',
             yearText: 'Jaar',
             nowText: 'Nu',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Vandaag',
             firstDay: 1,
             dateText: 'Datum',
             timeText: 'Tijd',
             calendarText: 'Kalender',
             closeText: 'Sluiten',
             fromText: 'Start',
             toText: 'Einde',
             wholeText: 'geheel',
             fractionText: 'fractie',
             unitText: 'eenheid',
             labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
             labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
             startText: 'Start',
             stopText: 'Stop',
             resetText: 'Reset',
             lapText: 'Ronde',
             hideText: 'Verbergen',
             backText: 'Terug',
             undoText: 'Onged. maken',
             offText: 'Uit',
             onText: 'Aan',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.no = {
             setText: 'OK',
             cancelText: 'Avbryt',
             clearText: 'Tømme',
             selectedText: '{count} valgt',
             dateFormat: 'dd.mm.yy',
             dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
             dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
             dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
             dayText: 'Dag',
             delimiter: '.',
             hourText: 'Time',
             minuteText: 'Minutt',
             monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
             monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
             monthText: 'Måned',
             secText: 'Sekund',
             timeFormat: 'HH:ii',
             yearText: 'År',
             nowText: 'Nå',
             pmText: 'pm',
             amText: 'am',
             todayText: 'I dag',
             firstDay: 1,
             dateText: 'Dato',
             timeText: 'Tid',
             calendarText: 'Kalender',
             closeText: 'Lukk',
             fromText: 'Start',
             toText: 'End',
             wholeText: 'Hele',
             fractionText: 'Fraksjon',
             unitText: 'Enhet',
             labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
             labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
             startText: 'Start',
             stopText: 'Stopp',
             resetText: 'Tilbakestille',
             lapText: 'Runde',
             hideText: 'Skjul',
             backText: 'Tilbake',
             undoText: 'Angre',
             offText: 'Av',
             onText: 'På',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.pl = {
             setText: 'Zestaw',
             cancelText: 'Anuluj',
             clearText: 'Oczyścić',
             selectedText: 'Wybór: {count}',
             dateFormat: 'yy-mm-dd',
             dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
             dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
             dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
             dayText: 'Dzień',
             hourText: 'Godziny',
             minuteText: 'Minuty',
             monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
             monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
             monthText: 'Miesiąc',
             secText: 'Sekundy',
             timeFormat: 'HH:ii',
             yearText: 'Rok',
             nowText: 'Teraz',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Dzisiaj',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Czas',
             calendarText: 'Kalendarz',
             closeText: 'Zakończenie',
             fromText: 'Rozpoczęcie',
             toText: 'Koniec',
             wholeText: 'Cały',
             fractionText: 'Ułamek',
             unitText: 'Jednostka',
             labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
             labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
             startText: 'Rozpoczęcie',
             stopText: 'Zatrzymać',
             resetText: 'Zresetować',
             lapText: 'Zakładka',
             hideText: 'Ukryć',
             backText: 'Wróć',
             undoText: 'Cofnij',
             offText: 'Wył',
             onText: 'Wł',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n['pt-BR'] = {
             setText: 'Selecionar',
             cancelText: 'Cancelar',
             clearText: 'Claro',
             selectedText: '{count} selecionado',
             selectedPluralText: '{count} selecionados',
             dateFormat: 'dd/mm/yy',
             dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
             dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
             dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
             dayText: 'Dia',
             hourText: 'Hora',
             minuteText: 'Minutos',
             monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
             monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
             monthText: 'Mês',
             secText: 'Segundo',
             timeFormat: 'HH:ii',
             yearText: 'Ano',
             nowText: 'Agora',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Hoje',
             dateText: 'Data',
             timeText: 'Tempo',
             calendarText: 'Calendário',
             closeText: 'Fechar',
             fromText: 'In&iacute;cio',
             toText: 'Fim',
             wholeText: 'Inteiro',
             fractionText: 'Fração',
             unitText: 'Unidade',
             labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
             labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
             startText: 'Começar',
             stopText: 'Pare',
             resetText: 'Reinicializar',
             lapText: 'Lap',
             hideText: 'Esconder',
             backText: 'Anterior',
             undoText: 'Desfazer',
             offText: 'Desl',
             onText: 'Lig',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n['pt-PT'] = {
             setText: 'Seleccionar',
             cancelText: 'Cancelar',
             clearText: 'Claro',
             selectedText: '{count} selecionado',
             selectedPluralText: '{count} selecionados',
             dateFormat: 'dd-mm-yy',
             dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
             dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
             dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
             dayText: 'Dia',
             hourText: 'Horas',
             minuteText: 'Minutos',
             monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
             monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
             monthText: 'M&ecirc;s',
             secText: 'Segundo',
             timeFormat: 'HH:ii',
             yearText: 'Ano',
             nowText: 'Actualizar',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Hoy',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Tempo',
             calendarText: 'Calend&aacute;rio',
             closeText: 'Fechar',
             fromText: 'In&iacute;cio',
             toText: 'Fim',
             wholeText: 'Inteiro',
             fractionText: 'Frac&ccedil;&atilde;o',
             unitText: 'Unidade',
             labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
             labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
             startText: 'Come&ccedil;ar',
             stopText: 'Parar',
             resetText: 'Reinicializar',
             lapText: 'Lap',
             hideText: 'Esconder',
             backText: 'Anterior',
             undoText: 'Anular',
             offText: 'Desl',
             onText: 'Lig',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.ro = {
             setText: 'Setare',
             cancelText: 'Anulare',
             clearText: 'Ştergere',
             selectedText: '{count} selectat',
             selectedPluralText: '{count} selectate',
             dateFormat: 'dd.mm.yy',
             dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
             dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
             dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
             dayText: ' Ziua',
             delimiter: '.',
             hourText: ' Ore ',
             minuteText: 'Minute',
             monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
             monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
             monthText: 'Luna',
             secText: 'Secunde',
             timeFormat: 'HH:ii',
             yearText: 'Anul',
             nowText: 'Acum',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Astăzi',
             firstDay: 1,
             dateText: 'Data',
             timeText: 'Ora',
             calendarText: 'Calendar',
             closeText: 'Închidere',
             fromText: 'Start',
             toText: 'Final',
             wholeText: 'Complet',
             fractionText: 'Parţial',
             unitText: 'Unitate',
             labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
             labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
             startText: 'Start',
             stopText: 'Stop',
             resetText: 'Resetare',
             lapText: 'Tură',
             hideText: 'Ascundere',
             backText: 'Înapoi',
             undoText: 'Anulează',
             offText: 'Nu',
             onText: 'Da',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n['ru-UA'] = {
             setText: 'Установить',
             cancelText: 'Отменить',
             clearText: 'Очиститьr',
             selectedText: '{count} Вібрать',
             dateFormat: 'dd.mm.yy',
             dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
             dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
             dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
             dayText: 'День',
             delimiter: '.',
             hourText: 'Часы',
             minuteText: 'Минуты',
             monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
             monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
             monthText: 'Месяцы',
             secText: 'Сикунды',
             timeFormat: 'HH:ii',
             yearText: 'Год',
             nowText: 'Сейчас',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Cегодня',
             firstDay: 1,
             dateText: 'Дата',
             timeText: 'Время',
             calendarText: 'Календарь',
             closeText: 'Закрыть',
             fromText: 'Начало',
             toText: 'Конец',
             wholeText: 'Весь',
             fractionText: 'Часть',
             unitText: 'Единица',
             labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
             labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
             startText: 'Старт',
             stopText: 'Стоп',
             resetText: ' Сброс ',
             lapText: ' Этап ',
             hideText: ' Скрыть ',
             backText: 'назад',
             undoText: 'ОтменитЬ',
             offText: 'O',
             onText: 'I',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n['ru-RU'] = P.i18n.ru = {
             setText: 'Установить',
             cancelText: 'Отмена',
             clearText: 'Очистить',
             selectedText: '{count} Выбрать',
             dateFormat: 'dd.mm.yy',
             dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
             dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
             dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
             dayText: 'День',
             delimiter: '.',
             hourText: 'Час',
             minuteText: 'Минут',
             monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
             monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
             monthText: 'Месяц',
             secText: 'Секунд',
             timeFormat: 'HH:ii',
             yearText: 'Год',
             nowText: 'Сейчас',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Cегодня',
             firstDay: 1,
             dateText: 'Дата',
             timeText: 'Время',
             calendarText: 'Календарь',
             closeText: 'Закрыть',
             fromText: 'Начало',
             toText: 'Конец',
             wholeText: 'Целое',
             fractionText: 'Дробное',
             unitText: 'Единица',
             labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
             labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
             startText: 'Старт',
             stopText: 'Стоп',
             resetText: 'Сбросить',
             lapText: 'Круг',
             hideText: 'Скрыть',
             backText: 'назад',
             undoText: 'ОтменитЬ',
             offText: 'O',
             onText: 'I',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.sk = {
             setText: 'Zadaj',
             cancelText: 'Zrušiť',
             clearText: 'Vymazať',
             selectedText: 'Označený: {count}',
             dateFormat: 'd.m.yy',
             dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
             dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
             dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
             dayText: 'Ďeň',
             hourText: 'Hodiny',
             minuteText: 'Minúty',
             monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
             monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
             monthText: 'Mesiac',
             secText: 'Sekundy',
             timeFormat: 'H:ii',
             yearText: 'Rok',
             nowText: 'Teraz',
             amText: 'am',
             pmText: 'pm',
             todayText: 'Dnes',
             firstDay: 1,
             dateText: 'Datum',
             timeText: 'Čas',
             calendarText: 'Kalendár',
             closeText: 'Zavrieť',
             fromText: 'Začiatok',
             toText: 'Koniec',
             wholeText: 'Celý',
             fractionText: 'Časť',
             unitText: 'Jednotka',
             labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
             labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
             startText: 'Start',
             stopText: 'Stop',
             resetText: 'Resetovať',
             lapText: 'Etapa',
             hideText: 'Schovať',
             backText: 'Späť',
             undoText: 'Späť',
             offText: 'O',
             onText: 'I',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         P.i18n.sv = {
             setText: 'OK',
             cancelText: 'Avbryt',
             clearText: 'Klara',
             selectedText: '{count} vald',
             dateFormat: 'yy-mm-dd',
             dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
             dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
             dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
             dayText: 'Dag',
             hourText: 'Timme',
             minuteText: 'Minut',
             monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
             monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
             monthText: 'Månad',
             secText: 'Sekund',
             timeFormat: 'HH:ii',
             yearText: 'År',
             nowText: 'Nu',
             pmText: 'pm',
             amText: 'am',
             todayText: 'I dag',
             firstDay: 1,
             dateText: 'Datum',
             timeText: 'Tid',
             calendarText: 'Kalender',
             closeText: 'Stäng',
             fromText: 'Start',
             toText: 'Slut',
             wholeText: 'Hela',
             fractionText: 'Bråk',
             unitText: 'Enhet',
             labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
             labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
             startText: 'Start',
             stopText: 'Stopp',
             resetText: 'Återställ',
             lapText: 'Varv',
             hideText: 'Dölj',
             backText: 'Tillbaka',
             undoText: 'Ångra',
             offText: 'Av',
             onText: 'På'
         };
         P.i18n.tr = {
             setText: 'Seç',
             cancelText: 'İptal',
             clearText: 'Temizleyin',
             selectedText: '{count} seçilmiş',
             dateFormat: 'dd.mm.yy',
             dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
             dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
             dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
             dayText: 'Gün',
             delimiter: '.',
             hourText: 'Saat',
             minuteText: 'Dakika',
             monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
             monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
             monthText: 'Ay',
             secText: 'Saniye',
             timeFormat: 'HH:ii',
             yearText: 'Yıl',
             nowText: 'Şimdi',
             pmText: 'pm',
             amText: 'am',
             todayText: 'Bugün',
             firstDay: 1,
             dateText: 'Tarih',
             timeText: 'Zaman',
             calendarText: 'Takvim',
             closeText: 'Kapatmak',
             fromText: 'Başla',
             toText: 'Son',
             wholeText: 'Tam',
             fractionText: 'Kesir',
             unitText: 'Birim',
             labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
             labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
             startText: 'Başla',
             stopText: 'Durdur',
             resetText: 'Sıfırla',
             lapText: 'Tur',
             hideText: 'Gizle',
             backText: 'Geri',
             undoText: 'Geri Al',
             offText: 'O',
             onText: 'I',
             decimalSeparator: ',',
             thousandsSeparator: '.'
         };
         P.i18n.zh = {
             setText: '确定',
             cancelText: '取消',
             clearText: '明确',
             selectedText: '{count} 选',
             dateFormat: 'yy/mm/dd',
             dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
             dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
             dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
             dayText: '日',
             hourText: '时',
             minuteText: '分',
             monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
             monthText: '月',
             secText: '秒',
             timeFormat: 'HH:ii',
             yearText: '年',
             nowText: '当前',
             pmText: '下午',
             amText: '上午',
             todayText: '今天',
             dateText: '日',
             timeText: '时间',
             calendarText: '日历',
             closeText: '关闭',
             fromText: '开始时间',
             toText: '结束时间',
             wholeText: '合计',
             fractionText: '分数',
             unitText: '单位',
             labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
             labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
             startText: '开始',
             stopText: '停止',
             resetText: '重置',
             lapText: '圈',
             hideText: '隐藏',
             backText: '背部',
             undoText: '复原',
             offText: '关闭',
             onText: '开启',
             decimalSeparator: ',',
             thousandsSeparator: ' '
         };
         var K1 = P.themes;
         var T4 = P.$;
         K1.frame['android-holo'] = {};
         K1.scroller['android-holo'] = T4.extend({}, K1.frame['android-holo'], {
             dateDisplay: 'Mddyy',
             rows: 5,
             minWidth: 76,
             height: 36,
             showLabel: false,
             selectedLineHeight: true,
             selectedLineBorder: 2,
             useShortLabels: true,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
         });
         K1.form['android-holo'] = {};
         var j1 = P.themes;
         var Z = P.$;
         j1.frame.bootstrap = {
             disabledClass: 'disabled',
             activeClass: 'btn-primary',
             activeTabClass: 'active',
             todayClass: 'text-primary',
             onMarkupInserted: function J4l(n4l) {
                 var T4l = Z(n4l.target);
                 Z('.mbsc-fr-popup', T4l).addClass('popover');
                 Z('.mbsc-fr-w', T4l).addClass('popover-content');
                 Z('.mbsc-fr-hdr', T4l).addClass('popover-title');
                 Z('.mbsc-fr-arr-i', T4l).addClass('popover');
                 Z('.mbsc-fr-arr', T4l).addClass('arrow');
                 Z('.mbsc-fr-btn', T4l).addClass('btn btn-default');
                 Z('.mbsc-fr-btn-s .mbsc-fr-btn', T4l).removeClass('btn-default').addClass('btn btn-primary');
                 Z('.mbsc-sc-btn-plus', T4l).addClass('glyphicon glyphicon-chevron-down');
                 Z('.mbsc-sc-btn-minus', T4l).addClass('glyphicon glyphicon-chevron-up');
                 Z('.mbsc-cal-next .mbsc-cal-btn-txt', T4l).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
                 Z('.mbsc-cal-prev .mbsc-cal-btn-txt', T4l).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
                 Z('.mbsc-cal-tabs ul', T4l).addClass('nav nav-tabs');
                 Z('.mbsc-cal-sc-c', T4l).addClass('popover');
                 Z('.mbsc-cal-week-nrs-c', T4l).addClass('popover');
                 Z('.mbsc-cal-events', T4l).addClass('popover');
                 Z('.mbsc-cal-events-arr', T4l).addClass('arrow');
                 Z('.mbsc-range-btn', T4l).addClass('btn btn-sm btn-small btn-default');
                 Z('.mbsc-np-btn', T4l).addClass('btn btn-default');
                 Z('.mbsc-sel-filter-cont', T4l).removeClass('mbsc-input');
                 Z('.mbsc-sel-filter-input', T4l).addClass('form-control');
             },
             onPosition: function I4l(g4l) {
                 setTimeout(function() {
                     Z('.mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i', g4l.target).removeClass('bottom').addClass('top');
                     Z('.mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i', g4l.target).removeClass('top').addClass('bottom');
                 }, 10);
             }
         };
         j1.scroller.bootstrap = Z.extend({}, j1.frame.bootstrap, {
             dateDisplay: 'Mddyy',
             btnCalPrevClass: '',
             btnCalNextClass: '',
             selectedLineHeight: true,
             onEventBubbleShow: function y4l(Q4l) {
                 var r4l = Z(Q4l.eventList);
                 Z('.mbsc-cal-event-list', r4l).addClass('list-group');
                 Z('.mbsc-cal-event', r4l).addClass('list-group-item');
                 setTimeout(function() {
                     if (r4l.hasClass('mbsc-cal-events-b')) {
                         r4l.removeClass('top').addClass('bottom');
                     } else {
                         r4l.removeClass('bottom').addClass('top');
                     }
                 }, 10);
             }
         });
         j1.menustrip.bootstrap = {
             wrapperClass: 'popover panel panel-default',
             groupClass: 'btn-group',
             activeClass: 'btn-primary',
             disabledClass: 'disabled',
             itemClass: 'btn btn-default'
         };
         var g6 = P.themes;
         var y4 = P.$;
         g6.frame.ios = {
             display: 'bottom',
             headerText: false,
             btnWidth: false,
             deleteIcon: 'ios-backspace',
             scroll3d: true
         };
         g6.scroller.ios = y4.extend({}, g6.frame.ios, {
             rows: 5,
             height: 34,
             minWidth: 55,
             selectedLineHeight: true,
             selectedLineBorder: 1,
             showLabel: false,
             useShortLabels: true,
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
             checkIcon: 'ion-ios7-checkmark-empty',
             filterClearIcon: 'ion-close-circled',
             dateDisplay: 'MMdyy',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
         });
         g6.listview.ios = {
             leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
             rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
         };
         g6.form.ios = {};
         var I6 = P.themes;
         var K = P.$;
         I6.frame.jqm = {
             jqmBody: 'a',
             jqmBorder: 'a',
             jqmLine: 'b',
             jqmSet: 'b',
             jqmCancel: 'c',
             disabledClass: 'ui-disabled',
             activeClass: 'ui-btn-active',
             activeTabInnerClass: 'ui-btn-active',
             onInit: function k4l() {
                 K(this).closest('.ui-field-contain').trigger('create');
             },
             onMarkupInserted: function m4l(C8l, B8l) {
                 var d8l = B8l.settings,
                     P8l = K(C8l.target);
                 K('.mbsc-np-btn, .mbsc-cal-sc-m-cell .mbsc-cal-sc-cell-i', P8l).addClass('ui-btn');
                 K('.mbsc-fr-btn-cont .mbsc-fr-btn, .mbsc-range-btn', P8l).addClass('ui-btn ui-mini ui-corner-all');
                 K('.mbsc-cal-prev .mbsc-cal-btn-txt', P8l).addClass('ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all');
                 K('.mbsc-cal-next .mbsc-cal-btn-txt', P8l).addClass('ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all');
                 K('.mbsc-fr-popup', P8l).removeClass('dwbg').addClass('ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-' + d8l.jqmBorder);
                 K('.mbsc-fr-btn-s .mbsc-fr-btn', P8l).addClass('ui-btn-' + d8l.jqmSet);
                 K('.mbsc-fr-hdr', P8l).addClass('ui-header ui-bar-inherit');
                 K('.mbsc-fr-w', P8l).addClass('ui-corner-all ui-body-' + d8l.jqmBody);
                 K('.mbsc-sc-btn', P8l).addClass('ui-btn ui-mini ui-corner-all ui-btn-icon-top');
                 K('.mbsc-sc-btn-plus', P8l).addClass('ui-icon-carat-d');
                 K('.mbsc-sc-btn-minus', P8l).addClass('ui-icon-carat-u');
                 K('.mbsc-sc-whl-l', P8l).addClass('ui-body-' + d8l.jqmLine);
                 K('.mbsc-cal-tabs', P8l).attr('data-role', 'navbar');
                 K('.mbsc-cal-prev .mbsc-cal-btn-txt', P8l).attr('data-role', 'button').attr('data-icon', 'arrow-l').attr('data-iconpos', 'notext');
                 K('.mbsc-cal-next .mbsc-cal-btn-txt', P8l).attr('data-role', 'button').attr('data-icon', 'arrow-r').attr('data-iconpos', 'notext');
                 K('.mbsc-cal-events', P8l).attr('data-role', 'page');
                 K('.mbsc-range-btn', P8l).attr('data-role', 'button').attr('data-mini', 'true');
                 K('.mbsc-np-btn', P8l).attr('data-role', 'button').attr('data-corners', 'false');
                 P8l.trigger('create');
             }
         };
         I6.scroller.jqm = K.extend({}, I6.frame.jqm, {
             dateDisplay: 'Mddyy',
             onEventBubbleShow: function Y8l(h8l) {
                 K('.mbsc-cal-event-list', h8l.eventList).attr('data-role', 'listview');
                 K(h8l.eventList).page().trigger('create');
             },
             btnCalPrevClass: '',
             btnCalNextClass: '',
             selectedLineHeight: true,
             selectedLineBorder: 1,
             checkIcon: 'none ui-btn-icon-left ui-icon-check',
             onThemeLoad: function A8l(U8l) {
                 var H8l = U8l.settings,
                     w8l = H8l.jqmBody || 'c',
                     M8l = H8l.jqmEventBubble || 'a';
                 H8l.dayClass = 'ui-body-a ui-body-' + w8l;
                 H8l.innerDayClass = 'ui-state-default ui-btn ui-btn-up-' + w8l;
                 H8l.calendarClass = 'ui-body-a ui-body-' + w8l;
                 H8l.weekNrClass = 'ui-body-a ui-body-' + w8l;
                 H8l.eventBubbleClass = 'ui-body-' + M8l;
             }
         });
         I6.listview.jqm = {
             handleClass: 'ui-btn ui-icon-bars ui-btn-up-c ui-btn-icon-notext ui-icon-shadow ui-corner-all ui-btn-corner-all',
             handleMarkup: '<span class="ui-btn-inner mbsc-lv-handle"><span class="ui-icon ui-icon-bars ui-icon-shadow mbsc-lv-handle">&nbsp;</span></span>',
             leftArrowClass: 'ui-btn-icon-left ui-icon-carat-l',
             rightArrowClass: 'ui-btn-icon-right ui-icon-carat-r',
             onInit: function j8l() {
                 K(this).closest('.mbsc-lv-cont').addClass(K(this).data('inset') ? 'mbsc-lv-jqm-inset' : '').find('.mbsc-lv-dummy, .mbsc-lv-fixed-header').addClass('ui-listview');
                 K('ul,ol', this).listview('refresh');
             },
             onItemAdd: function K8l(G8l) {
                 var Z8l = K(G8l.target).parent();
                 if (Z8l.hasClass('ui-listview')) {
                     Z8l.listview('refresh');
                 } else {
                     Z8l.listview();
                 }
             },
             onSortUpdate: function N8l(V8l) {
                 K(V8l.target).parent().listview('refresh');
             }
         };
         I6.menustrip.jqm = {
             activeClass: 'ui-btn-active',
             disabledClass: 'ui-state-disabled',
             onThemeLoad: function u8l(F8l) {
                 var X8l = F8l.settings,
                     D8l = X8l.jqmSwatch || 'a';
                 X8l.itemClass = 'ui-btn ui-btn-up-' + D8l;
                 X8l.wrapperClass = 'ui-bar-' + D8l;
             }
         };
         var H6;
         var e6;
         var z = P.$;
         var v6 = P.themes;
         var E3 = P.util;
         var c4 = E3.testTouch;
         var c6 = E3.getCoord;
         v6.frame.material = {
             headerText: false,
             btnWidth: false,
             deleteIcon: 'material-backspace',
             onMarkupReady: function o8l(s8l) {
                 f4(z(s8l.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
             }
         };
         v6.scroller.material = z.extend({}, v6.frame.material, {
             showLabel: false,
             selectedLineBorder: 2,
             weekDays: 'min',
             icon: {
                 filled: 'material-star',
                 empty: 'material-star-outline'
             },
             checkIcon: 'material-check',
             btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
             btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
             btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
             onEventBubbleShow: function J8l(g8l) {
                 var T8l = z(g8l.eventList),
                     n8l = z(g8l.target).closest('.mbsc-cal-row').index() < 2,
                     I8l = z('.mbsc-cal-event-color', T8l).eq(n8l ? 0 : -1).css('background-color');
                 z('.mbsc-cal-events-arr', T8l).css('border-color', n8l ? 'transparent transparent ' + I8l + ' transparent' : I8l + 'transparent transparent transparent');
             }
         });
         v6.listview.material = {
             leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
             rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
             onItemActivate: function y8l(r8l) {
                 h3(z(r8l.target), r8l.domEvent);
             },
             onItemDeactivate: function Q8l() {
                 q1(e6);
             },
             onSlideStart: function k8l(m8l) {
                 z('.mbsc-ripple', m8l.target).remove();
             },
             onSortStart: function P2l(d2l) {
                 z('.mbsc-ripple', d2l.target).remove();
             }
         };
         v6.menustrip.material = {
             onInit: function C2l() {
                 f4(z(this), '.mbsc-ms-item.mbsc-btn-e', 'mbsc-btn-d', 'mbsc-btn-nhl');
             },
             onMarkupInit: function B2l() {
                 z('.mbsc-ripple', this).remove();
             },
             onDestroy: function Y2l() {
                 z(this).off('.mbsc-ripple');
             }
         };
         v6.form.material = {
             addRipple: function h2l(A2l, H2l) {
                 h3(A2l, H2l);
             },
             removeRipple: function w2l() {
                 q1(e6);
             }
         };
         var P6 = P.$;
         var Z1 = P.themes;
         Z1.frame.wp = {
             headerText: false,
             deleteIcon: 'backspace4',
             setIcon: 'checkmark',
             cancelIcon: 'close',
             closeIcon: 'close',
             clearIcon: 'close',
             okIcon: 'checkmark',
             nowIcon: 'loop2',
             startIcon: 'play3',
             stopIcon: 'pause2',
             resetIcon: 'stop2',
             lapIcon: 'loop2',
             btnWidth: false
         };
         Z1.scroller.wp = P6.extend({}, Z1.frame.wp, {
             minWidth: 76,
             height: 76,
             dateDisplay: 'mmMMddDDyy',
             showLabel: false,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
             btnPlusClass: 'mbsc-ic mbsc-ic-plus',
             btnMinusClass: 'mbsc-ic mbsc-ic-minus',
             onMarkupInserted: function M2l(N2l, V2l) {
                 function u2l(X2l) {
                     return P6.isArray(j2l.readonly) ? j2l.readonly[X2l] : j2l.readonly;
                 }
                 var U2l, K2l, G2l, Z2l = P6(N2l.target),
                     j2l = V2l.settings;
                 P6('.mbsc-sc-whl', Z2l).on('touchstart mousedown wheel mousewheel', function(D2l) {
                     if (D2l.type === 'mousedown' && K2l || u2l(P6(this).attr('data-index'))) {
                         return;
                     }
                     K2l = D2l.type === 'touchstart';
                     U2l = true;
                     G2l = P6(this).hasClass('mbsc-sc-whl-wpa');
                     P6('.mbsc-sc-whl', Z2l).removeClass('mbsc-sc-whl-wpa');
                     P6(this).addClass('mbsc-sc-whl-wpa');
                 }).on('touchmove mousemove', function() {
                     U2l = false;
                 }).on('touchend mouseup', function(F2l) {
                     if (U2l && G2l && P6(F2l.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                         P6(this).removeClass('mbsc-sc-whl-wpa');
                     }
                     if (F2l.type === 'mouseup') {
                         K2l = false;
                     }
                     U2l = false;
                 });
             }
         });
         Z1.form.wp = {};
         P.customTheme('android-holo-light', 'android-holo');
         P.customTheme('ios-dark', 'ios');
         P.customTheme('material-dark', 'material');
         P.customTheme('mobiscroll-dark', 'mobiscroll');
         P.customTheme('wp-light', 'wp');
         var C4 = P.themes;
         var J7 = P.$;
         var b6 = void 0;
         if (K6.name == 'android') {
             b6 = K6.majorVersion >= 5 ? 'material' : 'android-holo';
         } else if (K6.name == 'ios') {
             b6 = 'ios';
         } else if (K6.name == 'wp') {
             b6 = 'wp';
         }
         P.setAutoTheme = function() {
             J7.each(C4.frame, function(R2l, b2l) {
                 if (b6 && b2l.baseTheme == b6 && R2l != 'android-holo-light' && R2l != 'material-dark' && R2l != 'wp-light' && R2l != 'ios-dark') {
                     P.autoTheme = R2l;
                     return false;
                 } else if (R2l == b6) {
                     P.autoTheme = R2l;
                 }
             });
         };
         P.setAutoTheme();
         return P;
     }(jQuery);
     return mobiscroll;
 }));