import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { IButtonProps } from '../../../components/misc/Button';
import Colors from '../../constants/Colors';

const Button: React.FunctionComponent<IButtonProps> = ({ variant, callback, text, disabled }) => {
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={[
          styles.primary,
          {
            // backgroundColor: colors.primary['100'],
            opacity: disabled ? 0.4 : 1,
          },
        ]}
        onPress={() => !disabled && callback()}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.secondary,
          {
            // outlineColor: colors.primary['100'],
            // color: colors.primary['100'],
            opacity: disabled ? 0.4 : 1,
          },
        ]}
        onPress={() => !disabled && callback()}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    minWidth: 130,
    maxWidth: 160,
    minHeight: 3,
    border: 'none',
    padding: 2,
    borderRadius: 5,
    color: "white",
    cursor: 'pointer',
    backgroundColor: Colors.dark.tabIconSelected,
  },
  secondary: {
    minWidth: 130,
    maxWidth: 160,
    minHeight: 3,
    border: 'none',
    padding: 2,
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineOffset: 2,
    borderRadius: 5,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
});
