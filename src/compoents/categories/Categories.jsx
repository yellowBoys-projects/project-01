import Img01 from '../../assets/top-game-01.jpg'
import Img02 from '../../assets/top-game-02.jpg'
import Img03 from '../../assets/top-game-03.jpg'
import Img04 from '../../assets/top-game-04.jpg'

import './categories.style.scss'
import { Box, Stack, Card, CardActions, Typography, CardContent, CardMedia } from '@mui/material'
export default function Categories() {
	return (
		<Box className='categories-section'>
			<Typography sx={{ textAlign: "center" ,fontSize:{xs:'15px'}}}>top games</Typography>
			<Typography sx={{ textAlign: 'center', fontSize: '35px', padding: {xs:'2% 0% 4% 0%', lg: '0% 0% 1% 0 ' },fontSize:{xs:'25px'}  }}>top Categories</Typography>
			<Stack direction={{xs:'col'}} gap={{xs:3}} spacing={5} justifyContent='center' >
				<CArdItem img={Img01} alt='' />
				<CArdItem img={Img02} alt='' />
				<CArdItem img={Img03} alt='' />
				<CArdItem img={Img04} alt='' />

			</Stack>
		</Box>

	)
}

function CArdItem(props) {
	return (
		<Box >
			<Card sx={{ width:{xs:380},height:{xs:300},margin:'0 auto', backgroundColor: '#346bec', textAlign: 'center', borderRadius: '10px' }}>
				<CardContent>
					<Typography variant='bold' sx={{fontSize:{xs:'25px'},margin:{xs:'0px 0px 0  0 '}}} >action</Typography>
				</CardContent>
				<CardActions >
					<CardMedia sx={{ height: {xs:220}, width:{xs:380},margin:'0 auto',borderRadius:'10px' }} image={props.img} title={props.alt} />
				</CardActions>
			</Card>
		</Box>
	)
}