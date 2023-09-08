import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import todoSlice, { setTitle, setContent, titles, reset } from "./todoSlice";
import styles from "./todo.module.css";
import { useState } from "react";

export function Todo() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const todo = useAppSelector(titles);

  const [name, setName] = useState(todo.name);

  return (
    <div style={{ margin: "50px" }}>
      <div className={styles.div2}>
        <input
          type="text"
          style={{ marginRight: "3px" }}
          onChange={(e) => setName(e.currentTarget.value)}
          defaultValue={todo.name}
        />
        <button
          onClick={() => {
            dispatch(setTitle({ name: name, content: 1 }));
          }}
        >
          set title + {todo.name}
        </button>
      </div>
      <div className={styles.div2}>
        <button
          onClick={() => {
            dispatch(setContent({ name: "어쩔방구", content: 0 }));
          }}
        >
          set content + {todo.content}
        </button>
      </div>
      <div className={styles.div2}>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
      <div className={styles.div2}>
        <button
          onClick={() => {
            navigate("/just");
          }}
        >
          Go to Just Page
        </button>
      </div>
    </div>
  );
}
