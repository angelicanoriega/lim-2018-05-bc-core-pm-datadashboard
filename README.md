# DATA DASHBOARD (DATALAB)

## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN), el 90% de la data que existe hoy ha sido creada en los últimos dos años. Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos en **información** necesitamos procesarlos y entenderlos. Una manera muy sencilla de hacerlo es creando _visualizaciones_. Las empresas líderes de hoy generan visualizaciones dinámicas de su data que les permiten entender mejor su negocio y tomar decisiones apropiadas.

Si pensamos en un _dashboard_ podemos pensar en el tablero de control de un auto o el de un avión. Un espacio desde el cual un usuario puede tener acceso a la información y controles más relevantes, en este caso, del vehículo que está utilizando. El _dashboard_ de un auto le permite a quien conduce saber a qué velocidad está yendo, qué cambio/velocidad está utilizando, cuánto combustible
tiene disponible, cuál es la temperatura del motor, cuántas revoluciones por minuto dan las ruedas, cuánta distancia ha recorrido, etc.

## Aplicaciones en el mundo real

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.

## DEFINICIÓN DEL PRODUCTO:
Los Trainers Manager actualmente realizan la información en google docs, lo cual es poco eficiente por la cantidad de postulantes que aplicaron.
La página web que estamos creando se entrega los datos de forma más eficiente a través de un formato que puedan visualizar y manipular la estadística en los cursos y las estudiantes.

## PRINCIPALES USUARIAS:
Principales usuarias: Trainers Manager de Laboratoria.  
Srta. Alejandra  
Srta. Beatriz  

## ENTREVISTAS A LAS TRAINERS MANAGER.
Para llevar a cabo el prototipado del proyecto se entrevistó a las Trainers Manager (TI):  

[ALEJANDRA](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/develop/audios%20de%20entrevista/WhatsApp%20Audio%202018-06-11%20at%201.55.28%20PM.mp4)

### PREGUNTA:
¿Qué datos le ayudarían o quisiera ver en la página web?  
### Respuesta:  
Me sirve ver primero los promedios por clase, para ver como les ha ido a todas, cuánto de porcentaje de lecturas hicieron, cuánto sacaron el quizes, y los ejercicios. También tener correlaciones (mejor resultado en quizzes se relaciona con mejor resultado en ejercicios), y ver de manera particular los resultados de cada estudiante y Finalmente ver los resultados por cursos, para ver si les resulto muy complejo y poder tomar acción con respecto a los resultados.  

[BEATRIZ](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/develop/audios%20de%20entrevista/WhatsApp%20Audio%202018-06-11%20at%203.03.57%20PM.mp4) 

### PREGUNTA 
¿Como llevan actualmente los reportes del LMS?  

### Respuesta:  
Actualmente los reportes del LMS lo llevan en la página de google docs.  

### PREGUNTA 
¿Qué incoveniente tiene al utilizar google docs?  

### Respuesta:  
Por ese medio no pueden hacer comparaciones con respecto a los datos obtenidos, no tienen una perspectiva general de como le va a las estudiantes en los cursos, quizzes o ejercicios.  

## OBJETIVOS DE LOS USUARIOS CON RELACIÓN AL PRODUCTO.

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje, para eso utilizan 

La principal medida de progreso de una estudiante en Laboratoria es su avance completando los proyectos de la Ruta de Aprendizaje y su desempeño en función a la Rúbrica de Niveles Esperados. Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

Por eso los objetivos de los usuarios(TMs) con relación a este producto es:

| **OBJETIVOS** |
|---------------|
| * Permitir visualizar la data del progreso del LMS en un solo lugar. | 
| * Facilitar la toma de decisiones. |
| * Evaluar el proceso de aprendizaje de las estudiantes. |
| * Reportar el progreso de las lecturas leidas, ejercicios completados, notas en quizzes de forma eficiente, tanto  de los resultados de cada estudiante y resultados generales a nivel de cohort. |

## DIAGRAMA DE FLUJO

![Diagrama de Flujo](https://github.com/milian0410/lim-2018-05-bc-core-pm-datadashboard/blob/develop/Imagenes%20readme/diagrama%20de%20lms.jpeg)

## PROTOTIPADO (Proceso de diseño)
BAJA FIDELIDAD
![prototipo baja fidelidad](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/develop/Imagenes%20readme/baja%20fidelidad%202.jpeg) 
ALTA FIDELIDAD
![prototipo alta fidelidad](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/develop/Imagenes%20readme/figma%20en%20gif.gif)

En el prototipo de alta fidelidad se muestra el promedio general del cohort selecionado, 
tambien se ve que al seleccionar a una aqlumna muestra sus porcentajes deneralews y expecificos de sus unidades

![IMAGEN](https://github.com/milian0410/lim-2018-05-bc-core-pm-datadashboard/blob/gh-pages/img/gif/1.jpg)
![IMAGEN2](https://github.com/milian0410/lim-2018-05-bc-core-pm-datadashboard/blob/gh-pages/img/gif/10.jpg)

## IMPLEMENTACIÓN DE LA INTERFAZ DE USUARIO (HTML/CSS/JS)

| Interfaz | Sí o No |
|--------------------------|----------------|
| 1. Permitir al usuario seleccionar un cohort de una lista de cohorts. | ✅
| 2. Al seleccionar un cohort:  |
|- Listar las estudiantes de ese cohort | ✅
| - Para cada estudiante: 
|+ Calcular porcentaje de completitud de todos los _cursos_.| ✅
|+ Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_, y _quizzes_.| ✅
| - Filtrar/buscar estudiantes por nombre. | ✅
| 3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.| ✅
| 4. Incluir pruebas unitarias. | ✅
| Resetear Descifrado | ✅
| Interactuar con un menú | ✅
|   - Ordenar estudiantes por completitud _general  |❌


## IMPLEMENTACIÓN DEL PROYECTO
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6), HTML y CSS. 

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_ y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

| **JavaScript** |
|----------------|
| Estilo |   
| Nomenclatura/semántica |   
| Funciones/modularidad |  
| Estructuras de datos |  
| Tests |  
| **HTML** | 
| **CSS** |  
| DRY |  
| Responsive |  
| **SCM** |  
| Git |  
| GitHub |   
| **CS** |  
| Lógica |  
| Arquitectura |  
| Patrones/paradigmas |  

## PRODUCTO FINAL

Los siguentes videos muestran el producto final; El cual es responsive, posee un menu deplegable que se guarda para no interferir con la vista, tambien muestra los datos de las alumnas no solo de manera general, muestra sus avances por unidades.


![En laptod](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/union/Imagenes%20readme/GIF%20repo1.gif)
![En celular](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-datadashboard/blob/union/Imagenes%20readme/GIF%20repo%202.gif)


|**Creado by Martha Milagros Anticona Zola y Maria Angélica Noriega**|
|---------------------------------------------------------|