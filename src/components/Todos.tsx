import React, { ReactNode } from "react";
import Todo from "../components/models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

interface TodosProps {
  items: Todo[];
  onRemoveTodo: (id: number) => void;
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
