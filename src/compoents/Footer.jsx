import { Typography, Box } from '@mui/material'
export default function Footer() {
	return (
		<section>
			<Content/>
		</section>
	)
}

function Content(){
	return(
		<Box>
			<Box 
			sx={{ width: '100%', margin: '0 auto ', textAlign: 'center' }}
			>
			<Typography 
			variant='p' 
			sx={{ textAlign: 'center',
			fontSize:{xs:'10px'}
			 }}
			
			>
			welcome the all members in &copy; copy with 2025 in wwebsite launch.
			</Typography>
		</Box>
		</Box>
		)
}