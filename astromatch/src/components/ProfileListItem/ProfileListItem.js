import React from "react"
import { ListItemContainer, RoundImage} from './styled'



export const ProfileListItem = () => {
    return(
        <ListItemContainer>
            <RoundImage src={"https://picsum.photos/id/1008/367/267"}/>
            <h2>Nome Pessoa</h2>
        </ListItemContainer>
    )
}