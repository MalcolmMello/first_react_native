import React from "react";
import { View, Text } from "react-native";
import style from './style'

const Card = ({titulo, firstText, secondText, thirdText}) => {
    return (
        <View style={style.card_container}>
            <View style={style.card}>
                <View style={style.card_header}>
                    <Text>{titulo}</Text>
                </View>
                <View style={style.card_content}>
                    <Text style={style.card_content_text}>{firstText}</Text>
                    <Text style={style.card_content_text}>{secondText}</Text>
                    <Text style={style.card_content_text}>{thirdText}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card