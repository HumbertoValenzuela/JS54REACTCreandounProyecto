
// 15. Carga Condicional de Componentes
const Resultado = ({total, plazo, cantidad}) => ( 
        <div className="u-full-width resultado">
          <h2>Resumen</h2>
          <p>La cantidad solicitada es: $ {cantidad}</p>
          <p>A pagar en: $ {plazo} Meses</p>
          <p>Pago Mensual es de :{total / plazo}</p>
          <p>Total a PAgar es: $ {total}</p>
        </div>
     ); 
export default Resultado;