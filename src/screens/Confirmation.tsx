import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Container from '../components/Container/Container';
import Header from '../components/Header/ScreenHeader';
export default function Confirmation(props: any) {
  return (
    <Container>
      <Header title="confirmation" />
      <Container mx={20} mt={30}>
        <SearchBar
          inputStyleProps={{
            borderRadius: 4,
          }}
        />
      </Container>
    </Container>
  );
}
