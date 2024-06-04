A http api client of RACV's fuel price [page](https://www.racv.com.au/on-the-road/driving-maintenance/fuel-prices.html).

Sample usage:

```typescript
import { fetchFuelPrices } from "lib-racv-http-client";
const prices = await fetchFuelPrices();
```

Shape of the returned object may vary from time to time, depending on the data returned by the RACV's fuel price page.

Best effort definition is here: [dataSources/schema.ts](dataSources/schema.ts)

The library fetches and decrypted the fuel price data.
