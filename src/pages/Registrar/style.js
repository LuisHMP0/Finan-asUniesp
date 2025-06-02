import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #F0F2F5;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#A0A0A0'
})`
  width: 90%;
  height: 8%;
  background-color: #FFF;
  border-radius: 8px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 17px;
  color: #333;
  border: 1px solid #E0E0E0;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 6%;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 8px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`;

export const TypeButton = styled.TouchableOpacity`
  flex: 1;
  height: 35%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #E0E0E0;
`;

export const TypeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;