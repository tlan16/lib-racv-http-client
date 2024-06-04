import UserAgent from "user-agents";

const url = new URL('https://www.racv.com.au/bin/racv/fuelprice.2.json');
const defaultHeaders = {
  Accept: "text/plain, */*; q=0.01",
  "Cache-Control": "no-cache",
  Dnt: "1",
  Pragma: "no-cache",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Te: "trailers",
} as const;

export const fetchEncrypted = async () => {
  const response = await fetch(url, {
    headers: {
      ...defaultHeaders,
      'User-Agent': new UserAgent({
        deviceCategory: 'mobile',
      }).toString(),
    },
  });
  return await response.text();
}
