//! SOLUCE en utilisant les methods avec des paramètres (utilisés côté template)
//! avec un petit bonus : la methods capterInput et event en paramètre pour capter un event (Native Object Event)
Vue.createApp({
    data(){
        return {
            uneString:'',
            uneStringDeux: '',
        };        
    },
    methods: {
        capterInputUn(eventUn){
            console.log(eventUn);
            this.uneString = eventUn.target.value;
        },
        capterInputDeux(eventDeux){
            console.log(eventDeux);
            this.uneStringDeux = eventDeux.target.value;
        },
        alerte () {
            alert('ça va péter!')
        },
        resetInput() {
            this.uneString = "";
            this.uneStringDeux = "";
    }
}
}).mount('#monApp');