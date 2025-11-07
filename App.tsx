import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CarList from './components/CarList';
import AddCarModal from './components/AddCarModal';
import { Car } from './types/Car';
import { generateId } from './utils/uuid';

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Ejercicio 3: Eliminar coche individual
  const handleDeleteCar = (carId: string) => {
    Alert.alert(
      'Eliminar coche',
      '¿Estás seguro de que quieres eliminar este coche?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive',
          onPress: () => {
            setCars(prevCars => prevCars.filter(car => car.id !== carId));
          }
        },
      ]
    );
  };

  // Ejercicio 3: Marcar/desmarcar coche
  const handleToggleMarked = (carId: string) => {
    setCars(prevCars => 
      prevCars.map(car => 
        car.id === carId ? { ...car, marcado: !car.marcado } : car
      )
    );
  };

  // Ejercicio 4: Añadir nuevo coche
  const handleAddCar = (nuevoCoche: Omit<Car, 'id'>) => {
    const cocheCompleto: Car = {
      ...nuevoCoche,
      id: generateId(),
    };
    setCars(prevCars => [...prevCars, cocheCompleto]);
    setModalVisible(false);
  };

  // Ejercicio 5: Borrar todos los elementos
  const handleDeleteAll = () => {
    if (cars.length === 0) return;
    
    Alert.alert(
      'Eliminar todos',
      '¿Estás seguro de que quieres eliminar todos los coches?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar todos', 
          style: 'destructive',
          onPress: () => setCars([])
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CarList 
        cars={cars}
        onDeleteCar={handleDeleteCar}
        onToggleMarked={handleToggleMarked}
        onAddCarPress={() => setModalVisible(true)}
        onDeleteAll={handleDeleteAll}
      />
      
      <AddCarModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddCar={handleAddCar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});

export default App;