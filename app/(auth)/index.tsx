import { useState } from 'react';
import { Alert, View, AppState, Text } from 'react-native';
import { supabase } from '../../utils/supabase';
import { Button, Input } from '@rneui/themed';
import Background from '@/components/Background';
import { scale, verticalScale } from 'react-native-size-matters';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  {
    /*async function signUpWithEmail() {
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
  }*/
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
        <Text className='text-2xl font-bold text-center'>Welcome Back!</Text>
        <View>
          <Input
            labelStyle={{ color: 'black' }}
            label='Email'
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder='email@address.com'
            autoCapitalize={'none'}
          />
        </View>
        <View>
          <Input
            labelStyle={{ color: 'black' }}
            label='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder='Password'
            autoCapitalize={'none'}
          />
        </View>
        <View>
          <Button
            style={{ paddingTop: verticalScale(20) }}
            title='Sign in'
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        {/* 
      <View style={styles.verticallySpaced}>
        <Button
          title='Sign up'
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>*/}{' '}
      </View>
    </Background>
  );
}
