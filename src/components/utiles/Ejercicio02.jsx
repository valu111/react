//rafc
//rafce
//p.titulo-principal.titulo1>span.text-tachado
export const Ejercicio02 = () => {
  //logica de componentes
  //1--variable / constante
  //2--hooks
  //3--funciones
  const nombreProducto = 'smart tv 90"';

  function  agregaACarritoDeCompras (){
    console.log('El producto: ',
        nombreProducto, "se agrego al carrito"
    );
  }


  const eliminarProducto = 'amart tv 90"';
  function eliminarProductoDCarrito (){
    console.log('El porducto: ',
        eliminarProducto, "se ha eliminado del carrito"
    )
  }

    return (
    <>
     <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 - Boton y Funciones
            </h2>
            <hr/>
            </div>
            <button className="w-25 btn btn-primary" onClick={agregaACarritoDeCompras}>
                <i class="bi bi-star-fill"></i>
                <span className="ms-2">
                    Agregar Articulo
                </span>
            </button>

            <button className="w-25 btn btn-center btn-primary" onClick={eliminarProducto}>
                <i class="bi bi-suit-club-fill"></i>
                <span className="ms-2">
                Pagar Articulo
                </span>
            </button>
        </div>
    </>
  );
};
