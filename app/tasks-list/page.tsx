function Task( { title } : {title : string}){
    return <div>{ title }</div>
}


interface SuperTaskProps {
    title: string;
    disabled: boolean;
    number: number;
}

function createTitle(){
    return "title created by JavaScript function"
}


function SuperTask({title, disabled, number} : SuperTaskProps){
    return <div>{title} {number} {disabled}</div>
}

export default function TasksList(){
    const title = "Alibaba";
    const number = 5;
    const disabled = true;

    const myObject = {
        title: "Jadwiga królowa",
        number: 100
    }


    return(
        <div style={{
            color: 'blue'
        }}>
            <Task title={"Task 1 str "} />
            <Task title={"Task 2 str"} />
            <Task title={"Task 3 str"} />
            <SuperTask disabled={false} title={"cniwhjei2qod: "} number={3}/>
            <SuperTask disabled={disabled} number = {number} title={title}/>
            <Task title={createTitle()}/>
            <Task title={myObject.title}/>
        </div>
    )
}

