import { useNavigate } from "react-router-dom"
import { Logo } from "../assets/Logo"

export const Footer = () => {

    const goTo = useNavigate()

    return <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#3866FF", color: "white", padding: "5px 10px"}}>

        <Logo/>

        <p>Copyright 2022</p>
        
        <button style={{padding: '5px', fontSize: '1em'}} onClick={() => goTo('/admin')}>Área Administrativa</button>
    </footer>
}