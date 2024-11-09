import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const getApi = () => {
    const api_key = import.meta.env.VITE_API_KEY;
    axios
      // .get(`https://${api_key}.mockapi.io/productss`)
      .get(`https://${api_key}.mockapi.io/productss`)
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return <div>loading..</div>;
};

export default App;
