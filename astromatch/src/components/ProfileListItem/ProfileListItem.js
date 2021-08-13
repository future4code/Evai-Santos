import React from "react"
import { ListItemContainer, RoundImage} from './styled'



export const ProfileListItem = (props) => {
    return(
        <ListItemContainer>
            <RoundImage src={"https://picsum.photos/seed/picsum/200/300"}/>
            <h2>Nome Pessoa</h2>
        </ListItemContainer>
    )
}