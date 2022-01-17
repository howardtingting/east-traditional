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
    const [formIdx, setFormIdx] = useState(1);
    const [completedSteps, setCompletedSteps] = useState({1:false,2:false,3:false,4:false});
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {

    };
    const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
    };
    const handleRadioChange: (idx: number) => any = (idx) => {
        const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            setFormIdx(idx);
        }
        return handleChange;
    };
    const InputWithLabel = (props: {title: string, value: string, onChange: ChangeEventHandler<HTMLInputElement>}) => {
        const title: string = props.title || "";
        const value: string = props.value || "";
        const onChange: ChangeEventHandler<HTMLInputElement> = props.onChange || undefined;
        return (
            <label style={{display:"flex", flexDirection:"column"}}>
                {title}
                <input type="text" value={value} onChange={onChange}>{}</input>
            </label>
        );
    }
    const FormComponent = (
        <Box>
            <Box sx={{display:"flex", justifyContent:"space-around", marginBottom:"60px"}}>
                <label style={{userSelect:"none", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"100%", backgroundColor: (formIdx === 1 ? (completedSteps[1] ? StepState.Completed : StepState.Focused) : (completedSteps[1] ? StepState.Completed : StepState.Skipped))}} onClick={handleRadioChange(1)}><div>1</div><div style={{position:"absolute", marginTop:"70px"}}>Personal</div></label>
                <label style={{userSelect:"none", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"100%", backgroundColor: (formIdx === 2 ? (completedSteps[2] ? StepState.Completed : StepState.Focused) : (completedSteps[2] ? StepState.Completed : StepState.Skipped))}} onClick={handleRadioChange(2)}><div>2</div><div style={{position:"absolute", marginTop:"70px"}}>Insurance</div></label>
                <label style={{userSelect:"none", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"100%", backgroundColor: (formIdx === 3 ? (completedSteps[3] ? StepState.Completed : StepState.Focused) : (completedSteps[3] ? StepState.Completed : StepState.Skipped))}} onClick={handleRadioChange(3)}><div>3</div><div style={{position:"absolute", marginTop:"70px"}}>Symptoms</div></label>
                <label style={{userSelect:"none", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"100%", backgroundColor: (formIdx === 4 ? (completedSteps[4] ? StepState.Completed : StepState.Focused) : (completedSteps[4] ? StepState.Completed : StepState.Skipped))}} onClick={handleRadioChange(4)}><div>4</div><div style={{position:"absolute", marginTop:"70px"}}>Submit</div></label>
            </Box>
            {(formIdx === 1) && (<Box>
                <form onSubmit={handleSubmit}>
                    <InputWithLabel title={"Full Name (required)"} value={formInputs.fullName} onChange={handleFormChange} />
                    <InputWithLabel title={"Email (required)"} value={formInputs.email} onChange={handleFormChange} />
                    <InputWithLabel title={"Phone (required)"} value={formInputs.phone} onChange={handleFormChange} />
                    <InputWithLabel title={"Date of Birth (required)"} value={formInputs.dateOfBirth} onChange={handleFormChange} />
                </form>
            </Box>)}
            {(formIdx === 2) && (<Box>
                <form onSubmit={handleSubmit}>
                    <InputWithLabel title={"Insurance Subscriber ID (optional)"} value={formInputs.subscriberId} onChange={handleFormChange} />
                    <InputWithLabel title={"Insurance Company Name (optional)"} value={formInputs.companyName} onChange={handleFormChange} />
                </form>
            </Box>)}
            {(formIdx === 3) && (<Box>
                <form onSubmit={handleSubmit}>
                    <InputWithLabel title={"Symptoms (optional)"} value={formInputs.symptoms} onChange={handleFormChange} />
                </form>
            </Box>)}
            {(formIdx === 4) && (<Box>

            </Box>)}
        </Box>
    );
    return (
        <Box className={style.FormContainer}>
            {FormComponent}
        </Box>
    );
}

export default Form;