import { useState } from 'react';
import './App.css';
import StudentsList from './Components/StudentsList';
import NavStudents from './Components/NavStudents';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profil from './Components/Profil';

function App() {
  const [students,setStudents] = useState([
    {name : "Rahma", age : 18, city : "Tunis",id : Math.random() , posterURL : "https://gomycodelearndev.blob.core.windows.net/profiles/f07343f6-bcfe-4a1b-ba2e-9b7656c9c7a2-133407254738190086.jpg"},
    {name : "Omar", age : 31, city : "Carthage",id : Math.random(), posterURL : "https://gomycodelearndev.blob.core.windows.net/profiles/7a816862-ae40-41c0-968c-d1955e5b428d-133408299442185203.jpg"},
    {name : "Abdelwaheb", age : 31, city : "Mornag",id : Math.random(),posterURL : "https://gomycodelearndev.blob.core.windows.net/profiles/383d4a76-4ff8-4817-a62e-c916e9014cca-133401394089133322.jpg"},
    {name : "Mohamed", age : 17.8, city : "La Marsa",id : Math.random(),posterURL : "https://gomycodelearndev.blob.core.windows.net/profiles/a0255c6c-3081-493c-b459-ff451967b656-133427009892463391.jpg"} 
  ])
  return (
    <div>      
      {/* <StudentsList students={students}/> */}
      <NavStudents/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/liststudents' element={<StudentsList students={students}/> }/>
        <Route path='/contacteuuus' element={<Contact/>}/>
        <Route path='/profil/:id' element={<Profil students={students}/>}/>
      </Routes>
    </div>
  );
}

export default App;
