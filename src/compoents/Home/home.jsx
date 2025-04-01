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
        <Box sx={{ padding: { lg: '0px 100px' } }}>
          <Box>
            <Layout />
          </Box>
          <Box>
            <Content />
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

        sx={{ padding: { xs: " 15px  25px", sm: "20px", md: "30px", lg: "10px  30px", xl: '' } }}
      >
        <Link href="#">
          <img
            id='logo-img'
            src={LogoImg}
            alt="logo img"
          />
        </Link>
        <Box
          sx={{
            display: { xs: 'none', md: 'none' },
            gap: { xs: "10px", sm: "", md: "15px", lg: "40px", xl: "25px" },
            color: 'white',
            fontSize: { xs: '', sm: '', md: '', lg: '23px', xl: '' },
            textTransform: 'capitalize',
            fontWeight: '600'
          }}
        >
          <Link sx={{ color: 'white' }}>Home</Link>
          <Link sx={{ color: 'white' }}>trends</Link>
          <Link sx={{ color: 'white' }}>blog</Link>
          <Link sx={{ color: 'white' }}>about</Link>
        </Box>
        <Button color="error" variant="contained" sx={{ padding: {xs:'5px', lg: '4px 20px' }, borderRadius: '8px', fontSize: {xs:'13px', lg: '16px' },fontWeight:'400', display: { xs: '', sm: '', md: '', } }}>
          sign in
        </Button>
      </Stack>
    </Box>
  );
}

function Content() {
  return (
    <Box>
      <Stack direction={{ xs: 'col', lg: 'row' }} alignItems='center' justifyContent='space-between' spacing={{ xs: 10 }}>
        <Box sx={{ textAlign: 'center' ,maxWidth:300}}>
          <Typography variant='p' sx={{ color: { xs: 'orange', sm: 'blue', md: 'green', lg: 'red', xl: 'yellow' }, fontSize:{  xs: '16px' } }}>welcome to lugx</Typography>
          <Typography variant='h1' sx={{ fontSize: { xs: '25px', lg: '60px' }, fontWeight: '600', padding: { xs: '10px' } }}>best gaming site ever!</Typography>
          <Typography variant='p' sx={{ fontSize: { xs: '15px', lg: '15px' },padding:{xs:'0px 0px 0px 0px '}  }}>
            lugx gaming is free bootstrap 5 html css template for your gaming
            websites. you can download and use this layout for commercial
            purposes. please tell friends about tempalteMo.
          </Typography>
          <Stack action="" direction='row' justifyContent='center' sx={{ margin: { xs: '10px 0px', lg: '10px 0 ' },padding:{xs:'5px'} }}>
            <TextField variant="outlined" sx={{ width: { xs: 220 }, height: { xs: 30 } }} />
            <Button variant="contained" color="error" sx={{fontSize:{xs:'11px'}, width: { xs: 130 }, height: { xs: 30 } }}>
              search now
            </Button>
          </Stack>
        </Box>
        <Box sx={{ borderRadius: '10px', padding: { lg: '15px 0 ' } }} className='heroimg-div'>
          <img src={HeroImg} alt="" id="banner-img" />
          <span className="span-1">-40%</span>
          <span className="span-2">$22</span>
        </Box>
      </Stack>
    </Box>
  );
}
