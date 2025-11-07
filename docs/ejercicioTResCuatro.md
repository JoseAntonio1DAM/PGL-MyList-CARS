# Ejercicios 3 y 4 - Funcionalidades Avanzadas

## 📋 Descripción
Implementación de las funcionalidades de eliminación individual, marcado/desmarcado y modal de formulario para añadir nuevos coches.

## 🛠️ Ejercicio 3 - Eliminación Individual y Marcado

### Funcionalidades Implementadas

#### 1. Eliminación Individual
- **Mecanismo**: Press largo sobre cualquier coche o botón "Eliminar"
- **Confirmación**: Alert modal para confirmar eliminación
- **Ubicación**: Botón rojo en cada card de coche
- **Experiencia**: Feedback táctil y visual

#### 2. Marcado/Desmarcado
- **Mecanismo**: Press corto sobre cualquier coche
- **Indicador Visual**: Círculo de color (verde=obtenido, rojo=pendiente)
- **Texto Dinámico**: Cambia entre "Obtenido" y "Pendiente"
- **Contadores**: Actualización automática en header

### Código Principal
```typescript
// Eliminación con confirmación
const handleDeleteCar = (carId: string) => {
  Alert.alert('Eliminar coche', '¿Estás seguro?', [
    { text: 'Cancelar', style: 'cancel' },
    { 
      text: 'Eliminar', 
      style: 'destructive',
      onPress: () => setCars(prev => prev.filter(car => car.id !== carId))
    },
  ]);
};

// Cambio de estado marcado
const handleToggleMarked = (carId: string) => {
  setCars(prevCars => 
    prevCars.map(car => 
      car.id === carId ? { ...car, marcado: !car.marcado } : car
    )
  );
};