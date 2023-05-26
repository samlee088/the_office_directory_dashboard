import React, { useEffect, useState } from 'react'
import ScreenplayButtons from 'components/ScreenplayButtons'
import { Box, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios.js';
import ScenesDisplay from 'components/ScenesDisplay';
import PrevButton from 'components/PrevButton';
import NextButton from 'components/NextButton';
import loadingImage from 'images/loadingImage.jpg';
import FlexBetween from 'components/FlexBetween';

const Screenplay = () => {

  const location = useLocation();


  let [screenplay, setScreenplay] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      if (location && location.state && location.state.episodeSelection) {
        let request = await axios.get(location.state.episodeSelection);
        setScreenplay(request.data);
        setLoading(false);
        return request;
      } else {
        console.log('No selection');
        setLoading(false);
      }
    }
  
    if (location && location.state && location.state.episodeSelection) {
      fetchData();
    } else {
      console.log('Location or episodeSelection is null or undefined');
    }
  }, [location]);

  useEffect(() => {
    if(screenplay) {
      screenplay.sort((a,b) => a.scene - b.scene)
      console.log(screenplay)
      setCurrentScene(screenplay[index])
    }
   
  },[screenplay])

  let [index, setIndex] = useState(0);
  let [currentScene, setCurrentScene] = useState('')

  const nextScene = () => setIndex( (previousState) => {
    return previousState + 1;
  })

  const prevScene = () => { setIndex((previousState) => {
    return previousState - 1;
  })}

  useEffect(() => {
    if(index) {
      setCurrentScene(screenplay[index])
    }
  },[index])

  return (
    <Box > 
      <ScreenplayButtons />

      {loading? ( 
       <FlexBetween sx={{justifyContent: 'center', m: '100px'}}>
       <CardMedia component="img" image={loadingImage} />
     </FlexBetween>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', mt: 5}}>
        {location.state && currentScene && <ScenesDisplay scene={currentScene} sx={{justifyContent: 'center', textAlign: 'center'}}/>}
      </Box>
      )}
    
      <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <Box sx={{m: 5}}>
          {index !== 0 ? <PrevButton onClick={prevScene}/> : console.log('First Scene')}
        </Box>
        <Box sx={{m: 5}}>
          {index !== screenplay.length && location.state && <NextButton onClick={nextScene}/>}
        </Box>
      </Box>
    </Box>
  )
}

export default Screenplay
