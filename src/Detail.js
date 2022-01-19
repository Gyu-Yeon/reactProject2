import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let box = styled.div`
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let [show, showChange] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      showChange(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  return (
    <div className="container">
      <div className="title-box">
        <h4 className="title">Detail</h4>
      </div>
      {show === true ? (
        <div className="myAlert2">
          <p>LAST ONE!!!!</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>

          <Info left={props.left} />
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p> 재고: {props.left[0]} </p>;
}

export default Detail;
