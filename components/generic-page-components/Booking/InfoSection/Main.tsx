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


const IconWithText = (args: any) => {
    const IconComponent = args.icon || '';
    const text: string[] = args.text ? args.text : ['default text'];
    const sx: any = args.sx || {};
    const WrappedIcon = IconComponent ? (
        <Box sx={{margin:"0 1em 0 0"}}>
            <IconComponent/>
        </Box>
    ) : '';
    const WrappedText = (
        <Box sx={{display:"flex", flexDirection:"column", ...sx}}>
            {text.map((line, idx) => <Typography key={idx}>{line}</Typography>)}
        </Box>
    )
    return (
        <Box sx={{display:"flex", width:"max-content"}}>
            {WrappedIcon}
            {WrappedText}
        </Box>
    )
}
const ContactSection = (args: any) => {
    const PhoneNumber = <IconWithText icon={PhoneIcon} text={["408-372-5492"]}/>
    const Email = <IconWithText icon={EmailIcon} text={["jenlee@east-medicine.com"]} sx={{textDecoration:"underline"}}/>
    const Address = <IconWithText icon={LocationOnIcon} text={["500 E Calaveras Blvd Suite 200", "Milpitas, CA 95035"]}/>
    return (<Box sx={{backgroundColor:"#F3F3F3", padding:"2em 0", border:"1px solid #D3D3D3"}}>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"115px", paddingLeft:"1em"}}>
            {PhoneNumber}
            {Email}
            {Address}
        </Box>
    </Box>);
}

const InsuranceSection = (args: any) => {
    const InsuranceTitle = (
        <Typography variant={"h5"} noWrap={true}>Insurance Accepted (PPO Only)</Typography>
    );
    const BlueShield = <IconWithText icon={ArrowRightIcon} text={["Blue Shield (select plans)"]}/>
    const UnitedHealthcare = <IconWithText icon={ArrowRightIcon} text={["United Healthcare"]}/>
    const Aetna = <IconWithText icon={ArrowRightIcon} text={["Aetna"]}/>
    const Cigna = <IconWithText icon={ArrowRightIcon} text={["Cigna"]}/>
    return (
        <Box sx={{backgroundColor:"#F3F3F3", padding:"2em 0 2em 1em", border:"1px solid #D3D3D3"}}>
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

const HoursSection = (args: any) => {
    const HoursTitle = (
        <Typography variant={"h5"} sx={{width:"max-content", paddingBottom:"1em"}}>Hours</Typography>
    );
    const HoursContent = (
        <IconWithText text={["Monday - Friday: 830am - 7pm", "By appointment only"]}></IconWithText>
    );
    return (
        <Box sx={{backgroundColor:"#F3F3F3", padding:"2em 0 2em 1em", border:"1px solid #D3D3D3"}}>
            {HoursTitle}
            {HoursContent}
        </Box>
    );
}

const InfoSection = (args: any) => {
    const ContactInfo = <ContactSection/>;
    const InsuranceInfo = <InsuranceSection/>;
    const HoursInfo = <HoursSection/>;
    return (
        <Box sx={{minWidth: "340px", maxWidth:"510px"}}>
            {ContactInfo}
            {InsuranceInfo}
            {HoursInfo}
        </Box>
    )
}

export default InfoSection;