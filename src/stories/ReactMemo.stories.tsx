import React, {useState} from "react";
export default {
    title: 'React.memo demo'
}
const NewMessagesCounter = (props: { count: number } ) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return <div>{props.users.map((elem, index) => <div key={index}>{elem}</div>)}</div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Olga' ,'Nelly', 'Kate'])
return (
    <>
        <button onClick={() => setCounter(counter+1)}> + </button>
        <button onClick={() => setUsers([...users, 'Dima'])}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
)
}

