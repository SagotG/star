export const extractParams = (
  ref: string | undefined,
  delimiter: string
): string => {
  if (ref) {
    const extract = ref
      .split(delimiter)
      .filter((s) => !!s)
      .pop();
    return extract !== undefined ? extract : '';
  }
  return '';
};
