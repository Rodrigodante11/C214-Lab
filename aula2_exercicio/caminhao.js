class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano , eixos){
        super(placa,ano);
        this.eixos=eixos;
    }

    setEixos(eixos){
        this.eixos =eixos;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log(`placa: ${this.getPlaca()} , ano: ${this.getAno()} , eixos: ${this.getEixos()}`)
    }
}

var caminhao1 = new Caminhao('GG22',2005,3);
caminhao1.exibirDados();