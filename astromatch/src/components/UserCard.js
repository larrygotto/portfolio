import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 10px 0;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 5px 6px lightgray;
    width: 80%;
    height: 80%;
    align-content: center;
    justify-content: space-between;
    overflow: hidden;
    background-image: url(${props => props.photo});
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const DataContainer = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
    width: 100%;
    height: fit-content;
    padding-bottom: 10px;
    .name{
        margin: 20px 10px 0 10px;
        cursor: default;
        display: flex;
        align-items: baseline;
        font-weight: bolder;
        color: white;
        margin-left: 10px;
        .title{
            font-size: 1.5em;
            margin: 0;
        }
        .age{
            font-size: 1.2em;
            margin: 5px;
            margin-top: 25px;
        }
    }
    .bio{
        margin: 10px ;
        cursor: default;
        font-size: 1.1em;
        font-weight: 600;
        color: white;
    }
`



export const UserCard = (props) => {

    return <CardContainer onDoubleClick={props.like} photo={props.photo}>
       
        <DataContainer>
                
            <div className="name">
                <p className="title">{props.name},</p>
                <p className="age">{props.age}</p>
            </div>

            <p className="bio">{props.bio}</p>

        </DataContainer>

        
    </CardContainer>
}