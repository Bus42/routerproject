import { useParams } from "react-router-dom";

const FriendDetail = ({friends}) => {
    const {friendID} = useParams();
    // const activeFriend = friends.filter((fr) => fr.id == friendID);
    console.log(friendID)
    return (
      <div className="friendDetail">
        FRIEND_DETAIL
      </div>
    );
  };

  export default FriendDetail