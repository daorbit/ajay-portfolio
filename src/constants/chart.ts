export const SERIES_BG = [
  "bg-series-1",
  "bg-series-2",
  "bg-series-3",
  "bg-series-4",
  "bg-series-5",
  "bg-series-6",
] as const;

export const HEAT_LEVEL_BG = ["bg-graph-empty", "bg-heat/30", "bg-heat/55", "bg-heat/80", "bg-heat"] as const;

export function seriesBg(index: number) {
  return SERIES_BG[Math.min(index, SERIES_BG.length - 1)];
}
