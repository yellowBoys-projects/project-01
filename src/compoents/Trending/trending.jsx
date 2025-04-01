import { Card, CardActions, CardContent, CardMedia, Button, Box, Typography, Stack } from '@mui/material'
import Img from '../../assets/categories-01.jpg'
import './trending.style.scss'

export default function Trending() {
	return (
		<section className='trending-section'>

			<Box sx={{ margin: { xs:'',lg: '10px 40px' } }}>
				<Typography variant='h6' sx={{ fontSize: { xs:'13px',lg: '16px' }, fontWeight: '400', padding: { lg: ' 0% 0% 0.2% 6%'},textAlign:'center' }}>trending</Typography>
				<Typography variant='h2' sx={{ fontSize: {xs:'20px', lg: '25px' }, fontWeight: '500', padding: { xs:'0.5rem 0rem 0.9rem 0rem',lg: '0 0 0.1% 0%' } ,textAlign:'center'}}>trending games</Typography>
				<Box className='trending-grid'>
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />
					<CardItem img={Img} alt={'...'} types='action' title='assasin creed' />

				</Box>
			</Box>
		</section>

	)
}


export function CardItem(props) {
	return (
		<Card sx={{ maxWidth: {xs:200},margin:'0 auto' }}>
			<CardMedia
				sx={{ height: 200, width: 160, backgroundColor: 'red', borderRadius: '10px' }}
				image={Img}
				title="green iguana"
			/>

			<CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Box>

					<Typography sx={{fontSize:{xs:'12px'},textAlign:'start'}}>{props.types}</Typography>
					<Typography sx={{fontSize:{xs:'15px'},fontWeight:'500',textAlign:'start'}}> {props.title}</Typography>
				</Box>

				<CardActions>
					<Button variant='contained' color='error' sx={{padding:{xs:'0px 0px 0px 0px'}}}>more</Button>
				</CardActions>

			</CardContent>



		</Card>


	)
}