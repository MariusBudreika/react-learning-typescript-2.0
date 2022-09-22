import React, { ReactNode } from "react";
import Todo from "../components/models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
