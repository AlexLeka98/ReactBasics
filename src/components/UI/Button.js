import styles from './Button.module.css';


const Button = (props) => {
    const type = props.type ? props.type : 'button';
    const onclick = props.onClick ? props.onClick : null;
    return (
        <button type={props.type} onClick={onclick} className={styles.buttonStyle}>
            {props.children}
        </button>
    )
}


export default Button;