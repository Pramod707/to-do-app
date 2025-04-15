
import React , {useState} from 'react'
function ToDoList(){

 const [task , setTask] = useState(["Mrn break fast" , "DSA" , "bath"]);
 const [newTask , setNewTask] = useState(" ");


 function inputChange(event){
    setNewTask(event.target.value);

 }


function addTask(){
   setTask(t=>[...t,newTask]);
   setNewTask(" ");
}

function deleteTask(index){

    const UpdatedTask = task.filter((_,i)=>i!==index);
    setTask(UpdatedTask);
}

function moveTaskup(index){
if(index > 0){
    const UpdatedTask = [...task];
    [UpdatedTask[index],UpdatedTask[index-1]] = [UpdatedTask[index-1],UpdatedTask[index]];
    setTask(UpdatedTask);
}
}

function moveTaskdown(index){
    if(index< task.length-1){
        const UpdatedTask = [...task];
        [UpdatedTask[index],UpdatedTask[index+1]] = [UpdatedTask[index+1],UpdatedTask[index]];
        setTask(UpdatedTask);
    }

}

return(
    <div className='to-do-list'>
        <h1> TO DO LIST</h1>
            <div>
            <input type='text' 
             placeholder='enter the task...'
            value={newTask}
             onChange={inputChange}/>
            <button className='add-button'
               onClick={addTask}>
                    ADD
            </button>
            </div>

            <ol>
                {task.map((task,index)=>
                    <li key={index}>
                        <span className='task'>{task}</span>
                        <button className='delete-btn'
                        onClick={()=>deleteTask(index)}>
                            delete🚮
                        </button>

                        <button className='move-btn'
                        onClick={()=>moveTaskup(index)}>
                            UP🔼
                        </button>

                        <button className='move-btn'
                        onClick={()=>moveTaskdown(index)}>
                            DOWN🔽
                        </button>
                    </li>
                )}

            </ol>

    </div>
    
    )
}

export default ToDoList;