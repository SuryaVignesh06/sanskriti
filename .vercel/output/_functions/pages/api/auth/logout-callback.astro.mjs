import { s as saveSessionTokensToCookie } from '../../../chunks/saveSessionTokensToCookie-DK3xvtzk_BWW99Dnk.mjs';
import { r as returnToQueryParamName } from '../../../chunks/constants-Dbkf3D5f_CxePdCpP.mjs';
import { getContextualAuth } from '@wix/sdk-runtime/context';
export { renderers } from '../../../renderers.mjs';

//#region src/routes/logout-callback.ts
const GET = async (context) => {
	const returnTo = context.url.searchParams.get(returnToQueryParamName) ?? "/";
	if (!returnTo.startsWith("/")) throw new Error(`Invalid \`${returnToQueryParamName}\` query param, only relative URLs are allowed`);
	saveSessionTokensToCookie(context, await getContextualAuth().generateVisitorTokens());
	return context.redirect(returnTo);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
