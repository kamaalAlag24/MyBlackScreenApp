import {Text, View} from 'react-native';
import {StyledButton, getColor} from '../../styles/components/button/style';

interface ButtonProps {
  variant: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onPress?: () => void;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({variant, onPress, title}) => {
  return (
    <View>
      <StyledButton variant={variant} onPress={onPress}>
        <Text style={{color: getColor(variant)}}>{title}</Text>
      </StyledButton>
    </View>
  );
};
