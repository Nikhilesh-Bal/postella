import axios from 'axios';

export const api=axios.create({
    feedURL:'https://api.realworld.io/api/articles?limit=10&offset=0'
});

export const getPostsPage=async (pageParam=1,options={}) =>{
    const response=await api.get(`/posts?_page=${pageParam}`,options);
    return response.data;
}