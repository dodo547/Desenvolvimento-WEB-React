import styles from "./input.module.css";
import React, { useState } from 'react';

export function Escrever(props) {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text"
    name="texto"
    value={value}
    className={styles.escreverc}
    
       />
  );
}