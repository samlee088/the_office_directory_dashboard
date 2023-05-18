import React, { useEffect, useState } from 'react'
import axios from 'axios.js';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import dwightAndJimImage from 'images/dwightandjim.jpg'
import pamAndJimImage from 'images/jimandpampicture.jpg'
import QuotesButtons from 'components/QuotesButtons';

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

  }, [])


 

  return (
    <div>
    <QuotesButtons/>
    </div>
  )
}

export default Quotes
