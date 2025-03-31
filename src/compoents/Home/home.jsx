  import React from "react";
import "./home.style.scss";
import LogoImg from "../../assets/logo.png";
import HeroImg from "../../assets/banner-image.jpg";
import {
  TextField,
  Stack,
  Toolbar,
  Menu,
  MenuItem,
  Container,
  Box,
  Link,
  AppBar,
  Typography,
  Button,
} from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container maxWidth="sm" class="bg-banner">
      	<Box sx={{padding:{lg:'0px 100px'}}}>
      	<Box>
      		<Layout/>
      	</Box>
      	<Box>
      		<Content/>
      	</Box>
      </Box>
      </Container>
      
    </main>
  );
}

function Layout() {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"

        sx={{ padding: { xs: " 0px 0px 0px 10px", sm: "20px", md: "30px", lg: "10px  30px",xl:'' } }}
      >
        <Link href="#">
          <img
            sx={{ width: { xs: "10px", sm: "20px", md: "10px", lg: "20px" },height:{xs:'',sm:'',md:'',lg:'20px',xl:''} }}
            src={LogoImg}
            alt="logo img"
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "", md: "15px", lg: "40px", xl: "25px" },
            color:'white',
            fontSize:{xs:'',sm:'',md:'',lg:'23px',xl:''},
            textTransform:'capitalize',
            fontWeight:'600'
          }}
        >
          <Link sx={{color:'white'}}>Home</Link>
          <Link sx={{color:'white'}}>trends</Link>
          <Link sx={{color:'white'}}>blog</Link>
          <Link sx={{color:'white'}}>about</Link>
        </Box>
        <Button color="error" variant="contained" sx={{padding:{lg:'10px 20px'},borderRadius:'8px',fontSize:{lg:'16px'}}}>
          sign in
        </Button>
      </Stack>
    </Box>
  );
}

function Content() {
  return (
    <Box>
      <Stack direction={{lg:'row'}} alignItems='center' justifyContent='space-between' spacing={5}>
        <Box sx={{textAlign:'center'}}>
          <Typography variant='p'>welcome to lugx</Typography>
          <Typography variant='h1' sx={{fontSize:{lg:'60px'},fontWeight:'500'}}>best gaming site ever!</Typography>
          <Typography variant='p' sx={{fontSize:{lg:'15px'},margin:{lg:' 0 0 0 100px '}}}>
            lugx gaming is free bootstrap 5 html css template for your gaming
            websites. you can download and use this layout for commercial
            purposes. please tell friends about tempalteMo.
          </Typography>
          <Stack action="" direction='row' justifyContent='center' sx={{margin:{lg:'10px 0 '}}}>
            <TextField variant="outlined" />
            <Button variant="contained" color="error">
              search now
            </Button>
          </Stack>
        </Box>
        <Box sx={{borderRadius:'10px',padding:{lg:'15px 0 '}}} className='heroimg-div'>
          <img  src={HeroImg} alt="" width={400} />
          <span className="span-1">-40%</span>
          <span className="span-2">$22</span>
        </Box>
      </Stack>
    </Box>
  );
}
