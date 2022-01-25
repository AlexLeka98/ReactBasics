import styles from './Content.module.css';

const Content = (props) => {
    return (
        <div className={styles.containerStyle}>
            {props.children}
        </div>
    )
}

export default Content;