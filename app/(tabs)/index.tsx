import { StyleSheet } from 'react-native';
import { Calculadora } from '@/hooks/Calculadora';

const calc = new Calculadora(0, 0, "", 0);

const valueInput = () => {
  calc.valor1 = Number(document.getElementById('n1').value);
  calc.valor2 = Number(document.getElementById('n2').value);  
  return calc;
}

const valueOperation = (event) => {
  event.preventDefault();
  calc.operacao = event.target.value;
  return calc;
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
      calc.resultado = 'Selecione uma operação, para continuar!';
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

      <div style={{ display: 'flex' }}>
        <input type="number" style={{ padding: 6, fontSize: 16, width: 145 }} id="n1" onChange={valueInput} />
        <input type="number" style={{ padding: 6, fontSize: 16, width: 145 }} id="n2" onChange={valueInput} />
      </div> 

      <div style={styles.groupButtons}>
        <button value={'+'} style={styles.buttonOperation} onClick={valueOperation}>+</button>
        <button value={'-'} style={styles.buttonOperation} onClick={valueOperation}>-</button>
        <button value={'*'} style={styles.buttonOperation} onClick={valueOperation}>*</button>
        <button value={'/'} style={styles.buttonOperation} onClick={valueOperation}>/</button>
        <button value={'%'} style={styles.buttonOperation} onClick={valueOperation}>%</button>
        <button value={'^'} style={styles.buttonOperation} onClick={valueOperation}><sub>X</sub><sup>y</sup></button>
        <button style={styles.buttonOperation} type='submit' onClick={calcForCalculator}>=</button>
        <button style={styles.buttonOperation} type='reset' onClick={clearCalculator}>C</button>
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
  },
  buttonNumber: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#505050',
    borderColor: 'transparent',
    fontSize: 20,
    color: 'white',
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
