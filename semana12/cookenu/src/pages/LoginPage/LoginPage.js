import React from "react"
import { LogoImage, ScreenContainer, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import  Button  from "@material-ui/core/Button"
import LoginForm from "./LoginForm"
import {useHistory} from "react-router-dom"
    import {goToSingUp} from "../../routes/coordinator"


const LoginPage = () => {
    const history = useHistory()
    
    return (
        <ScreenContainer> 
            <LogoImage src={logo} /> 
            <LoginForm />
            <SignUpButtonContainer>
              <Button 
              onClick={() => goToSingUp(history)}
                type={"submit"}
                fullWidth 
                variant={"Contained"}
                color={"primary"}
                    >
                Cadastre-se!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage