import {useState, useEffect} from 'react'

function WindowWidthTracker() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const windowResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', windowResize)
       
    }, []);
  return (
    <div>
        <h1>Windows width tracker</h1>
        <h2>Second: {width}</h2>
    </div>
  )
}

export default WindowWidthTracker