import Profile from './Profile';
import user from './Profile/user.json';
import Statistics from './Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import s from './App.module.css';


function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
