import {useState} from 'react'

function SampleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  }

  return (
    <div>
        <form className='w-[400px] h-[200px] flex flex-col justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5 gap-4'>
            <input
                className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input
                className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>Submit</button>
        </form> 
    </div>
  )
}

export default SampleForm