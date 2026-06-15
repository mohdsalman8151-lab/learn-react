import {useState} from 'react'

function Toggle() {
    const [on, setOn] = useState(false);
    const toggle = () => {
        setOn(!on);
    }
  return (

    <div>
      <button onClick={toggle} className={`px-4 py-2 rounded ${on ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
        {on ? 'ON' : 'OFF'}
      </button>
      {on && <p className='text-green-500 font-bold'>The toggle is ON</p>}
    </div>
  )
}

export default Toggle