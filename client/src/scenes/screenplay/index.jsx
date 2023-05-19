import React, { useEffect, useState } from 'react'
import ScreenplayButtons from 'components/ScreenplayButtons'
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios.js';
import ScenesDisplay from 'components/ScenesDisplay';
import PrevButton from 'components/PrevButton';
import NextButton from 'components/NextButton';


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
    if(screenplay) {
      screenplay.sort((a,b) => a.scene - b.scene)
      console.log(screenplay)
      setCurrentScene(screenplay[index])
    }
   
  },[screenplay])

  let [index, setIndex] = useState(0);
  let [currentScene, setCurrentScene] = useState('')

  function nextScene() {
    setIndex(index + 1)
    console.log(index)

  }

  function prevScene() {
    setIndex(index-1)
    console.log(index)
  }

  useEffect(() => {
    if(index) {
      setCurrentScene(screenplay[index])
    }
  },[index])
  return (
    <Box>
      <ScreenplayButtons />

      {location.state && currentScene && <ScenesDisplay scene={currentScene}/>}

      {index !== 0 ? <PrevButton onClick={prevScene} /> : console.log('First Scene')}
      {location.state && <NextButton onClick={nextScene} />}

    </Box>
  )
}

export default Screenplay
