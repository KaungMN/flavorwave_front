export const fetcher = async (url) => {
  return await axios.get(url).then((res) => res.data);
};
