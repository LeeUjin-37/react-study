import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Intro from "../pages/intro/Intro";
import Detail from "../pages/detail/Detail";
import Introduce from "../pages/introduce/Introduce";
import PostContainer from "../pages/posts/PostContainer";
import Post from "../pages/posts/Post";
import Layout from "../pages/layout/Layout";
import Join from "../pages/join/Join";
import Login from "../pages/login/Login";
import MyPage from "../pages/mypage/MyPage";
import NotFound from "../pages/error/NotFound";


const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children : [
  {
   path: "",
   element: <Main />
  },
  {
   path: "/posts",
   element: <PostContainer />
  },
  {
   path: "/posts/read/:id",
   element: <Post />
  },
  {
   path: "/join",
   element: <Join />
  },
  {
   path: "/login",
   element: <Login />
  },
  {
   path: "/my-page",
   element: <MyPage />
  }
 ]
 },
 {
  path: "/intro",
  element: <Intro />
 },
 {
  path: "/detail",
  element: <Detail />
 },
 {
  path: "/introduce",
  element: <Introduce />
 },
 {
  path: "*",
  element: <NotFound />
 }

])





export default router;