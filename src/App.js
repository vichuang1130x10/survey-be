
import './App.css';
import styled from 'styled-components'
import {db} from './firebase'
import { collection, getDocs} from 'firebase/firestore'
import React,{useEffect, useState} from 'react'
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 400px;
  padding: 20px;
  margin: 20px;
  border-radius: 3px;
  border: 1px solid grey;
  overflow: scroll;

`

function App() {

  const [reports,setReports] = useState([])
  const reportsCollectionRef = collection(db,'reports')
  useEffect(()=>{

    const getReports = async () =>{
      const data = await getDocs(reportsCollectionRef)
      setReports(data.docs.map(doc =>({...doc.data(), id:doc.ic})))
    }
    getReports()
  },[])
  return (
    <div className="App">
     
         {
           reports.map(report => <Card>{report.survey}</Card>)
         }
     
    </div>
  );
}

export default App;
