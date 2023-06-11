export const formatWithFixed = (value: number, fixed = 2) => {
  return value?.toFixed(fixed).replace(/\.?0+$/, '');
};
