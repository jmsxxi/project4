import { useContext } from "react";
import { MyContext } from "../MyContextProvider";
const Reviews = () => {
  const { posts } = useContext(MyContext);
  console.log(posts);
  return <div className="reviews-container">Reviews</div>;
};
export default Reviews;
