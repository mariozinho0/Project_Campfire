import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topBar:{
        backgroundColor: '#031344',
        height: 80,
        justifyContent: 'center',
    },

    btnGoBack: {
        marginLeft: 30,
        width: 30,
    },

    imageDetails: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: 222
    },

    textDetails: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
    },

    textName: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#F28C0F',
        fontSize: 20,
    },

    textAdress: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        color: '#B8B0B0',
    },

    textAbout: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#F28C0F',
        fontSize: 20,
        marginTop: 40,
    },

    textAboutDetails: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        color: '#B8B0B0',
    },

    btnWhatsapp: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#0AA8A4',
        borderRadius: 8,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageWhatsapp: {
        width: 36,
        height: 36,
    },

    textWhatsapp: {
        color: '#fff',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginLeft: 10,
    }
});

export default styles;