import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostContainer = () => {


 const [posts, setPosts] = useState([])

 useEffect(() => {
  const getPosts = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
   const datas = await response.json()
   setPosts(datas)
  }

  getPosts()
 }, [])
 
 const titles = posts.map(({id, title},i)=>(
  <li key={i}>
   <Link to={`/posts/read/${id}`}>{title}</Link>
  </li>
 ))



 return (
  <div>
   <ul>
    {titles}
   </ul>
  </div>
 );
};

export default PostContainer;

