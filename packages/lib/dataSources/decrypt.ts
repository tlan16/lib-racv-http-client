import CryptoJS from "crypto-js";
import { type z } from "zod";
import { schema } from "./schema";

const secret = 'gUkXp2s5v8y/B?E(';
const parsedSecret = CryptoJS.enc.Utf8.parse(secret);

export type Decrypted = z.infer<typeof schema>;

export const decrypt = (encrypted: string) => {
  const decodedObject = CryptoJS.AES.decrypt(
    encrypted,
    parsedSecret,
    {
      iv: CryptoJS.enc.Utf8.parse(secret.substring(0, 16)),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    },
  );

  const decodedString = decodedObject.toString(CryptoJS.enc.Utf8);
  const decodedJson: unknown = JSON.parse(decodedString);
  return schema.parse(decodedJson);
};
