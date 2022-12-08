import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import DisplayBoard from './components/DisplayBoard';
import Creater from './components/Creater';
import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos, createTodo } from './services/TodoService';
import Footer from './components/Footer';

function App () {
  //Book
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  //Todo
  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = (type) => {
    if (type === "book") {
        createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
    }
    if (type === "todo") {
        createTodo(todoShelf)
        .then(() => {
          setNumberTodos(numberOfTodos+1);
      });
    }
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div className="container">

          <div>
            <Creater
              type={"book"}
              bookShelf={bookShelf}
              onChangeForm={handleOnChangeForm}
              handleSubmit={() => handleSubmit("book")}
            />
            <DisplayBoard
              type={"book"}
              numberOfData={numberOfBooks} 
              getAllData={getAllBook} 
            />
            <Table type={"book"} content={books} />
          </div>

          <div>
            <Creater
                type={"todo"}
                bookShelf={todoShelf}
                onChangeForm={handleOnChangeForm}
                handleSubmit={() => handleSubmit("todo")}
              />
            <DisplayBoard 
              type={"todo"}
              numberOfData={numberOfTodos} 
              getAllData={getAllTodo} 
            />
            <Table type={"todo"} content={todos} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
