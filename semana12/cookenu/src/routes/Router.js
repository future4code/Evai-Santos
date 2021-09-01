import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUpPage from "../pages/SignUpPage/SingUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";










const Router = () => {
    return(
    <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path= "/login">
           <LoginPage />
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
           <SingUpPage />
        </Route>

        <Route >
           <ErrorPage />
        </Route>

    </Switch>
    
    
    </BrowserRouter>
    )
}


export default Router