import { StyleSheet } from 'react-native';

const Calculadora = class {
  constructor(valor1, valor2, operacao, resultado) {
      this.valor1 = valor1;
      this.valor2 = valor2;
      this.operacao = operacao;
      this.resultado = resultado;
  }
}
const calc = new Calculadora(0, 0, "", 0);

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
    default:
      calc.resultado = 'Selecione uma operação, para continuar!';
      break;
  }
  return alert(calc.resultado);
}

const valueInput = (event) => {
  event.preventDefault();
  
  calc.valor1 = Number(document.getElementById('n1').value);
  calc.valor2 = Number(document.getElementById('n2').value);
  return calc;
}

const valueOperation = (event) => {
  event.preventDefault();
  calc.operacao = event.target.value;
  return calc;
}

export default function HomeScreen() {
  return (
    <form style={styles.calculator}>
      <p id="resultado" style={styles.visorResultado}></p>

      <div style={styles.groupButtons}>
        <button value={'+'} style={styles.buttonOperation} onClick={valueOperation}>+</button>
        <button value={'-'} style={styles.buttonOperation} onClick={valueOperation}>-</button>
        <button value={'*'} style={styles.buttonOperation} onClick={valueOperation}>*</button>
        <button value={'/'} style={styles.buttonOperation} onClick={valueOperation}>/</button>
        <button value={'%'} style={styles.buttonOperation} onClick={valueOperation}>%</button>
        <button style={styles.buttonOperation} onClick={calcForCalculator}>=</button>
        <button style={styles.buttonOperation} type="reset">C</button>
      </div>

      <input type="number" id="n1" onChange={valueInput} />
      <br/>
      <input type="number" id="n2" onChange={valueInput} />    
    </form>
  );
}

const styles = StyleSheet.create({
  buttonOperation: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'yellow',
  },
  buttonNumber: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
  groupButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
    paddingTop: 10,
  },
  visorResultado: {
    width: 320,
    height: 50,
    fontSize: 40,
    textAlign: 'right',
  },
  calculator: {
    width: 327,
    display: 'flex',
    flexDirection: 'column',
  },
});


/*
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello, World!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
*/
