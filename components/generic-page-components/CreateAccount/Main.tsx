import theme from '../../mui-themes/MainThemes';
import { ThemeProvider } from '@emotion/react';
import {Box, SxProps} from '@mui/system';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import {Link} from '@mui/material';
import {useState, ChangeEventHandler} from "react";
import { validate } from 'react-email-validator';

function CreateAccountModal() {
  const [formInputs, setFormInputs] = useState({email: "", password:""});
  const [remember, setRemember] = useState<boolean>(false);

  const LoginTitle = (
    <Box sx={{marginBottom:"25px"}}>
      <Typography variant='h5'>
        Welcome
      </Typography>
      <Typography variant='h3' fontWeight={"bold"}>
        Create Account
      </Typography>
    </Box>
  );

  const CreateAccountOptions = (
    <Box sx={{display:"flex", flexWrap:"false", justifyContent:"space-between", marginTop:"0.5em"} as SxProps}>
      <Box>Already have an account?</Box>
      <Link href="login">Click here to Login</Link>
    </Box>
  );
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // EXTRA handling if necessary
    // TODO: use to determine state of Login btn (if invalid email, login button greyed out)
    // console.log(e.target.value);
  }

  const handleSubmit = () => {
    // TODO: validate email and password
    if (validate(formInputs['email'])) {
      console.log(`email:${formInputs['email']} is valid`)
    }
    console.log(formInputs);
  }

  interface InputWithLabelProps {
      inputFor: keyof typeof formInputs;
      title?: string;
      onChange?: ChangeEventHandler<HTMLInputElement>;
      onKeyDown?: KeyboardEvent;
      inputStyle?: {height?: string, width?: string};
      inputType?: "multi" | "single";
  }
  const InputWithLabel = (props: InputWithLabelProps) => {
      const title: string = props.title || "";
      const inputStyle = props.inputStyle ? {color:"#2D3748", paddingLeft:"1em", ...props.inputStyle} : {color:"#2D3748", paddingLeft:"1em", height:"2em"};
      const inputFor = props.inputFor || "";
      const inputType = props.inputType || "single";
      const [inputValue, setInputValue] = useState(formInputs[inputFor]);
      const onChange: ChangeEventHandler<HTMLInputElement> = props.onChange || ((e) => { console.log(e); });
      const _onChange = (e: any) => {
          onChange(e);
          const value = e.target.value;
          setInputValue(value);
          formInputs[inputFor] = value;
          setFormInputs(formInputs);
      }
      return (
          <label style={{display:"flex", flexDirection:"column", color:"#4A5568"}}>
              {title}
              <div style={{height:"0.3em"}}></div>
              {inputType === "single"
                  ? (<input type="text" onChange={_onChange} style={inputStyle} value={inputValue}></input>)
                  : (<textarea onChange={_onChange} value={inputValue} rows={5} style={inputStyle}/>)}
          </label>
      );
  }

  const FormComponent = (
      <Box>
          <Box>
              <form style={{display:"grid", gap:"0.8em", gridTemplateRows:"1fr 1fr 0.5em"}}>
                  <InputWithLabel title={"Email (required)"} onChange={handleInputChange} inputFor={"email"} inputStyle={{height:"3.3em"}}/>
                  <InputWithLabel title={"Password (required)"} onChange={handleInputChange} inputFor={"password"} inputStyle={{height:"3.3em"}}/>
              </form>
          </Box>
          <Box sx={{marginTop:"20px", display:"flex", justifyContent:"space-between"}}>
              <Button key={0} variant="contained" color={'navgreen'} onClick={() => {
                  console.log(`Attempting login with email=${formInputs['email']} and password=${formInputs['password']}`);
                  handleSubmit();
              }} sx={{width:"100%"}}>Login Now</Button>
          </Box>
      </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100vh"}}>
        <Box sx={{backgroundColor:"white", padding:"2em", width:"clamp(385px, 50%, 500px)", borderRadius:"0.5em"}}>
          {LoginTitle}
          {FormComponent}
          {CreateAccountOptions}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
  
export default CreateAccountModal