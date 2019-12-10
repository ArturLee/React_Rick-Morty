import React from 'react'

export default ({ totalPages, setPage }) => {
    const listItem = (number) => {
        return (
            <li key={number}>
                <a onClick={() => setPage(number)} href='!#'>
                    {number}
                </a>
            </li>
        )
    }

    const list = () => {
        const items = []
        for (let n = 1; n <= totalPages; n++) {
            items.push(listItem(n))
        }
        return (<ul> {items} </ul>)
    }


    return (
        <nav id='pagination'>
            {list()}
        </nav>
    )
}
