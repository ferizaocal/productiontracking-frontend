import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/ScreenHeader';
import {CircleButton} from '../../components/Buttons/CircleButton';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Default';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {
  createOperation,
  updateOperation,
} from '../../services/OperationService';
import CreateOperationRequest from '../../dto/Request/CreateOperationRequest';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {
  OperationActions,
  fetchOperations,
} from '../../store/slice/operationSlice';
import ColBackground from '../../components/Cols/ColBackground';
import Col from '../../components/Cols/Col';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useThemeColors from '../../constant/useColor';
import {objectToCheckReturnBoolean} from '../../utils/Helper';
import {AxiosError} from 'axios';
import OperationResponse from '../../dto/Response/OperationResponse';
import CustomSwitch from '../../components/Switch/Switch';

export default function Operations(props: any) {
  var addRef = useRef<BottomSheet>(null);
  var editRef = useRef<BottomSheet>(null);
  const {
    createOperationDto,
    operations,
    buttonLoading,
    updateOperationDto,
    pageLoading,
  } = useSelector((x: AppState) => x.operation);
  const [editBottomSheetShow, setEditBottomSheetShow] = useState(false);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const dispatch = useDispatch<any>();
  const colors = useThemeColors();

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      loadOperations();
    });
  }, []);

  const loadOperations = () => {
    dispatch(fetchOperations());
  };
  const handleSave = async () => {
    dispatch(OperationActions.setButtonLoading(true));
    await createOperation(createOperationDto)
      .then(res => {
        if (res.data.isSuccessful) {
          dispatch(OperationActions.addOperation(res.data.entity));
          addRef.current?.close();
          setAddBottomSheetShow(false);
        } else {
          Alert.alert('Hata', res.data.exceptionMessage || '');
        }
      })
      .catch((er: AxiosError) => {
        Alert.alert('Hata', er.message || '');
      })
      .finally(() => {
        dispatch(OperationActions.setButtonLoading(false));
      });
  };
  const handleUpdate = async () => {
    dispatch(OperationActions.setButtonLoading(true));
    await updateOperation(updateOperationDto)
      .then(res => {
        if (res.data.isSuccessful) {
          dispatch(OperationActions.updateOperation(res.data.entity));
          editRef.current?.close();
          setEditBottomSheetShow(false);
        } else {
          Alert.alert('Hata', res.data.exceptionMessage || '');
        }
      })
      .catch((er: AxiosError) => {
        Alert.alert('Hata', er.message || '');
      })
      .finally(() => {
        dispatch(OperationActions.setButtonLoading(false));
      });
  };
  const handleChangeCreateOperation = (
    key: keyof CreateOperationRequest,
    value: any,
  ) => {
    let temp = {...createOperationDto} as any;
    temp[key] = value;
    dispatch(OperationActions.setCreateOperationDto(temp));
  };
  const handleChangeUpdateOperation = (
    key: keyof OperationResponse,
    value: any,
  ) => {
    let temp = {...updateOperationDto} as any;
    temp[key] = value;
    dispatch(OperationActions.setUpdateOperationDto(temp));
  };
  var checkInputByCreate = () => {
    return objectToCheckReturnBoolean(createOperationDto);
  };
  var checkInputByUpdate = () => {
    let checkObject = {
      operationName: updateOperationDto.operationName,
      operationNumber: updateOperationDto.operationNumber,
    };
    return objectToCheckReturnBoolean(checkObject);
  };
  return (
    <Container>
      <Header title="operationsmanager" />
      <CircleButton icon={faPlus} onPress={() => setAddBottomSheetShow(true)} />
      <Container mx={20} mt={30} isLoading={pageLoading}>
        <ColBackground>
          {[...operations]
            .sort((a, b) => (a.operationNumber > b.operationNumber ? 1 : -1))
            .map((el, index) => (
              <Col
                activeOpacity={0.8}
                key={index}
                onPress={() => {
                  dispatch(OperationActions.setUpdateOperationDto(el));
                  setEditBottomSheetShow(true);
                }}
                name={el.operationName}
                active={el.status === 'INACTIVE'}
                icon={
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(OperationActions.setUpdateOperationDto(el));
                      setEditBottomSheetShow(true);
                    }}
                    hitSlop={20}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      color={colors.iconColor}
                      size={20}
                    />
                  </TouchableOpacity>
                }
              />
            ))}
        </ColBackground>
      </Container>
      <CustomBottomSheet
        ref={editRef}
        snapPoints={['40%']}
        handleClose={(value: boolean) => {
          setEditBottomSheetShow(value);
        }}
        isOpen={editBottomSheetShow}>
        <Container bgColor="#fff" mx={20}>
          <Input
            value={updateOperationDto?.operationName || ''}
            onChangeText={text =>
              handleChangeUpdateOperation('operationName', text)
            }
            onSubmitEditing={() => editRef.current?.snapToIndex(0)}
            bottomSheet
            label="Operasyon Adı"
          />
          <Input
            value={updateOperationDto.operationNumber?.toString?.() || ''}
            onChangeText={text =>
              handleChangeUpdateOperation('operationNumber', text)
            }
            onSubmitEditing={() => editRef.current?.snapToIndex(0)}
            keyboardType="number-pad"
            bottomSheet
            label="Operasyon Sırası"
          />
          <CustomSwitch
            value={updateOperationDto.status === 'ACTIVE' ? true : false}
            onValueChange={() => {
              handleChangeUpdateOperation(
                'status',
                updateOperationDto.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE',
              );
            }}
            label="Durum"
          />
          <Button
            sx={{marginTop: 20}}
            isLoading={buttonLoading}
            disabled={checkInputByUpdate()}
            onPress={handleUpdate}
            label="Kaydet"
          />
        </Container>
      </CustomBottomSheet>
      <CustomBottomSheet
        ref={addRef}
        snapPoints={['40%']}
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}>
        <Container bgColor="#fff" mx={20}>
          <Input
            value={createOperationDto?.operationName || ''}
            onChangeText={text =>
              handleChangeCreateOperation('operationName', text)
            }
            onSubmitEditing={() => addRef.current?.snapToIndex(0)}
            bottomSheet
            label="Operasyon Adı"
          />
          <Input
            value={createOperationDto.operationNumber?.toString?.() || ''}
            onChangeText={text =>
              handleChangeCreateOperation('operationNumber', text)
            }
            onSubmitEditing={() => addRef.current?.snapToIndex(0)}
            keyboardType="number-pad"
            bottomSheet
            label="Operasyon Sırası"
          />
          <Button
            isLoading={buttonLoading}
            disabled={checkInputByCreate()}
            onPress={handleSave}
            label="Kaydet"
          />
        </Container>
      </CustomBottomSheet>
    </Container>
  );
}
