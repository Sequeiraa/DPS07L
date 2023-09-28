import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return(
    <>
      <ScrollView>
        <Modal transparent = {true} animationType='slide' visible={modalVisibleplaya} onRequestClose={ () => {
          alert('Modal has been closed.');
        }}>
          <View style={style.vistaModal}>
            <View>
              <Text style = {style.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
              <Button title = 'Cerrar' onPress={() => {setModalVisibleplaya(!modalVisibleplaya)}}/>
            </View>
          </View>
        </Modal>

          <View style={{flexDirection: 'row'}}>
            <Image style = {style.banner} source={require('./src/img/bg.jpg')}/>
          </View>

          <View style={style.contenedor}>
            <Text style={style.titulo}>¿Qué hacer en El Salvador?</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight onPress={() => {setModalVisibleplaya(!modalVisibleplaya)}}>
                <Image style= {StyleSheet.ciudad} source = {require('./src/img/actividad1.jpg')}/>
                </TouchableHighlight>
              </View>

                <View>
                  <Image style= {StyleSheet.ciudad} source = {require('./src/img/actividad2.jpg')}/>
                </View>

                <View>
                  <Image style= {StyleSheet.ciudad} source = {require('./src/img/actividad3.jpg')}/>
                </View>

                <View>
                  <Image style= {StyleSheet.ciudad} source = {require('./src/img/actividad4.jpg')}/>
                </View>

                <View>
                  <Image style= {StyleSheet.ciudad} source = {require('./src/img/actividad5.jpg')}/>
                </View>

            </ScrollView>
          </View>
      </ScrollView>

      <Text style = {style.titulo}>Platillos salvadoreños</Text>
      <View>
        <View style={StyleSheet.mejores} source ={require('./src/img/mejores1.jpg')}></View>
      </View>

      <View>
        <View style={StyleSheet.mejores} source ={require('./src/img/mejores2.jpg')}></View>
      </View>

      <View>
        <View style={StyleSheet.mejores} source ={require('./src/img/mejores3.jpg')}></View>
      </View>

      <Text style={style.titulo}>Rutas Turisticas</Text>
      <View style = {style.listado}>
        <View style = {style.listaItem}>
          <Image style = {style.mejores} source={require('./src/img/ruta1.jpg')}></Image>
        </View>
        <View style = {style.listaItem}>
          <Image style = {style.mejores} source={require('./src/img/ruta2.jpg')}></Image>
        </View>
        <View style = {style.listaItem}>
          <Image style = {style.mejores} source={require('./src/img/ruta3.jpg')}></Image>
        </View>
        <View style = {style.listaItem}>
          <Image style = {style.mejores} source={require('./src/img/ruta4.jpg')}></Image>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  banner:{
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor:{
    marginHorizontal: 10,
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores:{
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem:{
    flexBasis:'49%',
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal:{
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});

export default App;