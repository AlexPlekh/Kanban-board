import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBoard from './components/MainBoard'; // для тестов, потом удалить
import dataMock from './components/DataMock';
import { useState } from 'react'
import React from 'react-dom'
import TaskPage from './components/TaskPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {

    // поменять sessionStorage на localStorage

    if (!sessionStorage.getItem('data')) {
        const initialData = [
            {
                status: 'backlog',
                statusId: 0,
                tasks: []
            },
            {
                status: 'ready',
                statusId: 1,
                tasks: []
            },
            {
                status: 'in progress',
                statusId: 2,
                tasks: []
            },
            {
                status: 'finished',
                statusId: 3,
                tasks: []
            },
        ]
        // sessionStorage.setItem('data', JSON.stringify(initialData)) // использовать в готовом приложении
        sessionStorage.setItem('data', JSON.stringify(dataMock)) // для тестов, потом удалить
    }

    if (!sessionStorage.getItem('idCount')) {
        sessionStorage.setItem('idCount', JSON.stringify('5'))
    }

    const updateDataStorage = (newData) => {
        sessionStorage.setItem('data', JSON.stringify(newData))
    }

    const updateIdCountStorage = (newIdCount) => {
        sessionStorage.setItem('idCount', JSON.stringify(newIdCount))
    }

    const [data, setData] = useState(JSON.parse(sessionStorage.getItem('data')))
    const [idCount, setIdCount] = useState(JSON.parse(sessionStorage.getItem('idCount')))

    // подумать над названием функций. addTask возвразает изменённую data, addNewTask записывает новое задание в state data и localStaorage

    const addTask = (name, statusId = 0, id = idCount, description = '') => {
        if (name) {
            if (!statusId) {
                updateIdCountStorage(+idCount + 1)
                setIdCount(prevCount => prevCount + 1);
            };

            const task = {
                id: +id,
                name: name.toString(),
                description: description.toString(),
            };

            const newData = [...data];
            newData[statusId].tasks.push(task)

            return newData;
        }
    }

    const addNewTask = (name) => {
        const newData = addTask(name);
        updateDataStorage(newData);
        setData(newData);
    }

    const shiftTask = (taskId, statusId) => {
        if (taskId) {
            const taskIndex = data[statusId - 1].tasks.findIndex(item => +item.id === +taskId);
            const task = data[statusId - 1].tasks[taskIndex];
            addTask(task.name, statusId, task.id, task.description);

            const newData = [...data];
            newData[statusId - 1].tasks.splice(taskIndex, 1);
            setData(newData)

            updateDataStorage(newData);
        }
    }

    const getTaskById = (id) => {
        const task = data.reduce((prevTask, taskGroup) => {
            const task = taskGroup.tasks.find(item => +item.id === +id)
            if (task) return task
            else return prevTask
        }, null)
        return task;
    }

    const modifyTaskDescription = (id, description) => {
        const modifiedTask = getTaskById(id);
        modifiedTask.description = description;     

        const newData = data.map(taskGroup => {
            const modyfiedTaskGroup = taskGroup.tasks.map(task => {
                if (task.id !== modifiedTask.id) return task
                else return modifiedTask
            })
            return modyfiedTaskGroup;
            
        });
        return newData;
    }

    return (
        <div className='App'>
            <Header key='header' />
            <Router>
                <Routes>
                    <Route exact path='/' element={
                        <MainBoard
                            addTask={addNewTask}
                            shiftTask={shiftTask}
                            data={data}
                            key='main'
                        />
                    } />
                    <Route path='/task/:id' element={
                        <TaskPage
                            getTask={(id) => getTaskById(id)}
                            modifyTaskDescription={modifyTaskDescription}
                        />
                    } />
                </Routes>
            </Router>
            <Footer
                numberOfActiveTasks={data.reduce((sum, taskGroup) => sum + taskGroup.tasks.length, 0)}
                numberOfFinishedTasks={data[3].tasks.length}
                year={"2022"}
                name={'AlexPlekh'}
                key='footer'
            />
        </div>
    );
}

export default App;
