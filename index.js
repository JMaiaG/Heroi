class Hero {
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade; 
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        if (this.tipo === "mago") {
            ataque = "usando magia";
        } else if (this.tipo === "guerreiro"){
         ataque = "usando espada"   
        } else if (this.tipo === "monge") {
            ataque = "usando artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "usando shuriken"    
        } else {
            ataque = "usou um ataque desconhecido";
        }
        console.log (`O ${this.tipo} atacou ${ataque}`)
        }
    }

    const mago = new Hero("Merlin", 107, "mago");
    const guerreiro = new Hero("He-Man", 35, "guerreiro");
    const monge = new Hero("Kun Lao", 43, "monge");
    const ninja = new Hero ("Naruto", 22, "ninja");

    mago.atacar();
    guerreiro.atacar();
    monge.atacar();
    ninja.atacar();

