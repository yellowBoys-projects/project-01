import React from 'react'
import Item01 from '../../assets/featured-01.png'
import './service.style.scss'
import { Box, Typography, Stack, } from '@mui/material'


export default function service() {
	return (
		<Box>
			<Stack direction='row' spacing={{ xs: 2 }} sx={{ margin: { xs: '30px', lg: '-30px 0 0 0 ' } }} justifyContent='center' >
				<ServiceCard img={Item01} alt={''} title={'free storage'} />
				<ServiceCard img={Item01} alt={''} title={'paid storage'} />
				<ServiceCard img={Item01} alt={''} title={'cost  storage'} />
				<ServiceCard img={Item01} alt={''} title={'service storage'} />

			</Stack>
		</Box>
	)
}

function ServiceCard(props) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1px', lg: '10px' }, justifyContent: 'center', alignItems: 'center', padding: { xs: ' 0 5px ', lg: '0px 20px ' }, borderRadius: '10px', backgroundColor: '#ffff	', width: { lg: '250px' }, height: { lg: '200px' } }}>
			<img id="service-img" sx={{ width: { xs: '50%', lg: '20%' } }} width={100} src={props.img} alt={props.alt} />
			<Typography variant='p' sx={{ fontSize: { xs: '10px', lg: '18px' },textAlign:'center' }}>{props.title}</Typography>
		</Box>
	)
}