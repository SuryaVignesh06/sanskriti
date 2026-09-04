import { ok } from 'node:assert';
import { oAuthApps } from '@wix/auth-management';
import { W as WIX_CLIENT_ID } from '../chunks/client_nOb5szat.mjs';
import { createRESTModule } from '@wix/sdk-runtime/rest-modules';
export { renderers } from '../renderers.mjs';

//#region src/elevate.ts
function elevate(restModule) {
	return createRESTModule(restModule, true);
}

//#endregion
//#region src/routes/robots.ts
const GET = async ({ request }) => {
	const { redirectUrlWixPages } = await elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	const robotsUrl = new URL("robots.txt", baseUrl);
	const userAgent = request.headers.get("user-agent");
	const originalResponse = await fetch(robotsUrl, { headers: { ...userAgent != null ? { "User-Agent": userAgent } : {} } });
	if (!originalResponse.ok) throw new Error(`Failed to retrieve original robots.txt from: \`${robotsUrl.toString()}\`. Error: \`${originalResponse.statusText}\``);
	const contentType = originalResponse.headers.get("content-type");
	return new Response(originalResponse.body, { headers: { ...contentType != null ? { "Content-Type": contentType } : {} } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
