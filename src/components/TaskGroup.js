import TaskTitle from "./TaskTitle";
import { useRef, useState } from "react";
import AddTaskButton from "./AddTaskButton";
import SubmitTaskButton from "./SubmitTaskButton";
import AddTaskSelect from "./AddTaskSelect";

const TaskGroup = ({ prevGroupTasks, handleSubmitButton, data, children }, ...props) => {

    const [addTaskFlag, setAddTaskFlag] = useState(false);

    const onSubmit = () => {
        handleSubmitButton(inputRef.current.value, data.statusId)
        setAddTaskFlag(false);
    }

    const inputRef = useRef();

    return (
        <section key={data.status} className="task-group-container">
            {children}
            <ul className="task-group">
                {data.tasks.map((task) => <TaskTitle key={task.id} id={task.id} name={task.name} />)}
            </ul>
            <form className="add-task-form">
                {addTaskFlag && (data.status === 'backlog') && <input className="task-group__add-task-input" ref={inputRef} />}
                {addTaskFlag && (data.status !== 'backlog') && <AddTaskSelect data={prevGroupTasks} ref={inputRef} />}
                {addTaskFlag ? <SubmitTaskButton handleClick={onSubmit} /> : <AddTaskButton disabled={!prevGroupTasks.length} handleClick={() => setAddTaskFlag(true)} />}
            </form>
        </section>
    )
}

export default TaskGroup;