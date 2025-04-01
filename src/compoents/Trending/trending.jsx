import { Card, CardActions, CardContent, CardMedia, Button, Box, Typography, Stack } from '@mui/material'
import Img from '../../assets/categories-01.jpg'
import './trending.style.scss'

export default function Trending() {
	return (
		<section className='trending-section'>

			<Box sx={{ margin: { lg: '10px 40px' } }}>
				<Typography variant='h6' sx={{ fontSize: { lg: '16px' }, fontWeight: '400', padding: { lg: ' 0% 0% 0.2% 6%' } }}>trending</Typography>
				<Typography variant='h2' sx={{ fontSize: { lg: '25px' }, fontWeight: '500', padding: { lg: '0 0 0.9% 6%' } }}>trending games</Typography>
				<Stack sx={{ margin: { lg: '20px 0px' } }} direction='row' spacing={5} justifyContent='center' alignItems='center'>
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />

				</Stack>
			</Box>
		</section>

	)
}


export function CardItem(props) {
	return (
		<Card sx={{ maxWidth: 500 }}>
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


	)
}