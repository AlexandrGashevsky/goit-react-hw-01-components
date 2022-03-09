import friendListStyles from './FriendList.module.css';
import friendsData from '../../data/friends.json';
import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem';
  
const FriendList = () => {
    return (
        <ul className={friendListStyles.friendsList}>
          {friendsData.map((friend, index) => (
          <FriendListItem key={index} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
          ))}
        </ul>
    );
  };

  FriendListItem.propTypes = {
    friendsData: PropTypes.array.isRequired,
    friend: PropTypes.object.isRequired,
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };


  export default FriendList;