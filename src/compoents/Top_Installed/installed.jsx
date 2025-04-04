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

			</Stack>
		</div>
	)
}

function SecondCompoment(props){
	return(
		<div>
		<Card sx={{position:'relative'}}>
			<CardMedia image={props.img} sx={{height:{xs:182},width:{xs:317}}}/>
			<CardContent sx={{position:'absolute',top:'50px',right:'90px'}}>
				<Button variant='contained'>click to install</Button>
			</CardContent>
		</Card>	
		</div>
		)
}