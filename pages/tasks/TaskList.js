
//import { createContext } from "react";
import { useState, useEffect } from "react";

function TasksList() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.jsonbin.io/v3/b/6304b4b65c146d63ca7bd581', { 
      headers: { 
        "Content-Type":	"application/json",
        "X-Access-Key": "6304b5fda1610e63860b814f"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const tasks = data.record.tasks

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


//TO RUN ON SERVER
// export async function getServerSideProps(context) {

//       const res = await axios.get('https://api.jsonbin.io/v3/b/6304b4b65c146d63ca7bd581', { 
//         headers: { 
//           "Content-Type":	"application/json",
//           "X-Access-Key": "6304b5fda1610e63860b814f"
//         }
//       })
  
//     return { 
//       props: { data: { res } }, 
//     }
//   }
  
export default TasksList;