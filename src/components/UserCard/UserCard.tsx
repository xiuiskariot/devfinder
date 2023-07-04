import { LocalGithubUser } from "../../types";
import styles from "./UserCard.module.scss";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import { UserInfo } from "../UserInfo";

//либо так, но тогда бужет ипорт юзерстатпропс
// interface UserCardProps extends UserStatProps {}

// вот такая запись будет обязвать передавать в этот компонент все поля интерфейса локалгитхабюзер
interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
      {props.bio || "This profile has no bio"}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      twitter={props.twitter}
      location={props.location}
    />
  </div>
);
