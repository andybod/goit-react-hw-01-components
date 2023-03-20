import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css['statistics']}>
      {title && <h2 className={css['title']}>{title}</h2>}
      <StatisticsList items={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
