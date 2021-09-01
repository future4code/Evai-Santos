import React from "react"
import {ImputsContainer} from "./styled"
import  Button  from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"


const LoginForm = () => {

    const [form, onChange, clear] = useForm({email:"", password: ""})



    const onsubmitForm = (event) => {
        event.preventDefault()

    }
    
    return (
        
            <ImputsContainer>
                <form onSubmit={onsubmitForm}>
                    <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}

                    />

                    <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                    />
                     
                    <Button 
                    type={"submit"}
                    fullWidth 
                    variant={"Contained"}
                    color={"primary"}
                    >
                        Fazer Login!
                    </Button>

                </form>
            </ImputsContainer>

            
    )
}

export default LoginForm