import { useMemo } from 'react';
import {useReducer, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
export default function UseMemo(){
   const [count, setCount] = useState(0)
   const [text, setText] = useState('')

   const expensiveCalculation = (num) => {
    console.log('calculation');
        let total = 0;
        for(let i=0; i < 1000000000; i++){
            total +=i;
        }
        return total + num;

   }
   const result = useMemo(()=> expensiveCalculation(count), [count]);

    return (
        <div className= 'w-[400px] h-[200px] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
            <h1 className='text-2xl font-bold text-gray-800 pb-4'>Resul: {result } </h1>
            <h1 className='text-2xl font-bold text-gray-800 pb-4'>Counter: {count}</h1>
            <div className='flex gap-3'>
                <button onClick={()=>{setCount(count + 1)}} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out'>Increment</button>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )

}