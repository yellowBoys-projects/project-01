import React from 'react'
import {Box,Card,CardMedia,Button,CardContent,Typography,Stack} from '@mui/material'
import Img03 from '../../assets/top-game-03.jpg'
import './install.scss'

export default function Installed() {
	return (
		<div className='install-section'>
		<Typography>top Installed</Typography>
		<Typography>most Installed</Typography>
			<Stack id='grid'>
				<SecondCompoment img={Img03}/>
				<SecondCompoment img={Img03}/>
				<SecondCompoment img={Img03}/>
				<SecondCompoment img={Img03}/>
				

			</Stack>
		</div>
	)
}

function SecondCompoment(props){
	return(
		<div>
		<Card sx={{position:'relative',maxWidth:{xs:400}}}>
			<CardMedia image={props.img} sx={{height:{xs:250},width:{xs:400},borderRadius:'10px'}}/>
			<CardContent sx={{position:'absolute',top:'40%',right:'20%'}}>
				<Button variant='contained' color='error' sx={{padding:{xs:'10px'},fontSize:'18px'}}>click to install</Button>
			</CardContent>
		</Card>	
		</div>
		)
}