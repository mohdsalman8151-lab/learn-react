import {useState} from 'react'

function Like() {
    const [like, setLike] = useState(false);
    const toggle = () => {
        setLike(!like);
    }
  return (

    <div>
      <button onClick={toggle} className={`px-4 py-2 rounded  bg-gray-500 text-white hover:bg-gray-700 transition duration-300 ease-in-out`}>
        {like ? '❤️Liked' : '🤍Like'}
      </button>
    </div>
  )
}

export default Like