import {useState} from 'react';
export default function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        count > 0 &&  setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }

    return (
        <div className= 'w-[400px] h-[200px] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
            <h1 className='text-2xl font-bold text-gray-800 pb-4'>Counter: {count}</h1>
            <div className='flex gap-3'>
                <button onClick={increment} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out'>Increment</button>
                <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out '>Decrement</button>
                <button onClick={reset} className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out'>Reset</button>
            </div>
        </div>
    )

}