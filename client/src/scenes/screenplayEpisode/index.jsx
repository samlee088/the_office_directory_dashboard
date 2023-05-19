import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import dwightAndJimImage from 'images/dwightandjim.jpg'
import pamAndJimImage from 'images/jimandpampicture.jpg'

const ScreenplayEpisode = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let seasonSelection = location.state.seasonSelection.match(/\/(\d)/)[1]
    
    let [episodes, setEpisodes] = useState([])
    useEffect( ()=> {

            setEpisodes(episodeGuide[seasonSelection])
            console.log(episodes);
    }, [] )

    async function episodeSelection(episodeIndex) {
        navigate('/screenplay', {state: {episodeSelection: `${location.state.seasonSelection}${episodeIndex}`}} )
    }


    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
        margin: '10px'
        },
        margin: '10px',
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
 <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '400px', height: '100%', justifyContent: 'space-evenly'}}>
    {episodes.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
            width: image.width,
        }}
        onClick={ () => episodeSelection(episodes.indexOf(image))}
        
        >
        <ImageSrc style={{ backgroundImage: `url(${dwightAndJimImage})` }} />
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
            {image}
            <ImageMarked className="MuiImageMarked-root" />
            </Typography>
        </Image>
        </ImageButton>
    ))}
    </Box>
    
      
    </div>
  )
}

export default ScreenplayEpisode

const episodeGuide = 
[
    [
    "Pilot",
    "Diversity Day",
    "Health Care",
    "The Alliance",
    "Basketball",
    "Hot Girl",
    ],
    [
        "The Dundies",
        "Sexual Harassment",
        "Office Olympics",
        "The Fire",
        "Halloween",
        "The Fight",
        "The Client",
        "Performance Review",
        "Email Surveillance",
        "Christmas Party",
        "Booze Cruise",
        "The Injury",
        "The Secret",
        "The Carpet",
        "Boys and Girls",
        "Valentine's Day",
        "Dwight's Speech",
        "Take Your Daughter to Work Day",
        "Michael's Birthday",
        "Drug Testing",
        "Conflict Resolution",
        "Casino Night",
    ],
    [
        "Gay Witch Hunt",
        "The Convention",
        "The Coup",
        "Grief Counseling",
        "Initiation",
        "Diwali",
        "Branch Closing",
        "The Merger",
        "The Convict",
        "A Benihana Christmas",
        "Back from Vacation",
        "Traveling Salesmen",
        "The Return",
        "Ben Franklin",
        "Phyllis' Wedding",
        "Business School",
        "Cocktails",
        "The Negotiation",
        "Safety Training",
        "Product Recall",
        "Women's Appreciation",
        "Beach Games",
        "The Job",
    ],
    [
        "Fun Run",
        "Dunder Mifflin Infinity",
        "Launch Party",
        "Money",
        "Local Ad",
        "Branch Wars",
        "Survivor Man",
        "The Deposition",
        "Dinner Party",
        "Chair Model",
        "Night Out",
        "Did I Stutter?",
        "Job Fair",
        "Goodbye, Toby",
    ],
    [
        "Weight Loss",
        "Business Ethics",
        "Baby Shower",
        "Crime Aid",
        "Employee Transfer",
        "Customer Survey",
        "Business Trip",
        "Frame Toby",
        "The Surplus",
        "Moroccan Christmas",
        "The Duel",
        "Prince Family Paper",
        "Stress Relief",
        "Lecture Circuit: Part 1",
        "Lecture Circuit: Part 2",
        "Blood Drive",
        "Golden Ticket",
        "New Boss",
        "Two Weeks",
        "Dream Team",
        "Michael Scott Paper Company",
        "Heavy Competition",
        "Broke",
        "Casual Friday",
        "Cafe Disco",
        "Company Picnic",
    ],
    [
        "Gossip",
        "The Meeting",
        "The Promotion",
        "Niagara",
        "Mafia",
        "The Lover",
        "Koi Pond",
        "Double Date",
        "Murder",
        "Shareholder Meeting",
        "Scott's Tots",
        "Secret Santa",
        "The Banker",
        "Sabre",
        "The Manager and the Salesman",
        "The Delivery",
        "St. Patrick's Day",
        "New Leads",
        "Happy Hour",
        "Secretary's Day",
        "Body Language",
        "The Cover-Up",
        "The Chump",
        "Whistleblower",
    ],
    [
        "Nepotism",
        "Counseling",
        "Andy's Play",
        "Sex Ed",
        "The Sting",
        "Costume Contest",
        "Christening",
        "Viewing Party",
        "WUPHF.com",
        "China",
        "Classy Christmas",
        "Ultimatum",
        "The Seminar",
        "The Search",
        "PDA",
        "Threat Level Midnight",
        "Todd Packer",
        "Garage Sale",
        "Training Day",
        "Michael's Last Dundies",
        "Goodbye, Michael",
        "The Inner Circle",
        "Dwight K. Schrute, (Acting) Manager",
        "Search Committee",
    ],
    [
        "The List",
        "The Incentive",
        "Lotto",
        "Garden Party",
        "Spooked",
        "Doomsday",
        "Pam's Replacement",
        "Gettysburg",
        "Mrs. California",
        "Christmas Wishes",
        "Trivia",
        "Pool Party",
        "Jury Duty",
        "Special Project",
        "Tallahassee",
        "After Hours",
        "Test the Store",
        "Last Day in Florida",
        "Get the Girl",
        "Welcome Party",
        "Angry Andy",
        "Fundraiser",
        "Turf War",
        "Free Family Portrait Studio",
    ],
    [
        "New Guys",
        "Roy's Wedding",
        "Andy's Ancestry",
        "Work Bus",
        "Here Comes Treble",
        "The Boat",
        "The Whale",
        "The Target",
        "Dwight Christmas",
        "Lice",
        "Suit Warehouse",
        "Customer Loyalty",
        "Junior Salesman",
        "Vandalism",
        "Couples Discount",
        "Moving On",
        "The Farm",
        "Promos",
        "Stairmageddon",
        "Paper Airplane",
        "Livin' the Dream",
        "A.A.R.M.",
        "Finale",
    ],
]