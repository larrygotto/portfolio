import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom" 

export const useCheck = () => {
    const [checked, setChecked] = useState(false)
    const goTo = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            goTo('/login')
        } else setChecked(true)
    }, [goTo])

    return {checked: checked}
}