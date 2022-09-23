import React from 'react-dom'
import TaskGroup from './TaskGroup'

const MainBoard = ({ addTask, shiftTask, data }) => {

    const makeFirstCapital = str => {
        let newStr;
        if (str.length > 1) {
            newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
        } else newStr = str.toUpperCase()
        return newStr;
    }

    const findPreviousGroupTasks = statusId => {
        let PreviousGroup = data.find(taskGroup => taskGroup.statusId === +statusId - 1);
        if (!PreviousGroup) return [null];
        return PreviousGroup.tasks;
    }

    const sortedData = [...data].sort((a, b) => a.statusId - b.statusId);

    return (
        <main className="main">
            {sortedData.map(taskGroup => {
                return <TaskGroup
                    key={taskGroup.status + ' group'}
                    data={taskGroup}
                    prevGroupTasks={findPreviousGroupTasks(taskGroup.statusId)}
                    handleSubmitButton={(taskGroup.statusId === 0) ? addTask : shiftTask}
                >{makeFirstCapital(taskGroup.status)}</TaskGroup>
            })}
        </main>
    )
}

export default MainBoard;