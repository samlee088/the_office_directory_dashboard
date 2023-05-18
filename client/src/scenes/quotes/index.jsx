import React, { useEffect, useState } from 'react'
import axios from 'axios.js';
import { Box} from '@mui/material';
import QuotesButtons from 'components/QuotesButtons';
import QuotesCard from 'components/QuotesCard';
import FlexBetween from 'components/FlexBetween';


const Quotes = () => {

  const [quotes, setQuotes] = useState([]);
  const [passAlongQuote, setPassAlongQuote] = useState([])
  const baseUrl = 'season/3/format/quotes';

  useEffect( () => {
    async function fetchData() {
      const request = await axios.get( baseUrl );
      setQuotes(request.data);
      randomQuotePick(quotes)
    }

      
    fetchData();

  }, [])

  useEffect( () => {
      randomQuotePick(quotes);
  }, [quotes])
  


  let randomQuotePick = async(quotesArray) => {

    if(quotesArray.length === 0 ) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    console.log(quotes[randomIndex]);
    const randomQuoteSelection = quotes[randomIndex]
    setPassAlongQuote(randomQuoteSelection)
    return passAlongQuote;
  }



  return (
    <div>
    <QuotesButtons buttonRender={randomQuotePick} quotes={quotes}/>

    <FlexBetween sx={{justifyContent: 'center', m: '100px'}}>
        <QuotesCard renderDisplay={passAlongQuote}/>
    </FlexBetween>

    </div>
  )
}

export default Quotes
