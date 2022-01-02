import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function App(props) {
  console.log(props);
  const secs = props.location.state.date;
  const date = new Date(secs);
  const background = props.location.state.surveyDate.background;
  const ip = props.location.state.surveyDate.ip;
  const email = props.location.state.surveyDate.email;
  const part1A = props.location.state.surveyDate.part1SelectedChars.part1A;
  const part1B = props.location.state.surveyDate.part1SelectedChars.part1B;
  const part2AAnswer = props.location.state.surveyDate.part2AAnswer;
  const part2BAnswer = props.location.state.surveyDate.part2BAnswer;
  const part3Answer = props.location.state.surveyDate.part3Answer;
  const part4Answer = props.location.state.surveyDate.part4Answer;

  //character: "發揮創意"
  // idealValue: 100
  // negativeChar: "保守刻板"
  // number: 5
  // realValue: 60
  // toggle: false

  return (
    <div className="container">
      <div className="landing-title">
        <h3>Create Date: {date.toLocaleString()}</h3>
      </div>
      <div className="landing-page">
        <div className="landing-card">
          <h3>Background</h3>
          <p>
            IP Address: <span>{ip}</span>
          </p>
          <p>
            Email: <span>{email}</span>
          </p>
          <p>
            成長背景: <span>{background.growup}</span>
          </p>
          <p>
            年齡 : <span>{background.age}</span>
          </p>
          <p>
            婚姻狀況: <span>{background.marriage}</span>
          </p>
          <p>
            教育程度: <span>{background.education}</span>
          </p>
          <p>
            育有子女人數: <span>{background.chirdrenNumber}</span>
          </p>
          <p>
            最小的子女年齡:<span>{background.youngest} </span>
          </p>
          <p>
            職業: <span>{background.occupation}</span>
          </p>
          <p>
            請註明其它職業: <span>{background.otherOccupation}</span>
          </p>
          <p>
            宗教: <span>{background.religion}</span>
          </p>
          <p>
            工作性質: <span>{background.jobType}</span>
          </p>
          <p>
            請註明兼職每週工作時數 :<span>{background.workingHour}</span>
          </p>
          <p>
            個人收入佔家庭總入息比例(%) : <span>{background.income}</span>
          </p>
          <p>
            聘請外傭: <span>{background.hireServant}</span>
          </p>
          <p>
            請註明每週協助家務時數: <span>{background.ptWorkingHour}</span>
          </p>
          <p>
            丈夫每週協助家事時數(如適用)(小時) :
            <span>{background.husbandHelp}</span>
          </p>
          <p>
            填寫本問卷之地點 :<span>{background.place}</span>{" "}
          </p>
          <p>
            請註明其他填寫地點:<span>{background.otherPlace}</span>
          </p>
        </div>
        <div className="landing-card">
          <h3> Part 1. A</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>正向特質</th>
                <th>負向特質</th>
                <th>實際位置</th>
                <th>理想位置</th>
              </tr>
            </thead>
            <tbody>
              {part1A.map((item) => (
                <tr key={item.character}>
                  <td>{item.character}</td>
                  <td>{item.negativeChar}</td>
                  <td>{item.realValue}</td>
                  <td>{item.idealValue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3> Part 1. B</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>正向特質</th>
                <th>負向特質</th>
                <th>實際位置</th>
                <th>理想位置</th>
              </tr>
            </thead>
            <tbody>
              {part1B.map((item) => (
                <tr key={item.character}>
                  <td>{item.character}</td>
                  <td>{item.negativeChar}</td>
                  <td>{item.realValue}</td>
                  <td>{item.idealValue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3> Part 2. A</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{part2AAnswer[0]}</td>
                <td>{part2AAnswer[1]}</td>
                <td>{part2AAnswer[2]}</td>
                <td>{part2AAnswer[3]}</td>
              </tr>
            </tbody>
          </Table>
          <h3> Part 2. B</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{part2BAnswer[0]}</td>
                <td>{part2BAnswer[1]}</td>
                <td>{part2BAnswer[2]}</td>
                <td>{part2BAnswer[3]}</td>
              </tr>
            </tbody>
          </Table>
          <h3> Part 3</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{part3Answer[0]}</td>
                <td>{part3Answer[1]}</td>
                <td>{part3Answer[2]}</td>
                <td>{part3Answer[3]}</td>
                <td>{part3Answer[4]}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Q6</th>
                <th>Q7</th>
                <th>Q8</th>
                <th>Q9</th>
                <th>Q10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{part3Answer[5]}</td>
                <td>{part3Answer[6]}</td>
                <td>{part3Answer[7]}</td>
                <td>{part3Answer[8]}</td>
                <td>{part3Answer[9]}</td>
              </tr>
            </tbody>
          </Table>
          <h3> Part 4</h3>
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
                <th>Q6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{part4Answer[0]}</td>
                <td>{part4Answer[1]}</td>
                <td>{part4Answer[2]}</td>
                <td>{part4Answer[3]}</td>
                <td>{part4Answer[4]}</td>
                <td>{part4Answer[5]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
