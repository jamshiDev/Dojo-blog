import { Link } from "react-router-dom";
const NotFound = () => {
  return (
      <div className="not-found">
          <h1>404</h1>
      <p>Sorry, this page cannot be found</p>
      <button className="not-found-button"><Link to="/">Back to the homepage...</Link></button>
    </div>
  );
};

export default NotFound;
