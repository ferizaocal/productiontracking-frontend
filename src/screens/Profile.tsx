import React, {useState} from 'react';
import Button from '../components/Buttons/Default';
import Header from '../components/Header/ScreenHeader';
import Input from '../components/Input/Input';
import Container from '../components/Container/Container';
export default function Profile(props: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <Container>
      <Header title={'profile'} />
      <Container mx={20} mt={30}>
        <Input
          value={firstName}
          onChangeText={text => {
            setFirstName(text);
          }}
          label={'Ad'}
        />
        <Input
          value={lastName}
          onChangeText={text => {
            setLastName(text);
          }}
          label={'Ad'}
        />
        <Button label={'KAYDET'} />
      </Container>
    </Container>
  );
}
