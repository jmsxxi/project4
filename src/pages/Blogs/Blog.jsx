import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import { faHeart, faPlus, faMessage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import postsData from "../../posts.json";
import { MyContext } from "../../MyContextProvider";
import "./blogs.css";
import ShowFavorites from "../ShowFavorites/ShowFavorites";
import Reviews from "../Reviews";

const Blog = () => {
  const [posts, setPosts] = useState(postsData);
  const [toggleMyFavorites, setToggleMyFavorites] = useState(false);
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-post">
          {posts.map((post, index) => (
            <div className="blog-post-container" key={index}>
              <div className="blog-post-container-image">
                <img src={post.src} alt="" />
              </div>
              <div className="blog-post-container-cardInfo">
                <div className="blog-post-container-description">
                  <div className="blog-post-container-description-title">
                    <h3>
                      {post.title.length > 25
                        ? post.title.substring(0, 25).concat("...")
                        : post.title}
                    </h3>
                    <p className="text-wrap">
                      {post.text.substring(0, 70).concat("...")}
                    </p>
                  </div>

                  <hr />
                  <div className="blog-post-container-comment-section">
                    <div className="date">
                      <p>{post.date}</p>
                      <p>{post.author}</p>
                    </div>
                    <div className="blog-post-container-commentlogo">
                      <div className="comment-section">
                        <div className="comment-icon">
                          <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <span>
                          {" "}
                          {post.commentCount.toString().length > 3
                            ? post.commentCount
                                .toString()
                                .substring(0, 1)
                                .concat("k")
                            : post.commentCount}
                        </span>
                      </div>
                      <div className="like-section">
                        <div className="like-icon">
                          <FontAwesomeIcon icon={faHeart} />{" "}
                        </div>
                        <span>
                          {" "}
                          {post.likes.toString().substring(0, 1).concat("k")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
