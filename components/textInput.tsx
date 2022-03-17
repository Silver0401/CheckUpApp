import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import {styles} from '../style/globals';

interface TextInputProps {
  title: string;
  placeholder: string;
}

const TextInputComponent: React.FC<TextInputProps> = ({placeholder, title}) => {
  const [text, setText] = useState<string>();

  return (
    <>
      <Text
        style={[
          styles.h4,
          {height: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold'},
        ]}>
        {title}
      </Text>
      <TextInput
        style={{height: 40, marginLeft: 20, marginBottom: 30}}
        placeholder={placeholder}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </>
  );
};

export default TextInputComponent;
