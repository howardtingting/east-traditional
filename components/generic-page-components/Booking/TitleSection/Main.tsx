import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Title.module.css';

const TitleSection = (props: any) => {
    const TitleText = (
        <Typography className={styles.TitleText} align={'center'} >
            Book Appointment
        </Typography>
    );
    const Underline = (
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
            <Box className={styles.TitleUnderline}>
                
            </Box>
        </Box>
    );
    return (
        <Box>
            {TitleText}
            {Underline}
        </Box>
    );
};
  
export default TitleSection;