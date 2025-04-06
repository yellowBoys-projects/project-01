import { Box, Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Img01 from '../../assets/top-game-01.jpg'
import Img02 from '../../assets/top-game-02.jpg'
import Img03 from '../../assets/top-game-03.jpg'
import Img04 from '../../assets/top-game-04.jpg'

import './top.style.scss'


export default function Top() {
	return (
		<div className="top-section">
			<Typography sx={{ padding: { xs:'0% 0%',lg: '0 0 1% 0% ' }, textAlign: { xs: 'center' }, fontSize: { xs: '13px' } }}>top games</Typography>
			<Typography sx={{ padding: { xs:'0px 0px 15px 0px',lg: '0 0 2% 9%' }, textAlign: { xs: 'center' }, fontSize: { xs: '25px' }, fontWeight: '500' }}>most played</Typography>
			<Box className='grid' >
				<Top_Card img={Img01} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img02} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img03} alt="paer" types='adventure' name='Assasin Creed' />
				<Top_Card img={Img04} alt="paer" types='adventure' name='Assasin Creed' />

			</Box>
		</div>
	)
}


export function Top_Card(props) {
	return (
	<Box sx={{maxWidth:{xs:370},maxHeight:{xs:250}}}> 
		<Card sx={{width:{xs:370,height:250},padding:{xs:'10px'},display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'#018291',color:'white'}}>
			<CardMedia image={props.img} sx={{width:{xs:200},height:{xs:200},borderRadius:'10px'}}/>
			<Box sx={{textAlign:'center',margin:{xs:'0px 5% 0px 6px'}}}>
				<Typography sx={{fontSize:{xs:'15px'}}}>advanture</Typography>
			<Typography sx={{fontSize:{xs:'19px'}}}>assasin creed</Typography>
			<Typography sx={{fontSize:{xs:'30px'},fontWeight:'900'}}>action</Typography>
			<Button variant={'contained'} color='error' sx={{margin:{xs:'16px 0px 0px 0px '},borderRadius:'10px',fontSize:{xs:'16px'}}}>click me</Button>
			</Box>
		</Card>
	</Box>
	)
}