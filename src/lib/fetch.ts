import { useState, useEffect } from 'react';

function useFetchWithDelay<DataType>(url: string, minDelay: number = 500, maxDelay: number = 1500) {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    const fetchDataWithDelay = () => {
      setLoading(true);
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;

      setTimeout(() => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            if (isMounted) {
              setData(data);
            }
          })
          .catch(e => {
            if (isMounted) {
              setError(e);
            }
          })
          .finally(() => {
            setLoading(false);
          });
      }, delay);
    };

    fetchDataWithDelay();

    return () => {
      isMounted = false; // Cleanup function to avoid setting state on unmounted component
    };
  }, [url, minDelay, maxDelay]);

  return { data, loading, error };
}

export default useFetchWithDelay;
