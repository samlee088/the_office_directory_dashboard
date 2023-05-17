import React, { useEffect, useState } from 'react'
import axios from 'axios.js';

const Quotes = () => {

  const [quotes, setQuotes] = useState([]);

  const baseUrl = 'season/3/format/quotes';

  useEffect( () => {
    async function fetchData() {
      const request = await axios.get( baseUrl );
      setQuotes(request.data);
      console.log(request)
      return request
    }

    fetchData();
    console.log(quotes)

  }, [])


  return (
    <div>
      
    </div>
  )
}

export default Quotes
