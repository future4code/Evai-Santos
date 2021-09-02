import React from "react"
import { LogoImage, ScreenContainer, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import  Button  from "@material-ui/core/Button"
import LoginForm from "./LoginForm"
import {useHistory} from "react-router-dom"
import {goToSignUp} from "../../routes/coordinator"
import useUmprotectedPage from "../../hooks/useUmprotectedPage"


const LoginPage = ({setRightButtonText}) => {
    useUmprotectedPage()
    const history = useHistory()
    
    return (
        <ScreenContainer> 
            <LogoImage src={logo} /> 
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
              <Button 
              onClick={() => goToSignUp(history)}
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