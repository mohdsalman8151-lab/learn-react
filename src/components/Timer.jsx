import {useState, useEffect} from 'react'

function Timer() {
    const [second, setSecond] = useState(0);
    useEffect(() => {
        // document.title =`Second: ${second}`;
        const interval = setInterval(() => {
            setSecond((prev) => prev + 1);
        },1000);
        return ()=>{
            clearInterval(interval);
            console.log('timer clear')
        }
    }, []);
  return (
    <div>
        <h1>Second: {second}</h1>
    </div>
  )
}

export default Timer