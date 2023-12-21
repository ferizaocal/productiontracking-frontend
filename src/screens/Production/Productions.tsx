import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  faAngleRight,
  faArrowLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import RouteTypes from '../../types/RouteTypes';
import BabyPijamaSvg from '../../Svg/Clothes/BabyPijamaSvg';
import Label from '../../components/Text/Label';
import I18n from 'i18n-js';
import ColBackground from '../../components/Cols/ColBackground';
import Col from '../../components/Cols/Col';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import {CircleButton} from '../../components/Buttons/CircleButton';
import {ClothesButton} from '../../components/Buttons/ClothesButton';
import {AppState} from '../../store';
import TshirtSvg from '../../Svg/Clothes/TshirtSvg';
import {Clothes, getFindIconByName} from '../../utils/Data';
import Button from '../../components/Buttons/Default';
import {
  createProductionModel,
  deleteProductionModel,
  getAllProductionModels,
} from '../../utils/api';
import ProductionModelResponse from '../../DTO/Response/ProductionModelResponse';

export default function Productions(props: any) {
  const {user} = useSelector((state: AppState) => state.auth);
  const {language} = useSelector((state: AppState) => state.app);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const [productions, setProductions] = useState<
    Array<ProductionModelResponse>
  >([]);
  const [selectedProduction, setSelectedProduction] = useState({
    name: '',
    iconName: '',
  });

  useEffect(() => {
    loadProductions();
  }, []);

  const saveProduction = async () => {
    await createProductionModel(user?.token as string, {
      name: selectedProduction.name,
      icon: selectedProduction.iconName,
    })
      .then(res => {})
      .catch(er => {
        console.log(er);
      });
  };
  const loadProductions = async () => {
    await getAllProductionModels(user?.token as string)
      .then(res => {
        setProductions(res.data.list);
      })
      .catch(res => {
        console.log(res);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            sx={{fontSize: 20, color: '#5F5E70', marginLeft: 15}}
            label={I18n.t('settingsscreen_production_Title', {
              locale: language,
            })}
          />
        </View>
        <View style={{marginTop: 30}}>
          <ColBackground>
            {productions.map((el, index) => (
              <Col
                onLongPress={() => {
                  Alert.alert('Uyarı', 'Silmek istediğinize emin misiniz?', [
                    {
                      text: 'Evet',
                      onPress: async () => {
                        await deleteProductionModel(user?.token as any, el.id)
                          .then(res => {
                            if (res.data.isSuccessful) {
                              loadProductions();
                            }
                          })
                          .catch(er => {
                            console.log(er);
                            Alert.alert('Hata', 'Silinemedi');
                          });
                      },
                    },
                    {
                      text: 'Hayır',
                      onPress: () => {
                        console.log('Hayır');
                      },
                    },
                  ]);
                }}
                leftIcon={getFindIconByName(el.icon, '#D8B267')}
                key={index}
                name={el.name}
                icon={
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#D8B267"
                    size={25}
                  />
                }
              />
            ))}
          </ColBackground>
        </View>
      </SafeAreaView>

      <CircleButton
        onPress={() => {
          setAddBottomSheetShow(true);
        }}
        icon={faPlus}
      />
      <CustomBottomSheet
        snapPoints={['50%']}
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
            {Clothes.map(el => {
              return (
                <ClothesButton
                  key={el.name}
                  onPress={() => {
                    setSelectedProduction({
                      name: el.name,
                      iconName: el.name,
                    });
                  }}
                  isSelected={selectedProduction.name == el.name}
                  label={el.name}
                  icon={el.iconName()}
                />
              );
            })}
          </View>
        </View>
        <View style={{marginBottom: 50, marginHorizontal: 20}}>
          <Button
            activeOpacity={0.8}
            onPress={saveProduction}
            label={'KAYDET'}
          />
        </View>
      </CustomBottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  popoverHeader: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginTop: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
  },
});
