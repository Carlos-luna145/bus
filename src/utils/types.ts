export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}