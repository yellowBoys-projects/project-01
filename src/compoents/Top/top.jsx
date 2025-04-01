import { Box, Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Img from '../../assets/top-game-01.jpg'
import './top.style.scss'
export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{ padding: { xs:'1% 0%',lg: '0 0 1% 10% ' }, textAlign: { xs: 'center' }, fontSize: { xs: '15px' } }}>top games</Typography>
			<Typography sx={{ padding: { xs:'2% 0%',lg: '0 0 2% 9%' }, textAlign: { xs: 'center' }, fontSize: { xs: '20px' }, fontWeight: '600' }}>most played</Typography>
			<Box className='grid' >
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />

			</Box>
		</div>
	)
}


function Top_Card(props) {
	return (
		<Box>
			<Card sx={{ maxWidth: 280, margin: '0 auto' }} id='card-01'>
				<CardMedia
					sx={{ height:{xs:200,}, width: {xs:150}, backgroundColor: 'red', borderRadius: '5px' }}
					image={Img}
					title="green iguana"
				/>

				<CardContent sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
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