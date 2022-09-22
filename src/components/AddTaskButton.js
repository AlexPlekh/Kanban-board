import plus from '../images/Plus-vector.svg';

const AddCardButton = ({ handleClick, disabled = false }) => {
    return (
        <button className="task-group-container__button add-task-button" disabled={disabled} onClick={handleClick}>
            <img src={plus} alt="plus" /> Add card
        </button>
    )
};

export default AddCardButton;