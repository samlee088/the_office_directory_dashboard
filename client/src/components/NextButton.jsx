import React from 'react'
import Button from '@mui/material/Button';

const NextButton = ({onClick}) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick}>Next</Button>
    </div>
  )
}

export default NextButton
