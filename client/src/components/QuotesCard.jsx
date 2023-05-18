import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';





const QuotesCard = ({ renderDisplay }) => {

    return (
        <Card sx={{ minWidth: 275, maxWidth: '700px', }}>
            <CardContent sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Episode Name:
                </Typography>
                <Typography variant="h5" component="div">
                    {renderDisplay.episode_name}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Episode Number: 
                </Typography>
                <Typography sx={{ mb: 1.5}} variant="h5" component="div">
                    {renderDisplay.episode}
                </Typography>
                <Typography>
                    Character:
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    {renderDisplay.character}
                </Typography>
                <Typography variant="h5" component="div">
                    " {renderDisplay.quote} "
                </Typography>
            </CardContent>
        </Card>
    )
}

export default QuotesCard
