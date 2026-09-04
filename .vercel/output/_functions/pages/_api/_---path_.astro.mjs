import { ok } from 'node:assert';
import { oAuthApps } from '@wix/auth-management';
import { W as WIX_CLIENT_ID } from '../../chunks/client_nOb5szat.mjs';
import { createRESTModule } from '@wix/sdk-runtime/rest-modules';
export { renderers } from '../../renderers.mjs';

//#region src/elevate.ts
function elevate(restModule) {
	return createRESTModule(restModule, true);
}

//#endregion
//#region src/routes/api.ts
const ALL = async ({ url }) => {
	const { redirectUrlWixPages } = await elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseWixUrl = new URL(redirectUrlWixPages);
	const mergedPath = baseWixUrl.pathname.replace(/\/$/, "") + url.pathname.replace(/\/$/, "");
	const redirectUrl = new URL(mergedPath, baseWixUrl.origin);
	for (const [key, value] of [...baseWixUrl.searchParams.entries(), ...url.searchParams.entries()]) redirectUrl.searchParams.append(key, value);
	return new Response(null, {
		headers: { Location: redirectUrl.toString() },
		status: 307
	});
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
