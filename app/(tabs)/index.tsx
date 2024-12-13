import { StyleSheet } from 'react-native';
import { Calculadora } from '@/hooks/Calculadora';

const calc = new Calculadora(0, 0, "", 0);

const valueInput = (event) => {
  event.preventDefault();
  calc.valor1 = Number(document.getElementById('n1').value);
  calc.valor2 = Number(document.getElementById('n2').value);  
  return calc;
}

const valueOperation = (event) => {
  event.preventDefault();
  const camp2 = document.getElementById('n2');
  camp2?.focus();
  
  const campOperation = document.getElementById('op');
  calc.operacao = event.target.value;
  campOperation.value = calc.operacao;
  return calc;
}

let campValueOne = '';
const valueNumber = (event) => {
  const camp1 = document.getElementById('n1');
  event.preventDefault();
  campValueOne += event.target.value;
  calc.valor1 = Number(campValueOne);
  camp1.value = calc.valor1;
  console.log('r = ', campValueOne);
  return  calc;
}

const calcForCalculator = (event)=> {
  event.preventDefault();

  switch (calc.operacao) {
    case '+': 
      calc.resultado = calc.valor1 + calc.valor2;
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
      calc.resultado = (calc.valor1 / 100) * calc.valor2;
      break;
    case '^':
      calc.resultado = calc.valor1 ** calc.valor2;
      break;
    default:
      break;
  }
  viewResult(); //nao funciona com arrow functions
  console.log(calc);  
  return calc.resultado;
}

const clearCalculator = () => {
  calc.operacao = "";
  calc.resultado = 0;
  calc.valor1 = 0;
  calc.valor2 = 0;
  campValueOne = '';
  console.log(calc);
  return calc;
}

function viewResult() {
  const visor = document.getElementById('visor');
  return visor.value = calc.resultado;
}

export default function HomeScreen() {
  return (
    <form style={styles.calculator}>
      <input type="number" id="visor" style={styles.visorResult} readOnly />

      <div style={{ display: 'flex', gap: 2, backgroundColor: 'gray' }}>
        <input type="number" style={styles.inputCamp} id="n1" onChange={valueInput} readOnly/>
        <input type="text" style={styles.inputCampOp} id="op" onChange={valueInput} readOnly/>
        <input type="number" style={styles.inputCamp} id="n2" onChange={valueInput} />
      </div> 

      <div style={styles.groupButtons}>
        <button style={styles.buttonOperation} type='reset' onClick={clearCalculator}>C</button>
        <button value={'%'} style={styles.buttonOperation} onClick={valueOperation}>%</button>
        <button value={'^'} style={styles.buttonOperation} onClick={valueOperation}>^</button>
        <button value={'+'} style={styles.buttonOperation} onClick={valueOperation}>+</button>

        <button value={'1'} style={styles.buttonNumber} onClick={valueNumber}>1</button>
        <button value={'2'} style={styles.buttonNumber} onClick={valueNumber}>2</button>
        <button value={'3'} style={styles.buttonNumber} onClick={valueNumber}>3</button>
        <button value={'-'} style={styles.buttonOperation} onClick={valueOperation}>-</button>

        <button value={'4'} style={styles.buttonNumber} onClick={valueNumber}>4</button>
        <button value={'5'} style={styles.buttonNumber} onClick={valueNumber}>5</button>
        <button value={'6'} style={styles.buttonNumber} onClick={valueNumber}>6</button>
        <button value={'*'} style={styles.buttonOperation} onClick={valueOperation}>*</button>

        <button value={'7'} style={styles.buttonNumber} onClick={valueNumber}>7</button>
        <button value={'8'} style={styles.buttonNumber} onClick={valueNumber}>8</button>
        <button value={'9'} style={styles.buttonNumber} onClick={valueNumber}>9</button>
        <button value={'/'} style={styles.buttonOperation} onClick={valueOperation}>/</button>

        <button value={'0'} style={styles.buttonZero} onClick={valueNumber}>0</button>
        <button value={'.'} style={styles.buttonNumber} onClick={valueNumber}>.</button>
        <button style={styles.buttonOperation} type='submit' onClick={calcForCalculator}>=</button>
      </div>
    </form>
  );
}

const styles = StyleSheet.create({
  buttonOperation: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 20,
    color: 'yellow',
    cursor: 'pointer',
  },
  buttonNumber: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 20,
    color: 'white',
    cursor: 'pointer',  
  },
  buttonZero: { //apenas para a visualização ficar melhor
    width: 150,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 20,
    color: 'white',
    cursor: 'pointer',
  },
  inputCamp: {
    textAlign: 'center',
    fontSize: 28, 
    width: 128,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  inputCampOp: {
    textAlign: 'center',
    fontSize: 28, 
    width: 40,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  groupButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },
  visorResult: {
    width: 'auto',
    margin: 0,
    fontSize: 40,
    textAlign: 'right',
    backgroundColor: 'gray',
    borderColor: 'transparent',
  },
  calculator: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: 'auto',
  },
});
