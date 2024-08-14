function Task( {taskProps} : {taskProps: TaskProps}){
    const taskStyle = {
        backgroundColor: taskProps.done ? 'blue' : 'red'
    }

    return <li style={taskStyle}>
        {taskProps.title}{taskProps.done && "✔"}
        </li>
}

interface TaskProps {
    title: string;
    done: boolean;
    today: boolean
}

export default function TasksList(){
    return(
        <ul>
            <Task taskProps={{ title: "Buy bananas", done: true, today: false }} />
            <Task taskProps={{title: "Do laundry", done: true, today: true }}/>
            <Task taskProps={{title: "Vacuum my room", done: false, today: false }}/>
            <Task taskProps={{title: "Stretch", done: false, today: true }}/>
            <Task taskProps={{title: "Doctor", done: false, today: true }}/>
            <Task taskProps={{title: "Horse", done: false, today: true }}/>
        </ul>
    )
}

