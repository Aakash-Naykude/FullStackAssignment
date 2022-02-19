import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
import "./home.css";
function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    getData();
  }, [page]);
  const getData = () => {
    fetch(`http://localhost:4000/teacher?page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSortAcs = () => {
    fetch(`http://localhost:4000/teacher?_sort=age&_order=asc&page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  const handleSortDsc = () => {
    fetch(`http://localhost:4000/teacher?_sort=age&_order=desc&page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  const handleGenderSortAcs = () => {
    fetch(`http://localhost:4000/teacher?_sort=male&_order=asc&page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  const handleGenderSortDcs = () => {
    fetch(`http://localhost:4000/teacher?_sort=female&_order=desc&page=${page}`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  return (
    <div style={{ marginTop: "5%" }}>
      <table className="table">
        <tr className="tablehead">
          <th>Profile Pic</th>
          <th>Name</th>
          <th>
            <ion-icon
              style={{ marginRight: "13px" }}
              name="caret-down-outline"
              onClick={handleGenderSortAcs}
            ></ion-icon>
            Gender
            <ion-icon
              style={{ marginLeft: "13px" }}
              name="caret-up-outline"
              onClick={handleGenderSortDcs}
            ></ion-icon>
          </th>
          <th>
            <ion-icon
              style={{ marginRight: "13px" }}
              name="caret-down-outline"
              onClick={handleSortAcs}
            ></ion-icon>
            Age
            <ion-icon
              style={{ marginLeft: "13px" }}
              name="caret-up-outline"
              onClick={handleSortDsc}
            ></ion-icon>
          </th>
          <th>Edit</th>
        </tr>
        {list.map((e) => (
          <tr className="tablerows" key={e._id}>
            <td>
              {token ? (
                <Link to={`/home/${e._id}`}>
                  <img className="img" src={e.picture} alt={e.firstName} />
                </Link>
              ) : (
                <img className="img" src={e.picture} alt={e.firstName} />
              )}
            </td>
            <td className="oddcol">
              {e.title}. {e.firstName}
            </td>
            <td>{e.gender}</td>
            <td className="oddcol">{e.age}</td>
            <td>
              {token ? (
                <Link to={`/home/${e._id}`}>
                  <Button type="primary">Edit</Button>
                </Link>
              ) : (
                <Button type="primary">Edit</Button>
              )}
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
