import { useEffect, useState } from "react"

export const useCheck = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("tokenLabeddit")
    if (token) {
      setChecked(true)
    }
  }, [])

  return { checked: checked }
}
