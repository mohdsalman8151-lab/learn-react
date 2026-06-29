import {useReducer} from 'react';
export default function Reducer(){
    const Reducer = (state,action) => {
        switch(action.type){
            case 'add' : 
                return {count : state.count + 1}
            case 'sub':
                 return {count : state.count - 1}
            case 'rest':
                 return {count : 10}
            default:
                return state
        }
    }
  const [state, dispatch] = useReducer(Reducer, {count:10})


    return (
        <div className= 'w-[400px] h-[200px] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
            <h1 className='text-2xl font-bold text-gray-800 pb-4'>Counter: {state.count}</h1>
            <div className='flex gap-3'>
                <button onClick={()=>{dispatch({type: 'add'})}} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out'>Increment</button>
                <button onClick={()=>{dispatch({type: 'sub'})}} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out '>Decrement</button>
                <button onClick={()=>{dispatch({type: 'rest'})}} className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out'>Reset</button>
            </div>
        </div>
    )

}