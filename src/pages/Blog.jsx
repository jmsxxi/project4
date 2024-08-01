import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button/Button";
import { faHeart, faPlus, faMessage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import postsData from "../posts.json";

const Blog = () => {
  const [posts, setPosts] = useState(postsData);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-buttons">
          <div className="button-showpost">
            <Button color="btn btnActive"> All posts </Button>
            <Button color="btn btnDefault">Favorites</Button>
          </div>
          <div className="button-action">
            <Button color="btn btnDefault">
              <FontAwesomeIcon
                icon={faPlus}
                size="lg"
                style={{ color: "#0266ff" }}
              />
              {"         "}
              Add post
            </Button>

            <Button color="addPost-mobile">
              {" "}
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                style={{ color: "#0266ff" }}
              />
            </Button>
          </div>
        </div>
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
                      {post.text.substring(0, 77).concat("...")}
                    </p>
                  </div>

                  <hr />
                  <div className="blog-post-container-comment-section">
                    <div className="date">
                      <p>{post.date}</p>
                      <p>{post.author}</p>
                    </div>
                    <div className="blog-post-container-commentlogo">
                      <div className="comment-section ">
                        <div className="comment-icon">
                          <FontAwesomeIcon icon={faMessage} size="lg" />
                        </div>
                        <span>
                          {" "}
                          {post.commentCount.toString().length > 2
                            ? post.commentCount
                                .toString()
                                .substring(0, 1)
                                .concat("k")
                            : post.commentCount.toString().concat("k")}
                        </span>
                      </div>
                      <div className="like-section">
                        <div className="like-icon">
                          <FontAwesomeIcon size="xl" icon={faHeart} />{" "}
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
