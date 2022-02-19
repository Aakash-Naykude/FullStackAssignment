import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import More from "./More";
function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getData();
  }, [page]);
  const getData = () => {
    fetch(`http://localhost:4000/teacher?page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Main Page</h1>
      <table className="table">
        <tr className="tablehead">
          <th>Name</th>
          <th>Gender</th>
          <th>
            <ion-icon
              style={{ marginRight: "13px" }}
              name="caret-down-outline"
            ></ion-icon>
            Age
            <ion-icon
              style={{ marginLeft: "13px" }}
              name="caret-up-outline"
            ></ion-icon>
          </th>
          <th>Profile Pic</th>
          <th>Edit</th>
        </tr>
        {list.map((e) => (
          <tr className="tablerows" key={e._id}>
            <td>{e.firstName}</td>
            <td>{e.gender}</td>
            <td>{e.age}</td>
            <td>
              <Link to={"/more"}>
                <img src={e.picture} alt={e.firstName} />
              </Link>
            </td>
            <td>
              <Button type="primary">Edit</Button>
            </td>
          </tr>
        ))}
      </table>
      <div className="buttonof">
        <Button
          disabled={page === 1}
          type="primary"
          shape="round"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Button type="primary" shape="round" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Home;
