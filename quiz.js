function marcarTareaComoCompletada(tareas, idTarea) {
    for (let i = 0; i < tareas.tarea.length; i++) {
      if (tareas[i].id === idTarea) {
        tareas[i].completada = true;
        return; 
      }
    }
  }
  

  const tareas = [
    { id: 1, nombre: 'Lavar los platos', completada: false },
    { id: 2, nombre: 'Sacar la basura', completada: false },
    { id: 3, nombre: 'Estudiar JavaScript', completada: false }
  ];
   console.log(marcarTareaComoCompletada);

   
  marcarTareaComoCompletada(tareas, 2);
  
  console.log(tareas);  
  [
    { id: 1, nombre: 'Lavar los platos', completada: false },
    { id: 2, nombre: 'Sacar la basura', completada: true },
    { id: 3, nombre: 'Estudiar JavaScript', completada: false }
  ]
  