import React, {useEffect, useRef, useState} from 'react';
import {faEdit, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {AppState} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {CircleButton} from '../../components/Buttons/CircleButton';
import Header from '../../components/Header/ScreenHeader';
import Container from '../../components/Container/Container';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import Input from '../../components/Input/Input';
import {TouchableOpacity, View} from 'react-native';
import Button from '../../components/Buttons/Default';
import {createUser, getUserByRole} from '../../services/UserService';
import CreateUserRequest from '../../dto/Request/CreateUserRequest';
import {ValidationFields, objectToCheckReturnBoolean} from '../../utils/Helper';
import UserResponse from '../../dto/Response/UserResponse';
import ColBackground from '../../components/Cols/ColBackground';
import Col from '../../components/Cols/Col';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useThemeColors from '../../constant/useColor';
import {RoleActions} from '../../store/slice/roleSlice';

export default function Users(props: any) {
  const colors = useThemeColors();
  const {selectedRole, roles} = useSelector((state: AppState) => state.role);
  console.log(roles);
  var addRef = useRef<BottomSheet>(null);
  var editRef = useRef<BottomSheet>(null);
  const [users, setUsers] = useState([] as UserResponse[]);
  const [pageLoading, setPageLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const [editBottomSheetShow, setEditBottomSheetShow] = useState(false);
  const [createUserDto, setCreateUserDto] = useState<CreateUserRequest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: selectedRole.name,
  });

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      loadUsers();
    });
  }, []);

  const loadUsers = async () => {
    await getUserByRole(selectedRole.id)
      .then(res => {
        setUsers(res.data.list);
      })
      .finally(() => {
        setPageLoading(false);
      });
  };

  const handleSave = async () => {
    setSaveLoading(true);
    await createUser(createUserDto)
      .then(res => {
        if (res.data.isSuccessful) {
          addRef.current?.close();
          setAddBottomSheetShow(false);
          setUsers(prevState => [...prevState, res.data.entity]);
        }
      })
      .catch(er => {
        console.log(er);
      });
    setSaveLoading(false);
  };
  const handleChangeCreateUserDto = (
    key: keyof CreateUserRequest,
    value: any,
  ) => {
    setCreateUserDto(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  const checkFormDto = () => {
    var checkObject = {
      ...createUserDto,
      email: ValidationFields.email.regex.test(createUserDto.email),
    };
    return objectToCheckReturnBoolean(checkObject);
  };

  return (
    <Container>
      <Header extraTitle={selectedRole.name + ' Kullanıcıları'} />
      <Container isLoading={pageLoading} mx={20} mt={30}>
        <ColBackground>
          {[...users]
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((el, index) => {
              return (
                <Col
                  activeOpacity={0.8}
                  key={index}
                  name={`${el.firstName} ${el.lastName}`}
                  icon={
                    <TouchableOpacity
                      hitSlop={15}
                      onPress={() => {
                        setEditBottomSheetShow(true);
                      }}
                      activeOpacity={0.7}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        color={colors.iconColor}
                        size={20}
                      />
                    </TouchableOpacity>
                  }
                />
              );
            })}
        </ColBackground>
      </Container>
      {!pageLoading && (
        <CircleButton
          onPress={() => {
            setAddBottomSheetShow(true);
          }}
          icon={faPlus}
        />
      )}
      <CustomBottomSheet
        ref={addRef}
        snapPoints={['60%']}
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}>
        <View style={{marginHorizontal: 15}}>
          <Input
            label="Ad"
            bottomSheet
            value={createUserDto.firstName}
            onChangeText={value =>
              handleChangeCreateUserDto('firstName', value)
            }
          />
          <Input
            label="Soyad"
            bottomSheet
            value={createUserDto.lastName}
            onChangeText={value => handleChangeCreateUserDto('lastName', value)}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            label="E-posta"
            bottomSheet
            value={createUserDto.email}
            onChangeText={value => handleChangeCreateUserDto('email', value)}
          />
          <Input
            label="Telefon"
            bottomSheet
            value={createUserDto.phone}
            onChangeText={value => handleChangeCreateUserDto('phone', value)}
          />
          <Input
            label="Şifre"
            bottomSheet
            value={createUserDto.password}
            onChangeText={value => handleChangeCreateUserDto('password', value)}
            secureTextEntry={true}
          />
          <Button
            disabled={checkFormDto()}
            onPress={handleSave}
            isLoading={saveLoading}
            sx={{marginTop: 10}}
            label={'Kaydet'}
          />
        </View>
      </CustomBottomSheet>
      <CustomBottomSheet
        ref={editRef}
        snapPoints={['60%']}
        handleClose={(value: boolean) => {
          setEditBottomSheetShow(value);
        }}
        isOpen={editBottomSheetShow}>
        <View style={{marginHorizontal: 15}}>
          <Input
            label="Ad"
            bottomSheet
            value={createUserDto.firstName}
            onChangeText={value =>
              handleChangeCreateUserDto('firstName', value)
            }
          />
          <Input
            label="Soyad"
            bottomSheet
            value={createUserDto.lastName}
            onChangeText={value => handleChangeCreateUserDto('lastName', value)}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            label="E-posta"
            bottomSheet
            value={createUserDto.email}
            onChangeText={value => handleChangeCreateUserDto('email', value)}
          />
          <Input
            label="Telefon"
            bottomSheet
            value={createUserDto.phone}
            onChangeText={value => handleChangeCreateUserDto('phone', value)}
          />
          <Input
            label="Şifre"
            bottomSheet
            value={createUserDto.password}
            onChangeText={value => handleChangeCreateUserDto('password', value)}
            secureTextEntry={true}
          />
          <Button
            disabled={checkFormDto()}
            onPress={handleSave}
            isLoading={saveLoading}
            sx={{marginTop: 10}}
            label={'Kaydet'}
          />
        </View>
      </CustomBottomSheet>
    </Container>
  );
}
