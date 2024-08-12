const DataComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await fetchData('http://someAPI');
      if (data) setData(data);
      if (error) setError(error.message);
    }
    doFetch();
  }, []); // empty array will run only once

  // code to render the data or the error
}