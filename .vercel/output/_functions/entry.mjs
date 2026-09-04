import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_MDqf_Nef.mjs';
import { manifest } from './manifest_CxNbLeDG.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/__ecom/checkout.astro.mjs');
const _page2 = () => import('./pages/_api/_---path_.astro.mjs');
const _page3 = () => import('./pages/_paylink/_id_.astro.mjs');
const _page4 = () => import('./pages/_proposal/_id_.astro.mjs');
const _page5 = () => import('./pages/_wix/extensions/backoffice/_compid_.astro.mjs');
const _page6 = () => import('./pages/_wix/extensions/service-plugins/_id_/_---path_.astro.mjs');
const _page7 = () => import('./pages/_wix/extensions/service-plugins/_id_/_---path_.astro.mjs');
const _page8 = () => import('./pages/api/auth/callback.astro.mjs');
const _page9 = () => import('./pages/api/auth/login.astro.mjs');
const _page10 = () => import('./pages/api/auth/logout.astro.mjs');
const _page11 = () => import('./pages/api/auth/logout-callback.astro.mjs');
const _page12 = () => import('./pages/__ecom/checkout.astro.mjs');
const _page13 = () => import('./pages/robots.txt.astro.mjs');
const _page14 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/payment-checkout.mjs", _page1],
    ["node_modules/@wix/astro/build/dependencies/astro-viewer-api/backend-runtime/api.mjs", _page2],
    ["node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/payment-link.mjs", _page3],
    ["node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/proposal.mjs", _page4],
    ["node_modules/@wix/astro/build/dependencies/astro-backoffice-extensions/astro-runtime/entry.astro", _page5],
    ["node_modules/@wix/astro/build/dependencies/astro-backend-extensions/backend-runtime/routes/extensions.mjs", _page6],
    ["node_modules/@wix/astro/build/dependencies/astro-backend-extensions/backend-runtime/routes/extensions.mjs", _page7],
    ["node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/callback.mjs", _page8],
    ["node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/login.mjs", _page9],
    ["node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout.mjs", _page10],
    ["node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout-callback.mjs", _page11],
    ["node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/payment-checkout.mjs", _page12],
    ["node_modules/@wix/astro/build/dependencies/astro-robots/backend-runtime/robots.mjs", _page13],
    ["src/pages/[...slug].astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "0c4cdd9d-2a80-4711-896b-8c86d82439bb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
