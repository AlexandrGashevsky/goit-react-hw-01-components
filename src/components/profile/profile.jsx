import styles from './profile.module.css';
import PropTypes from "prop-types";


const Profile = ({username, tag, location, avatar, stats}) => {
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
            <span >{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span >{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span >{stats.likes}</span>
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
    stats: PropTypes.object.isRequired,
  };


  export default Profile;