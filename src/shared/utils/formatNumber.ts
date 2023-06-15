export const formatWithFixed = (value: number, fixed = 2): string => {
  return value?.toFixed(fixed).replace(/\.?0+$/, '');
};
