import axios from "axios";
import {useState} from "react";
import './styles/style.css'


function App() {

    const [response, setResponse] = useState(null)


    async function sendRequest(){
        try {
            const res = await axios.get('/server/api/users')
            setResponse(res)
            console.log(res)
        }catch (err){
            console.log(`ERROR: ${err}`)
        }
    }

  return (
    <div className='background'>
        <p>Front End</p>
        <div>
            <button onClick={sendRequest}> Send request </button>
        </div>
        <div>
            {response ? <span className='text-pop-up-top'>{response.data.message}</span> : <span className='text'>No responce</span>}
        </div>
    </div>
  );
}

export default App;
