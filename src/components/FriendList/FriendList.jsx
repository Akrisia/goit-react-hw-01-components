import FriendListItem from './FriendListItem';
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList ({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                    // <li className={s.item} key={id}>
                    //     <span className={s.status}>{isOnline}</span>
                    //     <img className={s.avatar} src={avatar} alt={name} width="48" />
                    //     <p className={s.name}>{name}</p>
                    // </li>
                ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;