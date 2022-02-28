import React from 'react'
import { 
    Text,
    StyleSheet,
    View,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg'

import Card from './components/Card'

const App = () => {

    function handleSocialMedia(social_media) {
        switch(social_media){
            case 'linkedin':
                Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/malcolm-de-mello-a8208a224/')
            break
            case 'github':
                Alert.alert('Meu Linkedin', 'https://github.com/MalcolmMello')
            break
            case 'youtube':
                Alert.alert('Meu Linkedin', 'https://www.youtube.com/channel/UC4WpfhVSFKAyLlBvFGWOnQg')
            break
        }
    }

    return (
        <>
            <View style={style.page}>
                <View style={style.container_cabecalho}>
                    <Image source={foto} style={style.foto}/>
                    <Text style={style.nome}>MALCOLM DE MELLO</Text>
                    <Text style={style.funcao}>Desenvolvedor Front-End</Text>
                    <View style={style.redes_sociais}>
                        <TouchableOpacity onPress={() => handleSocialMedia('youtube')}>
                            <Icon name='youtube' size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
                            <Icon name='linkedin' size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSocialMedia('github')}>
                            <Icon name='github' size={30}/>
                        </TouchableOpacity>
                    </View>
                </View>


                <Card
                    titulo='Experiência Profissional'
                    firstText='CryptoApp'
                    secondText='World In Data'
                    thirdText='NYT News'
                />
                <Card
                    titulo='Formação Academica'
                    firstText='Ensino Médio - ETEC'
                    secondText='Eduzz Fullstack Bootcamp'
                    thirdText='ReactJS - B7Web'
                />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
    },
    container_cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10
    },
    redes_sociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    }
})

export default App