import styles from './profile.module.css';
import PropTypes from "prop-types";


const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes} = stats;
    return (
        <div className={styles.card}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="User avatar"            
          />
          <p >{username}</p>
          <p >{tag}</p>
          <p >{location}</p>
        </div>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Followers</span>
            <span >{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span >{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span >{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }),
  };


  export default Profile;