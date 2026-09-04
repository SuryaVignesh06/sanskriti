import { W as WIX_CLIENT_ID } from './client_nOb5szat.mjs';

const SESSION_COOKIE_NAME = "wixSession";
const SESSION_COOKIE_OPTIONS = {
  path: "/",
  secure: true,
  ...false
};
function saveSessionTokensToCookie(context, tokens) {
  context.cookies.set(SESSION_COOKIE_NAME, {
    clientId: WIX_CLIENT_ID,
    tokens
  }, SESSION_COOKIE_OPTIONS);
}

export { saveSessionTokensToCookie as s };
