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
    const [statusMessage, setStatusMessage] = useState("Please fill out all (required) fields to continue!");
    const [formInputs, setFormInputs] = useState({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        subscriberId: "",
        companyName: "",
        symptoms: "",
    });
    const stepsToComplete = [1,2,3];
    const [completedSteps, setCompletedSteps] = useState({0: true, 1:false, 2:false, 3:false, 4:false});
    const [formIdx, setFormIdx] = useState<keyof typeof completedSteps>(1);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const checkAllCompletedSteps = () => {
        let result = true;
        stepsToComplete.forEach((key, value) => {
            const step = value as keyof typeof completedSteps;
            if (completedSteps[step] === false) result = false;
        });
        return result;
    }

    const checkIfStepComplete: (step: keyof typeof completedSteps) => void = step => {
        const validateField: (field: keyof typeof formInputs) => boolean = (field) => {
            const validFullName = (fullName: string) => { return fullName.length > 2 }
            const validEmail = (email: string) => {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
            const validPhone = (phone: string) => {
                const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/m;
                return re.test(phone);
            }
            const validDateOfBirth = (dateOfBirth: string) => {
                //DD/MM/YYYY
                const re = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
                return re.test(dateOfBirth);
            }
            switch (field.toLowerCase()) {
                case "fullname": return validFullName(formInputs.fullName);
                case "email": return validEmail(formInputs.email);
                case "dateofbirth": return validDateOfBirth(formInputs.dateOfBirth);
                case "phone": return validPhone(formInputs.phone);
                default: return true;
            }
        }
        const validateFields: (fields: Array<keyof typeof formInputs>) => boolean = (fields) => {
            let returnVal = true;
            fields.forEach(field => {
                if (!validateField(field)) returnVal = false;
            })
            return returnVal;
        }
        if (step === 1) {
            //TODO: better input validation
            const fields: Array<keyof typeof formInputs> = ["fullName", "email", "phone", "dateOfBirth"];
            if (validateFields(fields)) {
                completedSteps[step] = true;
            } else {
                completedSteps[step] = false;
            }
            setCompletedSteps(completedSteps);
        } else if (step === 4) {
            if (formSubmitted) completedSteps[step] = true;
            setCompletedSteps(completedSteps);
        } else {
            completedSteps[step] = true;
            setCompletedSteps(completedSteps);
        }
    }

    const handleSubmit = () => {
        console.log("Submitting form");
    };
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    };
    const handleStepChange: (step: keyof typeof completedSteps) => any = (idx) => {
        const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            checkIfStepComplete(formIdx);
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
        inputFor: keyof typeof formInputs;
        title?: string;
        onChange?: ChangeEventHandler<HTMLInputElement>;
        onKeyDown?: KeyboardEvent;
        inputStyle?: {height?: string, width?: string};
        inputType?: "multi" | "single";
    }
    const InputWithLabel = (props: InputWithLabelProps) => {
        const title: string = props.title || "";
        const inputStyle = props.inputStyle || {height:"2em"};
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
            <label style={{display:"flex", flexDirection:"column"}}>
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
            <Box sx={{display:"flex", justifyContent:"space-around", marginBottom:"60px"}}>
                <StepLabel stepLabelCount={1} stepLabelText={"Personal"}/>
                <StepLabel stepLabelCount={2} stepLabelText={"Insurance"}/>
                <StepLabel stepLabelCount={3} stepLabelText={"Symptoms"}/>
                <StepLabel stepLabelCount={4} stepLabelText={"Submit"}/>
            </Box>
            {(formIdx === 1) && (<Box>
                <form style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(4, 1fr)"}}>
                    <InputWithLabel title={"Full Name (required)"} onChange={handleInputChange} inputFor={"fullName"}/>
                    <InputWithLabel title={"Email (required)"} onChange={handleInputChange} inputFor={"email"}/>
                    <InputWithLabel title={"Phone (required)"} onChange={handleInputChange} inputFor={"phone"} />
                    <InputWithLabel title={"Date of Birth (required)"} onChange={handleInputChange} inputFor={"dateOfBirth"} />
                </form>
            </Box>)}
            {(formIdx === 2) && (<Box>
                <form style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(2, 1fr)"}}>
                    <InputWithLabel title={"Insurance Subscriber ID (optional)"} onChange={handleInputChange} inputFor={"subscriberId"} />
                    <InputWithLabel title={"Insurance Company Name (optional)"} onChange={handleInputChange} inputFor={"companyName"} />
                </form>
            </Box>)}
            {(formIdx === 3) && (<Box>
                <form style={{display:"grid", gap:"0.8em", gridTemplateRows:"repeat(1, 1fr)"}}>
                    <InputWithLabel title={"Symptoms (optional)"} onChange={handleInputChange} inputFor={"symptoms"} inputType={"multi"} inputStyle={{height:"100px"}}/>
                </form>
            </Box>)}
            {(formIdx === 4) && (<Box>
                {/* {statusMessage} */}
            </Box>)}
            <Box sx={{marginTop:"40px", display:"flex", justifyContent:"space-between"}}>
                {(formIdx !== 1) && (<Button key={0} className={style.navbutton} variant="contained" color={'navgreen'} onClick={() => {
                    const newFormIdx = formIdx - 1;
                    if (formIdx > 1) {
                        handleStepChange(newFormIdx as keyof typeof completedSteps)();
                    }
                }}>Previous</Button>)}
                {(formIdx === 1) && (<Button key={0} className={style.navbutton} variant="contained" color={'navgreen'} style={{opacity:"50%", cursor:"not-allowed"}} onClick={() => {
                    const newFormIdx = formIdx - 1;
                    if (formIdx > 1) {
                        handleStepChange(newFormIdx as keyof typeof completedSteps)();
                    }
                }}>Previous</Button>)}
                {(formIdx === 4)
                    ? (!checkAllCompletedSteps()
                        ? (<Button key={1} className={style.navbutton} variant="contained" color={'navgreen'} style={{opacity:"50%", cursor:"not-allowed"}}>Submit</Button>)
                        : (<Button key={1} className={style.navbutton} variant="contained" color={'navgreen'} onClick={handleSubmit}>Submit</Button>))
                    : (<Button key={1} className={style.navbutton} variant="contained" color={'navgreen'} onClick={() => {
                        const newFormIdx = formIdx + 1;
                        if (formIdx < 4) {
                            handleStepChange(newFormIdx as keyof typeof completedSteps)();
                        }
                    }}>Next</Button>)
                }
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