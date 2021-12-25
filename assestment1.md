## Assestment 1
### 1. Proyecto
Repositorio: [https://github.com/bryanmmr/assestment1](https://github.com/bryanmmr/assestment1)  
Deploy en Netlify: [Deploy](https://assestment1-manzano.netlify.app/)
### 2. Preguntas  
**1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?.**  
- **Sprint Planning:** En base al Product Backlog se toman tareas que los miembros crean viables de realizar durante el Sprint.   
- **Daily Sprint:** Review rapida del avance de cada miembro del equipo Scrum y que tarea se van a enfocar durante el dia.  
- **Sprint Review:** Al finalizar cada Sprint se verifica el avance dado, ademas de un posible incremento durante este tiempo.  
- **Sprint Retrospective:** Feedback en base al pasado Sprint y como se puede mejorar el avance durante los siguientes Sprints.  

**2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos 
utilizar.**  
Los Wireframes son sketch, o maquetas que se realizan como prototipos de la estructura y navegacion que tendra el Software a desarrollar. Algunas de las herramientas que podemos usar para crear Wireframes son:
Balsamiq mockups, figma o Draw io.

**3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.** 
- **var**: a diferencia de let y const con "var" se pueden redeclarar variables, ademas de actualizarlas.  
- **let**: permite crear una variable y actualizarla a futuro, una variable creada con let no puede redeclararse.  
- **const**: variables creadas con "const" no pueden actualizarse ni redeclararse, mantienen su valor de forma constante durante la ejecucion del script. 
Ejemplo:   
```
    var variable = "primera declaracion"
    var variable = "segunda declaracion"
    console.log(variable)
    //segunda declaracion

    let variable = "primera declaracion"
    let variable = "segunda declaracion"
    //Error: Variable ya fue declarado
    //Pero si es posible lo siguiente
    variable = "declaracion como actualizacion del valor"
    console.log(variable)
    //declaracion como actualizacion del valor

    const variable = "primera declaracion"
    const variable = "segunda declaracion"
    //Error Variable ya fue declarado
    //A diferencia de let, const no puede actualizar el valor de su variable
    variable = "nueva declaracion"
    //Error: no se puede asignar el valor a una variable constante

    Otra diferencia es que let y const solo son accesible en sus respectivos bloques, mientras que var maneja un scope global o de funcion.
```
**4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?**  
```
git checkout -b rama-1 
//Crea una nueva rama y nos localiza en esa rama
```
```
git branch rama-1 
// Crea una nueva rama, pero nos mantenemos en la rama en la que nos encontrabamos previamente. 
// Para movernos a esa nueva rama usariamos el comando
git checkout rama-1
```

**5. Explicar la diferencia entre git merge y git rebase.**  
Git merge crea un commit merge, preservando todo el log que existia previamente en la rama que se unio. 
Git rebase une el historial a la rama a unirse, creado nuevos commits por cada commit creado previamente en la rama que se unio.

**6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?**  
Pull Request es solicitar un pull de una rama en github respecto a tu rama solicitada para unir los avances o correcciones realizados.
El comando git pull toma elementos de una rama remota a tu repositorio local.

**7. ¿Qué es el Virtual DOM?**  
Es una representacion virtual del DOM (Document Object Model). Mejora la rapidez con la que se actualizan los datos con el verdadero DOM, debido a que se mantiene una representacion de la interfaz en memoria, la cual se sincroniza con el DOM real.

**8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta.**  
[Codepen](https://codepen.io/bryanmmr/pen/Exwwqdj?editors=1100)
