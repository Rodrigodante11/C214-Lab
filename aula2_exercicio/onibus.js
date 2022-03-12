class Onibus extends Veiculo{
    assentos;

    
    constructor(placa, ano , assentos){
        super(placa,ano);
        this.assentos=assentos;
    }

    setassentos(assentos){
        this.assentos =assentos;
    }

    getassentos(){
        return this.assentos;
    }

    exibirDados(){
        console.log(`placa: ${this.getPlaca()} , ano: ${this.getAno()} , assentos: ${this.getassentos()}`)
    }
}

var onibus1 = new Onibus('AAAAA',2222,40);
onibus1.exibirDados();