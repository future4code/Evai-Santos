import React from "react"
import {ImputsContainer, LoginFormContainer} from "./styled"
import  Button  from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import {login} from "../../services/user"
import {useHistory} from "react-router-dom"





    const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email:"", password: ""})
    const history = useHistory()



    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    
    }

    
    
    return (
        <LoginFormContainer>
        <form onSubmit={onSubmitForm}>
        <ImputsContainer>
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
             </ImputsContainer>
                </form>
            </LoginFormContainer>

            
    )
}

export default LoginForm