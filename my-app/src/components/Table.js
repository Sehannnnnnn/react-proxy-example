import React from 'react'

const Table = ({type, content}) => {

    if (content.length === 0) return null;
    if (type === "book") {
        return(
            <div className="table-wrapper">
                <div className="table-box">
                    <h2>My {type}s</h2>
                    <div className="table-scroll">
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Book</th>
                                <th>Category</th>
                                <th>Author</th>
                            </tr>
                            </thead>
                            <tbody>
                                {content.map((book,index) => {
                                    return (
                                        <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                            <td>{index + 1}</td>
                                            <td>{book.book}</td>
                                            <td>{book.category}</td>
                                            <td>{book.author}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    if (type === "todo") {
        return(
            <div className="table-wrapper">
                <div className="table-box">
                    <h2>My {type}s</h2>
                    <div className="table-scroll">
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Todo</th>
                                <th>Category</th>
                                <th>isComplete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {content.map((todo,index) => {
                                    return (
                                        <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                            <td>{index + 1}</td>
                                            <td>{todo.todo}</td>
                                            <td>{todo.category}</td>
                                            <td>{todo.isComplete ? "완료됨" : ""}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;