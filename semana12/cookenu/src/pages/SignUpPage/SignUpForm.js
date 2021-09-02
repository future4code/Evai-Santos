import React from "react"
import {ImputsContainer, SignUpFormContainer} from "./styled"
import  Button  from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField"
import {useHistory} from "react-router-dom"
import useForm from "../../hooks/useForm"
import {signUp} from "../../services/user"



const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({name:"", email: "", password:""})



    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)

    }
    
                return (
        
                <form onSubmit={onSubmitForm}>
                    <SignUpFormContainer>
                    <ImputsContainer>
                    <TextField 
                    value={form.name}
                    nome={"name"}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    required
                    autoFocus
                    margin={"normal"}

                    />

                    <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    type={"email"}
                    fullWidth
                    required
                    margin={"normal"}
                   
                    />

                    <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"senha"}
                    variant={"outlined"}
                    type={"password"}
                    fullWidth
                    required
                    margin={"normal"}
                    
                    
                    
                    />

                    </ImputsContainer>  
                    <Button 
                    color={"primary"}
                    variante={"contained"}
                    type={"submit"}
                    fullWidth
                    >
                        Fazer cadastro
                    </Button>
                    </SignUpFormContainer>
                    </form>

            
    )
}

export default SignUpForm