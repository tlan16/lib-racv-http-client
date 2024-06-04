import { fetchEncrypted } from "./dataSources/fetchEncrypted";
import { decrypt, Decrypted } from "./dataSources/decrypt";

export const fetchFuelPrices = async (): Promise<Decrypted> => {
  const encrypted = await fetchEncrypted();
  return decrypt(encrypted);
}
