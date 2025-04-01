import Img from '../../assets/top-game-01.jpg'
import './categories.style.scss'
import { Box, Stack, Card, CardActions, Typography, CardContent, CardMedia } from '@mui/material'
export default function Categories() {
	return (
		<Box className='categories-section'>
			<Typography sx={{ textAlign: "center" ,fontSize:{xs:'10px'}}}>top games</Typography>
			<Typography sx={{ textAlign: 'center', fontSize: '30px', padding: {xs:'2% 0% 4% 0%', lg: '0% 0% 1% 0 ' },fontSize:{xs:'20px'} }}>top Categories</Typography>
			<Stack direction={{xs:'col'}} gap={{xs:3}} spacing={5} justifyContent='center' >
				<CArdItem img={Img} alt='' />
				<CArdItem img={Img} alt='' />
				<CArdItem img={Img} alt='' />
				<CArdItem img={Img} alt='' />

			</Stack>
		</Box>

	)
}

function CArdItem(props) {
	return (
		<Box >
			<Card sx={{ width:{xs:250},height:{xs:300},margin:'0 auto', backgroundColor: '#346bec', textAlign: 'center', borderRadius: '10px' }}>
				<CardContent>
					<Typography variant='bold' sx={{fontSize:{xs:'20px'}}} >action</Typography>
				</CardContent>
				<CardActions >
					<CardMedia sx={{ height: {xs:225}, width:{xs:320},margin:'0 auto',borderRadius:'10px' }} image={props.img} title={props.alt} />
				</CardActions>
			</Card>
		</Box>
	)
}