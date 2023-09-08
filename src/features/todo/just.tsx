import { useNavigate } from "react-router-dom";
import styles from "./todo.module.css";

export function JustCome() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.div2}>hi~~~ I'm Just a Page!!!!</div>
      <div className={styles.div2}>
        <button
          onClick={() => {
            navigate("/todo");
          }}
        >
          Go to Todo Page
        </button>
      </div>
    </>
  );
}
