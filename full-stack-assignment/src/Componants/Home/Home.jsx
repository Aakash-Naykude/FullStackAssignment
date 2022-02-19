import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
import "./home.css";
function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const { token, handleLogin } = useContext(AuthContext);
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
    <div style={{ marginTop: "5%" }}>
      <table className="table">
        <tr className="tablehead">
          <th>Profile Pic</th>
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
          <th>Edit</th>
        </tr>
        {list.map((e) => (
          <tr className="tablerows" key={e._id}>
            <td>
              <Link to={`/home/${e._id}`}>
                <img className="img" src={e.picture} alt={e.firstName} />
              </Link>
            </td>
            <td className="oddcol">
              {e.title}. {e.firstName}
            </td>
            <td>{e.gender}</td>
            <td className="oddcol">{e.age}</td>
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
        <h2>{page}</h2>
        <Button type="primary" shape="round" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Home;
