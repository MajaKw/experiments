function Task( { title } : {title : string}){
    return <div>{ title }</div>
}


interface SuperTaskProps {
    title: string;
    disabled: boolean;
    number: number;
}

function SuperTask({title, disabled, number} : SuperTaskProps){
    return <div>{title} {number}</div>
}

export default function TasksList(){
    return(
        <div>
            <Task title={"Task 1 str "} />
            <Task title={"Task 2 str"} />
            <Task title={"Task 3 str"} />
            <SuperTask disabled={false} title={"cniwhjei2qod: "} number={3}/>
        </div>
    )
}

