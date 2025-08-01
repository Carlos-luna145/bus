import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/WelcomeScreenStyles';

const WelcomeScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    // TODO: cambiar esto por: navigation.navigate('Login');
    console.log('Navegar a Login');
  };

  const handleSignUp = () => {
    navigation.navigate('CreateAccount'); // Cambiar esto
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

      <View style={styles.content}>
        {/* Logo del autobús */}
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/images/bus-logo.png')} // TODO: Ajustar ruta de la imagen
            style={styles.busLogo}
            resizeMode="contain"
          />
        </View>

        {/* Título y subtítulo */}
        <Text style={styles.title}>Eco Bus</Text>
        <Text style={styles.subtitle}>
          Your guide to sustainable urban mobility
        </Text>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Términos y privacidad */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;