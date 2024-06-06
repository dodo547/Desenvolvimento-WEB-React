import styles from "./button.module.css";

export function Botao({ valor, onclick, title }) {
  return (
    <>
      <button
        type="submit"
        title={title}
        id="button"
        className={styles.botaoc}
        onClick={onclick}>      
        Enviar
      </button>
    </>
  );
}