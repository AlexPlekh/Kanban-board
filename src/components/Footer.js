const Footer = ({ numberOfActiveTasks, numberOfFinishedTasks, name, year }) => {
    return (
        <footer className="footer">
            <p className="footer__summary">Active tasks: {numberOfActiveTasks} Finished tasks: {numberOfFinishedTasks}</p>
            <p className="footer__credits">Kanban board by {name}, {year}</p>
        </footer>
    )
}

export default Footer;