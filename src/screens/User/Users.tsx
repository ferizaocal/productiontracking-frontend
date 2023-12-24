import React from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
import {CircleButton} from '../../components/Buttons/CircleButton';
import Header from '../../components/Header/ScreenHeader';
import Container from '../../components/Container/Container';

export default function Users(props: any) {
  const {selectedRole} = useSelector((state: AppState) => state.role);

  return (
    <Container>
      <Header extraTitle={selectedRole.name + ' Kullanıcıları'} />
      <CircleButton onPress={() => {}} icon={faPlus} />
    </Container>
  );
}
