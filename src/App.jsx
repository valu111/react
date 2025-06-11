import { Ejercicio01 } from "./components/Ejercicio01"
import { Boton } from "./components/utiles/Boton"
import { BotonCerrarSesion } from "./components/utiles/BotonCerrarSesion"
import { BotonInicio } from "./components/utiles/BotonInicio"
import { Ejercicio02 } from "./components/utiles/Ejercicio02"

function App() {

  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mt-2 text-center alert alerts-succes bg-primary text-white">
                Hola valdo
              </h1>
            </div>
          </div>
          {/*modo llamar exponente externo */}
        <Ejercicio01/>
        <Boton/>
        
        <div className="recuadro-rosa d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mt-5">
        <BotonInicio />
        <BotonCerrarSesion className="mt-3 mt-md-0"/>
        </div>

        <Ejercicio02/>
        </div>
        
      </>
  )
}

export default App




