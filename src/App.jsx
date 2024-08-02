import Blog from "./pages/Blogs/Blog";
import ShowFavorites from "./pages/ShowFavorites/ShowFavorites";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlogPostLayout from "./Layout/BlogPostLayout";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import SignUp from "./pages/SignUp";
import { MyContext } from "./MyContextProvider";
import "./App.css";
import postsData from "./posts.json";
import { PostsList } from "./components/PostsList";
import { PostImage } from "./components/PostImage";
import NavBarLayout from "./Layout/NavBarLayout";
import "./assets/css/main.css";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBarLayout />}>
      <Route path="showblogs" element={<BlogPostLayout />}>
        <Route index element={<Blog />} />
        <Route path="favorites" element={<ShowFavorites />} />
      </Route>
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
  )
);
function App() {
  const [posts, setPosts] = useState(postsData);
  /*
    TODO:
    1. Install React router 
    2. Create several routes (and their corresponding React components): 
       main page (posts list), post page (/post/:id), new post page (/post/create)
    3. All the posts data will be stored in the state (hook above). 
       In order to manipulate this data (create new posts, etc), you need to 
       pass the setPosts function down the components tree.
       You can do it using React Context to avoid props drilling
       Note: this approach of storing all the data in the top-level component is not optimal,
       but for now (until we learn state management tools (Redux, etc.)) it's ok to use it like that. 
    4. For styling you can plain css files, or you can install and use SASS/SCSS - it's up to you.
    5. Additional (optional) task: in order to persist the posts data between page reloads, try to use 
       browser's localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
       Note: It's generally not a good idea (usually data comes from backend API and is stored on the server), 
       but until we learn how to interact with the API, for learning purposes - it's fine.

    Notes:
    1. PostImage is a pre-built component that uploads and returns an image URL. {addImageSuccessful} is a prop from the component that is used to get the image file URL that you can attach to the post. No need to change any of the code of the component just use the function to get the image URL.
  */

  // Example usage of the addImageSuccessful prop
  const handleImageSuccess = (imageUrl) => {
    console.log(imageUrl);
  };

  return (
    <div className="">
      <MyContext.Provider value={{ posts }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
      {/*  <PostImage addImageSuccessful={handleImageSuccess} /> */}
    </div>
  );
}

export default App;
