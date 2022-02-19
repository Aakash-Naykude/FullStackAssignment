import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const fetchClasses = () => {};
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
          <h2 onClick={fetchClasses}>Classes</h2>
          <div>hello</div>
        </div>
      </div>
      <Button style={{ marginTop: "10px" }} type="primary">
        Return to Home
      </Button>
    </div>
  );
}

export default More;
