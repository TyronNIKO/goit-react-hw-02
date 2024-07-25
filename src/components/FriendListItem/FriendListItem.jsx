import clsx from "clsx";
import css from "./FriendListItem.module.css";
const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={clsx(css.friend)}>
            <img className={clsx(css.image)} src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.name)}>{name}</p>
            <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};
export default FriendListItem;
