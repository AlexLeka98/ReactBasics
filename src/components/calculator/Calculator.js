import styles from './Calculator.module.css'
import { calActions } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

const Calculator = () => {
    const dispatch = useDispatch();
    const calc = useSelector(state => state.calc);

    const buttonClick = (event) => {
        // dispatch(calActions.numberBuffer(number));
        dispatch(calActions.operationBuffer(event.target.innerText));
    }

    const numberClick = (event) => {
        let number = event.target.innerText === ',' ? '.' : event.target.innerText;
        dispatch(calActions.numberBuffer(number));

    }

    const cleanClick = () => {
        dispatch(calActions.cleanBuffers());
    }

    const delClick = () => {
        dispatch(calActions.delBuffer());
    }

    console.log(calc);
    return (
        <div className={styles.calcContainer}>
            <h1 className={styles.calcRes}>{`${calc.value}`}</h1>
            <table>
                <tbody>
                    <tr className={styles.firstRow}>
                        <td>N</td>
                        <td onClick={cleanClick}>Clean</td>
                        <td onClick={delClick}>Del</td>
                        <td onClick={buttonClick}>/</td>
                    </tr>
                    <tr>
                        <td onClick={numberClick}>7</td>
                        <td onClick={numberClick}>8</td>
                        <td onClick={numberClick}>9</td>
                        <td onClick={buttonClick}>x</td>
                    </tr>
                    <tr>
                        <td onClick={numberClick}>4</td>
                        <td onClick={numberClick}>5</td>
                        <td onClick={numberClick}>6</td>
                        <td onClick={buttonClick}>-</td>
                    </tr>
                    <tr>
                        <td onClick={numberClick}>1</td>
                        <td onClick={numberClick}>2</td>
                        <td onClick={numberClick}>3</td>
                        <td onClick={buttonClick}>+</td>
                    </tr>
                    <tr>
                        <td onClick={buttonClick}>+/-</td>
                        <td onClick={numberClick}>0</td>
                        <td onClick={numberClick}>,</td>
                        <td onClick={buttonClick}>=</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}


export default Calculator;