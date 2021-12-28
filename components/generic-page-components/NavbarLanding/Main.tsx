import Burger from '../../atomic-components/Burger/Burger';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import theme from '../../mui-themes/MainThemes';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import {useWindowSize, Size} from '../../util-components/WindowSize';
import { ThemeProvider } from '@emotion/react';

const LogoWhite = (
  <img className={`${styles.navlogo} ${styles.navlogowhite}`} src='img_assets/ETM-white.png' alt='East Company Logo'/>
);

const LogoBlack = (
  <img className={`${styles.navlogo} ${styles.navlogoblack}`} src='img_assets/ETM-black.png' alt='East Company Logo'/>
);

const NavContainer = (props: any) => {
  const NavListExpandedItems = [
    (<Link key={0} className={styles.navlink} href="landing" underline={'hover'}>About</Link>),
    (<Link key={1} className={styles.navlink} href="landing" underline={'hover'}>Cases Treated</Link>),
    (<Link key={2} className={styles.navlink} href="landing" underline={'hover'}>Contact</Link>),
    (<Button key={3} className={styles.navbutton} variant="contained" color={'navgreen'}>Login</Button>),
    (<Button key={4} className={styles.navbutton} variant="contained" color={'navgreen'} href="bookonline">Book Appointment</Button>)
  ];
  
  const NavListMobileItems = [
    (<Button key={0} className={styles.navbutton} variant="contained" color={'navgreen'}>About</Button>),
    (<Button key={1} className={styles.navbutton} variant="contained" color={'navgreen'}>Cases Treated</Button>),
    (<Button key={2} className={styles.navbutton} variant="contained" color={'navgreen'}>Contact</Button>),
    (<Button key={3} className={styles.navbutton} variant="contained" color={'navgreen'}>Login</Button>),
    (<Button key={4} className={styles.navbutton} variant="contained" color={'navgreen'} href="bookonline">Book Appointment</Button>)
  ];
  const [showMobileNav, setShowMobileNav] = useState(false);
  const size: Size = useWindowSize();
  return (typeof window !== "undefined") ? (
    <Box sx={{height:'160px'}}>
      <Box className={`${((showMobileNav && (size.width || window.innerWidth) <= 1080)) ? styles.showNavContainer : styles.hideNavContainer} ${styles.navMobileContainer}`}>
        <Stack className={styles.navcontainer} spacing={3} direction="row">
          {((size.width || window.innerWidth) <= 1080) ? [...NavListMobileItems] : [...NavListExpandedItems]}
        </Stack>
      </Box>
      <Box className={styles.navburger} onClick={() => {setShowMobileNav(!showMobileNav)}}><Burger/>
      </Box>
      {LogoBlack}
      {LogoWhite}
    </Box>
  ) : (<Box sx={{height:'160px'}}></Box>)
}

function NavbarLanding() {
  return (
    <ThemeProvider theme={theme}>
      {<NavContainer/>}
    </ThemeProvider>
  );
};
  
export default NavbarLanding