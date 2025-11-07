import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Car } from '../types/Car';

interface AddCarModalProps {
  visible: boolean;
  onClose: () => void;
  onAddCar: (car: Omit<Car, 'id'>) => void;
}

const categorias = [
  'Superdeportivo',
  'Hypercar',
  'GT',
  'Muscle Car',
  'Clásico',
  'SUV Deportivo'
];

const AddCarModal: React.FC<AddCarModalProps> = ({ visible, onClose, onAddCar }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [marcado, setMarcado] = useState(false);

  const handleSubmit = () => {
    // Validaciones
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return;
    }

    if (!categoria) {
      Alert.alert('Error', 'Debes seleccionar una categoría');
      return;
    }

    const precioNum = parseFloat(precio);
    if (!precio || isNaN(precioNum) || precioNum <= 0) {
      Alert.alert('Error', 'El precio debe ser un número válido mayor a 0');
      return;
    }

    // Crear nuevo coche
    const nuevoCoche: Omit<Car, 'id'> = {
      nombre: nombre.trim(),
      categoria,
      precio: precioNum,
      marcado,
    };

    onAddCar(nuevoCoche);
    resetForm();
  };

  const resetForm = () => {
    setNombre('');
    setCategoria('');
    setPrecio('');
    setMarcado(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Añadir Nuevo Coche</Text>

          <ScrollView style={styles.form}>
            {/* Nombre */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre del coche *</Text>
              <TextInput
                style={styles.textInput}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Ej: Ferrari F8 Tributo"
                placeholderTextColor="#666"
              />
            </View>

            {/* Categoría */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Categoría *</Text>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
              >
                {categorias.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={[
                      styles.categoryButton,
                      categoria === cat && styles.categoryButtonSelected,
                    ]}
                    onPress={() => setCategoria(cat)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        categoria === cat && styles.categoryTextSelected,
                      ]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Precio */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Precio (€) *</Text>
              <TextInput
                style={styles.textInput}
                value={precio}
                onChangeText={setPrecio}
                placeholder="Ej: 350000"
                placeholderTextColor="#666"
                keyboardType="numeric"
              />
            </View>

            {/* Estado Marcado */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Estado</Text>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setMarcado(!marcado)}
              >
                <View style={[
                  styles.checkbox,
                  marcado && styles.checkboxSelected
                ]}>
                  {marcado && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>
                  Marcar como obtenido
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Botones */}
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={handleClose}
            >
              <Text style={styles.cancelButtonText}>CANCELAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.submitButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>AÑADIR COCHE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#2d2d2d',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: '#444',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    maxHeight: 400,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 12,
    color: '#ffffff',
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
    marginRight: 8,
  },
  categoryButtonSelected: {
    backgroundColor: '#e74c3c',
    borderColor: '#e74c3c',
  },
  categoryText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#27ae60',
    borderColor: '#27ae60',
  },
  checkmark: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkboxLabel: {
    color: '#cccccc',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 12,
  },
  modalButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
  cancelButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#27ae60',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddCarModal;