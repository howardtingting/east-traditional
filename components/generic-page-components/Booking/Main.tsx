import TitleSection from "./TitleSection/Main";
import FormSection from "./FormSection/Main";
import InfoSection from "./InfoSection/Main";
import { Box } from "@mui/system";

function Booking() {
  return (
    <Box sx={{width:"100%", height:"100%", backgroundColor:"#EAF3FA", padding:"4em 0"}}>
      <TitleSection/>
      <Box sx={{paddingTop:"3em"}}>
        <InfoSection/>
        <FormSection/>
      </Box>
    </Box>
  )
}
  
export default Booking