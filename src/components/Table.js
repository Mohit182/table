import React, { useState } from "react";
import Data from "./data.json";
import "./Table.css";

export function Dots(props) {
  const { col, mockData, setData, setorder, order } = props;
  return (
    <div class="menu-nav">
      <div class="menu-item">{props.children}</div>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#">
            <div>Unsort</div>
          </a>

          <div
            onClick={() => sorting(col, mockData, setData, setorder, "ASC")}
            href="#"
          >
            Ascending
          </div>

          <div onClick={() => sorting(col, mockData, setData, setorder, "DSC")}>
            Descending
          </div>
        </div>
      </div>
    </div>
  );
}
const sorting = (col, mockData, setData, setorder, order) => {
  if (order === "ASC") {
    const sorted = [...mockData].sort((a, b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted);
    setorder("DSC");
  }
  if (order === "DSC") {
    const sorted = [...mockData].sort((a, b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted);
    setorder("ASC");
  }
};
export default function Table() {
  const [data, setData] = useState(Data);
  const [order, setorder] = useState("ASC");

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th>
            <Dots
              col={"id"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Id
            </Dots>
          </th>
          <th>
            <Dots
              col={"first_name"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              First name
            </Dots>
          </th>
          <th>
            <Dots
              col={"last_name"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Last name
            </Dots>
          </th>
          <th>
            <Dots
              col={"email"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Email
            </Dots>
          </th>
          <th>
            <Dots
              col={"gender"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Gender
            </Dots>
          </th>
          <th>
            <Dots
              col={"ip_address"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              IP address
            </Dots>
          </th>
          <th>
            <Dots
              col={"airport_code"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Airport Code
            </Dots>
          </th>
          <th>
            <Dots
              col={"time"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Time
            </Dots>
          </th>
          <th>
            <Dots
              col={"status"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Status
            </Dots>
          </th>
          <th>
            <Dots
              col={"mobile"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Mobile
            </Dots>
          </th>
          <th>
            <Dots
              col={"area"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Area
            </Dots>
          </th>
          <th>
            <Dots
              col={"show"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Show
            </Dots>
          </th>
          <th>
            <Dots
              col={"edit"}
              mockData={data}
              setData={setData}
              setorder={setorder}
            >
              Edit
            </Dots>
          </th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              <td>{d.id}</td>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.gender}</td>
              <td>{d.ip_address}</td>
              <td>{d.airport_code}</td>
              <td>{d.time}</td>
              {d.status ? (
                <td style={{ backgroundColor: "green" }}>
                  {d.status ? "true" : "false"}
                </td>
              ) : (
                <td style={{ backgroundColor: "red" }}>
                  {d.status ? "true" : "false"}
                </td>
              )}

              <td>{d.mobile}</td>
              <td>{d.area}</td>
              {d.show ? (
                <td style={{ backgroundColor: "green" }}>
                  {d.show ? "true" : "false"}
                </td>
              ) : (
                <td style={{ backgroundColor: "red" }}>
                  {d.show ? "true" : "false"}
                </td>
              )}
              {d.edit ? (
                <td style={{ backgroundColor: "green" }}>
                  {d.edit ? "true" : "false"}
                </td>
              ) : (
                <td style={{ backgroundColor: "red" }}>
                  {d.edit ? "true" : "false"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
