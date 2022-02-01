import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

const ModelContainer = styled.div`
  width: 100%;
  height: 36px;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
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

const DelButton = styled.button`
  width: 48px;
  height: 20px;

  font-size: 12px;
  font-weight: 400;
`;

const OutputButton = styled.button`
  padding: 4px 8px;
  width: 360px;
  background-color: #6fa4e3;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: 0.3s all;
  margin-bottom: 20px;
  &:hover {
    background-color: white;
    color: #6fa4e3;
    border: 1px solid #ccc;
  }
`;

function App() {
  const [reports, setReports] = useState([]);
  const reportsCollectionRef = collection(db, "reports");
  const getReports = async () => {
    const data = await getDocs(reportsCollectionRef);
    setReports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getReports();
  }, []);

  const handleClick = (surveyDate, date) => {
    navigate("/details", {
      state: { surveyDate, date },
    });
  };

  const handleOutput = () => {
    navigate("/output", {
      state: { reports },
    });
  };

  const handleDelete = async (id) => {
    const record = doc(db, "reports", id);
    await deleteDoc(record);
    getReports();
  };
  return (
    <div className="container">
      <OutputButton onClick={() => handleOutput()}>
        Output data to Table
      </OutputButton>

      <h2>Database Data</h2>
      <ModelContainer>
        <ModelBlock>
          <h6>問卷填寫日期</h6>
        </ModelBlock>
        <ModelBlock>
          <h6>問卷填寫者 IP Address</h6>
        </ModelBlock>
        <ModelBlock>問卷填寫者 Email</ModelBlock>
        <ModelBlock>刪除記錄</ModelBlock>
      </ModelContainer>
      {reports.map((report) => {
        const surveyData = JSON.parse(report.survey);
        const date = new Date(report.time);
        // console.log(surveyData);
        // console.log(date.toISOString());
        return (
          <ModelContainer
            key={report.id}
            onClick={() => handleClick(surveyData, date)}
          >
            <ModelBlock>
              <h6>{date.toLocaleString()}</h6>
            </ModelBlock>
            <ModelBlock>
              <h6>{surveyData.ip}</h6>
            </ModelBlock>
            <ModelBlock>{surveyData.email}</ModelBlock>
            <ModelBlock>
              {/* <DelButton onClick={() => handleDelete(report.id)}>
                Delete
              </DelButton> */}
            </ModelBlock>
          </ModelContainer>
        );
      })}
    </div>
  );
}

export default App;
