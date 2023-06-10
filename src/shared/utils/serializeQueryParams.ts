interface QueryParams {
  from?: string;
  to?: string;
}

export const serializeQueryParams = (searchParams: URLSearchParams): QueryParams => {
  const params: QueryParams = {};

  searchParams.forEach((value, key) => {
    params[key as keyof QueryParams] = value;
  });

  return params;
};
