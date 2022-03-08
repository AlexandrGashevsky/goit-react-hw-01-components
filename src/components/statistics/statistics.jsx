import statisticsStyles from './statistics.module.css';
import PropTypes from "prop-types";
const Statistics = ({title, stats}) => {
    return (
        <section className={statisticsStyles.statistics}>
            <h2 className={statisticsStyles.title}>{title}</h2>

            <ul className={statisticsStyles.list}>
                <li className={statisticsStyles.listElement}>
                    <span>{stats[0].label}</span>
                    <span>{stats[0].percentage}</span>
                </li>
                <li className={statisticsStyles.listElement}>
                    <span>{stats[1].label}</span>
                    <span>{stats[1].percentage}</span>
                </li>
                <li className={statisticsStyles.listElement}>
                    <span>{stats[2].label}</span>
                    <span>{stats[2].percentage}</span>
                </li>
                <li className={statisticsStyles.listElement}>
                    <span>{stats[3].label}</span>
                    <span>{stats[3].percentage}</span>
                </li>
            </ul>
        </section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };

  export default Statistics;