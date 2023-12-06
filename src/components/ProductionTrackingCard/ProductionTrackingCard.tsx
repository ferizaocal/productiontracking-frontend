import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Logo = require('../../../assets/images/tekstil.png');
export default function ProductionTrackingCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.productImage} />
      </View>

      <View style={styles.infoContainer}>
        <Text>Ürün Kodu: </Text>
        <Text>Parti Numarası: </Text>
        <Text>Kumaş: </Text>
        <Text>Adet: </Text>
        <Text>Tarih: </Text>

        <View style={styles.innerView}>
          <TouchableOpacity style={styles.button}>
            <Text>İsim-Soyisim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Talimatları Göster</Text>
          </TouchableOpacity>
          <Text>Yaş: </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 50,
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    marginRight: 20,
  },
  productImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    flex: 1,
  },
  infoContainer: {
    flex: 1,
  },
  innerView: {
    marginTop: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#d1dfbb',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});
