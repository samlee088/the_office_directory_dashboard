import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios.js';
import { Box, Typography, CardMedia } from '@mui/material';
import QuotesButtons from 'components/QuotesButtons';
import QuotesCard from 'components/QuotesCard';
import FlexBetween from 'components/FlexBetween';
import loadingImage from 'images/loadingImage.jpg';


const Quotes = () => {

  const [quotes, setQuotes] = useState([]);
  const [passAlongQuote, setPassAlongQuote] = useState([])
  const [currentSeason, setCurrentSeason] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect( () => {
    async function fetchData() {
      setLoading(true)
      const seasonRandomGenerated = Math.floor( (Math.random()*9)+1)
      setCurrentSeason(location.state ? location.state.seasonSelection.match(/\/(\d)/)[1] : seasonRandomGenerated)

      const Url = location.state ? location.state.seasonSelection : `season/${seasonRandomGenerated}/format/quotes`

      const request = await axios.get( Url );

      setQuotes(request.data);
      randomQuotePick(quotes);

      setLoading(false);
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

    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <Typography variant="h1">
            Season 
          </Typography>
        <Typography variant="h1">
        {currentSeason}
      </Typography>
    </Box>

    {loading ? (
      <FlexBetween sx={{justifyContent: 'center', m: '100px'}}>
        <CardMedia component="img" image={loadingImage} />
      </FlexBetween>
      ): (
        <FlexBetween sx={{justifyContent: 'center', m: '100px'}}>
            <QuotesCard renderDisplay={passAlongQuote}/>
        </FlexBetween>
      ) }
  
    </div>
  )
}

export default Quotes
