import Profile from './profile/profile';
import Statistics from './Statistics/Statistics';
import data from '../data/user.json';
import statisticsData from '../data/data.json';
import FriendList from './friendList/friendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile username={data.username} tag={data.tag} location={data.location} avatar={data.avatar} stats={data.stats}/>
      <Statistics stats={statisticsData} title="Upload stats"/>
      <FriendList/>
      <TransactionHistory/>
    </div>
  );
};
