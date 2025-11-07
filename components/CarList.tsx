import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Car } from '../types/Car';

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  const totalMarcados = cars.filter(car => car.marcado).length;
  const precioTotalMarcados = cars
    .filter(car => car.marcado)
    .reduce((total, car) => total + car.precio, 0);

  const renderCarItem = ({ item }: { item: Car }) => (
    <View style={styles.carItem}>
      <View style={styles.carHeader}>
        <Text style={styles.carName}>{item.nombre}</Text>
        <Text style={styles.carPrice}>{item.precio.toLocaleString()} €</Text>
      </View>
      <View style={styles.carStatusContainer}>
        <View style={[
          styles.statusIndicator,
          item.marcado ? styles.marcado : styles.noMarcado
        ]} />
        <Text style={styles.statusText}>
          {item.marcado ? 'Obtenido' : 'Pendiente'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>MI GARAJE</Text>
        <Text style={styles.subtitle}>
          ELEMENTOS: {cars.length} | OBTENIDOS: {totalMarcados}
        </Text>
      </View>

      {/* LISTA O MENSAJE VACÍO */}
      {cars.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>El garaje está vacío ⭕</Text>
          <View style={styles.buttonsContainer}>
            <View style={[styles.button, styles.disabledButton]}>
              <Text style={styles.disabledButtonText}>Añadir coche</Text>
            </View>
          </View>
        </View>
      ) : (
        <>
          <FlatList
            data={cars}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            showsVerticalScrollIndicator={false}
          />
          
          {/* TOTAL PRECIO */}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>PRECIO TOTAL: {precioTotalMarcados.toLocaleString()} €</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#2d2d2d',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
  },
  disabledButton: {
    backgroundColor: '#333333',
  },
  disabledButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  list: {
    flex: 1,
    padding: 16,
  },
  carItem: {
    backgroundColor: '#2d2d2d',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a1a',
    flex: 1,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e74c3c',
    marginLeft: 8,
  },
  carStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  marcado: {
    backgroundColor: '#27ae60',
  },
  noMarcado: {
    backgroundColor: '#e74c3c',
  },
  statusText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  totalContainer: {
    padding: 16,
    backgroundColor: '#2d2d2d',
    borderTopWidth: 1,
    borderTopColor: '#444',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default CarList;