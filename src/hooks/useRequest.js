import { useState, useEffect } from "react";
const useRequest = (request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    request()
      .then((data) => setData(data))
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [request]);

  return { data, loading, error };
};

export default useRequest;
