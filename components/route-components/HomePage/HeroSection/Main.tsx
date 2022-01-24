import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useWindowSize, Size} from '../../../util-components/WindowSize';
import styles from './Hero.module.css';

const HeroDefault = (<div>HeroPage/HeroSection/Main.tsx</div>);

const HeroSection = (props: any) => {
  const size: Size = useWindowSize();

  //HERO TEXT
  const HeroTextSx = {color:"white", fontSize:"clamp(2rem, 5vw, 8rem)"}
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
  // const HeroDescriptionSx = Object.assign({color:'white'}, (size.width || ((typeof window !== "undefined") ? window.innerWidth : 868)) > 867 ? HeroDescriptionExpandedSx : HeroDescriptionMobileSx)
  const HeroDescriptionSx = {color:"white", fontSize:"clamp(0.8rem, 1.5vw, 2.6rem)"}
  const HeroDescription = (
    <Typography sx={HeroDescriptionSx} noWrap={true} align={"center"}>
      Traditional Chinese Medicine, Acupuncture &#38; Auricular Medicine
    </Typography>
  );

  const HeroActionCallSx = {
    whiteSpace:"normal", display: "flex", justifyContent:"center", flexWrap:"wrap", padding:"30px", fontSize:"clamp(0.8rem, 2vw, 2.6rem)"
  }
  const HeroActionCall = (
    <Box sx={{backgroundColor:"#E2E2E2", display:"flex", width:"90vw", justifyContent:"center"}}>
      <Typography sx={HeroActionCallSx}>
        <span style={{whiteSpace: "nowrap"}}><Link href="bookonline" className={styles.link}>Book Online</Link>,</span>&nbsp;
        <span style={{whiteSpace: "nowrap"}}>call 408-372-5492, or</span>&nbsp;
        <span style={{whiteSpace: "nowrap"}}>email <Link href="/" className={styles.link}>jenlee@east-medicine.com</Link></span>&nbsp;
        <span>to schedule</span>
      </Typography>
    </Box>
  );
  return (
    <Box sx={{marginBottom:"7rem", width:'100%', display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
      {HeroText}
      {HeroDescription}
      <Box sx={{marginTop:"2rem"}}>{HeroActionCall}</Box>
    </Box>
  );
};
  
export default HeroSection;