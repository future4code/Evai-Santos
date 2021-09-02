import React from "react"
import { Switch, Route} from "react-router-dom"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";






const Router = ({rightButtonText, setRightButtonText}) => {
    return(
   
    <Switch>
        <Route exact path= "/login">
           <LoginPage rightButtonTex={rightButtonText} setRightButtonText={setRightButtonText} />
        </Route>
        
        <Route exact path= "/adicionar-receita">
           <AddRecipePage />
        </Route>

        <Route exact path= "/detalhe/:id">
           <RecipeDetailPage />
        </Route>

        <Route exact path= "/">
           <RecipeListPage />
        </Route>

        <Route exact path= "/cadastro">
           <SignUpPage />
        </Route>

        <Route >
           <ErrorPage />
        </Route>

    </Switch>
     
    )
}


export default Router