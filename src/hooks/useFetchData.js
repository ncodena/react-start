import React, {useState, useEffect } from 'react';

const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const backend_url = process.env.BACKEND_URL;
            const response = await fetch(backend_url + url); 
            const data = await response.json();
            setData(data)
        } catch(whatever){
            setError(whatever)
        } finally {
            setLoading(false);
        }
      }

      fetchData()
    }, [url]);
    
  return { data, loading, error}
}

export default useFetchData