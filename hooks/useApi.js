import {useCallback, useEffect, useState} from "react";

export const useApi = endpoint => {
  const [load, setLoad] = useState(false);
  const [response, setResponse] = useState([]);
  const fetchFromApi = useCallback(async () => {
    try {
      setLoad(true);
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setResponse(data);
        setLoad(false);
      } else {
        throw new Error(`Fetch fehlgeschlagen mit Status: ${response.status}`);
      }
    } catch (error) {
      alert(error.message);
    }
  }, [endpoint]);
  useEffect(() => {
    fetchFromApi();
  }, [fetchFromApi]);
  return {response, load, fetchFromApi};
};
