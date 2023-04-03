const app = Vue.createApp({
    data() {
        return {
            nomProduit: '',
            maListe: [],
            afficherListe: true
        };
    },
    methods: {
        ajouterProduit() {
            this.maListe.push(this.nomProduit);
            this.nomProduit = ''; // réinitialiser l'input après l'ajout d'un produit
        },
        supprimerProduit(unIndex) {
            this.maListe.splice(unIndex, 1);
        },
        showList() {
            this.afficherListe = !this.afficherListe;
        },

        supprimerAllProduit() {
            this.maListe = 0;
        },
    }
});
app.mount('#monApp');
