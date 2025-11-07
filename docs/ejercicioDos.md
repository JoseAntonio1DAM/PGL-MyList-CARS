## 📋 Descripción
En este ejercicio se implementó la estructura base de la aplicación "Mi Garaje" para gestionar una lista de coches, replicando exactamente el diseño proporcionado en la imagen de referencia.

## Diseño Implementado
Pantalla Principal - Estado Vacío
Fondo oscuro (#1a1a1a) idéntico al diseño

Header centrado con título "MIGARJE" en grande

Contadores dinámicos: "ELEMENTOS: 0 | OBTENIDOS: 0"

Mensaje central: "El garaje está vacío"

Botones deshabilitados: "Añadir coche" y "Añadir cache" en tonos grises

Estética Visual
Paleta de colores oscura coherente con el diseño original

Tipografía y espaciado replicados fielmente

Estados visuales para elementos marcados/no marcados

Diseño responsivo y centrado

## Estructura Implementada
1. Tipado del Objeto Coche
Archivo: src/types/Car.ts

Interfaz: Car

Campos:

id: string - Identificador único generado con UUID

nombre: string - Nombre del coche

categoria: string - Categoría del coche

precio: number - Precio en euros

marcado: boolean - Estado de obtención

2. Generación de UUID
Librería: uuid

Archivo: src/utils/uuid.ts

Función: generateId() - Genera identificadores únicos

3. Componente de Lista Principal
Archivo: src/components/CarList.tsx

Props: Recibe un array de objetos Car

Funcionalidades:

Muestra el listado de coches con diseño de cards

Contadores dinámicos en header

Mensaje personalizado cuando la lista está vacía

Indicadores visuales de estado (círculos de color)

Sección de precio total de coches obtenidos

## Tecnologías Utilizadas
React Native con TypeScript

UUID para generación de IDs únicos

FlatList para renderizado eficiente

StyleSheet para estilos consistentes

# Características de UI/UX
Header fijo con información resumida

Cards individuales para cada coche con:

Nombre y precio en misma línea

Indicador visual de estado (verde/rojo)

Texto de estado "Obtenido"/"Pendiente"

Sección de totales en la parte inferior

Estados vacíos con llamadas a la acción

# Próximos Pasos
Implementar modal para añadir nuevos coches

Añadir funcionalidad de marcar/desmarcar

Implementar eliminación individual

Crear botón de borrado masivo

Añadir validaciones de formulario

# Observaciones
El diseño se implementó manteniendo la fidelidad visual con la imagen de referencia, priorizando la experiencia de usuario en estado vacío que es el caso inicial de la aplicación.