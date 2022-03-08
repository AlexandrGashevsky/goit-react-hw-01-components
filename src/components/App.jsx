import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import data from './profile/user.json';
import statisticsData from './statistics/data.json';
import FriendList from './friendlist/friendlist';
import TransactionHistory from './transactionhistory/transactionhistory';
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
