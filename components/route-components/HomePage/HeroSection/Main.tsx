import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const HeroDefault = (<div>HeroPage/HeroSection/Main.tsx</div>);
const HeroText = (
  <Typography>
    East Traditional Medicine
  </Typography>
);
const HeroDescription = (
  <Typography>
    Traditional Chinese Medicine, Acupuncture &#38; Auricular Medicine
  </Typography>
);
const HeroActionCall = (
  <Box sx={{border:'1px solid green'}}>
    <Typography>
      <Link href="bookonline">Book Online</Link>, call 408-372-5492, or email <Link href="/">jenlee@east-medicine.com</Link> to schedule
    </Typography>
  </Box>
);

function HeroSection() {
  return (
    <Box sx={{border: '1px solid black', width:'100vw'}}>
      {HeroText}
      {HeroDescription}
      {HeroActionCall}
    </Box>
  );
};
  
export default HeroSection;