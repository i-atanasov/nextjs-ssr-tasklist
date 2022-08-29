import { useState, useEffect } from "react";

function TasksList(props) {
  //CLIENT-SIDE RENDERING
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('https://api.jsonbin.io/v3/b/6304b4b65c146d63ca7bd581', { 
  //     headers: { 
  //       "Content-Type":	"application/json",
  //       "X-Access-Key": "6304b5fda1610e63860b814f"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])
  const tasks = props.data.data.record.tasks;

  if (!tasks) return <p>No tasks data</p>


  function renderList() {
    return tasks.map(currentTask=> {
        let done = currentTask.completed ? 'lightgreen' : 'tomato';
      
        return (
            <div key={currentTask.id} className="listItem" style={{ "borderRight": `5px solid ${done}` }}>
                <div className="">
                    <div className="">
                        {currentTask.type}
                    </div> 
                    <div className="">
                        Topic {currentTask.topic}  <br/>
                        Apr. duration: {currentTask.duration}<br/>
                    </div>
                    <div className="">
                        Resourses: To be rendered  <br/>
                    </div>
                    <div className="">
                        Goal: {currentTask.results}  <br/>
                    </div>
                    <br/>
                    <hr></hr>
                    </div>
                </div>
        );
    });
};

return (
        <div>
            {renderList()}
        </div>
    )
}

  
export default TasksList;