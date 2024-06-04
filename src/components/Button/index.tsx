import {Text} from 'react-native';
import {
  Container,
  StyledButton,
  getColor,
} from '../../styles/components/button/style';

interface ButtonProps {
  variant: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onPress?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({variant, onPress, children}) => {
  return (
    <Container>
      <StyledButton variant={variant} onPress={onPress}>
        <Text style={{color: getColor(variant)}}>
          {children ||
            `${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
        </Text>
      </StyledButton>
    </Container>
  );
};
