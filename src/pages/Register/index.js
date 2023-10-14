import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, LogoHalsis} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';

const Register = () => {
  const RegisterReducer = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch;
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  const sendData = () => {
    console.log('data yang dikirim: ', RegisterReducer.form);
  };

  const onInputChange = (value, input) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={35} height={35} />
        <LogoHalsis width={177} height={51} style={styles.illustration} />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk prose daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={RegisterReducer.form.fullname}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={RegisterReducer.form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={RegisterReducer.form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};

export default Register;
