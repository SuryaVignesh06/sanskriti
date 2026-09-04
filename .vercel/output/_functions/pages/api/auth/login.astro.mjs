import { o as object, s as string, _ as _enum } from '../../../chunks/schemas-XrMhpOYn_QDO-bjLr.mjs';
import { o as oAuthStateCookieName } from '../../../chunks/constants-Dbkf3D5f_CxePdCpP.mjs';
import { getContextualAuth } from '@wix/sdk-runtime/context';
export { renderers } from '../../../renderers.mjs';

const loginSearchParams = object({
  prompt: _enum(["login", "none"]).optional(),
  returnToUrl: string().optional()
});
const GET = async ({ request, url }) => {
  const { prompt, returnToUrl = "/" } = loginSearchParams.parse(Object.fromEntries(url.searchParams.entries()));
  const callbackUrl = new URL("/api/auth/callback", url);
  const referer = request.headers.get("referer");
  if (referer != null) callbackUrl.protocol = new URL(referer).protocol;
  const auth = getContextualAuth();
  const oauthData = auth.generateOAuthData(callbackUrl.toString(), returnToUrl);
  const { authUrl } = await auth.getAuthUrl(oauthData, {
    prompt,
    responseMode: "query"
  });
  const sameSite = "Lax";
  return new Response(null, {
    headers: {
      Location: authUrl,
      "Set-Cookie": `${oAuthStateCookieName}=${JSON.stringify(oauthData)}; Max-Age=1800; Path=/; HttpOnly; Secure; SameSite=${sameSite}`
    },
    status: 302
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
