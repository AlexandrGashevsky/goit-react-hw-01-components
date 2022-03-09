
import FriendListItemStyles from './FriendListItemStyles.module.css';
const FriendListItem = ({avatar, name, isOnline}) => {   
    return (
        <li>
            {isOnline === true ? (
                <span className={FriendListItemStyles.green}></span>
            ) : (
              <span className={FriendListItemStyles.red}></span>
            )}
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
  };

  
  export default FriendListItem;