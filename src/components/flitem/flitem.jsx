import PropTypes from "prop-types";
import FriendListItemStyles from './friendlistitemStyles.module.css';
const FriendListItem = ({avatar, name, isOnline}) => {   
    return (
        <li>
            
                <span className={isOnline ? FriendListItemStyles.green : FriendListItemStyles.red}></span>
            
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

  
  export default FriendListItem;