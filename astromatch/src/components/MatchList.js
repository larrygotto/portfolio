import styled from "styled-components"

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
`

const User = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 95%;
    margin: 10px 0;
    padding: 0;
    transition: 300ms ease;
    p{
        font-size: 1.2em;
        font-weight: bold;
    }
    .photo{
        border-radius: 50px;
        margin: 5px 10px;
        width: 60px;
        height: 60px;
        overflow: hidden;
        img{
            width: 110px;
            transform: translateX(-25%);
        }
    }
    :hover{
        background-color: lightsteelblue;
    }
`

const LikeWarning = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    p{
        margin: 3px;
        cursor: default;
        font-size: 1em;
        font-weight: 500;
    }
`

export const MatchList = (props) => {

    const matches = props.matches
    const gotMatches = props.gotMatches

    const matchList = matches.map((user) => {
            return <User key={user.id}>
                <div className="photo"> 
                    <img src={user.photo} alt="user"/>
                </div>
                <p>{user.name}</p>
            </User>
        })

    let renderList
     if (matches.length === 0 && gotMatches === true) {
        renderList = <LikeWarning>
            <img style={{width: '150px'}} src="https://cliply.co/wp-content/uploads/2021/09/142109670_SAD_CAT_400.gif" alt="gato triste"/>
            <p>Ainda sem matches :(</p>
            <p>Curta alguns perfis para começar</p>
            </LikeWarning>
     } else {
        renderList = (matches.length !== 0 ? matchList : <img style={{width: '350px'}} src="https://flevix.com/wp-content/uploads/2019/07/Line-Preloader.gif" alt="carregando..."/>)
     }


    return <ListContainer>

        {renderList}
        
    </ListContainer>
}