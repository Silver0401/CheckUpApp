import React, {useEffect, useState} from 'react';
import {View, Switch, Text} from 'react-native';

interface switchProps {
  title: string;
  currentStateChange?: (data: boolean) => void;
}

const switchComponent: React.FC<switchProps> = ({
  title,
  currentStateChange,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    currentStateChange && currentStateChange(isEnabled);
  }, [isEnabled]);

  return (
    <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
      <Text style={{marginBottom: 10}}>{title}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#aeff82'}}
        thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default switchComponent;
