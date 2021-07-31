# PracticaJavaScript

## Simulador de Eurocopa

> Se trata de una práctica del Bootcamp de **KeepCoding** de *Introducción a JavaScript*.
>
> El objetivo es realizar un simulador de una Eurocopa, el enunciado de la práctca está en la documentación.
> 
> Se ha realizado solo con los conceptos de **JavaScript** estudiados en clase.
>
> Se ha tratado de poner en práctica el uso a la programación orientada a objetos realizando algunas clases.
>
> El resumen de lo que realiza el programa sería:

- Comenzamos con 24 equipos que se reparten aleatoriamente en 6 grupos de 4 equipos.
- Empieza la Eurocopa, se juega en cada grupo una liga de todos contra todos.
- Se clasifican a octavos de final los 6 primeros, los 6 segundos y los 4 mejores terceros.
- En caso de empate, pasa el de mejor *GolAverage* y en caso de tener el mismo, se elige por orden alfabético.
- Después se juegan octavos teniendo en cuenta varias reglas:
    - Los equipos *locales* serían los 6 primeros y los 2 segundos en cuyos grupos no se haya clasificado el tercero.
    - Los equipos *visitantes* serían los 4 mejores terceros y el resto de segundos.
    - No pueden enfrentarse equipos que hayan estado en el mismo grupo.
    - No hay posibilidad de empate.
- Después se irán jugando consecutivamente los cuartos de final, semifinales, final y un partido de consolación con los perdedores de las semifinales (tercer y cuarto puesto).



