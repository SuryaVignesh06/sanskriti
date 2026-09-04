import { W as WIX_CLIENT_PUBLIC_KEY, a as WIX_CLIENT_SECRET } from '../../../../../chunks/server_BMj9HAzV.mjs';
export { renderers } from '../../../../../renderers.mjs';

//#region src/routes/extensions.ts
const authOptions = {
	appSecret: WIX_CLIENT_SECRET,
	publicKey: WIX_CLIENT_PUBLIC_KEY
};
const runExtension = await createServeExtensionRunner();
const ALL = async (context) => {
	const componentId = context.params.id;
	if (componentId == null) return new Response(null, { status: 404 });
	try {
		return await runExtension({
			componentId,
			payload: await context.request.text(),
			url: context.request.url
		});
	} catch (error) {
		return Response.json(error, { status: 500 });
	}
};
async function createServeExtensionRunner() {
	const { entries } = await import('../../../../../chunks/wix-backend-entries_D5628B73.mjs');
	return async ({ componentId, payload, url }) => {
		const loadModule = entries[componentId];
		if (loadModule == null) return new Response(null, { status: 404 });
		const result = await (await loadModule()).default({
			authOptions,
			payload,
			url
		});
		return Response.json(result ?? null);
	};
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
