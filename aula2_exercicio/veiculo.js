class Veiculo{
    placa;
    ano;

    Veiculo(){

    }

    constructor(placa,ano){
        this.placa = placa;
        this.ano= ano;
    }

    setPlaca(placa){
        this.placa =placa;
    }
    setAno(ano){
        this.ano =ano;
    }
    getPlaca(){
        return this.placa;
    }
    getAno(){
        return this.ano;
    }

    exibirDados(){
        console.log(`placa: ${this.getPlaca()} , ano: ${this.getAno()} `)
    }
}

var veiculo1 = new Veiculo('456UUI', 2000);
veiculo1.exibirDados()

var veiculo2 = new Veiculo();
veiculo2.setPlaca("bAAAffA")
veiculo2.setAno("1900")
veiculo2.exibirDados()
veiculo2.setAno(1500)
veiculo2.exibirDados()