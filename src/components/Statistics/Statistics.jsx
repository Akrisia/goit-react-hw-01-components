import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
    const arrayLength = stats.length;
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(({id, label, percentage}) => (
                    <li className={s.item} key={id} style={{ flexBasis: `calc(100% / ${arrayLength})`, backgroundColor: `#` + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase() }}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;