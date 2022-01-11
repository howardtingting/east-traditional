import TitleSection from "./TitleSection/Main";
import FormSection from "./FormSection/Main";
import InfoSection from "./InfoSection/Main";
import { Box } from "@mui/system";

function Booking() {
  return (
    <Box sx={{width:"100%", height:"100%", backgroundColor:"#EAF3FA", padding:"4em 0"}}>
      <TitleSection/>
      <Box sx={{padding:"3em 1em 0 1em", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gridGap:"1em"}}>
        
        <FormSection/>
        <InfoSection/>
      </Box>
    </Box>
  )
}
  
export default Booking