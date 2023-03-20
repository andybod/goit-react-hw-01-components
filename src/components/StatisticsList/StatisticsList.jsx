import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';
export const StatisticsList = ({ items }) => {
  return (
    <ul className={css['stat-list']}>
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
};
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
