import React from 'react'

const Pages = ({ totalPages, page }) => {
    const numberOfPages = parseInt(totalPages)
    const pageNumbers = []

    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i)
    }


    return (
        <nav id='pagination'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => page(number)} href='!#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Pages