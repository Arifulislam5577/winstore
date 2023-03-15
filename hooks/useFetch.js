import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setError(true);
        console.log(error);
      }
    };

    getData();
  }, [url]);

  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
