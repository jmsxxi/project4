import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import Blog from "../pages/Blogs/Blog";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogPostLayout = () => {
  return (
    <div className="blogpostlayout-container">
      <div className="ctaSection">
        <div className="showpost-btn">
          <NavLink className="btn btnActive" to="../showblogs">
            All Posts
          </NavLink>
          <NavLink className="btn btnDefault" to="favorites">
            Favorites
          </NavLink>
        </div>
        <div className="addPost-btn">
          <NavLink className="btn btnDefault">
            <FontAwesomeIcon icon={faPlus} /> Add Post
          </NavLink>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogPostLayout;
