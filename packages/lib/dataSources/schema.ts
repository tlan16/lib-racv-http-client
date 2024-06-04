import { z } from "zod";

export const schema = z.object({
  FuelMap: z.object({
    site: z.array(
      z.object({
        Address: z.string(),
        latitude: z.string(),
        siteId: z.string(),
        Band: z.string(),
        longitude: z.string(),
        Name: z.string(),
      }),
    ),
    bands: z.array(z.object({
      B: z.string(),
      E: z.string(),
      I: z.string(),
    })),
  }),
  DontBuyMoreThan: z.object({
    CustomRegion25PercentilePrices: z.array(
      z.object({
        CustomRegionId: z.number(),
        FuelId: z.number(),
        Price: z.number(),
      }),
    ),
  }),
  TodaysPrice: z.object({
    CustomRegionsAvgHighLow: z.array(
      z.object({
        CustomRegionId: z.number(),
        FuelId: z.number(),
        AvgPrice: z.number(),
        SiteFuelCount: z.number(),
        LowPrice: z.number(),
        HighPrice: z.number(),
        UtcDateTime: z.string(),
      }),
    ),
  }),
  YesterdaysPrice: z.object({
    CustomRegionsAvgHighLow: z.array(
      z.object({
        CustomRegionId: z.number(),
        FuelId: z.number(),
        AvgPrice: z.number(),
        SiteFuelCount: z.number(),
        LowPrice: z.number(),
        HighPrice: z.number(),
        UtcDateTime: z.string(),
      }),
    ),
  }),
  GraphJSON: z.object({
    x1: z.array(z.number()),
    month: z.array(z.number()),
    retail: z.array(z.string()),
    wholesale: z.array(z.string()),
  }),
  WholesaleTodayAveragePrice: z.string(),
});
