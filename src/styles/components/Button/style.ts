import {Button as AntButton} from '@ant-design/react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

interface StyledButtonProps {
  variant?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onPress?: () => void;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StyledButton = styled(AntButton)<StyledButtonProps>`
  background-color: ${({variant}) => {
    switch (variant) {
      case 'primary':
        return 'blue';
      case 'default':
        return 'white';
      case 'dashed':
        return 'transparent';
      case 'text':
        return 'transparent';
      case 'link':
        return 'transparent';
      default:
        return 'green';
    }
  }};
  border-color: ${({variant}) =>
    variant === 'dashed' ? 'grey' : 'transparent'};
  border-style: ${({variant}) => (variant === 'dashed' ? 'dashed' : 'solid')};
  width: 200px;
  border-radius: 10px;
`;

export const getColor = (
  variant: 'primary' | 'default' | 'dashed' | 'text' | 'link' | string,
): string => {
  switch (variant) {
    case 'primary':
      return 'white';
    case 'default':
      return 'black';
    case 'dashed':
      return 'gray';
    case 'text':
      return 'black';
    case 'link':
      return 'blue';
    default:
      return 'black';
  }
};
