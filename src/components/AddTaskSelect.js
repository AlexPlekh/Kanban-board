import React from "react";

const AddTaskSelect = React.forwardRef(({ data }, ref) => {
    return (
        <select className="task-group__add-task-select" ref={ref}>
            <option value=''></option>
            {data.map(item => <option key={item.id + '-option'} value={item.id}>{item.name}</option>)}
        </select>
    )
})

export default AddTaskSelect;
