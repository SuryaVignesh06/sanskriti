import { e as elevate } from '../../chunks/elevate-CDDLuCIf_DArtH552.mjs';
import { ok } from 'node:assert';
import { oAuthApps } from '@wix/auth-management';
import { W as WIX_CLIENT_ID } from '../../chunks/client_nOb5szat.mjs';
export { renderers } from '../../renderers.mjs';

//#region src/routes/proposal.ts
const GET = async ({ url }) => {
	const { redirectUrlWixPages } = await elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	const newProposalUrl = new URL(url.pathname.replace("/", ""), baseUrl);
	newProposalUrl.search = url.search;
	return new Response(null, {
		headers: { Location: newProposalUrl.toString() },
		status: 302
	});
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
