import friendListStyles from './friendlist.module.css';
import friendsData from './friends.json';
import PropTypes from "prop-types";
const FriendListItem = ({avatar, name, isOnline}) => {   
    return (
        <li>
            {isOnline === true ? (
                <span className={friendListStyles.green}></span>
            ) : (
              <span className={friendListStyles.red}></span>
            )}
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  
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
  
  export default FriendList;