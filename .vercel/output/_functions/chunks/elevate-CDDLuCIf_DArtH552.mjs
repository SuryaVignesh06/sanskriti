import { createRESTModule } from '@wix/sdk-runtime/rest-modules';

//#region src/elevate.ts
function elevate(restModule) {
	return createRESTModule(restModule, true);
}

export { elevate as e };
