import { Card, CardActions, CardContent, CardMedia, Button, Box, Typography, Stack } from '@mui/material'
import Img01 from '../../assets/categories-01.jpg'
import Img02 from '../../assets/categories-03.jpg'
import Img03 from '../../assets/categories-04.jpg'
import Img04 from '../../assets/categories-05.jpg'
import {Top_Card} from '../Top/top.jsx'

import './trending.style.scss'

export default function Trending() {
	return (
		<section className='trending-section'>

			<Box sx={{ margin: { xs:'',lg: '10px 40px' } }}>
				<Typography variant='h6' sx={{ fontSize: { xs:'13px',lg: '16px' }, fontWeight: '400', padding: { lg: ' 0% 0% 0.2% 6%'},textAlign:'center' }}>trending</Typography>
				<Typography variant='h2' sx={{ fontSize: {xs:'20px', lg: '25px' }, fontWeight: '500', padding: { xs:'0.5rem 0rem 0.9rem 0rem',lg: '0 0 0.1% 0%' } ,textAlign:'center'}}>trending games</Typography>
				<Box className='trending-grid'>
					<Top_Card img={Img01} alt={'...'} types='action' name='assasin creed' />
					<Top_Card img={Img02} alt={'...'} types='action' name='assasin creed' />
					<Top_Card img={Img03} alt={'...'} types='action' name='assasin creed' />
					<Top_Card img={Img04} alt={'...'} types='action' name='assasin creed' />

				</Box>
			</Box>
		</section>

	)
}

