import { Link } from 'react-router-dom';

const TaskTitle = ({ id, name }) => (
    <Link to={`/task/` + id} className={'link'}>
        <li className='task-group__item'>{name}</li>
    </Link>
)

export default TaskTitle;