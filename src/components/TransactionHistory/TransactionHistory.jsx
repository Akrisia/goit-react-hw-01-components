import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
    return (
        <table className={s.transactions}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;