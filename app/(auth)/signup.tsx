import Background from '@/components/Background';
import { View, Alert, Text, Pressable } from 'react-native';
import { Button, Icon, Input } from '@rneui/themed';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';
import { scale, verticalScale } from 'react-native-size-matters';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    if (confirmPassword !== password) {
      Alert.alert("Passwords don't match!");
      return;
    }
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <Background>
      <View
        className='flex-1'
        style={{
          padding: scale(10),
          gap: verticalScale(10),
          justifyContent: 'center',
        }}
      >
        <Text className='font-bold text-2xl text-center'>Sign Up</Text>
        <View>
          <Input
            value={email}
            onChangeText={setEmail}
            label='Email'
            placeholder='email@email.com'
            labelStyle={{ color: 'black' }}
          />
        </View>
        <View>
          <Input
            value={password}
            onChangeText={setPassword}
            label='Password'
            placeholder='Password'
            labelStyle={{ color: 'black' }}
            secureTextEntry={passwordVisible}
            rightIcon={
              <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                <Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  type='feather'
                  color='gray'
                />
              </Pressable>
            }
          />
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            label='Confirm Password'
            placeholder='Confirm Password'
            labelStyle={{ color: 'black' }}
            secureTextEntry={confirmPasswordVisible}
            rightIcon={
              <Pressable
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                <Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  type='feather'
                  color='gray'
                />
              </Pressable>
            }
          />
        </View>
        <Button title='Sign up' onPress={signUpWithEmail} disabled={loading} />
      </View>
    </Background>
  );
}