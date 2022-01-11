import { Box } from "@mui/system";
// START ICONS
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// END ICONS
import style from "Info.module.css";
import { Typography } from "@mui/material";


const IconWithText = (args: {icon?: any, sx?: {[x:string]: any}, text: any[]}) => {
    const IconComponent = args.icon || '';
    const text: any[] = args.text ? args.text : ['default text'];
    const sx: any = args.sx || {};
    const WrappedIcon = IconComponent ? (
        <Box sx={{margin:"0 1em 0 0"}}>
            <IconComponent/>
        </Box>
    ) : '';
    const WrappedText = (
        <Box sx={{display:"flex", flexDirection:"column", ...sx}}>
            {text.map((line, idx) => <Box key={idx} sx={{marginTop:"3px"}}>{line}</Box>)}
        </Box>
    )
    return (
        <Box sx={{display:"flex", width:"100%"}}>
            {WrappedIcon}
            {WrappedText}
        </Box>
    )
}
const ContactSection = (args: any) => {
    const PhoneNumber = <IconWithText icon={PhoneIcon} text={["408-372-5492"]}/>;
    const Email = <IconWithText icon={EmailIcon} text={["jenlee@east-medicine.com"]} sx={{textDecoration:"underline"}}/>;
    const Address = <IconWithText icon={LocationOnIcon} text={["500 E Calaveras Blvd Suite 200", "Milpitas, CA 95035"]}/>;
    return (<Box sx={{backgroundColor:"#F3F3F3", padding:"2em 0", border:"1px solid #D3D3D3"}}>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"115px", paddingLeft:"1em"}}>
            {PhoneNumber}
            {Email}
            {Address}
        </Box>
    </Box>);
}

const InsuranceSection = (args: any) => {
    const InsuranceTitle = <Typography variant={"h5"} noWrap={true}>Insurance Accepted (PPO Only)</Typography>;
    const BlueShield = <IconWithText icon={ArrowRightIcon} text={["Blue Shield (select plans)"]}/>;
    const UnitedHealthcare = <IconWithText icon={ArrowRightIcon} text={["United Healthcare"]}/>;
    const Aetna = <IconWithText icon={ArrowRightIcon} text={["Aetna"]}/>;
    const Cigna = <IconWithText icon={ArrowRightIcon} text={["Cigna"]}/>;
    return (
        <Box sx={{backgroundColor:"#F3F3F3", padding:"2em 1em 2em 1em", border:"1px solid #D3D3D3"}}>
            {InsuranceTitle}
            <Box sx={{paddingTop:"1em", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))"}}>
                {BlueShield}
                {UnitedHealthcare}
                {Aetna}
                {Cigna}
            </Box>
        </Box>
    )
}

const HoursSection = (args: {}) => {
    const HoursTitle = <Typography variant={"h5"} sx={{width:"max-content", paddingBottom:"1em"}}>Hours</Typography>;
    const HoursContent = <IconWithText text={["Monday - Friday: 830am - 7pm", "By appointment only"]}></IconWithText>;
    return (
        <Box sx={{backgroundColor:"#F3F3F3", padding:"2em 1em 2em 1em", border:"1px solid #D3D3D3"}}>
            {HoursTitle}
            {HoursContent}
        </Box>
    );
}

const PriceSection = (args: {}) => {
    const PriceTitle = <Typography variant={"h5"} sx={{width:"max-content", paddingBottom:"1em"}}>Cash Rate</Typography>;
    const InitialText = <Typography sx={{marginTop:"-2px", overflowWrap:"break-word"}}>Initial Consultation + Acupuncture (90min) <b>$150</b></Typography>;
    const FollowupText = <Typography sx={{marginTop:"-2px", overflowWrap:"break-word"}}>Followup Consultation + Acupuncture (60min) <b>$80</b></Typography>;
    const InitialLine = (
        <IconWithText icon={ArrowRightIcon} text={[InitialText]}></IconWithText>
    );
    const FollowupLine = (
        <IconWithText icon={ArrowRightIcon} text={[FollowupText]}></IconWithText>
    );
    return (
        <Box sx={{backgroundColor:"#F3F3F3", padding:"2em 1em 2em 1em", border:"1px solid #D3D3D3"}}>
            {PriceTitle}
            {InitialLine}
            {FollowupLine}
        </Box>
    );
}

const InfoSection = (args: {}) => {
    const ContactInfo = <ContactSection/>;
    const InsuranceInfo = <InsuranceSection/>;
    const HoursInfo = <HoursSection/>;
    const PriceInfo = <PriceSection/>;
    return (
        <Box sx={{minWidth: "300px", maxWidth:"530px"}}>
            {ContactInfo}
            {InsuranceInfo}
            {HoursInfo}
            {PriceInfo}
        </Box>
    )
}

export default InfoSection;