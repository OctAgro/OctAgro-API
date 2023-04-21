import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleXmark as faCircleXmarkSolid,
  faCircleCheck as faCircleCheckSolid,
} from "@fortawesome/free-solid-svg-icons"
import {
  faCircleXmark as faCircleXmarkRegular,
  faCircleCheck as faCircleCheckRegular,
} from "@fortawesome/free-regular-svg-icons"

import styles from "./Checkbox.module.css"

export const Checkbox = ({ fill, check, name, onClick, onChange}) => {
  const checkIcon = fill ? faCircleCheckSolid : faCircleCheckRegular;
  const xMarkIcon = fill ? faCircleXmarkSolid : faCircleXmarkRegular;
  
  const IconCheckbox = check ? checkIcon : xMarkIcon

  return (
    <label className={styles.label} htmlFor="checkbox">
      <div className={styles.customCheckbox} >
        <input className={styles.input} type="checkbox" name={name}/>
        <FontAwesomeIcon className={styles.icon} icon={IconCheckbox} onClick={onClick} onChange={onChange} />
      </div>
    </label>
  )
}