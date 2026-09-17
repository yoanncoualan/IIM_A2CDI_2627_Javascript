class CompteBancaire{
    titulaire
    solde = 0

    constructor(t, s){
        this.titulaire = t
        if(s){
            this.solde = s
        }
    }
    
    crediter(montant){
       this.solde += montant 
       return this.solde;
    }

    debiter(montant){
        this.solde -= montant
        return this.solde;
    }

    getSolde(){
        return this.solde
    }
}

const user1 = new CompteBancaire('John', 1000);

console.log(`${user1.titulaire} possède ${user1.getSolde()}€`)
user1.debiter(80)
console.log(`Nouveau solde : ${user1.getSolde()}€`)
user1.crediter(10)
console.log(`Nouveau solde : ${user1.getSolde()}€`)