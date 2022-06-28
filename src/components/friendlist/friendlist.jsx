import friendListStyles from './friendlist.module.css';

import PropTypes from "prop-types";
import FriendListItem from '../flitem/flitem';
  
const FriendList = ({friendsData}) => {
    return (
        <ul className={friendListStyles.friendsList}>
          {friendsData.map((friend) => (
          <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
          ))}
        </ul>
    );
  };

 
  


  FriendList.propTypes = {
    friendsData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  })),
  }


  export default FriendList;