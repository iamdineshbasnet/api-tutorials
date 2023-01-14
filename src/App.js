import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main'
import Homepage from './Components/Homepage'
import User from './Components/User'
import CreateUser from "./Components/CreateUser"
import { useState } from 'react'
function App() {
  const [edit, setEdit] = useState({
    editInfo: false,
    values: {
      firstname: '',
      middlename: '',
      lastname: '',
      phone: '',
      address: ''
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route exact path="/user" element={<User setEdit={setEdit}/>}/>
          <Route exact path="/create-user" element={<CreateUser edit={edit}/>}/>
        </Routes>
      </Main>
      </BrowserRouter>

    </div>
  );
}

export default App;
