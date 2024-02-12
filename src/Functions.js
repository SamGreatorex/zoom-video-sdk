import { KJUR } from "jsrsasign";

const ZOOM_SDK_KEY = "";
const ZOOM_SDK_SECRET = "";

export function generateToken(sessionName, role, sessionKey, password) {
  const iat = Math.round((new Date().getTime() - 30000) / 1000);
  const exp = iat + 60 * 60 * 2;

  const payload = {
    app_key: ZOOM_SDK_KEY,
    tpc: sessionName,
    version: 1,
    role_type: role,
    session_key: sessionKey,
    iat: iat,
    exp: exp,
    pwd: password,
  };

  const header = { alg: "HS256", typ: "JWT" };

  const signature = KJUR.jws.JWS.sign("HS256", JSON.stringify(header), JSON.stringify(payload), ZOOM_SDK_SECRET);

  return signature;
}
