export const getDiff = (value: number, previousValue: number) => {
  const diff = +(((value - previousValue) / value) * 100).toFixed(2);

  const diffColor = diff > 0 ? "diffPositive" : "diffNegative";

  return { diff, diffColor };
};
