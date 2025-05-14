const questions = [
  {
    type: "single",
    question: "¿Cuál es el objetivo de modelar antes de desarrollar una aplicación?",
    options: ["Aumentar el tiempo de desarrollo", "Garantizar que el diseño sea idéntico al código", "Entender el sistema y prever recursos necesarios", "Sustituir la programación"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué diferencia clave existe entre la programación estructurada y la orientada a objetos?",
    options: ["La estructurada es más rápida", "La OO se basa en funciones", "La OO simula elementos de la realidad", "La estructurada usa objetos"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Cuál es un principio fundamental de la programación orientada a objetos?",
    options: ["Repetición", "Jerarquía", "Encapsulamiento", "Herencia múltiple"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué propiedad permite que un objeto o clase pueda comportarse de distintas formas ante el mismo mensaje?",
    options: ["Herencia", "Abstracción", "Polimorfismo", "Visibilidad"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué define el estado de un objeto?",
    options: ["Su tipo", "Su visibilidad", "Los valores concretos de sus atributos", "Sus relaciones"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué significa que una clase tenga visibilidad protegida?",
    options: ["Solo sus métodos pueden verla", "Solo clases derivadas y ella misma acceden", "Es visible desde cualquier parte", "Solo es visible dentro del mismo paquete"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué es una clase abstracta?",
    options: ["Una clase sin métodos", "Una clase que no puede instanciarse", "Una clase sin atributos", "Una clase sin relaciones"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué sucede cuando un objeto ya no se necesita?",
    options: ["Se guarda en caché", "Se almacena en disco", "Se libera la memoria (recolección de basura)", "Se convierte en clase"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué es UML?",
    options: ["Un lenguaje de programación", "Un sistema operativo", "Un lenguaje de modelado de software orientado a objetos", "Un método de análisis estadístico"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué representan los diagramas UML?",
    options: ["Clases únicamente", "Código fuente", "Diferentes vistas del sistema", "Relaciones entre métodos"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué tipo de diagrama UML muestra la estructura interna de una clase?",
    options: ["Diagrama de despliegue", "Diagrama de actividades", "Diagrama de estructuras compuestas", "Diagrama de secuencia"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Cuál de estos diagramas se utiliza para representar el sistema desde la perspectiva del usuario?",
    options: ["Diagrama de clases", "Diagrama de casos de uso", "Diagrama de objetos", "Diagrama de componentes"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué representa una asociación en UML?",
    options: ["Una jerarquía de herencia", "Una agrupación de clases", "Una relación entre un actor y un caso de uso", "Una visibilidad"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Cuál es la función principal del diagrama de clases?",
    options: ["Mostrar los actores del sistema", "Representar relaciones entre métodos", "Representar la estructura estática del sistema", "Representar secuencias de tiempo"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué indica el símbolo ‘+’ en UML?",
    options: ["Privado", "Protegido", "Paquete", "Público"],
    answer: 3
  },
  {
    type: "single",
    question: "¿Qué herramienta es gratuita, multiplataforma y permite crear diagramas UML?",
    options: ["Rational Rose", "UMLet", "ArgoForm", "EclipseStudio"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué es una nota en un diagrama de clases?",
    options: ["Un método oculto", "Un atributo anotado", "Un comentario que aclara el diagrama", "Un tipo especial de relación"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué define el protocolo de un objeto?",
    options: ["Sus relaciones con otros objetos", "Las operaciones que puede recibir", "Su visibilidad", "Su herencia"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué propiedad indica que una clase solo se puede acceder desde su paquete?",
    options: ["Pública", "Privada", "Paquete", "Protegida"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Cuál es la función de la ingeniería inversa en UML?",
    options: ["Eliminar clases redundantes", "Generar código automáticamente", "Obtener diagramas a partir del código", "Corregir errores del sistema"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué tipo de diagrama representa el flujo de ejecución de eventos en el sistema?",
    options: ["Diagrama de paquetes", "Diagrama de actividades", "Diagrama de objetos", "Diagrama de clases"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué permite el polimorfismo en un sistema orientado a objetos?",
    options: ["Dividir el código en paquetes", "Reutilizar funciones sin cambios", "Realizar herencia múltiple", "Reaccionar de forma distinta al mismo mensaje"],
    answer: 3
  },
  {
    type: "single",
    question: "¿Qué relación implica una parte obligatoria del comportamiento de otro caso de uso?",
    options: ["Extends", "Implements", "Include", "Herencia"],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué se recomienda documentar en un caso de uso?",
    options: ["Precondiciones, flujo normal, flujo alternativo, postcondiciones", "Atributos, métodos y visibilidad", "Relación con actores y clases", "Diagrama de despliegue y secuencia"],
    answer: 0
  },
  {
    type: "single",
    question: "¿Qué ventaja principal ofrece la modularidad en orientación a objetos?",
    options: ["Mayor velocidad de ejecución", "Independencia de módulos", "Menor uso de memoria", "Acceso global a métodos"],
    answer: 1
  },
  // Preguntas de "Diagramas estructurales y UML"
{
  type: "single",
  question: "¿Qué ocurre cuando un objeto queda sin referencias en un programa orientado a objetos?",
  options: ["Se convierte en clase", "Se transfiere a memoria secundaria", "Se destruye y libera su memoria", "Se pasa a otra clase"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué propiedad impide el acceso directo a los atributos desde fuera de la clase?",
  options: ["Herencia", "Polimorfismo", "Ocultación", "Modularidad"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál de estos no es un nivel de visibilidad en UML?",
  options: ["Público", "Protegido", "Oculto", "Paquete"],
  answer: 2
},
{
  type: "single",
  question: "En UML, ¿qué símbolo representa visibilidad privada?",
  options: ["+", "#", "~", "-"],
  answer: 3
},
{
  type: "single",
  question: "¿Qué representa un constructor en una clase?",
  options: ["Un método que elimina objetos", "Un atributo con valor predeterminado", "Un método para inicializar objetos", "Una clase abstracta"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué representa una relación de generalización en UML?",
  options: ["Composición", "Herencia", "Cardinalidad", "Asociación"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de relación UML se representa con un rombo blanco?",
  options: ["Composición", "Herencia", "Agregación", "Asociación"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál es la herramienta UML que se integra con Eclipse y tiene versión web?",
  options: ["Visual Paradigm", "ArgoUML", "UMLet", "NetBeans"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué permite la ingeniería inversa?",
  options: ["Generar UML a partir de código", "Traducir UML a imágenes", "Crear diagramas manuales", "Generar documentación legal"],
  answer: 0
},
{
  type: "single",
  question: "¿Qué tipo de diagrama se usa para representar relaciones físicas entre nodos?",
  options: ["Diagrama de clases", "Diagrama de actividades", "Diagrama de despliegue", "Diagrama de objetos"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué elemento UML agrupa objetos con características comunes?",
  options: ["Objeto", "Atributo", "Clase", "Nodo"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué indica el símbolo # en un atributo UML?",
  options: ["Privado", "Público", "Protegido", "Paquete"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué tipo de relación elimina automáticamente los objetos parte si se elimina el todo?",
  options: ["Asociación", "Composición", "Agregación", "Generalización"],
  answer: 1
},
{
  type: "single",
  question: "¿Cuál es la finalidad de los métodos 'getters' y 'setters'?",
  options: ["Ocultar atributos", "Acceder y modificar atributos de forma controlada", "Crear nuevas clases", "Eliminar atributos"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de relación se utiliza para objetos que pueden existir independientemente del contenedor?",
  options: ["Composición", "Asociación", "Agregación", "Herencia"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué herramienta permite la generación de informes en PDF desde diagramas UML?",
  options: ["UMLet", "ArgoUML", "Visual Paradigm", "Rational Rose"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué significa que UML es independiente del lenguaje de programación?",
  options: ["No se puede usar con lenguajes modernos", "Funciona solo con Java", "No depende del lenguaje en el que se implemente", "Solo genera código pseudocódigo"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué permite la ingeniería directa en UML?",
  options: ["Dibujar a mano los diagramas", "Obtener documentación del sistema", "Generar código desde diagramas", "Analizar problemas externos"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué tipo de diagrama se usa para representar el estado de un objeto en el tiempo?",
  options: ["Diagrama de clases", "Diagrama de estados", "Diagrama de objetos", "Diagrama de casos de uso"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de clase no puede ser instanciada directamente?",
  options: ["Clase derivada", "Clase abstracta", "Clase pública", "Clase protegida"],
  answer: 1
},
{
  type: "single",
  question: "¿Cuál es el uso del símbolo ~ en UML?",
  options: ["Protegido", "Destructor (solo en C++)", "Público", "Atributo constante"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué indican las llaves {} en UML?",
  options: ["Comentarios de código", "Restricciones", "Herencias múltiples", "Métodos internos"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué elemento no es requerido obligatoriamente en una clase UML?",
  options: ["Nombre", "Atributos", "Métodos", "Relaciones"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué caracteriza a los métodos de una clase?",
  options: ["Tienen nombre, parámetros, tipo devuelto y visibilidad", "No pueden devolver valores", "Solo se usan en clases abstractas", "Son iguales para todas las clases"],
  answer: 0
},
{
  type: "single",
  question: "¿Cuál es el propósito principal de los diagramas estructurales en UML?",
  options: ["Mostrar la evolución del software", "Representar el sistema desde el punto de vista del usuario", "Modelar la estructura estática del sistema", "Modelar eventos en tiempo real"],
  answer: 2
},

// Preguntas de "Diagramas de comportamiento UML"
{
  type: "single",
  question: "¿Qué propósito tienen los diagramas de comportamiento en UML?",
  options: ["Representar la estructura del sistema", "Documentar la arquitectura de red", "Mostrar la dinámica y funcionalidad del sistema", "Gestionar la base de datos"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál de estos no es un diagrama de comportamiento en UML?",
  options: ["Diagrama de clases", "Diagrama de actividades", "Diagrama de secuencia", "Diagrama de estados"],
  answer: 0
},
{
  type: "single",
  question: "¿Qué representan los actores en un diagrama de casos de uso?",
  options: ["Clases internas del sistema", "Personas u objetos externos que interactúan con el sistema", "Métodos que ejecuta el sistema", "Procesos internos"],
  answer: 1
},
{
  type: "single",
  question: "¿Cuál es la finalidad principal de un caso de uso?",
  options: ["Mostrar la base de datos", "Representar una tarea con valor observable para un actor", "Definir una clase abstracta", "Establecer estados del sistema"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de relación implica que un caso de uso ejecuta obligatoriamente otro?",
  options: ["Herencia", "Asociación", "Include", "Extend"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál es la característica principal de la relación extend?",
  options: ["Es obligatoria en todos los diagramas", "Define herencia entre actores", "Es opcional y depende de una condición", "Representa clases internas"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál de estas opciones corresponde a una postcondición de un caso de uso?",
  options: ["El usuario debe estar registrado", "Se crea un pedido con estado 'pendiente'", "El usuario inicia sesión", "Se visualiza un artículo"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de escenario representa una ejecución específica de un caso de uso?",
  options: ["Diagrama de clases", "Escenario", "Estado", "Acción"],
  answer: 1
},
{
  type: "single",
  question: "¿Cuál es la herramienta recomendada para modelar diagramas de comportamiento en el documento?",
  options: ["UMLet", "AutoCAD", "Excel", "Visual Basic"],
  answer: 0
},
{
  type: "single",
  question: "¿Qué tipo de relación existe entre un actor y un caso de uso?",
  options: ["Extend", "Asociación", "Herencia", "Include"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué elemento NO forma parte de un diagrama de secuencia?",
  options: ["Línea de vida", "Bucle", "Evento", "Objeto"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué indica una línea de vida en un diagrama de secuencia?",
  options: ["La herencia entre clases", "El flujo lógico de ejecución", "La duración de existencia de un objeto", "El número de usuarios del sistema"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué representa una flecha horizontal en un diagrama de secuencia?",
  options: ["Cambio de estado", "Transición", "Paso de mensaje entre objetos", "Fin del proceso"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué elemento de UML permite representar mensajes asíncronos?",
  options: ["Flechas con punta completa", "Líneas discontinuas", "Flechas con media cabeza de flecha", "Cajas dobles"],
  answer: 2
},
{
  type: "single",
  question: "¿Cuál es una ventaja del diagrama de colaboración sobre el de secuencia?",
  options: ["Es más moderno", "Muestra mejor el orden cronológico", "Muestra mejor el flujo de control entre objetos", "No necesita notación UML"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué indica el número 1.2 en un diagrama de colaboración?",
  options: ["Segunda llamada del primer mensaje", "Primer objeto llamado", "Número de línea", "Identificador de clase"],
  answer: 0
},
{
  type: "single",
  question: "¿Qué representa un estado en un diagrama de estados?",
  options: ["Un conjunto de actores", "Una situación del objeto en el tiempo", "Un método", "Un mensaje entre objetos"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué provoca una transición entre estados?",
  options: ["Un atributo", "Un evento", "Un caso de uso", "Una clase"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué componente no puede faltar en una transición UML?",
  options: ["Evento, condición, acción", "Clase, atributo, método", "Escenario, mensaje, bucle", "Objeto, actor, estado"],
  answer: 0
},
{
  type: "single",
  question: "¿Cuál es el estado inicial en un diagrama de estados?",
  options: ["El primero dibujado", "El que tiene más transiciones", "El que representa el inicio del objeto", "Cualquier estado puede serlo"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué representa el símbolo ‘*’ en un diagrama de colaboración?",
  options: ["Herencia", "Bucle", "Subclase", "Parámetro"],
  answer: 1
},
{
  type: "single",
  question: "¿Qué tipo de diagrama se utiliza para modelar acciones concurrentes?",
  options: ["Diagrama de clases", "Diagrama de estados", "Diagrama de actividades", "Diagrama de interacción"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué nodo permite bifurcar el flujo en un diagrama de actividad?",
  options: ["Join", "Fork", "Merge", "Decision"],
  answer: 3
},
{
  type: "single",
  question: "¿Qué representa un carril (swimlane) en un diagrama de actividad?",
  options: ["Un grupo de mensajes", "Una acción secuencial", "El responsable de una actividad", "El flujo de control"],
  answer: 2
},
{
  type: "single",
  question: "¿Qué relación tienen los diagramas de actividad con los de estado?",
  options: ["Son equivalentes", "Son independientes", "Los diagramas de actividad son una especialización de los de estado", "Solo se usan en proyectos grandes"],
  answer: 2
}

];

function shuffleQuestions() {
  return questions
    .map(q => ({ q, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ q }) => q);
}
