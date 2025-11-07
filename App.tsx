import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CarList from './components/CarList';
import { Car } from './types/Car';

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]); // Lista vacía por defecto

  return (
    <View style={styles.container}>
      <CarList cars={cars} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fondo oscuro como en tu imagen
  },
});

export default App;