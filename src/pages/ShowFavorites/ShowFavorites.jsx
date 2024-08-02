import { useContext } from "react";
import { MyContext } from "../../MyContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./showfavorites.css";
import Button from "../../components/Button/Button";
import { faHeart, faPlus, faMessage } from "@fortawesome/free-solid-svg-icons";

const ShowFavorites = () => {
  const { posts } = useContext(MyContext);
  const showFavorites = posts.filter((post) => post.isLiked === true);
  return (
    <div className="showfavorites-container">
      <div className="showFavorites-container">
        {showFavorites.map((favorites, index) => (
          <div className="showFavorites-content" key={index}>
            <div className="showfavorites-post-container-image">
              <img src={favorites.src} alt="" />
            </div>
            <div className="showfavorites-post-container-cardInfo">
              <div className="showfavorites-post-container-description">
                <div className="showfavorites-post-container-description-title">
                  <h3>
                    {favorites.title.length > 25
                      ? favorites.title.substring(0, 25).concat("...")
                      : favorites.title}
                  </h3>
                  <p className="text-wrap">
                    {favorites.text.substring(0, 70).concat("...")}
                  </p>
                </div>

                <hr />
                <div className="showfavorites-post-container-comment-section">
                  <div className="showfavorites-date">
                    <p>{favorites.date}</p>
                    <p>{favorites.author}</p>
                  </div>
                  <div className="showfavorites-post-container-commentlogo">
                    <div className="showfavorites-comment-section">
                      <div className="showfavorites-comment-icon">
                        <FontAwesomeIcon icon={faMessage} />
                      </div>
                      <span>
                        {" "}
                        {favorites.commentCount.toString().length > 3
                          ? favorites.commentCount
                              .toString()
                              .substring(0, 1)
                              .concat("k")
                          : favorites.commentCount}
                      </span>
                    </div>
                    <div className="showfavorites-like-section">
                      <div className="showfavorites-like-icon">
                        <FontAwesomeIcon icon={faHeart} />{" "}
                      </div>
                      <span>
                        {" "}
                        {favorites.likes.toString().substring(0, 1).concat("k")}
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
  );
};

export default ShowFavorites;
