import React from 'react';
import { Text, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { maskPhone } from '../../utils/masks';

import styles from './styles';


interface InputMaskProps extends TextInputProps {
    mask: "phone",
    inputMaskChange: any;
}

const InputMask: React.FC<InputMaskProps> = ({ mask, inputMaskChange, ...rest }) => {

    function handleChange(text: string) {
      const value =  maskPhone(text);
      inputMaskChange(value);
    }

    return(
        <TextInput style={styles.input} 
            {...rest}
            onChangeText={(text) => handleChange(text)}
        />
    );
}

export default InputMask;