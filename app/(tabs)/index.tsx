import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

class Calculator {
  constructor() {
    this.valor1 = "";
    this.valor2 = "";
    this.operacao = "";
    this.resultado = "";
  }
}

const calc = new Calculator();

const App = () => {
  const [display, setDisplay] = useState("");
  const [showDevelopers, setShowDevelopers] = useState(false); // Novo estado para mostrar os desenvolvedores

  const updateDisplay = () => {
    setDisplay(`${calc.valor1}${calc.operacao}${calc.valor2}`);
  };

  const valueNumber = (value) => {
    if (calc.operacao !== "") {
      calc.valor2 += value;
    } else {
      calc.valor1 += value;
    }
    updateDisplay();
  };

  const valueOperation = (operation) => {
    if (calc.valor1 && !calc.valor2) {
      calc.operacao = operation;
    }
    updateDisplay();
  };

  const invertOperation = () => {
    if (calc.operacao !== "") {
      calc.valor2 = (-1 * parseFloat(calc.valor2)).toString();
    } else {
      calc.valor1 = (-1 * parseFloat(calc.valor1)).toString();
    }
    updateDisplay();
  };

  const deleteLastCharacter = () => {
    if (calc.operacao !== "") {
      calc.valor2 = calc.valor2.slice(0, -1);
    } else {
      calc.valor1 = calc.valor1.slice(0, -1);
    }
    updateDisplay();
  };

  const clearCalculator = () => {
    calc.valor1 = "";
    calc.valor2 = "";
    calc.operacao = "";
    calc.resultado = "";
    setDisplay("");
  };

  const calcForCalculator = () => {
    if (calc.valor1 && calc.valor2 && calc.operacao) {
      const valor1 = parseFloat(calc.valor1);
      const valor2 = parseFloat(calc.valor2);

      switch (calc.operacao) {
        case "+":
          calc.resultado = valor1 + valor2;
          break;
        case "-":
          calc.resultado = valor1 - valor2;
          break;
        case "*":
          calc.resultado = valor1 * valor2;
          break;
        case "/":
          calc.resultado = valor1 / valor2;
          break;
        default:
          break;
      }

      calc.valor1 = calc.resultado.toString();
      calc.valor2 = "";
      calc.operacao = "";
      setDisplay(calc.valor1);
    }
  };

  const Button = ({ onPress, value, style, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textStyle}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.calculator}>
      <View style={styles.visor}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      {/* Botão de desenvolvedores */}
      <TouchableOpacity
        style={styles.developersButton}
        onPress={() => setShowDevelopers(!showDevelopers)}
      >
        <Text style={styles.developersButtonText}>⚠</Text>
      </TouchableOpacity>

      {/* Mostrar os nomes dos desenvolvedores quando o estado `showDevelopers` for true */}
      {showDevelopers && (
        <View style={styles.developersList}>
          <Text style={styles.developersText}>Desenvolvedores:</Text>
          <Text style={styles.developersText}>- Pedro Barroso Neto</Text>
          <Text style={styles.developersText}>- Maria Ranykelle da Cunha Martins</Text>
          <Text style={styles.developersText}>- Gleison Pereira Santiago</Text>
        </View>
      )}

      <View style={styles.groupButtons}>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonOperationReset}
            textStyle={styles.buttonOperationReset2}
            onPress={clearCalculator}
            value="C"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={deleteLastCharacter}
            value="⌫"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={() => valueOperation("%")}
            value="%"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={() => valueOperation("/")}
            value="/"
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("7")}
            value="7"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("8")}
            value="8"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("9")}
            value="9"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={() => valueOperation("*")}
            value="*"
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("4")}
            value="4"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("5")}
            value="5"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("6")}
            value="6"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={() => valueOperation("-")}
            value="-"
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("1")}
            value="1"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("2")}
            value="2"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("3")}
            value="3"
          />
          <Button
            style={styles.buttonOperation}
            textStyle={styles.buttonOperation2}
            onPress={() => valueOperation("+")}
            value="+"
          />
        </View>
        <View style={styles.buttonsLine}>
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={invertOperation}
            value="+/-"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber("0")}
            value="0"
          />
          <Button
            style={styles.buttonNumber}
            textStyle={styles.buttonNumber2}
            onPress={() => valueNumber(".")}
            value="."
          />
          <Button
            style={styles.buttonOperationEqual}
            textStyle={styles.buttonOperationEqual2}
            onPress={calcForCalculator}
            value="="
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    backgroundColor: "#222222",
  },
  visor: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    color: "white",
    fontSize: 36,
    fontFamily: "monospace",
  },
  developersButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "green",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  developersButtonText: {
    fontSize: 24,
    color: "white",
  },
  developersList: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  developersText: {
    fontSize: 16,
    color: "black",
  },
  groupButtons: {
    flex: 2,
    padding: 10,
  },
  buttonsLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  buttonOperation: {
    flex: 1,
    marginHorizontal: 5,
    height: 70,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonOperation2: {
    fontSize: 24,
    color: "lime",
  },
  buttonOperationEqual: {
    flex: 1,
    marginHorizontal: 5,
    height: 70,
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonOperationEqual2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  buttonOperationReset: {
    flex: 1,
    marginHorizontal: 5,
    height: 70,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonOperationReset2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  buttonNumber: {
    flex: 1,
    marginHorizontal: 5,
    height: 70,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonNumber2: {
    fontSize: 24,
    color: "white",
  },
});

export default App;
