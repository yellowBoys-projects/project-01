import { Box, Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Img01 from '../../assets/top-game-01.jpg'
import Img02 from '../../assets/top-game-02.jpg'
import Img03 from '../../assets/top-game-03.jpg'
import Img04 from '../../assets/top-game-04.jpg'

import './top.style.scss'


export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{ padding: { xs:'0% 0%',lg: '0 0 1% 10% ' }, textAlign: { xs: 'center' }, fontSize: { xs: '17px' } }}>top games</Typography>
			<Typography sx={{ padding: { xs:'5% 0%',lg: '0 0 2% 9%' }, textAlign: { xs: 'center' }, fontSize: { xs: '25px' }, fontWeight: '500' }}>most played</Typography>
			<Box className='grid' >
				<Top_Card img={Img01} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img02} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img03} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img04} alt="paer" types='adventure' name='Assasin Creed' />

			</Box>
		</div>
	)
}


function Top_Card(props) {
	return (
		<Box>
			<Card sx={{ maxWidth:{xs:380}, margin: '0 auto' }} id='card-01'>
				<CardMedia
					sx={{ height:{xs:250,}, width: {xs:380}, backgroundColor: 'red', borderRadius: '5px',backgroundSize:'cover' }}
					image={props.img}
					title="green iguana"
				/>

				<CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>

						<Typography sx={{fontSize:{xs:'17px'}}}>{props.types}</Typography>
						<Typography sx={{fontSize:{xs:'20px',fontWeight:'500'},textAlign:'center'}}>{props.name}</Typography>
					</Box>

					<CardActions>
						<Button variant='contained' color='error' sx={{padding:{xs:'0.3rem 1.3rem 0.3rem 1.3rem'}}}>more</Button>
					</CardActions>

				</CardContent>



			</Card>
		</Box>
	)
}