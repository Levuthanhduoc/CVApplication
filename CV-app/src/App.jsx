import { useState } from 'react'
import './App.css'
import CvForm from './components/form'
import CvView from './components/view'
import './styles/form.css'
import './styles/view.css'



function App() {
  const exp = [{School:'',Major:'',Date:''}];
  const practical = [{Company:'',Position:'',Responsibilities:'',Date:''}];
  const info =[{Name:'',Email:'',Phone:''}];
  const [editMode,setEditMode] = useState(false);
  const [data,setData] = useState({info:info,exp:exp,practical:practical})
  return (
    <>
      <h1>CV APP</h1>
      {
        editMode?(<CvForm cvData={data} setData ={setData} setMode={setEditMode}/>):<CvView datas={data} setMode ={setEditMode}/>
      } 
    </>
  )
}

export default App
