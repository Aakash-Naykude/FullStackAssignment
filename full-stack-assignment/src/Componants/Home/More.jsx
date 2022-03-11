import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css";
function More() {
  const { _id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    fetch(`http://localhost:4000/teacher/${_id}`)
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
      <h1>More about Teacher</h1>
      <div className="moreinfo">
        <img className="profile" src={list.picture} alt={list.firstName} />
        <div>
          <h2>
            Name : {list.title}. {list.firstName}
          </h2>
          <h2>Age : {list.age}</h2>
          <h2>Gender : {list.gender}</h2>
          <h2>Classes : {list.Grade}</h2>

          <h2>Classes : {list.Grade}</h2>

          <h2>Classes : {list.Grade}</h2>
        </div>
      </div>
      <Button style={{ marginTop: "10px" }} type="primary">
        <Link to="/home">Return to Home</Link>
      </Button>
    </div>
  );
}

export default More;