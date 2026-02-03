import { useState } from "react";
import "./Task Tracker.css";

function TaskTracker(){
  const [Input,setInput]=useState("");
  const [List,setList]=useState([]);
  const [Filter,setFilter]=useState("all");
  const [editIndex, setEditIndex] = useState(null); 
  const [editText, setEditText] = useState("");    

  function add(){
    if(Input.trim() === "") return;
    setList([...List,{
      text:Input,
      completed:false
    }])
      setInput("");
  }

function remove(tasktoremove){
  setList(List.filter((__,i)=> i !=tasktoremove))
}

function startEdit(index) {
  setEditIndex(index);          
  setEditText(List[index].text); 
}
function saveEdit(index) {
  const updatedList = List.map((task, i) =>
    i === index ? { ...task, text: editText } : task
  );
  setList(updatedList);
  setEditIndex(null);
  setEditText("");
}
  function togglecheckbox(index){
  setList(
    List.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

const filteredTasks = List.filter(task => {
  if (Filter === "active") return !task.completed;
  if (Filter === "completed") return task.completed;
  return true; 
});


  return(
    <>
   <div className="main">
    <div>
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>
    </div>

    <div>
      <input placeholder="Enter Your Task" type="text" value={Input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={add}>Add</button>
    </div>

    <div>

      <ul>
        {
          filteredTasks.map((item,index)=>(

            <li key={index}>
  <input
    type="checkbox"
    checked={item.completed}
    onChange={() => togglecheckbox(index)}
  />

  {editIndex === index ? (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={() => saveEdit(index)}>Save</button>
      <button onClick={() => setEditIndex(null)}>Cancel</button>
    </>
  ) : (
    <>
      <span>{item.text}</span>
      <button onClick={() => startEdit(index)}>Edit</button>
    </>
  )}

  <button onClick={() => remove(index)}>Delete</button>
</li>


          ))
        }
      
      </ul>

    </div>
   </div>
    </>
  )
}

export default TaskTracker;