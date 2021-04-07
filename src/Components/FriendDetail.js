/* eslint-disable eqeqeq */
import { useParams } from "react-router-dom";

const FriendDetail = ({friends}) => {
    const {friendId} = useParams();
    const activeFriend = friends.filter((fr) => fr.id == friendId)[0];
    console.log(activeFriend)
    const {name, nickname, img, description} = activeFriend;
    return (
      <div className="friendDetail">
        <h2>{name}, aka {nickname}</h2>
        <img src={img} alt={name} />
        <p>{description}</p>
      </div>
    );
  };

  export default FriendDetail