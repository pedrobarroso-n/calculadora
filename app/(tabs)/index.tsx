import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Calculator } from '@/components/Calculator';
import Button from '@/components/Button';

const calc = new Calculator("", "", "", "");
var visor;

const valueNumber = (event) => {
  visor = document.getElementById('visor');

  if (calc.operacao !== "" && event !== '⌫') {
    calc.valor2 += event;
  } 
  else if (calc.operacao === "" && event !== '⌫') {
    calc.valor1 += event;
  }
  else if (event === '⌫' && calc.operacao !== "") {
    calc.valor2 = calc.valor2.slice(0, -1);
  }
  else if (event === '⌫' && calc.operacao === "") {
    calc.valor1 = calc.valor1.slice(0, -1);
  }

  visor.textContent = `${calc.valor1}${calc.operacao}${calc.valor2}`;
  return calc;
}

const invertOperation = () => {
  visor = document.getElementById('visor');

  if (calc.operacao !== "") calc.valor2 = calc.valor2 * -1;
  else calc.valor1 = calc.valor1 * -1;
  visor.textContent = `${calc.valor1}${calc.operacao}${calc.valor2}`;
  return calc;
}

const valueOperation = (event) => {
  visor = document.getElementById('visor');

  calc.operacao = event;
  visor.textContent += calc.operacao;
  return calc;
}

const clearCalculator = () => {
  visor = document.getElementById('visor');

  visor.textContent = "";
  calc.operacao = "";
  calc.resultado = "";
  calc.valor1 = "";
  calc.valor2 = "";
  return calc;
}

const calcForCalculator = ()=> {
  switch (calc.operacao) {
    case '+': 
      calc.resultado = Number(calc.valor1) + Number(calc.valor2);
      break;
    case '-': 
      calc.resultado = Number(calc.valor1) - Number(calc.valor2);
      break;
    case '*':
      calc.resultado = Number(calc.valor1) * Number(calc.valor2);
      break;
    case '/':
      calc.resultado = Number(calc.valor1) / Number(calc.valor2);
      break;
    case '%':
      calc.resultado = Number((calc.valor1) / 100) + Number(calc.valor2);
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
  calc.operacao = "";
  calc.valor2 = "";
  calc.valor1 = calc.resultado;
  visor.textContent = calc.valor1;
  return calc;
}

export default function App() {
  return (
    <SafeAreaView style={styles.calculator}>
      <View style={styles.visor} id='visor'></View>
      <View style={styles.groupButtons}>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonOperationReset}
            styleText={styles.buttonOperationReset2}
            onpress={clearCalculator}
            value={'C'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueNumber('⌫')}
            value={'⌫'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueOperation('%')}
            value={'%'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueOperation('/')}
            value={'/'}
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('7')}
            value={'7'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('8')}
            value={'8'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('9')}
            value={'9'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueOperation('*')}
            value={'*'}
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('4')}
            value={'4'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=>valueNumber('5')}
            value={'5'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('6')}
            value={'6'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueOperation('-')}  
            value={'-'}
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('1')}
            value={'1'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('2')}
            value={'2'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('3')}
            value={'3'}
          />
          <Button 
            style={styles.buttonOperation}
            styleText={styles.buttonOperation2}
            onpress={()=> valueOperation('+')} 
            value={'+'} 
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={invertOperation}
            value={'+/-'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('0')}
            value={'0'}
          />
          <Button 
            style={styles.buttonNumber}
            styleText={styles.buttonNumber2}
            onpress={()=> valueNumber('.')}
            value={'.'}
          />
          <Button 
            style={styles.buttonOperationEqual}
            styleText={styles.buttonOperationEqual2}
            onpress={calcForCalculator}
            value={'='}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonOperation: {
    width: '20vw',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOperation2: {
    fontSize: 24,
    color: 'lime',
  },
  buttonOperationEqual: {
    width: '20vw',
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'lime',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOperationEqual2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonOperationReset: {
    width: '20vw',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOperationReset2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonNumber: {
    width: '20vw',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#505050',
    cursor: 'pointer',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNumber2: {
    fontSize: 24,
    color: 'white',
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
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  visor: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 6,
    fontSize: 36,
    fontFamily: 'monospace',
    color: 'white',
    padding: 20,
    paddingBottom: 40,
  },
  calculator: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222222',
  },
});
