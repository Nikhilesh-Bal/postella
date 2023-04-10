import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "./Loading";
import PostComponent from "./PostComponent";
import PostCard from "./PostCard";
import SideNav from "./SideNav";
const Feed = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await axios(
      `https://api.realworld.io/api/articles?limit=10&offset=0&_page=${page}`
    );
    //console.log(res);
    const data = res.data.articles;
     //console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <PostComponent movieInfo={card} />
      
    </>
  );
};

export default Feed;