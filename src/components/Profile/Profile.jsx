import css from "./Profile.module.css";
import clsx from "clsx";
const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={clsx(css.profile)}>
            <div className={clsx(css.info)}>
                <img src={image} alt="User avatar" className={clsx(css.image)} />
                <p className={clsx(css.name)}>{name}</p>
                <p className={clsx(css.tag)}>@{tag}</p>
                <p className={clsx(css.location)}>{location}</p>
            </div>

            <ul className={clsx(css.stats)}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;
