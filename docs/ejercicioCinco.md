# Ejercicio 5 - Botón Borrar Todo + Mejoras Finales

## 📋 Descripción
Implementación del botón para eliminar todos los elementos de la lista junto con mejoras significativas en la experiencia de usuario y validaciones.

## 🗑️ Ejercicio 5 - Botón Borrar Todo

### Funcionalidades Implementadas

#### 1. Múltiples Ubicaciones del Botón
- **Header**: Botón compacto visible cuando hay elementos
- **Barra de acciones**: Botón principal en la parte inferior
- **Estado deshabilitado**: Cuando la lista está vacía

#### 2. Confirmación de Eliminación Masiva
```typescript
const handleDeleteAll = () => {
  if (cars.length === 0) return;
  
  Alert.alert(
    'Eliminar todos los coches',
    `¿Estás seguro de que quieres eliminar todos los ${cars.length} coches?`,
    [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Eliminar todos', 
        style: 'destructive',
        onPress: () => {
          setCars([]);
          Alert.alert('Éxito', 'Todos los coches han sido eliminados');
        }
      },
    ]
  );
};