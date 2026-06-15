import {useState} from 'react'

function MultipleInput() {
  const [formData, setFormData] = useState({
    name: '',
    email : '',
    age: ''
  });
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData((prev)=>({
        ...prev,
        [name]: value

    }))
  }

  return (
    <div className='w-[400px] h-[200px] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
        <form className='w-[400px] h-[200px] flex flex-col justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5 gap-4'>
            <input
                className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <input
                className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
            />
            <input type="number" 
            value={formData.age}
            name="age"
            onChange={handleChange}
            placeholder="Enter your age"
             className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>Submit</button>
        </form> 
    </div>
  )
}

export default MultipleInput