import { useEffect, useState } from "react";

import client from "../client";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await client
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => setError(true));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setLoading(false);
      setData(null);
    };
  }, []);

  return [{ loading, data, error }, fetchData];
}
