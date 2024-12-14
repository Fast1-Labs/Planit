import { useState } from 'react';
import {
  Alert,
  View,
  AppState,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { supabase } from '../../utils/supabase';
import { Button, Icon, Input } from '@rneui/themed';
import Background from '@/components/Background';
import { scale, verticalScale } from 'react-native-size-matters';
import { Link } from 'expo-router';

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
  const [showPassword, setShowPassword] = useState(true);
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

  return (
    <Background>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
              keyboardType={'email-address'}
            />
          </View>
          <View>
            <Input
              labelStyle={{ color: 'black' }}
              label='Password'
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={showPassword}
              placeholder='Password'
              autoCapitalize={'none'}
              rightIcon={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    type='feather'
                    color='gray'
                  />
                </Pressable>
              }
            />
          </View>
          <View className='gap-3'>
            <Link href={'/(auth)/signup'} asChild>
              <Pressable>
                <Text className='text-purple-900 font-bold text-center'>
                  Don't you have an account? Sign Up!
                </Text>
              </Pressable>
            </Link>
            <Button
              title='Sign in'
              disabled={loading}
              onPress={() => signInWithEmail()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}
