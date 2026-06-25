import { useEffect, useEffectEvent, useState } from "react"


const UseEffecEvent = () => {
    const [second, setSecond] = useState(0)
    const onTick = useEffectEvent(()=>{
        console.log(second)
        setSecond((prev) => prev +1)
    })
    useEffect(()=>{
         const interval = setInterval(()=>{
             onTick()
            },1000)
        return ()=>{ clearInterval(interval) }
    },[])
  return (
    <div>
        <h1>Second: {second}</h1>
    </div>
  )
}

export default UseEffecEvent