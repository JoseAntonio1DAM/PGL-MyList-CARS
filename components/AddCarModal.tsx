// Añadir esta función de validación mejorada
const validateForm = (): boolean => {
  if (!nombre.trim()) {
    Alert.alert('Error', 'El nombre del coche es obligatorio');
    return false;
  }

  if (nombre.trim().length < 2) {
    Alert.alert('Error', 'El nombre debe tener al menos 2 caracteres');
    return false;
  }

  if (!categoria) {
    Alert.alert('Error', 'Debes seleccionar una categoría');
    return false;
  }

  const precioNum = parseFloat(precio);
  if (!precio || isNaN(precioNum) || precioNum <= 0) {
    Alert.alert('Error', 'El precio debe ser un número válido mayor a 0');
    return false;
  }

  if (precioNum > 10000000) {
    Alert.alert('Error', 'El precio no puede ser mayor a 10,000,000 €');
    return false;
  }

  return true;
};

// Y actualizar handleSubmit
const handleSubmit = () => {
  if (!validateForm()) return;

  const nuevoCoche: Omit<Car, 'id'> = {
    nombre: nombre.trim(),
    categoria,
    precio: parseFloat(precio),
    marcado,
  };

  onAddCar(nuevoCoche);
  resetForm();
  Alert.alert('Éxito', 'Coche añadido correctamente al garaje');
};