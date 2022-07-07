import React, { useRef, useState } from 'react';
import uniqid from 'uniqid';

import * as styles from './styles.module.scss'
import { IconFileAttachment } from "@icons";

const Input = ({ type, placeholder }: any) => {
  const id = uniqid();
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  switch (type) {
    case 'file' :
      return <div>
        <label htmlFor={id} className={styles.label}>
          <IconFileAttachment />
          {fileName || placeholder}
        </label>
        <input ref={inputRef} id={id} className={styles.input} type="file" placeholder={placeholder} onChange={() => {
          if (inputRef !== null) {
            setFileName(inputRef.current.value);
          }
        }
        } />
      </div>
    default :
      return <input className={styles.input} type="text" placeholder={placeholder} />
  }

}

export default Input;