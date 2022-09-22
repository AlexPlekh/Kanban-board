const SubmitTaskButton = ({ handleClick }) => {
    return (
        <button type="submit" className="task-group-container__button submit-task-button" onClick={handleClick}>
            Submit
        </button>
    )
};

export default SubmitTaskButton;