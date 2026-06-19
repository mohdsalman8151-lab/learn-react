import { useState, useEffect } from "react";
const FILTERS = ["all", "active", "done"];
function TodoApp() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState(()=>{
        const getTodos = localStorage.getItem('todos');
        return getTodos ? JSON.parse(getTodos) : [];
    });
    
    const [activeStatus, setActiveStatus] = useState('all');
    const handlesubmit = () =>{
        if(newTodo){
            setTodos([...todos, {id: Date.now(), text:newTodo, isComplete:false}]);
            setNewTodo('')
         
        }
        console.log(todos)
    }
   const handleDelete = (index) => {
        setTodos(prevTodos => 
            prevTodos.filter((todo, i) => todo.id !== index)
        );
    }
    // const handleComplete = (index) =>{
    //     const allTodos = [...todos]
    //     allTodos[index].isComplete = !allTodos[index].isComplete
    //     setTodos(allTodos);
    // }
    const handleComplete = (index) => {
        setTodos(prevTodos =>
            prevTodos.map((todo, i) =>
                todo.id === index
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    };
    const filteredTodos = todos.filter(todo => {
        if (activeStatus === 'active') {
            return !todo.isComplete;
        }

        if (activeStatus === 'done') {
            return todo.isComplete;
        }

        return true;
    });
    function ucfirst(str) {
        if (!str) return ''; 
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    return (
        <div className="bg-slate-100 min-h-screen flex items-start justify-center pt-16 px-4">
        <div className="w-full max-w-md">
    
            {/* Header */}
            <div className="mb-8">
            <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-1">
                Your list
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
                Things to do
            </h1>
            </div>
    
            {/* Input */}
            <div className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Add a task…"
                value={newTodo}
                onChange={(e)=>{setNewTodo(e.target.value)}}
                onKeyDown={(e) => {
                    if(e.key =='Enter'){
                        handlesubmit()
                    }
                }}
                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
            />
            <button onClick={handlesubmit} className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-xl text-sm font-medium transition active:scale-95">
                Add
            </button>
            </div>
    
            <div className="flex gap-1 mb-5 bg-slate-200 rounded-xl p-1">
                { FILTERS.map((fl,index) => (
                        <button key={index} onClick={() => {setActiveStatus(fl)}} className={`flex-1 text-sm font-medium py-1.5 rounded-lg ${fl == activeStatus ? ' bg-white shadow-sm text-slate-900' : ' text-slate-500'} transition-all`}>
                           {ucfirst(fl)}
                        </button>
                    ))
                }
            </div>
    
            {/* Task list — hardcoded sample tasks */}
            <div className="space-y-2 mb-4 max-h-[500px] overflow-auto">
            
           {
                filteredTodos.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-sm">
                    <div className="text-4xl mb-3">✦</div>
                    <p>Nothing here yet.</p>
                    </div>
                ) : (
                    filteredTodos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 group"
                    >
                        <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => handleComplete(todo.id)}
                        className="w-4 h-4 rounded cursor-pointer flex-shrink-0 accent-violet-500"
                        />

                        <span
                        className={`flex-1 text-sm ${
                            todo.isComplete
                            ? "text-slate-400 line-through"
                            : "text-slate-900"
                        }`}
                        >
                        {ucfirst(todo.text)}
                        </span>

                        <button
                        onClick={() => handleDelete(todo.id)}
                        className="text-slate-400 hover:text-red-500 text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        >
                        ×
                        </button>
                    </div>
                    ))
                )
                }
                
            </div>
          
            {/* Footer count */}
            <p className="text-xs text-slate-500 mt-4 text-right font-mono">
           {todos.filter(todo => !todo.isComplete).length} remaining · {todos.length} total
            </p>
             
        </div>
        </div>
  );
}

export default TodoApp