import { useMemo, useState } from 'react';
import React from 'react-dom'
import cross from '../images/Cross.svg'
import { Link, useParams } from 'react-router-dom';


const TaskPage = ({ getTask, modifyTaskDescription }) => {

    const { id } = useParams();

    const task = useMemo(() => getTask(id), [getTask, id]);

    const [value, setValue] = useState(task.description || "This task has no description");

    return (
        <main className="main">
            <section key={task + '-task'} className="task-page" >
                <div className='task-page__heading'>
                    <h1 className='task-page__heading-text'>{task.name}</h1>
                    <Link to={'/'} className='link' onClick={() => modifyTaskDescription(id, value)}>
                        <img src={cross} alt='cross'></img>
                    </Link>
                </div>
                <textarea className='task-page__text' onChange={e => setValue(e.target.value)} value={value}></textarea>
            </section>
        </main>
    )
}

export default TaskPage;