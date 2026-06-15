import {useState} from 'react'

function INput() {
  const [value, setValue] = useState('');

  return (
    <div className='w-[400px] h-[200px] flex flex-col justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5 gap-4'>
      <input
        className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
        <p className='text-lg text-gray-700'>You typed: {value || "Nothing yet..."}</p>
    </div>
  )
}

export default INput