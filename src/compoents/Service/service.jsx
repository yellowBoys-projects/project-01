import React from 'react'
import Item01 from '../../assets/featured-01.png'
import './service.style.scss'
import {Box,Typography,Stack,} from '@mui/material'


export default function service() {
	return (
		<Box>
			<Stack direction='row' spacing={7} sx={{position:'absolute',top:'590px' ,right:{lg:'7%'}}} justifyContent='center' >
				<ServiceCard img={Item01} alt={''} title={'free storage'}/>
				<ServiceCard img={Item01} alt={''} title={'free storage'}/>
				<ServiceCard img={Item01} alt={''} title={'free storage'}/>
				<ServiceCard img={Item01} alt={''} title={'free storage'}/>

			</Stack>
		</Box>
	)
}

function ServiceCard(props){
	return(
		<Box sx={{display:'flex', flexDirection:'column',gap:{lg:'10px'} , justifyContent:'center', alignItems:'center' ,padding:{lg:'10px 20px '},borderRadius:'10px',backgroundColor:'#ffff	',width:{lg:'250px'},height:{lg:'200px'}}}>
			<img id="service-img" sx={{width:{lg:'20%'}}} width={100} src={props.img} alt={props.alt}/>
			<Typography variant='p' sx={{fontSize:{lg:'18px'}}}>{props.title}</Typography>
		</Box>
		)
}