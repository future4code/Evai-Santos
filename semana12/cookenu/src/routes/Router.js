import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUpPage from "../pages/SignUpPage/SingUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";









const Router = () => {
    return(
    <BrowserRouter>
    <switch>
        <Router exact path= "/login">
           <LoginPage />
        </Router>
        
        <Router exact path= "/adicionar-receita">
           <AddRecipePage />
        </Router>

        <Router exact path= "/detalhe/:id">
           <RecipeDetailPage />
        </Router>

        <Router exact path= "/">
           <RecipeListPage />
        </Router>

        <Router exact path= "/cadastro">
           <SingUpPage />
        </Router>

        <Router >
           <ErrorPage />
        </Router>

    </switch>
    
    
    </BrowserRouter>
    )
}


export default Router