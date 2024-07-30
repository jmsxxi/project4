import Button from "../components/Button/Button";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-buttons">
          <div className="button-showpost">
            <Button color="active"> All posts </Button>
            <Button color="default">Favorites</Button>
          </div>
          <div className="button-action">
            <Button color="default">Add post</Button>
          </div>
        </div>
        <div className="blog-post">post here</div>
      </div>
    </div>
  );
};
export default Blog;
