import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface Props {
  onSendingAnotherFeedback: () => void;
}

export function Success({ onSendingAnotherFeedback }: Props) {
  return(
    <View style={styles.container}>
      <Image 
        source={successImg}
        style={styles.image}
      />
      <Text style={styles.title}>
        Agradecemos o feddback
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={onSendingAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  ); 
}