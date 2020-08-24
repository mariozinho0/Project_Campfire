import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardItem: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    cardImage: {
        width: "48%",
        height: 140,
        backgroundColor: '#333',
    },

    images: {
        width: 180,
        height: 140,
        backgroundColor: '#333',
    },

    cardText: {
        width: '48%',
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 10,
    },

    textTitle: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#F28C0F',
        fontSize: 14,
    },

    textAdress: {
        fontFamily: 'Poppins_400Regular',
        color: '#B8B0B0',
    },
});

export default styles;