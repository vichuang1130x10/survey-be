import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
const ModelContainer = styled.div`
  width: 100%;
  height: 36px;
  display: grid;
  grid-template-columns: 18% 40% 36%;
  grid-gap: 10px;
  margin: 3px;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  border-radius: 5px;
  transition: all 0.3s;
  background-color: ${(props) => (props.isSelected ? "#123abc" : "none")};
  color: ${(props) => (props.isSelected ? "white" : "#000")};
  &:hover {
    color: #fff;
    background-color: #fee4c4;
  }
`;

const ModelBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  > h6 {
    font-size: 10px;
    font-weight: 400;
    font-style: italic;
  }
`;

function App() {
  const [reports, setReports] = useState([]);
  const reportsCollectionRef = collection(db, "reports");
  useEffect(() => {
    const getReports = async () => {
      const data = await getDocs(reportsCollectionRef);
      setReports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReports();
  }, []);
  return (
    <div className="container">
      <ModelContainer>
        <ModelBlock>
          <h6>問卷填寫日期</h6>
        </ModelBlock>
        <ModelBlock>
          <h6>問卷填寫者 IP Address</h6>
        </ModelBlock>
        <ModelBlock>問卷填寫者 Email</ModelBlock>
      </ModelContainer>
      {reports.map((report) => {
        const surveyData = JSON.parse(report.survey);
        const date = new Date(report.time);
        console.log(surveyData);
        console.log(date.toISOString());
        return (
          <ModelContainer>
            <ModelBlock>
              <h6>{date.toLocaleString()}</h6>
            </ModelBlock>
            <ModelBlock>
              <h6>{surveyData.ip}</h6>
            </ModelBlock>
            <ModelBlock>{surveyData.email}</ModelBlock>
          </ModelContainer>
        );
      })}
    </div>
  );
}

export default App;
