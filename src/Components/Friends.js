import Friend from "./Friend";

const Friends = ({ friends }) => {
  return (
    <div id="friends">
      <h2>Friends Component</h2>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          name={friend.name}
          thumbnail={friend.thumbnail}
          id={friend.id}
        />
      ))}
    </div>
  );
};

export default Friends;
