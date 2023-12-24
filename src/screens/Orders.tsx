import React, {useState} from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import OrderCard from '../components/OrderCard/OrderCard';
import {CircleButton} from '../components/Buttons/CircleButton';
import CustomBottomSheet from '../components/BottomSheet/CustomBottomSheet';
import Header from '../components/Header/ScreenHeader';
import Container from '../components/Container/Container';

export default function Orders(props: any) {
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  return (
    <Container>
      <Header title="orders" />
      <Container mx={20} mt={20}>
        <SearchBar
          sx={{marginBottom: 20}}
          inputStyleProps={{
            borderRadius: 4,
          }}
        />
        <OrderCard width="100%" />
      </Container>
      <CircleButton
        onPress={() => {
          setAddBottomSheetShow(true);
        }}
        icon={faPlus}
      />
      <CustomBottomSheet
        snapPoints={['50%', '70%', '90%']}
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}></CustomBottomSheet>
    </Container>
  );
}
