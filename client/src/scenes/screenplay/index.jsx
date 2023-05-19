import React, { useEffect, useState } from 'react'
import ScreenplayButtons from 'components/ScreenplayButtons'
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios.js';
import ScenesDisplay from 'components/ScenesDisplay';


const Screenplay = () => {

  const location = useLocation();


  let [screenplay, setScreenplay] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (location && location.state && location.state.episodeSelection) {
        let request = await axios.get(location.state.episodeSelection);
        setScreenplay(request.data);
        return request;
      } else {
        console.log('No selection');
      }
    }
  
    if (location && location.state && location.state.episodeSelection) {
      fetchData();
    } else {
      console.log('Location or episodeSelection is null or undefined');
    }
  }, [location]);
  
  useEffect(() => {
    screenplay.sort((a,b) => a.scene - b.scene)
    console.log(screenplay)
  },[screenplay])

  return (
    <Box>
      <ScreenplayButtons />

      <ScenesDisplay scenes={screenplay}/>
    </Box>
  )
}

export default Screenplay
