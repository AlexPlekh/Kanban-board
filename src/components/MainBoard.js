import React from 'react-dom'
import TaskGroup from './TaskGroup'

const MainBoard = ({addTask, shiftTask, data}) => {

    return (
        <main className="main">
            <TaskGroup key={data[0].status + ' group'} data={data[0]} prevGroupTasks={[null]} handleSubmitButton={addTask}>Backlog</TaskGroup>
            <TaskGroup key={data[1].status + ' group'} data={data[1]} prevGroupTasks={data[0].tasks} handleSubmitButton={shiftTask}>Ready</TaskGroup>
            <TaskGroup key={data[2].status + ' group'} data={data[2]} prevGroupTasks={data[1].tasks} handleSubmitButton={shiftTask}>In Progress</TaskGroup>
            <TaskGroup key={data[3].status + ' group'} data={data[3]} prevGroupTasks={data[2].tasks} handleSubmitButton={shiftTask}>Finished</TaskGroup>
        </main>
    )
}

export default MainBoard;