import { Profile } from 'components/Profile/Profile';
import user from '../../user.json';
import css from './App.module.css';
export const App = () => {
  return (
    <div className={css['container']}>
      <Profile user={user} />
    </div>
  );
};
