import { Component } from "react";
import axios from "axios";
import { useState } from "react";
import React, { useEffect, useReducer } from "react";
import Right from "../components/Right/Right";
import Content from "../components/Content/Content";
import Title from "../components/Title/Title";
import Left from "../components/Left/Left";
import "../css/Homepage.css";

function Homepage() {
  const [listNews, setListNews] = useState([]);
  const getData = () => {
    axios
      .get(`https://61bc10c1d8542f0017824533.mockapi.io/updatenew`)
      .then((news) => {
        setListNews(news.data);
      });
  };
  useEffect(() => {
    // console.info(Math.random())
    getData();
  }, []);
  return (
    <div className="content">
      <div className="content_right">
        {listNews
          .filter((updatenew) => updatenew.size === "big")
          .map((news, index) => (
            <Right key={index} image={news.images} title={news.title} />
          ))}
        {listNews
          .filter((updatenew) => updatenew.size === "small")
          .map((news, index) => (
            <Title key={index} title={news.title} />
          ))}
      </div>
      <div className="content_content">
        {listNews
          .filter((updatenew) => updatenew.size === "small")
          .map((news, index) => (
            <Content key={index} image={news.images} title={news.title} />
          ))}
      </div>
      <div className="content_left">
        <h2 className="TNB">TIN NỔI BẬT</h2>
        {listNews
          .filter((updatenew) => updatenew.size === "content")
          .map((news, index) => (
            <Left key={index} image={news.images} title={news.title} />
          ))}
      </div>
    </div>
  );
}

export default Homepage;
