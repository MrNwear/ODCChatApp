import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
export class MainButton extends React.Component {

    title = this.props.title
    color = this.props.style
    handler = this.props.onpress
    textstyle = this.props.txtstyle
    render() {


        return (<TouchableOpacity style={[styles.buttonStyle, this.color]} onPress={this.handler}>
            <Text style={[{ color: '#1F7FE5', fontSize: 18 }, this.textstyle]}>{this.title}</Text>
        </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "white",
        width: '40%',
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center"

    }

});