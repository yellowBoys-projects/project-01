import Img from '../../assets/top-game-01.jpg'
import './categories.style.scss'
import { Box, Stack, Card, CardActions, Typography, CardContent, CardMedia } from '@mui/material'
export default function Categories() {
	return (
		<Box className='categories-section'>
			<Typography sx={{ textAlign: "center" }}>top games</Typography>
			<Typography sx={{ textAlign: 'center', fontSize: '30px', padding: { lg: '0% 0% 4% 0 ' } }}>top Categories</Typography>
			<Stack direction='row' spacing={5} justifyContent='center' >
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
			<Card sx={{ MaxWidth: 400, backgroundColor: '#346bec', textAlign: 'center', borderRadius: '30px' }}>
				<CardContent>
					<Typography variant='p' >action</Typography>
				</CardContent>
				<CardActions >
					<CardMedia sx={{ height: 200, width: 200 }} image={props.img} title={props.alt} />
				</CardActions>
			</Card>
		</Box>
	)
}