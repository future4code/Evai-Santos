import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToLogin, goToRecipesList } from "../../routes/coordinator"
import {useHistory} from "react-router-dom" 





const Header = ({rightButtonText, setRightButtonText}) => {
  
    const history = useHistory()

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonaction = () => {
      if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)

      } else {
         goToLogin(history)
      }

      }
    


  return (
    
      <AppBar position="static">
          <StyledToolbar> 
          <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
          <Button onClick={rightButtonaction}color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    
  )
}

export default Header