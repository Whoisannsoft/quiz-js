function encontrarCiudadMasPoblada(ciudades) {
    if (ciudades.length === 0) {
      return null;
    }
  
 
    let ciudadMasPoblada = ciudades[0];
  
    for (let i = 1; i < ciudades.length; i++) {
      const ciudadActual = ciudades[i];
  
      if (ciudadActual.poblacion > ciudadMasPoblada.poblacion) {
        ciudadMasPoblada = ciudadActual;
      }
    }
  
    return ciudadMasPoblada;
  }
  const ciudades = [
    { nombre: 'Bogotá', poblacion: 8.343 },
    { nombre: 'Medellín', poblacion: 2.505 },
    { nombre: 'Cali', poblacion: 2.403 },
    { nombre: 'Barranquilla', poblacion: 1.206 }
  ];
  
  const ciudadMasPoblada = encontrarCiudadMasPoblada(ciudades);
  console.log("La ciudad más poblada es:", ciudadMasPoblada);