import { Link } from "react-router-dom";
const Friend = ({ name, thumbnail, id }) => {
    return (
      <div className="friend">
        <img src={thumbnail} alt={name} />
        <h3>{name}</h3>
        <Link to={`/friends/${id}`}>Details</Link>
      </div>
    );
  };

  export default Friend