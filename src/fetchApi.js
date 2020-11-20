const FetchService = async (props) => {
  const response = await fetch(props);
  if (!response.ok) {
    throw new Error(`Could not fetch ${props}, received ${response.status}`);
  }
  const body = await response.json();
  return body;
};

export default FetchService;
