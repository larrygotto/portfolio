import styled from "styled-components"

export const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    160deg,
    ${(props) => props.bgColor1},
    ${(props) =>
      props.bgColor2 === "white" ? props.bgColor1 : props.bgColor2},
    white
  );
  border: 1px solid lightgray;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px lightgray;
  overflow: hidden;
  img {
    height: 300px;
    position: relative;
    margin-bottom: -50px;
    margin-top: -50px;
  }
`

export const DetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .index {
    margin: 15px;
    border: 1px solid gray;
    background-color: white;
    padding: 3px;
    border-radius: 10px;
    font-weight: 500;
    opacity: 60%;
    box-shadow: 0px 1px 4px gray;
  }
`

export const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

export const Type = styled.p`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 700;
  opacity: 80%;
  margin: 15px;
  margin-right: 0;
  border-radius: 15px;
  padding: 3px 5px;
  border: 1px solid gray;
  box-shadow: 0px 1px 10px gray;
  background-color: ${(props) => props.typeColor};
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  background-color: white;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const StatsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  h3 {
    width: 100%;
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  .sword {
    transform: rotate(180deg);
  }
  .statsContainer {
    display: flex;
    flex-direction: row;
    div {
      margin: 5px 10px;
      @media screen and (max-width: 856px) {
        margin: 0 10px;
    }
      p {
        display: flex;
        align-items: center;
        margin: 5px;
        b {
          margin: 0 3px;
        }
      }

    }
    @media screen and (max-width: 856px) {
      flex-direction: column;
    }
  }
`

export const MovesContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  width: 40%;
  h3 {
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  p {
    margin: 2px 10px;
    font-weight: 500;
    border-bottom: 1px solid whitesmoke;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 5px;
  }
`