import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CopyButton = styled.button`
  width: 120px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 1px solid black;
  font-size: 12px;
  border-radius: 5px;
  margin: 0 1em;
  padding: 0.4em 1em;
  margin-top: 20px;
`;

function App(props) {
  //   console.log(props.location.state.reports);
  const [copied, setCopied] = useState("");
  const data = props.location.state.reports.map((item) => ({
    time: new Date(item.time).toLocaleString(),
    survey: JSON.parse(item.survey),
  }));
  //   console.log(data);
  const copyTable = () => {
    const elTable = document.querySelector("table");

    let range, sel;

    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand("copy");
    }

    sel.removeAllRanges();

    setCopied("Copied!!");
  };
  return (
    <div style={{ margin: "20px", overflow: "auto" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        <CopyButton onClick={() => copyTable()}>Copy tables</CopyButton>
        <p style={{ padding: "10px" }}>{copied}</p>
      </div>

      <Table
        striped
        bordered
        hover
        size="sm"
        style={{
          width: "100%",
          fontSize: "8px",
          margin: "0 auto",
          marginTop: "20px",
        }}
        id="table"
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Create-Date</th>
            <th>IP Address</th>
            <th>Email</th>
            <th>成長背景</th>
            <th>年齡</th>
            <th>婚姻狀況</th>
            <th>教育程度</th>
            <th>育有子女人數</th>
            <th>最小的子女年齡</th>
            <th>職業</th>
            <th>請註明其它職業</th>
            <th>宗教</th>
            <th>工作性質</th>
            <th>請註明兼職每週工作時數</th>
            <th>個人收入佔家庭總入息比例(%)</th>
            <th>聘請外傭</th>
            <th>請註明每週協助家務時數</th>
            <th>丈夫每週協助家事時數(如適用)(小時)</th>
            <th>填寫本問卷之地點</th>
            <th>請註明其他填寫地點</th>
            <th>Part1A-1 正向特質 </th>
            <th>Part1A-1 負向特質 </th>
            <th>Part1A-1 實際位置 </th>
            <th>Part1A-1 理想位置 </th>
            <th>Part1A-2 正向特質 </th>
            <th>Part1A-2 負向特質 </th>
            <th>Part1A-2 實際位置 </th>
            <th>Part1A-2 理想位置 </th>
            <th>Part1A-3 正向特質 </th>
            <th>Part1A-3 負向特質 </th>
            <th>Part1A-3 實際位置 </th>
            <th>Part1A-3 理想位置 </th>
            <th>Part1A-4 正向特質 </th>
            <th>Part1A-4 負向特質 </th>
            <th>Part1A-4 實際位置 </th>
            <th>Part1A-4 理想位置 </th>
            <th>Part1A-5 正向特質 </th>
            <th>Part1A-5 負向特質 </th>
            <th>Part1A-5 實際位置 </th>
            <th>Part1A-5 理想位置 </th>
            <th>Part1B-1 正向特質 </th>
            <th>Part1B-1 負向特質 </th>
            <th>Part1B-1 實際位置 </th>
            <th>Part1B-1 理想位置 </th>
            <th>Part1B-2 正向特質 </th>
            <th>Part1B-2 負向特質 </th>
            <th>Part1B-2 實際位置 </th>
            <th>Part1B-2 理想位置 </th>
            <th>Part1B-3 正向特質 </th>
            <th>Part1B-3 負向特質 </th>
            <th>Part1B-3 實際位置 </th>
            <th>Part1B-3 理想位置 </th>
            <th>Part1B-4 正向特質 </th>
            <th>Part1B-4 負向特質 </th>
            <th>Part1B-4 實際位置 </th>
            <th>Part1B-4 理想位置 </th>
            <th>Part1B-5 正向特質 </th>
            <th>Part1B-5 負向特質 </th>
            <th>Part1B-5 實際位置 </th>
            <th>Part1B-5 理想位置 </th>
            <th>Part2 A Q1 </th>
            <th>Part2 A Q2 </th>
            <th>Part2 A Q3 </th>
            <th>Part2 A Q4 </th>
            <th>Part2 B Q1 </th>
            <th>Part2 B Q2 </th>
            <th>Part2 B Q3 </th>
            <th>Part2 B Q4 </th>
            <th>Part3 Q1 </th>
            <th>Part3 Q2 </th>
            <th>Part3 Q3 </th>
            <th>Part3 Q4 </th>
            <th>Part3 Q5 </th>
            <th>Part3 Q6 </th>
            <th>Part3 Q7 </th>
            <th>Part3 Q8 </th>
            <th>Part3 Q9 </th>
            <th>Part3 Q10 </th>
            <th>Part4 Q1 </th>
            <th>Part4 Q2 </th>
            <th>Part4 Q3 </th>
            <th>Part4 Q4 </th>
            <th>Part4 Q5 </th>
            <th>Part4 Q6 </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (item.survey.part1SelectedChars.part1A[0] !== undefined) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.time}</td>
                  <td>{item.survey.ip}</td>
                  <td>{item.survey.email}</td>
                  <td>{item.survey.background.growup}</td>
                  <td>{item.survey.background.age}</td>
                  <td>{item.survey.background.marriage}</td>
                  <td>{item.survey.background.education}</td>
                  <td>{item.survey.background.chirdrenNumber}</td>
                  <td>{item.survey.background.youngest}</td>
                  <td>{item.survey.background.occupation}</td>
                  <td>{item.survey.background.otherOccupation}</td>
                  <td>{item.survey.background.religion}</td>
                  <td>{item.survey.background.jobType}</td>
                  <td>{item.survey.background.workingHour}</td>
                  <td>{item.survey.background.income}</td>
                  <td>{item.survey.background.hireServant}</td>
                  <td>{item.survey.background.ptWorkingHour}</td>
                  <td>{item.survey.background.husbandHelp}</td>
                  <td>{item.survey.background.place}</td>
                  <td>{item.survey.background.otherPlace}</td>
                  <td>{item.survey.part1SelectedChars.part1A[0].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1A[0].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1A[0].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[0].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[1].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1A[1].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1A[1].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[1].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[2].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1A[2].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1A[2].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[2].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[3].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1A[3].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1A[3].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[3].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[4].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1A[4].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1A[4].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1A[4].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[0].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1B[0].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1B[0].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[0].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[1].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1B[1].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1B[1].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[1].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[2].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1B[2].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1B[2].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[2].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[3].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1B[3].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1B[3].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[3].idealValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[4].character}</td>
                  <td>
                    {item.survey.part1SelectedChars.part1B[4].negativeChar}
                  </td>
                  <td>{item.survey.part1SelectedChars.part1B[4].realValue}</td>
                  <td>{item.survey.part1SelectedChars.part1B[4].idealValue}</td>
                  <td>{item.survey.part2AAnswer[0]}</td>
                  <td>{item.survey.part2AAnswer[1]}</td>
                  <td>{item.survey.part2AAnswer[2]}</td>
                  <td>{item.survey.part2AAnswer[3]}</td>
                  <td>{item.survey.part2BAnswer[0]}</td>
                  <td>{item.survey.part2BAnswer[1]}</td>
                  <td>{item.survey.part2BAnswer[2]}</td>
                  <td>{item.survey.part2BAnswer[3]}</td>
                  <td>{item.survey.part3Answer[0]}</td>
                  <td>{item.survey.part3Answer[1]}</td>
                  <td>{item.survey.part3Answer[2]}</td>
                  <td>{item.survey.part3Answer[3]}</td>
                  <td>{item.survey.part3Answer[4]}</td>
                  <td>{item.survey.part3Answer[5]}</td>
                  <td>{item.survey.part3Answer[6]}</td>
                  <td>{item.survey.part3Answer[7]}</td>
                  <td>{item.survey.part3Answer[8]}</td>
                  <td>{item.survey.part3Answer[9]}</td>
                  <td>{item.survey.part4Answer[0]}</td>
                  <td>{item.survey.part4Answer[1]}</td>
                  <td>{item.survey.part4Answer[2]}</td>
                  <td>{item.survey.part4Answer[3]}</td>
                  <td>{item.survey.part4Answer[4]}</td>
                  <td>{item.survey.part4Answer[5]}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
