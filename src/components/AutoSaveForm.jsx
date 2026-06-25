import { useEffect, useEffectEvent, useState } from "react"
import { useTheme } from "../context/ThemeContext"

const AutoSaveForm = () => {
    const [formData, setFormData] = useState({name:'', email:''})
    const {theme} = useTheme();
     const saveForm = useEffectEvent(()=>{
        console.log(formData)
    })
    useEffect(() =>{
        const interval = setInterval(() => {
          saveForm()
        },3000)
        return () => {clearInterval(interval)}
    },[])
  return (
    <div className="text-black ">
        <h1>{theme}</h1>
        Name:  <input type="text" 
        placeholder="Name"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
        />
      Email:  <input type="email" 
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}/>
    </div>
  )
}

export default AutoSaveForm