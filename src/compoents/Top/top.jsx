import {Box,Stack,Typography,Card,CardActions,CardContent,CardMedia,Button} from '@mui/material'
import Img from '../../assets/top-game-01.jpg'
import './top.style.scss'
export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{padding:{lg:'0 0 1% 9% '}}}>top games</Typography>
			<Typography sx={{padding:{lg:'0 0 2% 9%'}}}>most played</Typography>
			<Stack direction='row' justifyContent='center' spacing={5}>
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed'/>
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed'/>
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed'/>
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed'/>

			</Stack>
		</div>
	)
}


function Top_Card(props){
return(
	<Box>
<Card sx={{ maxWidth: 500}}>
<CardMedia
        sx={{ height: 240,width:250 ,backgroundColor:'red',borderRadius:'10px'}}
        image={Img}
        title="green iguana"
      />

	<CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
				<Box>
					
				<Typography>{props.types}</Typography> 
				<Typography>{props.title}</Typography>
				</Box>	

					<CardActions>
		<Button>more</Button>
	</CardActions>

	</CardContent>

			
		
</Card>
	</Box>
	)
}