import { o as object, s as string } from '../../../chunks/schemas-XrMhpOYn_QDO-bjLr.mjs';
import { r as returnToQueryParamName } from '../../../chunks/constants-Dbkf3D5f_CxePdCpP.mjs';
import { getContextualAuth } from '@wix/sdk-runtime/context';
export { renderers } from '../../../renderers.mjs';

const logoutSearchParams = object({ returnToUrl: string().optional() });
const POST = async ({ redirect, request, url }) => {
  const { returnToUrl = "/" } = logoutSearchParams.parse(Object.fromEntries(url.searchParams.entries()));
  const baseUrl = `${new URL(request.url).origin}/${"/"}`;
  const postFlowUrl = new URL("/api/auth/logout-callback", baseUrl);
  const referer = request.headers.get("referer");
  if (referer != null) postFlowUrl.protocol = new URL(referer).protocol;
  postFlowUrl.searchParams.set(returnToQueryParamName, returnToUrl);
  const { logoutUrl } = await getContextualAuth().logout(postFlowUrl.toString());
  return redirect(logoutUrl);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
