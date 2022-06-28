import statisticsStyles from './statistics.module.css';
import PropTypes from "prop-types";
const Statistics = ({title, stats}) => {
    return (
        <section className={statisticsStyles.statistics}>
           {title && <h2 className={statisticsStyles.title}>{title}</h2> }

            <ul className={statisticsStyles.list}>
            {stats.map((stat) => (
            <li key={stat.id} className={statisticsStyles.listElement}>
                <span>{stat.label}</span>
                <span>{stat.percentage}</span>
            </li>
          ))}
            </ul>
        </section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  })),
  };

  export default Statistics;