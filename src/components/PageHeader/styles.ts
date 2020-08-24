import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#031344',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    textTitle: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 30,
    },

    textCount: {
        fontFamily: 'Archivo_400Regular',
        color: '#ffffff',
        fontSize: 14,
    },

    btnFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E39029',
        borderRadius: 8,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },

    textFilter: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins_600SemiBold',
        color: '#ffffff',
        fontSize: 16,
        marginRight: 10,
    },
    
    inputGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },

    inputBlock: {
        marginRight: 30,
    },

    textInput: {
        fontFamily: 'Archivo_400Regular',
        color: '#E39029',
    },

    input: {
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#E39029',
    },
});

export default styles;