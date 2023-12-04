
import{ useState} from'react';
import{ AddCategory,GifGrid} from"./components";


export const ProyectoGif = () => {
  // useState es una función que permite agregar estado de React a componentes funcionales
  // para evitar el problema de no definir valor inicial se le pone One Punch como valor inicial al arreglo
  const[categories,setCategories]=useState(['One Punch']);
  // Definimos una función onAddCategory que toma un argumento newCategory
  const onAddCategory=(newCategory) =>{
    // Si newCategory ya está en la lista de categorías, no hacemos nada y salimos de la función
    if(categories.includes(newCategory)) return;
    // Si newCategory no está en la lista de categorías, la agregamos al principio de la lista
    setCategories([newCategory,...categories]);
  };
  return (
    <>
        <h1>
          {/* titulo */}
            ProyectoGif
        </h1>
        {/* listado de gifs */}
        {/* git item */}

        {/* // Renderizamos el componente AddCategory y le pasamos una función que se activará cuando se agregue una nuevacategoría */}
        <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>
        {/* // Mapeamos las categorías a componentes GifGrid, cada uno con una clave única y una categoría */}
        {categories.map((category)=>(
          <GifGrid key={category}category={category}/>
        ))}
    </>
  );
};



// funcion tradicional
    // function name(params) {
    //     return params +100;
    // }

// funcion de flecha (arrow function)
    // (a) => a+100;    

    

