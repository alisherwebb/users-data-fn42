import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function useGetData(id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(id ? API + "/" + id : API);
      if (!response.ok) {
        throw new Error("Qandaydir xatolik bor");
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, error, loading };
}

export default useGetData;
