function Task( {taskProps} : {taskProps: TaskProps}){
    const taskStyle = {
        backgroundColor: taskProps.done ? 'blue' : 'red'
    }

    if(taskProps.today)
        return <div style={taskStyle}>{taskProps.title}</div>
    return null;
}

interface TaskProps {
    title: string;
    done: boolean;
    today: boolean
}

export default function TasksList(){
    return(
        <div>
            <Task taskProps={{ title: "Buy bananas", done: true, today: false }} />
            <Task taskProps={{title: "Do laundry", done: true, today: true }}/>
            <Task taskProps={{title: "Vacuum my room", done: false, today: false }}/>
            <Task taskProps={{title: "Stretch", done: false, today: true }}/>
            <Task taskProps={{title: "Doctor", done: false, today: true }}/>
            <Task taskProps={{title: "Horse", done: false, today: true }}/>
        </div>
    )
}

