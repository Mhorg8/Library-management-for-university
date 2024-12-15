export function updateUrl(query: string, value: string): string {
  // Get the current URL's search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the new query and its value
  searchParams.set(query, value);
  const pathname = window.location.pathname;

  // Construct the full URL properly
  const url = `${pathname}?${searchParams.toString()}`;

  return url;
}
