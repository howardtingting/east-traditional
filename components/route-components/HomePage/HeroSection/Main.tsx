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
  const HeroTextSx = Object.assign({color:'white'}, (size.width || ((typeof window !== "undefined") ? window.innerWidth : 868)) > 867 ? HeroTextExpandedSx : HeroTextMobileSx)
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
  const HeroDescriptionSx = Object.assign({color:'white'}, (size.width || ((typeof window !== "undefined") ? window.innerWidth : 868)) > 867 ? HeroDescriptionExpandedSx : HeroDescriptionMobileSx)
  const HeroDescription = (
    <Typography sx={HeroDescriptionSx} noWrap={true} align={"center"}>
      Traditional Chinese Medicine, Acupuncture &#38; Auricular Medicine
    </Typography>
  );

  //HERO ACTION CALL
  const HeroActionCallExpandedSx = {
    fontSize:"1.5rem"
  }
  const HeroActionCallMobileSx = {
    fontSize:"0.8rem"
  }
  const HeroActionCallSx: any = Object.assign({
    whiteSpace:"normal", display: "flex", justifyContent:"center", flexWrap:"wrap", padding:"30px"
  },
    (size.width || ((typeof window !== "undefined") ? window.innerWidth : 868)) > 867 ? HeroActionCallExpandedSx : HeroActionCallMobileSx
  );
  const HeroActionCall = (
    <Box sx={{backgroundColor:"#E2E2E2", margin:"30px clamp(15%, 20%, 30%)"}}>
      <Typography sx={HeroActionCallSx}>
        <span style={{whiteSpace: "nowrap"}}><Link href="bookonline" className={styles.link}>Book Online</Link>,</span>&nbsp;
        <span style={{whiteSpace: "nowrap"}}>call 408-372-5492, or</span>&nbsp;
        <span style={{whiteSpace: "nowrap"}}>email <Link href="/" className={styles.link}>jenlee@east-medicine.com</Link></span>&nbsp;
        <span>to schedule</span>
      </Typography>
    </Box>
  );
  return (
    <Box sx={{padding: '5em 0', width:'100%'}}>
      {HeroText}
      {HeroDescription}
      {HeroActionCall}
    </Box>
  );
};
  
export default HeroSection;