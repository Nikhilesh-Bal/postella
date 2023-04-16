import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PostComponent from "./PostComponent";

const Feed = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);

  const getCardData = useCallback(async () => {
    const res = await axios(
      `https://api.realworld.io/api/articles?limit=10&offset=0&_page=${page}`
    );
    const data = res.data.articles;
    setCard((prev) => [...prev, ...data]);
  }, [page]);

  useEffect(() => {
    getCardData();
  }, [getCardData]);

  const handelInfiniteScroll = useCallback(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handelInfiniteScroll, {
      rootMargin: "0px",
      threshold: 1,
    });
    const target = document.querySelector("#infinite-scroll");
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [handelInfiniteScroll]);

  return (
    <>
      <PostComponent key={card.length} cardInfo={card} />
      <div id="infinite-scroll" />
    </>
  );
};

export default Feed;





/*import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostComponent from "./PostComponent";
const Feed = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const res = await axios(
      `https://api.realworld.io/api/articles?limit=10&offset=0&_page=${page}`
    );
    //console.log(res.data);
    const data = res.data.articles;
     //console.log(data);
    setCard((prev) => [...prev, ...data]);

  };

  useEffect(() => {
    getCardData();
  }, [page]);

  //const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
   // try {
     // if (
     //   window.innerHeight + document.documentElement.scrollTop + 1 >=
      //  document.documentElement.scrollHeight
    //  ) {
    //    setPage((prev) => prev + 1);
    //  }
   // } catch (error) {
    //  console.log(error);
   // }
 // };
  const handelInfiniteScroll = React.useCallback(() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setPage]);
  

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <PostComponent cardInfo={card} /> 
    </>
  );
};

export default Feed;*/