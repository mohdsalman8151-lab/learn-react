import {useState} from 'react'

function Student() {
    const [student, setStudent] = useState({
        name: "John Doe",
        age: 20,
        major: "Computer Science"
    });
    const updateStudent = () => {
        setStudent({
           ...student,
            name: "Jane Smith",
        });
    }
  return (
    <div className='w-[400px] h-[200px] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
        <h1 className='text-2xl font-bold text-gray-800 pb-4'>Student Information</h1>
        <p className='text-lg text-gray-700'>Name: {student.name}</p>
        <p className='text-lg text-gray-700'>Age: {student.age}</p>
        <p className='text-lg text-gray-700'>Major: {student.major}</p>
        <button onClick={updateStudent} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out mt-4'>Update Student</button>
    </div>
  )
}

export default Student