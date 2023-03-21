import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css['statistics']}>
      {title && <h2 className={css['title']}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(obj => (
          <li
            key={obj.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{obj.label}</span>
            <span className={css.percentage}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};