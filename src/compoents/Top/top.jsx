import { Box, Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Img from '../../assets/top-game-01.jpg'
import './top.style.scss'


export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{ padding: { xs:'1% 0%',lg: '0 0 1% 10% ' }, textAlign: { xs: 'center' }, fontSize: { xs: '15px' } }}>top games</Typography>
			<Typography sx={{ padding: { xs:'2% 0%',lg: '0 0 2% 9%' }, textAlign: { xs: 'center' }, fontSize: { xs: '20px' }, fontWeight: '500' }}>most played</Typography>
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
			<Card sx={{ maxWidth:{xs:160}, margin: '0 auto' }} id='card-01'>
				<CardMedia
					sx={{ height:{xs:200,}, width: {xs:160}, backgroundColor: 'red', borderRadius: '5px',backgroundSize:'cover' }}
					image={Img}
					title="green iguana"
				/>

				<CardContent sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>

						<Typography sx={{fontSize:{xs:'12px'},textAlign:'center'}}>{props.types}</Typography>
						<Typography sx={{fontSize:{xs:'15px',fontWeight:'500'},textAlign:'center'}}>{props.name}</Typography>
					</Box>

					<CardActions>
						<Button variant='contained' color='error' sx={{padding:{xs:'0rem 1rem 0rem 1rem'}}}>more</Button>
					</CardActions>

				</CardContent>



			</Card>
		</Box>
	)
}