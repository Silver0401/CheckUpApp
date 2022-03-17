import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Modal,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import {styles} from '../style/globals';

// Components
import TextInputComponent from '../components/textInput';
import SwitchComponent from '../components/switch';

const Patient = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const symptomsList = {
    headache: false,
    fever: false,
  };

  return (
    <ScrollView style={[styles.fullContainer, {backgroundColor: '#97e1f1'}]}>
      <Text
        style={[
          styles.fullContainer,
          styles.alignCenter,
          styles.h3,
          {
            height: 60,
            marginTop: 20,
            color: '#0a4865',
            fontWeight: 'bold',
            textDecorationColor: '#0a4865',
            textDecorationLine: 'underline',
          },
        ]}>
        Please fill in the information
      </Text>
      <View style={[styles.fullContainer]}>
        <TextInputComponent title="Name" placeholder="Your name here" />
        <TextInputComponent title="Age" placeholder="Your age here" />
        <TextInputComponent title="Sex" placeholder="Your sex here" />
        <TextInputComponent
          title="Reason of Consultation"
          placeholder="General context of consult"
        />
        <Text
          style={[styles.h4, {height: 20, marginLeft: 20, fontWeight: 'bold'}]}>
          Symptoms
        </Text>
        <SwitchComponent
          currentStateChange={(data: any) => (symptomsList.headache = data)}
          title="Headache"
        />
        <SwitchComponent title="Fever" />
        <SwitchComponent title="Fatigue" />
        <SwitchComponent title="Disorientation" />
        <SwitchComponent title="Muscle Pain" />
        <SwitchComponent title="Somnolence" />

        <TextInputComponent
          title="Any other symptoms?"
          placeholder="Put them here"
        />

        <TextInputComponent
          title="Family History"
          placeholder="Brief context"
        />

        <TextInputComponent
          title="Past or Current Diseases"
          placeholder="Put them here, if none, leave blank"
        />

        <View style={[styles.genericButton, {backgroundColor: 'white'}]}>
          <Button
            title="Submit Data"
            color="#22576d"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.fullContainer, styles.alignCenter, {flex: 1}]}>
          <View
            style={[
              styles.border,
              styles.borderRadius,
              {
                padding: 20,
                backgroundColor: 'white',
                borderColor: 'black',
              },
            ]}>
            <Image
              style={[
                styles.smallBox,
                styles.border2,
                styles.borderRadius,
                {borderColor: '#22576d'},
              ]}
              source={{
                uri: 'https://static-unitag.com/images/help/QRCode/qrcode.png?mh=07b7c2a2',
              }}
            />
            <Pressable
              style={[styles.genericButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.h4, {color: 'white'}]}>
                {symptomsList.headache ? 'true' : 'false'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Patient;
