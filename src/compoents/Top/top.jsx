import { Box, Stack, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Img from '../../assets/top-game-01.jpg'
import './top.style.scss'
export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{ padding: { lg: '0 0 1% 9% ' }, textAlign: { xs: 'center' }, fontSize: { xs: '15px' } }}>top games</Typography>
			<Typography sx={{ padding: { lg: '0 0 2% 9%' }, textAlign: { xs: 'center' }, fontSize: { xs: '20px' }, fontWeight: '600' }}>most played</Typography>
			<Stack direction={{ xs: 'col' }} justifyContent='center' spacing={1} sx={{ margin: { xs: '2rem 1rem ' } }} >
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img} alt="paer" types='adventure' name='Assasin Creed' />

			</Stack>
		</div>
	)
}


function Top_Card(props) {
	return (
		<Box>
			<Card sx={{ maxWidth: 280, margin: '0 auto' }}>
				<CardMedia
					sx={{ height: 240, width: 250, backgroundColor: 'red', borderRadius: '10px' }}
					image={Img}
					title="green iguana"
				/>

				<CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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