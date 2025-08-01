import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { styles } from '../styles/CreateAccountStyles';

const CreateAccountScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
    };

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Aquí iría tu lógica de registro
      console.log('Sign up with:', formData);
      
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
    // Implementar Google Sign-In
  };

  const handleAppleSignIn = () => {
    console.log('Sign in with Apple');
    // Implementar Apple Sign-In
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login'); // o el nombre que tengas para tu pantalla de login
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoText}>🚌</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Create Account</Text>

        {/* Form */}
        <View style={styles.formContainer}>
          <CustomInput
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => {
              setFormData(prev => ({ ...prev, name: text }));
              if (errors.name) {
                setErrors(prev => ({ ...prev, name: '' }));
              }
            }}
            autoCapitalize="words"
            error={errors.name}
          />

          <CustomInput
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => {
              setFormData(prev => ({ ...prev, email: text }));
              if (errors.email) {
                setErrors(prev => ({ ...prev, email: '' }));
              }
            }}
            keyboardType="email-address"
            error={errors.email}
          />

          <CustomInput
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) => {
              setFormData(prev => ({ ...prev, password: text }));
              if (errors.password) {
                setErrors(prev => ({ ...prev, password: '' }));
              }
            }}
            secureTextEntry
            error={errors.password}
          />

          {/* Sign Up Button */}
          <CustomButton
            title={isLoading ? "Creating Account..." : "Sign Up"}
            onPress={handleSignUp}
            disabled={isLoading}
            style={styles.signUpButton}
          />
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleAppleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.socialIcon}>🍎</Text>
            <Text style={styles.socialText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={navigateToSignIn}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;