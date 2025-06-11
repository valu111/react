import '../../css/botones.css';

export const BotonInicio = ({className = ''}) => {
  return (

      <button className={`boton-crear btn btn-success w-auto text-center ${className}`}>

        <span className="ms-2">Crear Cuenta</span>
      </button>

  );
};


