import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';
export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={css['item']}
      style={{
        backgroundColor: `${getRandomColor()}`,
      }}
    >
      <span className={css['label']}>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
