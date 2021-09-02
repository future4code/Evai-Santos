import React from "react"
import logo from "../../assets/logo.png"
import {ScreenContainer} from "./styled" 
import SignUpForm from "./SignUpForm"
import {LogoImage} from "./styled"
import useUmprotectedPage from "../../hooks/useUmprotectedPage"



const SignUpPage = () => {
    useUmprotectedPage()
    return (
        <ScreenContainer>
        <LogoImage src={logo} />
         <SignUpForm />
        </ScreenContainer>
              
    )     
}

export default SignUpPage