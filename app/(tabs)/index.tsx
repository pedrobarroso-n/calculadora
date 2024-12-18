import { StyleSheet } from 'react-native';
import { Calculadora } from '../../components/Calculadora';

const calc = new Calculadora(0, 0, "", 0);
var visor;
let campValue = new Array(2).fill(''); //inicializa em str para n dar erro na concatenacao

const valueNumber = (event) => {
  event.preventDefault();
  visor = document.getElementById('visor');
  if (calc.operacao !== "") {
    campValue[1] += event.target.value;
    calc.valor2 = Number(campValue[1]);
    visor.textContent = calc.valor2;

  } else {
    campValue[0] += event.target.value;
    calc.valor1 = Number(campValue[0]);
    visor.textContent = calc.valor1;
  }

  return calc;
}

const valueOperation = (event) => {
  event.preventDefault();
  calc.operacao = event.target.value;
  return calc;
}

const clearCalculator = () => {
  visor = document.getElementById('visor');
  visor.textContent = '';

  calc.operacao = "";
  calc.resultado = 0;
  calc.valor1 = 0;
  calc.valor2 = 0;
  campValue[0] = '';
  campValue[1] = '';

  return calc;
}

const calcForCalculator = (event)=> {
  event.preventDefault();

  switch (calc.operacao) {
    case '+': 
      calc.resultado = Number(calc.valor1 + calc.valor2);
      break;
    case '-': 
      calc.resultado = calc.valor1 - calc.valor2;
      break;
    case '*':
      calc.resultado = calc.valor1 * calc.valor2;
      break;
    case '/':
      calc.resultado = calc.valor1 / calc.valor2;
      break;
    case '%':
      calc.resultado = (calc.valor1 / 100) + calc.valor2;
      break;

    default:
      break;
  }
  console.log(calc);
  viewResult(); //nao funciona com arrow functions

  return calc;
}

function viewResult() { 
  visor = document.getElementById('visor');

  campValue[0] = calc.resultado;
  campValue[1] = '';
  calc.operacao = "";
  calc.valor2 = 0;
  calc.valor1 = calc.resultado;

  visor.textContent = calc.valor1;
  
  return calc;
}

export default function App() {
  return (
    <div style={styles.calculator}>
      <div id='visor' style={styles.visorResult}></div>
      <div style={styles.groupButtons}>
        <div style={styles.buttonsLine}>
          <button type='reset' style={styles.buttonOperationReset} onClick={clearCalculator}>C</button>
          <button value={'()'} style={styles.buttonOperation}>( )</button>
          <button value={'%'} style={styles.buttonOperation} onClick={valueOperation}>%</button> 
          <button value={'/'} style={styles.buttonOperation} onClick={valueOperation}>/</button>
        </div>
        <div style={styles.buttonsLine}>
        <button value={'7'} style={styles.buttonNumber} onClick={valueNumber}>7</button>
          <button value={'8'} style={styles.buttonNumber} onClick={valueNumber}>8</button>
          <button value={'9'} style={styles.buttonNumber} onClick={valueNumber}>9</button>
          <button value={'*'} style={styles.buttonOperation} onClick={valueOperation}>*</button>
        </div>
        <div style={styles.buttonsLine}>
          <button value={'4'} style={styles.buttonNumber} onClick={valueNumber}>4</button>
          <button value={'5'} style={styles.buttonNumber} onClick={valueNumber}>5</button>
          <button value={'6'} style={styles.buttonNumber} onClick={valueNumber}>6</button>
          <button value={'-'} style={styles.buttonOperation} onClick={valueOperation}>-</button>
        </div>
        <div style={styles.buttonsLine}>
          <button value={'1'} style={styles.buttonNumber} onClick={valueNumber}>1</button>
          <button value={'2'} style={styles.buttonNumber} onClick={valueNumber}>2</button>
          <button value={'3'} style={styles.buttonNumber} onClick={valueNumber}>3</button>
          <button value={'+'} style={styles.buttonOperation} onClick={valueOperation}>+</button>
        </div>
        <div style={styles.buttonsLine}>
          <button value={'+/-'} style={styles.buttonNumber}>+/-</button>
          <button value={'0'} style={styles.buttonNumber} onClick={valueNumber}>0</button>
          <button value={'.'} style={styles.buttonNumber} onClick={valueNumber}>,</button>
          <button type='submit' style={styles.buttonOperationEqual} onClick={calcForCalculator}>=</button>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  buttonOperation: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 24,
    color: 'lime',
    cursor: 'pointer',
  },
  buttonOperationEqual: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'lime',
    borderColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  },
  buttonOperationReset: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    cursor: 'pointer',
  },
  buttonNumber: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 24,
    color: 'white',
    cursor: 'pointer',  
  },
  buttonsLine: {
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  groupButtons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  visorResult: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    borderRadius: 6,
    fontSize: 32,
    fontFamily: 'monospace',
    color: 'white',
    padding: 20,
  },
  calculator: {
    height: '97%',
    width: '97%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5%',
    backgroundColor: '#222222',
  },
});
