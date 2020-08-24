import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 40,
    },

    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#031344',
    },

    logo: {
       width: '100%',
       resizeMode: 'contain',
    },

    textTitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 50,
    },

    textTitleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        marginTop: 25,
    },

    button: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    buttonPrimary: {
        backgroundColor: '#E39029',
    },

    buttonSecondary: {
        backgroundColor: '#0AA8A4',
    },

    textButton: {
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 30,
    },

    btnIcon: {
        marginLeft: 30,
    },

});

export default styles;