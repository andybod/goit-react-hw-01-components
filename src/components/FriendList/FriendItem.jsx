import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Fragment>
      <span
        className={`${css.status} ${
          isOnline ? `${css.online}` : `${css.offline}`
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </Fragment>
  );
};
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
