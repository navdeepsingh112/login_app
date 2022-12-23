import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

export default function Button({type, mode, style, ...props }) {
  if(type == 'login'){
    return (
      <PaperButton

        style={[
          styles.button,
          { backgroundColor: '#560CCE' },
          style,
        ]}
        labelStyle={styles.text}
        mode={mode}
        {...props}
      />


    )
    
  }
  else{
  return (
    <PaperButton

      style={[
        styles.button,
        { backgroundColor: '#cccccc' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
    

  )}
}

const styles = StyleSheet.create({
  button: {
    width: '99%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius:17
  },
  text: {
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 20,
  },
})
