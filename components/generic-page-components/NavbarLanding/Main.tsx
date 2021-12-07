import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import theme from '../../mui-themes/MainThemes';
import styles from './Navbar.module.css';
import { ThemeProvider } from '@emotion/react';

const DefaultReturn = (<div>generic-page-components/NavbarLanding/Main.tsx</div>);

const Logo = (
  <div>
    EastTraditionalLogo
  </div>
);

const NavListItems = [
  (<Link className={styles.navlink} href="landing" underline={'hover'}>About</Link>),
  (<Link className={styles.navlink} href="landing" underline={'hover'}>Cases Treated</Link>),
  (<Link className={styles.navlink} href="landing" underline={'hover'}>Contact</Link>),
  (<Button className={styles.navbutton} variant="contained" color={'navgreen'}>Login</Button>),
  (<Button className={styles.navbutton} variant="contained" color={'navgreen'} href="bookonline">Book Appointment</Button>)
];

const NavContainer = (
  <Stack spacing={3} direction="row">
    {Logo}
    {[...NavListItems]}
  </Stack>
);

function NavbarLanding() {
  return (
    <ThemeProvider theme={theme}>
      {NavContainer}
    </ThemeProvider>
  );
};
  
export default NavbarLanding