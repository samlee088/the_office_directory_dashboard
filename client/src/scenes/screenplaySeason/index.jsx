import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import dwightAndJimImage from 'images/dwightandjim.jpg'
import pamAndJimImage from 'images/jimandpampicture.jpg'


const ScreenplaySeason = () => {
    const navigate = useNavigate();
    async function seasonSelection(urlData) {
        navigate('/screenplayEpisode', {state: {seasonSelection: urlData}} )
    }

    const images = [
        {
            url: dwightAndJimImage,
            title: 'Season One',
            width: '30%',
            ajaxCall: 'season/1/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Two',
            width: '30%',
            ajaxCall: 'season/2/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Three',
            width: '30%',
            ajaxCall: 'season/3/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Four',
            width: '30%',
            ajaxCall: 'season/4/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Five',
            width: '30%',
            ajaxCall: 'season/5/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Six',
            width: '30%',
            ajaxCall: 'season/6/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Seven',
            width: '30%',
            ajaxCall: 'season/7/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Eight',
            width: '30%',
            ajaxCall: 'season/8/episode/'
        },
        {
            url: pamAndJimImage,
            title: 'Season Nine',
            width: '30%',
            ajaxCall: 'season/9/episode/'
        },


    ]
    
    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
        },
    }));
    
    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });
    
    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));
    
    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));
    
    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));
    
return (
    <div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'space-evenly'}}>
    {images.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
            width: image.width,
        }}
        onClick={ () => seasonSelection(image.ajaxCall)}
        sx={{ m: 1}}
        >
        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
            <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
            >
            {image.title}
            <ImageMarked className="MuiImageMarked-root" />
            </Typography>
        </Image>
        </ImageButton>
    ))}
    </Box>
    </div>
)
}

export default ScreenplaySeason
