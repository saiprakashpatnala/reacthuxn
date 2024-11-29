import { useState } from "react"


const ToggleBackGround = () => {
    const[theme,setTheme]=useState(false)

    const bg=theme===false?"black":"white"
    const cr=theme===false?"yellow":"black"
    console.log(theme)
  return (
    <div style={{backgroundColor:bg,color:cr}}>
        <h1>Theme Change</h1>
        <button onClick={()=>(setTheme(!theme))}>Change Theme</button>

    </div>
  )
}

export default ToggleBackGround