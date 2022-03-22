import { useNavigate } from "react-router-dom"
import { ButtonClassic } from "../components/ButtonClassic"
import { MdArrowBackIosNew } from 'react-icons/md'


export const BackButton = () => {
    const goTo = useNavigate()

    return <div style={{opacity: '60%', alignSelf: 'flex-start', position: 'fixed', transform: 'scale(0.8)', marginTop: '-15px', marginLeft: '-5px'}}>
        <ButtonClassic text={<MdArrowBackIosNew/>} onClick={() => goTo(-1)}/>
        </div>
}