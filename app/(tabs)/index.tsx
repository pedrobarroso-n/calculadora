import { StyleSheet } from 'react-native';
import { Calculadora } from '@/hooks/Calculadora';

const calc = new Calculadora(0, 0, "", 0);

const valueOperation = (event) => {
  event.preventDefault();
  const campOperation = document.getElementById('op');
  calc.operacao = event.target.value;
  campOperation.value = calc.operacao;
  return calc;
}

let campValue = new Array(2).fill(''); //inicializa em str para n dar erro na concatenacao
const valueNumber = (event) => {
  event.preventDefault();

  const camp1 = document.getElementById('n1');
  const camp2 = document.getElementById('n2');

  if (calc.operacao !== "") {
    campValue[1] += event.target.value;
    calc.valor2 = Number(campValue[1]);
    camp2.value = calc.valor2;
  } else {
    campValue[0] += event.target.value;
    calc.valor1 = Number(campValue[0]);
    camp1.value = calc.valor1;
  }
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
      calc.resultado = (calc.valor1 / 100) * calc.valor2;
      break;
    case '^':
      calc.resultado = calc.valor1 ** calc.valor2;
      break;
    default:
      break;
  }
  console.log(calc);
  viewResult(); //nao funciona com arrow functions
  return calc;
}

const clearCalculator = () => {
  calc.operacao = "";
  calc.resultado = 0;
  calc.valor1 = 0;
  calc.valor2 = 0;
  campValue[0] = '';
  campValue[1] = '';
  console.log(calc);
  return calc;
}

function viewResult() { 
  campValue[0] = calc.resultado;
  campValue[1] = '';
  calc.operacao = "";
  calc.valor2 = 0;
  calc.valor1 = calc.resultado;
  
  const camp1 = document.getElementById('n1');
  const camp2 = document.getElementById('n2');
  const camp3 = document.getElementById('op');
  camp1.value = calc.resultado;
  camp2.value = '';
  camp3.value = '';
  
  return calc;
}

export default function App() {
  return (
    <div style={styles.viewArea}>
      <fieldset style={styles.calculatorBorder}>
        <form style={styles.calculator}>
          <fieldset style={styles.visorResult}>
            <input type="number" style={styles.inputCamp} id="n1" readOnly/>
            <input type="text" style={styles.inputCampOp} id="op" readOnly/>
            <input type="number" style={styles.inputCamp} id="n2" readOnly />
          </fieldset>
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
      </fieldset>
    </div>
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
    width: 152,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 20,
    color: 'white',
    cursor: 'pointer',
  },
  inputCamp: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 24, 
    width: 135,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  inputCampOp: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 25, 
    width: 24,
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
    padding: 0,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    borderRadius: 6,
  },
  calculator: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 10,
    borderRadius: 10,
  },
  calculatorBorder: {
    padding: 10,
    borderRadius: 24,
  },
  viewArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#222222',
  },
});
