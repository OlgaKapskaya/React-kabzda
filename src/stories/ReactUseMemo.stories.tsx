import React, {useCallback, useMemo, useState} from "react";
import {CustomSelect, CustomSelectContainer} from "../components/Select/CustomSelect";

export default {
    title: 'useMemo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let rezA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }

            tempA *= i
        }
        return tempA
    }, [a])
    let rezB = 1
    for (let i = 1; i <= b; i++) {
        rezB *= i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for A: {rezA}
            </div>
            <div>
                Result for B: {rezB}
            </div>
        </div>
    )
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((elem, index) => <div key={index}>{elem}</div>)}</div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Olga', 'Nelly', 'Kate'])
    let usersList = useMemo(() => {
        return users.filter(elem => elem.toLowerCase().indexOf('a') > -1)
    }, [users])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}> +</button>

            <div>{counter}</div>
            <Users users={usersList}/>
            <button onClick={() => setUsers([...users, 'new user A'])}>Add new user</button>
        </>
    )
}
export const HelpsToReactMemoSelect1 = () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState([
        {id: "1", value: "Minsk", country: 'Belarus'},
        {id: "2", value: "Moscow", country: 'Russia'},
        {id: "3", value: "London", country: 'UK'}])

    let optionsList = useMemo(() => {
        return options.filter(elem => elem.country === 'Belarus')
    }, [options])
    return (
        <div>
            <CustomSelectContainer value={value} options={optionsList} onChange={setValue}/>
        </div>
    )
}
const Books = (props: { addBook: () => void}) => {
    console.log('books')
    return <div>
        <button onClick={()=>props.addBook()}>Add new book</button>
    </div>
}
const BooksContainer = React.memo(Books)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'js', 'Css'])
    const addBook = () => {
        setBooks([...books, 'new book A'])
    }

    let booksList = useCallback(() => {
       books.filter(elem => elem.toLowerCase().indexOf('a') > -1)
    }, [books])

    const newAddBookF = useMemo(() => {
        return addBook
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}> +</button>

            <div>{counter}</div>
            <BooksContainer addBook={newAddBookF}/>

        </>
    )
}
