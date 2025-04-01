import React from 'react'
import Item01 from '../../assets/featured-01.png'
import Item02 from '../../assets/featured-02.png'
import Item03 from '../../assets/featured-03.png'
import Item04 from '../../assets/featured-04.png'

import './service.style.scss'
import { Box, Typography, Stack, } from '@mui/material'


export default function service() {
	return (
		<Box>
			<Stack direction='row' spacing={{ xs: 1 }} sx={{ margin: { xs: '  30px auto 0px 10px  ', lg: '-30px 0 0 0 ' } }} justifyContent='center' >
				<ServiceCard img={Item01} alt={''} title={'free storage'} />
				<ServiceCard img={Item02} alt={''} title={'paid storage'} />
				<ServiceCard img={Item03} alt={''} title={'cost  storage'} />
				<ServiceCard img={Item04} alt={''} title={'service storage'} />

			</Stack>
		</Box>
	)
}

function ServiceCard(props) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '5px', lg: '10px' }, justifyContent: 'center', alignItems: 'center', padding: { xs: ' 0 5px ', lg: '0px 20px ' }, borderRadius: '10px', backgroundColor: '#ffff	', width: { lg: '250px' }, height: { lg: '200px' } }}>
			<img id="service-img" sx={{ width: { xs: '50%', lg: '20%' } }} width={100} src={props.img} alt={props.alt} />
			<Typography variant='p' sx={{ fontSize: { xs: '15px', lg: '18px' },textAlign:'center' }}>{props.title}</Typography>
		</Box>
	)
}