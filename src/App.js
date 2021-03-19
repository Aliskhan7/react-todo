import './index.css';
import {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";

function App() {

    // eslint-disable-next-line no-undef
    const [todos, setTodos] = useState([
        {
            text: 'купить Бананы',
            favorite: false
        },
        {
            text: 'купить огурец',
            favorite: false
        },
        {
            text: 'купить дыню',
            favorite: false
        },
    ]);

    const [text, setText] = useState('')

    const makeFavorite = (i) =>{
        const newTodos = todos.map((item, index) =>{
            if(index === i){
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }
            return item;
        });

        setTodos(newTodos);
    }

    const deletedTodos = (i) =>{
        const filtered = todos.filter((todo, index) => {
            if(index === i){
                return false;
            }
            return true;
        });
        setTodos(filtered);
    }



    const addTodo = () =>{

        setTodos([{
            text: text},
            ...todos
        ]);
        setText('')
    }


  return (
      <div className="app">
        <Header />
        <Form text={text} addTodo={addTodo} setText={setText} />
        <Todos makeFavorite={makeFavorite} deletedTodos={deletedTodos} todos={todos}/>
      </div>
  );
}

export default App;
