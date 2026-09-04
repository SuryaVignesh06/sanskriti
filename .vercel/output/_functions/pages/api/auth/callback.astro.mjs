import { s as saveSessionTokensToCookie } from '../../../chunks/saveSessionTokensToCookie-DK3xvtzk_BWW99Dnk.mjs';
import { o as object, s as string } from '../../../chunks/schemas-XrMhpOYn_QDO-bjLr.mjs';
import { o as oAuthStateCookieName } from '../../../chunks/constants-Dbkf3D5f_CxePdCpP.mjs';
import { getContextualAuth } from '@wix/sdk-runtime/context';
export { renderers } from '../../../renderers.mjs';

//#region src/routes/callback.ts
const oauthCookieSchema = object({
	codeChallenge: string(),
	codeVerifier: string(),
	originalUri: string(),
	redirectUri: string(),
	state: string()
});
const GET = async (context) => {
	const oauthStateCookie = context.cookies.get(oAuthStateCookieName);
	if (oauthStateCookie == null) throw new Error(`Missing \`${oAuthStateCookieName}\` cookie`);
	const oauthData = oauthCookieSchema.parse(JSON.parse(oauthStateCookie.value));
	if (!oauthData.originalUri.startsWith("/")) throw new Error("Invalid `originalUri` cookie param, only relative URLs are allowed");
	const auth = getContextualAuth();
	const { code, error, errorDescription, state } = auth.parseFromUrl(context.url.toString(), "query");
	if (error != null) throw new Error(`Error while authenticating: \`${errorDescription}\``);
	const memberTokens = await auth.getMemberTokens(code, state, oauthData);
	context.cookies.delete(oAuthStateCookieName, {
		httpOnly: true,
		path: "/",
		sameSite: "lax",
		secure: true
	});
	saveSessionTokensToCookie(context, memberTokens);
	return context.redirect(oauthData.originalUri);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
