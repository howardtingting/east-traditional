import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useWindowSize, Size} from '../../../util-components/WindowSize';
import styles from './Hero.module.css';


const HeroDefault = (<div>HeroPage/HeroSection/Main.tsx</div>);

const HeroSection = (props: any) => {
  const size: Size = useWindowSize();

  //HERO TEXT
  const HeroTextExpandedSx = {
    fontSize: '4.5rem'
  }
  const HeroTextMobileSx = {
    fontSize: '2rem'
  }
  const HeroTextSx = Object.assign({color:'white'}, (size.width || ((typeof window !== "undefined") ? window.innerWidth : 0)) > 867 ? HeroTextExpandedSx : HeroTextMobileSx)
  const HeroText = (
    <Typography sx={HeroTextSx} noWrap={true} align={"center"}>
      East Traditional Medicine
    </Typography>
  );

  //HERO DESCRIPTION
  const HeroDescriptionExpandedSx = {
    fontSize: '1.5rem'
  }
  const HeroDescriptionMobileSx = {
    fontSize: '0.8rem'
  }
  const HeroDescriptionSx = Object.assign({color:'white'}, (size.width || ((typeof window !== "undefined") ? window.innerWidth : 0)) > 867 ? HeroDescriptionExpandedSx : HeroDescriptionMobileSx)
  const HeroDescription = (
    <Typography sx={HeroDescriptionSx} noWrap={true} align={"center"}>
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
  return (
    <Box sx={{paddingTop: '5vh', width:'100%'}}>
      {HeroText}
      {HeroDescription}
      {HeroActionCall}
    </Box>
  );
};
  
export default HeroSection;