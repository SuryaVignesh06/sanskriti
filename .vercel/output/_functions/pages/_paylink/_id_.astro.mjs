import { e as elevate } from '../../chunks/elevate-CDDLuCIf_DArtH552.mjs';
import { ok } from 'node:assert';
import { oAuthApps } from '@wix/auth-management';
import { W as WIX_CLIENT_ID } from '../../chunks/client_nOb5szat.mjs';
export { renderers } from '../../renderers.mjs';

//#region src/routes/payment-link.ts
const GET = async ({ params, redirect }) => {
	const { redirectUrlWixPages } = await elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	return redirect(new URL(`_paylink/${params.id}`, baseUrl).toString(), 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
