import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#76D146',
  secondary: '#ACEF60',
  background: '#f5f5f5',
  text: '#2E2E2E',
  textSecondary: '#666666',
  textTertiary: '#888888',
  link: '#4CAF50',
  white: '#FFFFFF',
  disabled: '#CCCCCC',
  shadow: '#000',
};

export const SIZES = {
  logoSize: 120,
  titleFontSize: 32,
  subtitleFontSize: 16,
  buttonFontSize: 18,
  termsFontSize: 12,
  borderRadius: 25,
  paddingHorizontal: 30,
  paddingVertical: 16,
};

export const styles = StyleSheet.create({
  // Welcome Screen Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingTop: 120,
  },
  iconContainer: {
    marginBottom: 50,
  },
  busLogo: {
    width: SIZES.logoSize,
    height: SIZES.logoSize,
  },
  title: {
    fontSize: SIZES.titleFontSize,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: SIZES.subtitleFontSize,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 60,
  },
  termsContainer: {
    position: 'absolute',
    bottom: 40,
    left: SIZES.paddingHorizontal,
    right: SIZES.paddingHorizontal,
  },
  termsText: {
    fontSize: SIZES.termsFontSize,
    color: COLORS.textTertiary,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: COLORS.link,
    textDecorationLine: 'underline',
  },

  // Custom Button Styles
  button: {
    paddingVertical: SIZES.paddingVertical,
    borderRadius: SIZES.borderRadius,
    marginBottom: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
  },
  disabledButton: {
    backgroundColor: COLORS.disabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontSize: SIZES.buttonFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.white,
  },
  disabledText: {
    color: COLORS.textTertiary,
  },

  // Login Button Styles (para cuando no uses CustomButton)
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.paddingVertical,
    borderRadius: SIZES.borderRadius,
    marginBottom: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: SIZES.buttonFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SIZES.paddingVertical,
    borderRadius: SIZES.borderRadius,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  signUpButtonText: {
    color: COLORS.white,
    fontSize: SIZES.buttonFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
});