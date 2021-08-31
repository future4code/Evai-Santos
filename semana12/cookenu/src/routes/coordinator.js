export const goToLogin = (history) => {
    history.pushState("/login")
}

export const goToAddRecipes = (history) => {
    history.pushState("/adicionar-receitas")
}


export const goToSingUp = (history) => {
    history.pushState("/cadastro")
}

export const goToRecipeDetail = (history, id) => {
    history.pushState(`/detalhe/${id}`)
}

export const goToRecipeList = (history) => {
    history.pushState("/")
}