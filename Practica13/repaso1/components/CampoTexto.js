import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CampoTexto({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});