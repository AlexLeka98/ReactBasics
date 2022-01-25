import styles from './Input.module.css';

const Input = (props) => {
    const onChangeEventFunction = props.onChange ? props.onChange : undefined;
    return (
        <div className={styles.inputStyle}>
            <label>{props.name}</label>
            <input type={props.type} onChange={onChangeEventFunction} value={props.value}></input>
        </div>
    )
}

export default Input;