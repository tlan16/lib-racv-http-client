A http api client of RACV's fuel price [page](https://www.racv.com.au/on-the-road/driving-maintenance/fuel-prices.html).

Sample usage:

```typescript
const prices = await fetchFuelPrices();
```

Shape of the returned object may vary depends on RACV's implementation.

The library fetches and decrypted the fuel price data.
