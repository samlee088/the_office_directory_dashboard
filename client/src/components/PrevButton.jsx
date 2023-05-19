import React from 'react'
import Button from '@mui/material/Button';

const PrevButton = ({onClick}) => {
  return (
    <div>
       <Button variant="contained" onClick={onClick}>Prev</Button>
    </div>
  )
}

export default PrevButton
