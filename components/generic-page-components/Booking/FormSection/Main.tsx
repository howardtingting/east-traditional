import theme from '../../../mui-themes/MainThemes';
import { ThemeProvider } from '@emotion/react';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import style from "./Form.module.css";
import { Box } from "@mui/system";
import { FormEventHandler, ChangeEventHandler, useState } from "react";

enum StepState {
    Focused = "rgba(45,156,219,0.5)",
    Completed = "#6FCF97",
    Skipped = "rgba(196,196,196,0.5)"
}

const Form = (props: any) => {
    // TODO (FUTURE): Improve modularity of step form;
        // 1. variable number of steps
        // 2. variable form fields/inputs
    const [formInputs, setFormInputs] = useState({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        subscriberId: "",
        companyName: "",
        symptoms: "",
    });
    const [fullName, setFullName] = useState("");
    const [formIdx, setFormIdx] = useState(1);
    const [completedSteps, setCompletedSteps] = useState({0: false, 1:false, 2:true, 3:false, 4:false});
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {

    };
    const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
    };
    const _handleFormChange: (fieldName: string) => ChangeEventHandler<HTMLInputElement> = (fieldName) => {
        switch (fieldName) {
            case "fullName":
                return (e) => {
                };
            default:
                return(e) => {
                    console.log(e);
                }
            break;
        }
    }
    const handleStepChange: (idx: number) => any = (idx) => {
        const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            setFormIdx(idx);
        }
        return handleChange;
    };

    interface StepLabelProps {
        stepLabelCount?: keyof typeof completedSteps;
        stepLabelText?: string;
    }
    const StepLabel = (props: StepLabelProps) => {
        const stepLabelCount = props.stepLabelCount || 0;
        const stepLabelText = props.stepLabelText || `Label ${stepLabelCount}`;
        return (
            <label style={{userSelect:"none", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"100%", backgroundColor: (formIdx === stepLabelCount ? (completedSteps[stepLabelCount] ? StepState.Completed : StepState.Focused) : (completedSteps[stepLabelCount] ? StepState.Completed : StepState.Skipped))}} onClick={handleStepChange(stepLabelCount)}>
                <div style={{color:"white"}}>{completedSteps[stepLabelCount] ? <div style={{marginTop:"5px"}}><CheckIcon/></div> : stepLabelCount}</div>
                <div style={{position:"absolute", marginTop:"70px"}}>{stepLabelText}</div>
            </label>
        );
    }

    interface InputWithLabelProps {
        title?: string;
        onChange?: ChangeEventHandler<HTMLInputElement>;
        onKeyDown?: KeyboardEvent;
        inputStyle?: {height?: string, width?: string};
    }
    const InputWithLabel = (props: InputWithLabelProps) => {
        const title: string = props.title || "";
        const inputStyle = props.inputStyle || {height:"2em"};
        const onChange: ChangeEventHandler<HTMLInputElement> = props.onChange || ((e) => { console.log(e); });
        return (
            <label style={{display:"flex", flexDirection:"column"}}>
                {title}
                <div style={{height:"0.3em"}}></div>
                <input type="text" onChange={onChange} style={inputStyle}></input>
            </label>
        );
    }

    const FormComponent = (
        <Box>
            <Box sx={{display:"flex", justifyContent:"space-around", marginBottom:"60px"}}>
                <StepLabel stepLabelCount={1} stepLabelText={"Personal"}/>
                <StepLabel stepLabelCount={2} stepLabelText={"Insurance"}/>
                <StepLabel stepLabelCount={3} stepLabelText={"Symptoms"}/>
                <StepLabel stepLabelCount={4} stepLabelText={"Submit"}/>
            </Box>
            {(formIdx === 1) && (<Box>
                <form onSubmit={handleSubmit} style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(4, 1fr)"}}>
                    <InputWithLabel title={"Full Name (required)"} onChange={handleFormChange}/>
                    <InputWithLabel title={"Email (required)"} onChange={handleFormChange}/>
                    <InputWithLabel title={"Phone (required)"} onChange={handleFormChange}/>
                    <InputWithLabel title={"Date of Birth (required)"} onChange={handleFormChange}/>
                </form>
            </Box>)}
            {(formIdx === 2) && (<Box>
                <form onSubmit={handleSubmit} style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(2, 1fr)"}}>
                    <InputWithLabel title={"Insurance Subscriber ID (optional)"} onChange={handleFormChange} />
                    <InputWithLabel title={"Insurance Company Name (optional)"} onChange={handleFormChange} />
                </form>
            </Box>)}
            {(formIdx === 3) && (<Box>
                <form onSubmit={handleSubmit} style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(1, 1fr)"}}>
                    <InputWithLabel title={"Symptoms (optional)"} onChange={handleFormChange} inputStyle={{height:"10em"}}/>
                </form>
            </Box>)}
            {(formIdx === 4) && (<Box>

            </Box>)}
            <Box sx={{marginTop:"40px", display:"flex", justifyContent:"space-between"}}>
                <Button key={0} className={style.navbutton} variant="contained" color={'navgreen'} onClick={() => {
                    if (formIdx > 1) {
                        setFormIdx(formIdx - 1);
                    }
                }}>Previous</Button>
                <Button key={1} className={style.navbutton} variant="contained" color={'navgreen'} onClick={() => {
                    if (formIdx < 4) {
                        setFormIdx(formIdx + 1);
                    }
                }}>Next</Button>
            </Box>
        </Box>
    );
    return (
        <ThemeProvider theme={theme}>
            <Box className={style.FormContainer}>{FormComponent}</Box>
        </ThemeProvider>
    );
}

export default Form;