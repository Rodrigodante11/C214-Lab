const validate = require('validate.js');
const CalculadoraConstraint=require('./validate');

const Calcular = {
    somar(x,y){
        const validateX= validate({ x,y }, CalculadoraConstraint.calculadoraConstraint);
        if ( validateX !== undefined){
            return 'Error';
        }
        return x+y;
    },
    dividir(x,y){
        const validateX= validate({ x,y }, CalculadoraConstraint.calculadoraConstraint);
        if ( validateX !== undefined){
            return 'Error';
        }
        return x/y;
    },
    subtrair(x,y){
        const validateX= validate({ x,y }, CalculadoraConstraint.calculadoraConstraint);
        if ( validateX !== undefined){
            return 'Error';
        }
        return x-y;
    },
    multiplicar(x,y){
        const validateX= validate({ x,y }, CalculadoraConstraint.calculadoraConstraint);
        if ( validateX !== undefined){
            return 'Error';
        }
        return x*y;
    },
    resto(x,y){
        const validateX= validate({ x,y }, CalculadoraConstraint.calculadoraConstraint);
        if ( validateX !== undefined){
            return 'Error';
        }
        return x%y;
    }
}
module.exports = Calcular;