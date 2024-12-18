import { Text, TouchableOpacity, View } from "react-native";

export default function Button({ onpress, value, style, styleText }) {
    return (
        <View>
            <TouchableOpacity onPress={onpress} style={style}>
                <Text style={styleText}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
